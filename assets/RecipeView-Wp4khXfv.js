import{f as k,M as J,m as K,e as W,s as z,o as X,T as Y,k as n,n as s,p as m,w as p,i as ss,Q as ts,S as h,A as r,z as G,R as l,q as c,F as b,N as y,Z as es,u as ls,O as os,l as a,_ as Q,$ as ns}from"./index-C3wRXjM7.js";import{t as as}from"./tagAndCategoryStore-DseWv7NB.js";import{_ as is}from"./AlertModal-C_grvIDq.js";import{_ as rs}from"./CardComponent-DbDJO6j6.js";const cs={class:"row"},ds={class:"col-12 py-8"},us={"aria-label":"breadcrumb"},ps={class:"breadcrumb"},ms={class:"breadcrumb-item"},bs={class:"breadcrumb-item"},gs={class:"col-12 col-md-6 col-xl-7 mb-11 mb-md-16"},vs=["alt"],ys={class:"col-12 col-md-6 col-xl-5 mb-16"},_s={class:"position-relative p-16 bg-white shadow-sm rounded"},fs={class:"mb-11"},ws={key:2,class:"list-unstyled mb-11"},xs={class:"mb-2"},ks={class:"mb-2"},hs={class:"mb-2"},Cs={class:"mb-2"},Rs={class:"textClamp textClampLg textLsSm text-muted"},$s={key:3,class:"list-unstyled mt-11 mb-0"},js={class:"badge text-bg-secondary fs-6"},Ts={class:"col-12 col-lg-6 mb-16"},Fs={class:"title justify-content-start mb-11"},Is={class:"fs-5 text-muted"},Ms={class:"row list-unstyled mb-0"},Ns={class:"d-flex justify-content-between py-4 border-bottom"},Ss={class:"col-12 col-lg-6 mb-16"},As={class:"row list-unstyled mb-0"},Ls={class:"col-12 col-sm-6"},Bs={class:"d-flex justify-content-between py-4 border-bottom"},Vs={class:"col-12 col-sm-6"},Os={class:"d-flex justify-content-between py-4 border-bottom"},zs={class:"col-12 col-sm-6"},Gs={class:"d-flex justify-content-between py-4 border-bottom"},Qs={class:"col-12 col-sm-6"},qs={class:"d-flex justify-content-between py-4 border-bottom"},Ds={class:"col-12 col-sm-6"},Es={class:"d-flex justify-content-between py-4 border-bottom"},Ps={class:"col-12 col-sm-6"},Us={class:"d-flex justify-content-between py-4 border-bottom"},Zs={class:"col-12 mb-16"},Hs={class:"step mx-auto"},Js={class:"stepList list-unstyled position-relative m-0 p-0"},Ks={class:"stepOrder px-8 py-4 bg-secondary rounded-circle text-white fw-bold"},Ws={class:"ms-17 ms-md-23 p-11 bg-white rounded-2 shadow-sm"},Xs={class:"col-12 mb-16"},Ys={class:"textLsSm text-muted"},st={class:"col-12 mb-17"},tt={key:0,class:"row row-cols-1 row-cols-md-2 row-cols-xxl-3 gy-14 mb-11"},it={__name:"RecipeView",setup(et){const q=Y(),C=ls(),_=k(null),D=J(),E=K(),R=W(),$=as(),{openLoading:j,closeLoading:g}=D,{pushMessage:T}=E,{getTagsAndCategories:P}=$,{toggleCollect:f}=R,{myProfile:F}=z(R),{categories:v,tags:I}=z($),e=k({}),w=k([]);function U(){var i;(i=_.value)==null||i.hideModal(),C.push("/recipes")}async function Z(i){var t,d;j();try{const u=await es(i);e.value=u.data.data,await H(e.value.category),g()}catch(u){T({style:"danger",title:"載入失敗",text:((d=(t=u.response)==null?void 0:t.data)==null?void 0:d.message)||"食譜載入失敗，請重整網頁"}),g(),C.push("/recipes")}}async function H(i){var t,d;j();try{const u=await os({category:i});w.value=u.data.data.results,g()}catch(u){T({style:"danger",title:"載入失敗",text:((d=(t=u.response)==null?void 0:t.data)==null?void 0:d.message)||"相關食譜載入失敗，請重整網頁"}),g()}}return X(async()=>{var t;const{id:i}=q.params;i?((!I.value.length||!v.value.length)&&await P(),await Z(i)):(t=_.value)==null||t.openModal()}),(i,t)=>{var u,M,N,S,A,L,B,V,O;const d=ss("router-link");return a(),n(b,null,[s("div",cs,[s("div",ds,[s("nav",us,[s("ol",ps,[s("li",ms,[m(d,{to:"/recipes"},{default:p(()=>t[2]||(t[2]=[c(" 所有食譜 ")])),_:1})]),s("li",bs,[m(d,{to:`/recipes?category=${e.value.category}`},{default:p(()=>[c(l(r(Q)(r(v),e.value.category)),1)]),_:1},8,["to"])]),t[3]||(t[3]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"洋蔥炒牛肉",-1))])])]),s("div",gs,[s("div",{class:"recipeCover backgroundCover w-100 h-100 rounded-2",style:ts({backgroundImage:`url(${e.value.coverImgUrl})`}),alt:e.value.title},null,12,vs)]),s("div",ys,[s("div",_s,[(u=r(F).collects)!=null&&u.includes(e.value._id)?(a(),n("a",{key:0,href:"#",class:"collectBtn position-absolute top-0 end-0 p-14 text-secondary fs-4",onClick:t[0]||(t[0]=G(o=>r(f)({active:"remove",recipeId:e.value._id}),["prevent"]))},t[4]||(t[4]=[s("i",{class:"bi bi-heart-fill"},null,-1)]))):(a(),n("a",{key:1,href:"#",class:"collectBtn position-absolute top-0 end-0 p-14 text-secondary fs-4",onClick:t[1]||(t[1]=G(o=>r(f)({active:"create",recipeId:e.value._id}),["prevent"]))},t[5]||(t[5]=[s("i",{class:"bi bi-heart"},null,-1)]))),m(d,{to:`/recipes?category=${e.value.category}`,class:"d-block mb-4"},{default:p(()=>[c(l(r(Q)(r(v),e.value.category)),1)]),_:1},8,["to"]),s("h1",fs,l(e.value.title),1),e.value._id?(a(),n("ul",ws,[s("li",xs,[t[6]||(t[6]=s("i",{class:"bi bi-person-fill me-4"},null,-1)),t[7]||(t[7]=c(" 作者： ")),m(d,{to:`/user/${(M=e.value.user)==null?void 0:M._id}`,class:"link-muted"},{default:p(()=>{var o;return[c(l((o=e.value.user)==null?void 0:o.nickName),1)]}),_:1},8,["to"])]),s("li",ks,[t[8]||(t[8]=s("i",{class:"bi bi-calendar3 me-4"},null,-1)),c(" 建立日期："+l(i.$getTime(e.value.createdAt)),1)]),s("li",hs,[t[9]||(t[9]=s("i",{class:"bi bi-calendar3 me-4"},null,-1)),c(" 更新日期："+l(i.$getTime(e.value.updatedAt)),1)]),s("li",Cs,[t[10]||(t[10]=s("i",{class:"bi bi-bookmark-heart me-4"},null,-1)),c(" 收藏人數："+l(e.value.collectsCount),1)]),s("li",null,[t[11]||(t[11]=s("i",{class:"bi bi-clock-history me-4"},null,-1)),c(" 烹飪時長："+l(e.value.cookingTime),1)])])):h("",!0),s("p",Rs,l(e.value.description),1),(N=e.value.tags)!=null&&N.length?(a(),n("ul",$s,[(a(!0),n(b,null,y(e.value.tags,o=>(a(),n("li",{key:o,class:"d-inline-block me-2"},[s("span",js,l(r(ns)(r(I),o)),1)]))),128))])):h("",!0)])]),s("div",Ts,[s("h2",Fs,[t[12]||(t[12]=s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})],-1)),t[13]||(t[13]=s("span",{class:"me-6"}," 食材 ",-1)),s("span",Is,"("+l(e.value.servings)+" 人份)",1)]),s("ul",Ms,[(a(!0),n(b,null,y(e.value.ingredients,(o,x)=>(a(),n("li",{class:"col-12 col-sm-6",key:`ingredient${x}`},[s("p",Ns,[s("span",null,l(o.ingredientName),1),s("span",null,l(o.ingredientQty),1)])]))),128))])]),s("div",Ss,[t[20]||(t[20]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 營養成分 ")],-1)),s("ul",As,[s("li",Ls,[s("p",Bs,[t[14]||(t[14]=s("span",null," 總熱量 ",-1)),s("span",null,l((S=e.value.nutritionFacts)==null?void 0:S.calories)+" 大卡",1)])]),s("li",Vs,[s("p",Os,[t[15]||(t[15]=s("span",null," 蛋白質 ",-1)),s("span",null,l((A=e.value.nutritionFacts)==null?void 0:A.protein)+" 克",1)])]),s("li",zs,[s("p",Gs,[t[16]||(t[16]=s("span",null," 碳水化合物 ",-1)),s("span",null,l((L=e.value.nutritionFacts)==null?void 0:L.totalCarb)+" 克",1)])]),s("li",Qs,[s("p",qs,[t[17]||(t[17]=s("span",null," 總脂肪 ",-1)),s("span",null,l((B=e.value.nutritionFacts)==null?void 0:B.totalFat)+" 克",1)])]),s("li",Ds,[s("p",Es,[t[18]||(t[18]=s("span",null," 醣類 ",-1)),s("span",null,l((V=e.value.nutritionFacts)==null?void 0:V.sugar)+" 克",1)])]),s("li",Ps,[s("p",Us,[t[19]||(t[19]=s("span",null," 鹽 ",-1)),s("span",null,l((O=e.value.nutritionFacts)==null?void 0:O.sodium)+" 克",1)])])])]),s("div",Zs,[t[21]||(t[21]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 步驟 ")],-1)),s("div",Hs,[s("ul",Js,[(a(!0),n(b,null,y(e.value.steps,(o,x)=>(a(),n("li",{class:"stepItem position-relative",key:`step${x}`},[s("div",Ks,l(o.stepOrder),1),s("div",Ws,l(o.stepContent),1)]))),128))])])]),s("div",Xs,[t[22]||(t[22]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 小撇步 ")],-1)),s("div",Ys,l(e.value.note||"無"),1)]),s("div",st,[t[23]||(t[23]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 更多料理選擇 ")],-1)),w.value.length?(a(),n("div",tt,[(a(!0),n(b,null,y(w.value.slice(0,3),o=>(a(),n("div",{class:"col",key:o._id},[m(rs,{recipe:o,categories:r(v),collects:r(F).collects,onToggleCollect:r(f)},null,8,["recipe","categories","collects","onToggleCollect"])]))),128))])):h("",!0)])]),m(is,{ref_key:"alertModalRef",ref:_},{"modal-header":p(()=>t[24]||(t[24]=[s("span",{class:"titleIcon bg-danger-subtle"},[s("i",{class:"bi bi-exclamation-triangle-fill"})],-1),c(" 找不到此食譜 ")])),"modal-content":p(()=>t[25]||(t[25]=[c(" 找不到此食譜，將為您導入食譜列表頁面 ")])),"modal-footer":p(()=>[s("button",{type:"button",class:"w-50 btn btn-primary",onClick:U},"關閉")]),_:1},512)],64)}}};export{it as default};
