(function(e){function t(t){for(var s,i,o=t[0],c=t[1],u=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mesafrontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0aea":function(e,t,r){},"112a":function(e,t,r){},"3d9c":function(e,t,r){"use strict";r("488b")},4045:function(e,t,r){e.exports=r.p+"img/loading.19bbd58b.svg"},"488b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Menu"),r("Map"),e.$store.state.showLogin?r("SignIn"):e._e(),e.$store.state.showRegister?r("SignUp"):e._e(),e.$store.state.showProfile?r("Profile"):e._e()],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"headerContainer"},[r("img",{staticClass:"headerLogo",attrs:{src:e.logo,alt:""}}),r("nav",{staticClass:"headerMenu"},e._l(e.itemMenu,(function(t){return r("a",{key:t.id,attrs:{href:"#"},on:{click:t.func}},[e._v(e._s(t.label))])})),0)])},o=[],c=r("5530"),u=r("2f62"),l=r("9b19"),p=r.n(l),d={data:function(){return{logo:p.a}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["token"])),{},{itemMenu:function(){var e=this;return this.token?[{id:1,label:"Perfil",func:function(){e.GET_PROFILE(),e.OPEN_PROFILE()}},{id:2,label:"Logout",func:this.LOGOUT}]:[{id:1,label:"Login",func:this.OPEN_LOGIN}]}}),methods:Object(c["a"])({},Object(u["b"])(["OPEN_LOGIN","OPEN_PROFILE","LOGOUT","GET_PROFILE"]))},g=d,m=(r("dbb3"),r("2877")),f=Object(m["a"])(g,i,o,!1,null,"6c870213",null),h=f.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mapContainer"},[e.isFetching?r("img",{staticClass:"loading",attrs:{src:e.loading,alt:""}}):e._e(),e.$store.state.place?r("SelectedPlace"):e._e(),r("div",{staticClass:"containreMap"},[r("div",{ref:"googleMap",staticClass:"google-map"}),e.token?r("button",{staticClass:"listButton",style:e.listButtonStyle,on:{click:e.setShowPlacesList}},[e._v(" "+e._s(e.buttonLable)+" ")]):e._e()]),r("PlacesList",{attrs:{places:e.places,showPlacesList:e.showPlacesList}})],1)},w=[],b=r("1da1"),_=(r("99af"),r("d81d"),r("159b"),r("4de4"),r("b0c0"),r("96cf"),r("f464")),E=r.n(_),O=r("bc3a"),C=r.n(O),y="AIzaSyD35GjVq94pugyIK0H69xL8lXMFw4NSRbI",L=C.a.create({baseURL:"/maps/api/",headers:{"content-type":"application/json"}}),j=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("geocode/json?latlng=".concat(t,"&key=").concat(y));case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("place/nearbysearch/json?location=".concat(t.lat,",").concat(t.lng,"&radius=").concat(t.radius,"&key=").concat(y));case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("place/details/json?place_id=".concat(t,"&key=").concat(y));case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlayer"},[r("div",{staticClass:"modal"},[r("button",{staticClass:"closeButton fa fa-times",on:{click:e.CLEAR_PLACE}}),r("a",{staticClass:"title",attrs:{href:e.place.website,target:"_blank"}},[e._v(" "+e._s(e.place.name)+" "),r("em",{staticClass:"fa fa-external-link linkIcon"})]),r("p",{staticClass:"address"},[r("em",{staticClass:"fa fa-map-marker"}),e._v(" "+e._s(e.place.formatted_address)+" ")]),r("a",{staticClass:"contact",attrs:{href:"tel:"+e.place.formatted_phone_number}},[r("em",{staticClass:"fa fa-phone"}),e._v(" "+e._s(e.place.formatted_phone_number)+" ")]),r("p",{staticClass:"openNow"},[r("em",{staticClass:"fa fa-clock-o"}),e._v(" "+e._s(e.place.opening_hours.open_now?"Aberto":"Fechado")+" "),r("a",{staticClass:"fa fa-angle-down",attrs:{href:"#"},on:{click:e.handleWeekdays}})]),r("ul",{staticClass:"weekdaysList",style:e.weekdays},e._l(e.place.opening_hours.weekday_text,(function(t,s){return r("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0),e.place.reviews?r("div",{staticClass:"containerRating"},[r("div",{staticClass:"ratings"},[r("h3",[e._v(e._s(e.place.rating))]),r("p",{staticClass:"stars",style:{"--width":e.starPercentageRounded(e.place.rating),"--top":".125rem"}})]),r("ul",{staticClass:"reviews"},e._l(e.place.reviews,(function(t,s){return r("li",{key:s},[r("h3",[e._v(" "+e._s(t.author_name)+" | "),r("span",{staticClass:"stars",style:{"--width":e.starPercentageRounded(t.rating),"font-size":".75rem","--top":".0625rem"}})]),r("p",[e._v(e._s(t.text))])])})),0)]):e._e()])])},x=[],S={data:function(){return{isOpenWeekdays:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["place"])),{},{weekdays:function(){return this.isOpenWeekdays?{height:"auto"}:{height:"0"}}}),methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["CLEAR_PLACE"])),{},{starPercentageRounded:function(e){return e?"".concat(e/5*100,"%"):"0"},handleWeekdays:function(){this.isOpenWeekdays=!this.isOpenWeekdays}})},I=S,M=(r("3d9c"),Object(m["a"])(I,k,x,!1,null,"58d46233",null)),N=M.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.token?r("div",{staticClass:"containerPlacesList",style:e.placesListStyle},[r("ul",{staticClass:"placesList"},e._l(e.places,(function(t){return r("li",{key:t.place_id,staticClass:"placesListItem",on:{click:function(r){return e.FETCH_DETAILS_PLACES(t.place_id)}}},[e._v(" "+e._s(t.name)+" "),r("div",{staticClass:"ratingContainer"},[r("p",{staticClass:"rating"},[e._v(e._s(t.rating||"0"))]),r("p",{staticClass:"stars",style:{"--width":e.starPercentageRounded(t.rating)}}),t.rating?r("p",{staticClass:"ratingUsers"},[e._v("("+e._s(t.user_ratings_total)+")")]):e._e()]),r("span",{staticClass:"vicinity"},[e._v(e._s(t.vicinity))])])})),0)]):e._e()},F=[],A={props:{places:Array,showPlacesList:Boolean},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["token"])),{},{placesListStyle:function(){var e=window.outerWidth>768?"-32%":"-102%",t=window.outerWidth<=768?"none":void 0;return{right:this.showPlacesList?"0":e,transition:t}}}),methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["FETCH_DETAILS_PLACES"])),{},{starPercentageRounded:function(e){return e?"".concat(e/5*100,"%"):"0"}})},T=A,B=(r("ee46"),Object(m["a"])(T,G,F,!1,null,"1a2b43f0",null)),$=B.exports,U=r("9b70"),W=r.n(U),z=r("4045"),D=r.n(z),q={components:{SelectedPlace:N,PlacesList:$},data:function(){return{loading:D.a,isFetching:!1,isError:!1,google:null,map:null,mapConfig:{zoom:8,minZoom:2,center:this.center||{lat:-22.908333,lng:-43.196388}},apiKey:"AIzaSyD35GjVq94pugyIK0H69xL8lXMFw4NSRbI",yourLocation:null,center:null,radius:null,bounds:null,sizeMap:{width:"".concat(window.innerWidth,"px"),height:"".concat(window.innerHeight-80,"px")},places:[],showPlacesList:!1,starPercentage:{}}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E()({libraries:["geometry"],apiKey:e.apiKey});case 2:r=t.sent,e.google=r,e.initializeMap();case 5:case"end":return t.stop()}}),t)})))()},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["token"])),{},{listButtonStyle:function(){var e=window.outerWidth<=768;return e?this.showPlacesList?{right:"auto",left:".625rem",transition:"none"}:{left:"auto",right:".625rem",transition:"none"}:{right:this.showPlacesList?"calc(30% + .625rem)":".625rem"}},buttonLable:function(){return this.showPlacesList?"X":"Ver lista"}}),methods:{getGeolocation:function(){var e=this;if(navigator.geolocation){var t=function(t){e.yourLocation={lat:t.coords.latitude,lng:t.coords.longitude},e.center={lat:t.coords.latitude,lng:t.coords.longitude},e.getBounds("".concat(t.coords.latitude,",").concat(t.coords.longitude)),e.google.maps.event.addListener(e.map,"tilesloaded",Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setCenter();case 2:return t.next=4,e.setCurrentBounds();case 4:return t.next=6,e.setRadius();case 6:case"end":return t.stop()}}),t)}))))},r=function(){navigator.permissions.query({name:"geolocation"}).then((function(t){"prompt"===t.state&&e.setShowLocationButton(!0),"denied"===t.state&&e.setShowLocationButton(!1)}))};navigator.geolocation.getCurrentPosition(t,r)}},initializeMap:function(){this.getGeolocation();var e=this.$refs.googleMap;this.map=new this.google.maps.Map(e,this.mapConfig)},setCenter:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map.getCenter();case 2:r=t.sent,e.center={lat:r.lat(),lng:r.lng()};case 4:case"end":return t.stop()}}),t)})))()},setCurrentBounds:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r,s,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map.getBounds();case 2:return r=t.sent,t.next=5,r.getNorthEast();case 5:return s=t.sent,t.next=8,r.getSouthWest();case 8:a=t.sent,n=new e.google.maps.LatLng(s.lat(),s.lng()),i=new e.google.maps.LatLng(a.lat(),a.lng()),e.bounds={north:n.lat,east:n.lng,south:i.lat,west:i.lng};case 12:case"end":return t.stop()}}),t)})))()},fitBounds:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.map.fitBounds(e||t.bounds);case 2:t.map.getZoom()>16&&t.map.setZoom(16);case 3:case"end":return r.stop()}}),r)})))()},setRadius:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var s,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=new t.google.maps.LatLng(t.center),a=e||t.bounds,n={lat:a.north,lng:a.east},t.radius=t.google.maps.geometry.spherical.computeDistanceBetween(s,n);case 4:case"end":return r.stop()}}),r)})))()},getBounds:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,j(e);case 2:s=r.sent,a={north:s.results[0].geometry.viewport.northeast.lat,east:s.results[0].geometry.viewport.northeast.lng,south:s.results[0].geometry.viewport.southwest.lat,west:s.results[0].geometry.viewport.southwest.lng},t.setRadius(a),t.fitBounds(a);case 6:case"end":return r.stop()}}),r)})))()},setShowPlacesList:function(){this.showPlacesList=!this.showPlacesList}},watch:{yourLocation:function(e){if(e){var t=new this.google.maps.Marker({position:e,icon:{url:W.a,scaledSize:new this.google.maps.Size(50,50)}});t.setMap(this.map)}},radius:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.isFetching=!0,t.isError=!1,r.prev=2,r.next=5,R(Object(c["a"])(Object(c["a"])({},t.center||t.yourLocation),{},{radius:e}));case 5:s=r.sent,r.next=13;break;case 8:r.prev=8,r.t0=r["catch"](2),t.isFetching=!1,t.isError=!0,console.log(r.t0);case 13:return r.prev=13,t.places=[],s.results.filter((function(e){var t;return"OPERATIONAL"===(null===(t=e.business_status)||void 0===t?void 0:t.toUpperCase())})).forEach((function(e){t.places.push(e);var r=new t.google.maps.Marker({position:e.geometry.location,title:e.name});r.setMap(t.map)})),t.isFetching=!1,r.finish(13);case 18:case"end":return r.stop()}}),r,null,[[2,8,13,18]])})))()}}},H=q,K=(r("b95a"),Object(m["a"])(H,v,w,!1,null,"db089bc0",null)),Z=K.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlayer"},[r("div",{staticClass:"modal"},[r("header",{staticClass:"header"},[r("p",{staticClass:"label"},[e._v(" ENTRAR ")]),r("button",{staticClass:"fa fa-times",on:{click:e.OPEN_LOGIN}})]),r("form",{on:{submit:e.signIn}},[r("label",{attrs:{for:"email"}},[e._v(" Email "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],style:e.submitted&&e.isError.email&&e.inputError,attrs:{name:"email",type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.isError.email?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.isError.email)+" ")]):e._e()])]),r("label",{attrs:{for:"password"}},[e._v(" Senha "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],style:e.submitted&&e.isError.password&&e.inputError,attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.isError.password?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.isError.password)+" ")]):e._e()])]),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.loginMessageError?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.loginMessageError)+" ")]):e._e()]),r("button",[e._v(e._s(e.isFetching?"Buscando...":"Entrar"))]),r("p",{staticClass:"option"},[e._v("Ainda não possui uma conta? "),r("a",{attrs:{href:"#"},on:{click:e.OPEN_REGISTER}},[e._v("Cadastre-se.")])])])])])},V=[],X=(r("4d63"),r("ac1f"),r("25f0"),function(e){if(!e)return!0;var t=new RegExp("^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[a-zA-Z]{2,7}$");return t.test(e)}),Q={name:"SignIn",data:function(){return{email:"",password:"",submitted:!1,isError:{email:!1,password:!1},messageError:""}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["loginMessageError","isFetching"])),{},{inputError:function(){return{borderColor:"red"}}}),watch:{email:function(e){var t=!1;e||(t="Email requerido"),X(e)||(t="E-mail inválido"),e&&X(e)&&(t=!1),this.isError=Object(c["a"])(Object(c["a"])({},this.isError),{},{email:t})},password:function(e){var t=!1;e||(t="Senha requerida"),e&&X(e)&&(t=!1),this.isError=Object(c["a"])(Object(c["a"])({},this.isError),{},{password:t})}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["LOGIN","OPEN_LOGIN","OPEN_REGISTER"])),{},{signIn:function(e){e.preventDefault(),this.submitted=!0,this.email&&X(this.email)&&this.password&&this.LOGIN({email:this.email,password:this.password})}})},Y=Q,ee=(r("80be"),Object(m["a"])(Y,J,V,!1,null,"dfc7b950",null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlayer"},[r("div",{staticClass:"modal"},[r("header",{staticClass:"header"},[r("p",{staticClass:"label"},[e._v(" ENTRAR ")]),r("button",{staticClass:"fa fa-times",on:{click:e.CLOSE_REGISTER}})]),r("form",{on:{submit:e.signIn}},[r("label",{attrs:{for:"email"}},[e._v(" Email "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],style:e.submitted&&e.isError.email&&e.inputError,attrs:{name:"email",type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.isError.email?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.isError.email)+" ")]):e._e()])]),r("label",{attrs:{for:"password"}},[e._v(" Senha "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],style:e.submitted&&e.isError.password&&e.inputError,attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.isError.password?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.isError.password)+" ")]):e._e()])]),r("label",{attrs:{for:"password"}},[e._v(" Repita a Senha "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],style:e.submitted&&e.isError.repassword&&e.inputError,attrs:{type:"password"},domProps:{value:e.repassword},on:{input:function(t){t.target.composing||(e.repassword=t.target.value)}}}),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.isError.repassword?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.isError.repassword)+" ")]):e._e()])]),r("div",{staticClass:"containerErrorMessage"},[e.submitted&&e.loginMessageError?r("p",{staticClass:"errorMessage"},[e._v(" "+e._s(e.loginMessageError)+" ")]):e._e()]),r("button",[e._v(e._s(e.isFetching?"Registrando...":"Registrar"))]),r("p",{staticClass:"option"},[e._v("Já possui uma conta? "),r("a",{attrs:{href:"#"},on:{click:e.OPEN_LOGIN}},[e._v("Entre.")])])])])])},se=[],ae={name:"SignUp",data:function(){return{email:"",password:"",repassword:"",submitted:!1,isError:{email:!1,password:!1,repassword:!1},messageError:""}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["loginMessageError","isFetching"])),{},{inputError:function(){return{borderColor:"red"}}}),watch:{email:function(e){var t=!1;e||(t="Email requerido."),X(e)||(t="E-mail inválido."),e&&X(e)&&(t=!1),this.isError=Object(c["a"])(Object(c["a"])({},this.isError),{},{email:t})},password:function(e){var t=!1;e||(t="Senha requerida."),e&&X(e)&&(t=!1),this.isError=Object(c["a"])(Object(c["a"])({},this.isError),{},{password:t})},repassword:function(e){var t=!1;e||(t="Digite novamente a senha."),e&&e!==this.password&&(t="As senhas são diferentes."),this.isError=Object(c["a"])(Object(c["a"])({},this.isError),{},{repassword:t})}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["LOGIN","OPEN_LOGIN","OPEN_REGISTER","CLOSE_REGISTER"])),{},{signIn:function(e){e.preventDefault(),this.submitted=!0,console.log("entrei"),this.email&&X(this.email)&&this.password&&this.password===this.repassword&&this.LOGIN({email:this.email,password:this.password})}})},ne=ae,ie=(r("cdfc"),Object(m["a"])(ne,re,se,!1,null,"3ba1f508",null)),oe=ie.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlayer"},[r("div",{staticClass:"modal"},[r("button",{staticClass:"fa fa-times",on:{click:e.OPEN_PROFILE}}),r("img",{attrs:{src:e.user.avatar,alt:"Avatar"}}),r("p",{staticClass:"name"},[e._v(" "+e._s(e.user.first_name)+" "+e._s(e.user.last_name)+" ")]),r("p",{staticClass:"email"},[e._v(" "+e._s(e.user.email)+" ")])])])},ue=[],le={computed:Object(c["a"])({},Object(u["c"])(["user"])),methods:Object(c["a"])({},Object(u["b"])(["OPEN_PROFILE"]))},pe=le,de=(r("ff1e"),Object(m["a"])(pe,ce,ue,!1,null,"be2278ca",null)),ge=de.exports,me={name:"App",components:{Menu:h,Map:Z,SignIn:te,SignUp:oe,Profile:ge}},fe=me,he=(r("034f"),Object(m["a"])(fe,a,n,!1,null,null,null)),ve=he.exports,we=C.a.create({baseURL:"https://reqres.in/api",headers:{"content-type":"application/json"}}),be=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",we({method:"POST",url:"/register",data:{email:t.email,password:t.password}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",we({method:"GET",url:"/users/".concat(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s["a"].use(u["a"]);var Ee=new u["a"].Store({state:{isFetching:!1,token:null,user:null,showLogin:!1,showRegister:!1,showProfile:!1,loginMessageError:"",place:null},mutations:{OPEN_LOGIN:function(e){e.showRegister&&(e.showRegister=!1),e.showLogin=!e.showLogin},OPEN_REGISTER:function(e){e.showLogin=!1,e.showRegister=!0},CLOSE_REGISTER:function(e){e.showRegister=!1},OPEN_PROFILE:function(e){e.showProfile=!e.showProfile},LOGIN:function(e,t){e.isFetching=!0,be(t).then((function(t){e.token=t.data.token,e.user={id:t.data.id},e.loginMessageError="",e.isFetching=!1,e.showLogin=!1,e.showRegister=!1})).catch((function(t){console.log("err",t),e.isFetching=!1;var r="Algo deu errado, tente novamente";"user not found"===t.response.data.error.toLowerCase()&&(r="Usuário não encontrado"),"note: only defined users succeed registration"===t.response.data.error.toLowerCase()&&(r="Esta API somente aceita usuários predefinidos"),e.loginMessageError=r}))},LOGOUT:function(e){e.token=null},GET_PROFILE:function(e){e.isFetching=!0,_e(e.user.id).then((function(t){e.isFetching=!1,e.user=t.data.data})).catch((function(e){console.log(e),console.log("err.response",e.response)}))},FETCH_DETAILS_PLACES:function(e,t){P(t).then((function(t){console.log("data",t.result),e.place=t.result}))},CLEAR_PLACE:function(e){e.place=null}}});s["a"].config.productionTip=!1,new s["a"]({store:Ee,render:function(e){return e(ve)}}).$mount("#app")},"80be":function(e,t,r){"use strict";r("112a")},"85ec":function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.1576ed47.svg"},"9b70":function(e,t,r){e.exports=r.p+"img/pin.82e1eb1f.svg"},b95a:function(e,t,r){"use strict";r("e5c3")},ccd8:function(e,t,r){},cdfc:function(e,t,r){"use strict";r("0aea")},d06c:function(e,t,r){},dbb3:function(e,t,r){"use strict";r("d06c")},e5c3:function(e,t,r){},ed19:function(e,t,r){},ee46:function(e,t,r){"use strict";r("ccd8")},ff1e:function(e,t,r){"use strict";r("ed19")}});
//# sourceMappingURL=app.2c57e3eb.js.map