<script>
import { store } from '../store';

import CardMovie from './CardMovie.vue';
import CardSerie from './CardSerie.vue';

export default{
    name: "AppList",
    data(){
        return{
            store
        }
    },
    components: {
        CardMovie,
        CardSerie
    },
    methods: {
        getImagePath(imgPath){
            return new URL(imgPath, import.meta.url).href;
        },
        getStars(vote){
            return Math.ceil(vote / 2);
        }
    }
}
</script>

<template>

    <div class="search-result-list">
        <div class="movies-list">
            <h1>Film</h1>
            <ul>
                <li v-for="movie in store.resultMovies" :key="movie.id">
                    <CardMovie :movie="movie" :stars="getStars(movie.vote_average)" :imgLanguage="getImagePath(`../assets/img/${movie.original_language}.png`)" :imgPoster="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"/>
                </li>
            </ul>
        </div>
    
        <hr>
    
        <div class="series-list">
            <h1>Serie</h1>
            <ul>
                <li v-for="serie in store.resultSeries" :key="serie.id">
                    <CardSerie :serie="serie" :stars="getStars(serie.vote_average)" :imgLanguage="getImagePath(`../assets/img/${serie.original_language}.png`)" :imgPoster="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>