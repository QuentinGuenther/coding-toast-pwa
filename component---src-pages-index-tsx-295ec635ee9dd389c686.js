(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"611q":function(e,t,a){e.exports={container:"Footer-module--container--2B6wd",logoImage:"Footer-module--logoImage--GM7w0",leftAlign:"Footer-module--leftAlign--3KmXJ",rightAlign:"Footer-module--rightAlign--1kmGh",links:"Footer-module--links--2QtQn",copyright:"Footer-module--copyright--meqTJ"}},"6UKj":function(e,t,a){e.exports={primaryBtn:"ButtonToBlogs-module--primaryBtn--38aZd"}},OP2a:function(e,t,a){},"P/1j":function(e,t,a){e.exports={cardTitleContainer:"CardTitle-module--card-title-container--hWNU7",cardTitleBackground:"CardTitle-module--card-title-background--1gOZF",cardTitle:"CardTitle-module--card-title--37jvc"}},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("NqE+"),o=a("+ego"),c=a("z8IK"),i=a("riab"),s=a("y5iE"),u=a("pZdh"),d=a.n(u),m=a("TBFr"),p=a("y40A"),b=a.n(p),g=function(e){var t=e.children;return n.createElement("article",{className:b.a.card},t)},f=function(e){var t=e.text;return n.createElement("div",null,n.createElement("p",{className:"text-color-primary "},t))},h=a("hdpK"),E=a.n(h),v=function(e){var t=e.publishDate;return n.createElement("p",{className:E.a.meta+" text-style-muted text-color-secondary"},t)},y=a("P/1j"),k=a.n(y),x=function(e){var t=e.title,a=e.backgroundUrl,r={backgroundImage:"url("+a+")",backgroundSize:"cover",marginBottom:"1em"};return n.createElement("div",{className:k.a.cardTitleContainer},a?n.createElement("div",{style:r,className:k.a.cardTitleBackground}):"",n.createElement("h2",{style:a?{height:"125px"}:{},className:k.a.cardTitle+" text-color-primary"},t))},N=a("OP2a"),T=a.n(N),w=a("iLnZ"),B=a.n(w),q=a("Wbzz"),j=function(e){var t=e.toUrl,a=e.buttonText,r=e.className;return n.createElement(q.a,{to:t,className:r},a)},C=function(e){var t=e.toUrl;return r.a.createElement(j,{toUrl:t,buttonText:"Read More",className:B.a.buttonWithIcon+" text-style-label"})},I=function(e){var t=e.allMarkdownRemark;return n.createElement("section",{className:T.a.list},t.allMarkdownRemark.edges.map((function(e){var t=e.node.frontmatter,a=t.title,r=t.banner,l=t.description,o=t.publishDate,c=e.node.id;return n.createElement(g,{key:c},n.createElement(x,{title:a,backgroundUrl:r}),n.createElement(f,{text:l}),n.createElement(v,{publishDate:o}),n.createElement(C,{toUrl:"/"}))})))},U=a("6UKj"),F=a.n(U),J=function(){return n.createElement(j,{toUrl:"/",buttonText:"Go To All Posts",className:F.a.primaryBtn+" text-style-label"})},A=Object(i.a)((function(){var e=c.data,t=n.useContext(s.a);return n.createElement(m.a,{className:d.a.container},n.createElement("h1",{className:"text-color-primary",ref:t.ref},"Catch Up On The Latest"),n.createElement(I,{allMarkdownRemark:e}),n.createElement(J,null))})),D=a("611q"),M=a.n(D),K=function(){return n.createElement("div",null,n.createElement("p",{className:M.a.copyright},"© ",(new Date).getFullYear()," Coding Toast",n.createElement("br",null),"Quentin Guenther, Nathan Corbin"))},P=a("Hr7b"),O=function(){return n.createElement("div",{className:M.a.links},n.createElement(q.a,{to:"/",className:M.a.leftAlign},"Privacy Policy"),n.createElement(q.a,{to:"/",className:M.a.rightAlign},"Terms of Service"))},W=function(){return n.createElement(m.a,{className:M.a.container},n.createElement(P.a,{styles:M.a}),n.createElement(O,null),n.createElement(K,null))};t.default=function(){return n.createElement(o.a,null,n.createElement(l.a,null,n.createElement(A,null),n.createElement(W,null)))}},hdpK:function(e,t,a){e.exports={meta:"CardMeta-module--meta--3b41B"}},iLnZ:function(e,t,a){e.exports={buttonWithIcon:"ButtonWithIcon-module--buttonWithIcon--as97y"}},pZdh:function(e,t,a){e.exports={container:"BlogHighlightSection-module--container--25FI9"}},y40A:function(e,t,a){e.exports={card:"CardBody-module--card--1McLa"}},z8IK:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"9e15759d-7b0d-5f69-b59b-dd75e338463a","frontmatter":{"banner":"https://francis.ventures/wp-content/uploads/2018/03/nest-blog-banner.jpg","description":"varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus","title":"blog-post-placerholder1","publishDate":"January 1, 1970"}}},{"node":{"id":"6e7d7f2c-f1c4-5366-8aa8-b3aba172db00","frontmatter":{"banner":"https://francis.ventures/wp-content/uploads/2018/03/nest-blog-banner.jpg","description":"second blog post","title":"blog-post-placerholder2","publishDate":"January 1, 1970"}}},{"node":{"id":"4ab3b8f2-230e-5ee0-a141-ce4d54a2bdc1","frontmatter":{"banner":"https://francis.ventures/wp-content/uploads/2018/03/nest-blog-banner.jpg","description":"third blog post","title":"blog-post-placerholder3","publishDate":"January 1, 1970"}}},{"node":{"id":"2f899446-90fd-5b4f-86fb-713fd46e68ea","frontmatter":{"banner":"https://francis.ventures/wp-content/uploads/2018/03/nest-blog-banner.jpg","description":"fourth blog post","title":"blog-post-placerholder4","publishDate":"January 1, 1970"}}},{"node":{"id":"4cdb020a-403d-510b-9718-aca81937f2c2","frontmatter":{"banner":"https://francis.ventures/wp-content/uploads/2018/03/nest-blog-banner.jpg","description":"fifth blog post","title":"blog-post-placerholder5","publishDate":"January 1, 1970"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-295ec635ee9dd389c686.js.map