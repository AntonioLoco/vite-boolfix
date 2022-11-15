<script>
import { store } from '../store';

import AppCard from './AppCard.vue';

export default{
    name: "AppList",
    data(){
        return{
            store
        }
    },
    components: {
        AppCard,
    },
}
</script>

<template>
    <div class="container py-3" v-if="store.notFounded">
        <h1 class="text-center">Nessuna risultato trovato</h1>
    </div>
    <div class="py-5 container" v-else>
        <div class="text-center" v-if="store.resultMovies.length === 0 && store.resultSeries.length === 0">
            <h1>Effettua una ricerca</h1>
        </div>
        <div class="movies-list" v-if="store.resultMovies.length > 0">
            <div class="title-list py-3">
                <h1 class="text-center">Film</h1>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div class="col mb-4" v-for="movie in store.resultMovies" :key="movie.id">
                    <AppCard :item="movie" />
                </div>
            </div>
        </div>
    
        <div class="series-list" v-if="store.resultSeries.length > 0">
            <div class="title-list py-3">
                <h1 class="text-center">Serie</h1>
            </div>
            <div class="row  row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div class="col mb-4" v-for="serie in store.resultSeries" :key="serie.id">
                    <AppCard :item="serie" />
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