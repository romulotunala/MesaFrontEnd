<template>
  <div class="mapContainer">
    <img
      class="loading"
      v-if="isFetching"
      :src="loading" alt=""
    />
    <SelectedPlace
      v-if="$store.state.place"
    />
    <div class="containreMap">
      <div
        class="google-map"
        ref="googleMap"
      >
      </div>
      <button
        class="listButton"
        :style="listButtonStyle"
        @click="setShowPlacesList"
        v-if="token"
      >
        {{ buttonLable }}
      </button>
    </div>
    <PlacesList
      :places="places"
      :showPlacesList="showPlacesList"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GoogleMapsApiLoader from "google-maps-api-loader";
import { fetchBounds, fetchPlaces } from '../dataFlow/map-api';
import SelectedPlace from './SelectedPlace.vue';
import PlacesList from './PlacesList.vue';

// Assets
import myPin from '../assets/pin.svg';
import loading from '../assets/loading.svg'

export default {
  components: {
    SelectedPlace,
    PlacesList
  },
  data() {
    return {
      loading,
      isFetching: false,
      isError: false,
      google: null,
      map: null,
      mapConfig: {
        zoom: 8,
        minZoom: 2,
        // maxZoom: 8,
        center: this.center ||  { lat: -22.908333, lng: -43.196388 }
      },
      apiKey:"AIzaSyD35GjVq94pugyIK0H69xL8lXMFw4NSRbI",
      yourLocation: null,
      center: null,
      radius: null,
      bounds: null,
      sizeMap: {
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight - 80}px`
      },
      places:[],
      showPlacesList: false,
      starPercentage: {}
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
  computed: {
    ...mapState(['token']),
    listButtonStyle() {
      const mobile = window.outerWidth <= 768;
      if(mobile) {
        if(this.showPlacesList) {
          return ({
            'right': 'auto',
            'left': '.625rem',
            'transition': 'none'
          });
        } else {
          return ({
            'left': 'auto',
            'right': '.625rem',
            'transition': 'none'
          });
        }
      } else {
        return ({
          'right': this.showPlacesList ? 'calc(30% + .625rem)' : '.625rem'
        });
      }
    },
    buttonLable() {
      return this.showPlacesList ? 'X' : 'Ver lista'
    }
  },
  methods: {
    getGeolocation() {
      if (!navigator.geolocation) {
        // Geolocation is not supported by your browser
        return;
      }
      const sucess = (position) => {
        this.yourLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.center={
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.getBounds(`${position.coords.latitude},${position.coords.longitude}`);
        this.google.maps.event.addListener(
          this.map,
          'tilesloaded',
          async () => {
            await this.setCenter();
            await this.setCurrentBounds();
            await this.setRadius();
          }
        )
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
    async setCenter() {
      const centerMap = await this.map.getCenter();
      this.center = {
        lat: centerMap.lat(),
        lng: centerMap.lng()
      }
    },
    async setCurrentBounds() {
      const currentBounds = await this.map.getBounds();
      const northeast = await currentBounds.getNorthEast();
      const southwest = await currentBounds.getSouthWest();

      const ne = new this.google.maps.LatLng(
        northeast.lat(),
        northeast.lng()
      );
      const sw = new this.google.maps.LatLng(
        southwest.lat(),
        southwest.lng()
      )

      this.bounds = {
        north: ne.lat,
        east: ne.lng,
        south: sw.lat,
        west: sw.lng,
      }
    },
    async fitBounds(info) {
      await this.map.fitBounds(info || this.bounds);
      if(this.map.getZoom() > 16) {
        this.map.setZoom(16);
      }
    },
    async setRadius(info) {
      const center = new this.google.maps.LatLng(this.center);

      const bounds = info || this.bounds;
      const northeast = {
        lat: bounds.north,
        lng: bounds.east
      };
      this.radius = this.google.maps.geometry.spherical.computeDistanceBetween(
        center, northeast
      );
    },
    async getBounds(info) {
      const data = await fetchBounds(info);

      const bounds = {
        north: data.results[0].geometry.viewport.northeast.lat,
        east: data.results[0].geometry.viewport.northeast.lng,
        south: data.results[0].geometry.viewport.southwest.lat,
        west: data.results[0].geometry.viewport.southwest.lng
      }
      this.setRadius(bounds);
      this.fitBounds(bounds);
    },
    setShowPlacesList() {
      this.showPlacesList = !this.showPlacesList;
    },
  },
  watch: {
    yourLocation(val) {
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
      let places;
      this.isFetching = true;
      this.isError = false;
      try {
        places = await fetchPlaces({
          ...this.center || this.yourLocation,
          radius: val
        });
      }
      catch(e) {
        this.isFetching = false;
        this.isError = true;
        console.log(e);
      }
      finally {
        this.places = [];
        places.results
        .filter(i => i.business_status?.toUpperCase() === "OPERATIONAL")
        .forEach(place => {
          this.places.push(place);
          const position = new this.google.maps.Marker({
            position: place.geometry.location,
            title: place.name
          })
          position.setMap(this.map);
        });
        this.isFetching = false;
      }
    }
  }
};
</script>

<style scoped>
.mapContainer {
  width: 100vw;
  height: calc(100vh - 5rem);
  position: relative;
  display: flex;
}
.loading {
  width: 100%;
  height: 100%;
  padding: 40vh 45vh;
  background: #FFFFFF12;
  backdrop-filter: blur(7px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.containreMap {
  width: 100%;
  min-height: 100%;
  position: relative;
}
.listButton {
  min-width: 2.8125rem;
  height: 2.5rem;
  padding: 0 1.0625rem;
  cursor: pointer;
  border: none;
  box-shadow: #000000F7 0px 1px 4px -1px;
  background: #555;
  vertical-align: middle;
  color: #FFF;
  font-size: 1.125rem;
  position: absolute;
  top: .625rem;
  right: .625rem;
  z-index: 5;
  transition: right .5s;
}
.listButton:hover {
  background: #000;
}
@media(max-width: 480px) {
  .listButton:hover {
    background: #555;
  }
}
.google-map {
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
