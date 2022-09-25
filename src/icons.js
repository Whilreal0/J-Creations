import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faBars, faAngleLeft, faAngleRight, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger,faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faXmark, faBars, faFacebookMessenger, faAngleLeft, faAngleRight ,faFacebook, faInstagram )

Vue.component('fa-icon', FontAwesomeIcon)