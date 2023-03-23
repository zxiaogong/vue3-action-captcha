import { defineClientConfig, usePagesData } from '@vuepress/client'
import actionCaptchafrom from "../../node_modules/vue3-action-captcha"
// const actionCaptchafrom =  require('vue3-action-captcha')
import  "../../node_modules/vue3-action-captcha/dist/lib/style.css"
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        const pagesData = usePagesData()
        Promise.all(Object.keys(pagesData.value).map(key => {
            const pageFun = pagesData.value[key] as Function
            return pageFun()
        }
        )).then((pages)=>{ 
            // console.log(pages)
        })
        app.use(actionCaptchafrom)
    },
    setup() { },
    rootComponents: [],
})