<script>
export default{
    name: "CardSerie",
    props: {
        serie: Object
    }
}
</script>

<template>
    <div class="card-serie">
        <h2>Titolo: {{serie.name}}</h2>
        <h4>Titolo Originale: {{serie.original_name}}</h4>
        <p>Lingua: {{serie.original_language}}</p>
        <p>Voto: {{serie.vote_average}}</p>
    </div>
</template>

<style lang="scss" scoped>
</style>