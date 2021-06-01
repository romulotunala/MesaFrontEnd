<template>
  <div class="overlayer">
    <div class="modal">
      <button class="closeButton fa fa-times" @click="CLEAR_PLACE" />
  
      <a class="title"
        :href="place.website"
        target="_blank"
      >
        {{ place.name }}
        <em class="fa fa-external-link linkIcon" />
      </a>

      <p class="address">
        <em class="fa fa-map-marker" />        
        {{ place.formatted_address }}
      </p>

      <a class="contact"
        :href="`tel:${place.formatted_phone_number}`"
      >
        <em class="fa fa-phone" />
        {{ place.formatted_phone_number }}
      </a>
    
      <p class="openNow">
        <em class="fa fa-clock-o" />
        {{ place.opening_hours.open_now ? 'Aberto' : 'Fechado'}}
        <a href="#" class="fa fa-angle-down" @click="handleWeekdays" />
      </p>
      <ul class="weekdaysList" :style="weekdays">
        <li
          v-for="(item, index) in place.opening_hours.weekday_text"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <div class="containerRating" v-if="place.reviews">
        <div class="ratings">
          <h3>{{ place.rating }}</h3>
          <p class="stars"
            :style="{
              '--width': starPercentageRounded(place.rating),
              '--top': '.125rem'
            }"
          />
        </div>
        <ul class="reviews">
          <li v-for="(review, index) in place.reviews" :key="index">
            <h3>
              {{ review.author_name }} |
              <span class="stars"
                :style="{
                  '--width': starPercentageRounded(review.rating),
                  'font-size': '.75rem',
                  '--top': '.0625rem'
                }"
              />
            </h3>
            <p>{{ review.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      isOpenWeekdays: false
    }
  },
  computed: {
    ...mapState(['place']),
    weekdays() {
      return this.isOpenWeekdays
        ? {'height': 'auto'}
        : {'height': '0'}

    }
  },
  methods: {
    ...mapMutations(['CLEAR_PLACE']),
    starPercentageRounded(info) {
      return info ? `${(info / 5) * 100}%` : '0';
    },
    handleWeekdays() {
      this.isOpenWeekdays = !this.isOpenWeekdays
    }
  }
}
</script>

<style scoped>
  .overlayer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF8;
  }
  .modal {
    width: 80%;
    max-height: 90%;
    padding: 2rem;
    border-radius: .1875rem;
    box-shadow: #000000F7 0px 1px 4px -1px;
    background: #FFF;
    position: relative;
  }
  .closeButton {
    padding: .9rem;
    background: none;
    border: none;
    color: #555;
    position: absolute;
    top: 0;
    right: 0;
  }
  .title {
    font-size: 2rem;
    text-decoration: none;
    display: inline-block;
    color: #000;
  }
  .linkIcon {
    font-size: 1rem;
    color: inherit;
  }
  .address {
    margin: .5rem 0;
  }
  .contact {
    margin: .5rem 0;
    font-size: 1rem;
    color: #000;
    text-decoration: none;
  }
  .openNow {
    margin: .5rem 0;
  }
  .fa-angle-down {
    font-size: 1.3rem;
    text-decoration: none;
    color: #000;
    vertical-align: middle;
  }
  .weekdaysList {
    overflow: hidden;
  }
  .weekdaysList li {
    margin: .5rem 0;
  }
  .containerRating {
    display: flex;
  }
  @media (max-width: 480px) {
    .containerRating {
      flex-direction: column;
    }
  }
  .ratings {
    width: auto;
  }
  .ratings h3 {
    font-size: 6rem;
    font-weight: lighter;
  }
  .stars {
    font-size: 1.7rem;
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
    top: var(--top);
    left: 0;
    overflow: hidden;
  }
  .reviews {
    width: 100%;
    max-height: 12.5rem;
    padding: 0;
    overflow: auto;
  }
  @media (max-width: 480px) {
    .reviews {
      width: calc(100% + 2rem);
      padding-right: 2rem;
    }
  }
  .reviews::-webkit-scrollbar {
    display: initial;
    width: .5rem;
  }
  .reviews::-webkit-scrollbar-track {
    background-color: #E8E8EA66;
  }
  .reviews::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: #555;
  }
  .reviews li {
    padding: .5rem;
  }
  .reviews li:not(:last-child) {
    border-bottom: .03125rem solid #5558;
  }
  .reviews li p {
    padding: .5rem 0;
    font-size: .75rem;
    line-height: 1rem;
    color: #555;
  }
</style>