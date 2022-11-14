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
    <div class="container py-3" v-if="store.notFounded">
        <h1 class="text-center">Nessuna risultato trovato</h1>
    </div>
    <div class="py-5 container" v-else>
        <div class="movies-list" v-if="store.resultMovies.length > 0">
            <div class="title-list py-3">
                <h1 class="text-center">Film</h1>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div class="col mb-4" v-for="movie in store.resultMovies" :key="movie.id">
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
            <div class="title-list py-3">
                <h1 class="text-center">Serie</h1>
            </div>
            <div class="row  row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div class="col mb-4" v-for="serie in store.resultSeries" :key="serie.id">
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
.movies-list{
    margin-bottom: 5em;
}
.series-list{
    margin-bottom: 5em;
}
</style>