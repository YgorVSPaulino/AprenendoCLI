import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'

createApp(App).use(axios).mount('#app')
