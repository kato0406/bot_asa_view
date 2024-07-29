(function(){"use strict";var t={3044:function(t,e,a){var n=a(5130),l=(a(4114),a(6768)),o=a(4373),s=a(1576),r=a.n(s),c=a(144);const u=(0,l.Lk)("div",{class:"ms-3 mt-3"},[(0,l.eW)(" スプレッドシート"),(0,l.Lk)("br"),(0,l.Lk)("a",{href:"https://docs.google.com/spreadsheets/d/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/edit#gid=508960181"},"https://docs.google.com/spreadsheets/d/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/edit#gid=508960181")],-1),d={class:"d-flex justify-content-center align-items-center",style:{height:"100vh"}},i={key:0,class:"card w-50 h-50"},k=(0,l.Lk)("div",{class:"card-header"},"① 出席確認",-1),b=(0,l.Lk)("div",{class:"card-body"},[(0,l.Lk)("p",null,[(0,l.eW)(" 出席確認をしましょう"),(0,l.Lk)("br"),(0,l.eW)(" 欠席者がいる場合は下記のシートに⚪︎を入れてください"),(0,l.Lk)("br"),(0,l.Lk)("a",{href:"https://docs.google.com/spreadsheets/d/1SunBnF6VW01kVOve5EFyxIBU69G0cMOetKqyUcGXVGw/edit#gid=0",target:"_blank"},"https://docs.google.com/spreadsheets/d/1SunBnF6VW01kVOve5EFyxIBU69G0cMOetKqyUcGXVGw/edit#gid=0")])],-1),f={key:1,class:"card w-50 h-50"},v=(0,l.Lk)("div",{class:"card-header"},"② 当日期限のチケット確認",-1),p={class:"card-body"},h=["href"],L=(0,l.Lk)("br",null,null,-1),g={key:2,class:"card w-50 h-50"},y=(0,l.Lk)("div",{class:"card-header"},"③ 期限切れのチケット確認",-1),m={class:"card-body"},C=["href"],w=(0,l.Lk)("br",null,null,-1),O={key:3,class:"card w-50 h-50"},E=(0,l.Lk)("div",{class:"card-header"},"④ 前営業日作成のチケット確認",-1),G={class:"card-body"},_=["href"],Y=(0,l.Lk)("br",null,null,-1),R={key:4,class:"card w-50 h-50"},X=(0,l.Lk)("div",{class:"card-header"},"⑤ チケット全体状況確認 ※月曜のみ確認",-1),$={class:"card-body"},j=(0,l.Lk)("p",null,[(0,l.Lk)("a",{href:"https://wollllll.github.io/bot_count_issues/?tab=0",target:"_blank"},"チケット集計ツール君"),(0,l.Lk)("br"),(0,l.eW)(" 全体のチケット状況を見て違和感のある所を司会者が指摘 例) ○さんの担当チケットが多い、○さんの期限切れチケットが多いなど ")],-1),U=["href"],V=(0,l.Lk)("br",null,null,-1),x=(0,l.Lk)("p",null,[(0,l.Lk)("a",{href:"https://docs.google.com/spreadsheets/d/13F7JiilPWd-gsVlIoX-oRbpqM2edaoSzYGB7JECElOY/edit#gid=2080367252プレビュー\nhttps://valeur.backlog.jp/alias/wiki/1247821",target:"_blank"},"勉強会URL"),(0,l.Lk)("br")],-1),D={key:5,class:"card w-50 h-50"},M=(0,l.Lk)("div",{class:"card-header"},"⑥ 全体確認",-1),Q=(0,l.Lk)("div",{class:"card-body"},[(0,l.Lk)("p",null,[(0,l.eW)(" 健康診断"),(0,l.Lk)("br"),(0,l.Lk)("a",{href:"https://docs.google.com/spreadsheets/d/1dtpwrU48JVUT4PGYN0kellqaEkl8G6wG21Yh8Nnl2Vg/edit#gid=1366779378"},"https://docs.google.com/spreadsheets/d/1dtpwrU48JVUT4PGYN0kellqaEkl8G6wG21Yh8Nnl2Vg/edit#gid=1366779378")])],-1),S={key:6,class:"card w-50 h-50"},W=(0,l.Lk)("div",{class:"card-header"},"⑦ 運動",-1),q=(0,l.Lk)("div",{class:"card-body"},[(0,l.Lk)("p",null,"杉山さんお願いします")],-1),A="https://valeur.backlog.jp/FindIssueAllOver.action?sort=LIMIT_DATE&order=false&simpleSearch=false&allOver=true&startDate.unspecified=false&limitDate.unspecified=false&",I="https://sheets.googleapis.com/v4/spreadsheets/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/values/?sheet!?range?key=AIzaSyBhzOrlCWAfu2nBXzE6-YMbk4ktEE8Fbx4";var K={__name:"App",setup(t){const e=(0,c.KR)(1),a=(0,c.KR)(),n=(0,c.KR)(),s=(0,c.KR)(),K=(0,c.KR)(),B=(t,e)=>I.replace("?sheet",t).replace("?range",e),P=async()=>{const t=(await o.A.get(B("URL","E2:G1000"))).data.values,e=(await o.A.get(B("URL","A2:C1000"))).data.values,a=[],n=[],l=[];for(const o of t)"0"===o[2]?l.push(o[0]):a.push(o[0]);for(const o of e)"0"!==o[2]&&n.push(o[0]);return{url:`${A}${n.map((t=>`projectId=${t}&`)).join("")}${a.map((t=>`statusId=${t}&`)).join("")}`,mondayUrl:`${A}${n.map((t=>`projectId=${t}&`)).join("")}${l.map((t=>`statusId=${t}&`)).join("")}`}},F=()=>{7!==e.value?e.value=e.value+1:e.value=1},T=()=>{1!==e.value?e.value=e.value-1:e.value=7};return(async()=>{const t=await P(),e=t.url,l=t.mondayUrl,o=r()(),c=r()().format("YYYY/MM/DD"),u=o.subtract(1,"d").format("YYYY/MM/DD"),d=o.subtract(3,"d").format("YYYY/MM/DD");a.value=`${e}limitDateRange.begin=${c}&limitDateRange.end=${c}`,n.value=`${e}limitDateRange.end=${u}`,s.value=`${e}createdRange.begin=${1===r()().day()?d:u}&createdRange.end=${c}`,K.value=l})(),(t,o)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[u,(0,l.Lk)("div",d,[1===e.value?((0,l.uX)(),(0,l.CE)("div",i,[k,b,(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0),2===e.value?((0,l.uX)(),(0,l.CE)("div",f,[v,(0,l.Lk)("div",p,[(0,l.Lk)("p",null,[(0,l.Lk)("a",{href:a.value,target:"_blank"},"チケットURL",8,h),L,(0,l.eW)(" ステータスが未対応状態なチケットはないかや未対応の場合はキャッチアップできているかの確認をすることで対応漏れを防ぐ ")])]),(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0),3===e.value?((0,l.uX)(),(0,l.CE)("div",g,[y,(0,l.Lk)("div",m,[(0,l.Lk)("p",null,[(0,l.Lk)("a",{href:n.value,target:"_blank"},"チケットURL",8,C),w,(0,l.eW)(" スケジュールや先方を待たせていないかなどの対応状況に問題ないかの確認をすることで対応漏れの防止やスケジュール調整をする ")])]),(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0),4===e.value?((0,l.uX)(),(0,l.CE)("div",O,[E,(0,l.Lk)("div",G,[(0,l.Lk)("p",null,[(0,l.Lk)("a",{href:s.value,target:"_blank"},"チケットURL",8,_),Y,(0,l.eW)(" お客様起票のチケットがないかや優先度が高となっているチケットがあれば担当者がキャッチアップできているか、担当者や期限日が設定されているかの確認をすることでチケット管理できるようにする ")])]),(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0),5===e.value?((0,l.uX)(),(0,l.CE)("div",R,[X,(0,l.Lk)("div",$,[j,(0,l.Lk)("p",null,[(0,l.Lk)("a",{href:K.value,target:"_blank"},"処理済みチケットURL",8,U),V,(0,l.eW)(" 1ヶ月以上残っているチケットはお客様起票の場合は先方が忘れている可能性があるため、打診する必要があるかの確認や、お客様起票以外の場合は完了にできるチケットはないかの確認をすることで放置チケットが無いようにする ")]),x]),(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0),6===e.value?((0,l.uX)(),(0,l.CE)("div",D,[M,Q,(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0),7===e.value?((0,l.uX)(),(0,l.CE)("div",S,[W,q,(0,l.Lk)("div",{class:"card-footer text-end"},[(0,l.Lk)("button",{onClick:T,type:"button",class:"btn"},"前のページ"),(0,l.Lk)("button",{onClick:F,type:"button",class:"btn"},"次のページ")])])):(0,l.Q3)("",!0)])],64))}};const B=K;var P=B;a(8077),a(9953);(0,n.Ef)(P).mount("#app")}},e={};function a(n){var l=e[n];if(void 0!==l)return l.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,l,o){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],l=t[d][1],o=t[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(r=!1,o<s&&(s=o));if(r){t.splice(d--,1);var u=l();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,l,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,o,s=n[0],r=n[1],c=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(c)var d=c(a)}for(e&&e(n);u<s.length;u++)o=s[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkasa_bot_desu"]=self["webpackChunkasa_bot_desu"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(3044)}));n=a.O(n)})();
//# sourceMappingURL=app.f22a613e.js.map