<template>
  <div class="sub-header">
    <div class="container-fluid">
      <div class="sub-header-wrapper d-flex">
        <h2 class="font-weight-bold text-white">{{ title }}</h2>
        <div class="select-genre my-auto position-relative">
          <div
            class="label d-flex justify-content-between"
            @click="openSubMenu = !openSubMenu"
          >
            <div class="font-weight-bold">Genres</div>
            <i class="fas fa-sort-down"></i>
          </div>
          <transition name="sub-menu" mode="out-in">
            <div
              v-if="openSubMenu"
              class="sub-menu d-flex rounded position-absolute"
            >
              <ul>
                <li v-for="genre in genreList.slice(0, 7)" :key="genre.id">
                  <router-link
                    :to="{
                      name: 'Genres',
                      params: { category: title, id: genre.id },
                    }"
                  >
                    {{ genre.name }}
                  </router-link>
                </li>
              </ul>
              <ul>
                <li v-for="genre in genreList.slice(7, 14)" :key="genre.id">
                  <router-link
                    :to="{
                      name: 'Genres',
                      params: { category: title, id: genre.id },
                    }"
                  >
                    {{ genre.name }}
                  </router-link>
                </li>
              </ul>
              <ul>
                <li v-for="genre in genreList.slice(14)" :key="genre.id">
                  <router-link
                    :to="{
                      name: 'Genres',
                      params: { category: title, id: genre.id },
                    }"
                  >
                    {{ genre.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title"],
  data() {
    return {
      openSubMenu: false,
    };
  },
  computed: {
    ...mapState(["genreList"]),
  },
};
</script>

<style>
.select-genre {
  margin-left: 50px;
  color: #fff;
}
.select-genre .label {
  background-color: #000;
  border: 1px solid #fff;
  width: 120px;
  padding: 2px 10px;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
}
.sub-menu {
  background-color: rgba(0, 0, 0, 0.9);
  font-size: 13px;
  padding: 10px;
  z-index: 1000;
}
.sub-menu ul {
  width: max-content;
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 0px 50px 0px 0px;
}
.sub-menu ul li {
  padding-bottom: 4px;
}
.sub-menu ul li a {
  color: #fff;
}

/* sub-menu transition */

.sub-menu-enter-active,
.sub-menu-leave-active {
  transition: opacity 0.2s ease 150ms;
}

.sub-menu-enter,
.sub-menu-leave-to {
  opacity: 0;
}
</style>
