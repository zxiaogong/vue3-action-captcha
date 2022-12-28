<script setup lang="ts">
import { SliderCaptcha ,DragCaptcha} from "./components/index";
// import { SliderCaptcha } from "../public/lib/captcha.es";
import backImg from "./imgs/1.jpg";
const verifySuccess = ()=>{
  console.log("验证成功")
}
const verifyChange= (res:any,callback:(s:boolean)=>boolean)=>{
  console.log(res)
  setTimeout(() => {
    callback(true)
  }, 3000);
}
</script>

<template>
  <!-- <SliderCaptcha :backendImg="backImg" @verifySuccess="verifySuccess" :isBackendCheck="true" @verifyChange="verifyChange"></SliderCaptcha> -->
  <DragCaptcha :backendImg="backImg" ></DragCaptcha>
</template>

<style scoped>
.root{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
