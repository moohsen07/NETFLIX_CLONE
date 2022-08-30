<template>
  <div class="movies-container mb-5">
    <div class="container-fluid">
      <div class="sec-title mb-3">
        <h2 class="position-relative">{{ title }}</h2>
      </div>
      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in data" :key="item.id">
            <movie-card :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import MovieCard from "@/components/Global/MovieCard.vue";
import "swiper/swiper-bundle.css";
export default {
  props: ["title", "fetchUrl"],
  components: { MovieCard },
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
  mounted() {
    new Swiper(this.$refs.swiper, this.swiperOption);
  },
};
</script>

<style>
.swiper {
  overflow: visible;
  z-index: -1;
}
.movies-container:hover .swiper,
.movies-container:first-child .swiper {
  z-index: auto;
}
</style>
