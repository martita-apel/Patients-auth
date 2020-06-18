<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">INICIO</router-link> |
      <router-link to="/login">REGÍSTRATE</router-link>
    </div>

    <hr />

    <b-overlay :show="loading" rounded="lg" variant="light" opacity="0.85">
      <router-view />
    </b-overlay>

    <footer class="fixed">
      <div class="iconos container-fluid py-3">
        <a class="btn-floating btn-fb mx-3 rrss"
          ><i class="fab fa-facebook-f"> </i
        ></a>
        <a class="btn-floating btn-tw mx-3 rrss">
          <i class="fab fa-twitter"> </i>
        </a>
        <a class="btn-floating btn-gplus mx-3 rrss">
          <i class="fab fa-google-plus-g"> </i>
        </a>
        <a class="btn-floating btn-li mx-3 rrss">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </div>
      <div class="dark text-center py-4">
        © 2020 Copyright
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: { ...mapState(["loading"]) },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #2c3e50;
}

#nav {
  padding: 30px;
  letter-spacing: 1px;
  a {
    font-weight: 300;
    color: #ffc600;

    &.router-link-exact-active {
      font-weight: bold;
      color: white;
    }
  }
}

.rrss {
  color: white !important;
  font-size: 2rem;
}

hr {
  width: 15%;
  border-top: 1px solid white !important;
  margin: 6px auto 30px auto !important;
}
.iconos {
  background-color: #202b39;
}
.dark {
  background-color: #171f29 !important;
}
</style>
