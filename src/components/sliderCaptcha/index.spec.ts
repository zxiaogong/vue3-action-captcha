import { describe, expect, test, it } from "vitest"
import { mount } from "@vue/test-utils"
import SliderCaptcha from "./index.vue"

describe('sliderCaptcha test', () => {
    it('单元测试用例 1', () => {
        const sliderCaptcha = mount(SliderCaptcha, {
            props: {
                errHowTimesRefresh: 2,
            }
        })
        const vm: any = sliderCaptcha.vm
        expect(vm.isHidePuzzle).toBe(true)
    })
})