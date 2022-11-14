<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    name: "CardMovie",
    data(){
        return{
            starsRaiting: 5,
        }
    },
    props: {
        movie: Object,
        stars: Number,
        imgLanguage: String,
        imgPoster: String,
    },
    components: { FontAwesomeIcon }
}
</script>

<template>
    <div class="card-movie">
        <img :src="imgPoster" :alt="movie.title">
        <h2>Titolo: {{movie.title}}</h2>
        <h4>Titolo Originale: {{movie.original_title}}</h4>
        <div class="language">
            <img :src="imgLanguage" :alt="movie.original_language">
        </div>
        <div class="stars">
            <span>Voto: {{stars}}</span>
            <span class="icon-star" v-for="(index) in 5" :key="index">
                <font-awesome-icon :icon="['fas', 'star']" v-if="stars >= index"/>
                <font-awesome-icon :icon="['far', 'star']" v-else/>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .language{
        img{
            width: 25px;
        }
    }
</style>