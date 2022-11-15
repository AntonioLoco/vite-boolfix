import { createApp } from 'vue'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as farStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, farStar)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Country Flag
import CountryFlag from 'vue-country-flag-next'



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('country-flag', CountryFlag)
    .mount('#app')
