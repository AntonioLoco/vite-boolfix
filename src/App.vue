<script>
import axios from "axios";
import { store } from "./store";

import AppLogo from "./components/AppLogo.vue";
import AppSearch from "./components/AppSearch.vue";
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
    AppSearch,
    AppList,
    AppLoader
  },
  methods: {
    getSearch(){
      //Imposto il not found a false e il caricamento a true
      this.store.notFounded = false;
      this.store.loading = true;

      //Svuoto i filtri generi
      this.store.filterMovies = "";
      this.store.filterSeries = "";

      //Effettuo le chiamate
      this.getMovies();
      this.getSeries();


      setTimeout(() => {
          //Controllo se non è stato trovato nulla
          if(this.store.resultMovies.length === 0 && this.store.resultSeries.length === 0){
            this.store.notFounded = true;
          }

          //Termino il caricamento
          this.store.loading = false;
      }, 1000);
      
    },
    getMovies(){
      axios
        .get(this.store.apiMovieURL, { params: this.store.apiParams })
        .then( (resp) => {
          this.store.resultMovies = resp.data.results;
        })
        .catch( (error) => {
          console.log("Error", error);
        })
        .finally( () => {
          this.getGenresMovie();
          this.getMovieActor();
        })

    },
    getSeries(){
      axios
        .get(this.store.apiSerieURL, { params: this.store.apiParams })
        .then( (resp) => {
          this.store.resultSeries = resp.data.results;
        })
        .catch( (error) => {
          console.log("Error", error);
        })
        .finally( () => {
          this.getGenresSeries();
          this.getSerieActor();
        })

    },
    getGenresMovie(){
      this.store.genresMovie = [];
      const apiURL =  `${this.store.apiGenresUrl}movie/list`;
      const params = {
        api_key: this.store.apiParams.api_key
      }

      axios
        .get( apiURL, { params })
        .then( (resp) => {
          for(let i = 0; i < resp.data.genres.length; i++){
            for(let j = 0; j < this.store.resultMovies.length; j++){
              if((this.store.resultMovies[j].genre_ids).includes(resp.data.genres[i].id)){
                this.store.genresMovie.push(resp.data.genres[i]);
                break;
              }
            }
          }
        })
        .catch( (error) => {
          console.log("Error", error);
        })
    },
    getGenresSeries(){
      this.store.genresSeries = [];
      const apiURL =  `${this.store.apiGenresUrl}tv/list`;
      const params = {
        api_key: this.store.apiParams.api_key
      }

      axios
        .get( apiURL, { params })
        .then( (resp) => {
          for(let i = 0; i < resp.data.genres.length; i++){
            for(let j = 0; j < this.store.resultSeries.length; j++){
              if((this.store.resultSeries[j].genre_ids).includes(resp.data.genres[i].id)){
                this.store.genresSeries.push(resp.data.genres[i]);
                break;
              }
            }
          }
        })
        .catch( (error) => {
          console.log("Error", error);
        })
    },
    getMovieActor(){
      const params = {
        api_key: this.store.apiParams.api_key
      }

      for(let i = 0; i < this.store.resultMovies.length; i++){
        const idMovie = this.store.resultMovies[i].id;
        const apiURL = `https://api.themoviedb.org/3/movie/${idMovie}/credits`;

        axios
          .get(apiURL, { params })
          .then( (resp) => {
            this.store.resultMovies[i].cast = resp.data.cast;
          })
          .catch( (err) => {
            console.log(err);
          })
      }
    },
    getSerieActor(){
      const params = {
        api_key: this.store.apiParams.api_key
      }

      for(let i = 0; i < this.store.resultSeries.length; i++){
        const idSerie = this.store.resultSeries[i].id;
        const apiURL = `https://api.themoviedb.org/3/tv/${idSerie}/credits`;

        axios
          .get(apiURL, { params })
          .then( (resp) => {
            this.store.resultSeries[i].cast = resp.data.cast;
          })
          .catch( (err) => {
            console.log(err);
          })
      }
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center py-3">
      <AppLogo />
      <AppSearch @btnSearch="getSearch"/>
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
