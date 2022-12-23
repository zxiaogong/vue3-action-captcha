import {
  defineComponent,
  ref,
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

  setup() {
    /**页面初次渲染 */
    onMounted(() => {

    })
    return () => {
      return (
        <div class="root">
          {
            imgs.map((item, index) => {
              let left = (index % 4) * 25 + '%'
              let top = parseInt(String(index / 4)) * 50 + '%'
              return (
                <div class="content-img" style={{ left, top }}>
                  <img src={item} key={index}></img>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
})