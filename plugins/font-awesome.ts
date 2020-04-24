import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBroom,
  faCircle,
  faCircleNotch,
  faCode,
  faDotCircle,
  faPencilAlt,
  faVectorSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faBroom,
  faCircle,
  faCircleNotch,
  faCode,
  faDotCircle,
  faPencilAlt,
  faVectorSquare,
  faGithub
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
