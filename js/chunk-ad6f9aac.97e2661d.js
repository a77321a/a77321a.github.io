(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad6f9aac"],{"22fb":function(e,t,o){e.exports=o.p+"img/login_bg.1de8de0c.png"},"54a5":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",{staticClass:"login",attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[o("el-col",{staticStyle:{width:"368px"},attrs:{xs:{span:22}}},[o("div",{staticClass:"major"},[e._v("找回密码")]),o("el-row",{staticClass:"login-form"},[o("el-form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[o("el-form-item",{attrs:{prop:"mobile"}},[o("el-input",{attrs:{prefix:"ios-phone-portrait",size:"large",clearable:"",placeholder:"请输入手机号",autocomplete:"off"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),o("el-form-item",{staticStyle:{position:"relative"},attrs:{prop:"imgCode"}},[o("el-input",{attrs:{type:"text",prefix:"ios-lock",size:"large",placeholder:"验证码",autocomplete:"off"},model:{value:e.form.imgCode,callback:function(t){e.$set(e.form,"imgCode",t)},expression:"form.imgCode"}}),o("img",{staticClass:"img-code",attrs:{src:e.imgIndetCode,alt:""},on:{click:e.getIdentCode}})],1),o("el-form-item",{staticStyle:{position:"relative"},attrs:{prop:"code"}},[o("el-input",{attrs:{prefix:"ios-person",size:"large",placeholder:"请输入验证码",autocomplete:"off"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),o("el-button",{staticClass:"img-code code-btn",staticStyle:{color:"#2d8cf0"},attrs:{disabled:e.codeBtn,type:"text"},on:{click:e.getSmsCode}},[e._v(e._s(e.codeBtnInfo))])],1),o("el-form-item",{attrs:{prop:"new_pass"}},[o("el-input",{attrs:{type:"password",prefix:"ios-lock",size:"large",clearable:"",placeholder:"新密码",autocomplete:"off"},model:{value:e.form.new_pass,callback:function(t){e.$set(e.form,"new_pass",t)},expression:"form.new_pass"}})],1),o("el-form-item",{attrs:{prop:"confirm_new_pass"}},[o("el-input",{attrs:{type:"password",prefix:"ios-lock",size:"large",placeholder:"确认新密码"},model:{value:e.form.confirm_new_pass,callback:function(t){e.$set(e.form,"confirm_new_pass",t)},expression:"form.confirm_new_pass"}})],1)],1),o("el-row",[o("el-button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",long:""},on:{click:e.submit}},[o("span",[e._v("重设密码")])])],1),o("el-button",{staticStyle:{float:"right",color:"#2d8cf0"},attrs:{type:"text"},on:{click:function(t){return e.$router.push({name:"Login"})}}},[e._v("返回登录")])],1)],1)],1)},i=[],n={data:function(){var e=this,t=function(t,o,r){var i=/^1\d{10}$/;""===o?r(new Error("请输入正确的手机号码")):!1===i.test(o)?r(new Error("请输入正确的11位号码！")):e.isMobile(r)},r=function(t,o,r){""===o?r(new Error("请输入验证码")):e.isMobile(r)},i=function(t,o,r){""===o?r(new Error("请再次输入密码")):e.form.reNewPass!==e.form.newPass?r(new Error("两次输入密码不一致")):r()};return{loginBg:o("22fb"),codeBtn:!1,codeBtnInfo:"获取验证码",imgIndetCode:"",imgkey:"",loading:!1,sending:!1,sended:!1,maxLength:6,errorCode:"",form:{mobile:"",code:"",imgCode:"",new_pass:"",confirm_new_pass:""},rules:{mobile:[{required:!0,validator:t,trigger:"blur"}],imgCode:[{required:!0,message:"图片验证码必须填写",trigger:"blur"}],code:[{required:!0,validator:r,trigger:"blur"}],new_pass:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"密码长度在 6 到 16 个字符",trigger:"blur"}],confirm_new_pass:[{required:!0,validator:i,trigger:"blur"}]}}},created:function(){this.getIdentCode()},methods:{getIdentCode:function(){var e=this;this.$http.get("/api/app/captcha").then(function(t){e.imgIndetCode=t.data.img,e.imgkey=t.data.key})},submit:function(){var e=this;this.$refs["usernameLoginForm"].validate(function(t){t&&e.$http.post("/api/app/findpass",{mobile:e.form.mobile,new_pass:e.form.new_pass,confirm_new_pass:e.form.confirm_new_pass,code:e.form.code,admin:!0}).then(function(t){200==t.code?e.$router.push({name:"login"}):e.getIdentCode()})})},getSmsCode:function(){var e=this;this.$refs["usernameLoginForm"].validateField("mobile",function(t){if(""!==t)return!1;e.$refs["usernameLoginForm"].validateField("imgCode",function(t){if(""!==t)return!1;e.$http.post("/api/app/getsmscode",{mobile:e.form.mobile,sms_type:"findpassword",captcha:e.form.imgCode,key:e.imgkey}).then(function(t){if(200==t.code){var o=60;e.codeBtn=!0,e.$Message.success("验证码已发送");var r=setInterval(function(){o--,e.codeBtnInfo="重新发送"+o,o<0&&(e.codeBtn=!1,clearInterval(r),e.codeBtnInfo="获取验证码")},1e3)}else 201==t.code&&e.getIdentCode()}).catch(function(e){console.log(e)})})})},isMobile:function(e){this.$http.post("/api/app/isMobile",{mobile:this.form.mobile,type:1}).then(function(t){200==t.code?e():e(t.msg)}).catch(function(e){console.log(e)})}},mounted:function(){}},s=n,a=(o("81c1"),o("2877")),l=Object(a["a"])(s,r,i,!1,null,"5e4d7612",null);t["default"]=l.exports},"81c1":function(e,t,o){"use strict";var r=o("dc16"),i=o.n(r);i.a},dc16:function(e,t,o){}}]);
//# sourceMappingURL=chunk-ad6f9aac.97e2661d.js.map