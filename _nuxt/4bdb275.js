(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2],{1443:function(t,e,n){var content=n(1448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(136).default)("dfab5b2a",content,!0,{sourceMap:!1})},1447:function(t,e,n){"use strict";n(1443)},1448:function(t,e,n){var r=n(135)(!1);r.push([t.i,".expand-row[data-v-39f830cd]{margin-bottom:16px}",""]),t.exports=r},1449:function(t,e,n){"use strict";n.r(e);var r=n(52),o={name:"ExpandRow",props:{name:{type:String,default:null},comment:{type:String,default:null},label:{type:String,default:null}},data:function(){return{splitToArray:r.g,randomLabelColor:r.d}}},l=(n(1447),n(134)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Divider",[t._v(" "+t._s(t.name)+" ")]),t._v(" "),n("Row",{staticClass:"expand-row"},[n("Col",{attrs:{span:"24"}},[n("span",{staticClass:"expand-value"},[n("Tag",{attrs:{type:"dot",color:t.randomLabelColor(t.name)}},[t._v(" "+t._s(t.name)+" ")])],1),t._v(" "),t.label?n("span",t._l(t.splitToArray(t.label),(function(e){return n("Tag",{key:e,attrs:{color:t.randomLabelColor(e)}},[t._v("\n          "+t._s(e)+"\n        ")])})),1):t._e()])],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"24"}},[n("span",{staticClass:"expand-value"},[t._v(t._s(t.comment))])])],1)],1)}),[],!1,null,"39f830cd",null);e.default=component.exports},1481:function(t,e,n){"use strict";n.r(e);n(100),n(83),n(111),n(70),n(94),n(121),n(112),n(113);var r=n(403),o=n(1449);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={name:"Game",data:function(){return{showBorder:!1,showStripe:!1,showHeader:!0,showIndex:!1,fixedHeader:!1,tableSize:"default",game:r.e}},computed:{getSummary:function(){var t=this,e=r.e.filter((function(t){return null!=t.time&&parseFloat(t.time)>0}));return{count_total:r.e.length,count_done:r.e.filter((function(t){return"done"===t.status})).length,count_doing:r.e.filter((function(t){return"doing"===t.status})).length,count_todo:r.e.filter((function(t){return"todo"===t.status})).length,time_count:e.length,time_total:this.sum(e),time_max:r.e.filter((function(n){return n.name===t.max(e)}))[0].time,time_max_name:this.max(r.e.filter((function(t){return null!=t.time}))),rating_5:r.e.filter((function(t){return 5===parseInt(t.rate)})).length}},gameColumns:function(){var t=this,e=[];return e.push({type:"expand",width:50,render:function(t,e){return t(o.default,{props:{name:e.row.name,comment:e.row.comment,label:e.row.label}})}}),this.showIndex&&e.push({type:"index",align:"center"}),e.push({title:this.$t("game.name"),key:"name"}),e.push({title:this.$t("game.status"),key:"status",render:function(e,n){var r="";"doing"===n.row.status?r="primary":"todo"===n.row.status?r="warning":"disabled"===n.row.status?r="#808695":"done"===n.row.status?r="success":"aborted"===n.row.status?r="error":"returning"===n.row.status&&(r="#2db7f5");var o="";return"doing"===n.row.status?o=t.$t("game.doing"):"todo"===n.row.status?o=t.$t("game.todo"):"disabled"===n.row.status?o=t.$t("game.disabled"):"done"===n.row.status?o=(n.row.date,t.$t("game.done")):"aborted"===n.row.status?o=t.$t("game.aborted"):"returning"===n.row.status&&(o=t.$t("game.returning")),e("Tag",{props:{color:r},style:{margin:"0 10px 0 10px"}},o)}}),e.push({title:this.$t("game.rate"),key:"rate",sortable:!0,render:function(t,e){return t("Rate",{props:{disabled:!0,value:parseInt(e.row.rate)}})},sortMethod:function(a,b,t){return"asc"===t?parseInt(a)-parseInt(b):"desc"===t?parseInt(b)-parseInt(a):void 0},filters:[{label:"".concat(this.$t("game.rate")," ≥ 3"),value:1},{label:"".concat(this.$t("game.rate")," ≤ 3"),value:2}],filterMultiple:!1,filterMethod:function(t,e){return 1===t?parseInt(e.rate)>=3:2===t?parseInt(e.rate)<=3:void 0}}),e}},mounted:function(){this.$Message.info({content:this.$t("game.message"),duration:10,closable:!0}),this.$Message.error({content:this.$t("game.warning"),duration:10,closable:!0})},methods:{sum:function(t){var e,n=0,r=l(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;n+=parseFloat(o.time)}}catch(t){r.e(t)}finally{r.f()}return n},max:function(t){var e,n=-1,r="",o=l(t);try{for(o.s();!(e=o.n()).done;){var c=e.value,d=parseFloat(c.time);d>n&&(n=d,r=c.name)}}catch(t){o.e(t)}finally{o.f()}return r}}},m=n(134),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Alert",{attrs:{type:"info","show-icon":""}},[n("template",{slot:"desc"},[n("p",[t._v("\n        "+t._s(t.$t("game.summary_count",{count_total:t.getSummary.count_total,count_done:t.getSummary.count_done,count_doing:t.getSummary.count_doing,count_todo:t.getSummary.count_todo}))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("game.summary_rating",{rating_5:t.getSummary.rating_5}))+"\n      ")])])],2),t._v(" "),n("Table",{attrs:{border:t.showBorder,stripe:t.showStripe,"show-header":t.showHeader,height:t.fixedHeader?250:"",size:t.tableSize,data:t.game,columns:t.gameColumns}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);