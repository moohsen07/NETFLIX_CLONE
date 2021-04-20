<template>
  <div
    class="banner d-flex align-items-center"
    :style="{
      backgroundImage: `url('${baseImgUrl}${randomSeries.backdrop_path}')`,
    }"
  >
    <div class="container-fluid">
      <div class="hero position-relative">
        <img src="@/assets/media/netflix_serires.png" width="170px" alt="" />
        <h1>
          {{
            randomSeries.name ||
            randomSeries.title ||
            randomSeries.original_title
          }}
        </h1>
        <p>{{ truncate(randomSeries.overview, 400) }}</p>
        <div class="buttons">
          <button class="bg-white border-0 rounded font-weight-bold mr-4">
            <i class="fas fa-play mr-2"></i> Play
          </button>
          <button class="text-white border-0 rounded font-weight-bold">
            <i class="fas fa-info-circle mr-2"></i> More Info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import requests from "@/requests.js";
export default {
  data() {
    return {
      series: [],
      endPoint: requests.fetchNetflixOriginals,
    };
  },
  computed: {
    ...mapState(["baseImgUrl"]),
    randomSeries() {
      return this.series[Math.floor(Math.random() * this.series.length)];
    },
  },
  methods: {
    truncate(str, n) {
      return str.length ? str.substr(0, n) : str;
    },
    getSeries() {
      axios
        .get(`https://api.themoviedb.org/3${this.endPoint}`)
        .then((response) => {
          this.series = response.data.results;
        });
    },
  },
  created() {
    this.getSeries();
  },
};
</script>

<style>
.banner {
  position: relative;
  height: 90vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 15%,
    rgba(0, 0, 0, 0)
  );
}

.hero h1 {
  font-size: 70px;
  font-weight: bold;
  background-image: url("../../assets/media/texure.jpg");
  background-repeat: repeat-x;
  background-position: 100% 100%;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  letter-spacing: -3px;
  margin-top: -10px;
}
.hero p {
  max-width: 40%;
}
.hero .buttons button {
  font-size: 18px;
  padding: 10px 30px;
}
.hero .buttons button:last-child {
  background-color: rgba(109, 109, 110, 0.7);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 45px;
  }
  .hero p {
    max-width: 100%;
  }
}
</style>
