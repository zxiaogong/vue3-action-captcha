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
    transition?: string
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
      index: -1
    }
    /**页面初次渲染 */
    onMounted(() => {
      let imgList = []
      for (let i = 0; i < 8; i++) {
        let { x, y } = coordinate(i)
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
      offsetX = e.offsetX + 8
      offsetY = e.offsetY + 8
      currentSelectIndex = index
      document.addEventListener("mousemove", dragImgBlock);
      document.addEventListener("mouseup", putDownImgBlock);
      backupsOriginalImgInfo.index = index
      backupsOriginalImgInfo.styles = {
        left: pictureDataList.value[index].styles.left,
        top: pictureDataList.value[index].styles.top,
      }
      const imgList = pictureDataList.value
      pictureDataList.value = imgList.map((item, i) => {
        if (i === index) {
          item.styles.zIndex = 10
        }
        item.styles.transition = '0s'
        return item
      })
    }
    /**拖拽 */
    const dragImgBlock = (e: any) => {
      const x = e.clientX
      const y = e.clientY
      const tempPicInfo = pictureDataList.value
      tempPicInfo[currentSelectIndex].styles.left = x - offsetX + 'px'
      tempPicInfo[currentSelectIndex].styles.top = y - offsetY + 'px'


      const column = Math.floor(minimum([x, 319]) / 80)
      const line = Math.floor(minimum([y, 159]) / 80)
      const replaceIndex = line * 4 + column
      if (replaceIndex !== backupsOriginalImgInfo.index) {
        const beforeIndex = backupsOriginalImgInfo.index
        tempPicInfo[beforeIndex].styles = {
          ...tempPicInfo[beforeIndex].styles,
          ...backupsOriginalImgInfo.styles,
        }
        console.log(replaceIndex)

        backupsOriginalImgInfo.styles = {
          left: tempPicInfo[replaceIndex].styles.left,
          top: tempPicInfo[replaceIndex].styles.top
        }
        backupsOriginalImgInfo.index = replaceIndex
        let { x, y } = coordinate(currentSelectIndex)
        tempPicInfo[replaceIndex].styles.left = x + 'px'
        tempPicInfo[replaceIndex].styles.top = y + 'px'
      }

      pictureDataList.value = tempPicInfo
    }
    /**松开 */
    const putDownImgBlock = () => {
      const tempPicInfoList = pictureDataList.value

      const replaceIndex = backupsOriginalImgInfo.index
      const tempStyle = tempPicInfoList[currentSelectIndex]
      tempPicInfoList[currentSelectIndex] = tempPicInfoList[replaceIndex]
      tempPicInfoList[currentSelectIndex].styles.zIndex = 1
      let { x, y } = coordinate(replaceIndex)
      tempPicInfoList[replaceIndex] = {
        styles: {
          ...tempStyle.styles,
          left: x + 'px',
          top: y + 'px',
          zIndex:1,
        },
        key: tempStyle.key
      }
      pictureDataList.value = tempPicInfoList
      console.log(pictureDataList.value)
      document.removeEventListener("mousemove", dragImgBlock);
      document.removeEventListener("mouseup", putDownImgBlock);
      currentSelectIndex = -1
    }

    return () => {
      return (
        <div class="drag-captcha-root" style={{ transition: '0.3s' }}>
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