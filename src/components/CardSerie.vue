<script>

export default{
    name: "CardSerie",
    props: {
        serie: Object,
        stars: Number,
        imgLanguage: String,
        imgPoster: String,
    }
}
</script>

<template>
    <div class="card-serie">
        <img :src="imgPoster" :alt="serie.name">
        <h2>Titolo: {{serie.name}}</h2>
        <h4>Titolo Originale: {{serie.original_name}}</h4>
        <div class="language">
            <img :src="imgLanguage" :alt="serie.original_language">
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