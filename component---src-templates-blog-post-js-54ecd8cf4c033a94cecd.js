(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,n,a){"use strict";a.r(n),a.d(n,"pageQuery",function(){return v});var t=a(7),r=a.n(t),i=a(0),o=a.n(i),l=a(157),c=a.n(l),s=a(158),u=a.n(s),m=a(155),d=a.n(m),f=a(151),h=a(171),p=a.n(h),g=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=u()(this.props,"data.contentfulBlogPost"),n=u()(this.props,"data.site.siteMetadata.title");return o.a.createElement(f.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(c.a,{title:e.title+" | "+n}),o.a.createElement("div",{className:p.a.hero},o.a.createElement(d.a,{className:p.a.heroImage,alt:e.title,fluid:e.heroImage.fluid})),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{className:"section-headline"},e.title),o.a.createElement("p",{style:{display:"block"}},e.publishDate),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}}))))},n}(o.a.Component);n.default=g;var v="2423455056"},147:function(e,n,a){"use strict";a.d(n,"b",function(){return u});var t=a(0),r=a.n(t),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(n,"a",function(){return c.a});a(148);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,n,a){var t;e.exports=(t=a(150))&&t.default||t},150:function(e,n,a){"use strict";a.r(n);a(34);var t=a(0),r=a.n(t),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var n=e.location,a=c.default.getResourcesForPathnameSync(n.pathname);return a?r.a.createElement(l.a,Object.assign({location:n,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},151:function(e,n,a){"use strict";var t=a(145),r=a.n(t),i=a(7),o=a.n(i),l=a(0),c=a.n(l),s=(a(147),a(163),a(164),a(146));function u(){var e=r()(["\n  /* font-family: 'Open Sans', sans-serif; */\n  font-family: 'Dosis', sans-serif;\n"]);return u=function(){return e},e}function m(){return c.a.createElement(d,null,c.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),c.a.createElement("label",{for:"navi-toggle",className:"navigation__button"},c.a.createElement("span",{className:"navigation__icon"}," ")),c.a.createElement("div",{className:"navigation__background"}," "),c.a.createElement("nav",{className:"navigation__nav"},c.a.createElement("ul",{className:"navigation__list"},c.a.createElement("li",{className:"navigation__item"},c.a.createElement("a",{href:"/",className:"navigation__link"},"Home")),c.a.createElement("li",{className:"navigation__item"},c.a.createElement("a",{href:"/blog",className:"navigation__link"},"Blog")),c.a.createElement("li",{className:"navigation__item"},c.a.createElement("a",{href:"/faq",className:"navigation__link"},"FAQ")),c.a.createElement("li",{className:"navigation__item"},c.a.createElement("a",{href:"/download",className:"navigation__link"},"Download")))))}var d=s.b.div(u());function f(){var e=r()(["\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  html {\n    text-rendering: optimizeLegibility;\n    overflow-x: hidden;\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    background-color: #B8C2CC;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  html, body {\n    font-family: 'Open Sans', sans-serif;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  a {\n    color: #cb322b;\n    text-decoration: none;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n  font-family: 'Dosis', sans-serif;\n}\n"]);return f=function(){return e},e}var h=Object(s.a)(f());function p(){var e=r()([""]);return p=function(){return e},e}var g=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){var e=this.props,n=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/gatsby-contentful-starter/",c.a.createElement(v,null,c.a.createElement(h,null),c.a.createElement(m,null),n)},n}(c.a.Component),v=s.b.div(p());n.a=g}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-54ecd8cf4c033a94cecd.js.map