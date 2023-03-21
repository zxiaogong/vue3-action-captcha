# 快速上手

### 安装

yarn add vue3-action-captcha


### 全局引入
```ts
import { createApp } from 'vue'
import App from './App.vue'
import ActionCaptcha from "vue3-action-captcha"
import "vue3-action-captcha/dist/lib/style.css"
createApp(App).use(ActionCaptcha).mount('#app')
```

### 局部引入
```ts
import { createApp } from 'vue'
import App from './App.vue'
import { SliderCaptcha } from "vue3-action-captcha"
import "vue3-action-captcha/dist/lib/style.css"
createApp(App).component("SliderCaptcha", SliderCaptcha).mount('#app')
```