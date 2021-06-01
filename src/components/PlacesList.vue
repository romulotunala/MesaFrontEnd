<template>
  <div
    class="containerPlacesList"
    :style="placesListStyle"
    v-if="token"
  >
    <ul class="placesList">
      <li
        class="placesListItem"
        v-for="place in places"
        :key="place.place_id"
        @click="FETCH_DETAILS_PLACES(place.place_id)"
      >
        {{ place.name }}
        <div
          class="ratingContainer"
        >
          <p class="rating">{{ place.rating || '0' }}</p>
          <p class="stars"
            :style="{'--width': starPercentageRounded(place.rating)}"
          />
          <p class="ratingUsers"
            v-if="place.rating"
          >({{ place.user_ratings_total }})</p>
        </div>
        <span class="vicinity">{{ place.vicinity }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    places: Array,
    showPlacesList: Boolean
  },
  computed: {
    ...mapState(['token']),
    placesListStyle() {
      const info = window.outerWidth > 768 ? '-32%' : '-102%';
      const transition = window.outerWidth <= 768 ? 'none' : undefined;
      return ({
        'right': this.showPlacesList ? '0' : info,
        transition
      })
    },
  },
  methods: {
    ...mapMutations(['FETCH_DETAILS_PLACES']),
    starPercentageRounded(info) {
      return info ? `${(info / 5) * 100}%` : '0';
    }
  }
}
</script>

<style scoped>
.containerPlacesList {
  width: 30%;
  height: 100%;
  background: #FFF;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: #000000F7 0px 1px 4px -1px;
  transition: right .5s;
}
@media(max-width: 480px) {
  .containerPlacesList {
    width: 100%;
    background: #FFFFFF12;
    backdrop-filter: blur(7px);
    display: flex;
    justify-content: flex-end;
  }
}
.placesList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow: auto;
}
@media(max-width: 480px) {
  .placesList {
    width: 80%;
    background: #FFF;
  }
}
.placesListItem {
  width: 100%;
  height: auto;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
  text-align: left;
}
.placesListItem:not(:last-child) {
  border-bottom: .03125rem #ebebeb solid;
}
.placesListItem:hover {
  background: #ebebeb;
}
.ratingContainer {
  display: flex;
  align-items: center;
  font-size: 1rem;
}
.rating,
.ratingUsers {
  color: #555;
  display: inline-block;
}
.stars {
  margin: 0 .5rem;
  position: relative;
  display: inline;
}
.stars::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  width: 100%;
  font-family: 'FontAwesome';
  color: #555;
  white-space: nowrap;
  overflow: hidden;
}
.stars::after {
  content: "\f005 \f005 \f005 \f005 \f005";
  width: var(--width);
  font-family: 'FontAwesome';
  color: #f8ce0b;

  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.vicinity {
  font-size: .75rem;
  color: #555;
  display: block;
}
</style>