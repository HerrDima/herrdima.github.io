"use strict";(self.webpackChunkmin_svenska=self.webpackChunkmin_svenska||[]).push([[357],{3145:(e,t,i)=>{i.d(t,{x:()=>l});var a=i(5893);function n(e){if("number"==typeof e)return[e,e,e,e];if(!Array.isArray(e))return[0,0,0,0];switch(e.length){case 0:return[0,0,0,0];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return[e[0],e[1],e[2],e[3]];default:return console.error("makeCssArray: too big array"),[e[0],e[1],e[2],e[3]]}}function l(e){const{tagName:t="div",children:i,margin:l,padding:r,width:s,height:o,boxSizing:d,backgroundColor:c,display:u}=e,[m,h,f,p,x,j,g,b]=[...n(l),...n(r)].map((e=>`${e}px`)),L={backgroundColor:c,boxSizing:d,display:u,height:o,marginBottom:f,marginLeft:p,marginRight:h,marginTop:m,paddingBottom:g,paddingLeft:b,paddingRight:j,paddingTop:x,width:s};return(0,a.jsx)(t,{style:L,children:i})}},1238:(e,t,i)=>{var a;i.d(t,{$t:()=>s,VJ:()=>n,WY:()=>o,dW:()=>a,hd:()=>l,uN:()=>r}),function(e){e.create="create",e.edit="edit"}(a||(a={}));const n=["id","slug","subDocumentIdList","title"],l="0000-00-00T00:00:00.000Z",r="image/png, image/jpeg, image/gif, image/webp",s=16e6,o=75e6},5071:(e,t,i)=>{i.d(t,{D6:()=>g,cT:()=>f,j9:()=>j,kA:()=>L,o3:()=>p,sB:()=>x,v8:()=>b});var a=i(9745),n=i(2703),l=i(8304),r=i(5220),s=i(6451),o=i(3890),d=i(5592),c=i(7644),u=i(1595),m=i(881),h=i(1238);async function f(e,t){const i=new FormData;if(e.size>=t)throw new Error(`Too big file, limit ${t/1e6}MB`);i.append("file",e);const a=await(0,s.w)(r.JW.adminFileUpload,(0,c.Dn)(),{body:i,credentials:"include",method:s.T.post}),n=(0,m.a)(a.name);switch(a.type){case d.iw.image:{const{naturalHeight:e,naturalWidth:t}=await function(e){const t=new Image;return new Promise(((i,a)=>{t.addEventListener("load",(()=>i(t)),!1),t.addEventListener("error",a,!1),t.src=e}))}(n);return{...a,height:e,width:t}}case d.iw.audio:{const{duration:e}=await function(e){const t=new Audio;return new Promise(((i,a)=>{t.addEventListener("loadedmetadata",(()=>i(t)),!1),t.addEventListener("error",a,!1),t.preload="metadata",t.src=e}))}(n);return{...a,duration:e}}case d.iw.video:{const{duration:e,videoWidth:t,videoHeight:i}=await function(e){const t=document.createElement("video");return new Promise(((i,a)=>{t.addEventListener("loadedmetadata",(()=>i(t)),!1),t.addEventListener("error",a,!1),t.preload="metadata",t.src=e}))}(n);return{...a,duration:e,height:i,width:t}}case d.iw.unknown:return a;default:throw new u.sF(a.type)}return a}function p(e){const{id:t,mode:i,savedArticleList:a}=e;return[{message:"Required!",required:!0},{message:"Please-enter-slug-properly.",validator:async(e,t)=>{if((0,n.Iu)(t)!==t)throw new Error("Slug is not formatted.")}},{message:"Please enter another slug. This slug already exists.",validator:async(e,n)=>{const l=a.filter((e=>e.slug===n)),r=l.length;if(0===r)return;if(r>=2)throw new Error("There are should be only one no non articles");const s=r>0;if(i===h.dW.create&&s)throw new Error("Use unique slug.");const[o]=l;if(i===h.dW.edit&&o.slug===n&&o.id!==t)throw new Error("Article with your slug already exists")}}]}function x(){return[{message:"Invalid HTML.",validator:async(e,t)=>{if("undefined"==typeof document)return;const i=document.createElement("div");if(i.innerHTML=t,i.innerHTML.trim()!==t.trim())throw new Error("HTML is not valid")}}]}function j(e){return(0,a.Gn)(l.$.articleEdit.path,{articleId:e})}function g(e){const t=function(e){return e.includes(".")?(e.split(".").pop()||"").toLowerCase():""}(e);return["jpg","jpeg","jfif","gif","png","webp"].includes(t)}function b(e,t){return 0===t.length?[]:e.filter((e=>!t.some((t=>t.id===e))))}function L(e){return(0,o.jX)(e).then((()=>location.reload())).catch(console.error)}},2835:(e,t,i)=>{i.d(t,{d:()=>ne});var a=i(5893),n=i(7294),l=i(2124),r=i(4113),s=i(2787),o=i(8704),d=i(4604),c=i(1817),u=i(4897),m=i(5460),h=i(9676),f=i(1577),p=i(8917),x=i(9655),j=i(1870),g=i(1242),b=i(7484),L=i.n(b),y=i(178),I=i.n(y),v=i(5592),w=i(7644),Z=i(2703),T=i(6464),S=i(3890),k=i(1230),N=i(5746),A=i(3145),D=i(1281);const C={markdown_input_wrapper:"d6389f"};function V(e){const{mdInput:t,children:i}=e;return(0,a.jsxs)(k.Z,{className:C.markdown_input_wrapper,gutter:[16,0],children:[(0,a.jsx)(N.Z,{span:12,children:i}),(0,a.jsx)(N.Z,{span:12,children:(0,a.jsx)(A.x,{backgroundColor:"#fff",height:"calc(100% - 54px)",margin:[32,0,16],padding:[8],children:(0,a.jsx)(D.U,{articleTitle:"",mdInput:t})})})]})}var $=i(1445),M=i(4557),R=i(9438),E=i(4625),F=i(7890),P=i(4188),U=i(5071),O=i(9101),W=i(881);const{Option:H}=r.default,{Text:B}=l.default;function z(e){const{name:t}=e;return{name:t,status:"done",uid:t,url:(0,U.D6)(t)?(0,W.s)(t,{height:96,width:96}):(0,W.a)(t)}}function K(e){const{title:t,id:i}=e;return(0,a.jsx)(H,{title:t,value:i,children:t},i)}function _(e,t){const{id:i}=e;return t.filter((e=>e.subDocumentIdList.includes(i)))}function q(e,t){const i=_(e,t).map(((e,t)=>{const{id:i,title:n,slug:l}=e;return(0,a.jsxs)(B,{children:[t>0?", ":null,(0,a.jsx)(x.Link,{to:(0,R._)(l),children:n})," | ",(0,a.jsx)(x.Link,{to:(0,U.j9)(i),children:l})]},i)}));return i.length>0?i:[(0,a.jsx)(B,{children:"no parents"},"no-parents")]}function J(){return(0,a.jsx)(f.ZP,{icon:(0,a.jsx)(O.Z,{}),children:"Upload"})}var X=i(1238),Q=i(4006);const{Title:G}=l.default;function Y(e){const{setFileTitle:t,fileInfo:i,originNode:n,file:l}=e;return i?(0,a.jsxs)(A.x,{height:112,children:[n,(0,a.jsxs)(k.Z,{gutter:8,children:[(0,a.jsx)(N.Z,{span:12,children:(0,a.jsx)(s.default,{defaultValue:i.title,onInput:e=>{t(e.currentTarget.value.trim())},placeholder:"Title"})}),(0,a.jsx)(N.Z,{span:12,children:(0,a.jsx)(s.default,{readOnly:!0,value:(0,Q.B)(i,{alt:"",poster:""})})})]})]}):(0,a.jsxs)(G,{level:4,type:"danger",children:["Can not found file by name: ",l.name]})}L().extend(I());const{Text:ee,Title:te}=l.default,{Option:ie}=r.default,{TextArea:ae}=s.default;function ne(e){const{article:t,onFinish:i,mode:l}=e,{articleType:b,content:y,createdDate:I,description:k,descriptionShort:N,fileList:D,hasMetaRobotsNoFollowSeo:C,hasMetaRobotsNoIndexSeo:O,id:W,isActive:H,isInSiteMapXmlSeo:B,metaDescriptionSeo:Q,metaKeyWordsSeo:G,metaSeo:ne,publishDate:le,slug:re,staffArtistList:se,staffAuthorList:oe,staffCompositorList:de,staffDirectorList:ce,staffIllustratorList:ue,staffReaderList:me,subDocumentIdList:he,subDocumentListViewType:fe,tagList:pe,tagTitleSeo:xe,title:je,titleImage:ge,updatedDate:be}=t,[Le]=o.Z.useForm(),[ye,Ie]=(0,n.useState)([...D]),[ve,we]=(0,n.useState)(ge),[Ze,Te]=(0,n.useState)(le||(new Date).toISOString()),[Se,ke]=(0,n.useState)((0,Z.Iu)(je)),[Ne,Ae]=(0,n.useState)(t),[De,Ce]=(0,n.useState)(!1);(0,E.K)([E.A.ctrl],"s",Le.submit);const{execute:Ve}=(0,T.Od)(S.Qy),[$e,Me]=(0,n.useState)([]);(0,n.useEffect)((()=>{Ve({},{pageIndex:0,pageSize:0,sort:{title:1}},X.VJ).then((e=>Me(e.list))).catch((e=>{d.ZP.error("Can not fetch article list.")}))}),[Ve]);const Re=(0,U.v8)(he,$e),Ee=_(t,$e).length>0||W===M.Z;return(0,a.jsxs)(o.Z,{autoComplete:"off",form:Le,initialValues:{remember:!0},layout:"vertical",name:"article",onFieldsChange:function(e,t){},onFinish:function(e){const t={...e,fileList:ye,publishDate:Ze,staffArtistList:(0,Z.yk)(e.staffArtistList),staffAuthorList:(0,Z.yk)(e.staffAuthorList),staffCompositorList:(0,Z.yk)(e.staffCompositorList),staffDirectorList:(0,Z.yk)(e.staffDirectorList),staffIllustratorList:(0,Z.yk)(e.staffIllustratorList),staffReaderList:(0,Z.yk)(e.staffReaderList),tagList:(0,Z.yk)(e.tagList),title:(0,Z.p9)(e.title),titleImage:ve},[a,n]=(0,w.NA)(t);console.info("validateFunction.errors"),console.info(n.errors),a?i(t):d.ZP.error(JSON.stringify(n.errors))},onFinishFailed:function(e){d.ZP.error(JSON.stringify(e.errorFields))},onValuesChange:function(e,t){ke((0,Z.Iu)(t.title)),Ae(t)},scrollToFirstError:!0,children:[(0,a.jsx)(P.$,{isShow:De,position:"fixed"}),(0,a.jsx)($.K,{isRender:Re.length>0,children:(0,a.jsxs)(te,{level:4,type:"danger",children:["Document has missing children, children Id: ",Re.join(", ")]})}),(0,a.jsx)(A.x,{padding:[8,0],children:(0,a.jsxs)(ee,{children:["Article: ",(0,a.jsx)(x.Link,{to:(0,R._)(re),children:je})," | ",(0,a.jsx)(x.Link,{to:(0,U.j9)(W),children:re})]})}),(0,a.jsx)(A.x,{padding:[8,0,16],children:(0,a.jsxs)(ee,{children:["Parents: ",q(t,$e)]})}),(0,a.jsx)(o.Z.Item,{hidden:!0,initialValue:W,label:`Article id: ${W}`,name:"id",children:(0,a.jsx)(s.default,{disabled:!0})}),(0,a.jsx)(o.Z.Item,{label:`Title image (to 16MB): ${ve.name}`,children:(0,a.jsx)(c.Z,{accept:X.uN,action:async e=>{try{Ce(!0);const t=await(0,U.cT)(e,X.$t);we(t)}catch(e){const t=e instanceof Error?e.message:"Too big file";d.ZP.error(t)}finally{Ce(!1)}return"https://dev.null/dev/null"},fileList:ve.size>0?[ve].map(z):[],itemRender:(e,t)=>Y({file:t,fileInfo:ve,originNode:e,setFileTitle:e=>{we({...ve,title:e})}}),listType:"picture",maxCount:1,onChange:function(e){const{file:t}=e;"removed"===t.status&&we((0,F.Q)())},children:ve.size>0?null:(0,a.jsx)(J,{})})}),(0,a.jsx)(o.Z.Item,{initialValue:je,label:"Title:",name:"title",rules:[{message:"Required!",required:!0}],children:(0,a.jsx)(s.default,{placeholder:"Title"})}),(0,a.jsx)(o.Z.Item,{initialValue:re,label:`Slug, avoid spec symbols, slug from title: ${Se}`,name:"slug",normalize:Z.Iu,rules:(0,U.o3)({id:W,mode:l,savedArticleList:$e}),children:(0,a.jsx)(s.default,{disabled:0===$e.length,placeholder:"slug-is-here"})}),(0,a.jsx)(o.Z.Item,{initialValue:b,label:"Article type:",name:"articleType",children:(0,a.jsxs)(r.default,{children:[(0,a.jsx)(ie,{value:v.UL.article,children:"Article"}),(0,a.jsx)(ie,{value:v.UL.container,children:"Container"}),(0,a.jsx)(ie,{value:v.UL.audioList,children:"Audio List"}),(0,a.jsx)(ie,{value:v.UL.audioSingle,children:"Audio Single"}),(0,a.jsx)(ie,{value:v.UL.audioChildrenList,children:"Audio Children List"})]})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(pe),label:`Tag List, use comma "," to divide: ${(0,Z.pi)(Ne.tagList)}`,name:"tagList",children:(0,a.jsx)(s.default,{placeholder:"Tag1, Tag2, Tag3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:fe,label:"Sub Document List View Type:",name:"subDocumentListViewType",children:(0,a.jsxs)(r.default,{children:[(0,a.jsx)(ie,{value:v.lm.header,children:"Header"}),(0,a.jsx)(ie,{value:v.lm.headerImage,children:"Header-Image"})]})}),(0,a.jsx)(o.Z.Item,{initialValue:he,label:"Sub Document List:",name:"subDocumentIdList",children:(0,a.jsx)(r.default,{disabled:0===$e.length,filterOption:!0,loading:0===$e.length,mode:"multiple",optionFilterProp:"title",placeholder:"Sub Document Id...",children:$e.map(K)})}),(0,a.jsx)(V,{mdInput:Ne.content,children:(0,a.jsx)(o.Z.Item,{initialValue:y,label:"Content, use markdown:",name:"content",children:(0,a.jsx)(ae,{placeholder:"# Markdown...",rows:10})})}),(0,a.jsx)(V,{mdInput:Ne.description,children:(0,a.jsx)(o.Z.Item,{initialValue:k,label:"Description, use markdown:",name:"description",children:(0,a.jsx)(ae,{placeholder:"Some description is here...",rows:3})})}),(0,a.jsx)(o.Z.Item,{initialValue:N,label:"Short description, plain text only, used for Open Graph:",name:"descriptionShort",children:(0,a.jsx)(ae,{placeholder:"Some short description is here...",rows:3})}),(0,a.jsx)(o.Z.Item,{label:`Files (image to 16MB, other to 75MB): ${ye.length}`,children:(0,a.jsx)(c.Z,{action:async e=>{try{Ce(!0);const t=(0,U.D6)(e.name)?X.$t:X.WY,i=await(0,U.cT)(e,t);Ie((e=>[...e,i]))}catch(e){const t=e instanceof Error?e.message:"Too big file";d.ZP.error(t)}finally{Ce(!1)}return"https://dev.null/dev/null"},fileList:ye.map(z),itemRender:(e,t)=>{const i=ye.find((e=>e.name===t.name));return Y({file:t,fileInfo:i,originNode:e,setFileTitle:e=>{i&&(i.title=e,Ie([...ye]))}})},listType:"picture",onChange:function(e){const{file:t}=e;"removed"===t.status&&Ie((e=>e.filter((e=>e.name!==t.name))))},children:(0,a.jsx)(J,{})})}),(0,a.jsx)(o.Z.Item,{initialValue:L().utc(Ze),label:"Publish date UTC-0:",name:"publishDate",children:(0,a.jsx)(u.Z,{onOk:e=>Te(e.toISOString()),showTime:!0})}),(0,a.jsx)(o.Z.Item,{initialValue:I||X.hd,label:"Created date UTC-0:",name:"createdDate",children:(0,a.jsx)(s.default,{disabled:!0})}),(0,a.jsx)(o.Z.Item,{initialValue:be||X.hd,label:"Updated date UTC-0:",name:"updatedDate",children:(0,a.jsx)(s.default,{disabled:!0})}),(0,a.jsx)(m.Z,{orientation:"center",children:"SEO"}),(0,a.jsx)(o.Z.Item,{initialValue:xe,label:"Meta Title, tag <title>...</title>:",name:"tagTitleSeo",children:(0,a.jsx)(s.default,{placeholder:"Title..."})}),(0,a.jsx)(o.Z.Item,{initialValue:C,label:"Has Meta Robots No Follow:",name:"hasMetaRobotsNoFollowSeo",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:'Add/combine <meta name="robots" content="nofollow" />'})}),(0,a.jsx)(o.Z.Item,{initialValue:O,label:"Has Meta Robots No Index:",name:"hasMetaRobotsNoIndexSeo",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:'Add/combine <meta name="robots" content="noindex"/> and add X-Robots-Tag: noindex'})}),(0,a.jsx)(o.Z.Item,{initialValue:H,label:"Is Active:",name:"isActive",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:'Uncheck to temporary "remove" (also remove from sitemap.xml)'})}),(0,a.jsx)(o.Z.Item,{initialValue:B,label:"Is In Site Map Xml:",name:"isInSiteMapXmlSeo",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:"Does sitemap.xml has link to article or not"})}),(0,a.jsx)(o.Z.Item,{initialValue:Q,label:'Meta Description, tag <meta name="description" content="..." />:',name:"metaDescriptionSeo",children:(0,a.jsx)(s.default,{placeholder:"Description..."})}),(0,a.jsx)(o.Z.Item,{initialValue:G,label:'Meta KeyWords, tag <meta name="keywords" content="..." />:',name:"metaKeyWordsSeo",children:(0,a.jsx)(s.default,{placeholder:"KeyWords..."})}),(0,a.jsx)(o.Z.Item,{initialValue:ne,label:"Meta, actually any valid html code:",name:"metaSeo",rules:(0,U.sB)(),children:(0,a.jsx)(ae,{placeholder:"Additional meta tags...",rows:3})}),(0,a.jsx)(m.Z,{orientation:"center",children:"Staff"}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(se),label:`Staff Artists, use comma "," to divide: ${(0,Z.pi)(Ne.staffArtistList)}`,name:"staffArtistList",children:(0,a.jsx)(s.default,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(oe),label:`Staff Authors, use comma "," to divide: ${(0,Z.pi)(Ne.staffAuthorList)}`,name:"staffAuthorList",children:(0,a.jsx)(s.default,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(de),label:`Staff Compositors, use comma "," to divide: ${(0,Z.pi)(Ne.staffCompositorList)}`,name:"staffCompositorList",children:(0,a.jsx)(s.default,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(ce),label:`Staff Directors, use comma "," to divide: ${(0,Z.pi)(Ne.staffDirectorList)}`,name:"staffDirectorList",children:(0,a.jsx)(s.default,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(ue),label:`Staff Illustrators, use comma "," to divide: ${(0,Z.pi)(Ne.staffIllustratorList)}`,name:"staffIllustratorList",children:(0,a.jsx)(s.default,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,Z.sj)(me),label:`Staff Readers, use comma "," to divide: ${(0,Z.pi)(Ne.staffReaderList)}`,name:"staffReaderList",children:(0,a.jsx)(s.default,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsxs)(o.Z.Item,{children:[(0,a.jsx)(f.ZP,{htmlType:"submit",type:"primary",children:"Submit (ctrl+S)"}),(0,a.jsxs)($.K,{isRender:l===X.dW.edit,children:[" ",(0,a.jsx)(p.Z,{cancelText:"No",disabled:Ee,icon:(0,a.jsx)(j.Z,{style:{color:g.Q6.primary}}),okText:"Delete",onConfirm:()=>(0,U.kA)(W),title:"Are you sure to delete the article？",children:(0,a.jsx)(f.ZP,{disabled:Ee,htmlType:"button",type:"default",children:Ee?"Can NOT delete, article has parent":"Delete"})})]})]})]})}},6333:(e,t,i)=>{i.d(t,{Q:()=>u});var a=i(5893),n=i(7183),l=i(8427),r=i(9250),s=i(9655),o=(i(8257),i(3145)),d=i(8304);const{Content:c}=n.default;function u(e){const{children:t}=e,i=(0,r.TH)();return(0,a.jsxs)(n.default,{children:[(0,a.jsx)(o.x,{padding:16,children:(0,a.jsx)(l.Z,{defaultSelectedKeys:[i.pathname],items:[{key:d.$.articleList.path,label:(0,a.jsx)(s.Link,{to:d.$.articleList.path,children:"List"})},{key:d.$.articleCreate.path,label:(0,a.jsx)(s.Link,{to:d.$.articleCreate.path,children:"Create"})},{key:d.$.articleTree.path,label:(0,a.jsx)(s.Link,{to:d.$.articleTree.path,children:"Tree"})}],mode:"horizontal"})}),(0,a.jsx)(o.x,{padding:16,children:(0,a.jsx)(c,{children:t})})]})}}}]);
//# sourceMappingURL=357.9b0087.chunk.js.map