import { createApp } from 'vue'
import App from './App.vue'
import actionCaptcha, { SliderCaptcha } from '../components/export'
// import actionCaptcha from "vue3-action-captcha"
// import "vue3-action-captcha/dist/lib/style.css"
createApp(App).use(actionCaptcha).mount('#app')
