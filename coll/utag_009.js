//tealium universal tag - utag.507 ut4.0.201903151018, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pako=t()}}(function(){return function t(e,a,n){function r(s,h){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!h&&l)return l(s,!0);if(i)return i(s,!0);var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}
var _=a[s]={exports:{}};e[s][0].call(_.exports,function(t){var a=e[s][1][t];return r(a?a:t)},_,_.exports,t,e,a,n)}
return a[s].exports}
for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,a){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n])}}
return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,a,n,r){if(e.subarray&&t.subarray)return void t.set(e.subarray(a,a+n),r);for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){var e,a,n,r,i,s;for(n=0,e=0,a=t.length;e<a;e++)n+=t[e].length;for(s=new Uint8Array(n),r=0,e=0,a=t.length;e<a;e++)i=t[e],s.set(i,r),r+=i.length;return s}},i={arraySet:function(t,e,a,n,r){for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,r)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,i))},a.setTyped(n)},{}],2:[function(t,e,a){"use strict";function n(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(t,e));for(var a="",n=0;n<e;n++)a+=String.fromCharCode(t[n]);return a}
var r=t("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){i=!1}
try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}
for(var h=new r.Buf8(256),l=0;l<256;l++)h[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;h[254]=h[254]=1,a.string2buf=function(t){var e,a,n,i,s,h=t.length,l=0;for(i=0;i<h;i++)a=t.charCodeAt(i),55296===(64512&a)&&i+1<h&&(n=t.charCodeAt(i+1),56320===(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),i++)),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new r.Buf8(l),s=0,i=0;s<l;i++)a=t.charCodeAt(i),55296===(64512&a)&&i+1<h&&(n=t.charCodeAt(i+1),56320===(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),i++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return n(t,t.length)},a.binstring2buf=function(t){for(var e=new r.Buf8(t.length),a=0,n=e.length;a<n;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,r,i,s,l=e||t.length,o=new Array(2*l);for(r=0,a=0;a<l;)
if(i=t[a++],i<128)o[r++]=i;else if(s=h[i],s>4)o[r++]=65533,a+=s-1;else{for(i&=2===s?31:3===s?15:7;s>1&&a<l;)i=i<<6|63&t[a++],s--;s>1?o[r++]=65533:i<65536?o[r++]=i:(i-=65536,o[r++]=55296|i>>10&1023,o[r++]=56320|1023&i)}
return n(o,r)},a.utf8border=function(t,e){var a;for(e=e||t.length,e>t.length&&(e=t.length),a=e-1;a>=0&&128===(192&t[a]);)a--;return a<0?e:0===a?e:a+h[t[a]]>e?a:e}},{"./common":1}],3:[function(t,e,a){"use strict";function n(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){s=a>2e3?2e3:a,a-=s;do r=r+e[n++]|0,i=i+r|0;while(--s);r%=65521,i%=65521}
return r|i<<16|0}
e.exports=n},{}],4:[function(t,e,a){"use strict";function n(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}
return e}
function r(t,e,a,n){var r=i,s=n+a;t^=-1;for(var h=n;h<s;h++)t=t>>>8^r[255&(t^e[h])];return t^-1}
var i=n();e.exports=r},{}],5:[function(t,e,a){"use strict";function n(t,e){return t.msg=O[e],e}
function r(t){return(t<<1)-(t>4?9:0)}
function i(t){for(var e=t.length;--e>=0;)t[e]=0}
function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(j.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}
function h(t,e){U._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}
function l(t,e){t.pending_buf[t.pending++]=e}
function o(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}
function _(t,e,a,n){var r=t.avail_in;return r>n&&(r=n),0===r?0:(t.avail_in-=r,j.arraySet(e,t.input,t.next_in,r,a),1===t.state.wrap?t.adler=D(t.adler,e,r,a):2===t.state.wrap&&(t.adler=I(t.adler,e,r,a)),t.next_in+=r,t.total_in+=r,r)}
function d(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-dt?t.strstart-(t.w_size-dt):0,o=t.window,_=t.w_mask,d=t.prev,u=t.strstart+_t,f=o[i+s-1],c=o[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do
if(a=e,o[a+s]===c&&o[a+s-1]===f&&o[a]===o[i]&&o[++a]===o[i+1]){i+=2,a++;do;while(o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&i<u);if(n=_t-(u-i),i=u-_t,n>s){if(t.match_start=e,s=n,n>=h)break;f=o[i+s-1],c=o[i+s]}}while((e=d[e&_])>l&&0!==--r);return s<=t.lookahead?s:t.lookahead}
function u(t){var e,a,n,r,i,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-dt)){j.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,a=t.hash_size,e=a;do n=t.head[--e],t.head[e]=n>=s?n-s:0;while(--a);a=s,e=a;do n=t.prev[--e],t.prev[e]=n>=s?n-s:0;while(--a);r+=s}
if(0===t.strm.avail_in)break;if(a=_(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=a,t.lookahead+t.insert>=ot)
for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+ot-1])&t.hash_mask,t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<ot)););}while(t.lookahead<dt&&0!==t.strm.avail_in)}
function f(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(u(t),0===t.lookahead&&e===q)return vt;if(0===t.lookahead)break}
t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,h(t,!1),0===t.strm.avail_out))return vt;if(t.strstart-t.block_start>=t.w_size-dt&&(h(t,!1),0===t.strm.avail_out))return vt}
return t.insert=0,e===N?(h(t,!0),0===t.strm.avail_out?kt:zt):t.strstart>t.block_start&&(h(t,!1),0===t.strm.avail_out)?vt:vt}
function c(t,e){for(var a,n;;){if(t.lookahead<dt){if(u(t),t.lookahead<dt&&e===q)return vt;if(0===t.lookahead)break}
if(a=0,t.lookahead>=ot&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-dt&&(t.match_length=d(t,a)),t.match_length>=ot)
if(n=U._tr_tally(t,t.strstart-t.match_start,t.match_length-ot),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ot){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else n=U._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(h(t,!1),0===t.strm.avail_out))return vt}
return t.insert=t.strstart<ot-1?t.strstart:ot-1,e===N?(h(t,!0),0===t.strm.avail_out?kt:zt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?vt:yt}
function p(t,e){for(var a,n,r;;){if(t.lookahead<dt){if(u(t),t.lookahead<dt&&e===q)return vt;if(0===t.lookahead)break}
if(a=0,t.lookahead>=ot&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ot-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-dt&&(t.match_length=d(t,a),t.match_length<=5&&(t.strategy===J||t.match_length===ot&&t.strstart-t.match_start>4096)&&(t.match_length=ot-1)),t.prev_length>=ot&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-ot,n=U._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ot),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ot-1,t.strstart++,n&&(h(t,!1),0===t.strm.avail_out))return vt}else if(t.match_available){if(n=U._tr_tally(t,0,t.window[t.strstart-1]),n&&h(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return vt}else t.match_available=1,t.strstart++,t.lookahead--}
return t.match_available&&(n=U._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ot-1?t.strstart:ot-1,e===N?(h(t,!0),0===t.strm.avail_out?kt:zt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?vt:yt}
function g(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=_t){if(u(t),t.lookahead<=_t&&e===q)return vt;if(0===t.lookahead)break}
if(t.match_length=0,t.lookahead>=ot&&t.strstart>0&&(r=t.strstart-1,n=s[r],n===s[++r]&&n===s[++r]&&n===s[++r])){i=t.strstart+_t;do;while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=_t-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}
if(t.match_length>=ot?(a=U._tr_tally(t,1,t.match_length-ot),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=U._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(h(t,!1),0===t.strm.avail_out))return vt}
return t.insert=0,e===N?(h(t,!0),0===t.strm.avail_out?kt:zt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?vt:yt}
function m(t,e){for(var a;;){if(0===t.lookahead&&(u(t),0===t.lookahead)){if(e===q)return vt;break}
if(t.match_length=0,a=U._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(h(t,!1),0===t.strm.avail_out))return vt}
return t.insert=0,e===N?(h(t,!0),0===t.strm.avail_out?kt:zt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?vt:yt}
function b(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}
function w(t){t.window_size=2*t.w_size,i(t.head),t.max_lazy_match=E[t.level].max_lazy,t.good_match=E[t.level].good_length,t.nice_match=E[t.level].nice_length,t.max_chain_length=E[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ot-1,t.match_available=0,t.ins_h=0}
function v(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Z,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new j.Buf16(2*ht),this.dyn_dtree=new j.Buf16(2*(2*it+1)),this.bl_tree=new j.Buf16(2*(2*st+1)),i(this.dyn_ltree),i(this.dyn_dtree),i(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new j.Buf16(lt+1),this.heap=new j.Buf16(2*rt+1),i(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new j.Buf16(2*rt+1),i(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}
function y(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Y,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ft:bt,t.adler=2===e.wrap?0:1,e.last_flush=q,U._tr_init(e),H):n(t,K)}
function k(t){var e=y(t);return e===H&&w(t.state),e}
function z(t,e){return t&&t.state?2!==t.state.wrap?K:(t.state.gzhead=e,H):K}
function x(t,e,a,r,i,s){if(!t)return K;var h=1;if(e===G&&(e=6),r<0?(h=0,r=-r):r>15&&(h=2,r-=16),i<1||i>$||a!==Z||r<8||r>15||e<0||e>9||s<0||s>W)return n(t,K);8===r&&(r=9);var l=new v;return t.state=l,l.strm=t,l.wrap=h,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=i+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ot-1)/ot),l.window=new j.Buf8(2*l.w_size),l.head=new j.Buf16(l.hash_size),l.prev=new j.Buf16(l.w_size),l.lit_bufsize=1<<i+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new j.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,k(t)}
function B(t,e){return x(t,e,Z,tt,et,X)}
function A(t,e){var a,h,_,d;if(!t||!t.state||e>R||e<0)return t?n(t,K):K;if(h=t.state,!t.output||!t.input&&0!==t.avail_in||h.status===wt&&e!==N)return n(t,0===t.avail_out?P:K);if(h.strm=t,a=h.last_flush,h.last_flush=e,h.status===ft)
if(2===h.wrap)t.adler=0,l(h,31),l(h,139),l(h,8),h.gzhead?(l(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),l(h,255&h.gzhead.time),l(h,h.gzhead.time>>8&255),l(h,h.gzhead.time>>16&255),l(h,h.gzhead.time>>24&255),l(h,9===h.level?2:h.strategy>=Q||h.level<2?4:0),l(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(l(h,255&h.gzhead.extra.length),l(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(t.adler=I(t.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=ct):(l(h,0),l(h,0),l(h,0),l(h,0),l(h,0),l(h,9===h.level?2:h.strategy>=Q||h.level<2?4:0),l(h,xt),h.status=bt);else{var u=Z+(h.w_bits-8<<4)<<8,f=-1;f=h.strategy>=Q||h.level<2?0:h.level<6?1:6===h.level?2:3,u|=f<<6,0!==h.strstart&&(u|=ut),u+=31-u%31,h.status=bt,o(h,u),0!==h.strstart&&(o(h,t.adler>>>16),o(h,65535&t.adler)),t.adler=1}if(h.status===ct)
if(h.gzhead.extra){for(_=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>_&&(t.adler=I(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending!==h.pending_buf_size));)l(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>_&&(t.adler=I(t.adler,h.pending_buf,h.pending-_,_)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=pt)}else h.status=pt;if(h.status===pt)
if(h.gzhead.name){_=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>_&&(t.adler=I(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending===h.pending_buf_size)){d=1;break}
d=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,l(h,d)}while(0!==d);h.gzhead.hcrc&&h.pending>_&&(t.adler=I(t.adler,h.pending_buf,h.pending-_,_)),0===d&&(h.gzindex=0,h.status=gt)}else h.status=gt;if(h.status===gt)
if(h.gzhead.comment){_=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>_&&(t.adler=I(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending===h.pending_buf_size)){d=1;break}
d=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,l(h,d)}while(0!==d);h.gzhead.hcrc&&h.pending>_&&(t.adler=I(t.adler,h.pending_buf,h.pending-_,_)),0===d&&(h.status=mt)}else h.status=mt;if(h.status===mt&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&s(t),h.pending+2<=h.pending_buf_size&&(l(h,255&t.adler),l(h,t.adler>>8&255),t.adler=0,h.status=bt)):h.status=bt),0!==h.pending){if(s(t),0===t.avail_out)return h.last_flush=-1,H}else if(0===t.avail_in&&r(e)<=r(a)&&e!==N)return n(t,P);if(h.status===wt&&0!==t.avail_in)return n(t,P);if(0!==t.avail_in||0!==h.lookahead||e!==q&&h.status!==wt){var c=h.strategy===Q?m(h,e):h.strategy===V?g(h,e):E[h.level].func(h,e);if(c!==kt&&c!==zt||(h.status=wt),c===vt||c===kt)return 0===t.avail_out&&(h.last_flush=-1),H;if(c===yt&&(e===T?U._tr_align(h):e!==R&&(U._tr_stored_block(h,0,0,!1),e===L&&(i(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),s(t),0===t.avail_out))return h.last_flush=-1,H}
return e!==N?H:h.wrap<=0?F:(2===h.wrap?(l(h,255&t.adler),l(h,t.adler>>8&255),l(h,t.adler>>16&255),l(h,t.adler>>24&255),l(h,255&t.total_in),l(h,t.total_in>>8&255),l(h,t.total_in>>16&255),l(h,t.total_in>>24&255)):(o(h,t.adler>>>16),o(h,65535&t.adler)),s(t),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?H:F)}
function C(t){var e;return t&&t.state?(e=t.state.status,e!==ft&&e!==ct&&e!==pt&&e!==gt&&e!==mt&&e!==bt&&e!==wt?n(t,K):(t.state=null,e===bt?n(t,M):H)):K}
function S(t,e){var a,n,r,s,h,l,o,_,d=e.length;if(!t||!t.state)return K;if(a=t.state,s=a.wrap,2===s||1===s&&a.status!==ft||a.lookahead)return K;for(1===s&&(t.adler=D(t.adler,e,d,0)),a.wrap=0,d>=a.w_size&&(0===s&&(i(a.head),a.strstart=0,a.block_start=0,a.insert=0),_=new j.Buf8(a.w_size),j.arraySet(_,e,d-a.w_size,a.w_size,0),e=_,d=a.w_size),h=t.avail_in,l=t.next_in,o=t.input,t.avail_in=d,t.next_in=0,t.input=e,u(a);a.lookahead>=ot;){n=a.strstart,r=a.lookahead-(ot-1);do a.ins_h=(a.ins_h<<a.hash_shift^a.window[n+ot-1])&a.hash_mask,a.prev[n&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=n,n++;while(--r);a.strstart=n,a.lookahead=ot-1,u(a)}
return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=ot-1,a.match_available=0,t.next_in=l,t.input=o,t.avail_in=h,a.wrap=s,H}
var E,j=t("../utils/common"),U=t("./trees"),D=t("./adler32"),I=t("./crc32"),O=t("./messages"),q=0,T=1,L=3,N=4,R=5,H=0,F=1,K=-2,M=-3,P=-5,G=-1,J=1,Q=2,V=3,W=4,X=0,Y=2,Z=8,$=9,tt=15,et=8,at=29,nt=256,rt=nt+1+at,it=30,st=19,ht=2*rt+1,lt=15,ot=3,_t=258,dt=_t+ot+1,ut=32,ft=42,ct=69,pt=73,gt=91,mt=103,bt=113,wt=666,vt=1,yt=2,kt=3,zt=4,xt=3;E=[new b(0,0,0,0,f),new b(4,4,8,4,c),new b(4,5,16,8,c),new b(4,6,32,32,c),new b(4,4,16,16,p),new b(8,16,32,32,p),new b(8,16,128,128,p),new b(8,32,128,256,p),new b(32,128,258,1024,p),new b(32,258,258,4096,p)],a.deflateInit=B,a.deflateInit2=x,a.deflateReset=k,a.deflateResetKeep=y,a.deflateSetHeader=z,a.deflate=A,a.deflateEnd=C,a.deflateSetDictionary=S,a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":4,"./messages":6,"./trees":7}],6:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],7:[function(t,e,a){"use strict";function n(t){for(var e=t.length;--e>=0;)t[e]=0}
function r(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}
function i(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}
function s(t){return t<256?lt[t]:lt[256+(t>>>7)]}
function h(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}
function l(t,e,a){t.bi_valid>W-a?(t.bi_buf|=e<<t.bi_valid&65535,h(t,t.bi_buf),t.bi_buf=e>>W-t.bi_valid,t.bi_valid+=a-W):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}
function o(t,e,a){l(t,a[2*e],a[2*e+1])}
function _(t,e){var a=0;do a|=1&t,t>>>=1,a<<=1;while(--e>0);return a>>>1}
function d(t){16===t.bi_valid?(h(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}
function u(t,e){var a,n,r,i,s,h,l=e.dyn_tree,o=e.max_code,_=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,p=0;for(i=0;i<=V;i++)t.bl_count[i]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<Q;a++)n=t.heap[a],i=l[2*l[2*n+1]+1]+1,i>c&&(i=c,p++),l[2*n+1]=i,n>o||(t.bl_count[i]++,s=0,n>=f&&(s=u[n-f]),h=l[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(_[2*n+1]+s)));if(0!==p){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,p-=2}while(p>0);for(i=c;0!==i;i--)
for(n=t.bl_count[i];0!==n;)r=t.heap[--a],r>o||(l[2*r+1]!==i&&(t.opt_len+=(i-l[2*r+1])*l[2*r],l[2*r+1]=i),n--)}}
function f(t,e,a){var n,r,i=new Array(V+1),s=0;for(n=1;n<=V;n++)i[n]=s=s+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=_(i[h]++,h))}}
function c(){var t,e,a,n,i,s=new Array(V+1);for(a=0,n=0;n<K-1;n++)
for(_t[n]=a,t=0;t<1<<et[n];t++)ot[a++]=n;for(ot[a-1]=n,i=0,n=0;n<16;n++)
for(dt[n]=i,t=0;t<1<<at[n];t++)lt[i++]=n;for(i>>=7;n<G;n++)
for(dt[n]=i<<7,t=0;t<1<<at[n]-7;t++)lt[256+i++]=n;for(e=0;e<=V;e++)s[e]=0;for(t=0;t<=143;)st[2*t+1]=8,t++,s[8]++;for(;t<=255;)st[2*t+1]=9,t++,s[9]++;for(;t<=279;)st[2*t+1]=7,t++,s[7]++;for(;t<=287;)st[2*t+1]=8,t++,s[8]++;for(f(st,P+1,s),t=0;t<G;t++)ht[2*t+1]=5,ht[2*t]=_(t,5);ut=new r(st,et,M+1,P,V),ft=new r(ht,at,0,G,V),ct=new r(new Array(0),nt,0,J,X)}
function p(t){var e;for(e=0;e<P;e++)t.dyn_ltree[2*e]=0;for(e=0;e<G;e++)t.dyn_dtree[2*e]=0;for(e=0;e<J;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*Y]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}
function g(t){t.bi_valid>8?h(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}
function m(t,e,a,n){g(t),n&&(h(t,a),h(t,~a)),D.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}
function b(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]}
function w(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&b(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!b(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n}
function v(t,e,a){var n,r,i,h,_=0;if(0!==t.last_lit)
do n=t.pending_buf[t.d_buf+2*_]<<8|t.pending_buf[t.d_buf+2*_+1],r=t.pending_buf[t.l_buf+_],_++,0===n?o(t,r,e):(i=ot[r],o(t,i+M+1,e),h=et[i],0!==h&&(r-=_t[i],l(t,r,h)),n--,i=s(n),o(t,i,a),h=at[i],0!==h&&(n-=dt[i],l(t,n,h)));while(_<t.last_lit);o(t,Y,e)}
function y(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=Q,a=0;a<l;a++)0!==i[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)r=t.heap[++t.heap_len]=o<2?++o:0,i[2*r]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)w(t,i,a);r=l;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],w(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,w(t,i,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],u(t,e),f(i,o,t.bl_count)}
function k(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,o=4;for(0===s&&(l=138,o=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<o?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[2*Z]++):h<=10?t.bl_tree[2*$]++:t.bl_tree[2*tt]++,h=0,i=r,0===s?(l=138,o=3):r===s?(l=6,o=3):(l=7,o=4))}
function z(t,e,a){var n,r,i=-1,s=e[1],h=0,_=7,d=4;for(0===s&&(_=138,d=3),n=0;n<=a;n++)
if(r=s,s=e[2*(n+1)+1],!(++h<_&&r===s)){if(h<d){do o(t,r,t.bl_tree);while(0!==--h)}else 0!==r?(r!==i&&(o(t,r,t.bl_tree),h--),o(t,Z,t.bl_tree),l(t,h-3,2)):h<=10?(o(t,$,t.bl_tree),l(t,h-3,3)):(o(t,tt,t.bl_tree),l(t,h-11,7));h=0,i=r,0===s?(_=138,d=3):r===s?(_=6,d=3):(_=7,d=4)}}
function x(t){var e;for(k(t,t.dyn_ltree,t.l_desc.max_code),k(t,t.dyn_dtree,t.d_desc.max_code),y(t,t.bl_desc),e=J-1;e>=3&&0===t.bl_tree[2*rt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}
function B(t,e,a,n){var r;for(l(t,e-257,5),l(t,a-1,5),l(t,n-4,4),r=0;r<n;r++)l(t,t.bl_tree[2*rt[r]+1],3);z(t,t.dyn_ltree,e-1),z(t,t.dyn_dtree,a-1)}
function A(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)
if(1&a&&0!==t.dyn_ltree[2*e])return O;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return q;for(e=32;e<M;e++)
if(0!==t.dyn_ltree[2*e])return q;return O}
function C(t){pt||(c(),pt=!0),t.l_desc=new i(t.dyn_ltree,ut),t.d_desc=new i(t.dyn_dtree,ft),t.bl_desc=new i(t.bl_tree,ct),t.bi_buf=0,t.bi_valid=0,p(t)}
function S(t,e,a,n){l(t,(L<<1)+(n?1:0),3),m(t,e,a,!0)}
function E(t){l(t,N<<1,3),o(t,Y,st),d(t)}
function j(t,e,a,n){var r,i,s=0;t.level>0?(t.strm.data_type===T&&(t.strm.data_type=A(t)),y(t,t.l_desc),y(t,t.d_desc),s=x(t),r=t.opt_len+3+7>>>3,i=t.static_len+3+7>>>3,i<=r&&(r=i)):r=i=a+5,a+4<=r&&e!==-1?S(t,e,a,n):t.strategy===I||i===r?(l(t,(N<<1)+(n?1:0),3),v(t,st,ht)):(l(t,(R<<1)+(n?1:0),3),B(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),v(t,t.dyn_ltree,t.dyn_dtree)),p(t),n&&g(t)}
function U(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(ot[a]+M+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1}
var D=t("../utils/common"),I=4,O=0,q=1,T=2,L=0,N=1,R=2,H=3,F=258,K=29,M=256,P=M+1+K,G=30,J=19,Q=2*P+1,V=15,W=16,X=7,Y=256,Z=16,$=17,tt=18,et=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],at=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],nt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],it=512,st=new Array(2*(P+2));n(st);var ht=new Array(2*G);n(ht);var lt=new Array(it);n(lt);var ot=new Array(F-H+1);n(ot);var _t=new Array(K);n(_t);var dt=new Array(G);n(dt);var ut,ft,ct,pt=!1;a._tr_init=C,a._tr_stored_block=S,a._tr_flush_block=j,a._tr_tally=U,a._tr_align=E},{"../utils/common":1}],8:[function(t,e,a){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}
e.exports=n},{}],"/lib/deflate.js":[function(t,e,a){"use strict";function n(t){if(!(this instanceof n))return new n(t);this.options=l.assign({level:b,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:w,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var a=h.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==p)throw new Error(_[a]);if(e.header&&h.deflateSetHeader(this.strm,e.header),e.dictionary){var r;if(r="string"==typeof e.dictionary?o.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=h.deflateSetDictionary(this.strm,r),a!==p)throw new Error(_[a]);this._dict_set=!0}}
function r(t,e){var a=new n(e);if(a.push(t,!0),a.err)throw a.msg||_[a.err];return a.result}
function i(t,e){return e=e||{},e.raw=!0,r(t,e)}
function s(t,e){return e=e||{},e.gzip=!0,r(t,e)}
var h=t("./zlib/deflate"),l=t("./utils/common"),o=t("./utils/strings"),_=t("./zlib/messages"),d=t("./zlib/zstream"),u=Object.prototype.toString,f=0,c=4,p=0,g=1,m=2,b=-1,w=0,v=8;n.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:e===!0?c:f,"string"==typeof t?r.input=o.string2buf(t):"[object ArrayBuffer]"===u.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new l.Buf8(i),r.next_out=0,r.avail_out=i),a=h.deflate(r,n),a!==g&&a!==p)return this.onEnd(a),this.ended=!0,!1;0!==r.avail_out&&(0!==r.avail_in||n!==c&&n!==m)||("string"===this.options.to?this.onData(o.buf2binstring(l.shrinkBuf(r.output,r.next_out))):this.onData(l.shrinkBuf(r.output,r.next_out)))}while((r.avail_in>0||0===r.avail_out)&&a!==g);return n===c?(a=h.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===p):n!==m||(this.onEnd(p),r.avail_out=0,!0)},n.prototype.onData=function(t){this.chunks.push(t)},n.prototype.onEnd=function(t){t===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=n,a.deflate=r,a.deflateRaw=i,a.gzip=s},{"./utils/common":1,"./utils/strings":2,"./zlib/deflate":5,"./zlib/messages":6,"./zlib/zstream":8}]},{},[])("/lib/deflate.js")});if(window.TLT){throw"Attempting to recreate TLT. Library may be included more than once on the page."}
window.TLT=(function(){function r(F,x,y,G){var D=null,H=null,C=TLT.getService("queue"),A=TLT.getModule("replay"),E=TLT.getModule("TLCookie"),z=null,B=TLT.utils.getOriginAndPath();if(!x||typeof x!=="string"){return}
if(!y||typeof y!=="string"){y=""}
H={type:2,screenview:{type:F,name:x,url:B.path,host:B.origin,referrer:y}};if(F==="LOAD"){z={type:"screenview_load",name:x}}else{if(F==="UNLOAD"){z={type:"screenview_unload",name:x}}}
if(z&&A){D=A.onevent(z)}
if(D){H.dcid=D}
if(F==="LOAD"||F==="UNLOAD"){C.post("",H,"DEFAULT")}
if(z&&E){E.onevent(z)}}
function s(y){var z,x=TLT.getService("queue");if(!y||!y.coords){return}
z={type:13,geolocation:{lat:y.coords.latitude,"long":y.coords.longitude,accuracy:Math.ceil(y.coords.accuracy)}};x.post("",z,"DEFAULT")}
function m(){var y,x=TLT.getService("queue");y={type:13,geolocation:{errorCode:201,error:"Permission denied."}};x.post("",y,"DEFAULT")}
var v=(new Date()).getTime(),q,w={},b={},e=false,g=null,o=(function(){var y,A=[];function z(F){var E=u.getService("browser"),B=u.getCoreConfig().framesBlacklist,D,C;y=y||[];F=F||null;if(typeof B!=="undefined"&&B.length>0){for(C=0;C<B.length;C+=1){D=E.queryAll(B[C],F);if(D&&D.length>0){y=y.concat(D)}}
A=A.concat(E.queryAll("iframe",F))}}
function x(B){if(u.utils.indexOf(A,B)<0){z(B.ownerDocument)}
return u.utils.indexOf(y,B)>-1}
x.clearCache=function(){y=null};return x}()),p=null,h={config:["getConfig","updateConfig","getCoreConfig","updateCoreConfig","getModuleConfig","updateModuleConfig","getServiceConfig","updateServiceConfig"],queue:["post","setAutoFlush","flushAll"],browserBase:["getXPathFromNode","processDOMEvent"]},t=(function(){var x={};return{normalizeModuleEvents:function(C,A,F,z){var y=x[C],E=false,B=false,D=u.getService("browser");F=F||u._getLocalTop();z=z||F.document;if(y){return}
x[C]={loadFired:false,pageHideFired:false};u.utils.forEach(A,function(G){switch(G.name){case"load":E=true;A.push(u.utils.mixin(u.utils.mixin({},G),{name:"pageshow"}));break;case"unload":B=true;A.push(u.utils.mixin(u.utils.mixin({},G),{name:"pagehide"}));A.push(u.utils.mixin(u.utils.mixin({},G),{name:"beforeunload"}));break;case"change":if(u.utils.isLegacyIE&&u.getFlavor()==="w3c"){A.push(u.utils.mixin(u.utils.mixin({},G),{name:"propertychange"}))}
break}});if(!E&&!B){delete x[C];return}
x[C].silentLoad=!E;x[C].silentUnload=!B;if(!E){A.push({name:"load",target:F})}
if(!B){A.push({name:"unload",target:F})}},canPublish:function(y,A){var z;if(x.hasOwnProperty(y)===false){return true}
z=x[y];switch(A.type){case"load":z.pageHideFired=false;z.loadFired=true;return!z.silentLoad;case"pageshow":z.pageHideFired=false;A.type="load";return!z.loadFired&&!z.silentLoad;case"pagehide":A.type="unload";z.loadFired=false;z.pageHideFired=true;return!z.silentUnload;case"unload":case"beforeunload":A.type="unload";z.loadFired=false;return!z.pageHideFired&&!z.silentUnload}
return true},isUnload:function(y){return typeof y==="object"?(y.type==="unload"||y.type==="beforeunload"||y.type==="pagehide"):false}}}()),c={},a={},j=function(){},l=null,k=true,d=function(){},i=false,n=(function(){var x=window.location,z=x.pathname,y=x.hash,A="";return function(){var D=x.pathname,B=x.hash,C=A;if(D!==z){C=D+B}else{if(B!==y){C=B}}
if(C!==A){if(A){r("UNLOAD",A)}
r("LOAD",C);A=C;z=D;y=B}}}()),f=function(A,H){var B,z,C,G=false,x=u.getService("browser"),y=u.getCoreConfig().blockedElements,E,F,D;if(!y||!y.length){f=function(){return false};return G}
if(!A||!A.nodeType){return G}
H=H||u.utils.getDocument(A);for(B=0,C=y.length;B<C&&!G;B+=1){F=x.queryAll(y[B],H);for(z=0,D=F.length;z<D&&!G;z+=1){E=F[z];G=E.contains?E.contains(A):E===A}}
return G},u={getStartTime:function(){return v},getPageId:function(){return q||"#"},getLibraryVersion:function(){return"5.5.0.1814"},init:function(y,z){var x;l=z;if(!k){throw"init must only be called once!"}
q="P."+this.utils.getRandomString(28);k=false;x=function(A){A=A||window.event||{};if(document.addEventListener||A.type==="load"||document.readyState==="complete"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",x,false);window.removeEventListener("load",x,false)}else{document.detachEvent("onreadystatechange",x);window.detachEvent("onload",x)}
j(y,z)}};if(document.readyState==="complete"){setTimeout(x)}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",x,false);window.addEventListener("load",x,false)}else{document.attachEvent("onreadystatechange",x);window.attachEvent("onload",x)}}},isInitialized:function(){return e},getState:function(){return g},destroy:function(y){var x="",A="",D=null,E=null,B=null,z=null,F=false;if(k){return false}
this.stopAll();if(!y){z=this.getService("browser");for(x in c){if(c.hasOwnProperty(x)&&z!==null){A=x.split("|")[0];D=c[x].target;F=c[x].delegateTarget||undefined;z.unsubscribe(A,D,this._publishEvent,F)}}}
for(E in b){if(b.hasOwnProperty(E)){B=b[E].instance;if(B&&typeof B.destroy==="function"){B.destroy()}
b[E].instance=null}}
o.clearCache();c={};e=false;k=true;g="destroyed";if(typeof l==="function"){try{l("destroyed")}catch(C){}}},_updateModules:function(B){var A=this.getCoreConfig(),z=this.getService("browser"),D=null,y=null,x=true;if(A&&z&&A.modules){try{for(y in A.modules){if(A.modules.hasOwnProperty(y)){D=A.modules[y];if(w.hasOwnProperty(y)){if(D.enabled===false){this.stop(y);continue}
this.start(y);if(D.events){this._registerModuleEvents(y,D.events,B)}}}}
this._registerModuleEvents.clearCache()}catch(C){u.destroy();x=false}}else{x=false}
return x},rebind:function(x){u._updateModules(x)},getSessionData:function(){if(!u.isInitialized()){return}
var B=null,y=null,z,A,x=u.getCoreConfig();if(!x||!x.sessionDataEnabled){return null}
y=x.sessionData||{};z=y.sessionQueryName;if(z){A=u.utils.getQueryStringValue(z,y.sessionQueryDelim)}else{z=y.sessionCookieName||"TLTSID";A=u.utils.getCookieValue(z)}
if(z&&A){B=B||{};B.tltSCN=z;B.tltSCV=A;B.tltSCVNeedsHashing=!!y.sessionValueNeedsHashing}
return B},logGeolocation:function(x){var B=u.getModuleConfig("replay")||{},A=u.utils.getValue(B,"geolocation.options",{timeout:30000,enableHighAccuracy:true,maximumAge:0}),z=u.utils.getValue(B,"geolocation.enabled",false),y=window.navigator;if(!x){if(!z||!y||!y.geolocation||!y.geolocation.getCurrentPosition){return}
y.geolocation.getCurrentPosition(s,m,A)}else{s(x)}},logCustomEvent:function(A,y){if(!u.isInitialized()){return}
var z=null,x=this.getService("queue");if(!A||typeof A!=="string"){A="CUSTOM"}
y=y||{};z={type:5,customEvent:{name:A,data:y}};x.post("",z,"DEFAULT")},logExceptionEvent:function(B,z,y){if(!u.isInitialized()){return}
var A=null,x=this.getService("queue");if(!B||typeof B!=="string"){return}
z=z||"";y=y||"";A={type:6,exception:{description:B,url:z,line:y}};x.post("",A)},logFormCompletion:function(y,A){if(!u.isInitialized()){return}
var x=this.getService("queue"),z={type:15,formCompletion:{submitted:!!y,valid:(typeof A==="boolean"?A:null)}};x.post("",z)},logScreenviewLoad:function(z,y,x){if(!u.isInitialized()){return}
r("LOAD",z,y,x)},logScreenviewUnload:function(x){if(!u.isInitialized()){return}
r("UNLOAD",x)},logDOMCapture:function(z,C){var D=null,B,y,A,E,x;if(!this.isInitialized()){return D}
if(u.utils.isLegacyIE){return D}
y=this.getService("domCapture");if(y){z=z||window.document;A=this.getServiceConfig("domCapture");C=this.utils.mixin({},A.options,C);B=y.captureDOM(z,C);if(B){D=C.dcid||("dcid-"+this.utils.getSerialNumber()+"."+(new Date()).getTime());B.dcid=D;B.eventOn=!!C.eventOn;E={type:12,domCapture:B};x=this.getService("queue");x.post("",E,"DEFAULT");if(C.qffd!==false&&!i&&E.domCapture.fullDOM){x.flush();i=true}}else{D=null}}
return D},performDOMCapture:function(z,x,y){return this.logDOMCapture(x,y)},performFormCompletion:function(y,x,z){return this.logFormCompletion(x,z)},_bridgeCallback:function(y){var x=a[y];if(x&&x.enabled){return x}
return null},logScreenCapture:function(){if(!u.isInitialized()){return}
var x=u._bridgeCallback("screenCapture");if(x!==null){x.cbFunction()}},enableTealeafFramework:function(){if(!u.isInitialized()){return}
var x=u._bridgeCallback("enableTealeafFramework");if(x!==null){x.cbFunction()}},disableTealeafFramework:function(){if(!u.isInitialized()){return}
var x=u._bridgeCallback("disableTealeafFramework");if(x!==null){x.cbFunction()}},startNewTLFSession:function(){if(!u.isInitialized()){return}
var x=u._bridgeCallback("startNewTLFSession");if(x!==null){x.cbFunction()}},currentSessionId:function(){if(!u.isInitialized()){return}
var y,x=u._bridgeCallback("currentSessionId");if(x!==null){y=x.cbFunction()}
return y},defaultValueForConfigurableItem:function(x){if(!u.isInitialized()){return}
var z,y=u._bridgeCallback("defaultValueForConfigurableItem");if(y!==null){z=y.cbFunction(x)}
return z},valueForConfigurableItem:function(x){if(!u.isInitialized()){return}
var z,y=u._bridgeCallback("valueForConfigurableItem");if(y!==null){z=y.cbFunction(x)}
return z},setConfigurableItem:function(y,A){if(!u.isInitialized()){return}
var x=false,z=u._bridgeCallback("setConfigurableItem");if(z!==null){x=z.cbFunction(y,A)}
return x},addAdditionalHttpHeader:function(y,A){if(!u.isInitialized()){return}
var x=false,z=u._bridgeCallback("addAdditionalHttpHeader");if(z!==null){x=z.cbFunction(y,A)}
return x},logCustomEventBridge:function(z,A,y){if(!u.isInitialized()){return}
var x=false,B=u._bridgeCallback("logCustomEventBridge");if(B!==null){x=B.cbFunction(z,A,y)}
return x},registerBridgeCallbacks:function(E){var B,z,C,y=null,A,G,x,F=this.utils;if(!E){return false}
if(E.length===0){a={};return false}
try{for(B=0,C=E.length;B<C;B+=1){y=E[B];if(typeof y==="object"&&y.cbType&&y.cbFunction){A={enabled:y.enabled,cbFunction:y.cbFunction,cbOrder:y.order||0};if(F.isUndefOrNull(a[y.cbType])){a[y.cbType]=A}else{if(!F.isArray(a[y.cbType])){a[y.cbType]=[a[y.cbType]]}
G=a[y.cbType];for(z=0,x=G.length;z<x;z+=1){if(G[z].cbOrder>A.cbOrder){break}}
G.splice(z,0,A)}}}}catch(D){return false}
return true},redirectQueue:function(D){var C,B,E,z,G,x,y,F=this.utils,A;if(!D||!D.length){return D}
z=a.messageRedirect;if(!z){return D}
if(!F.isArray(z)){G=[z]}else{G=z}
A=u.getService("serializer");for(B=0,x=G.length;B<x;B+=1){z=G[B];if(z&&z.enabled){for(C=0,E=D.length;C<E;C+=1){y=z.cbFunction(A.serialize(D[C]),D[C]);if(y&&typeof y==="object"){D[C]=y}else{D.splice(C,1);C-=1;E=D.length}}}}
return D},_hasSameOrigin:function(x){try{return x.document.location.host===document.location.host&&x.document.location.protocol===document.location.protocol}catch(y){}
return false},provideRequestHeaders:function(){var y=null,x=a.addRequestHeaders;if(x&&x.enabled){y=x.cbFunction()}
return y},_registerModuleEvents:(function(){var z,B=0,A=function(F,E,D){if(F==="window"){return E}
if(F==="document"){return D}
return F};function C(D,K,N){var M=u.getService("browserBase"),H=u.getService("browser"),L=u.utils.getDocument(N),F=u._getLocalTop(),E=u.utils.isIFrameDescendant(N),J,I,G;N=N||L;t.normalizeModuleEvents(D,K,F,L);if(E){J=M.ElementData.prototype.examineID(N).id;if(typeof J==="string"){J=J.slice(0,J.length-1);for(I in c){if(c.hasOwnProperty(I)){for(G=0;G<c[I].length;G+=1){if(D===c[I][G]){if(I.indexOf(J)!==-1){delete c[I];break}}}}}}}
u.utils.forEach(K,function(O){var R=A(O.target,F,L)||L,Q=A(O.delegateTarget,F,L),P="";if(O.recurseFrames!==true&&E){return}
if(typeof R==="string"){if(O.delegateTarget&&u.getFlavor()==="jQuery"){P=u._buildToken4delegateTarget(O.name,R,O.delegateTarget);if(!c.hasOwnProperty(P)){c[P]=[D];c[P].target=R;c[P].delegateTarget=Q;H.subscribe(O.name,R,u._publishEvent,Q,P)}else{c[P].push(D)}}else{u.utils.forEach(H.queryAll(R,N),function(S){var T=z.get(S);if(!T){T=M.ElementData.prototype.examineID(S);z.set(S,T)}
P=O.name+"|"+T.id+T.idType;if(u.utils.indexOf(c[P],D)!==-1){return}
c[P]=c[P]||[];c[P].push(D);c[P].target=S;H.subscribe(O.name,S,u._publishEvent)})}}else{P=u._buildToken4bubbleTarget(O.name,R,typeof O.target==="undefined");if(!c.hasOwnProperty(P)){c[P]=[D];H.subscribe(O.name,R,u._publishEvent)}else{if(u.utils.indexOf(c[P],D)===-1){c[P].push(D)}}}
if(P!==""){if(typeof R!=="string"){c[P].target=R}}})}
function y(D){var E=u.utils.getIFrameWindow(D);return(E!==null)&&u._hasSameOrigin(E)&&(E.document!==null)&&E.document.readyState==="complete"}
function x(E,K,M){M=M||u._getLocalTop().document;z=z||new u.utils.WeakMap();C(E,K,M);if(E!=="performance"){var I=null,D=null,F=u.getService("browser"),L=u.getService("domCapture"),J=F.queryAll("iframe, frame",M),H,G;for(H=0,G=J.length;H<G;H+=1){I=J[H];if(o(I)){continue}
if(y(I)){D=u.utils.getIFrameWindow(I);u._registerModuleEvents(E,K,D.document);L.observeWindow(D);continue}
B+=1;(function(P,N,Q){var O=null,R={moduleName:P,moduleEvents:N,hIFrame:Q,_registerModuleEventsDelayed:function(){var S=null;if(!o(Q)){S=u.utils.getIFrameWindow(Q);if(u._hasSameOrigin(S)){u._registerModuleEvents(P,N,S.document);L.observeWindow(S)}}
B-=1;if(!B){u._publishEvent({type:"loadWithFrames",custom:true})}}};u.utils.addEventListener(Q,"load",function(){R._registerModuleEventsDelayed()});if(u.utils.isLegacyIE&&y(Q)){O=u.utils.getIFrameWindow(Q);u.utils.addEventListener(O.document,"readystatechange",function(){R._registerModuleEventsDelayed()})}}(E,K,I))}}}
x.clearCache=function(){if(z){z.clear();z=null}};return x}()),_buildToken4currentTarget:function(y){var z=y.nativeEvent?y.nativeEvent.currentTarget:null,x=z?this.getService("browserBase").ElementData.prototype.examineID(z):{id:y.target?y.target.id:null,idType:y.target?y.target.idType:-1};return y.type+"|"+x.id+x.idType},_buildToken4delegateTarget:function(x,z,y){return x+"|"+z+"|"+y},_buildToken4bubbleTarget:function(y,F,E,J){var C=u._getLocalTop(),x,z=u.getService("browser"),K=function(L){var M=null;if(u._hasSameOrigin(x.parent)){u.utils.forEach(z.queryAll("iframe, frame",x.parent.document),function(N){var O=null;if(!o(N)){O=u.utils.getIFrameWindow(N);if(u._hasSameOrigin(O)&&O.document===L){M=N}}})}
return M},G=u.utils.getDocument(F),I=this.getService("browserBase"),H=null,B,A=y,D;if(G){x=G.defaultView||G.parentWindow}
if(F===window||F===window.window){A+="|null-2|window"}else{if(E&&x&&u._hasSameOrigin(x.parent)&&typeof G!=="undefined"&&C.document!==G){H=K(G);if(H){B=I.ElementData.prototype.examineID(H);A+="|"+B.xPath+"-2"}}else{if(J&&J!==document&&u.getFlavor()==="jQuery"){A+="|null-2|"+u.utils.getTagName(F)+"|"+u.utils.getTagName(J)}else{A+="|null-2|document"}}}
return A},_reinitConfig:function(){u._updateModules()},_publishEvent:function(x){var y=null,B=null,D=(x.delegateTarget&&x.data)?x.data:u._buildToken4currentTarget(x),E=null,F,G,H,A=null,I=false,J=false,C=u.getCoreConfig(),z=u.getService("browser"),L=x.delegateTarget||null,K;if(x.type.match(/^(click|change|blur|mouse|touch)/)){d()}
K=u.utils.getValue(C,"screenviewAutoDetect",true);if(K){n()}
if((x.type==="load"||x.type==="pageshow")&&!x.nativeEvent.customLoad){return}
if(u.utils.isIE){if(x.type==="click"){p=x.target.element}
if(x.type==="beforeunload"){I=false;u.utils.forEach(C.ieExcludedLinks,function(N){var O,M,P=z.queryAll(N);for(O=0,M=P?P.length:0;O<M;O+=1){if(typeof P[O]!==undefined&&P[O]===p){I=true;return}}});if(I){return}}}
if(t.isUnload(x)){g="unloading"}
if(x.type==="change"&&u.utils.isLegacyIE&&u.getFlavor()==="w3c"&&(x.target.element.type==="checkbox"||x.target.element.type==="radio")){return}
if(x.type==="propertychange"){if(x.nativeEvent.propertyName==="checked"&&(x.target.element.type==="checkbox"||(x.target.element.type==="radio"&&x.target.element.checked))){x.type="change";x.target.type="INPUT"}else{return}}
if(x.target&&f(x.target.element)){return}
if(!c.hasOwnProperty(D)){if(x.hasOwnProperty("nativeEvent")){H=x.nativeEvent.currentTarget||x.nativeEvent.target}
D=u._buildToken4bubbleTarget(x.type,H,true,L)}
if(c.hasOwnProperty(D)){E=c[D];for(F=0,G=E.length;F<G;F+=1){y=E[F];B=u.getModule(y);A=u.utils.mixin({},x);if(B&&u.isStarted(y)&&typeof B.onevent==="function"){J=t.canPublish(y,A);if(J){B.onevent(A)}}}}
if(A&&A.type==="unload"&&J){u.destroy()}},_getLocalTop:function(){return window.window},addModule:function(x,y){w[x]={creator:y,instance:null,context:null,messages:[]};if(this.isInitialized()){this.start(x)}},getModule:function(x){if(w[x]&&w[x].instance){return w[x].instance}
return null},removeModule:function(x){this.stop(x);delete w[x]},isStarted:function(x){return w.hasOwnProperty(x)&&w[x].instance!==null},start:function(y){var z=w[y],x=null;if(z&&z.instance===null){z.context=new TLT.ModuleContext(y,this);x=z.instance=z.creator(z.context);if(typeof x.init==="function"){x.init()}}},startAll:function(){var x=null;for(x in w){if(w.hasOwnProperty(x)){this.start(x)}}},stop:function(y){var z=w[y],x=null;if(z&&z.instance!==null){x=z.instance;if(typeof x.destroy==="function"){x.destroy()}
z.instance=z.context=null}},stopAll:function(){var x=null;for(x in w){if(w.hasOwnProperty(x)){this.stop(x)}}},addService:function(y,x){b[y]={creator:x,instance:null}},getService:function(x){if(b.hasOwnProperty(x)){if(!b[x].instance){try{b[x].instance=b[x].creator(this);if(typeof b[x].instance.init==="function"){b[x].instance.init()}}catch(y){return null}
if(typeof b[x].instance.getServiceName!=="function"){b[x].instance.getServiceName=function(){return x}}}
return b[x].instance}
return null},removeService:function(x){delete b[x]},broadcast:function(A){var z=0,x=0,B=null,y=null;if(A&&typeof A==="object"){for(B in w){if(w.hasOwnProperty(B)){y=w[B];if(u.utils.indexOf(y.messages,A.type)>-1){if(typeof y.instance.onmessage==="function"){y.instance.onmessage(A)}}}}}},listen:function(x,z){var y=null;if(this.isStarted(x)){y=w[x];if(u.utils.indexOf(y.messages,z)===-1){y.messages.push(z)}}},fail:function(z,y,x){z="UIC FAILED. "+z;try{u.destroy(!!x)}finally{u.utils.clog(z);throw new u.UICError(z,y)}},UICError:(function(){function x(y,z){this.message=y;this.code=z}
x.prototype=new Error();x.prototype.name="UICError";x.prototype.constructor=x;return x}()),getFlavor:function(){return"w3c"}};d=function(){var z=u.getCoreConfig(),A=null,y=u.utils.getValue(z,"inactivityTimeout",600000);if(!y){d=function(){};return}
function x(){u.utils.clog("UIC self-terminated due to inactivity timeout.");u.destroy()}
d=function(){if(A){clearTimeout(A);A=null}
A=setTimeout(x,y)};d()};j=function(O,A){var N,F,D,M,J,L,z,E,G,K,I,y,x,H;if(e){u.utils.clog("TLT.init() called more than once. Ignoring.");return}
if(TLT&&TLT.replay){return}
N=u.getService("config");N.updateConfig(O);L=N.getModuleConfig("TLCookie")||{};K=L.sessionizationCookieName||"TLTSID";I=u.utils.getCookieValue(K);if(I==="DND"){if(g!=="destroyed"){u.destroy()}
return}
if(!u._updateModules()){if(g!=="destroyed"){u.destroy()}
return}
if(N.subscribe){N.subscribe("configupdated",u._reinitConfig)}
e=true;g="loaded";try{if(typeof TLFExtensionNotify==="function"){TLFExtensionNotify("Initialized")}}catch(C){}
F={type:"load",target:window.window,srcElement:window.window,currentTarget:window.window,bubbles:true,cancelBubble:false,cancelable:true,timeStamp:+new Date(),customLoad:true};M=u.getService("browserBase");D=new M.WebEvent(F);u._publishEvent(D);E=u.getService("ajax");z=u.getServiceConfig("queue");G=z.queues||[];for(H=0;H<G.length;H+=1){if(!I&&L.tlAppKey){y=G[H].endpoint;x=G[H].killswitchURL||(y.match("collectorPost")?y.replace("collectorPost","switch/"+L.tlAppKey):null);if(x){E.sendRequest({type:"GET",url:x,async:true,timeout:5000,oncomplete:function(P){if(P.responseText==="0"){u.setAutoFlush(false);u.utils.setCookie(K,"DND");u.destroy()}}})}}
if(G[H].checkEndpoint){E.sendRequest({oncomplete:function(P){},timeout:G[H].endpointCheckTimeout||3000,url:G[H].endpoint,headers:{"X-PageId":q,"X-Tealeaf-SaaS-AppKey":L.tlAppKey,"X-Tealeaf-EndpointCheck":true},async:true,error:function(P){if(P.success){return}
u.setAutoFlush(false);u.destroy()}})}}
if(typeof l==="function"){try{l("initialized")}catch(B){}}};(function(){var y=null,z,x;for(y in h){if(h.hasOwnProperty(y)){for(z=0,x=h[y].length;z<x;z+=1){(function(B,A){u[A]=function(){var C=this.getService(B);if(C){return C[A].apply(C,arguments)}}}(y,h[y][z]))}}}}());return u}());(function(){var a=window.navigator.userAgent.toLowerCase(),i=(a.indexOf("msie")!==-1||a.indexOf("trident")!==-1),b=(function(){var j=!!window.performance;return(i&&(!j||document.documentMode<9))}()),e=(a.indexOf("android")!==-1),f=/(ipad|iphone|ipod)/.test(a),c=(a.indexOf("opera mini")!==-1),h=1,d={"a:":"link","button:button":"button","button:submit":"button","input:button":"button","input:checkbox":"checkBox","input:color":"colorPicker","input:date":"datePicker","input:datetime":"datetimePicker","input:datetime-local":"datetime-local","input:email":"emailInput","input:file":"fileInput","input:image":"button","input:month":"month","input:number":"numberPicker","input:password":"textBox","input:radio":"radioButton","input:range":"slider","input:reset":"button","input:search":"searchBox","input:submit":"button","input:tel":"tel","input:text":"textBox","input:time":"timePicker","input:url":"urlBox","input:week":"week","select:":"selectList","select:select-one":"selectList","textarea:":"textBox","textarea:textarea":"textBox"},g={isIE:i,isLegacyIE:b,isAndroid:e,isLandscapeZeroDegrees:false,isiOS:f,isOperaMini:c,isUndefOrNull:function(j){return typeof j==="undefined"||j===null},isArray:function(j){return!!(j&&Object.prototype.toString.call(j)==="[object Array]")},getSerialNumber:function(){var j;j=h;h+=1;return j},getRandomString:function(o,n){var m,l,j="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",k="";if(!o){return k}
if(typeof n!=="string"){n=j}
for(m=0,l=n.length;m<o;m+=1){k+=n.charAt(Math.floor(Math.random()*l))}
return k},getValue:function(o,n,k){var m,j,l;k=typeof k==="undefined"?null:k;if(!o||typeof o!=="object"||typeof n!=="string"){return k}
l=n.split(".");for(m=0,j=l.length;m<j;m+=1){if(this.isUndefOrNull(o)||typeof o[l[m]]==="undefined"){return k}
o=o[l[m]]}
return o},indexOf:function(m,l){var k,j;if(m&&m.indexOf){return m.indexOf(l)}
if(m&&m instanceof Array){for(k=0,j=m.length;k<j;k+=1){if(m[k]===l){return k}}}
return-1},forEach:function(n,m,l){var k,j;if(!n||!n.length||!m||!m.call){return}
for(k=0,j=n.length;k<j;k+=1){m.call(l,n[k],k,n)}},some:function(n,m){var k,j,l=false;for(k=0,j=n.length;k<j;k+=1){l=m(n[k],k,n);if(l){return l}}
return l},convertToArray:function(l){var m=0,k=l.length,j=[];while(m<k){j.push(l[m]);m+=1}
return j},mixin:function(n){var m,l,k,j;for(k=1,j=arguments.length;k<j;k+=1){l=arguments[k];for(m in l){if(Object.prototype.hasOwnProperty.call(l,m)){n[m]=l[m]}}}
return n},extend:function(j,k,l){var m="";for(m in l){if(Object.prototype.hasOwnProperty.call(l,m)){if(j&&Object.prototype.toString.call(l[m])==="[object Object]"){if(typeof k[m]==="undefined"){k[m]={}}
g.extend(j,k[m],l[m])}else{k[m]=l[m]}}}
return k},clone:function(k){var l,j;if(null===k||"object"!==typeof k){return k}
if(k instanceof Object){l=(Object.prototype.toString.call(k)==="[object Array]")?[]:{};for(j in k){if(Object.prototype.hasOwnProperty.call(k,j)){l[j]=g.clone(k[j])}}
return l}},parseVersion:function(l){var m,j,k=[];if(!l||!l.length){return k}
k=l.split(".");for(m=0,j=k.length;m<j;m+=1){k[m]=/^[0-9]+$/.test(k[m])?parseInt(k[m],10):k[m]}
return k},isEqual:function(l,k){var m,j;if(l===k){return true}
if(typeof l!==typeof k){return false}
if(l instanceof Object){if(Object.prototype.toString.call(l)==="[object Array]"){if(l.length!==k.length){return false}
for(m=0,j=l.length;m<j;m+=1){if(!this.isEqual(l[m],k[m])){return false}}
return true}}
return false},createObject:(function(){var j=null,k=null;if(typeof Object.create==="function"){j=Object.create}else{k=function(){};j=function(l){if(typeof l!=="object"&&typeof l!=="function"){throw new TypeError("Object prototype need to be an object!")}
k.prototype=l;return new k()}}
return j}()),access:function(o,m){var n=m||window,k,l,j;if(typeof o!=="string"||(typeof n!=="object"&&n!==null)){return}
k=o.split(".");for(l=0,j=k.length;l<j;l+=1){if(l===0&&k[l]==="window"){continue}
if(!Object.prototype.hasOwnProperty.call(n,k[l])){return}
n=n[k[l]];if(l<(j-1)&&!(n instanceof Object)){return}}
return n},isNumeric:function(j){var k=false;if(g.isUndefOrNull(j)||j===""){return k}
k=!isNaN(j*2);return k},isUpperCase:function(j){return j===j.toUpperCase()&&j!==j.toLowerCase()},isLowerCase:function(j){return j===j.toLowerCase()&&j!==j.toUpperCase()},extractResponseHeaders:function(l){var n={},k,j,m=null;if(!l||!l.length){l=[]}else{l=l.split("\n")}
for(k=0,j=l.length;k<j;k+=1){m=l[k].split(": ");if(m.length===2){n[m[0]]=m[1]}}
return n},getDocument:function(j){if(j&&j.nodeType!==9){return(!g.isUndefOrNull(j.ownerDocument))?(j.ownerDocument):(j.document)}
return j},getWindow:function(k){try{if(k.self!==k){var j=g.getDocument(k);return(!g.isUndefOrNull(j.defaultView))?(j.defaultView):(j.parentWindow)}}catch(l){k=null}
return k},getOriginAndPath:function(j){var l={},k;j=j||window.location;if(j.origin){l.origin=j.origin}else{l.origin=(j.protocol||"")+"//"+(j.host||"")}
l.path=(j.pathname||"").split(";",1)[0];if(l.origin.indexOf("file://")>-1){k=l.path.match(/(.*)(\/.*app.*)/);if(k!==null){l.path=k[2]}}
return l},getIFrameWindow:function(l){var j=null;if(!l){return j}
try{j=l.contentWindow||(l.contentDocument?l.contentDocument.parentWindow:null)}catch(k){}
return j},getTagName:function(k){var j="";if(g.isUndefOrNull(k)){return j}
if(k===document||k.nodeType===9){j="document"}else{if(k===window||k===window.window){j="window"}else{if(typeof k==="string"){j=k.toLowerCase()}else{if(k.tagName){j=k.tagName.toLowerCase()}else{if(k.nodeName){j=k.nodeName.toLowerCase()}else{j=""}}}}}
return j},getTlType:function(l){var j,k,m="";if(g.isUndefOrNull(l)||!l.type){return m}
j=l.type.toLowerCase();k=j+":";if(l.subType){k+=l.subType.toLowerCase()}
m=d[k]||j;return m},isIFrameDescendant:function(k){var j=g.getWindow(k);return(j?(j!=TLT._getLocalTop()):false)},getOrientationMode:function(j){var k="INVALID";if(typeof j!=="number"){return k}
switch(j){case 0:case 180:case 360:k="PORTRAIT";break;case 90:case-90:case 270:k="LANDSCAPE";break;default:k="UNKNOWN";break}
return k},clog:(function(j){return function(){}}(window)),trim:function(j){if(!j||!j.toString){return j}
return j.toString().replace(/^\s+|\s+$/g,"")},ltrim:function(j){if(!j||!j.toString){return j}
return j.toString().replace(/^\s+/,"")},rtrim:function(j){if(!j||!j.toString){return j}
return j.toString().replace(/\s+$/,"")},setCookie:function(r,j,q,t,m){var o,p,n,l,k="",s;if(!r){return}
r=encodeURIComponent(r);j=encodeURIComponent(j);n=(m||location.hostname).split(".");s=";path="+(t||"/");if(typeof q==="number"){if(this.isIE){l=new Date();l.setTime(l.getTime()+(q*1000));k=";expires="+l.toUTCString()}else{k=";max-age="+q}}
for(p=n.length,o=(p===1?1:2);o<=p;o+=1){document.cookie=r+"="+j+";domain="+n.slice(-o).join(".")+s+k;if(this.getCookieValue(r)===j){break}
if(p===1){document.cookie=r+"="+j+s+k}}},getCookieValue:function(p,r){var m,n,l,q,k=null,j;try{r=r||document.cookie;if(!p||!p.toString){return null}
p+="=";j=p.length;q=r.split(";");for(m=0,n=q.length;m<n;m+=1){l=q[m];l=g.ltrim(l);if(l.indexOf(p)===0){k=l.substring(j,l.length);break}}}catch(o){k=null}
return k},getQueryStringValue:function(o,r,k){var n,m,s,l=null,p;try{k=k||window.location.search;s=k.length;if(!o||!o.toString||!s){return null}
r=r||"&";k=r+k.substring(1);o=r+o+"=";n=k.indexOf(o);if(n!==-1){p=n+o.length;m=k.indexOf(r,p);if(m===-1){m=s}
l=decodeURIComponent(k.substring(p,m))}}catch(q){}
return l},addEventListener:(function(){if(window.addEventListener){return function(k,j,l){k.addEventListener(j,l,false)}}
return function(k,j,l){k.attachEvent("on"+j,l)}}()),matchTarget:function(u,q){var o,m,n,t=-1,s,k,l,p,r,v=document;if(!u||!q){return t}
if(!this.browserService||!this.browserBaseService){this.browserService=TLT.getService("browser");this.browserBaseService=TLT.getService("browserBase")}
if(q.idType===-2){n=this.browserBaseService.getNodeFromID(q.id,q.idType);v=this.getDocument(n)}
for(o=0,p=u.length;o<p&&t===-1;o+=1){r=u[o];if(typeof r==="string"){s=this.browserService.queryAll(r,v);for(m=0,k=s?s.length:0;m<k;m+=1){if(s[m]){l=this.browserBaseService.ElementData.prototype.examineID(s[m]);if(l.idType===q.idType&&l.id===q.id){t=o;break}}}}else{if(r&&r.id&&r.idType&&q.idType&&q.idType.toString()===r.idType.toString()){switch(typeof r.id){case"string":if(r.id===q.id){t=o}
break;case"object":if(!r.cRegex){r.cRegex=new RegExp(r.id.regex,r.id.flags)}
r.cRegex.lastIndex=0;if(r.cRegex.test(q.id)){t=o}
break}}}}
return t},WeakMap:(function(){function j(n,m){var l,k;n=n||[];for(l=0,k=n.length;l<k;l+=1){if(n[l][0]===m){return l}}
return-1}
return function(){var k=[];this.set=function(m,n){var l=j(k,m);k[l>-1?l:k.length]=[m,n]};this.get=function(m){var l=k[j(k,m)];return(l?l[1]:undefined)};this.clear=function(){k=[]};this.has=function(l){return(j(k,l)>=0)};this.remove=function(m){var l=j(k,m);if(l>=0){k.splice(l,1)}};this["delete"]=this.remove}}())};if(typeof TLT==="undefined"||!TLT){window.TLT={}}
TLT.utils=g}());(function(){TLT.EventTarget=function(){this._handlers={}};TLT.EventTarget.prototype={constructor:TLT.EventTarget,publish:function(c,f){var d=0,a=0,b=this._handlers[c],e={type:c,data:f};if(typeof b!=="undefined"){for(a=b.length;d<a;d+=1){b[d](e)}}},subscribe:function(a,b){if(!this._handlers.hasOwnProperty(a)){this._handlers[a]=[]}
this._handlers[a].push(b)},unsubscribe:function(c,e){var d=0,a=0,b=this._handlers[c];if(b){for(a=b.length;d<a;d+=1){if(b[d]===e){b.splice(d,1);return}}}}}}());TLT.ModuleContext=(function(){var a=["broadcast","getConfig:getModuleConfig","listen","post","getXPathFromNode","performDOMCapture","performFormCompletion","isInitialized","getStartTime"];return function(f,d){var h={},g=0,b=a.length,j=null,e=null,c=null;for(g=0;g<b;g+=1){j=a[g].split(":");if(j.length>1){c=j[0];e=j[1]}else{c=j[0];e=j[0]}
h[c]=(function(i){return function(){var k=d.utils.convertToArray(arguments);k.unshift(f);return d[i].apply(d,k)}}(e))}
h.utils=d.utils;return h}}());TLT.addService("config",function(a){function d(f,e){a.utils.extend(true,f,e);c.publish("configupdated",c.getConfig())}
var b={core:{},modules:{},services:{}},c=a.utils.extend(false,a.utils.createObject(new TLT.EventTarget()),{getConfig:function(){return b},updateConfig:function(e){d(b,e)},getCoreConfig:function(){return b.core},updateCoreConfig:function(e){d(b.core,e)},getServiceConfig:function(e){return b.services[e]||{}},updateServiceConfig:function(f,e){if(typeof b.services[f]==="undefined"){b.services[f]={}}
d(b.services[f],e)},getModuleConfig:function(e){return b.modules[e]||{}},updateModuleConfig:function(f,e){if(typeof b.modules[f]==="undefined"){b.modules[f]={}}
d(b.modules[f],e)},destroy:function(){b={core:{},modules:{},services:{}}}});return c});TLT.addService("queue",function(w){var B=w.utils,I=null,f={},o=600000,g=w.getService("ajax"),n=w.getService("browser"),p=w.getService("encoder"),k=w.getService("serializer"),F=w.getService("config"),i=w.getService("message"),s=null,H={},c=true,v={5:{limit:300,count:0},6:{limit:400,count:0}},m=[],r=false,l=(function(){var N={};function Q(R){return typeof N[R]!=="undefined"}
function J(R,S){if(!Q(R)){N[R]={lastOffset:0,data:[],queueId:R,url:S.url,eventThreshold:S.eventThreshold,sizeThreshold:S.sizeThreshold||0,size:-1,serializer:S.serializer,encoder:S.encoder,crossDomainEnabled:!!S.crossDomainEnabled,crossDomainIFrame:S.crossDomainIFrame}}
return N[R]}
function L(R){if(Q(R)){delete N[R]}}
function O(R){if(Q(R)){return N[R]}
return null}
function M(S){var R=O(S);if(R!==null){R.data=[]}}
function P(R){var S=null;if(Q(R)){S=O(R).data;M(R)}
return S}
function K(T,V){var R=null,U=null,X=window.tlBridge,S=window.iOSJSONShuttle;try{U=k.serialize(V)}catch(W){U="Serialization failed: "+(W.name?W.name+" - ":"")+W.message;V={error:U}}
if((typeof X!=="undefined")&&(typeof X.addMessage==="function")){X.addMessage(U)}else{if((typeof S!=="undefined")&&(typeof S==="function")){S(U)}else{if(Q(T)){R=O(T);R.data.push(V);R.data=w.redirectQueue(R.data);if(R.sizeThreshold){U=k.serialize(R.data);R.size=U.length}
return R.data.length}}}
return 0}
return{exists:Q,add:J,remove:L,reset:function(){N={}},get:O,clear:M,flush:P,push:K}}());function b(J){if(J&&J.id){B.extend(true,m[J.id-1],{xhrRspEnd:i.createMessage({type:0}).offset,success:J.success,statusCode:J.statusCode,statusText:J.statusText})}}
function q(){return window.location.pathname}
function a(L,P,M,O){var J=l.get(L),N={name:P,value:M},K=null;if(typeof P!=="string"||typeof M!=="string"){return}
if(!J.headers){J.headers={once:[],always:[]}}
K=!!O?J.headers.always:J.headers.once;K.push(N)}
function G(L,O){var N=0,K=0,J=l.get(L),P=J.headers,M=null;O=O||{};function Q(S,U){var T=0,R=0,V=null;for(T=0,R=S.length;T<R;T+=1){V=S[T];U[V.name]=V.value}}
if(P){M=[P.always,P.once];for(N=0,K=M.length;N<K;N+=1){Q(M[N],O)}}
return O}
function y(K){var J=null,L=null;if(!l.exists(K)){throw new Error("Queue: "+K+" does not exist!")}
J=l.get(K);L=J?J.headers:null;if(L){L.once=[]}}
function E(){var K=0,J,M,L=w.provideRequestHeaders();if(L&&L.length){for(K=0,J=L.length;K<J;K+=1){M=L[K];a("DEFAULT",M.name,M.value,M.recurring)}}
return K}
function h(N){var M,J,L=[],K="";if(!N||!N.length){return K}
for(M=0,J=N.length;M<J;M+=1){L[N[M].type]=true}
for(M=0,J=L.length;M<J;M+=1){if(L[M]){if(K){K+=","}
K+=M}}
return K}
function A(L,W){var R=l.get(L),Q=R.url?l.flush(L):null,S=Q?Q.length:0,M={"Content-Type":"application/json","X-PageId":w.getPageId(),"X-Tealeaf":"device (UIC) Lib/5.5.0.1814","X-TealeafType":"GUI","X-TeaLeaf-Page-Url":q(),"X-Tealeaf-SyncXHR":(!!W).toString()},U=null,O=i.createMessage({type:0}).offset,X=R.serializer||"json",K=R.encoder,N,P,J,V=null;if(!S||!R){return}
J=O-Q[S-1].offset;if(J>(o+60000)){return}
R.lastOffset=Q[S-1].offset;M["X-Tealeaf-MessageTypes"]=h(Q);Q=i.wrapMessages(Q);if(I.xhrLogging){U=Q.serialNumber;m[U-1]={serialNumber:U,xhrReqStart:O};Q.log={xhr:m}}
if(X){Q=k.serialize(Q,X)}
if(K){P=p.encode(Q,K);if(P){if(P.data&&!P.error){Q=P.data;M["Content-Encoding"]=P.encoding}else{Q=P.error}}}
E();G(L,M);if(R.crossDomainEnabled){V=B.getIFrameWindow(R.crossDomainIFrame);if(!V){return}
N={request:{id:U,url:R.url,async:!W,headers:M,data:Q}};if(!B.isIE&&typeof window.postMessage==="function"){V.postMessage(N,R.crossDomainIFrame.src)}else{try{V.sendMessage(N)}catch(T){return}}}else{g.sendRequest({id:U,oncomplete:b,url:R.url,async:!W,headers:M,data:Q})}
y(L)}
function e(M){var J=null,L=I.queues,K=0;for(K=0;K<L.length;K+=1){J=L[K];A(J.qid,M)}
return true}
function j(L,N){var K,O=i.createMessage(N),J=l.get(L),M,P;K=J.data.length;if(K){P=O.offset-J.data[K-1].offset;if(P>o){l.flush(L);w.destroy();return}}
K=l.push(L,O);M=J.size;if((K>=J.eventThreshold||M>=J.sizeThreshold)&&c&&w.getState()!=="unloading"){A(L)}}
function t(L){var J,K=false;if(!L||!L.type){return true}
J=v[L.type];if(J){J.count+=1;if(J.count>J.limit){K=true;if(J.count===J.limit+1){j("DEFAULT",{type:16,dataLimit:{messageType:L.type,maxCount:J.limit}})}}}
return K}
function d(L){var K=null,O=I.queues,N="",M=0,J=0;for(M=0;M<O.length;M+=1){K=O[M];if(K&&K.modules){for(J=0;J<K.modules.length;J+=1){N=K.modules[J];if(N===L){return K.qid}}}}
return s.qid}
function C(L,J){H[L]=window.setTimeout(function K(){A(L);H[L]=window.setTimeout(K,J)},J)}
function z(){var J=0;for(J in H){if(H.hasOwnProperty(J)){window.clearTimeout(H[J]);delete H[J]}}
H={}}
function x(J){}
function u(J){I=J;f=w.getCoreConfig();o=B.getValue(f,"inactivityTimeout",600000);B.forEach(I.queues,function(K,L){var M=null;if(K.qid==="DEFAULT"){s=K}
if(K.crossDomainEnabled){M=n.query(K.crossDomainFrameSelector);if(!M){w.fail("Cross domain iframe not found")}}
l.add(K.qid,{url:K.endpoint,eventThreshold:K.maxEvents,sizeThreshold:K.maxSize||0,serializer:K.serializer,encoder:K.encoder,timerInterval:K.timerInterval||0,crossDomainEnabled:K.crossDomainEnabled||false,crossDomainIFrame:M});if(typeof K.timerInterval!=="undefined"&&K.timerInterval>0){C(K.qid,K.timerInterval)}});F.subscribe("configupdated",x);r=true}
function D(){if(c){e(!I.asyncReqOnUnload)}
F.unsubscribe("configupdated",x);z();l.reset();I=null;s=null;r=false}
return{init:function(){if(!r){u(F.getServiceConfig("queue")||{})}else{}},destroy:function(){D()},_getQueue:function(J){return l.get(J).data},setAutoFlush:function(J){if(J===true){c=true}else{c=false}},flush:function(J){J=J||s.qid;if(!l.exists(J)){throw new Error("Queue: "+J+" does not exist!")}
A(J)},flushAll:function(J){return e(!!J)},post:function(K,L,J){if(!w.isInitialized()){return}
J=J||d(K);if(!l.exists(J)){return}
if(!t(L)){j(J,L)}}}});TLT.addService("browserBase",function(r){var h,L=r.utils,i={optgroup:true,option:true,nobr:true},q={},e,n=null,A,w,g,u,F=false;function s(){e=r.getService("config");n=r.getService("serializer");A=e?e.getServiceConfig("browser"):{};w=A.hasOwnProperty("blacklist")?A.blacklist:[];g=A.hasOwnProperty("customid")?A.customid:[]}
function b(){s();if(e){e.subscribe("configupdated",s)}
F=true}
function G(){if(e){e.unsubscribe("configupdated",s)}
F=false}
function v(P){var N,M,O;if(!P||!P.id||typeof P.id!=="string"){return false}
for(N=0,M=w.length;N<M;N+=1){if(typeof w[N]==="string"){if(P.id===w[N]){return false}}else{if(typeof w[N]==="object"){if(!w[N].cRegex){w[N].cRegex=new RegExp(w[N].regex,w[N].flags)}
w[N].cRegex.lastIndex=0;if(w[N].cRegex.test(P.id)){return false}}}}
return true}
function p(O,P){var M={type:null,subType:null},N;if(!O){return M}
N=O.type;switch(N){case"focusin":N="focus";break;case"focusout":N="blur";break;default:break}
M.type=N;return M}
function y(N){var M={type:null,subType:null};if(!N){return M}
M.type=L.getTagName(N);M.subType=N.type||null;return M}
function c(M,O,N){var S={HTML_ID:"-1",XPATH_ID:"-2",ATTRIBUTE_ID:"-3"},R,P=null,Q;if(!M||!O){return P}
R=N||window.document;O=O.toString();if(O===S.HTML_ID){if(R.getElementById){P=R.getElementById(M)}else{if(R.querySelector){P=R.querySelector("#"+M)}}}else{if(O===S.ATTRIBUTE_ID){Q=M.split("=");if(R.querySelector){P=R.querySelector("["+Q[0]+'="'+Q[1]+'"]')}}else{if(O===S.XPATH_ID){P=q.xpath(M,R)}}}
return P}
u=(function(){var M={nobr:true,p:true};function N(S,Q){var V,T,U=false,Y=null,O=null,Z=null,X=[],W=true,R=r._getLocalTop(),P="";while(W){W=false;if(!L.isUndefOrNull(S)){P=L.getTagName(S);if(!L.isUndefOrNull(P)){if(M.hasOwnProperty(P)){S=S.parentNode;P=L.getTagName(S)}}
for(U=v(S);S!==document&&(!U||Q);U=v(S)){Z=S.parentNode;if(!Z){O=r.utils.getWindow(S);if(!O){return X}
Z=(O!==R)?O.frameElement:document}
Y=Z.firstChild;if(typeof Y==="undefined"){return X}
for(T=0;Y;Y=Y.nextSibling){if(Y.nodeType===1&&L.getTagName(Y)===P){if(Y===S){X[X.length]=[P,T];break}
T+=1}}
S=Z;P=L.getTagName(S)}
if(U&&!Q){X[X.length]=[S.id];if(r.utils.isIFrameDescendant(S)){W=true;S=r.utils.getWindow(S).frameElement}}}}
return X}
return function(R,P){var O=N(R,!!P),S=[],Q=O.length;if(Q<1){return"null"}
while(Q){Q-=1;if(O[Q].length>1){S[S.length]='["'+O[Q][0]+'",'+O[Q][1]+"]"}else{S[S.length]="["+n.serialize(O[Q][0],"json")+"]"}}
return("["+S.join(",")+"]")}}());function K(N){var O={left:-1,top:-1},M;N=N||document;M=N.documentElement||N.body.parentNode||N.body;O.left=Math.round((typeof window.pageXOffset==="number")?window.pageXOffset:M.scrollLeft);O.top=Math.round((typeof window.pageYOffset==="number")?window.pageYOffset:M.scrollTop);return O}
function J(M){return M&&typeof M.originalEvent!=="undefined"&&typeof M.isDefaultPrevented!=="undefined"&&!M.isSimulated}
function k(M){if(!M){return null}
if(M.type&&M.type.indexOf("touch")===0){if(J(M)){M=M.originalEvent}
if(M.type==="touchstart"){M=M.touches[M.touches.length-1]}else{if(M.type==="touchend"){M=M.changedTouches[0]}}}
return M}
function t(P){var S=P||window.event,R=document.documentElement,M=document.body,Q=false,O=null,N=0;if(J(S)){S=S.originalEvent}
if(typeof P==="undefined"||typeof S.target==="undefined"){S.target=S.srcElement||window.window;S.timeStamp=Number(new Date());if(S.pageX===null||typeof S.pageX==="undefined"){S.pageX=S.clientX+((R&&R.scrollLeft)||(M&&M.scrollLeft)||0)-((R&&R.clientLeft)||(M&&M.clientLeft)||0);S.pageY=S.clientY+((R&&R.scrollTop)||(M&&M.scrollTop)||0)-((R&&R.clientTop)||(M&&M.clientTop)||0)}
S.preventDefault=function(){this.returnValue=false};S.stopPropagation=function(){this.cancelBubble=true}}
if(window.chrome&&S.path!==undefined&&S.type==="click"){if(S.path.length===undefined){return S}
for(N=0;N<S.path.length;N++){if(L.getTagName(S.path[N])==="button"){Q=true;O=S.path[N];N=S.path.length}}
if(Q){return{originalEvent:S,target:O,srcElement:O,type:S.type,pageX:document.body.scrollLeft+O.getBoundingClientRect().left,pageY:document.body.scrollTop+O.getBoundingClientRect().top}}}
return S}
function x(N){var M=null;if(!N){return null}
if(N.srcElement){M=N.srcElement}else{M=N.target;if(!M){M=N.explicitOriginalTarget}
if(!M){M=N.originalTarget}}
if(!M&&N.type.indexOf("touch")===0){M=k(N).target}
while(M&&i[L.getTagName(M)]){M=M.parentNode}
if(!M&&N.srcElement===null){M=window.window}
return M}
function I(N){var Q=0,P=0,O=document.documentElement,M=document.body;N=k(N);if(N){if(N.pageX||N.pageY){Q=N.pageX;P=N.pageY}else{if(N.clientX||N.clientY){Q=N.clientX+(O?O.scrollLeft:(M?M.scrollLeft:0))-(O?O.clientLeft:(M?M.clientLeft:0));P=N.clientY+(O?O.scrollTop:(M?M.scrollTop:0))-(O?O.clientTop:(M?M.clientTop:0))}}}
return{x:Q,y:P}}
q.xpath=function(U,W){var S=null,N,T=null,M,Q,P,O,R,V;if(!U){return null}
S=n.parse(U);W=W||document;N=W;if(!S){return null}
for(Q=0,R=S.length;Q<R&&N;Q+=1){T=S[Q];if(T.length===1){if(W.getElementById){N=W.getElementById(T[0])}else{if(W.querySelector){N=W.querySelector("#"+T[0])}else{N=null}}}else{for(P=0,O=-1,V=N.childNodes.length;P<V;P+=1){if(N.childNodes[P].nodeType===1&&L.getTagName(N.childNodes[P])===T[0].toLowerCase()){O+=1;if(O===T[1]){N=N.childNodes[P];break}}}
if(O===-1){return null}}
M=L.getTagName(N);if(M==="frame"||M==="iframe"){N=L.getIFrameWindow(N).document;W=N}}
return(N===W||!N)?null:N};function m(M,N){this.x=M||0;this.y=N||0}
function a(N,M){this.width=Math.round(N||0);this.height=Math.round(M||0)}
function d(N,O){var Q,M,P;O=x(N);Q=this.examineID(O);M=y(O);P=this.examinePosition(N,O);this.element=O;this.id=Q.id;this.idType=Q.idType;this.type=M.type;this.subType=M.subType;this.state=this.examineState(O);this.position=new m(P.x,P.y);this.size=new a(P.width,P.height);this.xPath=Q.xPath;this.name=Q.name}
d.HTML_ID=-1;d.XPATH_ID=-2;d.ATTRIBUTE_ID=-3;d.prototype.examineID=function(S){var O,U,V,M,N,Q=g.length,P;try{V=u(S)}catch(R){}
N=S.name;try{if(!r.utils.getWindow(S)||!r.utils.isIFrameDescendant(S)){if(v(S)){O=S.id;U=d.HTML_ID}else{if(g.length&&S.attributes){while(Q){Q-=1;P=S.attributes[g[Q]];if(typeof P!=="undefined"){O=g[Q]+"="+(P.value||P);U=d.ATTRIBUTE_ID}}}}}}catch(T){}
if(!O){O=V;U=d.XPATH_ID}
return{id:O,idType:U,xPath:V,name:N}};d.prototype.examineState=function(S){var M={a:["innerText","href"],input:{range:["maxValue:max","value"],checkbox:["value","checked"],radio:["value","checked"],image:["src"]},select:["value"],button:["value","innerText"],textarea:["value"]},N=L.getTagName(S),T=M[N]||null,O=null,V=null,P=0,R=0,Q=null,U="";if(T!==null){if(Object.prototype.toString.call(T)==="[object Object]"){T=T[S.type]||["value"]}
V={};for(U in T){if(T.hasOwnProperty(U)){if(T[U].indexOf(":")!==-1){Q=T[U].split(":");V[Q[0]]=S[Q[1]]}else{if(T[U]==="innerText"){V[T[U]]=r.utils.trim(S.innerText||S.textContent)}else{V[T[U]]=S[T[U]]}}}}}
if(N==="select"&&S.options&&!isNaN(S.selectedIndex)){V.index=S.selectedIndex;if(V.index>=0&&V.index<S.options.length){O=S.options[S.selectedIndex];V.value=O.getAttribute("value")||O.getAttribute("label")||O.text||O.innerText;V.text=O.text||O.innerText}}
return V};function E(){var N=1,O,Q,M;if(document.body.getBoundingClientRect){try{O=document.body.getBoundingClientRect()}catch(P){r.utils.clog("getBoundingClientRect failed.",P);return N}
Q=O.right-O.left;M=document.body.offsetWidth;N=Math.round((Q/M)*100)/100}
return N}
function o(N){var P,M,O,R;if(!N||!N.getBoundingClientRect){return{x:0,y:0,width:0,height:0}}
try{P=N.getBoundingClientRect();R=K(document)}catch(Q){r.utils.clog("getBoundingClientRect failed.",Q);return{x:0,y:0,width:0,height:0}}
M={x:P.left+R.left,y:P.top+R.top,width:P.right-P.left,height:P.bottom-P.top};if(r.utils.isIE){M.x-=document.documentElement.clientLeft;M.y-=document.documentElement.clientTop;O=E();if(O!==1){M.x=Math.round(M.x/O);M.y=Math.round(M.y/O);M.width=Math.round(M.width/O);M.height=Math.round(M.height/O)}}
return M}
d.prototype.examinePosition=function(N,O){var P=I(N),M=o(O);M.x=(P.x||P.y)?Math.round(Math.abs(P.x-M.x)):M.width/2;M.y=(P.x||P.y)?Math.round(Math.abs(P.y-M.y)):M.height/2;return M};function H(){var M=(typeof window.orientation==="number")?window.orientation:0;if(r.utils.isLandscapeZeroDegrees){if(Math.abs(M)===180||Math.abs(M)===0){M=90}else{if(Math.abs(M)===90){M=0}}}
return M}
function B(S){var P,M,R,Q,O,N;if(S){return S}
R=r.getCoreConfig()||{};O=R.modules;S={};for(N in O){if(O.hasOwnProperty(N)&&O[N].events){for(P=0,M=O[N].events.length;P<M;P+=1){Q=O[N].events[P];if(Q.state){S[Q.name]=Q.state}}}}
return S}
function j(M){var N;h=B(h);if(h[M.type]){N=L.getValue(M,h[M.type],null)}
return N}
function l(N){var P,M,O;this.data=N.data||null;this.delegateTarget=N.delegateTarget||null;if(N.gesture||(N.originalEvent&&N.originalEvent.gesture)){this.gesture=N.gesture||N.originalEvent.gesture;this.gesture.idType=(new d(this.gesture,this.gesture.target)).idType}
N=t(N);P=I(N);this.custom=false;this.nativeEvent=this.custom===true?null:N;this.position=new m(P.x,P.y);this.target=new d(N,N.target);this.orientation=H();O=j(N);if(O){this.target.state=O}
this.timestamp=(new Date()).getTime();M=p(N,this.target);this.type=M.type;this.subType=M.subType}
function D(M){if(r.isInitialized()){r._publishEvent(new l(M))}else{}}
function f(Q,O){var T,R,S=false,W=null,M=null,X=null,V=[],U=true,P=r._getLocalTop(),N="";while(U){U=false;if(L.isUndefOrNull(Q)){break}
N=L.getTagName(Q);if(!L.isUndefOrNull(N)){if(f.specialChildNodes.hasOwnProperty(N)){Q=Q.parentNode;U=true;continue}}
for(S=v(Q);Q!==document&&(!S||O);S=v(Q)){X=Q.parentNode;if(!X){M=r.utils.getWindow(Q);if(!M||Q.nodeType!==9){V.push([N,0]);break}
X=(M!==P)?M.frameElement:document}
W=X.firstChild;if(typeof W==="undefined"){break}
for(R=0;W;W=W.nextSibling){if(W.nodeType===1&&L.getTagName(W)===N){if(W===Q){V[V.length]=[N,R];break}
R+=1}}
Q=X;N=L.getTagName(Q)}
if(S&&!O){V[V.length]=[Q.id];if(r.utils.isIFrameDescendant(Q)){U=true;Q=r.utils.getWindow(Q).frameElement}}}
V.reverse();return V}
f.specialChildNodes={nobr:true,p:true};function C(M){var N;if(!M||!M.length){return null}
N=n.serialize(M,"json");return N}
function z(Q){var P="",N=[],M="",O=[];if(!(this instanceof z)){return null}
if(typeof Q!=="object"){this.fullXpath="";this.xpath="";this.fullXpathList=[];this.xpathList=[];return}
O=f(Q,false);if(O.length&&O[0].length===1){N=f(Q,true)}else{N=L.clone(O)}
this.xpath=C(O);this.xpathList=O;this.fullXpath=C(N);this.fullXpathList=N;this.applyPrefix=function(T){var R,S;if(!(T instanceof z)||!T.fullXpathList.length){return}
S=T.fullXpathList[T.fullXpathList.length-1];R=this.fullXpathList.shift();if(L.isEqual(R[0],S[0])){this.fullXpathList=T.fullXpathList.concat(this.fullXpathList)}else{this.fullXpathList.unshift(R);return}
this.fullXpath=C(this.fullXpathList);R=this.xpathList.shift();if(R.length===1){this.xpathList.unshift(R);return}
this.xpathList=T.xpathList.concat(this.xpathList);this.xpath=C(this.xpathList)};this.compare=function(R){if(!(R instanceof z)){return 0}
return(this.fullXpathList.length-R.fullXpathList.length)};this.isSame=function(R){var S=false;if(!(R instanceof z)){return S}
if(this.compare(R)===0){S=(this.fullXpath===R.fullXpath)}
return S};this.containedIn=function(S){var T,R;if(!(S instanceof z)){return false}
if(S.fullXpathList.length>this.fullXpathList.length){return false}
for(T=0,R=S.fullXpathList.length;T<R;T+=1){if(!L.isEqual(S.fullXpathList[T],this.fullXpathList[T])){return false}}
return true}}
z.prototype=(function(){return{}}());return{init:function(){if(!F){b()}else{}},destroy:function(){G()},WebEvent:l,ElementData:d,Xpath:z,processDOMEvent:D,getNormalizedOrientation:H,getXPathFromNode:function(N,O,M,P){return u(O,M,P)},getNodeFromID:c,queryDom:q}});TLT.addService("browser",function(d){var l=d.utils,h=d.getService("config"),f=d.getService("browserBase"),m=d.getService("ajax"),g=null,c=null,j=h?h.getServiceConfig("browser"):{},b=l.getValue(j,"useCapture",true),k=false,e={NO_QUERY_SELECTOR:"NOQUERYSELECTOR"},o=function(p){return function(r){var q=new f.WebEvent(r);if(r.type==="resize"||r.type==="hashchange"){setTimeout(function(){p(q)},5)}else{p(q)}}},a={list2Array:function(r){var q=r.length,p=[],s;if(typeof r.length==="undefined"){return[r]}
for(s=0;s<q;s+=1){p[s]=r[s]}
return p},find:function(r,q,p){p=p||"css";return this.list2Array(this[p](r,q))},css:function(q,t){var u=this,x=null,v=document.getElementsByTagName("body")[0],w=j.jQueryObject?l.access(j.jQueryObject):window.jQuery,s=j.sizzleObject?l.access(j.sizzleObject):window.Sizzle;if(typeof document.querySelectorAll==="undefined"){u.css=function(z,y){y=y||document;return u.Sizzle(z,y)};if(typeof u.Sizzle==="undefined"){try{if(v===s("html > body",document)[0]){u.Sizzle=s}}catch(r){try{if(v===w(document).find("html > body").get()[0]){u.Sizzle=function(z,y){return w(y).find(z).get()}}}catch(p){d.fail("Sizzle was not found",e.NO_QUERY_SELECTOR)}}}}else{u.css=function(z,y){y=y||document;return y.querySelectorAll(z)}}
return u.css(q,t)}},n=(function(){var p=new l.WeakMap();return{add:function(q){var r=p.get(q)||[o(q),0];r[1]+=1;p.set(q,r);return r[0]},find:function(q){var r=p.get(q);return r?r[0]:null},remove:function(q){var r=p.get(q);if(r){r[1]-=1;if(r[1]<=0){p.remove(q)}}}}}());function i(){a.xpath=f.queryDom.xpath;if(typeof document.addEventListener==="function"){g=function(r,p,q){r.addEventListener(p,q,b)};c=function(r,p,q){r.removeEventListener(p,q,b)}}else{if(typeof document.attachEvent!=="undefined"){g=function(r,p,q){r.attachEvent("on"+p,q)};c=function(r,p,q){r.detachEvent("on"+p,q)}}else{throw new Error("Unsupported browser")}}
k=true}
return{init:function(){if(!k){i()}else{}},destroy:function(){k=false},getServiceName:function(){return"W3C"},query:function(s,q,p){try{return a.find(s,q,p)[0]||null}catch(r){return[]}},queryAll:function(s,q,p){try{return a.find(s,q,p)}catch(r){return[]}},subscribe:function(p,s,q){var r=n.add(q);g(s,p,r)},unsubscribe:function(p,t,q){var r=n.find(q);if(r){try{c(t,p,r)}catch(s){}
n.remove(q)}}}});TLT.addService("ajax",function(d){var i=d.utils,g,k=false,h=false;function e(n){var m="",l=[];for(m in n){if(n.hasOwnProperty(m)){l.push([m,n[m]])}}
return l}
function f(n){var m="",l="?";for(m in n){if(n.hasOwnProperty(m)){l+=encodeURIComponent(m)+"="+encodeURIComponent(n[m])+"&"}}
return l.slice(0,-1)}
function j(l){var n,o=false,m=f(l.headers);if(typeof l.data==="string"){n=l.data}else{n=l.data?new Uint8Array(l.data):""}
o=navigator.sendBeacon(l.url+m,n);return o}
function a(m){if(typeof m!=="function"){return}
return function l(o){var q,n,p=false;if(!o){return}
q=o.target;if(!q){return m(o)}
n=q.status;if(n>=200&&n<300){p=true}
m({headers:i.extractResponseHeaders(q.getAllResponseHeaders()),responseText:q.responseText,statusCode:n,statusText:q.statusText,id:q.id,success:p})}}
function c(t){var s=g(),m=[["X-Requested-With","XMLHttpRequest"]],r=0,n=typeof t.async!=="boolean"?true:t.async,p="",q=null,o,l;if(t.headers){m=m.concat(e(t.headers))}
if(t.contentType){m.push(["Content-Type",t.contentType])}
s.open(t.type.toUpperCase(),t.url,n);for(o=0,l=m.length;o<l;o+=1){p=m[o];if(p[0]&&p[1]){s.setRequestHeader(p[0],p[1])}}
if(t.error){t.error=a(t.error);s.addEventListener("error",t.error)}
s.onreadystatechange=q=function(){if(s.readyState===4){s.onreadystatechange=q=function(){};if(t.timeout){window.clearTimeout(r)}
t.oncomplete({id:t.id,headers:i.extractResponseHeaders(s.getAllResponseHeaders()),responseText:(s.responseText||null),statusCode:s.status,statusText:s.statusText,success:(s.status>=200&&s.status<300)});s=null}};s.send(t.data||null);q();if(t.timeout){r=window.setTimeout(function(){if(!s){return}
s.onreadystatechange=function(){};if(s.readyState!==4){s.abort();if(typeof t.error==="function"){t.error({id:t.id,statusCode:s.status,statusText:"timeout",success:false})}}
t.oncomplete({id:t.id,headers:i.extractResponseHeaders(s.getAllResponseHeaders()),responseText:(s.responseText||null),statusCode:s.status,statusText:"timeout",success:false});s=null},t.timeout)}}
function b(){var l=d.getServiceConfig("queue");if(typeof window.XMLHttpRequest!=="undefined"){g=function(){return new XMLHttpRequest()}}else{g=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}
k=!!l.useBeacon&&(typeof navigator.sendBeacon==="function");h=true}
return{init:function(){if(!h){b()}},destroy:function(){h=false},sendRequest:function(l){var n=d.getState()==="unloading",m;l.type=l.type||"POST";if((n||!l.async)&&k){m=j(l);if(!m){c(l)}}else{c(l)}}}});TLT.addService("domCapture",function(x){var h=x.getService("config"),i=x.getService("browserBase"),u,g,e={captureFrames:false,removeScripts:true,removeComments:true},S={childList:true,attributes:true,attributeOldValue:true,characterData:true,subtree:true},a=(typeof window.MutationObserver!=="undefined"),v,E=S,J=[],T=[],t=[],w=0,C=100,c=false,o=false,K=false,F=1,q=function(){},r=function(){},z=function(){},W=x.utils;function D(){T=[];t=[];w=0;c=false}
function O(aa){var Z,Y,X;if(!aa||!aa.length){return}
aa=aa.sort(function(ac,ab){return ac.compare(ab)});for(Z=0;Z<aa.length;Z+=1){X=aa[Z];for(Y=Z+1;Y<aa.length;Y+=0){if(aa[Y].containedIn(X)){aa.splice(Y,1)}else{Y+=1}}}}
function p(Z){var Y,X;if(!Z){return Z}
for(Y=0,X=Z.length;Y<X;Y+=1){delete Z[Y].oldValue}
return Z}
function d(ab,Z){var Y,X,aa=false;if(!ab||!Z){return aa}
for(Y=0,X=ab.length;Y<X;Y+=1){if(ab[Y].name===Z){aa=true;break}}
return aa}
function y(aa,ac){var Z,Y,X,ab;for(Z=0,Y=aa.length,ab=false;Z<Y;Z+=1){X=aa[Z];if(X.name===ac.name){if(X.oldValue===ac.value){aa.splice(Z,1)}else{X.value=ac.value}
ab=true;break}}
if(!ab){aa.push(ac)}
return aa}
function I(aa,Y){var ac,ab,Z,X,ad,ae;aa.removedNodes=Y.removedNodes.length;aa.addedNodes=W.convertToArray(Y.addedNodes);for(ac=0,X=T.length;ac<X;ac+=1){ae=T[ac];if(aa.isSame(ae)){if(aa.removedNodes){for(ab=0;ab<Y.removedNodes.length;ab+=1){Z=ae.addedNodes.indexOf(Y.removedNodes[ab]);if(Z!==-1){ae.addedNodes.splice(Z,1);aa.removedNodes-=1}}}
ae.removedNodes+=aa.removedNodes;ae.addedNodes.concat(aa.addedNodes);if(!ae.removedNodes&&!ae.addedNodes.length){T.splice(ac,1)}
ad=true;break}}
if(!ad){T.push(aa)}}
function P(Y,ac){var aa,Z,X,ad=false,ab,ae;for(aa=0,X=T.length;!ad&&aa<X;aa+=1){ae=T[aa];if(Y.containedIn(ae)){ab=ae.addedNodes;for(Z=0;Z<ab.length;Z+=1){if(ab[Z].contains&&ab[Z].contains(ac)){ad=true;break}}}}
return ad}
function B(Z,Y){var ac,X,ab,aa,ad,ae=null;ab=Y.attributeName;if(ab==="checked"||ab==="selected"){ae=i.ElementData.prototype.examineID(Y.target);if(u.isPrivacyMatched(ae)){return}
ae=null}
if(ab==="value"){ae=i.ElementData.prototype.examineID(Y.target);ae.currState=i.ElementData.prototype.examineState(Y.target)||{};if(ae.currState.value){u.applyPrivacyToTarget(ae)}else{ae=null}}
Z.attributes=[{name:ab,oldValue:Y.oldValue,value:ae?ae.currState.value:Y.target.getAttribute(ab)}];aa=Z.attributes[0];if(aa.oldValue===aa.value){return}
for(ac=0,X=t.length,ad=false;ac<X;ac+=1){ae=t[ac];if(Z.isSame(ae)){ae.attributes=y(ae.attributes,aa);if(!ae.attributes.length){t.splice(ac,1)}else{if(P(Z,Y.target)){t.splice(ac,1)}}
ad=true;break}}
if(!ad&&!P(Z,Y.target)){t.push(Z)}}
function l(aa){var ac,X,ab,Y,Z;if(!aa||!aa.length){return}
w+=aa.length;if(w>=C){if(!c){c=true}
return}
for(ac=0,X=aa.length;ac<X;ac+=1){Y=aa[ac];Z=new i.Xpath(Y.target);if(Z){ab=Z.fullXpathList;if(ab.length&&ab[0][0]==="html"){switch(Y.type){case"characterData":case"childList":I(Z,Y);break;case"attributes":B(Z,Y);break;default:W.clog("Unknown mutation type: "+Y.type);break}}}}}
function s(){var X;X=new window.MutationObserver(function(Y){if(Y){l(Y);W.clog("Processed ["+Y.length+"] mutation records.")}});return X}
function j(Y){var Z,X;h.subscribe("configupdated",z);u=x.getService("message");g=Y;g.options=W.mixin({},e,g.options);a=a&&W.getValue(g,"diffEnabled",true);C=W.getValue(g.options,"maxMutations",100);if(a){E=W.getValue(g,"diffObserverConfig",S);v=s();J.push(window)}
K=true}
function N(){h.unsubscribe("configupdated",z);if(v){v.disconnect()}
K=false}
function m(){var X;X="tlt-"+W.getSerialNumber();return X}
function f(aa,Z){var Y,X;if(!aa||!aa.getElementsByTagName||!Z){return}
X=aa.getElementsByTagName(Z);if(X&&X.length){for(Y=X.length-1;Y>=0;Y-=1){X[Y].parentNode.removeChild(X[Y])}}
return aa}
function H(Z,X){var Y,aa;for(Y=0;Z.hasChildNodes()&&Y<Z.childNodes.length;Y+=1){aa=Z.childNodes[Y];if(aa.nodeType===X){Z.removeChild(aa);Y-=1}else{if(aa.hasChildNodes()){H(aa,X)}}}
return Z}
function R(Z){var Y,X=null;if(!Z||!Z.doctype){return null}
Y=Z.doctype;if(Y){X="<!DOCTYPE "+Y.name+(Y.publicId?' PUBLIC "'+Y.publicId+'"':"")+(!Y.publicId&&Y.systemId?" SYSTEM":"")+(Y.systemId?' "'+Y.systemId+'"':"")+">"}
return X}
function Q(ad,ae){var ac,Z,ab,aa,Y,X;if(!ae){return}
aa=ad.getElementsByTagName("input");Y=ae.getElementsByTagName("input");if(Y){for(ac=0,X=Y.length;ac<X;ac+=1){Z=aa[ac];ab=Y[ac];switch(ab.type){case"checkbox":case"radio":if(W.isIE?Z.checked:ab.checked){ab.setAttribute("checked","checked")}else{ab.removeAttribute("checked")}
break;default:ab.setAttribute("value",ab.value);if(!ab.getAttribute("type")){ab.setAttribute("type","text")}
break}}}}
function k(ad,ae){var aa,X,ac,Y,Z,ab;if(!ad||!ad.getElementsByTagName||!ae||!ae.getElementsByTagName){return}
Y=ad.getElementsByTagName("textarea");ab=ae.getElementsByTagName("textarea");if(Y&&ab){for(aa=0,X=Y.length;aa<X;aa+=1){ac=Y[aa];Z=ab[aa];Z.setAttribute("value",ac.value);Z.value=Z.textContent=ac.value}}}
function L(X,ac){var Y,ae,ad,af,aa,Z,ab;if(!X||!X.getElementsByTagName||!ac||!ac.getElementsByTagName){return}
ae=X.getElementsByTagName("select");af=ac.getElementsByTagName("select");if(ae){for(aa=0,ab=ae.length;aa<ab;aa+=1){Y=ae[aa];ad=af[aa];for(Z=0;Z<Y.options.length;Z+=1){if(Z===Y.selectedIndex||Y.options[Z].selected){ad.options[Z].setAttribute("selected","selected")}else{ad.options[Z].removeAttribute("selected")}}}}}
function A(Y){var X,Z=null;if(Y){X=Y.nodeType||-1;switch(X){case 9:Z=Y.documentElement?Y.documentElement.outerHTML:"";break;case 1:Z=Y.outerHTML;break;default:Z=null;break}}
return Z}
function V(Z){var X,Y=false;if(Z&&typeof Z==="object"){X=Z.nodeType||-1;switch(X){case 9:case 1:Y=true;break;default:Y=false;break}}
return Y}
function b(ae,an,Y){var ah,ag,ai,ao,af=["iframe","frame"],am,Z,ac,al,aa,ak,ab={frames:[]},ap,ad,X;for(ag=0;ag<af.length;ag+=1){ao=af[ag];ap=ae.getElementsByTagName(ao);ad=an.getElementsByTagName(ao);if(ap){for(ah=0,ai=ap.length;ah<ai;ah+=1){try{am=ap[ah];Z=W.getIFrameWindow(am);if(Z&&Z.document&&Z.location.href!=="about:blank"){ac=Z.document;al=r(ac,ac,"",Y);aa=m();ad[ah].setAttribute("tltid",aa);al.tltid=aa;X=W.getOriginAndPath(ac.location);al.host=X.origin;al.url=X.path;al.charset=ac.characterSet||ac.charset;ak=ad[ah].getAttribute("src");if(!ak){ak=Z.location.href;ad[ah].setAttribute("src",ak)}
ab.frames=ab.frames.concat(al.frames);delete al.frames;ab.frames.push(al)}}catch(aj){}}}}
return ab}
function U(ad){var ab,Z,X,aa,Y,ac,ae=0;if(!ad){return ae}
if(ad.root){ae+=ad.root.length;if(ad.frames){for(ab=0,X=ad.frames.length;ab<X;ab+=1){if(ad.frames[ab].root){ae+=ad.frames[ab].root.length}}}}else{if(ad.diffs){for(ab=0,X=ad.diffs.length;ab<X;ab+=1){ac=ad.diffs[ab];ae+=ac.xpath.length;if(ac.root){ae+=ac.root.length}else{if(ac.attributes){for(Z=0,aa=ac.attributes.length;Z<aa;Z+=1){Y=ac.attributes[Z];ae+=Y.name.length;if(Y.value){ae+=Y.value.length}}}}}}}
return ae}
function M(){var aa,Z,X,Y;for(aa=0,X=T.length;aa<X&&t.length;aa+=1){Y=T[aa];for(Z=0;Z<t.length;Z+=1){if(t[Z].containedIn(Y)){t.splice(Z,1);Z-=1}}}}
function n(Z,Y){var aa,X;aa=r(Z,Z,null,Y);if(!aa){aa={}}
aa.charset=Z.characterSet||Z.charset;X=W.getOriginAndPath(Z.location);aa.host=X.origin;aa.url=X.path;return aa}
function G(Z){var ab,X,aa={fullDOM:false,diffs:[],attributeDiffs:{}},ae,ad,Y;O(T);M();for(ab=0,X=T.length;ab<X;ab+=1){Y=T[ab];ad=i.getNodeFromID(Y.xpath,-2);if(ad===window.document.body){return n(window.document,Z)}
ae=r(window.document,ad,Y,Z);ae.xpath=Y.xpath;aa.diffs.push(ae)}
function ac(ag,af){if(!ag||!ag.name){return}
aa.attributeDiffs[ae.xpath][ag.name]={value:ag.value}}
for(ab=0,X=t.length;ab<X;ab+=1){Y=t[ab];ae={xpath:d(Y.attributes,"id")?Y.fullXpath:Y.xpath,attributes:p(Y.attributes)};aa.diffs.push(ae);aa.attributeDiffs[ae.xpath]={};W.forEach(ae.attributes,ac)}
return aa}
q=function(X){var Y=null;if(V(X)){Y=X.cloneNode(true);if(!Y&&X.documentElement){Y=X.documentElement.cloneNode(true)}}
return Y};r=function(ae,ad,ab,af){var X,Y,aa={},ac,Z;if(!ae||!ad){return aa}
X=q(ad,ae);if(!X){return aa}
if(!!af.removeScripts){f(X,"script");f(X,"noscript")}
if(!!af.removeComments){H(X,8)}
L(ad,X);Q(ad,X);k(ad,X);X=u.applyPrivacyToNode(X,ab,ae);if(!!af.captureFrames){Y=b(ad,X,af)}
if(Y){aa=W.mixin(aa,Y)}
ac=(R(ad)||"")+A(X);aa.root=u.applyPrivacyPatterns(ac);return aa};z=function(){h=x.getService("config");j(h.getServiceConfig("domCapture")||{})};return{init:function(){h=x.getService("config");if(!K){j(h.getServiceConfig("domCapture")||{})}else{}},destroy:function(){N()},observeWindow:function(Z){var Y,X;if(!Z){return}
if(!W.getValue(g,"options.captureFrames",false)&&!(Z===window)){return}
if(W.indexOf(J,Z)===-1){J.push(Z)}},captureDOM:function(Y,Z){var aa,X,ad=null,ab,ae=0;if(!K||W.isLegacyIE){return ad}
Z=W.mixin({},g.options,Z);Y=Y||window.document;if(!o||!a||c||Z.forceFullDOM){if(v){v.disconnect()}
ad=n(Y,Z);ad.fullDOM=true;ad.forced=!!(c||Z.forceFullDOM);o=true;if(v){for(aa=0,X=J.length;aa<X;aa+=1){ab=J[aa];try{v.observe(ab.document,E)}catch(ac){J.splice(aa,1);X=J.length;aa-=1}}}}else{ad=G(Z);ad.fullDOM=ad.diffs?false:true}
if(a){ad.mutationCount=w}
D();if(Z.maxLength){ae=U(ad);if(ae>Z.maxLength){ad={errorCode:101,error:"Captured length ("+ae+") exceeded limit ("+Z.maxLength+")."}}}
return ad}}});TLT.addService("encoder",function(a){var f={},g=null,b=null,d=false;function e(j){var i=null;if(!j){return i}
i=f[j];if(i&&typeof i.encode==="string"){i.encode=a.utils.access(i.encode)}
return i}
function h(i){f=i;g.subscribe("configupdated",b);d=true}
function c(){g.unsubscribe("configupdated",b);d=false}
b=function(){g=a.getService("config");h(g.getServiceConfig("encoder")||{})};return{init:function(){g=a.getService("config");if(!d){h(g.getServiceConfig("encoder")||{})}else{}},destroy:function(){c()},encode:function(m,l){var k,i,j={data:null,encoding:null,error:null};if((typeof m!=="string"&&!m)||!l){j.error="Invalid "+(!m?"data":"type")+" parameter.";return j}
k=e(l);if(!k){j.error="Specified encoder ("+l+") not found.";return j}
if(typeof k.encode!=="function"){j.error="Configured encoder ("+l+") encode method is not a function.";return j}
try{i=k.encode(m)}catch(n){j.error="Encoding failed: "+(n.name?n.name+" - ":"")+n.message;return j}
if(!i||a.utils.getValue(i,"buffer",null)===null){j.error="Encoder ("+l+") returned an invalid result.";return j}
j.data=i.buffer;j.encoding=k.defaultEncoding;return j}}});TLT.addService("message",function(v){var O=v.utils,q=0,s=0,G=0,j=0,r=new Date(),i=v.getService("browserBase"),b=v.getService("browser"),h=v.getService("config"),z=h.getServiceConfig("message")||{},m=window.location.href,L=window.location.hostname,P=z.hasOwnProperty("privacy")?z.privacy:[],c,C={},M={lower:"x",upper:"X",numeric:"9",symbol:"@"},f=parseFloat((window.devicePixelRatio||1).toFixed(2)),g=window.screen||{},a=g.width||0,x=g.height||0,N=i.getNormalizedOrientation(),k=!O.isiOS?a:Math.abs(N)===90?x:a,B=!O.isiOS?x:Math.abs(N)===90?a:x,J=(window.screen?window.screen.height-window.screen.availHeight:0),I=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight,F=false;function e(R){var Q="",S=R.timestamp||(new Date()).getTime();delete R.timestamp;this.type=R.type;this.offset=S-r.getTime();this.screenviewOffset=0;if(R.type===2){q=s;s=S;if(R.screenview.type==="UNLOAD"){this.screenviewOffset=S-(q||r.getTime())}}else{if(s){this.screenviewOffset=S-s}}
if(!this.type){return}
this.count=(j+=1);this.fromWeb=true;for(Q in R){if(R.hasOwnProperty(Q)){this[Q]=R[Q]}}}
C.PVC_MASK_EMPTY=function(Q){return""};C.PVC_MASK_BASIC=function(R){var Q="XXXXX";if(typeof R!=="string"){return""}
return(R.length?Q:"")};C.PVC_MASK_TYPE=function(U){var R,T=0,Q=0,S="";if(typeof U!=="string"){return S}
R=U.split("");for(T=0,Q=R.length;T<Q;T+=1){if(O.isNumeric(R[T])){S+=M.numeric}else{if(O.isUpperCase(R[T])){S+=M.upper}else{if(O.isLowerCase(R[T])){S+=M.lower}else{S+=M.symbol}}}}
return S};C.PVC_MASK_EMPTY.maskType=1;C.PVC_MASK_BASIC.maskType=2;C.PVC_MASK_TYPE.maskType=3;C.PVC_MASK_CUSTOM={maskType:4};function d(Q,S){var R=C.PVC_MASK_BASIC;if(typeof S!=="string"){return S}
if(!Q){R=C.PVC_MASK_BASIC}else{if(Q.maskType===C.PVC_MASK_EMPTY.maskType){R=C.PVC_MASK_EMPTY}else{if(Q.maskType===C.PVC_MASK_BASIC.maskType){R=C.PVC_MASK_BASIC}else{if(Q.maskType===C.PVC_MASK_TYPE.maskType){R=C.PVC_MASK_TYPE}else{if(Q.maskType===C.PVC_MASK_CUSTOM.maskType){if(typeof Q.maskFunction==="string"){R=O.access(Q.maskFunction)}else{R=Q.maskFunction}
if(typeof R!=="function"){R=C.PVC_MASK_BASIC}}}}}}
return R(S)}
function A(Q,R){var S;if(!Q||!R){return}
for(S in R){if(R.hasOwnProperty(S)){if(S==="value"){R[S]=d(Q,R[S])}else{delete R[S]}}}}
function K(Q,R){return(O.matchTarget(Q,R)!==-1)}
function E(V){var R,Q,S,U,T;if(!V){return""}
for(R=0,Q=c.length;R<Q;R+=1){T=c[R];T.cRegex.lastIndex=0;V=V.replace(T.cRegex,T.replacement)}
return V}
function D(X){var U,Q,T,R,W=false,V,S;if(!X||(!X.currState&&!X.prevState)){return X}
V=X.prevState;S=X.currState;for(U=0,Q=P.length;U<Q;U+=1){R=P[U];T=O.getValue(R,"exclude",false);if(K(R.targets,X)!==T){A(R,V);A(R,S);W=true;break}}
if(!W){if(V&&V.value){V.value=E(V.value)}
if(S&&S.value){S.value=E(S.value)}}
return X}
function o(Q){if(!Q||!Q.target){return Q}
D(Q.target);return Q}
function l(T,R){var S,Q,V,U;if(!R||!T){return}
if(T.value){V=d(R,T.value);T.setAttribute("value",V);T.value=V}
if(T.checked){T.removeAttribute("checked")}
if(O.getTagName(T)==="select"){T.selectedIndex=-1;for(S=0,Q=T.options.length;S<Q;S+=1){U=T.options[S];U.removeAttribute("selected");U.selected=false}}else{if(O.getTagName(T)==="textarea"){T.textContent=T.value}}}
function u(ac,Z,ad,ai,V,Y){var ae,ab,aa,af,S,T,X=[],ag,Q,W,U,ah,R;if(!ac.length&&!V.length&&!Y){return[]}
R=b.queryAll("input, select, textarea",Z);if(!R||!R.length){return[]}
for(ae=0,af=V.length;ae<af;ae+=1){ab=R.indexOf(V[ae]);if(ab!==-1){R.splice(ab,1)}}
if(ac.length){for(ae=0,af=R.length,X=[];ae<af;ae+=1){if(R[ae].value){T=i.ElementData.prototype.examineID(R[ae]);if(T.idType===-2){ag=new i.Xpath(R[ae]);ag.applyPrefix(ad);T.id=ag.xpath}
X.push({id:T.id,idType:T.idType,element:R[ae]})}}}
for(ae=0,af=ac.length;ae<af;ae+=1){U=P[ac[ae].ruleIndex];Q=O.getValue(U,"exclude",false);ah=U.targets[ac[ae].targetIndex];if(typeof ah.id==="string"&&ah.idType===-2){for(ab=0;ab<X.length;ab+=1){if(X[ab].idType===ah.idType&&X[ab].id===ah.id){if(!Q){S=X[ab].element;l(S,U)}else{aa=R.indexOf(S);R.splice(aa,1)}}}}else{for(ab=0;ab<X.length;ab+=1){ah.cRegex.lastIndex=0;if(X[ab].idType===ah.idType&&ah.cRegex.test(X[ab].id)){S=X[ab].element;if(!Q){l(S,U)}else{aa=R.indexOf(S);R.splice(aa,1)}}}}}
if(Y){for(ae=0,af=R.length;ae<af;ae+=1){l(R[ae],Y)}}}
function p(X,ac,ai){var ad,Z,Y,S,Q,T=[],W,ae,aa,U,R,af,ab=[],ah,ag,V;if(!X||!ai){return null}
for(ad=0,ae=P.length;ad<ae;ad+=1){aa=P[ad];Q=O.getValue(aa,"exclude",false);if(Q){W=aa}
ag=aa.targets;for(Z=0,V=ag.length;Z<V;Z+=1){ah=ag[Z];if(typeof ah==="string"){R=b.queryAll(ah,X);if(!Q){for(Y=0,af=R.length;Y<af;Y+=1){S=R[Y];l(S,aa)}}else{T=T.concat(R)}}else{if(typeof ah.id==="string"){switch(ah.idType){case-1:case-3:S=i.getNodeFromID(ah.id,ah.idType,X);if(!Q){l(S,aa)}else{T.push(S)}
break;case-2:ab.push({ruleIndex:ad,targetIndex:Z,exclude:Q});break;default:break}}else{ab.push({ruleIndex:ad,targetIndex:Z,exclude:Q})}}}}
u(ab,X,ac,ai,T,W);return X}
function t(U){var S,Q,R,T=false;if(!U){return T}
for(S=0,Q=P.length;S<Q;S+=1){R=P[S];if(K(R.targets,U)){T=true;break}}
return T}
function w(){var T,S,Q,W,X,V,R,U;h=v.getService("config");z=h.getServiceConfig("message")||{};P=z.privacy||[];c=z.privacyPatterns||[];for(T=0,X=P.length;T<X;T+=1){W=P[T];R=W.targets;for(S=0,U=R.length;S<U;S+=1){V=R[S];if(typeof V==="object"){if(typeof V.idType==="string"){V.idType=+V.idType}
if(typeof V.id==="object"){V.cRegex=new RegExp(V.id.regex,V.id.flags)}}}}
for(Q=c.length,T=Q-1;T>=0;T-=1){W=c[T];if(typeof W.pattern==="object"){W.cRegex=new RegExp(W.pattern.regex,W.pattern.flags)}else{c.splice(T,1)}}}
function y(){if(h.subscribe){h.subscribe("configupdated",w)}
w();F=true}
function H(){h.unsubscribe("configupdated",w);F=false}
return{init:function(){if(!F){y()}else{}},destroy:function(){H()},applyPrivacyToNode:p,applyPrivacyToMessage:o,applyPrivacyToTarget:D,applyPrivacyPatterns:E,isPrivacyMatched:t,createMessage:function(Q){if(typeof Q.type==="undefined"){throw new TypeError("Invalid queueEvent given!")}
return o(new e(Q))},wrapMessages:function(R){var Q={messageVersion:"9.0.0.0",serialNumber:(G+=1),sessions:[{id:v.getPageId(),startTime:r.getTime(),timezoneOffset:r.getTimezoneOffset(),messages:R,clientEnvironment:{webEnvironment:{libVersion:"5.5.0.1814",domain:L,page:m,referrer:document.referrer,screen:{devicePixelRatio:f,deviceWidth:k,deviceHeight:B,deviceToolbarHeight:J,width:I,height:n,orientation:N}}}}]},S=Q.sessions[0].clientEnvironment.webEnvironment.screen;S.orientationMode=O.getOrientationMode(S.orientation);return Q}}});TLT.addService("serializer",function(core){function serializeToJSON(obj){var str,key,len=0;if(typeof obj!=="object"||obj===null){switch(typeof obj){case"function":case"undefined":return"null";case"string":return'"'+obj.replace(/\"/g,'\\"')+'"';default:return String(obj)}}else{if(Object.prototype.toString.call(obj)==="[object Array]"){str="[";for(key=0,len=obj.length;key<len;key+=1){if(Object.prototype.hasOwnProperty.call(obj,key)){str+=serializeToJSON(obj[key])+","}}}else{str="{";for(key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){str=str.concat('"',key,'":',serializeToJSON(obj[key]),",");len+=1}}}}
if(len>0){str=str.substring(0,str.length-1)}
str+=String.fromCharCode(str.charCodeAt(0)+2);return str}
var configService=core.getService("config"),serialize={},parse={},defaultSerializers={json:(function(){if(typeof window.JSON!=="undefined"){return{serialize:window.JSON.stringify,parse:window.JSON.parse}}
return{serialize:serializeToJSON,parse:function(data){return eval("("+data+")")}}}())},updateConfig=null,isInitialized=false;function addObjectIfExist(paths,rootObj,propertyName){var i,len,obj;paths=paths||[];for(i=0,len=paths.length;i<len;i+=1){obj=paths[i];if(typeof obj==="string"){obj=core.utils.access(obj)}
if(typeof obj==="function"){rootObj[propertyName]=obj;break}}}
function checkParserAndSerializer(){var isParserAndSerializerInvalid;if(typeof serialize.json!=="function"||typeof parse.json!=="function"){isParserAndSerializerInvalid=true}else{if(typeof parse.json('{"foo": "bar"}')==="undefined"){isParserAndSerializerInvalid=true}else{isParserAndSerializerInvalid=parse.json('{"foo": "bar"}').foo!=="bar"}
if(typeof parse.json("[1, 2]")==="undefined"){isParserAndSerializerInvalid=true}else{isParserAndSerializerInvalid=isParserAndSerializerInvalid||parse.json("[1, 2]")[0]!==1;isParserAndSerializerInvalid=isParserAndSerializerInvalid||parse.json("[1,2]")[1]!==2}
isParserAndSerializerInvalid=isParserAndSerializerInvalid||serialize.json({foo:"bar"})!=='{"foo":"bar"}';isParserAndSerializerInvalid=isParserAndSerializerInvalid||serialize.json([1,2])!=="[1,2]"}
return isParserAndSerializerInvalid}
function initSerializerService(config){var format;for(format in config){if(config.hasOwnProperty(format)){addObjectIfExist(config[format].stringifiers,serialize,format);addObjectIfExist(config[format].parsers,parse,format)}}
if(!(config.json&&config.json.hasOwnProperty("defaultToBuiltin"))||config.json.defaultToBuiltin===true){serialize.json=serialize.json||defaultSerializers.json.serialize;parse.json=parse.json||defaultSerializers.json.parse}
if(typeof serialize.json!=="function"||typeof parse.json!=="function"){core.fail("JSON parser and/or serializer not provided in the UIC config. Can't continue.")}
if(checkParserAndSerializer()){core.fail("JSON stringification and parsing are not working as expected")}
if(configService){configService.subscribe("configupdated",updateConfig)}
isInitialized=true}
function destroy(){serialize={};parse={};if(configService){configService.unsubscribe("configupdated",updateConfig)}
isInitialized=false}
updateConfig=function(){configService=core.getService("config");initSerializerService(configService.getServiceConfig("serializer"))};return{init:function(){var ssConfig;if(!isInitialized){ssConfig=configService?configService.getServiceConfig("serializer"):{};initSerializerService(ssConfig)}else{}},destroy:function(){destroy()},parse:function(data,type){type=type||"json";return parse[type](data)},serialize:function(data,type){var serializedData;type=type||"json";serializedData=serialize[type](data);return serializedData}}});TLT.addModule("TLCookie",function(d){var i={},h=0,g="WCXSID",l="TLTSID",b="CoreID6",o,m,c=null,n,p=d.utils;function a(){var u="123456789",t=p.getRandomString(1,u)+p.getRandomString(31,u+"0");return t}
function j(){var t=a();p.setCookie(l,t);return p.getCookieValue(l)}
function k(){if(!window.cmRetrieveUserID){return}
window.cmRetrieveUserID(function(t){c=t})}
function f(x){var t,u,w,v;if(!localStorage||!x){return}
w=localStorage.getItem(x);if(w){u=w.split("|");t=parseInt(u[0],10);if(Date.now()>t){localStorage.removeItem(x)}else{v=u[1]}}
return v}
function s(v,u){var t;if(!localStorage||!v){return}
u=u||a();t=Date.now()+h;localStorage.setItem(v,t+"|"+u);return f(v)}
function e(t){var w=[],v=p.getValue(t,"sessionIDUsesCookie",true),u=p.getValue(t,"sessionIDUsesStorage",false);if(t.tlAppKey){n=t.tlAppKey;w.push({name:"X-Tealeaf-SaaS-AppKey",value:n})}
if(t.visitorCookieName){b=t.visitorCookieName}
if(t.wcxCookieName){g=t.wcxCookieName}
o=p.getCookieValue(g);if(o){w.push({name:"X-WCXSID",value:o})}
if(t.sessionizationCookieName){l=t.sessionizationCookieName}
if(u){h=p.getValue(t,"sessionIDStorageTTL",600000);m=f(l)}
if(!m&&v){m=p.getCookieValue(l)}
if(!m){if(o){m=o}else{if(u){m=s(l)}
if(!m&&v){m=j()}}}
if(!m){m="Check7UIC7Cookie7Configuration77"}
w.push({name:"X-Tealeaf-SaaS-TLTSID",value:m});if(w.length){TLT.registerBridgeCallbacks([{enabled:true,cbType:"addRequestHeaders",cbFunction:function(){return w}}])}}
function q(y){var v,u,t=false,x,w=i.appCookieWhitelist;if(!w||!w.length){return t}
for(v=0,u=w.length;v<u&&!t;v+=1){x=w[v];if(x.regex){if(!x.cRegex){x.cRegex=new RegExp(x.regex,x.flags)}
x.cRegex.lastIndex=0;t=x.cRegex.test(y)}else{t=(x===y)}}
return t}
function r(){var x,w,y,z={},u,D=document.cookie,v=[],C="",t="";if(!D){return}
v=D.split("; ");for(x=0,y=v.length;x<y;x+=1){u=v[x];w=u.indexOf("=");if(w>=0){try{C=decodeURIComponent(u.substr(0,w))}catch(B){C=u.substr(0,w)}}
t=u.substr(w+1);if(q(C)){try{z[C]=decodeURIComponent(t)}catch(A){z[C]=t}}}
if(c&&!z[b]){z[b]=c}
d.post({type:14,cookies:z})}
return{init:function(){i=d.getConfig()||{};e(i);k()},destroy:function(){if(i.sessionIDUsesStorage){s(l,m)}},onevent:function(t){switch(t.type){case"screenview_load":if(p.getValue(i,"appCookieWhitelist.length",0)){k();r()}
break;default:break}}}});if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("overstat",function(e){var A=e.utils,p={},C={updateInterval:250,hoverThresholdMin:1000,hoverThresholdMax:2*60*1000,gridCellMaxX:10,gridCellMaxY:10,gridCellMinWidth:20,gridCellMinHeight:20},d=50;function y(H){var I=e.getConfig()||{},J=I[H];return typeof J==="number"?J:C[H]}
function G(N,H){var M=A.getValue(N,"webEvent.target",{}),I=A.getValue(M,"element.tagName")||"",J=I.toLowerCase()==="input"?A.getValue(M,"element.type"):"",L=A.getTlType(M),K={type:9,event:{hoverDuration:N.hoverDuration,hoverToClick:A.getValue(H,"hoverToClick")},target:{id:M.id||"",idType:M.idType||"",name:M.name||"",tlType:L,type:I,subType:J,position:{width:A.getValue(M,"element.offsetWidth",0),height:A.getValue(M,"element.offsetHeight",0),relXY:N.relXY}}};if((typeof K.target.id)===undefined||K.target.id===""){return}
e.post(K)}
function i(H){if(H&&!H.nodeType&&H.element){H=H.element}
return H}
function s(H){H=i(H);return!H||H===document.body||H===document.html||H===document}
function j(H){H=i(H);if(!H){return null}
return H.parentNode}
function n(H){H=i(H);if(!H){return null}
return H.offsetParent||H.parentElement||j(H)}
function w(I,J){var H=0;if(!J||J===I){return false}
J=j(J);while(!s(J)&&H++<d){if(J===I){return true}
J=j(J)}
if(H>=d){A.clog("Overstat isChildOf() hit iterations limit")}
return false}
function E(H){if(H.nativeEvent){H=H.nativeEvent}
return H}
function z(H){return E(H).target}
function h(H){H=i(H);if(!H){return-1}
return H.nodeType||-1}
function D(H){H=i(H);if(!H){return""}
return H.tagName?H.tagName.toUpperCase():""}
function t(H){if(!H){return}
if(H.nativeEvent){H=H.nativeEvent}
if(H.stopPropagation){H.stopPropagation()}else{if(H.cancelBubble){H.cancelBubble()}}}
function m(I){var H=D(I);return h(I)!==1||H==="TR"||H==="TBODY"||H==="THEAD"}
function g(H){if(!H){return""}
if(H.xPath){return H.xPath}
H=i(H);return e.getXPathFromNode(H)}
function B(I,H){var J=p[I];if(J&&J[H]){return J[H]()}}
function v(I,K,J,H){this.xPath=I!==null?g(I):"";this.domNode=I;this.hoverDuration=0;this.hoverUpdateTime=0;this.gridX=Math.max(K,0);this.gridY=Math.max(J,0);this.parentKey="";this.updateTimer=-1;this.disposed=false;this.childKeys={};this.webEvent=H;this.getKey=function(){return this.xPath+":"+this.gridX+","+this.gridY};this.update=function(){var M=new Date().getTime(),L=this.getKey();if(this.hoverUpdateTime!==0){this.hoverDuration+=M-this.hoverUpdateTime}
this.hoverUpdateTime=M;clearTimeout(this.updateTimer);this.updateTimer=setTimeout(function(){B(L,"update")},y("updateInterval"))};this.dispose=function(L){clearTimeout(this.updateTimer);delete p[this.getKey()];this.disposed=true;if(L){var M=this.clone();p[M.getKey()]=M;M.update()}};this.process=function(P){clearTimeout(this.updateTimer);if(this.disposed){return false}
var N=false,O=this,M=null,L=0;if(this.hoverDuration>=y("hoverThresholdMin")){this.hoverDuration=Math.min(this.hoverDuration,y("hoverThresholdMax"));N=true;G(this,{hoverToClick:!!P});while(typeof O!=="undefined"&&L++<d){O.dispose(P);O=p[O.parentKey]}
if(L>=d){A.clog("Overstat process() hit iterations limit")}}else{this.dispose(P)}
return N};this.clone=function(){var L=new v(this.domNode,this.gridX,this.gridY);L.parentKey=this.parentKey;return L}}
function F(J,H,K,I){return new v(J,H,K,I)}
function r(J){if(J&&J.position){return{x:J.position.x,y:J.position.y}}
J=i(J);var H=J&&J.getBoundingClientRect?J.getBoundingClientRect():null,N=H?H.left:(J?J.offsetLeft:0),M=H?H.top:(J?J.offsetHeight:0),P=N,O=M,K=0,I=0,L=n(J),Q=0;while(L&&Q++<d){if(s(L)){break}
K=L.offsetLeft-(L.scrollLeft||0);I=L.offsetTop-(L.scrollTop||0);if(K!==P||I!==O){N+=K;M+=I;P=K;O=I}
L=n(L)}
if(Q>=d){A.clog("Overstat calculateNodeOffset() hit iterations limit")}
if(isNaN(N)){N=0}
if(isNaN(M)){M=0}
return{x:N,y:M}}
function a(L,J,I){L=i(L);var K=r(L),H=J-K.x,M=I-K.y;if(!isFinite(H)){H=0}
if(!isFinite(M)){M=0}
return{x:H,y:M}}
function x(H,I){H=Math.floor(Math.min(Math.max(H,0),1)*100)/100;I=Math.floor(Math.min(Math.max(I,0),1)*100)/100;return H+","+I}
function f(L,O,N){L=i(L);var J=L.getBoundingClientRect?L.getBoundingClientRect():null,T=J?J.width:L.offsetWidth,K=J?J.height:L.offsetHeight,M=T&&T>0?Math.max(T/y("gridCellMaxX"),y("gridCellMinWidth")):y("gridCellMinWidth"),Q=K&&K>0?Math.max(K/y("gridCellMaxY"),y("gridCellMinHeight")):y("gridCellMinHeight"),I=Math.floor(O/M),H=Math.floor(N/Q),S=T>0?O/T:0,P=K>0?N/K:0,R="";if(!isFinite(I)){I=0}
if(!isFinite(H)){H=0}
R=x(S,P);return{x:I,y:H,relXY:R}}
function c(M){var N=M,O=M.getKey(),I={},J=null,L=null,K=false,H=0;I[O]=true;while(typeof N!=="undefined"&&H++<d){I[N.parentKey]=true;if(N.parentKey===""||N.parentKey===N.getKey()){break}
if(H>=d){A.clog("Overstat cleanupHoverEvents() hit iterations limit")}
N=p[N.parentKey]}
for(J in p){if(p.hasOwnProperty(J)&&!I[J]){N=p[J];if(N){if(!K){K=N.process()}else{N.dispose()}}}}}
function u(I,K){var L=null,H=null,J=false;for(H in p){if(p.hasOwnProperty(H)){L=p[H];if(L&&L.domNode===I&&L.getKey()!==K){if(!J){J=L.process()}else{L.dispose()}}}}}
function b(L,J,K){if(!J){J=L.target}
if(s(J)){return null}
if(A.isiOS||A.isAndroid){return null}
var H,Q,M,P,N,O,I;if(!m(J)){H=a(J,L.position.x,L.position.y);Q=f(J,H.x,H.y);M=new v(J,Q.x,Q.y,L);M.relXY=Q.relXY;P=M.getKey();if(p[P]){M=p[P]}else{p[P]=M}
M.update();if(!K){I=n(J);if(I){O=b(L,I,true);if(O!==null){N=O.getKey();P=M.getKey();if(P!==N){M.parentKey=N}}}
c(M)}}else{M=b(L,n(J),K)}
return M}
function q(H){H=E(H);if(w(H.target,H.relatedTarget)){return}
u(H.target)}
function l(J){var K=null,H=null,I=false;for(H in p){if(p.hasOwnProperty(H)){K=p[H];if(K){if(!I){I=K.process(true)}else{K.dispose()}}}}}
function o(H){e.performFormCompletion(true)}
function k(I){var H=A.getValue(I,"target.id");if(!H){return}
switch(I.type){case"mousemove":b(I);break;case"mouseout":q(I);break;case"click":l(I);break;case"submit":o(I);break;default:break}}
return{init:function(){},destroy:function(){var I,H;for(I in p){if(p.hasOwnProperty(I)){p[I].dispose();delete p[I]}}},onevent:function(H){if(typeof H!=="object"||!H.type){return}
k(H)},onmessage:function(H){},createHoverEvent:F,cleanupHoverEvents:c,eventMap:p}})}else{}
if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("performance",function(a){var g={loadReceived:false,unloadReceived:false,perfEventSent:false},e=0,c,h=a.utils;function f(l,k){if(typeof l!=="string"){return false}
if(!k||typeof k!=="object"){return false}
return(k[l]===true)}
function b(m,k){var o=0,l={},p="",n=0;if(!m||typeof m!=="object"||!m.navigationStart){return{}}
o=m.navigationStart;for(p in m){if(Object.prototype.hasOwnProperty.call(m,p)||typeof m[p]==="number"){if(!f(p,k)){n=m[p];if(typeof n==="number"&&n&&p!=="navigationStart"){l[p]=n-o}else{l[p]=n}}}}
return l}
function d(m){var n=0,l,k;if(m){l=(m.responseEnd>0&&m.responseEnd<m.domLoading)?m.responseEnd:m.domLoading;k=m.loadEventStart;if(h.isNumeric(l)&&h.isNumeric(k)&&k>l){n=k-l}}
return n}
function i(l){var k=a.getStartTime();if(l.timestamp>k&&!e){e=l.timestamp-k}}
function j(n){var l="UNKNOWN",o={type:7,performance:{}},k,p,m;if(!n||g.perfEventSent){return}
p=n.performance||{};m=p.timing;k=p.navigation;if(m){o.performance.timing=b(m,c.filter);o.performance.timing.renderTime=d(m)}else{if(c.calculateRenderTime){o.performance.timing={renderTime:e,calculated:true}}else{return}}
if(c.renderTimeThreshold&&o.performance.timing.renderTime>c.renderTimeThreshold){o.performance.timing.invalidRenderTime=o.performance.timing.renderTime;delete o.performance.timing.renderTime}
if(k){switch(k.type){case 0:l="NAVIGATE";break;case 1:l="RELOAD";break;case 2:l="BACKFORWARD";break;default:l="UNKNOWN";break}
o.performance.navigation={type:l,redirectCount:k.redirectCount}}
a.post(o);g.perfEventSent=true}
return{init:function(){c=a.getConfig()},destroy:function(){c=null},onevent:function(k){if(typeof k!=="object"||!k.type){return}
switch(k.type){case"load":g.loadReceived=true;i(k);setTimeout(function(){if(a.isInitialized()){j(window)}},h.getValue(c,"delay",2000));break;case"unload":g.unloadReceived=true;if(!g.perfEventSent){j(window)}
break;default:break}},onmessage:function(k){}}})}else{}
TLT.addModule("replay",function(aj){var ak=aj.utils,I=0,ae={scale:0,timestamp:0},X={},F=null,e=[],Y=0,D=true,Z=null,A=null,T=false,l=0,R="",y="",L=(new Date()).getTime(),k=0,N=null,ah=null,M=null,B=null,af=null,S=null,V=0,v=0,ac=null,u={inFocus:false},J=null,aa=aj.getConfig()||{},x=ak.getValue(aa,"viewPortWidthHeightLimit",10000),ad=1,C=1,O,ab={cellMaxX:10,cellMaxY:10,cellMinWidth:20,cellMinHeight:20};function s(){var al;for(al in X){if(X.hasOwnProperty(al)){X[al].visitedCount=0}}}
function r(an){var al=false,am="|button|image|submit|reset|",ao=null;if(typeof an!=="object"||!an.type){return al}
switch(an.type.toLowerCase()){case"input":ao="|"+(an.subType||"")+"|";if(am.indexOf(ao.toLowerCase())===-1){al=false}else{al=true}
break;case"select":case"textarea":al=false;break;default:al=true;break}
return al}
function h(am){var al=[];am=am.parentNode;while(am){al.push(am);am=am.parentNode}
return al}
function w(al){return ak.some(al,function(an){var am=ak.getTagName(an);if(am==="a"||am==="button"){return an}
return null})}
function n(al){var am=al.type,an=al.target;if(typeof am==="string"){am=am.toLowerCase()}else{am="unknown"}
if(am==="blur"){am="focusout"}
if(am==="change"){if(an.type==="INPUT"){switch(an.subType){case"text":case"date":case"time":am=an.subType+"Change";break;default:am="valueChange";break}}else{if(an.type==="TEXTAREA"){am="textChange"}else{am="valueChange"}}}
return am}
function z(al,an,am){var ao=null;if(!al){return ao}
an=an||{};an.eventOn=D;D=false;if(am){ao="dcid-"+ak.getSerialNumber()+"."+(new Date()).getTime()+"s";window.setTimeout(function(){an.dcid=ao;aj.performDOMCapture(al,an)},am)}else{delete an.dcid;ao=aj.performDOMCapture(al,an)}
return ao}
function H(am,az,an){var au,ar,aB=false,ao={},aA=false,aq,aw,ay=null,at=0,ax,av,al,ap;if(!am||(!az&&!an)){return ay}
if(!az&&!(am==="load"||am==="unload")){return ay}
aa=aj.getConfig()||{};aA=ak.getValue(aa,"domCapture.enabled",false);if(!aA||ak.isLegacyIE){return ay}
aw=ak.getValue(aa,"domCapture.triggers")||[];for(au=0,ax=aw.length;!aB&&au<ax;au+=1){aq=aw[au];if(aq.event===am){if(am==="load"||am==="unload"){if(aq.screenviews){al=aq.screenviews;for(ar=0,ap=al.length;!aB&&ar<ap;ar+=1){av=al[ar];switch(typeof av){case"object":if(!av.cRegex){av.cRegex=new RegExp(av.regex,av.flags)}
av.cRegex.lastIndex=0;aB=av.cRegex.test(an);break;case"string":aB=(av===an);break;default:break}}}else{aB=true}}else{if(aq.targets){aB=(-1!==ak.matchTarget(aq.targets,az))}else{aB=true}}}}
if(aB){at=aq.delay||(aq.event==="load"?7:0);ao.forceFullDOM=!!aq.fullDOMCapture;ay=z(window.document,ao,at)}
return ay}
function W(aw){var an,ao,ap=ak.getValue(aw,"webEvent.target",{}),al=ap.type,ar=ap.subType||"",am=ak.getTlType(ap),at=h(ak.getValue(ap,"element")),av=null,aq=ak.getValue(ap,"position.relXY"),au=ak.getValue(aw,"webEvent.subType",null);an={timestamp:ak.getValue(aw,"webEvent.timestamp",0),type:4,target:{id:ap.id||"",idType:ap.idType,name:ap.name,tlType:am,type:al,position:{width:ak.getValue(ap,"size.width"),height:ak.getValue(ap,"size.height")},currState:aw.currState||null},event:{tlEvent:n(ak.getValue(aw,"webEvent")),type:ak.getValue(aw,"webEvent.type","UNKNOWN")}};if(ar){an.target.subType=ar}
if(aq){an.target.position.relXY=aq}
if(typeof aw.dwell==="number"&&aw.dwell>0){an.target.dwell=aw.dwell}
if(typeof aw.visitedCount==="number"){an.target.visitedCount=aw.visitedCount}
if(typeof aw.prevState!=="undefined"){an.prevState=aw.prevState}
if(au){an.event.subType=au}
av=w(at);an.target.isParentLink=!!av;if(av){if(av.href){an.target.currState=an.target.currState||{};an.target.currState.href=an.target.currState.href||av.href}
if(av.value){an.target.currState=an.target.currState||{};an.target.currState.value=an.target.currState.value||av.value}
if(av.innerText||av.textContent){an.target.currState=an.target.currState||{};an.target.currState.innerText=ak.trim(an.target.currState.innerText||av.innerText||av.textContent)}}
if(ak.isUndefOrNull(an.target.currState)){delete an.target.currState}
if(ak.isUndefOrNull(an.target.name)){delete an.target.name}
if(an.event.type!=="click"||r(ap)){ao=H(an.event.type,ap);if(ao){an.dcid=ao}}
return an}
function E(al){aj.post(al)}
function G(ap){var an=0,al,aq=ap.length,at,ar,ao,au={mouseout:true,mouseover:true},am=[];for(an=0;an<aq;an+=1){at=ap[an];if(!at){continue}
if(au[at.event.type]){am.push(at)}else{for(al=an+1;al<aq&&ap[al];al+=1){if(!au[ap[al].event.type]){break}}
if(al<aq){ar=ap[al];if(ar&&at.target.id===ar.target.id&&at.event.type!==ar.event.type){if(at.event.type==="click"){ao=at;at=ar;ar=ao}
if(ar.event.type==="click"){at.target.position=ar.target.position;an+=1}else{if(ar.event.type==="blur"){at.target.dwell=ar.target.dwell;at.target.visitedCount=ar.target.visitedCount;at.focusInOffset=ar.focusInOffset;at.target.position=ar.target.position;an+=1}}
ap[al]=null;ap[an]=at}}
am.push(ap[an])}}
for(at=am.shift();at;at=am.shift()){aj.post(at)}
ap.splice(0,ap.length)}
if(typeof window.onerror!=="function"){window.onerror=function(ao,an,al){var am=null;if(typeof ao!=="string"){return}
al=al||-1;am={type:6,exception:{description:ao,url:an,line:al}};l+=1;aj.post(am)};T=true}
function o(am,al){u=al;u.inFocus=true;if(typeof X[am]==="undefined"){X[am]={}}
X[am].focus=u.dwellStart=Number(new Date());X[am].focusInOffset=M?u.dwellStart-Number(M):-1;X[am].prevState=ak.getValue(al,"target.state");X[am].visitedCount=X[am].visitedCount+1||1}
function U(al,am){e.push(W({webEvent:al,id:am,currState:ak.getValue(al,"target.state")}))}
function d(aq,am){var an=false,ap,al,ao=0;if(typeof aq==="undefined"||aq===null||typeof am==="undefined"||am===null){return}
if(typeof X[aq]!=="undefined"&&X[aq].hasOwnProperty("focus")){X[aq].dwell=Number(new Date())-X[aq].focus}else{X[aq]={};X[aq].dwell=0}
if(e.length===0){if(!u.inFocus){return}
U(am,aq)}
u.inFocus=false;if(e[e.length-1]){for(ao=e.length-1;ao>=0;ao--){e[ao].target.visitedCount=X[aq].visitedCount}}
al=e[e.length-1];if(al){al.target.dwell=X[aq].dwell;al.focusInOffset=X[aq].focusInOffset;al.target.visitedCount=X[aq].visitedCount;if(al.event.type==="click"){if(!r(al.target)){al.target.currState=ak.getValue(am,"target.state")||ak.getValue(am,"target.currState");an=true}}else{if(al.event.type==="focus"){an=true}}
if(an){al.event.type="blur";al.event.tlEvent="focusout";ap=H(al.event.type,am.target);if(ap){al.dcid=ap}}}
G(e)}
function m(ap,an){var am=false,ao=e.length,al=ao>0?e[ao-1]:null;if(!al){return am}
if(al.target.id!==ap&&al.target.tltype!=="selectList"){if(an.type==="focus"||an.type==="click"||an.type==="change"){d(al.target.id,al);am=true}}
return am}
function c(am,al){if(typeof X[am]!=="undefined"&&!X[am].hasOwnProperty("focus")){o(am,al)}
U(al,am);if(typeof X[am]!=="undefined"&&typeof X[am].prevState!=="undefined"){if(e[e.length-1].target.tlType==="textBox"||e[e.length-1].target.tlType==="selectList"){e[e.length-1].target.prevState=X[am].prevState}}}
function q(aq){var ap,au,am,al,ao=ak.getValue(aq,"target.element",{}),av=ak.getValue(aq,"target.size.width",ao.offsetWidth),an=ak.getValue(aq,"target.size.height",ao.offsetHeight),at=ak.getValue(aq,"target.position.x",0),ar=ak.getValue(aq,"target.position.y",0);ap=av?Math.max(av/ab.cellMaxX,ab.cellMinWidth):ab.cellMinWidth;au=an?Math.max(an/ab.cellMaxY,ab.cellMinHeight):ab.cellMinHeight;am=Math.floor(at/ap);al=Math.floor(ar/au);if(!isFinite(am)){am=0}
if(!isFinite(al)){al=0}
return am+","+al}
function b(ap,an){var am,al=true,ao=0;if(an.target.type==="select"&&J&&J.target.id===ap){J=null;return}
if(!u.inFocus){o(ap,an)}
ao=e.length;if(ao&&ak.getValue(e[ao-1],"event.type")!=="change"){c(ap,an)}
am=q(an);ao=e.length;if(an.position.x===0&&an.position.y===0&&ao&&ak.getValue(e[ao-1],"target.tlType")==="radioButton"){al=false}else{an.target.position.relXY=am}
if(ao&&ak.getValue(e[ao-1],"target.id")===ap){if(al){e[ao-1].target.position.relXY=am}}else{U(an,ap);if(r(an.target)){d(ap,an)}}
J=an}
function a(am){var al=am.orientation,an={type:4,event:{type:"orientationchange"},target:{prevState:{orientation:I,orientationMode:ak.getOrientationMode(I)},currState:{orientation:al,orientationMode:ak.getOrientationMode(al)}}};E(an);I=al}
function ai(am){var al=false;if(!am){return al}
al=(ae.scale===am.scale&&Math.abs((new Date()).getTime()-ae.timestamp)<500);return al}
function j(al){ae.scale=al.scale;ae.rotation=al.rotation;ae.timestamp=(new Date()).getTime()}
function K(){var al,am;al=ad-C;if(isNaN(al)){am="INVALID"}else{if(al<0){am="CLOSE"}else{if(al>0){am="OPEN"}else{am="NONE"}}}
return am}
function g(ap){var av=document.documentElement,ar=document.body,aw=window.screen,am=aw.width,an=aw.height,aq=ak.getValue(ap,"orientation",0),at=!ak.isiOS?am:Math.abs(aq)===90?an:am,ao={type:1,clientState:{pageWidth:document.width||(!av?0:av.offsetWidth),pageHeight:Math.max((!document.height?0:document.height),(!av?0:av.offsetHeight),(!av?0:av.scrollHeight)),viewPortWidth:window.innerWidth||av.clientWidth,viewPortHeight:window.innerHeight||av.clientHeight,viewPortX:Math.round(window.pageXOffset||(!av?(!ar?0:ar.scrollLeft):av.scrollLeft||0)),viewPortY:Math.round(window.pageYOffset||(!av?(!ar?0:ar.scrollTop):av.scrollTop||0)),deviceOrientation:aq,event:ak.getValue(ap,"type")}},au=ao.clientState,al;A=A||ao;if(au.event==="unload"&&au.viewPortHeight===au.pageHeight&&au.viewPortWidth===au.pageWidth){if(A.clientState.viewPortHeight<au.viewPortHeight){au.viewPortHeight=A.clientState.viewPortHeight;au.viewPortWidth=A.clientState.viewPortWidth}}
if((au.viewPortY+au.viewPortHeight)>au.pageHeight){au.viewPortY=au.pageHeight-au.viewPortHeight}
if(au.viewPortY<0){au.viewPortY=0}
al=!au.viewPortWidth?1:(at/au.viewPortWidth);au.deviceScale=al.toFixed(3);au.viewTime=0;if(B&&af){au.viewTime=af.getTime()-B.getTime()}
if(ap.type==="scroll"){au.viewPortXStart=A.clientState.viewPortX;au.viewPortYStart=A.clientState.viewPortY}
return ao}
function p(){var al;if(Z){al=Z.clientState;if(al.viewPortHeight>0&&al.viewPortHeight<x&&al.viewPortWidth>0&&al.viewPortWidth<x){E(Z)}
A=Z;Z=null;B=S||B;af=null}
p.timeoutId=0}
function P(al){var am=null;if(ak.isOperaMini){return}
Z=g(al);if(al.type==="scroll"||al.type==="resize"){if(p.timeoutId){window.clearTimeout(p.timeoutId)}
p.timeoutId=window.setTimeout(p,ak.getValue(aa,"scrollTimeout",2000))}else{if(al.type==="touchstart"||al.type==="load"){if(Z){C=parseFloat(Z.clientState.deviceScale)}}else{if(al.type==="touchend"){if(Z){ad=parseFloat(Z.clientState.deviceScale);p()}}}}
if(al.type==="load"||al.type==="unload"){if(al.type==="unload"&&L){am=ak.clone(Z);am.clientState.event="attention";am.clientState.viewTime=(new Date()).getTime()-L}
p();if(am){Z=am;p()}}
return Z}
function ag(am){var al=ak.getValue(am,"nativeEvent.touches.length",0);if(al===2){P(am)}}
function i(ao){var an,am={},ap=ak.getValue(ao,"nativeEvent.rotation",0)||ak.getValue(ao,"nativeEvent.touches[0].webkitRotationAngle",0),aq=ak.getValue(ao,"nativeEvent.scale",1),al=null,ar={type:4,event:{type:"touchend"},target:{id:ak.getValue(ao,"target.id"),idType:ak.getValue(ao,"target.idType")}};an=ak.getValue(ao,"nativeEvent.changedTouches.length",0)+ak.getValue(ao,"nativeEvent.touches.length",0);if(an!==2){return}
P(ao);al={rotation:ap?ap.toFixed(2):0,scale:ad?ad.toFixed(2):1};al.pinch=K();am.scale=C?C.toFixed(2):1;ar.target.prevState=am;ar.target.currState=al;E(ar)}
function f(aw,ao){var at=["type","name","target.id"],an=null,ap,ar,aq=true,au=10,am=0,av=0,al=0;if(!aw||!ao||typeof aw!=="object"||typeof ao!=="object"){return false}
for(ap=0,ar=at.length;aq&&ap<ar;ap+=1){an=at[ap];if(ak.getValue(aw,an)!==ak.getValue(ao,an)){aq=false;break}}
if(aq){av=ak.getValue(aw,"timestamp");al=ak.getValue(ao,"timestamp");if(!(isNaN(av)&&isNaN(al))){am=Math.abs(ak.getValue(aw,"timestamp")-ak.getValue(ao,"timestamp"));if(isNaN(am)||am>au){aq=false}}}
return aq}
function t(al){var an={type:4,event:{type:al.type},target:{id:ak.getValue(al,"target.id"),idType:ak.getValue(al,"target.idType"),currState:ak.getValue(al,"target.state")}},am;am=H(al.type,al.target);if(am){an.dcid=am}
E(an)}
function Q(am){var al=ak.getValue(aa,"geolocation"),an;if(!al||!al.enabled){return}
an=al.triggers||[];if(!an.length){return}
if(an[0].event===am){TLT.logGeolocation()}}
return{init:function(){e=[]},destroy:function(){d(F);e=[];if(p.timeoutId){window.clearTimeout(p.timeoutId);p.timeoutId=0}
if(T){window.onerror=null;T=false}},onevent:function(am){var ap=null,an=null,al,ao;if(typeof am!=="object"||!am.type){return}
if(f(am,N)){N=am;return}
N=am;ap=ak.getValue(am,"target.id");if(Object.prototype.toString.call(X[ap])!=="[object Object]"){X[ap]={}}
m(ap,am);ac=new Date();switch(am.type){case"hashchange":break;case"focus":an=o(ap,am);break;case"blur":an=d(ap,am);break;case"click":an=b(ap,am);break;case"change":an=c(ap,am);break;case"orientationchange":an=a(am);break;case"touchstart":ag(am);break;case"touchend":an=i(am);break;case"loadWithFrames":TLT.logScreenviewLoad("rootWithFrames");break;case"load":I=am.orientation;B=new Date();if(typeof window.orientation!=="number"||ak.isAndroid){ao=(window.screen.width>window.screen.height?90:0);al=window.orientation;if(Math.abs(al)!==ao&&!(al===180&&ao===0)){ak.isLandscapeZeroDegrees=true;if(Math.abs(al)===180||Math.abs(al)===0){I=90}else{if(Math.abs(al)===90){I=0}}}}
setTimeout(function(){if(aj.isInitialized()){P(am)}},100);Q(am.type);TLT.logScreenviewLoad("root");break;case"screenview_load":M=new Date();s();an=H("load",null,am.name);break;case"screenview_unload":an=H("unload",null,am.name);break;case"resize":case"scroll":if(!af){af=new Date()}
S=new Date();P(am);break;case"unload":if(e!==null){G(e)}
af=new Date();P(am);TLT.logScreenviewUnload("root");break;default:t(am);break}
F=ap;return an},onmessage:function(){}}});TLT.addModule("digitalData",function(context){var config={},qKeys={},q,svChange=false,utils=context.utils;function postMsg(name,desc,action,qKeys){var jMsg={"description":desc,"action":action,"value":qKeys};TLT.logCustomEvent(name,jMsg);};function parseQueryString(){q=(location.search.length>1?location.search.substring(1).split("&"):[]);for(var i=0;i<q.length;i++){qKeys[q[i].match(/^[^=^,^.^%^-^20]+/)]=q[i].replace(/^[^=^,^.^%^-^20]+=?/,"");};if(i>0){postMsg("Query String","QueryString Values","Retrieve",qKeys)};};function logExceptions(){window.onerror=function(errorMsg,url,lineNumber){postMsg("Exception","Error: "+errorMsg,"Captured",{url:url,lineNumber:lineNumber,errorMsg:errorMsg})};}
function logWebData(){if(typeof location.hostname!=="undefined"){postMsg("Domain","Domain value","Retrieve",location.hostname);}
if(typeof document.referrer!=="undefined"){postMsg("Referrer","Referrer value","Retrieve",document.referrer);}
if(typeof navigator.userAgent!=="undefined"){postMsg("UserAgent","UserAgent value","Retrieve",navigator.userAgent);}}
return{init:function(){config=context.getConfig();},destroy:function(){config=null;},onevent:function(webEvent){if(typeof webEvent!=="object"||!webEvent.type){return;}
if(webEvent){parseQueryString();logExceptions();logWebData();}}};});TLT.addModule("sendDatalayer",function(context){function postMsg(name,desc,action,qKeys){var jMsg={"description":desc,"action":action,"value":qKeys};TLT.logCustomEvent(name,jMsg);};function logDataLayer(){var dataLayer=window.utag_data;if(typeof dataLayer!=="undefined"){postMsg("utag_data","utag_data Load values","Retrieve",dataLayer);}}
var sendDatalayer=function(){try{if(TLT&&TLT.isInitialized()&&window.utag_data){logDataLayer();}}catch(e){}};return{init:function(){if(document.readyState==="complete")
setTimeout(sendDatalayer);else if(window.addEventListener)
window.addEventListener("load",sendDatalayer,false);else if(window.attachEvent)
window.attachEvent("onload",sendDatalayer)},destroy:function(){}}});(function(){var changeTarget;if(TLT.getFlavor()==="w3c"&&TLT.utils.isLegacyIE){changeTarget="input, select, textarea, button";}
var config={"services":{"browser":{"useCapture":true,"sizzleObject":"window.Sizzle"},"queue":{"queues":[{"qid":"DEFAULT","endpoint":"//decollector.tealeaf.ibmcloud.com/collector/collectorPost","maxEvents":50,"maxSize":300000,"timerinterval":300000,"checkEndpoint":true,"endpointCheckTimeout":3000,"encoder":"gzip"}],"asyncReqOnUnload":false,"useBeacon":true,"xhrLogging":true},"serializer":{"json":{"defaultToBuiltin":true,"parsers":["JSON.parse"],"stringifiers":["JSON.stringify"]}},"domCapture":{"options":{"captureFrames":true,"removeScripts":true,"removeComments":true,"maxLength":2000000,"maxMutations":100},"diffEnabled":true},"message":{"privacy":[{"targets":["input[type=password]",{id:"name-checkout",idType:-1},{id:"last-name-checkout",idType:-1},{id:"email-checkout",idType:-1},{id:"confirm-email-checkout",idType:-1},{id:"phone-checkout",idType:-1},{id:{regex:"room-.+-name-.+"},idType:-1},{id:{regex:"room-.+-comments"},idType:-1},{id:"name-bill",idType:-1},{id:"first-name-bill",idType:-1},{id:"last-name-bill",idType:-1},{id:"adress-bill",idType:-1},{id:"pc-bill",idType:-1},{id:"city-bill",idType:-1},{id:"nif-bill",idType:-1},{id:"login-modal-email",idType:-1},{id:"login-modal-password",idType:-1},{id:"name",idType:-1},{id:"lastname",idType:-1},{id:"email",idType:-1},{id:"confmail",idType:-1},{id:"nombre",idType:-1},{id:"apellidos",idType:-1},{id:"email2",idType:-1},{id:"password2",idType:-1},{id:"cpassword",idType:-1},{id:"movil",idType:-1},{id:"show-not-titular-content",idType:-1},{id:"show-titular-content",idType:-1},{id:"direccion",idType:-1},{id:"numAddress",idType:-1},{id:"cp",idType:-1},{id:"ciudad",idType:-1},{id:"dni",idType:-1},{id:"first-name",idType:-1},{id:"last-name",idType:-1},{id:"dia",idType:-1},{id:"mes",idType:-1},{id:"anio",idType:-1},{id:"radio1",idType:-1},{id:"radio2",idType:-1},{id:"city",idType:-1},{id:"address",idType:-1},{id:"address-number",idType:-1},{id:"zip-code",idType:-1},{id:"national-ID",idType:-1},{id:"mobile-phone",idType:-1},{id:"login-email",idType:-1},"input[name=email]","input[name=e]",".t005 input[name=email]",".boxLogin input[name=email]",".boxLogin input[name=e]",{id:"login-user",idType:-1},{id:"date-birth",idType:-1},{id:"female",idType:-1},{id:"male",idType:-1},{id:"city-info",idType:-1},{id:"address-info",idType:-1},{id:"number-info",idType:-1},{id:"nationality-id",idType:-1},{id:"telephone",idType:-1},{id:"my-profile-email",idType:-1},{id:"name",idType:-1},{id:"surname",idType:-1},{id:"emailConfirmation",idType:-1},{id:"login-remember-email",idType:-1},{id:"friend-email",idType:-1},{id:"national-id",idType:-1}],"maskType":3}]},"encoder":{"gzip":{"encode":"window.pako.gzip","defaultEncoding":"gzip"}}},"core":{"blockedElements":[],"modules":{"performance":{"enabled":true,"events":[{"name":"load","target":"window"},{"name":"unload","target":"window"}]},"replay":{"enabled":true,"events":[{"name":"change","target":changeTarget,"recurseFrames":true},{"name":"click","recurseFrames":true},{"name":"hashchange","target":"window"},{"name":"focus","target":"input, select, textarea, button","recurseFrames":true},{"name":"blur","target":"input, select, textarea, button","recurseFrames":true},{"name":"load","target":"window"},{"name":"unload","target":"window"},{"name":"orientationchange","target":"window"},{"name":"touchend"},{"name":"touchstart"}]},"overstat":{"enabled":true,"events":[{"name":"click","recurseFrames":true},{"name":"mousemove","recurseFrames":true},{"name":"mouseout","recurseFrames":true},{"name":"submit","recurseFrames":true}]},"TLCookie":{"enabled":true},"digitalData":{"enabled":true,"events":[{"name":"load","target":"window"}]},"sendDatalayer":{"enabled":true}},"screenviewAutoDetect":true,"framesBlacklist":[]},"modules":{"performance":{"calculateRenderTime":true,"renderTimeThreshold":600000,"filter":{"navigationStart":true,"unloadEventStart":true,"unloadEventEnd":true,"redirectStart":true,"redirectEnd":true,"fetchStart":true,"domainLookupStart":true,"domainLookupEnd":true,"connectStart":true,"connectEnd":true,"secureConnectionStart":true,"requestStart":true,"responseStart":true,"responseEnd":true,"domLoading":true,"domInteractive":true,"domContentLoadedEventStart":true,"domContentLoadedEventEnd":true,"domComplete":true,"loadEventStart":true,"loadEventEnd":true}},"geolocation":{"enabled":false,"triggers":[{"event":"load"}]},"replay":{"domCapture":{"enabled":true,"triggers":[{"event":"click"},{"event":"change"},{"event":"load","delay":500}]}},"TLCookie":{"appCookieWhitelist":[{"regex":".*"}],"tlAppKey":"15b797f002a84b868423bafed078e3f1"}}};var legacyIE=false;if(document.documentMode===8){legacyIE=true;}
if(document.documentMode===9){config.modules.replay.domCapture.enabled=false;config.services.domCapture.diffEnabled=false;}
if(document.documentMode===10){config.services.domCapture.diffEnabled=false;config.modules.replay.domCapture.triggers=[{event:"change"},{event:"load"}];}
if(typeof window.TLT!=="undefined"&&typeof window.TLT.isInitialized==="function"&&!(TLT.isInitialized())&&typeof config==="object"&&legacyIE===false){window.TLT.init(config);}}());}};utag.o[loader].loader.LOAD(id);})("507","nh-hoteles.es-main-2014");}catch(error){utag.DB(error);}
