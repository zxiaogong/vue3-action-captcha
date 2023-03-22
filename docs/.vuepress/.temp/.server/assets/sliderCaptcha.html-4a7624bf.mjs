import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.00f3198b.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vue3-action-captcha";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Slider_captcha = resolveComponent("Slider-captcha");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="滑动拼图" tabindex="-1"><a class="header-anchor" href="#滑动拼图" aria-hidden="true">#</a> 滑动拼图</h1><h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3><p></p>`);
  _push(ssrRenderComponent(_component_Slider_captcha, {
    backendImg: _ctx.$withBase("./img/backImg.jpg")
  }, null, _parent));
  _push(`<p></p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> backImg <span class="token keyword">from</span> <span class="token string">&quot;./img/backImg.jpg&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider-captcha</span> <span class="token attr-name">:backendImg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slider-captcha</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p></p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">属性</th><th style="${ssrRenderStyle({ "text-align": "left" })}">类型</th><th style="${ssrRenderStyle({ "text-align": "left" })}">描述</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>backendImg</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>string</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>必选</strong>. 背景图</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>jigsawPosition</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>{ left: number, top: number} </code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>非必选</strong>. 自定义拼图位置</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>isBackendCheck</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>boolean </code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>非必选</strong>. 是否开启后端校验，开启后进行验证会调用verifyChange方法</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>errHowTimesRefresh</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number </code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>非必选</strong>. 验证失败几次后重新刷新拼图，默认1次</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>allowEroor</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>number </code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>非必选</strong>. 允许误差，默认2像素</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">事件名</th><th style="${ssrRenderStyle({ "text-align": "left" })}">说 明</th><th style="${ssrRenderStyle({ "text-align": "left" })}">回调参数</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>verifySuccess</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>验证成功时回调</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Function()</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>verifyError</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>验证失败时回调</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Function()</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>verifyChange</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>后端校验时回调</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Function(value, Function(result:boolean / undefined))</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>verifyRefresh</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>刷新时回调</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Function()</code></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/redemFiles/sliderCaptcha.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sliderCaptcha_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "sliderCaptcha.html.vue"]]);
export {
  sliderCaptcha_html as default
};
