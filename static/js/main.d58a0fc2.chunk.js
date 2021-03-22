(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),u=a(9),o=a(1),i=Object(n.createContext)();a(15);var m=function(){var e=Object(n.useContext)(i),t=e.setText,a=e.dataFilter,l=e.text,c=e.setColumn,m=e.setCompa,s=e.setValue,f=e.column,d=e.comparison,p=e.value;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"search label"},"Search:",r.a.createElement("input",{type:"text",onChange:function(e){return function(e){var a=e.target;t(Object(o.a)(Object(o.a)({},l),{},{filters:Object(o.a)(Object(o.a)({},l.filters),{},{filterByName:{name:a.value}})}))}(e)},"data-testid":"name-filter"})),r.a.createElement("select",{className:"column","data-testid":"column-filter",onChange:function(e){var t=e.target;return c(t.value)}},r.a.createElement("option",null,"population"),r.a.createElement("option",null,"orbital_period"),r.a.createElement("option",null,"diameter"),r.a.createElement("option",null,"rotation_period"),r.a.createElement("option",null,"surface_water")),r.a.createElement("select",{className:"compar","data-testid":"comparison-filter",onChange:function(e){return m(e.target.value)}},r.a.createElement("option",null,"maior que"),r.a.createElement("option",null,"menor que"),r.a.createElement("option",null,"igual a")),r.a.createElement("input",{type:"number","data-testid":"value-filter",onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{type:"button","data-testid":"button-filter",onClick:function(){t(Object(o.a)(Object(o.a)({},l),{},{filters:Object(o.a)(Object(o.a)({},l.filters),{},{filterByNumericValues:[].concat(Object(u.a)(l.filters.filterByNumericValues),[{column:f,comparison:d,value:p}])})}));var e=Array.from(document.querySelector(".compar")),a=Array.from(document.querySelector(".column"));e.find((function(e){return e.value===d&&e.remove()})),a.find((function(e){return e.value===f&&e.remove()}))}},"Adicionar Filtro"),l.filters.filterByNumericValues.map((function(e,a){var n=e.column,c=e.comparison,u=e.value;return r.a.createElement("div",{"data-testid":"filter",key:a},r.a.createElement("p",null,"".concat(n," ").concat(c," ").concat(u)),r.a.createElement("button",{type:"button",onClick:function(){return e=u,void t((function(t){return Object(o.a)(Object(o.a)({},l),{},{filters:Object(o.a)(Object(o.a)({},l.filters),{},{filterByNumericValues:t.filters.filterByNumericValues.filter((function(t){return!Object.values(t).includes(e)}))})})}));var e}},"X"))})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"rotation_period"),r.a.createElement("th",null,"orbital_period"),r.a.createElement("th",null,"diameter"),r.a.createElement("th",null,"climate"),r.a.createElement("th",null,"gravity"),r.a.createElement("th",null,"terrain"),r.a.createElement("th",null,"surface_water"),r.a.createElement("th",null,"population"),r.a.createElement("th",null,"films"),r.a.createElement("th",null,"created"),r.a.createElement("th",null,"edited"),r.a.createElement("th",null,"url"))),r.a.createElement("tbody",null,a&&a.map((function(e,t){var a=e.name,n=e.rotation_period,l=e.orbital_period,c=e.diameter,u=e.climate,o=e.gravity,i=e.terrain,m=e.surface_water,s=e.population,f=e.films,d=e.created,p=e.edited,E=e.url;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,u),r.a.createElement("td",null,o),r.a.createElement("td",null,i),r.a.createElement("td",null,m),r.a.createElement("td",null,s),r.a.createElement("td",null,f),r.a.createElement("td",null,d),r.a.createElement("td",null,p),r.a.createElement("td",null,E))})))))},s=a(5),f=a.n(s),d=a(8),p=a(2);var E=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(p.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(""),m=Object(p.a)(o,2),s=m[0],E=m[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),j=v[0],h=v[1],O=Object(n.useState)(),y=Object(p.a)(O,2),N=y[0],x=y[1],C=Object(n.useState)([]),g=Object(p.a)(C,2),w=g[0],B=g[1],k=Object(n.useState)({filters:{filterByName:{name:""},filterByNumericValues:[]}}),S=Object(p.a)(k,2),V=S[0],_=S[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.results,u(n),B(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){!function(){var e=V.filters,t=e.filterByName.name,a=e.filterByNumericValues,n=c.filter((function(e){return e.name.toLowerCase().includes(t)})).filter((function(e){return function(e,t){return t.every((function(t){var a=t.column,n=t.comparison,r=t.value;return"maior que"===n?Number(e[a])>Number(r):"menor que"===n?Number(e[a])<Number(r):Number(e[a])===Number(r)}))}(e,a)}));B(n)}()}),[c,V]);var q={data:c,setText:_,text:V,dataFilter:w,setColumn:E,setValue:x,setCompa:h,comparison:j,column:s,value:N,dataFilterSet:B};return r.a.createElement(i.Provider,{value:q},t)};var b=function(){return r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement(m,null)))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d58a0fc2.chunk.js.map