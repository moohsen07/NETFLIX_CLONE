<template>
  <div class="dis-data mt-5">
    <div class="container-fluid">
      <div class="row">
        <div
          v-for="item in data"
          :key="item.id"
          class="col-6 col-md-4 col-lg-3 col-xl-2 mb-5"
        >
          <movie-card :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/Global/MovieCard.vue";
export default {
  components: { MovieCard },
  props: ["request"],
  data() {
    return {
      data: [],
      page: 1,
      observer: null,
    };
  },
  methods: {
    getData() {
      axios.get(`${this.request}&page=${this.page++}`).then((response) => {
        this.data = [...this.data, ...response.data.results];
      });
    },
  },

  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.getData();
      }
    });
    this.observer.observe(document.querySelector("footer"));
  },
};
</script>
