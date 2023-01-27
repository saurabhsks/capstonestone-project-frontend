//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBed } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faBed);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue.config.productionTip=false
// new Vue({
//     render:h=>h(App),
// }).$mount('#app')

createApp(App).use(router).mount('#app');
