<template>
  <div class="base-navbar fixed-top" ref="nav">
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-lg navbar-light px-0 justify-content-start"
      >
        <router-link
          class="navbar-brand align-self-center mr-lg-4 mr-2"
          :to="{ name: 'Home' }"
        >
          <img src="@/assets/media/logo.png" width="100px" alt="" />
        </router-link>

        <ul class="d-none d-lg-flex navbar-nav flex-row">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Tv' }">
              TV Shows
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Movies' }">
              Movies
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'New&Pop' }">
              New & Popular
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'MyList' }">
              My List
            </router-link>
          </li>
        </ul>

        <div class="dropdown d-block d-lg-none">
          <span
            class="dropdown-toggle"
            id="navbarScrollingDropdown"
            role="button"
            data-toggle="dropdown"
            >Browse
          </span>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'Home' }">
                Home
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'Tv' }">
                TV Shows
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'Movies' }">
                Movies
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'New&Pop' }">
                New & Popular
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'MyList' }">
                My List
              </router-link>
            </li>
          </ul>
        </div>

        <div class="icons d-flex align-items-center ml-auto">
          <div :class="{ active: searchBar }" class="search position-relative">
            <input
              v-model.trim="search"
              ref="searchField"
              @keypress.enter="reDirect(search)"
              type="text"
              placeholder="Titles, People, Genres"
            />
            <i @click="openSearchBar" class="fas fa-search"></i>
          </div>
          <i class="fas fa-gift"></i>
          <i class="fas fa-bell"></i>
          <div class="user-img">
            <img class="rounded" src="@/assets/media/user.png" alt="" />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      searchBar: false,
    };
  },

  methods: {
    openSearchBar() {
      this.searchBar = true;
      window.setTimeout(() => this.$refs.searchField.focus(), 100);
    },
    reDirect(q) {
      if (!window.location.href.includes("search")) {
        this.$router.push({ path: "/search", query: { q } });
      } else {
        this.$router.push({ path: "/search", query: { q } });
        window.location.reload();
      }
      this.search = "";
      this.searchBar = false;
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.$refs.nav.style.backgroundColor = "#141414";
      } else {
        this.$refs.nav.style.background = `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0)
  )`;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.base-navbar {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  transition: 0.5s ease-in-out;
}
.navbar .navbar-nav li a.nav-link {
  font-size: 13px;
  color: #fff;
  padding-right: 10px;
}
.navbar .navbar-nav li a.nav-link:hover {
  color: #fff;
}
.nav-link.router-link-exact-active {
  color: #fff !important;
  font-weight: bold;
  transform: scale(1.1);
}
/* dropdown menu */
.dropdown .dropdown-menu {
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  border-top: 1px solid #fff;
  padding-top: 0;
  text-align: center;
}
.dropdown .dropdown-menu .dropdown-item {
  font-weight: bold;
  font-size: 13px;
  color: #aaa;
  padding: 10px 50px;
  transition: 0.5s;
}
.dropdown .dropdown-menu .dropdown-item:hover {
  background-color: #181818;
}
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 7px solid;
  border-color: transparent transparent #aaa transparent;
}
/* dropdown menu */
.navbar .icons i {
  color: #fff;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
}
.navbar .search input {
  outline: none;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 1px solid #ccc;
  margin-right: 20px;
  padding: 5px 35px;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

.navbar .search i {
  position: absolute;
  top: 10px;
  right: 10px;
  transition: 0.5s ease-in-out 0.05s;
}
.navbar .search.active input {
  width: fit-content;
  opacity: 1;
  visibility: visible;
}
.navbar .search.active i {
  transform: translateX(-230px);
}
/* Media Query */
@media (max-width: 768px) {
  .base-navbar .navbar-brand img {
    width: 70px;
  }
  .base-navbar span,
  .base-navbar i {
    font-size: 12px !important;
  }
}
</style>
