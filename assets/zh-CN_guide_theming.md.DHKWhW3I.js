import{_ as t}from"./chunks/theme.B80B4RRr.js";import{c as e,a as s,y as n,X as i,aG as l,o as p}from"./chunks/framework.lYNz_Rcs.js";const h=s("h1",{id:"自定义主题",tabindex:"-1"},[i("自定义主题 "),s("a",{class:"header-anchor vp-link",href:"#自定义主题","aria-label":'Permalink to "自定义主题"'},"​")],-1),k=s("p",null,"Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果需要大规模替换样式，例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。",-1),E=s("p",null,"我们提供四种方法来改变样式变量。",-1),r=s("h2",{id:"更换主题色",tabindex:"-1"},[i("更换主题色 "),s("a",{class:"header-anchor vp-link",href:"#更换主题色","aria-label":'Permalink to "更换主题色"'},"​")],-1),c=s("p",null,"以下是自定义主题的一些例子。",-1),d=i("全部导入："),o={href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},g=i("element-plus-vite-starter"),y=i("按需导入："),u={href:"https://github.com/element-plus/unplugin-element-plus",class:"vp-link",target:"_blank",rel:"noreferrer"},F=i("unplugin-element-plus/examples/vite"),_=s("h3",{id:"通过-scss-变量",tabindex:"-1"},[i("通过 SCSS 变量 "),s("a",{class:"header-anchor vp-link",href:"#通过-scss-变量","aria-label":'Permalink to "通过 SCSS 变量"'},"​")],-1),m=s("code",null,"theme-chalk",-1),C=i(" 使用SCSS编写而成。 你可以在 "),v={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noreferrer"},A=s("code",null,"packages/theme-chalk/src/common/var.scss",-1),b=i(" 文件中查找SCSS变量。"),D={class:"warning custom-block"},B=s("p",{class:"custom-block-title"},"WARNING",-1),S=i("我们使用 sass 模块（"),f={href:"https://sass-lang.com/documentation/values/maps",class:"vp-link",target:"_blank",rel:"noreferrer"},x=i("sass:map"),P=i("...）和 "),T=s("code",null,"@use",-1),q=i(" 来重构所有的 SCSS 变量。 通过对所有 SCSS 变量使用 "),N=s("code",null,"@use",-1),I=i("，解决了由 "),V=s("code",null,"@import",-1),w=i(" 造成的重复输出问题。"),R={href:"https://css-tricks.com/introducing-sass-modules/",class:"vp-link",target:"_blank",rel:"noreferrer"},$=i("介绍Sass 模块 | CSS-TRICKS"),z=s("p",null,[i("例如，我们使用 "),s("code",null,"$colors"),i(" 作为 map 来保存不同类型的颜色。")],-1),O=s("p",null,[s("code",null,"$notification"),i(" 是所有 "),s("code",null,"notification"),i(" 组件的变量的映射。")],-1),U=i("今后，我们将为每个组件自定义的变量编写文档。 你也可以直接查看源代码 "),j={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noreferrer"},G=i("var.scss"),W=i("。"),M=l(`<div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">deep-merge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;white&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#ffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;black&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;primary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#409eff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#67c23a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;warning&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#e6a23c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;danger&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#f56c6c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#f56c6c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#909399</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ),</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  $colors</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="如何覆盖它" tabindex="-1">如何覆盖它？ <a class="header-anchor vp-link" href="#如何覆盖它" aria-label="Permalink to &quot;如何覆盖它？&quot;">​</a></h3><p>如果您的项目也使用了 SCSS，可以直接修改 Element Plus 的样式变量。 新建一个样式文件，例如 <code>styles/element/index.scss</code>：</p>`,3),J={class:"warning custom-block"},K=s("p",{class:"custom-block-title"},"WARNING",-1),X=s("p",null,[i("您应该使用 "),s("code",null,"@use 'xxx.scss' as *;"),i(" 代替 "),s("code",null,"@import 'xxx.scss';"),i("。")],-1),H=s("p",null,[i("因为 sass 团队说他们最终会删除 "),s("code",null,"@import"),i(" 语法。")],-1),L={href:"https://sass-lang.com/documentation/at-rules/use",class:"vp-link",target:"_blank",rel:"noreferrer"},Q=i("Sass: @use"),Y=i(" vs "),Z={href:"https://sass-lang.com/documentation/at-rules/import",class:"vp-link",target:"_blank",rel:"noreferrer"},ss=i("Sass: @import"),is=l(`<div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// styles/element/index.scss</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 只需要重写你需要的即可 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@forward</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/theme-chalk/src/common/var.scss&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  $colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;primary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果只是按需导入，则可以忽略以下内容。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果你想导入所有样式:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span></span></code></pre></div><p>然后在你的项目入口文件中，导入这个样式文件以替换 Element Plus 内置的 CSS：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 element-plus scss 文件之前导入<code>element/index.scss</code>以避免 sass 混合变量的问题，因为我们需要通过你的自定义变量生成 light-x。</p></div><p>创建一个 <code>element/index.scss</code> 文件来合并你的变量和 element-plus 的变量。 （如果你在 TypeScript 中导入了它们，他们将不会被合并）</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>除此以外，你应该将你的 scss 文件与 element 变量的 scss 文件区分开来。 如果将它们混合在一起，<code>element-plus</code> 每次热更新都需要编译大量的 scss 文件，这将会导致编译速度变慢。</p></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./styles/element/index.scss&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElementPlus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ElementPlus)</span></span></code></pre></div><p>如果你正在使用vite，并且你想在按需导入时自定义主题。</p><p>使用 <code>scss.additionalData</code> 来编译所有应用 scss 变量的组件。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 你也可以使用 unplugin-vue-components</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// import Components from &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者使用 unplugin-element-plus</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElementPlus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unplugin-element-plus/vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;~/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  css: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preprocessorOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scss: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        additionalData: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`@use &quot;~/styles/element/index.scss&quot; as *;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // use unplugin-vue-components</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Components({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //   resolvers: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     ElementPlusResolver({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //       importStyle: &quot;sass&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //       // directives: true,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //       // version: &quot;2.1.5&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //   ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 或者使用 unplugin-element-plus</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ElementPlus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      useSource: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>如果您正在使用 webpack，并且需要在按需导入时自定义主题。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// webpack.config.ts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 unplugin-element-plus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElementPlus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unplugin-element-plus/webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  css: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loaderOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scss: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        additionalData: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`@use &quot;~/styles/element/index.scss&quot; as *;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ElementPlus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      useSource: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="通过-css-变量设置" tabindex="-1">通过 CSS 变量设置 <a class="header-anchor vp-link" href="#通过-css-变量设置" aria-label="Permalink to &quot;通过 CSS 变量设置&quot;">​</a></h3><p>CSS 变量是一个非常有用的功能，几乎所有浏览器都支持。 （IE：啊这？)</p>`,13),as=i("从 "),ns={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",class:"vp-link",target:"_blank",rel:"noreferrer"},ls=i("使用CSS自定义属性(变量) | MDN"),ts=i(" 了解更多信息"),es=l(`<p>我们用 css 变量来重构了几乎所有组件的样式系统。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>它兼容 SCSS 变量系统。 我们使用 SCSS 的函数自动生成需要用到的 css 变量。</p></div><p>这意味着你可以动态地改变组件内的个别变量，以便更好地自定义组件样式，而不需要修改 SCSS 文件重新编译一次。</p><blockquote><p>之后，每个组件的 css 变量名称和作用将被写入到对应的组件文档中。</p></blockquote><p>就像这样：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --el-color-primary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果你只想自定义一个特定的组件，只需为某些组件单独添加内联样式。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-tag</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--el-tag-bg-color: red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Tag&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>出于性能原因，更加推荐你在类名下添加自定义 css 变量，而不是在全局的 <code>:root</code> 下。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --el-tag-bg-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果您想要通过 js 控制 css 变量，可以这样做：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// document.documentElement 是全局变量时</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.documentElement</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// const el = document.getElementById(&#39;xxx&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取 css 变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComputedStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPropertyValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`--el-color-primary\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置 css 变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">el.style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--el-color-primary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;red&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,12),ps=i("如果你想要更优雅的方式，请看这里。 "),hs={href:"https://vueuse.org/core/usecssvar/",class:"vp-link",target:"_blank",rel:"noreferrer"},ks=i("useCssVar | VueUse"),ys=JSON.parse('{"title":"主题","description":"","frontmatter":{"title":"主题","lang":"zh-CN"},"headers":[{"level":2,"title":"更换主题色","slug":"更换主题色","link":"#更换主题色","children":[{"level":3,"title":"通过 SCSS 变量","slug":"通过-scss-变量","link":"#通过-scss-变量","children":[]},{"level":3,"title":"如何覆盖它？","slug":"如何覆盖它","link":"#如何覆盖它","children":[]},{"level":3,"title":"通过 CSS 变量设置","slug":"通过-css-变量设置","link":"#通过-css-变量设置","children":[]}]}],"relativePath":"zh-CN/guide/theming.md","filePath":"zh-CN/guide/theming.md","lastUpdated":null}'),Es={name:"zh-CN/guide/theming.md"},us=Object.assign(Es,{setup(rs){return(cs,ds)=>{const a=t;return p(),e("div",null,[h,k,E,r,c,s("ul",null,[s("li",null,[d,s("a",o,[g,n(a,{class:"link-icon"})])]),s("li",null,[y,s("a",u,[F,n(a,{class:"link-icon"})])])]),_,s("p",null,[m,C,s("a",v,[A,n(a,{class:"link-icon"})]),b]),s("div",D,[B,s("p",null,[S,s("a",f,[x,n(a,{class:"link-icon"})]),P,T,q,N,I,V,w]),s("blockquote",null,[s("p",null,[s("a",R,[$,n(a,{class:"link-icon"})])])]),z,O,s("p",null,[U,s("a",j,[G,n(a,{class:"link-icon"})]),W])]),M,s("div",J,[K,X,H,s("blockquote",null,[s("p",null,[s("a",L,[Q,n(a,{class:"link-icon"})]),Y,s("a",Z,[ss,n(a,{class:"link-icon"})])])])]),is,s("blockquote",null,[s("p",null,[as,s("a",ns,[ls,n(a,{class:"link-icon"})]),ts])]),es,s("p",null,[ps,s("a",hs,[ks,n(a,{class:"link-icon"})])])])}}});export{ys as __pageData,us as default};