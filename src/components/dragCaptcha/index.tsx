import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  watch,
} from 'vue'
import TimeTips from "../common/timeTips/index.vue";
import RefreshBut from "../common/refreshBut/index.vue";
import './index.less';


interface PictureDataType {
  styles: {
    left: string
    top: string
    backgroundImage: string
    backgroundPosition: string
    zIndex: number
    transition?: string
  },
  key: number,
}

export default defineComponent({
  name: 'drag-captcha',
  props: {
    //背景图
    backendImg: {
      type: String,
      default: '',
      required: true
    },
    //对换的图片
    crossPosition: {
      type: Array<number>,
    },
    /**失败几次刷新 */
    errHowTimesRefresh: {
      type: Number,
      default: 1,
    },
    /**是否需要后端校验 */
    isBackendCheck: {
      type: Boolean,
      default: false,
    },
  },
  emit: {
    verifyRefresh: null,
    /**验证成功 */
    verifySuccess: null,
    /**验证失败 */
    verifyError: null,
    /**后端校验调用 */
    verifyChange: null,
  },


  setup(props, { emit }) {

    let pictureData: { jigsawPuzzleList: PictureDataType[] } = reactive({
      jigsawPuzzleList: []
    })
    let currentSelectIndex = -1
    let mouseX = 0
    let mouseY = 0
    let backupsOriginalImgInfo = {
      styles: {
        left: '',
        top: '',
      },
      index: -1
    }
    /**记录操作过程中的参数 */
    let operationParameter = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    }
    let cross1 = 0
    let cross2 = 0
    const tipRef = ref<any>()
    const verifyState = ref<number>(0)
    let initImgSafe: PictureDataType[] = []
    let errNum = 0
    let isOver = true
    let areaWidth = 0
    let areaHeight = 0

    watch(props, () => {
      initVerifyData()
    })
    /**页面初次渲染 */
    onMounted(() => {
      initVerifyData()
    })
    const initVerifyData = () => {
      const random = (noNum?: number): number => {
        const randomNum = Math.floor(Math.random() * (7 - 0))
        if (noNum === undefined || randomNum !== noNum) {
          return randomNum
        } else {
          return random(noNum)
        }
      }
      let imgList: PictureDataType[] = []
      const subscript = [0, 1, 2, 3, 4, 5, 6, 7]
      const tempSub = [...subscript]
      const { crossPosition } = props
      if (crossPosition?.length && crossPosition?.length >= 2 && crossPosition[0] !== crossPosition[1]) {
        cross1 = crossPosition[0]
        cross2 = crossPosition[1]
      } else {
        cross1 = random()
        cross2 = random(cross1)
      }

      subscript[cross1] = tempSub[cross2]
      subscript[cross2] = tempSub[cross1]

      subscript.forEach((item, i) => {
        let { x, y } = coordinate(i)
        const crossPosition = coordinate(item)

        imgList.push({
          styles: {
            left: x + 'px',
            top: y + 'px',
            backgroundImage: `url(${props.backendImg})`,
            backgroundPosition: `${-crossPosition.x}px ${-crossPosition.y}px`,
            zIndex: 1
          },
          key: i,
        })
      })
      pictureData.jigsawPuzzleList = imgList
      initImgSafe = imgList
    }

    /**计算坐标 */
    const coordinate = (index: number): { x: number, y: number } => {
      let x = (index % 4) * 80
      let y = parseInt(String(index / 4)) * 80
      return {
        x, y
      }
    }
    const minimum = (nums: Array<number>) => {
      const tnum = nums.sort((a, b) => { return b - a })
      return tnum[1] < -1 ? 0 : tnum[1]
    }

    /**鼠标按下 */
    const pressImgBlock = (e: any, index: number) => {
      if (!isOver) {
        return
      }
      areaWidth = Math.floor(minimum([(index % 4) * 80, 320]) / 80) + 1
      areaHeight = Math.floor(index / 4) + 1
      document.addEventListener("mousemove", dragImgBlock);
      document.addEventListener("mouseup", putDownImgBlock);
      isOver = false
      tipRef.value.startTime()
      mouseX = e.clientX + 8
      mouseY = e.clientY + 8
      //重新记录操作参数
      operationParameter = {
        startX: e.clientX,
        startY: e.clientY,
        endX: 0,
        endY: 0,
      }
      currentSelectIndex = index
      backupsOriginalImgInfo.index = index
      backupsOriginalImgInfo.styles = {
        left: pictureData.jigsawPuzzleList[index].styles.left,
        top: pictureData.jigsawPuzzleList[index].styles.top,
      }
      const imgList = pictureData.jigsawPuzzleList
      for (let i = imgList.length; i--;) {
        const item = imgList[i]
        if (i === index) {
          item.styles.zIndex = 10
          item.styles.transition = '0s'
        } else {
          item.styles.transition = '0.3s'
        }

      }
      pictureData.jigsawPuzzleList = imgList
    }
    /**拖拽 */
    const dragImgBlock = (e: any) => {
      const clientX = e.clientX + 8
      const clientY = e.clientY + 8
      const { x, y } = coordinate(currentSelectIndex)
      // console.log(x, y)
      const tempPicInfo = pictureData.jigsawPuzzleList
      tempPicInfo[currentSelectIndex].styles.left = clientX - mouseX + x + 'px'
      tempPicInfo[currentSelectIndex].styles.top = clientY - mouseY + y + 'px'
      const column = Math.floor(minimum([clientX - 40 + areaWidth * 80 - mouseX, 319.9]) / 80)
      const line = Math.floor(minimum([clientY - 40 + areaHeight * 80 - mouseY, 159.9]) / 80)
      const replaceIndex = column + line * 4
      if (replaceIndex > -1 && replaceIndex !== backupsOriginalImgInfo.index) {
        const beforeIndex = backupsOriginalImgInfo.index
        tempPicInfo[beforeIndex].styles = {
          ...tempPicInfo[beforeIndex].styles,
          ...backupsOriginalImgInfo.styles,
        }
        backupsOriginalImgInfo.styles = {
          left: tempPicInfo[replaceIndex].styles.left,
          top: tempPicInfo[replaceIndex].styles.top
        }
        backupsOriginalImgInfo.index = replaceIndex
        let { x, y } = coordinate(currentSelectIndex)
        tempPicInfo[replaceIndex].styles.left = x + 'px'
        tempPicInfo[replaceIndex].styles.top = y + 'px'
      }
      pictureData.jigsawPuzzleList = tempPicInfo
    }
    /**松开 */
    const putDownImgBlock = (e: any) => {
      const clientX = e.clientX
      const clientY = e.clientY
      /**记录操作参数 */
      operationParameter.endX = clientX
      operationParameter.endY = clientY
      const tempPicInfoList = [...pictureData.jigsawPuzzleList]
      const replaceIndex = backupsOriginalImgInfo.index
      const currentPicData = tempPicInfoList[currentSelectIndex]
      let { x, y } = coordinate(replaceIndex)
      tempPicInfoList[currentSelectIndex].styles = {
        ...tempPicInfoList[currentSelectIndex].styles,
        left: x + 'px',
        top: y + 'px',
        transition: "0.3s",
        zIndex: 1,
      }
      pictureData.jigsawPuzzleList = tempPicInfoList
      document.removeEventListener("mousemove", dragImgBlock);
      document.removeEventListener("mouseup", putDownImgBlock);
      //停止计时
      const processTime = tipRef.value.stopTime();
      console.log(processTime)
      setTimeout(() => {
        tempPicInfoList[currentSelectIndex] = tempPicInfoList[replaceIndex]
        tempPicInfoList[replaceIndex] = currentPicData
        currentSelectIndex = -1
        pictureData.jigsawPuzzleList = tempPicInfoList
        if (tempPicInfoList[cross1].key === cross2 && tempPicInfoList[cross2].key === cross1) {
          verifyState.value = 1
          if (props.isBackendCheck) {
            emit('verifyChange', {
              ...operationParameter,
              processTime
            }, (result: boolean | undefined) => {
              if (result) {
                emit("verifySuccess")
              } else {
                emit("verifyError")
                errLaterRefreshImg()
              }
            })
          } else {
            emit("verifySuccess")
          }
        } else {
          emit("verifyError");
          verifyState.value = 2
          errLaterRefreshImg()
          setTimeout(() => {
            verifyState.value = 0
          }, 900);
        }
      }, 100);
    }
    const errLaterRefreshImg = () => {
      setTimeout(() => {
        isOver = true
        errNum++
        if (errNum >= props.errHowTimesRefresh) {
          onRefresh()
        } else {
          pictureData.jigsawPuzzleList = initImgSafe
        }
      }, 900);

    }
    const onRefresh = () => {
      emit('verifyRefresh')
      initVerifyData()
    }
    return () => {
      return (
        <div class="drag-captcha-root" >
          {
            pictureData.jigsawPuzzleList.map((item, index) => {
              return (
                <div class="content-img-block" style={item.styles} key={item.key} onMousedown={(e) => pressImgBlock(e, index)}></div>
              )
            })
          }
          <div style={{ width: '100%', height: '20px', position: 'absolute', left: 0, bottom: 0 }}>
            <TimeTips ref={tipRef} state={verifyState.value}></TimeTips>
          </div>
          <RefreshBut onClick={() => onRefresh()}></RefreshBut>
        </div>
      )
    }
  }
})