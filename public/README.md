
## vue3-action-captcha
`基于vue3的行为验证码。开箱即用，支持后端校验。`



## 安装

npm install vue3-action-captcha

yarn add vue3-action-captcha

## 效果图

![App Screenshot](https://raw.githubusercontent.com/zxiaogong/vue3-action-captcha/feature/designsketch.gif)


## 使用方法/示例

```html
<script setup lang="ts">
import { SliderCaptcha } from "vue3-action-captcha";
const verifySuccess = ()=>{
  console.log("验证成功")
}

</script>

<template>
  <SliderCaptcha 
  :backendImg="'https://raw.githubusercontent.com/zxiaogong/vue3-action-captcha/feature/src/imgs/1.jpg'"
  @verifySuccess="verifySuccess" />
</template>


```


## API 

| 属性 | 类型     | 描述                |
| :-------- | :------- | :------------------------- |
| `backendImg` | `string` | **必选**. 背景图 |
| `jigsawPosition` | `{ left: number, top: number} ` | **非必选**. 自定义拼图位置 |
| `isBackendCheck` | `boolean ` | **非必选**. 是否开启后端校验 |
| `errHowTimesRefresh` | `number ` | **非必选**. 验证失败几次后重新刷新拼图，默认5次 |
| `allowEroor` | `number ` | **非必选**. 允许误差，默认2像素 |

## 事件

| 事件名 | 说 明     | 回调参数                       |
| :-------- | :------- | :-------------------------------- |
| `verifySuccess`      |  `验证成功时回调`  |   |
| `verifyError`      |  `验证失败时回调`  |   |
| `verifyChange`      |  `后端校验时回调`  | `Function(positionData, Function(result:boolean / undefined))` |
| `verifyRefresh`      |  `刷新时回调`  | `Function(positionData,Function({left:number,top:number} / undefined))` |


## 其他
 `背景图大小为 320*160，拼图大小为：60*60。如果需要自定义拼图位置，请计算好对应的坐标，以免显示超出背景图范围`