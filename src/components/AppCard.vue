<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    name: "AppCard",
    props: {
        item: Object
    },
    computed: {
        getName(){
            return this.item.title ? this.item.title : this.item.name
        },
        getOriginalName(){
            return this.item.original_title ? this.item.original_title : this.item.original_name
        }
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
    <div class="card-item">
        <div class="front-card">
            <img :src="getImagePath(`https://image.tmdb.org/t/p/w342/${item.poster_path}`)" :alt="getName">
        </div>
        <div class="back-card">
            <div class="info mb-3">
                <h2>Titolo: {{getName}}</h2>
                <h4 v-if=" title !== titleOriginal ">Titolo Originale: {{getOriginalName}}</h4>
            </div>
            <div class="language mb-2">
                <img :src="getImagePath(`../assets/img/${item.original_language}.png`)" :alt="item.original_language">
            </div>
            <div class="stars mb-2">
                <span>Voto: </span>
                <span class="icon-star" v-for="number in 5" :key="number">
                    <font-awesome-icon :icon="['fas', 'star']" v-if="getStars(item.vote_average) >= number"/>
                    <font-awesome-icon :icon="['far', 'star']" v-else/>
                </span>
            </div>
            <div class="overview" v-if=" item.overview !== '' ">
                <h2>Overview:</h2>
                <p>
                    {{item.overview}}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-item{
    width: 100%;
    height: 100%;

    .front-card{
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .back-card{
        display: none;
        width: 100%;
        height: 100%;
        padding: 1em;

        h2{
            font-size: 1.2rem;
        }
        .info{
            h4{
                font-size: 1rem;
            }
        }
        .language{
            img{
                width: 25px;
            }
        }

        .icon-star{
            color: yellow;
        }

        .overview{
            overflow-y: auto;
            max-height: 250px;
        }
    }


    &:hover{
        background-color: black;
        .front-card{
            display: none;
        }

        .back-card{
            display: block;
        }
    }
}
</style>