import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TvShows from "../views/TvShows.vue";
import Movies from "../views/Movies.vue";
import Search from "../views/Search.vue";
import Genres from "../views/Genres.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/TVShows",
    name: "Tv",
    component: TvShows,
  },
  {
    path: "/Movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/:category/genre/:id",
    name: "Genres",
    component: Genres,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
