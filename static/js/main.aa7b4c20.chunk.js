(this["webpackJsonpbeer-app-client"]=this["webpackJsonpbeer-app-client"]||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),s=a.n(r),i=(a(46),a(16)),l=a(17),o=a(23),b=a(21),j=(a(47),a(26)),h=a(14),d=a(5),u=Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(j.a.Link,{href:"#/",children:"Home"}),Object(d.jsx)(j.a.Link,{href:"#/favorites",children:"Favourites"})]}),m=function(){return Object(d.jsxs)(h.a,{bg:"info",variant:"dark",expand:"md",className:"pt-0",children:[Object(d.jsx)(h.a.Brand,{href:"#",children:Object(d.jsx)("h1",{className:"nav-name",children:"Beans Love Beers"})}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsx)(j.a,{className:"ml-auto",children:u})})]})},O=a(40),x=a(31),v=a(41),p=a(30),g=a(20),f=a.n(g),C=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(O.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){var t=n.state.beer;e.preventDefault(),f()({url:"https://api.punkapi.com/v2/beers?beer_name=".concat(t),method:"get"}).then((function(e){n.setState({beer:" "})}))},n.state={beer:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.beer;return console.log(this.state),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-10 col-md-8 col-lg-5 mx-auto mt-5 mb-3",children:Object(d.jsx)(x.a,{onSubmit:this.onSubmit,children:Object(d.jsxs)(p.a,{size:"lg",children:[Object(d.jsx)(x.a.Control,{required:!0,type:"string",name:"beer",value:e,placeholder:"Search for beer...",onChange:this.handleChange}),Object(d.jsx)(p.a.Append,{children:Object(d.jsx)(v.a,{variant:"primary",type:"submit",children:"Search"})})]})})})})}}]),a}(n.Component),N=a(12),k=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={beers:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f()({url:"https://api.punkapi.com/v2/beers?page=1&per_page=6",method:"get"}).then((function(t){return e.setState({beers:t.data}),t}))}},{key:"render",value:function(){var e;if(null===this.state.beers)e="Loading...";else if(0===this.state.beers.length)e="Your beers don't exist";else{var t=this.state.beers.map((function(e){return Object(d.jsx)(N.a,{className:"d-inline-flex",style:{width:"24rem",height:"14rem"},children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)(N.a.Img,{className:"beer-pics",variant:"bottom",src:e.image_url})}),Object(d.jsx)("div",{className:"card-info",children:Object(d.jsxs)(N.a.Body,{children:[Object(d.jsx)("div",{className:"star-icon",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})}),Object(d.jsx)(N.a.Title,{children:e.name}),Object(d.jsx)(N.a.Text,{children:e.description})]})})]})},e.id)}));e=Object(d.jsx)("ul",{children:t})}return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(C,{}),e]})}}]),a}(n.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),w()}},[[70,1,2]]]);
//# sourceMappingURL=main.aa7b4c20.chunk.js.map