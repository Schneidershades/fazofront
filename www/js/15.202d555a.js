(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"2b64":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"q-pa-md q-gutter-sm"},[s("q-breadcrumbs",[s("q-breadcrumbs-el",{attrs:{label:"Home"}}),s("q-breadcrumbs-el",{attrs:{label:"Security"}})],1)],1),s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"q-gutter-y-md"},[s("q-card",[s("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("q-tab",{attrs:{name:"mails",label:"Change Phone Number"}}),s("q-tab",{attrs:{name:"alarms",label:"Change Password"}}),s("q-tab",{attrs:{name:"movies",label:"Change Email"}})],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("q-tab-panel",{attrs:{name:"mails"}},[s("ChangePhoneNumber")],1),s("q-tab-panel",{attrs:{name:"alarms"}},[s("ChangePassword")],1),s("q-tab-panel",{attrs:{name:"movies"}},[s("ChangeEmail")],1)],1)],1)],1)])])},a=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"text-h6"},[e._v("Change Phone Number")]),e._v("\n        You can verify your new phone number here\n\t\t"),s("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 q-pa-sm"},[s("q-input",{ref:"fldPasswordChangeConfirm",attrs:{filled:"",label:"Your current password",type:e.isPwd?"password":"","lazy-rules":"",rules:e.ConfirmPWD},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.form.current_password,callback:function(t){e.$set(e.form,"current_password",t)},expression:"form.current_password"}})],1),s("div",{staticClass:"col-12 q-pa-sm"},[s("q-input",{ref:"fldPasswordChange",attrs:{filled:"",label:"Create a password",type:e.isPwd?"password":"","lazy-rules":"",rules:e.Required},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.form.new_password,callback:function(t){e.$set(e.form,"new_password",t)},expression:"form.new_password"}})],1),s("div",{staticClass:"col-12 q-pa-sm"},[s("q-input",{ref:"fldPasswordChangeConfirm",attrs:{filled:"",label:"Confirm your password",type:e.isPwd?"password":"","lazy-rules":"",rules:e.ConfirmPWD},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)]),s("div",[s("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)])],1)},o=[],i={data:function(){return{password:"",isPwd:!0,form:{current_password:"",new_password:"",confirm_password:""}}},computed:{ConfirmPWD:function(){var e=this;return[function(e){return!!e||"Choose a password"},function(t){return t==e.$refs.fldPasswordChange.value||"Password does not match"}]},Required:function(){return[function(e){return!!e||"Choose a password"}]}},methods:{onSubmit:function(){},onReset:function(){}}},l=i,u=s("2877"),c=Object(u["a"])(l,r,o,!1,null,null,null),p=c.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"bg-primary"},[e._v(e._s(e.message))]),s("q-stepper",{ref:"stepper",attrs:{"header-nav":"",color:"primary",animated:"",flat:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("q-step",{attrs:{name:1,title:"Your phone number",icon:"settings",done:e.step>1,"header-nav":e.step>1}},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.submitPhone}},[s("q-input",{attrs:{filled:"",prefix:"+234",label:"Phone Number",mask:"(###) ### - ####","unmasked-value":"",hint:"Hint : (703) 749 - 5705","lazy-rules":"",rules:[function(e){return!!e||"* Required"},function(e){return e&&e.length>0||"Please type in your phone number"}]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),s("q-stepper-navigation",[s("q-btn",{attrs:{type:"submit",color:"primary",label:"Continue"}})],1)],1)],1),s("q-step",{attrs:{name:2,title:"Enter Otp received",icon:"create_new_folder",done:e.step>2,"header-nav":e.step>2}},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.submitPhone}},[e._v("\n    \t        \tKindly provide your OTP Code.\n    \t\t        "),s("q-input",{attrs:{filled:"",prefix:"G-",label:"Phone Number",mask:"####","unmasked-value":"",hint:"Hint : 5705","lazy-rules":"",rules:[function(e){return!!e||"* Required"},function(e){return e&&e.length>0||"Please type in your phone number"}]},model:{value:e.otpCode,callback:function(t){e.otpCode=t},expression:"otpCode"}}),s("q-stepper-navigation",[s("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:e.submitOTP}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1)],1),s("q-step",{attrs:{name:3,title:"Phone number",icon:"add_comment","header-nav":e.step>3}},[s("div",{staticClass:"row"},[e._v("\n\t\t            The Phone number has been changed\n\t\t        ")]),s("q-stepper-navigation")],1)],1)],1)},d=[],f=s("ded3"),h=s.n(f),b=s("2f62"),v=s("b178"),g={data:function(){return{otpCode:"",errorMessages:[],error:"",form:{phone:""},step:1}},computed:h()(h()({},Object(b["c"])({message:"message",errorMessage:"errorMessage",newPhoneNumber:"auth/phone"})),{},{ConfirmPWD:function(){var e=this;return[function(e){return!!e||"Choose a password"},function(t){return t==e.$refs.fldPasswordChange.value||"Password does not match"}]},Required:function(){return[function(e){return!!e||"Choose a password"}]}}),methods:h()(h()({},Object(b["b"])({stepOneValidation:"auth/sendPhoneNumber",stepTwoValidation:"auth/verifyOTP",stepThreeValidation:"auth/signUp"})),{},{submitPhone:function(){var e=this;this.stepOneValidation(this.form).then((function(t){return e.newUser.phone="234"+e.newPhoneNumber.phone,e.step=2})).catch((function(t){e.errorMessages=t,console.log(e.errorMessages),e.errorMessages.phone&&e.negativeNotification(t.phone[0]),e.errorMessages&&e.negativeNotification(e.errorMessages)}))},submitOTP:function(){var e=this;this.stepTwoValidation({phone:this.newPhoneNumber.phone,otp:this.otpCode}).then((function(t){return e.step=3})).catch((function(t){console.log(t),e.errorMessages=t,t&&e.negativeNotification(t.error)}))},positiveNotification:function(e){v["b"].create({type:"positive",color:"positive",timeout:3e3,position:"center",message:e})},negativeNotification:function(e){v["b"].create({type:"negative",color:"negative",timeout:3e3,position:"center",message:e})}})},w=g,q=Object(u["a"])(w,m,d,!1,null,null,null),C=q.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"bg-primary"},[e._v(e._s(e.message))]),s("q-stepper",{ref:"stepper",attrs:{"header-nav":"",color:"primary",animated:"",flat:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("q-step",{attrs:{name:1,title:"Enter Email Address",icon:"settings",done:e.step>1,"header-nav":e.step>1},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.submitPhone}},[s("q-input",{ref:"name",attrs:{filled:"",label:"Your Email *",hint:"Please insert your email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]}}),s("q-stepper-navigation",[s("q-btn",{attrs:{type:"submit",color:"primary",label:"Continue"}})],1)],1)],1),s("q-step",{attrs:{name:2,title:"Enter Code received",icon:"create_new_folder",done:e.step>2,"header-nav":e.step>2}},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.submitOTP}},[e._v("\n    \t        \tKindly provide your Email Code.\n    \t\t        "),s("q-input",{attrs:{filled:"",prefix:"G-",label:"Phone Number",mask:"####","unmasked-value":"",hint:"Hint : 5705","lazy-rules":"",rules:[function(e){return!!e||"* Required"},function(e){return e&&e.length>0||"Please type in your phone number"}]},model:{value:e.otpCode,callback:function(t){e.otpCode=t},expression:"otpCode"}}),s("q-stepper-navigation",[s("q-btn",{attrs:{type:"submit",color:"primary",label:"Continue"}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1)],1),s("q-step",{attrs:{name:3,title:"Email Status",icon:"add_comment","header-nav":e.step>3}},[s("div",{staticClass:"row"},[e._v("\n\t\t            The Phone number has been changed\n\t\t        ")])])],1)],1)},P=[],_={data:function(){return{otpCode:"",errorMessages:[],error:"",form:{email:""},step:1}},computed:h()({},Object(b["c"])({message:"message",errorMessage:"errorMessage",newPhoneNumber:"auth/phone"})),methods:h()(h()({},Object(b["b"])({stepOneValidation:"auth/sendPhoneNumber",stepTwoValidation:"auth/verifyOTP",stepThreeValidation:"auth/signUp"})),{},{submitPhone:function(){var e=this;this.stepOneValidation(this.form).then((function(t){return e.newUser.phone="234"+e.newPhoneNumber.phone,e.step=2})).catch((function(t){e.errorMessages=t,console.log(e.errorMessages),e.errorMessages.phone&&e.negativeNotification(t.phone[0]),e.errorMessages&&e.negativeNotification(e.errorMessages)}))},submitOTP:function(){var e=this;this.stepTwoValidation({phone:this.newPhoneNumber.phone,otp:this.otpCode}).then((function(t){return e.step=3})).catch((function(t){console.log(t),e.errorMessages=t,t&&e.negativeNotification(t.error)}))},positiveNotification:function(e){v["b"].create({type:"positive",color:"positive",timeout:3e3,position:"center",message:e})},negativeNotification:function(e){v["b"].create({type:"negative",color:"negative",timeout:3e3,position:"center",message:e})}})},k=_,N=Object(u["a"])(k,y,P,!1,null,null,null),x=N.exports,O={data:function(){return{tab:"mails"}},components:{ChangePassword:p,ChangePhoneNumber:C,ChangeEmail:x}},M=O,T=Object(u["a"])(M,n,a,!1,null,null,null);t["default"]=T.exports}}]);