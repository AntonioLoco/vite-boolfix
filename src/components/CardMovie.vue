<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    name: "CardMovie",
    props: {
        stars: Number,
        imgLanguage: String,
        imgPoster: String,
        title: String,
        titleOriginal: String,
        movieLanguage: String,
        overview: String
    }
}
</script>

<template>
    <div class="card-movie">
        <div class="front-card">
            <img :src="imgPoster" :alt="title">
        </div>
        <div class="back-card">
            <div class="info mb-3">
                <h2>Titolo: {{title}}</h2>
                <h4 v-if=" title !== titleOriginal ">Titolo Originale: {{titleOriginal}}</h4>
            </div>
            <div class="language mb-2">
                <img :src="imgLanguage" :alt="movieLanguage">
            </div>
            <div class="stars mb-2">
                <span>Voto: </span>
                <span class="icon-star" v-for="(index) in 5" :key="index">
                    <font-awesome-icon :icon="['fas', 'star']" v-if="stars >= index"/>
                    <font-awesome-icon :icon="['far', 'star']" v-else/>
                </span>
            </div>
            <div class="overview" v-if=" overview !== '' ">
                <h2>Overview:</h2>
                <p>
                    {{overview}}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-movie{
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