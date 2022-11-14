<script>
import { store } from '../store';

export default{
    name: "AppSearchBar",
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <div class="form-input">
        <label for="search-input">Cerca un film o serie tv</label>
        <input type="text" v-model="store.apiParams.query" id="search-input">
        <button @click="$emit('btnSearch')" class="btn btn-primary">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
</style>