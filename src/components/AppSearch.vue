<script>
import { store } from '../store';

export default{
    name: "AppSearch",
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <div class="form-input mb-4">
        <label class="d-none" for="search-input">Cerca un film o serie tv</label>
        <input type="text" v-model="store.apiParams.query" id="search-input" placeholder="Cerca">
        <button @click="$emit('btnSearch')" class="btn btn-primary">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

.form-input{
    max-height: 40px;
    display: flex;

    input{
        min-width: 150px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-style: none;
        padding: .5em;

        &:focus-visible{
            outline: none;
        }
    }

    button{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #d91921;
        color: #fff;
        border-style: none;
    }
}
</style>