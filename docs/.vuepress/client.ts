import { defineClientConfig, usePagesData } from '@vuepress/client'
import actionCaptchafrom from "vue3-action-captcha"
import  "vue3-action-captcha/dist/lib/style.css"
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        const pagesData = usePagesData()
        console.log(pagesData.value)
        Promise.all(Object.keys(pagesData.value).map(key => {
            const pageFun = pagesData.value[key] as Function
            return pageFun()
        }
        )).then((pages)=>{
            console.log(pages)
        })
        app.use(actionCaptchafrom)
    },
    setup() { },
    rootComponents: [],
})