# 滑动拼图

### 演示
　
<Drag-captcha :backendImg="$withBase('./img/backImg.jpg')"></Drag-captcha>
　
### 代码 　

```vue
<script lang="ts">
import backImg from "./img/backImg.jpg";
</script>
<template>
  <Drag-captcha :backendImg="img"></Drag-captcha>
</template>

```
　
 ### 参数 
　
| 属性 | 类型     | 描述                |
| :-------- | :------- | :------------------------- |
| `backendImg` | `string` | **必选**. 背景图 |
| `crossPosition` | `Array<number>` | **非必选**. 对换的拼图位置0~7，例如:[2,4] |
| `isBackendCheck` | `boolean ` | **非必选**. 是否开启后端校验，开启后进行验证会调用verifyChange方法 |
| `errHowTimesRefresh` | `number ` | **非必选**. 验证失败几次后重新刷新拼图，默认1次 |

 ###  事件

 | 事件名 | 说 明     | 回调参数                       |
| :-------- | :------- | :-------------------------------- |
| `verifySuccess`      |  `验证成功时回调`  | `Function()`  |
| `verifyError`      |  `验证失败时回调`  | `Function()` |
| `verifyChange`      |  `后端校验时回调`  | `Function(value, Function(result:boolean / undefined))` |
| `verifyRefresh`      |  `刷新时回调`  | `Function()` |