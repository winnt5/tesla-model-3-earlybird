(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,a,t){},191:function(e,a,t){e.exports=t(354)},196:function(e,a,t){e.exports=t.p+"static/media/compare-model3--center.2d32f04f.png"},222:function(e,a,t){},354:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(36),c=t.n(r),o=(t(118),t(73)),m=t(74),i=t(82),u=t(75),s=t(84),E=t(363),d=t(179),p=t(369),_=(t(196),t(110)),h=t(370),C=t(361),f=t(367),w=t(362),k=t(364),g=t(365),y=t(368),b=t(366),v=t(371),H=t(106),x=t.n(H),I=t(107),T=t.n(I),S=(t(222),function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={trims:[],options:{color:[],interior:[],wheal:[],autopilot:[]},saletex:{"\uac1c\ubcc4\uc18c\ube44\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\uad50\uc721\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\ucde8\ub4dd\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0}},loadingA:!0,loadingB:!0,performance_index:-1,base_selected:0,base_price:0,color_selected:0,color_price:0,wheal_selected:0,wheal_price:0,interior_selected:0,interior_price:0,autopilot_price:0,total_price:0,ev_sale_price:1400,final_price:0},t.usdTokrw=function(e){return(1134.72*e).toFixed(0)},t.comma=function(e){return Number(e).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},t.calcTotalPrice=function(){return t.setState(function(e){return{total_price:1.1*(Number(e.base_price)+Number(e.color_price)+Number(e.wheal_price)+Number(e.interior_price)+Number(e.autopilot_price))}})},t.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138=function(){return t.state.total_price*t.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138},t.\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74=function(){return Math.min(t.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138(),t.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74)},t.\uad50\uc721\uc138_\uacfc\uc138=function(){return t.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138()*t.state.saletex.\uad50\uc721\uc138.\uacfc\uc138},t.\uad50\uc721\uc138_\uac10\uba74=function(){return Math.min(t.\uad50\uc721\uc138_\uacfc\uc138(),t.state.saletex.\uad50\uc721\uc138.\uac10\uba74)},t.\ucde8\ub4dd\uc138_\uacfc\uc138=function(){return.9*t.state.total_price*t.state.saletex.\ucde8\ub4dd\uc138.\uacfc\uc138},t.\ucde8\ub4dd\uc138_\uac10\uba74=function(){return Math.min(t.\ucde8\ub4dd\uc138_\uacfc\uc138(),t.state.saletex.\ucde8\ub4dd\uc138.\uac10\uba74)},t.\uc804\uae30\ucc28_\ubcf4\uc870\uae08=function(){return 1e4*t.state.ev_sale_price},t.\ucd5c\uc885\uac00\uaca9=function(){return Math.max(t.state.total_price+.1*t.state.total_price+t.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138()-t.\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74()+t.\uad50\uc721\uc138_\uacfc\uc138()-t.\uad50\uc721\uc138_\uac10\uba74()+t.\ucde8\ub4dd\uc138_\uacfc\uc138()-t.\ucde8\ub4dd\uc138_\uac10\uba74()-t.\uc804\uae30\ucc28_\ubcf4\uc870\uae08(),0)},t}return Object(s.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/model_3.yaml").then(function(a){var t=T.a.parse(a.data);e.setState({trims:t.trims,options:t.options,base_price:e.usdTokrw(t.trims[0]["\uac00\uaca9"]),base_selected:0,loadingA:!1}),t.trims.map(function(a,t){"Performance"===a["\uc774\ub984"]&&e.setState({performance_index:t})}),e.calcTotalPrice()}),x.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/saletex.yaml").then(function(a){var t=T.a.parse(a.data);console.log(t),e.setState({saletex:{"\uac1c\ubcc4\uc18c\ube44\uc138":{"\uacfc\uc138":t["\uac1c\ubcc4\uc18c\ube44\uc138"]["\uacfc\uc138"],"\uac10\uba74":t["\uac1c\ubcc4\uc18c\ube44\uc138"]["\uac10\uba74"]},"\uad50\uc721\uc138":{"\uacfc\uc138":t["\uad50\uc721\uc138"]["\uacfc\uc138"],"\uac10\uba74":t["\uad50\uc721\uc138"]["\uac10\uba74"]},"\ucde8\ub4dd\uc138":{"\uacfc\uc138":t["\ucde8\ub4dd\uc138"]["\uacfc\uc138"],"\uac10\uba74":t["\ucde8\ub4dd\uc138"]["\uac10\uba74"]}},loadingB:!1})})}},{key:"render",value:function(){var e=this;return n.a.createElement(_.a,{textAlign:"left",className:"SegmentGroup",loading:this.state.loadingA&&this.state.loadingB},n.a.createElement(h.a,{info:!0},n.a.createElement(h.a.List,null,n.a.createElement(h.a.Header,null,"\uba3c\uc800 \uc77d\uc5b4\uc8fc\uc138\uc694"),n.a.createElement(C.a,{hidden:!0,fitted:!0}),n.a.createElement(C.a,{hidden:!0,fitted:!0}),n.a.createElement(C.a,{hidden:!0,fitted:!0}),n.a.createElement(C.a,{hidden:!0,fitted:!0}),n.a.createElement(h.a.Item,null,"\uc5ec\uae30\uc5d0\uc11c \ud45c\uae30\ub418\ub294 \ubaa8\ub4e0 \uac00\uaca9\uc740 USD\ub97c \ud604\uc7ac \uc2dc\uac04 \uae30\uc900\uc758 \ud658\uc728\uc744 \uc801\uc6a9\ud558\uc5ec KRW\uc73c\ub85c \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),n.a.createElement(h.a.Item,null,"\uad6c\uc785\uc5d0 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \uc635\uc158\uc774 \ubbf8\ub9ac \uc120\ud0dd\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),n.a.createElement(h.a.Item,null,"\uac70\uc8fc\uc9c0\ub97c \uc120\ud0dd\ud558\uba74 \ud574\ub2f9 \uc9c0\uc790\uccb4\uc5d0\uc11c \uc9c0\uae09\ud558\ub294 \uc2b9\uc6a9 \uc804\uae30\ucc28 \ubcf4\uc870\uae08\uacfc \uc815\ubd80\uc5d0\uc11c \uc9c0\uae09\ud558\ub294 \uc804\uae30\ucc28 \ubcf4\uc870\uae08\uc774 \ucd5c\uc885 \uac00\uaca9\uc5d0 \ubc18\uc601\ub429\ub2c8\ub2e4."),n.a.createElement(h.a.Item,null,"\uacc4\uc0b0\ub41c \uac00\uaca9\uacfc \uc2e4\uc81c \uac00\uaca9\uc740 \ucc28\uc774\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\uba70 \uc774\ub85c \uc778\ud574 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc5d0 \ub300\ud55c \ucc45\uc784\uc740 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."))),n.a.createElement(f.a,{compact:"very",celled:!0,selectable:!0},n.a.createElement(f.a.Header,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.HeaderCell,null,"\ubaa8\ub378\uba85"),n.a.createElement(f.a.HeaderCell,null,"\uac00\uaca9"),n.a.createElement(f.a.HeaderCell,null,"\uc8fc\ud589\uac70\ub9ac"),n.a.createElement(f.a.HeaderCell,null,"0-60mph"),n.a.createElement(f.a.HeaderCell,null,"\uad6c\ub3d9\ubc29\uc2dd"),n.a.createElement(f.a.HeaderCell,null))),n.a.createElement(f.a.Body,null,this.state.trims.map(function(a,t){return n.a.createElement(f.a.Row,{key:t,active:e.state.base_selected===t},n.a.createElement(f.a.Cell,null,a["\uc774\ub984"]),n.a.createElement(f.a.Cell,null,e.comma(e.usdTokrw(a["\uac00\uaca9"]))+" \uc6d0"),n.a.createElement(f.a.Cell,null,a["\uc8fc\ud589\uac70\ub9ac(km)"]+" km"),n.a.createElement(f.a.Cell,null,a["0-60"]+" \ucd08"),n.a.createElement(f.a.Cell,null,a["\uad6c\ub3d9\ubc29\uc2dd"]),n.a.createElement(f.a.Cell,{collapsing:!0},n.a.createElement(w.a,{radio:!0,checked:e.state.base_selected===t,onClick:function(){e.setState({base_price:e.usdTokrw(a["\uac00\uaca9"]),base_selected:t}),"Performance"===a["\uc774\ub984"]?e.setState({wheal_price:0,wheal_selected:2}):e.setState({wheal_price:0,wheal_selected:0})},onChange:e.calcTotalPrice})))}))),n.a.createElement(_.a,{basic:!0},n.a.createElement(d.a,{columns:2,relaxed:"very"},n.a.createElement(d.a.Column,null,n.a.createElement(k.a,null,n.a.createElement(k.a.Group,null,n.a.createElement(f.a,{compact:"very",celled:!0},n.a.createElement(f.a.Header,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.HeaderCell,null,"\uc0c9\uc0c1"),n.a.createElement(f.a.HeaderCell,null,"\uac00\uaca9"),n.a.createElement(f.a.HeaderCell,null))),n.a.createElement(f.a.Body,null,this.state.options.color.map(function(a,t){return n.a.createElement(f.a.Row,{key:t,active:e.state.color_selected===t},n.a.createElement(f.a.Cell,null,a["\uc774\ub984"]),n.a.createElement(f.a.Cell,null,e.comma(e.usdTokrw(a["\uac00\uaca9"]))+" \uc6d0"),n.a.createElement(f.a.Cell,{collapsing:!0},n.a.createElement(w.a,{radio:!0,checked:e.state.color_selected===t,onClick:function(){e.setState({color_price:e.usdTokrw(a["\uac00\uaca9"]),color_selected:t})},onChange:e.calcTotalPrice})))})))),n.a.createElement(k.a.Group,null,n.a.createElement(f.a,{compact:"very",celled:!0},n.a.createElement(f.a.Header,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.HeaderCell,null,"\ud720"),n.a.createElement(f.a.HeaderCell,null,"\uc0ac\uc774\uc988"),n.a.createElement(f.a.HeaderCell,null,"\uac00\uaca9"),n.a.createElement(f.a.HeaderCell,null))),n.a.createElement(f.a.Body,null,this.state.options.wheal.map(function(a,t){return n.a.createElement(f.a.Row,{key:t,active:e.state.wheal_selected===t,hidden:e.state.base_selected!==e.state.performance_index&&"Performance"===a._only||e.state.base_selected===e.state.performance_index&&"!Performance"===a._only},n.a.createElement(f.a.Cell,null,a["\uc774\ub984"]),n.a.createElement(f.a.Cell,null,a["\uc0ac\uc774\uc988"]),n.a.createElement(f.a.Cell,null,e.comma(e.usdTokrw(a["\uac00\uaca9"]))+" \uc6d0"),n.a.createElement(f.a.Cell,{collapsing:!0},n.a.createElement(w.a,{radio:!0,checked:e.state.wheal_selected===t,onClick:function(){e.setState({wheal_price:e.usdTokrw(a["\uac00\uaca9"]),wheal_selected:t})},onChange:e.calcTotalPrice})))})))),n.a.createElement(k.a.Group,null,n.a.createElement(f.a,{compact:"very",celled:!0},n.a.createElement(f.a.Header,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.HeaderCell,null,"\uc778\ud14c\ub9ac\uc5b4"),n.a.createElement(f.a.HeaderCell,null,"\uac00\uaca9"),n.a.createElement(f.a.HeaderCell,null))),n.a.createElement(f.a.Body,null,this.state.options.interior.map(function(a,t){return n.a.createElement(f.a.Row,{key:t,active:e.state.interior_selected===t},n.a.createElement(f.a.Cell,null,a["\uc774\ub984"]),n.a.createElement(f.a.Cell,null,e.comma(e.usdTokrw(a["\uac00\uaca9"]))+" \uc6d0"),n.a.createElement(f.a.Cell,{collapsing:!0},n.a.createElement(w.a,{radio:!0,checked:e.state.interior_selected===t,onClick:function(){e.setState({interior_price:e.usdTokrw(a["\uac00\uaca9"]),interior_selected:t})},onChange:e.calcTotalPrice})))})))),n.a.createElement(k.a.Group,null,n.a.createElement(f.a,{compact:"very",celled:!0},n.a.createElement(f.a.Header,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.HeaderCell,null,"\uc624\ud1a0\ud30c\uc77c\ub7ff"),n.a.createElement(f.a.HeaderCell,null,"\uac00\uaca9"),n.a.createElement(f.a.HeaderCell,null))),n.a.createElement(f.a.Body,null,this.state.options.autopilot.map(function(a,t){return n.a.createElement(f.a.Row,{key:t},n.a.createElement(f.a.Cell,null,a["\uc774\ub984"]),n.a.createElement(f.a.Cell,null,e.comma(e.usdTokrw(a["\uac00\uaca9"]))+" \uc6d0"),n.a.createElement(f.a.Cell,{collapsing:!0},n.a.createElement(w.a,{onClick:function(t,l){l.checked?e.setState({autopilot_price:e.usdTokrw(a["\uac00\uaca9"])}):e.setState({autopilot_price:0})},onChange:e.calcTotalPrice})))})))),n.a.createElement(k.a.Group,null,n.a.createElement(g.a,{fluid:!0,options:[{key:"a",value:"a",text:"\uc11c\uc6b8 \uc11c\uc6b8\ud2b9\ubcc4\uc2dc"},{key:"b",value:"b",text:"\ubd80\uc0b0 \ubd80\uc0b0\uad11\uc5ed\uc2dc"},{key:"c",value:"c",text:"\ub300\uad6c \ub300\uad6c\uad11\uc5ed\uc2dc"},{key:"d",value:"d",text:"\uc778\ucc9c \uc778\ucc9c\uad11\uc5ed\uc2dc"},{key:"e",value:"e",text:"\uad11\uc8fc \uad11\uc8fc\uad11\uc5ed\uc2dc"},{key:"f",value:"f",text:"\ub300\uc804 \ub300\uc804\uad11\uc5ed\uc2dc"}],placeholder:"\ubcf4\uc870\uae08 \uacc4\uc0b0\uc744 \uc704\ud574 \uac70\uc8fc\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694",search:!0,selection:!0})))),n.a.createElement(d.a.Column,null,n.a.createElement(y.a,{fluid:!0},n.a.createElement(y.a.Content,null,n.a.createElement(y.a.Header,{textAlign:"center"},"Model 3 \uac00\uaca9 \uc608\uc0c1")),n.a.createElement(y.a.Content,null,n.a.createElement(b.a,null,n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"car"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"grey"}},this.comma(this.state.total_price)+" \uc6d0"),n.a.createElement(b.a.Description,null,"\ucc28\ub7c9 \uac00\uaca9 (\ubd80\uac00\uc138 10% \ud3ec\ud568)"))),n.a.createElement(C.a,null),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"plus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"orange"}},this.comma(this.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\uac1c\ubcc4\uc18c\ube44\uc138 (\ucc28\ub7c9\uac00\uc561\uc758 5% \uacfc\uc138)"))),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"minus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"green"}},this.comma(this.\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\uac1c\ubcc4\uc18c\ube44\uc138 \uac10\uba74 (\ucd5c\ub300 300\ub9cc\uc6d0 \uac10\uba74)"))),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"plus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"orange"}},this.comma(this.\uad50\uc721\uc138_\uacfc\uc138())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\uad50\uc721\uc138 (\uac1c\ubcc4\uc18c\ube44\uc138\uc758 30% \uacfc\uc138)"))),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"minus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"green"}},this.comma(this.\uad50\uc721\uc138_\uac10\uba74())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\uad50\uc721\uc138 \uac10\uba74 (\ucd5c\ub300 90\ub9cc\uc6d0 \uac10\uba74)"))),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"plus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"orange"}},this.comma(this.\ucde8\ub4dd\uc138_\uacfc\uc138())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\ucde8\ub4dd\uc138 (\ucc28\ub7c9 \uac00\uaca9\uc758 7% \uacfc\uc138)"))),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"minus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"green"}},this.comma(this.\ucde8\ub4dd\uc138_\uac10\uba74())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\ucde8\ub4dd\uc138 \uac10\uba74 (\ucd5c\ub300 140\ub9cc\uc6d0 \uac10\uba74)"))),n.a.createElement(C.a,null),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"minus"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,{style:{color:"green"}},this.comma(this.\uc804\uae30\ucc28_\ubcf4\uc870\uae08())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\uc804\uae30\ucc28 \ubcf4\uc870\uae08 (\uc815\ubd80 \ubcf4\uc870\uae08 900\ub9cc\uc6d0 + \uc9c0\uc790\uccb4 \ubcf4\uc870\uae08)"))),n.a.createElement(C.a,null),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Icon,{name:"calculator"}),n.a.createElement(b.a.Content,null,n.a.createElement(b.a.Header,null,this.comma(this.\ucd5c\uc885\uac00\uaca9())+" \uc6d0"),n.a.createElement(b.a.Description,null,"\ucd5c\uc885 \uac00\uaca9"))))),n.a.createElement(y.a.Content,{extra:!0,textAlign:"right"},n.a.createElement(v.a,{primary:!0,as:"a",href:"https://www.tesla.com/ko_KR/model3/reserve",target:"_blank"},"\uc0ac\uc804 \uc608\uc57d"))))),n.a.createElement(C.a,{vertical:!0},"Calc")))}}]),a}(l.Component)),R=[{menuItem:{key:"price",icon:"calculator",content:"\uac00\uaca9 \uacc4\uc0b0"},render:function(){return n.a.createElement(S,null)}}],B=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(E.a,{className:"container"},n.a.createElement(d.a,{centered:!0,verticalAlign:"middle"},n.a.createElement(d.a.Row,{verticalAlign:"middle"},n.a.createElement(p.a,{menu:{secondary:!0,pointing:!0},panes:R}))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[191,1,2]]]);
//# sourceMappingURL=main.0e65ffd4.chunk.js.map