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
        <p>Voto: {{stars}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .language{
    img{
        width: 25px;
    }
}
</style>