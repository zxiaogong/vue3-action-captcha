# 快速上手

## 安装

yarn add vue3-action-captcha


## main.js中 全局注册组件
```ts
import ActionCaptcha from "vue3-action-captcha"
import "vue3-action-captcha/dist/lib/style.css"
createApp(App).use(ActionCaptcha).mount('#app')
```
```ts
import { SliderCaptcha } from "vue3-action-captcha"
import "vue3-action-captcha/dist/lib/style.css"
createApp(App).component("Slider-captcha", SliderCaptcha).mount('#app')
```


## 在组件中按需引入
```ts
// 注意：按需引入时也需要在main.js中引入样式文件 import "vue3-action-captcha/dist/lib/style.css"
import { DragCaptcha ,SliderCaptcha} from "vue3-action-captcha"

```