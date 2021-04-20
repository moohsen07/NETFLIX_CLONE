<template>
  <div class="home">
    <banner />
    <main>
      <row style="margin-top: -70px" title="TV Dramas" :fetchUrl="tvDrama" />
      <row title="Trending Now" :fetchUrl="trending" />
      <row title="Popular On Netflix" :fetchUrl="popular" />
      <row title="Action & Adventure" :fetchUrl="actionMovies" />
      <row title="Comedies" :fetchUrl="comedyMovies" />
      <row title="Horros Movies" :fetchUrl="horrorMovies" />
      <row title="Romance Movies" :fetchUrl="romanceMovies" />
      <row title="Documentaries" :fetchUrl="documentaries" />
    </main>
  </div>
</template>

<script>
import Banner from "@/components/Layout/Banner.vue";
import Row from "@/components/Layout/Row.vue";
import requests from "@/requests.js";
export default {
  components: { Banner, Row },
  data() {
    return {
      popular: requests.fetchPopular,
      tvDrama: requests.fetchTvDrama,
      trending: requests.fetchTrending,
      topRated: requests.fetchTopRated,
      actionMovies: requests.fetchActionMovies,
      comedyMovies: requests.fetchComedyMovies,
      horrorMovies: requests.fetchHorrorMovies,
      romanceMovies: requests.fetchRomanceMovies,
      documentaries: requests.fetchDocumentaries,
    };
  },
};
</script>

<style></style>
