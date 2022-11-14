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
    }
}
</script>

<template>

    <div class="search-result-list">
        <div class="movies-list">
            <h1>Film</h1>
            <ul>
                <li v-for="movie in store.resultMovies" :key="movie.id">
                    <CardMovie :movie="movie"/>
                </li>
            </ul>
        </div>
    
        <hr>
    
        <div class="series-list">
            <h1>Serie</h1>
            <ul>
                <li v-for="serie in store.resultSeries" :key="serie.id">
                    <CardSerie :serie="serie"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>