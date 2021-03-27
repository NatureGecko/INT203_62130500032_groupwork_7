import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import BaseCard from './components/BaseCard.vue'

const myApp = createApp(App)
myApp.component('base-card',BaseCard)
myApp.mount('#app')