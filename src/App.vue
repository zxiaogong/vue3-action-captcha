<script setup lang="ts">
import { SliderCaptcha ,DragCaptcha} from "./components/index";
// import { SliderCaptcha } from "../public/lib/captcha.es";
import backImg from "./imgs/1.jpg";
const verifySuccess = ()=>{
  console.log("验证成功")
}
const verifyChange= (res:any,callback:(s:boolean)=>boolean)=>{
  console.log(res)
  callback(true)
}
</script>

<template>
  <!-- <SliderCaptcha :backendImg="backImg" @verifySuccess="verifySuccess"></SliderCaptcha> -->
  <DragCaptcha :backendImg="backImg" ></DragCaptcha>
</template>

<style scoped></style>
