#!/usr/bin/env node
(function () {var I,P,b={};Object.defineProperty(b,"__esModule",{value:!0});var J=(O=void 0,H=b.getPackagesFolderName=O,M=b.getOutFolder=H,I=b.DEFAULT_RUNNER=M,P=b.WorkingFiles=I,b.Tasks=P);b.isWin=J;var O=e=>{var r;return(null===(r=null==e?void 0:e.fireConfig)||void 0===r?void 0:r.outFolderName)||".packages"};b.getPackagesFolderName=O;var H=e=>{var r;return(null===(r=null==e?void 0:e.fireConfig)||void 0===r?void 0:r.outFolderLocation)||"."};b.getOutFolder=H;var Ba,Aa,M="firebase";b.DEFAULT_RUNNER=M,function(e){e.PACKAGE_JSON="package.json",e.PACKAGE_TEMP_JSON="package.temp.json"}(Ba=b.WorkingFiles||(I={},b.WorkingFiles=I)),function(e){e.REVERT="--revert-changes",e.BUILD="--buildCommand",e.LEAVE_CHANGES="--leave-changes"}(Aa=b.Tasks||(P={},b.Tasks=P)),J="win32"===process.platform,b.isWin=J;var c={};Object.defineProperty(c,"__esModule",{value:!0});var Q=(F=void 0,c.includes=F);c.nextOrDefault=Q;var F=e=>process.argv.toString().includes(e);c.includes=F,Q=(e,r=!0,$=e=>e)=>{if(process.argv.toString().includes(b.Tasks[e])){const t=process.argv[process.argv.indexOf(e)+1];return t?t.includes("--")?r:$(t):r}return r},c.nextOrDefault=Q;var A={};Object.defineProperty(A,"__esModule",{value:!0});var p=void 0;A.Worker=p;const wa=require("child_process");p=({command:r,args:e,cwd:o}={command:"npx",args:[]},s=!0)=>new Promise(($,p)=>{const t=wa.spawn(r,e,{cwd:o});s&&(t.stderr.pipe(process.stderr),t.stdout.pipe(process.stdout)),t.on("close",r=>0!==r?p(!!r):$(!!r))}),A.Worker=p;var r={},N=r&&r.__awaiter||function(r,$,e,a){return new(e||(e=Promise))(function(s,c){function u(r){try{i(a.next(r))}catch($){c($)}}function t(r){try{i(a.throw(r))}catch($){c($)}}function i(r){var $;r.done?s(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(u,t)}i((a=a.apply(r,$||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0});var z=void 0;r.buildPackages=z;const sa=require("fs"),D=require("path"),qa=require("util");function la(r,$){return N(this,void 0,void 0,function*(){return yield Promise.all((yield qa.promisify(sa.readdir)(D.join(r,$))).map(e=>N(this,void 0,void 0,function*(){yield p({command:"npx",args:c.nextOrDefault(b.Tasks.BUILD,"tsc").split(" "),cwd:D.join(r,$,e)},!1)})))})}z=la,r.buildPackages=z;var m={},ja=m&&m.__awaiter||function(t,e,$,r){return new($||($=Promise))(function(i,s){function o(t){try{a(r.next(t))}catch(e){s(e)}}function n(t){try{a(r.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof $?e:new $(function(t){t(e)})).then(o,n)}a((r=r.apply(t,e||[])).next())})};Object.defineProperty(m,"__esModule",{value:!0});var j=void 0;m.fileExists=j;const fa=require("fs"),da=require("util");function ca(t){return ja(this,void 0,void 0,function*(){try{return yield da.promisify(fa.stat)(t),!0}catch(e){if("ENOENT"===e.code)return!1;throw e}})}j=ca,m.fileExists=j;var i={},u=i&&i.__awaiter||function($,a,i,r){return new(i||(i=Promise))(function(e,t){function d($){try{o(r.next($))}catch(a){t(a)}}function s($){try{o(r.throw($))}catch(a){t(a)}}function o($){var a;$.done?e($.value):(a=$.value,a instanceof i?a:new i(function($){$(a)})).then(d,s)}o((r=r.apply($,a||[])).next())})};Object.defineProperty(i,"__esModule",{value:!0});var E=void 0;i.FolderSync=E;const f=require("fs"),o=require("path"),e=require("util");class ba{static copyFile($,a){return u(this,void 0,void 0,function*(){let i=a;(yield j(a))&&(yield e.promisify(f.lstat)(a)).isDirectory()&&(i=o.join(a,o.basename($))),yield e.promisify(f.writeFile)(i,(yield e.promisify(f.readFile)($)))})}static copyFolderRecursive($,a){return u(this,void 0,void 0,function*(){const i=o.join(a,o.basename($));if((yield j(i))||(yield e.promisify(f.mkdir)(i,{recursive:!0})),(yield e.promisify(f.lstat)($)).isDirectory()){const a=yield e.promisify(f.readdir)($);yield Promise.all(a.map(a=>u(this,void 0,void 0,function*(){const r=o.join($,a);(yield this.isExists(r)).isDirectory()?yield this.copyFolderRecursive(r,i):yield this.copyFile(r,i)})))}return new Promise($=>{setTimeout(()=>{$(!0)},1e3)})})}static isExists($){return e.promisify(f.lstat)($)}}E=ba,i.FolderSync=E;var t={};Object.defineProperty(t,"__esModule",{value:!0});var K=void 0;t.copyPackages=K;const Z=require("path");function X(e,r,$,o){return p({command:"rsync",args:["-r",...(o?o.reduce((e,r)=>[...e,"--exclude",r],[]):[]),e,`${r}/${$}`]})}function V(e,r,$,o){return Promise.all(e.map(({folder:e})=>b.isWin?i.FolderSync.copyFolderRecursive(e,Z.join(r,$)):X(e,r,$,o)))}K=V,t.copyPackages=K;var g={};Object.defineProperty(g,"__esModule",{value:!0});var C=void 0;g.writeFileJson=C;const T=require("fs"),S=require("path");function ia(e,$){T.writeFileSync(S.join(process.cwd(),e),JSON.stringify($,null,2),{encoding:"utf-8"})}C=ia,g.writeFileJson=C;var k={},U=k&&k.__awaiter||function(e,n,a,r){return new(a||(a=Promise))(function($,t){function i(e){try{o(r.next(e))}catch(n){t(n)}}function l(e){try{o(r.throw(e))}catch(n){t(n)}}function o(e){var n;e.done?$(e.value):(n=e.value,n instanceof a?n:new a(function(e){e(n)})).then(i,l)}o((r=r.apply(e,n||[])).next())})};Object.defineProperty(k,"__esModule",{value:!0});var d=void 0;k.exitHandler=d;function W(e){return U(this,void 0,void 0,function*(){c.includes(b.Tasks.LEAVE_CHANGES)?(yield j(b.WorkingFiles.PACKAGE_TEMP_JSON))||g.writeFileJson(b.WorkingFiles.PACKAGE_TEMP_JSON,e):g.writeFileJson(b.WorkingFiles.PACKAGE_JSON,e),process.exit()})}d=W,k.exitHandler=d;var h={},Y=h&&h.__awaiter||function($,e,o,n){return new(o||(o=Promise))(function(i,t){function r($){try{s(n.next($))}catch(e){t(e)}}function p($){try{s(n.throw($))}catch(e){t(e)}}function s($){var e;$.done?i($.value):(e=$.value,e instanceof o?e:new o(function($){$(e)})).then(r,p)}s((n=n.apply($,e||[])).next())})};Object.defineProperty(h,"__esModule",{value:!0});var L=void 0;h.modifyJson=L;const _=require("fs"),aa=require("util");function $($,e,o,n){return Y(this,void 0,void 0,function*(){for(const{dep:i}of e)$.dependencies[i]=`file:${o}/${n}/${i.includes("/")?i.split("/")[1]:i}`;yield aa.promisify(_.writeFile)(b.WorkingFiles.PACKAGE_JSON,JSON.stringify($,null,2),{encoding:"utf-8"})})}L=$,h.modifyJson=L;var y={};Object.defineProperty(y,"__esModule",{value:!0});var v=void 0;y.parseIgnoredFiles=v,v=e=>e.toString().split(/\r?\n/).filter(e=>""!==e.trim()&&"#"!==e.charAt(0)),y.parseIgnoredFiles=v;var q={},ea=q&&q.__awaiter||function(e,r,o,$){return new(o||(o=Promise))(function(t,a){function n(e){try{u($.next(e))}catch(r){a(r)}}function i(e){try{u($.throw(e))}catch(r){a(r)}}function u(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o(function(e){e(r)})).then(n,i)}u(($=$.apply(e,r||[])).next())})};Object.defineProperty(q,"__esModule",{value:!0});var w=void 0;q.readExcludes=w;const ga=require("fs"),ha=require("util");function R(e){return ea(this,void 0,void 0,function*(){try{const o=yield ha.promisify(ga.readFile)(e,{encoding:"utf-8"});return v(o)}catch(r){return[]}})}w=R,q.readExcludes=w;var a={},ka=a&&a.__awaiter||function(r,$,e,t){return new(e||(e=Promise))(function(n,o){function a(r){try{s(t.next(r))}catch($){o($)}}function i(r){try{s(t.throw(r))}catch($){o($)}}function s(r){var $;r.done?n(r.value):($=r.value,$ instanceof e?$:new e(function(r){r($)})).then(a,i)}s((t=t.apply(r,$||[])).next())})};Object.defineProperty(a,"__esModule",{value:!0});var G=void 0;a.readJson=G;const ma=require("fs"),na=require("path"),oa=require("util");function pa(r,$=process.cwd()){return ka(this,void 0,void 0,function*(){return JSON.parse((yield oa.promisify(ma.readFile)(na.join($,r),{encoding:"utf-8"})))})}G=pa,a.readJson=G;var l={},ra=l&&l.__awaiter||function(r,e,n,$){return new(n||(n=Promise))(function(t,o){function i(r){try{w($.next(r))}catch(e){o(e)}}function a(r){try{w($.throw(r))}catch(e){o(e)}}function w(r){var e;r.done?t(r.value):(e=r.value,e instanceof n?e:new n(function(r){r(e)})).then(i,a)}w(($=$.apply(r,e||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});var x=void 0;l.revertJson=x;const ta=require("fs"),ua=require("util");function va(r,e){return ra(this,void 0,void 0,function*(){const n=yield a.readJson(e);g.writeFileJson(r,n),yield ua.promisify(ta.unlink)(e)})}x=va,l.revertJson=x;var n={},xa=n&&n.__awaiter||function(r,e,$,a){return new($||($=Promise))(function(i,n){function t(r){try{o(a.next(r))}catch(e){n(e)}}function s(r){try{o(a.throw(r))}catch(e){n(e)}}function o(r){var e;r.done?i(r.value):(e=r.value,e instanceof $?e:new $(function(r){r(e)})).then(t,s)}o((a=a.apply(r,e||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0});var B=void 0;n.createVirtualSymlink=B;function ya(r={},e,$){return xa(this,void 0,void 0,function*(){r.fireConfig=r.fireConfig||{};const a=r.fireConfig.runner||b.DEFAULT_RUNNER,i=[...(r.fireConfig.excludes||[]),...(yield w(r.fireConfig.excludesFileName||".fireignore"))];if(c.includes(b.Tasks.REVERT))return yield x(b.WorkingFiles.PACKAGE_JSON,b.WorkingFiles.PACKAGE_TEMP_JSON);const n=JSON.parse(JSON.stringify(r));if(r.fireDependencies){const a=r.fireDependencies,s=Object.keys(a).map(r=>({dep:r,folder:a[r]}));if(yield t.copyPackages(s,e,$,i),c.includes(b.Tasks.BUILD))try{yield z(e,$)}catch(t){}process.stdin.resume(),process.on("exit",()=>d(n)),process.on("SIGINT",()=>d(n)),process.on("SIGUSR1",()=>d(n)),process.on("SIGUSR2",()=>d(n)),process.on("uncaughtException",()=>d(n)),yield h.modifyJson(r,s,e,$)}yield p({command:b.isWin?"cmd":"npx",args:[...(b.isWin?["/c","npx"]:[]),a,...process.argv.slice(2).filter(r=>r!==b.Tasks.LEAVE_CHANGES&&r!==b.Tasks.REVERT&&r!==b.Tasks.BUILD)]}),d(n)})}B=ya,n.createVirtualSymlink=B;var s={},za=s&&s.__awaiter||function(e,r,n,t){return new(n||(n=Promise))(function(c,$){function a(e){try{o(t.next(e))}catch(r){$(r)}}function i(e){try{o(t.throw(e))}catch(r){$(r)}}function o(e){var r;e.done?c(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(a,i)}o((t=t.apply(e,r||[])).next())})};Object.defineProperty(s,"__esModule",{value:!0});(()=>za(void 0,void 0,void 0,function*(){const e=yield a.readJson(b.WorkingFiles.PACKAGE_JSON);yield B(e,b.getOutFolder(e),b.getPackagesFolderName(e))}))();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=s}else if(typeof define==="function"&&define.amd){define(function(){return s})}})();