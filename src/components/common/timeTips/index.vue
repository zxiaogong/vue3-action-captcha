<template>
  <div class="time-tips-root">
    <div class="time-tips-root-content" :style="{
      height: props.state ? 20 + 'px' : 0,
    }">
      <span style="color: #333" v-show="props.state === 1">
        验证通过:&nbsp;一共耗时
        <span style="color: #00c957">{{ takeUpTime }}s</span>
      </span>
      <span v-show="props.state === 2">
        验证失败:&nbsp;
        <span style="color: #e33">{{ props.errTip || "请重新验证" }}</span>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineExpose } from "vue";
const props = defineProps({
  state: {
    default: 0,
    type: Number,
  },
  errTip: {
    default: undefined,
    type: String,
  },
});
const takeUpTime = ref(0);
let timerThread: any = null;
let afterTime = 0;
const startTime = () => {
  afterTime = 0
  timerThread = setInterval(() => {
    afterTime += 100;
  }, 100);
};
const stopTime = () => {
  takeUpTime.value = afterTime / 1000;
  timerThread && clearInterval(timerThread);
  return afterTime;
};
const showTip = () => {
  setTimeout(() => {
    afterTime = 0;
    takeUpTime.value = 0;
  }, 3000);
};
defineExpose({
  startTime,
  showTip,
  stopTime,
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
