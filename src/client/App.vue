<script setup lang="ts">
// import { SliderCaptcha ,DragCaptcha} from "./components/index";
// import { SliderCaptcha } from "../public/lib/captcha.es";
import backImg from "../imgs/1.jpg";
import {ref} from "vue"
const testdata = ref([2,4])
const verifySuccess = ()=>{
  console.log("验证成功")
}
const verifyRefresh = ()=>{
  console.log("刷新")
  setTimeout(() => {
    testdata.value=[1,6]
  }, 2000);
}
const verifyChange= (res:any,callback:(s:boolean)=>boolean)=>{
  console.log(res)
  setTimeout(() => {
    callback(true)
  }, 3000);
}
</script>

<template>
  <!-- <slider-captcha :backendImg="backImg" @verifySuccess="verifySuccess" :isBackendCheck="true" @verifyChange="verifyChange"></slider-captcha> -->
  <!-- <SliderCaptcha :backendImg="backImg" @verifySuccess="verifySuccess" :isBackendCheck="true" @verifyChange="verifyChange"></SliderCaptcha> -->
  <drag-captcha :backendImg="backImg" @verifySuccess="verifySuccess" @verifyRefresh="verifyRefresh" @verifyChange="verifyChange" :crossPosition="testdata"  :isBackendCheck="true"></drag-captcha>
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
