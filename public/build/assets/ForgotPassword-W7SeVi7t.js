import{T as u,o as i,e as m,b as e,u as a,w as o,F as c,Z as f,t as _,f as p,a as t,n as g,g as w,i as x}from"./app-L-iFAZ25.js";import{A as y}from"./AuthenticationCard-JCX5C1hk.js";import{_ as b}from"./AuthenticationCardLogo-V63YdLIA.js";import{_ as k,a as h}from"./TextInput-a8WVF5Lq.js";import{_ as V}from"./InputLabel-dUp-v9m9.js";import{_ as v}from"./PrimaryButton-fqY9fMWD.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const F=t("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:String},setup(r){const s=u({email:""}),n=()=>{s.post(route("password.email"))};return(C,l)=>(i(),m(c,null,[e(a(f),{title:"Forgot Password"}),e(y,null,{logo:o(()=>[e(b)]),default:o(()=>[F,r.status?(i(),m("div",N,_(r.status),1)):p("",!0),t("form",{onSubmit:x(n,["prevent"])},[t("div",null,[e(V,{for:"email",value:"Email"}),e(k,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":l[0]||(l[0]=d=>a(s).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(h,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",$,[e(v,{class:g({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:o(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{q as default};