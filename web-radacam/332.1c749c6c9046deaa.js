(self.webpackChunkweb_radacam=self.webpackChunkweb_radacam||[]).push([[332],{6675:(j,M,f)=>{"use strict";f.d(M,{I:()=>l});var I=f(1764),D=f.n(I),t=f(5268),Z=f.n(t);D().extend(Z());class l{static isoToVnTime(C){return C&&0!==C.length?D().utc(C).local().format("HH:mm:ss DD/MM/YYYY"):"N/A"}}},1332:(j,M,f)=>{"use strict";f.r(M),f.d(M,{UserModule:()=>Et});var I=f(9808),D=f(8753),t=f(5e3),Z=f(6675),l=f(2382),b=f(8215),$=f(5330),C=f(6254),P=f(9783),x=f(845),A=f(5787),u=f(8952),U=f(4132),H=f(97);const G=["divBound"],S=["divTable"],W=["divPaginator"];function q(n,c){1&n&&(t.TgZ(0,"tr")(1,"th",23),t._uU(2,"#"),t.qZA(),t._UZ(3,"th",23),t.TgZ(4,"th",24),t._uU(5,"T\xean "),t._UZ(6,"p-sortIcon",25),t.qZA(),t.TgZ(7,"th",24),t._uU(8,"M\xf4 t\u1ea3"),t.qZA()())}const O=function(n){return{"background-color":n}};function B(n,c){if(1&n&&(t.TgZ(0,"tr",26)(1,"td",23),t._uU(2),t.qZA(),t.TgZ(3,"td",23),t._UZ(4,"p-tableRadioButton",27),t.qZA(),t.TgZ(5,"td",24),t._uU(6),t.qZA(),t.TgZ(7,"td",24),t._uU(8),t.qZA()()),2&n){const e=c.$implicit,i=c.rowIndex,a=t.oxw();t.Q6J("ngStyle",t.VKq(6,O,a.isIn(e))),t.xp6(2),t.Oqu((a.currentPage-1)*a.itemsPerPage+1+i),t.xp6(2),t.Q6J("value",e)("disabled",a.isDisabled(e)),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description)}}function L(n,c){1&n&&(t._UZ(0,"i",30),t.TgZ(1,"span",31),t._uU(2,"B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o m\u1ee5c n\xe0y!"),t.qZA())}function v(n,c){1&n&&(t.TgZ(0,"p-messages",28),t.YNc(1,L,3,0,"ng-template",29),t.qZA())}const _=function(){return[15,20,30,50]};let V=(()=>{class n{constructor(e,i,a,k,tt,et){this.ref=e,this.config=i,this.cHttpService=a,this.messageService=k,this.renderer=tt,this.router=et,this.title="Ch\u1ecdn C\xf4ng ty",this.companies=[],this.selectedCompanies=[],this.offset=0,this.totalItems=0,this.itemsPerPage=15,this.currentPage=1,this.loading=!1}ngOnDestroy(){this.loadingTime&&clearTimeout(this.loadingTime)}ngAfterViewInit(){this.renderer.setStyle(this.divTable.nativeElement,"height",`  ${this.divBound.nativeElement.offsetHeight-this.divPaginator.nativeElement.offsetHeight-40}px`)}onWindowResize(){this.renderer.setStyle(this.divTable.nativeElement,"height",`  ${this.divBound.nativeElement.offsetHeight-this.divPaginator.nativeElement.offsetHeight-40}px`)}ngOnInit(){this.config.data&&(this.companyIn=this.config.data.company,this.fetchListOfCompanies())}fetchListOfCompanies(){this.loadingTime=setTimeout(()=>{this.loading=!0},1e3),this.cHttpService.getList(void 0,this.itemsPerPage,this.offset).subscribe({next:e=>{200===e.status?(this.companies=e.metadata.docs,this.totalItems=e.metadata.total,this.loading=!1,this.loadingTime&&clearTimeout(this.loadingTime),this.loadStatus()):2===e.status?this.onComeback():(this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:`${e.message}`}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e.message),this.loading=!1,this.loadingTime&&clearTimeout(this.loadingTime))},error:e=>{this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:"C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i"}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e),this.loading=!1,this.loadingTime&&clearTimeout(this.loadingTime)}})}loadStatus(){this.companies.forEach(e=>{e.is_used=!1,this.companyIn&&this.companyIn._id==e._id&&(e.is_used=!0)})}onPageChange(e){this.currentPage=e.page+1,this.itemsPerPage=e.rows,this.offset=(this.currentPage-1)*this.itemsPerPage,this.fetchListOfCompanies()}onReSync(){this.fetchListOfCompanies()}onSubmit(){this.ref.close(this.selectedCompanies)}onDestroy(){this.ref.destroy()}isRowSelectable(e){return!e.data.is_used}isDisabled(e){return!!e.is_used}isIn(e){return e.is_used?"#cae6fc":null}onComeback(){localStorage.removeItem(b.o.USER),sessionStorage.removeItem(b.o.ACC),this.router.navigate(["/come-back"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36($.E7),t.Y36($.S),t.Y36(C.n),t.Y36(P.ez),t.Y36(t.Qsj),t.Y36(D.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pick-company"]],viewQuery:function(e,i){if(1&e&&(t.Gf(G,5,t.SBq),t.Gf(S,5,t.SBq),t.Gf(W,5,t.SBq)),2&e){let a;t.iGM(a=t.CRH())&&(i.divBound=a.first),t.iGM(a=t.CRH())&&(i.divTable=a.first),t.iGM(a=t.CRH())&&(i.divPaginator=a.first)}},decls:26,vars:17,consts:[[1,"absolute","top-0","left-0","bottom-0","right-0",3,"resize"],["divBound",""],[1,"absolute","top-0","left-0","w-full"],[1,"flex","align-items-center","justify-content-between","border-bottom-1","border-gray-300"],[1,"ml-2","text-xl","font-bold"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-danger","p-button-text",3,"click"],[1,"page-content"],["divTable",""],["styleClass","p-datatable-sm p-datatable-striped","dataKey","_id","scrollHeight","flex",3,"value","selection","selectionPageOnly","rowSelectable","scrollable","loading","selectionChange"],["pTemplate","header"],["pTemplate","body"],[1,"absolute","bottom-0","left-0","w-full","p-1","border-top-1","border-gray-300"],["divPaginator",""],[1,"grid","grid-nogutter"],[1,"col-12","md:col-5","flex","align-items-center"],["pButton","","pRipple","","type","button","label","Ch\u1ecdn","icon","fa-solid fa-check",1,"mr-1",3,"disabled","click"],["pButton","","pRipple","","type","button","label","H\u1ee7y b\u1ecf","icon","fa-solid fa-times",1,"p-button-outlined","mr-1",3,"click"],[1,"col-12","md:col-5","flex","align-items-center","justify-content-end"],["styleClass","p-0",3,"rows","totalRecords","rowsPerPageOptions","showJumpToPageDropdown","showPageLinks","onPageChange"],[1,"col-12","md:col-2","flex","align-items-center"],["pButton","","pRipple","","type","button","icon","fa-solid fa-sync",1,"p-button-raised","p-button-text",3,"click"],[1,"ml-1"],["noPermission",""],[2,"width","60px","max-width","60px"],[2,"min-width","300px"],["field","name"],[3,"ngStyle"],[3,"value","disabled"],["severity","error"],["pTemplate",""],[1,"pi","pi-times-circle"],[1,"ml-2"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0,1),t.NdJ("resize",function(){return i.onWindowResize()},!1,t.Jf7),t.TgZ(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.onDestroy()}),t.qZA()(),t.TgZ(7,"div",6,7)(9,"p-table",8),t.NdJ("selectionChange",function(k){return i.selectedCompanies=k}),t.YNc(10,q,9,0,"ng-template",9),t.YNc(11,B,9,8,"ng-template",10),t.qZA()()(),t.TgZ(12,"div",11,12)(14,"div",13)(15,"div",14)(16,"button",15),t.NdJ("click",function(){return i.onSubmit()}),t.qZA(),t.TgZ(17,"button",16),t.NdJ("click",function(){return i.onDestroy()}),t.qZA()(),t.TgZ(18,"div",17)(19,"p-paginator",18),t.NdJ("onPageChange",function(k){return i.onPageChange(k)}),t.qZA()(),t.TgZ(20,"div",19)(21,"button",20),t.NdJ("click",function(){return i.onReSync()}),t.qZA(),t.TgZ(22,"span",21),t._uU(23),t.qZA()()()()(),t.YNc(24,v,2,0,"ng-template",null,22,t.W1O)),2&e&&(t.xp6(5),t.Oqu(i.title),t.xp6(4),t.Q6J("value",i.companies)("selection",i.selectedCompanies)("selectionPageOnly",!0)("rowSelectable",i.isRowSelectable)("scrollable",!0)("loading",i.loading),t.xp6(7),t.Q6J("disabled",!i.selectedCompanies||0==i.selectedCompanies.length),t.xp6(3),t.Q6J("rows",i.itemsPerPage)("totalRecords",i.totalItems)("rowsPerPageOptions",t.DdM(16,_))("showJumpToPageDropdown",!0)("showPageLinks",!1),t.xp6(4),t.lnq("Displaying ",(i.currentPage-1)*i.itemsPerPage+1,"-",(i.currentPage-1)*i.itemsPerPage+i.itemsPerPage>i.totalItems?i.totalItems:(i.currentPage-1)*i.itemsPerPage+i.itemsPerPage," of ",i.totalItems,""))},directives:[x.Hq,A.H,u.iA,P.jx,u.fz,I.PC,u.GE,U.D,H.V],styles:[""]}),n})();var K=f(564),d=f(8386),r=f(1424),s=f(4036);function m(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *C\u1ea7n \u0111i\u1ec1n t\xean \u0111\u0103ng nh\u1eadp."),t.qZA())}function o(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *T\xean \u0111\u0103ng nh\u1eadp d\xe0i \xedt nh\u1ea5t 4 k\xfd t\u1ef1."),t.qZA())}function h(n,c){if(1&n&&(t.TgZ(0,"small",21),t.YNc(1,m,2,0,"div",22),t.YNc(2,o,2,0,"div",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.username.invalid),t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.username.errors.minlength)}}function p(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *C\u1ea7n nh\u1eadp m\u1eadt kh\u1ea9u."),t.qZA())}function g(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *M\u1eadt kh\u1ea9u d\xe0i \xedt nh\u1ea5t 6 k\xfd t\u1ef1."),t.qZA())}function T(n,c){if(1&n&&(t.TgZ(0,"small",21),t.YNc(1,p,2,0,"div",22),t.YNc(2,g,2,0,"div",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.password.invalid),t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.password.errors.minlength)}}function y(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *C\u1ea7n nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u."),t.qZA())}function E(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *M\u1eadt kh\u1ea9u d\xe0i \xedt nh\u1ea5t 6 k\xfd t\u1ef1."),t.qZA())}function N(n,c){if(1&n&&(t.TgZ(0,"small",21),t.YNc(1,y,2,0,"div",22),t.YNc(2,E,2,0,"div",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.retype_password.invalid),t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.retype_password.errors.minlength)}}function Y(n,c){1&n&&(t.TgZ(0,"small",21)(1,"div"),t._uU(2,"C\xe1c m\u1eadt kh\u1ea9u \u0111\xe3 nh\u1eadp kh\xf4ng kh\u1edbp. H\xe3y th\u1eed l\u1ea1i."),t.qZA()())}function R(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," *C\u1ea7n ch\u1ecdn nh\xf3m ng\u01b0\u1eddi d\xf9ng."),t.qZA())}function Q(n,c){if(1&n&&(t.TgZ(0,"small",21),t.YNc(1,R,2,0,"div",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.user_group.invalid)}}function F(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"label"),t._uU(2,"C\xf4ng ty "),t.TgZ(3,"span",9),t._uU(4,"(*)"),t.qZA()(),t.TgZ(5,"div",23),t._UZ(6,"input",24),t.TgZ(7,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().onPickCompany()}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("value",null!=e.formGroup.controls.company.value&&e.formGroup.controls.company.value.name?e.formGroup.controls.company.value.name:"Ch\u1ecdn c\xf4ng ty")}}let w=(()=>{class n{constructor(e,i,a,k,tt,et,nt,it){this.ref=e,this.config=i,this.formBuilder=a,this.userHttpService=k,this.messageService=tt,this.dialogService=et,this.userService=nt,this.router=it,this.title="Th\xeam m\u1edbi Ng\u01b0\u1eddi d\xf9ng",this.userGroupOption=[{name:"Qu\u1ea3n tr\u1ecb \u0111\u01a1n v\u1ecb",value:1,inactive:!1},{name:"CB v\u1eadn h\xe0nh",value:2,inactive:!1}],this.password_invalid=!1}ngOnInit(){this.myAccount=this.userService.getMyAccount(),this.formGroup=this.formBuilder.group({username:["",[l.kI.required,l.kI.minLength(4)]],password:["",[l.kI.required,l.kI.minLength(6)]],retype_password:["",[l.kI.required,l.kI.minLength(6)]],user_group:["",[l.kI.required]],company:["",[l.kI.required]]}),1==this.myAccount.user_group&&(this.formGroup.controls.company.disable(),this.userGroupOption[0].inactive=!0),this.config.data&&(this.user=this.config.data.user,this.title=this.config.data.title,this.formGroup.setValue({username:this.user.username,password:"",retype_password:"",user_group:this.user.user_group?this.user.user_group:"",company:this.user.company_id?this.user.company_id:""}),this.formGroup.controls.username.disable(),this.formGroup.controls.password.clearValidators(),this.formGroup.controls.retype_password.clearValidators())}onPickCompany(){this.dialogService.open(V,{data:{company:void 0},showHeader:!1,width:"99vw",height:"99vh",contentStyle:{padding:"0",margin:0}}).onClose.subscribe(i=>{i&&this.formGroup.controls.company.setValue(i)})}onClearMsg(){this.password_invalid&&(this.password_invalid=!1)}onSubmit(){this.user?this.onEdit():this.onAdd()}onAdd(){this.formGroup.controls.password.value===this.formGroup.controls.retype_password.value?this.userHttpService.create(this.formGroup.value.username,this.formGroup.value.password,this.formGroup.value.user_group,0==this.myAccount.user_group?this.formGroup.value.company._id:void 0).subscribe({next:e=>{200===e.status?(this.messageService.add({severity:"success",summary:"Th\xe0nh c\xf4ng",detail:"\u0110\xe3 t\u1ea1o Ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng"}),this.ref.close("success")):2===e.status?this.onComeback():(this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:`${e.message}`}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e.message))},error:e=>{this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:"C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i"}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e)}}):this.password_invalid=!0}onEdit(){this.formGroup.controls.password.value===this.formGroup.controls.retype_password.value?this.userHttpService.setupUser(this.user._id,1==this.myAccount.user_group?this.myAccount.company_id:this.formGroup.value.company._id,this.formGroup.value.user_group,this.formGroup.value.password).subscribe({next:e=>{200===e.status?(this.messageService.add({severity:"success",summary:"Th\xe0nh c\xf4ng",detail:"\u0110\xe3 c\u1eadp nh\u1eadt Ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng"}),this.ref.close("success")):(this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:`${e.message}`}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e.message))},error:e=>{this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:"C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i"}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e)}}):this.password_invalid=!0}onSetValidator(){this.user&&(""!=this.formGroup.value.password||""!=this.formGroup.value.retype_password?(this.formGroup.controls.password.setValidators([l.kI.required,l.kI.minLength(6)]),this.formGroup.controls.retype_password.setValidators([l.kI.required,l.kI.minLength(6)])):(this.formGroup.controls.password.clearValidators(),this.formGroup.controls.retype_password.clearValidators()),this.formGroup.controls.password.updateValueAndValidity(),this.formGroup.controls.retype_password.updateValueAndValidity())}onDestroy(){this.ref.destroy()}onComeback(){localStorage.removeItem(b.o.USER),sessionStorage.removeItem(b.o.ACC),this.router.navigate(["/come-back"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36($.E7),t.Y36($.S),t.Y36(l.qu),t.Y36(K.b),t.Y36(P.ez),t.Y36($.xA),t.Y36(d.K),t.Y36(D.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-or-edit-user"]],decls:41,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"outbound"],[1,"header","flex","align-items-center","justify-content-between","border-bottom-1","border-gray-300"],[1,"ml-2","text-xl","font-bold"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-danger","p-button-text",3,"click"],[1,"content"],[1,"p-fluid","m-2"],[1,"field","mb-2"],["for","name"],[1,"ml-2","text-red-500"],["id","name","type","text","pInputText","","formControlName","username"],["class","text-red-500",4,"ngIf"],["for","passw"],["id","passw","type","password","pInputText","","formControlName","password",3,"keyup"],["for","repassw"],["id","repassw","type","password","pInputText","","formControlName","retype_password",3,"keyup"],["formControlName","user_group","optionLabel","name","placeholder","Ch\u1ecdn nh\xf3m ng\u01b0\u1eddi d\xf9ng","optionValue","value","panelStyleClass","text-overflow-ellipsis text-sm","optionDisabled","inactive",3,"options"],["class","field mb-2",4,"ngIf"],[1,"footer","flex","align-items-center","justify-content-end","border-top-1","border-gray-300"],["pButton","","pRipple","","type","button","label","H\u1ee7y b\u1ecf","icon","fa-solid fa-times",1,"p-button-outlined","mr-1",3,"click"],["pButton","","pRipple","","type","submit","label","L\u01b0u th\xf4ng tin","icon","fa-solid fa-floppy-disk",1,"mr-1",3,"disabled"],[1,"text-red-500"],[4,"ngIf"],[1,"p-inputgroup"],["type","text","pInputText","","disabled","",3,"value"],["type","button","pButton","","pRipple","","icon","pi pi-check",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return i.onDestroy()}),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"T\xean \u0111\u0103ng nh\u1eadp "),t.TgZ(11,"span",9),t._uU(12,"(*)"),t.qZA()(),t._UZ(13,"input",10),t.YNc(14,h,3,2,"small",11),t.qZA(),t.TgZ(15,"div",7)(16,"label",12),t._uU(17,"M\u1eadt kh\u1ea9u "),t.TgZ(18,"span",9),t._uU(19,"(*)"),t.qZA()(),t.TgZ(20,"input",13),t.NdJ("keyup",function(){return i.onClearMsg(),i.onSetValidator()}),t.qZA(),t.YNc(21,T,3,2,"small",11),t.qZA(),t.TgZ(22,"div",7)(23,"label",14),t._uU(24,"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u "),t.TgZ(25,"span",9),t._uU(26,"(*)"),t.qZA()(),t.TgZ(27,"input",15),t.NdJ("keyup",function(){return i.onClearMsg(),i.onSetValidator()}),t.qZA(),t.YNc(28,N,3,2,"small",11),t.YNc(29,Y,3,0,"small",11),t.qZA(),t.TgZ(30,"div",7)(31,"label"),t._uU(32,"Nh\xf3m "),t.TgZ(33,"span",9),t._uU(34,"(*)"),t.qZA()(),t._UZ(35,"p-dropdown",16),t.YNc(36,Q,2,1,"small",11),t.qZA(),t.YNc(37,F,8,1,"div",17),t.qZA()(),t.TgZ(38,"div",18)(39,"button",19),t.NdJ("click",function(){return i.onDestroy()}),t.qZA(),t._UZ(40,"button",20),t.qZA()()()),2&e&&(t.Q6J("formGroup",i.formGroup),t.xp6(4),t.Oqu(i.title),t.xp6(10),t.Q6J("ngIf",i.formGroup.controls.username.invalid&&i.formGroup.controls.username.touched),t.xp6(7),t.Q6J("ngIf",i.formGroup.controls.password.invalid&&i.formGroup.controls.password.touched),t.xp6(7),t.Q6J("ngIf",i.formGroup.controls.retype_password.invalid&&i.formGroup.controls.retype_password.touched),t.xp6(1),t.Q6J("ngIf",i.password_invalid),t.xp6(6),t.Q6J("options",i.userGroupOption),t.xp6(1),t.Q6J("ngIf",i.formGroup.controls.user_group.invalid&&i.formGroup.controls.user_group.touched),t.xp6(1),t.Q6J("ngIf",0==i.myAccount.user_group),t.xp6(3),t.Q6J("disabled",i.formGroup.invalid))},directives:[l._Y,l.JL,l.sg,x.Hq,A.H,l.Fj,r.o,l.JJ,l.u,I.O5,s.Lt],styles:[".outbound[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.outbound[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:45px}.outbound[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;top:45px;bottom:45px;left:0;width:100%;overflow:auto}.outbound[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:absolute;bottom:0;height:45px;left:0;width:100%}"]}),n})();var J=f(9269),X=f(5431),z=f(7658);const st=["divBound"],ot=["divTable"],rt=["divPaginator"];function at(n,c){1&n&&(t.TgZ(0,"tr")(1,"th",27),t._uU(2,"#"),t.qZA(),t.TgZ(3,"th",28),t._uU(4,"T\xean \u0111\u0103ng nh\u1eadp "),t._UZ(5,"p-sortIcon",29),t.qZA(),t.TgZ(6,"th",30),t._uU(7,"Nh\xf3m"),t.qZA(),t.TgZ(8,"th",30),t._uU(9,"C\xf4ng ty"),t.qZA(),t.TgZ(10,"th",31),t._uU(11,"Th\u1eddi gian t\u1ea1o "),t._UZ(12,"p-sortIcon",32),t.qZA(),t.TgZ(13,"th",33),t._uU(14,"C\u1eadp nh\u1eadt "),t._UZ(15,"p-sortIcon",34),t.qZA()())}function ut(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"Qu\u1ea3n tr\u1ecb h\u1ec7 th\u1ed1ng"),t.qZA())}function lt(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"Qu\u1ea3n tr\u1ecb \u0111\u01a1n v\u1ecb"),t.qZA())}function ct(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"CB v\u1eadn h\xe0nh"),t.qZA())}function dt(n,c){if(1&n&&(t.TgZ(0,"tr",35)(1,"td",27),t._uU(2),t.qZA(),t.TgZ(3,"td",36),t._uU(4),t.qZA(),t.TgZ(5,"td",30),t.YNc(6,ut,2,0,"span",37),t.YNc(7,lt,2,0,"span",37),t.YNc(8,ct,2,0,"span",37),t.qZA(),t.TgZ(9,"td",36),t._uU(10),t.qZA(),t.TgZ(11,"td",30),t._uU(12),t.qZA(),t.TgZ(13,"td",30),t._uU(14),t.qZA()()),2&n){const e=c.$implicit,i=c.rowIndex,a=t.oxw(2);t.Q6J("pSelectableRow",e),t.xp6(2),t.Oqu((a.currentPage-1)*a.itemsPerPage+1+i),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.Q6J("ngIf",0==e.user_group),t.xp6(1),t.Q6J("ngIf",1==e.user_group),t.xp6(1),t.Q6J("ngIf",2==e.user_group),t.xp6(2),t.Oqu(null==e.company_id?null:e.company_id.name),t.xp6(2),t.Oqu(a.convertTime(e.created_at)),t.xp6(2),t.Oqu(a.convertTime(e.updated_at))}}function mt(n,c){1&n&&(t.TgZ(0,"div",38),t._uU(1," Kh\xf4ng c\xf3 d\u1eef li\u1ec7u trong m\u1ee5c n\xe0y. "),t.qZA())}function pt(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onAdd()}),t.qZA()}}function ht(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",40),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onEdit()}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",!e.currentUser)}}function ft(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onDelete()}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",!e.currentUser)}}const gt=function(){return[15,20,30,50]};function _t(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",2,3),t.NdJ("resize",function(){return t.CHM(e),t.oxw().onWindowResize()},!1,t.Jf7),t.TgZ(2,"div",4),t._UZ(3,"p-breadcrumb",5),t.TgZ(4,"div",6)(5,"h3",7),t._UZ(6,"i",8),t._uU(7,"Danh s\xe1ch Ng\u01b0\u1eddi d\xf9ng "),t.qZA()(),t.TgZ(8,"div",9,10)(10,"p-table",11),t.NdJ("selectionChange",function(a){return t.CHM(e),t.oxw().currentUser=a}),t.YNc(11,at,16,0,"ng-template",12),t.YNc(12,dt,15,9,"ng-template",13),t.YNc(13,mt,2,0,"ng-template",14),t.qZA()()(),t.TgZ(14,"div",15,16)(16,"div",17)(17,"div",18),t.YNc(18,pt,1,0,"button",19),t.YNc(19,ht,1,1,"button",20),t.YNc(20,ft,1,1,"button",21),t.qZA(),t.TgZ(21,"div",22)(22,"p-paginator",23),t.NdJ("onPageChange",function(a){return t.CHM(e),t.oxw().onPageChange(a)}),t.qZA()(),t.TgZ(23,"div",24)(24,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().onReSync()}),t.qZA(),t.TgZ(25,"span",26),t._uU(26),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("model",e.pathLinks)("home",e.homeLink),t.xp6(7),t.Q6J("selection",e.currentUser)("value",e.users)("scrollable",!0)("loading",e.loading),t.xp6(8),t.Q6J("ngIf",e.permission.user.create),t.xp6(1),t.Q6J("ngIf",e.permission.user.edit),t.xp6(1),t.Q6J("ngIf",e.permission.user.delete),t.xp6(2),t.Q6J("rows",e.itemsPerPage)("totalRecords",e.totalItems)("rowsPerPageOptions",t.DdM(17,gt))("showJumpToPageDropdown",!0)("showPageLinks",!1),t.xp6(4),t.lnq("Hi\u1ec3n th\u1ecb ",(e.currentPage-1)*e.itemsPerPage+1,"-",(e.currentPage-1)*e.itemsPerPage+e.itemsPerPage>e.totalItems?e.totalItems:(e.currentPage-1)*e.itemsPerPage+e.itemsPerPage,"/",e.totalItems,"")}}function vt(n,c){1&n&&(t._UZ(0,"i",49),t.TgZ(1,"span",50),t._uU(2,"B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o m\u1ee5c n\xe0y!"),t.qZA())}function yt(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",42)(1,"p-messages",43),t.YNc(2,vt,3,0,"ng-template",44),t.qZA()(),t.TgZ(3,"div",45)(4,"div",46),t.NdJ("click",function(){return t.CHM(e),t.oxw().onGoBackHome()}),t._UZ(5,"span",47),t.TgZ(6,"span",48),t._uU(7,"Quay l\u1ea1i Trang ch\u1ee7"),t.qZA()()()}}const Ct=[{path:"",component:(()=>{class n{constructor(e,i,a,k,tt,et,nt,it){this.uHttpService=e,this.messageService=i,this.renderer=a,this.confirmService=k,this.dialogService=tt,this.permissionService=et,this.router=nt,this.userService=it,this.offset=0,this.totalItems=0,this.itemsPerPage=15,this.currentPage=1,this.users=[],this.loading=!1}ngOnDestroy(){this.subPermission&&this.subPermission.unsubscribe(),this.loadingTime&&clearTimeout(this.loadingTime)}setStyleDiv(){this.windowWidth=this.divBound.nativeElement.offsetWidth,this.renderer.setStyle(this.divTable.nativeElement,"height",`  ${this.divBound.nativeElement.offsetHeight-this.divPaginator.nativeElement.offsetHeight-62}px`)}ngAfterViewInit(){this.setStyleDiv()}onWindowResize(){this.setStyleDiv()}calcWidth(){let e="";return e=this.windowWidth<576?.95*this.windowWidth+"px":this.windowWidth>=576&&this.windowWidth<768?.55*this.windowWidth+"px":this.windowWidth>=768&&this.windowWidth<992?.45*this.windowWidth+"px":this.windowWidth>=992&&this.windowWidth<1400?.4*this.windowWidth+"px":.3*this.windowWidth+"px",e}ngOnInit(){this.myAccount=this.userService.getMyAccount(),this.my_company_id=this.myAccount.company_id?this.myAccount.company_id:void 0,this.subPermission=this.permissionService.currentPermission.subscribe(e=>{e&&(this.permission=e,this.initForm(),this.fetchListOfUsers())})}initForm(){this.pathLinks=[{label:"Qu\u1ea3n l\xfd",disabled:!0},{label:"Ng\u01b0\u1eddi d\xf9ng",disabled:!0}],this.homeLink={icon:"fa-solid fa-home",routerLink:"/"}}fetchListOfUsers(){this.loadingTime=setTimeout(()=>{this.loading=!0},1e3),this.uHttpService.getList(void 0,void 0,this.itemsPerPage,this.offset).subscribe({next:e=>{200===e.status?(this.users=e.metadata.docs,this.totalItems=e.metadata.total,this.loading=!1,this.loadingTime&&clearTimeout(this.loadingTime),this.currentUser=void 0):2===e.status?this.onComeback():(this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:`${e.message}`}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e.message),this.loading=!1,this.loadingTime&&clearTimeout(this.loadingTime))},error:e=>{this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:"C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i"}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",e),this.loading=!1,this.loadingTime&&clearTimeout(this.loadingTime)}})}onPageChange(e){this.currentPage=e.page+1,this.itemsPerPage=e.rows,this.offset=(this.currentPage-1)*this.itemsPerPage,this.fetchListOfUsers()}onReSync(){this.fetchListOfUsers()}onAdd(){this.dialogService.open(w,{showHeader:!1,height:"650px",width:this.calcWidth(),contentStyle:{padding:"0",margin:0}}).onClose.subscribe(()=>{this.fetchListOfUsers()})}onEdit(){this.dialogService.open(w,{data:{user:this.currentUser,title:"C\u1eadp nh\u1eadt Ng\u01b0\u1eddi d\xf9ng"},showHeader:!1,height:"650px",width:this.calcWidth(),contentStyle:{padding:"0",margin:0}}).onClose.subscribe(()=>{this.fetchListOfUsers()})}onDelete(){this.confirmService.confirm({message:`B\u1ea1n c\xf3 mu\u1ed1n x\xf3a Ng\u01b0\u1eddi d\xf9ng "${this.currentUser.username}" kh\xf4ng?`,header:"X\xe1c nh\u1eadn x\xf3a Ng\u01b0\u1eddi d\xf9ng",icon:"pi pi-info-circle"}).then(e=>{e&&this.uHttpService.delete(this.currentUser._id).subscribe({next:i=>{200===i.status?(this.fetchListOfUsers(),this.messageService.add({severity:"success",summary:"Th\xe0nh c\xf4ng",detail:"\u0110\xe3 x\xf3a ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng."})):2===i.status?this.onComeback():(this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:`${i.message}`}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",i.message))},error:i=>{this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:"C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i"}),console.error("C\xf3 l\u1ed7i x\u1ea3y ra",i)}})}).catch(e=>{})}convertTime(e){return Z.I.isoToVnTime(e)}onGoBackHome(){this.router.navigate(["/"])}onComeback(){localStorage.removeItem(b.o.USER),sessionStorage.removeItem(b.o.ACC),this.router.navigate(["/come-back"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(K.b),t.Y36(P.ez),t.Y36(t.Qsj),t.Y36(J.I),t.Y36($.xA),t.Y36(X.$),t.Y36(D.F0),t.Y36(d.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-management"]],viewQuery:function(e,i){if(1&e&&(t.Gf(st,5,t.SBq),t.Gf(ot,5,t.SBq),t.Gf(rt,5,t.SBq)),2&e){let a;t.iGM(a=t.CRH())&&(i.divBound=a.first),t.iGM(a=t.CRH())&&(i.divTable=a.first),t.iGM(a=t.CRH())&&(i.divPaginator=a.first)}},decls:3,vars:2,consts:[["class","relative h-full w-full",3,"resize",4,"ngIf","ngIfElse"],["noPermission",""],[1,"relative","h-full","w-full",3,"resize"],["divBound",""],[1,"absolute","top-0","left-0","w-full"],["styleClass","text-sm p-1",3,"model","home"],[1,"flex","align-items-center"],[1,"text-blue-700","m-0","px-2","pt-2","pb-0"],[1,"fa-solid","fa-list","mr-2"],[1,"page-content","mt-1"],["divTable",""],["selectionMode","single","styleClass","p-datatable-sm p-datatable-striped","scrollHeight","flex",3,"selection","value","scrollable","loading","selectionChange"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"absolute","bottom-0","left-0","w-full","border-top-1","border-gray-300"],["divPaginator",""],[1,"grid","grid-nogutter"],[1,"col-12","md:col-5","flex","align-items-center"],["pButton","","pRipple","","type","button","label","Th\xeam","icon","fa-solid fa-plus","class","mx-1",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","label","Ch\u1ec9nh s\u1eeda","icon","fa-solid fa-pen","class","mr-1",3,"disabled","click",4,"ngIf"],["pButton","","pRipple","","type","button","label","X\xf3a b\u1ecf","icon","fa-solid fa-minus","class","mr-1",3,"disabled","click",4,"ngIf"],[1,"col-12","md:col-5","flex","align-items-center","justify-content-end"],["styleClass","p-0",3,"rows","totalRecords","rowsPerPageOptions","showJumpToPageDropdown","showPageLinks","onPageChange"],[1,"col-12","md:col-2","flex","align-items-center"],["pButton","","pRipple","","type","button","icon","fa-solid fa-sync",1,"p-button-raised","p-button-text","m-0","p-1",3,"click"],[1,"ml-1"],[2,"width","60px","max-width","60px"],["pSortableColumn","username",2,"min-width","300px"],["field","username"],[2,"min-width","200px"],["pSortableColumn","created_at",2,"min-width","200px"],["field","created_at"],["pSortableColumn","updated_at",2,"min-width","200px"],["field","updated_at"],[3,"pSelectableRow"],[2,"min-width","300px"],[4,"ngIf"],[1,"p-fluid","p-2"],["pButton","","pRipple","","type","button","label","Th\xeam","icon","fa-solid fa-plus",1,"mx-1",3,"click"],["pButton","","pRipple","","type","button","label","Ch\u1ec9nh s\u1eeda","icon","fa-solid fa-pen",1,"mr-1",3,"disabled","click"],["pButton","","pRipple","","type","button","label","X\xf3a b\u1ecf","icon","fa-solid fa-minus",1,"mr-1",3,"disabled","click"],[1,"flex","align-items-center","justify-content-center"],["severity","error"],["pTemplate",""],[1,"flex","align-items-center","justify-content-center","cursor-pointer"],["pRipple","",1,"flex","align-items-center","justify-content-center","w-full","h-4rem","max-w-20rem","bg-blue-500","border-round-md","shadow-8","text-white","font-bold",3,"click"],[1,"fa-solid","fa-home"],[1,"text-center","text-xl","mx-2"],[1,"pi","pi-times-circle"],[1,"ml-2"]],template:function(e,i){if(1&e&&(t.YNc(0,_t,27,18,"div",0),t.YNc(1,yt,8,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.permission.user.self)("ngIfElse",a)}},directives:[I.O5,z.a,u.iA,P.jx,u.lQ,u.fz,u.Ei,x.Hq,A.H,U.D,H.V],styles:[""]}),n})()}];let Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[D.Bz.forChild(Ct)],D.Bz]}),n})();var bt=f(8772);let Et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[I.ez,Tt,bt.m]]}),n})()},1764:function(j){j.exports=function(){"use strict";var f=6e4,I=36e5,D="millisecond",t="second",Z="minute",l="hour",b="day",$="week",C="month",P="quarter",x="year",A="date",u="Invalid Date",U=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,H=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var r=["th","st","nd","rd"],s=d%100;return"["+d+(r[(s-20)%10]||r[s]||r[0])+"]"}},S=function(d,r,s){var m=String(d);return!m||m.length>=r?d:""+Array(r+1-m.length).join(s)+d},W={s:S,z:function(d){var r=-d.utcOffset(),s=Math.abs(r),m=Math.floor(s/60),o=s%60;return(r<=0?"+":"-")+S(m,2,"0")+":"+S(o,2,"0")},m:function d(r,s){if(r.date()<s.date())return-d(s,r);var m=12*(s.year()-r.year())+(s.month()-r.month()),o=r.clone().add(m,C),h=s-o<0,p=r.clone().add(m+(h?-1:1),C);return+(-(m+(s-o)/(h?o-p:p-o))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:C,y:x,w:$,d:b,D:A,h:l,m:Z,s:t,ms:D,Q:P}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return void 0===d}},q="en",O={};O[q]=G;var B=function(d){return d instanceof V},L=function d(r,s,m){var o;if(!r)return q;if("string"==typeof r){var h=r.toLowerCase();O[h]&&(o=h),s&&(O[h]=s,o=h);var p=r.split("-");if(!o&&p.length>1)return d(p[0])}else{var g=r.name;O[g]=r,o=g}return!m&&o&&(q=o),o||!m&&q},v=function(d,r){if(B(d))return d.clone();var s="object"==typeof r?r:{};return s.date=d,s.args=arguments,new V(s)},_=W;_.l=L,_.i=B,_.w=function(d,r){return v(d,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var V=function(){function d(s){this.$L=L(s.locale,null,!0),this.parse(s)}var r=d.prototype;return r.parse=function(s){this.$d=function(m){var o=m.date,h=m.utc;if(null===o)return new Date(NaN);if(_.u(o))return new Date;if(o instanceof Date)return new Date(o);if("string"==typeof o&&!/Z$/i.test(o)){var p=o.match(U);if(p){var g=p[2]-1||0,T=(p[7]||"0").substring(0,3);return h?new Date(Date.UTC(p[1],g,p[3]||1,p[4]||0,p[5]||0,p[6]||0,T)):new Date(p[1],g,p[3]||1,p[4]||0,p[5]||0,p[6]||0,T)}}return new Date(o)}(s),this.$x=s.x||{},this.init()},r.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},r.$utils=function(){return _},r.isValid=function(){return this.$d.toString()!==u},r.isSame=function(s,m){var o=v(s);return this.startOf(m)<=o&&o<=this.endOf(m)},r.isAfter=function(s,m){return v(s)<this.startOf(m)},r.isBefore=function(s,m){return this.endOf(m)<v(s)},r.$g=function(s,m,o){return _.u(s)?this[m]:this.set(o,s)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(s,m){var o=this,h=!!_.u(m)||m,p=_.p(s),g=function(F,w){var J=_.w(o.$u?Date.UTC(o.$y,w,F):new Date(o.$y,w,F),o);return h?J:J.endOf(b)},T=function(F,w){return _.w(o.toDate()[F].apply(o.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(w)),o)},y=this.$W,E=this.$M,N=this.$D,Y="set"+(this.$u?"UTC":"");switch(p){case x:return h?g(1,0):g(31,11);case C:return h?g(1,E):g(0,E+1);case $:var R=this.$locale().weekStart||0,Q=(y<R?y+7:y)-R;return g(h?N-Q:N+(6-Q),E);case b:case A:return T(Y+"Hours",0);case l:return T(Y+"Minutes",1);case Z:return T(Y+"Seconds",2);case t:return T(Y+"Milliseconds",3);default:return this.clone()}},r.endOf=function(s){return this.startOf(s,!1)},r.$set=function(s,m){var o,h=_.p(s),p="set"+(this.$u?"UTC":""),g=(o={},o[b]=p+"Date",o[A]=p+"Date",o[C]=p+"Month",o[x]=p+"FullYear",o[l]=p+"Hours",o[Z]=p+"Minutes",o[t]=p+"Seconds",o[D]=p+"Milliseconds",o)[h],T=h===b?this.$D+(m-this.$W):m;if(h===C||h===x){var y=this.clone().set(A,1);y.$d[g](T),y.init(),this.$d=y.set(A,Math.min(this.$D,y.daysInMonth())).$d}else g&&this.$d[g](T);return this.init(),this},r.set=function(s,m){return this.clone().$set(s,m)},r.get=function(s){return this[_.p(s)]()},r.add=function(s,m){var o,h=this;s=Number(s);var p=_.p(m),g=function(E){var N=v(h);return _.w(N.date(N.date()+Math.round(E*s)),h)};if(p===C)return this.set(C,this.$M+s);if(p===x)return this.set(x,this.$y+s);if(p===b)return g(1);if(p===$)return g(7);var T=(o={},o[Z]=f,o[l]=I,o[t]=1e3,o)[p]||1,y=this.$d.getTime()+s*T;return _.w(y,this)},r.subtract=function(s,m){return this.add(-1*s,m)},r.format=function(s){var m=this,o=this.$locale();if(!this.isValid())return o.invalidDate||u;var h=s||"YYYY-MM-DDTHH:mm:ssZ",p=_.z(this),g=this.$H,T=this.$m,y=this.$M,E=o.weekdays,N=o.months,Y=function(w,J,X,z){return w&&(w[J]||w(m,h))||X[J].slice(0,z)},R=function(w){return _.s(g%12||12,w,"0")},Q=o.meridiem||function(w,J,X){var z=w<12?"AM":"PM";return X?z.toLowerCase():z},F={YY:String(this.$y).slice(-2),YYYY:this.$y,M:y+1,MM:_.s(y+1,2,"0"),MMM:Y(o.monthsShort,y,N,3),MMMM:Y(N,y),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:Y(o.weekdaysMin,this.$W,E,2),ddd:Y(o.weekdaysShort,this.$W,E,3),dddd:E[this.$W],H:String(g),HH:_.s(g,2,"0"),h:R(1),hh:R(2),a:Q(g,T,!0),A:Q(g,T,!1),m:String(T),mm:_.s(T,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:p};return h.replace(H,function(w,J){return J||F[w]||p.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(s,m,o){var h,p=_.p(m),g=v(s),T=(g.utcOffset()-this.utcOffset())*f,y=this-g,E=_.m(this,g);return E=(h={},h[x]=E/12,h[C]=E,h[P]=E/3,h[$]=(y-T)/6048e5,h[b]=(y-T)/864e5,h[l]=y/I,h[Z]=y/f,h[t]=y/1e3,h)[p]||y,o?E:_.a(E)},r.daysInMonth=function(){return this.endOf(C).$D},r.$locale=function(){return O[this.$L]},r.locale=function(s,m){if(!s)return this.$L;var o=this.clone(),h=L(s,m,!0);return h&&(o.$L=h),o},r.clone=function(){return _.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},d}(),K=V.prototype;return v.prototype=K,[["$ms",D],["$s",t],["$m",Z],["$H",l],["$W",b],["$M",C],["$y",x],["$D",A]].forEach(function(d){K[d[1]]=function(r){return this.$g(r,d[0],d[1])}}),v.extend=function(d,r){return d.$i||(d(r,V,v),d.$i=!0),v},v.locale=L,v.isDayjs=B,v.unix=function(d){return v(1e3*d)},v.en=O[q],v.Ls=O,v.p={},v}()},5268:function(j){j.exports=function(){"use strict";var M="minute",f=/[+-]\d\d(?::?\d\d)?/g,I=/([+-]|\d\d)/g;return function(D,t,Z){var l=t.prototype;Z.utc=function(u){return new t({date:u,utc:!0,args:arguments})},l.utc=function(u){var U=Z(this.toDate(),{locale:this.$L,utc:!0});return u?U.add(this.utcOffset(),M):U},l.local=function(){return Z(this.toDate(),{locale:this.$L,utc:!1})};var b=l.parse;l.parse=function(u){u.utc&&(this.$u=!0),this.$utils().u(u.$offset)||(this.$offset=u.$offset),b.call(this,u)};var $=l.init;l.init=function(){if(this.$u){var u=this.$d;this.$y=u.getUTCFullYear(),this.$M=u.getUTCMonth(),this.$D=u.getUTCDate(),this.$W=u.getUTCDay(),this.$H=u.getUTCHours(),this.$m=u.getUTCMinutes(),this.$s=u.getUTCSeconds(),this.$ms=u.getUTCMilliseconds()}else $.call(this)};var C=l.utcOffset;l.utcOffset=function(u,U){var H=this.$utils().u;if(H(u))return this.$u?0:H(this.$offset)?C.call(this):this.$offset;if("string"==typeof u&&null===(u=function(q){void 0===q&&(q="");var O=q.match(f);if(!O)return null;var B=(""+O[0]).match(I)||["-",0,0],v=60*+B[1]+ +B[2];return 0===v?0:"+"===B[0]?v:-v}(u)))return this;var G=Math.abs(u)<=16?60*u:u,S=this;if(U)return S.$offset=G,S.$u=0===u,S;if(0!==u){var W=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(G+W,M)).$offset=G,S.$x.$localOffset=W}else S=this.utc();return S};var P=l.format;l.format=function(u){return P.call(this,u||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":""))},l.valueOf=function(){var u=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*u},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var x=l.toDate;l.toDate=function(u){return"s"===u&&this.$offset?Z(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():x.call(this)};var A=l.diff;l.diff=function(u,U,H){if(u&&this.$u===u.$u)return A.call(this,u,U,H);var G=this.local(),S=Z(u).local();return A.call(G,S,U,H)}}}()}}]);