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
    <div class="message-alert" v-if="store.notFounded">
        <h1 class="text-center">Nessuna risultato trovato</h1>
    </div>
    <div class="main-list" v-else>
        <div class="message-alert" v-if="store.resultMovies.length === 0 && store.resultSeries.length === 0">
            <h1>Effettua una ricerca</h1>
        </div>

        <div class="container" v-else>
            <div class="movies-list" v-if="store.resultMovies.length > 0">
                <div class="title-list py-5">
                    <h1 class="text-center">Film</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div class="col mb-4" v-for="movie in store.resultMovies" :key="movie.id">
                        <AppCard :item="movie" />
                    </div>
                </div>
            </div>
        
            <div class="series-list" v-if="store.resultSeries.length > 0">
                <div class="title-list py-5">
                    <h1 class="text-center">Serie</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div class="col mb-4" v-for="serie in store.resultSeries" :key="serie.id">
                        <AppCard :item="serie" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.message-alert{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #737373;
}

.main-list{
    width: 100%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar{
        display: none;
    }

    .movies-list{
        margin-bottom: 6em;
    }

    .title-list{
        color: red;
        h1{
            font-size: 4rem;
        }
    }
}
</style>