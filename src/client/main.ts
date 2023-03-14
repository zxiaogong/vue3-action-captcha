import { createApp } from 'vue'
import App from './App.vue'
import verifyComponents from '../index'

createApp(App).use(verifyComponents).mount('#app')
