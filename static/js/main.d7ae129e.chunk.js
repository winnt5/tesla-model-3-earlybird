(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){e.exports=a(376)},213:function(e,t,a){},214:function(e,t,a){},358:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),c=a.n(r),o=(a(213),a(16)),s=a(17),i=a(19),u=a(18),m=a(20),d=(a(214),a(97)),p=a(52),h=a(385),E=a(53),_=a.n(E),b=a(390),g=a(128),f={weekday:"long",year:"numeric",month:"long",day:"numeric"},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={items:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get('https://newsapi.org/v2/everything?q="model 3"&sortBy=popularity&apiKey=e995a927278f46b7b14fea677442fe4e').then(function(t){e.setState({items:t.data.articles.map(function(e,t){return{key:t,header:l.a.createElement(b.a.Header,{as:"a",href:e.url,target:"_blank"},e.title),description:e.description,extra:new Date(e.publishedAt).toLocaleDateString("ko-KR",f),image:e.urlToImage}})})})}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement(g.a,{basic:!0},l.a.createElement(b.a.Group,{centered:!0,items:e}))}}]),t}(l.a.Component),C=a(391),k=a(384),v=a(398),w=a(197),O=a(386),T=a(397),j=a(392),I=a(40),x=a(125),F=a.n(x),P=a(389),H=function(e){return Number(e).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement(P.a.HeaderCell,null,"\ubaa8\ub378\uba85"),l.a.createElement(P.a.HeaderCell,null,"\uac00\uaca9"),l.a.createElement(P.a.HeaderCell,null,"\uc8fc\ud589\uac70\ub9ac(EPA)"),l.a.createElement(P.a.HeaderCell,null,"0-60mph"),l.a.createElement(P.a.HeaderCell,null,"\uad6c\ub3d9\ubc29\uc2dd"))),l.a.createElement(P.a.Body,null,this.props.trims.map(function(t,a){return l.a.createElement(P.a.Row,{key:a,active:e.props.base_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(P.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(P.a.Cell,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"),l.a.createElement(P.a.Cell,null,t["\uc8fc\ud589\uac70\ub9ac(km)"]+" km"),l.a.createElement(P.a.Cell,null,t["0-60"]+" \ucd08"),l.a.createElement(P.a.Cell,null,t["\uad6c\ub3d9\ubc29\uc2dd"]))})))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement(P.a.HeaderCell,null,"\uc0c9\uc0c1"),l.a.createElement(P.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(P.a.Body,null,this.props.options.color.map(function(t,a){return l.a.createElement(P.a.Row,{key:a,active:e.props.color_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(P.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(P.a.Cell,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement(P.a.HeaderCell,null,"\ud720"),l.a.createElement(P.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(P.a.Body,null,this.props.options.wheels.map(function(t,a){return l.a.createElement(P.a.Row,{key:a,active:e.props.wheels_selected===a,disabled:!e.props.performance&&"Performance"===t._only||e.props.performance&&"!Performance"===t._only,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(P.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(P.a.Cell,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement(P.a.HeaderCell,null,"\uc778\ud14c\ub9ac\uc5b4"),l.a.createElement(P.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(P.a.Body,null,this.props.options.interior.map(function(t,a){return l.a.createElement(P.a.Row,{key:a,active:e.props.interior_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(P.a.Cell,null,t["\uc774\ub984"]),l.a.createElement(P.a.Cell,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),z=a(395),G=a(387),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e,t){a.props.onChange(e,t),a.props.calcTotalPrice()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{compact:"very",singleLine:!0,size:"small",celled:!0,selectable:!0,fixed:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement(P.a.HeaderCell,null,"\uc624\ud1a0\ud30c\uc77c\ub7ff"),l.a.createElement(P.a.HeaderCell,null,"\uac00\uaca9"))),l.a.createElement(P.a.Body,null,this.props.options.autopilot.map(function(t,a){return l.a.createElement(P.a.Row,{key:a,active:e.props.autopilot_selected===a,onClick:function(){return e.onClick(a,t)},style:{cursor:"pointer"}},l.a.createElement(P.a.Cell,null,t["\uc774\ub984"]," ",l.a.createElement(z.a,{trigger:l.a.createElement(I.a,{name:"question circle outline"}),position:"top center"},l.a.createElement(z.a.Content,null,l.a.createElement(G.a,{as:"ul"},t["\uc124\uba85"].split("\n").map(function(e,t){return l.a.createElement(G.a.Item,{as:"li",key:t},e)}))))),l.a.createElement(P.a.Cell,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+" \uc6d0"))})))}}]),t}(n.Component),L=a(393),M=a(388),B=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.gov_subsidy.map(function(e,t){return{key:t,value:t,text:"".concat(e.name," (").concat(H(e.subsidy),"\uc6d0)")}}),t=this.props.local_subsidy.map(function(e,t){return{key:t,value:t,text:"".concat(e.name," (").concat(H(e.subsidy),"\uc6d0)")}});return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(O.a.Group,{widths:"equal"},l.a.createElement(O.a.Field,null,l.a.createElement(L.a,{sub:!0},"\uc815\ubd80 \ubcf4\uc870\uae08"),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(M.a,{defaultValue:this.props.selected_gov_subsidy,fluid:!0,deburr:!0,options:e,selection:!0,search:!0,onChange:this.props.onGovSubsidyChange})),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(O.a.Field,null,l.a.createElement(L.a,{sub:!0},"\uc9c0\ubc29\uc790\uce58\ub2e8\uccb4 \ubcf4\uc870\uae08"),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(M.a,{defaultValue:this.props.selected_local_subsidy,fluid:!0,deburr:!0,options:t,placeholder:"\uac70\uc8fc\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694",selection:!0,search:!0,onChange:this.props.onLocalSubsidyChange}))))}}]),t}(n.Component),q=a(73),W=a(377),K=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(b.a,{fluid:!0},l.a.createElement(b.a.Content,null,l.a.createElement(b.a.Header,{textAlign:"center"},"\uc608\uc0c1 \ud604\uae08 \uac00\uaca9")),l.a.createElement(b.a.Content,null,l.a.createElement(G.a,null,l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Description,null,l.a.createElement(G.a,null,this.props.selectedOptions().map(function(t,a){return l.a.createElement(G.a.Item,{key:a},l.a.createElement(q.a,{as:"a",horizontal:!0,color:t["\uac00\uaca9"]>0?"red":null},t["\uc774\ub984"],l.a.createElement(q.a.Detail,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+"\uc6d0")))}))))),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"car"}),l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"grey"}},H(this.props.total_price)+" \uc6d0"),l.a.createElement(G.a.Description,null,"\ucc28\ub7c9 \uacf5\uc7a5\ub3c4 \uac00\uaca9"))),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"orange"}},H(this.props.calcFuncs["\ubd80\uac00\uac00\uce58\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\ubd80\uac00\uac00\uce58\uc138"))),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:this.props.calcFuncs["\uac1c\ubcc4\uc18c\ube44\uc138"]()>0?{color:"orange"}:{color:"green"}},H(this.props.calcFuncs["\uac1c\ubcc4\uc18c\ube44\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uac1c\ubcc4\uc18c\ube44\uc138")," "),content:H(this.props.calcFuncs["\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138"]())+"\uc6d0 \uc911 "+H(this.props.calcFuncs["\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74"]())+"\uc6d0 \uac10\uba74\ub428",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:this.props.calcFuncs["\uad50\uc721\uc138"]()>0?{color:"orange"}:{color:"green"}},H(this.props.calcFuncs["\uad50\uc721\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uad50\uc721\uc138")),content:H(this.props.calcFuncs["\uad50\uc721\uc138_\uacfc\uc138"]())+"\uc6d0 \uc911 "+H(this.props.calcFuncs["\uad50\uc721\uc138_\uac10\uba74"]())+"\uc6d0 \uac10\uba74\ub428",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:this.props.calcFuncs["\ucde8\ub4dd\uc138"]()>0?{color:"orange"}:{color:"green"}},H(this.props.calcFuncs["\ucde8\ub4dd\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\ucde8\ub4dd\uc138")),content:H(this.props.calcFuncs["\ucde8\ub4dd\uc138_\uacfc\uc138"]())+"\uc6d0 \uc911 "+H(this.props.calcFuncs["\ucde8\ub4dd\uc138_\uac10\uba74"]())+"\uc6d0 \uac10\uba74\ub428",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"orange"}},H(this.props.calcFuncs["\uc790\ub3d9\ucc28\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uc790\ub3d9\ucc28\uc138")),content:"\ube44\uc601\uc5c5\uc6a9 \uae30\uc900",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"minus"}),l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"green"}},H(this.props.gov_subsidy?this.props.gov_subsidy.subsidy:0)+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uc815\ubd80 \ubcf4\uc870\uae08"))),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"minus"}),l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"green"}},H(this.props.local_subsidy?this.props.local_subsidy.subsidy:0)+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uc9c0\ubc29\uc790\uce58\ub2e8\uccb4 \ubcf4\uc870\uae08"))),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"calculator"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,null,l.a.createElement(L.a,{size:"medium",color:"red"},H(this.props.calcFuncs["\ubcf4\uc870\uae08_\uac10\uba74_\ud6c4_\ucc28\ub7c9\uac00\uaca9"]()+this.props.calcFuncs["\ucde8\ub4dd\uc138"]()+this.props.calcFuncs["\uc790\ub3d9\ucc28\uc138"]())+" \uc6d0")),l.a.createElement(G.a.Description,null,"\ucd5c\uc885 \uac00\uaca9")),content:"\ucde8\ub4dd\uc138, \uc790\ub3d9\ucc28\uc138 \ud3ec\ud568",size:"small"})))),l.a.createElement(b.a.Content,{extra:!0,textAlign:"right"},l.a.createElement(W.a,{href:"https://www.tesla.com/ko_KR/model3/reserve",target:"_blank",compact:!0,fluid:!0},"Model 3 \uc0ac\uc804 \uc608\uc57d")))}}]),t}(n.Component),U=a(383),V=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(b.a,{fluid:!0},l.a.createElement(b.a.Content,null,l.a.createElement(b.a.Header,{textAlign:"center"},"\uc608\uc0c1 \ud560\ubd80 \uacb0\uc81c\uc561")),l.a.createElement(b.a.Content,null,l.a.createElement(G.a,null,l.a.createElement(G.a.Item,null,l.a.createElement(O.a,null,l.a.createElement(O.a.Group,{widths:"equal"},l.a.createElement(O.a.Field,{width:1,readOnly:!0,control:U.a,label:"\uc120\ub0a9\uae081 (\ubcf4\uc870\uae08)",placeholder:"\uc120\ub0a9\uae081",value:H(this.props.calcFuncs["\ubcf4\uc870\uae08"]())}),l.a.createElement(O.a.Field,{width:1,control:U.a,label:"\uc120\ub0a9\uae082 (\uadf8 \uc678)",placeholder:"\uc120\ub0a9\uae082",value:H(this.props.prepay||""),onChange:this.props.onPrepayChange})),l.a.createElement(O.a.Group,{widths:"equal"},l.a.createElement(O.a.Field,{width:1,type:"number",control:U.a,label:"\ud560\ubd80 \uc5f0\uc774\uc728 (%)",error:0===this.props.loan_rate,value:this.props.loan_rate||"",onChange:this.props.onLoanRateChange}),l.a.createElement(O.a.Field,{width:1,type:"number",control:U.a,label:"\ud560\ubd80 \uac1c\uc6d4 \uc218",error:0===this.props.installment_months,value:this.props.installment_months||"",onChange:this.props.onMonthsChange})))),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Description,null,l.a.createElement(G.a,null,this.props.selectedOptions().map(function(t,a){return l.a.createElement(G.a.Item,{key:a},l.a.createElement(q.a,{as:"a",horizontal:!0,color:t["\uac00\uaca9"]>0?"red":null},t["\uc774\ub984"],l.a.createElement(q.a.Detail,null,H(e.props.usdTokrw(t["\uac00\uaca9"]))+"\uc6d0")))}))))),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"car"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"grey"}},H(this.props.calcFuncs["\ubcf4\uc870\uae08_\uac10\uba74_\uc804_\ucc28\ub7c9\uac00\uaca9"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\ucc28\ub7c9 \uac00\uaca9")),content:"\uacf5\uc7a5\ub3c4 \uac00\uaca9 + \ubd80\uac00\uac00\uce58\uc138 + \uac1c\ubcc4\uc18c\ube44\uc138 + \uad50\uc721\uc138",size:"small"})),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"minus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"green"}},H(this.props.calcFuncs["\ubcf4\uc870\uae08"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uc120\ub0a9\uae081 (\ubcf4\uc870\uae08)")),content:"\uc815\ubd80 \ubcf4\uc870\uae08 + \uc9c0\ubc29\uc790\uce58\ub2e8\uccb4 \ubcf4\uc870\uae08",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"minus"}),l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"green"}},H(this.props.prepay)+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uc120\ub0a9\uae082 (\uadf8 \uc678)"))),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"won sign"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"grey"}},H(this.props.calcFuncs["\ubcf4\uc870\uae08_\uac10\uba74_\ud6c4_\ucc28\ub7c9\uac00\uaca9"]()-this.props.prepay)+" \uc6d0"),l.a.createElement(G.a.Description,null,"\ub300\ucd9c\uc6d0\uae08")),content:"\ucc28\ub7c9 \uac00\uaca9 - \uc120\ub0a9\uae08",size:"small"})),l.a.createElement(k.a,null),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:this.props.calcFuncs["\ucde8\ub4dd\uc138"]()>0?{color:"orange"}:{color:"green"}},H(this.props.calcFuncs["\ucde8\ub4dd\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\ucde8\ub4dd\uc138")),content:H(this.props.calcFuncs["\ucde8\ub4dd\uc138_\uacfc\uc138"]())+"\uc6d0 \uc911 "+H(this.props.calcFuncs["\ucde8\ub4dd\uc138_\uac10\uba74"]())+"\uc6d0 \uac10\uba74\ub428",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"plus"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{style:{color:"orange"}},H(this.props.calcFuncs["\uc790\ub3d9\ucc28\uc138"]())+" \uc6d0"),l.a.createElement(G.a.Description,null,"\uc790\ub3d9\ucc28\uc138")),content:"\ube44\uc601\uc5c5\uc6a9 \uae30\uc900",size:"small"})),l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Icon,{name:"calculator"}),l.a.createElement(z.a,{trigger:l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{color:"red"},l.a.createElement(L.a,{size:"medium",color:"red"},H(this.props.calcFuncs["\uc6d0\ub9ac\uae08\uade0\ub4f1\uc0c1\ud658_\uc6d4\ub0a9\uc785\uae08"](this.props.calcFuncs["\ubcf4\uc870\uae08_\uac10\uba74_\ud6c4_\ucc28\ub7c9\uac00\uaca9"]()-this.props.prepay,this.props.loan_rate,this.props.installment_months))+" \uc6d0")),l.a.createElement(G.a.Description,null,"\uc6d4\uc0c1\ud658\uae08")),content:"\uc6d0\ub9ac\uae08 \uade0\ub4f1\uc0c1\ud658\ubc29\uc2dd (\ucde8\ub4dd\uc138, \uc790\ub3d9\ucc28\uc138 \ubcc4\ub3c4)",size:"small"})))),l.a.createElement(b.a.Content,{extra:!0,textAlign:"right"},l.a.createElement(W.a,{href:"https://www.tesla.com/ko_KR/model3/reserve",target:"_blank",compact:!0,fluid:!0},"Model 3 \uc0ac\uc804 \uc608\uc57d")))}}]),t}(n.Component),J=(a(358),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={loading_a:!0,loading_b:!0,loading_c:!0,trims:[],options:{color:[],interior:[],wheels:[],autopilot:[]},saletex:{"\uac1c\ubcc4\uc18c\ube44\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\uad50\uc721\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\ucde8\ub4dd\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0},"\uc790\ub3d9\ucc28\uc138":{"\uacfc\uc138":0,"\uac10\uba74":0}},gov_subsidy:[],selected_gov_subsidy:1,local_subsidy:[],selected_local_subsidy:1,exchange:1,exchange_date:null,performance_index:-1,base_selected:0,base_price:0,color_selected:0,color_price:0,wheels_selected:0,wheels_price:0,interior_selected:0,interior_price:0,autopilot_selected:0,autopilot_price:0,total_price:0,prepay:0,loan_rate:3.5,installment_months:60,active_index:-1},a.onAccordionClick=function(e,t){var n=t.index,l=a.state.active_index===n?-1:n;a.setState({active_index:l})},a.onTrimChange=function(e,t){a.setState({base_price:a.usdTokrw(t["\uac00\uaca9"]),base_selected:e,wheels_price:0,wheels_selected:"Performance"===t["\uc774\ub984"]?2:2===a.state.wheels_selected?0:a.state.wheels_selected})},a.onColorChange=function(e,t){a.setState({color_price:a.usdTokrw(t["\uac00\uaca9"]),color_selected:e})},a.onWheelsChange=function(e,t){a.setState({wheels_price:a.usdTokrw(t["\uac00\uaca9"]),wheels_selected:e})},a.onInteriorChange=function(e,t){a.setState({interior_price:a.usdTokrw(t["\uac00\uaca9"]),interior_selected:e})},a.onAutoPilotChange=function(e,t){a.setState({autopilot_price:a.usdTokrw(t["\uac00\uaca9"]),autopilot_selected:e})},a.selectedOptions=function(){return 0===a.state.trims.length?[]:[a.state.trims[a.state.base_selected],a.state.options.color[a.state.color_selected],a.state.options.wheels[a.state.wheels_selected],a.state.options.interior[a.state.interior_selected],a.state.options.autopilot[a.state.autopilot_selected]]},a.usdTokrw=function(e){return(e*a.state.exchange).toFixed(0)},a.calcTotalPrice=function(){return a.setState(function(e){return{total_price:Number(e.base_price)+Number(e.color_price)+Number(e.wheels_price)+Number(e.interior_price)+Number(e.autopilot_price)}})},a.\ubd80\uac00\uac00\uce58\uc138=function(){return.1*a.state.total_price},a.\uc790\ub3d9\ucc28\uc138=function(){return a.state.saletex.\uc790\ub3d9\ucc28\uc138.\uacfc\uc138},a.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138=function(){return a.state.total_price*a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uacfc\uc138},a.\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74=function(){return Math.min(a.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138(),a.state.saletex.\uac1c\ubcc4\uc18c\ube44\uc138.\uac10\uba74)},a.\uac1c\ubcc4\uc18c\ube44\uc138=function(){return a.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138()-a.\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74()},a.\uad50\uc721\uc138_\uacfc\uc138=function(){return a.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138()*a.state.saletex.\uad50\uc721\uc138.\uacfc\uc138},a.\uad50\uc721\uc138_\uac10\uba74=function(){return Math.min(a.\uad50\uc721\uc138_\uacfc\uc138(),a.state.saletex.\uad50\uc721\uc138.\uac10\uba74)},a.\uad50\uc721\uc138=function(){return a.\uad50\uc721\uc138_\uacfc\uc138()-a.\uad50\uc721\uc138_\uac10\uba74()},a.\ucde8\ub4dd\uc138_\uacfc\uc138=function(){return(a.state.total_price+a.\uac1c\ubcc4\uc18c\ube44\uc138()+a.\uad50\uc721\uc138())*a.state.saletex.\ucde8\ub4dd\uc138.\uacfc\uc138},a.\ucde8\ub4dd\uc138_\uac10\uba74=function(){return Math.min(a.\ucde8\ub4dd\uc138_\uacfc\uc138(),a.state.saletex.\ucde8\ub4dd\uc138.\uac10\uba74)},a.\ucde8\ub4dd\uc138=function(){return a.\ucde8\ub4dd\uc138_\uacfc\uc138()-a.\ucde8\ub4dd\uc138_\uac10\uba74()},a.\ubcf4\uc870\uae08=function(){return(a.state.gov_subsidy[a.state.selected_gov_subsidy]?a.state.gov_subsidy[a.state.selected_gov_subsidy].subsidy:0)+(a.state.local_subsidy[a.state.selected_local_subsidy]?a.state.local_subsidy[a.state.selected_local_subsidy].subsidy:0)},a.\ubcf4\uc870\uae08_\uac10\uba74_\uc804_\ucc28\ub7c9\uac00\uaca9=function(){return a.state.total_price+a.\ubd80\uac00\uac00\uce58\uc138()+a.\uac1c\ubcc4\uc18c\ube44\uc138()+a.\uad50\uc721\uc138()},a.\ubcf4\uc870\uae08_\uac10\uba74_\ud6c4_\ucc28\ub7c9\uac00\uaca9=function(){return a.\ubcf4\uc870\uae08_\uac10\uba74_\uc804_\ucc28\ub7c9\uac00\uaca9()-a.\ubcf4\uc870\uae08()},a.\uc6d0\ub9ac\uae08\uade0\ub4f1\uc0c1\ud658_\uc6d4\ub0a9\uc785\uae08=function(e,t,a){var n=t/12*.01,l=Math.pow(1+n,a);return e*n*l/(l-1)},a.calcFuncs={"\ubd80\uac00\uac00\uce58\uc138":a.\ubd80\uac00\uac00\uce58\uc138,"\uc790\ub3d9\ucc28\uc138":a.\uc790\ub3d9\ucc28\uc138,"\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138":a.\uac1c\ubcc4\uc18c\ube44\uc138_\uacfc\uc138,"\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74":a.\uac1c\ubcc4\uc18c\ube44\uc138_\uac10\uba74,"\uac1c\ubcc4\uc18c\ube44\uc138":a.\uac1c\ubcc4\uc18c\ube44\uc138,"\uad50\uc721\uc138_\uacfc\uc138":a.\uad50\uc721\uc138_\uacfc\uc138,"\uad50\uc721\uc138_\uac10\uba74":a.\uad50\uc721\uc138_\uac10\uba74,"\uad50\uc721\uc138":a.\uad50\uc721\uc138,"\ucde8\ub4dd\uc138_\uacfc\uc138":a.\ucde8\ub4dd\uc138_\uacfc\uc138,"\ucde8\ub4dd\uc138_\uac10\uba74":a.\ucde8\ub4dd\uc138_\uac10\uba74,"\ucde8\ub4dd\uc138":a.\ucde8\ub4dd\uc138,"\ubcf4\uc870\uae08":a.\ubcf4\uc870\uae08,"\ubcf4\uc870\uae08_\uac10\uba74_\uc804_\ucc28\ub7c9\uac00\uaca9":a.\ubcf4\uc870\uae08_\uac10\uba74_\uc804_\ucc28\ub7c9\uac00\uaca9,"\ubcf4\uc870\uae08_\uac10\uba74_\ud6c4_\ucc28\ub7c9\uac00\uaca9":a.\ubcf4\uc870\uae08_\uac10\uba74_\ud6c4_\ucc28\ub7c9\uac00\uaca9,"\uc6d0\ub9ac\uae08\uade0\ub4f1\uc0c1\ud658_\uc6d4\ub0a9\uc785\uae08":a.\uc6d0\ub9ac\uae08\uade0\ub4f1\uc0c1\ud658_\uc6d4\ub0a9\uc785\uae08},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("https://api.exchangeratesapi.io/latest?base=USD&symbols=KRW").then(function(t){e.setState({exchange:t.data.rates.KRW,exchange_date:t.data.date}),_.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/model_3.yaml").then(function(t){var a=F.a.parse(t.data);e.setState({trims:a.trims,options:a.options,base_price:e.usdTokrw(a.trims[0]["\uac00\uaca9"]),base_selected:0,loading_a:!1}),a.trims.forEach(function(t,a){"Performance"===t["\uc774\ub984"]&&e.setState({performance_index:a})}),e.calcTotalPrice()}),_.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/saletex.yaml").then(function(t){var a=F.a.parse(t.data);e.setState({saletex:{"\uac1c\ubcc4\uc18c\ube44\uc138":{"\uacfc\uc138":a["\uac1c\ubcc4\uc18c\ube44\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\uac1c\ubcc4\uc18c\ube44\uc138"]["\uac10\uba74"]},"\uad50\uc721\uc138":{"\uacfc\uc138":a["\uad50\uc721\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\uad50\uc721\uc138"]["\uac10\uba74"]},"\ucde8\ub4dd\uc138":{"\uacfc\uc138":a["\ucde8\ub4dd\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\ucde8\ub4dd\uc138"]["\uac10\uba74"]},"\uc790\ub3d9\ucc28\uc138":{"\uacfc\uc138":a["\uc790\ub3d9\ucc28\uc138"]["\uacfc\uc138"],"\uac10\uba74":a["\uc790\ub3d9\ucc28\uc138"]["\uac10\uba74"]}},loading_b:!1})}),_.a.get("https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/subsidy.json").then(function(t){e.setState({gov_subsidy:t.data.gov,local_subsidy:t.data.local,loading_c:!1})})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading_a,n=t.loading_b,r=t.loading_c,c=t.trims,o=t.options,s=t.gov_subsidy,i=t.selected_gov_subsidy,u=t.local_subsidy,m=t.selected_local_subsidy,d=t.exchange,p=t.exchange_date,h=t.performance_index,E=t.base_selected,_=t.color_selected,b=t.wheels_selected,f=t.interior_selected,y=t.autopilot_selected,x=t.total_price,F=t.prepay,P=t.loan_rate,H=t.installment_months,z=t.active_index;return l.a.createElement(g.a,{basic:!0,textAlign:"left",className:"SegmentGroup",loading:a&&n&&r},l.a.createElement(C.a,{info:!0},l.a.createElement(C.a.List,null,l.a.createElement(C.a.Header,null,"\uba3c\uc800 \uc77d\uc5b4\uc8fc\uc138\uc694"),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(k.a,{hidden:!0,fitted:!0}),l.a.createElement(C.a.Item,null,"\uc5ec\uae30\uc5d0\uc11c \ud45c\uae30\ub418\ub294 \ubaa8\ub4e0 \uac00\uaca9\uc740 \ubbf8\uad6d \ub2ec\ub7ec\uc5d0\uc11c"," ",l.a.createElement("strong",null,p)," \uae30\uc900 \ud658\uc728 (1 USD=",l.a.createElement("strong",null,d?d.toFixed(2):0)," KRW)\uc744 \uc801\uc6a9\ud558\uc5ec \uc6d0\ud654\ub85c \ubcc0\ud658\ub41c \uac12\uc785\ub2c8\ub2e4."),l.a.createElement(C.a.Item,null,"Model 3 \uad6c\ub9e4\uc5d0 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \uc635\uc158\uc774 \ubbf8\ub9ac \uc120\ud0dd\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),l.a.createElement(C.a.Item,null,"\ud604\uc7ac \ud0c1\uc1a1\ube44, \uacf5\ucc44 \uad00\ub828 \ube44\uc6a9, \ubd80\ub300\ube44\uc6a9 \ub4f1\uc740 \uacc4\uc0b0\ud558\uc9c0 \uc54a\uc73c\uba70, \uc138\uae08\uacfc \ubcf4\uc870\uae08\ub9cc\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4."),l.a.createElement(C.a.Item,null,"\uc774 \ud398\uc774\uc9c0\ub294"," ",l.a.createElement("strong",null,l.a.createElement("a",{href:"https://github.com/geeksbaek/tesla-model-3-korea",target:"_blank",rel:"noopener noreferrer"},"Github")),"\uc5d0\uc11c \uc624\ud508\uc18c\uc2a4\ub85c \uad00\ub9ac\ub418\uba70, \ubcc0\uacbd\uc0ac\ud56d\uc740"," ",l.a.createElement("strong",null,l.a.createElement("a",{href:"https://github.com/geeksbaek/tesla-model-3-korea/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},"\uc5ec\uae30")),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),l.a.createElement(C.a.Item,null,"\uacc4\uc0b0\ub41c \uac00\uaca9\uacfc \uc2e4\uc81c \uac00\uaca9\uc740 \ucc28\uc774\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\uba70 \uc774\ub85c \uc778\ud574 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc5d0 \ub300\ud55c \ucc45\uc784\uc740 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."))),l.a.createElement(v.a,{as:g.a,basic:!0,minWidth:v.a.onlyTablet.minWidth},l.a.createElement(w.a,{columns:2,verticalAlign:"top",centered:!0},l.a.createElement(w.a.Column,{width:10},l.a.createElement(O.a,null,l.a.createElement(O.a.Group,null,l.a.createElement(S,{base_selected:E,trims:c,calcTotalPrice:this.calcTotalPrice,onChange:this.onTrimChange,usdTokrw:this.usdTokrw})),l.a.createElement(O.a.Group,null,l.a.createElement(D,{color_selected:_,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onColorChange,usdTokrw:this.usdTokrw})),l.a.createElement(O.a.Group,null,l.a.createElement(A,{performance:E===h,wheels_selected:b,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onWheelsChange,usdTokrw:this.usdTokrw})),l.a.createElement(O.a.Group,null,l.a.createElement(R,{interior_selected:f,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onInteriorChange,usdTokrw:this.usdTokrw})),l.a.createElement(O.a.Group,null,l.a.createElement(N,{autopilot_selected:y,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onAutoPilotChange,usdTokrw:this.usdTokrw})),l.a.createElement(k.a,{hidden:!0}),l.a.createElement(O.a.Group,null,l.a.createElement(B,{onGovSubsidyChange:function(t,a){var n=a.value;e.setState({selected_gov_subsidy:n})},onLocalSubsidyChange:function(t,a){var n=a.value;e.setState({selected_local_subsidy:n})},gov_subsidy:s,selected_gov_subsidy:i,local_subsidy:u,selected_local_subsidy:m})))),l.a.createElement(w.a.Column,{width:6},l.a.createElement(T.a,{panes:[{menuItem:{key:"cash",icon:"money bill alternate outline",content:"\ud604\uae08"},render:function(){return l.a.createElement(T.a.Pane,null,l.a.createElement(K,{total_price:x,gov_subsidy:s[i],local_subsidy:u[m],calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw}))}},{menuItem:{key:"loan",icon:"credit card outline",content:"\ud560\ubd80"},render:function(){return l.a.createElement(T.a.Pane,null,l.a.createElement(V,{prepay:F,loan_rate:P,installment_months:H,onPrepayChange:function(t,a){var n=a.value;n.match(/[^\d,]/g)||e.setState({prepay:Number(n.replace(/[,.]/g,""))})},onLoanRateChange:function(t,a){var n=a.value;e.setState({loan_rate:Number(n)})},onMonthsChange:function(t,a){var n=a.value;e.setState({installment_months:Number(n)})},calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw}))}}]})))),l.a.createElement(v.a,v.a.onlyMobile,l.a.createElement(j.a,null,l.a.createElement(j.a.Title,{active:0===z,index:0,onClick:this.onAccordionClick},l.a.createElement(I.a,{name:"dropdown"}),"\ud2b8\ub9bc"),l.a.createElement(j.a.Content,{active:0===z},l.a.createElement(S,{base_selected:E,trims:c,calcTotalPrice:this.calcTotalPrice,onChange:this.onTrimChange,usdTokrw:this.usdTokrw})),l.a.createElement(j.a.Title,{active:1===z,index:1,onClick:this.onAccordionClick},l.a.createElement(I.a,{name:"dropdown"}),"\uc0c9\uc0c1"),l.a.createElement(j.a.Content,{active:1===z},l.a.createElement(D,{color_selected:_,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onColorChange,usdTokrw:this.usdTokrw})),l.a.createElement(j.a.Title,{active:2===z,index:2,onClick:this.onAccordionClick},l.a.createElement(I.a,{name:"dropdown"}),"\ud720"),l.a.createElement(j.a.Content,{active:2===z},l.a.createElement(A,{performance:E===h,wheels_selected:b,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onWheelsChange,usdTokrw:this.usdTokrw})),l.a.createElement(j.a.Title,{active:3===z,index:3,onClick:this.onAccordionClick},l.a.createElement(I.a,{name:"dropdown"}),"\uc778\ud14c\ub9ac\uc5b4"),l.a.createElement(j.a.Content,{active:3===z},l.a.createElement(R,{interior_selected:f,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onInteriorChange,usdTokrw:this.usdTokrw})),l.a.createElement(j.a.Title,{active:4===z,index:4,onClick:this.onAccordionClick},l.a.createElement(I.a,{name:"dropdown"}),"\uc624\ud1a0\ud30c\uc77c\ub7ff"),l.a.createElement(j.a.Content,{active:4===z},l.a.createElement(N,{autopilot_selected:y,options:o,calcTotalPrice:this.calcTotalPrice,onChange:this.onAutoPilotChange,usdTokrw:this.usdTokrw})),l.a.createElement(j.a.Title,{active:5===z,index:5,onClick:this.onAccordionClick},l.a.createElement(I.a,{name:"dropdown"}),"\uc804\uae30\ucc28 \ubcf4\uc870\uae08"),l.a.createElement(j.a.Content,{active:5===z},l.a.createElement(B,{onGovSubsidyChange:function(t,a){var n=a.value;e.setState({selected_gov_subsidy:n})},onLocalSubsidyChange:function(t,a){var n=a.value;e.setState({selected_local_subsidy:n})},gov_subsidy:s,selected_gov_subsidy:i,local_subsidy:u,selected_local_subsidy:m}))),l.a.createElement(k.a,null),l.a.createElement(T.a,{menu:{secondary:!0,pointing:!0},panes:[{menuItem:{key:"cash",icon:"money bill alternate outline",content:"\ud604\uae08"},render:function(){return l.a.createElement(K,{total_price:x,gov_subsidy:s[i],local_subsidy:u[m],calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw})}},{menuItem:{key:"loan",icon:"credit card outline",content:"\ud560\ubd80"},render:function(){return l.a.createElement(V,{prepay:F,loan_rate:P,installment_months:H,onPrepayChange:function(t,a){var n=a.value;n.match(/[^\d,]/g)||e.setState({prepay:Number(n.replace(/[,.]/g,""))})},onLoanRateChange:function(t,a){var n=a.value;e.setState({loan_rate:Number(n)})},onMonthsChange:function(t,a){var n=a.value;e.setState({installment_months:Number(n)})},calcFuncs:e.calcFuncs,selectedOptions:e.selectedOptions,usdTokrw:e.usdTokrw})}}]})))}}]),t}(n.Component)),Q=a(196),$="tesla-model-3-korea";function X(){if(void 0===window.DISQUS){var e=document.createElement("script");e.async=!0,e.src="https://"+$+".disqus.com/embed.js",document.getElementsByTagName("head")[0].appendChild(e)}else window.DISQUS.reset({reload:!0})}var Y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||this.props.title!==e.title||this.props.path!==e.path}},{key:"componentDidMount",value:function(){X()}},{key:"componentDidUpdate",value:function(){X()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.path,r=Object(Q.a)(e,["id","title","path"]);return Object({NODE_ENV:"production",PUBLIC_URL:"/tesla-model-3-korea"}).BROWSER&&(window.disqus_shortname=$,window.disqus_identifier=t,window.disqus_title=a,window.disqus_url="https://geeksbaek.github.io"+n),l.a.createElement("div",Object.assign({},r,{id:"disqus_thread"}))}}]),t}(l.a.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(Y,{id:"root",title:"Tesla Model 3 Korea",path:"/tesla-model-3-korea"})}}]),t}(l.a.Component),ee=a(195),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).contextRef=l.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(ee.a,{borderless:!0,pointing:!0,secondary:!0,style:{backgroundColor:"white"}},this.props.panes.map(function(t,a){return l.a.createElement(ee.a.Item,{as:d.b,key:a,to:t.menuItem.path,name:t.menuItem.content,icon:t.menuItem.icon,active:e.props.location.pathname===t.menuItem.path,onClick:e.handleItemClick,position:a===e.props.panes.length-1?"right":null})}))}}]),t}(n.Component),ae=Object(p.d)(te),ne=[{menuItem:{key:"feed",path:"/",icon:"newspaper",content:"\uc18c\uc2dd"},render:function(){return l.a.createElement(y,null)}},{menuItem:{key:"price",path:"/price",icon:"calculator",content:"\uac00\uaca9"},render:function(){return l.a.createElement(J,null)}},{menuItem:{key:"discussions",path:"/discussions",icon:"discussions",content:"\uc758\uacac"},render:function(){return l.a.createElement(Z,null)}}],le=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{style:{padding:"10px 0"}},l.a.createElement(d.a,null,l.a.createElement(ae,{panes:ne}),ne.map(function(e,t){return l.a.createElement(p.a,{key:t,exact:!0,path:e.menuItem.path,render:e.render})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[208,1,2]]]);
//# sourceMappingURL=main.d7ae129e.chunk.js.map