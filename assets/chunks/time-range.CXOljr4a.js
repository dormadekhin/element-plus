import{p as m,r as n,q as _,o as r,t as i,c,y as d}from"./framework.lYNz_Rcs.js";const p=m({__name:"basic",setup(u){const e=n("");return(a,l)=>{const t=_("el-time-select");return r(),i(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),style:{width:"240px"},start:"08:30",step:"00:15",end:"18:30",placeholder:"Select time"},null,8,["modelValue"])}}}),g=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),v=m({__name:"time-formats",setup(u){const e=n("");return(a,l)=>{const t=_("el-time-select");return r(),i(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),style:{width:"240px"},start:"00:00",step:"00:30",end:"23:59",placeholder:"Select time",format:"hh:mm A"},null,8,["modelValue"])}}}),y=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),f={class:"demo-time-range"},b=m({__name:"time-range",setup(u){const e=n(""),a=n("");return(l,t)=>{const o=_("el-time-select");return r(),c("div",f,[d(o,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s),style:{width:"240px"},"max-time":a.value,class:"mr-4",placeholder:"Start time",start:"08:30",step:"00:15",end:"18:30"},null,8,["modelValue","max-time"]),d(o,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),style:{width:"240px"},"min-time":e.value,placeholder:"End time",start:"08:30",step:"00:15",end:"18:30"},null,8,["modelValue","min-time"])])}}}),x=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{g as _,y as a,x as b};