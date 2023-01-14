"use strict";(self.webpackChunka_finance_app=self.webpackChunka_finance_app||[]).push([[180],{6180:(Rt,B,d)=>{d.r(B),d.d(B,{AmountOperationModule:()=>kt});var w=d(6895),D=d(1951),Z=d(5861);class X{constructor(i="",e="",n="",r=!1,o=!1,s=""){this.id=i,this.codename=e,this.name=n,this.isBase=r,this.isIncome=o,this.aliases=s}}var g=(()=>{return(a=g||(g={}))[a.usualOperation=0]="usualOperation",a[a.currencyExchange=1]="currencyExchange",a[a.loan=2]="loan",g;var a})(),y=d(6044),m=(()=>{return(a=m||(m={}))[a.CNY=156]="CNY",a[a.GBP=826]="GBP",a[a.USD=840]="USD",a[a.XAU=959]="XAU",a[a.XAG=961]="XAG",a[a.XPT=962]="XPT",a[a.EUR=978]="EUR",a[a.UAH=980]="UAH",a[a.PLN=985]="PLN",m;var a})(),L=d(9808),t=d(4650),U=d(2340),k=d(529);let F=(()=>{class a{constructor(e){this.http=e,this.baseUrlForService=`${U.N.apiBaseUrl}Amount`}getAmountOperations(e,n){let r=new k.LE;return r=r.set("filter.startDateTime",e.startDateTime),r=r.set("filter.endDateTime",e.endDateTime),e.isIncome&&(r=r.set("filter.isIncome",e.isIncome)),e.orderByDescending&&(r=r.set("filter.orderByDescending",e.orderByDescending)),e.orderByField&&(r=r.set("filter.orderByField",e.orderByField)),r=r.set("pageLength",n.pageLength),r=r.set("pageNumber",n.pageNumber),this.http.get(`${this.baseUrlForService}`,{params:r})}getAmountOperation(e){return this.http.get(`${this.baseUrlForService}/${e}`)}createAmountOperation(e){return this.http.post(`${this.baseUrlForService}`,e)}deleteAmountOperation(e){return this.http.delete(`${this.baseUrlForService}/${e}`)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(k.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),q=(()=>{class a{constructor(e){this.http=e,this.baseUrlForService=`${U.N.apiBaseUrl}Mono`}getMonoTransactions(e,n){let r=new k.LE;return n.orderByDescending&&(r=r.set("filter.orderByDescending",n.orderByDescending)),n.orderByField&&(r=r.set("filter.orderByField",n.orderByField)),r=r.set("pageLength",e.pageLength),r=r.set("pageNumber",e.pageNumber),this.http.get(`${this.baseUrlForService}`,{params:r})}getProcessingMonoTransactions(){this.http.post(`${this.baseUrlForService}/handle-new-transaction`,{}).subscribe(e=>console.log("handle-new-transaction executed"))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(k.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();class te{constructor(i,e){this.orderByDescending=i||!1,this.orderByField=e||"CreatedAt"}}var I=d(4859),v=d(3546),j=d(7392),_=d(671),ae=d(8739),S=d(1561),c=d(4006),E=d(5938);let ne=(()=>{class a{constructor(e){this.dialogRef=e,this.message=""}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(E.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-error"]],decls:3,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content","",3,"innerText"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Error occured!"),t.qZA(),t._UZ(2,"div",1)),2&e&&(t.xp6(2),t.Q6J("innerText",n.message))},dependencies:[E.uh,E.xY]}),a})(),ie=(()=>{class a{constructor(e){this.dialog=e}httpError(e){return this.dialogRef=this.dialog.open(ne),this.dialogRef.componentInstance.message=`Response status code: ${e.status}\n${e.message}\n\nDetails:\n${JSON.stringify(e.error)}`,this.dialogRef.afterClosed()}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(E.uw))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var C=d(9549),P=d(4144),re=d(6709);let oe=(()=>{class a{constructor(e,n,r){this.service=e,this.router=n,this.messages=r,this.search=new t.vpe,this.pageInfo=new y.S,this.ctl={startDateTime:new c.NI(""),endDateTime:new c.NI(""),orderByDescending:new c.NI(!0),orderByField:new c.NI("CreatedAt")},this.form=new c.cw(this.ctl);const o=new Date;this.ctl.startDateTime.setValue(o.toISOString().substring(0,8)+"01"),this.ctl.endDateTime.setValue(o.toISOString().substring(0,10))}ngOnInit(){this.doSearch()}ngOnChanges(e){(null!=e.pageInfo||null!=e.pageInfo)&&(this.pageInfo=e.pageInfo.currentValue,this.doSearch())}doSearch(){let e=this.form.getRawValue();this.service.getAmountOperations(e,this.pageInfo).subscribe(n=>{this.search.emit(n),this.router.navigateByUrl("/amount-operation")},n=>this.messages.httpError(n))}addAmountOperation(){this.router.navigateByUrl("/amount-operation/details")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(F),t.Y36(D.F0),t.Y36(ie))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-amount-operation-filter"]],inputs:{pageInfo:"pageInfo"},outputs:{search:"search"},features:[t.TTD],decls:22,vars:4,consts:[[1,"nav-content"],["appearance","standard",2,"min-width","240px","margin-right","20px"],["type","date","matInput","","placeholder","",3,"formControl"],[3,"checked","change"],["matInput","","placeholder","",3,"formControl"],["mat-raised-button","","color","primary",1,"action",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title"),t._uU(2," Filters "),t.qZA(),t.TgZ(3,"mat-card-content")(4,"mat-form-field",1)(5,"mat-label"),t._uU(6,"Start date time"),t.qZA(),t._UZ(7,"input",2),t.qZA(),t.TgZ(8,"mat-form-field",1)(9,"mat-label"),t._uU(10,"End date time"),t.qZA(),t._UZ(11,"input",2),t.qZA(),t.TgZ(12,"mat-checkbox",3),t.NdJ("change",function(o){return n.ctl.orderByDescending.setValue(o.checked)}),t._uU(13,"Order by descending"),t.qZA(),t.TgZ(14,"mat-form-field",1)(15,"mat-label"),t._uU(16,"Order by field"),t.qZA(),t._UZ(17,"input",4),t.qZA(),t.TgZ(18,"button",5),t.NdJ("click",function(){return n.doSearch()}),t._uU(19," Search "),t.qZA(),t.TgZ(20,"button",5),t.NdJ("click",function(){return n.addAmountOperation()}),t._uU(21," Add amount operation "),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("formControl",n.ctl.startDateTime),t.xp6(4),t.Q6J("formControl",n.ctl.endDateTime),t.xp6(1),t.Q6J("checked",!!n.ctl.orderByDescending.value&&n.ctl.orderByDescending.value),t.xp6(5),t.Q6J("formControl",n.ctl.orderByField))},dependencies:[I.lW,C.KE,C.hX,P.Nt,v.a8,v.dn,v.n5,re.oG,c.Fj,c.JJ,c.oH],styles:[".mat-form-field[_ngcontent-%COMP%]{margin:10px}"]}),a})();function se(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Amount"),t.qZA())}function le(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.amount," ")}}function de(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Currency"),t.qZA())}function ce(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.currencyCodeStr," ")}}function ue(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Eq amount"),t.qZA())}function pe(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.equivalentAmount," ")}}function he(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Eq curr"),t.qZA())}function me(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.equivalentCurrencyCodeStr," ")}}function _e(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Category name"),t.qZA())}function ge(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.category.name," ")}}function fe(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Created at"),t.qZA())}function ve(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.createdAt)," ")}}function De(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Description"),t.qZA())}function ye(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function Ce(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Type"),t.qZA())}function be(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.typeStr," ")}}function Ae(a,i){1&a&&t._UZ(0,"th",19)}const Me=function(a){return["details",a]};function xe(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"td",21)(1,"button",22)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,23)(6,"button",24)(7,"mat-icon"),t._uU(8,"info"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Details"),t.qZA()(),t.TgZ(11,"button",25)(12,"mat-icon"),t._uU(13,"edit"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"Edit"),t.qZA()(),t.TgZ(16,"button",26),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.delete(o.id))}),t.TgZ(17,"mat-icon"),t._uU(18,"delete"),t.qZA(),t.TgZ(19,"span"),t._uU(20,"Delete"),t.qZA()()()()}if(2&a){const e=i.$implicit,n=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(5),t.Q6J("routerLink",t.VKq(2,Me,e.id))}}function we(a,i){1&a&&t._UZ(0,"tr",27)}function ke(a,i){1&a&&t._UZ(0,"tr",28)}const H=function(){return["amount","currencyCode","equivalentAmount","equivalentCurrencyCode","categoryName","createdAt","description","type","actions"]},Ie=function(){return[10,15,25]};let Se=(()=>{class a{constructor(e,n){this.service=e,this.monoService=n,this.amountOperations=[],this.pageInfo=new y.S(15),this.totalItems=0}ngOnInit(){}handlePage(e){this.pageInfo=new y.S(e.pageSize,e.pageIndex)}setAllAmountOperations(e){this.amountOperations=e.items.map(n=>new Ee(n)),this.totalItems=e.totalItems}delete(e){var n=this;return(0,Z.Z)(function*(){const r=n.amountOperations.find(({id:s})=>s===e);if(confirm(`Are you sure to delete ${r?.amount} ${r?.category.name} ${r?.createdAt}`)){var o=yield(0,L.n)(n.service.deleteAmountOperation(e));console.log(o),n.pageInfo=new y.S(n.pageInfo.pageLength,n.pageInfo.pageNumber)}})()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(F),t.Y36(q))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-amount-operation-list"]],decls:34,vars:12,consts:[[3,"pageInfo","search"],[1,"mat-elevation-z3"],["mat-table","",3,"dataSource"],["matColumnDef","amount"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","currencyCode"],["matColumnDef","equivalentAmount"],["matColumnDef","equivalentCurrencyCode"],["matColumnDef","categoryName"],["matColumnDef","createdAt"],["matColumnDef","description"],["matColumnDef","type"],["matColumnDef","actions"],["mat-cell","","style","text-align: right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions","showFirstLastButtons","length","pageIndex","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-cell","",2,"text-align","right"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","","disabled",""],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"app-amount-operation-filter",0),t.NdJ("search",function(o){return n.setAllAmountOperations(o)}),t.qZA(),t.TgZ(1,"mat-card",1)(2,"table",2),t.ynx(3,3),t.YNc(4,se,2,0,"th",4),t.YNc(5,le,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,de,2,0,"th",4),t.YNc(8,ce,2,1,"td",5),t.BQk(),t.ynx(9,7),t.YNc(10,ue,2,0,"th",4),t.YNc(11,pe,2,1,"td",5),t.BQk(),t.ynx(12,8),t.YNc(13,he,2,0,"th",4),t.YNc(14,me,2,1,"td",5),t.BQk(),t.ynx(15,9),t.YNc(16,_e,2,0,"th",4),t.YNc(17,ge,2,1,"td",5),t.BQk(),t.ynx(18,10),t.YNc(19,fe,2,0,"th",4),t.YNc(20,ve,3,3,"td",5),t.BQk(),t.ynx(21,11),t.YNc(22,De,2,0,"th",4),t.YNc(23,ye,2,1,"td",5),t.BQk(),t.ynx(24,12),t.YNc(25,Ce,2,0,"th",4),t.YNc(26,be,2,1,"td",5),t.BQk(),t.ynx(27,13),t.YNc(28,Ae,1,0,"th",4),t.YNc(29,xe,21,4,"td",14),t.BQk(),t.YNc(30,we,1,0,"tr",15),t.YNc(31,ke,1,0,"tr",16),t.qZA(),t.TgZ(32,"mat-paginator",17,18),t.NdJ("page",function(o){return n.handlePage(o)}),t.qZA()()),2&e&&(t.Q6J("pageInfo",n.pageInfo),t.xp6(2),t.Q6J("dataSource",n.amountOperations),t.xp6(28),t.Q6J("matHeaderRowDef",t.DdM(9,H)),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(10,H)),t.xp6(1),t.Q6J("pageSize",n.pageInfo.pageLength)("pageSizeOptions",t.DdM(11,Ie))("showFirstLastButtons",!0)("length",n.totalItems)("pageIndex",n.pageInfo.pageNumber))},dependencies:[D.rH,I.lW,v.a8,j.Hw,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,ae.NW,S.VK,S.OP,S.p6,oe,w.uU],styles:["table[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{max-width:1400px;min-width:800px;box-sizing:border-box}mat-chip-list[_ngcontent-%COMP%]{display:inline-block}mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{font-size:10px;margin:auto}mat-chip-list[_ngcontent-%COMP%]   mat-chip.trace[_ngcontent-%COMP%]{background-color:#505050}mat-chip-list[_ngcontent-%COMP%]   mat-chip.debug[_ngcontent-%COMP%]{background-color:#b8b8b8}mat-chip-list[_ngcontent-%COMP%]   mat-chip.info[_ngcontent-%COMP%]{background-color:#f5f5f5}mat-chip-list[_ngcontent-%COMP%]   mat-chip.warn[_ngcontent-%COMP%]{background-color:#ff933b}mat-chip-list[_ngcontent-%COMP%]   mat-chip.error[_ngcontent-%COMP%]{background-color:#e46767;color:#fff}mat-chip-list[_ngcontent-%COMP%]   mat-chip.fatal[_ngcontent-%COMP%]{background-color:#e46767;color:#fff;border:3px solid black}.red[_ngcontent-%COMP%]{color:#e46767}.gray[_ngcontent-%COMP%]{color:#d3d3d3}mat-icon[_ngcontent-%COMP%]{padding:0 2px;cursor:pointer}.mat-column-level[_ngcontent-%COMP%], .mat-column-logger[_ngcontent-%COMP%]{padding-right:24px}.mat-column-message[_ngcontent-%COMP%]{font-style:italic;word-break:break-all}.mat-form-field[_ngcontent-%COMP%]{margin:10px}"]}),a})();class Ee extends class ee{constructor(i="",e=0,n=0,r="",o="",s="",l="",p,f,A,M=0,x=new X,O){this.id=i,this.amount=e,this.currencyCode=n,this.categoryId=r,this.createdAt=o,this.rawText=s,this.userId=l,this.equivalentAmount=p,this.equivalentCurrencyCode=f,this.description=A,this.type=M,this.category=x,this.monobankTransactionId=O,this.typeString=g[this.type]}}{constructor(i){super(i.id,i.amount,i.currencyCode,i.categoryId,i.createdAt,i.rawText,i.userId,i.equivalentAmount,i.equivalentCurrencyCode,i.description,i.type,i.category),this.equivalentCurrencyCodeStr="",this.currencyCodeStr=m[this.currencyCode],this.equivalentCurrencyCode&&(this.equivalentCurrencyCodeStr=m[this.equivalentCurrencyCode]),this.typeStr=g[this.type]}}var $=d(8447);class Ve extends class Te{constructor(i,e,n,r,o,s,l,p,f,A,M,x,O,W,It,St,Et,Tt,Vt){this.id=i,this.createAt=e,this.monoTransactionId=n,this.time=r,this.userApprovalTransaction=o,this.mcc=s,this.originalMcc=l,this.hold=p,this.amount=f,this.operationAmount=A,this.currencyCode=M,this.commissionRate=x,this.cashbackAmount=O,this.balance=W,this.description=It,this.comment=St,this.receiptId=Et,this.counterEdrpou=Tt,this.counterIban=Vt,this.id=i,this.createAt=e,this.monoTransactionId=n,this.time=r,this.mcc=s,this.originalMcc=l,this.hold=p,this.amount=f,this.operationAmount=A,this.currencyCode=M,this.commissionRate=x,this.cashbackAmount=O,this.balance=W,this.userApprovalTransaction=o}}{constructor(i){super(i.id,i.createAt,i.monoTransactionId,i.time,i.userApprovalTransaction,i.mcc,i.originalMcc,i.hold,i.amount,i.operationAmount,i.currencyCode,i.commissionRate,i.cashbackAmount,i.balance,i.description,i.comment,i.receiptId,i.counterEdrpou,i.counterIban),this.currencyCodeStr=m[i.currencyCode],this.timeStr=new Date(1e3*this.time).toString()}}function Re(a){const i=a.get("amount"),e=a.get("equivalentAmount");if(a.get("categoryText"),i&&e&&i.value&&e.value&&0!==i.value&&0!==e.value){const r={amountAndEquivalentAmountHasDifferentSign:!0};if(i.value<0&&e.value>0)return i.setErrors(r),e.setErrors(r),r;if(i.value>0&&e.value<0)return i.setErrors(r),e.setErrors(r),r;i.setErrors(null),e.setErrors(null)}return null}var Oe=d(4385),h=d(3238);function Fe(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.save())}),t._uU(1," Save "),t.qZA()}}function Pe(a,i){1&a&&(t.TgZ(0,"mat-error"),t._uU(1,"amount and equivalentAmount has different sign"),t.qZA())}function Ye(a,i){if(1&a&&t._UZ(0,"input",11),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.currencyCodeStr)("readonly",e.isView)}}function Ne(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.code),t.xp6(1),t.hij("",e.name," ")}}function Be(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",14),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.currencyCode.setValue(r))}),t.YNc(1,Ne,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("value",e.ctl.currencyCode.value),t.xp6(1),t.Q6J("ngForOf",e.currencies)}}function Ze(a,i){if(1&a&&t._UZ(0,"input",11),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.typeStr)("readonly",e.isView)}}function Le(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.code),t.xp6(1),t.hij(" ",e.name," ")}}function Ue(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",17),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.type.setValue(r))}),t.YNc(1,Le,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("value",0),t.xp6(1),t.Q6J("ngForOf",e.amountOperationArray)}}function qe(a,i){if(1&a&&t._UZ(0,"input",11),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.categoryText)("readonly",e.isView)}}function je(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.name),t.xp6(1),t.hij(" ",e.name+" ("+e.aliases+")"," ")}}function He(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",18),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.categoryText.setValue(r))}),t.YNc(1,je,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.categoryText),t.xp6(1),t.Q6J("ngForOf",e.viewCategories)}}function $e(a,i){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," please, select category "),t.qZA())}function Qe(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.amount+" UAH "+e.description+" "+e.timeStr," ")}}function ze(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",20),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.setMonoTransaction(r))}),t.YNc(1,Qe,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.monoTransactions)}}function Ge(a,i){if(1&a&&(t.TgZ(0,"mat-form-field",4)(1,"mat-label"),t._uU(2,"MonoTransaction"),t.qZA(),t.YNc(3,ze,2,1,"mat-select",19),t.qZA()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",!e.isView)}}function Je(a,i){1&a&&(t.TgZ(0,"mat-error"),t._uU(1,"amount and equivalentAmount has different sign"),t.qZA())}function Ke(a,i){if(1&a&&t._UZ(0,"input",11),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.equivalentCurrencyCodeStr)("readonly",e.isView)}}function We(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.code),t.xp6(1),t.hij("",e.name," ")}}function Xe(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",17),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.equivalentCurrencyCode.setValue(r))}),t.YNc(1,We,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("value",e.ctl.equivalentCurrencyCode.value),t.xp6(1),t.Q6J("ngForOf",e.currencies)}}function et(a,i){if(1&a&&(t.TgZ(0,"p")(1,"mat-form-field",4)(2,"mat-label"),t._uU(3,"Commission rate"),t.qZA(),t._UZ(4,"input",21),t.qZA(),t.TgZ(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Commission currency code"),t.qZA(),t._UZ(8,"input",22),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("formControl",e.ctl.commissionRate)("readonly",e.isView),t.xp6(4),t.Q6J("readonly",e.isView)}}function tt(a,i){if(1&a&&(t.TgZ(0,"p")(1,"mat-form-field",4)(2,"mat-label"),t._uU(3,"Created at"),t.qZA(),t._UZ(4,"input",11),t.qZA(),t.TgZ(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Raw text"),t.qZA(),t._UZ(8,"input",11),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("formControl",e.ctl.createdAt)("readonly",e.isView),t.xp6(4),t.Q6J("formControl",e.ctl.rawText)("readonly",e.isView)}}let Q=(()=>{class a{constructor(e,n,r,o,s){this.service=e,this.route=n,this.router=r,this.categoryService=o,this.monoService=s,this.isView=!0,this.ctl={amount:new c.NI(0),currencyCode:new c.NI(m.UAH),currencyCodeStr:new c.NI(""),description:new c.NI(""),categoryText:new c.NI("",[c.kI.required]),type:new c.NI(0),typeStr:new c.NI(""),transactionTime:new c.NI((new Date).toISOString()),monobankTransactionId:new c.NI(""),equivalentAmount:new c.NI(0),equivalentCurrencyCode:new c.NI(0),equivalentCurrencyCodeStr:new c.NI(""),commissionRate:new c.NI(0),rawText:new c.NI(""),createdAt:new c.NI("")},this.form=new c.cw(this.ctl),this.currencies=[],this.amountOperationArray=[],this.categories=[],this.viewCategories=[],this.monoTransactions=[];for(let l of Object.keys(g).filter(p=>!isNaN(Number(p))))this.amountOperationArray.push({name:g[parseInt(l)],code:parseInt(l)});for(let l of Object.keys(m).filter(p=>!isNaN(Number(p))))this.currencies.push({name:m[parseInt(l)],code:parseInt(l)});this.form.setValidators(Re)}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e?this.service.getAmountOperation(e).subscribe(n=>{this.form.patchValue(n);let r=this.currencies.find(({code:o})=>o===this.ctl.currencyCode.value);this.ctl.currencyCodeStr.setValue(r?.name?r.name:"unknown"),this.ctl.categoryText.setValue(`${n.category.name} (${n.category.aliases})`),this.ctl.typeStr.setValue(g[this.ctl.type.value?this.ctl.type.value:g.currencyExchange]),this.ctl.equivalentCurrencyCode.value&&0!==this.ctl.equivalentCurrencyCode.value&&(r=this.currencies.find(({code:o})=>o===this.ctl.equivalentCurrencyCode.value),this.ctl.equivalentCurrencyCodeStr.setValue(r?.name?r.name:"unknown"))}):(this.isView=!1,this.categoryService.getCategories(new $.f,new y.S(999)).subscribe(n=>{this.categories=n.items,this.viewCategories=n.items}),this.monoService.getMonoTransactions(new y.S(50),new te(!0,"CreatedAt")).subscribe(n=>{this.monoTransactions=n.items.map(r=>new Ve(r)),this.monoTransactions=this.monoTransactions.sort((r,o)=>o.time-r.time)}))}save(){var e=this;return(0,Z.Z)(function*(){if(e.form.valid){let r=e.form.getRawValue();console.log(r);var n=yield(0,L.n)(e.service.createAmountOperation(r));console.log(n),e.router.navigateByUrl("/amount-operation")}else e.form.markAllAsTouched()})()}setMonoTransaction(e){if(e){this.ctl.monobankTransactionId.setValue(e);const n=this.monoTransactions.find(({id:r})=>r===e);n?(this.viewCategories=this.categories.filter(n.amount<0?r=>!1===r.isIncome:r=>!0===r.isIncome),this.ctl.amount.setValue(n.amount),this.ctl.currencyCode.setValue(m.UAH),this.ctl.equivalentAmount.setValue(n.operationAmount),this.ctl.equivalentCurrencyCode.setValue(n.currencyCode),this.ctl.equivalentCurrencyCodeStr.setValue(m[n.currencyCode]),this.ctl.transactionTime.setValue(new Date(1e3*n.time).toISOString()),this.ctl.description.setValue(n.description?n.description:""),this.ctl.commissionRate.setValue(n.commissionRate)):this.viewCategories=this.categories}}amountInputChanged(e){this.ctl.amount.value&&(this.viewCategories=this.categories.filter(this.ctl.amount.value<0?n=>!1===n.isIncome:n=>!0===n.isIncome)),this.viewCategories=this.ctl.equivalentAmount.value?this.categories.filter(this.ctl.equivalentAmount.value<0?n=>!1===n.isIncome:n=>!0===n.isIncome):this.categories}getError(e){return e.hasError("equivalentAmountIsPositive")?"equivalent amount also must be negative":e.hasError("amountIsPositive")?"amount is positive":e.hasError("categoryTextIsNull")?"please, select category":""}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(F),t.Y36(D.gz),t.Y36(D.F0),t.Y36($.H),t.Y36(q))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-amount-operation-details"]],decls:56,vars:23,consts:[[1,"sticky-nav"],["mat-raised-button","","routerLink","/amount-operation",1,"action"],["mat-raised-button","","class","action","color","primary",3,"click",4,"ngIf"],[1,"nav-content"],["appearance","standard",2,"min-width","240px","margin-right","20px"],["matInput","","type","number",3,"formControl","readonly","input"],[4,"ngIf"],["matInput","",3,"formControl","readonly",4,"ngIf"],["disabled","true",3,"value","valueChange",4,"ngIf"],[3,"value","valueChange",4,"ngIf"],["name","categoryText",3,"formControl","valueChange",4,"ngIf"],["matInput","",3,"formControl","readonly"],["appearance","standard","style","min-width: 240px; margin-right: 20px",4,"ngIf"],["mat-raised-button","","color","primary",1,"action",3,"click"],["disabled","true",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"value","valueChange"],["name","categoryText",3,"formControl","valueChange"],[3,"valueChange",4,"ngIf"],[3,"valueChange"],["matInput","","type","number",3,"formControl","readonly"],["matInput","","value","'UAH'",3,"readonly"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon"),t._uU(3,"keyboard_backspace"),t.qZA(),t._uU(4," To amount operations "),t.qZA(),t.YNc(5,Fe,2,0,"button",2),t.qZA(),t.TgZ(6,"mat-card",3)(7,"mat-card-title")(8,"p"),t._uU(9,"Amount operation details"),t.qZA()(),t.TgZ(10,"mat-card-content")(11,"p")(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"Amount"),t.qZA(),t.TgZ(15,"input",5),t.NdJ("input",function(o){return n.amountInputChanged(o)}),t.qZA(),t.YNc(16,Pe,2,0,"mat-error",6),t.qZA(),t.TgZ(17,"mat-form-field",4)(18,"mat-label"),t._uU(19,"Currency code"),t.qZA(),t.YNc(20,Ye,1,2,"input",7),t.YNc(21,Be,2,2,"mat-select",8),t.qZA(),t.TgZ(22,"mat-form-field",4)(23,"mat-label"),t._uU(24,"Type"),t.qZA(),t.YNc(25,Ze,1,2,"input",7),t.YNc(26,Ue,2,2,"mat-select",9),t.qZA()(),t.TgZ(27,"p")(28,"mat-form-field",4)(29,"mat-label"),t._uU(30,"Category name"),t.qZA(),t.YNc(31,qe,1,2,"input",7),t.YNc(32,He,2,2,"mat-select",10),t.YNc(33,$e,2,0,"mat-error",6),t.qZA(),t.TgZ(34,"mat-form-field",4)(35,"mat-label"),t._uU(36,"Description"),t.qZA(),t._UZ(37,"input",11),t.qZA(),t.TgZ(38,"mat-form-field",4)(39,"mat-label"),t._uU(40,"Transaction time"),t.qZA(),t._UZ(41,"input",11),t.qZA()(),t.TgZ(42,"p"),t.YNc(43,Ge,4,1,"mat-form-field",12),t.TgZ(44,"mat-form-field",4)(45,"mat-label"),t._uU(46,"Equivalent amount"),t.qZA(),t.TgZ(47,"input",5),t.NdJ("input",function(o){return n.amountInputChanged(o)}),t.qZA(),t.YNc(48,Je,2,0,"mat-error",6),t.qZA(),t.TgZ(49,"mat-form-field",4)(50,"mat-label"),t._uU(51,"Equivalent currency code"),t.qZA(),t.YNc(52,Ke,1,2,"input",7),t.YNc(53,Xe,2,2,"mat-select",9),t.qZA()(),t.YNc(54,et,9,3,"p",6),t.YNc(55,tt,9,4,"p",6),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",!n.isView),t.xp6(10),t.Q6J("formControl",n.ctl.amount)("readonly",n.isView),t.xp6(1),t.Q6J("ngIf",n.form.hasError("amountAndEquivalentAmountHasDifferentSign")),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(5),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(1),t.Q6J("ngIf",n.ctl.categoryText.hasError("required")),t.xp6(4),t.Q6J("formControl",n.ctl.description)("readonly",n.isView),t.xp6(4),t.Q6J("formControl",n.ctl.transactionTime)("readonly",n.isView),t.xp6(2),t.Q6J("ngIf",!n.isView),t.xp6(4),t.Q6J("formControl",n.ctl.equivalentAmount)("readonly",n.isView),t.xp6(1),t.Q6J("ngIf",n.form.hasError("amountAndEquivalentAmountHasDifferentSign")),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView&&n.ctl.monobankTransactionId.value),t.xp6(1),t.Q6J("ngIf",n.isView))},dependencies:[w.sg,w.O5,D.rH,I.lW,C.TO,C.KE,C.hX,P.Nt,v.a8,v.dn,v.n5,j.Hw,Oe.gD,h.ey,c.Fj,c.wV,c.JJ,c.oH],styles:[".sticky-nav[_ngcontent-%COMP%]{position:fixed;width:100%;background-color:#eee;z-index:100}.nav-content[_ngcontent-%COMP%]{padding-top:85px}button.action[_ngcontent-%COMP%]{margin:10px 8px}mat-card[_ngcontent-%COMP%]{max-width:1000px;min-width:450px}"]}),a})();var at=d(8897),nt=d(2687),z=d(8184),it=d(4080),rt=d(5589),Y=d(7579);d(727),d(9521),d(1281),d(7340);let ct=(()=>{class a{constructor(){this.changes=new Y.x,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year"}formatYearRange(e,n){return`${e} \u2013 ${n}`}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const yt={provide:new t.OlP("mat-datepicker-scroll-strategy"),deps:[z.aV],useFactory:function Dt(a){return()=>a.scrollStrategies.reposition()}};let xt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[ct,yt],imports:[[w.ez,I.ot,z.U8,nt.rt,it.eL,h.BQ],rt.ZD]}),a})();const wt=[{path:"",component:Se},{path:"details/:id",component:Q},{path:"details",component:Q}];let kt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[w.ez,D.Bz.forChild(wt),at.m,c.UX,xt,h.XK,S.Tx]}),a})()}}]);