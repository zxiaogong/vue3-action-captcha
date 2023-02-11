<template>
  <div class="slider-captcha-root">
    <div class="slider-captcha-content">
      <div class="slider-captcha-box">
        <div class="slider-captcha-img">
          <div class="other-operation">
            <div class="refresh-but" @click="onRefresh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path
                  d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                />
              </svg>
            </div>
          </div>
          <img class="backend-img" :src="props.backendImg" />
          <div
            class="slider-jigsaw"
            :style="{
              left: patchPosition.left + 'px',
              top: patchPosition.top + 'px',
              transition: !butState.isPress ? '0.3s' : '0s',
              opacity: !butState.isPress && isHidePuzzle ? 0 : 1,
            }"
          >
            <img :src="puzzleImg" />
          </div>
          <div
            class="slider-defect"
            :style="{
              left: gapPosition.left + 'px',
              top: gapPosition.top + 'px',
              opacity: !butState.isPress && isHidePuzzle ? 0 : 1,
            }"
          >
            <img :src="defectImg" />
          </div>
          <div class="slider-tip">
            <TimeTips
              ref="tipRef"
              :state="butState.state"
              errTip="向右滑动滑块进行正确拼合"
            />
          </div>
        </div>
        <div class="slider-but-box">
          <div class="slider-but-box-tip">向右滑动滑块进行正确拼合</div>
          <div
            v-if="butState.state === 0"
            class="slider-static-but"
            :style="{
              left: butState.left + 'px',
              transition: !butState.isPress ? '0.3s' : '0s',
            }"
            @mousedown="pressSliderBut"
          >
            <div class="slider-but">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-forward-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z"
                />
              </svg>
            </div>
          </div>
          <div
            v-else-if="butState.state === 1"
            class="slider-static-but2"
            :style="{
              left: butState.left + 'px',
              transition: !butState.isPress ? '0.3s' : '0s',
            }"
          >
            <div class="slider-suc-but">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                />
              </svg>
            </div>
          </div>
          <div
            v-else-if="butState.state === 2"
            class="slider-static-but3"
            :style="{
              left: butState.left + 'px',
              transition: !butState.isPress ? '0.3s' : '0s',
            }"
          >
            <div class="slider-err-but">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
          <div
            class="slider-road"
            :style="{ 'pointer-events': butState.isPress ? 'all' : 'none' }"
          >
            <div
              class="slider-road-backend"
              :style="{
                backgroundColor: butState.isPress ? '#1E90FF' : '#999',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref,
  onBeforeMount,
  defineProps,
  PropType,
  defineEmits,
  watch,
  Ref,
} from "vue";
import TimeTips from "../common/timeTips/index.vue";

const tipRef: Ref<any> = ref(null);
const props = defineProps({
  backendImg: {
    type: String,
    default: "",
    required: true,
  },
  jigsawPosition: {
    type: Object as PropType<{
      left: number;
      top: number;
    }>,
    default: {},
  },
  /**是否需要后端校验 */
  isBackendCheck: {
    type: Boolean,
    default: false,
  },
  /**失败几次刷新 */
  errHowTimesRefresh: {
    type: Number,
    default: 1,
  },
  allowEroor: {
    type: Number,
    default: undefined,
  },
});

const emits = defineEmits({
  /**刷新 */
  verifyRefresh: null,
  /**验证成功 */
  verifySuccess: null,
  /**验证失败 */
  verifyError: null,
  /**后端校验调用 */
  verifyChange: null,
});

const puzzleImg = ref("");
const defectImg = ref("");
/**误差 */
const allowEroor = props.allowEroor || 2;
/**图片宽高 */
const puzzleWidth = 60;
const puzzleHeight = 60;
const imgWidth = 320;
const imgHeight = 160;

/**按钮状态 */
const butState = reactive({
  left: 0,
  isPress: false,
  state: 0,
});

/**缺失的拼图位置 */
const gapPosition = reactive({
  left: 0,
  top: 0,
});
/**补全的拼图位置 */
const patchPosition = reactive({
  left: 0,
  top: 0,
});

/**拖动位置 */
let dragPosition = 0;

/**消耗的时间 */
let takeUpTime = 0;

/**拖动时计时的时间 */
let sliderThread: any = null;

/**失败次数 */
let errorNum = 0;

const isHidePuzzle = ref(true);

onBeforeMount(() => {
  calculationPuzzlePosition(
    props.jigsawPosition.left,
    props.jigsawPosition.top
  );
  drawJigsawPuzzle().then((res: string) => {
    puzzleImg.value = res;
  });
  drawJigsawPuzzle(true).then((res: string) => {
    defectImg.value = res;
  });
});

watch(
  () => props.jigsawPosition,
  (nextJigsawPosition) => {
    if (props.isBackendCheck)
      calculationPuzzlePosition(
        nextJigsawPosition.left,
        nextJigsawPosition.top
      );
  }
);

const calculationPuzzlePosition = (puzzleLeft?: number, puzzleTop?: number) => {
  let left = 0;
  let top = 0;
  if (puzzleLeft && puzzleTop) {
    left = puzzleLeft;
    top = puzzleTop;
  } else {
    left = randomNumber(puzzleWidth + 2, imgWidth - puzzleWidth - 2);
    top = randomNumber(2, imgHeight - puzzleHeight - 2);
  }
  gapPosition.left = left;
  gapPosition.top = top;
  patchPosition.top = top;
};

/**鼠标按下 */
const pressSliderBut = (e: any) => {
  isHidePuzzle.value = false;
  document.addEventListener("mousemove", moveSliderBut);
  document.addEventListener("mouseup", releaseSliderBut);
  tipRef.value.startTime();
  dragPosition = e.clientX;
  butState.isPress = true;
};
/**滑动 */
const moveSliderBut = (e: any) => {
  const x = e.clientX - dragPosition;
  if (butState.isPress) {
    butState.left = x;
    if (x < 0) {
      butState.left = 0;
      patchPosition.left = 0;
    } else if (x >= 0 && x < imgWidth - puzzleWidth + 2) {
      butState.left = x;
      patchPosition.left = x;
    } else {
      butState.left = imgWidth - puzzleWidth + 2;
      patchPosition.left = imgWidth - puzzleWidth;
    }
  }
};
/**松开 */
const releaseSliderBut = async () => {
  document.removeEventListener("mousemove", moveSliderBut);
  document.removeEventListener("mouseup", releaseSliderBut);
  clearInterval(sliderThread);
  //停止计时
  takeUpTime = tipRef.value.stopTime();
  let isSuccess = false;
  butState.isPress = false;
  const errCaptcha = () => {
    /**失败 */
    errorNum += 1;
    butState.state = 2;
    emits("verifyError");
    let timer: any = setTimeout(() => {
      butState.left = 0;
      patchPosition.left = 0;
      let timer2: any = setTimeout(() => {
        isHidePuzzle.value = true;
        butState.state = 0;
        clearTimeout(timer);
        clearTimeout(timer2);
        timer = null;
        timer2 = null;
        /**满足失败次数后重新刷新 */
        if (props.errHowTimesRefresh >= errorNum ) onRefresh();
      }, 400);
    }, 500);
  };
  /**先验证是否在误差内 */
  if (
    gapPosition.left - allowEroor < patchPosition.left &&
    patchPosition.left < gapPosition.left + allowEroor
  ) {
    /**判断是否需要后端验证 */
    if (props.isBackendCheck) {
      isSuccess = await backendCheckCode();
    }
    /**调用对应结果 */
    if ((props.isBackendCheck && isSuccess) || !props.isBackendCheck) {
      tipRef.value.showTip();
      butState.state = 1;
      emits("verifySuccess");
    } else {
      errCaptcha();
    }
  } else {
    errCaptcha();
  }
};
const onRefresh = async () => {
  errorNum = 0;
  if (butState.state === 1) {
    return;
  }
  await emits("verifyRefresh");
  if (!props.isBackendCheck) {
    calculationPuzzlePosition();
  }
};

const backendCheckCode = (): Promise<boolean> => {
  return new Promise(async (res, rej) => {
    emits(
      "verifyChange",
      {
        left: patchPosition.left,
        top: patchPosition.top,
        backendImg: props.backendImg,
        jigsawImg: puzzleImg.value,
        elapsedTim: takeUpTime,
      },
      (result: boolean | undefined) => {
        res(result as boolean);
      }
    );
  });
};

const randomNumber = (end: number, start: number) => {
  return Math.floor(Math.random() * (end - start) + start);
};

/**绘制拼图 */
const drawJigsawPuzzle = (isDefect?: boolean): Promise<string> => {
  const clearArcFun = (x: number, y: number, r: number, ctx: any) => {
    var stepClear = 1; //别忘记这一步
    clearArc(x, y, r);
    function clearArc(x: number, y: number, radius: number) {
      var calcWidth = radius - stepClear;
      var calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);
      var posX = x - calcWidth;
      var posY = y - calcHeight;

      var widthX = 2.3 * calcWidth;
      var heightY = 2 * calcHeight;

      if (stepClear <= radius) {
        ctx.clearRect(posX, posY, widthX, heightY);
        stepClear += 1;
        clearArc(x, y, radius);
      }
    }
  };
  return new Promise((res, rej) => {
    const image = new Image();
    image.src = props.backendImg;
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");
      const _this: any = this;
      //设置canvas大小与原图宽高一致
      canvas.width = 60;
      canvas.height = 60;
      /**添加背景色*/
      ctx.fillStyle = "#fff";
      ctx.shadowBlur = 20;
      /**画板位置、大小*/
      ctx.fillRect(0, 0, 60, 60);
      if (isDefect) {
        ctx.globalAlpha = 0.16;
      } else {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ffff00";
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(6, 14);
        ctx.lineTo(6, 30);
        ctx.stroke();
      }
      // /**创建新路径*/
      ctx.beginPath();
      ctx.arc(26, 10, 6, 15, Math.PI / 5, 0);
      ctx.arc(50, 34, 6, 4, Math.PI / 1.4, 0);
      ctx.moveTo(6, 14);
      ctx.lineTo(46, 14);
      ctx.lineTo(46, 58);
      ctx.lineTo(6, 58);
      ctx.lineTo(6, 42);
      // ctx.arcTo(16, 42, 17, 32, 7)
      // ctx.arcTo(16, 32, 6, 26, 7)
      ctx.lineTo(6, 40);
      // ctx.closePath();
      if (!isDefect) {
        ctx.stroke();
      }
      // 44*44
      ctx.clip();
      // 在canvas绘制图片
      ctx.drawImage(
        _this,
        -gapPosition.left,
        -gapPosition.top,
        imgWidth,
        imgHeight
      );
      ctx.drawImage(image, -gapPosition.left, -gapPosition.top, 320, 160);
      if (!isDefect) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.fillStyle = "#fff";
        ctx.arc(10, 36, 6, 4, Math.PI / 1, 0);
        ctx.fill();
        ctx.stroke();
      } else {
        clearArcFun(10, 36, 6, ctx);
      }
      const imageData = ctx.getImageData(0, 0, 320, 320);
      if (window.devicePixelRatio) {
        var width = canvas.width,
          height = canvas.height;
        canvas.height = height * window.devicePixelRatio;
        canvas.width = width * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }

      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        // 得到 RGBA 通道的值
        let r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        /**将白色设置为透明 */
        if (r === 255 && g === 255 && b === 255) {
          data[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      res(canvas.toDataURL("image/jpg", 1));
    };
    image.onerror = function () {
      console.error("图片获取失败");
      rej("");
    };
  });
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
