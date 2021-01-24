(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Loader:"Loader_Loader__1jooa",LoaderButton:"Loader_LoaderButton__27qn2"}},11:function(e,t,a){e.exports={Button:"Button_Button__34lYL",ButtonContainer:"Button_ButtonContainer__3b6ia"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1I2Dk",Modal:"Modal_Modal__1VYYB"}},15:function(e,t,a){e.exports={App:"App_App__15ncr"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__34hfY"}},23:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(14),s=a.n(o),i=(a(23),a(13)),l=a(3),u=a(4),h=a(6),d=a(5),m=(a.p,a(15)),p=a.n(m),b=a(7),j=a.n(b),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchName:""},e.handleInput=function(t){t.preventDefault(),e.setState({searchName:t.currentTarget.value})},e.handleSubmit=function(t){e.state.searchName.trim()?(t.preventDefault(),e.props.onSubmit(e.state.searchName)):t.preventDefault()},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:j.a.Searchbar,children:Object(n.jsxs)("form",{className:j.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:j.a.SearchFormButton,onClick:this.handleSubmit,children:Object(n.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInput})]})})}}]),a}(r.Component),g=a(16),S=a.n(g),_=a(9),O=a.n(_);function v(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,c=e.onIMGclick;return Object(n.jsx)("li",{className:O.a.ImageGalleryItem,onClick:c,children:Object(n.jsx)("img",{src:a,"data-source":r,alt:"",className:O.a.ImageGalleryItemImage})},t)}function I(e){var t=e.searchData,a=e.onIMGclick;return Object(n.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(v,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,onIMGclick:a},e.id)}))})}var y=a(17),x=a.n(y),M=a(10),w=a.n(M),L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{type:"Audio",color:"#39d312",height:100,width:100,timeout:3e3,className:1===this.props.pageState?w.a.Loader:w.a.LoaderButton})})}}]),a}(r.Component),k=a(11),G=a.n(k);function B(e){var t=e.loadMore;return Object(n.jsx)("div",{className:G.a.ButtonContainer,children:Object(n.jsx)("button",{type:"submit",className:G.a.Button,onClick:t,children:Object(n.jsx)("span",{children:"Load more"})})})}var D=a(12),C=a.n(D),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:C.a.Overlay,onClick:this.handleOverlayClick,children:Object(n.jsx)("div",{className:C.a.Modal,children:Object(n.jsx)("img",{src:this.props.chosenIMG,alt:""})})})}}]),a}(r.Component),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={SearchData:null,status:"idle",page:1,currentSearch:"",showModal:!1,chosenIMG:""},e.apiConfig={API_KEY:"19125806-9a56a48a4edb0ea3b4b1e3bdb",BASE_URL:"https://pixabay.com/api/"},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}}))},e.chosenIMG=function(t){e.setState({chosenIMG:t.target.dataset.source}),e.toggleModal()},e.toSearch=function(t){e.state.currentSearch!==t&&(e.resetState(),e.setState({status:"pending"}),e.setState({currentSearch:t}))},e.fetchElements=function(){fetch("".concat(e.apiConfig.BASE_URL,"?key=").concat(e.apiConfig.API_KEY,"&q=").concat(e.state.currentSearch,"&page=").concat(e.state.page,"&per_page=12")).then((function(e){return e.json()})).then((function(t){null===e.state.SearchData?e.setState({SearchData:t.hits,status:"idle"}):e.setState((function(e){return{SearchData:[].concat(Object(i.a)(e.SearchData),Object(i.a)(t.hits)),status:"idle"}}))}))},e.windowScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.loadMore=function(t){t.preventDefault(),e.setState((function(e){return{page:e.page+1,status:"pending"}}))},e.resetState=function(){e.setState({SearchData:null,page:1})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){this.state.page!==t.page?this.fetchElements():this.state.currentSearch!==t.currentSearch&&(this.resetState(),this.fetchElements()),this.windowScroll()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:p.a.App,children:["pending"===this.state.status&&Object(n.jsx)(L,{pageState:this.state.page}),Object(n.jsx)(f,{onSubmit:this.toSearch}),this.state.SearchData&&Object(n.jsxs)("div",{children:[Object(n.jsx)(I,{searchData:this.state.SearchData,onIMGclick:this.chosenIMG}),"idle"===this.state.status&&Object(n.jsx)(B,{loadMore:this.loadMore})]}),this.state.showModal&&Object(n.jsx)(N,{chosenIMG:this.state.chosenIMG,closeModal:this.toggleModal})]})}}]),a}(r.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"));var A="".trim();console.log(A),A&&console.log("\u0435\u0441\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0430"),E()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3U_Vw",SearchForm:"Searchbar_SearchForm__202-s",SearchFormButton:"Searchbar_SearchFormButton__2M8Hj",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3LprT",SearchFormInput:"Searchbar_SearchFormInput__49vw1"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__ELOk6",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2ZNX7"}}},[[45,1,2]]]);
//# sourceMappingURL=main.2c1afb36.chunk.js.map