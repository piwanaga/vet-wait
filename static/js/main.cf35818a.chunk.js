(this["webpackJsonpvet-waiting-list"]=this["webpackJsonpvet-waiting-list"]||[]).push([[0],{35:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(13),c=n.n(r),i=(n(35),n(15)),l=n(4),o=n(9),m=n(17),d=n(29),u=n.n(d),x=n(1),b=function(e){var t=e.addItem,n={firstName:"",lastName:"",petName:"",phone:"",firstNameError:"",lastNameError:"",petNameError:"",phoneError:""},a=Object(s.useState)(n),r=Object(o.a)(a,2),c=r[0],i=r[1],d=function(e){var t=e.target,n=t.name,s=t.value;i((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(m.a)({},n,s))}))};return Object(x.jsx)("div",{className:"py-8 px-10 shadow-lg rounded-lg bg-white",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=!0;return c.firstName?i((function(e){return Object(l.a)(Object(l.a)({},e),{},{firstNameError:""})})):(i((function(e){return Object(l.a)(Object(l.a)({},e),{},{firstNameError:"First name cannot be blank"})})),e=!1),c.lastName?i((function(e){return Object(l.a)(Object(l.a)({},e),{},{lastNameError:""})})):(i((function(e){return Object(l.a)(Object(l.a)({},e),{},{lastNameError:"Last name cannot be blank"})})),e=!1),c.petName?i((function(e){return Object(l.a)(Object(l.a)({},e),{},{petNameError:""})})):(i((function(e){return Object(l.a)(Object(l.a)({},e),{},{petNameError:"Pet name cannot be blank"})})),e=!1),c.phone?12!==c.phone.length?(i((function(e){return Object(l.a)(Object(l.a)({},e),{},{phoneError:"Invalid phone number"})})),e=!1):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{phoneError:""})})):(i((function(e){return Object(l.a)(Object(l.a)({},e),{},{phoneError:"Phone cannot be blank"})})),e=!1),e}()&&(t(c),i(n))},className:"",children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"first-name",className:"block text-sm text-gray-700 mb-1",children:"First Name"}),Object(x.jsx)("input",{type:"text",name:"firstName",id:"firstName",maxLength:"25",value:c.firstName,onChange:d,className:"w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50"}),c.firstNameError?Object(x.jsx)("p",{className:"text-xs text-red-500 mt-1",children:c.firstNameError}):null]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"last-name",className:"block text-sm text-gray-700 mb-1",children:"Last Name"}),Object(x.jsx)("input",{type:"text",name:"lastName",id:"lastName",maxLength:"25",value:c.lastName,onChange:d,className:"w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50"}),c.lastNameError?Object(x.jsx)("p",{className:"text-xs text-red-500 mt-1",children:c.lastNameError}):null]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"petName",className:"block text-sm text-gray-700 mb-1",children:"Pet Name"}),Object(x.jsx)("input",{type:"text",name:"petName",id:"petName",maxLength:"25",value:c.petName,onChange:d,className:"w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50"}),c.petNameError?Object(x.jsx)("p",{className:"text-xs text-red-500 mt-1",children:c.petNameError}):null]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"phone",className:"block text-sm text-gray-700 mb-1",children:"Phone Number"}),Object(x.jsx)(u.a,{mask:"999-999-9999",maskChar:"",type:"text",name:"phone",id:"phone",value:c.phone,onChange:d,className:"w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50"}),c.phoneError?Object(x.jsx)("p",{className:"text-xs text-red-500 mt-1",children:c.phoneError}):null]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"text-md text-white uppercase tracking-wider bg-green-500 mt-4 py-3 rounded-lg w-full hover:bg-green-400 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50 active:bg-green-600 transform transition",children:"Add to queue"})})]})})},j=n(12),h=n.n(j),g=n(18),f=function(e){var t=e.checkedIn,n=e.clearItems;return console.log(t),Object(x.jsx)("button",{className:"text-md text-gray-500 uppercase tracking-wider mt-1 mb-4 py-3 rounded-lg w-full hover:bg-red-500 hover:text-white hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-50 active:bg-red-600 transform transition",onClick:function(){return function(e){n(e)}(t)},children:"Clear Checked In"})},p=n(30),O=n.n(p),N=function(){var e=Object(g.a)(h.a.mark((function e(t,n,s){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.replace("-","").replace("-",""),e.next=3,O.a.post("https://textbelt.com/text",{phone:a,message:"Hi ".concat(n,", ").concat(s," is ready to be checked in! Please come to the front desk in the next 10 muinutes to start your appointment."),key:"753f4a473e3773b284219c6a3c94828de43f199c8k3LNLnNfLQRsoes0stOdBGDn_test"});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),y=function(e){var t=e.items,n=e.clearItems,a=Object(s.useState)([]),r=Object(o.a)(a,2),c=r[0],l=r[1],m=Object(s.useState)([]),d=Object(o.a)(m,2),u=d[0],b=d[1],j=function(){var e=Object(g.a)(h.a.mark((function e(t,n,s,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t,n,s);case 2:l((function(e){return[].concat(Object(i.a)(e),[a])}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,s,a){return e.apply(this,arguments)}}(),p=function(e){return c.includes(e.id)?Object(x.jsxs)("button",{disabled:!0,className:"disabled text-blue-400 text-xs tracking-wider bg-blue-200 bg-opacity-20 px-2 py-1 sm:ml-4 md:ml-8 rounded-lg focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-200 focus:ring-opacity-50 transform transition",children:["text sent",Object(x.jsx)("span",{children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]}):Object(x.jsx)("button",{className:"text-white bg-blue-400 text-xs tracking-wider px-2 py-1 sm:ml-4 md:ml-8 rounded-lg border hover:bg-blue-300  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-500 transform transition",onClick:function(){return j(e.phone,e.ownerName,e.petName,e.id)},children:"Send Text"})},O=function(e){return u.includes(e)?Object(x.jsxs)("button",{disabled:!0,className:"disabled text-green-500 text-xs tracking-wider bg-green-300 bg-opacity-20 px-2 py-1 rounded-lg focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-200 focus:ring-opacity-50  transform transition",children:["checked in",Object(x.jsx)("span",{children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]}):Object(x.jsx)("button",{className:"text-white bg-green-400 text-xs tracking-wider bg-white px-2 py-1 rounded-lg border  hover:bg-green-300  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-400 focus:ring-opacity-50 active:bg-green-500 transform transition",onClick:function(){return function(e){b((function(t){return[].concat(Object(i.a)(t),[e])}))}(e)},children:"Check In"})};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"bg-white shadow-lg rounded-lg",children:[Object(x.jsxs)("table",{className:"table-fixed w-full border-collapse",children:[Object(x.jsx)("thead",{className:"bg-gray-100",children:Object(x.jsxs)("tr",{className:"border-b",children:[Object(x.jsx)("th",{className:"hidden sm:table-cell w-12 md:w-20 lg:w-16 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900",children:"Pos"}),Object(x.jsx)("th",{className:"w-20 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900",children:"Owner"}),Object(x.jsx)("th",{className:"w-16 lg:w-20 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900",children:"Pet"}),Object(x.jsx)("th",{className:"sm:w-36 md:w-40 lg:w-28 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900",children:"Phone"}),Object(x.jsx)("th",{className:"sm:w-32 md:w-28 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900",children:"Checked In"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsxs)("tr",{className:"hover:bg-gray-50",children:[Object(x.jsx)("td",{className:"hidden sm:table-cell border px-3 py-3 text-gray-900 text-xs sm:text-sm",children:t+1}),Object(x.jsxs)("td",{className:"border px-3 py-3 text-gray-900 text-xs sm:text-sm overflow-auto",children:[e.firstName," ",e.lastName]}),Object(x.jsx)("td",{className:"border px-3 py-3 text-gray-900 text-xs sm:text-sm overflow-auto",children:e.petName}),Object(x.jsxs)("td",{className:"border px-3 py-3 text-gray-900 text-xs sm:text-sm text-center sm:text-left",children:[e.phone,p(e)]}),Object(x.jsx)("td",{className:"border-b px-3 py-3",children:Object(x.jsx)("div",{className:"flex justify-center items-center",children:O(e.id)})})]},e.id)}))})]}),t.length?null:Object(x.jsx)("div",{className:"flex justify-center w-full px-3 py-5",children:Object(x.jsx)("p",{className:"text-gray-900 text-xl italic font-light",children:"Woof! No one is waiting."})})]}),t.length?Object(x.jsx)(f,{checkedIn:u,clearItems:n}):null]})},w=n(62),v=n(60),k=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];function r(){a(!1)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"inset-0 flex items-center justify-center",children:Object(x.jsx)("button",{type:"button",onClick:function(){a(!0)},className:"mb-4 text-gray-500 text-sm tracking-wider hover:text-gray-400",children:Object(x.jsxs)("div",{className:"flex align-center",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1 inline",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})}),"Instructions"]})})}),Object(x.jsx)(w.a,{appear:!0,show:n,as:s.Fragment,children:Object(x.jsx)(v.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:r,children:Object(x.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(x.jsx)(w.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-0",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-black opacity-30"})}),Object(x.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(w.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg",children:[Object(x.jsx)(v.a.Title,{as:"h3",className:"text-xl font-medium mb-4 leading-6 text-gray-900",children:"VetWait Instructions"}),Object(x.jsxs)("div",{className:"mt-2 space-y-2",children:[Object(x.jsx)("p",{className:"text-sm text-gray-500 mb-4",children:"I made this app after going to the vet and having to wait for hours around the front desk because they could not call or text you when they were ready. I thought it would be fun to make a simple waiting list with a feature to send texts to the people waiting to let them know when it was their turn."}),Object(x.jsxs)("p",{className:"text-sm text-gray-500 font-medium",children:["1. Enter ",Object(x.jsx)("span",{className:"text-green-500",children:"Owner"})," and ",Object(x.jsx)("span",{className:"text-green-500",children:"Pet"})," names"]}),Object(x.jsxs)("p",{className:"text-sm text-gray-500 font-medium",children:["2. Enter your real ",Object(x.jsx)("span",{className:"text-green-500",children:"Phone Number"})," to get a text from VetWait!"]}),Object(x.jsxs)("p",{className:"text-sm text-gray-500 font-medium",children:["3. Click ",Object(x.jsx)("span",{className:"text-blue-400",children:"'Send Text'"})," in the queue to get a text message"]}),Object(x.jsxs)("p",{className:"text-sm text-gray-500 font-medium",children:["4. Click ",Object(x.jsx)("span",{className:"text-green-500",children:"'Check In'"})," to check in pet"]}),Object(x.jsxs)("p",{className:"text-sm text-gray-500 font-medium",children:["5. Click ",Object(x.jsx)("span",{className:"text-red-500",children:"'Clear Checked In'"})," to remove checked in pets from the list"]})]}),Object(x.jsx)("div",{className:"mt-6",children:Object(x.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm text-blue-800 bg-blue-100 border border-transparent rounded hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:r,children:"Got it, thanks!"})})]})})]})})})]})},C=n.p+"static/media/dog-logo.632b36d5.svg",E=n.p+"static/media/cat-logo.3a856b07.svg",I=n(61),F=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("div",{className:"w-full",children:[Object(x.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(x.jsxs)("div",{className:"flex justify-between mt-8 mb-4",children:[Object(x.jsx)("img",{src:C,alt:"dog-logo",className:"w-10 ml-2"}),Object(x.jsxs)("h1",{className:"inline text-5xl font-bold text-center",children:["Vet",Object(x.jsx)("span",{className:"text-green-500",children:"Wait"})]}),Object(x.jsx)("img",{src:E,alt:"cat-logo",className:"w-10 mr-2"})]}),Object(x.jsx)(k,{})]}),Object(x.jsx)("div",{className:"mx-auto max-w-md",children:Object(x.jsx)(b,{addItem:function(e){var t=Object(l.a)(Object(l.a)({},e),{},{id:Object(I.a)()});a((function(e){return[].concat(Object(i.a)(e),[t])}))}})}),Object(x.jsx)("div",{className:"my-10"}),Object(x.jsx)("div",{className:"mx-auto max-w-5xl",children:Object(x.jsx)(y,{items:n,clearItems:function(e){a((function(t){return t.filter((function(t){return!e.includes(t.id)}))}))}})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.cf35818a.chunk.js.map