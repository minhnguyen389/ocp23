"use strict";(self.webpackChunkweb_cms_qtmt=self.webpackChunkweb_cms_qtmt||[]).push([[592],{6254:(v,l,r)=>{r.d(l,{n:()=>m});var n=r(520),c=r(2340),d=r(5e3);let m=(()=>{class s{constructor(o){this.http=o}getList(o,a,t){let e=new n.LE;return e=e.append("limit",a),e=e.append("offset",t),o&&(e=e.append("company_id",o)),this.http.get(`${c.N.url.BASE_URL}/company`,{params:e})}getDetail(o){return this.http.get(`${c.N.url.BASE_URL}/company/${o}`)}create(o,a){let t=new n.LE;return t=t.append("name",o),a&&(t=t.append("description",a)),this.http.post(`${c.N.url.BASE_URL}/company`,t)}edit(o,a,t){let e=new n.LE;return a&&(e=e.append("name",a)),t&&(e=e.append("description",t)),this.http.put(`${c.N.url.BASE_URL}/company/${o}`,e)}config(o,a,t){let e=new n.LE;return a&&(e=e.append("sent_time",a)),t&&(e=e.append("data_log_time",t)),this.http.put(`${c.N.url.BASE_URL}/company/config/${o}`,e)}delete(o){return this.http.delete(`${c.N.url.BASE_URL}/company/${o}`)}}return s.\u0275fac=function(o){return new(o||s)(d.LFG(n.eN))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},9269:(v,l,r)=>{r.d(l,{I:()=>a});var n=r(5e3),c=r(5330),d=r(9808),m=r(845),s=r(5787);let u=(()=>{class t{constructor(i,p){this.ref=i,this.config=p,this.icon="pi pi-info-circle"}ngOnInit(){this.config.data&&(this.message=this.config.data.message,this.icon=this.config.data.icon)}accept(){this.ref.close(!0)}dismiss(){this.ref.destroy()}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(c.E7),n.Y36(c.S))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:8,vars:2,consts:[[1,"diag"],[1,"outbound"],[1,"content","flex","align-items-center","p-2"],[1,"mx-3",2,"font-size","2rem",3,"ngClass"],[1,"footer","flex","align-items-center","justify-content-end"],["pButton","","pRipple","","type","button","label","H\u1ee7y b\u1ecf","icon","pi pi-times",1,"p-button-outlined","mr-1",3,"click"],["pButton","","pRipple","","type","button","label","C\xf3","icon","pi pi-check",1,"mr-1",3,"click"]],template:function(i,p){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"i",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4)(6,"button",5),n.NdJ("click",function(){return p.dismiss()}),n.qZA(),n.TgZ(7,"button",6),n.NdJ("click",function(){return p.accept()}),n.qZA()()()()),2&i&&(n.xp6(3),n.Q6J("ngClass",p.icon),n.xp6(1),n.hij(" ",p.message," "))},directives:[d.mk,m.Hq,s.H],styles:["@media screen and (max-width: 639.99px){.diag[_ngcontent-%COMP%]{width:99vw}}@media screen and (min-width: 640px) and (max-width: 959.99px){.diag[_ngcontent-%COMP%]{width:75vw}}@media screen and (min-width: 960px) and (max-width: 1365.99px){.diag[_ngcontent-%COMP%]{width:55vw}}@media screen and (min-width: 1366px){.diag[_ngcontent-%COMP%]{width:45vw}}.outbound[_ngcontent-%COMP%]{position:absolute;top:55px;bottom:0;left:0;right:0;overflow:hidden}.outbound[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;top:0;bottom:45px;left:0;width:100%;overflow:auto}.outbound[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:absolute;bottom:0;height:45px;left:0;width:100%}"]}),t})(),a=(()=>{class t{constructor(i){this.dialogService=i}confirm(i){return new Promise((p,f)=>{const g=this.dialogService.open(u,{header:i.header,data:{message:i.message,icon:i.icon},height:"200px",contentStyle:{padding:"0",margin:0}});g.onClose.subscribe(h=>{h&&p(h)}),g.onDestroy.subscribe(()=>f(!1))})}}return t.\u0275fac=function(i){return new(i||t)(n.LFG(c.xA))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);