(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{318:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("3a644bda",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n.r(e);var o={name:"Button",props:{name:String},data:function(){return{}}},r=(n(320),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",[t._v(t._s(t.name))])}),[],!1,null,"21ad3dc4",null);e.default=component.exports;installComponents(component,{Button:n(319).default})},320:function(t,e,n){"use strict";n(318)},321:function(t,e,n){var o=n(83)(!1);o.push([t.i,"button[data-v-21ad3dc4]{background:#ffd60a;border-radius:8px;width:364px;height:56px;margin:0 auto;border-style:none;font-weight:400;font-size:18px;line-height:24px;cursor:pointer}",""]),t.exports=o},377:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"},380:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("883832f2",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n(380)},432:function(t,e,n){var o=n(83)(!1);o.push([t.i,".finish-registration-container[data-v-5c552633]{padding:32px 0}.finish-registration-container .form-container[data-v-5c552633]{display:flex;flex-direction:column;grid-gap:32px;gap:32px}.finish-registration-container .form-container .input-field[data-v-5c552633]{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.finish-registration-container .form-container .input-field input[data-v-5c552633]{padding:24px 16px;border:1px solid #dfdfdf;border-radius:8px}.finish-registration-container .submit-btn[data-v-5c552633]{padding:64px 0 0}.finish-registration-container .submit-btn button[data-v-5c552633]{background:#ffd60a;border-radius:8px;padding:8px;font-weight:400;font-size:18px;line-height:28px;color:#000;border:none;outline:none;width:100%}.finish-registration-container .submit-btn .loading[data-v-5c552633]{display:flex;justify-content:center;align-items:center;position:relative;background:grey;color:#fff}.finish-registration-container .submit-btn .loading span[data-v-5c552633]{position:absolute;right:5px;bottom:5px}.finish-registration-container .submit-btn .loading span img[data-v-5c552633]{width:20px;height:20px}",""]),t.exports=o},501:function(t,e,n){"use strict";n.r(e);var o={name:"FinishRegistration",data:function(){return{finishRegData:{firstname:"",lastname:"",address1:"",phone_number:""}}},methods:{finishRegistrationHandler:function(){this.loading||this.$emit("finish-registration",this.finishRegData)}},computed:{loading:function(){return this.$store.state.loading}}},r=(n(431),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"finish-registration-container"},[o("div",{staticClass:"form-container"},[o("div",{staticClass:"full-name input-field"},[o("label",{attrs:{for:"first-name"}},[t._v("First Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.finishRegData.firstname,expression:"finishRegData.firstname"}],attrs:{type:"text",name:"first-name",id:"first-name"},domProps:{value:t.finishRegData.firstname},on:{input:function(e){e.target.composing||t.$set(t.finishRegData,"firstname",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"full-name input-field"},[o("label",{attrs:{for:"last-name"}},[t._v("Last Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.finishRegData.lastname,expression:"finishRegData.lastname"}],attrs:{type:"text",name:"last-name",id:"last-name"},domProps:{value:t.finishRegData.lastname},on:{input:function(e){e.target.composing||t.$set(t.finishRegData,"lastname",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"home-address input-field"},[o("label",{attrs:{for:"home-address"}},[t._v("Home Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.finishRegData.address1,expression:"finishRegData.address1"}],attrs:{type:"text",name:"home-address",id:"home-address"},domProps:{value:t.finishRegData.address1},on:{input:function(e){e.target.composing||t.$set(t.finishRegData,"address1",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"phone-number input-field"},[o("label",{attrs:{for:"phone-number"}},[t._v("Phone Number")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.finishRegData.phone_number,expression:"finishRegData.phone_number"}],attrs:{type:"number",name:"phone-number",id:"phone-number"},domProps:{value:t.finishRegData.phone_number},on:{input:function(e){e.target.composing||t.$set(t.finishRegData,"phone_number",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"submit-btn"},[o("button",{class:{loading:t.loading},on:{click:t.finishRegistrationHandler}},[t._v("Finish "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[o("img",{attrs:{src:n(377),alt:"loader"}})])])])])}),[],!1,null,"5c552633",null);e.default=component.exports;installComponents(component,{Button:n(319).default})}}]);