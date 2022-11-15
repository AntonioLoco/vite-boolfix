<script>
export default{
    name: "AppLoader"
}
</script>

<template>
    <div class="container">
        <img src="../assets/img/logo-loader.svg" alt="Logo Loader">
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        animation: logo-rotation ease-in-out 2s infinite;
    }
}

@keyframes logo-rotation{
    0%{
        transform: rotate(0);
    }

    50%{
        transform: rotate(180deg);
    }

    100%{
        transform: rotate(360deg);
    }
}
</style>