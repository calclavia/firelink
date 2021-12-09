#!/usr/bin/env node
(function () {var E,F,b={};Object.defineProperty(b,"__esModule",{value:!0});var G=(H=void 0,I=b.getPackagesFolderName=H,J=b.getOutFolder=I,E=b.DEFAULT_RUNNER=J,F=b.WorkingFiles=E,b.Tasks=F);b.isWin=G;var H=e=>{var r;return(null===(r=null==e?void 0:e.fireConfig)||void 0===r?void 0:r.outFolderName)||".packages"};b.getPackagesFolderName=H;var I=e=>{var r;return(null===(r=null==e?void 0:e.fireConfig)||void 0===r?void 0:r.outFolderLocation)||"."};b.getOutFolder=I;var Ea,Fa,J="firebase";b.DEFAULT_RUNNER=J,function(e){e.PACKAGE_JSON="package.json",e.PACKAGE_TEMP_JSON="package.temp.json"}(Ea=b.WorkingFiles||(E={},b.WorkingFiles=E)),function(e){e.REVERT="--revert-changes",e.BUILD="--buildCommand",e.LEAVE_CHANGES="--leave-changes"}(Fa=b.Tasks||(F={},b.Tasks=F)),G="win32"===process.platform,b.isWin=G;var c={};Object.defineProperty(c,"__esModule",{value:!0});var K=(L=void 0,c.includes=L);c.nextOrDefault=K;var L=e=>process.argv.toString().includes(e);c.includes=L,K=(e,r=!0,$=e=>e)=>{if(process.argv.toString().includes(b.Tasks[e])){const t=process.argv[process.argv.indexOf(e)+1];return t?t.includes("--")?r:$(t):r}return r},c.nextOrDefault=K;var v={};Object.defineProperty(v,"__esModule",{value:!0});var i=void 0;v.Worker=i;const T=require("child_process");i=({command:r,args:e,cwd:o}={command:"npx",args:[]},s=!0)=>new Promise(($,p)=>{const t=T.spawn(r,e,{cwd:o});s&&(t.stderr.pipe(process.stderr),t.stdout.pipe(process.stdout)),t.on("close",r=>0!==r?p(!r):$(!r))}),v.Worker=i;var k={},M=k&&k.__awaiter||function(r,$,e,a){return new(e||(e=Promise))(function(s,c){function u(r){try{i(a.next(r))}catch($){c($)}}function t(r){try{i(a.throw(r))}catch($){c($)}}function i(r){var $;r.done?s(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(u,t)}i((a=a.apply(r,$||[])).next())})};Object.defineProperty(k,"__esModule",{value:!0});var w=void 0;k.buildPackages=w;const U=require("fs"),N=require("path"),V=require("util");function W(r,$){return M(this,void 0,void 0,function*(){return yield Promise.all((yield V.promisify(U.readdir)(N.join(r,$))).map(e=>M(this,void 0,void 0,function*(){yield i({command:"npx",args:c.nextOrDefault(b.Tasks.BUILD,"tsc").split(" "),cwd:N.join(r,$,e)},!1)})))})}w=W,k.buildPackages=w;var l={},X=l&&l.__awaiter||function(t,e,$,r){return new($||($=Promise))(function(i,s){function o(t){try{a(r.next(t))}catch(e){s(e)}}function n(t){try{a(r.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof $?e:new $(function(t){t(e)})).then(o,n)}a((r=r.apply(t,e||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});var m=void 0;l.fileExists=m;const Y=require("fs"),Z=require("util");function $(t){return X(this,void 0,void 0,function*(){try{return yield Z.promisify(Y.stat)(t),!0}catch(e){if("ENOENT"===e.code)return!1;throw e}})}m=$,l.fileExists=m;var g={},x=g&&g.__awaiter||function($,a,i,r){return new(i||(i=Promise))(function(e,t){function d($){try{o(r.next($))}catch(a){t(a)}}function s($){try{o(r.throw($))}catch(a){t(a)}}function o($){var a;$.done?e($.value):(a=$.value,a instanceof i?a:new i(function($){$(a)})).then(d,s)}o((r=r.apply($,a||[])).next())})};Object.defineProperty(g,"__esModule",{value:!0});var O=void 0;g.FolderSync=O;const e=require("fs"),n=require("path"),f=require("util");class _{static copyFile($,a){return x(this,void 0,void 0,function*(){let i=a;(yield m(a))&&(yield f.promisify(e.lstat)(a)).isDirectory()&&(i=n.join(a,n.basename($))),yield f.promisify(e.writeFile)(i,(yield f.promisify(e.readFile)($)))})}static copyFolderRecursive($,a){return x(this,void 0,void 0,function*(){const i=n.join(a,n.basename($));if((yield m(i))||(yield f.promisify(e.mkdir)(i,{recursive:!0})),(yield f.promisify(e.lstat)($)).isDirectory()){const a=yield f.promisify(e.readdir)($);yield Promise.all(a.map(a=>x(this,void 0,void 0,function*(){const r=n.join($,a);(yield this.isExists(r)).isDirectory()?yield this.copyFolderRecursive(r,i):yield this.copyFile(r,i)})))}return new Promise($=>{setTimeout(()=>{$(!0)},1e3)})})}static isExists($){return f.promisify(e.lstat)($)}}O=_,g.FolderSync=O;var u={};Object.defineProperty(u,"__esModule",{value:!0});var P=void 0;u.copyPackages=P;const aa=require("path");function ba(e,r,$,o){return i({command:"rsync",args:["-r",...(o?o.reduce((e,r)=>[...e,"--exclude",r],[]):[]),e,`${r}/${$}`]})}function ca(e,r,$,o){return Promise.all(e.map(({folder:e})=>b.isWin?g.FolderSync.copyFolderRecursive(e,aa.join(r,$)):ba(e,r,$,o)))}P=ca,u.copyPackages=P;var h={};Object.defineProperty(h,"__esModule",{value:!0});var Q=void 0;h.writeFileJson=Q;const da=require("fs"),ea=require("path");function fa(e,$){da.writeFileSync(ea.join(process.cwd(),e),JSON.stringify($,null,2),{encoding:"utf-8"})}Q=fa,h.writeFileJson=Q;var o={},ga=o&&o.__awaiter||function(e,n,a,r){return new(a||(a=Promise))(function($,t){function i(e){try{o(r.next(e))}catch(n){t(n)}}function l(e){try{o(r.throw(e))}catch(n){t(n)}}function o(e){var n;e.done?$(e.value):(n=e.value,n instanceof a?n:new a(function(e){e(n)})).then(i,l)}o((r=r.apply(e,n||[])).next())})};Object.defineProperty(o,"__esModule",{value:!0});var d=void 0;o.exitHandler=d;function ha(e,n){return ga(this,void 0,void 0,function*(){c.includes(b.Tasks.LEAVE_CHANGES)?(yield m(b.WorkingFiles.PACKAGE_TEMP_JSON))||h.writeFileJson(b.WorkingFiles.PACKAGE_TEMP_JSON,e):h.writeFileJson(b.WorkingFiles.PACKAGE_JSON,e),process.exit(n?0:1)})}d=ha,o.exitHandler=d;var j={},ia=j&&j.__awaiter||function($,e,o,n){return new(o||(o=Promise))(function(i,t){function r($){try{s(n.next($))}catch(e){t(e)}}function p($){try{s(n.throw($))}catch(e){t(e)}}function s($){var e;$.done?i($.value):(e=$.value,e instanceof o?e:new o(function($){$(e)})).then(r,p)}s((n=n.apply($,e||[])).next())})};Object.defineProperty(j,"__esModule",{value:!0});var R=void 0;j.modifyJson=R;const ja=require("fs"),ka=require("util");function la($,e,o,n){return ia(this,void 0,void 0,function*(){for(const{dep:i}of e)$.dependencies[i]=`file:${o}/${n}/${i.includes("/")?i.split("/")[1]:i}`;yield ka.promisify(ja.writeFile)(b.WorkingFiles.PACKAGE_JSON,JSON.stringify($,null,2),{encoding:"utf-8"})})}R=la,j.modifyJson=R;var y={};Object.defineProperty(y,"__esModule",{value:!0});var z=void 0;y.parseIgnoredFiles=z,z=e=>e.toString().split(/\r?\n/).filter(e=>""!==e.trim()&&"#"!==e.charAt(0)),y.parseIgnoredFiles=z;var p={},ma=p&&p.__awaiter||function(e,r,o,$){return new(o||(o=Promise))(function(t,a){function n(e){try{u($.next(e))}catch(r){a(r)}}function i(e){try{u($.throw(e))}catch(r){a(r)}}function u(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o(function(e){e(r)})).then(n,i)}u(($=$.apply(e,r||[])).next())})};Object.defineProperty(p,"__esModule",{value:!0});var A=void 0;p.readExcludes=A;const na=require("fs"),oa=require("util");function pa(e){return ma(this,void 0,void 0,function*(){try{const o=yield oa.promisify(na.readFile)(e,{encoding:"utf-8"});return z(o)}catch(r){return[]}})}A=pa,p.readExcludes=A;var a={},qa=a&&a.__awaiter||function(r,$,e,t){return new(e||(e=Promise))(function(n,o){function a(r){try{s(t.next(r))}catch($){o($)}}function i(r){try{s(t.throw(r))}catch($){o($)}}function s(r){var $;r.done?n(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(a,i)}s((t=t.apply(r,$||[])).next())})};Object.defineProperty(a,"__esModule",{value:!0});var S=void 0;a.readJson=S;const ra=require("fs"),sa=require("path"),ta=require("util");function ua(r,$=process.cwd()){return qa(this,void 0,void 0,function*(){return JSON.parse((yield ta.promisify(ra.readFile)(sa.join($,r),{encoding:"utf-8"})))})}S=ua,a.readJson=S;var q={},va=q&&q.__awaiter||function(r,e,n,$){return new(n||(n=Promise))(function(t,o){function i(r){try{w($.next(r))}catch(e){o(e)}}function a(r){try{w($.throw(r))}catch(e){o(e)}}function w(r){var e;r.done?t(r.value):(e=r.value,e instanceof n?e:new n(function(r){r(e)})).then(i,a)}w(($=$.apply(r,e||[])).next())})};Object.defineProperty(q,"__esModule",{value:!0});var B=void 0;q.revertJson=B;const wa=require("fs"),xa=require("util");function ya(r,e){return va(this,void 0,void 0,function*(){const n=yield a.readJson(e);h.writeFileJson(r,n),yield xa.promisify(wa.unlink)(e)})}B=ya,q.revertJson=B;var r={},za=r&&r.__awaiter||function(n,r,$,e){return new($||($=Promise))(function(o,t){function a(n){try{k(e.next(n))}catch(r){t(r)}}function i(n){try{k(e.throw(n))}catch(r){t(r)}}function k(n){var r;n.done?o(n.value):(r=n.value,r instanceof $?r:new $(function(n){n(r)})).then(a,i)}k((e=e.apply(n,r||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0});var C=void 0;r.runCommand=C;function Aa(n,r){return za(this,void 0,void 0,function*(){return yield i({command:b.isWin?"cmd":"npx",args:[...(b.isWin?["/c","npx"]:[]),n,...r.slice(2).filter(n=>n!==b.Tasks.LEAVE_CHANGES&&n!==b.Tasks.REVERT&&n!==b.Tasks.BUILD)]})})}C=Aa,r.runCommand=C;var s={},Ba=s&&s.__awaiter||function(r,e,$,a){return new($||($=Promise))(function(i,n){function t(r){try{s(a.next(r))}catch(e){n(e)}}function o(r){try{s(a.throw(r))}catch(e){n(e)}}function s(r){var e;r.done?i(r.value):(e=r.value,e instanceof $?e:new $(function(r){r(e)})).then(t,o)}s((a=a.apply(r,e||[])).next())})};Object.defineProperty(s,"__esModule",{value:!0});var D=void 0;s.createVirtualSymlink=D;function Ca(r={},e,$){return Ba(this,void 0,void 0,function*(){r.fireConfig=r.fireConfig||{};const a=r.fireConfig.runner||b.DEFAULT_RUNNER,i=[...(r.fireConfig.excludes||[]),...(yield A(r.fireConfig.excludesFileName||".fireignore"))];if(c.includes(b.Tasks.REVERT))return yield B(b.WorkingFiles.PACKAGE_JSON,b.WorkingFiles.PACKAGE_TEMP_JSON);const n=JSON.parse(JSON.stringify(r));if(r.fireDependencies){const a=r.fireDependencies,o=Object.keys(a).map(r=>({dep:r,folder:a[r]}));if(yield u.copyPackages(o,e,$,i),c.includes(b.Tasks.BUILD))try{yield w(e,$)}catch(t){}process.stdin.resume(),process.on("exit",()=>d(n,!1)),process.on("SIGINT",()=>d(n,!1)),process.on("SIGUSR1",()=>d(n,!1)),process.on("SIGUSR2",()=>d(n,!1)),process.on("uncaughtException",()=>d(n,!1)),yield j.modifyJson(r,o,e,$)}try{yield C(a,process.argv),yield d(n,!0)}catch(t){yield d(n,!1)}process.stdin.pause()})}D=Ca,s.createVirtualSymlink=D;var t={},Da=t&&t.__awaiter||function(e,r,n,t){return new(n||(n=Promise))(function(c,$){function a(e){try{o(t.next(e))}catch(r){$(r)}}function i(e){try{o(t.throw(e))}catch(r){$(r)}}function o(e){var r;e.done?c(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(a,i)}o((t=t.apply(e,r||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});(()=>Da(void 0,void 0,void 0,function*(){const e=yield a.readJson(b.WorkingFiles.PACKAGE_JSON);yield D(e,b.getOutFolder(e),b.getPackagesFolderName(e))}))();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=t}else if(typeof define==="function"&&define.amd){define(function(){return t})}})();