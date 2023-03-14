import * as components from "./components";
import type { App } from "vue"
import { forEach } from "lodash-es"

const verifyComponents = {
    install: (app: App) => {
        forEach(components, (item => {
            console.log(item.name)
            app.component(item.name, item)
        }))
    }
}
export default verifyComponents

export { components }