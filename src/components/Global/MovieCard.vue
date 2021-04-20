<template>
  <div class="item-card" @mouseover="handleHover($event)">
    <img
      class="w-100 h-100 rounded"
      :src="`${baseImgUrl}${item.backdrop_path || item.poster_path}`"
      alt="No Poster Avillable"
    />
    <div class="inner-hover shadow rounded p-3">
      <h6>{{ item.name || item.title }}</h6>

      <div class="card-icons d-flex position-relative">
        <span>
          <i class="fas fa-play"></i>
        </span>
        <span data-tooltip="Add To Wichlist">
          <i class="fas fa-plus"></i>
        </span>
        <span data-tooltip="I Like This">
          <i class="far fa-thumbs-up"></i>
        </span>
        <span data-tooltip="Not for Me">
          <i class="far fa-thumbs-down"></i>
        </span>
        <span class="info-btn" data-tooltip="More Info">
          <i class="fas fa-angle-down"></i>
        </span>
      </div>
      <div class="meta-data">
        <span class="text-success">98% Match</span>
        <span class="border px-1" v-if="item.adult">+18</span>
        <span class="border px-1" v-else>+13</span>
      </div>
      <div class="genres">
        <span
          class="position-relative mr-2"
          v-for="genre in item.genre_ids"
          :key="genre"
        >
          {{ getGenreObj(genre) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["item"],
  computed: {
    ...mapState(["baseImgUrl", "genreList"]),
  },
  methods: {
    handleHover(e) {
      const left = 275,
        right = window.innerWidth - 275;
      let el = e.target.parentNode,
        parentEl = el.parentNode,
        checkEl = el.classList.contains("item-card") ? el : parentEl;
      if (e.pageX <= left) {
        checkEl.style.transformOrigin = "left bottom";
      } else if (e.pageX >= right) {
        checkEl.style.transformOrigin = "right bottom";
      }
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
.item-card {
  position: relative;
  height: 140px;
  transform-origin: bottom;
  transition: transform 0.5s ease 0.1s;
  cursor: pointer;
}

.item-card:hover {
  transform: scale(1.6);
  box-shadow: 10px 10px 10px var(--bg-main);
  z-index: 10;
}

@media (max-width: 500px) {
  .item-card:hover {
    transform: scale(1.3);
  }
}
/* Inner-Hover */
.inner-hover {
  position: relative;
  background-color: #181818;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
.item-card:hover .inner-hover {
  opacity: 1;
  visibility: visible;
}
.inner-hover::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 0;
  width: 100%;
  height: 15px;
  background: linear-gradient(
    to top,
    rgba(18, 18, 18, 0.5) 30%,
    rgba(0, 0, 0, 0)
  );
}
.item-card .inner-hover h6 {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 0;
  transform: translateX(-30px);
  opacity: 0;
  transition: 0.3s ease 0.3s;
}

.item-card:hover h6 {
  transform: translateY(0);
  opacity: 1;
}

.inner-hover .card-icons span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  color: #000;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 10px;
  margin-right: 5px;
  border: 1px solid;
  cursor: pointer;
  transition: 0.5s ease;
}
.inner-hover .card-icons span.info-btn {
  position: absolute;
  right: 0;
  background-color: var(--bg-main);
  color: #ccc;
}
.inner-hover .card-icons span:not(:first-child):hover {
  background-color: var(--bg-main);
  color: #fff;
}
.inner-hover .card-icons span:not(:first-child)::before {
  content: attr(data-tooltip);
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  padding: 5px 10px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #ccc;
  color: #141414;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s ease;
}
.inner-hover .card-icons span:not(:first-child)::after {
  content: "";
  position: absolute;
  top: -17px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid;
  border-color: #ccc transparent transparent transparent;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
}
.inner-hover .card-icons span:not(:first-child):hover::before,
.inner-hover .card-icons span:not(:first-child):hover::after {
  opacity: 1;
  visibility: visible;
}
.inner-hover .meta-data h6 {
  font-size: 12px;
}
.inner-hover span {
  font-weight: bold;
  font-size: 10px;
  margin-right: 5px;
}
.inner-hover .genres span:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -4px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #ccc;
}
</style>
