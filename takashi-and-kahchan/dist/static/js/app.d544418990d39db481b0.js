webpackJsonp([0],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:"/"}},[this._v("Home")]),this._v(" "),e("router-link",{attrs:{to:"/contents/TimeTravel"}},[this._v("TimeTravel")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("TSX7")},null,null).exports,s=n("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Home")])},staticRenderFns:[]};var a=n("VU/8")({name:"Home"},c,!1,function(t){n("eqBU")},"data-v-2984e7bd",null).exports,u=n("Qkc5"),d=n.n(u),v={name:"TimeTravel",data:function(){return{msg:"hoge",counter:0,token:d.a,story:""}},methods:{hoge:function(){this.counter+=1;var t=this.counter;this.story=d.a.story.find(function(e){return e.idx===t}).contents}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.hoge}},[n("p",[t._v("適当にクリックすると次の文章が表示されます")]),t._v(" "),n("h1",[t._v("J( ‘ｰ`)し「たかしへ。時空を超えて、あなたを立派に育てます」")]),t._v(" "),n("p",[t._v(t._s(t.counter)+"回押されたよ")]),t._v(" "),n("p",[t._v(t._s(t.story))])])},staticRenderFns:[]};var l=n("VU/8")(v,p,!1,function(t){n("rm+T")},"data-v-657d1fd0",null).exports;o.a.use(s.a);var m=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:a},{path:"/contents/TimeTravel",name:"TimeTravel",component:l}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:m,components:{App:i},template:"<App/>"})},Qkc5:function(t,e){t.exports={story:[{idx:1,contents:"(‘A`)「おいBBA！飯まだかよ！」"},{idx:2,contents:"J( ‘ｰ`)し「ごめんねたかし」"},{idx:3,contents:"(‘A`)「ったく…早くしろよ」"},{idx:4,contents:"J( ‘ｰ`)し「ごめんね、もうすぐできるからね」"},{idx:5,contents:"(‘A`)「チッ」"},{idx:6,contents:"J( ‘ｰ`)し「あ、たかし…」"},{idx:7,contents:"(‘A`)「あ？」"},{idx:8,contents:"J( ‘ｰ`)し「前からよく出かけてるけど…何をしてるの？」"},{idx:9,contents:"(‘A`)「……」"},{idx:10,contents:"(‘A`)「…テメエには関係ねえだろが。文句あっか」"},{idx:11,contents:"J( ‘ｰ`)し「そう、ごめんなさい…」"}]}},TSX7:function(t,e){},eqBU:function(t,e){},"rm+T":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d544418990d39db481b0.js.map