import { reactive } from "vue";

export const store = reactive({
    // Api Url
    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiSerieURL: "https://api.themoviedb.org/3/search/tv",
    apiGenresUrl: "https://api.themoviedb.org/3/genre/",

    // Api Params
    apiParams: {
        language: "it-IT",
        query: "",
        api_key: "83a87efa399db4f4e28c4afeba9862d5",
    },

    // Api Result
    resultMovies: [],
    resultSeries: [],
    genresMovie: [],
    genresSeries: [],

    // Filter
    filterMovies: "",
    filterSeries: "",

    // Api Loading
    loading: false,
    notFounded: false
})