(this.webpackJsonpbossbot=this.webpackJsonpbossbot||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(5),o=a(0),n=a.n(o),r=a(16),i=a.n(r),c=(a(46),a(29)),u=a(36),l=a(37),h=a(40),d=a(38),b=(a(47),a(30)),p=a(34),m=a(27),y=a(21),g=a(28),j=a(39),f=["Start","WhatPrompted","Performance","OtherTopics","Salary","Finish"],v={Start:"Hi I'm HintBot, your assistant for today's practice. To start, you'll need to ask your 'manager' to talk \n  about compensation. This is often the hardest part of the conversation so remember to be direct! It's normal and reasonable to ask for a raise.",WhatPrompted:"*Hintbot Here!* This is a good chance to provide context to the conversation. There are many opportunities to talk \n  about your salary. Maybe you've had new responsibilities at work, completed an impactful project, been putting in \n  extra hours or just been in your role for quite some time. If your company has a specifc time when raises occur, \n  it's important to know it and talk early!",Performance:"*Hintbot Here!* When talking about your performance it's important to create a clear narrative. Discuss how you've\n  added value and gone above your role's requirements. Metrics can also help when appropriate. The more info you \n  provide the easier it is for your manager to advocate on your behalf. Consider creating some documentation in prep.\n  Also consider discussing how you plan to continue your success and what your future goals are.",OtherTopics:"*Hintbot Here!* Other topics you may want to consider discussing is if any new responsibilities will be required. Take this time to ask your boss about expectations or certain changes. Some companies may require management duties at certain pay grades.",Salary:"*Hintbot Here!* Getting down to 'brass tax' can be scary but don't undersell yourself and be specific! Do your research \n  and understand what your local market rate is. Ask for a very specific number.",Finish:"Great Job! Please check out our other resources or practice again!"},O={Start:null,WhatPrompted:"BossBot: What prompted you to bring this up?",Performance:"BossBot: Okay, Let's talk about your performance in detail.",OtherTopics:"BossBot: You're making a compelling case. Is there anything else you'd like to discuss?",Salary:"BossBot: Those are some great questions. I'll have to get back to you on those.",Finish:"BossBot: Okay, thanks for being specific. That makes my job easier. You've given me the right info to take the next steps, I will let you know what I decide."},k="Start",w=function(){var e={HintBot:v[k],BossBot:O[k]};return k=f[f.indexOf(k)+1],e},x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={show:!1,messages:[],botWaiting:!1,convoInputValue:""},e.showModal=function(t){e.setState({show:!0})},e.closeModal=function(t){e.setState({show:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=w(),t=e.BossBot,a=e.HintBot,s=[];t&&s.push({user:"Boss",message:t}),a&&s.push({user:"Hintbot",message:a}),this.setState({messages:[].concat(Object(c.a)(this.state.messages),s)})}},{key:"addMessage",value:function(e){var t=this;console.log(this.state.messages);var a={user:"User",message:e};this.setState({messages:[].concat(Object(c.a)(this.state.messages),[a])},(function(){var e=w(),a=e.BossBot,s=e.HintBot,o=[];a&&o.push({user:"Boss",message:a}),s&&o.push({user:"Hintbot",message:s}),t.setState({messages:[].concat(Object(c.a)(t.state.messages),o)})}))}},{key:"updateConvoInputValue",value:function(e){this.setState({convoInputValue:e})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(b.a,{bg:"dark",variant:"dark fixed-top",children:[Object(s.jsx)(b.a,{sticky:"top"}),Object(s.jsx)(b.a.Brand,{href:"#home",children:"BossBot"}),Object(s.jsx)(p.a,{className:"mr-auto",children:Object(s.jsx)(p.a.Link,{href:"#links",children:Object(s.jsx)("a",{href:"https://www.glassdoor.com/blog/guide/how-to-negotiate-your-salary/",children:"Advice to Read Before Starting"})})}),Object(s.jsx)(m.a,{variant:"outline-light",onClick:function(t){e.showModal()},children:"  Click Here to Learn How To Start"})]}),Object(s.jsx)("div",{className:"sidenav"}),Object(s.jsxs)(y.a,{show:this.state.show,onHide:this.closeModal,children:[Object(s.jsx)(y.a.Header,{children:Object(s.jsx)(y.a.Title,{children:"BossBot: Practice Salary Negotiation"})}),Object(s.jsx)(y.a.Body,{children:'Here is where you can practice what you are going to say in a real life situation. Use the text box below to start a conversation with your "boss" about why you are interested in a higher compensation and what your target goal salary is. Be sure to consider your previous accomplishments, additional workloads, leadership qualities, and time you have been at your role. Be confident in yourself and know your worth!'}),Object(s.jsx)(y.a.Footer,{children:Object(s.jsx)(m.a,{variant:"secondary",onClick:this.closeModal,children:"Let's Start!"})})]}),Object(s.jsx)("main",{children:Object(s.jsx)("div",{className:"conversation",children:Object(s.jsx)("ul",{children:this.state.messages.map((function(e){return Object(s.jsx)("li",{className:e.user,children:e.message},"userMessage")}))})})}),Object(s.jsx)("div",{className:"footer",children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(g.a.Prepend,{children:Object(s.jsx)(g.a.Text,{children:"Enter Your Responses:"})}),Object(s.jsx)(j.a,{as:"textarea","aria-label":"With textarea",value:this.state.convoInputValue,onChange:function(t){return e.updateConvoInputValue(t.target.value)}}),Object(s.jsx)(m.a,{variant:"secondary",onClick:function(){return e.addMessage(e.state.convoInputValue)},children:"Send Message"})]})})]})}}]),a}(n.a.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,s=t.getFID,o=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),o(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),B()}},[[51,1,2]]]);
//# sourceMappingURL=main.18a1a371.chunk.js.map