<template><div><h1 id="滑动拼图" tabindex="-1"><a class="header-anchor" href="#滑动拼图" aria-hidden="true">#</a> 滑动拼图</h1>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<p></p>
<Drag-captcha :backendImg="$withBase('./img/backImg.jpg')"></Drag-captcha><p></p>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> backImg <span class="token keyword">from</span> <span class="token string">"./img/backImg.jpg"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Drag-captcha</span> <span class="token attr-name">:backendImg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Drag-captcha</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
<p></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>backendImg</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left"><strong>必选</strong>. 背景图</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>crossPosition</code></td>
<td style="text-align:left"><code v-pre>Array&lt;number&gt;</code></td>
<td style="text-align:left"><strong>非必选</strong>. 对换的拼图位置0~7，例如:[2,4]</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isBackendCheck</code></td>
<td style="text-align:left"><code v-pre>boolean </code></td>
<td style="text-align:left"><strong>非必选</strong>. 是否开启后端校验，开启后进行验证会调用verifyChange方法</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>errHowTimesRefresh</code></td>
<td style="text-align:left"><code v-pre>number </code></td>
<td style="text-align:left"><strong>非必选</strong>. 验证失败几次后重新刷新拼图，默认1次</td>
</tr>
</tbody>
</table>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<table>
<thead>
<tr>
<th style="text-align:left">事件名</th>
<th style="text-align:left">说 明</th>
<th style="text-align:left">回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>verifySuccess</code></td>
<td style="text-align:left"><code v-pre>验证成功时回调</code></td>
<td style="text-align:left"><code v-pre>Function()</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>verifyError</code></td>
<td style="text-align:left"><code v-pre>验证失败时回调</code></td>
<td style="text-align:left"><code v-pre>Function()</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>verifyChange</code></td>
<td style="text-align:left"><code v-pre>后端校验时回调</code></td>
<td style="text-align:left"><code v-pre>Function(value, Function(result:boolean / undefined))</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>verifyRefresh</code></td>
<td style="text-align:left"><code v-pre>刷新时回调</code></td>
<td style="text-align:left"><code v-pre>Function()</code></td>
</tr>
</tbody>
</table>
</div></template>


