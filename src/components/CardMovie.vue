<script>
export default{
    name:"CardMovie",
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="card-movie">
        <h2>Titolo: {{movie.title}}</h2>
        <h4>Titolo Originale: {{movie.original_title}}</h4>
        <p>Lingua: {{movie.original_language}}</p>
        <p>Voto: {{movie.vote_average}}</p>
    </div>
</template>

<style lang="scss" scoped>
</style>