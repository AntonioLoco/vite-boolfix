<script>
import { store } from '../store';

import CardMovie from './CardMovie.vue';

export default{
    name: "AppList",
    data(){
        return{
            store
        }
    },
    components: {
        CardMovie,
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
    <div class="container" v-if="store.notFounded">
        <h1>Nessuna risultato trovato</h1>
    </div>
    <div class="py-5 container" v-else>
        <div class="movies-list" v-if="store.resultMovies.length > 0">
            <h1 class="text-center py-3">Film</h1>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-5">
                <div class="col" v-for="movie in store.resultMovies" :key="movie.id">
                    <CardMovie 
                        :stars="getStars(movie.vote_average)"
                        :imgLanguage="getImagePath(`../assets/img/${movie.original_language}.png`)" 
                        :imgPoster="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
                        :title="movie.title"
                        :titleOriginal="movie.original_title"
                        :movieLanguage="movie.original_language"
                        :overview="movie.overview"
                        />
                </div>
            </div>
        </div>
    
        <div class="series-list" v-if="store.resultSeries.length > 0">
            <h1 class="text-center py-3">Serie</h1>
            <div class="row  row-cols-2 row-cols-md-3 row-cols-xl-4 g-5">
                <div class="col" v-for="serie in store.resultSeries" :key="serie.id">
                    <CardMovie 
                        :stars="getStars(serie.vote_average)" 
                        :imgLanguage="getImagePath(`../assets/img/${serie.original_language}.png`)" 
                        :imgPoster="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`"
                        :title="serie.name"
                        :titleOriginal="serie.original_name"
                        :movieLanguage="serie.original_language"
                        :overview="serie.overview"
                        />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movies-list,
.series-list{
    margin-bottom: 5em;
}
</style>