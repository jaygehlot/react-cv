(this["webpackJsonpreactjs-cv"]=this["webpackJsonpreactjs-cv"]||[]).push([[0],{104:function(e,a,t){e.exports=t(132)},132:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),o=t.n(r),s=t(17),l=t(68),c=t(179),m=t(176),d=t(60),p=t.n(d),u=t(158),g=t(175),f=t(159),b=t(14),h=t.n(b),v=t(89),y=t(90),E=t(91),S=new(function(){function e(){Object(v.a)(this,e)}return Object(y.a)(e,[{key:"get",value:function(){return JSON.parse(JSON.stringify(E))}},{key:"find",value:function(e){var a=this.get();return e&&(a.profile=this.filterItems(a.profile,e),this.filterCompositeItems(a.technicalSkills,e),this.filterCompositeItems(a.careerHistory,e)),a}},{key:"filterCompositeItems",value:function(e,a){if(e.items){for(var t=0;t<e.items.length;t++)e.items[t]=this.filterItems(e.items[t],a),e.items[t].projectItems&&(e.items[t].projectItems=null);e.items=e.items.filter((function(e){return e.items&&e.items.length>0})),e.expanded=e.items.length>0}return e}},{key:"filterItems",value:function(e,a){return e.items&&(e.items=e.items.filter((function(e){return e.toUpperCase().includes(a.toUpperCase())})).map((function(e){return e.replace(new RegExp(a,"gi"),"<mark>"+a+"</mark>")})),e.expanded=e.items.length>0),e}}]),e}()),x=t(136),k=t(180),C=t(178),w=t(162),D=t(177),T=t(160),A=t(163),P=t(164),I=t(165),J=t(166),j=t(161),M=t(65),N=t(167),R=t(168),O=t(169),B=h()((function(e){return{avatar:{width:e.spacing(14),height:e.spacing(14)},icon:{color:e.palette.getContrastText(e.palette.text.primary)},header:{padding:e.spacing(2),borderRadius:e.spacing(1),backgroundColor:e.palette.primary.main},name:{color:e.palette.getContrastText(e.palette.text.primary)},avatarBox:{padding:e.spacing(1)},search:{backgroundColor:e.palette.getContrastText(e.palette.text.primary),borderRadius:e.spacing(1)},divider:{height:2,backgroundColor:e.palette.getContrastText(e.palette.text.primary)},box:{color:e.palette.getContrastText(e.palette.text.primary),paddingLeft:e.spacing(2)},colorBox:{backgroundColor:e.palette.getContrastText(e.palette.text.primary),borderRadius:8,textAlign:"center"}}}));function L(e){var a=B(),t=e.data,r=i.a.useState(!0),o=Object(s.a)(r,2),m=o[0],d=o[1],p=i.a.useState("email"),u=Object(s.a)(p,2),g=u[0],b=u[1],h=i.a.useState(t.email),v=Object(s.a)(h,2),y=v[0],E=v[1],S=function(e){d(g!==e||!m),b(e)};return Object(n.useEffect)((function(){E(t[g])}),[g,t]),i.a.createElement(x.a,{className:a.header},i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,xs:6},i.a.createElement(f.a,{container:!0,spacing:1},i.a.createElement(f.a,{item:!0,xs:4},i.a.createElement(c.a,{className:a.avatarBox},i.a.createElement(k.a,{alt:t.name,src:"/reactjs-cv/static/images/jay-gehlot.jpg",className:a.avatar}))),i.a.createElement(f.a,{item:!0,xs:8,className:a.name},i.a.createElement(l.a,{variant:"h4"},t.name),i.a.createElement(l.a,{variant:"h5"},t.title),i.a.createElement(l.a,{variant:"h6"},t.type)))),i.a.createElement(f.a,{item:!0,xs:6},i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,xs:6},i.a.createElement(C.a,{onClick:function(){return S("email")}},i.a.createElement(c.a,null,i.a.createElement(T.a,{className:a.icon,fontSize:"default"}),i.a.createElement(j.a,{in:"email"===g&&m},i.a.createElement(w.a,{className:a.divider})))),i.a.createElement(C.a,{onClick:function(){return S("mobile")}},i.a.createElement(c.a,null,i.a.createElement(A.a,{className:a.icon,fontSize:"default"}),i.a.createElement(j.a,{in:"mobile"===g&&m},i.a.createElement(w.a,{className:a.divider})))),i.a.createElement(C.a,{onClick:function(){return S("linkedin")}},i.a.createElement(c.a,null,i.a.createElement(P.a,{className:a.icon,fontSize:"default"}),i.a.createElement(j.a,{in:"linkedin"===g&&m},i.a.createElement(w.a,{className:a.divider})))),i.a.createElement(C.a,{onClick:function(){return S("github")}},i.a.createElement(c.a,null,i.a.createElement(I.a,{className:a.icon,fontSize:"default"}),i.a.createElement(j.a,{in:"github"===g&&m},i.a.createElement(w.a,{className:a.divider}))))),i.a.createElement(f.a,{item:!0,xs:6},i.a.createElement(D.a,{size:"small",name:"search",label:"Search a keyword",variant:"filled",fullWidth:!0,className:a.search,onChange:e.onChange})),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(j.a,{in:m},i.a.createElement(c.a,{className:a.box},y))),i.a.createElement(f.a,{item:!0,xs:6},"\xa0"),i.a.createElement(f.a,{item:!0,xs:6},i.a.createElement(c.a,{className:a.colorBox},i.a.createElement(c.a,{display:"inline"},i.a.createElement(C.a,{onClick:function(){return e.changeTheme(M.a)}},i.a.createElement(J.a,{style:{color:M.a[500]},fontSize:"small"}))),i.a.createElement(c.a,{display:"inline"},i.a.createElement(C.a,{onClick:function(){return e.changeTheme(N.a)}},i.a.createElement(J.a,{style:{color:N.a[500]},fontSize:"small"}))),i.a.createElement(c.a,{display:"inline"},i.a.createElement(C.a,{onClick:function(){return e.changeTheme(R.a)}},i.a.createElement(J.a,{style:{color:R.a[500]},fontSize:"small"}))),i.a.createElement(c.a,{display:"inline"},i.a.createElement(C.a,{onClick:function(){return e.changeTheme(O.a)}},i.a.createElement(J.a,{style:{color:O.a[500]},fontSize:"small"}))),i.a.createElement(c.a,{display:"inline"},i.a.createElement(C.a,{onClick:function(){return e.changeTheme("black")}},i.a.createElement(J.a,{style:{color:"#000"},fontSize:"small"})))))))))}var W=h()((function(e){return{type:{textAlign:"justify",textIndent:e.spacing(4),paddingBottom:e.spacing(1)}}}));function F(e){var a=W();return e.data.items.map((function(e){return i.a.createElement(c.a,{className:a.type,dangerouslySetInnerHTML:{__html:e}})}))}function z(e){return e.data.items.filter((function(e){return e.expanded})).map((function(e){return i.a.createElement(c.a,null,i.a.createElement("b",null,e.name,": "),i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.items.join(", ")+"."}}))}))}var H=t(171),U=t(170),G=h()((function(e){return{root:{alignItems:"center"},avatar:{width:e.spacing(4),height:e.spacing(4)},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:500})},expandOpen:{transform:"rotate(180deg)",transition:e.transitions.create("transform",{duration:500})},icon:{textAlign:"end",color:e.palette.primary.main},divider:{height:1,marginBottom:e.spacing(1)},company:{fontWeight:"bold",color:e.palette.primary.dark,fontSize:"1.5em"},companyOther:{fontWeight:"bold",color:e.palette.primary.dark,fontSize:"1.1em"},period:{color:e.palette.primary.light},title:{textAlign:"end"},iconContainer:{textAlign:"end"},item:{display:"list-item",marginLeft:e.spacing(3)},content:{paddingBottom:e.spacing(2)}}}));function q(e){var a=G(),t=e.data,r=i.a.useState(e.expanded),o=Object(s.a)(r,2),l=o[0],m=o[1];return Object(n.useEffect)((function(){m(e.expanded)}),[e]),i.a.createElement(f.a,{container:!0,spacing:1,className:a.root},i.a.createElement(f.a,{item:!0,xs:4,className:t.items?a.company:a.companyOther},i.a.createElement(f.a,{container:!0},t.items&&t.logo?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{item:!0,xs:1},i.a.createElement(k.a,{variant:"square",src:t.logo,className:a.avatar})),i.a.createElement(f.a,{item:!0,xs:11,style:{paddingLeft:12}},t.company)):i.a.createElement(i.a.Fragment,null,t.company))),i.a.createElement(f.a,{item:!0,xs:3,className:a.period},t.period),i.a.createElement(f.a,{item:!0,xs:5,className:a.title},i.a.createElement(c.a,{padding:1,display:"inline"},t.title),i.a.createElement(C.a,{size:"small",className:l?a.expandOpen:a.expand,onClick:function(){m(!l)}},t.items&&i.a.createElement(U.a,{className:a.icon}))),t.items&&i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(w.a,{className:a.divider})),i.a.createElement(H.a,{in:l},i.a.createElement(c.a,{className:a.content},i.a.createElement(f.a,{item:!0,xs:12},t.items&&t.items.map((function(e){return i.a.createElement(c.a,{className:a.item,dangerouslySetInnerHTML:{__html:e}})}))),t.projectItems&&i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement("h4",{style:{margin:12}},t.projectTitle),t.projectItems.map((function(e){return i.a.createElement(c.a,{className:a.item,dangerouslySetInnerHTML:{__html:e}})}))))))}function K(e){return e.data.items.map((function(e){return i.a.createElement(q,{data:e,expanded:e.expanded})}))}var V=t(172),_=t(173),Q=t(174),X=h()((function(e){return{card:{padding:e.spacing(1),borderRadius:e.spacing(1)},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:500})},expandOpen:{transform:"rotate(180deg)",transition:e.transitions.create("transform",{duration:500})},icon:{color:e.palette.primary.main},divider:{height:2},header:{padding:e.spacing(1)}}}));function Y(e){var a=X(),t=e.title,r=i.a.useState(e.expanded),o=Object(s.a)(r,2),l=o[0],c=o[1];return Object(n.useEffect)((function(){c(e.expanded)}),[e]),i.a.createElement(V.a,{className:a.card},i.a.createElement(_.a,{className:a.header,title:t,action:i.a.createElement(C.a,{className:l?a.expandOpen:a.expand,onClick:function(){c(!l)}},i.a.createElement(U.a,{className:a.icon}))}),i.a.createElement(H.a,{in:l},i.a.createElement(w.a,{className:a.divider}),i.a.createElement(Q.a,{style:{padding:16}},e.children)))}function Z(e){var a=e.data;return i.a.createElement(f.a,{container:!0,spacing:2},a.items.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{item:!0,xs:4,style:{fontSize:"1.2rem"}},e.title),i.a.createElement(f.a,{item:!0,xs:8,style:{alignSelf:"center"}},e.detail))})))}function $(e){var a=e.data;return i.a.createElement(f.a,{container:!0,spacing:1},a.items.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{item:!0,xs:4},i.a.createElement("b",null,e.title)),i.a.createElement(f.a,{item:!0,xs:8},e.detail))})))}var ee=h()((function(e){return{type:{textAlign:"justify",textIndent:e.spacing(4),paddingBottom:e.spacing(1)}}}));function ae(e){var a=ee();return e.data.items.map((function(e){return i.a.createElement(c.a,{className:a.type,dangerouslySetInnerHTML:{__html:e}})}))}var te=h()((function(e){return{root:{"& b":{color:e.palette.text.secondary},"& mark":{color:e.palette.mark.color,backgroundColor:e.palette.mark.backgroundColor}}}}));function ne(e){var a=te(),t=i.a.useState(S.get()),n=Object(s.a)(t,2),r=n[0],o=n[1];return i.a.createElement(f.a,{container:!0,spacing:2,className:a.root},i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(L,{data:r.header,onChange:function(e){o(S.find(e.target.value))},changeTheme:e.changeTheme})),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.profile.title,expanded:r.profile.expanded},i.a.createElement(F,{data:r.profile}))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.currentStudy.title,expanded:r.currentStudy.expanded},i.a.createElement(ae,{data:r.currentStudy}))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.technicalSkills.title,expanded:r.technicalSkills.expanded},i.a.createElement(z,{data:r.technicalSkills}))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.careerHistory.title,expanded:r.careerHistory.expanded},i.a.createElement(K,{data:r.careerHistory}))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.education.title,expanded:r.education.expanded},i.a.createElement(Z,{data:r.education}))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.courses.title,expanded:r.courses.expanded},i.a.createElement($,{data:r.courses}))))}var ie=t(64),re=t(66),oe=p()({typography:{h4:{fontWeight:"bold"},h5:{fontWeight:"bold"},fontSize:10,htmlFontSize:12},palette:{primary:{main:"#000",contrastText:"#000"},secondary:{main:"#000"},text:{primary:"#000",secondary:"#000"},divider:"#000",background:{default:ie.a[300]},mark:{color:"#ffffff",backgroundColor:"#ef6c00"}},breakpoints:{values:{md:960}}});function se(e){return p()({typography:{h4:{fontWeight:"bold"},h5:{fontWeight:"bold"},fontSize:10,htmlFontSize:12},palette:{primary:e,secondary:re.a,text:{primary:e[900],secondary:re.a[500]},divider:e[500],background:{default:ie.a[300]},mark:{color:"#ffffff",backgroundColor:"#ef6c00"}},breakpoints:{values:{md:960}}})}function le(){var e=i.a.useState(se(M.a)),a=Object(s.a)(e,2),t=a[0],n=a[1];return i.a.createElement(u.a,{theme:t},i.a.createElement(g.a,null),i.a.createElement(l.a,null,i.a.createElement(c.a,{padding:2},i.a.createElement(m.a,{maxWidth:"md"},i.a.createElement(ne,{changeTheme:function(e){n("black"===e?oe:se(e))}})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e){e.exports=JSON.parse('{"header":{"name":"Jay Gehlot","title":"Senior Software Engineer","email":"gehlotj@gmail.com","mobile":"* **** ****","linkedin":"linkedin.com/in/jaygehlot","github":"github.com/jaygehlot"},"profile":{"title":"PROFILE","expanded":true,"items":["I\u2019m a seasoned senior software engineer experienced with a plethora of technologies, having worked with globally dispersed teams and well versed with Agile methodologies - a Certified Scrum Master. I\u2019m able to fit easily into or lead any agile team, taking a humble pragmatic approach and value-driven.  I will seek to and actively encourage pair/mob programming, advocate ATTD, TDD and help in defining or supporting the teams test approach, DoR and DoD; looking to add value to the agile team immediately. I\u2019m keen to develop and mentor junior, mid-level and senior software engineers wherever the opportunity arises.","I\'m at home walking all the way up and down the language/technology stack chasing problems; flipping between layers of abstraction; and talking to both technical and non-technical people\u2026 all with the goal of building something that makes the world a little bit better."]},"currentStudy":{"title":"Currently Studying and Reading","expanded":false,"items":["AWS Certified Developer Associate DVA-C01 exam","Site Reliability Engineering by Betsy Beyer"]},"technicalSkills":{"title":"TECHNICAL SKILLS","expanded":true,"items":[{"name":"Languages","expanded":true,"items":["Java 8, have dabbled in Java 11","Groovy","Kotlin","Node JS","OOP","Functional Programming","A keen interest in Reactive Programming using WebFlux","Design Patterns"]},{"name":"Frameworks","expanded":true,"items":["Spring Framework (Core, MVC, WebFlux, JDBC, JaxRS, REST, Cache, Transaction Management, Security)","Spring Boot","Project Reactor","JPA","Maven","Gradle","NPM"]},{"name":"Queues","expanded":true,"items":["Rabbit MQ","Kafka"]},{"name":"Web Frameworks","expanded":true,"items":["React JS","HTML","Java Script","CSS","Material UI"]},{"name":"Processes","expanded":true,"items":["Agile","Scrum","Kanban","Continuous Integration (CI)","Continuous Delivery (CD)","GitLab Pipelines","Azure","Jenkins","Concourse","Pair Programming"]},{"name":"Test Driven Development (TDD)","expanded":true,"items":["JUnit","Mockito","SpringTest (test slices)"]},{"name":"Behaviour Driven Development (BDD)","expanded":true,"items":["Cucumber","JBehave","Spock","Wiremock"]},{"name":"Protocols","expanded":true,"items":["REST Services (JSON and XML)","Web Services","SOAP","HTTP/S","TCP","FTP","SNMP","SMPP","SS7","TLS"]},{"name":"Cloud & Container","expanded":true,"items":["Cloud Foundry","PCF","AWS","Docker","Kubernetes","Google Cloud Platform (GCP)","Azure"]},{"name":"Tools","expanded":true,"items":["IntelliJ Idea","XCode","Eclipse","Jira","Nexus","Jacoco","Git (GitHub, GitLab)","Terraform","Kibana","Prometheus","Apigee"]},{"name":"Databases","expanded":true,"items":["Oracle","SQL Server","MongoDB","Elastic Search"]},{"name":"Application Servers","expanded":true,"items":["Apache Server","Tomcat","Jetty","OC4J","JBoss"]},{"name":"Operating Systems","expanded":true,"items":["Linux","Solaris","Shell/Bash Script"]}]},"careerHistory":{"title":"CAREER HISTORY","expanded":true,"items":[{"expanded":true,"company":"Vodafone","period":"2019/02 \u2013 Present","title":"Senior Software Engineer","logo":"/reactjs-cv/static/images/vodafone.png","items":["Part of a team of backend Java devs designing and developing several Java 8 microservices and AWS lambdas such as product, inventory, catalogue as part of a digital platform across website & apps ensuring high availability.","Team Lead from June 2020 for group of 4 software engineers.","Developed & supported (through go live) new microservice for mobile switching as part of Ofcom regulation with tight deadlines and regular changing requirements.","Implemented inventory and product services changes for iPhone 12 release (Oct 2020) and support release in prod, with increased data load out-of-hours using a tailored <b>application scaling policy</b> within the CloudFormation templates.","Followed a TDD approach with unit, integration and acceptance test - pomodoro pairing service development style.","Use of SonarQube within pipeline for static analysis and a final check of code quality","Took part in team hackathon to build and demonstrate a POC using Resilience4J for circuit breaking and retry mechanism","Implemented and fine tuned ElasticSearch queries (repository layer) using Java as part of service development.","Drove refactoring of existing microservices ensuring loose coupling, increase test coverage, apply SOLID, DRY & KISS principles, whilst encouraging pair/mob programming within team and encouraging daily feature deployments to prod with safety first mindset","Lead team in migration from EC2 to Fargate, working closely with devops colleagues on best practises for maintaining CloudFormation templates, changing env vars relevant for the Fargate stack - deployed to prod with close monitoring and logging using Datadog and CloudWatch","Daily AWS usage, additionally attending AWS Meetups, GameDays arranged by Amazon and daily troubleshooting stack issues.","Act as PO and SM (whilst away) during sprint meetings","Train/mentor junior/mid level develops whilst remote pairing on features over Slack.","Interview potential new starters for Lead, Senior and Mid/Junior Engineers","Development and support maintenance of libraries used by all backend services","<b>Tech Used:</b> SonarQube, Java 8/11, Springboot 2, Docker, CloudFormation, Pair programming, Cucumber BDD, Maven, ECS/EC2/Fargate/S3/CloudWatch, Cl, AWS Systems manager, Azure, devops, ElasticSearch, Kibana, Datadog, Lombok, Jira, Maven, OpenAPI."]},{"expanded":true,"company":"Concur Solutions","period":"2017/10 \u2013 2019/01","title":"Senior Software Engineer","logo":"/reactjs-cv/static/images/mastercard.png","items":["Developed microservices using <b>Java 11</b>, <b>Kotlin</b>, <b>Spring Boot</b>, <b>Akka</b> backed with <b>Casandra</b>, <b>VoltDB</b> and <b>Oracle DB</b>.","Break down Java based SWB expense auditing system to smaller, self contained, microservices, using <b>Java 11</b>, <b>Spring Boot</b> backed by <b>RabbitMQ/Postgres</b> then migrated to <b>Kafka</b> for scaling and streaming APIs","Investigation / use of reactive framework <b>rxjava</b> for creation of non-blocking APIs (concept of backpressure)","Additionally involved in adding new business features with a test first approach, a full CI/CD pipeline with ample unit, integration and acceptance test coverage straight to prod.","Containerised and deployed microservices using <b>Docker</b> and <b>AWS</b>","Actively led the team whenever the opportunity arose.","Discussions with non-technical product teams, regular demonstrations internally / externally, training/technical development of junior & mid-level engineers","Migrated RabbitMQ cluster across multiple global regions in prod working closely with Prague based devs","Interview mid-level and senior devs for the team","<b>Tech Used:</b> Java 8, Springboot, Docker, puppet, pair programming, BDD, Gradle, AWS EC2/SNS/S3/ALB, iac, training, management, development, devops, agile, engineering, quality, cloud, aws, some kubernetes."]},{"expanded":true,"company":"moo.com","period":"2017/07 \u2013 2017/10 (1y 3m)","title":"Software Engineer","logo":"/reactjs-cv/static/images/hsbc.png","items":["Part of the Merchandise & Marketing crew in the eCom tribe working on legacy and new backend services.","Developed and integrated operable microservices using <b>Java 8</b>, <b>Spring Boot</b> backed with <b>MongoDB</b>.","Creation and improvement of ecommerce product set-up, including Experiments Platform, as well as Pricing and Product services.","Engineered experiments platform pairing with junior/mid-level devs using S3, lambdas and Optimizely (https://bit.ly/3cJVboD) for tech measures of success baseline for new shipping & pricing tool","Actively participated in Agile Guild to help improve agile working practises across teams.","Worked in agile environment with engineers using <b>TDD</b> for Unit, Integration and Acceptance Tests, once committed to master the feature code would make its way through a <b>CI</b> and <b>CD</b> pipeline.","Interviewed and on-boarded automation testers and software engineers.","Mentor and develop junior / mid-level engineers.","<b>Tech Used:</b>  Java 6/8, Spring, docker, pair programming, Gradle, AWS S3/lambdas, interview, mentor, agile, engineering, quality, culture"]},{"expanded":false,"company":"Marks & Spencer","period":"2015/01 \u2013 2017/07","title":"Software Engineer","logo":"/reactjs-cv/static/images/mns.jpeg","items":["<b>Mentored</b> and <b>guided</b> team members to improve their technical skills focusing on <b>TDD</b>, <b>Agile</b> and <b>CI</b> / <b>CD</b>.","Designed, created highly available (with multiple EC2 instances in different AZs) microservices; used Apigee, Java 8, Springboot, Gradle and Postgres (RDS) deployed to AWS using Concourse for flexible pipelines;","Used <b>AWS</b>, <b>Cloud Foundry</b> and <b>Docker</b> to deploy microservices, such as Product, Price, Category etc.","Built <b>AWS</b> infrastructure using <b>Terraform</b> such as VPC, Subnet, EC2, RDS, S3, Routing, Volumes, Lambda, etc.","Worked in <b>Agile</b> environment using <b>Scrum</b> and <b>Kanban</b> with <b>TDD</b> (Mockito), <b>BDD</b> and <b>Pair Programming</b>.","Created pipeline to build, release, deploy and deliver microservices using <b>Concourse CI</b> and <b>CD</b> tool.","Designed and created and maintainable microservices using <b>Pingdom</b> and <b>Loggly</b> tool.","Used <b>RabbitMQ</b> and <b>Kafka</b> to retrieve and store xml data exported from SAP system.","<b>Tech used:</b> Java 8, Springboot, Docker, Terraform, Pair programming, BDD, Gradle, AWS EC2/SNS/S3/, Concourse mentoring, agile, apigee, terragrunt, trello, Jira, swagger, mockito, dor, dod, CircleCI, nosql, postgres, mongodb, prometheus, grafana, Node JS, Swagger."],"projectTitle":"Projects","projectItems":["<b>Product Services \u2013 Microservices:</b> Provides REST APIs for marksandspencer.com and mobile app to sell products online.","<b>Price Services \u2013 Microservices:</b> Provides REST APIs for third parties and customer services."]},{"expanded":false,"company":"Yell.com","period":"2012/09 \u2013 2015/01 ","title":"Lead Engineer in Test","logo":"/reactjs-cv/static/images/sky.png","items":["Support/mentor/guide/trained Devs in Test working in various SCRUM teams; Led test engineers in India","Pairing with all members of multiple disciplined teams on dev & test tasks with deliver features to prod mindset","Responsible for \u201ctearing apart and refactoring\u201d existing test automation framework and make fit for use in SCRUM teams, mainly using RestAssured, WebDriver, Junit, Jbehave for BDD;","Jenkins pipeline creation and training for CI into Artifactory for automation framework + running of tests","Introduced use of wraith for FE image differentiation.","The go-to-person for questions, additions to Yells test automation automation framework;","Regular resourcing, team moves, promotions, R & R discussions with Head of Dev and management team;","Led recruitment process from talking to external recruiters, interviews and offer to onboarding for Devs in Test","<b>Tech used:</b> Java 7, some Spring, Pair programming, Gherkin, Maven, Archiva SCRUM, Jira, swagger, mockito, dor, dod, Jenkins, RestAssured, JAXB, apache commons, wraith, appium, artifactory, webdriver, linux"]},{"expanded":false,"company":"Fiserv","period":"2007/09 \u2013 2012/09","title":"Senior Developer in Test","logo":"/reactjs-cv/static/images/salmon.png","items":["Java RESTFul API testing of SOX compliance project on financial reconciliation software used by Tier 1 investment bank","Use of Cucumber JVM + pairing with senior / principal devs to create features/tests","Travel to Baltimore to lead Business Scenario Testing with Presales and Senior Stakeholders using production data","Developed custom test automation framework for use by entire engineering team using Maven and Java 7","<b>Tech used:</b> ava, test, maven, eclipse/intellij, svn, qtp, mercury, offshore management, scrum, oracle, sql server, J2EE"]},{"expanded":false,"company":"Tescom","period":"2007/04 \u2013 2007/09","title":"Test Automation Consultant","logo":"/REACTJS-CV/public/static/images/vodafone.png","items":["Placed at Vodafone in Newbury HQ to automate (using Selenium) testing of Vodafone Mobile and Vodafone @ Home user journeys","<b>Tech used:</b> java, webdriver, maven, eclipse, mysql, svn"]},{"expanded":false,"company":"SDL International","period":"2008/04 \u2013 2009/11 (1y 8m)","title":"Lead Tester / Automation Developer","logo":"/reactjs-cv/static/images/bnp.png","items":["Part of Microsoft Office 2007 localisation test team, involving daily calls with the Microsoft development team.","Assigned tasks to other testers in the team. Reported on results daily. Defect triage.","<b>Tech used:team management, mercury test suite, shell scripting, qtp"]}]},"education":{"title":"EDUCATION","expanded":true,"items":[{"title":"Feb 2004 \u2013 July 2004","detail":"MSc in Network Centred Computing - Reading University"},{"title":"Oct 2000 \u2013 Oct 2003","detail":"BSc in Computer Science - Reading University"}]},"courses":{"title":"Certifications and Conferences","expanded":true,"items":[{"title":"ScrumAlliance Certified SCRUM Master (CSM) - active through to 20/02/2022"},{"title":"Regular attendee of The Lead Developer (https://bit.ly/3fZ7HT8) and Software Craftsman Conference (https://sc-london.com/) "}]}}')}},[[104,1,2]]]);
//# sourceMappingURL=main.8acc45ba.chunk.js.map