(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},77:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(22),i=c.n(a),r=(c(56),c(42)),o=c(6),j=(c(57),c(58),c(44)),l=c.n(j),d=c(45),b=c.n(d),u=c(20),h=c(1),O=Object(s.createContext)(),x=function(){return Object(s.useContext)(O)},p=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(h.jsx)(O.Provider,{value:Object(s.useReducer)(t,c),children:n})};var m=function(){var e=x(),t=Object(o.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png"})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{className:"header__searchInput",type:"text"}),Object(h.jsx)(l.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(u.b,{to:!n&&"/login",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:null===n||void 0===n?void 0:n.email}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(h.jsx)(u.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]})},_=(c(69),c(70),c(99));var g=function(e){var t=e.id,c=e.title,s=e.image,n=e.price,a=e.rating,i=x(),r=Object(o.a)(i,2),j=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:n})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(a).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))})]}),Object(h.jsx)("img",{src:s,alt:""}),Object(h.jsx)(_.a,{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:n,rating:a}})},children:"Add to Basket"})]})};var v=function(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home__container",children:[Object(h.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg",className:"home__containerImg"}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(g,{title:"Nintendo Switch",image:"https://i1.wp.com/gloelectronicstore.com/wp-content/uploads/2021/07/image03.jpg?fit=573%2C382&ssl=1",price:299.99,rating:3}),Object(h.jsx)(g,{})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(g,{}),Object(h.jsx)(g,{}),Object(h.jsx)(g,{})]}),Object(h.jsx)("div",{className:"home__row",children:Object(h.jsx)(g,{})})]})})},N=c(46),f=c.n(N);c(71);var k=function(){return Object(h.jsxs)("div",{className:"subheader",children:[Object(h.jsx)("div",{className:"subheader__optionAll",children:Object(h.jsx)(_.a,{className:"subheader__buttonAll",children:Object(h.jsx)(f.a,{className:"subheader__optionIcon"})})}),Object(h.jsx)("div",{className:"subheader__option",children:Object(h.jsx)(_.a,{className:"subheader__button",children:Object(h.jsx)("span",{className:"subheader__optionLineOne",children:"Today's Deals"})})}),Object(h.jsx)("div",{className:"subheader__option",children:Object(h.jsx)(_.a,{className:"subheader__button",children:Object(h.jsx)("span",{className:"subheader__optionLineOne",children:"Customer Service"})})}),Object(h.jsx)("div",{className:"subheader__option",children:Object(h.jsx)(_.a,{className:"subheader__button",children:Object(h.jsx)("span",{className:"subheader__optionLineOne",children:"Gift Cards"})})}),Object(h.jsx)("div",{className:"subheader__option",children:Object(h.jsx)(_.a,{className:"subheader__button",children:Object(h.jsx)("span",{className:"subheader__optionLineOne",children:"Sell"})})})]})};c(72),c(73);var w=function(e){var t=e.id,c=e.image,s=e.title,n=e.price,a=e.rating,i=x(),r=Object(o.a)(i,2),j=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{src:c,className:"checkoutProduct__image"}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:s}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:n})]}),Object(h.jsx)("div",{className:"checkoutProduct__rating",children:Array(a).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))}),Object(h.jsx)(_.a,{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},className:"checkoutProduct__remove",children:"Remove from Basket"})]})]})},C=(c(74),c(47)),S=c.n(C),I=c(29),y=c(21),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(I.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),s=Object(I.a)(e.basket);return c>=0?s.splice(c,1):console.warn("Can't remove product (id: ".concat(t.id,") as it's not in the basket!")),Object(y.a)(Object(y.a)({},e),{},{basket:s});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});default:return e}};var A=function(){var e=x(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(S.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",null===c||void 0===c?void 0:c.length," items): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"}),"This is a gift"]})]})},decimalScale:2,value:T(c),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(h.jsx)(_.a,{className:"subtotal__checkout",children:"Proceed to Checkout"})]})};var B=function(){var e=x(),t=Object(o.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsx)("div",{className:"checkout__left",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email]}),Object(h.jsx)("h2",{class:"cart__title",children:"Your Amazong Cart "}),s.map((function(e){return Object(h.jsx)(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})}),Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(A,{})})]})},E=c(2),R=c.n(E),L=c(41),D=(c(77),c.p+"static/media/amazon.c40e6fa9.png"),z=c(5),M=c(49),U=Object(M.a)("https://hgbgimwfehcviqqdrbsd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODYwNDY3MywiZXhwIjoxOTU0MTgwNjczfQ.ajTs8hsRUUVstxNR2IXITUHCRqCtQDYSir0MSM6fDPg");var F=function(){var e=Object(z.f)(),t=Object(s.useState)(!1),c=Object(o.a)(t,2),n=(c[0],c[1]),a=Object(s.useState)(""),i=Object(o.a)(a,2),r=i[0],j=i[1],l=Object(s.useState)(""),d=Object(o.a)(l,2),b=d[0],O=d[1],x=function(){var e=Object(L.a)(R.a.mark((function e(t){var c,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,U.auth.signUp({email:t,password:b});case 4:if(c=e.sent,!(s=c.error)){e.next=8;break}throw s;case 8:console.log("Singed up with email: "+t),z.f.push("/"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Error signing up!"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var t=Object(L.a)(R.a.mark((function t(c){var s,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,n(!0),t.next=5,U.auth.signIn({email:c,password:b});case 5:if(s=t.sent,!(a=s.error)){t.next=9;break}throw a;case 9:console.log("Logged in with "+c),e.push("/"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),alert("ERROR!!!!"),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("img",{src:D,className:"login__logo"}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"email",value:r,onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:b,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)(_.a,{className:"login__signInButton",type:"submit",onClick:p,children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in, you agree to Amazon Clone's Condition and Use & Sale. Please see our Privacy notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)(_.a,{className:"login__signUpButton",onClick:x,children:"Create and Account"})]}),Object(h.jsx)(_.a,{className:"login__backButton",component:u.b,to:"/",children:"Go Back"})]})};var J=function(){var e=x(),t=Object(o.a)(e,2);return Object(r.a)(t[0]),t[1],Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(z.c,{children:[Object(h.jsx)(z.a,{path:"/login",children:Object(h.jsx)(F,{})}),Object(h.jsxs)(z.a,{path:"/checkout",children:[Object(h.jsx)(m,{}),Object(h.jsx)(k,{}),Object(h.jsx)(B,{})]}),Object(h.jsxs)(z.a,{path:"/",children:[Object(h.jsx)(m,{}),Object(h.jsx)(k,{}),Object(h.jsx)(v,{})]})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{initialState:{basket:[]},reducer:P,children:Object(h.jsx)(J,{})})}),document.getElementById("root")),Y()}},[[81,1,2]]]);
//# sourceMappingURL=main.257cd2b2.chunk.js.map