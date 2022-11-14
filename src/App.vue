<script>
import axios from "axios";
import { store } from "./store";

import AppSearchBar from "./components/AppSearchBar.vue";
import AppList from "./components/AppList.vue";

export default{
  data(){
    return {
      store
    }
  },
  components: {
    AppSearchBar,
    AppList
  },
  methods: {
    getSearch(){
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
            })
        })
    }
  }
}
</script>

<template>
  <header>
    <AppSearchBar @btnSearch="getSearch"/>
  </header>

  <main>
    <AppList />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>
