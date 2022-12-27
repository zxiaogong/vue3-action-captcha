import {
  defineComponent,
  ref,
  Ref,
  onMounted,
  onUpdated,
  watch,
} from 'vue'
import imgs from "./imgs"
import './index.less';

interface PictureDataListType {
  styles: {
    left: string
    top: string
    backgroundImage: string
    backgroundPosition: string
    zIndex: number
  },
  key: number
}

export default defineComponent({
  props: {
    backendImg: {
      type: String,
      default: '',
      required: true
    },
    jigsawPosition: {
      type: Number,
      default: undefined,
    }
  },

  setup(props) {
    const pictureDataList: Ref<PictureDataListType[]> = ref([])
    let currentSelectIndex = -1
    let offsetX = 0
    let offsetY = 0
    let backupsOriginalImgInfo = {
      styles: {
        left: '',
        top: '',
      },
      index: 0
    }
    /**页面初次渲染 */
    onMounted(() => {
      let imgList = []
      for (let i = 0; i < 8; i++) {
        let x = (i % 4) * 80
        let y = parseInt(String(i / 4)) * 80
        imgList.push({
          styles: {
            left: x + 'px',
            top: y + 'px',
            backgroundImage: `url(${props.backendImg})`,
            backgroundPosition: `${-x}px ${-y}px`,
            zIndex: 1
          },
          key: i
        })
      }
      pictureDataList.value = imgList
    })

    /**鼠标按下 */
    const pressImgBlock = (e: any, index: number) => {
      offsetX = e.offsetX + 8
      offsetY = e.offsetY + 8
      currentSelectIndex = index
      document.addEventListener("mousemove", dragImgBlock);
      document.addEventListener("mouseup", putDownImgBlock);
    }
    /**拖拽 */
    const dragImgBlock = (e: any) => {
      const x = e.clientX
      const y = e.clientY
      const tempPicInfo = pictureDataList.value
      tempPicInfo[currentSelectIndex].styles.left = x - offsetX + 'px'
      tempPicInfo[currentSelectIndex].styles.top = y - offsetY + 'px'
      tempPicInfo[currentSelectIndex].styles.zIndex = 10

      const column = Math.floor(x / 80)
      const line = Math.floor(y / 80)
      const replaceIndex = line * 4 + column
      if (replaceIndex !== backupsOriginalImgInfo.index) {
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
        tempPicInfo[replaceIndex].styles.left = (currentSelectIndex % 4) * 80 + 'px'
        tempPicInfo[replaceIndex].styles.top = parseInt(String(currentSelectIndex / 4)) * 80 + 'px'
      }

      pictureDataList.value = tempPicInfo
    }
    /**松开 */
    const putDownImgBlock = () => {
      const tempPicInfo = pictureDataList.value
      tempPicInfo[currentSelectIndex].styles.zIndex = 1
      pictureDataList.value = tempPicInfo
      document.removeEventListener("mousemove", dragImgBlock);
      document.removeEventListener("mouseup", putDownImgBlock);
      currentSelectIndex = -1
    }

    return () => {
      return (
        <div class="drag-captcha-root">
          {
            pictureDataList.value.map((item, index) => {
              return (
                <div class="content-img-block" style={item.styles} key={item.key} onMousedown={(e) => pressImgBlock(e, index)}></div>
              )
            })
          }
        </div>
      )
    }
  }
})