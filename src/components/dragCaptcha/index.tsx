import {
  defineComponent,
  ref,
  Ref,
  reactive,
  onMounted,
  onUpdated,
  watch,
} from 'vue'
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
  props: {
    backendImg: {
      type: String,
      default: '',
      required: true
    },
    crossPosition: {
      type: Array<number>,
      default: [2, 5],
    }
  },

  setup(props) {
    let pictureData: { jigsawPuzzleList: PictureDataType[] } = reactive({
      jigsawPuzzleList: []
    })
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
      let imgList: PictureDataType[] = []
      const subscript = [0, 1, 2, 3, 4, 5, 6, 7]
      const tempSub = [...subscript]
      const cross1 = props.crossPosition[0]
      const cross2 = props.crossPosition[1]
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
      const x = e.clientX
      const y = e.clientY
      const tempPicInfo = pictureData.jigsawPuzzleList
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
    const putDownImgBlock = () => {
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
      setTimeout(() => {
        tempPicInfoList[currentSelectIndex] = tempPicInfoList[replaceIndex]
        tempPicInfoList[replaceIndex] = currentPicData
        currentSelectIndex = -1
        pictureData.jigsawPuzzleList = tempPicInfoList
        console.log(pictureData.jigsawPuzzleList)
      }, 100);

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
        </div>
      )
    }
  }
})