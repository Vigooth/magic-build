(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{646:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=y(i(15)),l=y(i(14)),o=y(i(13)),s=y(i(12)),a=y(i(11)),r=i(1),c=y(r),u=i(8),d=i(33),f=y(i(0)),p=y(i(200)),m=i(142),v=i(199),h=i(69);function y(e){return e&&e.__esModule?e:{default:e}}i(288),y(i(287));var E=function(e){function t(){var e,i,o,a;(0,l.default)(this,t);for(var r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];return i=o=(0,s.default)(this,(e=t.__proto__||(0,n.default)(t)).call.apply(e,[this].concat(c))),o.onScroll=function(){o.toggleFilterBarOnTop()},o.toggleFilterBarOnTop=function(){var e=document.getElementsByClassName("filtersGroup")[0],t=document.getElementsByClassName("filterScroll")[0];void 0!==e&&((0,m.getPosition)(e).y<0&&(e.classList.add("fixed"),t.classList.add("active")),document.documentElement.scrollTop<164&&(e.classList.remove("fixed"),t.classList.remove("active")))},o.isLoading=function(){var e=o.props,t=e.set,i=e.match.params;return _.isEmpty(t)||void 0===t[i.set]},a=i,(0,s.default)(o,a)}return(0,a.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){this.props.fetchSet(this.props.match.params.set)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function(){var e=this.props,t=e.set,i=e.visibilityFilter,n=e.match.params;return this.isLoading()?c.default.createElement(h.Spinner,null):c.default.createElement("div",{className:"set"},c.default.createElement("h1",{className:"titleContainer"},t[n.set].name),c.default.createElement(v.SetControls,{visibilityFilter:i}),c.default.createElement(p.default,{set:t[n.set]}))}}]),t}(r.Component);E.propTypes={set:f.default.object.isRequired,visibilityFilter:f.default.object.isRequired},t.default=(0,u.connect)(function(e){return{set:(0,d.filterSet)(e),visibilityFilter:e.visibilityFilter}},{fetchSet:d.fetchSet})(E)}}]);
//# sourceMappingURL=0-bundle.js.map