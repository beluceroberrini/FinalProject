import{_,r as n,x as b,y,z as h,o as v,a as f,b as e,w as k,l as i,v as c,h as u,A as w,B as S,p as I,k as B,C as L}from"./file_index.f594e2d7.js";const o=a=>(I("data-v-11c91101"),a=a(),B(),a),V={class:"max-w-2xl mx-auto"},C={class:"bg-white box1 shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto"},E=o(()=>e("h3",{class:"text-xl font-medium text-gray-900 dark:text-white"},"Let's begining!",-1)),N=o(()=>e("label",{for:"email",class:"text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"}," Email",-1)),T=o(()=>e("label",{for:"password",class:"text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"},"Contrase\xF1a",-1)),A=o(()=>e("div",{class:""},[e("a",{href:"#",class:"text-sm olvidado hover:underline ml-auto"},"Has olvidado tu contrase\xF1a?")],-1)),R=o(()=>e("button",{type:"submit",class:"colorBoton w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Iniciar Sesi\xF3n",-1)),q={class:"text-sm textoFondo font-medium text-gray-500 dark:text-gray-300"},M={__name:"Login",setup(a){const r=n(),d=n(),m=b(),g=y(),p=async()=>{const l=await L(r.value,d.value);m.login(l),console.log(l),g.push({name:"home"})};return(l,t)=>{const x=h("router-link");return v(),f("div",V,[e("div",C,[e("form",{onSubmit:t[2]||(t[2]=k(s=>p(),["prevent"])),class:"space-y-6",action:"#"},[E,e("div",null,[N,i(e("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",placeholder:"name@company.com",required:""},null,512),[[c,r.value]])]),e("div",null,[T,i(e("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=s=>d.value=s),placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",required:""},null,512),[[c,d.value]])]),A,R,e("div",q,[u("No estas registrado? "),w(x,{to:{name:"register"},class:"registrate hover:underline dark:text-blue-500"},{default:S(()=>[u("REGISTRATE!")]),_:1})])],32)])])}}},z=_(M,[["__scopeId","data-v-11c91101"]]);export{z as default};
