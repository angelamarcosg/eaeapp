import{d as i,T as _,o as f,c as g,w as e,g as n,a as l,b as r,u as o,n as V}from"./app-L-iFAZ25.js";import{_ as v}from"./ActionMessage-9cCQkVbc.js";import{_ as y}from"./FormSection-c5smJQ8m.js";import{_ as d,a as p}from"./TextInput-a8WVF5Lq.js";import{_ as c}from"./InputLabel-dUp-v9m9.js";import{_ as P}from"./PrimaryButton-fqY9fMWD.js";import"./SectionTitle-xCA70M1D.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},F={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(U,a)=>(f(),g(y,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",b,[r(c,{for:"current_password",value:"Current Password"}),r(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[r(c,{for:"password",value:"New Password"}),r(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",S,[r(c,{for:"password_confirmation",value:"Confirm Password"}),r(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(v,{on:o(s).recentlySuccessful,class:"me-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"]),r(P,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{F as default};