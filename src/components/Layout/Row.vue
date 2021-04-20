<template>
  <div class="movies-container mb-5">
    <div class="container-fluid">
      <div class="sec-title mb-3">
        <h2 class="position-relative">{{ title }}</h2>
      </div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in data" :key="item.id">
          <movie-card :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import MovieCard from "@/components/Global/MovieCard.vue";
import "swiper/swiper-bundle.css";
export default {
  props: ["title", "fetchUrl"],
  components: { Swiper, SwiperSlide, MovieCard },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
        breakpoints: {
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        },
      },
      data: null,
    };
  },
  methods: {
    getData() {
      axios
        .get(`https://api.themoviedb.org/3${this.fetchUrl}`)
        .then((response) => {
          this.data = response.data.results;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.swiper-container {
  overflow: visible;
  z-index: -1;
}
.movies-container:hover .swiper-container,
.movies-container:first-child .swiper-container {
  z-index: auto;
}
</style>
