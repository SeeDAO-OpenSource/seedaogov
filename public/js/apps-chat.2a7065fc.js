(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-chat"],{"22f9":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout-px-spacing"},[t("portal",{attrs:{to:"breadcrumb"}},[t("ul",{staticClass:"navbar-nav flex-row"},[t("li",[t("div",{staticClass:"page-header"},[t("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[t("ol",{staticClass:"breadcrumb"},[t("li",{staticClass:"breadcrumb-item"},[t("a",{attrs:{href:"javascript:;"}},[e._v("Apps")])]),t("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t("span",[e._v("Chat")])])])])])])])]),t("div",{staticClass:"chat-section layout-top-spacing"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-12 col-lg-12 col-md-12"},[t("div",{staticClass:"chat-system"},[t("div",{staticClass:"hamburger",on:{click:function(t){e.is_show_user_menu=!e.is_show_user_menu}}},[t("svg",{staticClass:"feather feather-menu mail-menu d-lg-none",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("line",{attrs:{x1:"3",y1:"12",x2:"21",y2:"12"}}),t("line",{attrs:{x1:"3",y1:"6",x2:"21",y2:"6"}}),t("line",{attrs:{x1:"3",y1:"18",x2:"21",y2:"18"}})])]),t("div",{staticClass:"user-list-box",class:{"user-list-box-show":e.is_show_user_menu}},[t("div",{staticClass:"search"},[t("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),t("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})]),t("b-input",{attrs:{placeholder:"Search"},on:{keyup:function(t){return e.search_users()}},model:{value:e.search_user,callback:function(t){e.search_user="string"===typeof t?t.trim():t},expression:"search_user"}})],1),t("perfect-scrollbar",{staticClass:"people",attrs:{options:{wheelSpeed:.5,swipeEasing:!0,minScrollbarLength:40,maxScrollbarLength:300,suppressScrollX:!0}}},e._l(e.filterd_contact_list,(function(r,i){return t("div",{key:i,staticClass:"person",class:{active:e.selected_user&&e.selected_user.user_id==r.user_id},on:{click:function(t){return e.select_user(r)}}},[t("div",{staticClass:"user-info"},[t("div",{staticClass:"f-head"},[t("img",{attrs:{src:s("7584")("./"+r.path),alt:"avatar"}})]),t("div",{staticClass:"f-body"},[t("div",{staticClass:"meta-info"},[t("span",{staticClass:"user-name",class:{"text-primary":e.selected_user&&e.selected_user.user_id==r.user_id}},[e._v(e._s(r.name))]),t("span",{staticClass:"user-meta-time",class:{"text-primary":e.selected_user&&e.selected_user.user_id==r.user_id}},[e._v(e._s(r.time))])]),t("span",{staticClass:"preview"},[e._v(e._s(r.preview))])])])])})),0)],1),t("div",{staticClass:"chat-box",class:{active:e.selected_user}},[t("div",{staticClass:"chat-not-selected",class:{"d-none":e.selected_user}},[t("p",[t("svg",{staticClass:"feather feather-message-square",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}})]),e._v(" Click User To Chat ")])]),e.selected_user?t("div",{staticClass:"chat-box-inner h-100"},[t("div",{staticClass:"chat-meta-user chat-active"},[t("div",{staticClass:"current-chat-user-name"},[t("span",[t("img",{attrs:{src:s("7584")("./"+e.selected_user.path),alt:"dynamic-image"}}),t("span",{staticClass:"name"},[e._v(e._s(e.selected_user.name))])])]),t("div",{staticClass:"chat-action-btn align-self-center"},[t("svg",{staticClass:"feather feather-phone phone-call-screen",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}})]),t("svg",{staticClass:"feather feather-video video-call-screen",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("polygon",{attrs:{points:"23 7 16 12 23 17 23 7"}}),t("rect",{attrs:{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"}})]),t("b-dropdown",{staticClass:"d-inline-block",attrs:{right:!0,"toggle-tag":"a",variant:"icon-only"},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("svg",{staticClass:"feather feather-more-vertical",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t("circle",{attrs:{cx:"12",cy:"5",r:"1"}}),t("circle",{attrs:{cx:"12",cy:"19",r:"1"}})])]},proxy:!0}],null,!1,2549785619)},[t("b-dropdown-item",[t("svg",{staticClass:"feather feather-settings",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("circle",{attrs:{cx:"12",cy:"12",r:"3"}}),t("path",{attrs:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}})]),e._v(" Settings")]),t("b-dropdown-item",[t("svg",{staticClass:"feather feather-mail",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}}),t("polyline",{attrs:{points:"22,6 12,13 2,6"}})]),e._v(" Mail")]),t("b-dropdown-item",[t("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),t("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})]),e._v(" Copy")]),t("b-dropdown-item",[t("svg",{staticClass:"feather feather-trash-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("polyline",{attrs:{points:"3 6 5 6 21 6"}}),t("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),t("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),t("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})]),e._v(" Delete")]),t("b-dropdown-item",[t("svg",{staticClass:"feather feather-share-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("circle",{attrs:{cx:"18",cy:"5",r:"3"}}),t("circle",{attrs:{cx:"6",cy:"12",r:"3"}}),t("circle",{attrs:{cx:"18",cy:"19",r:"3"}}),t("line",{attrs:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}}),t("line",{attrs:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}})]),e._v(" Share")])],1)],1)]),t("perfect-scrollbar",{staticClass:"chat-conversation-box",attrs:{options:{wheelSpeed:.5,swipeEasing:!0,minScrollbarLength:40,maxScrollbarLength:300,suppressScrollX:!0}}},[t("div",{staticClass:"chat-conversation-box-scroll",attrs:{id:"chat-conversation-box-scroll"}},[t("div",{staticClass:"chat active-chat"},[t("div",{staticClass:"conversation-start"},[t("span",[e._v("Today, 6:48 AM")])]),e.selected_user.messages&&e.selected_user.messages.length?e._l(e.selected_user.messages,(function(s,r){return t("div",{key:"msg"+r,staticClass:"bubble",class:[e.selected_user.user_id==s.from_user_id?"me":"you"]},[e._v(" "+e._s(s.text)+" ")])})):e._e()],2)])]),t("div",{staticClass:"chat-footer chat-active"},[t("div",{staticClass:"chat-input"},[t("div",{staticClass:"chat-form"},[t("svg",{staticClass:"feather feather-message-square",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}})]),t("b-input",{staticClass:"mail-write-box",attrs:{placeholder:"Message"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.send_message.apply(null,arguments)}},model:{value:e.text_message,callback:function(t){e.text_message=t},expression:"text_message"}})],1)])])],1):e._e()])])])])])],1)},i=[],a=(s("be9a"),{metaInfo:{title:"Chat Application"},components:{},data(){return{is_show_user_menu:!1,contact_list:[],filterd_contact_list:[],selected_user:null,login_user_id:0,search_user:"",text_message:""}},mounted(){this.bind_contact_list()},methods:{bind_contact_list(){this.contact_list=[{user_id:1,name:"Nia Hillyer",path:"profile-4.jpeg",time:"2:09 PM",preview:"How do you do?",messages:[{from_user_id:this.login_user_id,to_usr_id:1,text:"Hi, I am back from vacation"},{from_user_id:this.login_user_id,to_usr_id:1,text:"How are you?"},{from_user_id:1,to_usr_id:this.login_user_id,text:"Welcom Back"},{from_user_id:1,to_usr_id:this.login_user_id,text:"I am all well"},{from_user_id:this.login_user_id,to_usr_id:1,text:"Coffee?"}]},{user_id:2,name:"Sean Freeman",path:"profile-3.jpeg",time:"2:09 PM",preview:"I was wondering...",messages:[{from_user_id:this.login_user_id,to_usr_id:2,text:"Hello"},{from_user_id:this.login_user_id,to_usr_id:2,text:"It's me"},{from_user_id:this.login_user_id,to_usr_id:2,text:"I have a question regarding project."}]},{user_id:3,name:"Alma Clarke",path:"profile-11.jpeg",time:"1:44 PM",preview:"I’ve forgotten how it felt before",messages:[{from_user_id:this.login_user_id,to_usr_id:3,text:"Hey Buddy."},{from_user_id:this.login_user_id,to_usr_id:3,text:"What's up"},{from_user_id:3,to_usr_id:this.login_user_id,text:"I am sick"},{from_user_id:this.login_user_id,to_usr_id:3,text:"Not comming to office today."}]},{user_id:4,name:"Alan Green",path:"profile-23.jpeg",time:"2:09 PM",preview:"But we’re probably gonna need a new carpet.",messages:[{from_user_id:this.login_user_id,to_usr_id:4,text:"Hi, collect your check"},{from_user_id:4,to_usr_id:this.login_user_id,text:"Ok, I will be there in 10 mins"}]},{user_id:5,name:"Shaun Park",path:"profile-7.jpeg",time:"2:09 PM",preview:"It’s not that bad...",messages:[{from_user_id:this.login_user_id,to_usr_id:3,text:"Hi, I am back from vacation"},{from_user_id:this.login_user_id,to_usr_id:3,text:"How are you?"},{from_user_id:this.login_user_id,to_usr_id:5,text:"Welcom Back"},{from_user_id:this.login_user_id,to_usr_id:5,text:"I am all well"},{from_user_id:5,to_usr_id:this.login_user_id,text:"Coffee?"}]},{user_id:6,name:"Roxanne",path:"profile-15.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[{from_user_id:this.login_user_id,to_usr_id:6,text:"Hi"},{from_user_id:this.login_user_id,to_usr_id:6,text:"Uploaded files to server."}]},{user_id:7,name:"Ernest Reeves",path:"profile-32.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[]},{user_id:8,name:"Laurie Fox",path:"profile-33.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[]},{user_id:9,name:"Xavier",path:"profile-21.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[]},{user_id:10,name:"Susan Phillips",path:"profile-12.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[]},{user_id:11,name:"Dale Butler",path:"profile-26.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[]},{user_id:12,name:"Grace Roberts",path:"profile-20.jpeg",time:"2:09 PM",preview:"Wasup for the third time like is you bling bitch",messages:[]}],this.search_users()},select_user(e){this.selected_user=e,this.scroll_to_bottom(),this.is_show_user_menu=!1},search_users(){this.filterd_contact_list=this.contact_list.filter(e=>e.name.toLowerCase().includes(this.search_user))},send_message(){if(this.text_message.trim()){let e=this.contact_list.find(e=>e.user_id==this.selected_user.user_id);e.messages.push({from_user_id:this.selected_user.user_id,to_usr_id:this.login_user_id,text:this.text_message}),this.text_message="",this.scroll_to_bottom()}},scroll_to_bottom(){setTimeout(()=>{document.querySelector(".chat-conversation-box").scrollTo({left:0,top:document.querySelector(".chat-conversation-box").scrollHeight,behavior:"smooth"})})}}}),o=a,l=s("2877"),n=Object(l["a"])(o,r,i,!1,null,null,null);t["default"]=n.exports},be9a:function(e,t,s){}}]);
//# sourceMappingURL=apps-chat.2a7065fc.js.map