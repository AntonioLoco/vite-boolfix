import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as farStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, farStar)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
