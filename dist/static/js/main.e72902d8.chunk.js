(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,a){e.exports=a(471)},437:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(107),i=a.n(c),s=a(18),l=a(8),o=a(246),m=a(61),u=a(19),d=a(156),p=a.n(d);a(432),a(435);p.a.initializeApp({apiKey:"AIzaSyBRq4O95vR2S0dktHrjeQAeMtaf8REqa8I",authDomain:"project-hub-ce158.firebaseapp.com",databaseURL:"https://project-hub-ce158.firebaseio.com",projectId:"project-hub-ce158",storageBucket:"",messagingSenderId:"972748524562",appId:"1:972748524562:web:e9691b812e3c2063"});var h=p.a,E=(a(437),a(25)),b=a(26),f=a(28),N=a(27),g=a(29),v=a(14),j=a(52),O=Object(l.b)(null,function(e){return{signOut:function(){return e(function(e,t){h.auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return n.a.createElement("ul",{className:"right"},n.a.createElement("li",null,n.a.createElement(v.c,{to:"/create"},"New Project")),n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:void(0)",onClick:e.signOut},"Log Out")),n.a.createElement("li",null,n.a.createElement(v.c,{to:"/",className:"btn btn-floating #323232 lighten-1"},e.profile.initials)))}),y=function(){return n.a.createElement("ul",{className:"right"},n.a.createElement("li",null,n.a.createElement(v.c,{to:"/signup"},"Signup")),n.a.createElement("li",null,n.a.createElement(v.c,{to:"/signin"},"Login")))},S=Object(l.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.profile,a=e.auth,r=a.uid?n.a.createElement(O,{profile:t}):n.a.createElement(y,null);return n.a.createElement("nav",{className:"nav-wrapper gray darken-3"},n.a.createElement("div",{className:"container"},n.a.createElement(v.b,{to:"/",className:"brand-logo"},"Project Planner"),Object(u.isLoaded)(a)&&r))}),w=a(60),C=a.n(w),R=function(e){var t=e.notifications;return n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"card z-depth-0"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},"Notifications"),n.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("span",{className:"pink-text"},e.user," "),n.a.createElement("span",null,e.content),n.a.createElement("div",{className:"gray-text note-date"},C()(e.time.toDate()).fromNow()))})))))},P=function(e){var t=e.project,a=t.title;return n.a.createElement("div",{className:"card z-depth-0 project-summary"},n.a.createElement("div",{className:"card-content grey-text text-darken-3"},n.a.createElement("span",{className:"card-title"},a),n.a.createElement("p",null,"Posted by the ",t.authorFirstName," ",t.authorLastName),n.a.createElement("p",{className:"grey-text"},C()(t.createdAt.toDate()).calendar())))},I=function(e){var t=e.projects;return n.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return n.a.createElement(v.b,{to:"/project/".concat(e.id),key:e.id},n.a.createElement(P,{project:e,key:e.id}))}))},x=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.notifications;return n.a.createElement("div",{className:"darshboard container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m6"},n.a.createElement(I,{projects:t})),n.a.createElement("div",{className:"col s12 m5 offset-m"},n.a.createElement(R,{notifications:a}))))}}]),t}(r.Component),F=Object(s.d)(Object(l.b)(function(e){return{projects:e.firestore.ordered.projects,notifications:e.firestore.ordered.notifications}}),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(x),_=Object(s.d)(Object(l.b)(function(e,t){var a=t.match.params.id,r=e.firestore.data.projects;return{project:r?r[a]:null}}),Object(u.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return t?n.a.createElement("div",{className:"container section project-details"},n.a.createElement("div",{className:"card z-depth-0"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},t.title),n.a.createElement("p",null,t.content)),n.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},n.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),n.a.createElement("div",null,C()(t.createdAt.toDate()).calendar())))):n.a.createElement("div",{className:"container center"},n.a.createElement("p",null,"Loading project...."))}),U=a(4),k=a(15),L=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.authError,t=this.props.signIn,a=k.object().shape({email:k.string().email("Invalid Email !!").required("Email is required"),password:k.string().min(6,"Password must be above 6 characters").required("Password is required")});return n.a.createElement("div",{className:"container"},n.a.createElement(U.d,{initialValues:{email:"",password:""},onSubmit:function(e,a){var r=a.setSubmitting,n=a.setErrors,c=a.setStatus,i=a.resetForm;try{t(e),i(),c({success:!0})}catch(s){console.log(s),c({success:!1}),r(!1),n({submit:s.message})}},validationSchema:a,enableReinitialize:!0},function(t){var a=t.values,r=(t.touched,t.errors,t.dirty,t.isSubmitting),c=t.handleChange;t.handleBlur,t.handleSubmit,t.handleReset;return n.a.createElement(U.c,{className:"white form"},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),n.a.createElement(U.b,{type:"email",id:"email",placeholder:"Email",onChange:c,name:"email",value:a.email,className:"input-field"}),n.a.createElement(U.a,{name:"email",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement(U.b,{type:"password",id:"password",placeholder:"Password",onChange:c,name:"password",value:a.password,className:"input-field"}),n.a.createElement(U.a,{name:"password",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{type:"submit",disabled:r,className:"btn #EE6E73 lighten-1 z-depth-0"},"Login"),n.a.createElement("div",{className:"red-text"},e?n.a.createElement("p",null,e.message):null)))}))}}]),t}(n.a.Component),A=Object(U.e)({displayName:"SignIn"})(L),q=Object(l.b)(function(e){return{authError:e.auth.authError}},function(e){return{signIn:function(t){var a;e((a=t,function(e,t){h.auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}))}}})(A),T=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.signUp,t=k.object().shape({email:k.string().email("Invalid Email !!").required("Email is required"),password:k.string().min(6,"Password must be above 6 characters").required("Password is required"),firstName:k.string().min(3,"First Name must be above 3 characters").required("First Name is required"),lastName:k.string().min(3,"Last Name must be above 1 characters").required("Last Name is required")});return n.a.createElement("div",{className:"container"},n.a.createElement(U.d,{initialValues:{email:"",password:"",firstName:"",lastName:""},onSubmit:function(t,a){var r=a.setSubmitting,n=a.setErrors,c=a.setStatus,i=a.resetForm;try{e(t),i(),c({success:!0}),r(!0)}catch(s){console.log(s,"in Signup"),c({success:!1}),r(!1),n({submit:s.message})}},validationSchema:t,enableReinitialize:!0},function(e){var t=e.values,a=(e.touched,e.errors,e.dirty,e.isSubmitting),r=e.handleChange;e.handleBlur,e.handleSubmit,e.handleReset;return n.a.createElement(U.c,{className:"white form"},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Create an Account"),n.a.createElement(U.b,{type:"text",id:"firstName",placeholder:"First Name",onChange:r,name:"firstName",value:t.firstName,className:"input-field"}),n.a.createElement(U.a,{name:"firstName",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement(U.b,{type:"text",id:"lastName",placeholder:"Last Name",onChange:r,name:"lastName",value:t.lastName,className:"input-field"}),n.a.createElement(U.a,{name:"lastName",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement(U.b,{type:"email",id:"email",placeholder:"Email",onChange:r,name:"email",value:t.email,className:"input-field"}),n.a.createElement(U.a,{name:"email",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement(U.b,{type:"password",id:"password",placeholder:"Password",onChange:r,name:"password",value:t.password,className:"input-field"}),n.a.createElement(U.a,{name:"password",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{type:"submit",disabled:a,className:"btn #EE6E73 lighten-1 z-depth-0"},"create")))}))}}]),t}(n.a.Component),G=Object(U.e)({displayName:"Signup"})(T),z=Object(l.b)(function(e){return{authError:e.auth.authError}},function(e){return{signUp:function(t){var a;e((a=t,function(e,t,r){r.getFirebase;var n=(0,r.getFirestore)();h.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return n.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_FAILURE",err:t})})}))}}})(G),B=a(53),D=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.createProject,a=k.object().shape({title:k.string().required("Project Title is required"),content:k.string().min(20,"Project content must be above 20 characters").required("Project Content is required")});return n.a.createElement("div",{className:"container"},n.a.createElement(U.d,{initialValues:{title:"",content:""},onSubmit:function(a,r){var n=r.setSubmitting,c=r.setErrors,i=r.setStatus,s=r.resetForm;try{t(a),s(),i({success:!0}),e.props.history.push("/")}catch(l){console.log(l),i({success:!1}),n(!1),c({submit:l.message})}},validationSchema:a,enableReinitialize:!0},function(e){var t=e.values,a=(e.touched,e.errors,e.dirty,e.isSubmitting),r=e.handleChange;e.handleBlur,e.handleSubmit,e.handleReset;return n.a.createElement(U.c,{className:"white form"},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),n.a.createElement(U.b,{type:"text",id:"title",placeholder:"Title",onChange:r,name:"title",value:t.title,className:"input-field"}),n.a.createElement(U.a,{name:"title",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement(U.b,{component:"textarea",id:"content",placeholder:"Project Content",onChange:r,name:"content",value:t.content,className:"materialize-textarea",rows:"20"}),n.a.createElement(U.a,{name:"content",render:function(e){return n.a.createElement("div",{className:"red-text"},e)}}),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{type:"submit",disabled:a,className:"btn #EE6E73 lighten-1 z-depth-0"},"Create Project")))}))}}]),t}(n.a.Component),J=Object(U.e)({displayName:"CreateProject"})(D),V=Object(l.b)(function(e){return{}},function(e){return{createProject:function(t){var a;e((a=t,function(e,t,r){r.getFirebase;var n=(0,r.getFirestore)(),c=t().firebase.profile,i=t().firebase.auth.uid;n.collection("projects").add(Object(B.a)({},a,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){e({type:"CREATE_PROJECT",project:a})}).catch(function(t){e({type:"CREATE_PROJECT_ERROR",err:t})})}))}}})(J),W=a(112),M=Object(l.b)(function(e){return{auth:e.firebase.auth}})(function(e){var t=e.component,a=e.auth,r=Object(W.a)(e,["component","auth"]);return n.a.createElement(j.b,Object.assign({},r,{render:function(e){return a.uid?n.a.createElement(t,e):a.isEmpty&&a.isLoaded?n.a.createElement(j.a,{to:"/signin"}):null}}))}),X=Object(l.b)(function(e){return{auth:e.firebase.auth}})(function(e){var t=e.component,a=e.auth,r=Object(W.a)(e,["component","auth"]);return n.a.createElement(j.b,Object.assign({},r,{render:function(e){return a.uid?n.a.createElement(j.a,{to:"/"}):n.a.createElement(t,e)}}))}),H=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.a.createElement(v.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(S,null),n.a.createElement(j.d,null,n.a.createElement(M,{exact:!0,path:"/",component:F}),n.a.createElement(M,{path:"/project/:id",component:_}),n.a.createElement(X,{path:"/signin",component:q}),n.a.createElement(X,{path:"/signup",component:z}),n.a.createElement(M,{path:"/create",component:V}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K={authError:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login Error",t.err),Object(B.a)({},e,{authError:t.err});case"LOGIN_SUCCESS":return console.log("login success"),Object(B.a)({},e,{authReducer:null});case"SIGNOUT_SUCCESS":return console.log("SIGNOUT_SUCCESS"),e;case"SIGNUP_SUCCESS":return console.log("SIGNUP_SUCCESS"),Object(B.a)({},e,{authError:null});case"SIGNUP_FAILURE":return console.log("SIGNUP_FAILURE",t.err),Object(B.a)({},e,{authError:t.err.message});default:return e}},$={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created Project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},Z=Object(s.c)({auth:Q,project:Y,firebase:u.firebaseReducer,firestore:m.firestoreReducer}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,te=Object(s.e)(Z,ee(Object(s.a)(o.a.withExtraArgument({getFirebase:u.getFirebase,getFirestore:m.getFirestore})),Object(m.reduxFirestore)(h))),ae={firebase:h,config:{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0},dispatch:te.dispatch,createFirestoreInstance:m.createFirestoreInstance};i.a.render(n.a.createElement(l.a,{store:te},n.a.createElement(u.ReactReduxFirebaseProvider,ae,n.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[249,1,2]]]);
//# sourceMappingURL=main.e72902d8.chunk.js.map