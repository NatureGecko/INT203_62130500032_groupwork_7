import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App).mount('#app')
Vue.component('base-card','./components/BaseCard.vue')
