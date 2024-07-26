import{_ as e}from"./chunks/theme.B80B4RRr.js";import{c as t,a as s,y as l,aG as n,X as i,o as h}from"./chunks/framework.lYNz_Rcs.js";const o=n(`<h1 id="internacionalizacion" tabindex="-1">Internacionalización <a class="header-anchor vp-link" href="#internacionalizacion" aria-label="Permalink to &quot;Internacionalización&quot;">​</a></h1><p>Element Plus components are using English <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h2 id="configuracion-global" tabindex="-1">Configuración global <a class="header-anchor vp-link" href="#configuracion-global" aria-label="Permalink to &quot;Configuración global&quot;">​</a></h2><p>Element Plus proporciona configuraciones globales</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElementPlus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhCn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ElementPlus, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  locale: zhCn,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor vp-link" href="#configprovider" aria-label="Permalink to &quot;ConfigProvider&quot;">​</a></h2><p>Element Plus también proporciona un componente Vue <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a> para establecer globalmente la configuración regional y otros ajustes.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-config-provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">locale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zhCn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-config-provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ElConfigProvider } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhCn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="localizacion-de-fecha-y-hora" tabindex="-1">Localización de fecha y hora <a class="header-anchor vp-link" href="#localizacion-de-fecha-y-hora" aria-label="Permalink to &quot;Localización de fecha y hora&quot;">​</a></h2>`,9),p=i("Utilizamos la librería "),r={href:"https://day.js.org/docs/en/i18n/i18n",class:"vp-link",target:"_blank",rel:"noreferrer"},k=i("Day.js"),c=i(" para gestionar la fecha y hora en componentes como "),d=s("code",null,"DatePicker",-1),E=i(". Es importante establecer una localización adecuada en Day.js para que la internacionalización funcione plenamente. Tiene que importar la configuración regional de Day.js por separado."),g=n(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dayjs/locale/zh-cn&#39;</span></span></code></pre></div><h2 id="uso-de-un-cdn" tabindex="-1">Uso de un CDN <a class="header-anchor vp-link" href="#uso-de-un-cdn" aria-label="Permalink to &quot;Uso de un CDN&quot;">​</a></h2><p>Si está utilizando Element Plus a través de CDN, entonces necesita hacer esto, volvamos a tomar unpkg como ejemplo</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//unpkg.com/element-plus/dist/locale/zh-cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ElementPlus, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locale: ElementPlusLocaleZhCn,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Aquí puede encontrar toda la documentación del <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a></p>`,5),u={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},y=i("Idiomas disponibles"),_=n('<ul class="language-list"><li>Chino simplificado (zh-cn)</li><li>Inglés Americano (en)</li><li>Azerbaijani (az)</li><li>Alemán (de)</li><li>Portugués (pt)</li><li>Español (es)</li><li>Danés (da)</li><li>Francés (fr)</li><li>Noruego (nb-NO)</li><li>Chino tradicional (zh-tw)</li><li>Italiano (it)</li><li>Coreano (ko)</li><li>Japonés (ja)</li><li>Holandés (nl)</li><li>Vietnamita (vi)</li><li>Ruso (ru)</li><li>Turco (tr)</li><li>Portugués brasileño (pt-br)</li><li>Farsi (fa)</li><li>Tailandés (th)</li><li>Indonesio (id)</li><li>Búlgaro (bg)</li><li>Pashto (pa)</li><li>Polaco (pl)</li><li>Finlandés (fi)</li><li>Sueco (sv)</li><li>Griego (el)</li><li>Eslovaco (sk)</li><li>Catalán (ca)</li><li>Checo (cs)</li><li>Ucraniano (uk)</li><li>Turco (tk)</li><li>Tamil (ta)</li><li>Letón (lv)</li><li>Africano (af)</li><li>Estonio (et)</li><li>Eslovaco (sl)</li><li>Árabe (ar)</li><li>Hebreo (he)</li><li>Lituano (lt)</li><li>Mongol (mn)</li><li>Kazakh (kk)</li><li>Húngaro (hu)</li><li>Rumano (ro)</li><li>Kurdo (ku)</li><li>Kurdish (ckb)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbian (sr)</li><li>Basque (eu)</li><li>Kyrgyz (ky)</li><li>Armenian (hy-am)</li><li>Croatian (hr)</li><li>Esperanto (eo)</li><li>Bengali (bn)</li></ul>',1),m=i("Si necesita cualquier otro idioma, "),f={href:"https://github.com/element-plus/element-plus/pulls",class:"vp-link",target:"_blank",rel:"noreferrer"},b=i("PR"),v=i(" siempre es bienvenido, solo necesita añadir un archivo de idioma en "),C={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},F=i("aquí"),A=i("."),S=JSON.parse('{"title":"Internacionalización","description":"","frontmatter":{"title":"Internacionalización","lang":"es-ES"},"headers":[{"level":2,"title":"Configuración global","slug":"configuracion-global","link":"#configuracion-global","children":[]},{"level":2,"title":"ConfigProvider","slug":"configprovider","link":"#configprovider","children":[]},{"level":2,"title":"Localización de fecha y hora","slug":"localizacion-de-fecha-y-hora","link":"#localizacion-de-fecha-y-hora","children":[]},{"level":2,"title":"Uso de un CDN","slug":"uso-de-un-cdn","link":"#uso-de-un-cdn","children":[]}],"relativePath":"es-ES/guide/i18n.md","filePath":"es-ES/guide/i18n.md","lastUpdated":null}'),D={name:"es-ES/guide/i18n.md"},I=Object.assign(D,{setup(P){return(z,T)=>{const a=e;return h(),t("div",null,[o,s("p",null,[p,s("a",r,[k,l(a,{class:"link-icon"})]),c,d,E]),g,s("p",null,[s("a",u,[y,l(a,{class:"link-icon"})])]),_,s("p",null,[m,s("a",f,[b,l(a,{class:"link-icon"})]),v,s("a",C,[F,l(a,{class:"link-icon"})]),A])])}}});export{S as __pageData,I as default};