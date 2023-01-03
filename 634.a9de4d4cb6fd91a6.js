"use strict";(self.webpackChunka_finance_app=self.webpackChunka_finance_app||[]).push([[634],{6634:(It,Y,d)=>{d.r(Y),d.d(Y,{AmountOperationModule:()=>bt});var M=d(6895),D=d(1951);class J{constructor(i="",e="",n="",r=!1,o=!1,s=""){this.id=i,this.codename=e,this.name=n,this.isBase=r,this.isIncome=o,this.aliases=s}}var g=(()=>{return(a=g||(g={}))[a.usualOperation=0]="usualOperation",a[a.currencyExchange=1]="currencyExchange",a[a.loan=2]="loan",g;var a})(),w=d(6044),m=(()=>{return(a=m||(m={}))[a.CNY=156]="CNY",a[a.GBP=826]="GBP",a[a.USD=840]="USD",a[a.XAU=959]="XAU",a[a.XAG=961]="XAG",a[a.XPT=962]="XPT",a[a.EUR=978]="EUR",a[a.UAH=980]="UAH",a[a.PLN=985]="PLN",m;var a})(),t=d(4650),k=d(529),N=d(2340);let B=(()=>{class a{constructor(e){this.http=e,this.baseUrlForService=`${N.N.apiBaseUrl}Mono`}getMonoTransactions(e,n){let r=new k.LE;return n.orderByDescending&&(r=r.set("filter.orderByDescending",n.orderByDescending)),n.orderByField&&(r=r.set("filter.orderByField",n.orderByField)),r=r.set("pageLength",e.pageLength),r=r.set("pageNumber",e.pageNumber),this.http.get(`${this.baseUrlForService}`,{params:r})}getProcessingMonoTransactions(){this.http.post(`${this.baseUrlForService}/handle-new-transaction`,{}).subscribe(e=>console.log("handle-new-transaction executed"))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(k.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();class W{constructor(i,e){this.orderByDescending=i||!1,this.orderByField=e||"CreatedAt"}}var I=d(4859),v=d(3546),L=d(7392),_=d(671),X=d(8739),c=d(4006);let Z=(()=>{class a{constructor(e){this.http=e,this.baseUrlForService=`${N.N.apiBaseUrl}Amount`}getAmountOperations(e,n){let r=new k.LE;return r=r.set("filter.startDateTime",e.startDateTime),r=r.set("filter.endDateTime",e.endDateTime),e.isIncome&&(r=r.set("filter.isIncome",e.isIncome)),e.orderByDescending&&(r=r.set("filter.orderByDescending",e.orderByDescending)),e.orderByField&&(r=r.set("filter.orderByField",e.orderByField)),r=r.set("pageLength",n.pageLength),r=r.set("pageNumber",n.pageNumber),this.http.get(`${this.baseUrlForService}`,{params:r})}getAmountOperation(e){return this.http.get(`${this.baseUrlForService}/${e}`)}createAmountOperation(e){return this.http.post(`${this.baseUrlForService}`,e)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(k.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var S=d(5938);let ee=(()=>{class a{constructor(e){this.dialogRef=e,this.message=""}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(S.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-error"]],decls:3,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content","",3,"innerText"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Error occured!"),t.qZA(),t._UZ(2,"div",1)),2&e&&(t.xp6(2),t.Q6J("innerText",n.message))},dependencies:[S.uh,S.xY]}),a})(),te=(()=>{class a{constructor(e){this.dialog=e}httpError(e){return this.dialogRef=this.dialog.open(ee),this.dialogRef.componentInstance.message=`Response status code: ${e.status}\n${e.message}\n\nDetails:\n${JSON.stringify(e.error)}`,this.dialogRef.afterClosed()}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(S.uw))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var x=d(9549),O=d(4144),ae=d(6709);let ne=(()=>{class a{constructor(e,n,r){this.service=e,this.router=n,this.messages=r,this.search=new t.vpe,this.pageInfo=new w.S,this.ctl={startDateTime:new c.NI(""),endDateTime:new c.NI(""),orderByDescending:new c.NI(!0),orderByField:new c.NI("CreatedAt")},this.form=new c.cw(this.ctl);const o=new Date;this.ctl.startDateTime.setValue(o.toISOString().substring(0,8)+"01"),this.ctl.endDateTime.setValue(o.toISOString().substring(0,10))}ngOnInit(){this.doSearch()}ngOnChanges(e){(null!=e.pageInfo||null!=e.pageInfo)&&(this.pageInfo=e.pageInfo.currentValue,this.doSearch())}doSearch(){let e=this.form.getRawValue();this.service.getAmountOperations(e,this.pageInfo).subscribe(n=>{this.search.emit(n),this.router.navigateByUrl("/amount-operation")},n=>this.messages.httpError(n))}addAmountOperation(){this.router.navigateByUrl("/amount-operation/details")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(Z),t.Y36(D.F0),t.Y36(te))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-amount-operation-filter"]],inputs:{pageInfo:"pageInfo"},outputs:{search:"search"},features:[t.TTD],decls:22,vars:4,consts:[[1,"nav-content"],["appearance","standard",2,"min-width","240px","margin-right","20px"],["type","date","matInput","","placeholder","",3,"formControl"],[3,"checked","change"],["matInput","","placeholder","",3,"formControl"],["mat-raised-button","","color","primary",1,"action",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title"),t._uU(2," Filters "),t.qZA(),t.TgZ(3,"mat-card-content")(4,"mat-form-field",1)(5,"mat-label"),t._uU(6,"Start date time"),t.qZA(),t._UZ(7,"input",2),t.qZA(),t.TgZ(8,"mat-form-field",1)(9,"mat-label"),t._uU(10,"End date time"),t.qZA(),t._UZ(11,"input",2),t.qZA(),t.TgZ(12,"mat-checkbox",3),t.NdJ("change",function(o){return n.ctl.orderByDescending.setValue(o.checked)}),t._uU(13,"Order by descending"),t.qZA(),t.TgZ(14,"mat-form-field",1)(15,"mat-label"),t._uU(16,"Order by field"),t.qZA(),t._UZ(17,"input",4),t.qZA(),t.TgZ(18,"button",5),t.NdJ("click",function(){return n.doSearch()}),t._uU(19," Search "),t.qZA(),t.TgZ(20,"button",5),t.NdJ("click",function(){return n.addAmountOperation()}),t._uU(21," Add amount operation "),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("formControl",n.ctl.startDateTime),t.xp6(4),t.Q6J("formControl",n.ctl.endDateTime),t.xp6(1),t.Q6J("checked",!!n.ctl.orderByDescending.value&&n.ctl.orderByDescending.value),t.xp6(5),t.Q6J("formControl",n.ctl.orderByField))},dependencies:[I.lW,x.KE,x.hX,O.Nt,v.a8,v.dn,v.n5,ae.oG,c.Fj,c.JJ,c.oH],styles:[".mat-form-field[_ngcontent-%COMP%]{margin:10px}"]}),a})();function ie(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Amount"),t.qZA())}function re(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.amount," ")}}function oe(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Currency"),t.qZA())}function se(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.currencyCodeStr," ")}}function le(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Eq amount"),t.qZA())}function de(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.equivalentAmount," ")}}function ce(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Eq curr"),t.qZA())}function ue(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.equivalentCurrencyCodeStr," ")}}function pe(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Category name"),t.qZA())}function he(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.category.name," ")}}function me(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Created at"),t.qZA())}function _e(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.createdAt)," ")}}function ge(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Description"),t.qZA())}function fe(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function ve(a,i){1&a&&(t.TgZ(0,"th",19),t._uU(1,"Type"),t.qZA())}function De(a,i){if(1&a&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e.typeStr," ")}}function ye(a,i){1&a&&t._UZ(0,"th",19)}const Ce=function(a){return["details",a]};function be(a,i){if(1&a&&(t.TgZ(0,"td",21)(1,"button",22)(2,"mat-icon"),t._uU(3,"menu"),t.qZA()()()),2&a){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,Ce,e.id))}}function Ae(a,i){1&a&&t._UZ(0,"tr",23)}function Me(a,i){1&a&&t._UZ(0,"tr",24)}const j=function(){return["amount","currencyCode","equivalentAmount","equivalentCurrencyCode","categoryName","createdAt","description","type","actions"]},we=function(){return[10,15,25]};let xe=(()=>{class a{constructor(e){this.monoService=e,this.amountOperations=[],this.pageInfo=new w.S(15),this.totalItems=0}ngOnInit(){}handlePage(e){this.pageInfo=new w.S(e.pageSize,e.pageIndex)}setAllAmountOperations(e){this.amountOperations=e.items.map(n=>new ke(n)),this.totalItems=e.totalItems}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(B))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-amount-operation-list"]],decls:34,vars:12,consts:[[3,"pageInfo","search"],[1,"mat-elevation-z3"],["mat-table","",3,"dataSource"],["matColumnDef","amount"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","currencyCode"],["matColumnDef","equivalentAmount"],["matColumnDef","equivalentCurrencyCode"],["matColumnDef","categoryName"],["matColumnDef","createdAt"],["matColumnDef","description"],["matColumnDef","type"],["matColumnDef","actions"],["mat-cell","","style","text-align: right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions","showFirstLastButtons","length","pageIndex","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-cell","",2,"text-align","right"],["mat-icon-button","","mat-raised-button","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"app-amount-operation-filter",0),t.NdJ("search",function(o){return n.setAllAmountOperations(o)}),t.qZA(),t.TgZ(1,"mat-card",1)(2,"table",2),t.ynx(3,3),t.YNc(4,ie,2,0,"th",4),t.YNc(5,re,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,oe,2,0,"th",4),t.YNc(8,se,2,1,"td",5),t.BQk(),t.ynx(9,7),t.YNc(10,le,2,0,"th",4),t.YNc(11,de,2,1,"td",5),t.BQk(),t.ynx(12,8),t.YNc(13,ce,2,0,"th",4),t.YNc(14,ue,2,1,"td",5),t.BQk(),t.ynx(15,9),t.YNc(16,pe,2,0,"th",4),t.YNc(17,he,2,1,"td",5),t.BQk(),t.ynx(18,10),t.YNc(19,me,2,0,"th",4),t.YNc(20,_e,3,3,"td",5),t.BQk(),t.ynx(21,11),t.YNc(22,ge,2,0,"th",4),t.YNc(23,fe,2,1,"td",5),t.BQk(),t.ynx(24,12),t.YNc(25,ve,2,0,"th",4),t.YNc(26,De,2,1,"td",5),t.BQk(),t.ynx(27,13),t.YNc(28,ye,1,0,"th",4),t.YNc(29,be,4,3,"td",14),t.BQk(),t.YNc(30,Ae,1,0,"tr",15),t.YNc(31,Me,1,0,"tr",16),t.qZA(),t.TgZ(32,"mat-paginator",17,18),t.NdJ("page",function(o){return n.handlePage(o)}),t.qZA()()),2&e&&(t.Q6J("pageInfo",n.pageInfo),t.xp6(2),t.Q6J("dataSource",n.amountOperations),t.xp6(28),t.Q6J("matHeaderRowDef",t.DdM(9,j)),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(10,j)),t.xp6(1),t.Q6J("pageSize",n.pageInfo.pageLength)("pageSizeOptions",t.DdM(11,we))("showFirstLastButtons",!0)("length",n.totalItems)("pageIndex",n.pageInfo.pageNumber))},dependencies:[D.rH,I.lW,v.a8,L.Hw,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,X.NW,ne,M.uU],styles:["table[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{max-width:1400px;min-width:800px;box-sizing:border-box}mat-chip-list[_ngcontent-%COMP%]{display:inline-block}mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{font-size:10px;margin:auto}mat-chip-list[_ngcontent-%COMP%]   mat-chip.trace[_ngcontent-%COMP%]{background-color:#505050}mat-chip-list[_ngcontent-%COMP%]   mat-chip.debug[_ngcontent-%COMP%]{background-color:#b8b8b8}mat-chip-list[_ngcontent-%COMP%]   mat-chip.info[_ngcontent-%COMP%]{background-color:#f5f5f5}mat-chip-list[_ngcontent-%COMP%]   mat-chip.warn[_ngcontent-%COMP%]{background-color:#ff933b}mat-chip-list[_ngcontent-%COMP%]   mat-chip.error[_ngcontent-%COMP%]{background-color:#e46767;color:#fff}mat-chip-list[_ngcontent-%COMP%]   mat-chip.fatal[_ngcontent-%COMP%]{background-color:#e46767;color:#fff;border:3px solid black}.red[_ngcontent-%COMP%]{color:#e46767}.gray[_ngcontent-%COMP%]{color:#d3d3d3}mat-icon[_ngcontent-%COMP%]{padding:0 2px;cursor:pointer}.mat-column-level[_ngcontent-%COMP%], .mat-column-logger[_ngcontent-%COMP%]{padding-right:24px}.mat-column-message[_ngcontent-%COMP%]{font-style:italic;word-break:break-all}.mat-form-field[_ngcontent-%COMP%]{margin:10px}"]}),a})();class ke extends class K{constructor(i="",e=0,n=0,r="",o="",s="",l="",p,f,C,b=0,A=new J,R){this.id=i,this.amount=e,this.currencyCode=n,this.categoryId=r,this.createdAt=o,this.rawText=s,this.userId=l,this.equivalentAmount=p,this.equivalentCurrencyCode=f,this.description=C,this.type=b,this.category=A,this.monobankTransactionId=R,this.typeString=g[this.type]}}{constructor(i){super(i.id,i.amount,i.currencyCode,i.categoryId,i.createdAt,i.rawText,i.userId,i.equivalentAmount,i.equivalentCurrencyCode,i.description,i.type,i.category),this.equivalentCurrencyCodeStr="",this.currencyCodeStr=m[this.currencyCode],this.equivalentCurrencyCode&&(this.equivalentCurrencyCodeStr=m[this.equivalentCurrencyCode]),this.typeStr=g[this.type]}}var Ie=d(5861),U=d(8447),Se=d(9808);class Ve extends class Ee{constructor(i,e,n,r,o,s,l,p,f,C,b,A,R,G,At,Mt,wt,xt,kt){this.id=i,this.createAt=e,this.monoTransactionId=n,this.time=r,this.userApprovalTransaction=o,this.mcc=s,this.originalMcc=l,this.hold=p,this.amount=f,this.operationAmount=C,this.currencyCode=b,this.commissionRate=A,this.cashbackAmount=R,this.balance=G,this.description=At,this.comment=Mt,this.receiptId=wt,this.counterEdrpou=xt,this.counterIban=kt,this.id=i,this.createAt=e,this.monoTransactionId=n,this.time=r,this.mcc=s,this.originalMcc=l,this.hold=p,this.amount=f,this.operationAmount=C,this.currencyCode=b,this.commissionRate=A,this.cashbackAmount=R,this.balance=G,this.userApprovalTransaction=o}}{constructor(i){super(i.id,i.createAt,i.monoTransactionId,i.time,i.userApprovalTransaction,i.mcc,i.originalMcc,i.hold,i.amount,i.operationAmount,i.currencyCode,i.commissionRate,i.cashbackAmount,i.balance,i.description,i.comment,i.receiptId,i.counterEdrpou,i.counterIban),this.currencyCodeStr=m[i.currencyCode],this.timeStr=new Date(1e3*this.time).toString()}}var Te=d(4385),h=d(3238);function Re(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.save())}),t._uU(1," Save "),t.qZA()}}function Oe(a,i){if(1&a&&t._UZ(0,"input",9),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.currencyCodeStr)("readonly",e.isView)}}function Fe(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.code),t.xp6(1),t.hij("",e.name," ")}}function Pe(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",14),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.currencyCode.setValue(r))}),t.YNc(1,Fe,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("value",e.ctl.currencyCode.value),t.xp6(1),t.Q6J("ngForOf",e.currencies)}}function Ye(a,i){if(1&a&&t._UZ(0,"input",9),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.typeStr)("readonly",e.isView)}}function Ne(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.code),t.xp6(1),t.hij(" ",e.name," ")}}function Be(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",14),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.type.setValue(r))}),t.YNc(1,Ne,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("value",0),t.xp6(1),t.Q6J("ngForOf",e.amountOperationArray)}}function Le(a,i){if(1&a&&t._UZ(0,"input",9),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.categoryText)("readonly",e.isView)}}function Ze(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.name),t.xp6(1),t.hij(" ",e.name+" ("+e.aliases+")"," ")}}function je(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",17),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.categoryText.setValue(r))}),t.YNc(1,Ze,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.viewCategories)}}function Ue(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.amount+" UAH "+e.description+" "+e.timeStr," ")}}function He(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",17),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw(2);return t.KtG(o.setMonoTransaction(r))}),t.YNc(1,Ue,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.monoTransactions)}}function qe(a,i){if(1&a&&(t.TgZ(0,"mat-form-field",4)(1,"mat-label"),t._uU(2,"MonoTransaction"),t.qZA(),t.YNc(3,He,2,1,"mat-select",8),t.qZA()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",!e.isView)}}function $e(a,i){if(1&a&&t._UZ(0,"input",9),2&a){const e=t.oxw();t.Q6J("formControl",e.ctl.equivalentCurrencyCodeStr)("readonly",e.isView)}}function Qe(a,i){if(1&a&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("value",e.code),t.xp6(1),t.hij("",e.name," ")}}function ze(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"mat-select",14),t.NdJ("valueChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.ctl.equivalentCurrencyCode.setValue(r))}),t.YNc(1,Qe,2,2,"mat-option",15),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("value",e.ctl.equivalentCurrencyCode.value),t.xp6(1),t.Q6J("ngForOf",e.currencies)}}function Ge(a,i){if(1&a&&(t.TgZ(0,"p")(1,"mat-form-field",4)(2,"mat-label"),t._uU(3,"Commission rate"),t.qZA(),t._UZ(4,"input",11),t.qZA(),t.TgZ(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Commission currency code"),t.qZA(),t._UZ(8,"input",18),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("formControl",e.ctl.commissionRate)("readonly",e.isView),t.xp6(4),t.Q6J("readonly",e.isView)}}function Je(a,i){if(1&a&&(t.TgZ(0,"p")(1,"mat-form-field",4)(2,"mat-label"),t._uU(3,"Created at"),t.qZA(),t._UZ(4,"input",9),t.qZA(),t.TgZ(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Raw text"),t.qZA(),t._UZ(8,"input",9),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("formControl",e.ctl.createdAt)("readonly",e.isView),t.xp6(4),t.Q6J("formControl",e.ctl.rawText)("readonly",e.isView)}}let H=(()=>{class a{constructor(e,n,r,o,s){this.service=e,this.route=n,this.router=r,this.categoryService=o,this.monoService=s,this.isView=!0,this.ctl={amount:new c.NI(0),currencyCode:new c.NI(m.UAH),currencyCodeStr:new c.NI(""),description:new c.NI(""),categoryText:new c.NI(""),type:new c.NI(0),typeStr:new c.NI(""),transactionTime:new c.NI((new Date).toISOString()),monobankTransactionId:new c.NI(""),equivalentAmount:new c.NI(0),equivalentCurrencyCode:new c.NI(0),equivalentCurrencyCodeStr:new c.NI(""),commissionRate:new c.NI(0),rawText:new c.NI(""),createdAt:new c.NI("")},this.form=new c.cw(this.ctl),this.currencies=[],this.amountOperationArray=[],this.categories=[],this.viewCategories=[],this.monoTransactions=[];for(let l of Object.keys(g).filter(p=>!isNaN(Number(p))))this.amountOperationArray.push({name:g[parseInt(l)],code:parseInt(l)});for(let l of Object.keys(m).filter(p=>!isNaN(Number(p))))this.currencies.push({name:m[parseInt(l)],code:parseInt(l)})}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e?this.service.getAmountOperation(e).subscribe(n=>{this.form.patchValue(n);let r=this.currencies.find(({code:o})=>o===this.ctl.currencyCode.value);this.ctl.currencyCodeStr.setValue(r?.name?r.name:"unknown"),this.ctl.categoryText.setValue(`${n.category.name} (${n.category.aliases})`),this.ctl.typeStr.setValue(g[this.ctl.type.value?this.ctl.type.value:g.currencyExchange]),this.ctl.equivalentCurrencyCode.value&&0!==this.ctl.equivalentCurrencyCode.value&&(r=this.currencies.find(({code:o})=>o===this.ctl.equivalentCurrencyCode.value),this.ctl.equivalentCurrencyCodeStr.setValue(r?.name?r.name:"unknown"))}):(this.isView=!1,this.categoryService.getCategories(new U.f,new w.S(999)).subscribe(n=>{this.categories=n.items,this.viewCategories=n.items}),this.monoService.getMonoTransactions(new w.S(50),new W(!0,"CreatedAt")).subscribe(n=>{this.monoTransactions=n.items.map(r=>new Ve(r)),this.monoTransactions=this.monoTransactions.sort((r,o)=>o.time-r.time)}))}save(){var e=this;return(0,Ie.Z)(function*(){let n=e.form.getRawValue();console.log(n);var r=yield(0,Se.n)(e.service.createAmountOperation(n));console.log(r),e.router.navigateByUrl("/amount-operation")})()}setMonoTransaction(e){if(e){this.ctl.monobankTransactionId.setValue(e);const n=this.monoTransactions.find(({id:r})=>r===e);n?(this.viewCategories=this.categories.filter(n.amount<0?r=>!1===r.isIncome:r=>!0===r.isIncome),this.ctl.amount.setValue(n.amount),this.ctl.currencyCode.setValue(m.UAH),this.ctl.equivalentAmount.setValue(n.operationAmount),this.ctl.equivalentCurrencyCode.setValue(n.currencyCode),this.ctl.equivalentCurrencyCodeStr.setValue(m[n.currencyCode]),this.ctl.transactionTime.setValue(new Date(1e3*n.time).toISOString()),this.ctl.description.setValue(n.description?n.description:""),this.ctl.commissionRate.setValue(n.commissionRate)):this.viewCategories=this.categories}}amountInputChanged(){console.log("tat"),console.log(this.ctl.amount.value)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(Z),t.Y36(D.gz),t.Y36(D.F0),t.Y36(U.H),t.Y36(B))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-amount-operation-details"]],decls:53,vars:20,consts:[[1,"sticky-nav"],["mat-raised-button","","routerLink","/amount-operation",1,"action"],["mat-raised-button","","class","action","color","primary",3,"click",4,"ngIf"],[1,"nav-content"],["appearance","standard",2,"min-width","240px","margin-right","20px"],["matInput","","type","number",3,"formControl","readonly","change"],["matInput","",3,"formControl","readonly",4,"ngIf"],[3,"value","valueChange",4,"ngIf"],[3,"valueChange",4,"ngIf"],["matInput","",3,"formControl","readonly"],["appearance","standard","style","min-width: 240px; margin-right: 20px",4,"ngIf"],["matInput","","type","number",3,"formControl","readonly"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"action",3,"click"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"valueChange"],["matInput","","value","'UAH'",3,"readonly"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon"),t._uU(3,"keyboard_backspace"),t.qZA(),t._uU(4," To amount operations "),t.qZA(),t.YNc(5,Re,2,0,"button",2),t.qZA(),t.TgZ(6,"mat-card",3)(7,"mat-card-title")(8,"p"),t._uU(9,"Amount operation details"),t.qZA()(),t.TgZ(10,"mat-card-content")(11,"p")(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"Amount"),t.qZA(),t.TgZ(15,"input",5),t.NdJ("change",function(){return n.amountInputChanged()}),t.qZA()(),t.TgZ(16,"mat-form-field",4)(17,"mat-label"),t._uU(18,"Currency code"),t.qZA(),t.YNc(19,Oe,1,2,"input",6),t.YNc(20,Pe,2,2,"mat-select",7),t.qZA(),t.TgZ(21,"mat-form-field",4)(22,"mat-label"),t._uU(23,"Type"),t.qZA(),t.YNc(24,Ye,1,2,"input",6),t.YNc(25,Be,2,2,"mat-select",7),t.qZA()(),t.TgZ(26,"p")(27,"mat-form-field",4)(28,"mat-label"),t._uU(29,"Category name"),t.qZA(),t.YNc(30,Le,1,2,"input",6),t.YNc(31,je,2,1,"mat-select",8),t.qZA(),t.TgZ(32,"mat-form-field",4)(33,"mat-label"),t._uU(34,"Description"),t.qZA(),t._UZ(35,"input",9),t.qZA(),t.TgZ(36,"mat-form-field",4)(37,"mat-label"),t._uU(38,"Transaction time"),t.qZA(),t._UZ(39,"input",9),t.qZA()(),t.TgZ(40,"p"),t.YNc(41,qe,4,1,"mat-form-field",10),t.TgZ(42,"mat-form-field",4)(43,"mat-label"),t._uU(44,"Equivalent amount"),t.qZA(),t._UZ(45,"input",11),t.qZA(),t.TgZ(46,"mat-form-field",4)(47,"mat-label"),t._uU(48,"Equivalent currency code"),t.qZA(),t.YNc(49,$e,1,2,"input",6),t.YNc(50,ze,2,2,"mat-select",7),t.qZA()(),t.YNc(51,Ge,9,3,"p",12),t.YNc(52,Je,9,4,"p",12),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",!n.isView),t.xp6(10),t.Q6J("formControl",n.ctl.amount)("readonly",n.isView),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(5),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(4),t.Q6J("formControl",n.ctl.description)("readonly",n.isView),t.xp6(4),t.Q6J("formControl",n.ctl.transactionTime)("readonly",n.isView),t.xp6(2),t.Q6J("ngIf",!n.isView),t.xp6(4),t.Q6J("formControl",n.ctl.equivalentAmount)("readonly",n.isView),t.xp6(4),t.Q6J("ngIf",n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(1),t.Q6J("ngIf",!n.isView),t.xp6(1),t.Q6J("ngIf",n.isView))},dependencies:[M.sg,M.O5,D.rH,I.lW,x.KE,x.hX,O.Nt,v.a8,v.dn,v.n5,L.Hw,Te.gD,h.ey,c.Fj,c.wV,c.JJ,c.oH],styles:[".sticky-nav[_ngcontent-%COMP%]{position:fixed;width:100%;background-color:#eee;z-index:100}.nav-content[_ngcontent-%COMP%]{padding-top:85px}button.action[_ngcontent-%COMP%]{margin:10px 8px}mat-card[_ngcontent-%COMP%]{max-width:1000px;min-width:450px}"]}),a})();var Ke=d(8897),We=d(2687),q=d(8184),Xe=d(4080),et=d(1218),F=d(7579);d(727),d(9521),d(1281),d(7340);let rt=(()=>{class a{constructor(){this.changes=new F.x,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year"}formatYearRange(e,n){return`${e} \u2013 ${n}`}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const _t={provide:new t.OlP("mat-datepicker-scroll-strategy"),deps:[q.aV],useFactory:function mt(a){return()=>a.scrollStrategies.reposition()}};let yt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[rt,_t],imports:[[M.ez,I.ot,q.U8,We.rt,Xe.eL,h.BQ],et.ZD]}),a})();const Ct=[{path:"",component:xe},{path:"details/:id",component:H},{path:"details",component:H}];let bt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[M.ez,D.Bz.forChild(Ct),Ke.m,c.UX,yt,h.XK]}),a})()}}]);