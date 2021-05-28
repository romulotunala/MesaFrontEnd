<template>
  <div class="mapContainer">
    <div
      class="google-map"
      ref="googleMap"
    ></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { fetchBounds, fetchPlaces } from '../dataFlow/map-api';

// Assets
import myPin from '../assets/pin.svg';

export default {
  data() {
    return {
      google: null,
      map: null,
      mapConfig: {        
        zoom: 8,
        minZoom: 2,
        // maxZoom: 8,
        center: this.center ||  { lat: -22.908333, lng: -43.196388 }
      },
      apiKey:"AIzaSyD35GjVq94pugyIK0H69xL8lXMFw4NSRbI",
      center: null,
      radius: null,
      bounds: null,
      sizeMap: {
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight - 80}px`
      }
    };
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      libraries: ['geometry'],
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap();
  },
  // async beforeUpdate() {},
  methods: {
    getGeolocation() {
      if (!navigator.geolocation) {
        // Geolocation is not supported by your browser
        return;
      }
      const sucess = (position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.getBounds(`${position.coords.latitude},${position.coords.longitude}`);
        this.google.maps.event.addListener(this.map, 'bounds_changed', () => {
          this.test();
        })
      };
      const error = () => {
      navigator.permissions.query({ name: 'geolocation' })
        .then(res => {
          res.state === 'prompt' && this.setShowLocationButton(true);
          res.state === 'denied' && this.setShowLocationButton(false);
        })
      };
      navigator.geolocation.getCurrentPosition(sucess, error)
    },
    initializeMap() {
      this.getGeolocation();
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },    
    async test() {
      const bounds = this.map.getBounds();
      // console.log('test', bounds);
      const northeast = bounds.getNorthEast();
      // const southwest = bounds.getSouthWest();

      // Definindo raio
      const center = new this.google.maps.LatLng(this.center.lat, this.center.lng);
      const ne = new this.google.maps.LatLng(
        northeast.lat(),
        northeast.lng()
      );
      this.radius = this.google.maps.geometry.spherical.computeDistanceBetween(
        center, ne
      );
    },
    async getBounds(info) {
      const data = await fetchBounds(info);
      // Definindo raio
      const center = new this.google.maps.LatLng(this.center.lat, this.center.lng);
      const northeast = new this.google.maps.LatLng(
        data.results[0].geometry.viewport.northeast.lat,
        data.results[0].geometry.viewport.northeast.lng
      );
      this.radius = this.google.maps.geometry.spherical.computeDistanceBetween(
        center, northeast
      );
      // Ajustando zoom
      const bounds = {
        north: data.results[0].geometry.viewport.northeast.lat,
        east: data.results[0].geometry.viewport.northeast.lng,
        south: data.results[0].geometry.viewport.southwest.lat,
        west: data.results[0].geometry.viewport.southwest.lng
      }
      this.map.fitBounds(bounds);
      if(this.map.getZoom() > 16) {
        this.map.setZoom(16);
      }
    },
  },
  watch: {
    async center(val) {
      if(val) {
        const marker = new this.google.maps.Marker({
          position: val,
          icon: {
            url: myPin,
            scaledSize: new this.google.maps.Size(50, 50)
          },
        });
        marker.setMap(this.map);
        
      }
    },
    async radius(val) {
      console.log('radius', val);
      const places = await fetchPlaces({
        ...this.center,
        radius: val
      });
      console.log('places', places.results);
      places.results
      .filter(i => i.business_status?.toUpperCase() === "OPERATIONAL")
      .forEach(place => {
        const position = new this.google.maps.Marker({
          position: place.geometry.location,
          title: place.name
        })
        position.setMap(this.map);
      })
    }
  }
};
</script>

<style scoped>
.mapContainer {
  width: 100vw;
  height: calc(100vh - 5rem);
}
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
