(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return p});var r=t(7),a=t.n(r),i=t(0),o=t.n(i),c=(t(147),t(158)),l=t.n(c),u=t(157),s=t.n(u),d=(t(225),t(151)),m=t(152),f=t(165),g=function(n){function e(){return n.apply(this,arguments)||this}return a()(e,n),e.prototype.render=function(){var n=l()(this,"props.data.site.siteMetadata.title"),e=l()(this,"props.data.allContentfulBlogPost.edges");return o.a.createElement(m.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(s.a,{title:n}),o.a.createElement(d.d,null,o.a.createElement(d.a,{title:"hey"})),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"section-headline"},"Recent articles"),o.a.createElement("ul",{className:"article-list"},e.map(function(n){var e=n.node;return o.a.createElement("li",{key:e.slug},o.a.createElement(f.a,{article:e}))})))))},e}(o.a.Component);e.default=g;var p="1833322291"},147:function(n,e,t){"use strict";t.d(e,"b",function(){return s});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(33),l=t.n(c);t.d(e,"a",function(){return l.a});t(148);var u=a.a.createContext({}),s=function(n){return a.a.createElement(u.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(n,e,t){var r;n.exports=(r=t(150))&&r.default||r},150:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(55),l=t(2),u=function(n){var e=n.location,t=l.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},151:function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"colors",function(){return a}),t.d(r,"gradients",function(){return i}),t.d(r,"textSlanted",function(){return o}),t.d(r,"transDefault",function(){return c}),t.d(r,"transFunction",function(){return l}),t.d(r,"transObject",function(){return u}),t.d(r,"transition",function(){return s}),t.d(r,"border",function(){return d}),t.d(r,"letterSpacing",function(){return m});var a={mainWhite:"#fffdff",mainBlack:"#242223",mainRed:"#cb322b",mainRed2:"#481e20",mainGrey:"#999",mainGrey2:"#5b4348",mainGrey3:"#dcdfe2"},i={redGrad:"linear-gradient(to right, #481e20 0%, #cb322b 100%)",redGrad2:"linear-gradient(to right bottom, #481e20 0%, #cb322b 100%)",blackGrad:"linear-gradient(to right, #242223 75%, #242223 100%)",greyGrad:"linear-gradient(to right, #eee 50%, #ddd 100%)"},o="font-family:'Caveat', cursive;",c="transition:all 0.5s ease-in-out",l=function(n,e,t){return void 0===n&&(n="all"),void 0===e&&(e="0.5s"),void 0===t&&(t="linear"),"transition:"+n+" "+e+" "+t},u=function(n){var e=n.property,t=void 0===e?"all":e,r=n.time,a=void 0===r?"0.5s":r,i=n.type;return"transition: "+t+" "+a+" "+(void 0===i?"ease-in-out":i)},s=function(n){var e=n.property,t=void 0===e?"all":e,r=n.time,a=void 0===r?"0.5s":r,i=n.type;return"transition: "+t+" "+a+" "+(void 0===i?"ease-in-out":i)},d=function(n){var e=n.width,t=void 0===e?"0.15rem":e,r=n.type,a=void 0===r?"solid":r,i=n.color;return"border:"+t+" "+a+" "+(void 0===i?"white":i)},m=function(n){var e=n.spacing;return"letter-spacing:"+(void 0===e?"0.1rem":e)},f=t(145),g=t.n(f),p=t(0),v=t.n(p),h=t(146),b=t(156),E=t.n(b);function y(){var n=g()(["\n  background: "," url(",")\n    center/cover fixed no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 50vh;\n"]);return y=function(){return n},n}function _(){var n=g()(["\n  background: ",",\n    url(",") center/cover fixed no-repeat;\n  min-height: 30vh;\n"]);return _=function(){return n},n}function k(){var n=g()(["\n  min-height: calc(100vh - 55.78px);\n  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.4)),\n    url(",") center/cover fixed no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);\n"]);return k=function(){return n},n}function x(n){var e=n.img,t=n.children;return v.a.createElement(N,{img:e},t)}function w(n){var e=n.img,t=n.children;return v.a.createElement(R,{img:e},t)}var N=h.b.header(k(),function(n){return n.img}),R=Object(h.b)(N)(_(),r.gradients.redGrad,function(n){return n.img});h.b.header(y(),r.gradients.redGrad,function(n){return n.img});function S(){var n=g()(["\n  margin-bottom: 3rem;\n  text-align: center;\n  .title {\n    color: ",";\n    font-size: 3rem;\n    text-transform: uppercase;\n    ","\n  }\n\n  .subtitle {\n    color: ",";\n  }\n"]);return S=function(){return n},n}function j(n){var e=n.title,t=n.subtitle,r=n.children;return v.a.createElement(P,null,v.a.createElement("h1",{className:"title"},e),v.a.createElement("p",{className:"subtitle"},t),r)}x.defaultProps={img:E.a},w.defaultProps={img:E.a},E.a;var P=h.b.div(S(),r.colors.mainWhite,r.letterSpacing({spacing:"0.1rem"}),r.colors.mainWhite);function C(){var n=g()(["\n  margin: 4rem auto;\n"]);return C=function(){return n},n}j.defaultProps={title:"default title"};var G=h.b.section(C());function q(){var n=g()(["\n text-align: center;\n  ",";\n\n  .title{\n    font-size: 2rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #cb322b, #481e20);\n    -webkit-background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n}\n    font-size: 2rem;\n    text-transform: uppercase;\n\n  }\n  .underline {\n    width: 5rem;\n    height: 0.2rem;\n    margin: 1rem auto;\n    background: ",";\n  }\n"]);return q=function(){return n},n}function z(n){var e=n.title;n.message;return v.a.createElement(B,null,v.a.createElement("h1",{className:"title"},e))}var B=h.b.div(q(),r.letterSpacing({spacing:".3rem"}),r.colors.mainBlack);function O(){var n=g()(["\n  color: ",";\n  border: solid 1px ",";\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"]);return O=function(){return n},n}function W(){var n=g()(["\n  display: block;\n  padding: 0.5rem 1rem;\n  border: solid 1px ",";\n  color: ",";\n  background: transparent;\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  letter-spacing: 0.1rem;\n\n  font-weight: 700;\n  ",";\n  ",";\n  &:hover {\n    transform: translateY(-5px);\n    cursor: pointer;\n  }\n"]);return W=function(){return n},n}z.defaultProps={title:"default title"};var T=h.b.button(W(),r.colors.mainWhite,r.colors.mainWhite,r.border({color:""+r.colors.mainWhite}),r.transition({}));Object(h.b)(T)(O(),r.colors.mainBlack,r.colors.mainBlack,r.colors.mainRed,r.colors.mainWhite);t.d(e,"g",function(){return r}),t.d(e,"c",function(){return x}),t.d(e,"d",function(){return w}),t.d(e,"a",function(){return j}),t.d(e,"b",function(){return T}),t.d(e,"e",function(){return G}),t.d(e,"f",function(){return z})},152:function(n,e,t){"use strict";var r=t(145),a=t.n(r),i=t(7),o=t.n(i),c=t(0),l=t.n(c),u=(t(147),t(163),t(164),t(146));function s(){var n=a()(["\n  /* font-family: 'Open Sans', sans-serif; */\n  font-family: 'Dosis', sans-serif;\n"]);return s=function(){return n},n}function d(){return l.a.createElement(m,null,l.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),l.a.createElement("label",{for:"navi-toggle",className:"navigation__button"},l.a.createElement("span",{className:"navigation__icon"}," ")),l.a.createElement("div",{className:"navigation__background"}," "),l.a.createElement("nav",{className:"navigation__nav"},l.a.createElement("ul",{className:"navigation__list"},l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"/",className:"navigation__link"},"Home")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"/blog",className:"navigation__link"},"Blog")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"/faq",className:"navigation__link"},"FAQ")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"/download",className:"navigation__link"},"Download")))))}var m=u.b.div(s());function f(){var n=a()(["\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  html {\n    text-rendering: optimizeLegibility;\n    overflow-x: hidden;\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    background-color: #B8C2CC;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  html, body {\n    font-family: 'Open Sans', sans-serif;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  a {\n    color: #cb322b;\n    text-decoration: none;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n  font-family: 'Dosis', sans-serif;\n}\n"]);return f=function(){return n},n}var g=Object(u.a)(f());function p(){var n=a()([""]);return p=function(){return n},n}var v=function(n){function e(){return n.apply(this,arguments)||this}return o()(e,n),e.prototype.render=function(){var n=this.props,e=(n.location,n.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",l.a.createElement(h,null,l.a.createElement(g,null),l.a.createElement(d,null),e)},e}(l.a.Component),h=u.b.div(p());e.a=v},156:function(n,e,t){n.exports=t.p+"static/homeBcg-0cee4e6cea5bc8f474cf066fc186a1d2.jpeg"},165:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(147),o=t(149),c=t.n(o),l=t(171),u=t.n(l);e.a=function(n){var e=n.article;return a.a.createElement("div",{className:u.a.preview},a.a.createElement(c.a,{alt:"",fluid:e.heroImage.fluid}),a.a.createElement("h3",{className:u.a.previewTitle},a.a.createElement(i.a,{to:"/blog/"+e.slug},e.title)),a.a.createElement("small",null,e.publishDate),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description.childMarkdownRemark.html}}),e.tags.map(function(n){return a.a.createElement("p",{className:u.a.tag,key:n},n)}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-78d3bc43d386a0128eb4.js.map