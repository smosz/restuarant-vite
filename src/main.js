import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { Icon } from '@iconify/vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('icon', Icon)
.use(router)
.mount('#app');
