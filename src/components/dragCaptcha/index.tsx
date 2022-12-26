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
    const imgdata: Ref<Array<any>> = ref([{}])
    let currentSelectIndex = -1
    let offsetX = 0
    let offsetY = 0
    /**页面初次渲染 */
    onMounted(() => {
      let imgList = []
      for (let i = 0; i < 8; i++) {
        let x = (i % 4) * 80
        let y = parseInt(String(i / 4)) * 80
        imgList.push({
          left: x + 'px',
          top: y + 'px',
          backgroundImage: `url(${props.backendImg})`,
          backgroundPosition: `${-x}px ${-y}px`,
        })
      }
      imgdata.value = imgList
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
      const tempImgData = imgdata.value
      tempImgData[currentSelectIndex].left = x - offsetX + 'px'
      tempImgData[currentSelectIndex].top = y - offsetY + 'px'
      imgdata.value = tempImgData
    }
    /**松开 */
    const putDownImgBlock = () => {
      document.removeEventListener("mousemove", dragImgBlock);
      document.removeEventListener("mouseup", putDownImgBlock);
      currentSelectIndex = -1
    }

    return () => {
      return (
        <div class="root">
          {
            imgdata.value.map((item, index) => {
              return (
                <div class="content-img" style={item} key={index} onMousedown={(e) => pressImgBlock(e, index)}></div>
              )
            })
          }
        </div>
      )
    }
  }
})