<script>
import axios from 'axios';
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
        },
        getLanguage(){
            return this.item.original_language === 'en' ? this.item.original_language = 'gb' : this.item.original_language
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
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="item.poster_path" :src="getImagePath(`https://image.tmdb.org/t/p/w342/${item.poster_path}`)" :alt="getName">
                <img v-else src="../assets/img/No_image_available.jpg" alt="No img Avaible">
            </div>
            <div class="flip-card-back">
                <div class="info">
                    <h2>Titolo:</h2><span>{{getName}}</span>
                    <h4 v-if="getName !== getOriginalName">Titolo Originale: </h4><span v-if="getName !== getOriginalName">{{getOriginalName}}</span>
                </div>
                <div class="language mb-2">
                    <country-flag :country="`${getLanguage}`" size="small" />
                </div>
                <div class="stars mb-2">
                    <h2>Voto: </h2>
                    <span class="icon-star" v-for="number in 5" :key="number">
                        <font-awesome-icon :icon="['fas', 'star']" v-if="getStars(item.vote_average) >= number"/>
                        <font-awesome-icon :icon="['far', 'star']" v-else/>
                    </span>
                </div>
                <div class="cast" v-if="item.cast.length > 0">
                    <h2>Cast</h2>
                    <ul>
                        <li v-for="( person ,index ) in item.cast" :key="index" v-show="index < 5">{{person.name}}</li>
                    </ul>
                </div>
                <div class="overview" v-if=" item.overview !== '' ">
                    <h2>Overview:</h2>
                    <p>
                        {{item.overview}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flip-card{
    width: 100%;
    height: 100%;
    perspective: 1000px;

    .flip-card-inner{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: left;
        transition: transform 0.8s;
        transform-style: preserve-3d;


        .flip-card-front{
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
    
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    
        .flip-card-back{
            background-color: #000;
            color: #f1f1f1;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            overflow: hidden;
            padding: 1em;
            font-size: 1.2rem;
            overflow-y: scroll;

            &::-webkit-scrollbar{
                display: none;
            }

            h2{
                font-size: 1.4rem;
            }

            .language{
                img{
                    width: 25px;
                }
            }

            .stars{
                .icon-star{
                    color: yellow;
                }
            }

            .overview{
                height: 70%;
                overflow-y: auto;
                padding-bottom: 1em;

                &::-webkit-scrollbar{
                    display: none;
                }
            }
        }
    }

    &:hover{
        .flip-card-inner{
            transform: rotateY(180deg);
        }
    }
}
</style>