import { defineClientConfig, usePagesData } from '@vuepress/client'

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
    },
    setup() { },
    rootComponents: [],
})