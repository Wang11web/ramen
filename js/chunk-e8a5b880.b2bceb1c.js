(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8a5b880"],{1799:function(t,e,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},l=Object(a["h"])("span",{"aria-hidden":"true"},"«",-1),i=[l],r=["onClick"],s=Object(a["h"])("span",{"aria-hidden":"true"},"»",-1),d=[s];function u(t,e,c,l,s,u){return Object(a["x"])(),Object(a["g"])("nav",o,[Object(a["h"])("ul",n,[Object(a["h"])("li",{class:Object(a["r"])(["page-item",{disabled:1==c.pages.current_page}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["V"])((function(e){return u.updatePage(t.page-1)}),["prevent"]))},i)],2),(Object(a["x"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(c.pages.total_pages,(function(t){return Object(a["x"])(),Object(a["g"])("li",{class:Object(a["r"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["V"])((function(e){return u.updatePage(t)}),["prevent"])},Object(a["K"])(t),9,r)],2)})),128)),Object(a["h"])("li",{class:Object(a["r"])(["page-item",{disabled:c.pages.current_page==c.pages.total_pages}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(a["V"])((function(e){return u.updatePage(t.page+1)}),["prevent"]))},d)],2)])])}var b={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-page",t)}}};c("dc71");b.render=u;e["a"]=b},a434:function(t,e,c){"use strict";var a=c("23e7"),o=c("23cb"),n=c("a691"),l=c("50c4"),i=c("7b0b"),r=c("65f0"),s=c("8418"),d=c("1dde"),u=d("splice"),b=Math.max,p=Math.min,h=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var c,a,d,u,j,O,f=i(this),g=l(f.length),v=o(t,g),P=arguments.length;if(0===P?c=a=0:1===P?(c=0,a=g-v):(c=P-2,a=p(b(n(e),0),g-v)),g+c-a>h)throw TypeError(m);for(d=r(f,a),u=0;u<a;u++)j=v+u,j in f&&s(d,u,f[j]);if(d.length=a,c<a){for(u=v;u<g-a;u++)j=u+a,O=u+c,j in f?f[O]=f[j]:delete f[O];for(u=g;u>g-a+c;u--)delete f[u-1]}else if(c>a)for(u=g-a;u>v;u--)j=u+a-1,O=u+c-1,j in f?f[O]=f[j]:delete f[O];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-a+c,d}})},ba53:function(t,e,c){},d2f1:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"p-4"},n={class:"text-end"},l={class:"table mt-4"},i=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"分類"),Object(a["h"])("th",null,"產品名稱"),Object(a["h"])("th",null,"圖片"),Object(a["h"])("th",null,"售價"),Object(a["h"])("th",null,"是否啟用"),Object(a["h"])("th",null,"編輯")])],-1),r={style:{width:"100px"}},s=["src"],d={class:"text-right"},u={class:"form-check form-switch"},b=["for"],p={key:0,class:"text-success"},h={key:1,class:"text-muted"},m=["id","onUpdate:modelValue","onChange"],j={class:"btn-group"},O=["onClick"],f=["onClick"];function g(t,e,c,g,v,P){var y=Object(a["H"])("LoadingStyle"),x=Object(a["H"])("Loading"),k=Object(a["H"])("Pagination"),U=Object(a["H"])("ProductModal"),w=Object(a["H"])("DelModal");return Object(a["x"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(x,{active:v.isLoading},{default:Object(a["T"])((function(){return[Object(a["j"])(y)]})),_:1},8,["active"]),Object(a["h"])("div",o,[Object(a["h"])("div",n,[Object(a["h"])("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=function(t){return P.openModal(!0)})}," 增加一個產品 ")]),Object(a["h"])("table",l,[i,Object(a["h"])("tbody",null,[(Object(a["x"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(v.products,(function(e){return Object(a["x"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",null,Object(a["K"])(e.category),1),Object(a["h"])("td",null,Object(a["K"])(e.title),1),Object(a["h"])("td",null,[Object(a["h"])("div",r,[Object(a["h"])("img",{src:e.imageUrl,alt:"",class:" img-fluid"},null,8,s)])]),Object(a["h"])("td",d,Object(a["K"])(t.$filters.currency(e.price)),1),Object(a["h"])("td",null,[Object(a["h"])("div",u,[Object(a["h"])("label",{class:"form-check-label",for:"enableCheckbox".concat(e.id)},[e.is_enabled?(Object(a["x"])(),Object(a["g"])("span",p,"已啟用")):(Object(a["x"])(),Object(a["g"])("span",h,"未啟用"))],8,b),Object(a["U"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"enableCheckbox".concat(e.id),"onUpdate:modelValue":function(t){return e.is_enabled=t},onChange:function(t){return P.updateProduct(e)}},null,40,m),[[a["N"],e.is_enabled]])])]),Object(a["h"])("td",null,[Object(a["h"])("div",j,[Object(a["h"])("div",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return P.openModal(!1,e)}},"編輯",8,O),Object(a["h"])("div",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return P.openDelModal(e)}},"刪除",8,f)])])])})),128))])])]),Object(a["j"])(k,{pages:v.pagination,onEmitPage:P.getProducts},null,8,["pages","onEmitPage"]),Object(a["j"])(U,{ref:"productModal",product:v.tempProduct,onUpdateProduct:P.updateProduct},null,8,["product","onUpdateProduct"]),Object(a["j"])(w,{item:v.tempProduct,ref:"delModal",onDelItem:P.delProduct},null,8,["item","onDelItem"])],64)}var v=c("5530"),P=(c("99af"),c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),y={class:"modal-dialog modal-xl",role:"document"},x={class:"modal-content border-0"},k=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"新增產品")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},w={class:"row"},M={class:"col-sm-4"},C={class:"mb-3"},_=Object(a["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),V={class:"mb-3"},$=Object(a["h"])("label",{for:"customFile",class:"form-label"},[Object(a["i"])("或 上傳圖片 "),Object(a["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),L=["src"],S={key:0,class:"mt-5"},F=["onUpdate:modelValue"],D=["onClick"],I={key:0},N={class:"col-sm-8"},H={class:"mb-3"},E=Object(a["h"])("label",{for:"title",class:"form-label"},"標題",-1),K={class:"row gx-2"},J={class:"mb-3 col-md-6"},T=Object(a["h"])("label",{for:"category",class:"form-label"},"分類",-1),A=Object(a["h"])("option",{value:"烏龍麵"},"烏龍麵",-1),B=Object(a["h"])("option",{value:"炸物"},"炸物",-1),q=Object(a["h"])("option",{value:"飯類"},"飯類",-1),z=Object(a["h"])("option",{value:"配料"},"配料",-1),G=[A,B,q,z],Q={class:"mb-3 col-md-6"},R=Object(a["h"])("label",{for:"price",class:"form-label"},"單位",-1),W={class:"row gx-2"},X={class:"mb-3 col-md-6"},Y=Object(a["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),Z={class:"mb-3 col-md-6"},tt=Object(a["h"])("label",{for:"price",class:"form-label"},"售價",-1),et=Object(a["h"])("hr",null,null,-1),ct={class:"mb-3"},at=Object(a["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),ot={class:"mb-3"},nt=Object(a["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),lt={class:"mb-3"},it={class:"form-check"},rt=Object(a["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),st={class:"modal-footer"},dt=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ut(t,e,c,o,n,l){return Object(a["x"])(),Object(a["g"])("div",P,[Object(a["h"])("div",y,[Object(a["h"])("div",x,[k,Object(a["h"])("div",U,[Object(a["h"])("div",w,[Object(a["h"])("div",M,[Object(a["h"])("div",C,[_,Object(a["U"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=function(t){return n.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[a["P"],n.tempProduct.imageUrl]])]),Object(a["h"])("div",V,[$,Object(a["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:n.tempProduct.imageUrl,alt:""},null,8,L),n.tempProduct.images?(Object(a["x"])(),Object(a["g"])("div",S,[(Object(a["x"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(n.tempProduct.images,(function(t,e){return Object(a["x"])(),Object(a["g"])("div",{class:"mb-3 input-group",key:e},[Object(a["U"])(Object(a["h"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(t){return n.tempProduct.images[e]=t},placeholder:"請輸入連結"},null,8,F),[[a["P"],n.tempProduct.images[e]]]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return n.tempProduct.images.splice(e,1)}}," 移除 ",8,D)])})),128)),n.tempProduct.images[n.tempProduct.images.length-1]||!n.tempProduct.images.length?(Object(a["x"])(),Object(a["g"])("div",I,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(t){return n.tempProduct.images.push("")})}," 新增圖片 ")])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)]),Object(a["h"])("div",N,[Object(a["h"])("div",H,[E,Object(a["U"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempProduct.title=t}),placeholder:"請輸入標題"},null,512),[[a["P"],n.tempProduct.title]])]),Object(a["h"])("div",K,[Object(a["h"])("div",J,[T,Object(a["U"])(Object(a["h"])("select",{class:"form-select",id:"category","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempProduct.category=t})},G,512),[[a["O"],n.tempProduct.category]])]),Object(a["h"])("div",Q,[R,Object(a["U"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.unit=t}),placeholder:"請輸入單位"},null,512),[[a["P"],n.tempProduct.unit]])])]),Object(a["h"])("div",W,[Object(a["h"])("div",X,[Y,Object(a["U"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.origin_price=t}),placeholder:"請輸入原價"},null,512),[[a["P"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(a["h"])("div",Z,[tt,Object(a["U"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.price=t}),placeholder:"請輸入售價"},null,512),[[a["P"],n.tempProduct.price,void 0,{number:!0}]])])]),et,Object(a["h"])("div",ct,[at,Object(a["U"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[a["P"],n.tempProduct.description]])]),Object(a["h"])("div",ot,[nt,Object(a["U"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[a["P"],n.tempProduct.content]])]),Object(a["h"])("div",lt,[Object(a["h"])("div",it,[Object(a["U"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.tempProduct.is_enabled=t}),id:"is_enabled"},null,512),[[a["N"],n.tempProduct.is_enabled]]),rt])])])])]),Object(a["h"])("div",st,[Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(){return l.emitProduct&&l.emitProduct.apply(l,arguments)})},"確認"),dt])])])],512)}var bt=c("e0ae"),pt={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wang11-api","/admin/upload");this.$http.post(a,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))},emitProduct:function(){var t=this.$refs.fileInput.id;document.getElementById(t).value="",this.$emit("update-product",this.tempProduct)}},mixins:[bt["a"]]};pt.render=ut;var ht=pt,mt=c("6ff1"),jt=c("1799"),Ot=c("4b79"),ft={data:function(){return{products:[],pagination:{},tempProduct:{},isLoading:!1,isNew:!1}},components:{ProductModal:ht,DelModal:mt["a"],Pagination:jt["a"],LoadingStyle:Ot["a"]},inject:["emitter","pushMessageState"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wang11-api","/admin/products/?page=").concat(e);this.$http.get(c).then((function(e){e.data.success&&(t.isLoading=!1,console.log(e.data),t.products=e.data.products,t.pagination=e.data.pagination)}))},openModal:function(t,e){this.tempProduct=t?{}:Object(v["a"])({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},updateProduct:function(t){var e=this;this.tempProduct=t,this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wang11-api","/admin/product"),a="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wang11-api","/admin/product/").concat(t.id),a="put");var o=this.$refs.productModal;this.$http[a](c,{data:this.tempProduct}).then((function(t){e.isLoading=!1,console.log(t),o.hideModal(),e.getProducts(),e.pushMessageState(t)}))},openDelModal:function(t){this.tempProduct=Object(v["a"])({},t);var e=this.$refs.delModal;e.showModal()},delProduct:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wang11-api","/admin/product/").concat(this.tempProduct.id);this.$http.delete(e).then((function(e){t.isLoading=!1,console.log(e.data);var c=t.$refs.delModal;c.hideModal(),t.getProducts(),t.pushMessageState(e,"刪除")}))}},created:function(){this.getProducts()}};ft.render=g;e["default"]=ft},dc71:function(t,e,c){"use strict";c("ba53")},e01a:function(t,e,c){"use strict";var a=c("23e7"),o=c("83ab"),n=c("da84"),l=c("5135"),i=c("861d"),r=c("9bf2").f,s=c("e893"),d=n.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};s(b,d);var p=b.prototype=d.prototype;p.constructor=b;var h=p.toString,m="Symbol(test)"==String(d("test")),j=/^Symbol\((.*)\)[^)]+$/;r(p,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=h.call(t);if(l(u,t))return"";var c=m?e.slice(7,-1):e.replace(j,"$1");return""===c?void 0:c}}),a({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-e8a5b880.b2bceb1c.js.map