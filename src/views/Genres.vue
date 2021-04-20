<template>
  <div class="page">
    <div class="container-fluid">
      <div class="headline d-flex align-items-center">
        <h5>
          <a @click="back()" style="cursor: pointer" class="text-muted">{{
            name
          }}</a>
        </h5>
        <i class="fas fa-chevron-right mx-2"></i>
        <h1 class="text-white font-weight-bold">
          {{ getGenreObj(id) + " " + name }}
        </h1>
      </div>
    </div>
    <display-data
      :request="`${this.baseUrl}/discover/${category}?api_key=${this.apiKey}&with_genres=${this.id}`"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DisplayData from "@/components/Global/DisplayData.vue";

export default {
  components: { DisplayData },
  data() {
    return {
      name: this.$route.params.category,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["genreList", "baseUrl", "apiKey"]),
    category() {
      let cat = this.name == "Movies" ? "movie" : "tv";
      return cat;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getGenreObj(id) {
      let genres = [];
      let filterGenre = this.genreList.filter((genre) => {
        return genre.id == id;
      });
      filterGenre.forEach((genre) => {
        genres.push(genre.name);
      });
      return genres.join("");
    },
  },
};
</script>
