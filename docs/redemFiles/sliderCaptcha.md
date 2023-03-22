# 滑动拼图

### 演示
　
<Slider-captcha :backendImg="$withBase('./img/backImg.jpg')"></Slider-captcha>
　
### 代码 　

```vue
<script lang="ts">
import backImg from "./img/backImg.jpg";
</script>
<template>
  <Slider-captcha :backendImg="img"></Slider-captcha>
</template>

```
　
 ### 参数 
　
| 属性 | 类型     | 描述                |
| :-------- | :------- | :------------------------- |
| `backendImg` | `string` | **必选**. 背景图 |
| `jigsawPosition` | `{ left: number, top: number} ` | **非必选**. 自定义拼图位置 |
| `isBackendCheck` | `boolean ` | **非必选**. 是否开启后端校验，开启后进行验证会调用verifyChange方法 |
| `errHowTimesRefresh` | `number ` | **非必选**. 验证失败几次后重新刷新拼图，默认1次 |
| `allowEroor` | `number ` | **非必选**. 允许误差，默认2像素 |

 ###  事件

 | 事件名 | 说 明     | 回调参数                       |
| :-------- | :------- | :-------------------------------- |
| `verifySuccess`      |  `验证成功时回调`  | `Function()`  |
| `verifyError`      |  `验证失败时回调`  | `Function()` |
| `verifyChange`      |  `后端校验时回调`  | `Function(value, Function(result:boolean / undefined))` |
| `verifyRefresh`      |  `刷新时回调`  | `Function()` |