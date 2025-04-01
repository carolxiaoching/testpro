import{f as h,M as H,m as J,e as K,s as B,o as W,T as X,k as n,n as s,p as m,w as p,i as Y,Q as ss,S as V,A as i,z as G,R as l,q as c,F as g,N as _,Z as ts,O as es,u as ls,l as a,_ as O,$ as os}from"./index-BTMceWrS.js";import{t as ns}from"./tagAndCategoryStore-DoTVKioX.js";import{_ as as}from"./AlertModal-CLH3KOiN.js";import{_ as is}from"./CardComponent-DpEbO-fO.js";const cs={class:"row"},rs={class:"col-12 py-8"},ds={"aria-label":"breadcrumb"},us={class:"breadcrumb"},ps={class:"breadcrumb-item"},ms={class:"breadcrumb-item"},bs={class:"col-12 col-md-6 col-xl-7 mb-11 mb-md-16"},gs=["alt"],vs={class:"col-12 col-md-6 col-xl-5 mb-16"},ys={class:"position-relative p-16 bg-white shadow-sm rounded"},_s={class:"mb-11"},fs={class:"list-unstyled mb-11"},ws={class:"mb-2"},xs={class:"mb-2"},ks={class:"mb-2"},hs={class:"mb-2"},Cs={class:"textClamp textClampLg textLsSm text-muted"},Rs={key:2,class:"list-unstyled mt-11 mb-0"},$s={class:"badge text-bg-secondary fs-6"},js={class:"col-12 col-lg-6 mb-16"},Ts={class:"title justify-content-start mb-11"},As={class:"fs-5 text-muted"},Fs={class:"row list-unstyled mb-0"},Is={class:"d-flex justify-content-between py-4 border-bottom"},Ms={class:"col-12 col-lg-6 mb-16"},Ns={class:"row list-unstyled mb-0"},Ss={class:"col-12 col-sm-6"},Ls={class:"d-flex justify-content-between py-4 border-bottom"},Bs={class:"col-12 col-sm-6"},Vs={class:"d-flex justify-content-between py-4 border-bottom"},Gs={class:"col-12 col-sm-6"},Os={class:"d-flex justify-content-between py-4 border-bottom"},zs={class:"col-12 col-sm-6"},Ds={class:"d-flex justify-content-between py-4 border-bottom"},Ps={class:"col-12 col-sm-6"},Qs={class:"d-flex justify-content-between py-4 border-bottom"},qs={class:"col-12 col-sm-6"},Es={class:"d-flex justify-content-between py-4 border-bottom"},Us={class:"col-12 mb-16"},Zs={class:"step mx-auto"},Hs={class:"stepList list-unstyled position-relative m-0 p-0"},Js={class:"stepOrder px-8 py-4 bg-secondary rounded-circle text-white fw-bold"},Ks={class:"ms-17 ms-md-23 p-11 bg-white rounded-2 shadow-sm"},Ws={class:"col-12 mb-16"},Xs={class:"textLsSm text-muted"},Ys={class:"col-12 mb-17"},st={key:0,class:"row row-cols-1 row-cols-md-2 row-cols-xxl-3 gy-14 mb-11"},at={__name:"RecipeView",setup(tt){const z=X(),C=ls(),f=h(null),D=H(),P=J(),R=K(),$=ns(),{openLoading:Q,closeLoading:j}=D,{pushMessage:q}=P,{getTagsAndCategories:E}=$,{toggleCollect:w}=R,{myProfile:T}=B(R),{categories:v,tags:A}=B($),e=h({}),x=h([]);function U(){var r;(r=f.value)==null||r.hideModal(),C.push("/recipes")}async function Z(r){var t,d;Q("getRecipe");try{const u=await ts(r);e.value=u.data.data;const b=e.value.category;console.log("apiGetRecipe 單一食譜成功, category 是 ",b);const y=await Promise.all([es({category:b})]);x.value=y.data.data.results,console.log("apiGetRecipes 關聯食譜成功"),j("getRecipe")}catch(u){q({style:"danger",title:"載入失敗",text:((d=(t=u.response)==null?void 0:t.data)==null?void 0:d.message)||"食譜載入失敗，請重整網頁"}),j("err getRecipe",u),C.push("/recipes")}}return W(async()=>{var t;const{id:r}=z.params;if(!r){(t=f.value)==null||t.openModal();return}(!A.value.length||!v.value.length)&&(console.log("開啟 - getTagsAndCategories"),await E(),console.log("關閉 - getTagsAndCategories")),console.log("開啟 - getRecipe"),await Z(r)}),(r,t)=>{var u,b,y,F,I,M,N,S,L;const d=Y("router-link");return a(),n(g,null,[s("div",cs,[s("div",rs,[s("nav",ds,[s("ol",us,[s("li",ps,[m(d,{to:"/recipes"},{default:p(()=>t[2]||(t[2]=[c(" 所有食譜 ")])),_:1})]),s("li",ms,[m(d,{to:`/recipes?category=${e.value.category}`},{default:p(()=>[c(l(i(O)(i(v),e.value.category)),1)]),_:1},8,["to"])]),t[3]||(t[3]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"洋蔥炒牛肉",-1))])])]),s("div",bs,[s("div",{class:"recipeCover backgroundCover w-100 h-100 rounded-2",style:ss({backgroundImage:`url(${e.value.coverImgUrl})`}),alt:e.value.title},null,12,gs)]),s("div",vs,[s("div",ys,[(u=i(T).collects)!=null&&u.includes(e.value._id)?(a(),n("a",{key:0,href:"#",class:"collectBtn position-absolute top-0 end-0 p-14 text-secondary fs-4",onClick:t[0]||(t[0]=G(o=>i(w)({active:"remove",recipeId:e.value._id}),["prevent"]))},t[4]||(t[4]=[s("i",{class:"bi bi-heart-fill"},null,-1)]))):(a(),n("a",{key:1,href:"#",class:"collectBtn position-absolute top-0 end-0 p-14 text-secondary fs-4",onClick:t[1]||(t[1]=G(o=>i(w)({active:"create",recipeId:e.value._id}),["prevent"]))},t[5]||(t[5]=[s("i",{class:"bi bi-heart"},null,-1)]))),m(d,{to:`/recipes?category=${e.value.category}`,class:"d-block mb-4"},{default:p(()=>[c(l(i(O)(i(v),e.value.category)),1)]),_:1},8,["to"]),s("h1",_s,l(e.value.title),1),s("ul",fs,[s("li",ws,[t[6]||(t[6]=s("i",{class:"bi bi-person-fill me-4"},null,-1)),t[7]||(t[7]=c(" 作者： ")),m(d,{to:`/user/${(b=e.value.user)==null?void 0:b._id}`,class:"link-muted"},{default:p(()=>{var o;return[c(l((o=e.value.user)==null?void 0:o.nickName),1)]}),_:1},8,["to"])]),s("li",xs,[t[8]||(t[8]=s("i",{class:"bi bi-calendar3 me-4"},null,-1)),c(" 建立日期："+l(r.$getTime(e.value.createdAt)),1)]),s("li",ks,[t[9]||(t[9]=s("i",{class:"bi bi-calendar3 me-4"},null,-1)),c(" 更新日期："+l(r.$getTime(e.value.updatedAt)),1)]),s("li",hs,[t[10]||(t[10]=s("i",{class:"bi bi-bookmark-heart me-4"},null,-1)),c(" 收藏人數："+l(e.value.collectsCount),1)]),s("li",null,[t[11]||(t[11]=s("i",{class:"bi bi-clock-history me-4"},null,-1)),c(" 烹飪時長："+l(e.value.cookingTime),1)])]),s("p",Cs,l(e.value.description),1),(y=e.value.tags)!=null&&y.length?(a(),n("ul",Rs,[(a(!0),n(g,null,_(e.value.tags,o=>(a(),n("li",{key:o,class:"d-inline-block me-2"},[s("span",$s,l(i(os)(i(A),o)),1)]))),128))])):V("",!0)])]),s("div",js,[s("h2",Ts,[t[12]||(t[12]=s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})],-1)),t[13]||(t[13]=s("span",{class:"me-6"}," 食材 ",-1)),s("span",As,"("+l(e.value.servings)+" 人份)",1)]),s("ul",Fs,[(a(!0),n(g,null,_(e.value.ingredients,(o,k)=>(a(),n("li",{class:"col-12 col-sm-6",key:`ingredient${k}`},[s("p",Is,[s("span",null,l(o.ingredientName),1),s("span",null,l(o.ingredientQty),1)])]))),128))])]),s("div",Ms,[t[20]||(t[20]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 營養成分 ")],-1)),s("ul",Ns,[s("li",Ss,[s("p",Ls,[t[14]||(t[14]=s("span",null," 總熱量 ",-1)),s("span",null,l((F=e.value.nutritionFacts)==null?void 0:F.calories)+" 大卡",1)])]),s("li",Bs,[s("p",Vs,[t[15]||(t[15]=s("span",null," 蛋白質 ",-1)),s("span",null,l((I=e.value.nutritionFacts)==null?void 0:I.protein)+" 克",1)])]),s("li",Gs,[s("p",Os,[t[16]||(t[16]=s("span",null," 碳水化合物 ",-1)),s("span",null,l((M=e.value.nutritionFacts)==null?void 0:M.totalCarb)+" 克",1)])]),s("li",zs,[s("p",Ds,[t[17]||(t[17]=s("span",null," 總脂肪 ",-1)),s("span",null,l((N=e.value.nutritionFacts)==null?void 0:N.totalFat)+" 克",1)])]),s("li",Ps,[s("p",Qs,[t[18]||(t[18]=s("span",null," 醣類 ",-1)),s("span",null,l((S=e.value.nutritionFacts)==null?void 0:S.sugar)+" 克",1)])]),s("li",qs,[s("p",Es,[t[19]||(t[19]=s("span",null," 鹽 ",-1)),s("span",null,l((L=e.value.nutritionFacts)==null?void 0:L.sodium)+" 克",1)])])])]),s("div",Us,[t[21]||(t[21]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 步驟 ")],-1)),s("div",Zs,[s("ul",Hs,[(a(!0),n(g,null,_(e.value.steps,(o,k)=>(a(),n("li",{class:"stepItem position-relative",key:`step${k}`},[s("div",Js,l(o.stepOrder),1),s("div",Ks,l(o.stepContent),1)]))),128))])])]),s("div",Ws,[t[22]||(t[22]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 小撇步 ")],-1)),s("div",Xs,l(e.value.note||"無"),1)]),s("div",Ys,[t[23]||(t[23]=s("h2",{class:"title justify-content-start mb-11"},[s("span",{class:"titleIcon bg-secondary-subtle"},[s("i",{class:"bi bi-people-fill"})]),s("span",null," 更多料理選擇 ")],-1)),x.value.length?(a(),n("div",st,[(a(!0),n(g,null,_(x.value.slice(0,3),o=>(a(),n("div",{class:"col",key:o._id},[m(is,{recipe:o,categories:i(v),collects:i(T).collects,onToggleCollect:i(w)},null,8,["recipe","categories","collects","onToggleCollect"])]))),128))])):V("",!0)])]),m(as,{ref_key:"alertModalRef",ref:f},{"modal-header":p(()=>t[24]||(t[24]=[s("span",{class:"titleIcon bg-danger-subtle"},[s("i",{class:"bi bi-exclamation-triangle-fill"})],-1),c(" 找不到此食譜 ")])),"modal-content":p(()=>t[25]||(t[25]=[c(" 找不到此食譜，將為您導入食譜列表頁面 ")])),"modal-footer":p(()=>[s("button",{type:"button",class:"w-50 btn btn-primary",onClick:U},"關閉")]),_:1},512)],64)}}};export{at as default};
