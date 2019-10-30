(function() {'use strict';
var f = {initialConfig:window.duetto, s:window.duetto_overrides || {}, F:!1, host:("https:" == document.location.protocol ? "https://" : "http://") + "capture.duettoresearch.com"};
f.initialConfig && (f.queue = f.initialConfig.queue);
window.duetto = f;
f.c = {g:function(a) {
  var d = window;
  a = a.split(".");
  var b = a.length, c;
  for (c = 0; c < b; c++) {
    var h = a[c];
    void 0 === d[h] && (d[h] = {});
    d = d[h];
  }
}, apply:function(a, d) {
  var b = null;
  for (b in d) {
    d.hasOwnProperty(b) && (a[b] = d[b]);
  }
  return a;
}, C:function() {
  function a() {
    var a = null;
    if (window.XDomainRequest) {
      a = new XDomainRequest;
    } else {
      if (window.XMLHttpRequest) {
        a = new XMLHttpRequest;
      } else {
        var c;
        for (c = 0; c < d.length; c++) {
          try {
            a = new ActiveXObject(d[c]);
            break;
          } catch (h) {
          }
        }
      }
    }
    return a;
  }
  var d = ["Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.6.0"];
  return function(d, c, h) {
    h = h || {};
    var b = a();
    try {
      if (b) {
        b.open("POST", d, !0 !== h.sync);
        window.XDomainRequest && b instanceof XDomainRequest || b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var k = setTimeout(function() {
          b.abort();
        }, 3000);
        b.onreadystatechange = function() {
          4 == b.readyState && clearTimeout(k);
        };
        b.send(c);
      }
    } catch (r) {
    }
    return b;
  };
}(), encode:function() {
  function a(a) {
    b.lastIndex = 0;
    return b.test(a) ? '"' + a.replace(b, function(a) {
      var d = g[a];
      return "string" === typeof d ? d : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function d(b, g) {
    var k, p = c;
    g = g[b];
    switch(typeof g) {
      case "string":
        return a(g);
      case "number":
        return isFinite(g) ? String(g) : "null";
      case "boolean":
      case "null":
        return String(g);
      case "object":
        if (!g) {
          return "null";
        }
        c += h;
        b = [];
        if ("[object Array]" === Object.prototype.toString.apply(g)) {
          var e = g.length;
          for (k = 0; k < e; k += 1) {
            b[k] = d(k, g) || "null";
          }
          e = 0 === b.length ? "[]" : c ? "[\n" + c + b.join(",\n" + c) + "\n" + p + "]" : "[" + b.join(",") + "]";
          c = p;
          return e;
        }
        for (k in g) {
          Object.prototype.hasOwnProperty.call(g, k) && (e = d(k, g)) && b.push(a(k) + (c ? ": " : ":") + e);
        }
        e = 0 === b.length ? "{}" : c ? "{\n" + c + b.join(",\n" + c) + "\n" + p + "}" : "{" + b.join(",") + "}";
        c = p;
        return e;
    }
  }
  var b = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, c, h, g = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"};
  return function(a) {
    h = c = "";
    return d("", {"":a});
  };
}(), X:function(a, d, b) {
  return function() {
    var c;
    a && (c = a.call(b || this));
    d && (c = d.call(b || this, c));
    return c;
  };
}, addListener:function() {
  var a = window;
  return a.addEventListener ? function(a, b, c) {
    a.addEventListener(b, c, !1);
  } : a.attachEvent ? function(a, b, c) {
    a.attachEvent("on" + b, c);
  } : function() {
  };
}(), i:function(a, d) {
  d = d || document;
  return window.jQuery ? window.jQuery(a, d) : window.$ ? window.$(a, d) : d.querySelectorAll(a);
}, select:function(a, d) {
  return (a = f.c.i(a, d)) && 0 < a.length ? a[0] : null;
}, N:function(a, d, b) {
  for (; a != b;) {
    if (-1 < a.className.indexOf(d)) {
      return a;
    }
    a = a.parentNode;
  }
  return null;
}, U:function(a, d, b, c, h, g) {
  var k = "";
  b = b ? ";path\x3d" + b : "";
  c = c ? ";domain\x3d" + c : "";
  g = g ? ";Secure" : "";
  h && (k = new Date, k.setTime(k.getTime() + 864E5 * h), k = ";expires\x3d" + k.toGMTString());
  document.cookie = a + "\x3d" + d + k + c + b + g;
}, P:function(a) {
  var d = document.cookie.split(";"), b = d.length, c;
  for (c = 0; c < b; c++) {
    var h = d[c];
    h = h.split("\x3d");
    var g = f.c.trim(h[0]);
    if (a == g) {
      if (0 < h.length) {
        return h[1];
      }
      break;
    }
  }
  return null;
}, trim:function(a) {
  return a.replace(/^[\s\n\t]+|[\s\n\t]+$/g, "");
}, l:function(a) {
  var d = [], b;
  for (b in a) {
    a.hasOwnProperty(b) && void 0 !== a[b] && d.push(b + "\x3d" + encodeURIComponent(a[b]));
  }
  return d.join("\x26");
}};
f.Util = f.c;
f.c.trim = f.c.trim;
f.c.findParentNode = f.c.N;
f.c.select = f.c.select;
f.c.selectAll = f.c.i;
f.c.makeQueryString = f.c.l;
f.f = {};
f.c.g("duetto.logging");
f.f.G = {log:function() {
}};
f.c.g("duetto.Logger");
function B(a, d) {
  this.m = a || f.f.G;
  this.J = d;
}
B.prototype = {log:function(a, d) {
  a = f.c.apply(a, this.J);
  this.m.log(a, d);
}};
f.f.W = {};
f.c.g("duetto.logging");
f.f.L = function(a) {
  window.console && console.log(a);
};
f.f.D = function(a, d) {
  var b = {}, c;
  (c = a instanceof Array ? a[0].a : a.a) && (b.a = c);
  c = ["p", 0, "\x3d", ""];
  var h = [];
  if (a instanceof Array) {
    var g;
    for (g = 0; g < a.length; g++) {
      c[1] = g, c[3] = encodeURIComponent(f.c.encode(a[g])), h.push(c.join(""));
    }
    a = h.join("\x26");
  } else {
    c[3] = f.c.encode(a || "null"), a = c.join("");
  }
  a += "\x26t\x3d-1790425467\x26r\x3d" + (new Date).getTime();
  a += "\x26" + f.c.l(b);
  return {Y:f.c.C(d, a, {sync:!1}), Z:a};
};
f.f.M = function(a, d, b) {
  var c, h = [];
  for (c = 0; c < a.length; c++) {
    var g = a[c];
    g = f.c.l({location:b, arrival:g.sd, departure:g.ed, roomTypeCode:g.rt, rateCode:g.rc, appId:d, bookingId:g.b, rate:g.r, currencyCode:g.cc, numAdults:g.na, numChildren:g.nc, duettoId:g.u});
    f.c.C("https://dre.duettoresearch.com/v1/booking?" + g, null, {sync:!1});
    h.push(g);
  }
};
f.f.v = {T:1000, S:500};
f.f.R = function(a, d) {
  function b(a, b) {
    var c = d, e = ["p", 0, "\x3d", ""], g = [], h;
    for (h = 0; h < a.length; h++) {
      e[1] = h, e[3] = a[h], g.push(e.join(""));
    }
    c += "?" + g.join("\x26") + "\x26r\x3d" + (new Date).getTime();
    c += "\x26t\x3d-1790425467";
    b && (c += "\x26a\x3d" + b);
    return (new Image).src = c;
  }
  var c = f.f.v.T, h = f.f.v.S, g = a.length, k = [], r = 0, w = [], p = [];
  var e = f.F ? function(a, c) {
    w.push(b(a, c));
  } : b;
  var m = 0;
  for (m = 0; m < g; m++) {
    var x = a[m];
    var l = l || x.a;
    var v = encodeURIComponent(f.c.encode(x));
    var t = v.length;
    t < h ? r + t < c ? (k.push(v), r += t) : (0 < r && e(k, l), k = [v], r = t) : p.push(x);
  }
  0 < r && e(k, l);
  0 < p.length && f.f.D(p, d);
  if (f.F) {
    return w;
  }
};
f.c.g("duetto.logging");
function C(a) {
  a = a || {};
  this.w = a.pollInterval || 200;
  this.I = a.batchSize || 10;
  this.K = a.maxQueueSize || 100;
  this.B = a.sendFunction || f.f.L;
  this.j = [];
  this.o = null;
}
function E(a) {
  !a.o && 0 < a.w && (a.o = setTimeout(function() {
    var d = a.j.splice(0, a.I);
    a.B.call(a, d);
    a.o = null;
    0 < a.j.length && E(a);
  }, a.w));
}
C.prototype = {log:function(a, d) {
  d = d || {};
  !0 === d.force ? this.B.call(this, [a]) : this.j.length < this.K && (this.j.push(a), E(this));
}};
f.c.g("duetto.logging");
function F(a) {
  this.A = a;
}
F.prototype = {log:function(a, d) {
  var b;
  for (b = 0; b < this.A.length; b++) {
    this.A[b].log(a, d);
  }
}};
f.c.g("duetto.logging");
function G(a, d) {
  this.H = a;
  this.m = d;
}
G.prototype = {log:function(a, d) {
  !0 === this.H(a) && this.m.log(a, d);
}};
(function() {
  function a(a, b) {
    var q = b.length, c;
    for (c = 0; c < q; c++) {
      var e = b[c];
      var d = e[0];
      e = e[1];
      e instanceof Function && (e = e.call());
      null !== e && void 0 !== e && (a[d] = e);
    }
    return a;
  }
  function d(a, e, b) {
    function q(a) {
      (a = b.call(this, a)) && u.log(a);
    }
    var c = a.length, d = 0;
    for (d = 0; d < c; d++) {
      var g = a[d];
      f.c.addListener(g, e, q);
    }
  }
  function b(a) {
    return a instanceof Function ? a() ? !0 : !1 : f.c.select(a) ? !0 : !1;
  }
  function c(a, e, b) {
    b = b || 0;
    if (b >= x.maxWaitForRetries) {
      return !1;
    }
    var c = a.waitFor ? a.waitFor instanceof Function ? a.waitFor() : f.c.select(a.waitFor) ? !0 : !1 : !0;
    c || (b++, setTimeout(function() {
      e(a, b);
    }, 100));
    return c;
  }
  function h(a, d) {
    function q(a) {
      var b = f.c.apply({}, n);
      f.c.apply(b, a);
      k.push(b);
    }
    var g = 0;
    g = 0;
    var n = {t:"d"}, k = [];
    if (b(a.sel) && c(a, h, d)) {
      e.dateScrapeFn && f.c.apply(n, e.dateScrapeFn.call(e, "d"));
      if (a.fn) {
        if (a = a.fn.call(e), a instanceof Array) {
          for (g = 0; g < a.length; g++) {
            q(a[g]);
          }
        } else {
          q(a);
        }
      } else {
        k.push(n);
      }
      for (g = 0; g < k.length; g++) {
        u.log(k[g]);
      }
    }
  }
  function g(a, n) {
    var q = a.listeners, h = a.fn;
    if (b(a.sel) && c(a, g, n) && (a = function() {
      var a = h.call();
      a && (a.t = "s", e.dateScrapeFn && f.c.apply(a, e.dateScrapeFn.call(e, "s")));
      return a;
    }, (n = a.call()) && u.log(n), q)) {
      var k = q.length, l = 0;
      for (l = 0; l < k; l++) {
        var m = q[l];
        n = f.c.i(m.sel);
        d(n, m.event, a);
      }
    }
  }
  function k(a, g) {
    var q = a.quotesSel, h = a.scrapeRoomFn, n = a.listeners, l = a.properties;
    if (b(a.sel) && c(a, k, g)) {
      var m = function(a) {
        var b = {t:"q", qq:[]}, c = !1, d = f.c.i(q);
        if (d) {
          var g = d.length;
          var n;
          for (n = 0; n < g; n++) {
            var k = d[n];
            if (k = h.call(e, k, a)) {
              k instanceof Array ? b.qq = b.qq.concat(k) : b.qq.push(k), c = !0;
            }
          }
        }
        c && (e.dateScrapeFn && f.c.apply(b, e.dateScrapeFn.call(e, "q")), l && (c = l, c instanceof Function && (c = l(a)), f.c.apply(b, c)), u.log(b));
      };
      m();
      if (n) {
        g = n.length;
        var p = function(a) {
          m(a);
        }, r = 0;
        for (r = 0; r < g; r++) {
          var t = n[r];
          a = f.c.i(t.sel);
          d(a, t.event, p);
        }
      }
    }
  }
  function r(a, g) {
    function q() {
      var a = f.c.select(k);
      if (a && (a = n.call(e, a))) {
        var b = {t:"q", qq:[a]};
        f.c.apply(b, e.dateScrapeFn.call(e, "q"));
      }
      b && u.log(b);
    }
    var h = a.listeners, k = a.quoteNodeSel, n = a.scrapeRoomFn;
    if (b(a.sel) && c(a, r, g) && (q(), h)) {
      g = h.length;
      var l = function() {
        q();
      }, m = 0;
      for (m = 0; m < g; m++) {
        var p = h[m];
        a = f.c.i(p.sel);
        d(a, p.event, l);
      }
    }
  }
  function w(a, d) {
    var g = a.scrapeBookFn;
    if (b(a.sel) && c(a, w, d) && (a = g.call(e))) {
      for (d = {t:"b"}, e.dateScrapeFn && f.c.apply(d, e.dateScrapeFn.call(e, "b")), a instanceof Array || (a = [a]), g = 0; g < a.length; g++) {
        var h = f.c.apply({}, d);
        f.c.apply(h, a[g]);
        u.log(h);
      }
    }
  }
  function p(a) {
    if (a instanceof Array) {
      var b;
      for (b = 0; b < a.length; b++) {
        u.log(a[b]);
      }
    } else {
      u.log(a);
    }
  }
  var e = f.initialConfig || {};
  e.properties = e.properties || [];
  var m = e.dre || {};
  m.properties = m.properties || [];
  m.warmSession = m.warmSession || e.dreWarmSession;
  var x = f.c.apply({maxWaitForRetries:10}, f.s.CaptureOverrides), l = a({}, e.properties), v = function() {
    var a = f.c.P("__duetto");
    if (!a) {
      a = window.location.host;
      var b = 0;
      if (0 === a.length) {
        a = b;
      } else {
        var c;
        for (c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          b = (b << 5) - b + d;
          b &= b;
        }
        a = 0 > b ? -1 * b : b;
      }
      a = a + 7 * (new Date).getTime() + 13 * Math.round(100000000000 * Math.random());
      a = a.toString();
      f.c.U("__duetto", a, "/", e.tld ? "." + e.tld : null, 800, !1);
    }
    return a;
  }();
  l.a = e.appId;
  l.u = v;
  var t = f.c.apply(a({}, e.properties), a({}, m.properties)), H = e && e.ajaxOnly ? f.f.D : f.f.R, y = [new C(f.c.apply({sendFunction:function(a) {
    H.call(this, a, f.host + "/receiver");
  }}, f.s.QueuedLogConstants))];
  if (m.recordBookings) {
    var z = new C(f.c.apply({sendFunction:function(a) {
      f.f.M.call(this, a, m.appId, t.h);
    }}, f.s.QueuedLogConstants));
    y.push(new G(function(a) {
      return "b" === a.t;
    }, z));
  }
  var u = new B(new F(y), l);
  e.search && g(e.search);
  e.multiQuote && k(e.multiQuote);
  e.noneAvailable && h(e.noneAvailable);
  e.singleQuote && r(e.singleQuote);
  e.booking && w(e.booking);
  e.events && p(e.events);
  e.queue && (p(e.queue), e.queue.length = 0, setInterval(function() {
    0 < e.queue.length && (p(e.queue), e.queue.length = 0);
  }, 500));
  if (e.idSync) {
    var D = {ADARA:{V:"https://tag.yieldoptimizer.com/ps/ps?t\x3di\x26p\x3d4284\x26uex\x3d" + v + "\x26si\x3d" + e.tld, O:"adaraId"}};
    for (l = l = 0; l < e.idSync.length; l++) {
      (new Image).src = D[e.idSync[l]].V;
    }
  }
  if (m.warmSession) {
    y = new Image;
    z = "https://dre.duettoresearch.com/v1/fyi/" + v;
    var A = {};
    t.lid && f.c.apply(A, {appId:m.appId, memberId:t.lid, location:t.h});
    if (e.idSync) {
      for (l = 0; l < e.idSync.length; l++) {
        A[D[e.idSync[l]].O] = v;
      }
    }
    z += "?" + f.c.l(A);
    y.src = z;
  }
})();
})();