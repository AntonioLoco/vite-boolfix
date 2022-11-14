<script>
import axios from "axios";
import { store } from "./store";

import AppLogo from "./components/AppLogo.vue";
import AppSearchBar from "./components/AppSearchBar.vue";
import AppList from "./components/AppList.vue";
import AppLoader from "./components/AppLoader.vue";

export default{
  data(){
    return {
      store
    }
  },
  components: {
    AppLogo,
    AppSearchBar,
    AppList,
    AppLoader
  },
  methods: {
    getSearch(){
      this.store.notFounded = false;
      this.store.loading = true;
      console.log(this.store.loading);
      // Film
      axios
        .get(this.store.apiMovieURL, { params: this.store.apiParams })
        .then( (resp) => {
          console.log(resp.data.results);
          this.store.resultMovies = resp.data.results;
          console.log(this.store.resultMovies, "Result film");
        })
        .catch( (error) => {
          console.log("Error", error);
        })
        .finally( () => {
          console.log("Chiamata terminata film");
          console.log("Inizio chiamata serie");
          // Serie
          axios
            .get(this.store.apiSerieURL, { params: this.store.apiParams })
            .then( (resp) => {
              console.log(resp.data.results);
              this.store.resultSeries = resp.data.results;
              console.log(this.store.resultSeries, "Result Serie");
            })
            .catch( (error) => {
              console.log("Error", error);
            })
            .finally( () => {
              console.log("Chiamata terminata serie");
              this.store.loading = false;
              console.log(this.store.loading);
              if(this.store.resultMovies.length === 0 && this.store.resultSeries.length === 0){
                this.store.notFounded = true;
              }
            })
        })
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center py-3">
      <AppLogo />
      <AppSearchBar @btnSearch="getSearch"/>
    </div>
  </header>

  <main>
    <AppLoader v-if="store.loading" />
    <AppList v-else/>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
