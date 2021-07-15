import{o as t,c as a,a as n}from"./app.b2699450.js";const s='{"title":"CountTo","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/count-to.md","lastUpdated":1626346432889}',o={},e=n('<h1 id="countto"><a class="header-anchor" href="#countto" aria-hidden="true">#</a> CountTo</h1><p>数字动画组件</p><p>该组件对 <a href="https://github.com/PanJiaChen/vue-countTo" target="_blank" rel="noopener noreferrer">vue-countTo</a> 进行了重构，改造成适配 vue3 语法的组件。</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountTo</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>#409EFF<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:startVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:endVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CountTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/CountTo/index&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      CountTo<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>startVal</td><td><code>number</code></td><td><code>0</code></td><td>起始值</td></tr><tr><td>endVal</td><td><code>number</code></td><td><code>2021</code></td><td>结束值</td></tr><tr><td>duration</td><td><code>number</code></td><td><code>1500</code></td><td>动画持续时间</td></tr><tr><td>autoplay</td><td><code>boolean</code></td><td><code>true</code></td><td>自动执行</td></tr><tr><td>prefix</td><td><code>string</code></td><td>-</td><td>前缀</td></tr><tr><td>suffix</td><td><code>string</code></td><td>-</td><td>后缀</td></tr><tr><td>separator</td><td><code>string</code></td><td><code>,</code></td><td>分隔符</td></tr><tr><td>color</td><td><code>string</code></td><td>-</td><td>字体颜色</td></tr><tr><td>useEasing</td><td><code>boolean</code></td><td><code>true</code></td><td>是否开启动画</td></tr><tr><td>transition</td><td><code>string</code></td><td><code>linear</code></td><td>动画效果</td></tr><tr><td>decimals</td><td><code>number</code></td><td><code>0</code></td><td>保留小数点位数</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>start</td><td><code>()=&gt;void</code></td><td>开始执行动画</td></tr><tr><td>reset</td><td><code>()=&gt;void</code></td><td>重置</td></tr></tbody></table>',9);o.render=function(n,s,o,p,d,c){return t(),a("div",null,[e])};export default o;export{s as __pageData};
