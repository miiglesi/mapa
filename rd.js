!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Vue = e();
}(this, function() {
    "use strict";
    function t(t) {
        return void 0 === t || null === t;
    }
    function e(t) {
        return void 0 !== t && null !== t;
    }
    function n(t) {
        return !0 === t;
    }
    function r(t) {
        return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
    }
    function i(t) {
        return null !== t && "object" == typeof t;
    }
    function o(t) {
        return "[object Object]" === Nn.call(t);
    }
    function a(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
    }
    function s(t) {
        return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t);
    }
    function c(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
    }
    function u(t, e) {
        for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()];
        } : function(t) {
            return n[t];
        };
    }
    function l(t, e) {
        if (t.length) {
            var n = t.indexOf(e);
            if (n > -1) return t.splice(n, 1);
        }
    }
    function f(t, e) {
        return Mn.call(t, e);
    }
    function p(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n));
        };
    }
    function d(t, e) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
        }
        return n._length = t.length, n;
    }
    function v(t, e) {
        e = e || 0;
        for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
        return r;
    }
    function h(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
    }
    function m(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && h(e, t[n]);
        return e;
    }
    function y(t, e, n) {}
    function g(t, e) {
        if (t === e) return !0;
        var n = i(t), r = i(e);
        if (!n || !r) return !n && !r && String(t) === String(e);
        try {
            var o = Array.isArray(t), a = Array.isArray(e);
            if (o && a) return t.length === e.length && t.every(function(t, n) {
                return g(t, e[n]);
            });
            if (o || a) return !1;
            var s = Object.keys(t), c = Object.keys(e);
            return s.length === c.length && s.every(function(n) {
                return g(t[n], e[n]);
            });
        } catch (t) {
            return !1;
        }
    }
    function _(t, e) {
        for (var n = 0; n < t.length; n++) if (g(t[n], e)) return n;
        return -1;
    }
    function b(t) {
        var e = !1;
        return function() {
            e || (e = !0, t.apply(this, arguments));
        };
    }
    function $(t) {
        var e = (t + "").charCodeAt(0);
        return 36 === e || 95 === e;
    }
    function C(t, e, n, r) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        });
    }
    function w(t) {
        return "function" == typeof t && /native code/.test(t.toString());
    }
    function x(t) {
        return new mr(void 0, void 0, void 0, String(t));
    }
    function k(t, e) {
        var n = t.componentOptions, r = new mr(t.tag, t.data, t.children, t.text, t.elm, t.context, n, t.asyncFactory);
        return r.ns = t.ns, r.isStatic = t.isStatic, r.key = t.key, r.isComment = t.isComment, 
        r.fnContext = t.fnContext, r.fnOptions = t.fnOptions, r.fnScopeId = t.fnScopeId, 
        r.isCloned = !0, e && (t.children && (r.children = A(t.children, !0)), n && n.children && (n.children = A(n.children, !0))), 
        r;
    }
    function A(t, e) {
        for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = k(t[i], e);
        return r;
    }
    function O(t, e, n) {
        t.__proto__ = e;
    }
    function S(t, e, n) {
        for (var r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            C(t, o, e[o]);
        }
    }
    function T(t, e) {
        if (i(t) && !(t instanceof mr)) {
            var n;
            return f(t, "__ob__") && t.__ob__ instanceof wr ? n = t.__ob__ : Cr.shouldConvert && !ur() && (Array.isArray(t) || o(t)) && Object.isExtensible(t) && !t._isVue && (n = new wr(t)), 
            e && n && n.vmCount++, n;
        }
    }
    function E(t, e, n, r, i) {
        var o = new vr(), a = Object.getOwnPropertyDescriptor(t, e);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get, c = a && a.set, u = !i && T(n);
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var e = s ? s.call(t) : n;
                    return vr.target && (o.depend(), u && (u.dep.depend(), Array.isArray(e) && I(e))), 
                    e;
                },
                set: function(e) {
                    var r = s ? s.call(t) : n;
                    e === r || e != e && r != r || (c ? c.call(t, e) : n = e, u = !i && T(e), o.notify());
                }
            });
        }
    }
    function j(t, e, n) {
        if (Array.isArray(t) && a(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
        n;
        if (e in t && !(e in Object.prototype)) return t[e] = n, n;
        var r = t.__ob__;
        return t._isVue || r && r.vmCount ? n : r ? (E(r.value, e, n), r.dep.notify(), n) : (t[e] = n, 
        n);
    }
    function N(t, e) {
        if (Array.isArray(t) && a(e)) t.splice(e, 1); else {
            var n = t.__ob__;
            t._isVue || n && n.vmCount || f(t, e) && (delete t[e], n && n.dep.notify());
        }
    }
    function I(t) {
        for (var e = void 0, n = 0, r = t.length; n < r; n++) (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), 
        Array.isArray(e) && I(e);
    }
    function L(t, e) {
        if (!e) return t;
        for (var n, r, i, a = Object.keys(e), s = 0; s < a.length; s++) r = t[n = a[s]], 
        i = e[n], f(t, n) ? o(r) && o(i) && L(r, i) : j(t, n, i);
        return t;
    }
    function M(t, e, n) {
        return n ? function() {
            var r = "function" == typeof e ? e.call(n, n) : e, i = "function" == typeof t ? t.call(n, n) : t;
            return r ? L(r, i) : i;
        } : e ? t ? function() {
            return L("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
        } : e : t;
    }
    function D(t, e) {
        return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
    }
    function P(t, e, n, r) {
        var i = Object.create(t || null);
        return e ? h(i, e) : i;
    }
    function F(t, e, n) {
        function r(r) {
            var i = xr[r] || Or;
            u[r] = i(t[r], e[r], n, r);
        }
        "function" == typeof e && (e = e.options), function(t, e) {
            var n = t.props;
            if (n) {
                var r, i, a = {};
                if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (i = n[r]) && (a[Pn(i)] = {
                    type: null
                }); else if (o(n)) for (var s in n) i = n[s], a[Pn(s)] = o(i) ? i : {
                    type: i
                };
                t.props = a;
            }
        }(e), function(t, e) {
            var n = t.inject;
            if (n) {
                var r = t.inject = {};
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {
                    from: n[i]
                }; else if (o(n)) for (var a in n) {
                    var s = n[a];
                    r[a] = o(s) ? h({
                        from: a
                    }, s) : {
                        from: s
                    };
                }
            }
        }(e), function(t) {
            var e = t.directives;
            if (e) for (var n in e) {
                var r = e[n];
                "function" == typeof r && (e[n] = {
                    bind: r,
                    update: r
                });
            }
        }(e);
        var i = e.extends;
        if (i && (t = F(t, i, n)), e.mixins) for (var a = 0, s = e.mixins.length; a < s; a++) t = F(t, e.mixins[a], n);
        var c, u = {};
        for (c in t) r(c);
        for (c in e) f(t, c) || r(c);
        return u;
    }
    function R(t, e, n, r) {
        if ("string" == typeof n) {
            var i = t[e];
            if (f(i, n)) return i[n];
            var o = Pn(n);
            if (f(i, o)) return i[o];
            var a = Fn(o);
            if (f(i, a)) return i[a];
            return i[n] || i[o] || i[a];
        }
    }
    function H(t, e, n, r) {
        var i = e[t], o = !f(n, t), a = n[t];
        if (U(Boolean, i.type) && (o && !f(i, "default") ? a = !1 : U(String, i.type) || "" !== a && a !== Hn(t) || (a = !0)), 
        void 0 === a) {
            a = function(t, e, n) {
                if (!f(e, "default")) return;
                var r = e.default;
                if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                return "function" == typeof r && "Function" !== B(e.type) ? r.call(t) : r;
            }(r, i, t);
            var s = Cr.shouldConvert;
            Cr.shouldConvert = !0, T(a), Cr.shouldConvert = s;
        }
        return a;
    }
    function B(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
    }
    function U(t, e) {
        if (!Array.isArray(e)) return B(e) === B(t);
        for (var n = 0, r = e.length; n < r; n++) if (B(e[n]) === B(t)) return !0;
        return !1;
    }
    function V(t, e, n) {
        if (e) for (var r = e; r = r.$parent; ) {
            var i = r.$options.errorCaptured;
            if (i) for (var o = 0; o < i.length; o++) try {
                if (!1 === i[o].call(r, t, e, n)) return;
            } catch (t) {
                z(t, r, "errorCaptured hook");
            }
        }
        z(t, e, n);
    }
    function z(t, e, n) {
        if (Jn.errorHandler) try {
            return Jn.errorHandler.call(null, t, e, n);
        } catch (t) {
            K(t, null, "config.errorHandler");
        }
        K(t, e, n);
    }
    function K(t, e, n) {
        if (!Gn && !Zn || "undefined" == typeof console) throw t;
        console.error(t);
    }
    function J() {
        Tr = !1;
        var t = Sr.slice(0);
        Sr.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
    }
    function q(t, e) {
        var n;
        if (Sr.push(function() {
            if (t) try {
                t.call(e);
            } catch (t) {
                V(t, e, "nextTick");
            } else n && n(e);
        }), Tr || (Tr = !0, Er ? Ar() : kr()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
            n = t;
        });
    }
    function W(t) {
        G(t, Mr), Mr.clear();
    }
    function G(t, e) {
        var n, r, o = Array.isArray(t);
        if ((o || i(t)) && !Object.isFrozen(t)) {
            if (t.__ob__) {
                var a = t.__ob__.dep.id;
                if (e.has(a)) return;
                e.add(a);
            }
            if (o) for (n = t.length; n--; ) G(t[n], e); else for (n = (r = Object.keys(t)).length; n--; ) G(t[r[n]], e);
        }
    }
    function Z(t) {
        function e() {
            var t = arguments, n = e.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t);
        }
        return e.fns = t, e;
    }
    function X(e, n, r, i, o) {
        var a, s, c, u;
        for (a in e) s = e[a], c = n[a], u = Dr(a), t(s) || (t(c) ? (t(s.fns) && (s = e[a] = Z(s)), 
        r(u.name, s, u.once, u.capture, u.passive, u.params)) : s !== c && (c.fns = s, e[a] = c));
        for (a in n) t(e[a]) && i((u = Dr(a)).name, n[a], u.capture);
    }
    function Y(r, i, o) {
        function a() {
            o.apply(this, arguments), l(s.fns, a);
        }
        r instanceof mr && (r = r.data.hook || (r.data.hook = {}));
        var s, c = r[i];
        t(c) ? s = Z([ a ]) : e(c.fns) && n(c.merged) ? (s = c).fns.push(a) : s = Z([ c, a ]), 
        s.merged = !0, r[i] = s;
    }
    function Q(t, n, r, i, o) {
        if (e(n)) {
            if (f(n, r)) return t[r] = n[r], o || delete n[r], !0;
            if (f(n, i)) return t[r] = n[i], o || delete n[i], !0;
        }
        return !1;
    }
    function tt(t) {
        return e(t) && e(t.text) && function(t) {
            return !1 === t;
        }(t.isComment);
    }
    function et(i, o) {
        var a, s, c, u, l = [];
        for (a = 0; a < i.length; a++) t(s = i[a]) || "boolean" == typeof s || (u = l[c = l.length - 1], 
        Array.isArray(s) ? s.length > 0 && (tt((s = et(s, (o || "") + "_" + a))[0]) && tt(u) && (l[c] = x(u.text + s[0].text), 
        s.shift()), l.push.apply(l, s)) : r(s) ? tt(u) ? l[c] = x(u.text + s) : "" !== s && l.push(x(s)) : tt(s) && tt(u) ? l[c] = x(u.text + s.text) : (n(i._isVList) && e(s.tag) && t(s.key) && e(o) && (s.key = "__vlist" + o + "_" + a + "__"), 
        l.push(s)));
        return l;
    }
    function nt(t, e) {
        return (t.__esModule || fr && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
        i(t) ? e.extend(t) : t;
    }
    function rt(t) {
        return t.isComment && t.asyncFactory;
    }
    function it(t) {
        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (e(r) && (e(r.componentOptions) || rt(r))) return r;
        }
    }
    function ot(t, e, n) {
        n ? Lr.$once(t, e) : Lr.$on(t, e);
    }
    function at(t, e) {
        Lr.$off(t, e);
    }
    function st(t, e, n) {
        Lr = t, X(e, n || {}, ot, at), Lr = void 0;
    }
    function ct(t, e) {
        var n = {};
        if (!t) return n;
        for (var r = 0, i = t.length; r < i; r++) {
            var o = t[r], a = o.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot) (n.default || (n.default = [])).push(o); else {
                var s = a.slot, c = n[s] || (n[s] = []);
                "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
            }
        }
        for (var u in n) n[u].every(ut) && delete n[u];
        return n;
    }
    function ut(t) {
        return t.isComment && !t.asyncFactory || " " === t.text;
    }
    function lt(t, e) {
        e = e || {};
        for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? lt(t[n], e) : e[t[n].key] = t[n].fn;
        return e;
    }
    function ft(t) {
        for (;t && (t = t.$parent); ) if (t._inactive) return !0;
        return !1;
    }
    function pt(t, e) {
        if (e) {
            if (t._directInactive = !1, ft(t)) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++) pt(t.$children[n]);
            vt(t, "activated");
        }
    }
    function dt(t, e) {
        if (!(e && (t._directInactive = !0, ft(t)) || t._inactive)) {
            t._inactive = !0;
            for (var n = 0; n < t.$children.length; n++) dt(t.$children[n]);
            vt(t, "deactivated");
        }
    }
    function vt(t, e) {
        var n = t.$options[e];
        if (n) for (var r = 0, i = n.length; r < i; r++) try {
            n[r].call(t);
        } catch (n) {
            V(n, t, e + " hook");
        }
        t._hasHookEvent && t.$emit("hook:" + e);
    }
    function ht() {
        Ur = !0;
        var t, e;
        for (Fr.sort(function(t, e) {
            return t.id - e.id;
        }), Vr = 0; Vr < Fr.length; Vr++) e = (t = Fr[Vr]).id, Hr[e] = null, t.run();
        var n = Rr.slice(), r = Fr.slice();
        Vr = Fr.length = Rr.length = 0, Hr = {}, Br = Ur = !1, function(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, pt(t[e], !0);
        }(n), function(t) {
            var e = t.length;
            for (;e--; ) {
                var n = t[e], r = n.vm;
                r._watcher === n && r._isMounted && vt(r, "updated");
            }
        }(r), lr && Jn.devtools && lr.emit("flush");
    }
    function mt(t, e, n) {
        Jr.get = function() {
            return this[e][n];
        }, Jr.set = function(t) {
            this[e][n] = t;
        }, Object.defineProperty(t, n, Jr);
    }
    function yt(t) {
        t._watchers = [];
        var e = t.$options;
        e.props && function(t, e) {
            var n = t.$options.propsData || {}, r = t._props = {}, i = t.$options._propKeys = [], o = !t.$parent;
            Cr.shouldConvert = o;
            var a = function(o) {
                i.push(o);
                var a = H(o, e, n, t);
                E(r, o, a), o in t || mt(t, "_props", o);
            };
            for (var s in e) a(s);
            Cr.shouldConvert = !0;
        }(t, e.props), e.methods && function(t, e) {
            t.$options.props;
            for (var n in e) t[n] = null == e[n] ? y : d(e[n], t);
        }(t, e.methods), e.data ? function(t) {
            var e = t.$options.data;
            e = t._data = "function" == typeof e ? function(t, e) {
                try {
                    return t.call(e, e);
                } catch (t) {
                    return V(t, e, "data()"), {};
                }
            }(e, t) : e || {}, o(e) || (e = {});
            var n = Object.keys(e), r = t.$options.props, i = (t.$options.methods, n.length);
            for (;i--; ) {
                var a = n[i];
                r && f(r, a) || $(a) || mt(t, "_data", a);
            }
            T(e, !0);
        }(t) : T(t._data = {}, !0), e.computed && function(t, e) {
            var n = t._computedWatchers = Object.create(null), r = ur();
            for (var i in e) {
                var o = e[i], a = "function" == typeof o ? o : o.get;
                r || (n[i] = new Kr(t, a || y, y, qr)), i in t || gt(t, i, o);
            }
        }(t, e.computed), e.watch && e.watch !== ir && function(t, e) {
            for (var n in e) {
                var r = e[n];
                if (Array.isArray(r)) for (var i = 0; i < r.length; i++) bt(t, n, r[i]); else bt(t, n, r);
            }
        }(t, e.watch);
    }
    function gt(t, e, n) {
        var r = !ur();
        "function" == typeof n ? (Jr.get = r ? _t(e) : n, Jr.set = y) : (Jr.get = n.get ? r && !1 !== n.cache ? _t(e) : n.get : y, 
        Jr.set = n.set ? n.set : y), Object.defineProperty(t, e, Jr);
    }
    function _t(t) {
        return function() {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e) return e.dirty && e.evaluate(), vr.target && e.depend(), e.value;
        };
    }
    function bt(t, e, n, r) {
        return o(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
    }
    function $t(t, e) {
        if (t) {
            for (var n = Object.create(null), r = fr ? Reflect.ownKeys(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }) : Object.keys(t), i = 0; i < r.length; i++) {
                for (var o = r[i], a = t[o].from, s = e; s; ) {
                    if (s._provided && a in s._provided) {
                        n[o] = s._provided[a];
                        break;
                    }
                    s = s.$parent;
                }
                if (!s && "default" in t[o]) {
                    var c = t[o].default;
                    n[o] = "function" == typeof c ? c.call(e) : c;
                }
            }
            return n;
        }
    }
    function Ct(t, n) {
        var r, o, a, s, c;
        if (Array.isArray(t) || "string" == typeof t) for (r = new Array(t.length), o = 0, 
        a = t.length; o < a; o++) r[o] = n(t[o], o); else if ("number" == typeof t) for (r = new Array(t), 
        o = 0; o < t; o++) r[o] = n(o + 1, o); else if (i(t)) for (s = Object.keys(t), r = new Array(s.length), 
        o = 0, a = s.length; o < a; o++) c = s[o], r[o] = n(t[c], c, o);
        return e(r) && (r._isVList = !0), r;
    }
    function wt(t, e, n, r) {
        var i, o = this.$scopedSlots[t];
        if (o) n = n || {}, r && (n = h(h({}, r), n)), i = o(n) || e; else {
            var a = this.$slots[t];
            a && (a._rendered = !0), i = a || e;
        }
        var s = n && n.slot;
        return s ? this.$createElement("template", {
            slot: s
        }, i) : i;
    }
    function xt(t) {
        return R(this.$options, "filters", t) || Un;
    }
    function kt(t, e, n, r) {
        var i = Jn.keyCodes[e] || n;
        return i ? Array.isArray(i) ? -1 === i.indexOf(t) : i !== t : r ? Hn(r) !== e : void 0;
    }
    function At(t, e, n, r, o) {
        if (n) if (i(n)) {
            Array.isArray(n) && (n = m(n));
            var a, s = function(i) {
                if ("class" === i || "style" === i || Ln(i)) a = t; else {
                    var s = t.attrs && t.attrs.type;
                    a = r || Jn.mustUseProp(e, s, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                }
                if (!(i in a) && (a[i] = n[i], o)) {
                    (t.on || (t.on = {}))["update:" + i] = function(t) {
                        n[i] = t;
                    };
                }
            };
            for (var c in n) s(c);
        } else ;
        return t;
    }
    function Ot(t, e) {
        var n = this._staticTrees || (this._staticTrees = []), r = n[t];
        return r && !e ? Array.isArray(r) ? A(r) : k(r) : (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), 
        Tt(r, "__static__" + t, !1), r);
    }
    function St(t, e, n) {
        return Tt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
    }
    function Tt(t, e, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Et(t[r], e + "_" + r, n); else Et(t, e, n);
    }
    function Et(t, e, n) {
        t.isStatic = !0, t.key = e, t.isOnce = n;
    }
    function jt(t, e) {
        if (e) if (o(e)) {
            var n = t.on = t.on ? h({}, t.on) : {};
            for (var r in e) {
                var i = n[r], a = e[r];
                n[r] = i ? [].concat(i, a) : a;
            }
        } else ;
        return t;
    }
    function Nt(t) {
        t._o = St, t._n = c, t._s = s, t._l = Ct, t._t = wt, t._q = g, t._i = _, t._m = Ot, 
        t._f = xt, t._k = kt, t._b = At, t._v = x, t._e = gr, t._u = lt, t._g = jt;
    }
    function It(t, e, r, i, o) {
        var a = o.options;
        this.data = t, this.props = e, this.children = r, this.parent = i, this.listeners = t.on || jn, 
        this.injections = $t(a.inject, i), this.slots = function() {
            return ct(r, i);
        };
        var s = Object.create(i), c = n(a._compiled), u = !c;
        c && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || jn), 
        a._scopeId ? this._c = function(t, e, n, r) {
            var o = Dt(s, t, e, n, r, u);
            return o && (o.fnScopeId = a._scopeId, o.fnContext = i), o;
        } : this._c = function(t, e, n, r) {
            return Dt(s, t, e, n, r, u);
        };
    }
    function Lt(t, e) {
        for (var n in e) t[Pn(n)] = e[n];
    }
    function Mt(r, o, a, s, c) {
        if (!t(r)) {
            var u = a.$options._base;
            if (i(r) && (r = u.extend(r)), "function" == typeof r) {
                var l;
                if (t(r.cid) && (l = r, void 0 === (r = function(r, o, a) {
                    if (n(r.error) && e(r.errorComp)) return r.errorComp;
                    if (e(r.resolved)) return r.resolved;
                    if (n(r.loading) && e(r.loadingComp)) return r.loadingComp;
                    if (!e(r.contexts)) {
                        var s = r.contexts = [ a ], c = !0, u = function() {
                            for (var t = 0, e = s.length; t < e; t++) s[t].$forceUpdate();
                        }, l = b(function(t) {
                            r.resolved = nt(t, o), c || u();
                        }), f = b(function(t) {
                            e(r.errorComp) && (r.error = !0, u());
                        }), p = r(l, f);
                        return i(p) && ("function" == typeof p.then ? t(r.resolved) && p.then(l, f) : e(p.component) && "function" == typeof p.component.then && (p.component.then(l, f), 
                        e(p.error) && (r.errorComp = nt(p.error, o)), e(p.loading) && (r.loadingComp = nt(p.loading, o), 
                        0 === p.delay ? r.loading = !0 : setTimeout(function() {
                            t(r.resolved) && t(r.error) && (r.loading = !0, u());
                        }, p.delay || 200)), e(p.timeout) && setTimeout(function() {
                            t(r.resolved) && f(null);
                        }, p.timeout))), c = !1, r.loading ? r.loadingComp : r.resolved;
                    }
                    r.contexts.push(a);
                }(l, u, a)))) return function(t, e, n, r, i) {
                    var o = gr();
                    return o.asyncFactory = t, o.asyncMeta = {
                        data: e,
                        context: n,
                        children: r,
                        tag: i
                    }, o;
                }(l, o, a, s, c);
                o = o || {}, Ft(r), e(o.model) && function(t, n) {
                    var r = t.model && t.model.prop || "value", i = t.model && t.model.event || "input";
                    (n.props || (n.props = {}))[r] = n.model.value;
                    var o = n.on || (n.on = {});
                    e(o[i]) ? o[i] = [ n.model.callback ].concat(o[i]) : o[i] = n.model.callback;
                }(r.options, o);
                var f = function(n, r, i) {
                    var o = r.options.props;
                    if (!t(o)) {
                        var a = {}, s = n.attrs, c = n.props;
                        if (e(s) || e(c)) for (var u in o) {
                            var l = Hn(u);
                            Q(a, c, u, l, !0) || Q(a, s, u, l, !1);
                        }
                        return a;
                    }
                }(o, r);
                if (n(r.options.functional)) return function(t, n, r, i, o) {
                    var a = t.options, s = {}, c = a.props;
                    if (e(c)) for (var u in c) s[u] = H(u, c, n || jn); else e(r.attrs) && Lt(s, r.attrs), 
                    e(r.props) && Lt(s, r.props);
                    var l = new It(r, s, o, i, t), f = a.render.call(null, l._c, l);
                    return f instanceof mr && (f.fnContext = i, f.fnOptions = a, r.slot && ((f.data || (f.data = {})).slot = r.slot)), 
                    f;
                }(r, f, o, a, s);
                var p = o.on;
                if (o.on = o.nativeOn, n(r.options.abstract)) {
                    var d = o.slot;
                    o = {}, d && (o.slot = d);
                }
                !function(t) {
                    t.hook || (t.hook = {});
                    for (var e = 0; e < Gr.length; e++) {
                        var n = Gr[e], r = t.hook[n], i = Wr[n];
                        t.hook[n] = r ? function(t, e) {
                            return function(n, r, i, o) {
                                t(n, r, i, o), e(n, r, i, o);
                            };
                        }(i, r) : i;
                    }
                }(o);
                var v = r.options.name || c;
                return new mr("vue-component-" + r.cid + (v ? "-" + v : ""), o, void 0, void 0, void 0, a, {
                    Ctor: r,
                    propsData: f,
                    listeners: p,
                    tag: c,
                    children: s
                }, l);
            }
        }
    }
    function Dt(t, i, o, a, s, c) {
        return (Array.isArray(o) || r(o)) && (s = a, a = o, o = void 0), n(c) && (s = Xr), 
        function(t, n, i, o, a) {
            if (e(i) && e(i.__ob__)) return gr();
            e(i) && e(i.is) && (n = i.is);
            if (!n) return gr();
            Array.isArray(o) && "function" == typeof o[0] && ((i = i || {}).scopedSlots = {
                default: o[0]
            }, o.length = 0);
            a === Xr ? o = function(t) {
                return r(t) ? [ x(t) ] : Array.isArray(t) ? et(t) : void 0;
            }(o) : a === Zr && (o = function(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t;
            }(o));
            var s, c;
            if ("string" == typeof n) {
                var u;
                c = t.$vnode && t.$vnode.ns || Jn.getTagNamespace(n), s = Jn.isReservedTag(n) ? new mr(Jn.parsePlatformTagName(n), i, o, void 0, void 0, t) : e(u = R(t.$options, "components", n)) ? Mt(u, i, t, o, n) : new mr(n, i, o, void 0, void 0, t);
            } else s = Mt(n, i, t, o);
            return e(s) ? (c && Pt(s, c), s) : gr();
        }(t, i, o, a, s);
    }
    function Pt(r, i, o) {
        if (r.ns = i, "foreignObject" === r.tag && (i = void 0, o = !0), e(r.children)) for (var a = 0, s = r.children.length; a < s; a++) {
            var c = r.children[a];
            e(c.tag) && (t(c.ns) || n(o)) && Pt(c, i, o);
        }
    }
    function Ft(t) {
        var e = t.options;
        if (t.super) {
            var n = Ft(t.super);
            if (n !== t.superOptions) {
                t.superOptions = n;
                var r = function(t) {
                    var e, n = t.options, r = t.extendOptions, i = t.sealedOptions;
                    for (var o in n) n[o] !== i[o] && (e || (e = {}), e[o] = function(t, e, n) {
                        {
                            if (Array.isArray(t)) {
                                var r = [];
                                n = Array.isArray(n) ? n : [ n ], e = Array.isArray(e) ? e : [ e ];
                                for (var i = 0; i < t.length; i++) (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
                                return r;
                            }
                            return t;
                        }
                    }(n[o], r[o], i[o]));
                    return e;
                }(t);
                r && h(t.extendOptions, r), (e = t.options = F(n, t.extendOptions)).name && (e.components[e.name] = t);
            }
        }
        return e;
    }
    function Rt(t) {
        this._init(t);
    }
    function Ht(t) {
        t.cid = 0;
        var e = 1;
        t.extend = function(t) {
            t = t || {};
            var n = this, r = n.cid, i = t._Ctor || (t._Ctor = {});
            if (i[r]) return i[r];
            var o = t.name || n.options.name, a = function(t) {
                this._init(t);
            };
            return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, 
            a.options = F(n.options, t), a.super = n, a.options.props && function(t) {
                var e = t.options.props;
                for (var n in e) mt(t.prototype, "_props", n);
            }(a), a.options.computed && function(t) {
                var e = t.options.computed;
                for (var n in e) gt(t.prototype, n, e[n]);
            }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, zn.forEach(function(t) {
                a[t] = n[t];
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, 
            a.sealedOptions = h({}, a.options), i[r] = a, a;
        };
    }
    function Bt(t) {
        return t && (t.Ctor.options.name || t.tag);
    }
    function Ut(t, e) {
        return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!function(t) {
            return "[object RegExp]" === Nn.call(t);
        }(t) && t.test(e);
    }
    function Vt(t, e) {
        var n = t.cache, r = t.keys, i = t._vnode;
        for (var o in n) {
            var a = n[o];
            if (a) {
                var s = Bt(a.componentOptions);
                s && !e(s) && zt(n, o, r, i);
            }
        }
    }
    function zt(t, e, n, r) {
        var i = t[e];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, l(n, e);
    }
    function Kt(t) {
        for (var n = t.data, r = t, i = t; e(i.componentInstance); ) (i = i.componentInstance._vnode) && i.data && (n = Jt(i.data, n));
        for (;e(r = r.parent); ) r && r.data && (n = Jt(n, r.data));
        return function(t, n) {
            if (e(t) || e(n)) return qt(t, Wt(n));
            return "";
        }(n.staticClass, n.class);
    }
    function Jt(t, n) {
        return {
            staticClass: qt(t.staticClass, n.staticClass),
            class: e(t.class) ? [ t.class, n.class ] : n.class
        };
    }
    function qt(t, e) {
        return t ? e ? t + " " + e : t : e || "";
    }
    function Wt(t) {
        return Array.isArray(t) ? function(t) {
            for (var n, r = "", i = 0, o = t.length; i < o; i++) e(n = Wt(t[i])) && "" !== n && (r && (r += " "), 
            r += n);
            return r;
        }(t) : i(t) ? function(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e;
        }(t) : "string" == typeof t ? t : "";
    }
    function Gt(t) {
        return bi(t) ? "svg" : "math" === t ? "math" : void 0;
    }
    function Zt(t) {
        if ("string" == typeof t) {
            var e = document.querySelector(t);
            return e || document.createElement("div");
        }
        return t;
    }
    function Xt(t, e) {
        var n = t.data.ref;
        if (n) {
            var r = t.context, i = t.componentInstance || t.elm, o = r.$refs;
            e ? Array.isArray(o[n]) ? l(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [ i ] : o[n] = i;
        }
    }
    function Yt(r, i) {
        return r.key === i.key && (r.tag === i.tag && r.isComment === i.isComment && e(r.data) === e(i.data) && function(t, n) {
            if ("input" !== t.tag) return !0;
            var r, i = e(r = t.data) && e(r = r.attrs) && r.type, o = e(r = n.data) && e(r = r.attrs) && r.type;
            return i === o || wi(i) && wi(o);
        }(r, i) || n(r.isAsyncPlaceholder) && r.asyncFactory === i.asyncFactory && t(i.asyncFactory.error));
    }
    function Qt(t, n, r) {
        var i, o, a = {};
        for (i = n; i <= r; ++i) e(o = t[i].key) && (a[o] = i);
        return a;
    }
    function te(t, e) {
        (t.data.directives || e.data.directives) && function(t, e) {
            var n, r, i, o = t === Ai, a = e === Ai, s = ee(t.data.directives, t.context), c = ee(e.data.directives, e.context), u = [], l = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, ne(i, "update", e, t), 
            i.def && i.def.componentUpdated && l.push(i)) : (ne(i, "bind", e, t), i.def && i.def.inserted && u.push(i));
            if (u.length) {
                var f = function() {
                    for (var n = 0; n < u.length; n++) ne(u[n], "inserted", e, t);
                };
                o ? Y(e, "insert", f) : f();
            }
            l.length && Y(e, "postpatch", function() {
                for (var n = 0; n < l.length; n++) ne(l[n], "componentUpdated", e, t);
            });
            if (!o) for (n in s) c[n] || ne(s[n], "unbind", t, t, a);
        }(t, e);
    }
    function ee(t, e) {
        var n = Object.create(null);
        if (!t) return n;
        var r, i;
        for (r = 0; r < t.length; r++) (i = t[r]).modifiers || (i.modifiers = Ti), n[function(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
        }(i)] = i, i.def = R(e.$options, "directives", i.name);
        return n;
    }
    function ne(t, e, n, r, i) {
        var o = t.def && t.def[e];
        if (o) try {
            o(n.elm, t, n, r, i);
        } catch (r) {
            V(r, n.context, "directive " + t.name + " " + e + " hook");
        }
    }
    function re(n, r) {
        var i = r.componentOptions;
        if (!(e(i) && !1 === i.Ctor.options.inheritAttrs || t(n.data.attrs) && t(r.data.attrs))) {
            var o, a, s = r.elm, c = n.data.attrs || {}, u = r.data.attrs || {};
            e(u.__ob__) && (u = r.data.attrs = h({}, u));
            for (o in u) a = u[o], c[o] !== a && ie(s, o, a);
            (Qn || er) && u.value !== c.value && ie(s, "value", u.value);
            for (o in c) t(u[o]) && (hi(o) ? s.removeAttributeNS(vi, mi(o)) : pi(o) || s.removeAttribute(o));
        }
    }
    function ie(t, e, n) {
        if (di(e)) yi(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, 
        t.setAttribute(e, n)); else if (pi(e)) t.setAttribute(e, yi(n) || "false" === n ? "false" : "true"); else if (hi(e)) yi(n) ? t.removeAttributeNS(vi, mi(e)) : t.setAttributeNS(vi, e, n); else if (yi(n)) t.removeAttribute(e); else {
            if (Qn && !tr && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                var r = function(e) {
                    e.stopImmediatePropagation(), t.removeEventListener("input", r);
                };
                t.addEventListener("input", r), t.__ieph = !0;
            }
            t.setAttribute(e, n);
        }
    }
    function oe(n, r) {
        var i = r.elm, o = r.data, a = n.data;
        if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
            var s = Kt(r), c = i._transitionClasses;
            e(c) && (s = qt(s, Wt(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s);
        }
    }
    function ae(t) {
        function e() {
            (a || (a = [])).push(t.slice(v, i).trim()), v = i + 1;
        }
        var n, r, i, o, a, s = !1, c = !1, u = !1, l = !1, f = 0, p = 0, d = 0, v = 0;
        for (i = 0; i < t.length; i++) if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1); else if (c) 34 === n && 92 !== r && (c = !1); else if (u) 96 === n && 92 !== r && (u = !1); else if (l) 47 === n && 92 !== r && (l = !1); else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || p || d) {
            switch (n) {
              case 34:
                c = !0;
                break;

              case 39:
                s = !0;
                break;

              case 96:
                u = !0;
                break;

              case 40:
                d++;
                break;

              case 41:
                d--;
                break;

              case 91:
                p++;
                break;

              case 93:
                p--;
                break;

              case 123:
                f++;
                break;

              case 125:
                f--;
            }
            if (47 === n) {
                for (var h = i - 1, m = void 0; h >= 0 && " " === (m = t.charAt(h)); h--) ;
                m && Ii.test(m) || (l = !0);
            }
        } else void 0 === o ? (v = i + 1, o = t.slice(0, i).trim()) : e();
        if (void 0 === o ? o = t.slice(0, i).trim() : 0 !== v && e(), a) for (i = 0; i < a.length; i++) o = function(t, e) {
            var n = e.indexOf("(");
            {
                if (n < 0) return '_f("' + e + '")(' + t + ")";
                var r = e.slice(0, n), i = e.slice(n + 1);
                return '_f("' + r + '")(' + t + "," + i;
            }
        }(o, a[i]);
        return o;
    }
    function se(t) {
        console.error("[Vue compiler]: " + t);
    }
    function ce(t, e) {
        return t ? t.map(function(t) {
            return t[e];
        }).filter(function(t) {
            return t;
        }) : [];
    }
    function ue(t, e, n) {
        (t.props || (t.props = [])).push({
            name: e,
            value: n
        }), t.plain = !1;
    }
    function le(t, e, n) {
        (t.attrs || (t.attrs = [])).push({
            name: e,
            value: n
        }), t.plain = !1;
    }
    function fe(t, e, n) {
        t.attrsMap[e] = n, t.attrsList.push({
            name: e,
            value: n
        });
    }
    function pe(t, e, n, r, i, o) {
        (t.directives || (t.directives = [])).push({
            name: e,
            rawName: n,
            value: r,
            arg: i,
            modifiers: o
        }), t.plain = !1;
    }
    function de(t, e, n, r, i, o) {
        (r = r || jn).capture && (delete r.capture, e = "!" + e), r.once && (delete r.once, 
        e = "~" + e), r.passive && (delete r.passive, e = "&" + e), "click" === e && (r.right ? (e = "contextmenu", 
        delete r.right) : r.middle && (e = "mouseup"));
        var a;
        r.native ? (delete r.native, a = t.nativeEvents || (t.nativeEvents = {})) : a = t.events || (t.events = {});
        var s = {
            value: n
        };
        r !== jn && (s.modifiers = r);
        var c = a[e];
        Array.isArray(c) ? i ? c.unshift(s) : c.push(s) : a[e] = c ? i ? [ s, c ] : [ c, s ] : s, 
        t.plain = !1;
    }
    function ve(t, e, n) {
        var r = he(t, ":" + e) || he(t, "v-bind:" + e);
        if (null != r) return ae(r);
        if (!1 !== n) {
            var i = he(t, e);
            if (null != i) return JSON.stringify(i);
        }
    }
    function he(t, e, n) {
        var r;
        if (null != (r = t.attrsMap[e])) for (var i = t.attrsList, o = 0, a = i.length; o < a; o++) if (i[o].name === e) {
            i.splice(o, 1);
            break;
        }
        return n && delete t.attrsMap[e], r;
    }
    function me(t, e, n) {
        var r = n || {}, i = "$$v";
        r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), r.number && (i = "_n(" + i + ")");
        var o = ye(e, i);
        t.model = {
            value: "(" + e + ")",
            expression: '"' + e + '"',
            callback: "function ($$v) {" + o + "}"
        };
    }
    function ye(t, e) {
        var n = function(t) {
            if (ei = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < ei - 1) return (ii = t.lastIndexOf(".")) > -1 ? {
                exp: t.slice(0, ii),
                key: '"' + t.slice(ii + 1) + '"'
            } : {
                exp: t,
                key: null
            };
            ni = t, ii = oi = ai = 0;
            for (;!_e(); ) be(ri = ge()) ? $e(ri) : 91 === ri && function(t) {
                var e = 1;
                oi = ii;
                for (;!_e(); ) if (t = ge(), be(t)) $e(t); else if (91 === t && e++, 93 === t && e--, 
                0 === e) {
                    ai = ii;
                    break;
                }
            }(ri);
            return {
                exp: t.slice(0, oi),
                key: t.slice(oi + 1, ai)
            };
        }(t);
        return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")";
    }
    function ge() {
        return ni.charCodeAt(++ii);
    }
    function _e() {
        return ii >= ei;
    }
    function be(t) {
        return 34 === t || 39 === t;
    }
    function $e(t) {
        for (var e = t; !_e() && (t = ge()) !== e; ) ;
    }
    function Ce(t, e, n, r, i) {
        e = function(t) {
            return t._withTask || (t._withTask = function() {
                Er = !0;
                var e = t.apply(null, arguments);
                return Er = !1, e;
            });
        }(e), n && (e = function(t, e, n) {
            var r = si;
            return function i() {
                null !== t.apply(null, arguments) && we(e, i, n, r);
            };
        }(e, t, r)), si.addEventListener(t, e, or ? {
            capture: r,
            passive: i
        } : r);
    }
    function we(t, e, n, r) {
        (r || si).removeEventListener(t, e._withTask || e, n);
    }
    function xe(n, r) {
        if (!t(n.data.on) || !t(r.data.on)) {
            var i = r.data.on || {}, o = n.data.on || {};
            si = r.elm, function(t) {
                if (e(t[Li])) {
                    var n = Qn ? "change" : "input";
                    t[n] = [].concat(t[Li], t[n] || []), delete t[Li];
                }
                e(t[Mi]) && (t.change = [].concat(t[Mi], t.change || []), delete t[Mi]);
            }(i), X(i, o, Ce, we, r.context), si = void 0;
        }
    }
    function ke(n, r) {
        if (!t(n.data.domProps) || !t(r.data.domProps)) {
            var i, o, a = r.elm, s = n.data.domProps || {}, u = r.data.domProps || {};
            e(u.__ob__) && (u = r.data.domProps = h({}, u));
            for (i in s) t(u[i]) && (a[i] = "");
            for (i in u) {
                if (o = u[i], "textContent" === i || "innerHTML" === i) {
                    if (r.children && (r.children.length = 0), o === s[i]) continue;
                    1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
                }
                if ("value" === i) {
                    a._value = o;
                    var l = t(o) ? "" : String(o);
                    (function(t, n) {
                        return !t.composing && ("OPTION" === t.tagName || function(t, e) {
                            var n = !0;
                            try {
                                n = document.activeElement !== t;
                            } catch (t) {}
                            return n && t.value !== e;
                        }(t, n) || function(t, n) {
                            var r = t.value, i = t._vModifiers;
                            if (e(i)) {
                                if (i.lazy) return !1;
                                if (i.number) return c(r) !== c(n);
                                if (i.trim) return r.trim() !== n.trim();
                            }
                            return r !== n;
                        }(t, n));
                    })(a, l) && (a.value = l);
                } else a[i] = o;
            }
        }
    }
    function Ae(t) {
        var e = Oe(t.style);
        return t.staticStyle ? h(t.staticStyle, e) : e;
    }
    function Oe(t) {
        return Array.isArray(t) ? m(t) : "string" == typeof t ? Fi(t) : t;
    }
    function Se(n, r) {
        var i = r.data, o = n.data;
        if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
            var a, s, c = r.elm, u = o.staticStyle, l = o.normalizedStyle || o.style || {}, f = u || l, p = Oe(r.data.style) || {};
            r.data.normalizedStyle = e(p.__ob__) ? h({}, p) : p;
            var d = function(t, e) {
                var n, r = {};
                if (e) for (var i = t; i.componentInstance; ) (i = i.componentInstance._vnode) && i.data && (n = Ae(i.data)) && h(r, n);
                (n = Ae(t.data)) && h(r, n);
                for (var o = t; o = o.parent; ) o.data && (n = Ae(o.data)) && h(r, n);
                return r;
            }(r, !0);
            for (s in f) t(d[s]) && Bi(c, s, "");
            for (s in d) (a = d[s]) !== f[s] && Bi(c, s, null == a ? "" : a);
        }
    }
    function Te(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.add(e);
        }) : t.classList.add(e); else {
            var n = " " + (t.getAttribute("class") || "") + " ";
            n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
        }
    }
    function Ee(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.remove(e);
        }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class"); else {
            for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
            (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
        }
    }
    function je(t) {
        if (t) {
            if ("object" == typeof t) {
                var e = {};
                return !1 !== t.css && h(e, Ki(t.name || "v")), h(e, t), e;
            }
            return "string" == typeof t ? Ki(t) : void 0;
        }
    }
    function Ne(t) {
        Qi(function() {
            Qi(t);
        });
    }
    function Ie(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e), Te(t, e));
    }
    function Le(t, e) {
        t._transitionClasses && l(t._transitionClasses, e), Ee(t, e);
    }
    function Me(t, e, n) {
        var r = De(t, e), i = r.type, o = r.timeout, a = r.propCount;
        if (!i) return n();
        var s = i === qi ? Zi : Yi, c = 0, u = function() {
            t.removeEventListener(s, l), n();
        }, l = function(e) {
            e.target === t && ++c >= a && u();
        };
        setTimeout(function() {
            c < a && u();
        }, o + 1), t.addEventListener(s, l);
    }
    function De(t, e) {
        var n, r = window.getComputedStyle(t), i = r[Gi + "Delay"].split(", "), o = r[Gi + "Duration"].split(", "), a = Pe(i, o), s = r[Xi + "Delay"].split(", "), c = r[Xi + "Duration"].split(", "), u = Pe(s, c), l = 0, f = 0;
        e === qi ? a > 0 && (n = qi, l = a, f = o.length) : e === Wi ? u > 0 && (n = Wi, 
        l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? qi : Wi : null) ? n === qi ? o.length : c.length : 0;
        return {
            type: n,
            timeout: l,
            propCount: f,
            hasTransform: n === qi && to.test(r[Gi + "Property"])
        };
    }
    function Pe(t, e) {
        for (;t.length < e.length; ) t = t.concat(t);
        return Math.max.apply(null, e.map(function(e, n) {
            return Fe(e) + Fe(t[n]);
        }));
    }
    function Fe(t) {
        return 1e3 * Number(t.slice(0, -1));
    }
    function Re(n, r) {
        var o = n.elm;
        e(o._leaveCb) && (o._leaveCb.cancelled = !0, o._leaveCb());
        var a = je(n.data.transition);
        if (!t(a) && !e(o._enterCb) && 1 === o.nodeType) {
            for (var s = a.css, u = a.type, l = a.enterClass, f = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, $ = a.beforeAppear, C = a.appear, w = a.afterAppear, x = a.appearCancelled, k = a.duration, A = Pr, O = Pr.$vnode; O && O.parent; ) A = (O = O.parent).context;
            var S = !A._isMounted || !n.isRootInsert;
            if (!S || C || "" === C) {
                var T = S && d ? d : l, E = S && h ? h : p, j = S && v ? v : f, N = S ? $ || m : m, I = S && "function" == typeof C ? C : y, L = S ? w || g : g, M = S ? x || _ : _, D = c(i(k) ? k.enter : k), P = !1 !== s && !tr, F = Ue(I), R = o._enterCb = b(function() {
                    P && (Le(o, j), Le(o, E)), R.cancelled ? (P && Le(o, T), M && M(o)) : L && L(o), 
                    o._enterCb = null;
                });
                n.data.show || Y(n, "insert", function() {
                    var t = o.parentNode, e = t && t._pending && t._pending[n.key];
                    e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), I && I(o, R);
                }), N && N(o), P && (Ie(o, T), Ie(o, E), Ne(function() {
                    Ie(o, j), Le(o, T), R.cancelled || F || (Be(D) ? setTimeout(R, D) : Me(o, u, R));
                })), n.data.show && (r && r(), I && I(o, R)), P || F || R();
            }
        }
    }
    function He(n, r) {
        function o() {
            x.cancelled || (n.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n), 
            v && v(a), $ && (Ie(a, f), Ie(a, d), Ne(function() {
                Ie(a, p), Le(a, f), x.cancelled || C || (Be(w) ? setTimeout(x, w) : Me(a, l, x));
            })), h && h(a, x), $ || C || x());
        }
        var a = n.elm;
        e(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());
        var s = je(n.data.transition);
        if (t(s) || 1 !== a.nodeType) return r();
        if (!e(a._leaveCb)) {
            var u = s.css, l = s.type, f = s.leaveClass, p = s.leaveToClass, d = s.leaveActiveClass, v = s.beforeLeave, h = s.leave, m = s.afterLeave, y = s.leaveCancelled, g = s.delayLeave, _ = s.duration, $ = !1 !== u && !tr, C = Ue(h), w = c(i(_) ? _.leave : _), x = a._leaveCb = b(function() {
                a.parentNode && a.parentNode._pending && (a.parentNode._pending[n.key] = null), 
                $ && (Le(a, p), Le(a, d)), x.cancelled ? ($ && Le(a, f), y && y(a)) : (r(), m && m(a)), 
                a._leaveCb = null;
            });
            g ? g(o) : o();
        }
    }
    function Be(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function Ue(n) {
        if (t(n)) return !1;
        var r = n.fns;
        return e(r) ? Ue(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1;
    }
    function Ve(t, e) {
        !0 !== e.data.show && Re(e);
    }
    function ze(t, e, n) {
        Ke(t, e, n), (Qn || er) && setTimeout(function() {
            Ke(t, e, n);
        }, 0);
    }
    function Ke(t, e, n) {
        var r = e.value, i = t.multiple;
        if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, c = t.options.length; s < c; s++) if (a = t.options[s], i) o = _(r, qe(a)) > -1, 
            a.selected !== o && (a.selected = o); else if (g(qe(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
            i || (t.selectedIndex = -1);
        }
    }
    function Je(t, e) {
        return e.every(function(e) {
            return !g(e, t);
        });
    }
    function qe(t) {
        return "_value" in t ? t._value : t.value;
    }
    function We(t) {
        t.target.composing = !0;
    }
    function Ge(t) {
        t.target.composing && (t.target.composing = !1, Ze(t.target, "input"));
    }
    function Ze(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }
    function Xe(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : Xe(t.componentInstance._vnode);
    }
    function Ye(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? Ye(it(e.children)) : t;
    }
    function Qe(t) {
        var e = {}, n = t.$options;
        for (var r in n.propsData) e[r] = t[r];
        var i = n._parentListeners;
        for (var o in i) e[Pn(o)] = i[o];
        return e;
    }
    function tn(t, e) {
        if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
            props: e.componentOptions.propsData
        });
    }
    function en(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }
    function nn(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
    }
    function rn(t) {
        var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, i = e.top - n.top;
        if (r || i) {
            t.data.moved = !0;
            var o = t.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
        }
    }
    function on(t, e) {
        var n = e ? zo : Vo;
        return t.replace(n, function(t) {
            return Uo[t];
        });
    }
    function an(t, e, n) {
        return {
            type: 1,
            tag: t,
            attrsList: e,
            attrsMap: function(t) {
                for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value;
                return e;
            }(e),
            parent: n,
            children: []
        };
    }
    function sn(t, e) {
        function n(t) {
            t.pre && (s = !1), Lo(t.tag) && (c = !1);
            for (var n = 0; n < Io.length; n++) Io[n](t, e);
        }
        To = e.warn || se, Lo = e.isPreTag || Bn, Mo = e.mustUseProp || Bn, Do = e.getTagNamespace || Bn, 
        jo = ce(e.modules, "transformNode"), No = ce(e.modules, "preTransformNode"), Io = ce(e.modules, "postTransformNode"), 
        Eo = e.delimiters;
        var r, i, o = [], a = !1 !== e.preserveWhitespace, s = !1, c = !1;
        return function(t, e) {
            function n(e) {
                l += e, t = t.substring(e);
            }
            function r(t, n, r) {
                var i, s;
                if (null == n && (n = l), null == r && (r = l), t && (s = t.toLowerCase()), t) for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--) ; else i = 0;
                if (i >= 0) {
                    for (var c = a.length - 1; c >= i; c--) e.end && e.end(a[c].tag, n, r);
                    a.length = i, o = i && a[i - 1].tag;
                } else "br" === s ? e.start && e.start(t, [], !0, n, r) : "p" === s && (e.start && e.start(t, [], !1, n, r), 
                e.end && e.end(t, n, r));
            }
            for (var i, o, a = [], s = e.expectHTML, c = e.isUnaryTag || Bn, u = e.canBeLeftOpenTag || Bn, l = 0; t; ) {
                if (i = t, o && Ho(o)) {
                    var f = 0, p = o.toLowerCase(), d = Bo[p] || (Bo[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")), v = t.replace(d, function(t, n, r) {
                        return f = r.length, Ho(p) || "noscript" === p || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), 
                        Jo(p, n) && (n = n.slice(1)), e.chars && e.chars(n), "";
                    });
                    l += t.length - v.length, t = v, r(p, l - f, l);
                } else {
                    var h = t.indexOf("<");
                    if (0 === h) {
                        if (Ao.test(t)) {
                            var m = t.indexOf("--\x3e");
                            if (m >= 0) {
                                e.shouldKeepComment && e.comment(t.substring(4, m)), n(m + 3);
                                continue;
                            }
                        }
                        if (Oo.test(t)) {
                            var y = t.indexOf("]>");
                            if (y >= 0) {
                                n(y + 2);
                                continue;
                            }
                        }
                        var g = t.match(ko);
                        if (g) {
                            n(g[0].length);
                            continue;
                        }
                        var _ = t.match(xo);
                        if (_) {
                            var b = l;
                            n(_[0].length), r(_[1], b, l);
                            continue;
                        }
                        var $ = function() {
                            var e = t.match(Co);
                            if (e) {
                                var r = {
                                    tagName: e[1],
                                    attrs: [],
                                    start: l
                                };
                                n(e[0].length);
                                for (var i, o; !(i = t.match(wo)) && (o = t.match(_o)); ) n(o[0].length), r.attrs.push(o);
                                if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r;
                            }
                        }();
                        if ($) {
                            !function(t) {
                                var n = t.tagName, i = t.unarySlash;
                                s && ("p" === o && go(n) && r(o), u(n) && o === n && r(n));
                                for (var l = c(n) || !!i, f = t.attrs.length, p = new Array(f), d = 0; d < f; d++) {
                                    var v = t.attrs[d];
                                    So && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3], "" === v[4] && delete v[4], 
                                    "" === v[5] && delete v[5]);
                                    var h = v[3] || v[4] || v[5] || "", m = "a" === n && "href" === v[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
                                    p[d] = {
                                        name: v[1],
                                        value: on(h, m)
                                    };
                                }
                                l || (a.push({
                                    tag: n,
                                    lowerCasedTag: n.toLowerCase(),
                                    attrs: p
                                }), o = n), e.start && e.start(n, p, l, t.start, t.end);
                            }($), Jo(o, t) && n(1);
                            continue;
                        }
                    }
                    var C = void 0, w = void 0, x = void 0;
                    if (h >= 0) {
                        for (w = t.slice(h); !(xo.test(w) || Co.test(w) || Ao.test(w) || Oo.test(w) || (x = w.indexOf("<", 1)) < 0); ) h += x, 
                        w = t.slice(h);
                        C = t.substring(0, h), n(h);
                    }
                    h < 0 && (C = t, t = ""), e.chars && C && e.chars(C);
                }
                if (t === i) {
                    e.chars && e.chars(t);
                    break;
                }
            }
            r();
        }(t, {
            warn: To,
            expectHTML: e.expectHTML,
            isUnaryTag: e.isUnaryTag,
            canBeLeftOpenTag: e.canBeLeftOpenTag,
            shouldDecodeNewlines: e.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
            shouldKeepComment: e.comments,
            start: function(t, a, u) {
                var l = i && i.ns || Do(t);
                Qn && "svg" === l && (a = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n];
                        na.test(r.name) || (r.name = r.name.replace(ra, ""), e.push(r));
                    }
                    return e;
                }(a));
                var f = an(t, a, i);
                l && (f.ns = l), function(t) {
                    return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type);
                }(f) && !ur() && (f.forbidden = !0);
                for (var p = 0; p < No.length; p++) f = No[p](f, e) || f;
                if (s || (!function(t) {
                    null != he(t, "v-pre") && (t.pre = !0);
                }(f), f.pre && (s = !0)), Lo(f.tag) && (c = !0), s ? function(t) {
                    var e = t.attrsList.length;
                    if (e) for (var n = t.attrs = new Array(e), r = 0; r < e; r++) n[r] = {
                        name: t.attrsList[r].name,
                        value: JSON.stringify(t.attrsList[r].value)
                    }; else t.pre || (t.plain = !0);
                }(f) : f.processed || (un(f), function(t) {
                    var e = he(t, "v-if");
                    if (e) t.if = e, ln(t, {
                        exp: e,
                        block: t
                    }); else {
                        null != he(t, "v-else") && (t.else = !0);
                        var n = he(t, "v-else-if");
                        n && (t.elseif = n);
                    }
                }(f), function(t) {
                    null != he(t, "v-once") && (t.once = !0);
                }(f), cn(f, e)), r ? o.length || r.if && (f.elseif || f.else) && ln(r, {
                    exp: f.elseif,
                    block: f
                }) : r = f, i && !f.forbidden) if (f.elseif || f.else) !function(t, e) {
                    var n = function(t) {
                        var e = t.length;
                        for (;e--; ) {
                            if (1 === t[e].type) return t[e];
                            t.pop();
                        }
                    }(e.children);
                    n && n.if && ln(n, {
                        exp: t.elseif,
                        block: t
                    });
                }(f, i); else if (f.slotScope) {
                    i.plain = !1;
                    var d = f.slotTarget || '"default"';
                    (i.scopedSlots || (i.scopedSlots = {}))[d] = f;
                } else i.children.push(f), f.parent = i;
                u ? n(f) : (i = f, o.push(f));
            },
            end: function() {
                var t = o[o.length - 1], e = t.children[t.children.length - 1];
                e && 3 === e.type && " " === e.text && !c && t.children.pop(), o.length -= 1, i = o[o.length - 1], 
                n(t);
            },
            chars: function(t) {
                if (i && (!Qn || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
                    var e = i.children;
                    if (t = c || t.trim() ? function(t) {
                        return "script" === t.tag || "style" === t.tag;
                    }(i) ? t : ea(t) : a && e.length ? " " : "") {
                        var n;
                        !s && " " !== t && (n = function(t, e) {
                            var n = e ? fo(e) : uo;
                            if (n.test(t)) {
                                for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(t); ) {
                                    (i = r.index) > c && (s.push(o = t.slice(c, i)), a.push(JSON.stringify(o)));
                                    var u = ae(r[1].trim());
                                    a.push("_s(" + u + ")"), s.push({
                                        "@binding": u
                                    }), c = i + r[0].length;
                                }
                                return c < t.length && (s.push(o = t.slice(c)), a.push(JSON.stringify(o))), {
                                    expression: a.join("+"),
                                    tokens: s
                                };
                            }
                        }(t, Eo)) ? e.push({
                            type: 2,
                            expression: n.expression,
                            tokens: n.tokens,
                            text: t
                        }) : " " === t && e.length && " " === e[e.length - 1].text || e.push({
                            type: 3,
                            text: t
                        });
                    }
                }
            },
            comment: function(t) {
                i.children.push({
                    type: 3,
                    text: t,
                    isComment: !0
                });
            }
        }), r;
    }
    function cn(t, e) {
        !function(t) {
            var e = ve(t, "key");
            e && (t.key = e);
        }(t), t.plain = !t.key && !t.attrsList.length, function(t) {
            var e = ve(t, "ref");
            e && (t.ref = e, t.refInFor = function(t) {
                var e = t;
                for (;e; ) {
                    if (void 0 !== e.for) return !0;
                    e = e.parent;
                }
                return !1;
            }(t));
        }(t), function(t) {
            if ("slot" === t.tag) t.slotName = ve(t, "name"); else {
                var e;
                "template" === t.tag ? (e = he(t, "scope"), t.slotScope = e || he(t, "slot-scope")) : (e = he(t, "slot-scope")) && (t.slotScope = e);
                var n = ve(t, "slot");
                n && (t.slotTarget = '""' === n ? '"default"' : n, "template" === t.tag || t.slotScope || le(t, "slot", n));
            }
        }(t), function(t) {
            var e;
            (e = ve(t, "is")) && (t.component = e);
            null != he(t, "inline-template") && (t.inlineTemplate = !0);
        }(t);
        for (var n = 0; n < jo.length; n++) t = jo[n](t, e) || t;
        !function(t) {
            var e, n, r, i, o, a, s, c = t.attrsList;
            for (e = 0, n = c.length; e < n; e++) if (r = i = c[e].name, o = c[e].value, Wo.test(r)) if (t.hasBindings = !0, 
            (a = function(t) {
                var e = t.match(ta);
                if (e) {
                    var n = {};
                    return e.forEach(function(t) {
                        n[t.slice(1)] = !0;
                    }), n;
                }
            }(r)) && (r = r.replace(ta, "")), Qo.test(r)) r = r.replace(Qo, ""), o = ae(o), 
            s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = Pn(r)) && (r = "innerHTML")), 
            a.camel && (r = Pn(r)), a.sync && de(t, "update:" + Pn(r), ye(o, "$event"))), s || !t.component && Mo(t.tag, t.attrsMap.type, r) ? ue(t, r, o) : le(t, r, o); else if (qo.test(r)) r = r.replace(qo, ""), 
            de(t, r, o, a, !1); else {
                var u = (r = r.replace(Wo, "")).match(Yo), l = u && u[1];
                l && (r = r.slice(0, -(l.length + 1))), pe(t, r, i, o, l, a);
            } else le(t, r, JSON.stringify(o)), !t.component && "muted" === r && Mo(t.tag, t.attrsMap.type, r) && ue(t, r, "true");
        }(t);
    }
    function un(t) {
        var e;
        if (e = he(t, "v-for")) {
            var n = function(t) {
                var e = t.match(Go);
                if (!e) return;
                var n = {};
                n.for = e[2].trim();
                var r = e[1].trim().replace(Xo, ""), i = r.match(Zo);
                i ? (n.alias = r.replace(Zo, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
                return n;
            }(e);
            n && h(t, n);
        }
    }
    function ln(t, e) {
        t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
    }
    function fn(t) {
        return an(t.tag, t.attrsList.slice(), t.parent);
    }
    function pn(t) {
        if (t.static = function(t) {
            if (2 === t.type) return !1;
            if (3 === t.type) return !0;
            return !(!t.pre && (t.hasBindings || t.if || t.for || In(t.tag) || !Fo(t.tag) || function(t) {
                for (;t.parent; ) {
                    if ("template" !== (t = t.parent).tag) return !1;
                    if (t.for) return !0;
                }
                return !1;
            }(t) || !Object.keys(t).every(Po)));
        }(t), 1 === t.type) {
            if (!Fo(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
            for (var e = 0, n = t.children.length; e < n; e++) {
                var r = t.children[e];
                pn(r), r.static || (t.static = !1);
            }
            if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
                var a = t.ifConditions[i].block;
                pn(a), a.static || (t.static = !1);
            }
        }
    }
    function dn(t, e) {
        if (1 === t.type) {
            if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);
            if (t.staticRoot = !1, t.children) for (var n = 0, r = t.children.length; n < r; n++) dn(t.children[n], e || !!t.for);
            if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) dn(t.ifConditions[i].block, e);
        }
    }
    function vn(t, e, n) {
        var r = e ? "nativeOn:{" : "on:{";
        for (var i in t) r += '"' + i + '":' + hn(i, t[i]) + ",";
        return r.slice(0, -1) + "}";
    }
    function hn(t, e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map(function(e) {
            return hn(t, e);
        }).join(",") + "]";
        var n = ca.test(e.value), r = sa.test(e.value);
        if (e.modifiers) {
            var i = "", o = "", a = [];
            for (var s in e.modifiers) if (fa[s]) o += fa[s], ua[s] && a.push(s); else if ("exact" === s) {
                var c = e.modifiers;
                o += la([ "ctrl", "shift", "alt", "meta" ].filter(function(t) {
                    return !c[t];
                }).map(function(t) {
                    return "$event." + t + "Key";
                }).join("||"));
            } else a.push(s);
            a.length && (i += function(t) {
                return "if(!('button' in $event)&&" + t.map(mn).join("&&") + ")return null;";
            }(a)), o && (i += o);
            return "function($event){" + i + (n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value) + "}";
        }
        return n || r ? e.value : "function($event){" + e.value + "}";
    }
    function mn(t) {
        var e = parseInt(t, 10);
        if (e) return "$event.keyCode!==" + e;
        var n = ua[t];
        return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key)";
    }
    function yn(t, e) {
        var n = new da(e);
        return {
            render: "with(this){return " + (t ? gn(t, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns
        };
    }
    function gn(t, e) {
        if (t.staticRoot && !t.staticProcessed) return _n(t, e);
        if (t.once && !t.onceProcessed) return bn(t, e);
        if (t.for && !t.forProcessed) return function(t, e, n, r) {
            var i = t.for, o = t.alias, a = t.iterator1 ? "," + t.iterator1 : "", s = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || gn)(t, e) + "})";
        }(t, e);
        if (t.if && !t.ifProcessed) return $n(t, e);
        if ("template" !== t.tag || t.slotTarget) {
            if ("slot" === t.tag) return function(t, e) {
                var n = t.slotName || '"default"', r = kn(t, e), i = "_t(" + n + (r ? "," + r : ""), o = t.attrs && "{" + t.attrs.map(function(t) {
                    return Pn(t.name) + ":" + t.value;
                }).join(",") + "}", a = t.attrsMap["v-bind"];
                !o && !a || r || (i += ",null");
                o && (i += "," + o);
                a && (i += (o ? "" : ",null") + "," + a);
                return i + ")";
            }(t, e);
            var n;
            if (t.component) n = function(t, e, n) {
                var r = e.inlineTemplate ? null : kn(e, n, !0);
                return "_c(" + t + "," + wn(e, n) + (r ? "," + r : "") + ")";
            }(t.component, t, e); else {
                var r = t.plain ? void 0 : wn(t, e), i = t.inlineTemplate ? null : kn(t, e, !0);
                n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
            }
            for (var o = 0; o < e.transforms.length; o++) n = e.transforms[o](t, n);
            return n;
        }
        return kn(t, e) || "void 0";
    }
    function _n(t, e) {
        return t.staticProcessed = !0, e.staticRenderFns.push("with(this){return " + gn(t, e) + "}"), 
        "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")";
    }
    function bn(t, e) {
        if (t.onceProcessed = !0, t.if && !t.ifProcessed) return $n(t, e);
        if (t.staticInFor) {
            for (var n = "", r = t.parent; r; ) {
                if (r.for) {
                    n = r.key;
                    break;
                }
                r = r.parent;
            }
            return n ? "_o(" + gn(t, e) + "," + e.onceId++ + "," + n + ")" : gn(t, e);
        }
        return _n(t, e);
    }
    function $n(t, e, n, r) {
        return t.ifProcessed = !0, Cn(t.ifConditions.slice(), e, n, r);
    }
    function Cn(t, e, n, r) {
        function i(t) {
            return n ? n(t, e) : t.once ? bn(t, e) : gn(t, e);
        }
        if (!t.length) return r || "_e()";
        var o = t.shift();
        return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + Cn(t, e, n, r) : "" + i(o.block);
    }
    function wn(t, e) {
        var n = "{", r = function(t, e) {
            var n = t.directives;
            if (!n) return;
            var r, i, o, a, s = "directives:[", c = !1;
            for (r = 0, i = n.length; r < i; r++) {
                o = n[r], a = !0;
                var u = e.directives[o.name];
                u && (a = !!u(t, o, e.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
            }
            if (c) return s.slice(0, -1) + "]";
        }(t, e);
        r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), 
        t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');
        for (var i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t);
        if (t.attrs && (n += "attrs:{" + On(t.attrs) + "},"), t.props && (n += "domProps:{" + On(t.props) + "},"), 
        t.events && (n += vn(t.events, !1, e.warn) + ","), t.nativeEvents && (n += vn(t.nativeEvents, !0, e.warn) + ","), 
        t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += function(t, e) {
            return "scopedSlots:_u([" + Object.keys(t).map(function(n) {
                return xn(n, t[n], e);
            }).join(",") + "])";
        }(t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), 
        t.inlineTemplate) {
            var o = function(t, e) {
                var n = t.children[0];
                if (1 === n.type) {
                    var r = yn(n, e.options);
                    return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(t) {
                        return "function(){" + t + "}";
                    }).join(",") + "]}";
                }
            }(t, e);
            o && (n += o + ",");
        }
        return n = n.replace(/,$/, "") + "}", t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), 
        n;
    }
    function xn(t, e, n) {
        if (e.for && !e.forProcessed) return function(t, e, n) {
            var r = e.for, i = e.alias, o = e.iterator1 ? "," + e.iterator1 : "", a = e.iterator2 ? "," + e.iterator2 : "";
            return e.forProcessed = !0, "_l((" + r + "),function(" + i + o + a + "){return " + xn(t, e, n) + "})";
        }(t, e, n);
        return "{key:" + t + ",fn:" + ("function(" + String(e.slotScope) + "){return " + ("template" === e.tag ? e.if ? e.if + "?" + (kn(e, n) || "undefined") + ":undefined" : kn(e, n) || "undefined" : gn(e, n)) + "}") + "}";
    }
    function kn(t, e, n, r, i) {
        var o = t.children;
        if (o.length) {
            var a = o[0];
            if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || gn)(a, e);
            var s = n ? function(t, e) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (1 === i.type) {
                        if (An(i) || i.ifConditions && i.ifConditions.some(function(t) {
                            return An(t.block);
                        })) {
                            n = 2;
                            break;
                        }
                        (e(i) || i.ifConditions && i.ifConditions.some(function(t) {
                            return e(t.block);
                        })) && (n = 1);
                    }
                }
                return n;
            }(o, e.maybeComponent) : 0, c = i || function(t, e) {
                if (1 === t.type) return gn(t, e);
                return 3 === t.type && t.isComment ? function(t) {
                    return "_e(" + JSON.stringify(t.text) + ")";
                }(t) : function(t) {
                    return "_v(" + (2 === t.type ? t.expression : Sn(JSON.stringify(t.text))) + ")";
                }(t);
            };
            return "[" + o.map(function(t) {
                return c(t, e);
            }).join(",") + "]" + (s ? "," + s : "");
        }
    }
    function An(t) {
        return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
    }
    function On(t) {
        for (var e = "", n = 0; n < t.length; n++) {
            var r = t[n];
            e += '"' + r.name + '":' + Sn(r.value) + ",";
        }
        return e.slice(0, -1);
    }
    function Sn(t) {
        return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    function Tn(t, e) {
        try {
            return new Function(t);
        } catch (n) {
            return e.push({
                err: n,
                code: t
            }), y;
        }
    }
    function En(t) {
        return Ro = Ro || document.createElement("div"), Ro.innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>', 
        Ro.innerHTML.indexOf("&#10;") > 0;
    }
    var jn = Object.freeze({}), Nn = Object.prototype.toString, In = u("slot,component", !0), Ln = u("key,ref,slot,slot-scope,is"), Mn = Object.prototype.hasOwnProperty, Dn = /-(\w)/g, Pn = p(function(t) {
        return t.replace(Dn, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }), Fn = p(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }), Rn = /\B([A-Z])/g, Hn = p(function(t) {
        return t.replace(Rn, "-$1").toLowerCase();
    }), Bn = function(t, e, n) {
        return !1;
    }, Un = function(t) {
        return t;
    }, Vn = "data-server-rendered", zn = [ "component", "directive", "filter" ], Kn = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ], Jn = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: Bn,
        isReservedAttr: Bn,
        isUnknownElement: Bn,
        getTagNamespace: y,
        parsePlatformTagName: Un,
        mustUseProp: Bn,
        _lifecycleHooks: Kn
    }, qn = /[^\w.$]/, Wn = "__proto__" in {}, Gn = "undefined" != typeof window, Zn = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Xn = Zn && WXEnvironment.platform.toLowerCase(), Yn = Gn && window.navigator.userAgent.toLowerCase(), Qn = Yn && /msie|trident/.test(Yn), tr = Yn && Yn.indexOf("msie 9.0") > 0, er = Yn && Yn.indexOf("edge/") > 0, nr = Yn && Yn.indexOf("android") > 0 || "android" === Xn, rr = Yn && /iphone|ipad|ipod|ios/.test(Yn) || "ios" === Xn, ir = (Yn && /chrome\/\d+/.test(Yn), 
    {}.watch), or = !1;
    if (Gn) try {
        var ar = {};
        Object.defineProperty(ar, "passive", {
            get: function() {
                or = !0;
            }
        }), window.addEventListener("test-passive", null, ar);
    } catch (t) {}
    var sr, cr, ur = function() {
        return void 0 === sr && (sr = !Gn && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), 
        sr;
    }, lr = Gn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, fr = "undefined" != typeof Symbol && w(Symbol) && "undefined" != typeof Reflect && w(Reflect.ownKeys);
    cr = "undefined" != typeof Set && w(Set) ? Set : function() {
        function t() {
            this.set = Object.create(null);
        }
        return t.prototype.has = function(t) {
            return !0 === this.set[t];
        }, t.prototype.add = function(t) {
            this.set[t] = !0;
        }, t.prototype.clear = function() {
            this.set = Object.create(null);
        }, t;
    }();
    var pr = y, dr = 0, vr = function() {
        this.id = dr++, this.subs = [];
    };
    vr.prototype.addSub = function(t) {
        this.subs.push(t);
    }, vr.prototype.removeSub = function(t) {
        l(this.subs, t);
    }, vr.prototype.depend = function() {
        vr.target && vr.target.addDep(this);
    }, vr.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
    }, vr.target = null;
    var hr = [], mr = function(t, e, n, r, i, o, a, s) {
        this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, 
        this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
        this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
        this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
        this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
        this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }, yr = {
        child: {
            configurable: !0
        }
    };
    yr.child.get = function() {
        return this.componentInstance;
    }, Object.defineProperties(mr.prototype, yr);
    var gr = function(t) {
        void 0 === t && (t = "");
        var e = new mr();
        return e.text = t, e.isComment = !0, e;
    }, _r = Array.prototype, br = Object.create(_r);
    [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
        var e = _r[t];
        C(br, t, function() {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i, o = e.apply(this, n), a = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                i = n;
                break;

              case "splice":
                i = n.slice(2);
            }
            return i && a.observeArray(i), a.dep.notify(), o;
        });
    });
    var $r = Object.getOwnPropertyNames(br), Cr = {
        shouldConvert: !0
    }, wr = function(t) {
        if (this.value = t, this.dep = new vr(), this.vmCount = 0, C(t, "__ob__", this), 
        Array.isArray(t)) {
            (Wn ? O : S)(t, br, $r), this.observeArray(t);
        } else this.walk(t);
    };
    wr.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) E(t, e[n], t[e[n]]);
    }, wr.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++) T(t[e]);
    };
    var xr = Jn.optionMergeStrategies;
    xr.data = function(t, e, n) {
        return n ? M(t, e, n) : e && "function" != typeof e ? t : M(t, e);
    }, Kn.forEach(function(t) {
        xr[t] = D;
    }), zn.forEach(function(t) {
        xr[t + "s"] = P;
    }), xr.watch = function(t, e, n, r) {
        if (t === ir && (t = void 0), e === ir && (e = void 0), !e) return Object.create(t || null);
        if (!t) return e;
        var i = {};
        h(i, t);
        for (var o in e) {
            var a = i[o], s = e[o];
            a && !Array.isArray(a) && (a = [ a ]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
        }
        return i;
    }, xr.props = xr.methods = xr.inject = xr.computed = function(t, e, n, r) {
        if (!t) return e;
        var i = Object.create(null);
        return h(i, t), e && h(i, e), i;
    }, xr.provide = M;
    var kr, Ar, Or = function(t, e) {
        return void 0 === e ? t : e;
    }, Sr = [], Tr = !1, Er = !1;
    if ("undefined" != typeof setImmediate && w(setImmediate)) Ar = function() {
        setImmediate(J);
    }; else if ("undefined" == typeof MessageChannel || !w(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Ar = function() {
        setTimeout(J, 0);
    }; else {
        var jr = new MessageChannel(), Nr = jr.port2;
        jr.port1.onmessage = J, Ar = function() {
            Nr.postMessage(1);
        };
    }
    if ("undefined" != typeof Promise && w(Promise)) {
        var Ir = Promise.resolve();
        kr = function() {
            Ir.then(J), rr && setTimeout(y);
        };
    } else kr = Ar;
    var Lr, Mr = new cr(), Dr = p(function(t) {
        var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
        return t = r ? t.slice(1) : t, {
            name: t,
            once: n,
            capture: r,
            passive: e
        };
    }), Pr = null, Fr = [], Rr = [], Hr = {}, Br = !1, Ur = !1, Vr = 0, zr = 0, Kr = function(t, e, n, r, i) {
        this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
        this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
        this.cb = n, this.id = ++zr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
        this.newDeps = [], this.depIds = new cr(), this.newDepIds = new cr(), this.expression = "", 
        "function" == typeof e ? this.getter = e : (this.getter = function(t) {
            if (!qn.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]];
                    }
                    return t;
                };
            }
        }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
    };
    Kr.prototype.get = function() {
        !function(t) {
            vr.target && hr.push(vr.target), vr.target = t;
        }(this);
        var t, e = this.vm;
        try {
            t = this.getter.call(e, e);
        } catch (t) {
            if (!this.user) throw t;
            V(t, e, 'getter for watcher "' + this.expression + '"');
        } finally {
            this.deep && W(t), vr.target = hr.pop(), this.cleanupDeps();
        }
        return t;
    }, Kr.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, Kr.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
        this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, Kr.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
            var e = t.id;
            if (null == Hr[e]) {
                if (Hr[e] = !0, Ur) {
                    for (var n = Fr.length - 1; n > Vr && Fr[n].id > t.id; ) n--;
                    Fr.splice(n + 1, 0, t);
                } else Fr.push(t);
                Br || (Br = !0, q(ht));
            }
        }(this);
    }, Kr.prototype.run = function() {
        if (this.active) {
            var t = this.get();
            if (t !== this.value || i(t) || this.deep) {
                var e = this.value;
                if (this.value = t, this.user) try {
                    this.cb.call(this.vm, t, e);
                } catch (t) {
                    V(t, this.vm, 'callback for watcher "' + this.expression + '"');
                } else this.cb.call(this.vm, t, e);
            }
        }
    }, Kr.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1;
    }, Kr.prototype.depend = function() {
        for (var t = this.deps.length; t--; ) this.deps[t].depend();
    }, Kr.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || l(this.vm._watchers, this);
            for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
            this.active = !1;
        }
    };
    var Jr = {
        enumerable: !0,
        configurable: !0,
        get: y,
        set: y
    }, qr = {
        lazy: !0
    };
    Nt(It.prototype);
    var Wr = {
        init: function(t, n, r, i) {
            if (!t.componentInstance || t.componentInstance._isDestroyed) {
                (t.componentInstance = function(t, n, r, i) {
                    var o = {
                        _isComponent: !0,
                        parent: n,
                        _parentVnode: t,
                        _parentElm: r || null,
                        _refElm: i || null
                    }, a = t.data.inlineTemplate;
                    return e(a) && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new t.componentOptions.Ctor(o);
                }(t, Pr, r, i)).$mount(n ? t.elm : void 0, n);
            } else if (t.data.keepAlive) {
                var o = t;
                Wr.prepatch(o, o);
            }
        },
        prepatch: function(t, e) {
            var n = e.componentOptions;
            !function(t, e, n, r, i) {
                var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== jn);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                t.$options._renderChildren = i, t.$attrs = r.data && r.data.attrs || jn, t.$listeners = n || jn, 
                e && t.$options.props) {
                    Cr.shouldConvert = !1;
                    for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                        var u = s[c];
                        a[u] = H(u, t.$options.props, e, t);
                    }
                    Cr.shouldConvert = !0, t.$options.propsData = e;
                }
                if (n) {
                    var l = t.$options._parentListeners;
                    t.$options._parentListeners = n, st(t, n, l);
                }
                o && (t.$slots = ct(i, r.context), t.$forceUpdate());
            }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
        },
        insert: function(t) {
            var e = t.context, n = t.componentInstance;
            n._isMounted || (n._isMounted = !0, vt(n, "mounted")), t.data.keepAlive && (e._isMounted ? function(t) {
                t._inactive = !1, Rr.push(t);
            }(n) : pt(n, !0));
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? dt(e, !0) : e.$destroy());
        }
    }, Gr = Object.keys(Wr), Zr = 1, Xr = 2, Yr = 0;
    !function(t) {
        t.prototype._init = function(t) {
            this._uid = Yr++, this._isVue = !0, t && t._isComponent ? function(t, e) {
                var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;
                var i = r.componentOptions;
                n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, 
                n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
            }(this, t) : this.$options = F(Ft(this.constructor), t || {}, this), this._renderProxy = this, 
            this._self = this, function(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(t);
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                t._isBeingDestroyed = !1;
            }(this), function(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && st(t, e);
            }(this), function(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                t.$slots = ct(e._renderChildren, r), t.$scopedSlots = jn, t._c = function(e, n, r, i) {
                    return Dt(t, e, n, r, i, !1);
                }, t.$createElement = function(e, n, r, i) {
                    return Dt(t, e, n, r, i, !0);
                };
                var i = n && n.data;
                E(t, "$attrs", i && i.attrs || jn, 0, !0), E(t, "$listeners", e._parentListeners || jn, 0, !0);
            }(this), vt(this, "beforeCreate"), function(t) {
                var e = $t(t.$options.inject, t);
                e && (Cr.shouldConvert = !1, Object.keys(e).forEach(function(n) {
                    E(t, n, e[n]);
                }), Cr.shouldConvert = !0);
            }(this), yt(this), function(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }(this), vt(this, "created"), this.$options.el && this.$mount(this.$options.el);
        };
    }(Rt), function(t) {
        var e = {};
        e.get = function() {
            return this._data;
        };
        var n = {};
        n.get = function() {
            return this._props;
        }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), 
        t.prototype.$set = j, t.prototype.$delete = N, t.prototype.$watch = function(t, e, n) {
            if (o(e)) return bt(this, t, e, n);
            (n = n || {}).user = !0;
            var r = new Kr(this, t, e, n);
            return n.immediate && e.call(this, r.value), function() {
                r.teardown();
            };
        };
    }(Rt), function(t) {
        var e = /^hook:/;
        t.prototype.$on = function(t, n) {
            if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) this.$on(t[r], n); else (this._events[t] || (this._events[t] = [])).push(n), 
            e.test(t) && (this._hasHookEvent = !0);
            return this;
        }, t.prototype.$once = function(t, e) {
            function n() {
                r.$off(t, n), e.apply(r, arguments);
            }
            var r = this;
            return n.fn = e, r.$on(t, n), r;
        }, t.prototype.$off = function(t, e) {
            if (!arguments.length) return this._events = Object.create(null), this;
            if (Array.isArray(t)) {
                for (var n = 0, r = t.length; n < r; n++) this.$off(t[n], e);
                return this;
            }
            var i = this._events[t];
            if (!i) return this;
            if (!e) return this._events[t] = null, this;
            if (e) for (var o, a = i.length; a--; ) if ((o = i[a]) === e || o.fn === e) {
                i.splice(a, 1);
                break;
            }
            return this;
        }, t.prototype.$emit = function(t) {
            var e = this, n = e._events[t];
            if (n) {
                n = n.length > 1 ? v(n) : n;
                for (var r = v(arguments, 1), i = 0, o = n.length; i < o; i++) try {
                    n[i].apply(e, r);
                } catch (n) {
                    V(n, e, 'event handler for "' + t + '"');
                }
            }
            return e;
        };
    }(Rt), function(t) {
        t.prototype._update = function(t, e) {
            this._isMounted && vt(this, "beforeUpdate");
            var n = this.$el, r = this._vnode, i = Pr;
            Pr = this, this._vnode = t, r ? this.$el = this.__patch__(r, t) : (this.$el = this.__patch__(this.$el, t, e, !1, this.$options._parentElm, this.$options._refElm), 
            this.$options._parentElm = this.$options._refElm = null), Pr = i, n && (n.__vue__ = null), 
            this.$el && (this.$el.__vue__ = this), this.$vnode && this.$parent && this.$vnode === this.$parent._vnode && (this.$parent.$el = this.$el);
        }, t.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update();
        }, t.prototype.$destroy = function() {
            if (!this._isBeingDestroyed) {
                vt(this, "beforeDestroy"), this._isBeingDestroyed = !0;
                var t = this.$parent;
                !t || t._isBeingDestroyed || this.$options.abstract || l(t.$children, this), this._watcher && this._watcher.teardown();
                for (var e = this._watchers.length; e--; ) this._watchers[e].teardown();
                this._data.__ob__ && this._data.__ob__.vmCount--, this._isDestroyed = !0, this.__patch__(this._vnode, null), 
                vt(this, "destroyed"), this.$off(), this.$el && (this.$el.__vue__ = null), this.$vnode && (this.$vnode.parent = null);
            }
        };
    }(Rt), function(t) {
        Nt(t.prototype), t.prototype.$nextTick = function(t) {
            return q(t, this);
        }, t.prototype._render = function() {
            var t = this, e = t.$options, n = e.render, r = e._parentVnode;
            if (t._isMounted) for (var i in t.$slots) {
                var o = t.$slots[i];
                (o._rendered || o[0] && o[0].elm) && (t.$slots[i] = A(o, !0));
            }
            t.$scopedSlots = r && r.data.scopedSlots || jn, t.$vnode = r;
            var a;
            try {
                a = n.call(t._renderProxy, t.$createElement);
            } catch (e) {
                V(e, t, "render"), a = t._vnode;
            }
            return a instanceof mr || (a = gr()), a.parent = r, a;
        };
    }(Rt);
    var Qr = [ String, RegExp, Array ], ti = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Qr,
                exclude: Qr,
                max: [ String, Number ]
            },
            created: function() {
                this.cache = Object.create(null), this.keys = [];
            },
            destroyed: function() {
                for (var t in this.cache) zt(this.cache, t, this.keys);
            },
            watch: {
                include: function(t) {
                    Vt(this, function(e) {
                        return Ut(t, e);
                    });
                },
                exclude: function(t) {
                    Vt(this, function(e) {
                        return !Ut(t, e);
                    });
                }
            },
            render: function() {
                var t = this.$slots.default, e = it(t), n = e && e.componentOptions;
                if (n) {
                    var r = Bt(n), i = this.include, o = this.exclude;
                    if (i && (!r || !Ut(i, r)) || o && r && Ut(o, r)) return e;
                    var a = this.cache, s = this.keys, c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    a[c] ? (e.componentInstance = a[c].componentInstance, l(s, c), s.push(c)) : (a[c] = e, 
                    s.push(c), this.max && s.length > parseInt(this.max) && zt(a, s[0], s, this._vnode)), 
                    e.data.keepAlive = !0;
                }
                return e || t && t[0];
            }
        }
    };
    !function(t) {
        var e = {};
        e.get = function() {
            return Jn;
        }, Object.defineProperty(t, "config", e), t.util = {
            warn: pr,
            extend: h,
            mergeOptions: F,
            defineReactive: E
        }, t.set = j, t.delete = N, t.nextTick = q, t.options = Object.create(null), zn.forEach(function(e) {
            t.options[e + "s"] = Object.create(null);
        }), t.options._base = t, h(t.options.components, ti), function(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = v(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                e.push(t), this;
            };
        }(t), function(t) {
            t.mixin = function(t) {
                return this.options = F(this.options, t), this;
            };
        }(t), Ht(t), function(t) {
            zn.forEach(function(e) {
                t[e] = function(t, n) {
                    return n ? ("component" === e && o(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                    "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                };
            });
        }(t);
    }(Rt), Object.defineProperty(Rt.prototype, "$isServer", {
        get: ur
    }), Object.defineProperty(Rt.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext;
        }
    }), Rt.version = "2.5.13";
    var ei, ni, ri, ii, oi, ai, si, ci, ui = u("style,class"), li = u("input,textarea,option,select,progress"), fi = function(t, e, n) {
        return "value" === n && li(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
    }, pi = u("contenteditable,draggable,spellcheck"), di = u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), vi = "http://www.w3.org/1999/xlink", hi = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
    }, mi = function(t) {
        return hi(t) ? t.slice(6, t.length) : "";
    }, yi = function(t) {
        return null == t || !1 === t;
    }, gi = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, _i = u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), bi = u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), $i = function(t) {
        return _i(t) || bi(t);
    }, Ci = Object.create(null), wi = u("text,number,password,search,email,tel,url"), xi = Object.freeze({
        createElement: function(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), 
            n);
        },
        createElementNS: function(t, e) {
            return document.createElementNS(gi[t], e);
        },
        createTextNode: function(t) {
            return document.createTextNode(t);
        },
        createComment: function(t) {
            return document.createComment(t);
        },
        insertBefore: function(t, e, n) {
            t.insertBefore(e, n);
        },
        removeChild: function(t, e) {
            t.removeChild(e);
        },
        appendChild: function(t, e) {
            t.appendChild(e);
        },
        parentNode: function(t) {
            return t.parentNode;
        },
        nextSibling: function(t) {
            return t.nextSibling;
        },
        tagName: function(t) {
            return t.tagName;
        },
        setTextContent: function(t, e) {
            t.textContent = e;
        },
        setAttribute: function(t, e, n) {
            t.setAttribute(e, n);
        }
    }), ki = {
        create: function(t, e) {
            Xt(e);
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (Xt(t, !0), Xt(e));
        },
        destroy: function(t) {
            Xt(t, !0);
        }
    }, Ai = new mr("", {}, []), Oi = [ "create", "activate", "update", "remove", "destroy" ], Si = {
        create: te,
        update: te,
        destroy: function(t) {
            te(t, Ai);
        }
    }, Ti = Object.create(null), Ei = [ ki, Si ], ji = {
        create: re,
        update: re
    }, Ni = {
        create: oe,
        update: oe
    }, Ii = /[\w).+\-_$\]]/, Li = "__r", Mi = "__c", Di = {
        create: xe,
        update: xe
    }, Pi = {
        create: ke,
        update: ke
    }, Fi = p(function(t) {
        var e = {}, n = /:(.+)/;
        return t.split(/;(?![^(]*\))/g).forEach(function(t) {
            if (t) {
                var r = t.split(n);
                r.length > 1 && (e[r[0].trim()] = r[1].trim());
            }
        }), e;
    }), Ri = /^--/, Hi = /\s*!important$/, Bi = function(t, e, n) {
        if (Ri.test(e)) t.style.setProperty(e, n); else if (Hi.test(n)) t.style.setProperty(e, n.replace(Hi, ""), "important"); else {
            var r = Vi(e);
            if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i]; else t.style[r] = n;
        }
    }, Ui = [ "Webkit", "Moz", "ms" ], Vi = p(function(t) {
        if (ci = ci || document.createElement("div").style, "filter" !== (t = Pn(t)) && t in ci) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Ui.length; n++) {
            var r = Ui[n] + e;
            if (r in ci) return r;
        }
    }), zi = {
        create: Se,
        update: Se
    }, Ki = p(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        };
    }), Ji = Gn && !tr, qi = "transition", Wi = "animation", Gi = "transition", Zi = "transitionend", Xi = "animation", Yi = "animationend";
    Ji && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Gi = "WebkitTransition", 
    Zi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Xi = "WebkitAnimation", 
    Yi = "webkitAnimationEnd"));
    var Qi = Gn ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
        return t();
    }, to = /\b(transform|all)(,|$)/, eo = function(i) {
        function o(t) {
            var n = A.parentNode(t);
            e(n) && A.removeChild(n, t);
        }
        function a(t, r, i, o, a) {
            if (t.isRootInsert = !a, !function(t, r, i, o) {
                var a = t.data;
                if (e(a)) {
                    var u = e(t.componentInstance) && a.keepAlive;
                    if (e(a = a.hook) && e(a = a.init) && a(t, !1, i, o), e(t.componentInstance)) return s(t, r), 
                    n(u) && function(t, n, r, i) {
                        for (var o, a = t; a.componentInstance; ) if (a = a.componentInstance._vnode, e(o = a.data) && e(o = o.transition)) {
                            for (o = 0; o < x.activate.length; ++o) x.activate[o](Ai, a);
                            n.push(a);
                            break;
                        }
                        c(r, t.elm, i);
                    }(t, r, i, o), !0;
                }
            }(t, r, i, o)) {
                var u = t.data, f = t.children, v = t.tag;
                e(v) ? (t.elm = t.ns ? A.createElementNS(t.ns, v) : A.createElement(v, t), d(t), 
                l(t, f, r), e(u) && p(t, r), c(i, t.elm, o)) : n(t.isComment) ? (t.elm = A.createComment(t.text), 
                c(i, t.elm, o)) : (t.elm = A.createTextNode(t.text), c(i, t.elm, o));
            }
        }
        function s(t, n) {
            e(t.data.pendingInsert) && (n.push.apply(n, t.data.pendingInsert), t.data.pendingInsert = null), 
            t.elm = t.componentInstance.$el, f(t) ? (p(t, n), d(t)) : (Xt(t), n.push(t));
        }
        function c(t, n, r) {
            e(t) && (e(r) ? r.parentNode === t && A.insertBefore(t, n, r) : A.appendChild(t, n));
        }
        function l(t, e, n) {
            if (Array.isArray(e)) for (var i = 0; i < e.length; ++i) a(e[i], n, t.elm, null, !0); else r(t.text) && A.appendChild(t.elm, A.createTextNode(String(t.text)));
        }
        function f(t) {
            for (;t.componentInstance; ) t = t.componentInstance._vnode;
            return e(t.tag);
        }
        function p(t, n) {
            for (var r = 0; r < x.create.length; ++r) x.create[r](Ai, t);
            e(C = t.data.hook) && (e(C.create) && C.create(Ai, t), e(C.insert) && n.push(t));
        }
        function d(t) {
            var n;
            if (e(n = t.fnScopeId)) A.setAttribute(t.elm, n, ""); else for (var r = t; r; ) e(n = r.context) && e(n = n.$options._scopeId) && A.setAttribute(t.elm, n, ""), 
            r = r.parent;
            e(n = Pr) && n !== t.context && n !== t.fnContext && e(n = n.$options._scopeId) && A.setAttribute(t.elm, n, "");
        }
        function v(t, e, n, r, i, o) {
            for (;r <= i; ++r) a(n[r], o, t, e);
        }
        function h(t) {
            var n, r, i = t.data;
            if (e(i)) for (e(n = i.hook) && e(n = n.destroy) && n(t), n = 0; n < x.destroy.length; ++n) x.destroy[n](t);
            if (e(n = t.children)) for (r = 0; r < t.children.length; ++r) h(t.children[r]);
        }
        function m(t, n, r, i) {
            for (;r <= i; ++r) {
                var a = n[r];
                e(a) && (e(a.tag) ? (y(a), h(a)) : o(a.elm));
            }
        }
        function y(t, n) {
            if (e(n) || e(t.data)) {
                var r, i = x.remove.length + 1;
                for (e(n) ? n.listeners += i : n = function(t, e) {
                    function n() {
                        0 == --n.listeners && o(t);
                    }
                    return n.listeners = e, n;
                }(t.elm, i), e(r = t.componentInstance) && e(r = r._vnode) && e(r.data) && y(r, n), 
                r = 0; r < x.remove.length; ++r) x.remove[r](t, n);
                e(r = t.data.hook) && e(r = r.remove) ? r(t, n) : n();
            } else o(t.elm);
        }
        function g(n, r, i, o, s) {
            for (var c, u, l, f = 0, p = 0, d = r.length - 1, h = r[0], y = r[d], g = i.length - 1, b = i[0], $ = i[g], C = !s; f <= d && p <= g; ) t(h) ? h = r[++f] : t(y) ? y = r[--d] : Yt(h, b) ? (_(h, b, o), 
            h = r[++f], b = i[++p]) : Yt(y, $) ? (_(y, $, o), y = r[--d], $ = i[--g]) : Yt(h, $) ? (_(h, $, o), 
            C && A.insertBefore(n, h.elm, A.nextSibling(y.elm)), h = r[++f], $ = i[--g]) : Yt(y, b) ? (_(y, b, o), 
            C && A.insertBefore(n, y.elm, h.elm), y = r[--d], b = i[++p]) : (t(c) && (c = Qt(r, f, d)), 
            t(u = e(b.key) ? c[b.key] : function(t, n, r, i) {
                for (var o = r; o < i; o++) {
                    var a = n[o];
                    if (e(a) && Yt(t, a)) return o;
                }
            }(b, r, f, d)) ? a(b, o, n, h.elm) : Yt(l = r[u], b) ? (_(l, b, o), r[u] = void 0, 
            C && A.insertBefore(n, l.elm, h.elm)) : a(b, o, n, h.elm), b = i[++p]);
            f > d ? v(n, t(i[g + 1]) ? null : i[g + 1].elm, i, p, g, o) : p > g && m(0, r, f, d);
        }
        function _(r, i, o, a) {
            if (r !== i) {
                var s = i.elm = r.elm;
                if (n(r.isAsyncPlaceholder)) e(i.asyncFactory.resolved) ? $(r.elm, i, o) : i.isAsyncPlaceholder = !0; else if (n(i.isStatic) && n(r.isStatic) && i.key === r.key && (n(i.isCloned) || n(i.isOnce))) i.componentInstance = r.componentInstance; else {
                    var c, u = i.data;
                    e(u) && e(c = u.hook) && e(c = c.prepatch) && c(r, i);
                    var l = r.children, p = i.children;
                    if (e(u) && f(i)) {
                        for (c = 0; c < x.update.length; ++c) x.update[c](r, i);
                        e(c = u.hook) && e(c = c.update) && c(r, i);
                    }
                    t(i.text) ? e(l) && e(p) ? l !== p && g(s, l, p, o, a) : e(p) ? (e(r.text) && A.setTextContent(s, ""), 
                    v(s, null, p, 0, p.length - 1, o)) : e(l) ? m(0, l, 0, l.length - 1) : e(r.text) && A.setTextContent(s, "") : r.text !== i.text && A.setTextContent(s, i.text), 
                    e(u) && e(c = u.hook) && e(c = c.postpatch) && c(r, i);
                }
            }
        }
        function b(t, r, i) {
            if (n(i) && e(t.parent)) t.parent.data.pendingInsert = r; else for (var o = 0; o < r.length; ++o) r[o].data.hook.insert(r[o]);
        }
        function $(t, r, i, o) {
            var a, c = r.tag, u = r.data, f = r.children;
            if (o = o || u && u.pre, r.elm = t, n(r.isComment) && e(r.asyncFactory)) return r.isAsyncPlaceholder = !0, 
            !0;
            if (e(u) && (e(a = u.hook) && e(a = a.init) && a(r, !0), e(a = r.componentInstance))) return s(r, i), 
            !0;
            if (e(c)) {
                if (e(f)) if (t.hasChildNodes()) if (e(a = u) && e(a = a.domProps) && e(a = a.innerHTML)) {
                    if (a !== t.innerHTML) return !1;
                } else {
                    for (var d = !0, v = t.firstChild, h = 0; h < f.length; h++) {
                        if (!v || !$(v, f[h], i, o)) {
                            d = !1;
                            break;
                        }
                        v = v.nextSibling;
                    }
                    if (!d || v) return !1;
                } else l(r, f, i);
                if (e(u)) {
                    var m = !1;
                    for (var y in u) if (!O(y)) {
                        m = !0, p(r, i);
                        break;
                    }
                    !m && u.class && W(u.class);
                }
            } else t.data !== r.text && (t.data = r.text);
            return !0;
        }
        var C, w, x = {}, k = i.modules, A = i.nodeOps;
        for (C = 0; C < Oi.length; ++C) for (x[Oi[C]] = [], w = 0; w < k.length; ++w) e(k[w][Oi[C]]) && x[Oi[C]].push(k[w][Oi[C]]);
        var O = u("attrs,class,staticClass,staticStyle,key");
        return function(r, i, o, s, c, u) {
            if (!t(i)) {
                var l = !1, p = [];
                if (t(r)) l = !0, a(i, p, c, u); else {
                    var d = e(r.nodeType);
                    if (!d && Yt(r, i)) _(r, i, p, s); else {
                        if (d) {
                            if (1 === r.nodeType && r.hasAttribute(Vn) && (r.removeAttribute(Vn), o = !0), n(o) && $(r, i, p)) return b(i, p, !0), 
                            r;
                            r = function(t) {
                                return new mr(A.tagName(t).toLowerCase(), {}, [], void 0, t);
                            }(r);
                        }
                        var v = r.elm, y = A.parentNode(v);
                        if (a(i, p, v._leaveCb ? null : y, A.nextSibling(v)), e(i.parent)) for (var g = i.parent, C = f(i); g; ) {
                            for (var w = 0; w < x.destroy.length; ++w) x.destroy[w](g);
                            if (g.elm = i.elm, C) {
                                for (var k = 0; k < x.create.length; ++k) x.create[k](Ai, g);
                                var O = g.data.hook.insert;
                                if (O.merged) for (var S = 1; S < O.fns.length; S++) O.fns[S]();
                            } else Xt(g);
                            g = g.parent;
                        }
                        e(y) ? m(0, [ r ], 0, 0) : e(r.tag) && h(r);
                    }
                }
                return b(i, p, l), i.elm;
            }
            e(r) && h(r);
        };
    }({
        nodeOps: xi,
        modules: [ ji, Ni, Di, Pi, zi, Gn ? {
            create: Ve,
            activate: Ve,
            remove: function(t, e) {
                !0 !== t.data.show ? He(t, e) : e();
            }
        } : {} ].concat(Ei)
    });
    tr && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && Ze(t, "input");
    });
    var no = {
        inserted: function(t, e, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? Y(n, "postpatch", function() {
                no.componentUpdated(t, e, n);
            }) : ze(t, e, n.context), t._vOptions = [].map.call(t.options, qe)) : ("textarea" === n.tag || wi(t.type)) && (t._vModifiers = e.modifiers, 
            e.modifiers.lazy || (t.addEventListener("change", Ge), nr || (t.addEventListener("compositionstart", We), 
            t.addEventListener("compositionend", Ge)), tr && (t.vmodel = !0)));
        },
        componentUpdated: function(t, e, n) {
            if ("select" === n.tag) {
                ze(t, e, n.context);
                var r = t._vOptions, i = t._vOptions = [].map.call(t.options, qe);
                if (i.some(function(t, e) {
                    return !g(t, r[e]);
                })) {
                    (t.multiple ? e.value.some(function(t) {
                        return Je(t, i);
                    }) : e.value !== e.oldValue && Je(e.value, i)) && Ze(t, "change");
                }
            }
        }
    }, ro = {
        model: no,
        show: {
            bind: function(t, e, n) {
                var r = e.value, i = (n = Xe(n)).data && n.data.transition, o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                r && i ? (n.data.show = !0, Re(n, function() {
                    t.style.display = o;
                })) : t.style.display = r ? o : "none";
            },
            update: function(t, e, n) {
                var r = e.value;
                if (r !== e.oldValue) {
                    (n = Xe(n)).data && n.data.transition ? (n.data.show = !0, r ? Re(n, function() {
                        t.style.display = t.__vOriginalDisplay;
                    }) : He(n, function() {
                        t.style.display = "none";
                    })) : t.style.display = r ? t.__vOriginalDisplay : "none";
                }
            },
            unbind: function(t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay);
            }
        }
    }, io = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [ Number, String, Object ]
    }, oo = {
        name: "transition",
        props: io,
        abstract: !0,
        render: function(t) {
            var e = this, n = this.$slots.default;
            if (n && (n = n.filter(function(t) {
                return t.tag || rt(t);
            })).length) {
                var i = this.mode, o = n[0];
                if (function(t) {
                    for (;t = t.parent; ) if (t.data.transition) return !0;
                }(this.$vnode)) return o;
                var a = Ye(o);
                if (!a) return o;
                if (this._leaving) return tn(t, o);
                var s = "__transition-" + this._uid + "-";
                a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : r(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                var c = (a.data || (a.data = {})).transition = Qe(this), u = this._vnode, l = Ye(u);
                if (a.data.directives && a.data.directives.some(function(t) {
                    return "show" === t.name;
                }) && (a.data.show = !0), l && l.data && !function(t, e) {
                    return e.key === t.key && e.tag === t.tag;
                }(a, l) && !rt(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var f = l.data.transition = h({}, c);
                    if ("out-in" === i) return this._leaving = !0, Y(f, "afterLeave", function() {
                        e._leaving = !1, e.$forceUpdate();
                    }), tn(t, o);
                    if ("in-out" === i) {
                        if (rt(a)) return u;
                        var p, d = function() {
                            p();
                        };
                        Y(c, "afterEnter", d), Y(c, "enterCancelled", d), Y(f, "delayLeave", function(t) {
                            p = t;
                        });
                    }
                }
                return o;
            }
        }
    }, ao = h({
        tag: String,
        moveClass: String
    }, io);
    delete ao.mode;
    var so = {
        Transition: oo,
        TransitionGroup: {
            props: ao,
            render: function(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Qe(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), 
                    n[c.key] = c, (c.data || (c.data = {})).transition = a);
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var p = r[f];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p);
                    }
                    this.kept = t(e, null, u), this.removed = l;
                }
                return t(e, null, o);
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
            },
            updated: function() {
                var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, e) && (t.forEach(en), t.forEach(nn), t.forEach(rn), 
                this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                    if (t.data.moved) {
                        var n = t.elm, r = n.style;
                        Ie(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Zi, n._moveCb = function t(r) {
                            r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Zi, t), n._moveCb = null, 
                            Le(n, e));
                        });
                    }
                }));
            },
            methods: {
                hasMove: function(t, e) {
                    if (!Ji) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        Ee(n, t);
                    }), Te(n, e), n.style.display = "none", this.$el.appendChild(n);
                    var r = De(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform;
                }
            }
        }
    };
    Rt.config.mustUseProp = fi, Rt.config.isReservedTag = $i, Rt.config.isReservedAttr = ui, 
    Rt.config.getTagNamespace = Gt, Rt.config.isUnknownElement = function(t) {
        if (!Gn) return !0;
        if ($i(t)) return !1;
        if (t = t.toLowerCase(), null != Ci[t]) return Ci[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1 ? Ci[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Ci[t] = /HTMLUnknownElement/.test(e.toString());
    }, h(Rt.options.directives, ro), h(Rt.options.components, so), Rt.prototype.__patch__ = Gn ? eo : y, 
    Rt.prototype.$mount = function(t, e) {
        return t = t && Gn ? Zt(t) : void 0, function(t, e, n) {
            t.$el = e, t.$options.render || (t.$options.render = gr), vt(t, "beforeMount");
            var r;
            return r = function() {
                t._update(t._render(), n);
            }, new Kr(t, r, y, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, vt(t, "mounted")), 
            t;
        }(this, t, e);
    }, Rt.nextTick(function() {
        Jn.devtools && lr && lr.emit("init", Rt);
    }, 0);
    var co, uo = /\{\{((?:.|\n)+?)\}\}/g, lo = /[-.*+?^${}()|[\]\/\\]/g, fo = p(function(t) {
        var e = t[0].replace(lo, "\\$&"), n = t[1].replace(lo, "\\$&");
        return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
    }), po = {
        staticKeys: [ "staticClass" ],
        transformNode: function(t, e) {
            e.warn;
            var n = he(t, "class");
            n && (t.staticClass = JSON.stringify(n));
            var r = ve(t, "class", !1);
            r && (t.classBinding = r);
        },
        genData: function(t) {
            var e = "";
            return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), 
            e;
        }
    }, vo = {
        staticKeys: [ "staticStyle" ],
        transformNode: function(t, e) {
            e.warn;
            var n = he(t, "style");
            n && (t.staticStyle = JSON.stringify(Fi(n)));
            var r = ve(t, "style", !1);
            r && (t.styleBinding = r);
        },
        genData: function(t) {
            var e = "";
            return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), 
            e;
        }
    }, ho = function(t) {
        return co = co || document.createElement("div"), co.innerHTML = t, co.textContent;
    }, mo = u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), yo = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), go = u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), _o = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, bo = "[a-zA-Z_][\\w\\-\\.]*", $o = "((?:" + bo + "\\:)?" + bo + ")", Co = new RegExp("^<" + $o), wo = /^\s*(\/?)>/, xo = new RegExp("^<\\/" + $o + "[^>]*>"), ko = /^<!DOCTYPE [^>]+>/i, Ao = /^<!--/, Oo = /^<!\[/, So = !1;
    "x".replace(/x(.)?/g, function(t, e) {
        So = "" === e;
    });
    var To, Eo, jo, No, Io, Lo, Mo, Do, Po, Fo, Ro, Ho = u("script,style,textarea", !0), Bo = {}, Uo = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t"
    }, Vo = /&(?:lt|gt|quot|amp);/g, zo = /&(?:lt|gt|quot|amp|#10|#9);/g, Ko = u("pre,textarea", !0), Jo = function(t, e) {
        return t && Ko(t) && "\n" === e[0];
    }, qo = /^@|^v-on:/, Wo = /^v-|^@|^:/, Go = /(.*?)\s+(?:in|of)\s+(.*)/, Zo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Xo = /^\(|\)$/g, Yo = /:(.*)$/, Qo = /^:|^v-bind:/, ta = /\.[^.]+/g, ea = p(ho), na = /^xmlns:NS\d+/, ra = /^NS\d+:/, ia = [ po, vo, {
        preTransformNode: function(t, e) {
            if ("input" === t.tag) {
                var n = t.attrsMap;
                if (n["v-model"] && (n["v-bind:type"] || n[":type"])) {
                    var r = ve(t, "type"), i = he(t, "v-if", !0), o = i ? "&&(" + i + ")" : "", a = null != he(t, "v-else", !0), s = he(t, "v-else-if", !0), c = fn(t);
                    un(c), fe(c, "type", "checkbox"), cn(c, e), c.processed = !0, c.if = "(" + r + ")==='checkbox'" + o, 
                    ln(c, {
                        exp: c.if,
                        block: c
                    });
                    var u = fn(t);
                    he(u, "v-for", !0), fe(u, "type", "radio"), cn(u, e), ln(c, {
                        exp: "(" + r + ")==='radio'" + o,
                        block: u
                    });
                    var l = fn(t);
                    return he(l, "v-for", !0), fe(l, ":type", r), cn(l, e), ln(c, {
                        exp: i,
                        block: l
                    }), a ? c.else = !0 : s && (c.elseif = s), c;
                }
            }
        }
    } ], oa = {
        expectHTML: !0,
        modules: ia,
        directives: {
            model: function(t, e, n) {
                var r = e.value, i = e.modifiers, o = t.tag, a = t.attrsMap.type;
                if (t.component) return me(t, r, i), !1;
                if ("select" === o) !function(t, e, n) {
                    var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                    r = r + " " + ye(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), 
                    de(t, "change", r, null, !0);
                }(t, r, i); else if ("input" === o && "checkbox" === a) !function(t, e, n) {
                    var r = n && n.number, i = ve(t, "value") || "null", o = ve(t, "true-value") || "true", a = ve(t, "false-value") || "false";
                    ue(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === o ? ":(" + e + ")" : ":_q(" + e + "," + o + ")")), 
                    de(t, "change", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + e + "=$$a.concat([$$v]))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + ye(e, "$$c") + "}", null, !0);
                }(t, r, i); else if ("input" === o && "radio" === a) !function(t, e, n) {
                    var r = n && n.number, i = ve(t, "value") || "null";
                    ue(t, "checked", "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"), de(t, "change", ye(e, i), null, !0);
                }(t, r, i); else if ("input" === o || "textarea" === o) !function(t, e, n) {
                    var r = t.attrsMap.type, i = n || {}, o = i.lazy, a = i.number, s = i.trim, c = !o && "range" !== r, u = o ? "change" : "range" === r ? Li : "input", l = "$event.target.value";
                    s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
                    var f = ye(e, l);
                    c && (f = "if($event.target.composing)return;" + f), ue(t, "value", "(" + e + ")"), 
                    de(t, u, f, null, !0), (s || a) && de(t, "blur", "$forceUpdate()");
                }(t, r, i); else if (!Jn.isReservedTag(o)) return me(t, r, i), !1;
                return !0;
            },
            text: function(t, e) {
                e.value && ue(t, "textContent", "_s(" + e.value + ")");
            },
            html: function(t, e) {
                e.value && ue(t, "innerHTML", "_s(" + e.value + ")");
            }
        },
        isPreTag: function(t) {
            return "pre" === t;
        },
        isUnaryTag: mo,
        mustUseProp: fi,
        canBeLeftOpenTag: yo,
        isReservedTag: $i,
        getTagNamespace: Gt,
        staticKeys: function(t) {
            return t.reduce(function(t, e) {
                return t.concat(e.staticKeys || []);
            }, []).join(",");
        }(ia)
    }, aa = p(function(t) {
        return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""));
    }), sa = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/, ca = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/, ua = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [ 8, 46 ]
    }, la = function(t) {
        return "if(" + t + ")return null;";
    }, fa = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: la("$event.target !== $event.currentTarget"),
        ctrl: la("!$event.ctrlKey"),
        shift: la("!$event.shiftKey"),
        alt: la("!$event.altKey"),
        meta: la("!$event.metaKey"),
        left: la("'button' in $event && $event.button !== 0"),
        middle: la("'button' in $event && $event.button !== 1"),
        right: la("'button' in $event && $event.button !== 2")
    }, pa = {
        on: function(t, e) {
            t.wrapListeners = function(t) {
                return "_g(" + t + "," + e.value + ")";
            };
        },
        bind: function(t, e) {
            t.wrapData = function(n) {
                return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")";
            };
        },
        cloak: y
    }, da = function(t) {
        this.options = t, this.warn = t.warn || se, this.transforms = ce(t.modules, "transformCode"), 
        this.dataGenFns = ce(t.modules, "genData"), this.directives = h(h({}, pa), t.directives);
        var e = t.isReservedTag || Bn;
        this.maybeComponent = function(t) {
            return !e(t.tag);
        }, this.onceId = 0, this.staticRenderFns = [];
    }, va = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), 
    new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), 
    function(t) {
        return function(e) {
            function n(n, r) {
                var i = Object.create(e), o = [], a = [];
                if (i.warn = function(t, e) {
                    (e ? a : o).push(t);
                }, r) {
                    r.modules && (i.modules = (e.modules || []).concat(r.modules)), r.directives && (i.directives = h(Object.create(e.directives || null), r.directives));
                    for (var s in r) "modules" !== s && "directives" !== s && (i[s] = r[s]);
                }
                var c = t(n, i);
                return c.errors = o, c.tips = a, c;
            }
            return {
                compile: n,
                compileToFunctions: function(t) {
                    var e = Object.create(null);
                    return function(n, r, i) {
                        (r = h({}, r)).warn, delete r.warn;
                        var o = r.delimiters ? String(r.delimiters) + n : n;
                        if (e[o]) return e[o];
                        var a = t(n, r), s = {}, c = [];
                        return s.render = Tn(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function(t) {
                            return Tn(t, c);
                        }), e[o] = s;
                    };
                }(n)
            };
        };
    }(function(t, e) {
        var n = sn(t.trim(), e);
        !1 !== e.optimize && function(t, e) {
            t && (Po = aa(e.staticKeys || ""), Fo = e.isReservedTag || Bn, pn(t), dn(t, !1));
        }(n, e);
        var r = yn(n, e);
        return {
            ast: n,
            render: r.render,
            staticRenderFns: r.staticRenderFns
        };
    })(oa).compileToFunctions), ha = !!Gn && En(!1), ma = !!Gn && En(!0), ya = p(function(t) {
        var e = Zt(t);
        return e && e.innerHTML;
    }), ga = Rt.prototype.$mount;
    return Rt.prototype.$mount = function(t, e) {
        if ((t = t && Zt(t)) === document.body || t === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r) if ("string" == typeof r) "#" === r.charAt(0) && (r = ya(r)); else {
                if (!r.nodeType) return this;
                r = r.innerHTML;
            } else t && (r = function(t) {
                if (t.outerHTML) return t.outerHTML;
                var e = document.createElement("div");
                return e.appendChild(t.cloneNode(!0)), e.innerHTML;
            }(t));
            if (r) {
                var i = va(r, {
                    shouldDecodeNewlines: ha,
                    shouldDecodeNewlinesForHref: ma,
                    delimiters: n.delimiters,
                    comments: n.comments
                }, this), o = i.render, a = i.staticRenderFns;
                n.render = o, n.staticRenderFns = a;
            }
        }
        return ga.call(this, t, e);
    }, Rt.compile = va, Rt;
});

(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define([ "jquery" ], a);
    } else {
        a(jQuery);
    }
})(function(f) {
    var p = "left", o = "right", e = "up", x = "down", c = "in", z = "out", m = "none", s = "auto", l = "swipe", t = "pinch", A = "tap", j = "doubletap", b = "longtap", y = "hold", D = "horizontal", u = "vertical", i = "all", r = 10, g = "start", k = "move", h = "end", q = "cancel", a = "ontouchstart" in window, v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, B = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(G) {
        var F = f(this), E = F.data(B);
        if (E && typeof G === "string") {
            if (E[G]) {
                return E[G].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                f.error("Method " + G + " does not exist on jQuery.swipe");
            }
        } else {
            if (!E && (typeof G === "object" || !G)) {
                return w.apply(this, arguments);
            }
        }
        return F;
    };
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: z
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: D,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };
    function w(E) {
        if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) {
            E.allowPageScroll = m;
        }
        if (E.click !== undefined && E.tap === undefined) {
            E.tap = E.click;
        }
        if (!E) {
            E = {};
        }
        E = f.extend({}, f.fn.swipe.defaults, E);
        return this.each(function() {
            var G = f(this);
            var F = G.data(B);
            if (!F) {
                F = new C(this, E);
                G.data(B, F);
            }
        });
    }
    function C(a4, av) {
        var az = a || d || !av.fallbackToMouseEvents, J = az ? d ? v ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", ay = az ? d ? v ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", U = az ? d ? v ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", S = az ? null : "mouseleave", aD = d ? v ? "MSPointerCancel" : "pointercancel" : "touchcancel";
        var ag = 0, aP = null, ab = 0, a1 = 0, aZ = 0, G = 1, aq = 0, aJ = 0, M = null;
        var aR = f(a4);
        var Z = "start";
        var W = 0;
        var aQ = null;
        var T = 0, a2 = 0, a5 = 0, ad = 0, N = 0;
        var aW = null, af = null;
        try {
            aR.bind(J, aN);
            aR.bind(aD, a9);
        } catch (ak) {
            f.error("events not supported " + J + "," + aD + " on jQuery.swipe");
        }
        this.enable = function() {
            aR.bind(J, aN);
            aR.bind(aD, a9);
            return aR;
        };
        this.disable = function() {
            aK();
            return aR;
        };
        this.destroy = function() {
            aK();
            aR.data(B, null);
            aR = null;
        };
        this.option = function(bc, bb) {
            if (av[bc] !== undefined) {
                if (bb === undefined) {
                    return av[bc];
                } else {
                    av[bc] = bb;
                }
            } else {
                f.error("Option " + bc + " does not exist on jQuery.swipe.options");
            }
            return null;
        };
        function aN(bd) {
            if (aB()) {
                return;
            }
            if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
                return;
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bb = a ? be.touches[0] : be;
            Z = g;
            if (a) {
                W = be.touches.length;
            } else {
                bd.preventDefault();
            }
            ag = 0;
            aP = null;
            aJ = null;
            ab = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            aq = 0;
            aQ = aj();
            M = aa();
            R();
            if (!a || (W === av.fingers || av.fingers === i) || aX()) {
                ai(0, bb);
                T = at();
                if (W == 2) {
                    ai(1, be.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start);
                }
                if (av.swipeStatus || av.pinchStatus) {
                    bc = O(be, Z);
                }
            } else {
                bc = false;
            }
            if (bc === false) {
                Z = q;
                O(be, Z);
                return bc;
            } else {
                if (av.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [ be.target ]);
                        if (av.hold) {
                            bc = av.hold.call(aR, be, be.target);
                        }
                    }, this), av.longTapThreshold);
                }
                ao(true);
            }
            return null;
        }
        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (Z === h || Z === q || am()) {
                return;
            }
            var bd, bc = a ? bh.touches[0] : bh;
            var bf = aH(bc);
            a2 = at();
            if (a) {
                W = bh.touches.length;
            }
            if (av.hold) {
                clearTimeout(af);
            }
            Z = k;
            if (W == 2) {
                if (a1 == 0) {
                    ai(1, bh.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start);
                } else {
                    aH(bh.touches[1]);
                    aZ = au(aQ[0].end, aQ[1].end);
                    aJ = ar(aQ[0].end, aQ[1].end);
                }
                G = a7(a1, aZ);
                aq = Math.abs(a1 - aZ);
            }
            if (W === av.fingers || av.fingers === i || !a || aX()) {
                aP = aL(bf.start, bf.end);
                al(be, aP);
                ag = aS(bf.start, bf.end);
                ab = aM();
                aI(aP, ag);
                if (av.swipeStatus || av.pinchStatus) {
                    bd = O(bh, Z);
                }
                if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
                    var bb = true;
                    if (av.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = E(bf.end, bg);
                    }
                    if (!av.triggerOnTouchEnd && bb) {
                        Z = aC(k);
                    } else {
                        if (av.triggerOnTouchLeave && !bb) {
                            Z = aC(h);
                        }
                    }
                    if (Z == q || Z == h) {
                        O(bh, Z);
                    }
                }
            } else {
                Z = q;
                O(bh, Z);
            }
            if (bd === false) {
                Z = q;
                O(bh, Z);
            }
        }
        function L(bb) {
            var bc = bb.originalEvent;
            if (a) {
                if (bc.touches.length > 0) {
                    F();
                    return true;
                }
            }
            if (am()) {
                W = ad;
            }
            a2 = at();
            ab = aM();
            if (ba() || !an()) {
                Z = q;
                O(bc, Z);
            } else {
                if (av.triggerOnTouchEnd || av.triggerOnTouchEnd == false && Z === k) {
                    bb.preventDefault();
                    Z = h;
                    O(bc, Z);
                } else {
                    if (!av.triggerOnTouchEnd && a6()) {
                        Z = h;
                        aF(bc, Z, A);
                    } else {
                        if (Z === k) {
                            Z = q;
                            O(bc, Z);
                        }
                    }
                }
            }
            ao(false);
            return null;
        }
        function a9() {
            W = 0;
            a2 = 0;
            T = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            R();
            ao(false);
        }
        function K(bb) {
            var bc = bb.originalEvent;
            if (av.triggerOnTouchLeave) {
                Z = aC(h);
                O(bc, Z);
            }
        }
        function aK() {
            aR.unbind(J, aN);
            aR.unbind(aD, a9);
            aR.unbind(ay, a3);
            aR.unbind(U, L);
            if (S) {
                aR.unbind(S, K);
            }
            ao(false);
        }
        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = an();
            var bb = ba();
            if (!bd || bb) {
                be = q;
            } else {
                if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
                    be = h;
                } else {
                    if (!bc && bf == h && av.triggerOnTouchLeave) {
                        be = q;
                    }
                }
            }
            return be;
        }
        function O(bd, bb) {
            var bc = undefined;
            if (I() || V() || (P() || aX())) {
                if (I() || V()) {
                    bc = aF(bd, bb, l);
                }
                if ((P() || aX()) && bc !== false) {
                    bc = aF(bd, bb, t);
                }
            } else {
                if (aG() && bc !== false) {
                    bc = aF(bd, bb, j);
                } else {
                    if (ap() && bc !== false) {
                        bc = aF(bd, bb, b);
                    } else {
                        if (ah() && bc !== false) {
                            bc = aF(bd, bb, A);
                        }
                    }
                }
            }
            if (bb === q) {
                a9(bd);
            }
            if (bb === h) {
                if (a) {
                    if (bd.touches.length == 0) {
                        a9(bd);
                    }
                } else {
                    a9(bd);
                }
            }
            return bc;
        }
        function aF(be, bb, bd) {
            var bc = undefined;
            if (bd == l) {
                aR.trigger("swipeStatus", [ bb, aP || null, ag || 0, ab || 0, W, aQ ]);
                if (av.swipeStatus) {
                    bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
                    if (bc === false) {
                        return false;
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [ aP, ag, ab, W, aQ ]);
                    if (av.swipe) {
                        bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
                        if (bc === false) {
                            return false;
                        }
                    }
                    switch (aP) {
                      case p:
                        aR.trigger("swipeLeft", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeLeft) {
                            bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;

                      case o:
                        aR.trigger("swipeRight", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeRight) {
                            bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;

                      case e:
                        aR.trigger("swipeUp", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeUp) {
                            bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;

                      case x:
                        aR.trigger("swipeDown", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeDown) {
                            bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [ bb, aJ || null, aq || 0, ab || 0, W, G, aQ ]);
                if (av.pinchStatus) {
                    bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
                    if (bc === false) {
                        return false;
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                      case c:
                        aR.trigger("pinchIn", [ aJ || null, aq || 0, ab || 0, W, G, aQ ]);
                        if (av.pinchIn) {
                            bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ);
                        }
                        break;

                      case z:
                        aR.trigger("pinchOut", [ aJ || null, aq || 0, ab || 0, W, G, aQ ]);
                        if (av.pinchOut) {
                            bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ);
                        }
                        break;
                    }
                }
            }
            if (bd == A) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Y() && !H()) {
                        N = at();
                        aW = setTimeout(f.proxy(function() {
                            N = null;
                            aR.trigger("tap", [ be.target ]);
                            if (av.tap) {
                                bc = av.tap.call(aR, be, be.target);
                            }
                        }, this), av.doubleTapThreshold);
                    } else {
                        N = null;
                        aR.trigger("tap", [ be.target ]);
                        if (av.tap) {
                            bc = av.tap.call(aR, be, be.target);
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        N = null;
                        aR.trigger("doubletap", [ be.target ]);
                        if (av.doubleTap) {
                            bc = av.doubleTap.call(aR, be, be.target);
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            N = null;
                            aR.trigger("longtap", [ be.target ]);
                            if (av.longTap) {
                                bc = av.longTap.call(aR, be, be.target);
                            }
                        }
                    }
                }
            }
            return bc;
        }
        function an() {
            var bb = true;
            if (av.threshold !== null) {
                bb = ag >= av.threshold;
            }
            return bb;
        }
        function ba() {
            var bb = false;
            if (av.cancelThreshold !== null && aP !== null) {
                bb = aT(aP) - ag >= av.cancelThreshold;
            }
            return bb;
        }
        function ae() {
            if (av.pinchThreshold !== null) {
                return aq >= av.pinchThreshold;
            }
            return true;
        }
        function aA() {
            var bb;
            if (av.maxTimeThreshold) {
                if (ab >= av.maxTimeThreshold) {
                    bb = false;
                } else {
                    bb = true;
                }
            } else {
                bb = true;
            }
            return bb;
        }
        function al(bb, bc) {
            if (av.preventDefaultEvents === false) {
                return;
            }
            if (av.allowPageScroll === m) {
                bb.preventDefault();
            } else {
                var bd = av.allowPageScroll === s;
                switch (bc) {
                  case p:
                    if (av.swipeLeft && bd || !bd && av.allowPageScroll != D) {
                        bb.preventDefault();
                    }
                    break;

                  case o:
                    if (av.swipeRight && bd || !bd && av.allowPageScroll != D) {
                        bb.preventDefault();
                    }
                    break;

                  case e:
                    if (av.swipeUp && bd || !bd && av.allowPageScroll != u) {
                        bb.preventDefault();
                    }
                    break;

                  case x:
                    if (av.swipeDown && bd || !bd && av.allowPageScroll != u) {
                        bb.preventDefault();
                    }
                    break;
                }
            }
        }
        function a8() {
            var bc = aO();
            var bb = X();
            var bd = ae();
            return bc && bb && bd;
        }
        function aX() {
            return !!(av.pinchStatus || av.pinchIn || av.pinchOut);
        }
        function P() {
            return !!(a8() && aX());
        }
        function aV() {
            var be = aA();
            var bg = an();
            var bd = aO();
            var bb = X();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf;
        }
        function V() {
            return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown);
        }
        function I() {
            return !!(aV() && V());
        }
        function aO() {
            return W === av.fingers || av.fingers === i || !a;
        }
        function X() {
            return aQ[0].end.x !== 0;
        }
        function a6() {
            return !!av.tap;
        }
        function Y() {
            return !!av.doubleTap;
        }
        function aU() {
            return !!av.longTap;
        }
        function Q() {
            if (N == null) {
                return false;
            }
            var bb = at();
            return Y() && bb - N <= av.doubleTapThreshold;
        }
        function H() {
            return Q();
        }
        function ax() {
            return (W === 1 || !a) && (isNaN(ag) || ag < av.threshold);
        }
        function a0() {
            return ab > av.longTapThreshold && ag < r;
        }
        function ah() {
            return !!(ax() && a6());
        }
        function aG() {
            return !!(Q() && Y());
        }
        function ap() {
            return !!(a0() && aU());
        }
        function F() {
            a5 = at();
            ad = event.touches.length + 1;
        }
        function R() {
            a5 = 0;
            ad = 0;
        }
        function am() {
            var bb = false;
            if (a5) {
                var bc = at() - a5;
                if (bc <= av.fingerReleaseThreshold) {
                    bb = true;
                }
            }
            return bb;
        }
        function aB() {
            return !!(aR.data(B + "_intouch") === true);
        }
        function ao(bb) {
            if (bb === true) {
                aR.bind(ay, a3);
                aR.bind(U, L);
                if (S) {
                    aR.bind(S, K);
                }
            } else {
                aR.unbind(ay, a3, false);
                aR.unbind(U, L, false);
                if (S) {
                    aR.unbind(S, K, false);
                }
            }
            aR.data(B + "_intouch", bb === true);
        }
        function ai(bc, bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            aQ[bc].identifier = bd;
            aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
            aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
            return aQ[bc];
        }
        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ac(bd);
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc;
        }
        function ac(bc) {
            for (var bb = 0; bb < aQ.length; bb++) {
                if (aQ[bb].identifier == bc) {
                    return aQ[bb];
                }
            }
        }
        function aj() {
            var bb = [];
            for (var bc = 0; bc <= 5; bc++) {
                bb.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            }
            return bb;
        }
        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            M[bb].distance = bc;
        }
        function aT(bb) {
            if (M[bb]) {
                return M[bb].distance;
            }
            return undefined;
        }
        function aa() {
            var bb = {};
            bb[p] = aw(p);
            bb[o] = aw(o);
            bb[e] = aw(e);
            bb[x] = aw(x);
            return bb;
        }
        function aw(bb) {
            return {
                direction: bb,
                distance: 0
            };
        }
        function aM() {
            return a2 - T;
        }
        function au(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb));
        }
        function a7(bb, bc) {
            var bd = bc / bb * 1;
            return bd.toFixed(2);
        }
        function ar() {
            if (G < 1) {
                return z;
            } else {
                return c;
            }
        }
        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)));
        }
        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf);
            }
            return bf;
        }
        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if (bd <= 45 && bd >= 0) {
                return p;
            } else {
                if (bd <= 360 && bd >= 315) {
                    return p;
                } else {
                    if (bd >= 135 && bd <= 225) {
                        return o;
                    } else {
                        if (bd > 45 && bd < 135) {
                            return x;
                        } else {
                            return e;
                        }
                    }
                }
            }
        }
        function at() {
            var bb = new Date();
            return bb.getTime();
        }
        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {
                left: bd.left,
                right: bd.left + bb.outerWidth(),
                top: bd.top,
                bottom: bd.top + bb.outerHeight()
            };
            return bc;
        }
        function E(bb, bc) {
            return bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom;
        }
    }
});

(function($) {
    "use strict";
    $.expr[":"].icontains = function(obj, index, meta) {
        return icontains($(obj).text(), meta[3]);
    };
    $.expr[":"].aicontains = function(obj, index, meta) {
        return icontains($(obj).data("normalizedText") || $(obj).text(), meta[3]);
    };
    function icontains(haystack, needle) {
        return haystack.toUpperCase().indexOf(needle.toUpperCase()) > -1;
    }
    function normalizeToBase(text) {
        var rExps = [ {
            re: /[\xC0-\xC6]/g,
            ch: "A"
        }, {
            re: /[\xE0-\xE6]/g,
            ch: "a"
        }, {
            re: /[\xC8-\xCB]/g,
            ch: "E"
        }, {
            re: /[\xE8-\xEB]/g,
            ch: "e"
        }, {
            re: /[\xCC-\xCF]/g,
            ch: "I"
        }, {
            re: /[\xEC-\xEF]/g,
            ch: "i"
        }, {
            re: /[\xD2-\xD6]/g,
            ch: "O"
        }, {
            re: /[\xF2-\xF6]/g,
            ch: "o"
        }, {
            re: /[\xD9-\xDC]/g,
            ch: "U"
        }, {
            re: /[\xF9-\xFC]/g,
            ch: "u"
        }, {
            re: /[\xC7-\xE7]/g,
            ch: "c"
        }, {
            re: /[\xD1]/g,
            ch: "N"
        }, {
            re: /[\xF1]/g,
            ch: "n"
        } ];
        $.each(rExps, function() {
            text = text.replace(this.re, this.ch);
        });
        return text;
    }
    function htmlEscape(html) {
        var escapeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };
        var source = "(?:" + Object.keys(escapeMap).join("|") + ")", testRegexp = new RegExp(source), replaceRegexp = new RegExp(source, "g"), string = html == null ? "" : "" + html;
        return testRegexp.test(string) ? string.replace(replaceRegexp, function(match) {
            return escapeMap[match];
        }) : string;
    }
    var Selectpicker = function(element, options, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.$button = null;
        this.$menu = null;
        this.$lis = null;
        this.options = options;
        if (this.options.title === null) {
            this.options.title = this.$element.attr("title");
        }
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.setStyle = Selectpicker.prototype.setStyle;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.destroy = Selectpicker.prototype.remove;
        this.remove = Selectpicker.prototype.remove;
        this.show = Selectpicker.prototype.show;
        this.hide = Selectpicker.prototype.hide;
        this.init();
    };
    Selectpicker.VERSION = "1.6.3";
    Selectpicker.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results match",
        countSelectedText: function(numSelected, numTotal) {
            return numSelected == 1 ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function(numAll, numGroup) {
            var arr = [];
            arr[0] = numAll == 1 ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)";
            arr[1] = numGroup == 1 ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)";
            return arr;
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        multipleSeparator: ", ",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: false,
        container: false,
        hideDisabled: false,
        showSubtext: false,
        showIcon: true,
        showContent: true,
        dropupAuto: true,
        header: false,
        liveSearch: false,
        actionsBox: false,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        maxOptions: false,
        mobile: false,
        selectOnTab: false,
        dropdownAlignRight: false,
        searchAccentInsensitive: false
    };
    Selectpicker.prototype = {
        constructor: Selectpicker,
        init: function() {
            var that = this, id = this.$element.attr("id");
            this.$element.hide();
            this.multiple = this.$element.prop("multiple");
            this.autofocus = this.$element.prop("autofocus");
            this.$newElement = this.createView();
            this.$element.after(this.$newElement);
            this.$menu = this.$newElement.find("> .dropdown-menu");
            this.$button = this.$newElement.find("> button");
            this.$searchbox = this.$newElement.find("input");
            if (this.options.dropdownAlignRight) this.$menu.addClass("dropdown-menu-right");
            if (typeof id !== "undefined") {
                this.$button.attr("data-id", id);
                $('label[for="' + id + '"]').click(function(e) {
                    e.preventDefault();
                    that.$button.focus();
                });
            }
            this.checkDisabled();
            this.clickListener();
            if (this.options.liveSearch) this.liveSearchListener();
            this.render();
            this.liHeight();
            this.setStyle();
            this.setWidth();
            if (this.options.container) this.selectPosition();
            this.$menu.data("this", this);
            this.$newElement.data("this", this);
            if (this.options.mobile) this.mobile();
        },
        createDropdown: function() {
            var multiple = this.multiple ? " show-tick" : "", inputGroup = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "", autofocus = this.autofocus ? " autofocus" : "", btnSize = this.$element.parents().hasClass("form-group-lg") ? " btn-lg" : this.$element.parents().hasClass("form-group-sm") ? " btn-sm" : "";
            var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "";
            var searchbox = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "";
            var actionsbox = this.options.actionsBox ? '<div class="bs-actionsbox">' + '<div class="btn-group btn-block">' + '<button class="actions-btn bs-select-all btn btn-sm btn-default">' + this.options.selectAllText + "</button>" + '<button class="actions-btn bs-deselect-all btn btn-sm btn-default">' + this.options.deselectAllText + "</button>" + "</div>" + "</div>" : "";
            var drop = '<div class="btn-group bootstrap-select' + multiple + inputGroup + '">' + '<button type="button" class="btn dropdown-toggle selectpicker' + btnSize + '" data-toggle="dropdown"' + autofocus + ">" + '<span class="filter-option pull-left"></span>&nbsp;' + '<span class="caret"></span>' + "</button>" + '<div class="dropdown-menu open">' + header + searchbox + actionsbox + '<ul class="dropdown-menu inner selectpicker" role="menu">' + "</ul>" + "</div>" + "</div>";
            return $(drop);
        },
        createView: function() {
            var $drop = this.createDropdown();
            var $li = this.createLi();
            $drop.find("ul").append($li);
            return $drop;
        },
        reloadLi: function() {
            this.destroyLi();
            var $li = this.createLi();
            this.$menu.find("ul").append($li);
        },
        destroyLi: function() {
            this.$menu.find("li").remove();
        },
        createLi: function() {
            var that = this, _li = [], optID = 0;
            var generateLI = function(content, index, classes) {
                return "<li" + (typeof classes !== "undefined" ? ' class="' + classes + '"' : "") + (typeof index !== "undefined" | null === index ? ' data-original-index="' + index + '"' : "") + ">" + content + "</li>";
            };
            var generateA = function(text, classes, inline, optgroup) {
                var normText = normalizeToBase(htmlEscape(text));
                return '<a tabindex="0"' + (typeof classes !== "undefined" ? ' class="' + classes + '"' : "") + (typeof inline !== "undefined" ? ' style="' + inline + '"' : "") + (typeof optgroup !== "undefined" ? 'data-optgroup="' + optgroup + '"' : "") + ' data-normalized-text="' + normText + '"' + ">" + text + '<span class="' + that.options.iconBase + " " + that.options.tickIcon + ' check-mark"></span>' + "</a>";
            };
            this.$element.find("option").each(function() {
                var $this = $(this);
                var optionClass = $this.attr("class") || "", inline = $this.attr("style"), text = $this.data("content") ? $this.data("content") : $this.html(), subtext = typeof $this.data("subtext") !== "undefined" ? '<small class="muted text-muted">' + $this.data("subtext") + "</small>" : "", icon = typeof $this.data("icon") !== "undefined" ? '<span class="' + that.options.iconBase + " " + $this.data("icon") + '"></span> ' : "", isDisabled = $this.is(":disabled") || $this.parent().is(":disabled"), index = $this[0].index;
                if (icon !== "" && isDisabled) {
                    icon = "<span>" + icon + "</span>";
                }
                if (!$this.data("content")) {
                    text = icon + '<span class="text">' + text + subtext + "</span>";
                }
                if (that.options.hideDisabled && isDisabled) {
                    return;
                }
                if ($this.parent().is("optgroup") && $this.data("divider") !== true) {
                    if ($this.index() === 0) {
                        optID += 1;
                        var label = $this.parent().attr("label");
                        var labelSubtext = typeof $this.parent().data("subtext") !== "undefined" ? '<small class="muted text-muted">' + $this.parent().data("subtext") + "</small>" : "";
                        var labelIcon = $this.parent().data("icon") ? '<span class="' + that.options.iconBase + " " + $this.parent().data("icon") + '"></span> ' : "";
                        label = labelIcon + '<span class="text">' + label + labelSubtext + "</span>";
                        if (index !== 0 && _li.length > 0) {
                            _li.push(generateLI("", null, "divider"));
                        }
                        _li.push(generateLI(label, null, "dropdown-header"));
                    }
                    _li.push(generateLI(generateA(text, "opt " + optionClass, inline, optID), index));
                } else if ($this.data("divider") === true) {
                    _li.push(generateLI("", index, "divider"));
                } else if ($this.data("hidden") === true) {
                    _li.push(generateLI(generateA(text, optionClass, inline), index, "hide is-hidden"));
                } else {
                    _li.push(generateLI(generateA(text, optionClass, inline), index));
                }
            });
            if (!this.multiple && this.$element.find("option:selected").length === 0 && !this.options.title) {
                this.$element.find("option").eq(0).prop("selected", true).attr("selected", "selected");
            }
            return $(_li.join(""));
        },
        findLis: function() {
            if (this.$lis == null) this.$lis = this.$menu.find("li");
            return this.$lis;
        },
        render: function(updateLi) {
            var that = this;
            if (updateLi !== false) {
                this.$element.find("option").each(function(index) {
                    that.setDisabled(index, $(this).is(":disabled") || $(this).parent().is(":disabled"));
                    that.setSelected(index, $(this).is(":selected"));
                });
            }
            this.tabIndex();
            var notDisabled = this.options.hideDisabled ? ":not([disabled])" : "";
            var selectedItems = this.$element.find("option:selected" + notDisabled).map(function() {
                var $this = $(this);
                var icon = $this.data("icon") && that.options.showIcon ? '<i class="' + that.options.iconBase + " " + $this.data("icon") + '"></i> ' : "";
                var subtext;
                if (that.options.showSubtext && $this.attr("data-subtext") && !that.multiple) {
                    subtext = ' <small class="muted text-muted">' + $this.data("subtext") + "</small>";
                } else {
                    subtext = "";
                }
                if ($this.data("content") && that.options.showContent) {
                    return $this.data("content");
                } else if (typeof $this.attr("title") !== "undefined") {
                    return $this.attr("title");
                } else {
                    return icon + $this.html() + subtext;
                }
            }).toArray();
            var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var max = this.options.selectedTextFormat.split(">");
                if (max.length > 1 && selectedItems.length > max[1] || max.length == 1 && selectedItems.length >= 2) {
                    notDisabled = this.options.hideDisabled ? ", [disabled]" : "";
                    var totalCount = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length, tr8nText = typeof this.options.countSelectedText === "function" ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
                    title = tr8nText.replace("{0}", selectedItems.length.toString()).replace("{1}", totalCount.toString());
                }
            }
            this.options.title = this.$element.attr("title");
            if (this.options.selectedTextFormat == "static") {
                title = this.options.title;
            }
            if (!title) {
                title = typeof this.options.title !== "undefined" ? this.options.title : this.options.noneSelectedText;
            }
            this.$button.attr("title", htmlEscape(title));
            this.$newElement.find(".filter-option").html(title);
        },
        setStyle: function(style, status) {
            if (this.$element.attr("class")) {
                this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));
            }
            var buttonClass = style ? style : this.options.style;
            if (status == "add") {
                this.$button.addClass(buttonClass);
            } else if (status == "remove") {
                this.$button.removeClass(buttonClass);
            } else {
                this.$button.removeClass(this.options.style);
                this.$button.addClass(buttonClass);
            }
        },
        liHeight: function() {
            if (this.options.size === false) return;
            var $selectClone = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", false).end().appendTo("body"), $menuClone = $selectClone.addClass("open").find("> .dropdown-menu"), liHeight = $menuClone.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(), headerHeight = this.options.header ? $menuClone.find(".popover-title").outerHeight() : 0, searchHeight = this.options.liveSearch ? $menuClone.find(".bs-searchbox").outerHeight() : 0, actionsHeight = this.options.actionsBox ? $menuClone.find(".bs-actionsbox").outerHeight() : 0;
            $selectClone.remove();
            this.$newElement.data("liHeight", liHeight).data("headerHeight", headerHeight).data("searchHeight", searchHeight).data("actionsHeight", actionsHeight);
        },
        setSize: function() {
            this.findLis();
            var that = this, menu = this.$menu, menuInner = menu.find(".inner"), selectHeight = this.$newElement.outerHeight(), liHeight = this.$newElement.data("liHeight"), headerHeight = this.$newElement.data("headerHeight"), searchHeight = this.$newElement.data("searchHeight"), actionsHeight = this.$newElement.data("actionsHeight"), divHeight = this.$lis.filter(".divider").outerHeight(true), menuPadding = parseInt(menu.css("padding-top")) + parseInt(menu.css("padding-bottom")) + parseInt(menu.css("border-top-width")) + parseInt(menu.css("border-bottom-width")), notDisabled = this.options.hideDisabled ? ", .disabled" : "", $window = $(window), menuExtras = menuPadding + parseInt(menu.css("margin-top")) + parseInt(menu.css("margin-bottom")) + 2, menuHeight, selectOffsetTop, selectOffsetBot, posVert = function() {
                selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
                selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
            };
            posVert();
            if (this.options.header) menu.css("padding-top", 0);
            if (this.options.size == "auto") {
                var getSize = function() {
                    var minHeight, lisVis = that.$lis.not(".hide");
                    posVert();
                    menuHeight = selectOffsetBot - menuExtras;
                    if (that.options.dropupAuto) {
                        that.$newElement.toggleClass("dropup", selectOffsetTop > selectOffsetBot && menuHeight - menuExtras < menu.height());
                    }
                    if (that.$newElement.hasClass("dropup")) {
                        menuHeight = selectOffsetTop - menuExtras;
                    }
                    if (lisVis.length + lisVis.filter(".dropdown-header").length > 3) {
                        minHeight = liHeight * 3 + menuExtras - 2;
                    } else {
                        minHeight = 0;
                    }
                    menu.css({
                        "max-height": menuHeight + "px",
                        overflow: "hidden",
                        "min-height": minHeight + headerHeight + searchHeight + actionsHeight + "px"
                    });
                    menuInner.css({
                        "max-height": menuHeight - headerHeight - searchHeight - actionsHeight - menuPadding + "px",
                        "overflow-y": "auto",
                        "min-height": Math.max(minHeight - menuPadding, 0) + "px"
                    });
                };
                getSize();
                this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", getSize);
                $(window).off("resize.getSize").on("resize.getSize", getSize);
                $(window).off("scroll.getSize").on("scroll.getSize", getSize);
            } else if (this.options.size && this.options.size != "auto" && menu.find("li" + notDisabled).length > this.options.size) {
                var optIndex = this.$lis.not(".divider" + notDisabled).find(" > *").slice(0, this.options.size).last().parent().index();
                var divLength = this.$lis.slice(0, optIndex + 1).filter(".divider").length;
                menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding;
                if (that.options.dropupAuto) {
                    this.$newElement.toggleClass("dropup", selectOffsetTop > selectOffsetBot && menuHeight < menu.height());
                }
                menu.css({
                    "max-height": menuHeight + headerHeight + searchHeight + actionsHeight + "px",
                    overflow: "hidden"
                });
                menuInner.css({
                    "max-height": menuHeight - menuPadding + "px",
                    "overflow-y": "auto"
                });
            }
        },
        setWidth: function() {
            if (this.options.width == "auto") {
                this.$menu.css("min-width", "0");
                var selectClone = this.$newElement.clone().appendTo("body");
                var ulWidth = selectClone.find("> .dropdown-menu").css("width");
                var btnWidth = selectClone.css("width", "auto").find("> button").css("width");
                selectClone.remove();
                this.$newElement.css("width", Math.max(parseInt(ulWidth), parseInt(btnWidth)) + "px");
            } else if (this.options.width == "fit") {
                this.$menu.css("min-width", "");
                this.$newElement.css("width", "").addClass("fit-width");
            } else if (this.options.width) {
                this.$menu.css("min-width", "");
                this.$newElement.css("width", this.options.width);
            } else {
                this.$menu.css("min-width", "");
                this.$newElement.css("width", "");
            }
            if (this.$newElement.hasClass("fit-width") && this.options.width !== "fit") {
                this.$newElement.removeClass("fit-width");
            }
        },
        selectPosition: function() {
            var that = this, drop = "<div />", $drop = $(drop), pos, actualHeight, getPlacement = function($element) {
                $drop.addClass($element.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", $element.hasClass("dropup"));
                pos = $element.offset();
                actualHeight = $element.hasClass("dropup") ? 0 : $element[0].offsetHeight;
                $drop.css({
                    top: pos.top + actualHeight,
                    left: pos.left,
                    width: $element[0].offsetWidth,
                    position: "absolute"
                });
            };
            this.$newElement.on("click", function() {
                if (that.isDisabled()) {
                    return;
                }
                getPlacement($(this));
                $drop.appendTo(that.options.container);
                $drop.toggleClass("open", !$(this).hasClass("open"));
                $drop.append(that.$menu);
            });
            $(window).resize(function() {
                getPlacement(that.$newElement);
            });
            $(window).on("scroll", function() {
                getPlacement(that.$newElement);
            });
            $("html").on("click", function(e) {
                if ($(e.target).closest(that.$newElement).length < 1) {
                    $drop.removeClass("open");
                }
            });
        },
        setSelected: function(index, selected) {
            this.findLis();
            this.$lis.filter('[data-original-index="' + index + '"]').toggleClass("selected", selected);
        },
        setDisabled: function(index, disabled) {
            this.findLis();
            if (disabled) {
                this.$lis.filter('[data-original-index="' + index + '"]').addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1);
            } else {
                this.$lis.filter('[data-original-index="' + index + '"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0);
            }
        },
        isDisabled: function() {
            return this.$element.is(":disabled");
        },
        checkDisabled: function() {
            var that = this;
            if (this.isDisabled()) {
                this.$button.addClass("disabled").attr("tabindex", -1);
            } else {
                if (this.$button.hasClass("disabled")) {
                    this.$button.removeClass("disabled");
                }
                if (this.$button.attr("tabindex") == -1) {
                    if (!this.$element.data("tabindex")) this.$button.removeAttr("tabindex");
                }
            }
            this.$button.click(function() {
                return !that.isDisabled();
            });
        },
        tabIndex: function() {
            if (this.$element.is("[tabindex]")) {
                this.$element.data("tabindex", this.$element.attr("tabindex"));
                this.$button.attr("tabindex", this.$element.data("tabindex"));
            }
        },
        clickListener: function() {
            var that = this;
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
                e.stopPropagation();
            });
            this.$newElement.on("click", function() {
                that.setSize();
                if (!that.options.liveSearch && !that.multiple) {
                    setTimeout(function() {
                        that.$menu.find(".selected a").focus();
                    }, 10);
                }
            });
            this.$menu.on("click", "li a", function(e) {
                var $this = $(this), clickedIndex = $this.parent().data("originalIndex"), prevValue = that.$element.val(), prevIndex = that.$element.prop("selectedIndex");
                if (that.multiple) {
                    e.stopPropagation();
                }
                e.preventDefault();
                if (!that.isDisabled() && !$this.parent().hasClass("disabled")) {
                    var $options = that.$element.find("option"), $option = $options.eq(clickedIndex), state = $option.prop("selected"), $optgroup = $option.parent("optgroup"), maxOptions = that.options.maxOptions, maxOptionsGrp = $optgroup.data("maxOptions") || false;
                    if (!that.multiple) {
                        $options.prop("selected", false);
                        $option.prop("selected", true);
                        that.$menu.find(".selected").removeClass("selected");
                        that.setSelected(clickedIndex, true);
                    } else {
                        $option.prop("selected", !state);
                        that.setSelected(clickedIndex, !state);
                        $this.blur();
                        if (maxOptions !== false || maxOptionsGrp !== false) {
                            var maxReached = maxOptions < $options.filter(":selected").length, maxReachedGrp = maxOptionsGrp < $optgroup.find("option:selected").length;
                            if (maxOptions && maxReached || maxOptionsGrp && maxReachedGrp) {
                                if (maxOptions && maxOptions == 1) {
                                    $options.prop("selected", false);
                                    $option.prop("selected", true);
                                    that.$menu.find(".selected").removeClass("selected");
                                    that.setSelected(clickedIndex, true);
                                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                                    $optgroup.find("option:selected").prop("selected", false);
                                    $option.prop("selected", true);
                                    var optgroupID = $this.data("optgroup");
                                    that.$menu.find(".selected").has('a[data-optgroup="' + optgroupID + '"]').removeClass("selected");
                                    that.setSelected(clickedIndex, true);
                                } else {
                                    var maxOptionsArr = typeof that.options.maxOptionsText === "function" ? that.options.maxOptionsText(maxOptions, maxOptionsGrp) : that.options.maxOptionsText, maxTxt = maxOptionsArr[0].replace("{n}", maxOptions), maxTxtGrp = maxOptionsArr[1].replace("{n}", maxOptionsGrp), $notify = $('<div class="notify"></div>');
                                    if (maxOptionsArr[2]) {
                                        maxTxt = maxTxt.replace("{var}", maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                                        maxTxtGrp = maxTxtGrp.replace("{var}", maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                                    }
                                    $option.prop("selected", false);
                                    that.$menu.append($notify);
                                    if (maxOptions && maxReached) {
                                        $notify.append($("<div>" + maxTxt + "</div>"));
                                        that.$element.trigger("maxReached.bs.select");
                                    }
                                    if (maxOptionsGrp && maxReachedGrp) {
                                        $notify.append($("<div>" + maxTxtGrp + "</div>"));
                                        that.$element.trigger("maxReachedGrp.bs.select");
                                    }
                                    setTimeout(function() {
                                        that.setSelected(clickedIndex, false);
                                    }, 10);
                                    $notify.delay(750).fadeOut(300, function() {
                                        $(this).remove();
                                    });
                                }
                            }
                        }
                    }
                    if (!that.multiple) {
                        that.$button.focus();
                    } else if (that.options.liveSearch) {
                        that.$searchbox.focus();
                    }
                    if (prevValue != that.$element.val() && that.multiple || prevIndex != that.$element.prop("selectedIndex") && !that.multiple) {
                        that.$element.change();
                    }
                }
            });
            this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(e) {
                if (e.target == this) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!that.options.liveSearch) {
                        that.$button.focus();
                    } else {
                        that.$searchbox.focus();
                    }
                }
            });
            this.$menu.on("click", "li.divider, li.dropdown-header", function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (!that.options.liveSearch) {
                    that.$button.focus();
                } else {
                    that.$searchbox.focus();
                }
            });
            this.$menu.on("click", ".popover-title .close", function() {
                that.$button.focus();
            });
            this.$searchbox.on("click", function(e) {
                e.stopPropagation();
            });
            this.$menu.on("click", ".actions-btn", function(e) {
                if (that.options.liveSearch) {
                    that.$searchbox.focus();
                } else {
                    that.$button.focus();
                }
                e.preventDefault();
                e.stopPropagation();
                if ($(this).is(".bs-select-all")) {
                    that.selectAll();
                } else {
                    that.deselectAll();
                }
                that.$element.change();
            });
            this.$element.change(function() {
                that.render(false);
            });
        },
        liveSearchListener: function() {
            var that = this, no_results = $('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                that.$menu.find(".active").removeClass("active");
                if (!!that.$searchbox.val()) {
                    that.$searchbox.val("");
                    that.$lis.not(".is-hidden").removeClass("hide");
                    if (!!no_results.parent().length) no_results.remove();
                }
                if (!that.multiple) that.$menu.find(".selected").addClass("active");
                setTimeout(function() {
                    that.$searchbox.focus();
                }, 10);
            });
            this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                e.stopPropagation();
            });
            this.$searchbox.on("input propertychange", function() {
                if (that.$searchbox.val()) {
                    if (that.options.searchAccentInsensitive) {
                        that.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains(" + normalizeToBase(that.$searchbox.val()) + ")").parent().addClass("hide");
                    } else {
                        that.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + that.$searchbox.val() + ")").parent().addClass("hide");
                    }
                    if (!that.$menu.find("li").filter(":visible:not(.no-results)").length) {
                        if (!!no_results.parent().length) no_results.remove();
                        no_results.html(that.options.noneResultsText + ' "' + htmlEscape(that.$searchbox.val()) + '"').show();
                        that.$menu.find("li").last().after(no_results);
                    } else if (!!no_results.parent().length) {
                        no_results.remove();
                    }
                } else {
                    that.$lis.not(".is-hidden").removeClass("hide");
                    if (!!no_results.parent().length) no_results.remove();
                }
                that.$menu.find("li.active").removeClass("active");
                that.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus();
                $(this).focus();
            });
        },
        val: function(value) {
            if (typeof value !== "undefined") {
                this.$element.val(value);
                this.render();
                return this.$element;
            } else {
                return this.$element.val();
            }
        },
        selectAll: function() {
            this.findLis();
            this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click();
        },
        deselectAll: function() {
            this.findLis();
            this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click();
        },
        keydown: function(e) {
            var $this = $(this), $parent = $this.is("input") ? $this.parent().parent() : $this.parent(), $items, that = $parent.data("this"), index, next, first, last, prev, nextPrev, prevIndex, isActive, keyCodeMap = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            };
            if (that.options.liveSearch) $parent = $this.parent().parent();
            if (that.options.container) $parent = that.$menu;
            $items = $("[role=menu] li a", $parent);
            isActive = that.$menu.parent().hasClass("open");
            if (!isActive && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))) {
                if (!that.options.container) {
                    that.setSize();
                    that.$menu.parent().addClass("open");
                    isActive = true;
                } else {
                    that.$newElement.trigger("click");
                }
                that.$searchbox.focus();
            }
            if (that.options.liveSearch) {
                if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && that.$menu.find(".active").length === 0) {
                    e.preventDefault();
                    that.$menu.parent().removeClass("open");
                    that.$button.focus();
                }
                $items = $("[role=menu] li:not(.divider):not(.dropdown-header):visible", $parent);
                if (!$this.val() && !/(38|40)/.test(e.keyCode.toString(10))) {
                    if ($items.filter(".active").length === 0) {
                        if (that.options.searchAccentInsensitive) {
                            $items = that.$newElement.find("li").filter(":aicontains(" + normalizeToBase(keyCodeMap[e.keyCode]) + ")");
                        } else {
                            $items = that.$newElement.find("li").filter(":icontains(" + keyCodeMap[e.keyCode] + ")");
                        }
                    }
                }
            }
            if (!$items.length) return;
            if (/(38|40)/.test(e.keyCode.toString(10))) {
                index = $items.index($items.filter(":focus"));
                first = $items.parent(":not(.disabled):visible").first().index();
                last = $items.parent(":not(.disabled):visible").last().index();
                next = $items.eq(index).parent().nextAll(":not(.disabled):visible").eq(0).index();
                prev = $items.eq(index).parent().prevAll(":not(.disabled):visible").eq(0).index();
                nextPrev = $items.eq(next).parent().prevAll(":not(.disabled):visible").eq(0).index();
                if (that.options.liveSearch) {
                    $items.each(function(i) {
                        if ($(this).is(":not(.disabled)")) {
                            $(this).data("index", i);
                        }
                    });
                    index = $items.index($items.filter(".active"));
                    first = $items.filter(":not(.disabled):visible").first().data("index");
                    last = $items.filter(":not(.disabled):visible").last().data("index");
                    next = $items.eq(index).nextAll(":not(.disabled):visible").eq(0).data("index");
                    prev = $items.eq(index).prevAll(":not(.disabled):visible").eq(0).data("index");
                    nextPrev = $items.eq(next).prevAll(":not(.disabled):visible").eq(0).data("index");
                }
                prevIndex = $this.data("prevIndex");
                if (e.keyCode == 38) {
                    if (that.options.liveSearch) index -= 1;
                    if (index != nextPrev && index > prev) index = prev;
                    if (index < first) index = first;
                    if (index == prevIndex) index = last;
                }
                if (e.keyCode == 40) {
                    if (that.options.liveSearch) index += 1;
                    if (index == -1) index = 0;
                    if (index != nextPrev && index < next) index = next;
                    if (index > last) index = last;
                    if (index == prevIndex) index = first;
                }
                $this.data("prevIndex", index);
                if (!that.options.liveSearch) {
                    $items.eq(index).focus();
                } else {
                    e.preventDefault();
                    if (!$this.is(".dropdown-toggle")) {
                        $items.removeClass("active");
                        $items.eq(index).addClass("active").find("a").focus();
                        $this.focus();
                    }
                }
            } else if (!$this.is("input")) {
                var keyIndex = [], count, prevKey;
                $items.each(function() {
                    if ($(this).parent().is(":not(.disabled)")) {
                        if ($.trim($(this).text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
                            keyIndex.push($(this).parent().index());
                        }
                    }
                });
                count = $(document).data("keycount");
                count++;
                $(document).data("keycount", count);
                prevKey = $.trim($(":focus").text().toLowerCase()).substring(0, 1);
                if (prevKey != keyCodeMap[e.keyCode]) {
                    count = 1;
                    $(document).data("keycount", count);
                } else if (count >= keyIndex.length) {
                    $(document).data("keycount", 0);
                    if (count > keyIndex.length) count = 1;
                }
                $items.eq(keyIndex[count - 1]).focus();
            }
            if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab) && isActive) {
                if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
                if (!that.options.liveSearch) {
                    $(":focus").click();
                } else if (!/(32)/.test(e.keyCode.toString(10))) {
                    that.$menu.find(".active a").click();
                    $this.focus();
                }
                $(document).data("keycount", 0);
            }
            if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !isActive) {
                that.$menu.parent().removeClass("open");
                that.$button.focus();
            }
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement);
            if (this.options.container) this.$menu.hide();
        },
        refresh: function() {
            this.$lis = null;
            this.reloadLi();
            this.render();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },
        update: function() {
            this.reloadLi();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },
        hide: function() {
            this.$newElement.hide();
        },
        show: function() {
            this.$newElement.show();
        },
        remove: function() {
            this.$newElement.remove();
            this.$element.remove();
        }
    };
    function Plugin(option, event) {
        var args = arguments;
        var _option = option, option = args[0], event = args[1];
        [].shift.apply(args);
        if (typeof option == "undefined") {
            option = _option;
        }
        var value;
        var chain = this.each(function() {
            var $this = $(this);
            if ($this.is("select")) {
                var data = $this.data("selectpicker"), options = typeof option == "object" && option;
                if (!data) {
                    var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
                    $this.data("selectpicker", data = new Selectpicker(this, config, event));
                } else if (options) {
                    for (var i in options) {
                        if (options.hasOwnProperty(i)) {
                            data.options[i] = options[i];
                        }
                    }
                }
                if (typeof option == "string") {
                    if (data[option] instanceof Function) {
                        value = data[option].apply(data, args);
                    } else {
                        value = data.options[option];
                    }
                }
            }
        });
        if (typeof value !== "undefined") {
            return value;
        } else {
            return chain;
        }
    }
    var old = $.fn.selectpicker;
    $.fn.selectpicker = Plugin;
    $.fn.selectpicker.Constructor = Selectpicker;
    $.fn.selectpicker.noConflict = function() {
        $.fn.selectpicker = old;
        return this;
    };
    $(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", Selectpicker.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", function(e) {
        e.stopPropagation();
    });
    $(window).on("load.bs.select.data-api", function() {
        $(".selectpicker").each(function() {
            var $selectpicker = $(this);
            Plugin.call($selectpicker, $selectpicker.data());
        });
    });
})(jQuery);

(function($) {
    if ($.fn.inputmask == undefined) {
        $.inputmask = {
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                escapeChar: "\\",
                mask: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                overrideFocus: false,
                repeat: 0,
                greedy: true,
                autoUnmask: false,
                clearMaskOnLostFocus: true,
                insertMode: true,
                clearIncomplete: false,
                aliases: {},
                onKeyUp: $.noop,
                onKeyDown: $.noop,
                showMaskOnHover: true,
                onKeyValidation: $.noop,
                numericInput: false,
                radixPoint: ".",
                definitions: {
                    "9": {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    a: {
                        validator: "[A-Za-zÐ-ÑÐÑ‘]",
                        cardinality: 1
                    },
                    "*": {
                        validator: "[A-Za-zÐ-ÑÐÑ‘0-9]",
                        cardinality: 1
                    }
                },
                keyCode: {
                    ALT: 18,
                    BACKSPACE: 8,
                    CAPS_LOCK: 20,
                    COMMA: 188,
                    COMMAND: 91,
                    COMMAND_LEFT: 91,
                    COMMAND_RIGHT: 93,
                    CONTROL: 17,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    INSERT: 45,
                    LEFT: 37,
                    MENU: 93,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SHIFT: 16,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38,
                    WINDOWS: 91
                },
                ignorables: [ 8, 9, 13, 16, 17, 18, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 46, 91, 93, 108 ]
            },
            val: $.fn.val
        };
        $.fn.inputmask = function(fn, options) {
            var opts = $.extend(true, {}, $.inputmask.defaults, options);
            var pasteEvent = isInputEventSupported("paste") ? "paste" : "input";
            var iphone = navigator.userAgent.match(/iphone/i) != null;
            var android = navigator.userAgent.match(/android.*mobile safari.*/i) != null;
            if (android) {
                var browser = navigator.userAgent.match(/mobile safari.*/i);
                var version = parseInt(new RegExp(/[0-9]+/).exec(browser));
                android = version <= 533;
            }
            var caretposCorrection = null;
            if (typeof fn == "string") {
                switch (fn) {
                  case "mask":
                    var _buffer = getMaskTemplate();
                    var tests = getTestingChain();
                    return this.each(function() {
                        mask(this);
                    });
                    break;

                  case "unmaskedvalue":
                    var tests = this.data("inputmask")["tests"];
                    var _buffer = this.data("inputmask")["_buffer"];
                    opts.greedy = this.data("inputmask")["greedy"];
                    opts.repeat = this.data("inputmask")["repeat"];
                    opts.definitions = this.data("inputmask")["definitions"];
                    return unmaskedvalue(this);
                    break;

                  case "remove":
                    var tests, _buffer;
                    return this.each(function() {
                        var $input = $(this), input = this;
                        setTimeout(function() {
                            if ($input.data("inputmask")) {
                                tests = $input.data("inputmask")["tests"];
                                _buffer = $input.data("inputmask")["_buffer"];
                                opts.greedy = $input.data("inputmask")["greedy"];
                                opts.repeat = $input.data("inputmask")["repeat"];
                                opts.definitions = $input.data("inputmask")["definitions"];
                                input._valueSet(unmaskedvalue($input, true));
                                $input.removeData("inputmask");
                                $input.unbind(".inputmask");
                                $input.removeClass("focus.inputmask");
                                var valueProperty;
                                if (Object.getOwnPropertyDescriptor) valueProperty = Object.getOwnPropertyDescriptor(input, "value");
                                if (valueProperty && valueProperty.get) {
                                    if (input._valueGet) {
                                        Object.defineProperty(input, "value", {
                                            get: input._valueGet,
                                            set: input._valueSet
                                        });
                                    }
                                } else if (document.__lookupGetter__ && input.__lookupGetter__("value")) {
                                    if (input._valueGet) {
                                        input.__defineGetter__("value", input._valueGet);
                                        input.__defineSetter__("value", input._valueSet);
                                    }
                                }
                                delete input._valueGet;
                                delete input._valueSet;
                            }
                        }, 0);
                    });
                    break;

                  case "getemptymask":
                    if (this.data("inputmask")) return this.data("inputmask")["_buffer"].join(""); else return "";

                  case "hasMaskedValue":
                    return this.data("inputmask") ? !this.data("inputmask")["autoUnmask"] : false;

                  default:
                    if (!resolveAlias(fn)) {
                        opts.mask = fn;
                    }
                    var _buffer = getMaskTemplate();
                    var tests = getTestingChain();
                    return this.each(function() {
                        mask(this);
                    });
                    break;
                }
            }
            if (typeof fn == "object") {
                opts = $.extend(true, {}, $.inputmask.defaults, fn);
                resolveAlias(opts.alias);
                var _buffer = getMaskTemplate();
                var tests = getTestingChain();
                return this.each(function() {
                    mask(this);
                });
            }
            function isInputEventSupported(eventName) {
                var el = document.createElement("input"), eventName = "on" + eventName, isSupported = eventName in el;
                if (!isSupported) {
                    el.setAttribute(eventName, "return;");
                    isSupported = typeof el[eventName] == "function";
                }
                el = null;
                return isSupported;
            }
            function resolveAlias(aliasStr) {
                var aliasDefinition = opts.aliases[aliasStr];
                if (aliasDefinition) {
                    if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias);
                    $.extend(true, opts, aliasDefinition);
                    $.extend(true, opts, options);
                    return true;
                }
                return false;
            }
            function getMaskTemplate() {
                var escaped = false, outCount = 0;
                if (opts.mask.length == 1 && opts.greedy == false) {
                    opts.placeholder = "";
                }
                var singleMask = $.map(opts.mask.split(""), function(element, index) {
                    var outElem = [];
                    if (element == opts.escapeChar) {
                        escaped = true;
                    } else if (element != opts.optionalmarker.start && element != opts.optionalmarker.end || escaped) {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            for (var i = 0; i < maskdef.cardinality; i++) {
                                outElem.push(getPlaceHolder(outCount + i));
                            }
                        } else {
                            outElem.push(element);
                            escaped = false;
                        }
                        outCount += outElem.length;
                        return outElem;
                    }
                });
                var repeatedMask = singleMask.slice();
                for (var i = 1; i < opts.repeat && opts.greedy; i++) {
                    repeatedMask = repeatedMask.concat(singleMask.slice());
                }
                return repeatedMask;
            }
            function getTestingChain() {
                var isOptional = false, escaped = false;
                var newBlockMarker = false;
                return $.map(opts.mask.split(""), function(element, index) {
                    var outElem = [];
                    if (element == opts.escapeChar) {
                        escaped = true;
                    } else if (element == opts.optionalmarker.start && !escaped) {
                        isOptional = true;
                        newBlockMarker = true;
                    } else if (element == opts.optionalmarker.end && !escaped) {
                        isOptional = false;
                        newBlockMarker = true;
                    } else {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            var prevalidators = maskdef["prevalidator"], prevalidatorsL = prevalidators ? prevalidators.length : 0;
                            for (var i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator["validator"], cardinality = prevalidator["cardinality"];
                                outElem.push({
                                    fn: validator ? typeof validator == "string" ? new RegExp(validator) : new function() {
                                        this.test = validator;
                                    }() : new RegExp("."),
                                    cardinality: cardinality ? cardinality : 1,
                                    optionality: isOptional,
                                    newBlockMarker: isOptional == true ? newBlockMarker : false,
                                    offset: 0,
                                    casing: maskdef["casing"],
                                    def: element
                                });
                                if (isOptional == true) newBlockMarker = false;
                            }
                            outElem.push({
                                fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator) : new function() {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                cardinality: maskdef.cardinality,
                                optionality: isOptional,
                                newBlockMarker: newBlockMarker,
                                offset: 0,
                                casing: maskdef["casing"],
                                def: element
                            });
                        } else {
                            outElem.push({
                                fn: null,
                                cardinality: 0,
                                optionality: isOptional,
                                newBlockMarker: newBlockMarker,
                                offset: 0,
                                casing: null,
                                def: element
                            });
                            escaped = false;
                        }
                        newBlockMarker = false;
                        return outElem;
                    }
                });
            }
            function isValid(pos, c, buffer, strict) {
                var result = false;
                if (pos >= 0 && pos < getMaskLength()) {
                    var testPos = determineTestPosition(pos), loopend = c ? 1 : 0, chrs = "";
                    for (var i = tests[testPos].cardinality; i > loopend; i--) {
                        chrs += getBufferElement(buffer, testPos - (i - 1));
                    }
                    if (c) {
                        chrs += c;
                    }
                    result = tests[testPos].fn != null ? tests[testPos].fn.test(chrs, buffer, pos, strict, opts) : false;
                }
                return result;
            }
            function isMask(pos) {
                var testPos = determineTestPosition(pos);
                var test = tests[testPos];
                return test != undefined ? test.fn : false;
            }
            function determineTestPosition(pos) {
                return pos % tests.length;
            }
            function getPlaceHolder(pos) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
            function getMaskLength() {
                var calculatedLength = _buffer.length;
                if (!opts.greedy && opts.repeat > 1) {
                    calculatedLength += _buffer.length * (opts.repeat - 1);
                }
                return calculatedLength;
            }
            function seekNext(buffer, pos) {
                var maskL = getMaskLength();
                if (pos >= maskL) return maskL;
                var position = pos;
                while (++position < maskL && !isMask(position)) {}
                return position;
            }
            function seekPrevious(buffer, pos) {
                var position = pos;
                if (position <= 0) return 0;
                while (--position > 0 && !isMask(position)) {}
                return position;
            }
            function setBufferElement(buffer, position, element) {
                var test = tests[determineTestPosition(position)];
                var elem = element;
                if (elem != undefined) {
                    switch (test.casing) {
                      case "upper":
                        elem = element.toUpperCase();
                        break;

                      case "lower":
                        elem = element.toLowerCase();
                        break;
                    }
                }
                buffer[position] = elem;
            }
            function getBufferElement(buffer, position, autoPrepare) {
                if (autoPrepare) position = prepareBuffer(buffer, position);
                return buffer[position];
            }
            function prepareBuffer(buffer, position, isRTL) {
                var j;
                if (isRTL) {
                    while (position < 0 && buffer.length < getMaskLength()) {
                        j = _buffer.length - 1;
                        position = _buffer.length;
                        while (_buffer[j] !== undefined) {
                            buffer.unshift(_buffer[j--]);
                        }
                    }
                } else {
                    while (buffer[position] == undefined && buffer.length < getMaskLength()) {
                        j = 0;
                        while (_buffer[j] !== undefined) {
                            buffer.push(_buffer[j++]);
                        }
                    }
                }
                return position;
            }
            function writeBuffer(input, buffer, caretPos) {
                input._valueSet(buffer.join(""));
                if (caretPos != undefined) {
                    if (android) {
                        setTimeout(function() {
                            caret(input, caretPos);
                        }, 100);
                    } else caret(input, caretPos);
                }
            }
            function clearBuffer(buffer, start, end) {
                for (var i = start, maskL = getMaskLength(); i < end && i < maskL; i++) {
                    setBufferElement(buffer, i, getBufferElement(_buffer.slice(), i));
                }
            }
            function setReTargetPlaceHolder(buffer, pos) {
                var testPos = determineTestPosition(pos);
                setBufferElement(buffer, pos, getBufferElement(_buffer, testPos));
            }
            function checkVal(input, buffer, clearInvalid, skipRadixHandling) {
                var isRTL = $(input).data("inputmask")["isRTL"], inputValue = truncateInput(input._valueGet(), isRTL).split("");
                if (isRTL) {
                    var maskL = getMaskLength();
                    var inputValueRev = inputValue.reverse();
                    inputValueRev.length = maskL;
                    for (var i = 0; i < maskL; i++) {
                        var targetPosition = determineTestPosition(maskL - (i + 1));
                        if (tests[targetPosition].fn == null && inputValueRev[i] != getBufferElement(_buffer, targetPosition)) {
                            inputValueRev.splice(i, 0, getBufferElement(_buffer, targetPosition));
                            inputValueRev.length = maskL;
                        } else {
                            inputValueRev[i] = inputValueRev[i] || getBufferElement(_buffer, targetPosition);
                        }
                    }
                    inputValue = inputValueRev.reverse();
                }
                clearBuffer(buffer, 0, buffer.length);
                buffer.length = _buffer.length;
                var lastMatch = -1, checkPosition = -1, np, maskL = getMaskLength(), ivl = inputValue.length, rtlMatch = ivl == 0 ? maskL : -1;
                for (var i = 0; i < ivl; i++) {
                    for (var pos = checkPosition + 1; pos < maskL; pos++) {
                        if (isMask(pos)) {
                            var c = inputValue[i];
                            if ((np = isValid(pos, c, buffer, !clearInvalid)) !== false) {
                                if (np !== true) {
                                    pos = np.pos || pos;
                                    c = np.c || c;
                                }
                                setBufferElement(buffer, pos, c);
                                lastMatch = checkPosition = pos;
                            } else {
                                setReTargetPlaceHolder(buffer, pos);
                                if (c == getPlaceHolder(pos)) {
                                    checkPosition = pos;
                                    rtlMatch = pos;
                                }
                            }
                            break;
                        } else {
                            setReTargetPlaceHolder(buffer, pos);
                            if (lastMatch == checkPosition) lastMatch = pos;
                            checkPosition = pos;
                            if (inputValue[i] == getBufferElement(buffer, pos)) break;
                        }
                    }
                }
                if (opts.greedy == false) {
                    var newBuffer = truncateInput(buffer.join(""), isRTL).split("");
                    while (buffer.length != newBuffer.length) {
                        isRTL ? buffer.shift() : buffer.pop();
                    }
                }
                if (clearInvalid) {
                    writeBuffer(input, buffer);
                }
                return isRTL ? opts.numericInput ? $.inArray(opts.radixPoint, buffer) != -1 && skipRadixHandling !== true ? $.inArray(opts.radixPoint, buffer) : seekNext(buffer, maskL) : seekNext(buffer, rtlMatch) : seekNext(buffer, lastMatch);
            }
            function escapeRegex(str) {
                var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\" ];
                return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
            }
            function truncateInput(inputValue, rtl) {
                return rtl ? inputValue.replace(new RegExp("^(" + escapeRegex(_buffer.join("")) + ")*"), "") : inputValue.replace(new RegExp("(" + escapeRegex(_buffer.join("")) + ")*$"), "");
            }
            function clearOptionalTail(input, buffer) {
                checkVal(input, buffer, false);
                var tmpBuffer = buffer.slice();
                if ($(input).data("inputmask")["isRTL"]) {
                    for (var pos = 0; pos <= tmpBuffer.length - 1; pos++) {
                        var testPos = determineTestPosition(pos);
                        if (tests[testPos].optionality) {
                            if (getPlaceHolder(pos) == buffer[pos] || !isMask(pos)) tmpBuffer.splice(0, 1); else break;
                        } else break;
                    }
                } else {
                    for (var pos = tmpBuffer.length - 1; pos >= 0; pos--) {
                        var testPos = determineTestPosition(pos);
                        if (tests[testPos].optionality) {
                            if (getPlaceHolder(pos) == buffer[pos] || !isMask(pos)) tmpBuffer.pop(); else break;
                        } else break;
                    }
                }
                writeBuffer(input, tmpBuffer);
            }
            function unmaskedvalue($input, skipDatepickerCheck) {
                var input = $input[0];
                if (tests && (skipDatepickerCheck === true || !$input.hasClass("hasDatepicker"))) {
                    var buffer = _buffer.slice();
                    checkVal(input, buffer);
                    return $.map(buffer, function(element, index) {
                        return isMask(index) && element != getBufferElement(_buffer.slice(), index) ? element : null;
                    }).join("");
                } else {
                    return input._valueGet();
                }
            }
            function caret(input, begin, end) {
                var npt = input.jquery && input.length > 0 ? input[0] : input;
                if (typeof begin == "number") {
                    end = typeof end == "number" ? end : begin;
                    if (opts.insertMode == false && begin == end) end++;
                    if (npt.setSelectionRange) {
                        npt.setSelectionRange(begin, end);
                    } else if (npt.createTextRange) {
                        var range = npt.createTextRange();
                        range.collapse(true);
                        range.moveEnd("character", end);
                        range.moveStart("character", begin);
                        range.select();
                    }
                    npt.focus();
                    if (android && end != npt.selectionEnd) caretposCorrection = {
                        begin: begin,
                        end: end
                    };
                } else {
                    var caretpos = android ? caretposCorrection : null, caretposCorrection = null;
                    if (caretpos == null) {
                        if (npt.setSelectionRange) {
                            begin = npt.selectionStart;
                            end = npt.selectionEnd;
                        } else if (document.selection && document.selection.createRange) {
                            var range = document.selection.createRange();
                            begin = 0 - range.duplicate().moveStart("character", -1e5);
                            end = begin + range.text.length;
                        }
                        caretpos = {
                            begin: begin,
                            end: end
                        };
                    }
                    return caretpos;
                }
            }
            function mask(el) {
                var $input = $(el);
                if (!$input.is(":input")) return;
                opts.greedy = opts.greedy ? opts.greedy : opts.repeat == 0;
                var maxLength = $input.prop("maxLength");
                if (getMaskLength() > maxLength && maxLength > -1) {
                    if (maxLength < _buffer.length) _buffer.length = maxLength;
                    if (opts.greedy == false) {
                        opts.repeat = Math.round(maxLength / _buffer.length);
                    }
                }
                $input.prop("maxLength", getMaskLength() * 2);
                $input.data("inputmask", {
                    tests: tests,
                    _buffer: _buffer,
                    greedy: opts.greedy,
                    repeat: opts.repeat,
                    autoUnmask: opts.autoUnmask,
                    definitions: opts.definitions,
                    isRTL: false
                });
                patchValueProperty(el);
                var buffer = _buffer.slice(), undoBuffer = el._valueGet(), skipKeyPressEvent = false, ignorable = false, lastPosition = -1, firstMaskPos = seekNext(buffer, -1), lastMaskPos = seekPrevious(buffer, getMaskLength()), isRTL = false;
                if (el.dir == "rtl" || opts.numericInput) {
                    el.dir = "ltr";
                    $input.css("text-align", "right");
                    $input.removeAttr("dir");
                    var inputData = $input.data("inputmask");
                    inputData["isRTL"] = true;
                    $input.data("inputmask", inputData);
                    isRTL = true;
                }
                $input.unbind(".inputmask");
                $input.removeClass("focus.inputmask");
                $input.bind("mouseenter.inputmask", function() {
                    var $input = $(this), input = this;
                    if (!$input.hasClass("focus.inputmask") && opts.showMaskOnHover) {
                        var nptL = input._valueGet().length;
                        if (nptL < buffer.length) {
                            if (nptL == 0) buffer = _buffer.slice();
                            writeBuffer(input, buffer);
                        }
                    }
                }).bind("blur.inputmask", function() {
                    var $input = $(this), input = this, nptValue = input._valueGet();
                    $input.removeClass("focus.inputmask");
                    if (nptValue != undoBuffer) {
                        $input.change();
                    }
                    if (opts.clearMaskOnLostFocus) {
                        if (nptValue == _buffer.join("")) input._valueSet(""); else {
                            clearOptionalTail(input, buffer);
                        }
                    }
                    if (!isComplete(input)) {
                        $input.trigger("incomplete");
                        if (opts.clearIncomplete) {
                            if (opts.clearMaskOnLostFocus) input._valueSet(""); else {
                                buffer = _buffer.slice();
                                writeBuffer(input, buffer);
                            }
                        }
                    }
                }).bind("focus.inputmask", function() {
                    var $input = $(this), input = this;
                    if (!opts.overrideFocus) {
                        if (!$input.hasClass("focus.inputmask") && !opts.showMaskOnHover) {
                            var nptL = input._valueGet().length;
                            if (nptL < buffer.length) {
                                if (nptL == 0) buffer = _buffer.slice();
                                caret(input, checkVal(input, buffer, true));
                            }
                        }
                    }
                    $input.addClass("focus.inputmask");
                    undoBuffer = input._valueGet();
                }).bind("mouseleave.inputmask", function() {
                    var $input = $(this), input = this;
                    if (opts.clearMaskOnLostFocus) {
                        if (!$input.hasClass("focus.inputmask")) {
                            if (input._valueGet() == _buffer.join("") || input._valueGet() == "") input._valueSet(""); else {
                                clearOptionalTail(input, buffer);
                            }
                        }
                    }
                }).bind("click.inputmask", function() {
                    var input = this;
                    setTimeout(function() {
                        var selectedCaret = caret(input);
                        if (selectedCaret.begin == selectedCaret.end) {
                            var clickPosition = selectedCaret.begin;
                            lastPosition = checkVal(input, buffer, false);
                            if (isRTL) caret(input, clickPosition > lastPosition && (isValid(clickPosition, buffer[clickPosition], buffer, true) !== false || !isMask(clickPosition)) ? clickPosition : lastPosition); else caret(input, clickPosition < lastPosition && (isValid(clickPosition, buffer[clickPosition], buffer, true) !== false || !isMask(clickPosition)) ? clickPosition : lastPosition);
                        }
                    }, 0);
                }).bind("dblclick.inputmask", function() {
                    var input = this;
                    setTimeout(function() {
                        caret(input, 0, lastPosition);
                    }, 0);
                }).bind("keydown.inputmask", keydownEvent).bind("keypress.inputmask", keypressEvent).bind("keyup.inputmask", keyupEvent).bind(pasteEvent + ".inputmask, dragdrop.inputmask, drop.inputmask", function() {
                    var input = this;
                    setTimeout(function() {
                        caret(input, checkVal(input, buffer, true));
                    }, 0);
                }).bind("setvalue.inputmask", function() {
                    var input = this;
                    undoBuffer = input._valueGet();
                    checkVal(input, buffer, true);
                    if (input._valueGet() == _buffer.join("")) input._valueSet("");
                }).bind("complete.inputmask", opts.oncomplete).bind("incomplete.inputmask", opts.onincomplete).bind("cleared.inputmask", opts.oncleared);
                lastPosition = checkVal(el, buffer, true);
                var activeElement;
                try {
                    activeElement = document.activeElement;
                } catch (e) {}
                if (activeElement === el) {
                    $input.addClass("focus.inputmask");
                    caret(el, lastPosition);
                } else if (opts.clearMaskOnLostFocus) {
                    if (el._valueGet() == _buffer.join("")) {
                        el._valueSet("");
                    } else {
                        clearOptionalTail(el, buffer);
                    }
                }
                installEventRuler(el);
                function isComplete(npt) {
                    var complete = true, nptValue = npt._valueGet(), ml = nptValue.length;
                    for (var i = 0; i < ml; i++) {
                        if (isMask(i) && nptValue.charAt(i) == getPlaceHolder(i)) {
                            complete = false;
                            break;
                        }
                    }
                    return complete;
                }
                function installEventRuler(npt) {
                    var events = $._data(npt).events;
                    $.each(events, function(eventType, eventHandlers) {
                        $(npt).bind(eventType + ".inputmask", function(event) {
                            if (this.readOnly || this.disabled) {
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                                event.preventDefault();
                                return false;
                            }
                        });
                        var ourHandler = eventHandlers[eventHandlers.length - 1];
                        for (var i = eventHandlers.length - 1; i > 0; i--) {
                            eventHandlers[i] = eventHandlers[i - 1];
                        }
                        eventHandlers[0] = ourHandler;
                    });
                }
                function patchValueProperty(npt) {
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor) valueProperty = Object.getOwnPropertyDescriptor(npt, "value");
                    if (valueProperty && valueProperty.get) {
                        if (!npt._valueGet) {
                            npt._valueGet = valueProperty.get;
                            npt._valueSet = valueProperty.set;
                            Object.defineProperty(npt, "value", {
                                get: function() {
                                    var $self = $(this), inputData = $(this).data("inputmask");
                                    return inputData && inputData["autoUnmask"] ? $self.inputmask("unmaskedvalue") : this._valueGet() != inputData["_buffer"].join("") ? this._valueGet() : "";
                                },
                                set: function(value) {
                                    this._valueSet(value);
                                    $(this).triggerHandler("setvalue.inputmask");
                                }
                            });
                        }
                    } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                        if (!npt._valueGet) {
                            npt._valueGet = npt.__lookupGetter__("value");
                            npt._valueSet = npt.__lookupSetter__("value");
                            npt.__defineGetter__("value", function() {
                                var $self = $(this), inputData = $(this).data("inputmask");
                                return inputData && inputData["autoUnmask"] ? $self.inputmask("unmaskedvalue") : this._valueGet() != inputData["_buffer"].join("") ? this._valueGet() : "";
                            });
                            npt.__defineSetter__("value", function(value) {
                                this._valueSet(value);
                                $(this).triggerHandler("setvalue.inputmask");
                            });
                        }
                    } else {
                        if (!npt._valueGet) {
                            npt._valueGet = function() {
                                return this.value;
                            };
                            npt._valueSet = function(value) {
                                this.value = value;
                            };
                        }
                        if ($.fn.val.inputmaskpatch != true) {
                            $.fn.val = function() {
                                if (arguments.length == 0) {
                                    var $self = $(this);
                                    if ($self.data("inputmask")) {
                                        if ($self.data("inputmask")["autoUnmask"]) return $self.inputmask("unmaskedvalue"); else {
                                            var result = $.inputmask.val.apply($self);
                                            return result != $self.data("inputmask")["_buffer"].join("") ? result : "";
                                        }
                                    } else return $.inputmask.val.apply($self);
                                } else {
                                    var args = arguments;
                                    return this.each(function() {
                                        var $self = $(this);
                                        var result = $.inputmask.val.apply($self, args);
                                        if ($self.data("inputmask")) $self.triggerHandler("setvalue.inputmask");
                                        return result;
                                    });
                                }
                            };
                            $.extend($.fn.val, {
                                inputmaskpatch: true
                            });
                        }
                    }
                }
                function shiftL(start, end, c) {
                    while (!isMask(start) && start - 1 >= 0) start--;
                    for (var i = start; i < end && i < getMaskLength(); i++) {
                        if (isMask(i)) {
                            setReTargetPlaceHolder(buffer, i);
                            var j = seekNext(buffer, i);
                            var p = getBufferElement(buffer, j);
                            if (p != getPlaceHolder(j)) {
                                if (j < getMaskLength() && isValid(i, p, buffer, true) !== false && tests[determineTestPosition(i)].def == tests[determineTestPosition(j)].def) {
                                    setBufferElement(buffer, i, getBufferElement(buffer, j));
                                    setReTargetPlaceHolder(buffer, j);
                                } else {
                                    if (isMask(i)) break;
                                }
                            } else if (c == undefined) break;
                        } else {
                            setReTargetPlaceHolder(buffer, i);
                        }
                    }
                    if (c != undefined) setBufferElement(buffer, isRTL ? end : seekPrevious(buffer, end), c);
                    buffer = truncateInput(buffer.join(""), isRTL).split("");
                    if (buffer.length == 0) buffer = _buffer.slice();
                    return start;
                }
                function shiftR(start, end, c, full) {
                    for (var i = start; i <= end && i < getMaskLength(); i++) {
                        if (isMask(i)) {
                            var t = getBufferElement(buffer, i);
                            setBufferElement(buffer, i, c);
                            if (t != getPlaceHolder(i)) {
                                var j = seekNext(buffer, i);
                                if (j < getMaskLength()) {
                                    if (isValid(j, t, buffer, true) !== false && tests[determineTestPosition(i)].def == tests[determineTestPosition(j)].def) c = t; else {
                                        if (isMask(j)) break; else c = t;
                                    }
                                } else break;
                            } else if (full !== true) break;
                        } else setReTargetPlaceHolder(buffer, i);
                    }
                    var lengthBefore = buffer.length;
                    buffer = truncateInput(buffer.join(""), isRTL).split("");
                    if (buffer.length == 0) buffer = _buffer.slice();
                    return end - (lengthBefore - buffer.length);
                }
                function keydownEvent(e) {
                    skipKeyPressEvent = false;
                    var input = this, k = e.keyCode, pos = caret(input);
                    if (opts.numericInput) {
                        var nptStr = input._valueGet();
                        var radixPosition = nptStr.indexOf(opts.radixPoint);
                        if (radixPosition != -1) {
                            isRTL = pos.begin <= radixPosition || pos.end <= radixPosition;
                        }
                    }
                    if (k == opts.keyCode.BACKSPACE || k == opts.keyCode.DELETE || iphone && k == 127) {
                        var maskL = getMaskLength();
                        if (pos.begin == 0 && pos.end == maskL) {
                            buffer = _buffer.slice();
                            writeBuffer(input, buffer);
                            caret(input, checkVal(input, buffer, false));
                        } else if (pos.end - pos.begin > 1 || pos.end - pos.begin == 1 && opts.insertMode) {
                            clearBuffer(buffer, pos.begin, pos.end);
                            writeBuffer(input, buffer, isRTL ? checkVal(input, buffer, false) : pos.begin);
                        } else {
                            var beginPos = pos.begin - (k == opts.keyCode.DELETE ? 0 : 1);
                            if (beginPos < firstMaskPos && k == opts.keyCode.DELETE) {
                                beginPos = firstMaskPos;
                            }
                            if (beginPos >= firstMaskPos) {
                                if (opts.numericInput && opts.greedy && k == opts.keyCode.DELETE && buffer[beginPos] == opts.radixPoint) {
                                    beginPos = seekNext(buffer, beginPos);
                                    isRTL = false;
                                }
                                if (isRTL) {
                                    beginPos = shiftR(firstMaskPos, beginPos, getPlaceHolder(beginPos), true);
                                    beginPos = opts.numericInput && opts.greedy && k == opts.keyCode.BACKSPACE && buffer[beginPos + 1] == opts.radixPoint ? beginPos + 1 : seekNext(buffer, beginPos);
                                } else beginPos = shiftL(beginPos, maskL);
                                writeBuffer(input, buffer, beginPos);
                            }
                        }
                        if (input._valueGet() == _buffer.join("")) $(input).trigger("cleared");
                        return false;
                    } else if (k == opts.keyCode.END || k == opts.keyCode.PAGE_DOWN) {
                        setTimeout(function() {
                            var caretPos = checkVal(input, buffer, false, true);
                            if (!opts.insertMode && caretPos == getMaskLength() && !e.shiftKey) caretPos--;
                            caret(input, e.shiftKey ? pos.begin : caretPos, caretPos);
                        }, 0);
                        return false;
                    } else if (k == opts.keyCode.HOME || k == opts.keyCode.PAGE_UP) {
                        caret(input, 0, e.shiftKey ? pos.begin : 0);
                        return false;
                    } else if (k == opts.keyCode.ESCAPE) {
                        input._valueSet(undoBuffer);
                        caret(input, 0, checkVal(input, buffer));
                        return false;
                    } else if (k == opts.keyCode.INSERT) {
                        opts.insertMode = !opts.insertMode;
                        caret(input, !opts.insertMode && pos.begin == getMaskLength() ? pos.begin - 1 : pos.begin);
                        return false;
                    } else if (e.ctrlKey && k == 88) {
                        setTimeout(function() {
                            caret(input, checkVal(input, buffer, true));
                        }, 0);
                    } else if (!opts.insertMode) {
                        if (k == opts.keyCode.RIGHT) {
                            var caretPos = pos.begin == pos.end ? pos.end + 1 : pos.end;
                            caretPos = caretPos < getMaskLength() ? caretPos : pos.end;
                            caret(input, e.shiftKey ? pos.begin : caretPos, e.shiftKey ? caretPos + 1 : caretPos);
                            return false;
                        } else if (k == opts.keyCode.LEFT) {
                            var caretPos = pos.begin - 1;
                            caretPos = caretPos > 0 ? caretPos : 0;
                            caret(input, caretPos, e.shiftKey ? pos.end : caretPos);
                            return false;
                        }
                    }
                    opts.onKeyDown.call(this, e, opts);
                    ignorable = $.inArray(k, opts.ignorables) != -1;
                }
                function keypressEvent(e) {
                    if (skipKeyPressEvent) return false;
                    skipKeyPressEvent = true;
                    var input = this, $input = $(input);
                    e = e || window.event;
                    var k = e.which || e.charCode || e.keyCode;
                    if (opts.numericInput && k == opts.radixPoint.charCodeAt(opts.radixPoint.length - 1)) {
                        var nptStr = input._valueGet();
                        var radixPosition = nptStr.indexOf(opts.radixPoint);
                        caret(input, seekNext(buffer, radixPosition != -1 ? radixPosition : getMaskLength()));
                    }
                    if (e.ctrlKey || e.altKey || e.metaKey || ignorable) {
                        return true;
                    } else {
                        if (k) {
                            $input.trigger("input");
                            var pos = caret(input), c = String.fromCharCode(k), maskL = getMaskLength();
                            clearBuffer(buffer, pos.begin, pos.end);
                            if (isRTL) {
                                var p = opts.numericInput ? pos.end : seekPrevious(buffer, pos.end), np;
                                if ((np = isValid(p == maskL || getBufferElement(buffer, p) == opts.radixPoint ? seekPrevious(buffer, p) : p, c, buffer, false)) !== false) {
                                    if (np !== true) {
                                        p = np.pos || pos;
                                        c = np.c || c;
                                    }
                                    var firstUnmaskedPosition = firstMaskPos;
                                    if (opts.insertMode == true) {
                                        if (opts.greedy == true) {
                                            var bfrClone = buffer.slice();
                                            while (getBufferElement(bfrClone, firstUnmaskedPosition, true) != getPlaceHolder(firstUnmaskedPosition) && firstUnmaskedPosition <= p) {
                                                firstUnmaskedPosition = firstUnmaskedPosition == maskL ? maskL + 1 : seekNext(buffer, firstUnmaskedPosition);
                                            }
                                        }
                                        if (firstUnmaskedPosition <= p && (opts.greedy || buffer.length < maskL)) {
                                            if (buffer[firstMaskPos] != getPlaceHolder(firstMaskPos) && buffer.length < maskL) {
                                                var offset = prepareBuffer(buffer, -1, isRTL);
                                                if (pos.end != 0) p = p + offset;
                                                maskL = buffer.length;
                                            }
                                            shiftL(firstUnmaskedPosition, opts.numericInput ? seekPrevious(buffer, p) : p, c);
                                        } else return false;
                                    } else setBufferElement(buffer, opts.numericInput ? seekPrevious(buffer, p) : p, c);
                                    writeBuffer(input, buffer, opts.numericInput && p == 0 ? seekNext(buffer, p) : p);
                                    setTimeout(function() {
                                        if (isComplete(input)) $input.trigger("complete");
                                    }, 0);
                                } else if (android) writeBuffer(input, buffer, pos.begin);
                            } else {
                                var p = seekNext(buffer, pos.begin - 1), np;
                                prepareBuffer(buffer, p, isRTL);
                                if ((np = isValid(p, c, buffer, false)) !== false) {
                                    if (np !== true) {
                                        p = np.pos || p;
                                        c = np.c || c;
                                    }
                                    if (opts.insertMode == true) {
                                        var lastUnmaskedPosition = getMaskLength();
                                        var bfrClone = buffer.slice();
                                        while (getBufferElement(bfrClone, lastUnmaskedPosition, true) != getPlaceHolder(lastUnmaskedPosition) && lastUnmaskedPosition >= p) {
                                            lastUnmaskedPosition = lastUnmaskedPosition == 0 ? -1 : seekPrevious(buffer, lastUnmaskedPosition);
                                        }
                                        if (lastUnmaskedPosition >= p) shiftR(p, buffer.length, c); else return false;
                                    } else setBufferElement(buffer, p, c);
                                    var next = seekNext(buffer, p);
                                    writeBuffer(input, buffer, next);
                                    setTimeout(function() {
                                        if (isComplete(input)) $input.trigger("complete");
                                    }, 0);
                                } else if (android) writeBuffer(input, buffer, pos.begin);
                            }
                            return false;
                        }
                    }
                }
                function keyupEvent(e) {
                    var $input = $(this), input = this;
                    var k = e.keyCode;
                    opts.onKeyUp.call(this, e, opts);
                    if (k == opts.keyCode.TAB && $input.hasClass("focus.inputmask") && input._valueGet().length == 0) {
                        buffer = _buffer.slice();
                        writeBuffer(input, buffer);
                        if (!isRTL) caret(input, 0);
                        undoBuffer = input._valueGet();
                    }
                }
            }
            return this;
        };
    }
})(jQuery);

(function() {
    "use strict";
    var root = this, WASHAREBTN = function() {
        this.buttons = [], this.isIos === !0 && this.cntLdd(window, this.crBtn);
    };
    WASHAREBTN.prototype.isIos = navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) ? !0 : !1, 
    WASHAREBTN.prototype.cntLdd = function(win, fn) {
        var done = !1, top = !0, doc = win.document, root = doc.documentElement, add = doc.addEventListener ? "addEventListener" : "attachEvent", rem = doc.addEventListener ? "removeEventListener" : "detachEvent", pre = doc.addEventListener ? "" : "on", init = function(e) {
            ("readystatechange" !== e.type || "complete" === doc.readyState) && (("load" === e.type ? win : doc)[rem](pre + e.type, init, !1), 
            !done && (done = !0) && fn.call(win, e.type || e));
        }, poll = function() {
            try {
                root.doScroll("left");
            } catch (e) {
                return void setTimeout(poll, 50);
            }
            init("poll");
        };
        if ("complete" === doc.readyState) fn.call(win, "lazy"); else {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (e) {}
                top && poll();
            }
            doc[add](pre + "DOMContentLoaded", init, !1), doc[add](pre + "readystatechange", init, !1), 
            win[add](pre + "load", init, !1);
        }
    }, WASHAREBTN.prototype.addStyling = function() {
        var s = document.createElement("style"), c = "body,html{padding:0;margin:0;height:100%;width:100%}.wa_btn{width:100%;height:100%;border:0px solid rgba(0,0,0,.1);display:inline-block!important;position:relative;font-family:Arial,sans-serif;letter-spacing:.4px;cursor:pointer;font-weight:400;text-transform:none;color:#fff;border-radius:2px;background-repeat:no-repeat;line-height:1.2;text-decoration:none;text-align:left}.wa_btn_s{font-size:12px;background-size:16px;background-position:5px 2px;}.wa_btn_m{font-size:16px;background-size:20px;}.wa_btn_l{font-size:16px;background-size:20px;background-position:5px 5px;padding:8px 6px 8px 30px}";
        return s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = c : s.appendChild(document.createTextNode(c)), 
        s;
    }, WASHAREBTN.prototype.setButtonAttributes = function(b) {
        var url = b.getAttribute("data-href"), text = "?text=" + encodeURIComponent(b.getAttribute("data-text")) + (b.getAttribute("data-text") ? "%20" : "");
        return text += encodeURIComponent(url ? url : document.URL), b.setAttribute("target", "_top"), 
        b.setAttribute("href", b.getAttribute("href") + text), b.setAttribute("onclick", "window.parent." + b.getAttribute("onclick")), 
        b;
    }, WASHAREBTN.prototype.setIframeAttributes = function(b) {
        var i = document.createElement("iframe");
        return i.width = 1, i.height = 1, i.button = b, i.style.border = 0, i.style.overflow = "hidden", 
        i.border = 0, i.setAttribute("scrolling", "no"), i.addEventListener("load", root.WASHAREBTN.iFrameOnload()), 
        i;
    }, WASHAREBTN.prototype.iFrameOnload = function() {
        return function() {
            this.contentDocument.body.appendChild(this.button), this.contentDocument.getElementsByTagName("head")[0].appendChild(root.WASHAREBTN.addStyling());
            var meta = document.createElement("meta");
            meta.setAttribute("charset", "utf-8"), this.contentDocument.getElementsByTagName("head")[0].appendChild(meta), 
            this.width = Math.ceil(this.contentDocument.getElementsByTagName("a")[0].getBoundingClientRect().width), 
            this.height = Math.ceil(this.contentDocument.getElementsByTagName("a")[0].getBoundingClientRect().height);
        };
    }, WASHAREBTN.prototype.crBtn = function() {
        for (var b = [].slice.call(document.querySelectorAll(".wa_btn")), iframes = [], i = 0; i < b.length; i++) root.WASHAREBTN.buttons.push(b[i]), 
        b[i] = root.WASHAREBTN.setButtonAttributes(b[i]), iframes[i] = root.WASHAREBTN.setIframeAttributes(b[i]), 
        b[i].parentNode.insertBefore(iframes[i], b[i]);
    }, root.WASHAREBTN = new WASHAREBTN();
}).call(this);

$(function() {
    $(".js-validate-card .js-cvv").inputmask("9999");
    $(".js-validate-card .js-number-key").keyup(function() {
        cardInput = $(this);
        cardNumber = $(this).val();
        cardImg = $(".js-validate-card .brand-card span");
        ccDefinitions = {
            "icon-card-visa": /^4/,
            "icon-card-american": /^3(4|7)/,
            "icon-card-master": /^5[1-5]/,
            "icon-card-unionpay": /^62/
        };
        $.each(ccDefinitions, function(i, value) {
            if (value.test(cardNumber)) {
                cardType = i;
                cardImg.addClass(i);
                return false;
            } else {
                cardType = i;
                cardImg.removeClass();
            }
        });
        $(".js-validate-card .custom-card .number-card").text($(this).val());
        if (cardType === "icon-card-american") {
            $(this).inputmask("9999 999999 99999", {
                oncomplete: function() {
                    $(".custom-card .number-card").text($(this).val());
                    $(".js-validate-card .js-name").focus();
                }
            });
            $(".js-validate-card .js-cvv").inputmask("9999");
            $(".js-validate-card .front .custom-card .cvv").removeClass("hide");
            $(".js-validate-card .js-cvv").removeClass("no-amex");
            $(".js-validate-card .js-cvv").attr("data-maxlength", "4");
        } else {
            $(this).inputmask("9999 9999 9999 9999", {
                oncomplete: function() {
                    $(".custom-card .number-card").text($(this).val());
                    $(".js-validate-card .js-name").focus();
                }
            });
            $(".js-validate-card .js-cvv").inputmask("999");
            $(".js-validate-card .front .custom-card .cvv").addClass("hide");
            $(".js-validate-card .js-cvv").addClass("no-amex");
            $(".js-validate-card .js-cvv").attr("data-maxlength", "3");
        }
    });
    $(".js-validate-card .js-month").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".js-validate-card .custom-card .expired-date-card .month").text(cardMonth);
    });
    $(".js-validate-card .js-year").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".js-validate-card .custom-card .expired-date-card .year").text(cardMonth);
    });
    $(".js-validate-card .js-cvv").keyup(function() {
        $(".js-validate-card .custom-card .cvv-number").text($(this).val());
    });
    $(".js-validate-card input").focus(function() {
        $(".js-validate-card .card-container").removeClass("hover");
        if ($(this).hasClass("js-cvv") && $(this).hasClass("no-amex")) {
            $(".js-validate-card .card-container").addClass("hover");
        }
    });
    $(".js-validate-card .js-name").keyup(function() {
        cardName = $(this).val();
        $(".js-validate-card .custom-card .name-card").text(cardName);
    });
    $(".js-validate-card .js-surname").keyup(function() {
        cardSurname = $(this).val();
        $(".js-validate-card .custom-card .surname-card").text(cardSurname);
    });
    $(".js-validate-card-2 .js-cvv").keyup(function() {
        $(this).inputmask("9999");
    });
    $(".js-validate-card-2 .js-number-key").keyup(function() {
        cardInput = $(this);
        cardNumber = $(this).val();
        cardImg = $(".js-validate-card-2 .brand-card span");
        ccDefinitions = {
            "icon-card-visa": /^4/,
            "icon-card-american": /^3(4|7)/,
            "icon-card-master": /^5[1-5]/
        };
        $.each(ccDefinitions, function(i, value) {
            if (value.test(cardNumber)) {
                cardType = i;
                cardImg.addClass(i);
                return false;
            } else {
                cardType = i;
                cardImg.removeClass();
            }
        });
        $(".js-validate-card-2 .custom-card .number-card").text($(this).val());
        if (cardType === "icon-card-american") {
            $(this).inputmask("9999 999999 99999", {
                oncomplete: function() {
                    $(".js-validate-card-2 .custom-card .number-card").text($(this).val());
                    $(".js-validate-card-2 .js-name").focus();
                }
            });
            $(".js-validate-card-2 .js-cvv").inputmask("9999");
            $(".js-validate-card-2 .front .custom-card .cvv").removeClass("hide");
            $(".js-validate-card-2 .js-cvv").removeClass("no-amex");
            $(".js-validate-card-2 .js-cvv").attr("maxlength", "4");
        } else {
            $(this).inputmask("9999 9999 9999 9999", {
                oncomplete: function() {
                    $(".js-validate-card-2 .custom-card .number-card").text($(this).val());
                    $(".js-validate-card-2 .js-name").focus();
                }
            });
            $(".js-validate-card-2 .js-cvv").inputmask("999");
            $(".js-validate-card-2 .front .custom-card .cvv").addClass("hide");
            $(".js-validate-card-2 .js-cvv").addClass("no-amex");
            $(".js-validate-card-2 .js-cvv").attr("maxlength", "3");
        }
    });
    $(".js-validate-card-2 .js-month").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".js-validate-card-2 .custom-card .expired-date-card .month").text(cardMonth);
    });
    $(".js-validate-card-2 .js-year").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".js-validate-card-2 .custom-card .expired-date-card .year").text(cardMonth);
    });
    $(".js-validate-card-2 .js-cvv").keyup(function() {
        $(".js-validate-card-2 .custom-card .cvv-number").text($(this).val());
    });
    $(".js-validate-card-2 input").focus(function() {
        $(".js-validate-card-2 .card-container").removeClass("hover");
        if ($(this).hasClass("js-cvv") && $(this).hasClass("no-amex")) {
            $(".js-validate-card-2 .card-container").addClass("hover");
        }
    });
    $(".js-validate-card-2 .js-name").keyup(function() {
        cardName = $(this).val();
        $(".js-validate-card-2 .custom-card .name-card").text(cardName);
    });
    $(".js-validate-card-2 .js-surname").keyup(function() {
        cardSurname = $(this).val();
        $(".js-validate-card-2 .custom-card .surname-card").text(cardSurname);
    });
});

$(function() {
    $(window).scroll(function(event) {
        var posY = $(window).scrollTop();
        if ($("body").hasClass("modal-open")) {} else {}
    });
    $(".close").click(function() {});
    function switchText(obj) {
        originalText = obj.attr("data-original-text");
        newText = obj.attr("data-new-text");
        obj.attr("data-original-text", newText);
        obj.attr("data-new-text", originalText);
        obj.html(newText);
    }
    $("a,button").click(function() {
        var buttonPulsado = $(this).attr("data-toggle");
        var altoVentana = $(window).height();
        posY = $(window).scrollTop();
        if (buttonPulsado == "modal") {}
        if ($(this).hasClass("hide-onclose")) {
            $("#bottom-affix .call-action").click();
        } else {
            switchText($(this));
        }
    });
    $(".js-newsearch").click(function() {
        var nsBtn = $(this).attr("data-newsearch-btn");
        var nsContent = $(nsBtn).attr("data-target");
        if (!$(nsContent).hasClass("in")) {
            $(nsContent).collapse("show");
            switchText($(nsBtn));
        }
    });
    $('[data-toggle="collapse"]').on("click", function(e) {
        if (!$(this).is("#garantee-reservation") && !$(this).is("#garantee-reservation-2")) {
            if (e) {
                e.preventDefault();
            }
        }
        hRef = $(this).attr("href");
        if (!hRef) {
            hRef = $(this).attr("data-target");
        }
        thisHeight = $(this).parent().parent().height();
        thisHeight = $(hRef).height();
        if ($(this).hasClass("no-scroll")) {} else {
            $(hRef).on("shown.bs.collapse", function() {
                moveToOffset = $(this).offset().top - thisHeight - 0;
                $("html, body").animate({
                    scrollTop: moveToOffset,
                    useTranslate3d: true
                }, 700);
            });
        }
    });
    $('.modal-scroll[data-toggle="collapse"]').click(function() {
        hRef = $(this).attr("href");
        if (!hRef) {
            hRef = $(this).attr("data-target");
        }
        if ($(hRef).hasClass("in")) {
            $(this).closest(".js-modal-scroll-onopen").attr("data-goto", 0);
        } else {
            $(this).closest(".js-modal-scroll-onopen").attr("data-goto", hRef);
        }
        thisHeight = $(this).closest(".modal-body").height();
        $(hRef).on("shown.bs.collapse", function() {
            moveToOffset = $(hRef).offset().top - 0;
            $(this).closest(".modal").animate({
                scrollTop: moveToOffset,
                useTranslate3d: true
            }, 700);
        });
    });
    $(".js-modal-scroll-onopen").on("shown.bs.modal", function() {
        hRef = $(this).attr("data-goto");
        if (hRef) {
            thisHeight = $(this).closest(".modal-body").height();
            moveToOffset = $(hRef).offset().top;
            $(this).closest(".modal").animate({
                scrollTop: moveToOffset,
                useTranslate3d: true
            }, 700);
        }
    });
    $("[data-id-scroll]").on("click", function() {
        scrollToID = $(this).attr("data-id-scroll");
        pixelFix = $(this).attr("data-pixel-fix");
        waitUntilVisible();
        function waitUntilVisible() {
            existInterval = false;
            if ($(scrollToID).hasClass("in")) {
                moveToOffset = $(scrollToID).offset().top - parseInt(pixelFix);
                $("html, body").animate({
                    scrollTop: moveToOffset,
                    useTranslate3d: true
                }, 700);
                if (existInterval === true) {
                    clearInterval(visibleInterval);
                }
            } else {
                existInterval = true;
                visibleInterval = setInterval(waituntilVisible, 500);
            }
        }
        if ($(this).is("a")) {
            return false;
        }
    });
    $(".truncatedText").each(function() {
        var capaFinal = $(this);
        var botMore = $(this).next();
        var botLess = $(this).next().next();
        $(botLess).hide();
        var text = $(this).text();
        var textoOriginal = $(this).html();
        if (textoOriginal.length > 130) {
            text = text.substring(0, 130) + "...";
            $(this).text(text);
            $(botMore).click(function() {
                $(capaFinal).html(textoOriginal);
                $(botLess).show();
                $(botMore).hide();
            });
            $(botLess).click(function() {
                $(capaFinal).html(text);
                $(botMore).show();
                $(botLess).hide();
            });
        } else {
            $(botMore).hide();
        }
    });
    $(".truncatedTextMedium").each(function() {
        var capaFinal = $(this);
        var botMore = $(this).next();
        var botLess = $(this).next().next();
        $(botLess).hide();
        var text = $(this).text();
        var textoOriginal = $(this).text();
        if (textoOriginal.length > 530) {
            text = text.substring(0, 530) + "...";
            $(this).text(text);
            $(botMore).click(function() {
                $(capaFinal).text(textoOriginal);
                $(botLess).show();
                $(botMore).hide();
            });
            $(botLess).click(function() {
                $(capaFinal).text(text);
                $(botMore).show();
                $(botLess).hide();
            });
        } else {
            $(botMore).hide();
        }
    });
    $(".truncatedInfo").each(function() {
        var capaFinal = $(this);
        var capaReferencia = $(this).parent().prev();
        $(capaFinal).css("display", "inline-block");
        $(capaReferencia).css("height", 150);
        var altoCapa = $(capaFinal).height();
        var capaReferenciaAlto = $(this).parent().prev().height();
        var botMore = $(this).next();
        var botLess = $(this).next().next();
        if (altoCapa > capaReferenciaAlto + 50) {
            $(botLess).hide();
            $(capaFinal).css("height", 120);
            $(capaFinal).css("overflow", "hidden");
            $(capaFinal).css("margin-bottom", 15);
            $(botMore).click(function() {
                $(capaFinal).css("height", "auto");
                $(botLess).show();
                $(botMore).hide();
            });
            $(botLess).click(function() {
                $(capaFinal).css("height", 120);
                $(botMore).show();
                $(botLess).hide();
                var posBack = $(capaFinal).offset().top;
                $("html,body").animate({
                    scrollTop: posBack - 150
                }, "slow");
            });
        } else {
            $(botMore).hide();
            $(botLess).hide();
        }
    });
    $(".dropdown").on("show.bs.dropdown", function(e) {
        $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
    });
    $(".dropdown").on("hide.bs.dropdown", function(e) {
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
    });
    $("[type='number']").keydown(function(event) {
        if (event.keyCode > 90 && event.keyCode < 106) {
            return;
        }
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {} else {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    });
    $("[data-id-dismiss]").click(function() {
        idToClose = $(this).attr("data-id-dismiss");
        if (idToClose) {
            if (idToClose === "this") {
                idToClose = $(this).parent();
            }
            exitAnimation = $(this).attr("data-animation");
            $(idToClose).addClass("animated").addClass(exitAnimation);
        }
    });
    $(document).on("click", ".js-reveal", function(e) {
        $(this).parent().parent().find(".js-reveal").removeClass("active");
        $(this).toggleClass("active");
        idToShow = $(this).attr("data-id-show");
        idToHide = $(this).attr("data-id-hide");
        $(idToHide).hide();
        $(idToShow).show();
        if (idToShow) {
            if (idToShow === "this") {
                idToShow = $(this).parent();
            }
            showAnimation = $(this).attr("data-animation-show");
            hideAnimation = $(this).attr("data-animation-hide");
            $(idToShow).addClass("animated").addClass(showAnimation);
        }
        if (idToHide) {
            $(idToHide).addClass("animated").addClass(hideAnimation);
        }
        $(".js-square").each(function() {
            $(this).css("height", $(this).width());
        });
    });
    $(".js-toggle").click(function(event) {
        idToHide = $(this).attr("data-id-hide");
        idToShow = $(this).attr("data-id-show");
        dataTimes = $(this).attr("data-times");
        if (dataTimes < 0) {
            return false;
        }
        if (dataTimes > 0) {
            $(this).attr("data-times", "-1");
        }
        showAnimation = $(this).attr("data-animation-show");
        hideAnimation = $(this).attr("data-animation-hide");
        $(idToHide).addClass("animated").addClass(hideAnimation).removeClass(showAnimation);
        $(idToShow).addClass("animated").addClass(showAnimation).removeClass(hideAnimation);
        $(this).attr("data-id-show", idToHide);
        $(this).attr("data-id-hide", idToShow);
    });
    $(".more").click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        curLimit = $(this).prev().attr("max");
        curVal = $(this).prev().val();
        if (curLimit == curVal) {
            return false;
        }
        curVal = parseFloat(curVal);
        $(this).prev().val(curVal + 1);
    });
    $(".less").click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        curLimit = $(this).next().attr("min");
        curVal = $(this).next().val();
        if (curLimit == curVal) {
            return false;
        }
        curVal = parseFloat(curVal);
        $(this).next().val(curVal - 1);
    });
    $("select.js-accordion-select").change(function() {
        optionShow = $("option:selected", this).attr("data-id-show");
        $(optionShow).show();
        optionHide = $("option:selected", this).attr("data-id-hide");
        $(optionHide).hide();
        optionSelected = $("option:selected", this).attr("data-id-trigger");
        $('a[href="' + optionSelected + '"]').trigger("click");
    });
    $("#inputSearch").focus();
    $(".js-to-top").click(function() {
        $("html, body").animate({
            scrollTop: 190,
            useTranslate3d: true
        }, 700);
    });
    $("textarea.js-autosize").keyup(function() {
        textareaResize = $(this);
        setTimeout(function() {
            textareaResize.removeAttr("style");
            textareaHeight = textareaResize.get(0).scrollHeight;
            textareaResize.height(textareaHeight);
        }, 200);
    });
    $("textarea.js-autosize").focusout(function() {
        var valorTextArea = $(this);
        if ($(this).val().length < 1) {
            $(this).css("height", 75);
            return false;
        }
    });
    $('input[type="month"], input[type="date"]').each(function() {
        if ($(".js-placeholder-fake").attr("placeholder")) {
            $(this).before('<span class="js-fake-placeholder fake-placeholder">' + $(".js-placeholder-fake").attr("placeholder") + "</span>");
        } else {
            $(this).before('<span class="js-fake-placeholder fake-placeholder"></span>');
        }
    });
    $('input[type="month"], input[type="date"]').change(function() {
        var valorCampo = $(this).val();
        if (valorCampo === "" || valorCampo === null) {
            if ($(".js-placeholder-fake").attr("placeholder")) {
                $(this).before('<span class="js-fake-placeholder">' + $(".js-placeholder-fake").attr("placeholder") + "</span>");
            }
        } else {
            $(this).prev(".js-fake-placeholder").hide();
        }
    });
    $('input[type="month"], input[type="date"]').on("change", function() {
        var valorCampo = $(this).val();
        if (valorCampo === "" || valorCampo === null) {
            $(this).addClass("indent");
        } else {
            $(this).removeClass("indent");
        }
    });
    anchoWrapper = $(window).width();
    altoWrapper = $(window).height();
    $(".inner-nav").css("min-height", altoWrapper - 65);
    $("button.navbar-toggle").click(function(e) {
        e.preventDefault();
        anchoWrapper = $(window).width();
        altoWrapper = $(window).height();
        if ($("body").hasClass("nav-right")) {
            $(".main-wrapper").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas-right").animate({
                left: "+=250px",
                useTranslate3d: true
            }, 500, function() {});
            $("body").removeClass("nav-right");
        }
        $(".black-layer").addClass("from-left");
        $(".black-layer").removeClass("from-right");
        $("body").toggleClass("nav-left");
        if ($("body").hasClass("nav-left")) {
            var leftWrapper = $("body").width() * 80 / 100;
            $(".main-wrapper").animate({
                left: leftWrapper + "px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $(".black-layer").show();
            $(".main-wrapper").css("width", anchoWrapper);
        } else {
            var leftWrapper = $("body").width() * 80 / 100;
            $(".main-wrapper").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas").animate({
                left: "-" + leftWrapper + "px",
                useTranslate3d: true
            }, 500, function() {});
            $(".black-layer").hide();
        }
    });
    $(".navbar-toggle-right").click(function(e) {
        e.preventDefault();
        anchoWrapper = $(window).width();
        altoWrapper = $(window).height();
        if ($("body").hasClass("nav-left")) {
            leftWrapper = $("body").width() * 80 / 100;
            $(".main-wrapper").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas").animate({
                left: "-" + leftWrapper + "px",
                useTranslate3d: true
            }, 500, function() {});
            $("body").removeClass("nav-left");
        }
        $(".black-layer").addClass("from-right");
        $(".black-layer").removeClass("from-left");
        $("body").toggleClass("nav-right");
        if ($("body").hasClass("nav-right")) {
            $(".main-wrapper").animate({
                left: "-250px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas-right").animate({
                left: "-=250px",
                useTranslate3d: true
            }, 500, function() {});
            $(".black-layer").show();
            $(".main-wrapper").css("width", anchoWrapper);
        } else {
            $(".main-wrapper").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas-right").animate({
                left: "+=250px",
                useTranslate3d: true
            }, 500, function() {});
            $(".black-layer").hide();
        }
    });
    $(".wrapper.home").click(function() {
        $("body").removeClass("nav-right");
        $("body").removeClass("nav-left");
    });
    blackLayer = $("<div/>", {
        class: "black-layer"
    });
    $(".main-wrapper").prepend(blackLayer);
    $(".black-layer").hide();
    $(".black-layer").on("click", function() {
        if ($(this).hasClass("from-right")) {
            $("body").removeClass("nav-right");
            $(".main-wrapper").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas-right").animate({
                left: "+=250px",
                useTranslate3d: true
            }, 500, function() {});
            $(".black-layer").hide();
        } else {
            var leftWrapper = $("body").width() * 80 / 100;
            $("body").removeClass("nav-left");
            $(".main-wrapper").animate({
                left: "0px",
                useTranslate3d: true
            }, 500, function() {});
            $("#off-canvas").animate({
                left: "-=" + leftWrapper + "px",
                useTranslate3d: true
            }, 500, function() {});
            $(".black-layer").hide();
            $(".main-wrapper").css("width", anchoWrapper);
        }
    });
    $("#off-canvas, .nav-left .main-wrapper").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "left") {
                var leftWrapper = $("body").width() * 80 / 100;
                $("body").removeClass("nav-left");
                $(".main-wrapper").animate({
                    left: "0px",
                    useTranslate3d: true
                }, 500, function() {});
                $("#off-canvas").animate({
                    left: "-=" + leftWrapper + "px",
                    useTranslate3d: true
                }, 500, function() {});
                $(".black-layer").hide();
                $(".main-wrapper").css("width", anchoWrapper);
            }
        }
    });
    $("#off-canvas-right, .nav-right .main-wrapper").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "right") {
                $("body").removeClass("nav-right");
                $(".main-wrapper").animate({
                    left: "0px",
                    useTranslate3d: true
                }, 500, function() {});
                $("#off-canvas-right").animate({
                    left: "+=250px",
                    useTranslate3d: true
                }, 500, function() {});
                $(".black-layer").hide();
                $(".main-wrapper").css("width", anchoWrapper);
            }
        }
    });
    function changeOrientation() {
        anchoWrapper = $(window).width();
        altoWrapper = $(window).height();
        if ($("body").hasClass("nav-right")) {
            $("#off-canvas-right").css("left", anchoWrapper - 250);
        } else {
            $("#off-canvas-right").css("left", anchoWrapper);
        }
        $(".main-wrapper").css("width", anchoWrapper);
        $(".inner-nav").css("height", altoWrapper - 65);
        setTimeout(function() {
            anchoWrapper = $(window).width();
            altoWrapper = $(window).height();
            if ($("body").hasClass("nav-right")) {
                $("#off-canvas-right").css("left", anchoWrapper - 250);
            } else {
                $("#off-canvas-right").css("left", anchoWrapper);
            }
            $(".main-wrapper").css("width", anchoWrapper);
            $(".inner-nav").css("height", altoWrapper - 65);
        }, 500);
    }
    window.addEventListener("orientationchange", changeOrientation, false);
});

$(window).load(function() {
    $("div").removeClass("heigth-truncatedText");
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1e3 % 60);
    var minutes = Math.floor(t / 1e3 / 60 % 60);
    return {
        total: t,
        minutes: minutes,
        seconds: seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
    function updateClock() {
        var t = getTimeRemaining(endtime);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1e3);
}

jQuery.fn.njsCalendar = function(calendarData) {
    this.each(function() {
        var njsc = $(this);
        var open = false;
        var todayCreated = false;
        var classes = {
            weekRow: "week-row",
            dayCell: "month-day",
            dayButton: "day",
            today: "today",
            past: "past",
            empty: "empty",
            month: "month",
            cntMonth: "cnt-month",
            monthTitle: "month-title",
            monthText: "txt-month",
            monthFixed: "month-fixed",
            months: "months",
            yearText: "txt-year",
            cInSelected: "checkin-selected",
            cOutSelected: "checkout-selected",
            cOutProv: "checkout-provisional",
            lastChecked: "lastChecked",
            lastProv: "lastProv",
            checkSelected: "check-selected",
            cntMessage: "cnt-message",
            cntCtaBtn: "cnt-cta",
            ctaBtn: "njs-cta",
            numNightsCta: "num-nights",
            ctaMulti: "multi",
            cntSelectedDates: "cnt-selected-dates",
            selectedCheckin: "selected-checkin",
            selectedCheckinDayWeek: "day-week",
            selectedCheckinDayMonth: "day-number",
            selectedCheckinMonth: "day-month",
            selectedCheckinMonthNum: "day-month-num",
            selectedCheckinYear: "day-year",
            selectedCheckout: "selected-checkout",
            selectedCheckoutDayWeek: "day-week",
            selectedCheckoutDayMonth: "day-number",
            selectedCheckoutMonth: "day-month",
            selectedCheckoutMonthNum: "day-month-num",
            selectedCheckoutYear: "day-year",
            prov: "prov",
            cntWeekDays: "cnt-week-days",
            weekDays: "week-days",
            weekDay: "week-day",
            maxMonths: "max-months"
        };
        var limitBooking = calendarData.limitBooking;
        var monthsNames = calendarData.months;
        var weekDaysNames = calendarData.days;
        var countDays = 1;
        var today = new Date();
        var thisDay = today.getDate();
        var thisMonth = today.getMonth();
        var thisYear = today.getFullYear();
        var seletedCheckin;
        var seletedCheckout;
        var seletedCheckinDate;
        var seletedCheckoutDate;
        function createCalendar() {
            if (!open) {
                todayCreated = false;
                open = true;
                var maxMonths = "";
                if ($("." + classes.months).find("." + classes.maxMonths).length) {
                    maxMonths = $("." + classes.maxMonths);
                }
                destroyStatic();
                var showMonth = thisMonth;
                var showYear = thisYear;
                for (w = 0; w < 7; w++) {
                    var cntWeekDays = $("." + classes.cntWeekDays + " ." + classes.weekDays);
                    var weekNameShort = weekDaysNames[w].substr(0, 2);
                    jQuery("<div>", {
                        class: classes.weekDay
                    }).text(weekNameShort).appendTo(cntWeekDays);
                }
                for (i = 0; i < calendarData.monthsToShow; i++) {
                    countDays = 1;
                    if (showMonth >= 12) {
                        showMonth = 0;
                        showYear++;
                    }
                    createMonth(showMonth, showYear);
                    if (i == 0) {
                        var monthTitle = jQuery("<div>", {
                            class: classes.monthFixed
                        });
                        var htmlTitle = njsc.find("." + classes.months + " ." + classes.cntMonth).first().find("." + classes.monthTitle).html();
                        monthTitle.html(htmlTitle);
                        monthTitle.appendTo(njsc);
                    }
                    showMonth++;
                }
                preselectDate();
                maxMonths.appendTo($("." + classes.months));
                njsc.find("." + classes.dayButton).on("click", function(e) {
                    var clickDayTxt = $(this).text();
                    var clickMonthTxt = $(this).closest("." + classes.cntMonth).find("." + classes.monthText).text().trim();
                    var clickYearTxt = $(this).closest("." + classes.cntMonth).find("." + classes.yearText).text();
                    clickDay = parseInt(clickDayTxt);
                    clickMonth = monthsNames.indexOf(clickMonthTxt);
                    clickYear = parseInt(clickYearTxt);
                    var clickDate = new Date(clickYear, clickMonth, clickDay);
                    var todayDate = new Date();
                    if ($(this).is("." + classes.today) || clickDate > todayDate) {
                        if (!seletedCheckout.is("." + classes.cOutProv)) {
                            if (!$(this).is("." + classes.cInSelected)) {
                                selectCheckin($(this), classes.cInSelected, classes.cInSelected, clickDate);
                            }
                            njsc.find("." + classes.lastChecked).removeClass(classes.lastChecked);
                            njsc.find("." + classes.lastProv).removeClass(classes.lastProv);
                            njsc.find("." + classes.checkSelected).removeClass(classes.checkSelected);
                            selectCheckoutProv($(this), classes.cOutProv, classes.cOutSelected);
                        } else {
                            var checkoutDeadLine = new Date(seletedCheckinDate.getFullYear(), seletedCheckinDate.getMonth(), seletedCheckinDate.getDate() + limitBooking);
                            if (!$(this).is("." + classes.cInSelected)) {
                                njsc.find("." + classes.lastChecked).removeClass(classes.lastChecked);
                                njsc.find("." + classes.lastProv).removeClass(classes.lastProv);
                                if (clickDate > seletedCheckinDate && clickDate < checkoutDeadLine) {
                                    selectCheckout($(this), classes.cOutSelected, classes.cOutProv, clickDate);
                                } else {
                                    if (clickDate < checkoutDeadLine) {
                                        selectCheckin($(this), classes.cInSelected, classes.cInSelected, clickDate);
                                        selectCheckoutProv($(this), classes.cOutProv, classes.cOutProv);
                                    }
                                }
                            }
                            if (clickDate >= checkoutDeadLine) {
                                $(calendarData.modalRangeSelector).modal("show");
                            }
                        }
                    } else {}
                });
                njsc.find("." + classes.ctaBtn).on("click", function(e) {
                    outputCheckinButton();
                    outputCheckoutButton();
                    njsc.parent().removeClass("activo");
                    $(window).scrollTop(0);
                });
                njsc.find(".modal-header .close").on("click", function(e) {
                    njsc.parent().removeClass("activo");
                    $(window).scrollTop(0);
                });
                var heightCalendar = njsc.outerHeight();
                var heightModalC = njsc.parent().height();
                if (heightCalendar > heightModalC) {
                    njsc.parent().height(heightCalendar);
                }
            }
        }
        function getNetxtDay(elm, provisional) {
            var nextDayCell = elm.parent().next();
            var nextDay = elm.parent().next().find("." + classes.dayButton).not("." + classes.empty);
            if (nextDay.length > 0) {
                return nextDay;
            } else {
                nextDay = elm.closest("." + classes.weekRow).next().find("." + classes.dayButton).not("." + classes.empty).first();
                nextDayCell = nextDay.parent();
                if (nextDay.length > 0) {
                    if (provisional) {
                        elm.parent().addClass(classes.lastProv);
                    } else {
                        elm.parent().addClass(classes.lastChecked);
                    }
                    return nextDay;
                } else {
                    nextDay = elm.closest("." + classes.cntMonth).next().find("." + classes.dayButton).not("." + classes.empty).first();
                    nextDayCell = nextDay.parent();
                    if (nextDay.length > 0) {
                        if (provisional) {
                            elm.parent().addClass(classes.lastProv);
                        } else {
                            elm.parent().addClass(classes.lastChecked);
                        }
                        return nextDay;
                    }
                }
            }
            return elm.parent().next().find("." + classes.dayButton);
        }
        function selectCheckoutProv(elm, nextClass, paramRemoveClass) {
            seletedCheckout.removeClass(paramRemoveClass);
            var nextDay = getNetxtDay(elm, true);
            nextDay.addClass(nextClass);
            seletedCheckout = nextDay;
            seletedCheckoutDate = new Date(seletedCheckinDate.getFullYear(), seletedCheckinDate.getMonth(), seletedCheckinDate.getDate() + 1);
            njsc.find("." + classes.cntCtaBtn).hide();
            njsc.find("." + classes.cntMessage).show();
            outputCheckoutHeader(true);
        }
        function selectCheckout(elm, paramAddClass, paramRemoveClass, clickDate) {
            if (seletedCheckout && seletedCheckout.length > 0) {
                seletedCheckout.removeClass(paramRemoveClass);
            }
            elm.addClass(paramAddClass);
            seletedCheckout = elm;
            seletedCheckoutDate = clickDate;
            var checkedDay = getNetxtDay(seletedCheckin, false);
            var ij = 0;
            if (checkedDay.length) {
                while (!checkedDay.is("." + classes.cOutSelected)) {
                    checkedDay.addClass(classes.checkSelected);
                    checkedDay = getNetxtDay(checkedDay, false);
                    if (ij > 90) {
                        break;
                    }
                    ij++;
                }
            }
            var numNights = njsc.find("." + classes.checkSelected).length + 1;
            if (numNights > 1) {
                njsc.find("." + classes.ctaBtn).addClass(classes.ctaMulti);
            } else {
                njsc.find("." + classes.ctaBtn).removeClass(classes.ctaMulti);
            }
            njsc.find("." + classes.cntCtaBtn + " ." + classes.numNightsCta).text(numNights);
            njsc.find("." + classes.cntCtaBtn).show();
            njsc.find("." + classes.cntMessage).hide();
            outputCheckoutHeader(false);
        }
        function selectCheckin(elm, paramAddClass, paramRemoveClass, clickDate) {
            if (seletedCheckin && seletedCheckin.length > 0) {
                seletedCheckin.removeClass(paramRemoveClass);
            }
            elm.addClass(paramAddClass);
            seletedCheckin = elm;
            seletedCheckinDate = clickDate;
            outputCheckinHeader();
        }
        function preselectDate() {
            if ($("#js-bottom-window-full").length > 0) {
                var preCheckinDay = parseInt($("#js-bottom-window-full .check-in .day-number").text());
                var preCheckinMonth = parseInt($("#js-bottom-window-full .check-in .day-month").text());
                var preCheckinYear = parseInt($("#js-bottom-window-full .check-in .day-year").text());
                var preselectCheckinDay = $("." + classes.cntMonth + '[data-month="' + preCheckinMonth + '"][data-year="' + preCheckinYear + '"]').find("." + classes.dayButton + '[data-day="' + preCheckinDay + '"]');
                var clickDateCheckin = new Date(preCheckinYear, preCheckinMonth - 1, preCheckinDay);
                if (clickDateCheckin < today) {
                    preselectCheckinDay = njsc.find("." + classes.today);
                    clickDateCheckin = today;
                }
                selectCheckin(preselectCheckinDay, classes.cInSelected, classes.cInSelected, clickDateCheckin);
                var preCheckoutDay = parseInt($("#js-bottom-window-full .check-out .day-number").text());
                var preCheckoutMonth = parseInt($("#js-bottom-window-full .check-out .day-month").text());
                var preCheckoutYear = parseInt($("#js-bottom-window-full .check-out .day-year").text());
                var preselectCheckoutDay = $("." + classes.cntMonth + '[data-month="' + preCheckoutMonth + '"][data-year="' + preCheckoutYear + '"]').find("." + classes.dayButton + '[data-day="' + preCheckoutDay + '"]');
                var clickDateCheckout = new Date(preCheckoutYear, preCheckoutMonth - 1, preCheckoutDay);
                var auxNextday = new Date(clickDateCheckin.getFullYear(), clickDateCheckin.getMonth(), clickDateCheckin.getDate() + 1);
                if (clickDateCheckout < auxNextday) {
                    preselectCheckoutDay = njsc.find("." + classes.today).parent().next().find("." + classes.dayButton);
                    clickDateCheckout = auxNextday;
                }
                selectCheckout(preselectCheckoutDay, classes.cOutSelected, classes.cOutProv, clickDateCheckout);
            } else {
                var todayPre = njsc.find("." + classes.today);
                todayPre.addClass(classes.cInSelected);
                var tomorrowPre = todayPre.parent().next().find("." + classes.dayButton);
                tomorrowPre.addClass(classes.cOutSelected);
                seletedCheckin = todayPre;
                seletedCheckinDate = new Date(thisYear, thisMonth, thisDay);
                seletedCheckout = tomorrowPre;
                seletedCheckoutDate = new Date(seletedCheckinDate.getFullYear(), seletedCheckinDate.getMonth(), seletedCheckinDate.getDate() + 1);
                outputCheckinHeader();
                outputCheckoutHeader(false);
                njsc.find("." + classes.cntCtaBtn).show();
            }
        }
        function outputCheckinHeader() {
            var selectedWeekDay = weekDaysNames[getDayWeek(seletedCheckinDate.getFullYear(), seletedCheckinDate.getMonth(), seletedCheckinDate.getDate())];
            var selectedMonthDay = seletedCheckinDate.getDate();
            var selectedMonth = monthsNames[seletedCheckinDate.getMonth()].substr(0, 3);
            var selectedMonthNum = seletedCheckinDate.getMonth() + 1;
            var selectedYear = seletedCheckinDate.getFullYear().toString().substr(2, 2);
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckin + " ." + classes.selectedCheckinDayWeek).text(selectedWeekDay);
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckin + " ." + classes.selectedCheckinDayMonth).text(oBefore(selectedMonthDay));
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckin + " ." + classes.selectedCheckinMonth).text(selectedMonth);
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckin + " ." + classes.selectedCheckinMonthNum).text(oBefore(selectedMonthNum));
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckin + " ." + classes.selectedCheckinYear).text(selectedYear);
        }
        function outputCheckoutHeader(prov) {
            var selectedWeekDay = weekDaysNames[getDayWeek(seletedCheckoutDate.getFullYear(), seletedCheckoutDate.getMonth(), seletedCheckoutDate.getDate())];
            var selectedMonthDay = seletedCheckoutDate.getDate();
            var selectedMonth = monthsNames[seletedCheckoutDate.getMonth()].substr(0, 3);
            var selectedMonthNum = seletedCheckoutDate.getMonth() + 1;
            var selectedYear = seletedCheckoutDate.getFullYear().toString().substr(2, 2);
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout + " ." + classes.selectedCheckoutDayWeek).text(selectedWeekDay);
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout + " ." + classes.selectedCheckoutDayMonth).text(oBefore(selectedMonthDay));
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout + " ." + classes.selectedCheckoutMonth).text(selectedMonth);
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout + " ." + classes.selectedCheckoutMonthNum).text(oBefore(selectedMonthNum));
            njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout + " ." + classes.selectedCheckoutYear).text(selectedYear);
            if (prov) {
                njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout).addClass(classes.prov);
            } else {
                njsc.find("." + classes.cntSelectedDates + " ." + classes.selectedCheckout).removeClass(classes.prov);
            }
        }
        function outputCheckinButton() {
            var buttonDayWeek = weekDaysNames[getDayWeek(seletedCheckinDate.getFullYear(), seletedCheckinDate.getMonth(), seletedCheckinDate.getDate())].substr(0, 3);
            $("#js-bottom-window-full .check-in .day-week").text(buttonDayWeek);
            var buttonDayNumber = seletedCheckinDate.getDate();
            $("#js-bottom-window-full .check-in .day-number").text(oBefore(buttonDayNumber));
            var buttonDayMonth = seletedCheckinDate.getMonth() + 1;
            $("#js-bottom-window-full .check-in .day-month").text(oBefore(buttonDayMonth));
            var buttonDayYear = seletedCheckinDate.getFullYear();
            $("#js-bottom-window-full .check-in .day-year").text(buttonDayYear);
        }
        function outputCheckoutButton() {
            var buttonDayWeek = weekDaysNames[getDayWeek(seletedCheckoutDate.getFullYear(), seletedCheckoutDate.getMonth(), seletedCheckoutDate.getDate())].substr(0, 3);
            $("#js-bottom-window-full .check-out .day-week").text(buttonDayWeek);
            var buttonDayNumber = seletedCheckoutDate.getDate();
            $("#js-bottom-window-full .check-out .day-number").text(oBefore(buttonDayNumber));
            var buttonDayMonth = seletedCheckoutDate.getMonth() + 1;
            $("#js-bottom-window-full .check-out .day-month").text(oBefore(buttonDayMonth));
            var buttonDayYear = seletedCheckoutDate.getFullYear();
            $("#js-bottom-window-full .check-out .day-year").text(buttonDayYear);
        }
        function createMonth(paramMonth, paramYear) {
            var firstDay = getDayWeek(paramYear, paramMonth, 1);
            var lastDayMonth = lastDay(paramMonth, paramYear);
            var cntMonth = jQuery("<div>", {
                class: classes.cntMonth,
                "data-month": paramMonth + 1,
                "data-year": paramYear
            });
            var monthTitle = jQuery("<div>", {
                class: classes.monthTitle
            }).appendTo(cntMonth);
            var monthText = jQuery("<span>", {
                class: classes.monthText
            }).text(monthsNames[paramMonth] + " ").appendTo(monthTitle);
            var yearText = jQuery("<span>", {
                class: classes.yearText
            }).text(paramYear).appendTo(monthTitle);
            var elmMonth = jQuery("<div>", {
                class: classes.month
            }).appendTo(cntMonth);
            var elmFirstWeek = jQuery("<div>", {
                class: classes.weekRow
            }).appendTo(elmMonth);
            for (var i = 0; i < 7; i++) {
                var dayButton = jQuery("<button>", {
                    class: classes.dayButton,
                    type: "button"
                });
                if (!todayCreated) {
                    dayButton.addClass(classes.past);
                }
                var dayCell = jQuery("<div>", {
                    class: classes.dayCell
                }).append(dayButton);
                if (i < firstDay) {
                    dayButton.addClass(classes.empty);
                } else {
                    dayButton.text(countDays).attr("data-day", countDays);
                    if (paramMonth == thisMonth && paramYear == thisYear && countDays == thisDay) {
                        dayButton.addClass(classes.today).removeClass(classes.past);
                        todayCreated = true;
                    }
                    countDays++;
                }
                dayCell.appendTo(elmFirstWeek);
            }
            var weekDay = 1;
            var elmWeek;
            while (countDays <= lastDayMonth) {
                if (weekDay % 7 == 1) {
                    elmWeek = jQuery("<div>", {
                        class: classes.weekRow
                    }).appendTo(elmMonth);
                }
                var dayButton = jQuery("<button>", {
                    class: classes.dayButton,
                    type: "button",
                    "data-day": countDays
                }).text(countDays);
                if (!todayCreated) {
                    dayButton.addClass(classes.past);
                }
                var dayCell = jQuery("<div>", {
                    class: classes.dayCell
                }).append(dayButton);
                if (paramMonth == thisMonth && paramYear == thisYear && countDays == thisDay) {
                    dayButton.addClass(classes.today).removeClass(classes.past);
                    todayCreated = true;
                }
                countDays++;
                weekDay++;
                dayCell.appendTo(elmWeek);
                if (weekDay % 7 == 0) {
                    elmWeek.appendTo(elmMonth);
                }
            }
            for (var i = weekDay % 7; i <= 7; i++) {
                if (weekDay % 7 > 1) {
                    var dayButton = jQuery("<button>", {
                        class: classes.dayButton,
                        type: "button"
                    }).addClass(classes.empty);
                    if (!todayCreated) {
                        dayButton.addClass(classes.past);
                    }
                    var dayCell = jQuery("<div>", {
                        class: classes.dayCell
                    }).append(dayButton);
                    elmWeek.append(dayCell);
                }
            }
            njsc.find("." + classes.months).append(cntMonth);
        }
        function getDayWeek(year, month, day) {
            var paramDay = new Date(year, month, day);
            var nDay = paramDay.getDay();
            if (calendarData.startDay == 1) {
                if (nDay == 0) {
                    nDay = 6;
                } else {
                    nDay--;
                }
            }
            return nDay;
        }
        function checkdate(y, m, d) {
            return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= new Date(y, m, 0).getDate();
        }
        function oBefore(num) {
            if (num < 10) {
                return "0" + num;
            } else {
                return num;
            }
        }
        function lastDay(month, year) {
            var last_day = 28;
            while (checkdate(year, month + 1, last_day + 1)) {
                last_day++;
            }
            return last_day;
        }
        function destroyStatic() {
            njsc.find("." + classes.months).empty();
        }
        $(window).scroll(function(e) {
            var monthTitles = njsc.find("." + classes.monthTitle);
            monthTitles.each(function(index, elm) {
                var posTop = $(elm).position().top;
                if (posTop - $(window).scrollTop() < 140) {
                    var htmlTitle = $(this).html();
                    njsc.find("." + classes.monthFixed).html(htmlTitle);
                }
            });
            if ($(window).scrollTop() <= 220) {
                var htmlTitle = njsc.find("." + classes.monthTitle).first().html();
                njsc.find("." + classes.monthFixed).html(htmlTitle);
            }
        });
        createCalendar();
    });
    return this;
};

$(document).ready(function() {});

function automataTfno(valor) {
    var estado = 0;
    for (i = 0; i < valor.length; i++) {
        var entrada = valor.charAt(i);
        switch (estado) {
          case 0:
            if (entrada == "+") {
                estado = 1;
            } else if (entrada == "(") {
                estado = 2;
            } else if (!isNaN(entrada)) {
                estado = 8;
            } else {
                return false;
            }
            break;

          case 1:
            if (entrada == "(") {
                estado = 2;
            } else if (!isNaN(entrada)) {
                estado = 8;
            } else {
                return false;
            }
            break;

          case 2:
            if (!isNaN(entrada)) {
                estado = 3;
            } else {
                return false;
            }
            break;

          case 3:
            if (!isNaN(entrada)) {
                estado = 4;
            } else {
                return false;
            }
            break;

          case 4:
            if (!isNaN(entrada)) {
                estado = 5;
            } else if (entrada == ")") {
                estado = 7;
            } else {
                return false;
            }
            break;

          case 5:
            if (!isNaN(entrada)) {
                estado = 6;
            } else if (entrada == ")") {
                estado = 7;
            } else {
                return false;
            }
            break;

          case 6:
            if (entrada == ")") {
                estado = 7;
            } else {
                return false;
            }
            break;

          case 7:
            if (!isNaN(entrada)) {
                estado = 8;
            } else {
                return false;
            }
            break;

          case 8:
            if (!isNaN(entrada)) {
                estado = 9;
            } else {
                return false;
            }
            break;

          case 9:
            if (!isNaN(entrada)) {
                estado = 10;
            } else {
                return false;
            }
            break;

          case 10:
            if (!isNaN(entrada)) {
                estado = 11;
            } else {
                return false;
            }
            break;

          case 11:
            if (!isNaN(entrada)) {
                estado = 12;
            } else {
                return false;
            }
            break;

          case 12:
            if (!isNaN(entrada)) {
                estado = 13;
            } else {
                return false;
            }
            break;

          case 13:
            if (!isNaN(entrada)) {
                estado = 14;
            } else {
                return false;
            }
            break;

          case 14:
            if (!isNaN(entrada)) {
                estado++;
            } else {
                return false;
            }
            break;

          default:
            if (isNaN(entrada)) {
                return false;
            } else {
                estado++;
            }
            break;
        }
    }
    if (estado < 14) {
        return false;
    } else {
        return true;
    }
}

function tfno_callback_function($el, value, callback) {
    callback({
        value: value,
        valid: automataTfno(value),
        message: "Must start with 'a' and end with 'z'"
    });
}

function validarn(e) {
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) return true;
    if (tecla == 9) return true;
    if (tecla == 11) return true;
    patron = /[0-9+()/\s\t]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function codiceFISCALE(cfins) {
    var cf = cfins.toUpperCase();
    var cfReg = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    if (!cfReg.test(cf)) return false;
    var set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var setdisp = "BAKPLCQDREVOSFTGUHMINJWZYX";
    var s = 0;
    for (i = 1; i <= 13; i += 2) s += setpari.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
    for (i = 0; i <= 14; i += 2) s += setdisp.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
    if (s % 26 != cf.charCodeAt(15) - "A".charCodeAt(0)) return false;
    return true;
}

function evaluateMenor(anio, selectedMes, edad) {
    selectedMes = parseInt(selectedMes, 10);
    var ann = parseInt(anio, 10);
    var diasnn = ann * 365 + selectedMes;
    var fecha = new Date();
    var ano = fecha.getFullYear();
    var mes = fecha.getMonth();
    var diasano = ano * 365 + mes * 30;
    if (ano - ann < edad) {
        return false;
    } else {
        return true;
    }
}

function validateMinLength(campo, length) {
    var valor = $.trim(campo);
    var longitud = parseInt(length, 10);
    if (valor.length < longitud) return false; else return true;
}

function validateLength(campo) {
    var valor = $.trim(campo);
    if (valor.length === 0) return false; else return true;
}

function validateExactLength(campo, length) {
    var valor = $.trim(campo);
    var longitud = parseInt(length, 10);
    if (valor.length != longitud) {
        return false;
    } else {
        return true;
    }
}

function validateContains(word, campo) {
    if (campo.indexOf(word) != -1) {
        return false;
    } else {
        return true;
    }
}

function validatePassword(campo) {
    longitud = campo.length;
    if (longitud < 8 || longitud > 15) return false; else return true;
}

function validateSelect(value) {
    if (value === "none" || value === "") {
        return false;
    } else {
        return true;
    }
}

function validateCode(value) {
    longitud = value.length;
    if (longitud < 4) return false; else return true;
}

function validateCp(campo) {
    var filter = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
    if (filter.test(campo)) return true; else return false;
}

function validateTime(campo) {
    var filter = /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (filter.test(campo)) return true; else return false;
}

function validateTfno(campo) {
    var filter = /^[0-9]{2,3}-? ?[0-9]{6,7}$/;
    if (filter.test(campo)) return true; else return false;
}

function validateEmail(campo) {
    var filter = /[\w-\.]{1,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (filter.test(campo)) return true; else return false;
}

function validateNumber(campo) {
    longitud = campo.length;
    if (isNaN(campo) || longitud < 1) return false; else return true;
}

function validateCardNumber(campo) {
    if (validateNumber(campo)) {
        var stringNumber = "" + campo;
        if (stringNumber.length != 16) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function parseDate(input) {
    var parts = input.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function validaFechaPasada(fecha) {
    var result = false;
    if (fecha !== "") {
        var now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        var date = parseDate(fecha);
        if (date >= now) {
            result = true;
        }
    }
    return result;
}

+function($) {
    "use strict";
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                };
            }
        }
        return false;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function() {
            called = true;
        });
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
    };
    $(function() {
        $.support.transition = transitionEnd();
        if (!$.support.transition) return;
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        };
    });
}(jQuery);

+function($) {
    "use strict";
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);
        this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition();
    };
    Affix.VERSION = "3.3.4";
    Affix.RESET = "affix affix-top affix-bottom";
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    };
    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();
        if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;
        if (this.affixed == "bottom") {
            if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
            return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
        }
        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;
        if (offsetTop != null && scrollTop <= offsetTop) return "top";
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";
        return false;
    };
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
    };
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
    };
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = $(document.body).height();
        if (typeof offset != "object") offsetBottom = offsetTop = offset;
        if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css("top", "");
            var affixType = "affix" + (affix ? "-" + affix : "");
            var e = $.Event(affixType + ".bs.affix");
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            this.affixed = affix;
            this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
        }
        if (affix == "bottom") {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            });
        }
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.affix");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.affix", data = new Affix(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.affix;
    $.fn.affix = Plugin;
    $.fn.affix.Constructor = Affix;
    $.fn.affix.noConflict = function() {
        $.fn.affix = old;
        return this;
    };
    $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this);
            var data = $spy.data();
            data.offset = data.offset || {};
            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
            if (data.offsetTop != null) data.offset.top = data.offsetTop;
            Plugin.call($spy, data);
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]';
    var Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.VERSION = "3.3.4";
    Alert.TRANSITION_DURATION = 150;
    Alert.prototype.close = function(e) {
        var $this = $(this);
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = $(selector);
        if (e) e.preventDefault();
        if (!$parent.length) {
            $parent = $this.closest(".alert");
        }
        $parent.trigger(e = $.Event("close.bs.alert"));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass("in");
        function removeElement() {
            $parent.detach().trigger("closed.bs.alert").remove();
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.alert");
            if (!data) $this.data("bs.alert", data = new Alert(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.alert;
    $.fn.alert = Plugin;
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this;
    };
    $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery);

+function($) {
    "use strict";
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
    };
    Button.VERSION = "3.3.4";
    Button.DEFAULTS = {
        loadingText: "loading..."
    };
    Button.prototype.setState = function(state) {
        var d = "disabled";
        var $el = this.$element;
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        state = state + "Text";
        if (data.resetText == null) $el.data("resetText", $el[val]());
        setTimeout($.proxy(function() {
            $el[val](data[state] == null ? this.options[state] : data[state]);
            if (state == "loadingText") {
                this.isLoading = true;
                $el.addClass(d).attr(d, d);
            } else if (this.isLoading) {
                this.isLoading = false;
                $el.removeClass(d).removeAttr(d);
            }
        }, this), 0);
    };
    Button.prototype.toggle = function() {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            if ($input.prop("type") == "radio") {
                if ($input.prop("checked") && this.$element.hasClass("active")) changed = false; else $parent.find(".active").removeClass("active");
            }
            if (changed) $input.prop("checked", !this.$element.hasClass("active")).trigger("change");
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        }
        if (changed) this.$element.toggleClass("active");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.button");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.button", data = new Button(this, options));
            if (option == "toggle") data.toggle(); else if (option) data.setState(option);
        });
    }
    var old = $.fn.button;
    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
        $.fn.button = old;
        return this;
    };
    $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target);
        if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
        Plugin.call($btn, "toggle");
        e.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery);

+function($) {
    "use strict";
    var Carousel = function(element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
        this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
    };
    Carousel.VERSION = "3.3.4";
    Carousel.TRANSITION_DURATION = 600;
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: true,
        keyboard: true
    };
    Carousel.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        switch (e.which) {
          case 37:
            this.prev();
            break;

          case 39:
            this.next();
            break;

          default:
            return;
        }
        e.preventDefault();
    };
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
        return this;
    };
    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children(".item");
        return this.$items.index(item || this.$active);
    };
    Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = direction == "prev" ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
    };
    Carousel.prototype.to = function(pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (pos > this.$items.length - 1 || pos < 0) return;
        if (this.sliding) return this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        });
        if (activeIndex == pos) return this.pause().cycle();
        return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
    };
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true);
        if (this.$element.find(".next, .prev").length && $.support.transition) {
            this.$element.trigger($.support.transition.end);
            this.cycle(true);
        }
        this.interval = clearInterval(this.interval);
        return this;
    };
    Carousel.prototype.next = function() {
        if (this.sliding) return;
        return this.slide("next");
    };
    Carousel.prototype.prev = function() {
        if (this.sliding) return;
        return this.slide("prev");
    };
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active");
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == "next" ? "left" : "right";
        var that = this;
        if ($next.hasClass("active")) return this.sliding = false;
        var relatedTarget = $next[0];
        var slideEvent = $.Event("slide.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) return;
        this.sliding = true;
        isCycling && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
            $nextIndicator && $nextIndicator.addClass("active");
        }
        var slidEvent = $.Event("slid.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        if ($.support.transition && this.$element.hasClass("slide")) {
            $next.addClass(type);
            $next[0].offsetWidth;
            $active.addClass(direction);
            $next.addClass(direction);
            $active.one("bsTransitionEnd", function() {
                $next.removeClass([ type, direction ].join(" ")).addClass("active");
                $active.removeClass([ "active", direction ].join(" "));
                that.sliding = false;
                setTimeout(function() {
                    that.$element.trigger(slidEvent);
                }, 0);
            }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
            $active.removeClass("active");
            $next.addClass("active");
            this.sliding = false;
            this.$element.trigger(slidEvent);
        }
        isCycling && this.cycle();
        return this;
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.carousel");
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
            var action = typeof option == "string" ? option : options.slide;
            if (!data) $this.data("bs.carousel", data = new Carousel(this, options));
            if (typeof option == "number") data.to(option); else if (action) data[action](); else if (options.interval) data.pause().cycle();
        });
    }
    var old = $.fn.carousel;
    $.fn.carousel = Plugin;
    $.fn.carousel.Constructor = Carousel;
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old;
        return this;
    };
    var clickHandler = function(e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        if (!$target.hasClass("carousel")) return;
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr("data-slide-to");
        if (slideIndex) options.interval = false;
        Plugin.call($target, options);
        if (slideIndex) {
            $target.data("bs.carousel").to(slideIndex);
        }
        e.preventDefault();
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
    $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            Plugin.call($carousel, $carousel.data());
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) this.toggle();
    };
    Collapse.VERSION = "3.3.4";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
        toggle: true
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var activesData;
        var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (actives && actives.length) {
            activesData = actives.data("bs.collapse");
            if (activesData && activesData.transitioning) return;
        }
        var startEvent = $.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        if (actives && actives.length) {
            Plugin.call(actives, "hide");
            activesData || actives.data("bs.collapse", null);
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    };
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var startEvent = $.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element);
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
    };
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen);
        $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $(target);
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.collapse");
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
            if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this;
    };
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $(this);
        if (!$this.attr("data-target")) e.preventDefault();
        var $target = getTargetFromTrigger($this);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $this.data();
        Plugin.call($target, option);
    });
}(jQuery);

+function($) {
    "use strict";
    var backdrop = ".dropdown-backdrop";
    var toggle = '[data-toggle="dropdown"]';
    var Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.4";
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        clearMenus();
        if (!isActive) {
            if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus);
            }
            var relatedTarget = {
                relatedTarget: this
            };
            $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.trigger("focus").attr("aria-expanded", "true");
            $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget);
        }
        return false;
    };
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger("focus");
            return $this.trigger("click");
        }
        var desc = " li:not(.disabled):visible a";
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
        if (!$items.length) return;
        var index = $items.index(e.target);
        if (e.which == 38 && index > 0) index--;
        if (e.which == 40 && index < $items.length - 1) index++;
        if (!~index) index = 0;
        $items.eq(index).trigger("focus");
    };
    function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function() {
            var $this = $(this);
            var $parent = getParent($this);
            var relatedTarget = {
                relatedTarget: this
            };
            if (!$parent.hasClass("open")) return;
            $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.attr("aria-expanded", "false");
            $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget);
        });
    }
    function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.dropdown");
            if (!data) $this.data("bs.dropdown", data = new Dropdown(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old;
        return this;
    };
    $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', Dropdown.prototype.keydown);
}(jQuery);

+function($) {
    "use strict";
    var Modal = function(element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        }
    };
    Modal.VERSION = "3.3.4";
    Modal.TRANSITION_DURATION = 300;
    Modal.BACKDROP_TRANSITION_DURATION = 150;
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    };
    Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) return;
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            that.$element.one("mouseup.dismiss.bs.modal", function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
            });
        });
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body);
            }
            that.$element.show().scrollTop(0);
            that.adjustDialog();
            if (transition) {
                that.$element[0].offsetWidth;
            }
            that.$element.addClass("in").attr("aria-hidden", false);
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$dialog.one("bsTransitionEnd", function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
        });
    };
    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault();
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) return;
        this.isShown = false;
        this.escape();
        this.resize();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
    };
    Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus");
            }
        }, this));
    };
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(e) {
                e.which == 27 && this.hide();
            }, this));
        } else if (!this.isShown) {
            this.$element.off("keydown.dismiss.bs.modal");
        }
    };
    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
        } else {
            $(window).off("resize.bs.modal");
        }
    };
    Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
            if ($(".modal.in").length === 0) {
                that.$body.removeClass("modal-open");
            }
            that.resetAdjustments();
            that.resetScrollbar();
            that.$element.trigger("hidden.bs.modal");
        });
    };
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    Modal.prototype.backdrop = function(callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false;
                    return;
                }
                if (e.target !== e.currentTarget) return;
                this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
            }, this));
            if (doAnimate) this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            if (!callback) return;
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                that.removeBackdrop();
                callback && callback();
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
            callback();
        }
    };
    Modal.prototype.handleUpdate = function() {
        this.adjustDialog();
    };
    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        });
    };
    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    };
    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
    };
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    };
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    };
    Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };
    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) $this.data("bs.modal", data = new Modal(this, options));
            if (typeof option == "string") data[option](_relatedTarget); else if (options.show) data.show(_relatedTarget);
        });
    }
    var old = $.fn.modal;
    $.fn.modal = Plugin;
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function() {
        $.fn.modal = old;
        return this;
    };
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
        var option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        if ($this.is("a")) e.preventDefault();
        $target.one("show.bs.modal", function(showEvent) {
            if (showEvent.isDefaultPrevented()) return;
            $target.one("hidden.bs.modal", function() {
                $this.is(":visible") && $this.trigger("focus");
            });
        });
        Plugin.call($target, option, this);
    });
}(jQuery);

+function($) {
    "use strict";
    var Tooltip = function(element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.4";
    Tooltip.TRANSITION_DURATION = 150;
    Tooltip.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        }
        var triggers = this.options.trigger.split(" ");
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if (trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (trigger != "manual") {
                var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
                var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    };
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
    };
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);
        if (options.delay && typeof options.delay == "number") {
            options.delay = {
                show: options.delay,
                hide: options.delay
            };
        }
        return options;
    };
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {};
        var defaults = this.getDefaults();
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) options[key] = value;
        });
        return options;
    };
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (self && self.$tip && self.$tip.is(":visible")) {
            self.hoverState = "in";
            return;
        }
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        clearTimeout(self.timeout);
        self.hoverState = "in";
        if (!self.options.delay || !self.options.delay.show) return self.show();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "in") self.show();
        }, self.options.delay.show);
    };
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        clearTimeout(self.timeout);
        self.hoverState = "out";
        if (!self.options.delay || !self.options.delay.hide) return self.hide();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "out") self.hide();
        }, self.options.delay.hide);
    };
    Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !inDom) return;
            var that = this;
            var $tip = this.tip();
            var tipId = this.getUID(this.type);
            this.setContent();
            $tip.attr("id", tipId);
            this.$element.attr("aria-describedby", tipId);
            if (this.options.animation) $tip.addClass("fade");
            var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
            var autoToken = /\s?auto?\s?/i;
            var autoPlace = autoToken.test(placement);
            if (autoPlace) placement = placement.replace(autoToken, "") || "top";
            $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement).data("bs." + this.type, this);
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            var pos = this.getPosition();
            var actualWidth = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement;
                var $container = this.options.container ? $(this.options.container) : this.$element.parent();
                var containerDim = this.getPosition($container);
                placement = placement == "bottom" && pos.bottom + actualHeight > containerDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < containerDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > containerDim.width ? "left" : placement == "left" && pos.left - actualWidth < containerDim.left ? "right" : placement;
                $tip.removeClass(orgPlacement).addClass(placement);
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            var complete = function() {
                var prevHoverState = that.hoverState;
                that.$element.trigger("shown.bs." + that.type);
                that.hoverState = null;
                if (prevHoverState == "out") that.leave(that);
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
    };
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        var marginTop = parseInt($tip.css("margin-top"), 10);
        var marginLeft = parseInt($tip.css("margin-left"), 10);
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;
        offset.top = offset.top + marginTop;
        offset.left = offset.left + marginLeft;
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                });
            }
        }, offset), 0);
        $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (placement == "top" && actualHeight != height) {
            offset.top = offset.top + height - actualHeight;
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        if (delta.left) offset.left += delta.left; else offset.top += delta.top;
        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    };
    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
    };
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
        $tip.removeClass("fade in top bottom left right");
    };
    Tooltip.prototype.hide = function(callback) {
        var that = this;
        var $tip = $(this.$tip);
        var e = $.Event("hide.bs." + this.type);
        function complete() {
            if (that.hoverState != "in") $tip.detach();
            that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
            callback && callback();
        }
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;
        $tip.removeClass("in");
        $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        this.hoverState = null;
        return this;
    };
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
            $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
        }
    };
    Tooltip.prototype.hasContent = function() {
        return this.getTitle();
    };
    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        var isBody = el.tagName == "BODY";
        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            });
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset();
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        };
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null;
        return $.extend({}, elRect, scroll, outerDims, elOffset);
    };
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == "bottom" ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "top" ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "left" ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        };
    };
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            if (topEdgeOffset < viewportDimensions.top) {
                delta.top = viewportDimensions.top - topEdgeOffset;
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding;
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            if (leftEdgeOffset < viewportDimensions.left) {
                delta.left = viewportDimensions.left - leftEdgeOffset;
            } else if (rightEdgeOffset > viewportDimensions.width) {
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
            }
        }
        return delta;
    };
    Tooltip.prototype.getTitle = function() {
        var title;
        var $e = this.$element;
        var o = this.options;
        title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
        return title;
    };
    Tooltip.prototype.getUID = function(prefix) {
        do {
            prefix += ~~(Math.random() * 1e6);
        } while (document.getElementById(prefix));
        return prefix;
    };
    Tooltip.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template);
    };
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    Tooltip.prototype.enable = function() {
        this.enabled = true;
    };
    Tooltip.prototype.disable = function() {
        this.enabled = false;
    };
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    };
    Tooltip.prototype.toggle = function(e) {
        var self = this;
        if (e) {
            self = $(e.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                $(e.currentTarget).data("bs." + this.type, self);
            }
        }
        self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
    };
    Tooltip.prototype.destroy = function() {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            that.$element.off("." + that.type).removeData("bs." + that.type);
        });
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tooltip");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.tooltip", data = new Tooltip(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old;
        return this;
    };
}(jQuery);

+function($) {
    "use strict";
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.4";
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
    Popover.prototype.constructor = Popover;
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
    };
    Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
        $tip.find(".popover-content").children().detach().end()[this.options.html ? typeof content == "string" ? "html" : "append" : "text"](content);
        $tip.removeClass("fade top bottom left right in");
        if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide();
    };
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    };
    Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
    };
    Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.popover");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.popover", data = new Popover(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.popover;
    $.fn.popover = Plugin;
    $.fn.popover.Constructor = Popover;
    $.fn.popover.noConflict = function() {
        $.fn.popover = old;
        return this;
    };
}(jQuery);

+function($) {
    "use strict";
    function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
        this.refresh();
        this.process();
    }
    ScrollSpy.VERSION = "3.3.4";
    ScrollSpy.DEFAULTS = {
        offset: 10
    };
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    };
    ScrollSpy.prototype.refresh = function() {
        var that = this;
        var offsetMethod = "offset";
        var offsetBase = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = "position";
            offsetBase = this.$scrollElement.scrollTop();
        }
        this.$body.find(this.selector).map(function() {
            var $el = $(this);
            var href = $el.data("target") || $el.attr("href");
            var $href = /^#./.test(href) && $(href);
            return $href && $href.length && $href.is(":visible") && [ [ $href[offsetMethod]().top + offsetBase, href ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            that.offsets.push(this[0]);
            that.targets.push(this[1]);
        });
    };
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;
        if (this.scrollHeight != scrollHeight) {
            this.refresh();
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }
        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null;
            return this.clear();
        }
        for (i = offsets.length; i--; ) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
    };
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target;
        this.clear();
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
            active = active.closest("li.dropdown").addClass("active");
        }
        active.trigger("activate.bs.scrollspy");
    };
    ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.scrollspy");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.scrollspy;
    $.fn.scrollspy = Plugin;
    $.fn.scrollspy.Constructor = ScrollSpy;
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old;
        return this;
    };
    $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            Plugin.call($spy, $spy.data());
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var Tab = function(element) {
        this.element = $(element);
    };
    Tab.VERSION = "3.3.4";
    Tab.TRANSITION_DURATION = 150;
    Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        if ($this.parent("li").hasClass("active")) return;
        var $previous = $ul.find(".active:last a");
        var hideEvent = $.Event("hide.bs.tab", {
            relatedTarget: $this[0]
        });
        var showEvent = $.Event("show.bs.tab", {
            relatedTarget: $previous[0]
        });
        $previous.trigger(hideEvent);
        $this.trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
        var $target = $(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: "hidden.bs.tab",
                relatedTarget: $this[0]
            });
            $this.trigger({
                type: "shown.bs.tab",
                relatedTarget: $previous[0]
            });
        });
    };
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
            element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
            if (transition) {
                element[0].offsetWidth;
                element.addClass("in");
            } else {
                element.removeClass("fade");
            }
            if (element.parent(".dropdown-menu").length) {
                element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
            }
            callback && callback();
        }
        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
        $active.removeClass("in");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tab");
            if (!data) $this.data("bs.tab", data = new Tab(this));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function() {
        $.fn.tab = old;
        return this;
    };
    var clickHandler = function(e) {
        e.preventDefault();
        Plugin.call($(this), "show");
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery);

(function(d, C, D) {
    function J(a, b, l, c) {
        if ("d" != l && E(a)) {
            var f = K.exec(b), e = "auto" === a.css(l) ? 0 : a.css(l), e = "string" == typeof e ? z(e) : e;
            "string" == typeof b && z(b);
            c = !0 === c ? 0 : e;
            var g = a.is(":hidden"), n = a.translation();
            "left" == l && (c = parseInt(e, 10) + n.x);
            "right" == l && (c = parseInt(e, 10) + n.x);
            "top" == l && (c = parseInt(e, 10) + n.y);
            "bottom" == l && (c = parseInt(e, 10) + n.y);
            if (f || "show" != b) f || "hide" != b || (c = 0); else if (c = 1, g) elem = a[0], 
            elem.style && (display = elem.style.display, d._data(elem, "olddisplay") || "none" !== display || (display = elem.style.display = ""), 
            "" === display && "none" === d.css(elem, "display") && d._data(elem, "olddisplay", L(elem.tagName)), 
            "" === display || "none" === display) && (elem.style.display = d._data(elem, "olddisplay") || ""), 
            a.css("opacity", 0);
            return f ? (a = parseFloat(f[2]), f[1] && (a = ("-=" === f[1] ? -1 : 1) * a + parseInt(c, 10)), 
            f[3] && "px" != f[3] && (a += f[3]), a) : c;
        }
    }
    function M(a, b, l, c, f, e, g, n) {
        var m = a.data(r), m = m && !q(m) ? m : d.extend(!0, {}, N), s = f;
        if (-1 < d.inArray(b, A)) {
            var k = m.meta, p = z(a.css(b)) || 0, t = b + "_o", s = f - p;
            k[b] = s;
            k[t] = "auto" == a.css(b) ? 0 + s : p + s || 0;
            m.meta = k;
            g && 0 === s && (s = 0 - k[t], k[b] = s, k[t] = 0);
        }
        return a.data(r, O(a, m, b, l, c, s, e, g, n));
    }
    function O(a, b, d, c, f, e, g, n, m) {
        var s = !1;
        g = !0 === g && !0 === n;
        b = b || {};
        b.original || (b.original = {}, s = !0);
        b.properties = b.properties || {};
        b.secondary = b.secondary || {};
        n = b.meta;
        for (var r = b.original, p = b.properties, t = b.secondary, h = k.length - 1; 0 <= h; h--) {
            var u = k[h] + "transition-property", v = k[h] + "transition-duration", q = k[h] + "transition-timing-function";
            d = g ? k[h] + "transform" : d;
            s && (r[u] = a.css(u) || "", r[v] = a.css(v) || "", r[q] = a.css(q) || "");
            var P = t, Q = d, w;
            if (g) {
                w = n.left;
                var F = n.top;
                w = !0 === m || !0 === B && !1 !== m && G ? "translate3d(" + w + "px, " + F + "px, 0)" : "translate(" + w + "px," + F + "px)";
            } else w = e;
            P[Q] = w;
            p[u] = (p[u] ? p[u] + "," : "") + d;
            p[v] = (p[v] ? p[v] + "," : "") + c + "ms";
            p[q] = (p[q] ? p[q] + "," : "") + f;
        }
        return b;
    }
    function R(a) {
        for (var b in a) if (!("width" != b && "height" != b || "show" != a[b] && "hide" != a[b] && "toggle" != a[b])) return !0;
        return !1;
    }
    function q(a) {
        for (var b in a) return !1;
        return !0;
    }
    function L(a) {
        a = a.toUpperCase();
        var b = {
            LI: "list-item",
            TR: "table-row",
            TD: "table-cell",
            TH: "table-cell",
            CAPTION: "table-caption",
            COL: "table-column",
            COLGROUP: "table-column-group",
            TFOOT: "table-footer-group",
            THEAD: "table-header-group",
            TBODY: "table-row-group"
        };
        return "string" == typeof b[a] ? b[a] : "block";
    }
    function z(a) {
        return parseFloat(a.replace(a.match(/\D+$/), ""));
    }
    function E(a) {
        var b = !0;
        a.each(function(a, d) {
            return b = b && d.ownerDocument;
        });
        return b;
    }
    function S(a, b, l) {
        if (!E(l)) return !1;
        var c = -1 < d.inArray(a, T);
        "width" != a && "height" != a && "opacity" != a || parseFloat(b) !== parseFloat(l.css(a)) || (c = !1);
        return c;
    }
    var T = "top right bottom left opacity height width".split(" "), A = [ "top", "right", "bottom", "left" ], k = [ "-webkit-", "-moz-", "-o-", "" ], U = [ "avoidTransforms", "useTranslate3d", "leaveTransforms" ], K = /^([+-]=)?([\d+-.]+)(.*)$/, V = /([A-Z])/g, N = {
        secondary: {},
        meta: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }, r = "jQe", H = null, x = !1, y = (document.body || document.documentElement).style, I = void 0 !== y.WebkitTransition || void 0 !== y.MozTransition || void 0 !== y.OTransition || void 0 !== y.transition, G = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix(), B = G;
    d.expr && d.expr.filters && (H = d.expr.filters.animated, d.expr.filters.animated = function(a) {
        return d(a).data("events") && d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"] ? !0 : H.call(this, a);
    });
    d.extend({
        toggle3DByDefault: function() {
            return B = !B;
        },
        toggleDisabledByDefault: function() {
            return x = !x;
        },
        setDisabledByDefault: function(a) {
            return x = a;
        }
    });
    d.fn.translation = function() {
        if (!this[0]) return null;
        var a = window.getComputedStyle(this[0], null), b = {
            x: 0,
            y: 0
        };
        if (a) for (var d = k.length - 1; 0 <= d; d--) {
            var c = a.getPropertyValue(k[d] + "transform");
            if (c && /matrix/i.test(c)) {
                a = c.replace(/^matrix\(/i, "").split(/, |\)$/g);
                b = {
                    x: parseInt(a[4], 10),
                    y: parseInt(a[5], 10)
                };
                break;
            }
        }
        return b;
    };
    d.fn.animate = function(a, b, l, c) {
        a = a || {};
        var f = !("undefined" !== typeof a.bottom || "undefined" !== typeof a.right), e = d.speed(b, l, c), g = 0, n = function() {
            g--;
            0 === g && "function" === typeof e.complete && e.complete.apply(this, arguments);
        };
        return !0 === ("undefined" !== typeof a.avoidCSSTransitions ? a.avoidCSSTransitions : x) || !I || q(a) || R(a) || 0 >= e.duration || e.step ? C.apply(this, arguments) : this[!0 === e.queue ? "queue" : "each"](function() {
            var b = d(this), c = d.extend({}, e), l = function(c) {
                var e = b.data(r) || {
                    original: {}
                }, g = {};
                if (2 == c.eventPhase) {
                    if (!0 !== a.leaveTransforms) {
                        for (c = k.length - 1; 0 <= c; c--) g[k[c] + "transform"] = "";
                        if (f && "undefined" !== typeof e.meta) {
                            c = 0;
                            for (var h; h = A[c]; ++c) g[h] = e.meta[h + "_o"] + "px", d(this).css(h, g[h]);
                        }
                    }
                    b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(e.original).css(g).data(r, null);
                    "hide" === a.opacity && (elem = b[0], elem.style && (display = d.css(elem, "display"), 
                    "none" === display || d._data(elem, "olddisplay") || d._data(elem, "olddisplay", display), 
                    elem.style.display = "none"), b.css("opacity", ""));
                    n.call(this);
                }
            }, p = {
                bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)",
                linear: "linear",
                swing: "ease-in-out",
                easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
                easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
                easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
                easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
                easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
                easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
                easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
                easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
                easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
            }, t = {}, p = p[c.easing || "swing"] ? p[c.easing || "swing"] : c.easing || "swing", h;
            for (h in a) if (-1 === d.inArray(h, U)) {
                var u = -1 < d.inArray(h, A), v = J(b, a[h], h, u && !0 !== a.avoidTransforms);
                S(h, v, b) ? M(b, h, c.duration, p, v, u && !0 !== a.avoidTransforms, f, a.useTranslate3d) : t[h] = a[h];
            }
            b.unbind("webkitTransitionEnd oTransitionEnd transitionend");
            h = b.data(r);
            if (!h || q(h) || q(h.secondary)) c.queue = !1; else {
                g++;
                b.css(h.properties);
                var x = h.secondary;
                setTimeout(function() {
                    b.bind("webkitTransitionEnd oTransitionEnd transitionend", l).css(x);
                });
            }
            q(t) || (g++, C.apply(b, [ t, {
                duration: c.duration,
                easing: d.easing[c.easing] ? c.easing : d.easing.swing ? "swing" : "linear",
                complete: n,
                queue: c.queue
            } ]));
            return !0;
        });
    };
    d.fn.animate.defaults = {};
    d.fn.stop = function(a, b, l) {
        if (!I) return D.apply(this, [ a, b ]);
        a && this.queue([]);
        this.each(function() {
            var c = d(this), f = c.data(r);
            if (f && !q(f)) {
                var e, g = {};
                if (b) {
                    if (g = f.secondary, !l && void 0 !== typeof f.meta.left_o || void 0 !== typeof f.meta.top_o) for (g.left = void 0 !== typeof f.meta.left_o ? f.meta.left_o : "auto", 
                    g.top = void 0 !== typeof f.meta.top_o ? f.meta.top_o : "auto", e = k.length - 1; 0 <= e; e--) g[k[e] + "transform"] = "";
                } else if (!q(f.secondary)) {
                    var n = window.getComputedStyle(c[0], null);
                    if (n) for (var m in f.secondary) if (f.secondary.hasOwnProperty(m) && (m = m.replace(V, "-$1").toLowerCase(), 
                    g[m] = n.getPropertyValue(m), !l && /matrix/i.test(g[m]))) for (e = g[m].replace(/^matrix\(/i, "").split(/, |\)$/g), 
                    g.left = parseFloat(e[4]) + parseFloat(c.css("left")) + "px" || "auto", g.top = parseFloat(e[5]) + parseFloat(c.css("top")) + "px" || "auto", 
                    e = k.length - 1; 0 <= e; e--) g[k[e] + "transform"] = "";
                }
                c.unbind("webkitTransitionEnd oTransitionEnd transitionend");
                c.css(f.original).css(g).data(r, null);
            } else D.apply(c, [ a, b ]);
        });
        return this;
    };
})(jQuery, jQuery.fn.animate, jQuery.fn.stop);

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof module === "object" && module.exports) {
        var jQuery;
        try {
            jQuery = require("jquery");
        } catch (err) {
            jQuery = null;
        }
        module.exports = factory(jQuery);
    } else {
        root.Slider = factory(root.jQuery);
    }
})(this, function($) {
    var Slider;
    (function($) {
        "use strict";
        var slice = Array.prototype.slice;
        function noop() {}
        function defineBridget($) {
            if (!$) {
                return;
            }
            function addOptionMethod(PluginClass) {
                if (PluginClass.prototype.option) {
                    return;
                }
                PluginClass.prototype.option = function(opts) {
                    if (!$.isPlainObject(opts)) {
                        return;
                    }
                    this.options = $.extend(true, this.options, opts);
                };
            }
            var logError = typeof console === "undefined" ? noop : function(message) {
                console.error(message);
            };
            function bridge(namespace, PluginClass) {
                $.fn[namespace] = function(options) {
                    if (typeof options === "string") {
                        var args = slice.call(arguments, 1);
                        for (var i = 0, len = this.length; i < len; i++) {
                            var elem = this[i];
                            var instance = $.data(elem, namespace);
                            if (!instance) {
                                logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
                                continue;
                            }
                            if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                                logError("no such method '" + options + "' for " + namespace + " instance");
                                continue;
                            }
                            var returnValue = instance[options].apply(instance, args);
                            if (returnValue !== undefined && returnValue !== instance) {
                                return returnValue;
                            }
                        }
                        return this;
                    } else {
                        var objects = this.map(function() {
                            var instance = $.data(this, namespace);
                            if (instance) {
                                instance.option(options);
                                instance._init();
                            } else {
                                instance = new PluginClass(this, options);
                                $.data(this, namespace, instance);
                            }
                            return $(this);
                        });
                        if (!objects || objects.length > 1) {
                            return objects;
                        } else {
                            return objects[0];
                        }
                    }
                };
            }
            $.bridget = function(namespace, PluginClass) {
                addOptionMethod(PluginClass);
                bridge(namespace, PluginClass);
            };
            return $.bridget;
        }
        defineBridget($);
    })($);
    (function($) {
        var ErrorMsgs = {
            formatInvalidInputErrorMsg: function(input) {
                return "Invalid input value '" + input + "' passed in";
            },
            callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        };
        var SliderScale = {
            linear: {
                toValue: function(percentage) {
                    var rawValue = percentage / 100 * (this.options.max - this.options.min);
                    if (this.options.ticks_positions.length > 0) {
                        var minv, maxv, minp, maxp = 0;
                        for (var i = 0; i < this.options.ticks_positions.length; i++) {
                            if (percentage <= this.options.ticks_positions[i]) {
                                minv = i > 0 ? this.options.ticks[i - 1] : 0;
                                minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
                                maxv = this.options.ticks[i];
                                maxp = this.options.ticks_positions[i];
                                break;
                            }
                        }
                        if (i > 0) {
                            var partialPercentage = (percentage - minp) / (maxp - minp);
                            rawValue = minv + partialPercentage * (maxv - minv);
                        }
                    }
                    var value = this.options.min + Math.round(rawValue / this.options.step) * this.options.step;
                    if (value < this.options.min) {
                        return this.options.min;
                    } else if (value > this.options.max) {
                        return this.options.max;
                    } else {
                        return value;
                    }
                },
                toPercentage: function(value) {
                    if (this.options.max === this.options.min) {
                        return 0;
                    }
                    if (this.options.ticks_positions.length > 0) {
                        var minv, maxv, minp, maxp = 0;
                        for (var i = 0; i < this.options.ticks.length; i++) {
                            if (value <= this.options.ticks[i]) {
                                minv = i > 0 ? this.options.ticks[i - 1] : 0;
                                minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
                                maxv = this.options.ticks[i];
                                maxp = this.options.ticks_positions[i];
                                break;
                            }
                        }
                        if (i > 0) {
                            var partialPercentage = (value - minv) / (maxv - minv);
                            return minp + partialPercentage * (maxp - minp);
                        }
                    }
                    return 100 * (value - this.options.min) / (this.options.max - this.options.min);
                }
            },
            logarithmic: {
                toValue: function(percentage) {
                    var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
                    var max = Math.log(this.options.max);
                    var value = Math.exp(min + (max - min) * percentage / 100);
                    value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
                    if (value < this.options.min) {
                        return this.options.min;
                    } else if (value > this.options.max) {
                        return this.options.max;
                    } else {
                        return value;
                    }
                },
                toPercentage: function(value) {
                    if (this.options.max === this.options.min) {
                        return 0;
                    } else {
                        var max = Math.log(this.options.max);
                        var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
                        var v = value === 0 ? 0 : Math.log(value);
                        return 100 * (v - min) / (max - min);
                    }
                }
            }
        };
        Slider = function(element, options) {
            createNewSlider.call(this, element, options);
            return this;
        };
        function createNewSlider(element, options) {
            if (typeof element === "string") {
                this.element = document.querySelector(element);
            } else if (element instanceof HTMLElement) {
                this.element = element;
            }
            options = options ? options : {};
            var optionTypes = Object.keys(this.defaultOptions);
            for (var i = 0; i < optionTypes.length; i++) {
                var optName = optionTypes[i];
                var val = options[optName];
                val = typeof val !== "undefined" ? val : getDataAttrib(this.element, optName);
                val = val !== null ? val : this.defaultOptions[optName];
                if (!this.options) {
                    this.options = {};
                }
                this.options[optName] = val;
            }
            function getDataAttrib(element, optName) {
                var dataName = "data-slider-" + optName.replace(/_/g, "-");
                var dataValString = element.getAttribute(dataName);
                try {
                    return JSON.parse(dataValString);
                } catch (err) {
                    return dataValString;
                }
            }
            var origWidth = this.element.style.width;
            var updateSlider = false;
            var parent = this.element.parentNode;
            var sliderTrackSelection;
            var sliderTrackLow, sliderTrackHigh;
            var sliderMinHandle;
            var sliderMaxHandle;
            if (this.sliderElem) {
                updateSlider = true;
            } else {
                this.sliderElem = document.createElement("div");
                this.sliderElem.className = "slider";
                var sliderTrack = document.createElement("div");
                sliderTrack.className = "slider-track";
                sliderTrackLow = document.createElement("div");
                sliderTrackLow.className = "slider-track-low";
                sliderTrackSelection = document.createElement("div");
                sliderTrackSelection.className = "slider-selection";
                sliderTrackHigh = document.createElement("div");
                sliderTrackHigh.className = "slider-track-high";
                sliderMinHandle = document.createElement("div");
                sliderMinHandle.className = "slider-handle min-slider-handle";
                sliderMaxHandle = document.createElement("div");
                sliderMaxHandle.className = "slider-handle max-slider-handle";
                sliderTrack.appendChild(sliderTrackLow);
                sliderTrack.appendChild(sliderTrackSelection);
                sliderTrack.appendChild(sliderTrackHigh);
                this.ticks = [];
                if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                    for (i = 0; i < this.options.ticks.length; i++) {
                        var tick = document.createElement("div");
                        tick.className = "slider-tick";
                        this.ticks.push(tick);
                        sliderTrack.appendChild(tick);
                    }
                    sliderTrackSelection.className += " tick-slider-selection";
                }
                sliderTrack.appendChild(sliderMinHandle);
                sliderTrack.appendChild(sliderMaxHandle);
                this.tickLabels = [];
                if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
                    this.tickLabelContainer = document.createElement("div");
                    this.tickLabelContainer.className = "slider-tick-label-container";
                    for (i = 0; i < this.options.ticks_labels.length; i++) {
                        var label = document.createElement("div");
                        label.className = "slider-tick-label";
                        label.innerHTML = this.options.ticks_labels[i];
                        this.tickLabels.push(label);
                        this.tickLabelContainer.appendChild(label);
                    }
                }
                var createAndAppendTooltipSubElements = function(tooltipElem) {
                    var arrow = document.createElement("div");
                    arrow.className = "tooltip-arrow";
                    var inner = document.createElement("div");
                    inner.className = "tooltip-inner";
                    tooltipElem.appendChild(arrow);
                    tooltipElem.appendChild(inner);
                };
                var sliderTooltip = document.createElement("div");
                sliderTooltip.className = "tooltip tooltip-main";
                createAndAppendTooltipSubElements(sliderTooltip);
                var sliderTooltipMin = document.createElement("div");
                sliderTooltipMin.className = "tooltip tooltip-min";
                createAndAppendTooltipSubElements(sliderTooltipMin);
                var sliderTooltipMax = document.createElement("div");
                sliderTooltipMax.className = "tooltip tooltip-max";
                createAndAppendTooltipSubElements(sliderTooltipMax);
                this.sliderElem.appendChild(sliderTrack);
                this.sliderElem.appendChild(sliderTooltip);
                this.sliderElem.appendChild(sliderTooltipMin);
                this.sliderElem.appendChild(sliderTooltipMax);
                if (this.tickLabelContainer) {
                    this.sliderElem.appendChild(this.tickLabelContainer);
                }
                parent.insertBefore(this.sliderElem, this.element);
                this.element.style.display = "none";
            }
            if ($) {
                this.$element = $(this.element);
                this.$sliderElem = $(this.sliderElem);
            }
            this.eventToCallbackMap = {};
            this.sliderElem.id = this.options.id;
            this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
            this.tooltip = this.sliderElem.querySelector(".tooltip-main");
            this.tooltipInner = this.tooltip.querySelector(".tooltip-inner");
            this.tooltip_min = this.sliderElem.querySelector(".tooltip-min");
            this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner");
            this.tooltip_max = this.sliderElem.querySelector(".tooltip-max");
            this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner");
            if (SliderScale[this.options.scale]) {
                this.options.scale = SliderScale[this.options.scale];
            }
            if (updateSlider === true) {
                this._removeClass(this.sliderElem, "slider-horizontal");
                this._removeClass(this.sliderElem, "slider-vertical");
                this._removeClass(this.tooltip, "hide");
                this._removeClass(this.tooltip_min, "hide");
                this._removeClass(this.tooltip_max, "hide");
                [ "left", "top", "width", "height" ].forEach(function(prop) {
                    this._removeProperty(this.trackLow, prop);
                    this._removeProperty(this.trackSelection, prop);
                    this._removeProperty(this.trackHigh, prop);
                }, this);
                [ this.handle1, this.handle2 ].forEach(function(handle) {
                    this._removeProperty(handle, "left");
                    this._removeProperty(handle, "top");
                }, this);
                [ this.tooltip, this.tooltip_min, this.tooltip_max ].forEach(function(tooltip) {
                    this._removeProperty(tooltip, "left");
                    this._removeProperty(tooltip, "top");
                    this._removeProperty(tooltip, "margin-left");
                    this._removeProperty(tooltip, "margin-top");
                    this._removeClass(tooltip, "right");
                    this._removeClass(tooltip, "top");
                }, this);
            }
            if (this.options.orientation === "vertical") {
                this._addClass(this.sliderElem, "slider-vertical");
                this.stylePos = "top";
                this.mousePos = "pageY";
                this.sizePos = "offsetHeight";
                this._addClass(this.tooltip, "right");
                this.tooltip.style.left = "100%";
                this._addClass(this.tooltip_min, "right");
                this.tooltip_min.style.left = "100%";
                this._addClass(this.tooltip_max, "right");
                this.tooltip_max.style.left = "100%";
            } else {
                this._addClass(this.sliderElem, "slider-horizontal");
                this.sliderElem.style.width = origWidth;
                this.options.orientation = "horizontal";
                this.stylePos = "left";
                this.mousePos = "pageX";
                this.sizePos = "offsetWidth";
                this._addClass(this.tooltip, "top");
                this.tooltip.style.top = -this.tooltip.outerHeight - 14 + "px";
                this._addClass(this.tooltip_min, "top");
                this.tooltip_min.style.top = -this.tooltip_min.outerHeight - 14 + "px";
                this._addClass(this.tooltip_max, "top");
                this.tooltip_max.style.top = -this.tooltip_max.outerHeight - 14 + "px";
            }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                this.options.max = Math.max.apply(Math, this.options.ticks);
                this.options.min = Math.min.apply(Math, this.options.ticks);
            }
            if (Array.isArray(this.options.value)) {
                this.options.range = true;
            } else if (this.options.range) {
                this.options.value = [ this.options.value, this.options.max ];
            }
            this.trackLow = sliderTrackLow || this.trackLow;
            this.trackSelection = sliderTrackSelection || this.trackSelection;
            this.trackHigh = sliderTrackHigh || this.trackHigh;
            if (this.options.selection === "none") {
                this._addClass(this.trackLow, "hide");
                this._addClass(this.trackSelection, "hide");
                this._addClass(this.trackHigh, "hide");
            }
            this.handle1 = sliderMinHandle || this.handle1;
            this.handle2 = sliderMaxHandle || this.handle2;
            if (updateSlider === true) {
                this._removeClass(this.handle1, "round triangle");
                this._removeClass(this.handle2, "round triangle hide");
                for (i = 0; i < this.ticks.length; i++) {
                    this._removeClass(this.ticks[i], "round triangle hide");
                }
            }
            var availableHandleModifiers = [ "round", "triangle", "custom" ];
            var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
            if (isValidHandleType) {
                this._addClass(this.handle1, this.options.handle);
                this._addClass(this.handle2, this.options.handle);
                for (i = 0; i < this.ticks.length; i++) {
                    this._addClass(this.ticks[i], this.options.handle);
                }
            }
            this.offset = this._offset(this.sliderElem);
            this.size = this.sliderElem[this.sizePos];
            this.setValue(this.options.value);
            this.handle1Keydown = this._keydown.bind(this, 0);
            this.handle1.addEventListener("keydown", this.handle1Keydown, false);
            this.handle2Keydown = this._keydown.bind(this, 1);
            this.handle2.addEventListener("keydown", this.handle2Keydown, false);
            this.mousedown = this._mousedown.bind(this);
            if (this.touchCapable) {
                this.sliderElem.addEventListener("touchstart", this.mousedown, false);
            }
            this.sliderElem.addEventListener("mousedown", this.mousedown, false);
            if (this.options.tooltip === "hide") {
                this._addClass(this.tooltip, "hide");
                this._addClass(this.tooltip_min, "hide");
                this._addClass(this.tooltip_max, "hide");
            } else if (this.options.tooltip === "always") {
                this._showTooltip();
                this._alwaysShowTooltip = true;
            } else {
                this.showTooltip = this._showTooltip.bind(this);
                this.hideTooltip = this._hideTooltip.bind(this);
                this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
                this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);
                this.handle1.addEventListener("focus", this.showTooltip, false);
                this.handle1.addEventListener("blur", this.hideTooltip, false);
                this.handle2.addEventListener("focus", this.showTooltip, false);
                this.handle2.addEventListener("blur", this.hideTooltip, false);
            }
            if (this.options.enabled) {
                this.enable();
            } else {
                this.disable();
            }
        }
        Slider.prototype = {
            _init: function() {},
            constructor: Slider,
            defaultOptions: {
                id: "",
                min: 0,
                max: 10,
                step: 1,
                precision: 0,
                orientation: "horizontal",
                value: 5,
                range: false,
                selection: "before",
                tooltip: "show",
                tooltip_split: false,
                handle: "round",
                reversed: false,
                enabled: true,
                formatter: function(val) {
                    if (Array.isArray(val)) {
                        return val[0] + " : " + val[1];
                    } else {
                        return val;
                    }
                },
                natural_arrow_keys: false,
                ticks: [],
                ticks_positions: [],
                ticks_labels: [],
                ticks_snap_bounds: 0,
                scale: "linear",
                focus: false
            },
            over: false,
            inDrag: false,
            getValue: function() {
                if (this.options.range) {
                    return this.options.value;
                }
                return this.options.value[0];
            },
            setValue: function(val, triggerSlideEvent, triggerChangeEvent) {
                if (!val) {
                    val = 0;
                }
                var oldValue = this.getValue();
                this.options.value = this._validateInputValue(val);
                var applyPrecision = this._applyPrecision.bind(this);
                if (this.options.range) {
                    this.options.value[0] = applyPrecision(this.options.value[0]);
                    this.options.value[1] = applyPrecision(this.options.value[1]);
                    this.options.value[0] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[0]));
                    this.options.value[1] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[1]));
                } else {
                    this.options.value = applyPrecision(this.options.value);
                    this.options.value = [ Math.max(this.options.min, Math.min(this.options.max, this.options.value)) ];
                    this._addClass(this.handle2, "hide");
                    if (this.options.selection === "after") {
                        this.options.value[1] = this.options.max;
                    } else {
                        this.options.value[1] = this.options.min;
                    }
                }
                if (this.options.max > this.options.min) {
                    this.percentage = [ this._toPercentage(this.options.value[0]), this._toPercentage(this.options.value[1]), this.options.step * 100 / (this.options.max - this.options.min) ];
                } else {
                    this.percentage = [ 0, 0, 100 ];
                }
                this._layout();
                var newValue = this.options.range ? this.options.value : this.options.value[0];
                if (triggerSlideEvent === true) {
                    this._trigger("slide", newValue);
                }
                if (oldValue !== newValue && triggerChangeEvent === true) {
                    this._trigger("change", {
                        oldValue: oldValue,
                        newValue: newValue
                    });
                }
                this._setDataVal(newValue);
                return this;
            },
            destroy: function() {
                this._removeSliderEventHandlers();
                this.sliderElem.parentNode.removeChild(this.sliderElem);
                this.element.style.display = "";
                this._cleanUpEventCallbacksMap();
                this.element.removeAttribute("data");
                if ($) {
                    this._unbindJQueryEventHandlers();
                    this.$element.removeData("slider");
                }
            },
            disable: function() {
                this.options.enabled = false;
                this.handle1.removeAttribute("tabindex");
                this.handle2.removeAttribute("tabindex");
                this._addClass(this.sliderElem, "slider-disabled");
                this._trigger("slideDisabled");
                return this;
            },
            enable: function() {
                this.options.enabled = true;
                this.handle1.setAttribute("tabindex", 0);
                this.handle2.setAttribute("tabindex", 0);
                this._removeClass(this.sliderElem, "slider-disabled");
                this._trigger("slideEnabled");
                return this;
            },
            toggle: function() {
                if (this.options.enabled) {
                    this.disable();
                } else {
                    this.enable();
                }
                return this;
            },
            isEnabled: function() {
                return this.options.enabled;
            },
            on: function(evt, callback) {
                this._bindNonQueryEventHandler(evt, callback);
                return this;
            },
            off: function(evt, callback) {
                if ($) {
                    this.$element.off(evt, callback);
                    this.$sliderElem.off(evt, callback);
                } else {
                    this._unbindNonQueryEventHandler(evt, callback);
                }
            },
            getAttribute: function(attribute) {
                if (attribute) {
                    return this.options[attribute];
                } else {
                    return this.options;
                }
            },
            setAttribute: function(attribute, value) {
                this.options[attribute] = value;
                return this;
            },
            refresh: function() {
                this._removeSliderEventHandlers();
                createNewSlider.call(this, this.element, this.options);
                if ($) {
                    $.data(this.element, "slider", this);
                }
                return this;
            },
            relayout: function() {
                this._layout();
                return this;
            },
            _removeSliderEventHandlers: function() {
                this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
                this.handle1.removeEventListener("focus", this.showTooltip, false);
                this.handle1.removeEventListener("blur", this.hideTooltip, false);
                this.handle2.removeEventListener("keydown", this.handle2Keydown, false);
                this.handle2.removeEventListener("focus", this.handle2Keydown, false);
                this.handle2.removeEventListener("blur", this.handle2Keydown, false);
                this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
                this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
                this.sliderElem.removeEventListener("touchstart", this.mousedown, false);
                this.sliderElem.removeEventListener("mousedown", this.mousedown, false);
            },
            _bindNonQueryEventHandler: function(evt, callback) {
                if (this.eventToCallbackMap[evt] === undefined) {
                    this.eventToCallbackMap[evt] = [];
                }
                this.eventToCallbackMap[evt].push(callback);
            },
            _unbindNonQueryEventHandler: function(evt, callback) {
                var callbacks = this.eventToCallbackMap[evt];
                if (callbacks !== undefined) {
                    for (var i = 0; i < callbacks.length; i++) {
                        if (callbacks[i] === callback) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                }
            },
            _cleanUpEventCallbacksMap: function() {
                var eventNames = Object.keys(this.eventToCallbackMap);
                for (var i = 0; i < eventNames.length; i++) {
                    var eventName = eventNames[i];
                    this.eventToCallbackMap[eventName] = null;
                }
            },
            _showTooltip: function() {
                if (this.options.tooltip_split === false) {
                    this._addClass(this.tooltip, "in");
                    this.tooltip_min.style.display = "none";
                    this.tooltip_max.style.display = "none";
                } else {
                    this._addClass(this.tooltip_min, "in");
                    this._addClass(this.tooltip_max, "in");
                    this.tooltip.style.display = "none";
                }
                this.over = true;
            },
            _hideTooltip: function() {
                if (this.inDrag === false && this.alwaysShowTooltip !== true) {
                    this._removeClass(this.tooltip, "in");
                    this._removeClass(this.tooltip_min, "in");
                    this._removeClass(this.tooltip_max, "in");
                }
                this.over = false;
            },
            _layout: function() {
                var positionPercentages;
                if (this.options.reversed) {
                    positionPercentages = [ 100 - this.percentage[0], this.percentage[1] ];
                } else {
                    positionPercentages = [ this.percentage[0], this.percentage[1] ];
                }
                this.handle1.style[this.stylePos] = positionPercentages[0] + "%";
                this.handle2.style[this.stylePos] = positionPercentages[1] + "%";
                if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                    var maxTickValue = Math.max.apply(Math, this.options.ticks);
                    var minTickValue = Math.min.apply(Math, this.options.ticks);
                    var styleSize = this.options.orientation === "vertical" ? "height" : "width";
                    var styleMargin = this.options.orientation === "vertical" ? "marginTop" : "marginLeft";
                    var labelSize = this.size / (this.options.ticks.length - 1);
                    if (this.tickLabelContainer) {
                        var extraMargin = 0;
                        if (this.options.ticks_positions.length === 0) {
                            this.tickLabelContainer.style[styleMargin] = -labelSize / 2 + "px";
                            extraMargin = this.tickLabelContainer.offsetHeight;
                        } else {
                            for (i = 0; i < this.tickLabelContainer.childNodes.length; i++) {
                                if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
                                    extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
                                }
                            }
                        }
                        if (this.options.orientation === "horizontal") {
                            this.sliderElem.style.marginBottom = extraMargin + "px";
                        }
                    }
                    for (var i = 0; i < this.options.ticks.length; i++) {
                        var percentage = this.options.ticks_positions[i] || 100 * (this.options.ticks[i] - minTickValue) / (maxTickValue - minTickValue);
                        this.ticks[i].style[this.stylePos] = percentage + "%";
                        this._removeClass(this.ticks[i], "in-selection");
                        if (!this.options.range) {
                            if (this.options.selection === "after" && percentage >= positionPercentages[0]) {
                                this._addClass(this.ticks[i], "in-selection");
                            } else if (this.options.selection === "before" && percentage <= positionPercentages[0]) {
                                this._addClass(this.ticks[i], "in-selection");
                            }
                        } else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
                            this._addClass(this.ticks[i], "in-selection");
                        }
                        if (this.tickLabels[i]) {
                            this.tickLabels[i].style[styleSize] = labelSize + "px";
                            if (this.options.ticks_positions[i] !== undefined) {
                                this.tickLabels[i].style.position = "absolute";
                                this.tickLabels[i].style[this.stylePos] = this.options.ticks_positions[i] + "%";
                                this.tickLabels[i].style[styleMargin] = -labelSize / 2 + "px";
                            }
                        }
                    }
                }
                if (this.options.orientation === "vertical") {
                    this.trackLow.style.top = "0";
                    this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) + "%";
                    this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) + "%";
                    this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) + "%";
                    this.trackHigh.style.bottom = "0";
                    this.trackHigh.style.height = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + "%";
                } else {
                    this.trackLow.style.left = "0";
                    this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) + "%";
                    this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) + "%";
                    this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) + "%";
                    this.trackHigh.style.right = "0";
                    this.trackHigh.style.width = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + "%";
                    var offset_min = this.tooltip_min.getBoundingClientRect();
                    var offset_max = this.tooltip_max.getBoundingClientRect();
                    if (offset_min.right > offset_max.left) {
                        this._removeClass(this.tooltip_max, "top");
                        this._addClass(this.tooltip_max, "bottom");
                        this.tooltip_max.style.top = 18 + "px";
                    } else {
                        this._removeClass(this.tooltip_max, "bottom");
                        this._addClass(this.tooltip_max, "top");
                        this.tooltip_max.style.top = this.tooltip_min.style.top;
                    }
                }
                var formattedTooltipVal;
                if (this.options.range) {
                    formattedTooltipVal = this.options.formatter(this.options.value);
                    this._setText(this.tooltipInner, formattedTooltipVal);
                    this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2 + "%";
                    if (this.options.orientation === "vertical") {
                        this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px");
                    } else {
                        this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                    }
                    if (this.options.orientation === "vertical") {
                        this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px");
                    } else {
                        this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                    }
                    var innerTooltipMinText = this.options.formatter(this.options.value[0]);
                    this._setText(this.tooltipInner_min, innerTooltipMinText);
                    var innerTooltipMaxText = this.options.formatter(this.options.value[1]);
                    this._setText(this.tooltipInner_max, innerTooltipMaxText);
                    this.tooltip_min.style[this.stylePos] = positionPercentages[0] + "%";
                    if (this.options.orientation === "vertical") {
                        this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px");
                    } else {
                        this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px");
                    }
                    this.tooltip_max.style[this.stylePos] = positionPercentages[1] + "%";
                    if (this.options.orientation === "vertical") {
                        this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px");
                    } else {
                        this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px");
                    }
                } else {
                    formattedTooltipVal = this.options.formatter(this.options.value[0]);
                    this._setText(this.tooltipInner, formattedTooltipVal);
                    this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
                    if (this.options.orientation === "vertical") {
                        this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px");
                    } else {
                        this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                    }
                }
            },
            _removeProperty: function(element, prop) {
                if (element.style.removeProperty) {
                    element.style.removeProperty(prop);
                } else {
                    element.style.removeAttribute(prop);
                }
            },
            _mousedown: function(ev) {
                if (!this.options.enabled) {
                    return false;
                }
                this.offset = this._offset(this.sliderElem);
                this.size = this.sliderElem[this.sizePos];
                var percentage = this._getPercentage(ev);
                if (this.options.range) {
                    var diff1 = Math.abs(this.percentage[0] - percentage);
                    var diff2 = Math.abs(this.percentage[1] - percentage);
                    this.dragged = diff1 < diff2 ? 0 : 1;
                } else {
                    this.dragged = 0;
                }
                this.percentage[this.dragged] = this.options.reversed ? 100 - percentage : percentage;
                this._layout();
                if (this.touchCapable) {
                    document.removeEventListener("touchmove", this.mousemove, false);
                    document.removeEventListener("touchend", this.mouseup, false);
                }
                if (this.mousemove) {
                    document.removeEventListener("mousemove", this.mousemove, false);
                }
                if (this.mouseup) {
                    document.removeEventListener("mouseup", this.mouseup, false);
                }
                this.mousemove = this._mousemove.bind(this);
                this.mouseup = this._mouseup.bind(this);
                if (this.touchCapable) {
                    document.addEventListener("touchmove", this.mousemove, false);
                    document.addEventListener("touchend", this.mouseup, false);
                }
                document.addEventListener("mousemove", this.mousemove, false);
                document.addEventListener("mouseup", this.mouseup, false);
                this.inDrag = true;
                var newValue = this._calculateValue();
                this._trigger("slideStart", newValue);
                this._setDataVal(newValue);
                this.setValue(newValue, false, true);
                this._pauseEvent(ev);
                if (this.options.focus) {
                    this._triggerFocusOnHandle(this.dragged);
                }
                return true;
            },
            _triggerFocusOnHandle: function(handleIdx) {
                if (handleIdx === 0) {
                    this.handle1.focus();
                }
                if (handleIdx === 1) {
                    this.handle2.focus();
                }
            },
            _keydown: function(handleIdx, ev) {
                if (!this.options.enabled) {
                    return false;
                }
                var dir;
                switch (ev.keyCode) {
                  case 37:
                  case 40:
                    dir = -1;
                    break;

                  case 39:
                  case 38:
                    dir = 1;
                    break;
                }
                if (!dir) {
                    return;
                }
                if (this.options.natural_arrow_keys) {
                    var ifVerticalAndNotReversed = this.options.orientation === "vertical" && !this.options.reversed;
                    var ifHorizontalAndReversed = this.options.orientation === "horizontal" && this.options.reversed;
                    if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
                        dir = -dir;
                    }
                }
                var val = this.options.value[handleIdx] + dir * this.options.step;
                if (this.options.range) {
                    val = [ !handleIdx ? val : this.options.value[0], handleIdx ? val : this.options.value[1] ];
                }
                this._trigger("slideStart", val);
                this._setDataVal(val);
                this.setValue(val, true, true);
                this._trigger("slideStop", val);
                this._setDataVal(val);
                this._layout();
                this._pauseEvent(ev);
                return false;
            },
            _pauseEvent: function(ev) {
                if (ev.stopPropagation) {
                    ev.stopPropagation();
                }
                if (ev.preventDefault) {
                    ev.preventDefault();
                }
                ev.cancelBubble = true;
                ev.returnValue = false;
            },
            _mousemove: function(ev) {
                if (!this.options.enabled) {
                    return false;
                }
                var percentage = this._getPercentage(ev);
                this._adjustPercentageForRangeSliders(percentage);
                this.percentage[this.dragged] = this.options.reversed ? 100 - percentage : percentage;
                this._layout();
                var val = this._calculateValue(true);
                this.setValue(val, true, true);
                return false;
            },
            _adjustPercentageForRangeSliders: function(percentage) {
                if (this.options.range) {
                    var precision = this._getNumDigitsAfterDecimalPlace(percentage);
                    precision = precision ? precision - 1 : 0;
                    var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
                    if (this.dragged === 0 && this._applyToFixedAndParseFloat(this.percentage[1], precision) < percentageWithAdjustedPrecision) {
                        this.percentage[0] = this.percentage[1];
                        this.dragged = 1;
                    } else if (this.dragged === 1 && this._applyToFixedAndParseFloat(this.percentage[0], precision) > percentageWithAdjustedPrecision) {
                        this.percentage[1] = this.percentage[0];
                        this.dragged = 0;
                    }
                }
            },
            _mouseup: function() {
                if (!this.options.enabled) {
                    return false;
                }
                if (this.touchCapable) {
                    document.removeEventListener("touchmove", this.mousemove, false);
                    document.removeEventListener("touchend", this.mouseup, false);
                }
                document.removeEventListener("mousemove", this.mousemove, false);
                document.removeEventListener("mouseup", this.mouseup, false);
                this.inDrag = false;
                if (this.over === false) {
                    this._hideTooltip();
                }
                var val = this._calculateValue(true);
                this._layout();
                this._trigger("slideStop", val);
                this._setDataVal(val);
                return false;
            },
            _calculateValue: function(snapToClosestTick) {
                var val;
                if (this.options.range) {
                    val = [ this.options.min, this.options.max ];
                    if (this.percentage[0] !== 0) {
                        val[0] = this._toValue(this.percentage[0]);
                        val[0] = this._applyPrecision(val[0]);
                    }
                    if (this.percentage[1] !== 100) {
                        val[1] = this._toValue(this.percentage[1]);
                        val[1] = this._applyPrecision(val[1]);
                    }
                } else {
                    val = this._toValue(this.percentage[0]);
                    val = parseFloat(val);
                    val = this._applyPrecision(val);
                }
                if (snapToClosestTick) {
                    var min = [ val, Infinity ];
                    for (var i = 0; i < this.options.ticks.length; i++) {
                        var diff = Math.abs(this.options.ticks[i] - val);
                        if (diff <= min[1]) {
                            min = [ this.options.ticks[i], diff ];
                        }
                    }
                    if (min[1] <= this.options.ticks_snap_bounds) {
                        return min[0];
                    }
                }
                return val;
            },
            _applyPrecision: function(val) {
                var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                return this._applyToFixedAndParseFloat(val, precision);
            },
            _getNumDigitsAfterDecimalPlace: function(num) {
                var match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                if (!match) {
                    return 0;
                }
                return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
            },
            _applyToFixedAndParseFloat: function(num, toFixedInput) {
                var truncatedNum = num.toFixed(toFixedInput);
                return parseFloat(truncatedNum);
            },
            _getPercentage: function(ev) {
                if (this.touchCapable && (ev.type === "touchstart" || ev.type === "touchmove")) {
                    ev = ev.touches[0];
                }
                var eventPosition = ev[this.mousePos];
                var sliderOffset = this.offset[this.stylePos];
                var distanceToSlide = eventPosition - sliderOffset;
                var percentage = distanceToSlide / this.size * 100;
                percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
                return Math.max(0, Math.min(100, percentage));
            },
            _validateInputValue: function(val) {
                if (typeof val === "number") {
                    return val;
                } else if (Array.isArray(val)) {
                    this._validateArray(val);
                    return val;
                } else {
                    throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
                }
            },
            _validateArray: function(val) {
                for (var i = 0; i < val.length; i++) {
                    var input = val[i];
                    if (typeof input !== "number") {
                        throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
                    }
                }
            },
            _setDataVal: function(val) {
                var value = "value: '" + val + "'";
                this.element.setAttribute("data", value);
                this.element.setAttribute("value", val);
                this.element.value = val;
            },
            _trigger: function(evt, val) {
                val = val || val === 0 ? val : undefined;
                var callbackFnArray = this.eventToCallbackMap[evt];
                if (callbackFnArray && callbackFnArray.length) {
                    for (var i = 0; i < callbackFnArray.length; i++) {
                        var callbackFn = callbackFnArray[i];
                        callbackFn(val);
                    }
                }
                if ($) {
                    this._triggerJQueryEvent(evt, val);
                }
            },
            _triggerJQueryEvent: function(evt, val) {
                var eventData = {
                    type: evt,
                    value: val
                };
                this.$element.trigger(eventData);
                this.$sliderElem.trigger(eventData);
            },
            _unbindJQueryEventHandlers: function() {
                this.$element.off();
                this.$sliderElem.off();
            },
            _setText: function(element, text) {
                if (typeof element.innerText !== "undefined") {
                    element.innerText = text;
                } else if (typeof element.textContent !== "undefined") {
                    element.textContent = text;
                }
            },
            _removeClass: function(element, classString) {
                var classes = classString.split(" ");
                var newClasses = element.className;
                for (var i = 0; i < classes.length; i++) {
                    var classTag = classes[i];
                    var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
                    newClasses = newClasses.replace(regex, " ");
                }
                element.className = newClasses.trim();
            },
            _addClass: function(element, classString) {
                var classes = classString.split(" ");
                var newClasses = element.className;
                for (var i = 0; i < classes.length; i++) {
                    var classTag = classes[i];
                    var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
                    var ifClassExists = regex.test(newClasses);
                    if (!ifClassExists) {
                        newClasses += " " + classTag;
                    }
                }
                element.className = newClasses.trim();
            },
            _offsetLeft: function(obj) {
                var offsetLeft = obj.offsetLeft;
                while ((obj = obj.offsetParent) && !isNaN(obj.offsetLeft)) {
                    offsetLeft += obj.offsetLeft;
                }
                return offsetLeft;
            },
            _offsetTop: function(obj) {
                var offsetTop = obj.offsetTop;
                while ((obj = obj.offsetParent) && !isNaN(obj.offsetTop)) {
                    offsetTop += obj.offsetTop;
                }
                return offsetTop;
            },
            _offset: function(obj) {
                return {
                    left: this._offsetLeft(obj),
                    top: this._offsetTop(obj)
                };
            },
            _css: function(elementRef, styleName, value) {
                if ($) {
                    $.style(elementRef, styleName, value);
                } else {
                    var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(all, letter) {
                        return letter.toUpperCase();
                    });
                    elementRef.style[style] = value;
                }
            },
            _toValue: function(percentage) {
                return this.options.scale.toValue.apply(this, [ percentage ]);
            },
            _toPercentage: function(value) {
                return this.options.scale.toPercentage.apply(this, [ value ]);
            }
        };
        if ($) {
            var namespace = $.fn.slider ? "bootstrapSlider" : "slider";
            $.bridget(namespace, Slider);
        }
    })($);
    return Slider;
});

(function($) {
    var createdElements = [];
    var defaults = {
        options: {
            prependExistingHelpBlock: false,
            sniffHtml: true,
            preventSubmit: true,
            submitError: false,
            submitSuccess: false,
            semanticallyStrict: false,
            autoAdd: {
                helpBlocks: true
            },
            filter: function() {
                return true;
            }
        },
        methods: {
            init: function(options) {
                var settings = $.extend(true, {}, defaults);
                settings.options = $.extend(true, settings.options, options);
                var $siblingElements = this;
                var uniqueForms = $.unique($siblingElements.map(function() {
                    return $(this).parents("form")[0];
                }).toArray());
                $(uniqueForms).bind("submit", function(e) {
                    var $form = $(this);
                    var warningsFound = 0;
                    var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
                    $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");
                    $inputs.each(function(i, el) {
                        var $this = $(el), $controlGroup = $this.parents(".control-group").first();
                        if ($controlGroup.hasClass("has-warning")) {
                            $controlGroup.removeClass("has-warning").addClass("has-error");
                            warningsFound++;
                        }
                    });
                    $inputs.trigger("validationLostFocus.validation");
                    if (warningsFound) {
                        if (settings.options.preventSubmit) {
                            e.preventDefault();
                        }
                        $form.addClass("form-error");
                        if ($.isFunction(settings.options.submitError)) {
                            settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
                        }
                    } else {
                        $form.removeClass("form-error");
                        if ($.isFunction(settings.options.submitSuccess)) {
                            settings.options.submitSuccess($form, e);
                        }
                    }
                });
                return this.each(function() {
                    var $this = $(this), $controlGroup = $this.parents(".control-group").first(), $helpBlock = $controlGroup.find(".help-block").first(), $form = $this.parents("form").first(), validatorNames = [];
                    if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
                        $helpBlock = $('<div class="help-block" />');
                        $controlGroup.find(".controls").append($helpBlock);
                        createdElements.push($helpBlock[0]);
                    }
                    if (settings.options.sniffHtml) {
                        var message = "";
                        if ($this.attr("pattern") !== undefined) {
                            message = "Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e";
                            if ($this.data("validationPatternMessage")) {
                                message = $this.data("validationPatternMessage");
                            }
                            $this.data("validationPatternMessage", message);
                            $this.data("validationPatternRegex", $this.attr("pattern"));
                        }
                        if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
                            var max = $this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax");
                            message = "Too high: Maximum of '" + max + "'\x3c!-- data-validation-max-message to override --\x3e";
                            if ($this.data("validationMaxMessage")) {
                                message = $this.data("validationMaxMessage");
                            }
                            $this.data("validationMaxMessage", message);
                            $this.data("validationMaxMax", max);
                        }
                        if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
                            var min = $this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin");
                            message = "Too low: Minimum of '" + min + "'\x3c!-- data-validation-min-message to override --\x3e";
                            if ($this.data("validationMinMessage")) {
                                message = $this.data("validationMinMessage");
                            }
                            $this.data("validationMinMessage", message);
                            $this.data("validationMinMin", min);
                        }
                        if ($this.attr("maxlength") !== undefined) {
                            message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters\x3c!-- data-validation-maxlength-message to override --\x3e";
                            if ($this.data("validationMaxlengthMessage")) {
                                message = $this.data("validationMaxlengthMessage");
                            }
                            $this.data("validationMaxlengthMessage", message);
                            $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
                        }
                        if ($this.attr("minlength") !== undefined) {
                            message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters\x3c!-- data-validation-minlength-message to override --\x3e";
                            if ($this.data("validationMinlengthMessage")) {
                                message = $this.data("validationMinlengthMessage");
                            }
                            $this.data("validationMinlengthMessage", message);
                            $this.data("validationMinlengthMinlength", $this.attr("minlength"));
                        }
                        if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
                            message = settings.builtInValidators.required.message;
                            if ($this.data("validationRequiredMessage")) {
                                message = $this.data("validationRequiredMessage");
                            }
                            $this.data("validationRequiredMessage", message);
                        }
                        if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
                            message = settings.builtInValidators.number.message;
                            if ($this.data("validationNumberMessage")) {
                                message = $this.data("validationNumberMessage");
                            }
                            $this.data("validationNumberMessage", message);
                        }
                        if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
                            message = "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e";
                            if ($this.data("validationValidemailMessage")) {
                                message = $this.data("validationValidemailMessage");
                            } else if ($this.data("validationEmailMessage")) {
                                message = $this.data("validationEmailMessage");
                            }
                            $this.data("validationValidemailMessage", message);
                        }
                        if ($this.attr("minchecked") !== undefined) {
                            message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required\x3c!-- data-validation-minchecked-message to override --\x3e";
                            if ($this.data("validationMincheckedMessage")) {
                                message = $this.data("validationMincheckedMessage");
                            }
                            $this.data("validationMincheckedMessage", message);
                            $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
                        }
                        if ($this.attr("maxchecked") !== undefined) {
                            message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required\x3c!-- data-validation-maxchecked-message to override --\x3e";
                            if ($this.data("validationMaxcheckedMessage")) {
                                message = $this.data("validationMaxcheckedMessage");
                            }
                            $this.data("validationMaxcheckedMessage", message);
                            $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
                        }
                    }
                    if ($this.data("validation") !== undefined) {
                        validatorNames = $this.data("validation").split(",");
                    }
                    $.each($this.data(), function(i, el) {
                        var parts = i.replace(/([A-Z])/g, ",$1").split(",");
                        if (parts[0] === "validation" && parts[1]) {
                            validatorNames.push(parts[1]);
                        }
                    });
                    var validatorNamesToInspect = validatorNames;
                    var newValidatorNamesToInspect = [];
                    do {
                        $.each(validatorNames, function(i, el) {
                            validatorNames[i] = formatValidatorName(el);
                        });
                        validatorNames = $.unique(validatorNames);
                        newValidatorNamesToInspect = [];
                        $.each(validatorNamesToInspect, function(i, el) {
                            if ($this.data("validation" + el + "Shortcut") !== undefined) {
                                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                                    newValidatorNamesToInspect.push(el2);
                                });
                            } else if (settings.builtInValidators[el.toLowerCase()]) {
                                var validator = settings.builtInValidators[el.toLowerCase()];
                                if (validator.type.toLowerCase() === "shortcut") {
                                    $.each(validator.shortcut.split(","), function(i, el) {
                                        el = formatValidatorName(el);
                                        newValidatorNamesToInspect.push(el);
                                        validatorNames.push(el);
                                    });
                                }
                            }
                        });
                        validatorNamesToInspect = newValidatorNamesToInspect;
                    } while (validatorNamesToInspect.length > 0);
                    var validators = {};
                    $.each(validatorNames, function(i, el) {
                        var message = $this.data("validation" + el + "Message");
                        var hasOverrideMessage = message !== undefined;
                        var foundValidator = false;
                        message = message ? message : "'" + el + "' validation failed \x3c!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message --\x3e";
                        $.each(settings.validatorTypes, function(validatorType, validatorTemplate) {
                            if (validators[validatorType] === undefined) {
                                validators[validatorType] = [];
                            }
                            if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                                validators[validatorType].push($.extend(true, {
                                    name: formatValidatorName(validatorTemplate.name),
                                    message: message
                                }, validatorTemplate.init($this, el)));
                                foundValidator = true;
                            }
                        });
                        if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {
                            var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
                            if (hasOverrideMessage) {
                                validator.message = message;
                            }
                            var validatorType = validator.type.toLowerCase();
                            if (validatorType === "shortcut") {
                                foundValidator = true;
                            } else {
                                $.each(settings.validatorTypes, function(validatorTemplateType, validatorTemplate) {
                                    if (validators[validatorTemplateType] === undefined) {
                                        validators[validatorTemplateType] = [];
                                    }
                                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                                        $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                                        validators[validatorType].push($.extend(validator, validatorTemplate.init($this, el)));
                                        foundValidator = true;
                                    }
                                });
                            }
                        }
                        if (!foundValidator) {
                            $.error("Cannot find validation info for '" + el + "'");
                        }
                    });
                    $helpBlock.data("original-contents", $helpBlock.data("original-contents") ? $helpBlock.data("original-contents") : $helpBlock.html());
                    $helpBlock.data("original-role", $helpBlock.data("original-role") ? $helpBlock.data("original-role") : $helpBlock.attr("role"));
                    $controlGroup.data("original-classes", $controlGroup.data("original-clases") ? $controlGroup.data("original-classes") : $controlGroup.attr("class"));
                    $this.data("original-aria-invalid", $this.data("original-aria-invalid") ? $this.data("original-aria-invalid") : $this.attr("aria-invalid"));
                    $this.bind("validation.validation", function(event, params) {
                        var value = getValue($this);
                        var errorsFound = [];
                        $.each(validators, function(validatorType, validatorTypeArray) {
                            if (value || value.length || params && params.includeEmpty || !!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting) {
                                $.each(validatorTypeArray, function(i, validator) {
                                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                                        errorsFound.push(validator.message);
                                    }
                                });
                            }
                        });
                        return errorsFound;
                    });
                    $this.bind("getValidators.validation", function() {
                        return validators;
                    });
                    $this.bind("submit.validation", function() {
                        return $this.triggerHandler("change.validation", {
                            submitting: true
                        });
                    });
                    $this.bind([ "keyup", "focus", "blur", "click", "keydown", "keypress", "change" ].join(".validation ") + ".validation", function(e, params) {
                        var value = getValue($this);
                        var errorsFound = [];
                        $controlGroup.find("input,textarea,select").each(function(i, el) {
                            var oldCount = errorsFound.length;
                            $.each($(el).triggerHandler("validation.validation", params), function(j, message) {
                                errorsFound.push(message);
                            });
                            if (errorsFound.length > oldCount) {
                                $(el).attr("aria-invalid", "true");
                            } else {
                                var original = $this.data("original-aria-invalid");
                                $(el).attr("aria-invalid", original !== undefined ? original : false);
                            }
                        });
                        $form.find("input,select,textarea").not($this).not('[name="' + $this.attr("name") + '"]').trigger("validationLostFocus.validation");
                        errorsFound = $.unique(errorsFound.sort());
                        if (errorsFound.length) {
                            $controlGroup.removeClass("has-success has-error").addClass("has-warning");
                            if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                                $helpBlock.html(errorsFound[0] + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
                            } else {
                                $helpBlock.html('<ul role="alert"><li>' + errorsFound.join("</li><li>") + "</li></ul>" + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
                            }
                        } else {
                            $controlGroup.removeClass("has-warning has-error has-success");
                            if (value.length > 0) {
                                $controlGroup.addClass("has-success");
                            }
                            $helpBlock.html($helpBlock.data("original-contents"));
                        }
                        if (e.type === "blur") {
                            if ($this.attr("required") !== undefined && $this.val().length < 1) {
                                $this.closest(".form-group").addClass("has-error");
                            } else {
                                $this.closest(".form-group").removeClass("has-error");
                            }
                        }
                    });
                    $this.bind("validationLostFocus.validation", function() {});
                });
            },
            destroy: function() {
                return this.each(function() {
                    var $this = $(this), $controlGroup = $this.parents(".control-group").first(), $helpBlock = $controlGroup.find(".help-block").first();
                    $(this.form).unbind("submit");
                    $this.unbind(".validation");
                    $helpBlock.html($helpBlock.data("original-contents"));
                    $controlGroup.attr("class", $controlGroup.data("original-classes"));
                    $this.attr("aria-invalid", $this.data("original-aria-invalid"));
                    $helpBlock.attr("role", $this.data("original-role"));
                    if (createdElements.indexOf($helpBlock[0]) > -1) {
                        $helpBlock.remove();
                    }
                });
            },
            collectErrors: function(includeEmpty) {
                var errorMessages = {};
                this.each(function(i, el) {
                    var $el = $(el);
                    var name = $el.attr("name");
                    var errors = $el.triggerHandler("validation.validation", {
                        includeEmpty: true
                    });
                    errorMessages[name] = $.extend(true, errors, errorMessages[name]);
                });
                $.each(errorMessages, function(i, el) {
                    if (el.length === 0) {
                        delete errorMessages[i];
                    }
                });
                return errorMessages;
            },
            hasErrors: function() {
                var errorMessages = [];
                this.each(function(i, el) {
                    errorMessages = errorMessages.concat($(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {
                        submitting: true
                    }) : []);
                });
                return errorMessages.length > 0;
            },
            override: function(newDefaults) {
                defaults = $.extend(true, defaults, newDefaults);
            }
        },
        validatorTypes: {
            callback: {
                name: "callback",
                init: function($this, name) {
                    return {
                        validatorName: name,
                        callback: $this.data("validation" + name + "Callback"),
                        lastValue: $this.val(),
                        lastValid: true,
                        lastFinished: true
                    };
                },
                validate: function($this, value, validator) {
                    if (validator.lastValue === value && validator.lastFinished) {
                        return !validator.lastValid;
                    }
                    if (validator.lastFinished === true) {
                        validator.lastValue = value;
                        validator.lastValid = true;
                        validator.lastFinished = false;
                        var rrjqbvValidator = validator;
                        var rrjqbvThis = $this;
                        executeFunctionByName(validator.callback, window, $this, value, function(data) {
                            if (rrjqbvValidator.lastValue === data.value) {
                                rrjqbvValidator.lastValid = data.valid;
                                if (data.message) {
                                    rrjqbvValidator.message = data.message;
                                }
                                rrjqbvValidator.lastFinished = true;
                                rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                                setTimeout(function() {
                                    rrjqbvThis.trigger("change.validation");
                                }, 1);
                            }
                        });
                    }
                    return false;
                }
            },
            ajax: {
                name: "ajax",
                init: function($this, name) {
                    return {
                        validatorName: name,
                        url: $this.data("validation" + name + "Ajax"),
                        lastValue: $this.val(),
                        lastValid: true,
                        lastFinished: true
                    };
                },
                validate: function($this, value, validator) {
                    if ("" + validator.lastValue === "" + value && validator.lastFinished === true) {
                        return validator.lastValid === false;
                    }
                    if (validator.lastFinished === true) {
                        validator.lastValue = value;
                        validator.lastValid = true;
                        validator.lastFinished = false;
                        $.ajax({
                            url: validator.url,
                            data: "value=" + value + "&field=" + $this.attr("name"),
                            dataType: "json",
                            success: function(data) {
                                if ("" + validator.lastValue === "" + data.value) {
                                    validator.lastValid = !!data.valid;
                                    if (data.message) {
                                        validator.message = data.message;
                                    }
                                    validator.lastFinished = true;
                                    $this.data("validation" + validator.validatorName + "Message", validator.message);
                                    setTimeout(function() {
                                        $this.trigger("change.validation");
                                    }, 1);
                                }
                            },
                            failure: function() {
                                validator.lastValid = true;
                                validator.message = "ajax call failed";
                                validator.lastFinished = true;
                                $this.data("validation" + validator.validatorName + "Message", validator.message);
                                setTimeout(function() {
                                    $this.trigger("change.validation");
                                }, 1);
                            }
                        });
                    }
                    return false;
                }
            },
            regex: {
                name: "regex",
                init: function($this, name) {
                    return {
                        regex: regexFromString($this.data("validation" + name + "Regex"))
                    };
                },
                validate: function($this, value, validator) {
                    return !validator.regex.test(value) && !validator.negative || validator.regex.test(value) && validator.negative;
                }
            },
            required: {
                name: "required",
                init: function($this, name) {
                    return {};
                },
                validate: function($this, value, validator) {
                    return !!(value.length === 0 && !validator.negative) || !!(value.length > 0 && validator.negative);
                },
                blockSubmit: true
            },
            match: {
                name: "match",
                init: function($this, name) {
                    var element = $this.parents("form").first().find('[name="' + $this.data("validation" + name + "Match") + '"]').first();
                    element.bind("validation.validation", function() {
                        $this.trigger("change.validation", {
                            submitting: true
                        });
                    });
                    return {
                        element: element
                    };
                },
                validate: function($this, value, validator) {
                    return value !== validator.element.val() && !validator.negative || value === validator.element.val() && validator.negative;
                },
                blockSubmit: true
            },
            max: {
                name: "max",
                init: function($this, name) {
                    return {
                        max: $this.data("validation" + name + "Max")
                    };
                },
                validate: function($this, value, validator) {
                    return parseFloat(value, 10) > parseFloat(validator.max, 10) && !validator.negative || parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative;
                }
            },
            min: {
                name: "min",
                init: function($this, name) {
                    return {
                        min: $this.data("validation" + name + "Min")
                    };
                },
                validate: function($this, value, validator) {
                    return parseFloat(value) < parseFloat(validator.min) && !validator.negative || parseFloat(value) >= parseFloat(validator.min) && validator.negative;
                }
            },
            maxlength: {
                name: "maxlength",
                init: function($this, name) {
                    return {
                        maxlength: $this.data("validation" + name + "Maxlength")
                    };
                },
                validate: function($this, value, validator) {
                    return value.length > validator.maxlength && !validator.negative || value.length <= validator.maxlength && validator.negative;
                }
            },
            minlength: {
                name: "minlength",
                init: function($this, name) {
                    return {
                        minlength: $this.data("validation" + name + "Minlength")
                    };
                },
                validate: function($this, value, validator) {
                    return value.length < validator.minlength && !validator.negative || value.length >= validator.minlength && validator.negative;
                }
            },
            maxchecked: {
                name: "maxchecked",
                init: function($this, name) {
                    var elements = $this.parents("form").first().find('[name="' + $this.attr("name") + '"]');
                    elements.bind("click.validation", function() {
                        $this.trigger("change.validation", {
                            includeEmpty: true
                        });
                    });
                    return {
                        maxchecked: $this.data("validation" + name + "Maxchecked"),
                        elements: elements
                    };
                },
                validate: function($this, value, validator) {
                    return validator.elements.filter(":checked").length > validator.maxchecked && !validator.negative || validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative;
                },
                blockSubmit: true
            },
            minchecked: {
                name: "minchecked",
                init: function($this, name) {
                    var elements = $this.parents("form").first().find('[name="' + $this.attr("name") + '"]');
                    elements.bind("click.validation", function() {
                        $this.trigger("change.validation", {
                            includeEmpty: true
                        });
                    });
                    return {
                        minchecked: $this.data("validation" + name + "Minchecked"),
                        elements: elements
                    };
                },
                validate: function($this, value, validator) {
                    return validator.elements.filter(":checked").length < validator.minchecked && !validator.negative || validator.elements.filter(":checked").length >= validator.minchecked && validator.negative;
                },
                blockSubmit: true
            }
        },
        builtInValidators: {
            email: {
                name: "Email",
                type: "shortcut",
                shortcut: "validemail"
            },
            validemail: {
                name: "Validemail",
                type: "regex",
                regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                message: "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"
            },
            passwordagain: {
                name: "Passwordagain",
                type: "match",
                match: "password",
                message: "Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"
            },
            positive: {
                name: "Positive",
                type: "shortcut",
                shortcut: "number,positivenumber"
            },
            negative: {
                name: "Negative",
                type: "shortcut",
                shortcut: "number,negativenumber"
            },
            number: {
                name: "Number",
                type: "regex",
                regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                message: "Must be a number\x3c!-- data-validator-number-message to override --\x3e"
            },
            integer: {
                name: "Integer",
                type: "regex",
                regex: "[+-]?\\d+",
                message: "No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"
            },
            positivenumber: {
                name: "Positivenumber",
                type: "min",
                min: 0,
                message: "Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"
            },
            negativenumber: {
                name: "Negativenumber",
                type: "max",
                max: 0,
                message: "Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"
            },
            required: {
                name: "Required",
                type: "required",
                message: "This is required\x3c!-- data-validator-required-message to override --\x3e"
            },
            checkone: {
                name: "Checkone",
                type: "minchecked",
                minchecked: 1,
                message: "Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"
            }
        }
    };
    var formatValidatorName = function(name) {
        return name.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
            return p1 + p2.toUpperCase();
        });
    };
    var getValue = function($this) {
        var value = $this.val();
        var type = $this.attr("type");
        if (type === "checkbox") {
            value = $this.is(":checked") ? value : "";
        }
        if (type === "radio") {
            value = $('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "";
        }
        return value;
    };
    function regexFromString(inputstring) {
        return new RegExp("^" + inputstring + "$");
    }
    function executeFunctionByName(functionName, context) {
        var args = Array.prototype.slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(this, args);
    }
    $.fn.jqBootstrapValidation = function(method) {
        if (defaults.methods[method]) {
            return defaults.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return defaults.methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.jqBootstrapValidation");
            return null;
        }
    };
    $.jqBootstrapValidation = function(options) {
        $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
    };
})(jQuery);

$(function() {
    windowWidth = $(window).width();
    $(window).resize(function() {
        windowWidth = $(window).width();
    });
    xsBreak = 480;
    smBreak = 768;
    mdBreak = 992;
    lgBreak = 1200;
    $(window).load(function() {
        $(".bg").height($("body").height());
    });
    $(window).load(function() {
        if ($('[data-spy="affix"]').length !== 0) {
            $('[data-spy="affix"]').each(function() {
                affixHolderHeight = $(this).outerHeight();
                affixID = $(this).attr("id");
                $(this).wrap('<div id="' + affixID + '-holder" class="affix-holder"></div>');
                $(this).parent().height(affixHolderHeight);
                affixHolderOffset = $(this).offset().top - affixHolderHeight;
                $(this).attr("data-offset-top", affixHolderOffset);
            });
        }
    });
    if (windowWidth <= mdBreak) {
        $(".js-responsive-auto-close").collapse({
            toggle: true
        });
    } else {
        $(".js-responsive-auto-close").collapse({
            toggle: false
        });
    }
    if (windowWidth < smBreak) {
        $(".js-responsive-auto-close-xs").collapse({
            toggle: true
        });
    } else {
        $(".js-responsive-auto-close-xs").collapse({
            toggle: false
        });
    }
    $("html.legacy-ie [placeholder]").focus(function() {
        var input = $(this);
        if (input.val() == input.attr("placeholder")) {
            input.val("");
            input.removeClass("placeholder");
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() === "" || input.val() == input.attr("placeholder")) {
            input.addClass("placeholder");
            input.val(input.attr("placeholder"));
        }
    }).blur().parents("form").submit(function() {
        $(this).find("[placeholder]").each(function() {
            var input = $(this);
            if (input.val() == input.attr("placeholder")) {
                input.val("");
            }
        });
    });
    $("input[type=number]").each(function() {
        if ($(this).attr("data-controls") == "true") {
            $(this).after('<button class="more" title="Aumentar">+</button>');
            $(this).before('<button class="less" title="Reducir">-</button>');
        }
    });
    $('input[type="number"]').bind("keydown paste", function(e) {
        if (typeof $(this).attr("data-maxlength") != "undefined") {
            var code = e.KeyCode || e.which;
            var text = $(this).val();
            var max = parseInt($(this).attr("data-maxlength"));
            var allowedNumberCodes = [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105 ];
            var allowedKeyCodes = [ 8, 9, 37, 38, 39, 40, 46 ];
            if ($.inArray(code, allowedNumberCodes) == -1 && $.inArray(code, allowedKeyCodes) == -1) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                if (text.length >= max) {
                    if ($.inArray(code, allowedKeyCodes) == -1) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }
        }
    });
    function sameHeight() {
        $(".js-same-height").each(function() {
            var maxHeight = 0;
            $(this).find(".js-same").each(function() {
                $(this).removeAttr("style");
                maxHeightNew = $(this).outerHeight(true);
                if (maxHeight < maxHeightNew) {
                    maxHeight = maxHeightNew;
                }
            });
            if (windowWidth < smBreak) {
                $(this).find(".js-same").css("min-height", maxHeight);
            } else {
                $(this).find(".js-same").css("min-height", "0px");
            }
        });
    }
    function makeSquare() {
        $(".js-square").each(function() {
            $(this).css("height", $(this).width());
        });
    }
    $(window).load(function() {
        sameHeight();
        makeSquare();
    });
    $(window).resize(function() {
        sameHeight();
        makeSquare();
    });
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        $currentScrollPos = 0;
        $(window).scroll(function() {
            $currentScrollPos = $(document).scrollTop();
        });
        $('[data-toggle="modal"]').click(function() {
            modalTarget = $(this).attr("data-target");
            $(modalTarget).on("shown.bs.modal", function(e) {
                $("body").css({
                    position: "fixed"
                });
                localStorage.cachedScrollPos = $currentScrollPos;
            });
            $(modalTarget).on("hidden.bs.modal", function(e) {
                if ($(".modal.in").length === 0) {
                    $("body").css({
                        position: "relative"
                    });
                    $("body").scrollTop(localStorage.cachedScrollPos);
                }
            });
        });
    }
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        $(window).scroll(function() {
            $currentScrollPos = $(document).scrollTop();
        });
        $(".js-get-scroll").on("click", function() {
            localStorage.cachedScrollPos = $currentScrollPos;
        });
        $(".js-to-scroll").on("click", function(e) {
            $("body").animate({
                scrollTop: localStorage.cachedScrollPos
            });
        });
    }
    $(".title-section .icon-arrow-left").click(function() {
        history.go(-1);
        navigator.app.backHistory();
        location.reload();
    });
    $(".js-auto-height-child").each(function() {
        var alto = $(this).children().height();
        $(this).css("height", alto);
    });
});

(function($, window, document, undefined) {
    var drag, state, e;
    drag = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };
    state = {
        isTouch: false,
        isScrolling: false,
        isSwiping: false,
        direction: false,
        inMotion: false
    };
    e = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };
    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this.drag = $.extend({}, drag);
        this.state = $.extend({}, state);
        this.e = $.extend({}, e);
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._invalidated = {};
        this._pipe = [];
        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key[0].toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $.each(Owl.Pipe, $.proxy(function(priority, worker) {
            this._pipe.push({
                filter: worker.filter,
                run: $.proxy(worker.run, this)
            });
        }, this));
        this.setup();
        this.initialize();
    }
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        dragThreshold: 10,
        setHash: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        responsiveClass: false,
        fallbackEasing: "swing",
        info: false,
        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    };
    Owl.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    Owl.Plugins = {};
    Owl.Pipe = [ {
        filter: [ "width", "items", "settings" ],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ "items", "settings" ],
        run: function() {
            var cached = this._clones, clones = this.$stage.children(".cloned");
            if (clones.length !== cached.length || !this.settings.loop && cached.length > 0) {
                this.$stage.children(".cloned").remove();
                this._clones = [];
            }
        }
    }, {
        filter: [ "items", "settings" ],
        run: function() {
            var i, n, clones = this._clones, items = this._items, delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;
            for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                if (delta > 0) {
                    this.$stage.children().eq(items.length + clones.length - 1).remove();
                    clones.pop();
                    this.$stage.children().eq(0).remove();
                    clones.pop();
                } else {
                    clones.push(clones.length / 2);
                    this.$stage.append(items[clones[clones.length - 1]].clone().addClass("cloned"));
                    clones.push(items.length - 1 - (clones.length - 1) / 2);
                    this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass("cloned"));
                }
            }
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1, width = (this.width() / this.settings.items).toFixed(3), coordinate = 0, merge, i, n;
            this._coordinates = [];
            for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
                merge = this._mergers[this.relative(i)];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;
                this._coordinates.push(coordinate);
            }
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function() {
            var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            this.$stage.css(css);
            css = {
                width: this.settings.autoWidth ? "auto" : width - this.settings.margin
            };
            css[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin;
            if (!this.settings.autoWidth && $.grep(this._mergers, function(v) {
                return v > 1;
            }).length > 0) {
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
                    this.$stage.children().eq(i).css(css);
                }
            } else {
                this.$stage.children().css(css);
            }
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(cache) {
            cache.current && this.reset(this.$stage.children().index(cache.current));
        }
    }, {
        filter: [ "position" ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ "width", "position", "items", "settings" ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer, matches = [], i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) {
                    matches.push(i);
                }
            }
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass(this.settings.activeClass);
            if (this.settings.center) {
                this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass);
                this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
            }
        }
    } ];
    Owl.prototype.initialize = function() {
        this.trigger("initialize");
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl);
        this.browserSupport();
        if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img");
            nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
                return false;
            }
        }
        this.$element.addClass("owl-loading");
        this.$stage = $("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this._width = this.$element.width();
        this.refresh();
        this.$element.removeClass("owl-loading").addClass("owl-loaded");
        this.eventsCall();
        this.internalEvents();
        this.addTriggerableEvents();
        this.trigger("initialized");
    };
    Owl.prototype.setup = function() {
        var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr("class", function(i, c) {
                    return c.replace(/\b owl-responsive-\S+/g, "");
                }).addClass("owl-responsive-" + match);
            }
        }
        if (this.settings === null || this._breakpoint !== match) {
            this.trigger("change", {
                property: {
                    name: "settings",
                    value: settings
                }
            });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate("settings");
            this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            });
        }
    };
    Owl.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center);
        if (this.settings.loop && this._items.length < this.settings.items) {
            this.settings.loop = false;
        }
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };
    Owl.prototype.prepare = function(item) {
        var event = this.trigger("prepare", {
            content: item
        });
        if (!event.data) {
            event.data = $("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(item);
        }
        this.trigger("prepared", {
            content: event.data
        });
        return event.data;
    };
    Owl.prototype.update = function() {
        var i = 0, n = this._pipe.length, filter = $.proxy(function(p) {
            return this[p];
        }, this._invalidated), cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this._invalidated = {};
    };
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
          case Owl.Width.Inner:
          case Owl.Width.Outer:
            return this._width;

          default:
            return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    Owl.prototype.refresh = function() {
        if (this._items.length === 0) {
            return false;
        }
        var start = new Date().getTime();
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$stage.addClass("owl-refresh");
        this.update();
        this.$stage.removeClass("owl-refresh");
        this.state.orientation = window.orientation;
        this.watchVisibility();
        this.trigger("refreshed");
    };
    Owl.prototype.eventsCall = function() {
        this.e._onDragStart = $.proxy(function(e) {
            this.onDragStart(e);
        }, this);
        this.e._onDragMove = $.proxy(function(e) {
            this.onDragMove(e);
        }, this);
        this.e._onDragEnd = $.proxy(function(e) {
            this.onDragEnd(e);
        }, this);
        this.e._onResize = $.proxy(function(e) {
            this.onResize(e);
        }, this);
        this.e._transitionEnd = $.proxy(function(e) {
            this.transitionEnd(e);
        }, this);
        this.e._preventClick = $.proxy(function(e) {
            this.preventClick(e);
        }, this);
    };
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    };
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }
        if (this._width === this.$element.width()) {
            return false;
        }
        if (this.trigger("resize").isDefaultPrevented()) {
            return false;
        }
        this._width = this.$element.width();
        this.invalidate("width");
        this.refresh();
        this.trigger("resized");
    };
    Owl.prototype.eventsRouter = function(event) {
        var type = event.type;
        if (type === "mousedown" || type === "touchstart") {
            this.onDragStart(event);
        } else if (type === "mousemove" || type === "touchmove") {
            this.onDragMove(event);
        } else if (type === "mouseup" || type === "touchend") {
            this.onDragEnd(event);
        } else if (type === "touchcancel") {
            this.onDragEnd(event);
        }
    };
    Owl.prototype.internalEvents = function() {
        var isTouch = isTouchSupport(), isTouchIE = isTouchSupportIE();
        if (this.settings.mouseDrag) {
            this.$stage.on("mousedown", $.proxy(function(event) {
                this.eventsRouter(event);
            }, this));
            this.$stage.on("dragstart", function() {
                return false;
            });
            this.$stage.get(0).onselectstart = function() {
                return false;
            };
        } else {
            this.$element.addClass("owl-text-select-on");
        }
        if (this.settings.touchDrag && !isTouchIE) {
            this.$stage.on("touchstart touchcancel", $.proxy(function(event) {
                this.eventsRouter(event);
            }, this));
        }
        if (this.transitionEndVendor) {
            this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
        }
        if (this.settings.responsive !== false) {
            this.on(window, "resize", $.proxy(this.onThrottledResize, this));
        }
    };
    Owl.prototype.onDragStart = function(event) {
        var ev, isTouchEvent, pageX, pageY, animatedPos;
        ev = event.originalEvent || event || window.event;
        if (ev.which === 3 || this.state.isTouch) {
            return false;
        }
        if (ev.type === "mousedown") {
            this.$stage.addClass("owl-grab");
        }
        this.trigger("drag");
        this.drag.startTime = new Date().getTime();
        this.speed(0);
        this.state.isTouch = true;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        this.drag.distance = 0;
        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;
        this.drag.offsetX = this.$stage.position().left;
        this.drag.offsetY = this.$stage.position().top;
        if (this.settings.rtl) {
            this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin;
        }
        if (this.state.inMotion && this.support3d) {
            animatedPos = this.getTransformProperty();
            this.drag.offsetX = animatedPos;
            this.animate(animatedPos);
            this.state.inMotion = true;
        } else if (this.state.inMotion && !this.support3d) {
            this.state.inMotion = false;
            return false;
        }
        this.drag.startX = pageX - this.drag.offsetX;
        this.drag.startY = pageY - this.drag.offsetY;
        this.drag.start = pageX - this.drag.startX;
        this.drag.targetEl = ev.target || ev.srcElement;
        this.drag.updatedX = this.drag.start;
        if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
            this.drag.targetEl.draggable = false;
        }
        $(document).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", $.proxy(function(event) {
            this.eventsRouter(event);
        }, this));
    };
    Owl.prototype.onDragMove = function(event) {
        var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
        if (!this.state.isTouch) {
            return;
        }
        if (this.state.isScrolling) {
            return;
        }
        ev = event.originalEvent || event || window.event;
        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;
        this.drag.currentX = pageX - this.drag.startX;
        this.drag.currentY = pageY - this.drag.startY;
        this.drag.distance = this.drag.currentX - this.drag.offsetX;
        if (this.drag.distance < 0) {
            this.state.direction = this.settings.rtl ? "right" : "left";
        } else if (this.drag.distance > 0) {
            this.state.direction = this.settings.rtl ? "left" : "right";
        }
        if (this.settings.loop) {
            if (this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && this.state.direction === "right") {
                this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            } else if (this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && this.state.direction === "left") {
                this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            }
        } else {
            minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
            this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
        }
        if (this.drag.distance > 8 || this.drag.distance < -8) {
            if (ev.preventDefault !== undefined) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            this.state.isSwiping = true;
        }
        this.drag.updatedX = this.drag.currentX;
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
            this.state.isScrolling = true;
            this.drag.updatedX = this.drag.start;
        }
        this.animate(this.drag.updatedX);
    };
    Owl.prototype.onDragEnd = function(event) {
        var compareTimes, distanceAbs, closest;
        if (!this.state.isTouch) {
            return;
        }
        if (event.type === "mouseup") {
            this.$stage.removeClass("owl-grab");
        }
        this.trigger("dragged");
        this.drag.targetEl.removeAttribute("draggable");
        this.state.isTouch = false;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        if (this.drag.distance === 0 && this.state.inMotion !== true) {
            this.state.inMotion = false;
            return false;
        }
        this.drag.endTime = new Date().getTime();
        compareTimes = this.drag.endTime - this.drag.startTime;
        distanceAbs = Math.abs(this.drag.distance);
        if (distanceAbs > 3 || compareTimes > 300) {
            this.removeClick(this.drag.targetEl);
        }
        closest = this.closest(this.drag.updatedX);
        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        if (this.drag.distance > this.settings.dragThreshold || this.drag.distance < -this.settings.dragThreshold) {
            this.current(closest);
            this.release([ "translate", "translated" ]);
        } else {
            this.suppress([ "translate", "translated" ]);
        }
        this.invalidate("position");
        this.update();
        if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
            this.transitionEnd();
        }
        this.drag.distance = 0;
        $(document).off(".owl.dragEvents");
    };
    Owl.prototype.removeClick = function(target) {
        this.drag.targetEl = target;
        $(target).on("click.preventClick", this.e._preventClick);
        window.setTimeout(function() {
            $(target).off("click.preventClick");
        }, 300);
    };
    Owl.prototype.preventClick = function(ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        $(ev.target).off("click.preventClick");
    };
    Owl.prototype.getTransformProperty = function() {
        var transform, matrix3d;
        transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform");
        transform = transform.replace(/matrix(3d)?\(|\)/g, "").split(",");
        matrix3d = transform.length === 16;
        return matrix3d !== true ? transform[4] : transform[12];
    };
    Owl.prototype.closest = function(coordinate) {
        var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function(index, value) {
                if (coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] || value - width)) {
                    position = this.state.direction === "left" ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, ">", coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    Owl.prototype.animate = function(coordinate) {
        this.trigger("translate");
        this.state.inMotion = this.speed() > 0;
        if (this.support3d) {
            this.$stage.css({
                transform: "translate3d(" + coordinate + "px" + ",0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            });
        } else if (this.state.isTouch) {
            this.$stage.css({
                left: coordinate + "px"
            });
        } else {
            this.$stage.animate({
                left: coordinate
            }, this.speed() / 1e3, this.settings.fallbackEasing, $.proxy(function() {
                if (this.state.inMotion) {
                    this.transitionEnd();
                }
            }, this));
        }
    };
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger("change", {
                property: {
                    name: "position",
                    value: position
                }
            });
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            });
        }
        return this._current;
    };
    Owl.prototype.invalidate = function(part) {
        this._invalidated[part] = true;
    };
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress([ "translate", "translated" ]);
        this.animate(this.coordinates(position));
        this.release([ "translate", "translated" ]);
    };
    Owl.prototype.normalize = function(position, relative) {
        var n = relative ? this._items.length : this._items.length + this._clones.length;
        if (!$.isNumeric(position) || n < 1) {
            return undefined;
        }
        if (this._clones.length) {
            position = (position % n + n) % n;
        } else {
            position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
        }
        return position;
    };
    Owl.prototype.relative = function(position) {
        position = this.normalize(position);
        position = position - this._clones.length / 2;
        return this.normalize(position, true);
    };
    Owl.prototype.maximum = function(relative) {
        var maximum, width, i = 0, coordinate, settings = this.settings;
        if (relative) {
            return this._items.length - 1;
        }
        if (!settings.loop && settings.center) {
            maximum = this._items.length - 1;
        } else if (!settings.loop && !settings.center) {
            maximum = this._items.length - settings.items;
        } else if (settings.loop || settings.center) {
            maximum = this._items.length + settings.items;
        } else if (settings.autoWidth || settings.merge) {
            revert = settings.rtl ? 1 : -1;
            width = this.$stage.width() - this.$element.width();
            while (coordinate = this.coordinates(i)) {
                if (coordinate * revert >= width) {
                    break;
                }
                maximum = ++i;
            }
        } else {
            throw "Can not detect maximum absolute position.";
        }
        return maximum;
    };
    Owl.prototype.minimum = function(relative) {
        if (relative) {
            return 0;
        }
        return this._clones.length / 2;
    };
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
    };
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2, even = odd + this._items.length, map = function(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
        };
        if (position === undefined) {
            return $.map(this._clones, function(v, i) {
                return map(i);
            });
        }
        return $.map(this._clones, function(v, i) {
            return v === position ? map(i) : null;
        });
    };
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    Owl.prototype.coordinates = function(position) {
        var coordinate = null;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }
        if (this.settings.center) {
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
        } else {
            coordinate = this._coordinates[position - 1] || 0;
        }
        return coordinate;
    };
    Owl.prototype.duration = function(from, to, factor) {
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
    };
    Owl.prototype.to = function(position, speed) {
        if (this.settings.loop) {
            var distance = position - this.relative(this.current()), revert = this.current(), before = this.current(), after = this.current() + distance, direction = before - after < 0 ? true : false, items = this._clones.length + this._items.length;
            if (after < this.settings.items && direction === false) {
                revert = before + this._items.length;
                this.reset(revert);
            } else if (after >= items - this.settings.items && direction === true) {
                revert = before - this._items.length;
                this.reset(revert);
            }
            window.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = window.setTimeout($.proxy(function() {
                this.speed(this.duration(this.current(), revert + distance, speed));
                this.current(revert + distance);
                this.update();
            }, this), 30);
        } else {
            this.speed(this.duration(this.current(), position, speed));
            this.current(position);
            this.update();
        }
    };
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    Owl.prototype.transitionEnd = function(event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }
        this.state.inMotion = false;
        this.trigger("translated");
        if (this.settings.setHash == true) {
            var updateHash = $(this.$stage.children().eq(this.current())).find("button").attr("data-hash");
            var url = window.location.pathname;
            var obj = {
                Page: url,
                Url: updateHash
            };
            history.pushState(obj, obj.Page, obj.Url);
        }
    };
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            width = $(this.options.responsiveBaseElement).width();
        }
        return width;
    };
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = content instanceof jQuery ? content : $(content);
        }
        if (this.settings.nestedItemSelector) {
            content = content.find("." + this.settings.nestedItemSelector);
        }
        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") * 1 || 1);
        }, this));
        this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items");
    };
    Owl.prototype.add = function(content, position) {
        position = position === undefined ? this._items.length : this.normalize(position, true);
        this.trigger("add", {
            content: content,
            position: position
        });
        if (this._items.length === 0 || position === this._items.length) {
            this.$stage.append(content);
            this._items.push(content);
            this._mergers.push(content.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") * 1 || 1);
        }
        this.invalidate("items");
        this.trigger("added", {
            content: content,
            position: position
        });
    };
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }
        this.trigger("remove", {
            content: this._items[position],
            position: position
        });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate("items");
        this.trigger("removed", {
            content: null,
            position: position
        });
    };
    Owl.prototype.addTriggerableEvents = function() {
        var handler = $.proxy(function(callback, event) {
            return $.proxy(function(e) {
                if (e.relatedTarget !== this) {
                    this.suppress([ event ]);
                    callback.apply(this, [].slice.call(arguments, 1));
                    this.release([ event ]);
                }
            }, this);
        }, this);
        $.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, $.proxy(function(event, callback) {
            this.$element.on(event + ".owl.carousel", handler(callback, event + ".owl.carousel"));
        }, this));
    };
    Owl.prototype.watchVisibility = function() {
        if (!isElVisible(this.$element.get(0))) {
            this.$element.addClass("owl-hidden");
            window.clearInterval(this.e._checkVisibile);
            this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
        }
        function isElVisible(el) {
            return el.offsetWidth > 0 && el.offsetHeight > 0;
        }
        function checkVisible() {
            if (isElVisible(this.$element.get(0))) {
                this.$element.removeClass("owl-hidden");
                this.refresh();
                window.clearInterval(this.e._checkVisibile);
            }
        }
    };
    Owl.prototype.preloadAutoWidthImages = function(imgs) {
        var loaded, that, $el, img;
        loaded = 0;
        that = this;
        imgs.each(function(i, el) {
            $el = $(el);
            img = new Image();
            img.onload = function() {
                loaded++;
                $el.attr("src", img.src);
                $el.css("opacity", 1);
                if (loaded >= imgs.length) {
                    that.state.imagesLoaded = true;
                    that.initialize();
                }
            };
            img.src = $el.attr("src") || $el.attr("data-src") || $el.attr("data-src-retina");
        });
    };
    Owl.prototype.destroy = function() {
        if (this.$element.hasClass(this.settings.themeClass)) {
            this.$element.removeClass(this.settings.themeClass);
        }
        if (this.settings.responsive !== false) {
            $(window).off("resize.owl.carousel");
        }
        if (this.transitionEndVendor) {
            this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }
        if (this.settings.mouseDrag || this.settings.touchDrag) {
            this.$stage.off("mousedown touchstart touchcancel");
            $(document).off(".owl.dragEvents");
            this.$stage.get(0).onselectstart = function() {};
            this.$stage.off("dragstart", function() {
                return false;
            });
        }
        this.$element.off(".owl");
        this.$stage.children(".cloned").remove();
        this.e = null;
        this.$element.removeData("owlCarousel");
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap();
    };
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
          case "<":
            return rtl ? a > b : a < b;

          case ">":
            return rtl ? a < b : a > b;

          case ">=":
            return rtl ? a <= b : a >= b;

          case "<=":
            return rtl ? a >= b : a <= b;

          default:
            break;
        }
    };
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
        }
    };
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent("on" + event, listener);
        }
    };
    Owl.prototype.trigger = function(name, data, namespace) {
        var status = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, handler = $.camelCase($.grep([ "on", name, namespace ], function(v) {
            return v;
        }).join("-").toLowerCase()), event = $.Event([ name, "owl", namespace || "carousel" ].join(".").toLowerCase(), $.extend({
            relatedTarget: this
        }, status, data));
        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === "function") {
                this.settings[handler].apply(this, event);
            }
        }
        return event;
    };
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };
    Owl.prototype.browserSupport = function() {
        this.support3d = isPerspective();
        if (this.support3d) {
            this.transformVendor = isTransform();
            var endVendors = [ "transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd" ];
            this.transitionEndVendor = endVendors[isTransition()];
            this.vendorName = this.transformVendor.replace(/Transform/i, "");
            this.vendorName = this.vendorName !== "" ? "-" + this.vendorName.toLowerCase() + "-" : "";
        }
        this.state.orientation = window.orientation;
    };
    function getTouches(event) {
        if (event.touches !== undefined) {
            return {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }
        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {
                    x: event.pageX,
                    y: event.pageY
                };
            }
            if (event.pageX === undefined) {
                return {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        }
    }
    function isStyleSupported(array) {
        var p, s, fake = document.createElement("div"), list = array;
        for (p in list) {
            s = list[p];
            if (typeof fake.style[s] !== "undefined") {
                fake = null;
                return [ s, p ];
            }
        }
        return [ false ];
    }
    function isTransition() {
        return isStyleSupported([ "transition", "WebkitTransition", "MozTransition", "OTransition" ])[1];
    }
    function isTransform() {
        return isStyleSupported([ "transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform" ])[0];
    }
    function isPerspective() {
        return isStyleSupported([ "perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective" ])[0];
    }
    function isTouchSupport() {
        return "ontouchstart" in window || !!navigator.msMaxTouchPoints;
    }
    function isTouchSupportIE() {
        return window.navigator.msPointerEnabled;
    }
    $.fn.owlCarousel = function(options) {
        return this.each(function() {
            if (!$(this).data("owlCarousel")) {
                $(this).data("owlCarousel", new Owl(this, options));
            }
        });
    };
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    var Lazy = function(carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }
                if (e.property && e.property.name == "position" || e.type == "initialized") {
                    var settings = this._core.settings, n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (e.property && e.property.value || this._core.current()) + i, clones = this._core.clones().length, load = $.proxy(function(i, v) {
                        this.load(v);
                    }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position++)), load);
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    Lazy.Defaults = {
        lazyLoad: false
    };
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find(".owl-lazy");
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }
        $elements.each($.proxy(function(index, element) {
            var $element = $(element), image, url = window.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src");
            this._core.trigger("load", {
                element: $element,
                url: url
            }, "lazy");
            if ($element.is("img")) {
                $element.one("load.owl.lazy", $.proxy(function() {
                    $element.css("opacity", 1);
                    this._core.trigger("loaded", {
                        element: $element,
                        url: url
                    }, "lazy");
                }, this)).attr("src", url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        "background-image": "url(" + url + ")",
                        opacity: "1"
                    });
                    this._core.trigger("loaded", {
                        element: $element,
                        url: url
                    }, "lazy");
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    };
    Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    var AutoHeight = function(carousel) {
        this._core = carousel;
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function() {
                if (this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (this._core.settings.autoHeight && e.property.name == "position") {
                    this.update();
                }
            }, this),
            "loaded.owl.lazy": $.proxy(function(e) {
                if (this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current())) {
                    this.update();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: "owl-height"
    };
    AutoHeight.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
    };
    AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    var Video = function(carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._fullscreen = false;
        this._handlers = {
            "resize.owl.carousel": $.proxy(function(e) {
                if (this._core.settings.video && !this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            "refresh.owl.carousel changed.owl.carousel": $.proxy(function(e) {
                if (this._playing) {
                    this.stop();
                }
            }, this),
            "prepared.owl.carousel": $.proxy(function(e) {
                var $element = $(e.content).find(".owl-video");
                if ($element.length) {
                    $element.css("display", "none");
                    this.fetch($element, $(e.content));
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", $.proxy(function(e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };
    Video.prototype.fetch = function(target, item) {
        var type = target.attr("data-vimeo-id") ? "vimeo" : "youtube", id = target.attr("data-vimeo-id") || target.attr("data-youtube-id"), width = target.attr("data-width") || this._core.settings.videoWidth, height = target.attr("data-height") || this._core.settings.videoHeight, url = target.attr("href");
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf("youtu") > -1) {
                type = "youtube";
            } else if (id[3].indexOf("vimeo") > -1) {
                type = "vimeo";
            } else {
                throw new Error("Video URL not supported.");
            }
            id = id[6];
        } else {
            throw new Error("Missing video URL.");
        }
        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };
        item.attr("data-video", url);
        this.thumbnail(target, this._videos[url]);
    };
    Video.prototype.thumbnail = function(target, video) {
        var tnLink, icon, path, dimensions = video.width && video.height ? 'style="width:' + video.width + "px;height:" + video.height + 'px;"' : "", customTn = target.find("img"), srcType = "src", lazyClass = "", settings = this._core.settings, create = function(path) {
            icon = '<div class="owl-video-play-icon"></div>';
            if (settings.lazyLoad) {
                tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
            } else {
                tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
            }
            target.after(tnLink);
            target.after(icon);
        };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + "></div>");
        if (this._core.settings.lazyLoad) {
            srcType = "data-src";
            lazyClass = "owl-lazy";
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }
        if (video.type === "youtube") {
            path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === "vimeo") {
            $.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        }
    };
    Video.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
    };
    Video.prototype.play = function(ev) {
        this._core.trigger("play", null, "video");
        if (this._playing) {
            this.stop();
        }
        var target = $(ev.target || ev.srcElement), item = target.closest("." + this._core.settings.itemClass), video = this._videos[item.attr("data-video")], width = video.width || "100%", height = video.height || this._core.$stage.height(), html, wrap;
        if (video.type === "youtube") {
            html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + video.id + "?autoplay=1&v=" + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === "vimeo") {
            html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
        item.addClass("owl-video-playing");
        this._playing = item;
        wrap = $('<div style="height:' + height + "px; width:" + width + 'px" class="owl-video-frame">' + html + "</div>");
        target.after(wrap);
    };
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        if (element && $(element).parent().hasClass("owl-video-frame")) {
            this._core.speed(0);
            this._fullscreen = true;
        }
        if (element && this._fullscreen && this._playing) {
            return false;
        }
        if (this._fullscreen) {
            this._fullscreen = false;
            return false;
        }
        if (this._playing) {
            if (this._core.state.orientation !== window.orientation) {
                this._core.state.orientation = window.orientation;
                return false;
            }
        }
        return true;
    };
    Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off("click.owl.video");
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            "change.owl.carousel": $.proxy(function(e) {
                if (e.property.name == "position") {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(function(e) {
                this.swapping = e.type == "translated";
            }, this),
            "translate.owl.carousel": $.proxy(function(e) {
                if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1 || !this.core.support3d) {
            return;
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous), next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn, outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.css({
                left: left + "px"
            }).addClass("animated owl-animated-out").addClass(outgoing).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", clear);
        }
        if (incoming) {
            next.addClass("animated owl-animated-in").addClass(incoming).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", clear);
        }
    };
    Animate.prototype.clear = function(e) {
        $(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd();
    };
    Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    var Autoplay = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
        this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": $.proxy(function() {
                this.autoplay();
            }, this),
            "play.owl.autoplay": $.proxy(function(e, t, s) {
                this.play(t, s);
            }, this),
            "stop.owl.autoplay": $.proxy(function() {
                this.stop();
            }, this),
            "mouseover.owl.autoplay": $.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.pause();
                }
            }, this),
            "mouseleave.owl.autoplay": $.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.autoplay();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5e3,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };
    Autoplay.prototype.autoplay = function() {
        if (this.core.settings.autoplay && !this.core.state.videoPlay) {
            window.clearInterval(this.interval);
            this.interval = window.setInterval($.proxy(function() {
                this.play();
            }, this), this.core.settings.autoplayTimeout);
        } else {
            window.clearInterval(this.interval);
        }
    };
    Autoplay.prototype.play = function(timeout, speed) {
        if (document.hidden === true) {
            return;
        }
        if (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion) {
            return;
        }
        if (this.core.settings.autoplay === false) {
            window.clearInterval(this.interval);
            return;
        }
        this.core.next(this.core.settings.autoplaySpeed);
    };
    Autoplay.prototype.stop = function() {
        window.clearInterval(this.interval);
    };
    Autoplay.prototype.pause = function() {
        window.clearInterval(this.interval);
    };
    Autoplay.prototype.destroy = function() {
        var handler, property;
        window.clearInterval(this.interval);
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    "use strict";
    var Navigation = function(carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.push($(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
                }
            }, this),
            "add.owl.carousel": $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, $(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
                }
            }, this),
            "remove.owl.carousel prepared.owl.carousel": $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            "change.owl.carousel": $.proxy(function(e) {
                if (e.property.name == "position") {
                    if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var current = this._core.current(), maximum = this._core.maximum(), minimum = this._core.minimum();
                        e.data = e.property.value > maximum ? current >= maximum ? minimum : maximum : e.property.value < minimum ? maximum : e.property.value;
                    }
                }
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (e.property.name == "position") {
                    this.draw();
                }
            }, this),
            "refreshed.owl.carousel": $.proxy(function() {
                if (!this._initialized) {
                    this.initialize();
                    this._initialized = true;
                }
                this._core.trigger("refresh", null, "navigation");
                this.update();
                this.draw();
                this._core.trigger("refreshed", null, "navigation");
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
    };
    Navigation.Defaults = {
        nav: false,
        navRewind: true,
        navText: [ "prev", "next" ],
        navSpeed: false,
        navElement: "div",
        navContainer: false,
        navContainerClass: "owl-nav",
        navClass: [ "owl-prev", "owl-next" ],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: true,
        dotsEach: false,
        dotData: false,
        dotsSpeed: false,
        dotsContainer: false,
        controlsClass: "owl-controls"
    };
    Navigation.prototype.initialize = function() {
        var $container, override, options = this._core.settings;
        if (!options.dotsData) {
            this._templates = [ $("<div>").addClass(options.dotClass).append($("<span>")).prop("outerHTML") ];
        }
        if (!options.navContainer || !options.dotsContainer) {
            this._controls.$container = $("<div>").addClass(options.controlsClass).appendTo(this.$element);
        }
        this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer) : $("<div>").hide().addClass(options.dotsClass).appendTo(this._controls.$container);
        this._controls.$indicators.on("click", "div", $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$indicators) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, options.dotsSpeed);
        }, this));
        $container = options.navContainer ? $(options.navContainer) : $("<div>").addClass(options.navContainerClass).prependTo(this._controls.$container);
        this._controls.$next = $("<" + options.navElement + ">");
        this._controls.$previous = this._controls.$next.clone();
        this._controls.$previous.addClass(options.navClass[0]).html(options.navText[0]).hide().prependTo($container).on("click", $.proxy(function(e) {
            this.prev(options.navSpeed);
        }, this));
        this._controls.$next.addClass(options.navClass[1]).html(options.navText[1]).hide().appendTo($container).on("click", $.proxy(function(e) {
            this.next(options.navSpeed);
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    Navigation.prototype.update = function() {
        var i, j, k, options = this._core.settings, lower = this._core.clones().length / 2, upper = lower + this._core.items().length, size = options.center || options.autoWidth || options.dotData ? 1 : options.dotsEach || options.items;
        if (options.slideBy !== "page") {
            options.slideBy = Math.min(options.slideBy, options.items);
        }
        if (options.dots || options.slideBy == "page") {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: i - lower,
                        end: i - lower + size - 1
                    });
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };
    Navigation.prototype.draw = function() {
        var difference, i, html = "", options = this._core.settings, $items = this._core.$stage.children(), index = this._core.relative(this._core.current());
        if (options.nav && !options.loop && !options.navRewind) {
            this._controls.$previous.toggleClass("disabled", index <= 0);
            this._controls.$next.toggleClass("disabled", index >= this._core.maximum());
        }
        this._controls.$previous.toggle(options.nav);
        this._controls.$next.toggle(options.nav);
        if (options.dots) {
            difference = this._pages.length - this._controls.$indicators.children().length;
            if (options.dotData && difference !== 0) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) {
                    html += this._templates[this._core.relative(i)];
                }
                this._controls.$indicators.html(html);
            } else if (difference > 0) {
                html = new Array(difference + 1).join(this._templates[0]);
                this._controls.$indicators.append(html);
            } else if (difference < 0) {
                this._controls.$indicators.children().slice(difference).remove();
            }
            this._controls.$indicators.find(".active").removeClass("active");
            this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass("active");
        }
        this._controls.$indicators.toggle(options.dots);
    };
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotData ? 1 : settings.dotsEach || settings.items)
        };
    };
    Navigation.prototype.current = function() {
        var index = this._core.relative(this._core.current());
        return $.grep(this._pages, function(o) {
            return o.start <= index && o.end >= index;
        }).pop();
    };
    Navigation.prototype.getPosition = function(successor) {
        var position, length, options = this._core.settings;
        if (options.slideBy == "page") {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += options.slideBy : position -= options.slideBy;
        }
        return position;
    };
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };
    Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    "use strict";
    var Hash = function(carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function() {
                if (this._core.settings.startPosition == "URLHash") {
                    $(window).trigger("hashchange.owl.navigation");
                }
            }, this),
            "prepared.owl.carousel": $.proxy(function(e) {
                var hash = $(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[hash] = e.content;
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on("hashchange.owl.navigation", $.proxy(function() {
            var hash = window.location.hash.substring(1), items = this._core.$stage.children(), position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
            if (!hash) {
                return false;
            }
            this._core.to(position, false, true);
        }, this));
    };
    Hash.Defaults = {
        URLhashListener: false
    };
    Hash.prototype.destroy = function() {
        var handler, property;
        $(window).off("hashchange.owl.navigation");
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

(function($, window, document, undefined) {
    "use strict";
    var Thumbs = function(carousel) {
        this.owl = carousel;
        this._thumbcontent = [];
        this.owl_currentitem = this.owl.options.startPosition;
        this.$element = this.owl.$element;
        this._handlers = {
            "prepared.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this.owl._options.thumbs && !this.owl._options.thumbImage) {
                    this._thumbcontent.push($(e.content).find("[data-thumb]").attr("data-thumb"));
                } else if (e.namespace && this.owl._options.thumbs && this.owl._options.thumbImage) {
                    var innerImage = $(e.content).find("img");
                    this._thumbcontent.push(innerImage);
                }
            }, this),
            "initialized.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this.owl._options.thumbs) {
                    this.initialize();
                    this.currentslide();
                    this.draw();
                }
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && e.property.name === "position" && this.owl._options.thumbs) {
                    this.currentslide();
                    this.draw();
                }
            }, this),
            "refreshed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this.draw();
                }
            }, this)
        };
        this.owl._options = $.extend(Thumbs.Defaults, this.owl.options);
        this.owl.$element.on(this._handlers);
    };
    Thumbs.Defaults = {
        thumbs: true,
        thumbImage: false,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item"
    };
    Thumbs.prototype.currentslide = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2;
        if (this.owl_currentitem === this.owl._items.length) {
            this.owl_currentitem = 0;
        }
    };
    Thumbs.prototype.draw = function() {
        $(this._thumbcontent._thumbcontainer).children().filter(".active").removeClass("active");
        $(this._thumbcontent._thumbcontainer).children().eq(this.owl_currentitem).addClass("active");
    };
    Thumbs.prototype.initialize = function() {
        var options = this.owl._options;
        this._thumbcontent._thumbcontainer = $("<div>").addClass(options.thumbContainerClass).appendTo(this.$element);
        var i;
        if (!this.owl._options.thumbImage) {
            for (i = 0; i < this._thumbcontent.length; ++i) {
                this._thumbcontent._thumbcontainer.append("<button class=" + options.thumbItemClass + ">" + this._thumbcontent[i] + "</button>");
            }
        } else {
            for (i = 0; i < this._thumbcontent.length; ++i) {
                this._thumbcontent._thumbcontainer.append("<button class=" + options.thumbItemClass + '><img src="' + this._thumbcontent[i].attr("src") + '" alt="' + this._thumbcontent[i].attr("alt") + '" /></button>');
            }
        }
        $(this._thumbcontent._thumbcontainer).on("click", "button", $.proxy(function(e) {
            var index = $(e.target).parent().is(this._thumbcontent._thumbcontainer) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.owl.to(index, options.dotsSpeed);
        }, this));
    };
    Thumbs.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this.owl.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== "function" && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Thumbs = Thumbs;
})(window.Zepto || window.jQuery, window, document);

$(document).ready(function() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        $currentScrollPos = 0;
        $(window).scroll(function() {
            $currentScrollPos = $(document).scrollTop();
        });
    }
    $(".js-call-loading").click(function() {
        $.fn.preload = function() {
            this.each(function() {
                $("<img/>")[0].src = this;
                $(".loading").fadeIn(500, function() {
                    $("body").css({
                        position: "fixed"
                    });
                    localStorage.cachedScrollPos = $currentScrollPos;
                });
            });
        };
        $([ globalVars.loadingGifPath ]).preload();
    });
    $("#continueValidate").click(function() {
        valorCode = $("#validate-code").val();
        if (valorCode == null || valorCode == "") {
            $("#promotional").text("Insert your promo code");
        } else {
            $("#promotional").text(valorCode);
        }
    });
    $(".info-data").click(function() {
        if ($(this).parent().hasClass("activa")) {
            $(this).next().find(".absolute").slideToggle();
            $(".info-guest").removeClass("activa");
        } else {
            $(".info-guest").removeClass("activa");
            $(".options-room .absolute").hide();
            $(this).next().find(".absolute").slideToggle();
            $(this).parent().addClass("activa");
        }
    });
    $("#languajes").change(function() {
        $("html, body").scrollTop(0);
    });
    $(".box-info-grey").click(function(event) {
        event.stopPropagation();
    });
    $("#js-bottom-window").click(function() {
        $(".modal-fullscreen").addClass("activo");
        $("html,body").animate({
            scrollTop: 0
        }, 1e3);
        $("footer").hide();
    });
    var openModal = 0;
    var daysDefault = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    var monthsDefault = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];
    var calendarData = {
        months: typeof CalendarData != "undefined" ? CalendarData.months : monthsDefault,
        days: typeof CalendarData != "undefined" ? CalendarData.days : daysDefault,
        startDay: typeof CalendarData != "undefined" ? CalendarData.startDay : 0,
        modalRangeSelector: "#date-range",
        limitBooking: 15,
        monthsToShow: 18
    };
    var actualScroll = 0;
    $("#js-bottom-window-full").click(function() {
        actualScroll = $(window).scrollTop();
        $(".modal-fullscreen").addClass("activo");
        $("html,body").animate({
            scrollTop: "-65px"
        }, 1e3, function() {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 100) {
                    $(".swipe-info-calendar").fadeOut();
                }
            });
        });
        $("footer").hide();
        $(".wrapper-page").addClass("overflow-x-visible");
        $(".swipe-info-calendar").show().css("opacity", 1);
        setTimeout(function() {
            var monthsPosition = $(".modal-njs-calendar.activo").find(".months").first().offset().top;
            var checkinMonthPosition = $(".modal-njs-calendar.activo .day.checkin-selected").closest(".cnt-month").offset().top;
            if (checkinMonthPosition > monthsPosition) {
                $("html,body").animate({
                    scrollTop: checkinMonthPosition - monthsPosition
                }, 600);
            }
        }, 600);
        if (openModal == 0) {
            $(".njs-calendar").njsCalendar(calendarData);
        }
        openModal++;
    });
    $(".modal-fullscreen.full .btn-close").click(function() {
        $(".modal-fullscreen").removeClass("activo");
        $(".modal-fullscreen").prev().show();
        $("footer").show();
        $("#header-affix-holder").animate({
            marginTop: "0px",
            useTranslate3d: true
        }, 500, function() {});
        $(".wrapper").css("overflow", "hidden");
        $(".wrapper-page").removeClass("overflow-x-visible");
        $(".swipe-info-calendar").hide();
        if (!isNaN(actualScroll)) {
            setTimeout(function() {
                $(window).scrollTop(actualScroll);
            });
        }
    });
    $(".js-other-place .modal-fullscreen.full .btn-close").click(function() {
        $(".modal-fullscreen").removeClass("activo");
        $(".modal-fullscreen").prev().show();
        $("footer").show();
        var elemento = $(".place-to-arrive");
        var offset = elemento.position();
        var posFinal = offset.top;
        $("html,body").animate({
            scrollTop: posFinal
        }, 0);
        $(".wrapper").css("overflow", "hidden");
    });
    $(".js-other-place .modal-fullscreen.full .call-action").click(function() {
        $(".modal-fullscreen").removeClass("activo");
        $(".modal-fullscreen").prev().show();
        $("footer").show();
        $("#header-affix-holder").animate({
            marginTop: "0px",
            useTranslate3d: true
        }, 500, function() {});
        var elemento = $(".place-to-arrive");
        var offset = elemento.position();
        var posFinal = offset.top;
        $("html,body").animate({
            scrollTop: posFinal
        }, 0);
        $(".wrapper").css("overflow", "hidden");
    });
    $(".js-call-success").click(function() {
        $("#success").modal({
            show: "true"
        });
    });
    $(".js-call-error").click(function() {
        $("#error").modal({
            show: "true"
        });
    });
    $(".modal-fullscreen.full .call-action").click(function() {
        $(".modal-fullscreen").removeClass("activo");
        $(".modal-fullscreen").prev().show();
        $("footer").show();
        $("#header-affix-holder").animate({
            marginTop: "0px",
            useTranslate3d: true
        }, 500, function() {});
        $("html,body").animate({
            scrollTop: "0px"
        }, 0);
        $(".wrapper").css("overflow", "hidden");
        updateCalInput("in", startDayText, startDay, startMonth, startYear);
        updateCalInput("out", endDayText, endDay, endMonth, endYear);
    });
    function calendarSingle() {}
    function updateCalSum(type, text, day, month) {
        var typeClass = ".check-";
        switch (type) {
          case "in":
            typeClass += "in";
            break;

          case "out":
            typeClass += "out";
            break;
        }
        $(".calendar-summary " + typeClass + " .js-day-name").html(text);
        $(".calendar-summary " + typeClass + " .js-day").html(fillZeros(day, 2, "left"));
        $(".calendar-summary " + typeClass + " .js-month").html(fillZeros(month, 2, "left"));
    }
    function updateCalInput(type, text, day, month, year) {
        var typeClass = ".check-";
        switch (type) {
          case "in":
            typeClass += "in";
            break;

          case "out":
            typeClass += "out";
            break;
        }
        $(".calendar-input " + typeClass + " .day-week").html(text);
        $(".calendar-input " + typeClass + " .day-number").html(fillZeros(day, 2, "left"));
        $(".calendar-input " + typeClass + " .day-month").html(fillZeros(month, 2, "left"));
        $(".calendar-input " + typeClass + " .day-year").html(year);
    }
    function rePaintRange(from, to) {
        $(".js-range-calendars").find(".day").removeClass("range start-range end-range");
        $(".calendar-picker").removeClass("start-month end-month");
        $(".js-range-calendars").find("[data-day=" + from.day + "][data-month=" + from.month + "][data-year=" + from.year + "]").addClass("start-range range");
        $(".js-range-calendars").find("[data-day=" + to.day + "][data-month=" + to.month + "][data-year=" + to.year + "]").addClass("end-range range");
        $(".js-range-calendars").find(".start-range").nextUntil(".end-range").not("[disabled]").addClass("range");
        $(".js-range-calendars").find(".end-range").prevUntil(".start-range").not("[disabled]").addClass("range");
        if (from.month != to.month) {
            $(".js-range-calendars").find(".calendar-picker.start-month").nextUntil(".calendar-picker.end-month").find(".day").not("[disabled]").addClass("range");
        }
        totalNights = $(".js-range-calendars").find(".range:not([disabled])").size() - 1;
        $(".calendar-summary .js-total-nights").html(totalNights);
    }
    if ($(".calendar-month-receiver").length) {
        monthReceiverTop = $(".calendar-month-receiver").offset().top + $("#header-affix").height() + 60;
    }
    $(window).on("scroll", function() {
        $(".calendar-picker .head").each(function() {
            calendarsTop = $(this).offset().top - $(window).scrollTop();
            if (monthReceiverTop > calendarsTop) {
                $(".calendar-month-receiver").css("top", $("#header-affix").height());
                $(".calendar-month-receiver").html($(this).html());
            }
        });
        rangeCalendar = $(".js-range-calendars").offset();
        if (typeof rangeCalendar != "undefined") {
            if ($(window).scrollTop() < $(".js-range-calendars").offset().top) {
                $(".calendar-month-receiver").removeAttr("style");
            }
        }
        if ($(window).scrollTop() > 45) {
            if ($(".modal-calendar").hasClass("activo") && $(".modal-calendar").offset().top == 0) {
                $(".calendar-summary").addClass("fixed");
            }
            $(".js-range-calendars").css("padding-top", 105);
        } else {
            $(".calendar-summary").removeClass("fixed");
            $(".js-range-calendars").css("padding-top", 0);
        }
    });
    if ($("#js-new-search").length) {
        $(".wrapper").css("position", "initial");
    }
    rangeError = $(".js-range-calendars").attr("data-error-range");
    $(document).on("click", ".js-range-calendars button.day.range-calendar", function() {
        $(".day").removeClass("selectable1");
        if ($(this).closest(".js-range-calendars").find(".start-range").length > 0 && $(this).closest(".js-range-calendars").find(".end-range").length > 0) {
            $(this).closest(".js-range-calendars").find(".day").removeClass("range start-range end-range");
            $(".calendar-picker").removeClass("start-month end-month");
            $(".js-range-calendars button.call-action").addClass("hide");
            $(".swipe-info-calendar").hide();
        }
        if ($(this).closest(".js-range-calendars").find(".start-range").length < 1) {
            startDayText = $(this).attr("data-day-text");
            startDay = parseInt($(this).attr("data-day"));
            startMonth = parseInt($(this).attr("data-month"));
            startYear = parseInt($(this).attr("data-year"));
            $(this).addClass("start-range range");
            $(".calendar-summary .js-total-nights").text($(".calendar-summary .js-total-nights").data("content"));
            $(this).closest(".calendar-picker").addClass("start-month");
            updateCalSum("in", startDayText, startDay, startMonth);
            var nextDay = $(this).next();
            if (nextDay.hasClass("disabled")) {
                var i = 0;
                var elemento = $(this);
                var offset = elemento.offset();
                var posScroll = offset.top;
                $(this).closest(".calendar-picker").next().find(".day").each(function() {
                    if ($(this).hasClass("disabled")) {} else {
                        i++;
                        $(this).addClass("selectable" + i);
                        $("html, body").animate({
                            scrollTop: posScroll - 200,
                            useTranslate3d: true
                        }, 700);
                    }
                });
            } else {}
        } else {
            endDayText = $(this).attr("data-day-text");
            endDay = parseInt($(this).attr("data-day"));
            endMonth = parseInt($(this).attr("data-month"));
            endYear = parseInt($(this).attr("data-year"));
            if (startYear > endYear) {
                $(this).closest(".js-range-calendars").find(".day").removeClass("range start-range end-range");
                $(".calendar-picker").removeClass("start-month end-month");
                $(".js-range-calendars button.call-action").addClass("hide");
                startDayText = $(this).attr("data-day-text");
                startDay = parseInt($(this).attr("data-day"));
                startMonth = parseInt($(this).attr("data-month"));
                startYear = parseInt($(this).attr("data-year"));
                $(this).addClass("start-range range");
                updateCalSum("in", startDayText, startDay, startMonth);
                return false;
            }
            if (endDay - startDay < 0 && endMonth == startMonth) {
                $(this).closest(".js-range-calendars").find(".day").removeClass("range start-range end-range");
                $(".calendar-picker").removeClass("start-month end-month");
                $(".js-range-calendars button.call-action").addClass("hide");
                startDayText = $(this).attr("data-day-text");
                startDay = parseInt($(this).attr("data-day"));
                startMonth = parseInt($(this).attr("data-month"));
                startYear = parseInt($(this).attr("data-year"));
                $(this).addClass("start-range range");
                updateCalSum("in", startDayText, startDay, startMonth);
                return false;
            }
            if (startMonth > endMonth && startYear == endYear) {
                $(this).closest(".js-range-calendars").find(".day").removeClass("range start-range end-range");
                $(".calendar-picker").removeClass("start-month end-month");
                $(".js-range-calendars button.call-action").addClass("hide");
                startDayText = $(this).attr("data-day-text");
                startDay = parseInt($(this).attr("data-day"));
                startMonth = parseInt($(this).attr("data-month"));
                startYear = parseInt($(this).attr("data-year"));
                $(this).addClass("start-range range");
                updateCalSum("in", startDayText, startDay, startMonth);
                return false;
            }
            if (startMonth == endMonth && startDay == endDay) {
                return false;
            }
            $(this).addClass("end-range range");
            $(this).closest(".calendar-picker").addClass("end-month");
            updateCalSum("out", endDayText, endDay, endMonth);
            $(".js-range-calendars button.call-action").removeClass("hide");
            $(".js-range-calendars").find(".start-range").nextUntil(".end-range").not("[disabled]").addClass("range");
            $(".js-range-calendars").find(".end-range").prevUntil(".start-range").not("[disabled]").addClass("range");
            if (startMonth != endMonth) {
                $(".js-range-calendars").find(".calendar-picker.start-month").nextUntil(".calendar-picker.end-month").find(".day").not("[disabled]").addClass("range");
            }
            totalNights = $(".js-range-calendars").find(".range:not([disabled])").size() - 1;
            $(".calendar-summary .js-total-nights").html(totalNights);
            if (totalNights > 15) {
                $(".modal-fullscreen.full .btn-close").trigger("click");
                $("#contactHotel").modal("show");
            }
        }
    });
    $(document).on("click", ".js-range-calendars button.day.single", function() {
        $("button.day").removeClass("start-range");
        $(this).addClass("start-range");
        startDayText = $(this).attr("data-day-text");
        startDay = parseInt($(this).attr("data-day"));
        startMonth = parseInt($(this).attr("data-month"));
        startYear = parseInt($(this).attr("data-year"));
        updateCalSum("in", startDayText, startDay, startMonth);
    });
    function fillZeros(val, len, dir) {
        val = val.toString();
        if (dir == "left") {
            while (val.length < len) {
                val = "0" + val;
            }
        } else {
            while (val.length < len) {
                val = val + "0";
            }
        }
        return val;
    }
    $(".js-input-scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: $("#js-new-search-form").offset().top - 90
        }, "slow");
        setTimeout(function() {
            $('input[id="inputSearch"]').focus();
        }, 500);
    });
});

$(document).ready(function() {
    var occupancyTranslations = {
        adultsSingular: $("#sadults").data("label-singular"),
        adultsPlural: $("#sadults").data("label-plural"),
        childSingular: $("#schilds").data("label-singular"),
        childPlural: $("#schilds").data("label-plural"),
        babySingular: $("#sbabies").data("label-singular"),
        babyPlural: $("#sbabies").data("label-plural"),
        roomSingular: $("#srooms").data("label-singular"),
        roomPlural: $("#srooms").data("label-plural")
    };
    $("[data-pax]").click(function() {
        pax = $(this).attr("data-pax");
        $("#nrooms").html("1");
        clone();
        $("#adultRoom-1").val(pax);
        $("#kidRoom-1").val(0);
        $("#babyRoom-1").val(0);
        recalculate();
        $("#options-rooms").collapse("hide");
    });
    $(".defH").hide();
});

$("#select-option .close").click(function() {
    var placetoGo = $("#selectOptionButton").offset().top;
    $("html,body").animate({
        scrollTop: placetoGo - 150
    }, 0);
});

function recalculate() {
    var placetoGo = $("#selectOptionButton").offset().top;
    var total = $(".cloneRoom").length;
    var adultos = 0;
    var ninos = 0;
    var bebes = 0;
    for (var i = 1; i <= total; i++) {
        adultos = adultos + parseInt($("#adultRoom-" + i).val(), 10);
    }
    for (var i = 1; i <= total; i++) {
        ninos = ninos + parseInt($("#kidRoom-" + i).val(), 10);
    }
    for (var i = 1; i <= total; i++) {
        bebes = bebes + parseInt($("#babyRoom-" + i).val(), 10);
    }
    var occupancyTranslations = {
        adultsSingular: $("#sadults").data("label-singular"),
        adultsPlural: $("#sadults").data("label-plural"),
        childSingular: $("#schilds").data("label-singular"),
        childPlural: $("#schilds").data("label-plural"),
        babySingular: $("#sbabies").data("label-singular"),
        babyPlural: $("#sbabies").data("label-plural"),
        roomSingular: $("#srooms").data("label-singular"),
        roomPlural: $("#srooms").data("label-plural")
    };
    $("#sadults").html(adultos + " ");
    $("#schilds").html(ninos + " ");
    $("#sbabies").html(bebes + " ");
    $("#srooms").html($("#nrooms").html() + " ");
    $("#sadults-translation").html(" " + (adultos == 1 ? occupancyTranslations.adultsSingular : occupancyTranslations.adultsPlural) + ",");
    $("#schilds-translation").html(" " + (ninos == 1 ? occupancyTranslations.childSingular : occupancyTranslations.childPlural) + ",");
    $("#sbabies-translation").html(" " + (bebes == 1 ? occupancyTranslations.babySingular : occupancyTranslations.babyPlural) + ",");
    $("#srooms-translation").html(" " + ($("#nrooms").html() == 1 ? occupancyTranslations.roomSingular : occupancyTranslations.roomPlural));
    $("#select-option").modal("hide");
    if (parseInt($("#schilds").text(), 10) == 0) {
        $("#schilds").hide().next().hide();
    } else {
        $("#schilds").show().next().show();
    }
    if (parseInt($("#sbabies").text(), 10) == 0) {
        $("#sbabies").hide().next().hide();
    } else {
        $("#sbabies").show().next().show();
    }
}

function clone() {
    var clone;
    var numeroSeleccionado = parseInt($("#nrooms").html(), 10);
    var totalHabs = $(".cloneRoom").length;
    if (numeroSeleccionado < totalHabs) {
        for (var i = parseInt(totalHabs, 10); i > numeroSeleccionado; i--) {
            $("#clone-" + i).remove();
        }
    } else {
        if (numeroSeleccionado > totalHabs) {
            for (var i = parseInt(totalHabs, 10); i < numeroSeleccionado; i++) {
                var c = i + 1;
                clone = $("#clone-" + i);
                $("#clone-" + i).clone().attr("id", "clone-" + c).insertAfter(clone);
                $("#clone-" + c).find(".adu").attr("id", "adultRoom-" + c);
                $("#clone-" + c).find(".adu").attr("name", "nadults-" + c);
                $("#clone-" + c).find(".kid").attr("id", "kidRoom-" + c);
                $("#clone-" + c).find(".kid").attr("name", "nchilds-" + c);
                if (clone.is(".hasBabies")) {
                    $("#clone-" + c).find(".baby").attr("id", "babyRoom-" + c);
                    $("#clone-" + c).find(".baby").attr("name", "nbabies-" + c);
                }
                $("#clone-" + c).find(".adu").val("2");
                $("#clone-" + c).find(".kid").val("0");
                if (clone.is(".hasBabies")) {
                    $("#clone-" + c).find(".baby").val("0");
                }
                $("#clone-" + c).find(".cAdults .options-room li").show();
                $("#clone-" + c).find(".cChilds .options-room li").show();
                $("#clone-" + c + ' .cChilds .options-room li button[value="3"]').parent().hide();
                $("#clone-" + c + ' .cChilds .options-room li button[value="4"]').parent().hide();
                if (clone.is(".hasBabies")) {
                    $("#clone-" + c).find(".cBabies .options-room li").show();
                    $("#clone-" + c + ' .cBabies .options-room li button[value="3"]').parent().hide();
                    $("#clone-" + c + ' .cBabies .options-room li button[value="4"]').parent().hide();
                }
                $("#clone-" + c).find(".optAdults").removeClass("optAdults-" + i);
                $("#clone-" + c).find(".optAdults").addClass("optAdults-" + c);
                $("#clone-" + c).find(".optChilds").removeClass("optChilds-" + i);
                $("#clone-" + c).find(".optChilds").addClass("optChilds-" + c);
                if (clone.is(".hasBabies")) {
                    $("#clone-" + c).find(".optBabies").removeClass("optBabies-" + i);
                    $("#clone-" + c).find(".optBabies").addClass("optBabies-" + c);
                }
                $("#clone-" + c).find("#iRoom").html(c);
            }
        }
    }
    $(".info-data").unbind("click");
    $(".info-data").bind("click", function() {
        if ($(this).parent().hasClass("activa")) {
            $(this).next().find(".absolute").slideToggle();
            $(".info-guest").removeClass("activa");
        } else {
            $(".info-guest").removeClass("activa");
            $(".options-room .absolute").hide();
            $(this).next().find(".absolute").slideToggle();
            $(this).parent().addClass("activa");
        }
    });
    $(".options-room button").unbind("click");
    $(".options-room button").click(function() {
        updateAdultsKids($(this));
    });
}

function updateAdultsKids(obj) {
    var limit = 4;
    $(".defH").show();
    obj.closest(".absolute").slideToggle();
    $(".info-guest").removeClass("activa");
    var typeId = obj.closest(".info-guest").parent();
    changeVal = obj.closest(".info-guest").find(".info-data input");
    valor = obj.val();
    $(changeVal).val(valor);
    var inputAdultos = obj.closest(".guest-info").find("input.adu");
    var inputNinos = obj.closest(".guest-info").find("input.kid");
    var inputBebes = obj.closest(".guest-info").find("input.baby");
    var listAdultos = obj.closest(".guest-info").find(".optAdults");
    var listNinos = obj.closest(".guest-info").find(".optChilds");
    var listBebes = obj.closest(".guest-info").find(".optBabies");
    var adultos = parseInt(inputAdultos.val(), 10);
    var ninos = parseInt(inputNinos.val(), 10);
    var bebes = parseInt(inputBebes.val(), 10);
    var libres = limit - adultos - ninos - bebes;
    if (bebes > 0) {
        libres++;
    }
    if ($(typeId).hasClass("cAdults")) {
        var liNinos = listNinos.find("li");
        liNinos.each(function() {
            var buttonVal = parseInt($(this).find("button").val(), 10);
            if (buttonVal > libres + ninos) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
        var liBebes = listBebes.find("li");
        if (bebes == 0) {
            libres++;
        }
        liBebes.each(function() {
            var buttonVal = parseInt($(this).find("button").val(), 10);
            if (buttonVal > libres + bebes) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    } else {
        if ($(typeId).hasClass("cChilds")) {
            var liAdultos = listAdultos.find("li");
            liAdultos.each(function() {
                var buttonVal = parseInt($(this).find("button").val(), 10);
                if (buttonVal > libres + adultos) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
            var liBebes = listBebes.find("li");
            if (bebes == 0) {
                libres++;
            }
            liBebes.each(function() {
                var buttonVal = parseInt($(this).find("button").val(), 10);
                if (buttonVal > libres + bebes) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        } else {
            var liAdultos = listAdultos.find("li");
            liAdultos.each(function() {
                var buttonVal = parseInt($(this).find("button").val(), 10);
                if (buttonVal > libres + adultos) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
            var liNinos = listNinos.find("li");
            liNinos.each(function() {
                var buttonVal = parseInt($(this).find("button").val(), 10);
                if (buttonVal > libres + ninos) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        }
    }
}

$(document).ready(function() {
    $(".options-room button").click(function() {
        updateAdultsKids($(this));
    });
    if (parseInt($("#schilds").text(), 10) == 0) {
        $("#schilds").hide().next().hide();
        $("#schilds").parents('[class^="total-"]').hide();
    } else {
        $("#schilds").show().next().show();
        $("#schilds").parents('[class^="total-"]').show();
    }
    if (parseInt($("#sbabies").text(), 10) == 0) {
        $("#sbabies").hide().next().hide();
        $("#sbabies").parents('[class^="total-"]').hide();
    } else {
        $("#sbabies").show().next().show();
        $("#sbabies").parents('[class^="total-"]').show();
    }
    $(".plus").click(function() {
        var numer = parseInt($("#nrooms").html(), 10);
        if (numer == 5) {
            numer++;
            $("#nrooms").html(numer);
            $("#home-room-select").hide();
            $("#home-six-rooms").show();
        }
        if (numer < 5) {
            numer++;
            $("#nrooms").html(numer);
            clone();
        }
    });
    $(".minus").click(function() {
        var numer = parseInt($("#nrooms").html(), 10);
        if (numer > 1) {
            numer--;
            $("#nrooms").html(numer);
            clone();
            $("#home-room-select").show();
            $("#home-six-rooms").hide();
        }
    });
    $(".setRooms").click(function() {
        var rooms = parseInt($("#nrooms").html());
        if (rooms < 6) {
            recalculate();
        } else {
            $("#select-option").modal("hide");
        }
    });
    $(".js-reset-rooms").click(function() {
        $("#kidRoom-1").val("0");
        $("#babyRoom-1").val("0");
        var tRooms = parseInt($("#nrooms").html(), 10);
        for (var i = 0; i < tRooms - 1; i++) {
            $(".minus").trigger("click");
        }
        recalculate();
    });
    $(".wrapper").click(function() {
        $("#results").fadeOut();
    });
    $("#inputSearch").keyup(function(e) {
        var stringRoute = $(this).attr("data-route");
        setTimeout(function() {
            $("#inputSearch").removeClass("soft");
            if (e.which === 40 || e.which === 38 || e.which === 13 || e.which === 9) {
                return false;
            }
            var params = $("#inputSearch").val();
            if (params == "") {
                $("#results").fadeOut();
                return;
            } else {
                $("#results").fadeIn();
            }
            jQuery.ajax({
                type: "POST",
                url: stringRoute,
                data: "q=" + params,
                async: false,
                dataType: "json",
                success: function(datos) {
                    $("#results").fadeIn();
                    $(".box-info.autosearch").addClass("searching");
                    var hoteles = datos[0];
                    var html = "";
                    var prop = "Type";
                    var prevType = 1;
                    hoteles.sort(function(a, b) {
                        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
                    });
                    if (hoteles.length > 0) {
                        html += '<li class="find-near" onclick="$(\'.find-near\').addClass(' + "'" + "js-clicked" + "'" + ')"><span class="icon-direction"></span>Find near me  </li>';
                        for (var i = 0; i < hoteles.length; i++) {
                            if (parseInt(hoteles[i].Type, 10) == 1) {
                                var city = "";
                            } else {
                                var city = hoteles[i].City;
                            }
                            switch (hoteles[i].Type) {
                              case 1:
                                txtGroup = txtGroup1;
                                break;

                              case 2:
                                txtGroup = txtGroup2;
                                break;

                              case 3:
                                txtGroup = txtGroup3;
                                break;

                              case 4:
                                txtGroup = txtGroup4;
                                break;

                              case 5:
                                txtGroup = txtGroup5;
                                break;
                            }
                            if (hoteles[i].Type != prevType) {
                                html += '<li class="maporamaGroup"><i class="icon-' + hoteles[i].Type + '"></i><span>' + txtGroup + "</span></li>";
                            }
                            html += '<li class="maporamaElement ' + txtGroup + "\" onclick=\"$('#inputSearch').val(" + "'" + hoteles[i].Name + " " + city + " " + hoteles[i].CountryName + "'" + ')">';
                            html += '<span class="pull-right numHotels">' + hoteles[i].num_hotels + " " + txtHotel + "</span>";
                            html += "<b>" + hoteles[i].City + "</b>";
                            html += '<div class="Result">';
                            html += "<span>" + hoteles[i].Name + ', </span><span class="tipo-' + hoteles[i].Type + '"> ' + hoteles[i].City + ", </span><span> " + hoteles[i].CountryName + " </span>";
                            html += "</div>";
                            html += "</li>";
                            prevType = hoteles[i].Type;
                            prevTypeName = hoteles[i].Type;
                        }
                    } else {
                        html += "<li>";
                        html += "<div>";
                        html += "No se han encontrado coincidencias.";
                        html += "</div>";
                        html += "</li>";
                    }
                    $("#results").html(html);
                    $("#results").show();
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    var html = "";
                    html += "<li>";
                    html += "<div>";
                    html += ajaxError;
                    html += "</div>";
                    html += "</li>";
                    $("#results").html(html);
                }
            });
        }, 100);
    });
    $(document).keypress(function(e) {
        if (e.which == 13) {
            $(".maporamaElement").first().click();
        }
    });
    $("#select-option .box-info").click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $("#currency").change(function() {
        $("#currency-info").modal({
            show: "true"
        });
    });
    $("#results").click(function() {
        hideResults();
    });
    function hideResults() {
        $(".box-info.autosearch").removeClass("searching");
        $("#results").hide();
    }
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
    $(".modal-fullscreen .btn-close").click(function() {
        $(".modal-fullscreen").removeClass("activo");
        $(".modal-fullscreen").prev().show();
        $("footer").show();
    });
    $("#show-filters").click(function() {
        setTimeout(function() {
            $("#max-price").slider({
                min: 0,
                max: 1e3,
                value: 500,
                tooltip: "always",
                formatter: function(value) {
                    return value + " â‚¬";
                }
            });
            $("#max-distance").slider({
                min: 0,
                max: 1e3,
                value: 300,
                tooltip: "always",
                formatter: function(value) {
                    return value + " km";
                }
            });
        }, 500);
        $("#max-price").css("display", "none");
        $("#max-distance").css("display", "none");
    });
});

function valueNear() {}

$(window).load(function() {
    $(document).on("click", ".fake-radio", function(e) {
        $(this).toggleClass("active");
    });
    $(document).on("click", ".checkbox.room-options", function(e) {
        currentBlock = $(this).closest(".js-block-options");
        currentBlock.find(".checkbox.room-options").removeClass("visible");
        currentBlock.find(".fake-radio").removeClass("active");
        $(this).addClass("visible");
        $(this).find(".fake-radio").addClass("active");
        var elemento = $(this);
        var posicionScroll = elemento.offset().top;
        $("html, body").animate({
            scrollTop: posicionScroll - 200,
            useTranslate3d: true
        }, 700);
        updateOwlHeigth(this);
    });
    $(document).on("click", ".js-first-fake-radio", function(e) {
        var container = $(this).attr("data-id-show");
        var radioContainer = $(this).closest(".options-room-purchase").find(container).find(".js-block-options");
        $(radioContainer).each(function() {
            var options = $(this).find(".checkbox.room-options");
            var radios = $(this).find(".fake-radio");
            options.removeClass("visible");
            radios.removeClass("active");
            options.first().addClass("visible");
            options.find(".fake-radio").first().addClass("active");
        });
    });
    $(document).on("click", ".js-tab-first-fake-radio", function(e) {
        var container = $(this).attr("data-id-show");
        var radioContainer = $(container).find(".options-room-purchase").find(".js-block-options");
        $(radioContainer).each(function() {
            var options = $(this).find(".checkbox.room-options");
            var radios = $(this).find(".fake-radio");
            options.removeClass("visible");
            radios.removeClass("active");
            options.first().addClass("visible");
            options.find(".fake-radio").first().addClass("active");
        });
    });
    $(document).on("click", ".swipe-info button", function(e) {
        $(".swipe-info").hide();
        $(".swipe-info").addClass("closed");
    });
    $(document).on("click", ".swipe-info-calendar button", function(e) {
        $(".swipe-info-calendar").hide();
        $(".swipe-info-calendar").addClass("closed");
    });
    $(document).on("click", ".block-black button", function(e) {
        $(this).parent().hide();
        $(this).parent().addClass("closed");
    });
    $(document).on("click", ".booking-aditional", function(e) {
        $(this).parent().find(".aditional-info").slideToggle();
        $(this).find(".icon-go-link, .icon-go-link-collection").toggleClass("opened");
    });
    $("#hotels-rooms.owl-room-booking").owlCarousel({
        responsive: false,
        thumbs: false,
        stagePadding: 30,
        autoHeight: false,
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        autoplayHoverPause: false,
        onTranslated: function() {
            var posCarousel = $("#hotels-rooms.owl-room-booking").offset().top;
            $("html,body").animate({
                scrollTop: posCarousel - 150,
                useTranslate3d: true
            }, 500);
        },
        dragThreshold: 100,
        responsive: {}
    });
    $(document).on("click", ".js-btn-carousel-load", function(e) {
        console.log("Fire click, .js-btn-carousel-load", $(this).attr("data-id-show"));
        initOwlCarousel($(this).attr("data-id-show"));
    });
    function upslide(obj) {
        var posCarousel = $(".owl-carousel").offset().top;
        $("html,body").animate({
            scrollTop: posCarousel - 150,
            useTranslate3d: true
        }, 500);
    }
    $(document).on("click", ".js-change-tab", function(e) {});
    var timesMostrar = 1;
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        tabsPurchase = $(".tabs.purchase").offset();
        if (typeof tabsPurchase != "undefined") {
            var momentSwipe = $(".tabs.purchase").offset().top;
        }
        if (scroll > momentSwipe && timesMostrar < 2) {
            $(".swipe-info").fadeIn(1e3);
            if (timesMostrar < 2) {
                setTimeout(function() {
                    $(".swipe-info").fadeOut(1e3);
                    timesMostrar = 2;
                }, 1e4);
            }
        } else {}
    });
    $(window).on("orientationchange", function(event) {
        $(".swipe-info-calendar").fadeOut(1e3);
    });
    $("#garantee-reservation").change(function() {
        if ($(this).is(":checked")) {
            $(".js-required-toggle").attr("required", true);
        } else {
            $(".js-required-toggle").removeAttr("required");
        }
        $(".has-error").removeClass("has-error");
        $("input,select,textarea").jqBootstrapValidation("destroy");
        init_validation();
    });
    if ($("#modal-error-code").length) {
        $("#modal-error-code").modal();
    }
    if ($("#name-guest-checkout").length && $("#name-guest-checkout").val() != "") {
        var nameGuestCheckout = $(this).val();
        var lastNameGuestCheckout = $("#last-name-guest-checkout").val();
        $("#room-01-name-01").val(nameGuestCheckout + " " + lastNameGuestCheckout).prop("disabled", true);
    } else {
        var nameGuestCheckout = $("#name-checkout").val();
        var lastNameGuestCheckout = $("#last-name-checkout").val();
        $("#room-01-name-01").val(nameGuestCheckout + " " + lastNameGuestCheckout);
    }
    $("#name-guest-checkout").on("focusout", function(e) {
        var nameGuestCheckout = $(this).val();
        var lastNameGuestCheckout = $("#last-name-guest-checkout").val();
        if ($("#room-01-name-01").length > 0) {
            $("#room-01-name-01").val(nameGuestCheckout + " " + lastNameGuestCheckout).prop("disabled", true);
            $("label[for='room-01-name-01']").addClass("focus");
        }
    });
    $("#last-name-guest-checkout").on("focusout", function(e) {
        var nameGuestCheckout = $("#name-guest-checkout").val();
        var lastNameGuestCheckout = $(this).val();
        if ($("#room-01-name-01").length > 0) {
            $("#room-01-name-01").val(nameGuestCheckout + " " + lastNameGuestCheckout).prop("disabled", true);
            $("label[for='room-01-name-01']").addClass("focus");
        }
    });
    $("#name-checkout").on("focusout", function(e) {
        if ($("#name-guest-checkout").val() == "" || !$("#name-guest-checkout").length || !$("#name-guest-checkout").is(":visible")) {
            var nameGuestCheckout = $(this).val();
            var lastNameGuestCheckout = $("#last-name-checkout").val();
            if ($("#room-01-name-01").length > 0) {
                $("#room-01-name-01").val(nameGuestCheckout + " " + lastNameGuestCheckout).prop("disabled", true);
                $("label[for='room-01-name-01']").addClass("focus");
            }
        }
    });
    $("#last-name-checkout").on("focusout", function(e) {
        if ($("#name-guest-checkout").val() == "" || !$("#name-guest-checkout").length || !$("#name-guest-checkout").is(":visible")) {
            var nameGuestCheckout = $("#name-checkout").val();
            var lastNameGuestCheckout = $(this).val();
            if ($("#room-01-name-01").length > 0) {
                $("#room-01-name-01").val(nameGuestCheckout + " " + lastNameGuestCheckout).prop("disabled", true);
                $("label[for='room-01-name-01']").addClass("focus");
            }
        }
    });
});

function updateOwlHeigth(tab) {
    var heightResultItem = $(tab).closest(".result-item").outerHeight() || $(tab).find(".result-item").outerHeight();
    if (heightResultItem) {
        $(tab).closest(".owl-stage-outer").css("height", heightResultItem);
    }
}

function initOwlCarousel(contID, fn) {
    console.log("init initOwlCarousel", contID);
    anchoVentana = $(window).width();
    elementos = $(contID + " .result-item").length;
    $(contID + " div-stage").css("width", anchoVentana * elementos);
    $(contID + " div.owl-item").css("width", anchoVentana - 60);
    curOwl = $(contID + " .owl-room-booking");
    setTimeout(function() {
        curOwl.owlCarousel({
            responsive: false,
            addClassActive: true,
            thumbs: false,
            stagePadding: 30,
            autoHeight: true,
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            items: 1,
            dragThreshold: 100,
            onTranslated: function() {
                var posCarousel = curOwl.offset().top;
                $("html,body").animate({
                    scrollTop: posCarousel - 150,
                    useTranslate3d: true
                }, 500);
            },
            onChanged: callback
        });
    }, 100);
    curOwl.on("dragged.owl.carousel", function(event) {});
    if (typeof fn == "function") {
        fn(curOwl);
    }
}

function callback(event) {
    alert("chan");
}

function changeOrientationSlides() {
    $(".packages .owl-stage-outer.owl-height").css("min-height", 1e3);
    $(".result-item .js-square").css("max-height", 40);
}

window.addEventListener("orientationchange", changeOrientationSlides, false);

$(document).ready(function() {
    function validatePwd(campo) {
        var pwError = $(".pw-feedback");
        var pw = $(campo).val();
        var _RegExp = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])|(?=.*[a-z])(?=.*[0-9])(?=.*[^\w\s])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])).{8,}$/;
        if (pw.match(_RegExp)) {
            pwError.addClass("hide");
        } else {
            event.preventDefault();
            pwError.removeClass("hide");
        }
    }
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = d.getFullYear() + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
    $("#arrival-date").each(function() {
        $(this).attr({
            min: output
        });
    });
    $(".js-toggle-new-search").collapse({
        toggle: false
    }).on("click", function() {
        var $this = $(this);
        var target = $this.data("target");
        var toggleButton = $(".js-button-modify-search");
        $(target).collapse("show");
        $(toggleButton).html(toggleButton.data("close-search"));
    });
    $("#js-new-search").on("show.bs.collapse", function() {
        var toggleButton = $(".js-button-modify-search");
        $(".js-button-modify-search").text(toggleButton.data("close-search"));
    }).on("hide.bs.collapse", function() {
        var toggleButton = $(".js-button-modify-search");
        $(".js-button-modify-search").text(toggleButton.data("modify-search"));
    });
    var actualScroll = 0;
    $("#js-bottom-window-full").click(function() {
        actualScroll = $(window).scrollTop();
    });
    $(".js-calendar-select-day-cta").on("click", function() {
        setTimeout(function() {
            $(window).scrollTop(actualScroll);
        });
    });
});

$(document).ready(function() {
    if ($("#navigation-hotel").length > 0) {
        document.getElementById("navigation-hotel").onchange = function() {
            var selectedOption = this.value;
            if (selectedOption == "hotelpage-overview") {
                window.location.href = selectedOption;
            } else {
                window.location.href = selectedOption + "#navigation-reference";
            }
        };
    }
    var eventosMapa = {
        click: function() {
            var placetoGo = $("#btnArrive").offset().top;
            $("html,body").animate({}, 1e3);
            $("#bottom-affix").show();
        }
    };
    $(".btnArrive").click(function() {
        $("#bottom-affix").hide();
    });
    calcularImagenOrientacion();
    $("#bottom-affix").hide();
    if ($("#bottom-affix").length > 0) {
        var elemento = $("#bottom-affix");
        var posicionAffixBottom = elemento.position();
        var altoVentana = $(window).height();
        var altoPosicionar = 400;
        var altoFinal = altoPosicionar - altoVentana;
        var scroll = $(window).scrollTop();
        if (scroll > altoPosicionar) {
            $("#bottom-affix").show();
        } else {
            $("#bottom-affix").hide();
        }
    }
    $("#nav-gallery").owlCarousel({
        lazyLoad: true,
        thumbs: false,
        center: true,
        stagePadding: 15,
        items: 3,
        loop: true,
        margin: 1,
        onTranslated: getGallery,
        setHash: true,
        responsive: {
            480: {
                items: 3
            },
            600: {
                items: 3
            }
        }
    });
    $(".tab-section-owl").owlCarousel({
        lazyLoad: true,
        thumbs: false,
        center: true,
        stagePadding: 15,
        items: 3,
        loop: true,
        margin: 1,
        onTranslated: getGallery,
        setHash: true,
        responsive: {
            480: {
                items: 3
            },
            600: {
                items: 3
            }
        }
    });
    $("#slider-gallery-1").owlCarousel({
        thumbs: true,
        center: true,
        nav: true,
        items: 1,
        loop: true,
        margin: 2,
        autoHeight: false,
        responsive: {
            600: {
                items: 1
            }
        }
    });
    $(".owl-icons").owlCarousel({
        thumbs: false,
        center: false,
        stagePadding: 30,
        items: 4,
        loop: false,
        margin: 10,
        responsive: {
            600: {
                items: 4
            }
        }
    });
    var owl = $("#nav-gallery");
    $("#nav-gallery button").mousedown(function() {
        $(".modal-fullscreen.full.fixed").addClass("activo");
        var posicion = $(this).attr("data-position");
        owl.trigger("to.owl.carousel", [ posicion - 1, 300 ]);
        var galleryLoad = "#slider-gallery-" + posicion;
        loadGallery();
        setTimeout(function() {
            $(galleryLoad).owlCarousel({
                thumbs: true,
                lazyLoad: true,
                center: true,
                nav: true,
                items: 1,
                loop: true,
                margin: 2,
                autoHeight: false,
                responsive: {
                    600: {
                        items: 1
                    }
                }
            });
        }, 10);
    });
});

function loadGallery() {
    $(".load-layer").show();
    $(".load-layer").fadeIn(1);
    setTimeout(function() {
        $(".load-layer").fadeOut(500);
        $(".load-layer").hide();
    }, 500);
}

function getGallery() {
    $("#nav-gallery .active.center button").trigger("click");
}

$(window).on("load", function() {
    var addHash = window.location.hash || 1;
    var position = $('[data-id-show="#slider-gallery-' + addHash + '"]').attr("data-position");
    if (position) {
        $("#nav-gallery").trigger("to.owl.carousel", [ position - 1, 300 ]);
    }
});

function getGallery() {
    $(".tab-section-owl .active.center button").trigger("click");
}

$(window).on("load", function() {
    var addHash = window.location.hash || 1;
    var position = $('[data-id-show="#slider-gallery-' + addHash + '"]').attr("data-position");
    if (position) {
        $(".tab-section-owl").trigger("to.owl.carousel", [ position - 1, 300 ]);
    }
});

if ($("#bottom-affix").length > 0) {
    var elemento = $("#bottom-affix");
    var posicionAffixBottom = elemento.position();
    var altoPosicionar = 200;
    var altoVentana = $(window).height();
    var altoFinal = altoPosicionar - altoVentana;
}

$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if ($("#bottom-affix").length > 0) {
        setTimeout(function() {
            if (scroll > altoPosicionar) {
                if ($("#bottom-affix:hidden")) {
                    $("#bottom-affix").fadeIn(100);
                }
            }
            if (scroll < altoPosicionar) {
                if ($("#bottom-affix:visible")) {
                    $("#bottom-affix").fadeOut(100);
                }
            }
        }, 200);
    }
});

function changeOrientationHotels() {
    setTimeout(function() {
        calcularImagenOrientacion();
    }, 500);
}

window.addEventListener("orientationchange", changeOrientationHotels, false);

function inizializarSlides() {}

function calcularImagenOrientacion() {
    var anchoVentana = $(window).width();
    var desfase = 105;
    var altoImgGallery = $(window).height();
}

$(document).ready(function() {
    $("#visitForm").modal({
        show: "true"
    });
    $("#editInfo").click(function() {
        valorNameInitial = $("#nameHolder").text();
        valorMailInitial = $("#mailHolder").val();
        valorPhoneInitial = $("#telHolder").text();
        valorName = $("#name").val();
        valorMail = $("#email").val();
        valorPhone = $("#tel").val();
        if (valorName == null || valorName == "") {
            $("#nameHolder").text(valorNameInitial);
        } else {
            $("#nameHolder").text(valorName);
        }
        if (valorMail == null || valorMail == "") {
            $("#emailHolder").text(valorMailInitial);
        } else {
            $("#emailHolder").text(valorMail);
        }
        if (valorPhone == null || valorPhone == "") {
            $("#telHolder").text(valorPhoneInitial);
        } else {
            $("#telHolder").text(valorPhone);
        }
    });
    $(".upsellingError").hide();
    $('#js-several-check input[type="checkbox"]').click(function() {
        valor = $('#js-several-check input[type="checkbox"]').length;
        $('#js-several-check input[type="checkbox"]').each(function() {
            if ($(this).is(":checked")) {
                valor = valor + 1;
            } else {
                valor = valor - 1;
            }
        });
        if (valor == 0) {
            $("html,body").animate({
                scrollTop: $(this).closest("#js-several-check").offset().top - 150,
                useTranslate3d: true
            }, 500);
            $("#some-room-checked").val("");
            $("#text-info-error").show();
        } else {
            $("#some-room-checked").val("Y");
            $("#text-info-error").hide();
        }
    });
    $(".js-check-rooms").on("click", function() {
        if ($("#some-room-checked").val() != "Y") {
            console.log("scroll!");
            $("html,body").animate({
                scrollTop: $(this).closest("form").find("#js-several-check").offset().top - 150,
                useTranslate3d: true
            }, 500);
        }
    });
    $(".js-input-clear").click(function() {
        $(this).prev("input").val("");
        $(this).prev("textarea").val("");
    });
    $(".js-cancelation-cost").change(function() {
        var cost = parseFloat($(this).attr("data-cost"));
        var curCost = parseFloat($(".js-total-cancelation-cost").attr("data-cost"));
        var newCost = 0;
        if ($(this).is(":checked")) {
            newCost = curCost + cost;
        } else {
            newCost = curCost - cost;
        }
        var vatPercent = parseFloat($(".js-vat-cancelation-cost").attr("data-vat-percent"));
        var vatCost = newCost * vatPercent / 100;
        $(".js-total-cancelation-cost").attr("data-cost", newCost).html((newCost + vatCost).toFixed(2));
        $(".js-vat-cancelation-cost").html(vatCost.toFixed(2));
    });
    $(window).scroll(function(event) {});
    window.onresize = function(event) {};
    function changeOrientationHotels() {}
    window.addEventListener("orientationchange", changeOrientationHotels, false);
    $("#js-cancelation-reason li").click(function() {
        if ($(this).hasClass("js-last")) {
            $("#comments").attr("required", "required").attr("placeholder", "Comments*");
            $("input,select,textarea").jqBootstrapValidation("destroy");
            init_validation();
        } else {
            $("#comments").removeAttr("required", "required").attr("placeholder", "Comments");
            $("#comments").removeData("validationRequiredMessage");
            $("input,select,textarea").jqBootstrapValidation("destroy");
            init_validation();
        }
    });
});

$(document).ready(function() {
    $("#select-country").change(function() {
        var selectedOption = this.value;
        $("#select-city").show();
    });
    $("#select-city").change(function() {
        var selectedOption = this.value;
        $("#select-hotel").show();
    });
    function changeOrientationPromos() {}
    window.addEventListener("orientationchange", changeOrientationPromos, false);
});

$(document).ready(function() {
    var owl_benefits = $(".owl-public-benefits");
    if (owl_benefits.hasClass("owl-public-benefits-rewards")) {
        _stagePadding = 35;
        _dots = true;
        _onTranslated = function() {
            var posCarousel = owl_benefits.offset().top;
            var headerH = $(".header-rewards").outerHeight(true);
            $("html,body").animate({
                scrollTop: posCarousel - headerH,
                useTranslate3d: true
            }, 500);
        };
    } else {
        _stagePadding = 10;
        _dots = false;
        _onTranslated = "";
    }
    var owl_pub_benefits_Settings = {
        responsive: false,
        thumbs: false,
        stagePadding: _stagePadding,
        autoHeight: true,
        loop: false,
        margin: 10,
        nav: false,
        dots: _dots,
        autoplayHoverPause: false,
        dragThreshold: 100,
        onTranslated: _onTranslated,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    };
    owl_benefits.owlCarousel(owl_pub_benefits_Settings);
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        other: function() {
            return !isMobile.Android() && !isMobile.iOS() && !isMobile.Windows();
        }
    };
    if (isMobile.Android()) {
        $(".type-device").addClass("android-phone");
    }
    if (isMobile.iOS()) {
        $(".type-device").addClass("ios-phone");
    }
    if (isMobile.Windows()) {
        $(".type-device").addClass("windows-phone");
    }
    if (isMobile.other()) {
        $(".type-device").addClass("other-phone");
    }
});

$(function() {
    function addThousandsSeparator(x) {
        retVal = x ? parseFloat(x.replace(/,/g, "")) : 0;
        return retVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    function addThousandsSeparator(x) {
        retVal = x ? parseFloat(x.replace(/,/g, "")) : 0;
        return retVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});

function callback(event) {}

function transferPoints() {
    var maxPoints;
    var totalPoints;
    var maxPointsId;
    var totalPointsId;
    $(".js-transfer-points").each(function() {
        maxPoints = parseInt($(this).attr("max"));
        totalPoints = parseInt($(this).attr("data-total-points"));
        maxPointsId = $(this).attr("data-max-points-id");
        totalPointsId = $(this).attr("data-total-points-id");
        if (maxPointsId && totalPointsId) {
            $(maxPointsId).html(maxPoints);
            $(totalPointsId).html(totalPoints);
        }
        $(this).on("keyup", function() {
            if ($(this).val()) {
                var leftPoints = maxPoints - parseInt($(this).val());
                $(maxPointsId).html(leftPoints);
            } else {
                $(maxPointsId).html(maxPoints);
            }
        });
    });
}

if ($(".js-transfer-points").length) {
    transferPoints();
}

var clicado = false;

function initMap(container, locations) {
    mapholder = document.getElementById(container);
    if (!mapholder) {
        return;
    }
    mapholder.style.height = "350px";
    mapholder.style.width = "100%";
    var myOptions = {
        zoom: 11,
        center: locations[0],
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        draggable: true
    };
    var map = new google.maps.Map(mapholder, myOptions);
    return map;
}

function showMapMob(map, markers, infoWindows, clicado) {
    for (var i = 0; i < markers.length; i++) {
        google.maps.event.addListener(markers[i], "click", function(marker, i) {
            return function() {
                infoWindows[i].open(map, markers[i]);
            };
        }(markers[i], i));
    }
    if (clicado == true) {
        infoWindows[0].open(map, markers[0]);
    }
    var clicado = false;
}

function upReloadMap() {
    $("body,html").animate({
        scrollTop: 0
    }, 800);
}

function init_validation() {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
        autoAdd: {
            helpBlocks: false
        },
        filter: function() {
            return $(this).is(":visible") || $(this).hasClass("force-validation");
        }
    });
}

$(function() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        $("body").addClass("ios-device");
    }
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover({
        html: true
    });
    $(".js-input-slider").slider();
    init_validation();
    $("#ex1").slider({
        formatter: function(value) {
            return "Current value: " + value;
        }
    });
    $('input[type="text"]:not(".no-clear"),input[type="password"],input[type="email"],input[type="number"], textarea').each(function() {
        $(this).after('<button type="button" class="js-input-clear"></button>');
        $(this).next(".js-input-clear").hide();
        $(this).on("keyup", function() {
            $(this).next(".js-input-clear").show();
        });
        $(this).next(".js-input-clear").click(function() {
            $(this).prev("input").val("").focus().blur();
            $(this).prev("textarea").val("").focus().blur();
            $(this).hide();
            $(this).prev("textarea").css("height", 75);
            if ($(this).siblings(".brand-card").length) {
                $(this).closest(".form-group").find(".brand-card span").attr("class", " ");
            }
            if ($(".js-transfer-points").length) {
                transferPoints();
            }
        });
    });
    $(".box-info.button").click(function() {
        $(this).addClass("focus");
        setTimeout(function() {
            $(".box-info.button").removeClass("focus");
        }, 1e3);
    });
    $(".facebook.shares").click(function() {
        if ($(this).attr("data-link")) {
            u = $(this).attr("data-link");
        } else {
            u = location.href;
        }
        if ($(this).attr("data-title")) {
            t = $(this).attr("data-title");
        } else {
            t = document.title;
        }
        fbs_click(u, t);
    });
    $(".twitter.shares").click(function() {
        if ($(this).attr("data-link")) {
            u = $(this).attr("data-link");
        } else {
            u = location.href;
        }
        if ($(this).attr("data-title")) {
            t = $(this).attr("data-title");
        } else {
            t = document.title;
        }
        tw_click(u, t);
    });
    $(".linkedin.shares").click(function() {
        if ($(this).attr("data-link")) {
            u = $(this).attr("data-link");
        } else {
            u = location.href;
        }
        if ($(this).attr("data-title")) {
            t = $(this).attr("data-title");
        } else {
            t = document.title;
        }
        in_click(u, t);
    });
    $(".googleplus.shares").click(function() {
        if ($(this).attr("data-link")) {
            u = $(this).attr("data-link");
        } else {
            u = location.href;
        }
        if ($(this).attr("data-title")) {
            t = $(this).attr("data-title");
        } else {
            t = document.title;
        }
        gplus_click(u, t);
    });
    function fbs_click(u, t) {
        window.open("http://www.facebook.com/sharer.php?u=" + u + "&quote=" + t, "sharer", "toolbar=0,status=0,width=626,height=436");
        return false;
    }
    function tw_click(u, t) {
        window.open("http://twitter.com/intent/tweet?text=" + t + ": " + u, "sharer", "toolbar=0,status=0,width=626,height=436");
        return false;
    }
    function in_click(u, t) {
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + u + "&title=" + t, "sharer", "toolbar=0,status=0,width=626,height=436");
        return false;
    }
    function gplus_click(u, t) {
        window.open("https://plus.google.com/share?url=" + u + "&text=" + t, "sharer", "toolbar=0,status=0,width=626,height=436");
        return false;
    }
    $(".js-geolocate-me").click(function(e) {
        e.preventDefault();
        geolocateMe($(this).closest("form"));
    });
    $(".js-fake-select-options .fake-select-option").click(function() {
        var selObj = $(this).closest(".js-fake-select-options").attr("data-fake-select");
        $(selObj).val($(this).find(".option").html()).attr("data-value", $(this).attr("data-value"));
        $(this).closest(".js-fake-select-options").find(".fake-radio.active").removeClass("active");
        $(this).find(".fake-radio").addClass("active");
        $(".js-fake-select-options").modal("hide");
        $(selObj).focusin(function() {
            $(selObj).blur();
        });
    });
    if ($(".js-maps-app").length) {
        $(".js-maps-app").each(function(index) {
            var ua = navigator.userAgent.toLowerCase(), plat = navigator.platform, lat = $(this).attr("data-latitude"), lon = $(this).attr("data-longitude"), href;
            browserDevice = ua.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera/i) ? ua.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera/i)[0] : false;
            function iOSversion() {
                if (/iP(hone|od|ad)/.test(navigator.platform)) {
                    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    return [ parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10) ];
                }
            }
            if (browserDevice) {
                switch (browserDevice) {
                  case "iphone":
                  case "ipad":
                  case "ipod":
                    var ver = iOSversion() || [ 0 ];
                    if (ver[0] >= 6 && ver[0] < 9) {
                        href = "comgooglemaps://?center=" + lat + "," + lon;
                    } else {
                        href = "http://maps.google.com/maps?q=loc:" + lat + "+" + lon;
                    }
                    break;

                  case "android":
                    href = "http://maps.google.com/maps?q=loc:" + lat + "+" + lon;
                    break;

                  default:
                    href = "http://maps.google.com/maps?q=loc:" + lat + "+" + lon;
                    break;
                }
            } else {
                href = "http://maps.google.com/maps?q=loc:" + lat + "+" + lon;
            }
            $(this).attr("href", href);
        });
    }
    $owl = $(".js-mobile-owl");
    var owlFired = false;
    var carousel_Settings = {
        thumbs: false,
        loop: false,
        margin: 15,
        center: true,
        stagePadding: 30,
        dragThreshold: 100,
        responsive: {
            0: {
                items: 1,
                dots: true
            }
        }
    };
    function initializeOwl() {
        if ($(window).width() < 767) {
            if (!owlFired) {
                $owl.owlCarousel(carousel_Settings);
                owlFired = true;
            }
        } else {
            if (owlFired) {
                $owl.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
                $owl.find(".owl-stage-outer").children().unwrap();
                owlFired = false;
            }
        }
    }
    initializeOwl();
    $(".bar-graph").each(function() {
        var dataMax = $(this).attr("data-max-price");
        $(this).find(".bar-container").each(function() {
            var dataHeight = $(this).attr("data-price");
            var barHeight = dataHeight * 100 / dataMax;
            $(this).css("height", barHeight + "%");
        });
    });
    $(".js-date-input").each(function() {
        var $this = $(this);
        var date = $this.attr("value");
        if (date) {
            var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
            var d = matches[1];
            var m = matches[2];
            var y = matches[3];
            var composedDate = new Date(y, m, d);
            if (composedDate) {
                $this.val(y + "-" + m + "-" + d);
            }
        }
    });
});

function geolocateMe(obj, fn) {
    if (typeof fn === "undefined" && typeof obj === "function") {
        fn = obj;
    } else {
        formObj = obj;
    }
    if ($(".js-geolocation").length) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccessGeolocating, onErrorGeolocating, {
                enableHighAccuracy: true,
                maximumAge: 5e3,
                timeout: 1e4
            });
        } else {}
    }
    function onSuccessGeolocating(position) {
        $(".geo-lat.js-geolocation").val(position.coords.latitude);
        $(".geo-lon.js-geolocation").val(position.coords.longitude);
        $(".geo-acc.js-geolocation").val(position.coords.accuracy);
        if (fn) {
            fn(position);
        }
        if (typeof formObj !== "undefined") {
            formObj.submit();
        }
    }
    function onErrorGeolocating(error) {
        if (fn) {
            fn(error);
        }
    }
}

if ($(".js-tab-100").length) {
    var howManyTabs = $(".js-tab-100").find(".tab-content").length;
    $(".tab-content").removeClass(function(index, css) {
        return (css.match(/(^|\s)col-\S+/g) || []).join(" ");
    });
    switch (parseInt(howManyTabs)) {
      case 1:
        $(".tab-content").addClass("col-xs-12");
        break;

      case 2:
        $(".tab-content").addClass("col-xs-6");
        break;

      case 3:
        $(".tab-content").addClass("col-xs-4");
        break;
    }
}

$(document).on("click", ".options-rooms .js-reveal", function(e) {
    if ($(this).attr("data-id-show") == ".prices-no") {
        $('.js-reveal[data-id-show=".prices-no"]').addClass("active");
        $('.js-reveal[data-id-show=".prices-yes"]').removeClass("active");
    } else {
        $('.js-reveal[data-id-show=".prices-no"]').removeClass("active");
        $('.js-reveal[data-id-show=".prices-yes"]').addClass("active");
    }
});

if ($("#destination").length) {
    var destinationHash = location.hash;
    if (destinationHash !== "") {
        $(destinationHash).find(".aditional-info").slideToggle();
        $(destinationHash).find(".icon-go-link").addClass("opened");
        $("html, body").animate({
            scrollTop: $(destinationHash).offset().top - ($("header").height() + 20)
        }, 1e3);
    }
}

$(".form-control").each(function() {
    if ($(this).val()) {
        $(this).closest(".form-group").find(".control-label").addClass("focus");
    }
});

$(".form-control").bind("focus change keyup", function() {
    $(this).closest(".form-group").find(".control-label").addClass("focus");
});

$(".form-control").focusout(function() {
    if (!$(this).val()) {
        $(this).closest(".form-group").find(".control-label").removeClass("focus");
    }
});

$("select").change(function() {
    $(this).closest(".form-group").find(".control-label").addClass("focus");
});

$("select").focus(function() {
    $(this).closest(".form-group").find(".control-label").addClass("focus");
    $(this).addClass("show-select");
});

var maxShowAdded = parseInt($(this).attr("data-max-add"));

if (maxShowAdded <= 1) {
    $(this).hide();
}

$(".js-add-person").on("click", function() {
    var maxShowAdded = parseInt($(this).attr("data-max-add"));
    var count = $(this).closest(".add-remove-item").attr("data-visible");
    var visibleItems = $(this).closest(".add-remove-item").find(".js-person-added:visible").length;
    if (visibleItems == maxShowAdded - 1) {
        $(this).hide();
    }
    $(this).closest(".add-remove-item").find(".js-person-added:eq(" + count + ")").removeClass("hide");
    count++;
    $(this).closest(".add-remove-item").attr("data-visible", count);
    if ($(".js-remove-item:visible").length > 1) {
        $(".js-remove-item:visible").hide().last().show();
    }
});

$(".js-remove-item").click(function() {
    var maxShowAdded = parseInt($(this).closest(".add-remove-item").find(".js-add-person").attr("data-max-add"));
    var count = $(this).closest(".add-remove-item").attr("data-visible");
    var visibleItems = $(this).closest(".add-remove-item").find(".js-person-added:visible").length;
    console.log(maxShowAdded);
    if (visibleItems === maxShowAdded) {
        $(this).closest(".add-remove-item").find(".js-add-person").show();
    }
    $(this).closest(".js-person-added").addClass("hide");
    count--;
    $(this).closest(".add-remove-item").attr("data-visible", count);
    $(".js-person-added:visible").last().find(".js-remove-item").show();
});

$(".js-check-rewards").click(function(e) {
    e.preventDefault();
    $(".js-checkbox-rewards input").prop("checked", true);
});

$(".js-garantee-modal").click(function(e) {
    var inp = $(this).parent().find("input");
    if (inp.prop("checked") == true) {
        $("#modal-garantee-reservation").modal("show");
    }
});

$('.checkbox label[data-toggle="collapse"]').on("click", function() {
    var inp = $(this).parent().find("input");
    if (inp.is(":checked")) {
        inp.prop("checked", false);
    } else {
        inp.prop("checked", true);
    }
});

$('.checkbox label[data-toggle="modal"]').on("click", function() {
    var inp = $(this).parent().find("input");
    if (inp.prop("checked") == true) {
        inp.prop("checked", false);
    } else {
        inp.prop("checked", true);
    }
});

$(".js-modal-checked").on("click", function() {
    if ($(this).is("[data-toggle]")) {
        var labelToggle = $(this).attr("data-no-toggle");
        var labelTarget = $(this).attr("data-no-target");
        $(this).removeAttr("data-no-toggle");
        $(this).attr("data-toggle", labelToggle);
        $(this).removeAttr("data-no-target");
        $(this).attr("data-target", labelTarget);
    } else {
        if ($(this).is("[data-no-toggle]")) {
            var labelToggle = $(this).attr("data-toggle");
            var labelTarget = $(this).attr("data-target");
            $(this).removeAttr("data-toggle");
            $(this).attr("data-no-toggle", labelToggle);
            $(this).removeAttr("data-target");
            $(this).attr("data-no-target", labelTarget);
        }
    }
});

$(".js-radio-false-button").click(function() {
    $(this).find("input:checked").closest(".radio").addClass("checked");
    $(this).find("input:not(:checked)").closest(".radio").removeClass("checked");
});

$(".js-copy-input").click(function() {
    if ($(".js-copy-input").is(":checked")) {
        var valueName = $(".js-input-name").val();
        var valueLastName = $(".js-input-lastname").val();
        if (valueName != "") {
            $("input.js-copy-name").next(".js-input-clear").show();
        }
        if (valueLastName != "") {
            $("input.js-copy-lastname").next(".js-input-clear").show();
        }
        $("input.js-copy-name").val(valueName).focus().on("change", function() {
            if ($("#same-info").is(":checked")) {
                $("#same-info").prop("checked", false);
            }
        });
        $("input.js-copy-lastname").val(valueLastName).focus().on("change", function() {
            if ($("#same-info").is(":checked")) {
                $("#same-info").prop("checked", false);
            }
        });
    }
});

$(".js-validate-force-warning").submit(function() {
    if ($("#inputPassword").length > 0 && $("#inputPassword").val() !== "") {
        if ($("#inputPasswordConfirm").val().length === 0) {
            if ($("#inputPassword").val() === $("#inputPasswordConfirm").val()) {
                $(".js-validate-force-warning").removeClass("force-warning");
            } else {
                $(".js-validate-force-warning").addClass("force-warning");
            }
        }
    }
});

$(".js-update-filter select").trigger("change");

$(".js-update-filter select").on("change", function() {
    var filtersCheckbox = $(this).find(":selected").attr("data-filters");
    if (filtersCheckbox) {
        $(this).closest("fieldset").find(".js-filter-options").show(), $(this).closest("fieldset").find(".js-filter-description").show();
        var filtersArray = filtersCheckbox.split(",");
        $('.js-filter-options input[type="checkbox"]').closest(".form-validate").parent().addClass("hidden"), 
        $.each(filtersArray, function(index, value) {
            $('.js-filter-options input[type="checkbox"]').eq(parseInt(value)).closest(".form-validate").parent().removeClass("hidden");
        });
    } else $(this).closest("fieldset").find(".js-filter-options").hide(), $(this).closest("fieldset").find(".js-filter-description").hide();
});

$(function() {
    $("a.goMenu").click(function() {
        $(".wrapper-page").toggleClass("active");
        $(".mainNav").toggleClass("active");
        $(".botCheckAvailability").toggleClass("active");
        $("#destinationListSearch").css("display", "none");
    });
    var windowHeight = $(window).outerHeight();
    $("#mainNav").css("height", windowHeight);
});

$(function() {
    if (windowWidth >= smBreak) {
        $(".selectpicker").selectpicker();
    }
    $(".dropdown-toggle").dropdown();
    $(".js-sm-scrollTop").click(function(e) {
        var margin = $("header").outerHeight() + 20;
        if (windowWidth < smBreak) {
            $("html,body").animate({
                scrollTop: $(this).offset().top - margin
            }, 500);
        }
    });
    $(".js-scrollTop-inputs input").click(function(e) {
        var margin = $("header").outerHeight() + 20;
        if (windowWidth < smBreak) {
            $("html,body").animate({
                scrollTop: $(this).offset().top - margin
            }, 500);
        }
    });
    $(".js-jumptext").each(function(i) {
        var jmpOne = $(".js-jmp-one"), jmpTwo = $(".js-jmp-two");
        if ($(".js-jmp-two a").width() < jmpTwo.width()) {
            jmpOne.removeClass("col-xs-12");
            jmpTwo.removeClass("col-xs-12");
            jmpOne.addClass("col-xs-3");
            jmpTwo.addClass("col-xs-9");
        } else {
            jmpOne.removeClass("col-xs-3");
            jmpTwo.removeClass("col-xs-9");
            jmpOne.addClass("col-xs-12");
            jmpTwo.addClass("col-xs-12");
        }
    });
    var $postgroup;
    $(".btn-load-post").click(function(e) {
        if (e && $(this).attr("href") === "#") {
            e.preventDefault();
        }
        if ($(this).hasClass("disable")) return false;
        if ($(this).attr("data-target")) {
            $postgroup = $($(this).attr("data-target")).find(".post-group");
        } else {
            $postgroup = $(".post-group");
        }
        var $hidden = $postgroup.filter(":hidden:first").addClass("active");
    });
    if ($("#map-results").length) {
        mapGooglePOI();
    }
});

$("#telephone").keypress(function() {
    return validarn(event);
});

function mapGooglePOI() {
    var locations = [];
    var markers = [];
    var infoWindows = [];
    var latitude = 40.322038;
    var longitude = -3.865045;
    locations[0] = new google.maps.LatLng(latitude, longitude);
    locations[1] = new google.maps.LatLng(40.3233764, -3.845045);
    locations[2] = new google.maps.LatLng(40.3453764, -3.905045);
    locations[3] = new google.maps.LatLng(40.3903764, -3.86506);
    locations[4] = new google.maps.LatLng(40.3263764, -3.868645);
    locations[5] = new google.maps.LatLng(40.3103764, -3.862345);
    locations[6] = new google.maps.LatLng(40.3693764, -3.86509);
    locations[7] = new google.maps.LatLng(40.3723764, -3.565045);
    locations[8] = new google.maps.LatLng(40.1723764, -3.905045);
    locations[9] = new google.maps.LatLng(40.2223764, -3.675045);
    map = initMap("googleMapHotel", locations);
    markers[0] = new google.maps.Marker({
        position: locations[0],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/copas_1.png"
    });
    markers[1] = new google.maps.Marker({
        position: locations[1],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/copas_2.png"
    });
    markers[2] = new google.maps.Marker({
        position: locations[2],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/cultura_1.png"
    });
    markers[3] = new google.maps.Marker({
        position: locations[3],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/cultura_2.png"
    });
    markers[4] = new google.maps.Marker({
        position: locations[4],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/deportes_1.png"
    });
    markers[5] = new google.maps.Marker({
        position: locations[5],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/deportes_2.png"
    });
    markers[6] = new google.maps.Marker({
        position: locations[6],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/ocio_1.png"
    });
    markers[7] = new google.maps.Marker({
        position: locations[7],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/ocio_2.png"
    });
    markers[8] = new google.maps.Marker({
        position: locations[8],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/otros_1.png"
    });
    markers[9] = new google.maps.Marker({
        position: locations[9],
        animation: google.maps.Animation.DROP,
        map: map,
        icon: "system/img/pines/otros_2.png"
    });
    infoWindows[0] = new google.maps.InfoWindow({
        content: '<div class="infoSite new-pin clearfix"><div class="img-info-hotel pull-left"><img src="system/img//img/thumbInfoWindow.jpg" alt="" class=""></div><div class="pull-left info-hotel-detail"><img src="system/img/img/logo-rewards.png"><p class="name-hotel">Museo del Prado</p><span class="rating"><span class="icon-star small"></span><span class="icon-star small"></span><span class="icon-star small"></span><span class="icon-star small"></span><span class="icon-star small"></span></span><div class="clearfix night-price"><span class="pull-left">from</span><span class="pull-right">159.25<sup>EUR</sup></span></div><div class="total-price"><span class="pull-left">PRICE / TOTAL</span><span class="pull-right">477.75<sup>EUR</sup></span></div><div class=""><a class="btn btn-primary" href="">Reservar</a></div> </div></div>',
        maxWidth: 415
    });
    infoWindows[1] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[2] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[3] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[4] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[5] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[6] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[7] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[8] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    infoWindows[9] = new google.maps.InfoWindow({
        content: '<div class="infoSite"><img src="system/img/img/thumbInfoWindow.jpg" alt="" class="imgThumb"><b>Museo del Prado</b><br /><span class="distance">a 2 km</span><br />Es uno de os mÃ¡s importantes del mundo, asÃ­ como uno de los mÃ¡s visitados.</div>',
        maxWidth: 520
    });
    function stylingInfoWindow() {
        var iSite = $(document).find(".infoSite");
        if (iSite.hasClass("new-pin")) {
            $(".infoSite.new-pin").parents(".gm-style-iw").addClass("customized").parent().addClass("gm-box");
            $(".infoSite.new-pin").parents(".gm-style-iw").prev().addClass("gm-prev").hide();
            $(".infoSite.new-pin").parents(".gm-style-iw").next().addClass("gm-next").css({
                top: 20,
                right: 15,
                width: 15,
                height: 15,
                border: "1px solid #ccc"
            });
        }
    }
    showMapMob(map, markers, infoWindows);
    google.maps.event.addListener(markers[0], "click", stylingInfoWindow);
    google.maps.event.addListener(infoWindows[0], "closeclick", function() {
        $(".gm-style-iw").removeClass("customized").parent().removeClass("gm-box");
        $(".gm-style-iw").prev().removeClass("gm-prev").show();
        $(".gm-style-iw").next().removeClass("gm-next").css({
            top: 10,
            right: 12,
            width: 13,
            height: 13,
            border: 0
        });
    });
}

$(function() {
    $("#map").on("show.bs.modal", function(e) {
        mapGooglePOI();
    });
});

function bodyModalAdjust(ev) {
    var modal = $(this), dialog = modal.find(".modal-dialog");
    if (!ev || !ev.data) {
        ev = {
            data: {
                windowScroll: null
            }
        };
    }
    var $modalContent = modal.find(".modal-content");
    dialog.addClass("prevent-show");
    ev.data.windowScroll = $(window).scrollTop();
    $("body").css({
        position: "fixed",
        "margin-top": ev.data.windowScroll * -1
    });
}

var eventData = {
    windowScroll: null
};

$(".modal").on("show.bs.modal", eventData, bodyModalAdjust);

$(".modal").on("shown.bs.modal", function() {
    var $this = $(this);
    var $modalContent = $this.find(".modal-content");
    var $modalContentParent = $modalContent.parent(".modal-dialog");
    setTimeout(function() {
        $modalContentParent.removeClass("prevent-show");
    }, 100);
});

$(".modal").on("hidden.bs.modal", eventData, function _handleHideModal(ev) {
    $("body").css({
        position: "static",
        "margin-top": 0
    });
    $(window).scrollTop(ev.data.windowScroll);
});

$(window).on("resize", function() {
    $(".modal.in").each(bodyModalAdjust);
});

eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [ function(e) {
            return r[e];
        } ];
        e = function() {
            return "\\w+";
        };
        c = 1;
    }
    while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
}("q.5=x(k,d,a){4(m d!='H'){a=a||{};4(d===p){d='';a=$.A({},a);a.3=-1}2 g='';4(a.3&&(m a.3=='u'||a.3.s)){2 f;4(m a.3=='u'){f=F C();f.B(f.z()+(a.3*y*o*o*v))}n{f=a.3}g='; 3='+f.s()}2 b=a.7?'; 7='+(a.7):'';2 e=a.9?'; 9='+(a.9):'';2 l=a.t?'; t':'';6.5=[k,'=',L(d),g,b,e,l].K('')}n{2 h=p;4(6.5&&6.5!=''){2 c=6.5.E(';');D(2 i=0;i<c.8;i++){2 j=q.G(c[i]);4(j.r(0,k.8+1)==(k+'=')){h=I(j.r(k.8+1));J}}}w h}};", 48, 48, "||var|expires|if|cookie|document|path|length|domain|||||||||||||typeof|else|60|null|jQuery|substring|toUTCString|secure|number|1000|return|function|24|getTime|extend|setTime|Date|for|split|new|trim|undefined|decodeURIComponent|break|join|encodeURIComponent".split("|"), 0, {}));

function jsonPath(obj, expr, arg) {
    var P = {
        resultType: arg && arg.resultType || "VALUE",
        result: [],
        normalize: function(expr) {
            var subx = [];
            return expr.replace(/[\['](\??\(.*?\))[\]']/g, function($0, $1) {
                return "[#" + (subx.push($1) - 1) + "]";
            }).replace(/'?\.'?|\['?/g, ";").replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, "").replace(/#([0-9]+)/g, function($0, $1) {
                return subx[$1];
            });
        },
        asPath: function(path) {
            var x = path.split(";"), p = "$";
            for (var i = 1, n = x.length; i < n; i++) p += /^[0-9*]+$/.test(x[i]) ? "[" + x[i] + "]" : "['" + x[i] + "']";
            return p;
        },
        store: function(p, v) {
            if (p) P.result[P.result.length] = P.resultType == "PATH" ? P.asPath(p) : v;
            return !!p;
        },
        trace: function(expr, val, path) {
            if (expr) {
                var x = expr.split(";"), loc = x.shift();
                x = x.join(";");
                if (val && val.hasOwnProperty(loc)) P.trace(x, val[loc], path + ";" + loc); else if (loc === "*") P.walk(loc, x, val, path, function(m, l, x, v, p) {
                    P.trace(m + ";" + x, v, p);
                }); else if (loc === "..") {
                    P.trace(x, val, path);
                    P.walk(loc, x, val, path, function(m, l, x, v, p) {
                        typeof v[m] === "object" && P.trace("..;" + x, v[m], p + ";" + m);
                    });
                } else if (/,/.test(loc)) {
                    for (var s = loc.split(/'?,'?/), i = 0, n = s.length; i < n; i++) P.trace(s[i] + ";" + x, val, path);
                } else if (/^\(.*?\)$/.test(loc)) P.trace(P.eval(loc, val, path.substr(path.lastIndexOf(";") + 1)) + ";" + x, val, path); else if (/^\?\(.*?\)$/.test(loc)) P.walk(loc, x, val, path, function(m, l, x, v, p) {
                    if (P.eval(l.replace(/^\?\((.*?)\)$/, "$1"), v[m], m)) P.trace(m + ";" + x, v, p);
                }); else if (/^(-?[0-9]*):(-?[0-9]*):?([0-9]*)$/.test(loc)) P.slice(loc, x, val, path);
            } else P.store(path, val);
        },
        walk: function(loc, expr, val, path, f) {
            if (val instanceof Array) {
                for (var i = 0, n = val.length; i < n; i++) if (i in val) f(i, loc, expr, val, path);
            } else if (typeof val === "object") {
                for (var m in val) if (val.hasOwnProperty(m)) f(m, loc, expr, val, path);
            }
        },
        slice: function(loc, expr, val, path) {
            if (val instanceof Array) {
                var len = val.length, start = 0, end = len, step = 1;
                loc.replace(/^(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)$/g, function($0, $1, $2, $3) {
                    start = parseInt($1 || start);
                    end = parseInt($2 || end);
                    step = parseInt($3 || step);
                });
                start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
                end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
                for (var i = start; i < end; i += step) P.trace(i + ";" + expr, val, path);
            }
        },
        eval: function(x, _v, _vname) {
            try {
                return $ && _v && eval(x.replace(/@/g, "_v"));
            } catch (e) {
                throw new SyntaxError("jsonPath: " + e.message + ": " + x.replace(/@/g, "_v").replace(/\^/g, "_a"));
            }
        }
    };
    var $ = obj;
    if (expr && obj && (P.resultType == "VALUE" || P.resultType == "PATH")) {
        P.trace(P.normalize(expr).replace(/^\$;/, ""), obj, "$");
        return P.result.length ? P.result : false;
    }
}

var Utils = function() {
    var init = function() {
        $(".loading").fadeOut(500);
        if (typeof java_error != "undefined" && $("#java-error").length > 0 && java_error == "true") {
            console.log("JAVA ERROR: ", java_error);
            $("#java-error").trigger("click");
        }
        validationsForm();
        modalBootstrap();
        callLoadingBtn();
        backButton();
        shareByEmail();
        bannerAppCookie();
        gdprcheckvalue();
        gdprPageWithAnchor();
        $("#languajes").on("change", function() {
            var ruta = $(this).find("option:selected").data("href");
            if (ruta != "") {
                $(location).attr("href", ruta);
            }
        });
        if ($("body").hasClass("purchase-room-display")) {
            $("#js-button-canvas").show();
        }
    };
    var fillFormFields = function(fields, container) {
        var container = container || "body";
        if (typeof fields === "object") {
            $.each(fields, function(selector, value) {
                var element = $(container).length > 0 ? $(container).find(selector) : selector;
                if ($(element).length > 0 && typeof value != "undefined" && value != null) {
                    $(element).val(value);
                    $(element).not(":input").text(value);
                }
            });
        }
    };
    var getGeoIpData = function(fn) {
        var result = null;
        if (typeof geoIpData != "undefined") {
            if (!geoIpData.country) {
                $.ajax({
                    url: "/getUserDataGEOIP",
                    dataType: "json",
                    cache: false,
                    async: false
                }).done(function(data) {
                    if (typeof data != "undefined" && data) {
                        geoIpData.country = data["countryCode"];
                        geoIpData.continent = data["continent"];
                    }
                }).fail(function(data) {});
            }
            result = geoIpData;
        } else {
            console.log("[getGeoIpData] : No existe el objeto geoIpData");
        }
        if (typeof fn === "function") {
            fn(result);
        }
    };
    var getURLParameter = function(name, url) {
        var urlT = url ? url : window.location.href;
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(urlT);
        if (results == null) {
            return null;
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };
    function getDiffDays(date1, date2) {
        var adate1 = date1.split("/");
        var adate2 = date2.split("/");
        var sdate1 = Date.UTC(adate1[2], adate1[1] - 1, adate1[0]);
        var sdate2 = Date.UTC(adate2[2], adate2[1] - 1, adate2[0]);
        var diff = sdate2 - sdate1;
        var diffDates = Math.floor(diff / (1e3 * 60 * 60 * 24));
        return diffDates;
    }
    function dateToday() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        var today = dd + "/" + mm + "/" + yyyy;
        return today;
    }
    var validationsForm = function() {
        $("input,textarea,select,button").not("[type=submit]").jqBootstrapValidation("destroy");
        $("input,select,textarea,button").not("[type=submit]").jqBootstrapValidation({
            autoAdd: {
                helpBlocks: !1
            },
            submitError: function($form, event, errors) {
                if ($form.find("div.has-error").length) {
                    moveToOffset = $form.find("div.has-error").eq(0).offset().top - 90 || 0;
                    $("html, body").animate({
                        scrollTop: moveToOffset,
                        useTranslate3d: true
                    }, 700);
                }
            },
            submitSuccess: function($form, event) {
                var button = $($form).find("[type=submit]");
                button.prop("disabled", true);
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var modalBootstrap = function() {
        $('[data-target="#modal-default"]').on("click", function(e) {
            e.preventDefault();
            var $this = $(this);
            var ruta = $this.attr("href");
            var target = $this.data("target");
            if (target) {
                var close_button_content = $(target).find(".modal-header").length != 0 ? $(target).find(".modal-header") : $(target).find(".modal-body");
                if (ruta) {
                    $(target).find(".modal-content").load(ruta, function() {
                        console.log("content loaded!");
                        $(target).show();
                    });
                } else {
                    $(target).show();
                }
            }
        });
        $('[data-target="#modal-iframe"]').on("click", function(e) {
            e.preventDefault();
            var $this = $(this);
            var ruta = $this.attr("href");
            var target = $this.data("target");
            if (target) {
                $(target).find("iframe").attr("src", ruta);
                $(target).show();
            }
        });
    };
    $('[data-target="#modal-GDPR-more-info"]').on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        var ruta = $this.attr("href");
        var target = $this.data("target");
        if (target) {
            var close_button_content = $(target).find(".modal-header").length != 0 ? $(target).find(".modal-header") : $(target).find(".modal-body");
            if (ruta) {
                $(target).find(".modal-content").load(ruta, function() {
                    console.log("content loaded!");
                    $(target).show();
                });
            } else {
                $(target).show();
            }
        }
    });
    var callLoadingBtn = function() {
        $(document).on("click", ".js-call-loading-ey", function() {
            $(".loading").fadeIn(500, function() {
                $("body").css({
                    position: "fixed"
                });
                if (typeof $currentScrollPos != "undefined") {
                    localStorage.cachedScrollPos = $currentScrollPos;
                }
            });
        });
    };
    var backButton = function() {
        $(document).on("click", ".js-back", function(e) {
            e.preventDefault();
            var $this = $(this);
            var referrer = document.referrer;
            var urlResult = referrer;
            var param = $this.data("param") ? $this.data("param") : "";
            if (referrer) {
                if (param) {
                    urlResult = referrer.match(/\?/g) ? referrer + "&" + param : referrer + "?" + param;
                }
                window.location = urlResult;
            }
        });
    };
    var shareByEmail = function() {
        $("#shareMailForm").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "blur", "change" ],
            autoAdd: {
                helpBlocks: false
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                var button = $($form).find("[type=submit]");
                var emailVal = $("#email").val();
                if (emailVal) {
                    button.prop("disabled", true);
                    var subjectText = encodeURIComponent(document.title);
                    window.location = "mailto:" + $("#email").val() + "?body=" + window.location.href + "&subject= " + subjectText;
                    $("#mail-share").modal("hide");
                    button.prop("disabled", false);
                }
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var bannerAppCookie = function() {
        var cookieName = "banner_app_cookie";
        var cookieValue = "true";
        $(document).on("click", ".block-app button.close", function() {
            var cookie = $.cookie(cookieName, cookieValue, {
                expires: 365,
                path: "/"
            });
        });
        if ($.cookie(cookieName) === null || $.cookie(cookieName) === "") {
            $(".block-app").show();
        }
    };
    var gdprcheckvalue = function() {
        if ($(".js-gdpr-check").find("input").is(":checked")) {
            $(".js-gdpr-check").find("input").val("S");
        } else {
            $(".js-gdpr-check").find("input").val("N");
        }
        $(".js-gdpr-check").on("change", function() {
            var $this = $(this);
            if ($(".js-gdpr-check").hasClass("has-success")) {
                $this.find("input").val("S");
            } else {
                $this.find("input").val("N");
            }
        });
    };
    var gdprPageWithAnchor = function() {
        $(".js-gdpr-anchor-page").each(function() {
            var linkHref = $(this).find("a").attr("href");
            var anchor = $(this).data("page-anchor");
            var finalLink = linkHref + "#" + anchor;
            $(this).find("a").attr("href", finalLink);
        });
    };
    return {
        init: init,
        fillFormFields: fillFormFields,
        getGeoIpData: getGeoIpData,
        getURLParameter: getURLParameter,
        getDiffDays: getDiffDays,
        dateToday: dateToday,
        gdprcheckvalue: gdprcheckvalue,
        gdprPageWithAnchor: gdprPageWithAnchor
    };
}();

var CheckboxTarget = function() {
    var init = function(element) {
        $("[data-checkbox-target]").on("change", function() {
            doMagic(this);
        });
    };
    var doMagic = function(element) {
        if (element && $(element).length > 0) {
            var $this = $(element);
            var isChecked = $this.is(":checked");
            var target = $this.data("checkbox-target") || "";
            var checkedData = $this.data("checkbox-checked") || "";
            var uncheckedData = $this.data("checkbox-unchecked") || "";
            if (target && $(target).length > 0) {
                var $target = $(target);
                if (isChecked && checkedData) {
                    $.each(checkedData, function(property, status) {
                        fireProperty(property, status, $target);
                    });
                } else if (!isChecked && uncheckedData) {
                    $.each(uncheckedData, function(property, status) {
                        fireProperty(property, status, $target);
                    });
                }
                if ($target.data("checkbox-target") && $this.attr("id") != $target.attr("id")) {
                    $target.change();
                }
            }
        }
    };
    var fireProperty = function(property, status, $target) {
        if (property == "display") {
            status = status == "true" ? "block" : "none";
            $target.css(property, status);
            if (status == "block") {
                $target.removeClass("hide");
            } else if (status == "none") {
                if ($target.find('[data-toggle="collapse"]')) {
                    var toTrigger = $target.find('[data-toggle="collapse"]');
                    var targetToTrigger = toTrigger.data("target");
                    if ($(targetToTrigger).hasClass("in")) {
                        toTrigger.trigger("click");
                    }
                }
            }
        } else {
            status = status == "true" || status == "false" ? $.parseJSON(status) : status;
            $target.prop(property, status);
        }
    };
    return {
        init: init
    };
}();

$(function() {
    Utils.init();
    CheckboxTarget.init();
});

if (device.ios()) {
    window.addEventListener("pagehide", function() {
        setTimeout(function() {
            window.location.reload();
        });
    }, false);
    $(window).on("unload", function() {
        setTimeout(function() {
            window.location.reload();
        });
    });
}

var callLoading = function(fn) {
    $(".loading").fadeIn(500, function() {
        $("body").css({
            position: "fixed"
        });
        if (typeof fn === "function") {
            fn();
        }
    });
};

var hideLoading = function() {
    $(".loading").fadeOut(500, function() {
        $("body").css("position", "");
    });
};

function animateToError() {
    try {
        var firstError = $(".has-error").first();
        var moveToOffset = $(firstError).offset().top - 20;
        $("html, body").animate({
            scrollTop: moveToOffset,
            useTranslate3d: true
        }, 700, function() {
            firstError.focus();
        });
    } catch (e) {}
}

function HtmlSpecialChars(text) {
    var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}

function decodeHtmlSpecialChars(text) {
    return $("<div />").html(text).text();
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function widgetTripAdvisorMulti() {
    var widget = $(".widget-trip");
    $.each(widget, function(i, widget) {
        var $widget = $(widget);
        var idtrip = $widget.data("idtrip");
        if (typeof idtrip != "undefined" && idtrip) {
            $.ajax({
                url: "/rest/trip/tripadvisorhotelrate/" + idtrip,
                dataType: "json",
                cache: true,
                async: true
            }).done(function(data) {
                if (data && data != "null") {
                    var rating_image = data.ratingImageLink;
                    if (typeof Vars.globalHttpProtocol != "undefined") {
                        rating_image = data.ratingImageLink.replace("http://", Vars.globalHttpProtocol);
                    }
                    $widget.find(".widget-trip-image").attr("src", rating_image);
                    $widget.find(".widget-trip-rating").text(data.numComents);
                    $widget.show();
                } else {
                    $widget.hide();
                }
            });
        } else {
            $widget.hide();
        }
    });
}

function widgetTripAdvisor() {
    var widget = $("#widget-trip");
    if (HotelData.hotelTripAdvisorId) {
        $.ajax({
            url: "/rest/trip/tripadvisorhotelrate/" + HotelData.hotelTripAdvisorId,
            dataType: "json",
            cache: true,
            async: true
        }).done(function(data) {
            if (data && data != "null") {
                var rating_image = data.ratingImageLink;
                if (typeof Vars.globalHttpProtocol != "undefined") {
                    rating_image = data.ratingImageLink.replace("http://", Vars.globalHttpProtocol);
                }
                widget.find("#widget-trip-image").attr("src", rating_image);
                widget.find("#widget-trip-rating").text(data.numComents);
                widget.show();
            } else {
                widget.hide();
            }
        });
    } else {
        widget.hide();
    }
}

function validateEmail(email) {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);
    if (!valid) {
        return false;
    } else {
        return true;
    }
}

if (!Object.keys) Object.keys = function(o) {
    var k = [], p;
    for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
    return k;
};

if (!Array.indexOf) Array.prototype.indexOf = function(o, s) {
    for (var i = s || 0; i < this.length; i++) if (this[i] === o) return i;
    return -1;
};

if (!Array.contains) Array.prototype.contains = function(o) {
    var i = this.length;
    while (i--) if (this[i] === o) return true;
    return false;
};

if (!Array.forEach) Array.forEach = function(a, b, c) {
    for (var i = 0; i < a.length; i++) b.call(c, a[i], i, a);
};

Function.prototype.forEach = function(o, b, c) {
    for (var k in o) if (typeof this.prototype[k] == "undefined") b.call(c, o[k], k, o);
};

String.forEach = function(s, b, c) {
    Array.forEach(s.split(""), function(chr, i) {
        b.call(c, chr, i, s);
    });
};

var forEach = function(o, b, c) {
    if (o) {
        var r = Object;
        if (o instanceof Function) {
            r = Function;
        } else if (o.forEach instanceof Function) {
            o.forEach(b, c);
            return;
        } else if (typeof o == "string") {
            r = String;
        } else if (typeof o.length == "number") {
            r = Array;
        }
        r.forEach(o, b, c);
    }
};

function fillFormFields(campos) {
    for (var param in campos) {
        if ($("#" + param).length > 0 && typeof campos[param] != "undefined" && campos[param] != null) {
            $("#" + param).val(campos[param]);
        }
    }
}

var defaultDiacriticsRemovalMap = [ {
    base: "A",
    letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
    base: "AA",
    letters: /[\uA732]/g
}, {
    base: "AE",
    letters: /[\u00C6\u01FC\u01E2]/g
}, {
    base: "AO",
    letters: /[\uA734]/g
}, {
    base: "AU",
    letters: /[\uA736]/g
}, {
    base: "AV",
    letters: /[\uA738\uA73A]/g
}, {
    base: "AY",
    letters: /[\uA73C]/g
}, {
    base: "B",
    letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
    base: "C",
    letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
    base: "D",
    letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
    base: "DZ",
    letters: /[\u01F1\u01C4]/g
}, {
    base: "Dz",
    letters: /[\u01F2\u01C5]/g
}, {
    base: "E",
    letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
    base: "F",
    letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
    base: "G",
    letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
    base: "H",
    letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
    base: "I",
    letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
    base: "J",
    letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
    base: "K",
    letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
    base: "L",
    letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
    base: "LJ",
    letters: /[\u01C7]/g
}, {
    base: "Lj",
    letters: /[\u01C8]/g
}, {
    base: "M",
    letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
    base: "N",
    letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
    base: "NJ",
    letters: /[\u01CA]/g
}, {
    base: "Nj",
    letters: /[\u01CB]/g
}, {
    base: "O",
    letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
    base: "OI",
    letters: /[\u01A2]/g
}, {
    base: "OO",
    letters: /[\uA74E]/g
}, {
    base: "OU",
    letters: /[\u0222]/g
}, {
    base: "P",
    letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
    base: "Q",
    letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
    base: "R",
    letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
    base: "S",
    letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
    base: "T",
    letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
    base: "TZ",
    letters: /[\uA728]/g
}, {
    base: "U",
    letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
    base: "V",
    letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
    base: "VY",
    letters: /[\uA760]/g
}, {
    base: "W",
    letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
    base: "X",
    letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
    base: "Y",
    letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
    base: "Z",
    letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
    base: "a",
    letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
    base: "aa",
    letters: /[\uA733]/g
}, {
    base: "ae",
    letters: /[\u00E6\u01FD\u01E3]/g
}, {
    base: "ao",
    letters: /[\uA735]/g
}, {
    base: "au",
    letters: /[\uA737]/g
}, {
    base: "av",
    letters: /[\uA739\uA73B]/g
}, {
    base: "ay",
    letters: /[\uA73D]/g
}, {
    base: "b",
    letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
    base: "c",
    letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
    base: "d",
    letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
    base: "dz",
    letters: /[\u01F3\u01C6]/g
}, {
    base: "e",
    letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
    base: "f",
    letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
    base: "g",
    letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
    base: "h",
    letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
    base: "hv",
    letters: /[\u0195]/g
}, {
    base: "i",
    letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
    base: "j",
    letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
    base: "k",
    letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
    base: "l",
    letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
    base: "lj",
    letters: /[\u01C9]/g
}, {
    base: "m",
    letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
    base: "n",
    letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
    base: "nj",
    letters: /[\u01CC]/g
}, {
    base: "o",
    letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
    base: "oi",
    letters: /[\u01A3]/g
}, {
    base: "ou",
    letters: /[\u0223]/g
}, {
    base: "oo",
    letters: /[\uA74F]/g
}, {
    base: "p",
    letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
    base: "q",
    letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
    base: "r",
    letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
    base: "s",
    letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
    base: "t",
    letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
    base: "tz",
    letters: /[\uA729]/g
}, {
    base: "u",
    letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
    base: "v",
    letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
    base: "vy",
    letters: /[\uA761]/g
}, {
    base: "w",
    letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
    base: "x",
    letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
    base: "y",
    letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
    base: "z",
    letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
} ];

var c_changes;

function removeDiacritics(str) {
    if (!c_changes) {
        c_changes = defaultDiacriticsRemovalMap;
    }
    for (var i = 0; i < c_changes.length; i++) {
        str = str.replace(c_changes[i].letters, c_changes[i].base);
    }
    return str;
}

function sortByName(a, b) {
    var aName = removeDiacritics(a.name.toLowerCase());
    var bName = removeDiacritics(b.name.toLowerCase());
    return aName < bName ? -1 : aName > bName ? 1 : 0;
}

function ClearAllIntervals() {
    for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
    }
}

function callSeguimientoForms(t, e, i) {
    try {
        seguimientoForms(t, e, i), -1 != formsAnalysys.indexOf(e) && ("success" == t ? (formSuccess(e), 
        window.onbeforeunload = null) : formError(e, i));
    } catch (s) {}
}

var Autocomplete = function() {
    var hotel;
    var hoteles = {};
    var valid = true;
    var get_occupants_one_room = true;
    var formulario = "form.search-form";
    var inputSearch;
    var init = function() {
        inputSearch = $("#inputSearch");
        hideLoading();
        handleOccupancy();
        handleCrossClose();
        handleEvents();
        inputSearch.off("keyup");
        inputSearch.click(function() {
            inputSearch.next(".js-input-clear").show();
        });
        inputSearch.keyup(function(e) {
            executeAutocomplete(e);
        });
    };
    var urlMaporama = function(params) {
        return "/rest/auto/autocompleteHome/" + params;
    };
    var handleEvents = function() {
        $("#submit-search,#submit-search-form").on("click", function(e) {
            e.preventDefault();
            if (!SearchData.isB2B || (SearchData.isB2B && $("body").hasClass("page-checkout") || $("body").hasClass("page-roomdisplay"))) {
                submitForm();
            }
        });
        $(document).keypress(function(e) {
            if (e.which == 13) {
                if ($(formulario).length) {
                    e.preventDefault();
                    submitForm();
                }
            }
        });
        if ($("#hoteles-dispo  form > :submit").length) {
            $("#hoteles-dispo  form > :submit").on("click", controlExternal);
        } else {
            $("a#btn-overview").on("click", function(e) {
                if (!SearchData.isB2B) {
                    submitForm();
                }
            });
        }
        $("#btn-without-dates").on("click", function() {
            $("a#btn-overview").remove();
            $("#js-search-data, #js-search-data #last-search-layer, #cross-close-layer,#js-new-search").show();
            $("#last-search-layer").hide();
            $("#last-search-layer").children().hide();
            if (inputSearch.attr("value") == "" && (HotelData.city != null && HotelData.country != null)) {
                inputSearch.attr("value", HotelData.city + ", " + HotelData.country);
            }
            $("#btn-without-dates").unbind();
        });
        $(".autosearch .js-input-clear").click(function() {
            $(".box-info.autosearch").removeClass("searching");
            inputSearch.focus();
        });
        $("#continueValidate-ey").click(function() {
            valorCode = $("#validate-code").val();
            var msg = typeof Labels.autocompleteHavePromoCode != "undefined" ? Labels.autocompleteHavePromoCode : "I have a promotional code";
            if (valorCode == null || valorCode == "") {
                $("form #promotional").text(msg);
                $("form input#voucherCode").val("");
            } else {
                $("form #promotional").text(valorCode);
                $("form input#voucherCode").val(valorCode);
            }
        });
    };
    var handleOccupancy = function() {
        $(".call-action.setRooms").on("click", function() {
            get_occupants_one_room = false;
        });
        $("#select-option").find("[data-pax]").on("click", function() {
            get_occupants_one_room = true;
        });
    };
    var handleCrossClose = function() {
        $("#crossClose button").on("click", function() {
            $("#js-search-data, #js-search-data #last-search-layer, #cross-close-layer, #js-new-search-layer").hide();
            $("#last-search-layer").show();
            $("#last-search-layer").children().show();
            $(".js-newsearch").on("click", function() {
                $("#js-search-data, #js-search-data #last-search-layer, #cross-close-layer, #js-new-search-layer").show();
                $("#last-search-layer").hide();
                $("#last-search-layer").children().hide();
                if (inputSearch.attr("value") == "" && (HotelData.city != null && HotelData.country != null)) {
                    inputSearch.attr("value", HotelData.city + ", " + HotelData.country);
                }
            });
        });
    };
    var executeAutocomplete = function(e) {
        inputSearch.removeClass("soft");
        var ajaxError = typeof Labels.autocompleteCoincidencias != "undefined" ? Labels.autocompleteCoincidencias : "There was han error. Please try later";
        if (e.which === 40 || e.which === 38 || e.which === 13 || e.which === 9) {
            return false;
        }
        var params = inputSearch.val();
        var numParam = typeof Vars.autocompleteParam != "undefined" ? Vars.autocompleteParam : 3;
        if (params.length < numParam) {
            $("#results").fadeOut();
            return;
        } else {
            $("#results").fadeIn();
            $.ajax({
                type: "GET",
                url: "/rest/auto/autocompleteHome/" + params,
                async: true,
                cache: true,
                dataType: "json",
                success: function(datos) {
                    $("#results").fadeIn();
                    $(".box-info.autosearch").addClass("searching");
                    $("form.search-form input.js-themes").remove();
                    hoteles = datos[0];
                    html = "";
                    prop = "Type";
                    prevType = 0;
                    if (hoteles.length > 0) {
                        html += '<li onclick="Autocomplete.selectHotel(\'find-near\',0)" class="find-near"><span class="icon-direction"></span><i>' + Labels.autocompleteNearme + "</i></li>";
                        for (var i = 0; i < hoteles.length; i++) {
                            var hasCity = true;
                            if (parseInt(hoteles[i].Type, 10) == 1) {
                                var city = "";
                                hasCity = false;
                            } else {
                                var city = hoteles[i].City;
                            }
                            txtGroup = Labels.autocompleteListLabels[hoteles[i].Type];
                            cssGroup = Labels.autocompleteListClass[hoteles[i].Type];
                            txtHotel = hoteles[i].num_hotels == 1 ? Labels.autocompleteHotel : Labels.autocompleteHotels;
                            if (hoteles[i].Type != prevType) {
                                html += '<li class="maporamaGroup"><i class="icon-' + hoteles[i].Type + '"></i>' + txtGroup + "</li>";
                            }
                            var _vh = hoteles[i].vh ? hoteles[i].vh : "";
                            var _lcv = hoteles[i].lcv ? HtmlSpecialChars(hoteles[i].lcv) : "";
                            var _url = hoteles[i].url ? hoteles[i].url : "";
                            var iter = i;
                            if (hoteles[i].num_hotels == 1 && hoteles[i].Type != 4) {
                                for (j = 0; j < hoteles.length; j++) {
                                    if (hoteles[i].locality == hoteles[j].locality && hoteles[j].Type == 4) {
                                        iter = j;
                                    }
                                }
                            }
                            html += '<li class="maporamaElement ' + cssGroup + '" onclick="Autocomplete.selectHotel(this,' + iter + ')" data-tcm="' + hoteles[iter].tcm + '" data-url="' + _url + '" data-vh="' + _vh + '" data-name="' + HtmlSpecialChars(hoteles[iter].Name) + '" data-locality="' + HtmlSpecialChars(hoteles[iter].locality) + '" data-typesearch="' + hoteles[iter].typeSearch + '" data-code="' + hoteles[iter].code + '" data-lcv="' + _lcv + '">';
                            html += '<span class="pull-right numHotels">' + hoteles[i].num_hotels + " " + txtHotel + "</span>", 
                            html += hasCity ? "<b>" + city + "</b>" : "";
                            html += '<div class="Result">';
                            html += "<span>" + hoteles[i].Name + ", </span>" + (hasCity ? '<span class="tipo-' + hoteles[i].Type + '"> ' + city + ", </span>" : "") + "<span> " + hoteles[i].CountryName + " </span>";
                            html += "</div>", html += "</li>", prevType = hoteles[i].Type, prevTypeName = hoteles[i].Type;
                        }
                    } else {
                        html += "<li><div>" + Labels.autocompleteCoincidencias + "</div></li>";
                    }
                    $("#results").html(html).show();
                    $(".Result").show();
                    $(".modal-calendar").modal("hide");
                    $("#select-option").modal("hide");
                },
                error: function(xhr, status, error) {
                    var html = "";
                    html += "<li>", html += "<div>", html += ajaxError, html += "</div>", html += "</li>", 
                    $("#results").html(html);
                }
            });
        }
    };
    var selectHotel = function(ele, i) {
        if ("undefined" == $.type(hoteles[i])) {
            return;
        }
        if (ele != "find-near") {
            hotel = hoteles[i];
            selected = i;
            $ele = $(ele);
            var type = $ele.data("typesearch");
            var code = $ele.data("code");
            var tcm = $ele.data("tcm");
            var locality = $ele.data("locality");
            var name = $ele.data("name");
            var url = $ele.data("url").length != 0 ? $ele.data("url") : "";
            var vh = $ele.data("vh") == true ? "true" : "false";
            var lcv = $ele.data("lcv");
            $("#type").val(type);
            $("#code").val(code);
            $("#tcm").val(tcm);
            $("#locality").val(locality);
            $("#name").val(name);
            $("#urlHotel").val(url);
            $("#virtualHotel").val(vh);
            if (type == "destination") {
                $("#destinationValue").val(lcv);
            }
            if (type == "destination") {
                var cap = $("<span>").html(hotel.City + ", " + hotel.CountryName);
            } else {
                var cap = $("<span>").html(hotel.Name + ", " + hotel.City + ", " + hotel.CountryName);
            }
            $("#inputSearch").val(cap.text()).data("search", cap.text());
        } else {
            emptyFormFields();
        }
    };
    var emptyFormFields = function() {
        $("#type").val("");
        $("#code").val("").attr("name", "nearMe");
        $("#tcm").val("");
        $("#locality").val("");
        $("#name").val("");
        $("#urlHotel").val("");
        $("#virtualHotel").val("false");
        $("#inputSearch").val("");
    };
    var submitForm = function() {
        var valueSearch = $("#inputSearch").val();
        if (valueSearch == "") {
            fillFormFields(getFormFields(true));
            var isAnantara = window.location.hostname.indexOf("anantara") > -1 ? true : false;
            var activeLocation = valueSearch == "" && isAnantara ? false : true;
            if (activeLocation) {
                geolocateMe(function(position) {
                    if (position) {
                        var accept_geolocalization = $(".geo-lat").val() != "" && $(".geo-lon").val() != "" ? true : false;
                        if (accept_geolocalization) {
                            callLoading(function() {
                                externalHotel($(formulario));
                            });
                        } else {
                            hideLoading();
                            var contentAlertLocation = $(".conent-alert").html();
                            alert(contentAlertLocation);
                            $(formulario).find('[type="submit"]').prop("disabled", false);
                        }
                    }
                });
            } else {
                $("#modal-error-label").modal("show");
                $(formulario).find('[type="submit"]').prop("disabled", false);
            }
        } else {
            if ($(formulario).find("#inputSearch").val() == $(formulario).find("#inputSearch").data("search")) {
                fillFormFields(getFormFields());
                callLoading(function() {
                    externalHotel($(formulario));
                });
            } else {
                $("#modal-error-label").modal("show");
                $(formulario).find('[type="submit"]').prop("disabled", false);
            }
        }
    };
    var getFormFields = function(nearme) {
        var startDayText = $(".check-in").find(".day-week").html();
        var startDay = $(".check-in").find(".day-number").html();
        var startMonth = $(".check-in").find(".day-month").html();
        var startYear = $(".check-in").find(".day-year").html();
        var fini = [ startDay, startMonth, startYear ].join("/");
        var endDayText = $(".check-out").find(".day-week").html();
        var endDay = $(".check-out").find(".day-number").html();
        var endMonth = $(".check-out").find(".day-month").html();
        var endYear = $(".check-out").find(".day-year").html();
        var fout = [ endDay, endMonth, endYear ].join("/");
        var fields;
        fields = {
            fini: fini,
            fout: fout,
            srooms: $("#srooms").text(),
            searchStringID: $("#inputSearch").val()
        };
        if ($("#validate-code").val() != "") {
            $.extend(fields, {
                voucherCode: $("#validate-code").val()
            });
        }
        if (hotel) {
            var type = hotel.typeSearch;
            if (type == "hotel") {
                $("#code").attr("name", "hotelId");
            } else if (type == "destination") {
                $("#code").attr("name", "destinationId");
                var destinationFields = {
                    destinationTcm: $(formulario).find("#tcm").val()
                };
                $.extend(fields, destinationFields);
            } else if (type == "poi") {
                $("#code").attr("name", "poiId");
            }
        }
        if (nearme) {
            $("#code").attr("name", "nearMe").val("");
            fields = {};
            fields = {
                fini: fini,
                fout: fout,
                srooms: $("#srooms").text(),
                searchStringID: "",
                destinationTcm: "",
                destinationValue: "",
                type: "",
                tcm: "",
                locality: "",
                name: "",
                urlHotel: "",
                virtualHotel: ""
            };
        }
        if (get_occupants_one_room == false) {
            $('input[id*="nadults"]').remove();
            $('input[id*="nchilds"]').remove();
            $('input[id*="nbabies"]').remove();
            var mo = $("#home-room-select .cloneRoom");
            var input = "";
            $.each(mo, function(i, ele) {
                var index = i + 1;
                var adults = $("#adultRoom-" + index).val();
                var childs = $("#kidRoom-" + index).val();
                var babies = $("#babyRoom-" + index).val();
                var more = {};
                more["nadults" + index] = adults;
                more["nchilds" + index] = childs;
                more["nbabies" + index] = babies;
                $.extend(fields, more);
                input += '<input type="hidden" id="nadults' + index + '" name="nadults' + index + '" value="' + adults + '" />';
                input += '<input type="hidden" id="nchilds' + index + '" name="nchilds' + index + '" value="' + childs + '" />';
                input += '<input type="hidden" id="nbabies' + index + '" name="nbabies' + index + '" value="' + babies + '" />';
            });
            $(formulario).prepend(input);
        } else if (get_occupants_one_room == true) {
            if (SearchData.roomsNumber == 1 || $("#srooms").text() == 1) {
                $('input[id*="nadults"]').remove();
                $('input[id*="nchilds"]').remove();
                $('input[id*="nbabies"]').remove();
                var adults = $("#sadults").html();
                var childs = $("#schilds").html();
                var babies = $("#sbabies").html();
                var input = "";
                var more = {};
                more["nadults1"] = adults;
                more["nchilds1"] = childs;
                more["nbabies1"] = babies;
                $.extend(fields, more);
                input += '<input type="hidden" id="nadults1" name="nadults1" value="' + adults + '" />';
                input += '<input type="hidden" id="nchilds1" name="nchilds1" value="' + childs + '" />';
                input += '<input type="hidden" id="nbabies1" name="nbabies1" value="' + babies + '" />';
                $(formulario).prepend(input);
            } else {}
        }
        return fields;
    };
    function externalHotel(form) {
        var send = false, formdata = form.serializeArray(), data = {}, arraydata = {
            rooms: 0,
            nadults: 0,
            nchilds: 0,
            nbabies: 0
        }, listSearch = hoteles;
        if (listSearch.length > 0) {
            var childages = "";
            $(formdata).each(function(index, obj) {
                data[obj.name] = obj.value;
                var sliceName = obj.name.slice(0, -1);
                if (sliceName in arraydata) {
                    var v = parseInt(obj.value) || 0;
                    arraydata[sliceName] += v;
                    if (v > 0 && sliceName == "nchilds") childages += parserAgesChildren("7|", v);
                    if (v > 0 && sliceName == "nbabies") childages += parserAgesChildren("1|", v);
                    if (sliceName == "nadults") arraydata["rooms"]++;
                }
            });
            Object.assign(data, arraydata);
            if (data.hotelId) {
                var autocompleteSearch = searchObject(listSearch, data.hotelId);
                if (typeof autocompleteSearch != "undefined" && autocompleteSearch != null) {
                    if (typeof autocompleteSearch.ebp != "undefined" && typeof autocompleteSearch.url != "undefined") {
                        if (autocompleteSearch.ebp) {
                            var dataUrl = {
                                hotelID: data.hotelId,
                                checkinDate: formatDate(data.fini, autocompleteSearch.df),
                                checkoutDate: formatDate(data.fout, autocompleteSearch.df),
                                nights: nights(data.fini.split("/"), data.fout.split("/")),
                                adults: data.nadults,
                                children: data.nchilds + data.nbabies,
                                roomsNumber: data.rooms,
                                childages: childages.length > 1 ? childages.slice(0, -1) : ""
                            };
                            var output = Template(autocompleteSearch.url, dataUrl);
                            window.location.href = output;
                            return true;
                        }
                    }
                }
            }
        }
        if (!send) form.submit();
    }
    var Template = function(tpl, data) {
        return tpl.replace(/\[(.*?)\]/gim, function(match, p1) {
            var prop = p1.trim();
            return data.hasOwnProperty(prop) ? data[prop] : "";
        });
    };
    function searchObject(listSearch, param) {
        var search = null;
        Object.values(listSearch).forEach(function(value) {
            if (value.code == param) search = value;
        });
        return search;
    }
    function nights(fini, fout) {
        var fecha1 = Date.UTC(fini[2], fini[1] - 1, fini[0]);
        var fecha2 = Date.UTC(fout[2], fout[1] - 1, fout[0]);
        var dif = fecha2 - fecha1;
        var dias = Math.floor(dif / (1e3 * 60 * 60 * 24));
        return dias;
    }
    function formatDate(date, tipo) {
        return tipo == "MM/DD/YYYY" ? pad(date.split("/")[1]) + "/" + pad(date.split("/")[0]) + "/" + date.split("/")[2] : date;
    }
    function pad(number) {
        return (parseInt(number) < 10 ? "0" : "") + parseInt(number);
    }
    function parserAgesChildren(text, pointer) {
        var parsedTxt = "";
        for (i = 1; i <= pointer; i++) {
            parsedTxt += text;
        }
        return parsedTxt;
    }
    function setHotels(datos) {
        hoteles = datos;
    }
    var controlExternal = function(e) {
        e.preventDefault();
        $button = $(this);
        var isHP = $button.attr("id") == "btn-overview" ? true : false;
        var $form = !isHP ? $(this).closest("form") : $("form.search-form");
        var backcode = !isHP ? $button.data("backcode") : $form.find("input[name='hotelId']").val();
        var hotelname = $button.data("hotelname");
        $.getJSON("/rest/auto/autocomplete/" + hotelname, function(list) {
            console.log(list);
            if ($.isArray(list)) {
                setHotels(list[0]);
                var autocompleteSearch = searchObject(list[0], backcode);
                if (typeof autocompleteSearch != "undefined" && autocompleteSearch != null) {
                    if (typeof autocompleteSearch.ebp != "undefined" && typeof autocompleteSearch.url != "undefined") {
                        if (!isHP) {
                            var paramObj = getAllParams([ "fini", "fout", "nadults", "nchilds", "nbabies", "voucherCode" ]);
                            if (Object.keys(paramObj).length != 0 && paramObj.constructor === Object) {
                                $.each(paramObj, function(index, valParam) {
                                    $form.append('<input type="hidden" name="' + index + '" value="' + valParam + '" />');
                                });
                            }
                        }
                        externalHotel($form);
                    }
                }
            }
            if (!isHP && !SearchData.isB2B) {
                externalHotel($form);
            } else return true;
        });
    };
    function getAllParams(checkParam) {
        var parametros = getUrlVars(), paramObj = {};
        $.each(parametros, function(name, value) {
            checkParam.forEach(function(entry) {
                if (name.indexOf(entry) != -1) paramObj[name] = value;
            });
        });
        return paramObj;
    }
    function getUrlVars() {
        var vars = {}, hash;
        var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("=");
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    return {
        init: init,
        selectHotel: selectHotel,
        externalHotel: externalHotel
    };
}();

$(function() {
    if ($("#inputSearch").length > 0) {
        Autocomplete.init();
    }
});

var Checkout = function() {
    var noerror = true;
    var currentPage = null;
    var $formulario = null;
    var $formularioSend = null;
    var $bookingOther = null;
    var loading = null;
    var formularyValidations;
    var init = function() {
        $formulario = $("#form-all");
        $formularioSend = $(".form-checkout");
        $bookingOther = $("#booking-other");
        loading = $(".loading");
        if (typeof pageData != "undefined") {
            if (typeof pageData.javaError != "undefined" && pageData.javaError == "true") {
                if (typeof pageData.urlError != "undefined" && pageData.urlError) {
                    $("#modal-java-error").modal({
                        backdrop: "static",
                        keyboard: true,
                        show: true
                    });
                    ClearAllIntervals();
                } else {
                    $("#modal-java-error").modal("show");
                }
            }
            Customer = {
                hasCredit: pageData.hasCredit ? $.parseJSON(pageData.hasCredit) : false,
                isB2B: pageData.isB2B ? $.parseJSON(pageData.isB2B) : false,
                isAgency: pageData.isAgency ? $.parseJSON(pageData.isAgency) : false,
                isB2EFriends: pageData.isB2EFriends ? $.parseJSON(pageData.isB2EFriends) : false,
                isTravelAgent: pageData.isTravelAgent ? $.parseJSON(pageData.isTravelAgent) : false,
                isB2EEmployee: pageData.isB2EEmployee ? $.parseJSON(pageData.isB2EEmployee) : false
            };
        }
        var bodyclass = $("body").attr("class");
        if (/prepayment/g.test(bodyclass)) {
            currentPage = "prepayment";
        } else {
            currentPage = "checkout";
        }
        if (typeof pageData.javaError != "undefined" && pageData.javaError == "true") {
            console.log("JAVA ERROR: ", pageData.javaError);
            $("#java-error").trigger("click");
        }
        rewardsLogin();
        tarifaRewardsActions();
        addMinCardDate();
        getCurrentPage();
        validationsForm();
        beforeUnloadSession();
        nacionalitySelectActions();
        guaranteeActions();
        bookingOtherActions();
        agencyCreditActions();
        callSessionExpiredAjax();
        counterModalSession();
    };
    var getCurrentPage = function() {
        var bodyclass = $("body").attr("class");
        if (/prepayment/g.test(bodyclass)) {
            currentPage = "prepayment";
        } else {
            currentPage = "flexible";
        }
    };
    var validationsForm = function() {
        var checkoutFormValidation = $formulario.find("input,textarea,select").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "change", "blur", "focus" ],
            submitError: function($form, event, errors) {
                console.log("Errors: ", errors);
                if ($form.find("div.has-error:not(.js-no-scroll):visible").length > 0) {
                    moveToOffset = $form.find("div.has-error:not(.js-no-scroll):visible").eq(0).offset().top - 90;
                    $("html, body").animate({
                        scrollTop: moveToOffset,
                        useTranslate3d: true
                    }, 700);
                }
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                var $button = $($form).find('[type="submit"]');
                var validateGuests = validateGuestsName();
                if (validateGuests) {
                    ClearAllIntervals();
                    if ($button.hasClass("call-loading")) {
                        showLoading();
                    }
                    $button.prop("disabled", true);
                    fillInputHidden(function() {
                        checkoutFormValidation.jqBootstrapValidation("destroy");
                        if (currentPage == "flexible") {} else if (currentPage == "prepayment") {
                            callSeguimientoForms("success", "prepaymentForm", "success");
                        }
                        $formularioSend.submit();
                    });
                } else {
                    moveToOffset = $form.find("#personalize-rooms #personalize-1").eq(0).offset().top - 90;
                    $("html, body").animate({
                        scrollTop: moveToOffset,
                        useTranslate3d: true
                    }, 700);
                }
            },
            filter: function() {
                var $this = $(this);
                var isSelectpicker = false;
                var validateCallbackDate = true;
                if ($this.is("select") && $this.hasClass("selectpicker")) {
                    var selectpickerId = $this.attr("id");
                    isSelectpicker = $('[data-id="' + selectpickerId + '"]').is(":visible") ? true : false;
                }
                return $this.is(":visible") || isSelectpicker || $this.hasClass("force-validation");
            }
        });
    };
    var validateGuestsName = function() {
        var guestName = $("#room-01-name-01");
        var formGroup = guestName.parents(".form-group");
        var labelRequired = formGroup.find(".callback-guest").data("validation-required-message");
        var result = true;
        if ($bookingOther.is(":checked")) {
            $("#personalize-1").collapse("show");
            if (guestName.val() != "") {
                formGroup.removeClass("has-error").find(".help-block").html("");
                result = true;
            } else {
                formGroup.addClass("has-error").find(".help-block").html('<ul role="alert"><li>' + labelRequired + "</li></ul>");
                result = false;
            }
        }
        return result;
    };
    var setNationalityField = function() {
        Utils.getGeoIpData(function(data) {
            if (data && data.country) {
                $(".js-country-geoip").val(data.country);
            }
        });
        console.log("setNationalityField");
    };
    var nacionalitySelectActions = function() {
        setNationalityField();
        var $nationality = $("#group-nationality-checkout");
        var $checkAccountRewards = $(".js-account-rewards");
        $checkAccountRewards.on("change", function() {
            var $this = $(this);
            var isChecked = $this.is(":checked");
            if (isChecked) {
                $nationality.show();
                $nationality.removeClass("hide");
            } else {
                $nationality.hide();
            }
        });
    };
    var bookingOtherActions = function() {
        $bookingOther.on("change", function() {
            if ($bookingOther.is(":checked")) {
                $("#personalize-1").collapse("show");
            }
        });
    };
    var guaranteeActions = function() {
        var inputToSend = $("input.js-guarantee-paymenttype");
        $('[data-target="#garantee-info"]').on("click", function(e) {
            var $this = $(this);
            var data = inputToSend.data("value");
            if (data) {
                var newValue = $this.attr("aria-expanded") == "false" ? data.guarantee : data.noguarantee;
                inputToSend.val(newValue);
            }
        });
        $("#payment-method").change(function() {
            var $this = $(this);
            var paymentMethods = $this.val();
            $("input[name='paymentType']").val(paymentMethods);
        });
    };
    var fillLoggedInfo = function(targetUrl) {
        var button = $('#loginForm button[type="submit"]');
        var $formularioModal = $("#loginForm");
        $.ajaxSetup({
            cache: false,
            async: false
        });
        $.ajax({
            method: "GET",
            url: targetUrl
        });
        Login.checkUserLogged(function(data) {
            if (data.isLogged) {
                var userData = data.userData;
                var name = userData["name"];
                var surname = userData["surname"];
                var email = pageData.isRewards == "true" ? userData["customerEmail"] : userData["email"];
                var telephone = userData["telephone"];
                var partyId = userData["partyId"];
                var points = userData["customerTotal"];
                var program = userData["customerProgram"];
                program = program == "NH_MEDIA" ? "NH REWARDS" : program.replace(/_/g, " ");
                var category = userData["customerCategoryDescription"];
                var fields = {
                    ".logged-name": name,
                    ".logged-surname": surname,
                    ".logged-email": email,
                    ".logged-telephone": telephone,
                    ".logged-points": points,
                    ".logged-program": program,
                    ".logged-category": category,
                    "#inputPartyId": partyId
                };
                $.each(fields, function(field, value) {
                    $("input" + field).val(value);
                    if ($("input" + field).length > 0 && value) {
                        var mo = $("input" + field).attr("id");
                        $('label[for="' + mo + '"]').addClass("focus");
                    }
                    $(field).not(":input").text(value);
                });
                $(".js-input-name").trigger("focusout");
                var $inputs = $("input.logged-name,input.logged-surname,input.logged-email,input.logged-telephone");
                $inputs.trigger("change.validation", {
                    submitting: true
                });
                $(".hide-logged").hide();
                $(".show-logged").show().removeClass("hide");
                if (name && typeof pageData != "undefined" && !$.parseJSON(pageData.isB2B) && !$.parseJSON(pageData.isB2EFriends)) {
                    $(".js-input-name").prop("disabled", true);
                    $(".js-input-lastname").prop("disabled", true);
                    $("input.logged-email").val(email);
                    $(".logged-email").not(":input").text(email);
                }
                $("#modal-login-rewards").modal("hide");
            } else {
                console.log(data.message);
                $formularioModal.find(".form-group").removeClass("has-success").addClass("has-error");
                button.prop("disabled", false);
            }
        });
    };
    var fillInputHidden = function(fn) {
        var fields = $formularioSend.find("input[data-id]");
        $.each(fields, function(i, ele) {
            var $formInputHidden = $(ele);
            var valueInput = getInputValue($formInputHidden, $formularioSend);
            if (valueInput) {
                if ($formInputHidden.attr("name") == "subscribeRewards") {
                    if (valueInput == "S") {
                        valueInput = true;
                    }
                }
                $formInputHidden.val(valueInput, $formInputHidden);
            }
        });
        fillCustomPageInputHidden();
        if (typeof fn === "function") {
            fn();
        }
        return true;
    };
    var getInputValue = function(formInputHidden, formularioSend) {
        var $formInputHidden = $(formInputHidden);
        var $formSend = $(formularioSend);
        var dataId = $formInputHidden.data("id");
        var valueInput = null;
        if (dataId && $formulario.find("#" + dataId).length > 0 || $formulario.find('[name="' + dataId + '"]').length > 0) {
            var dataInput;
            var type = "input";
            if ($formulario.find("#" + dataId).length) {
                dataInput = $formulario.find("#" + dataId);
                type = "input";
                if (dataInput.attr("type") == "checkbox") {
                    type = "checkbox";
                } else if (dataInput.is("select")) {
                    type = "select";
                }
            } else if ($formulario.find('[name="' + dataId + '"]').length > 0) {
                dataInput = $formulario.find('[name="' + dataId + '"]');
                type = "radio";
            }
            if (dataInput) {
                if (dataInput.is(":checked") || dataInput.is(":visible") || dataInput.hasClass("selectpicker") && $('.selectpicker[data-id="' + dataId + '"]').is(":visible") || dataInput.hasClass("force-send")) {
                    switch (type) {
                      case "checkbox":
                        if (dataId.indexOf("GDPR") >= 0) {
                            if (dataId.indexOf("GDPR_flag_5") >= 0) {
                                if (!$(dataInput).is(":checked")) {
                                    $formSend.find('[name="' + dataId + '"]').remove();
                                } else {
                                    valueInput = $(dataInput).is(":checked") ? "S" : "N";
                                }
                            } else {
                                valueInput = $(dataInput).is(":checked") ? "S" : "N";
                            }
                        } else {
                            valueInput = $(dataInput).is(":checked") ? "true" : "false";
                        }
                        if ($formInputHidden.data("alt-value")) {
                            var newValue = $formInputHidden.data("alt-value");
                            if (newValue && dataInput.data(newValue)) {
                                valueInput = dataInput.data(newValue).toString();
                            }
                        }
                        break;

                      case "radio":
                        valueInput = $formulario.find('[name="' + dataId + '"]:checked').val();
                        if ($formInputHidden.data("alt-value")) {
                            var newValue = $formInputHidden.data("alt-value");
                            if (newValue) {
                                valueInput = $formulario.find('[name="' + dataId + '"]:checked').data(newValue);
                            }
                        }
                        break;

                      case "select":
                        valueInput = dataInput.val();
                        if ($formInputHidden.data("format-year")) {
                            var format = $formInputHidden.data("format-year") || "20";
                            if (format) {
                                valueInput = format + "" + valueInput;
                            }
                        }
                        if ($formInputHidden.data("alt-value")) {
                            var newValue = $formInputHidden.data("alt-value");
                            if (newValue) {
                                var $select = $formulario.find('[name="' + dataId + '"]');
                                if (typeof $select.find(":selected").data(newValue) != "undefined") {
                                    valueInput = $select.find(":selected").data(newValue).toString();
                                } else {
                                    valueInput = "";
                                }
                            }
                        }
                        break;

                      case "input":
                        valueInput = dataInput.val();
                        if ($formInputHidden.data("alt-value")) {
                            var newValue = $formInputHidden.data("alt-value");
                            if (newValue && dataInput.data(newValue)) {
                                valueInput = dataInput.data(newValue).toString();
                            }
                        }
                        break;

                      default:
                        valueInput = $formulario.find("#" + dataId).val().toString();
                    }
                }
            }
        }
        return valueInput;
    };
    var fillCustomPageInputHidden = function() {
        var fields = {};
        if (!$.isEmptyObject(fields)) {
            $.each(fields, function(ele, value) {
                if (value && $formularioSend.find('input[name="' + ele + '"]').length) {
                    $formularioSend.find('input[name="' + ele + '"]').val(value);
                }
            });
        }
    };
    var fillGaranteeInputHidden = function() {
        var garantee_fields = formulario.find('.form-control[data-garantee="true"]').filter(":visible");
        if (garantee_fields.length != 0) {
            var date = $("#expiration-day").val().split("-");
            if ($.isArray(date) && date.length != 0) {
                $("#_expiration-month").val(date[1]);
                $("#_expiration-year").val(date[0]);
            }
            var fcheckout = {
                creditCardNumber: "garantee-payment-method",
                creditCardExpiringMonth: "_expiration-month",
                creditCardExpiringYear: "_expiration-year"
            };
            if (currentPage == "prepayment" && $('[data-id="nacionalidad"]:visible').length > 0) {
                var nacionalidad_value = $("#nacionalidad option:selected").val() == "" ? "none" : $("#nacionalidad option:selected").val();
                $("input[id=nacionalidad]").val(nacionalidad_value);
            }
            if (currentPage == "prepayment") {
                var fprepayment = {
                    cardHolderName: "card-holder",
                    cardCVV: "CVV",
                    "adyen-encrypted-form-number": "garantee-payment-method",
                    "adyen-encrypted-form-expiry-month": "_expiration-month",
                    "adyen-encrypted-form-expiry-year": "_expiration-year",
                    "adyen-encrypted-form-holder-name": "card-holder",
                    "adyen-encrypted-form-cvc": "CVV"
                };
                $.extend(fcheckout, fprepayment);
                $('input[name="paymentMethod"]').val("CSE");
            }
            $.each(fcheckout, function(ele, value) {
                var valor = $.type($("#" + value).val()) != "undefined" ? $("#" + value).val() : "";
                if (value == "garantee-payment-method") {
                    valor = valor.replace(/\ /g, "");
                }
                $('input[type="hidden"][id="' + ele + '"]').val(valor);
            });
            formularioSend.find("#guaranteeBooking").val(true);
        }
    };
    var submitForm = function() {
        formularyValidations.jqBootstrapValidation("destroy");
        formularioSend.submit();
    };
    var validateCardNumber = function() {
        var numero = $('input[id="numero"]').length != 0 ? 'input[id="numero"]' : "#garantee-payment-method";
        var divNumero = $(numero).parent().parent();
        var card = $(numero).val();
        var result = checkCard(card);
        var alert = $(numero).parent().find(".form-control-feedback");
        if (!result || !(card.length >= 12 && card.length <= 19)) {
            $(alert).text(pageData.lblIncorrectCard);
            $(divNumero).addClass("has-error");
            return false;
        } else {
            $(alert).hide();
            $(divNumero).removeClass("has-error");
            return true;
        }
    };
    var rewardsLogin = function() {
        $("#rewards-login-submit").on("click", function(e) {
            e.preventDefault();
            callLoading(function() {
                $("#rewardsLoginSubmit").submit();
            });
        });
    };
    var tarifaRewardsActions = function() {
        if ($("#nhrewardFlag").val() == "true") {
            $("#checkbox-rewards").removeClass("hidden");
        }
        console.log("Tarifa Rewards:", $("#nhrewardFlag").val());
    };
    var addMinCardDate = function() {
        var d = new Date(), month = d.getMonth() + 1, day = d.getDate(), output = d.getFullYear() + "-" + (10 > month ? "0" : "") + month + "-" + (10 > day ? "0" : "") + day;
        $("#ExpirationDate").each(function() {
            $(this).attr({
                min: output
            });
        });
    };
    var modalCvv = function() {
        $("#info-cvv").on("show.bs.modal", function() {
            var cardClass = $(".js-validate-card .brand-card span").attr("class");
            if (cardClass == "icon-card-american") {
                $(".modal#info-cvv").find(".visa").hide();
                $(".modal#info-cvv").find(".american-express").show();
            } else if (cardClass == "icon-card-visa" || cardClass == "icon-card-master") {
                $(".modal#info-cvv").find(".visa").show();
                $(".modal#info-cvv").find(".american-express").hide();
            } else {
                $(".modal#info-cvv").find(".visa").show();
                $(".modal#info-cvv").find(".american-express").show();
            }
        });
    };
    var checkCard = function($card) {
        var c = $card;
        c = c.replace(/\s/g, "");
        var cl = parseInt(c.substr(c.length - 1));
        var c = c.slice(0, -1);
        var c = c.split("").reverse().join("");
        var c = c.split("");
        var a = 2;
        var cm = [];
        for (var i = 0; i < c.length; i++) {
            if (a % 2 == 0) {
                var t = c[i] * 2;
                if (t > 9) {
                    var t = t - 9;
                }
                cm.push(t);
            } else {
                cm.push(parseInt(c[i]));
            }
            a++;
        }
        var f = 0;
        for (var i = 0; i < cm.length; i++) {
            f += cm[i];
        }
        f = f + cl;
        if (f % 10 == 0) {
            return true;
        } else {
            return false;
        }
    };
    var beforeUnloadSession = function() {
        var fireEvent = true;
        if (pageData.tcmFromErrorCode) {
            var splitt = pageData.tcmFromErrorCode.split("-");
            if (splitt[1] + "-" + splitt[2] == "82579-16") {
                fireEvent = false;
            }
        }
        if (fireEvent) {
            window.addEventListener("beforeunload", function(event) {
                if (typeof SessionDataSend != "undefined") {
                    getSessionData(function() {
                        var urlSend = currentPage == "flexible" ? "/booking/save-flexibleform-data" : "/booking/save-prepaidform-data";
                        $.ajax({
                            type: "POST",
                            url: urlSend,
                            data: SessionDataSend,
                            cache: false,
                            async: false
                        }).done(function(data) {}).fail(function(data) {
                            if (data.responseText != 200) {
                                return false;
                            }
                        });
                    });
                }
            });
        }
    };
    var getSessionData = function(fn) {
        fillInputHidden(function() {
            SessionDataSend = $formularioSend.serialize();
            if (typeof fn === "function") {
                fn();
            }
        });
    };
    var agencyCreditActions = function() {
        if ($("#payment-type").length === 1 && $("#payment-type").val() === "NOPAYMENT") {
            $(".js-wrap-guarantee").show();
        }
        $(".js-update-filter #payment-type").on("change", function() {
            var $this = $(this);
            var $value = $this.val();
            var wrapGuarantee = $(".js-wrap-guarantee");
            if ($value == "BONOPAYMENT" || $value == "COMPANYCREDIT" || $value == "FACTURAPROFORMA" || $value == "BONOPAYMENT_") {
                wrapGuarantee.hide();
            } else {
                wrapGuarantee.show();
            }
        });
        $formulario.find("#agency-service").on("change", function() {
            var $this = $(this);
            if ($this.is(":checked")) {
                var valor = $this.attr("data-no-text");
                $this.removeAttr("data-no-text");
                $this.attr("data-text", valor);
            } else {
                var valor = $this.attr("data-text");
                $this.removeAttr("data-text");
                $this.attr("data-no-text", valor);
            }
        });
    };
    var callSessionExpiredAjax = function() {
        if (typeof pageData.reservationId != "undefined") {
            var $modal = $("#modal-session-expire");
            var clock = $(".js-time-counter");
            var mins = parseInt(clock.attr("data-mins"), 10);
            var secs = parseInt(clock.attr("data-secs"), 10);
            var now = new Date().getTime();
            var endtime = new Date(now + mins * 60 * 1e3 + secs * 1e3);
            $modal.find("[data-dismiss], .modal-backdrop").on("click", function() {
                var urlSend = currentPage == "flexible" ? "/booking/hold-prereservation-flexible" : "/booking/hold-prereservation-prepaid";
                $.ajax({
                    type: "POST",
                    url: urlSend + "?merchantReturnData=" + pageData.reservationId,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    dataType: "json",
                    cache: false
                }).done(function(data) {
                    if (data) {
                        initializeClock("clockdiv", endtime);
                    }
                }).fail(function(data) {
                    console.log("fail", data);
                });
            });
        }
    };
    var counterModalSession = function() {
        var counterEy = true;
        var $modal = $("#modal-session-expire");
        if ($(".js-time-counter").length > 0) {
            var clock = $(".js-time-counter");
            var mins = parseInt(clock.attr("data-mins"), 10);
            var secs = parseInt(clock.attr("data-secs"), 10);
            var now = new Date().getTime();
            var endtime = new Date(now + mins * 60 * 1e3 + secs * 1e3);
            var timeinterval = setInterval(function() {
                var t = getTimeRemaining(endtime);
                t = getTimeRemaining(endtime);
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                    counterEy = 0;
                    $modal.modal("hide");
                    $("#modal-expired-message").modal({
                        backdrop: "static",
                        keyboard: true,
                        show: true
                    });
                }
            }, 1e3);
        }
    };
    if ($("#modal-session-expire").length > 0) {
        setTimeout(function() {
            $("#modal-session-expire").modal("show");
        }, 3e5);
        var minutes = $(".js-time-counter").data("mins");
        var seconds = $(".js-time-counter").data("secs");
        var deadline = new Date(Date.parse(new Date()) + minutes * 60 * 1e3 + seconds * 1e3);
        initializeClock("clockdiv", deadline);
    }
    return {
        init: init,
        checkCard: checkCard,
        getInputValue: getInputValue,
        getSessionData: getSessionData,
        fillLoggedInfo: fillLoggedInfo
    };
}();

function checkoutFillLoggedInfo(targetUrl) {
    Checkout.fillLoggedInfo(targetUrl);
}

$(document).ready(function() {
    if ($("body").hasClass("page-checkout") || $("body").hasClass("page-prepayment")) {
        Checkout.init();
    }
});

var Confirmation = function() {
    var class_error = "text-danger";
    var class_success = "text-success";
    var init = function() {
        SearchData.fillOccupancyLastSearch();
        if (typeof pageData != "undefined") {
            urlPassbook();
            passwallet();
            emailActions();
        }
    };
    var urlPassbook = function() {
        if (typeof pageData.urlPassbook != "undefined") {
            var fecha = pageData.urlPassbook.split("/");
            var fullPassbook = pageData.fullDomain + "/getPassBook/" + pageData.idReservation + "/" + pageData.emailTitular + "/" + fecha[2] + "-" + fecha[1] + "-" + fecha[0];
            $(".js-passbook").on("click", function(e) {
                e.preventDefault();
                location.href = fullPassbook;
            });
        }
    };
    var passwallet = function() {
        if (device.android()) {
            $("#passwallet").show();
        }
    };
    var emailActions = function() {
        $("#mail-share").on("shown.bs.modal", function() {
            $(".js-alert").hide();
        });
        emailValidation();
    };
    var emailValidation = function() {
        $("#form-send-email").find("input,textarea,select").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
                console.log("Errors: ", errors);
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                emailSend();
            },
            filter: function() {
                return $(this).is(":visible");
            }
        });
    };
    var emailSend = function() {
        var URL = "/booking/confirmation";
        $.ajax({
            type: "POST",
            url: URL,
            data: "emailList=" + $("#email").val() + "&cmp=" + $("#cmp").val() + "&cmpView=" + $("#cmpView").val() + "&hotelView=" + $("#hotelView").val() + "&emailSubject=" + $("#emailSubject").val(),
            async: true,
            dataType: "json"
        }).done(function(data) {
            if (data != "" && data.success == "true") {
                handleMessages("#js-email-message", class_success, pageData.labelEmailSuccess);
            } else {
                handleMessages("#js-email-message", class_error, pageData.labelEmailFailed);
            }
        }).fail(function(data) {
            handleMessages("#js-email-message", class_error, pageData.labelEmailFailed);
        });
    };
    var handleMessages = function(container, clase, message) {
        $(".js-alert").hide();
        $(container).find(".js-text").removeClass(class_success).removeClass(class_error);
        $(container).find(".js-text").html(message).addClass(clase);
        $(container).show();
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-confirmation")) {
        Confirmation.init();
    }
});

var HotelNoAvail = function() {
    var init = function() {
        if ($("#filters").length > 0) {
            LandingFilters.init();
        }
        if (typeof pageData.javaError != "undefined" && pageData.javaError == "true") {
            console.log("JAVA ERROR: ", pageData.javaError);
            $("#java-error").trigger("click");
        }
        var result = SearchData.newDataFromAjax();
        if ($.type(result) == "object") {
            SearchData.fillLastSearch();
        }
    };
    return {
        init: init
    };
}();

var RoomDisplayServices = function() {
    var LastSearchData = null;
    var getViewData = function(fn) {
        getLazyHotelInfo(function(availData) {
            if (availData && LastSearchData) {
                var data = {
                    lastSearchData: LastSearchData,
                    availData: availData
                };
                if (typeof fn == "function") {
                    fn(data);
                }
            }
        });
    };
    var getLazyHotelInfo = function(fn) {
        getHotelDataSend(function(hotelDataSend) {
            console.log("HotelDataSend: ", hotelDataSend);
            if (!$.isEmptyObject(hotelDataSend) && hotelDataSend && typeof pageData.hotelId != "undefined" && pageData.hotelId) {
                LazyHotelData = hotelDataSend;
                if (pageData.subdomain != "") {
                    var url = pageData.subdomain + "/rest/hotel/" + pageData.hotelId + "/availability";
                } else {
                    var url = "/rest/hotel/" + pageData.hotelId + "/availability";
                }
                $.ajax({
                    type: "POST",
                    url: url,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(hotelDataSend),
                    dataType: "json",
                    cache: false
                }).done(function(data) {
                    if (data && !$.isEmptyObject(data)) {
                        if (data.code) {
                            callAvailErrorCode(data, function(status) {
                                if (typeof fn == "function") {
                                    fn(status);
                                }
                            });
                        } else {
                            console.log("Availability Hotel!: ", data);
                            if (typeof fn == "function") {
                                fn(data);
                            }
                        }
                    } else {
                        noAvailabilityActions();
                        if (typeof fn == "function") {
                            fn("noavail");
                        }
                    }
                }).fail(function(data) {
                    noAvailabilityActions();
                    if (typeof fn == "function") {
                        fn("noavail");
                    }
                });
            } else {
                console.log("error: hotelDataSend is missing || pageData.hotelId is missing");
                if (typeof pageData.hotelId == "undefined" || !pageData.hotelId) {
                    getFlowErrors(pageData.tcmGenericErrorTcm, pageData.tcmGenericErrorMsg);
                }
            }
        });
    };
    var getHotelDataSend = function(fn) {
        var lastData = getLastSearchData();
        var data = false;
        if (lastData) {
            var data = {
                searchData: lastData.searchData,
                contracts: lastData.contracts,
                isOptimicedCall: lastData.optimicedCall,
                backingBeanInfo: lastData.backingBeanInfo,
                hotelFrontCode: lastData.hotelFrontCode
            };
        }
        if (typeof fn === "function") {
            fn(data);
        }
    };
    var getFlowInformation = function(fn) {
        var dataSend = window.location.search.replace("?", "");
        var url = "";
        if (pageData.subdomain != "") {
            url = pageData.subdomain + "/booking/ajax/roomDisplay/getFlowInformation/index.html";
        } else {
            url = "/booking/ajax/roomDisplay/getFlowInformation/index.html";
        }
        $.ajax({
            type: "GET",
            url: url,
            data: dataSend,
            cache: false,
            async: false
        }).done(function(data) {
            if (data) {
                console.log("getFlowInformation ok!", data);
                if (typeof fn === "function") {
                    if (data.errorCode && data.errorCode == "60") {
                        getFlowErrors(data.lightBox.tcmFromErrorCode, data.lightBox.errorMessage);
                    } else {
                        fn(data);
                    }
                }
            } else {
                console.log("showModalError > data is empty", data);
                getFlowErrors(pageData.tcmGenericErrorTcm, pageData.tcmGenericErrorMsg);
                return false;
            }
        }).fail(function(data) {
            console.log("RoomDisplay - Fail call getFlowInformation: ", data.status);
            if (data.status == "403") {
                getFlowErrors(pageData.tcm403ErrorTcm, pageData.tcm403ErrorMsg);
            } else {
                getFlowErrors(pageData.tcmGenericErrorTcm, pageData.tcmGenericErrorMsg);
            }
        });
    };
    var getLastSearchData = function() {
        if (!LastSearchData) {
            var data = false;
            var flowInformation = getFlowInformation(function($info) {
                if ($info && $info.displayBean && $info.backingBeanInfo) {
                    data = {
                        fini: Utils.getURLParameter("fini"),
                        fout: Utils.getURLParameter("fout"),
                        voucherCode: $info.backingBeanInfo.voucherCode,
                        pcode: $info.backingBeanInfo.pcode,
                        b2b: $info.backingBeanInfo.b2b,
                        destinationCode: $info.backingBeanInfo.destinationCode,
                        destinationId: $info.backingBeanInfo.destinationId,
                        hotelId: $info.backingBeanInfo.hotelId,
                        searchStringID: $info.backingBeanInfo.searchStringID,
                        urlHotel: $info.backingBeanInfo.urlHotel,
                        optimicedCall: $info.displayBean.optimicedCall,
                        hotelFrontCode: $info.displayBean.hotelTcm,
                        businessType: $info.displayBean.businessType,
                        divisa: $info.backingBeanInfo.divisa,
                        virtualHotel: $info.backingBeanInfo.virtualHotel,
                        hotelCode: $info.backingBeanInfo.hotelCode,
                        evId: $info.backingBeanInfo.evId,
                        party: $info.backingBeanInfo.party,
                        campaignId: $info.backingBeanInfo.campaignId,
                        busqId: $info.backingBeanInfo.busqId,
                        groupon: $info.backingBeanInfo.groupon,
                        backcode: $info.backingBeanInfo.backcode,
                        tipoBuscador: $info.backingBeanInfo.tipoBuscador,
                        searchLandingExpress: true,
                        roomRequest: [],
                        contracts: [],
                        rates: null,
                        b2bData: null,
                        searchData: null,
                        backingBeanInfo: null,
                        backingBeanInfo: null,
                        totalRooms: null,
                        totalNights: null,
                        totalAdults: null,
                        totalChildren: null,
                        totalBabies: null
                    };
                    if ($info.backingBeanInfo.b2bData) {
                        var b2bData = {
                            branch: $info.backingBeanInfo.b2bData.branch,
                            branchId: $info.backingBeanInfo.b2bData.branchId,
                            company: $info.backingBeanInfo.b2bData.company,
                            customer: $info.backingBeanInfo.b2bData.customer,
                            partyIdCompany: $info.backingBeanInfo.b2bData.partyIdCompany,
                            partyIdCustomer: $info.backingBeanInfo.b2bData.partyIdCustomer,
                            bpc: $info.backingBeanInfo.b2bData.bpc,
                            favouriteHotels: $info.backingBeanInfo.b2bData.favouriteHotels,
                            frequentHotels: $info.backingBeanInfo.b2bData.frequentHotels,
                            username: $info.backingBeanInfo.b2bData.username,
                            ccgType: $info.backingBeanInfo.b2bData.ccgType,
                            isCcgType: $info.backingBeanInfo.b2bData.isCcgType,
                            type: $info.backingBeanInfo.b2bData.type
                        };
                        data.b2bData = b2bData;
                    }
                    if ($info.displayBean) {
                        if (!$.isEmptyObject($info.displayBean.contracts)) {
                            data.contracts = [];
                            $.each($info.displayBean.contracts, function(i, contract) {
                                data.contracts.push(contract);
                            });
                        }
                    }
                    if (!$.isEmptyObject($info.displayBean.searchData)) {
                        data.searchData = $info.displayBean.searchData;
                        $.each(data.searchData.hotelSearchData[0].roomSearchData, function(key, content) {
                            delete content.paxCombination.uniqueStringWithoutAge;
                        });
                        if (data.searchData.loyaltySearchData) {
                            delete data.searchData.loyaltySearchData.loyaltyProgram;
                        }
                    }
                    if (!$.isEmptyObject($info.backingBeanInfo)) {
                        data.backingBeanInfo = $info.backingBeanInfo;
                    }
                    if ($info.backingBeanInfo.nadults1) {
                        data.roomRequest[0] = {
                            numberOfAdults: $info.backingBeanInfo.nadults1,
                            numberOfChildren: $info.backingBeanInfo.nchilds1 || 0,
                            numberOfBabies: $info.backingBeanInfo.nbabies1 || 0
                        };
                    }
                    if ($info.backingBeanInfo.nadults2) {
                        data.roomRequest[1] = {
                            numberOfAdults: $info.backingBeanInfo.nadults2,
                            numberOfChildren: $info.backingBeanInfo.nchilds2 || 0,
                            numberOfBabies: $info.backingBeanInfo.nbabies2 || 0
                        };
                    }
                    if ($info.backingBeanInfo.nadults3) {
                        data.roomRequest[2] = {
                            numberOfAdults: $info.backingBeanInfo.nadults3,
                            numberOfChildren: $info.backingBeanInfo.nchilds3 || 0,
                            numberOfBabies: $info.backingBeanInfo.nbabies3 || 0
                        };
                    }
                    if ($info.backingBeanInfo.nadults4) {
                        data.roomRequest[3] = {
                            numberOfAdults: $info.backingBeanInfo.nadults4,
                            numberOfChildren: $info.backingBeanInfo.nchilds4 || 0,
                            numberOfBabies: $info.backingBeanInfo.nbabies4 || 0
                        };
                    }
                    if ($info.backingBeanInfo.nadults5) {
                        data.roomRequest[4] = {
                            numberOfAdults: $info.backingBeanInfo.nadults5,
                            numberOfChildren: $info.backingBeanInfo.nchilds5 || 0,
                            numberOfBabies: $info.backingBeanInfo.nbabies5 || 0
                        };
                    }
                    data.totalRooms = data.roomRequest.length;
                    if (data.fini && data.fout) {
                        data.totalNights = Utils.getDiffDays(data.fini, data.fout);
                    }
                    if (!$.isEmptyObject(data.roomRequest)) {
                        data.totalAdults = 0;
                        data.totalChildren = 0;
                        data.totalBabies = 0;
                        $.each(data.roomRequest, function(i, room) {
                            var lazyRoomItem = {
                                numberOfAdults: room.numberOfAdults,
                                numberOfChildren: room.numberOfChildren,
                                numberOfBabies: room.numberOfBabies
                            };
                            data.totalAdults += parseInt(room.numberOfAdults);
                            data.totalChildren += parseInt(room.numberOfChildren);
                            data.totalBabies += parseInt(room.numberOfBabies);
                        });
                    }
                    setTealiumBeanBuscador($info.displayBean.tealiumBeanBuscador);
                    setTealiumBeanHotel($info.displayBean.beanHotel);
                    setTealiumBeanUser($info.displayBean.user);
                }
            });
            LastSearchData = data;
            return data;
        } else {
            return LastSearchData;
        }
    };
    var callAvailErrorCode = function(errorData, fn) {
        var status = "error";
        if (errorData.code != 300) {
            console.log("No Avail code: ", errorData.code, "message: ", errorData.message);
            status = "noavail";
            noAvailabilityActions();
        } else {
            if (errorData.redirectURL) {
                console.log("Event tool Error: ", errorData.code, "message: ", errorData.message);
                window.location.href = "/" + decodeURIComponent(errorData.redirectURL);
            } else {
                console.log("Error Availability: ", errorData);
                getFlowErrors(pageData.tcmGenericErrorTcm, pageData.tcmGenericErrorMsg);
            }
        }
        if (typeof fn != "undefined") {
            fn(status);
        }
    };
    var checkParamDates = function(fn) {
        var result = true;
        if (!Utils.getURLParameter("fini") || !Utils.getURLParameter("fout")) {
            result = false;
            var options = {
                backdrop: "static",
                keyboard: true,
                show: true
            };
            showModalError("#error-modal-rd", options, pageData.tcmGenericErrorMsg);
        }
        if (typeof fn == "function") {
            fn(result);
        }
    };
    var hideLazyLoading = function() {
        $(".loading-rd-wrapper").find(".cnt-loading-rd-solid").hide();
        $(".loading-rd-wrapper").removeClass("loading-rd-wrapper");
        if ($("#js-new-search-form").length) {
            $("#js-new-search-form").prop("disabled", false);
        }
    };
    var callUtagScript = function() {
        (function(a, b, c, d) {
            a = "//tags.tiqcdn.com/utag/nh-hoteles/web-mobile/prod/utag.js";
            b = document;
            c = "script";
            d = b.createElement(c);
            d.src = a;
            d.type = "text/java" + c;
            d.async = true;
            a = b.getElementsByTagName(c)[0];
            a.parentNode.insertBefore(d, a);
        })();
    };
    var showModalError = function(idModal, options, errorMessage) {
        var id = idModal ? idModal : "#modal-error";
        var optionsModal = options ? options : "show";
        if (idModal) {
            $(idModal).find(".error-message").html(errorMessage);
        }
        $(id).modal(options);
    };
    var getFlowErrors = function(errorTcm, errorMsg) {
        var options = {
            backdrop: "static",
            keyboard: true,
            show: true
        };
        var utagError = {
            page: {
                errorType: errorTcm
            }
        };
        if (typeof utag_data != "undefined") {
            utag_data.page.errorType = errorTcm;
        } else {
            var utag_data = utagError;
        }
        callUtagScript();
        showModalError("#error-modal-rd", options, errorMsg);
        return false;
    };
    var noAvailabilityActions = function() {
        $(".loading-rd-wrapper").hide();
        $("#lazy-noavail-box").show();
        if ($("#js-new-search-form").length) {
            $("#js-new-search-form").prop("disabled", false);
        }
        if ($("#js-new-search").length) {
            scrollToBottom();
        }
    };
    var scrollToBottom = function() {
        var scrollingElement = document.scrollingElement || document.body;
        var closeBtn = $(".modal-njs-calendar .close");
        for (var i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener("click", function() {
                scrollingElement.scrollTop = scrollingElement.scrollHeight;
            });
        }
    };
    var orderKeys = function(tab) {
        $.each(tab.rooms, function(key, room) {
            var sortedObject = {};
            if (room.roomGroupType.PREPAYMENT) {
                sortedObject.PREPAYMENT = room.roomGroupType.PREPAYMENT;
            }
            if (room.roomGroupType.SEMIFLEXIBLE) {
                sortedObject.SEMIFLEXIBLE = room.roomGroupType.SEMIFLEXIBLE;
            }
            if (room.roomGroupType.FLEXIBLE) {
                sortedObject.FLEXIBLE = room.roomGroupType.FLEXIBLE;
            }
            tab.rooms[key].roomGroupType = sortedObject;
        });
        return tab;
    };
    var setTealiumBeanBuscador = function(buscador) {
        if (buscador && utag_data.search) {
            utag_data.search.iD = buscador.busqID;
            utag_data.search.idHotel = buscador.idHotel;
            utag_data.search.city = buscador.busqCiudad;
            utag_data.search.country = buscador.busqPais;
            utag_data.search.type = buscador.busqTipo;
            utag_data.search.results = buscador.busqNumResult;
            utag_data.search.loc = buscador.busqTipoBuscador;
        }
    };
    var setTealiumBeanHotel = function(hotel) {
        if (hotel) {
            utag_data.ecommerce_action = hotel.action;
            utag_data.ecommerce_actionField_step = hotel.step;
        }
    };
    var setTealiumBeanUser = function(user) {
        if (user) {
            utag_data.user = {
                LoginState: user.estadoUsuario,
                Profile: user.tipoUsuario,
                Gender: user.gender,
                typeNHRewards: user.typeNhRewards,
                Id: user.id,
                cid: user.cookieId
            };
        }
    };
    return {
        getViewData: getViewData,
        hideLazyLoading: hideLazyLoading,
        callUtagScript: callUtagScript,
        showModalError: showModalError,
        getFlowErrors: getFlowErrors,
        checkParamDates: checkParamDates,
        orderKeys: orderKeys
    };
}();

var vueApp;

BP.RoomDisplay = function() {
    var $vm = RoomDisplayServices;
    var init = function() {
        $vm.checkParamDates(function(status) {
            if (status) {
                try {
                    getLazyHotelAvail();
                    initSearchForm();
                    widgetTripAdvisor();
                } catch (err) {
                    console.log("catch an error check it");
                    $vm.getFlowErrors(pageData.tcmGenericErrorTcm, pageData.tcmGenericErrorMsg);
                }
            }
        });
    };
    var getLazyHotelAvail = function() {
        $vm.getViewData(function(result) {
            if (result) {
                console.log("getLazyHotelAvail:", result);
                if (result.lastSearchData && typeof result == "object" && result.availData.tabRoomGroup) {
                    initVueJs(result);
                }
                setUtagData(result);
            }
        });
    };
    var initSearchForm = function() {
        var result = SearchData.newDataFromAjax();
        if ($.type(result) == "object") {
            SearchData.fillLastSearch();
            $(".hotel-city").html(HotelData.city);
        }
        $("#inputSearch").attr("value", SearchData.searchStringID);
    };
    var initVueJs = function(data) {
        vueApp = new Vue({
            el: ".vue-rd",
            data: {
                tabType: null,
                tabClass: "col-xs-12",
                tabActive: "",
                searchData: null,
                totalTabs: 1
            },
            methods: {
                init: function() {
                    console.log("Init vue");
                    this.totalTabs = Object.keys(data.availData.tabRoomGroup).length;
                    this.setAppData();
                    this.setTabClass();
                    this.setTabActive();
                    this.setCurrencyData();
                },
                setAppData: function() {
                    var tabsObjectData = data.availData.tabRoomGroup;
                    var sortedTabs = {};
                    if (typeof tridionTabsArray != "undefined" && !$.isEmptyObject(tridionTabsArray)) {
                        $.each(tridionTabsArray, function(key, value) {
                            if (tabsObjectData[value.tabKey]) {
                                var storedKey = value.tabKey;
                                var tab = $vm.orderKeys(tabsObjectData[storedKey]);
                                var tabExtraInfo = value;
                                delete tabExtraInfo["tabKey"];
                                tab["tabInfo"] = tabExtraInfo;
                                if (tab.rooms.length > 0) {
                                    sortedTabs[storedKey] = tab;
                                }
                            }
                        });
                        if (!$.isEmptyObject(tridionTabsArray)) {
                            tabsObjectData = sortedTabs;
                        }
                    }
                    data.availData.tabRoomGroup = tabsObjectData;
                    this.totalTabs = Object.keys(data.availData.tabRoomGroup).length;
                    this.tabType = tabsObjectData;
                    this.searchData = data.lastSearchData;
                },
                setTabActive: function() {
                    var activeTab = "STANDARD";
                    var activeTabConf = pageData.activeTab;
                    $.each(data.availData.tabRoomGroup, function(type, value) {
                        if (vueApp.totalTabs == 1 || activeTabConf === type || activeTabConf === "REWARDS" && (type === "CORPORATE" || type === "NH_MEDIA" || type === "PLATINUM_VIP" || type === "TRAVEL_PARTNER")) {
                            activeTab = type;
                        }
                    });
                    this.tabActive = activeTab;
                },
                setTabClass: function() {
                    if (data.availData.tabRoomGroup) {
                        switch (this.totalTabs) {
                          case 1:
                            this.tabClass = "col-xs-12";
                            break;

                          case 2:
                            this.tabClass = "col-xs-6";
                            break;

                          default:
                            this.tabClass = "col-xs-4";
                        }
                    }
                },
                setCurrencyData: function() {
                    if (!$.isEmptyObject(this.tabType)) {
                        var firstKey = Object.keys(this.tabType)[0];
                        CurrencyData.currency = this.tabType[firstKey].currency || "EUR";
                    }
                    CurrencyData.selectedCurrency = this.searchData.divisa || "";
                }
            },
            updated: function() {
                console.log("Vue js is updated");
                loadedGridActions();
            }
        });
        vueApp.init();
    };
    var loadedGridActions = function() {
        setTimeout(function() {
            carouselActions();
            updateCurrencyOnPage();
            $vm.hideLazyLoading();
            dynamicTelephones.changelazyLoadHTML();
        }, 2e3);
    };
    var updateCurrencyOnPage = function() {
        if (CurrencyData.selectedCurrency && CurrencyData.currency != CurrencyData.selectedCurrency) {
            Currency.updateCurrency();
        } else {
            Currency.updateCurrencySelector();
        }
    };
    var carouselActions = function() {
        console.log("init carouselActions");
        var activeTab = $("button.js-btn-carousel-load.active");
        initOwlCarousel(activeTab.attr("data-id-show"), function($owl) {
            $owl.on("initialized.owl.carousel", function(event) {
                activeTab.trigger("click");
            });
        });
        var content_rooms = $(".options-room-purchase");
        $('button[data-id-show=".prices-no"]').click();
        handleRadioButtonMealplan();
        var isForceRates = false;
        $.each(content_rooms, function(i, ele) {
            var $ele = $(ele);
            var totalElements = $ele.find(".form-options-room").length;
            var mealPlanKey = $ele.find("[data-mealplan]").data("mealplan");
            var totalRoomOnly = $ele.find('[data-mealplan="12"]').length + $ele.find('[data-mealplan="14"]').length;
            var totalBreakfast = totalElements - totalRoomOnly;            
            if (totalBreakfast) {
                if (!totalRoomOnly) {
                    $ele.find(".breakfast-filter").hide();
                    $ele.find(".breakfast-included").show();
                    $ele.find('button[data-id-show=".prices-yes"]').click();
                } else {
                    $ele.find(".breakfast-filter").show();
                    $ele.find(".breakfast-included").hide();
                }
            } else {
                $ele.find(".breakfast-filter").hide();
                $ele.find(".breakfast-included").hide();
            }
        });
        $(document).on("click", "[data-id-show].js-reveal-carousel", function(e) {
            var active_tab = $(this).attr("data-id-show");
            handleRateHeaders(active_tab);
        });
        $(document).on("click", ".options-room-purchase [data-id-show]", function(e) {
            handleRateHeaders();
        });
        handleRateHeaders();
       
    };
    var handleRadioButtonMealplan = function(container) {
        var $cont = container ? $(container).find(".wrap-rooms") : $(".wrap-rooms");
        $cont.find(".form-options-room .fake-radio").removeClass("active");
        $cont.find(".form-options-room .room-options").removeClass("visible");
        var first_rooms = $cont.find(".form-options-room.prices-no:first");
        $.each(first_rooms, function(i, ele) {
            $(ele).find(".fake-radio").addClass("active");
            $(ele).find(".room-options").addClass("visible");
        });
        var first_rooms = $cont.find(".form-options-room.prices-yes:first");
        $.each(first_rooms, function(i, ele) {
            $(ele).find(".fake-radio").addClass("active");
            $(ele).find(".room-options").addClass("visible");
        });
    };
    var handleRateHeaders = function(active_tab) {
        var target = $(".owl-carousel .result-item");
        var tabVisible = $(".package").filter(function() {
            return $(this).css("display") == "block";
        });
        if (tabVisible.find(".owl-item.active").length == 1) {
            target = tabVisible.find(".owl-item.active");
        }
        if (active_tab) {
            target = active_tab;
        }
        var ratesGroup = $(target).find(".options-room-purchase .wrap-rates-group");
        $.each(ratesGroup, function(i, group) {
            var $group = $(group);
            var rooms = $group.find("[data-rooms-rate]").find(".form-options-room");
            var hidden_rooms = 0;
            $.each(rooms, function(i, room) {
                if ($(room).css("display") == "none") {
                    hidden_rooms++;
                }
            });
            if (hidden_rooms == rooms.length) {
                $group.hide();
            } else {
                $group.show();
            }
        });
        handleRadioButtonMealplan();
        if ($(target).length == 1) {
            updateOwlHeigth(target);
        }
    };
    var forceRates = function(result) {
        var buttonsYes = $("button[data-id-show='.prices-yes']")
        if(buttonsYes){
            $.each(buttonsYes, function(i, ele) {
                $(ele).trigger('click');
            });
        }
    };
    var setUtagData = function(result) {
        if (typeof utag_data != "undefined") {
            var availData = result.availData;
            var searchData = result.lastSearchData;
            var hotelId = searchData.hotelId;
            if (searchData.businessType) {
                utag_data.businessType = utag_data.page.businessType = searchData.businessType;
            } else {
                utag_data.businessType = utag_data.page.businessType = "B2C";
            }
            if (searchData.evId) {
                utag_data.eventId = searchData.evId;
            }
            if (typeof availData == "object") {
                utag_data.busqListado = hotelId + "-available";
                utag_data.search.hotelsList = hotelId + "-available";
                var priceTabActive = availData.tabRoomGroup[vueApp.tabActive].minPricePerNight;
                utag_data.products_price = [ priceTabActive ];
            } else {
                if (availData == "noavail") {
                    utag_data.busqSinDispo = "No availability";
                    utag_data.products_price = [ "no-avail" ];
                    utag_data.busqListado = hotelId + "-no available";
                    utag_data.search.hotelsList = hotelId + "-no available";
                    utag_data.search.hWithoutAvailability = "1";
                    utag_data.search.withoutAvailability = "No availability";
                } else if (availData == "error" || !availData) {}
            }
        }
        $vm.callUtagScript();
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-roomdisplay")) {
        BP.RoomDisplay.init();
    }
});

var LandingFilters = function() {
    var list_result = $("#list-results");
    var mfilters = $("#filters");
    var wrap_filter_stars = "#wrap-filter-stars";
    var wrap_filter_price = ".wrap-filter-price";
    var wrap_filter_distance = ".wrap-filter-distance";
    var is_stars_active = false;
    var is_price_active = false;
    var is_distance_active = true;
    var is_sortby_active = false;
    var filter_stars = [];
    var filter_price = [];
    var filter_distance = [];
    var filter_sortby = "";
    var hotel_passes_filter = true;
    var groups = [ "#hoteles-dispo", "#hoteles-nearby", "#hoteles-nodispo", "#hoteles-dispo-promo", "#hoteles-nearby-promo" ];
    var init = function() {
        buildFiltersIni();
        setTotalNumberHotelList();
    };
    var doFiltering = function() {
        if (is_stars_active || is_price_active || is_distance_active) {
            executeFilters();
        }
        if (is_sortby_active) {
            executeSortby();
        }
        if (is_stars_active || is_price_active || is_distance_active || is_sortby_active) {
            setTotalNumberHotelList();
        }
    };
    var setTotalNumberHotelList = function() {
        if ($(list_result).find(".wrap-hotels-group").filter(":visible").length > 0) {
            var numResults = [];
            numResults["#hoteles-dispo"] = 0;
            numResults["#hoteles-nearby"] = 0;
            numResults["#hoteles-nodispo"] = 0;
            numResults["#hoteles-dispo-promo"] = 0;
            numResults["#hoteles-nearby-promo"] = 0;
            var visibleHotels = $(list_result).find(".result-item").filter(function() {
                return $(this).css("display") == "block";
            });
            var totalVisibleHotels = visibleHotels.length || 0;
            if (totalVisibleHotels == 0) {
                $(".wrap-hotels-group").hide();
                var firstHeader = $(list_result).find(".wrap-hotels-group:first-child");
                var wrap_label = firstHeader.find(".h3 > span[data-label]");
                firstHeader.find(".h3 > .js-num").html("0");
                firstHeader.show();
                wrap_label.html(wrap_label.data("label").plural || "");
                $(".js-alert-filter").show();
                $(".tab-list-map").hide();
            } else {
                $(".js-alert-filter").hide();
                $(".tab-list-map").show();
                $.each(groups, function(i, group) {
                    var $group = $(group);
                    var items_length = $group.find(".result-item").filter(function() {
                        return $(this).css("display") == "block";
                    }).length;
                    var wrap_number = $group.find(".h3 > .js-num");
                    var wrap_label = $group.find(".h3 > span[data-label]");
                    numResults[group] = parseInt(items_length);
                    if (items_length != 0) {
                        $group.show();
                        wrap_number.html(items_length);
                        if (wrap_label.length) {
                            if (items_length == 1) {
                                wrap_label.html(wrap_label.data("label").singular || wrap_label.html());
                            } else {
                                wrap_label.html(wrap_label.data("label").plural || wrap_label.html());
                            }
                        }
                    } else {
                        $group.hide();
                    }
                });
                updateFilterButtonList(numResults);
                if (totalVisibleHotels == 0 && SearchData.fini == "") {
                    $("#js-search-dispo").hide();
                }
                updateNumHotelList();
            }
        }
    };
    var updateFilterButtonList = function(resultsArray) {
        if (resultsArray) {
            var allGroupsList = $(".results-list .wrap-hotels-group");
            $.each(allGroupsList, function(i, group) {
                var $group = $(group);
                var idGroup = "#" + $group.attr("id");
                if (typeof resultsArray[idGroup] != "undefined" && resultsArray[idGroup] == 0) {
                    $group.hide();
                    if ($group.next(".wrap-hotels-group").length) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    $(".js-top-title").show();
                    $(".js-top-title-filters").hide();
                    $group.find(".js-top-title").hide();
                    $group.find(".js-top-title-filters").show();
                    $group.show();
                    return false;
                }
            });
        }
    };
    var updateNumHotelList = function() {
        var result_item = $(list_result).find(".result-item").filter(":visible");
        $.each(result_item, function(i, ele) {
            var wrap_number = $(ele).find(".img-result-contaner .gradient-layer [data-recsort]");
            var index = i + 1;
            $(wrap_number).html(index + ".-");
        });
    };
    var setHotelPassesFilter = function(hotel) {
        if (filter_stars.length != 0) {
            var num_star = $(hotel).find(".stars[data-stars]").data("stars");
            if ($.inArray(num_star, filter_stars) == -1) {
                hotel_passes_filter = false;
                return false;
            }
        }
        if (filter_price.length != 0) {
            var price = parseFloat($(hotel).find("[data-preciototal]").data("preciototal"));
            var pmax = parseFloat(filter_price[1]);
            if (price > pmax) {
                hotel_passes_filter = false;
                return false;
            }
        }
        if (filter_distance.length != 0) {
            var distance = parseFloat($(hotel).find("[data-distance]").data("distance"));
            var dmax = parseFloat(filter_distance[1]);
            if (distance > dmax) {
                hotel_passes_filter = false;
                return false;
            }
        }
    };
    var setFilterValues = function() {
        if (is_stars_active) {
            setFilterStars();
        }
        if (is_price_active) {
            setFilterPrice();
        }
        if (is_distance_active) {
            setFilterDistance();
        }
    };
    var setFilterStars = function() {
        var result_array = [];
        var wrap_stars = $(wrap_filter_stars).find("[data-filter-stars]");
        var total_cat = $(wrap_stars).length;
        var checked_cat = $(wrap_filter_stars).find("[data-filter-stars]:checked");
        if (checked_cat.length == 0) {
            $.each(wrap_stars, function(i, ele) {
                var mo = $(ele).data("filter-stars");
                result_array.push(mo);
            });
        } else {
            $.each(checked_cat, function(i, ele) {
                var mo = $(ele).data("filter-stars");
                result_array.push(mo);
            });
        }
        if (result_array.length != 0) {
            filter_stars = result_array;
        }
        return filter_stars;
    };
    var setFilterPrice = function() {
        var fprice = $("#filter-price");
        var pmin = $(wrap_filter_price).find(".values-slders .pull-left").html();
        var pmax = $(fprice).val();
        var result_array = [ pmin, pmax ];
        if (result_array.length != 0) {
            filter_price = result_array;
        }
        return filter_price;
    };
    var setFilterDistance = function() {
        var fdistance = $("#filter-distance");
        var dmin = $(wrap_filter_distance).find(".values-slders .pull-left").html();
        var dmax = $(fdistance).val();
        var result_array = [ dmin, dmax ];
        if (result_array.length != 0) {
            filter_distance = result_array;
        }
        return filter_distance;
    };
    var executeFilters = function() {
        setFilterValues();
        var list_result_hotels = $(list_result).find(".result-item");
        $.each(list_result_hotels, function(i, hotel) {
            hotel_passes_filter = true;
            setHotelPassesFilter(hotel);
            var numero = parseInt($(hotel).find("[data-recsort]").data("recsort"));
            if (!hotel_passes_filter) {
                $(hotel).addClass("js-hidden");
                $(hotel).hide();
                if (LandingData.hasListMap != false && typeof google != "undefined") {
                    if (typeof MapsData.markers != "undefined" && typeof MapsData.markers[numero - 1] != "undefined") {
                        MapsData.markers[numero - 1].setMap(null);
                    }
                }
            } else {
                $(hotel).removeClass("js-hidden");
                $(hotel).show();
                if (LandingData.hasListMap && typeof google != "undefined") {
                    if (typeof MapsData.markers != "undefined" && typeof MapsData.markers[numero - 1] != "undefined") {
                        MapsData.markers[numero - 1].setMap(MapsData.map);
                    }
                }
            }
        });
    };
    var executeSortby = function() {
        filter_sortby = $("#sortby").val();
        var selected_sortby = filter_sortby;
        var groups = [ "hoteles-dispo", "hoteles-nearby", "hoteles-nodispo" ];
        if (selected_sortby == "precioAsc" || selected_sortby == "precioDes") {
            groups = [ "hoteles-dispo", "hoteles-nearby" ];
        }
        $.each(groups, function(i, group) {
            doSortby(selected_sortby, group);
        });
    };
    var doSortby = function(sortby, group) {
        var group_id = $("#" + group);
        var hotels_to_sort = $(group_id).find(".result-item").detach();
        hotels_to_sort = Array.prototype.slice.call(hotels_to_sort, 0);
        hotels_to_sort.sort(function(a, b) {
            var result = null;
            switch (sortby) {
              case "nhRec":
                var e1 = parseInt($(a).find("[data-recsort]").data("recsort"));
                var e2 = parseInt($(b).find("[data-recsort]").data("recsort"));
                result = e1 > e2 ? 1 : -1;
                break;

              case "precioAsc":
              case "precioDes":
                var e1 = parseInt($(a).find("[data-preciototal]").data("preciototal"));
                var e2 = parseInt($(b).find("[data-preciototal]").data("preciototal"));
                if (sortby == "precioAsc") {
                    result = e1 > e2 ? 1 : -1;
                } else if (sortby == "precioDes") {
                    result = e1 < e2 ? 1 : -1;
                }
                break;

              case "nombreAsc":
              case "nombreDes":
                var e1 = $.trim($(a).find(".img-result-contaner .track-hotel").attr("title")).replace(/\n/g, "").replace(/ /g, "").replace(/\s/g, "");
                var e2 = $.trim($(b).find(".img-result-contaner .track-hotel").attr("title")).replace(/\n/g, "").replace(/ /g, "").replace(/\s/g, "");
                if (sortby == "nombreAsc") {
                    result = e1 > e2 ? 1 : -1;
                } else if (sortby == "nombreDes") {
                    result = e1 < e2 ? 1 : -1;
                }
                break;

              case "distCentroAsc":
              case "distCentroDes":
              case "distPoiAsc":
              case "distPoiDes":
                var e1 = parseFloat($(a).find("[data-distance]").data("distance"));
                var e2 = parseFloat($(b).find("[data-distance]").data("distance"));
                if (sortby == "distCentroAsc" || sortby == "distPoiAsc") {
                    result = e1 > e2 || isNaN(e1) ? 1 : -1;
                } else if (sortby == "distCentroDes" || sortby == "distPoiDes") {
                    result = e1 < e2 || isNaN(e1) ? 1 : -1;
                }
                break;

              case "catAsc":
              case "catDes":
                var e1 = parseInt($(a).find(".stars[data-stars]").data("stars"));
                var e2 = parseInt($(b).find(".stars[data-stars]").data("stars"));
                if (sortby == "catAsc") {
                    result = e1 > e2 ? 1 : -1;
                } else if (sortby == "catDes") {
                    result = e1 < e2 ? 1 : -1;
                }
                break;
            }
            return result;
        });
        for (var i = 0, l = hotels_to_sort.length; i < l; i++) {
            group_id.find(".wrap-hotels").append(hotels_to_sort[i]);
        }
    };
    var reloadIsFilterActiveVars = function() {
        is_stars_active = false;
        is_price_active = false;
        is_distance_active = true;
    };
    var buildFiltersIni = function() {
        $(".show-filters").on("click", function() {
            setTimeout(function() {
                reloadIsFilterActiveVars();
                buildPriceFilter();
                buildDistanceFilter();
            }, 500);
        });
        buildStartsFilter();
        $("#submit-filters").on("click", function() {
            doFiltering();
        });
        $("#sortby").on("change", function() {
            is_sortby_active = true;
        });
        $(wrap_filter_stars).find("[data-filter-stars]").on("click", function() {
            is_stars_active = true;
        });
    };
    var buildStartsFilter = function() {
        var ratingsDictionary = {
            "5": false,
            "4": false,
            "3": false,
            "2": false,
            "1": false
        };
        ratingsDictionary["5"] = $(".result-item .stars[data-stars='5']").length != 0 ? true : false;
        ratingsDictionary["4"] = $(".result-item .stars[data-stars='4']").length != 0 ? true : false;
        ratingsDictionary["3"] = $(".result-item .stars[data-stars='3']").length != 0 ? true : false;
        ratingsDictionary["2"] = $(".result-item .stars[data-stars='2']").length != 0 ? true : false;
        ratingsDictionary["1"] = $(".result-item .stars[data-stars='1']").length != 0 ? true : false;
        $.each(ratingsDictionary, function(index, value) {
            var html_starts = "";
            if (value) {
                for (var i = 0; i < index; i++) {
                    html_starts += '<span class="icon-star micro"></span>';
                }
                var text = '<div class="row margin-xs-b-20"><div class="col-sm-12">';
                text += '<div class="checkbox pull-left no-padding">';
                text += '<input id="stars-number-' + index + '" data-filter-stars="' + index + '" name="stars-number" type="checkbox" value="">';
                text += '<label for="stars-number-' + index + '"></label>';
                text += "</div>";
                text += '<div class="stars pull-left">' + html_starts + "</div>";
                text += "</div></div>";
                $(wrap_filter_stars).append(text);
            }
        });
    };
    var buildPriceFilter = function() {
        var pmin = 0;
        var pmax = 0;
        var list_hotels = $(list_result).find(".result-item [data-preciototal]");
        $.each(list_hotels, function(i, ele) {
            var price = parseFloat($(ele).data("preciototal"));
            if (!isNaN(price) && i == 0) {
                pmax = price;
                pmin = price;
            } else if (!isNaN(price)) {
                pmax = price > pmax ? price : pmax;
                pmin = price < pmin ? price : pmin;
            }
        });
        if (pmin != 0 && pmax != 0 && pmin != pmax) {
            var pmin_parse = parseInt(pmin);
            var pmax_parse = parseInt(pmax);
            $("#filter-price").slider({
                min: parseFloat(pmin),
                max: parseFloat(pmax),
                value: parseFloat(pmax),
                precision: 2,
                step: .01,
                tooltip: "always",
                formatter: function(value) {
                    return parseInt(value) + " " + CurrencyData.currency;
                }
            });
            $("#filter-price").slider().on("slideStart", function(ev) {
                console.log("Slide Starts PRICE");
                is_price_active = true;
            });
            $(wrap_filter_price).find(".values-slders .pull-left").html(pmin_parse);
            $(wrap_filter_price).find(".values-slders .pull-right").html(pmax_parse);
            $("#filter-price").css("display", "none");
            $('#sortby option[value="precioAsc"]').show();
            $('#sortby option[value="precioDes"]').show();
            $(wrap_filter_price).show();
        } else {
            $('#sortby option[value="precioAsc"]').hide();
            $('#sortby option[value="precioDes"]').hide();
            $(wrap_filter_price).hide();
        }
    };
    var buildDistanceFilter = function() {
        var dmin = 0;
        var dmax = 0;
        var list_hotels = $(list_result).find(".result-item [data-distance]");
        $.each(list_hotels, function(i, ele) {
            var distance = parseFloat($(ele).data("distance"));
            if (!isNaN(distance) && i == 0) {
                dmax = distance;
                dmin = distance;
            } else if (!isNaN(distance)) {
                dmax = distance > dmax ? distance : dmax;
                dmin = distance < dmin ? distance : dmin;
            }
        });
        if (dmin != 0 && dmax != 0 && dmin != dmax) {
            var dmin_parse = parseInt(dmin);
            var dmax_parse = parseInt(dmax);
            $("#filter-distance").slider({
                min: parseFloat(dmin),
                max: parseFloat(dmax),
                value: parseFloat(dmax),
                precision: 2,
                step: .01,
                tooltip: "always",
                formatter: function(value) {
                    return value + " Km";
                }
            });
            $("#filter-distance").slider().on("slideStart", function(ev) {
                console.log("Slide DISTANCE");
                is_distance_active = true;
            });
            $(wrap_filter_distance).find(".values-slders .pull-left").html(dmin_parse);
            $(wrap_filter_distance).find(".values-slders .pull-right").html(dmax_parse);
            $("#filter-distance").css("display", "none");
            $('#sortby option[value="distCentroAsc"]').show();
            $('#sortby option[value="distCentroDes"]').show();
            $(wrap_filter_distance).show();
        } else {
            $('#sortby option[value="distCentroAsc"]').hide();
            $('#sortby option[value="distCentroDes"]').hide();
            $(wrap_filter_distance).hide();
        }
    };
    return {
        init: init,
        doFiltering: doFiltering,
        setFilterDistance: setFilterDistance,
        executeSortby: executeSortby,
        updateNumHotelList: updateNumHotelList,
        updateFilterButtonList: updateFilterButtonList
    };
}();

var LandingServices = function() {
    var showErrorLighbox = function(tcmError) {
        var lightboxError = "#java-error";
        var target = $(lightboxError).data("target");
        if (tcmError) {
            var url = $(lightboxError).attr("href");
            if (getURLParameter(url, "tcmError")) {
                var newUrl = url.replace(getURLParameter(url, "tcmError"), tcmError);
                $(lightboxError).attr("href", newUrl);
            } else {
                $(lightboxError).attr("href", url + "&tcmError=" + tcmError);
            }
        }
        $(lightboxError).trigger("click");
        $(target).on("hide.bs.modal", function() {
            console.log("hide modal");
            parent.window.location.href = "/";
        });
    };
    var getURLParameter = function(name, url) {
        var urlT = url ? url : window.location.href;
        return (RegExp(name + "=" + "(.+?)(&|$)").exec(urlT) || [ , null ])[1];
    };
    var isLandingPromo = function() {
        return getURLParameter("pcode") ? true : false;
    };
    return {
        showErrorLighbox: showErrorLighbox,
        getURLParameter: getURLParameter,
        isLandingPromo: isLandingPromo
    };
}();

var LandingPage = function() {
    var lazyHotels;
    var groupResults = [];
    var isNoAvailabilityPage = false;
    var analyticsLazyData = {};
    var availabilityMarkers = new Array();
    var lazyGroups = [ "#hoteles-dispo", "#hoteles-nearby" ];
    var isPromo = false;
    var $sv;
    var init = function() {
        $sv = LandingServices;
        if (typeof pageData.javaError != "undefined" && pageData.javaError == "true") {
            console.log("JAVA ERROR: ", pageData.javaError);
            $("#java-error").trigger("click");
        } else {
            groupResults["#hoteles-dispo"] = 0;
            groupResults["#hoteles-nearby"] = 0;
            groupResults["#hoteles-nodispo"] = 0;
            groupResults["#hoteles-dispo-promo"] = 0;
            groupResults["#hoteles-nearby-promo"] = 0;
            isPromo = $sv.isLandingPromo();
            console.log("isLandingPromo:", isPromo);
            callLazyAjax();
            getOccupancyFromUrl();
            SearchData.fillModalsAndLabelsLastSearch();
            widgetTripAdvisorMulti();
        }
    };
    var callLazyAjax = function() {
        LandingFilters.updateNumHotelList();
        if (LazyDataSend && !$.isEmptyObject(LazyDataSend.hotels) && pageData.destinoCode && JSON.stringify(LazyDataSend)) {
            $.ajax({
                type: "POST",
                url: "/rest/landing/avail/" + pageData.destinoCode,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(LazyDataSend),
                dataType: "json",
                cache: false
            }).done(function(data) {
                try {
                    if (!$.isEmptyObject(data)) {
                        console.log("Landing Avail:", data);
                        lazyHotels = data;
                        setLazyAjaxValues();
                    } else {
                        if (!isVirtualDestiny()) {
                            noAvailabilityPageActions();
                        } else {
                            console.log("is Virtual Destiny");
                            virtualPageActions();
                        }
                    }
                } catch (err) {
                    console.log("Ajax done but error: ", err);
                    $sv.showErrorLighbox(pageData.tcmInternalError);
                }
            }).fail(function(data) {
                try {
                    console.log("Fail call: ", data.status, data.responseText, typeof data.responseText);
                    var responseParsed = JSON.parse(data.responseText);
                    if (typeof responseParsed == "object" && responseParsed.message) {
                        $sv.showErrorLighbox(responseParsed.message);
                    } else {
                        $sv.showErrorLighbox(pageData.tcmInternalError);
                    }
                } catch (err) {
                    console.log("Ajax fail but error on the code: ", err);
                    $sv.showErrorLighbox(pageData.tcmInternalError);
                }
            });
        } else {
            if (!pageData.withDates) {
                console.log("Landing without dates");
                pageInitActions();
            } else {
                console.log("Error: There is no hotels to send");
                $sv.showErrorLighbox(pageData.tcmInternalError);
            }
        }
    };
    var getOccupancyFromUrl = function() {
        if (Utils.getURLParameter("nadults1")) {
            SearchData["nAdults1"] = Utils.getURLParameter("nadults1");
            SearchData["nChilds1"] = Utils.getURLParameter("nchilds1");
            SearchData["nBabies1"] = Utils.getURLParameter("nbabies1");
        }
        if (Utils.getURLParameter("nadults2")) {
            SearchData["nAdults2"] = Utils.getURLParameter("nadults2");
            SearchData["nChilds2"] = Utils.getURLParameter("nchilds2");
            SearchData["nBabies2"] = Utils.getURLParameter("nbabies2");
        }
        if (Utils.getURLParameter("nadults3")) {
            SearchData["nAdults3"] = Utils.getURLParameter("nadults3");
            SearchData["nChilds3"] = Utils.getURLParameter("nchilds3");
            SearchData["nBabies3"] = Utils.getURLParameter("nbabies3");
        }
        if (Utils.getURLParameter("nadults4")) {
            SearchData["nAdults4"] = Utils.getURLParameter("nadults4");
            SearchData["nChilds4"] = Utils.getURLParameter("nchilds4");
            SearchData["nBabies4"] = Utils.getURLParameter("nbabies4");
        }
        if (Utils.getURLParameter("nadults5")) {
            SearchData["nAdults5"] = Utils.getURLParameter("nadults5");
            SearchData["nChilds5"] = Utils.getURLParameter("nchilds5");
            SearchData["nBabies5"] = Utils.getURLParameter("nbabies5");
        }
    };
    var isVirtualDestiny = function() {
        var isVirtual = false;
        $.each(lazyGroups, function(i, group) {
            if ($(group).find(".result-item").length > 0) {
                $.each($(group).find(".result-item"), function(i, hotel) {
                    isVirtual = $(hotel).data("virtual") ? true : false;
                });
            }
        });
        return isVirtual;
    };
    var virtualPageActions = function() {
        if (!$.isEmptyObject(MapsLazyData)) {
            $.each(MapsLazyData, function(index, ele) {
                console.log(ele);
                var mapElement = ele;
                availabilityMarkers.push(mapElement);
            });
        }
        pageInitActions();
    };
    var noAvailabilityPageActions = function() {
        $("#hoteles-nodispo #show-filters").show();
        isNoAvailabilityPage = true;
        $.each(lazyGroups, function(i, group) {
            if ($(group).find(".result-item").length > 0) {
                $.each($(group).find(".result-item"), function(i, ele) {
                    setNoAvailabilityHotel(ele, group);
                });
            }
        });
        $(".js-show-noavailability").show();
        $(".js-hide-noavailability").hide();
        pageInitActions();
    };
    var setNoAvailabilityHotel = function(hotel, group) {
        var $hotel = $(hotel);
        $hotel.find(".btn-lazy").hide();
        $hotel.find(".js-nodispo-show").fadeIn();
        if (group != "hoteles-nearby") {
            var eleDetached = $hotel.detach();
            $("#hoteles-nodispo").find(".wrap-hotels").append(eleDetached);
            groupResults["#hoteles-nodispo"] = groupResults["#hoteles-nodispo"] + 1;
        } else {
            $(hotel).remove();
        }
    };
    var setLazyAjaxValues = function() {
        if (lazyHotels) {
            $.each(lazyGroups, function(i, group) {
                if ($(group).find(".result-item").length > 0) {
                    $.each($(group).find(".result-item"), function(i, ele) {
                        setLazyHotelInfo(ele, group);
                    });
                }
            });
            pageInitActions();
        }
    };
    var setLazyHotelInfo = function(ele, group) {
        var $ele = $(ele);
        var rec = $ele.find("[data-recsort]").data("recsort");
        var backcode = $ele.data("backcode");
        if (lazyHotels[backcode]) {
            var lazyHotelEle = lazyHotels[backcode];
            if (lazyHotelEle.price) {
                var currency = lazyHotelEle.price.currency || "EUR";
                CurrencyData.currency = currency;
                var totalPrice = lazyHotelEle.price.priceTotal;
                var dayPrice = lazyHotelEle.price.pricePerDay;
            }
            $ele.find(".js-totalprice").html(totalPrice);
            $ele.find(".js-currency").html(currency);
            var submitButton = $ele.find('form button[type="submit"][data-preciototal]');
            if (submitButton.length) {
                submitButton.data("preciodia", dayPrice);
                submitButton.data("preciototal", totalPrice);
                submitButton.attr("disabled", false);
            }
            $ele.find(".btn-lazy").hide();
            $ele.find(".js-dispo-show").fadeIn();
            if (MapsLazyData[rec]) {
                var mapElement = MapsLazyData[rec];
                var logoImage = mapElement.hotelLogo ? '<img class="logo-hotel" src="' + mapElement.hotelLogo + '" alt="' + mapElement.hotelMarca + '" />' : "";
                var htmlRating = "";
                var htmlStars = "";
                if (mapElement.hotelStars) {
                    for (var i = 0; i < parseInt(mapElement.hotelStars); i++) {
                        htmlStars += '<span class="icon-star small"></span>';
                    }
                    var htmlRating = '<div class="stars" data-stars="' + mapElement.hotelStars + '">' + htmlStars + "</div>";
                }
                var htmlPrice = "";
                if (dayPrice && dayPrice != totalPrice) {
                    htmlPrice += '<div class="clearfix night-price"><span class="pull-left">' + pageData.lblMapFrom + '</span><span class="pull-right"><span class="js-preciodia">' + dayPrice + '</span><sup class="js-currency">' + currency + "</sup></span></div>";
                }
                if (totalPrice) {
                    htmlPrice += '<div class="total-price"><span class="pull-left">' + pageData.lblMapPriceTotal + '</span><span class="pull-right"><span class="js-preciototal">' + totalPrice + '</span><sup class="js-currency">' + currency + "</sup></span></div>";
                }
                var htmlWindow = "";
                if (mapElement.hotelLink && mapElement.hotelDescription && mapElement.hotelSubmitForm) {
                    htmlWindow = '<div class="infoSite new-pin clearfix"><div class="img-info-hotel pull-left">' + mapElement.hotelImage + '</div><div class="pull-left info-hotel-detail">' + logoImage + '<p class="name-hotel"><a href="' + mapElement.hotelLink + '" >' + mapElement.hotelDescription + "</a></p>" + htmlRating + "" + htmlPrice + '<div class="">' + mapElement.hotelSubmitForm + "</div></div></div>";
                }
                mapElement.info = htmlWindow;
                availabilityMarkers.push(mapElement);
            }
            var isHotelPromo = lazyHotelEle.promo ? true : false;
            if (isHotelPromo) {
                var eleDetached = $ele.detach();
                $(group + "-promo").find(".wrap-hotels").append(eleDetached);
                if (typeof groupResults[group + "-promo"] != "undefined") {
                    groupResults[group + "-promo"] = groupResults[group + "-promo"] + 1;
                }
                if ($(group + "-promo").is(":hidden")) {
                    $(group + "-promo").show();
                }
            } else {
                if (typeof groupResults[group] != "undefined") {
                    groupResults[group] = groupResults[group] + 1;
                }
            }
        } else {
            setNoAvailabilityHotel(ele, group);
        }
    };
    var pageInitActions = function() {
        $(".loading-lazy").hide();
        if ($("#filters").length) {
            LandingFilters.init();
        }
        if (isPromo) {
            $(".show-promo").show();
            $(".hide-promo").hide();
        }
        if (isNoAvailabilityPage || $("#filters").length == 0) {
            LandingFilters.updateFilterButtonList(groupResults);
        }
        if (!isNoAvailabilityPage) {
            if (availabilityMarkers.length != 0) {
                MapsData.data[0] = availabilityMarkers;
                $('[data-id-show="#map-results-ey"]').on("click", function() {
                    if ($.inArray("googleMapLanding", GoogleMapsApi.mapLoaded) == -1 && $("#googleMapLanding").length) {
                        console.log("init map googleMapLanding Lazyload");
                        GoogleMapsApi.init("googleMapLanding", MapsData, MapsData.data[0], "100%", "350px", 2);
                    } else {
                        GoogleMapsApi.centerMap();
                    }
                });
            }
        }
        trackLandingLazyload(setLazyAnalyticsData());
        Currency.init();
        $("#sortby").val("distPoiAsc");
        LandingFilters.executeSortby();
    };
    var setLazyAnalyticsData = function() {
        if (typeof utag_data != "undefined") {
            $.each($("#list-results .result-item"), function(i, hotel) {
                var $hotel = $(hotel);
                var availInfo = $hotel.parents('.wrap-hotels-group[id="hoteles-nodispo"]').length ? "-no-available" : "-available";
                var firstBusqListado = utag_data.busqListado ? "," : "";
                utag_data.busqListado += firstBusqListado + "" + ($hotel.data("backcode") + "" + availInfo);
                utag_data.busqHSinDispo = parseInt(groupResults["#hoteles-nodispo"]) == 0 ? "" : groupResults["#hoteles-nodispo"].toString();
                utag_data.busqSinDispo = LandingPage.isNoAvailabilityPage ? "No availability" : "";
                var firstHotelsList = utag_data.search.hotelsList ? "," : "";
                utag_data.search.hotelsList += firstHotelsList + "" + ($hotel.data("backcode") + "" + availInfo);
                utag_data.search.results = pageData.totalHotels;
                utag_data.search.hWithoutAvailability = parseInt(groupResults["#hoteles-nodispo"]) == 0 ? "" : groupResults["#hoteles-nodispo"].toString();
                utag_data.search.withoutAvailability = LandingPage.isNoAvailabilityPage ? "No availability" : "";
                if ($hotel.find("[data-preciodia]").length > 0) {
                    var precioDia = $hotel.find("[data-preciodia]").data("preciodia");
                    if (parseFloat(precioDia)) {
                        utag_data.products_price.push(parseFloat(precioDia).toFixed(2));
                    } else {
                        utag_data.products_price.push("no-avail");
                    }
                }
                if (pageData.numRooms && pageData.numNights) {
                    var products_quantity = parseInt(pageData.numRooms) * parseInt(pageData.numNights);
                    if (products_quantity) {
                        utag_data.products_quantity.push(products_quantity.toString());
                    }
                }
            });
            sendUtagData();
            return true;
        } else {
            return false;
        }
    };
    return {
        init: init
    };
}();

$(function() {
    if ($("body").hasClass("page-landing")) {
        LandingPage.init();
    }
});

var Currency = function() {
    var currencySel;
    var currencyInputHidden;
    var defaultCurrency = "EUR";
    var page;
    var init = function() {
        if (typeof CurrencyData != "undefined") {
            checkCurrencyFromJava();
            currencySel = $("#currency");
            currencyInputHidden = ".js-input-divisa";
            var bodyclass = $("body").attr("class");
            page = /landing/g.test(bodyclass) ? "landing" : "global-page";
            getJson();
            if (page == "global-page") {
                setDataPrecioTotal();
            }
            if (CurrencyData.selectedCurrency != CurrencyData.currency && CurrencyData.selectedCurrency != null && CurrencyData.selectedCurrency != "") {
                updateCurrency();
            } else {
                updateCurrencySelector();
                $(currencyInputHidden).val(CurrencyData.selectedCurrency || "");
            }
            currencySel.off("change");
            currencySel.change(function(e) {
                e.preventDefault();
                var new_currency = $("#currency").val();
                CurrencyData.selectedCurrency = new_currency;
                $(currencyInputHidden).val(new_currency);
                updateCurrency();
                if (CurrencyData.selectedCurrency != CurrencyData.currency) {
                    $("#currency-info").modal({
                        show: "true"
                    });
                }
            });
        }
    };
    var getJson = function() {
        $.ajax({
            url: "/jsonCurrency",
            dataType: "json",
            async: false,
            cache: true,
            success: function(data) {
                CurrencyData.json = data;
            },
            error: function(data) {
                console.log("Error getting json currency", data);
            }
        });
    };
    var checkCurrencyFromJava = function() {
        if (CurrencyData.selectedCurrency) {
            CurrencyData.selectedCurrency = CurrencyData.selectedCurrency.split(",")[0];
        }
        if (CurrencyData.currency) {
            CurrencyData.currency = CurrencyData.currency.split(",")[0];
        } else {
            CurrencyData.currency = defaultCurrency;
        }
    };
    var getRateExchangeFromJson = function(currencyIn, currencyOut, fn) {
        var cambio;
        $.each(CurrencyData.json.currencies, function(key, val) {
            if (CurrencyData.json.currencies[key].cur_origin == currencyIn) {
                $.each(CurrencyData.json.currencies[key].conversions, function(key2, val2) {
                    if (CurrencyData.json.currencies[key].conversions[key2].cur_dest == currencyOut) {
                        cambio = CurrencyData.json.currencies[key].conversions[key2].rate;
                    }
                });
            }
        });
        CurrencyData.rate = parseFloat(cambio);
        if (typeof fn === "function") {
            fn();
        }
        return CurrencyData.rate;
    };
    var setDataPrecioTotal = function() {
        var prices = $(".js-preciototal");
        $.each(prices, function(i, ele) {
            var $ele = $(ele);
            var total_price = parseFloat($ele.html());
            if ($.type($ele.data("preciototal")) == "undefined") {
                $ele.attr("data-preciototal", total_price);
            }
        });
    };
    var updateCurrency = function() {
        getRateExchangeFromJson(CurrencyData.currency, CurrencyData.selectedCurrency, function() {
            if (CurrencyData.rate != "" && CurrencyData.rate != null && !isNaN(CurrencyData.rate)) {
                $(currencyInputHidden).val(CurrencyData.selectedCurrency);
                if (page == "landing") {
                    updateLandingCurrency();
                }
                if (page == "global-page") {
                    updateGlobalPageCurrency();
                }
            }
        });
        updateCurrencySelector();
    };
    var updateLandingCurrency = function() {
        if (CurrencyData.selectedCurrency != "") {
            var hotels = $("[data-preciototal]");
            $.each(hotels, function(i, ele) {
                var $ele = $(ele);
                var total_price = parseFloat($ele.data("preciototal"));
                var day_price = parseFloat($ele.data("preciodia"));
                var num = parseInt($ele.data("n"));
                var new_total_price = total_price * CurrencyData.rate;
                new_total_price = (Math.round(new_total_price * 100) / 100).toFixed(2);
                var new_day_price = day_price * CurrencyData.rate;
                new_day_price = (Math.round(new_day_price * 100) / 100).toFixed(2);
                $(ele).find("strong").html(new_total_price + CurrencyData.selectedCurrency);
                $(ele).attr("data-preciototal", new_total_price);
                $(ele).attr("data-preciodia", new_day_price);
                if (LandingData.hasListMap != false && typeof MapsData.markers != "undefined" && MapsData.markers.length > 0) {
                    if (typeof MapsData.markers[parseInt(num - 1)] != "undefined" && typeof MapsData.markers[parseInt(num - 1)].infoWindow.content != "undefined") {
                        var content_window = MapsData.markers[parseInt(num - 1)].infoWindow.content;
                        var wrap_precio_total = $(content_window).find(".js-preciototal").html();
                        content_window = content_window.replace(wrap_precio_total, new_total_price);
                        if ($(content_window).find(".js-preciodia").length != 0) {
                            var wrap_precio_dia = $(content_window).find(".js-preciodia").html();
                            content_window = content_window.replace(wrap_precio_dia, new_day_price);
                        }
                        var wrap_currency = $(content_window).find(".js-currency").html();
                        var regex = new RegExp(wrap_currency, "g");
                        content_window = content_window.replace(regex, CurrencyData.selectedCurrency);
                        MapsData.markers[parseInt(num - 1)].infoWindow.setContent(content_window);
                    }
                }
            });
        }
    };
    var updateGlobalPageCurrency = function() {
        var prices = $("[data-preciototal]");
        $.each(prices, function(i, ele) {
            var $ele = $(ele);
            var total_price = parseFloat($ele.data("preciototal"));
            var new_total_price = total_price * CurrencyData.rate;
            new_total_price = (Math.round(new_total_price * 100) / 100).toFixed(2);
            $(ele).html(new_total_price);
            $(".js-currency").html(CurrencyData.selectedCurrency);
        });
    };
    var updateCurrencySelector = function() {
        $(currencySel).val(CurrencyData.selectedCurrency || CurrencyData.currency);
    };
    return {
        init: init,
        updateLandingCurrency: updateLandingCurrency,
        updateCurrencySelector: updateCurrencySelector,
        updateCurrency: updateCurrency
    };
}();

$(function() {
    if ($("#currency").length > 0 || $(".js-input-divisa").length > 0 || $(".js-currency").length > 0) {
        Currency.init();
    }
});

var DestinationSelects = function() {
    var selCountries;
    var selCities;
    var selHotels;
    var init = function() {
        if (typeof locations != "undefined" && locations != "") {
            selCountries = $("#select-country");
            selCities = $("#select-city");
            selHotels = $("#select-hotel");
            var queryCountry = "$..CountryList[*].name";
            generate(queryCountry, selCountries);
            events();
        }
    };
    var events = function() {
        selCountries.change(function() {
            var country = $(this).val().replace(/_/g, " ");
            var queryCity = "$..CountryList[?(@.key=='" + country + "')]..CityList[*].name";
            generate(queryCity, selCities);
        });
        selCities.change(function() {
            var city = $(this).val().replace(/_/g, " ");
            var queryHotel = "$..CityList[?(@.name=='" + city + "')].HotelList[*].name";
            generate(queryHotel, selHotels);
        });
        selHotels.change(function() {
            validations();
        });
    };
    var validations = function() {
        var fieldset_visible = $(".optionsFields fieldset:visible");
        var selects = $(fieldset_visible).find(".selectpicker[class*=dest-]");
        var last_select = selects.last();
        if (!last_select.is(":disabled") && last_select.find("option:selected").val() != "") {
            hideErrors();
            var id_last = $(last_select).attr("id");
            $("#e" + id_last + "Icon").addClass("ok").show();
        } else {
            $.each(selects, function(i, ele) {
                var id = $(ele).attr("id");
                $("[data-id=" + id + "]").addClass("error");
            });
            var id_last = $(last_select).attr("id");
            $("#e" + id_last).hide();
            $("#e" + id_last + "Icon").removeClass("ok").addClass("ko").show();
            noerror = false;
        }
    };
    var hideErrors = function() {
        var fieldset_visible = $(".optionsFields fieldset:visible");
        var selects = $(fieldset_visible).find(".selectpicker[class*=dest-]");
        var last_select = selects.last();
        $.each(selects, function(i, ele) {
            var id = $(ele).attr("id");
            $("[data-id=" + id + "]").removeClass("error");
        });
        var id_last = $(last_select).attr("id");
        $("#e" + id_last).hide();
        $("#e" + id_last + "Icon").removeClass("ko").removeClass("ok").hide();
    };
    var disable = function(ele, status) {
        $(ele).attr("disabled", status);
    };
    var generate = function(query, select) {
        var elems = jsonPath(locations, query);
        if (elems) {
            elems.sort(function(a, b) {
                var aName = removeDiacritics(a.toLowerCase());
                var bName = removeDiacritics(b.toLowerCase());
                return aName < bName ? -1 : aName > bName ? 1 : 0;
            });
        } else {
            var firstOp = select.find("option:first");
            select.find("option").remove();
            select.append(firstOp);
            var idSel = select.attr("id");
            if (idSel == "select-city" || idSel == "select-hotel") {
                firstOp = selHotels.find("option:first");
                selHotels.find("option").remove();
                selHotels.append(firstOp);
            }
        }
        var idSel = select.attr("id");
        if (idSel == "select-city") {
            var firstOp = selCities.find("option:first");
            selCities.find("option").remove();
            selCities.append(firstOp);
            var firstOp = selHotels.find("option:first");
            selHotels.find("option").remove();
            selHotels.append(firstOp);
        }
        if (idSel == "select-hotel") {
            var firstOp = selHotels.find("option:first");
            selHotels.find("option").remove();
            selHotels.append(firstOp);
        }
        select.append('<option value=""/>');
        $.each(elems, function(i, e) {
            var val = e.replace(/\s+/g, "_");
            select.append('<option value="' + val + '">' + e + "</option>");
        });
        var old = select.find("option");
        $.each(old, function(i, e) {
            if ($(this).text() == "") {
                $(this).remove();
            }
        });
    };
    return {
        init: init
    };
}();

$(function() {
    if ($("#select-country").length > 0 && $("#select-city").length > 0 && $("#select-hotel").length > 0) {
        DestinationSelects.init();
    }
});

var Disambiguation = function() {
    var init = function() {
        rolDispacher();
    };
    var rolDispacher = function() {
        $(".js-rol-dispacher").on("click", function(e) {
            e.preventDefault();
            var rol = $(this).data("user-program");
            var user = userData;
            Login.handleLoginAnalytics(rol, user, "form analysys success");
            var d = new Date();
            var t = d.getTime();
            window.location = "/roldispacher?login=" + rol + "&_=" + t;
        });
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-disambiguation")) {
        Disambiguation.init();
    }
});

Servicing = function() {
    var init = function() {
        handlePageErrors();
        handleMultipleRooms();
        urlPassbook();
        locationDateFormat();
        Servicing.Modify.init();
        Servicing.Garantee.init();
        Servicing.Cancel.init();
    };
    var locationDateFormat = function() {
        $(".js-date-input").on("change", function() {
            var $this = $(this);
            var inputDate = $this.parent().find("#_" + $this.attr("id"));
            if (inputDate && $this.val()) {
                var newValue = $this.val().split("-").reverse().join("/");
                inputDate.val(newValue);
            }
        });
    };
    var handlePageErrors = function() {
        if (typeof pageData.javaError != "undefined" && pageData.javaError == "true") {
            console.log("JAVA ERROR: ", pageData.javaError);
            $("#modal-error-label-global").modal("show");
        }
        if (typeof pageData.locationError != "undefined" && pageData.locationError == "273") {
            console.log("Location ERROR: ", pageData.locationError);
            $("#modal-error-label").modal("show");
        }
    };
    var handleMultipleRooms = function() {
        $("[data-reservation]").on("click", function() {
            checkInputHiddenRoomReservation(this);
        });
        var checkboxes = $("[data-reservation]");
        $.each(checkboxes, function(i, ele) {
            checkInputHiddenRoomReservation(ele);
        });
    };
    var urlPassbook = function() {
        if (typeof pageData.urlPassbook != "undefined") {
            var fecha = pageData.urlPassbook.split("/");
            var fullPassbook = pageData.fullDomain + "/getPassBook/" + pageData.idReservation + "/" + pageData.emailTitular + "/" + fecha[2] + "-" + fecha[1] + "-" + fecha[0];
            $(".js-passbook").on("click", function(e) {
                e.preventDefault();
                location.href = fullPassbook;
            });
        }
    };
    var checkInputHiddenRoomReservation = function(ele) {
        var ids = $(ele).attr("id");
        var id_reservation = $(ele).data("reservation");
        if ($.type(id_reservation) != undefined) {
            if ($(ele).is(":checked")) {
                var input = '<input type="hidden" name="roomIdReservation" id="hidden-' + ids + '" value="' + id_reservation + '"/>';
                $(".js-form-eservicing").prepend(input);
            } else {
                $(".js-form-eservicing").find("#hidden-" + ids).remove();
            }
        }
    };
    return {
        init: init
    };
}();

Servicing.Modify = function() {
    var init = function() {
        if (typeof pageData.isModify != "undefined" && typeof pageData.modifyError != "undefined") {
            if (pageData.isModify == "true") {
                $("#js-modify").modal("show");
            } else if (pageData.modifyError == "true") {
                $("#js-modify-error").modal("show");
            }
        }
        formulario();
    };
    var formulario = function() {
        $("#form-edit-info").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("form-edit-info PRE SUMBIT ACTIONS");
                try {
                    var fields = [ "name", "surname", "mail", "telephone" ];
                    $.each(fields, function(i, ele) {
                        var newval = $("#edit-" + ele).val();
                        $("#" + ele).val(newval);
                        $("#holder-" + ele).html(newval);
                    });
                    $("#edit-info-modal .close").trigger("click");
                } catch (ex) {
                    console.log(ex);
                }
            }
        });
        $("#modify-submit").on("click", function(e) {
            e.preventDefault();
            console.log("submit-button CLICKED");
            callLoading();
            $("#form_modify").submit();
        });
    };
    return {
        init: init
    };
}();

Servicing.Garantee = function() {
    var init = function() {
        if (typeof pageData.garanteeError != "undefined" && pageData.garanteeError == "true") {
            $("#js-guarantee-error").fadeIn();
        }
        $("#expiration-day").focusout(function() {
            var date = $("#expiration-day").val().split("-");
            if ($.isArray(date) && date.length != 0) {
                $("#monthCard").val(date[1]);
                $("#yearCard").val(date[0]);
            }
        });
        if ($(".timeLimit").length > 0 && typeof ServicingData.timeLimit != null) {
            $(".timeLimit").html(ServicingData.timeLimit);
        }
        handleTotalPriceMultiRoom();
    };
    var handleTotalPriceMultiRoom = function() {
        $(".js-garantee-check-room").on("click", function() {
            var $this = $(this);
            var moneda = CurrencyData.selectedCurrency != null ? CurrencyData.selectedCurrency : CurrencyData.currency;
            var preciohab = parseFloat($this.data("info-room").price);
            var taxhab = parseFloat($this.data("info-room").tax);
            var preciototal = parseFloat($(".js-total-price").text());
            var taxtotal = parseFloat($(".js-total-tax").text());
            if (!$this.is(":checked")) {
                var total = preciototal - preciohab;
                total = total.toFixed(2);
                var tasastotales = taxtotal - taxhab;
                tasastotales = tasastotales.toFixed(2);
            } else {
                var total = preciototal + preciohab;
                total = total.toFixed(2);
                var tasastotales = taxtotal + taxhab;
                tasastotales = tasastotales.toFixed(2);
            }
            $(".js-total-price").text(total + moneda);
            $(".js-total-tax").text(tasastotales + moneda);
        });
    };
    return {
        init: init
    };
}();

Servicing.Cancel = function() {
    var init = function() {
        if (typeof pageData.cancelationError != "undefined" && pageData.cancelationError == "true") {
            $("#js-cancel-error").fadeIn();
        }
        getTotalCancelationCost();
        validateForm();
        validateMotiveOthers();
    };
    var getTotalCancelationCost = function() {
        $("input.js-custom-cancelation-cost").change(function() {
            var checkedRooms = $("input.js-custom-cancelation-cost:checked");
            var totalCost = 0;
            checkedRooms.each(function() {
                totalCost += parseFloat($(this).attr("data-cost"));
            });
            totalCost = totalCost.toFixed(2);
            $(".js-total-cancelation-cost").text(totalCost);
        });
    };
    var validateMotiveOthers = function() {
        $("#cancelation-reason li").click(function() {
            var $inputs = $("#comments");
            if ($(this).hasClass("js-others")) {
                $inputs.attr("required", "required");
                $inputs.jqBootstrapValidation();
                $inputs.trigger("change.validation", {
                    submitting: true
                });
            } else {
                $inputs.removeAttr("required", "required");
                $inputs.removeData("validationRequiredMessage");
                $inputs.jqBootstrapValidation();
                $inputs.trigger("change.validation", {
                    submitting: true
                });
            }
        });
    };
    var validateRoomsChecked = function() {
        var checkeds = $(".js-custom-cancelation-cost");
        for (var i = 0; i < checkeds.length; i++) {
            if (checkeds[i].checked) {
                $("#some-room-checked").parents(".has-error").addClass("has-success").removeClass("has-error");
                return true;
            }
        }
        return false;
    };
    var validateForm = function() {
        var formulary = $("#cancelaForm");
        var cta = formulary.find("[type=submit]");
        var formularyValidations = formulary.find("input,select,textarea,button").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            autoAdd: {
                helpBlocks: false
            },
            bindEvents: [ "blur", "change" ],
            submitError: function($form, event, errors) {
                if ($form.find("div.has-error").length) {
                    moveToOffset = $form.find("div.has-error").eq(0).offset().top - 90 || 0;
                    $("html, body").animate({
                        scrollTop: moveToOffset,
                        useTranslate3d: true
                    }, 700);
                }
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("submitSuccess");
                cta.prop("disabled", true);
                if (validateRoomsChecked() && $($form).find(".has-error").length == 0) {
                    callLoading();
                    $("#js-motives").val($("#cancelation-reason-select").data("value"));
                    formularyValidations.jqBootstrapValidation("destroy");
                    $form.submit();
                } else {
                    hideLoading();
                    cta.prop("disabled", false);
                }
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-eservicing")) {
        Servicing.init();
    }
});

var GoogleMapsApi = function() {
    var isLanding = false;
    var clicado = false;
    var zoomMap = 11;
    var widthMap = "100%";
    var heightMap = "350px";
    var googleLoaded = false;
    var mapLoaded = [];
    var srcGooglemaps = typeof Vars != "undefined" && typeof Vars.srcGooglemaps != "undefined" && Vars.srcGooglemaps != "" ? Vars.srcGooglemaps : "https://maps.googleapis.com/maps/api/js";
    var idle_var = true;
    var parentObj;
    var mapId;
    var dataObj;
    var hoteLatlng;
    var pageTarget;
    var startIndex;
    var init = function(idMap, parentObject, dataObject, width, height, zoom) {
        zoomMap = typeof zoom != "undefined" ? zoom : zoomMap;
        widthMap = typeof width != "undefined" ? width : widthMap;
        heightMap = typeof height != "undefined" ? height : heightMap;
        mapId = typeof idMap != "undefined" ? idMap : null;
        dataObj = typeof dataObject != "undefined" ? dataObject : null;
        parentObj = typeof parentObject != "undefined" ? parentObject : null;
        switch (mapId) {
          case "googleMapHotel":
            pageTarget = "location";
            break;

          case "googleMapLanding":
            pageTarget = "landing";
            isLanding = true;
            break;

          case "googleMapModal":
            pageTarget = "modal";
            break;
        }
        if (mapId != null && parentObj != null && dataObj != null) {
            if (typeof google == "undefined" && typeof googleLoaded != "undefined" && !googleLoaded) {
                $.when($.getScript(srcGooglemaps), $.Deferred(function(deferred) {
                    $(deferred.resolve);
                })).done(function() {
                    loadMap(dataObj);
                    googleLoaded = true;
                });
            } else {
                loadMap(dataObj);
            }
        } else {
            console.log("Id Map is not defined");
        }
    };
    var loadMap = function(dataObj) {
        console.log("loadMap executed!");
        if (parentObj != null) {
            startIndex = typeof dataObj[0] != "undefined" ? 0 : 1;
            var latitude = 40.322038;
            var longitude = -3.865045;
            $.each(dataObj, function(i, ele) {
                if (ele) {
                    latitude = dataObj[i].location[0];
                    longitude = dataObj[i].location[1];
                    return false;
                }
            });
            latlong = new google.maps.LatLng(latitude, longitude);
            mapholder = document.getElementById(mapId);
            mapholder.style.height = heightMap;
            mapholder.style.width = widthMap;
            var myOptions = {
                zoom: zoomMap,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.SMALL
                },
                panControl: true,
                zoomControl: true,
                scaleControl: true,
                draggable: true
            };
            var map = new google.maps.Map(mapholder, myOptions);
            var currCenter = map.getCenter();
            parentObj.map = map;
            $.each(dataObj, function(i, dato) {
                parentObj.locations[i] = new google.maps.LatLng(dato.location[0], dato.location[1]);
                parentObj.markers[i] = new google.maps.Marker({
                    position: parentObj.locations[i],
                    animation: google.maps.Animation.DROP,
                    map: map,
                    icon: dato.icon
                });
                if (dato.info) {
                    parentObj.infoWindows[i] = new google.maps.InfoWindow({
                        content: dato.info,
                        backgroundColor: "rgb(57,57,57)",
                        maxWidth: 520
                    });
                    parentObj.markers[i].infoWindow = parentObj.infoWindows[i];
                    google.maps.event.addListener(parentObj.markers[i], "click", function() {
                        parentObj.infoWindows[i].setContent(dato.info);
                        for (var r = 0; r < parentObj.markers.length; r++) {
                            if (typeof parentObj.infoWindows[r] != "undefined") {
                                parentObj.infoWindows[r].close(map, parentObj.markers[r]);
                                if (pageTarget == "location" || pageTarget == "modal") {
                                    hoteLatlng = new google.maps.LatLng(MapsData.data[0][startIndex].location[0], MapsData.data[0][startIndex].location[1]);
                                    GoogleMapsDirections.distancePoiHotelMap(map, parentObj.markers[i], hoteLatlng);
                                }
                            }
                        }
                        idle_var = false;
                        Currency.updateLandingCurrency();
                        parentObj.infoWindows[i].open(map, parentObj.markers[i]);
                    });
                }
            });
            if (pageTarget == "landing" && $.inArray("googleMapLanding", GoogleMapsApi.mapLoaded == -1)) {
                LandingFilters.doFiltering();
            }
            if (pageTarget == "location") {
                GoogleMapsDirections.init();
            }
            GoogleMapsApi.mapLoaded.push(mapId);
            centerMapActions();
        }
    };
    var centerMapActions = function() {
        centerMap();
        google.maps.event.addDomListener(window, "resize", function() {
            console.log("resize event");
            centerMap();
        });
        google.maps.event.addDomListener(MapsData.map, "zoom_changed", function() {
            idle_var = false;
        });
        google.maps.event.addListener(MapsData.map, "idle", function() {
            if (idle_var) {
                centerMap();
            }
        });
    };
    var centerMap = function() {
        google.maps.event.trigger(parentObj.map, "resize");
        if (parentObj.markers.length > 0) {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < parentObj.locations.length; i++) {
                var i = i + startIndex;
                if (isLanding) {
                    var num_recsort = i;
                    var is_hidden = $("#hoteles-dispo").find('.result-item [data-recsort="' + num_recsort + '"]').parents(".result-item").hasClass("js-hidden");
                    if (typeof parentObj.locations[i] != "undefined" && !is_hidden) {
                        bounds.extend(parentObj.locations[i]);
                    }
                } else {
                    bounds.extend(parentObj.locations[i]);
                }
            }
            parentObj.map.fitBounds(bounds);
        }
    };
    var upReloadMap = function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
    };
    return {
        init: init,
        upReloadMap: upReloadMap,
        centerMap: centerMap,
        mapLoaded: mapLoaded
    };
}();

var GoogleMapsDirections = function() {
    var typeOfTravel = "DRIVING";
    var directionsService;
    var directionsDisplay;
    var hoteLatlng;
    var inputGoDestiny;
    var map;
    var init = function() {
        if (MapsData.data[0].length > 0) {
            directionsService = new google.maps.DirectionsService();
            hoteLatlng = new google.maps.LatLng(MapsData.data[0][0].location[0], MapsData.data[0][0].location[1]);
            map = MapsData.map;
            autocompletePlaces();
            $("#js-goto-googlemaps").on("click", function() {
                calcRouteHowArrive(this);
            });
            $("#js-showdirections").on("click", function() {
                calcRouteHowArrive(this);
            });
            $("[data-transport]").on("click", function() {
                typeOfTravel = $(this).data("transport");
            });
        }
    };
    var autocompletePlaces = function() {
        var input = document.getElementById("inputGoDestiny");
        if (input != null) {
            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.bindTo("bounds", map);
        }
    };
    function drawDirection(start, end, typeOfTravel) {
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode[typeOfTravel]
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                $("#directions-map").text("");
                $("#directions-map").attr("class", "dir-mrgnr");
                directionsDisplay.setDirections(response);
            } else {
                $("#directions-map").attr("class", "dir-mrgnr alert-danger");
                $("#directions-map").text("There is no results!");
            }
        });
    }
    var calcRouteHowArrive = function(ele) {
        inputGoDestiny = $("#inputGoDestiny").val() != "" ? $("#inputGoDestiny").val() : "";
        var $id = $(ele).attr("id");
        var start = inputGoDestiny;
        var end = hoteLatlng;
        if ($id == "js-goto-googlemaps") {
            var pstart = start.replace(/ /g, "+");
            var go_to_url = "https://maps.google.com?saddr=" + pstart + "&daddr=" + end.toUrlValue();
            window.open(go_to_url, "_blank");
        } else if ($id == "js-showdirections") {
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay.setPanel(null);
                directionsDisplay = null;
            }
            directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById("directions-map"));
            if (inputGoDestiny === "" && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    start = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    drawDirection(start, end, typeOfTravel);
                });
            } else {
                drawDirection(start, end, typeOfTravel);
            }
        }
    };
    var distancePoiHotelMap = function(map, marker, origin) {
        var aux = marker.infoWindow.getContent();
        marker.getPosition();
        aux = aux.replace("DDistance", getDistanceBetweenCoords(origin.lat(), origin.lng(), marker.getPosition().lat(), marker.getPosition().lng()) + " km");
        marker.infoWindow.setContent(aux);
        marker.infoWindow.open(map, marker);
    };
    var getDistanceBetweenCoords = function(h1Lat, h1Lng, h2Lat, h2Lng) {
        h1Lat = parseFloat(h1Lat);
        h1Lng = parseFloat(h1Lng);
        h2Lat = parseFloat(h2Lat);
        h2Lng = parseFloat(h2Lng);
        var distance = parseFloat(0);
        var d2r = Math.PI / 180;
        try {
            var dlong = (h2Lat - h1Lat) * d2r;
            var dlat = (h2Lng - h1Lng) * d2r;
            var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(h1Lat * d2r) * Math.cos(h2Lat * d2r) * Math.pow(Math.sin(dlong / 2), 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            distance = 6367 * c;
        } catch (err) {
            return "";
        }
        return String(Math.round(distance * 100) / 100);
    };
    return {
        init: init,
        distancePoiHotelMap: distancePoiHotelMap
    };
}();

$(function() {
    if (typeof MapsData.data[0] != "undefined" && MapsData.data[0].length > 0) {
        $('[data-id-show="#map-results-ey"]').on("click", function() {
            if ($.inArray("googleMapLanding", GoogleMapsApi.mapLoaded) == -1 && $("#googleMapLanding").length) {
                console.log("init map googleMapLanding");
                GoogleMapsApi.init("googleMapLanding", MapsData, MapsData.data[0], "100%", "350px", 2);
            } else {
                GoogleMapsApi.centerMap();
            }
        });
        if ($("body").hasClass("page-hotelpage") && $("#googleMapHotel").length && $.inArray("googleMapHotel", GoogleMapsApi.mapLoaded) == -1) {
            console.log("init map googleMapHotel");
            GoogleMapsApi.init("googleMapHotel", MapsData, MapsData.data[0], "100%", "250px", 11);
        }
        $("#modal-maps").on("shown.bs.modal", function() {
            if ($.inArray("googleMapModal", GoogleMapsApi.mapLoaded) == -1 && $("#googleMapModal").length) {
                console.log("init map googleMapModal");
                GoogleMapsApi.init("googleMapModal", MapsData, MapsData.data[0], "100%", "350px", 11);
            }
        });
    }
});

var _globalHttpProtocol = typeof Vars.globalHttpProtocol != "undefined" && Vars.globalHttpProtocol != "" ? Vars.globalHttpProtocol : "https://";

var _ssoEndpoint = typeof Vars.ssoEndpoint != "undefined" ? Vars.ssoEndpoint : "";

var _ssoAuth = typeof Vars.ssoAuth != "undefined" ? Vars.ssoAuth : "";

var Login = function() {
    var user_input = "#login-user";
    var password_input = "#login-password";
    var urlDestino_input = "#urlDestino";
    var ssoUrl_input = "#ssoUrl";
    var ssoService_input = "#ssoService";
    var formulary = "#loginForm";
    var class_error = "text-danger";
    var class_success = "text-success";
    var lblDefaultMsg = "";
    var lblSuccessMsg = "";
    var passbookParam = "";
    var publicationMeta;
    var staticDomain;
    var init = function() {
        if (typeof Vars != "undefined") {
            if (typeof pageData != "undefined") {
                passbookParam = pageData.passbookParam && pageData.passbookParam == "true" ? "?downloadPassbook=true" : "";
                lblDefaultMsg = pageData.lblDefaultMsg || "";
                lblSuccessMsg = pageData.lblSuccessMsg || "";
            }
            publicationMeta = typeof Vars.publicationMeta != "undefined" ? Vars.publicationMeta : "/nh-mobile/nhGroup";
            staticDomain = typeof Vars.staticDomain != "undefined" ? Vars.staticDomain : "https://static.nh-hotels.net";
            events();
            validationsLogin();
            validationsForgotPassword();
        }
    };
    var events = function() {
        if ($(formulary).length > 0) {
            $("header .icon-member").hide();
        }
        setTimeout(function() {
            consultarUsuarioLogado(function(result) {
                if (result.status == "ok" && result.isLogged) {
                    Vars.userLogged = true;
                    $(".hide-userlogged").hide();
                    $("body").addClass("logged");
                    if (SearchData.isB2B) {
                        $("header .icon-member").attr("href", "/b2b/home");
                    } else if (SearchData.isB2E) {
                        $("header .icon-member").attr("href", "/");
                    } else {
                        $("header .icon-member").attr("href", "/rewards/home");
                    }
                }
            });
        }, 500);
        $(".btnLogout").on("click", function(e) {
            e.preventDefault();
            logout();
        });
    };
    var logout = function() {
        var accion = "/j_spring_security_logout";
        $.ajaxSetup({
            cache: false
        });
        $.getJSON(accion, null, function(data) {
            setTimeout(function() {
                window.location = location.href;
            }, 1e3);
        });
    };
    var checkUserLogged = function(callback) {
        var accion = "/auth/consultarUsuarioLogado.do";
        var message = {};
        $.ajax({
            dataType: "json",
            url: accion,
            cache: false,
            success: function(data) {
                var isLogged = typeof data["username"] != "undefined" && data["username"] != "anonymous" ? true : false;
                if (isLogged) {
                    message = {
                        isLogged: true,
                        userData: data,
                        message: null
                    };
                } else {
                    message = {
                        isLogged: false,
                        userData: null,
                        message: "Username is anonymous /auth/consultarUsuarioLogado.do"
                    };
                    $.cookie(cookieName, null, {
                        path: "/"
                    });
                }
                if (typeof callback == "function") {
                    callback(message);
                }
            },
            error: function(request, status, error) {
                message = {
                    isLogged: false,
                    userData: null,
                    message: error
                };
                $.cookie(cookieName, null, {
                    path: "/"
                });
                if (typeof callback == "function") {
                    callback(message);
                }
            }
        });
    };
    var validationsLogin = function() {
        $(formulary).find("input,textarea,select").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
                console.log("Errors: ", errors);
                trackFormError("loginForm");
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var user = typeof user_input != "undefined" ? $(user_input).val() : null;
                var pass = typeof password_input != "undefined" ? $(password_input).val() : null;
                var ssoUrl = typeof ssoUrl_input != "undefined" ? $(ssoUrl_input).val() : null;
                var service = typeof ssoService_input != "undefined" ? $(ssoService_input).val() : null;
                if (ssoUrl != null && service != null) {
                    doLoginSSO(ssoUrl, user, pass, service, function(data, targetUrl) {
                        var urlRedirect = targetUrl || location.hostname + "/rewards/home";
                        window.location = urlRedirect;
                    });
                }
                window.onbeforeunload = null;
            },
            filter: function() {
                return $(this).is(":visible");
            }
        });
    };
    var validationsForgotPassword = function() {
        var modalRecoverPass = $("#recover-pass");
        modalRecoverPass.on("shown.bs.modal", function() {
            var email_input = "#login-remember-email";
            var cmpView_input = "#cmpView";
            var cmp_input = "#cmp";
            var $email = $(email_input);
            var $cmpView = $(cmpView_input);
            var $cmp = $(cmp_input);
            var user = $(user_input).val();
            if (user.length != 0 && validateEmail(user)) {
                modalRecoverPass.find(email_input).val(user);
            }
            $("#form-send-password").find("input,textarea,select").not("[type=submit]").jqBootstrapValidation({
                preventSubmit: true,
                submitError: function($form, event, errors) {
                    console.log("Errors: ", errors);
                },
                submitSuccess: function($form, event) {
                    event.preventDefault();
                    console.log("OK validations");
                    var button = $form.find("[type=submit]");
                    button.prop("disabled", true);
                    var defaultProtocol = location.host.search("webdev") != -1 || location.host.search("webint") != -1 ? "http://" : "https://";
                    var _secureDomain = defaultProtocol + location.host;
                    var url = _secureDomain + "/nhrewards/reset-password";
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: "email=" + $email.val() + "&cmp=" + $cmp.val() + "&cmpView=" + $cmpView.val(),
                        async: true,
                        dataType: "json"
                    }).done(function(data) {
                        $email.parents(".form-group").removeClass("has-error");
                        button.prop("disabled", false);
                        $(email_input).val("");
                        handleMessages("#js-password-message", class_success, lblSuccessMsg);
                    }).fail(function(data) {
                        var message = data.response;
                        console.log(data, data.response);
                        button.prop("disabled", false);
                        handleMessages("#js-password-message", class_error, lblDefaultMsg);
                    });
                },
                filter: function() {
                    return $(this).is(":visible");
                }
            });
        });
    };
    var doLoginSSO = function(ssoUrl, user, pass, service, callback_fn) {
        $("#submit-login").attr("disabled", "disabled");
        var ssoData = {
            service: service,
            username: user,
            password: pass
        };
        jQuery.ajax({
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(ssoData),
            url: ssoUrl,
            async: false,
            dataType: "json",
            success: function(data) {
                if (data.data != null && data.data.ticketGrantingTicket != null) {
                    callLoading();
                    var result = $.ajax({
                        method: "POST",
                        url: ssoUrl + "validate/?ticketGrantingTicket=" + data.data.ticketGrantingTicket + "&service=" + service,
                        dataType: "jsonp",
                        async: false
                    });
                    $.post("/j_spring_cas_security_check?ticket=" + data.data.ticketGrantingTicket).done(function(data) {
                        if (typeof callback_fn != "undefined" && typeof data != "undefined") {
                            var targetUrl = location.href;
                            if (typeof data.targetUrl != "undefined" && data.targetUrl) {
                                targetUrl = data.targetUrl;
                            } else if (passbookParam) {
                                targetUrl = location.hostname + "/rewards/home" + passbookParam;
                            }
                            var n = targetUrl.search("roldispacher");
                            if (n != -1) {
                                var d = new Date();
                                targetUrl = targetUrl + "&_=" + d.getTime();
                            }
                            trackFormSuccess("loginForm");
                            $("#submit-login").removeAttr("disabled");
                            callback_fn(data, targetUrl);
                        } else {
                            trackFormError("loginForm");
                            hideLoading();
                            $("#submit-login").removeAttr("disabled");
                            handleMessages("#js-login-message", class_error, lblDefaultMsg);
                        }
                    }).fail(function(data) {
                        trackFormError("loginForm");
                        hideLoading();
                        $("#submit-login").removeAttr("disabled");
                        if (data.responseText == "") {
                            handleMessages("#js-login-message", class_error, lblDefaultMsg);
                        } else {
                            hideLoading();
                            $("#submit-login").removeAttr("disabled");
                            var response = JSON.parse(data.responseText);
                            var message = response["errorCode"] || lblDefaultMsg;
                            handleMessages("#js-login-message", class_error, message);
                        }
                    });
                } else {
                    $("#submit-login").removeAttr("disabled");
                    if (typeof data.response.resultCode != "") {
                        jQuery.ajax({
                            method: "GET",
                            url: "/auth/loginErrorMessage.do?resultCode=" + data.response.resultCode,
                            success: function(errordata) {
                                trackFormError("loginForm");
                                handleMessages("#js-login-message", class_error, errordata);
                            },
                            error: function() {
                                trackFormError("loginForm");
                                handleMessages("#js-login-message", class_error, "Login error");
                            }
                        });
                    }
                }
            },
            error: function(jqXHR, exception) {
                hideLoading();
                var msg = "";
                if (jqXHR.status === 0) {
                    msg = "Not connect.\n Verify Network.";
                } else if (jqXHR.status == 404) {
                    msg = "Requested page not found. [404]";
                } else if (jqXHR.status == 500) {
                    msg = "Internal Server Error [500].";
                } else if (exception === "parsererror") {
                    msg = "Requested JSON parse failed.";
                } else if (exception === "timeout") {
                    msg = "Time out error.";
                } else if (exception === "abort") {
                    msg = "Ajax request aborted.";
                } else {
                    msg = "Uncaught Error.\n" + jqXHR.responseText;
                }
                handleMessages("#js-login-message", class_error, msg);
                $("#submit-login").removeAttr("disabled");
            }
        });
    };
    var handleMessages = function(container, clase, message) {
        $(".js-alert").hide();
        $(container).find(".js-text").removeClass(class_success).removeClass(class_error);
        $(container).find(".js-text").html(message).addClass(clase);
        $(container).show();
        moveToOffset = $(formulary).find("input:visible").eq(0).offset().top - 90 || 0;
        $("html, body").animate({
            scrollTop: moveToOffset,
            useTranslate3d: true
        }, 700);
    };
    var handleLoginAnalytics = function(rol, user, action) {
        var eventCategory = getLoginForm(user);
        var eventLabel = getUserType(rol, user);
        trackLogin(eventCategory, eventLabel, action);
    };
    var getUserType = function(rol, user) {
        var userType = "";
        switch (rol) {
          case "B2B_HOME":
            userType = getB2bClientType(user.b2bType);
            break;

          case "B2B_ADMIN":
            userType = "b2bAdmin";
            break;

          case "B2E_EMPLEADO":
          case "B2E_FRIENDS":
            userType = "employee";
            break;

          case "REWARDS_HOME":
          case "CORPORATE":
          case "NH_MEDIA":
          case "TRAVEL_PARTNER":
          case "PLATINUM_VIP":
            userType = "rewards";
            break;

          default:
            break;
        }
        return userType;
    };
    var getLoginForm = function(user) {
        var loginForm = "loginRewardsForm";
        if (user.b2bAgentAgencyLogin == true || user.b2bAgentBusinessLogin == true) {
            loginForm = "loginb2bForm";
        }
        return loginForm;
    };
    var getB2bClientType = function(b2bType) {
        if (!b2bType) {
            return "agency|business";
        }
        return b2bType == "AG" ? "agency" : "business";
    };
    return {
        init: init,
        checkUserLogged: checkUserLogged,
        handleLoginAnalytics: handleLoginAnalytics,
        handleMessages: handleMessages,
        logout: logout
    };
}();

$(document).ready(function() {
    Login.init();
});

function doAutoLogin() {
    jQuery.ajax({
        method: "GET",
        url: _ssoEndpoint,
        async: false,
        dataType: "jsonp",
        success: function(data) {
            if (data.data != null && data.data.ticketGrantingTicket != null) {
                $.post("/j_spring_cas_security_check?ticket=" + data.data.ticketGrantingTicket).done(function(data) {
                    if (typeof data != "undefined" && typeof data.targetUrl != "undefined" && data.targetUrl) {
                        if (data.targetUrl.search("roldispacher") != -1) {
                            var d = new Date();
                            data.targetUrl = data.targetUrl + "&_=" + d.getTime();
                        }
                        $.get(data.targetUrl);
                        trackFormSuccess("loginForm");
                        location.reload();
                    } else {
                        trackFormError("loginForm");
                        hideLoading();
                        $("#submit-login").removeAttr("disabled");
                        Login.handleMessages("#js-login-message", class_error, lblDefaultMsg);
                    }
                }).fail(function() {});
            } else {}
        },
        error: function(jqXHR, exception) {}
    });
}

function consultarUsuarioLogado(callback) {
    var accion = "/auth/consultarUsuarioLogado.do";
    var message = {};
    $.ajaxSetup({
        cache: false
    });
    $.ajax({
        dataType: "json",
        url: accion,
        cache: false,
        success: function(data) {
            var checkIsLogged = typeof data["username"] != "undefined" && data["username"] != "anonymous" ? true : false;
            if (checkIsLogged) {
                message = {
                    status: "ok",
                    isLogged: checkIsLogged,
                    data: data
                };
                if (_ssoEndpoint != "") {
                    jQuery.ajax({
                        method: "GET",
                        url: _ssoEndpoint + "validate",
                        async: false,
                        dataType: "jsonp",
                        success: function(data) {
                            if (data.response == null || data.response.resultCode != "000") {
                                Login.logout();
                                return false;
                            } else {
                                console.log("consultarUsuarioLogado ssoEndpoint: ", data.response.result);
                            }
                        },
                        error: function(jqXHR, exception) {
                            Login.logout();
                            return false;
                        },
                        xhrFields: {
                            withCredentials: true
                        }
                    });
                }
            } else {
                if (_ssoEndpoint != "" && _ssoAuth != "") {
                    doAutoLogin();
                }
            }
            if (typeof callback == "function") {
                callback(message);
            }
        },
        error: function(request, status, error) {
            message = {
                status: "ko",
                data: error
            };
            if (typeof callback == "function") {
                callback(message);
            }
        }
    });
}

var Directory = function() {
    var init = function() {
        animateToDestination();
    };
    var animateToDestination = function() {
        if ($("#destination").length && !location.hash) {
            var path = location.pathname.split("/");
            if (path[2]) {
                var destinationPath = "#" + path[2];
                $(destinationPath).find(".aditional-info").slideToggle();
                $(destinationPath).find(".icon-go-link").addClass("opened");
                $("html, body").animate({
                    scrollTop: $(destinationPath).offset().top - ($("header").height() + 20)
                }, 1e3);
            }
        }
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-directory")) {
        Directory.init();
    }
});

var Home = function() {
    var _pageData;
    var lastDestinationForm = null;
    var lastHotelForm = null;
    var init = function() {
        _pageData = typeof pageData != "undefined" ? pageData : null;
        if (typeof _pageData.javaError != "undefined" && _pageData.javaError == "true") {
            $("#modal-error-label").modal("show");
        }
        lastDestinationForm = $("#lastDestinationForm");
        lastHotelForm = $("#lastHotelForm");
        checkAcceptCookies();
        lastHotelDestinationAjax();
    };
    var checkAcceptCookies = function() {
        var cookieName = "accept_cookies";
        var cookieValue = "true";
        $(document).on("click", ".block-black button.close", function() {
            var cookie = $.cookie(cookieName, cookieValue, {
                expires: 365,
                path: "/"
            });
        });
        if ($.cookie(cookieName) === null || $.cookie(cookieName) === "") {
            $(".block-black").show();
        }
    };
    var lastHotelDestinationAjax = function() {
        if (lastDestinationForm.length && lastHotelForm.length) {
            $.ajax({
                type: "GET",
                url: "/hotel-destination-last-viewed",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                dataType: "json",
                cache: false,
                async: true
            }).done(function(data) {
                if (!$.isEmptyObject(data)) {
                    if (typeof data.lastDestinationViewed != "undefined" && !$.isEmptyObject(data.lastDestinationViewed)) {
                        setLastDestinationViewed(data.lastDestinationViewed);
                    }
                    if (typeof data.lastHotelViewed != "undefined" && !$.isEmptyObject(data.lastHotelViewed)) {
                        setLastHotelViewed(data.lastHotelViewed);
                    }
                }
            }).fail(function(data) {});
            $(".js-last-submit").on("click", function(e) {
                e.preventDefault();
                var $form = $(this).parents("form");
                if ($form.hasClass("js-last-closetome")) {
                    geolocateMe(function(position) {
                        if (position) {
                            var accept_geolocalization = $form.find(".geo-lat").val() != "" && $form.find(".geo-lon").val() != "" ? true : false;
                            if (accept_geolocalization) {
                                callLoading(function() {
                                    $form.submit();
                                });
                            } else {
                                hideLoading();
                                var contentAlertLocation = $(".conent-alert").html();
                                alert(contentAlertLocation);
                            }
                        }
                    });
                } else {
                    callLoading(function() {
                        $form.submit();
                    });
                }
            });
        }
    };
    var setLastDestinationViewed = function(lastData) {
        var $form = $(lastDestinationForm);
        var isCloseToMe = false;
        LastViewedDestination.destination = lastData.destination;
        LastViewedDestination.fini = lastData.fini;
        LastViewedDestination.fout = lastData.fout;
        LastViewedDestination.roomsNumber = lastData.nrooms;
        LastViewedDestination.numberOfAdults = lastData.numAdults;
        LastViewedDestination.numberOfChildren = lastData.numChildren;
        LastViewedDestination.numberOfBabies = lastData.numBabies;
        LastViewedDestination.numberOfNights = lastData.numNights;
        if (!lastData.destination && lastData.fini && lastData.fout) {
            isCloseToMe = true;
            LastViewedDestination.destination = Labels.autocompleteNearme;
            $form.addClass("js-last-closetome");
        }
        if (LastViewedDestination.destination && lastData.fini && lastData.fout) {
            var fields = {
                ".last-destination": LastViewedDestination.destination,
                ".last-tcm": lastData.tcm,
                ".last-fini": lastData.fini,
                ".last-fout": lastData.fout,
                ".last-numNights": lastData.numNights,
                ".last-finiFormated": lastData.finiFormated,
                ".last-foutFormated": lastData.foutFormated,
                ".label-night": lastData.numNights == 1 ? Labels.searchNoche : Labels.searchNoches
            };
            if (isCloseToMe) {
                $.extend(fields, {
                    "#inputSearch": "",
                    ".last-tcm": ""
                });
                $form.find("#code").attr("name", "nearMe").val("");
            }
            fillLastViewedData($form, fields);
            var occupancyResult = getHtmlOccupancyInputs(lastData.adults, lastData.children, lastData.babies);
            $form.find(".last-occupancy").html(occupancyResult);
            $form.fadeIn();
        }
    };
    var setLastHotelViewed = function(lastData) {
        var $form = $(lastHotelForm);
        LastViewedHotel.hotelId = lastData.hotelId;
        LastViewedHotel.fini = lastData.fini;
        LastViewedHotel.fout = lastData.fout;
        LastViewedHotel.roomsNumber = lastData.nrooms;
        LastViewedHotel.numberOfAdults = lastData.numAdults;
        LastViewedHotel.numberOfChildren = lastData.numChildren;
        LastViewedHotel.numberOfBabies = lastData.numBabies;
        LastViewedHotel.numberOfNights = lastData.numNights;
        if (lastData.hotelName && lastData.fini && lastData.fout) {
            var fields = {
                ".last-hotelId": lastData.hotelId,
                ".last-hotelName": lastData.hotelName,
                ".last-fini": lastData.fini,
                ".last-fout": lastData.fout,
                ".last-numNights": lastData.numNights,
                ".last-finiFormated": lastData.finiFormated,
                ".last-foutFormated": lastData.foutFormated,
                ".label-night": lastData.numNights == 1 ? Labels.searchNoche : Labels.searchNoches
            };
            fillLastViewedData($form, fields);
            var starsHtml = $(".last-hotelStars").html();
            var starsResult = "";
            if (lastData.hotelStars) {
                for (var i = 1; i <= parseInt(lastData.hotelStars); i++) {
                    starsResult += starsHtml;
                }
            }
            $form.find(".last-hotelStars").html(starsResult);
            var occupancyResult = getHtmlOccupancyInputs(lastData.adults, lastData.children, lastData.babies);
            $form.find(".last-occupancy").html(occupancyResult);
            $form.fadeIn();
        }
    };
    var getHtmlOccupancyInputs = function(adults, children, babies) {
        var occupancyResult = "";
        if (adults) {
            $.each(adults, function(index, value) {
                var numOcc = index + 1;
                occupancyResult += '<input type="hidden" name="nadults' + numOcc + '" id="nadults' + numOcc + '" value="' + value + '">';
            });
        }
        if (children) {
            $.each(children, function(index, value) {
                var numOcc = index + 1;
                occupancyResult += '<input type="hidden" name="nchilds' + numOcc + '" id="nchilds' + numOcc + '" value="' + value + '">';
            });
        }
        if (babies) {
            $.each(babies, function(index, value) {
                var numOcc = index + 1;
                occupancyResult += '<input type="hidden" name="nbabies' + numOcc + '" id="nbabies' + numOcc + '" value="' + value + '">';
            });
        }
        return occupancyResult;
    };
    var fillLastViewedData = function(container, fields) {
        if ($(container).length) {
            var $container = $(container);
            $.each(fields, function(field, value) {
                $container.find("input" + field).val(value);
                $container.find(field).not(":input").text(value);
            });
        }
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-home")) {
        Home.init();
    }
});

var HotelReviews = function() {
    var tripAdvisorId;
    var indexCommentsShow;
    var labelReadMore;
    var labelReadLess;
    var init = function() {
        tripAdvisorId = typeof hotelTripAdvisorId != "undefined" && hotelTripAdvisorId != "" ? hotelTripAdvisorId : null;
        indexCommentsShow = typeof Vars.indexCommentsShow != "undefined" && Vars.indexCommentsShow != "" ? Vars.indexCommentsShow : null;
        labelReadMore = typeof pageData.labelReadMore != "undefined" && pageData.labelReadMore != "" ? pageData.labelReadMore : "";
        labelReadLess = typeof pageData.labelReadLess != "undefined" && pageData.labelReadLess != "" ? pageData.labelReadLess : "";
        if (tripAdvisorId != null) {
            getTripAdvisor();
        }
    };
    var getTripAdvisor = function() {
        $.ajaxSetup({
            cache: false
        });
        var url = "/rest/trip/tripadvisorhotelrate/" + tripAdvisorId + "/20";
        $.getJSON(url, function(data) {
            if (data != "null") {
                $("#trip-num-comments").html(data.numComents);
                if (data.rate != null) {
                    $("#hotelRate").attr("class", "rating rating" + parseInt(data.rate).toString());
                    var rateHotel = data.rate * 20;
                    $("#averageRate").text(rateHotel.toString() + "%");
                }
                if (data.reviews != null && !$.isEmptyObject(data.reviews)) {
                    var html = "";
                    var htmlHide = "";
                    var index = 0;
                    data.reviews.forEach(function(comment) {
                        index++;
                        if (index < 4) {
                            html += '<div id="comment' + index + '" class="col-xs-12"><div class="margin-xs-b-10"><img width="28" src="<tms:staticDomain />/system<text>@Publication.MetaData.pathMaqueta</text>/img/img/logo-tripadvisor.png" alt="logotipo tripadvisor"><span class="rating rating' + (comment.userRate ? parseInt(comment.userRate).toString() : "5") + '"></span></div><div class="margin-xs-b-40"><div class="h3 text-black">' + comment.title + '</div><p class="truncatedText display-inline-xs">' + comment.text + '</p><button class="link js-more display-inline-xs" type="button">' + labelReadMore + '</button><button class="link js-less display-inline-xs" type="button">' + labelReadLess + "</button></div></div>";
                        } else {
                            html += '<div id="comment' + index + '" class="col-xs-12" style="display:none"><div class="margin-xs-b-10"><img width="28" src="<tms:staticDomain />/system<text>@Publication.MetaData.pathMaqueta</text>/img/img/logo-tripadvisor.png" alt="logotipo tripadvisor"><span class="rating rating' + (comment.userRate ? parseInt(comment.userRate).toString() : "5") + '"></span></div><div class="margin-xs-b-40"><div class="h3 text-black">' + comment.title + '</div><p class="truncatedText display-inline-xs">' + comment.text + '</p><button class="link js-more display-inline-xs" type="button">' + labelReadMore + '</button><button class="link js-less display-inline-xs" type="button">' + labelReadLess + "</button></div></div>";
                        }
                    });
                    $("#trip-comments").html(html);
                    $(".truncatedText").each(function() {
                        var capaFinal = $(this), botMore = $(this).next(), botLess = $(this).next().next();
                        $(botLess).hide();
                        var text = $(this).text(), textoOriginal = $(this).text(), text = text.substring(0, 130) + "...";
                        $(this).text(text), $(botMore).click(function() {
                            $(capaFinal).text(textoOriginal), $(botLess).show(), $(botMore).hide();
                        }), $(botLess).click(function() {
                            $(capaFinal).text(text), $(botMore).show(), $(botLess).hide();
                        });
                    });
                    $("#trip-more-comments").removeClass("hidden");
                    $("#trip-more-comments").on("click", function() {
                        showMoreComments();
                    });
                }
            }
        });
    };
    var showMoreComments = function() {
        for (var i = indexCommentsShow; i < indexCommentsShow + 3; i++) {
            var com = i + 1;
            if ($("#comment" + com).length > 0) {
                $("#comment" + com).show();
            } else {
                $("#trip-more-comments").hide();
                break;
            }
        }
        indexCommentsShow += 3;
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-hotel-reviews")) {
        HotelReviews.init();
    }
});

Hotel = function() {
    var init = function() {
        HotelData.hotelTcm = HotelData.hotelTcm;
        navigationMenu();
        lastSearch();
        widgetTripAdvisor();
        buttonMeetings();
        Hotel.Rooms.init();
        Hotel.Offers.init();
        Hotel.Mice.init();
    };
    var lastSearch = function() {
        var result = SearchData.newDataFromAjax(HotelData.hotelTcm);
        console.log("Result AJAX: ", result, HotelData.hotelTcm);
        if ($.type(result) == "object") {
            SearchData.fillLastSearch();
        }
    };
    var navigationMenu = function() {
        $("#navigation-hotel").off("change");
        document.getElementById("navigation-hotel").onchange = function() {
            var selectedOption = this.value;
            if (selectedOption == "hotelpage-overview") {
                window.location.href = selectedOption;
            } else if ($(this).find("option:selected").hasClass("js-urlExterna")) {
                window.open(selectedOption + "#navigation-reference", "_blank");
            } else {
                window.location.href = selectedOption + "#navigation-reference";
            }
        };
        $("#navigation-hotel option").each(function() {
            if (window.location.href.split("#")[0] == $(this).val()) {
                $("#navigation-hotel").val($(this).val());
            }
        });
    };
    var buttonMeetings = function() {
        $(".js-link-meetings-page").on("click", function() {
            var $menu = $("#navigation-hotel").length > 0 ? $("#navigation-hotel") : null;
            if ($menu != null && $menu.find("option.events").length > 0 && $menu.find("option.events").val() != "") {
                window.location = $("#navigation-hotel option.events").val();
            }
        });
    };
    return {
        init: init
    };
}();

Hotel.Rooms = function() {
    var totalRooms;
    var init = function() {
        if (typeof pageData != "undefined") {
            totalRooms = typeof pageData.totalRooms != "undefined" ? pageData.totalRooms : null;
        }
        if (totalRooms != null) {
            $(".js-total-rooms").html(totalRooms);
        }
    };
    return {
        init: init
    };
}();

Hotel.Offers = function() {
    var init = function() {
        if ($(".promo-time").length > 0) {
            var promo_times = $(".promo-time");
            $.each(promo_times, function(i, promo) {
                var s = $(promo).text().split(" ")[0];
                if (s != "" && s != undefined) {
                    $(promo).text(s);
                }
            });
        }
    };
    return {
        init: init
    };
}();

Hotel.Mice = function() {
    var jsonInfo;
    var init = function() {
        if (typeof pageData != "undefined") {
            jsonInfo = typeof pageData.jsonInfo != "undefined" && pageData.jsonInfo != "" ? pageData.jsonInfo : null;
        }
        if (jsonInfo != null) {
            if (jsonInfo != "") {
                var a = JSON.parse(jsonInfo);
                var tlfUpdated = false;
                for (var i = 0; i < a.length; i++) {
                    if (country != "") {
                        if (a[i].countryCode == country) {
                            $("#tlf").html(a[i].telephone);
                            $("#tlfME").attr("href", "tel:" + a[i].telephone);
                            $("#mail").html(a[i].mail);
                            $("#mailME").attr("href", "mailto:" + a[i].mail);
                            tlfUpdated = true;
                        }
                    }
                }
                if (!tlfUpdated) {
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].country == "All other Countries") {
                            $("#tlf").html(a[i].telephone);
                            $("#tlfME").attr("href", "tel:" + a[i].telephone);
                            $("#mail").html(a[i].mail);
                            $("#mailME").attr("href", "mailto:" + a[i].mail);
                        }
                    }
                }
            }
        }
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("#navigation-hotel").length > 0) {
        Hotel.init();
    }
});

function sendMail() {
    if ($("#email").val() != "" && $("#email").attr("aria-invalid") == "false") {
        $("#shareMail").attr("action", "mailto:" + $("#email").val() + "&body=" + window.location.href);
        $("#mail-share .close").click();
        $("#shareMail").submit();
    }
}

var Newsletter = function() {
    var _pageData;
    var init = function() {
        _pageData = typeof pageData != "undefined" ? pageData : null;
        if (_pageData != null) {
            var newsletterOk = typeof pageData.newsletterOk != "undefined" ? pageData.newsletterOk : "";
            var javaError = typeof pageData.javaError != "undefined" ? pageData.javaError : "";
            if (newsletterOk == "true") {
                $("#newsletter-success").modal("show");
            }
            if (javaError == "true") {
                $("#java-error").trigger("click");
            }
        }
        setDefaultFormValue();
    };
    var setDefaultFormValue = function() {
        if (typeof Vars.globalLang != "undefined" && Vars.globalLang != "") {
            $("#language").val(Vars.globalLang);
        }
        if (typeof Vars.country != "undefined" && Vars.country != "") {
            $("#country").val(Vars.country);
        }
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-newsletter")) {
        Newsletter.init();
    }
});

var Promotions = function() {
    var valid = true;
    var get_occupants_one_room = true;
    var formulario = "#form-search-promo";
    var isParamHotelId = typeof PromotionsData.hotelId != "undefined" && PromotionsData.hotelId != null && PromotionsData.hotelId != "" ? true : false;
    var selects = {
        country: "#sel-country",
        city: "#sel-city",
        hotel: "#sel-hotel",
        wrap_country: "#select-country",
        wrap_city: "#select-city",
        wrap_hotel: "#select-hotel"
    };
    var init = function() {
        handleSelects();
        handleForm();
        landing();
        $(".promo-time").text($(".promo-time").text().split(" ")[0]);
    };
    var landing = function() {
        if ($(".promo-time").length > 0 && $(".element-slider").length > 0) {
            var promo_times = $(".promo-time");
            $.each(promo_times, function(i, promo) {
                var s = $(promo).text().split(" ")[0];
                $(promo).text(s);
            });
            var eles = $(".element-slider");
            $.each(eles, function(i, ele) {
                if ($(ele).find("[data-type]").length == 0) {
                    $(ele).find(".no-result").show();
                }
            });
        }
    };
    var handleSelects = function() {
        if ($(selects.country).length > 0) {
            $(selects.country).on("change", function(e) {
                buildSelect(selects.city, getCities());
            });
            $(selects.city).on("change", function(e) {
                buildSelect(selects.hotel, getHotels());
            });
            buildSelect(selects.country, getCountries());
            if (isParamHotelId) {
                for (var i = 0; i < PromotionsData.locations.length; i++) {
                    for (var j = 0; j < PromotionsData.locations[i].CityList.length; j++) {
                        for (var k = 0; k < PromotionsData.locations[i].CityList[j].HotelsList.length; k++) {
                            if (PromotionsData.locations[i].CityList[j].HotelsList[k].IdHotel == PromotionsData.hotelId) {
                                $(selects.country).val(PromotionsData.locations[i].Country);
                                $(selects.wrap_city).show().removeClass("collapse");
                                buildSelect(selects.city, getCities());
                                $(selects.city).val(PromotionsData.locations[i].CityList[j].city);
                                $(selects.wrap_hotel).show().removeClass("collapse");
                                buildSelect(selects.hotel, getHotels());
                                $(selects.wrap_hotel).addClass("disabled");
                                $(selects.hotel).val(PromotionsData.hotelId).attr("disabled", "disabled");
                                break;
                            }
                        }
                    }
                }
            }
        }
        function getCountries() {
            var sorted_elements = new Array();
            clearSelect(selects.country);
            clearSelect(selects.city);
            clearSelect(selects.hotel);
            $.each(PromotionsData.locations, function(i, value) {
                for (var i = 0; i < value.CityList.length; i++) {
                    if (value.CityList[i].HotelsList != "") {
                        var ele = {
                            key: value["Country"],
                            name: value["Country"]
                        };
                    }
                }
                if (ele != undefined) {
                    sorted_elements.push(ele);
                }
            });
            sorted_elements.sort(sortByName);
            return sorted_elements;
        }
        function getCities() {
            var sorted_elements = new Array();
            var country_selected = $(selects.country).val();
            if (country_selected != "none") {
                clearSelect(selects.city);
                clearSelect(selects.hotel);
                var query = "$..[?(@.Country=='" + country_selected + "')].CityList[*]";
                var elements = jsonPath(PromotionsData.locations, query);
                $.each(elements, function(i, value) {
                    if (value.HotelsList != "") {
                        var ele = {
                            key: value["idCity"],
                            name: value["city"]
                        };
                        sorted_elements.push(ele);
                    }
                });
                sorted_elements.sort(sortByName);
            }
            return sorted_elements;
        }
        function getHotels() {
            var sorted_elements = new Array();
            var country_selected = $(selects.country).val();
            var city_selected = $(selects.city).val();
            var selected = false;
            if (country_selected != "none" && city_selected != "none") {
                clearSelect(selects.hotel);
                for (var i = 0; i < PromotionsData.locations.length; i++) {
                    if (PromotionsData.locations[i].Country == country_selected) {
                        for (var j = 0; j < PromotionsData.locations[i].CityList.length; j++) {
                            if (PromotionsData.locations[i].CityList[j].idCity == city_selected) {
                                var elements = PromotionsData.locations[i].CityList[j].HotelsList;
                            }
                        }
                    }
                }
                $.each(elements, function(i, value) {
                    var ele = {
                        key: value["IdHotel"],
                        name: value["HotelName"]
                    };
                    sorted_elements.push(ele);
                });
                sorted_elements.sort(sortByName);
            }
            return sorted_elements;
        }
        function clearSelect(sel) {
            $(sel).find("option[value!='none']").remove();
        }
        function buildSelect(output_select, elements) {
            var selected_option = "";
            var $output_select = $(output_select);
            $output_select.parents(".form-group").removeClass("has-error");
            $("#form-select-destiny").find(".form-group").removeClass("disabled");
            $("#form-select-destiny").find("select").removeAttr("disabled");
            $.each(elements, function(i, value) {
                if ($.type(value) != undefined) {
                    opt = '<option value="' + value.key + '" ' + selected_option + ">" + value.name + "</option>";
                    $output_select.append(opt);
                }
            });
            if ($(elements).length == 1) {
                $output_select.val($output_select.find('option[value!="none"]').val());
                $output_select.parents(".form-group").addClass("disabled");
                $output_select.prop("disabled", true);
                $output_select.trigger("change");
            }
            checkSelectsLength();
        }
        function checkSelectsLength() {
            var sels = [ selects.country, selects.city, selects.hotel ];
            $.each(sels, function(i, sel) {
                if ($(sel).find('option[value!="none"]').length == 1) {
                    $(sel).parents(".form-group").addClass("disabled");
                    $(sel).prop("disabled", true);
                }
            });
        }
    };
    var handleForm = function() {
        if ($(selects.country).length > 0) {
            $(".call-action.setRooms").on("click", function() {
                get_occupants_one_room = false;
            });
            $("#select-option").find("[data-pax]").on("click", function() {
                get_occupants_one_room = true;
            });
            $("#submit-search-promo").on("click", function(e) {
                e.preventDefault();
                var valid = validate();
                if (valid) {
                    $(".loading").fadeIn(500);
                    fillFormFields(getFields());
                    var seachDate = rotateDate(fini.value) + " - " + rotateDate(fout.value);
                    var hotelCountry = country;
                    var hotelCity = destino.value;
                    var numberOfNights = 1;
                    try {
                        if (fini && fout) {
                            var date_ini = fini.value.split("/");
                            var date_out = fout.value.split("/");
                            var fecha1 = Date.UTC(date_ini[2], date_ini[1] - 1, date_ini[0]);
                            var fecha2 = Date.UTC(date_out[2], date_out[1] - 1, date_out[0]);
                            var dif = fecha2 - fecha1;
                            var dias = Math.floor(dif / (1e3 * 60 * 60 * 24));
                            numberOfNights = dias;
                        }
                    } catch (ex) {
                        console.log(ex);
                        return false;
                    }
                    trackClickOnSearchAvailability(hotelCountry, hotelCity, seachDate, numberOfNights);
                    $(formulario).submit();
                }
            });
        }
        function getFields() {
            var startDayText = $(".check-in").find(".day-week").html();
            var startDay = $(".check-in").find(".day-number").html();
            var startMonth = $(".check-in").find(".day-month").html();
            var startYear = $(".check-in").find(".day-year").html() || getCurrentYear();
            var fini = [ startDay, startMonth, startYear ].join("/");
            var endDayText = $(".check-out").find(".day-week").html();
            var endDay = $(".check-out").find(".day-number").html();
            var endMonth = $(".check-out").find(".day-month").html();
            var endYear = $(".check-out").find(".day-year").html() || getCurrentYear();
            var fout = [ endDay, endMonth, endYear ].join("/");
            var fields;
            var select_hotel_val = $(selects.hotel).val();
            var select_destino_val = $(selects.city).val();
            fields = {
                fini: fini,
                fout: fout,
                rooms: $("#srooms").text(),
                country: $(selects.country).val(),
                destino: select_destino_val
            };
            if (select_hotel_val != "none") {
                $("#code").attr("name", "hotelId").val(select_hotel_val);
            } else {
                $("#code").attr("name", "destinationId").val(select_destino_val);
            }
            if ($("#validate-code").val() != "") {
                $.extend(fields, {
                    voucherCode: $("#validate-code").val()
                });
            }
            $('input[id*="nadults"]').remove();
            $('input[id*="nchilds"]').remove();
            $('input[id*="nbabies"]').remove();
            if (get_occupants_one_room == false) {
                var mo = $("#home-room-select .cloneRoom");
                var input = "";
                $.each(mo, function(i, ele) {
                    var index = i + 1;
                    var adults = $("#adultRoom-" + index).val();
                    var childs = $("#kidRoom-" + index).val();
                    var babies = $("#babyRoom-" + index).val();
                    var more = {};
                    more["nadults" + index] = adults;
                    more["nchilds" + index] = childs;
                    more["nbabies" + index] = babies;
                    $.extend(fields, more);
                    input += '<input type="hidden" id="nadults' + index + '" name="nadults' + index + '" value="' + adults + '" />';
                    input += '<input type="hidden" id="nchilds' + index + '" name="nchilds' + index + '" value="' + childs + '" />';
                    input += '<input type="hidden" id="nbabies' + index + '" name="nbabies' + index + '" value="' + babies + '" />';
                    $(formulario).prepend(input);
                });
            } else if (get_occupants_one_room == true) {
                var adults = $("#sadults").html();
                var childs = $("#schilds").html();
                var babies = $("#sbabies").html();
                var input = "";
                var more = {};
                more["nadults1"] = adults;
                more["nchilds1"] = childs;
                more["nbabies1"] = babies;
                $.extend(fields, more);
                input += '<input type="hidden" id="nadults1" name="nadults1" value="' + adults + '" />';
                input += '<input type="hidden" id="nchilds1" name="nchilds1" value="' + childs + '" />';
                input += '<input type="hidden" id="nbabies1" name="nbabies1" value="' + babies + '" />';
                $(formulario).prepend(input);
            }
            return fields;
        }
        function validate() {
            valid = true;
            var required_fields = $("#form-select-destiny").find("[required]");
            $.each(required_fields, function(i, ele) {
                if ($(ele).val() == "none") {
                    valid = false;
                    $(ele).parents(".form-group").addClass("has-error");
                }
            });
            return valid;
        }
    };
    return {
        init: init
    };
}();

$(function() {
    if ($("body").hasClass("page-promotions")) {
        Promotions.init();
    }
});

var Register = function() {
    var _pageData;
    var init = function() {
        _pageData = typeof pageData != "undefined" ? pageData : null;
        if (_pageData != null) {
            pageActions();
            validateForm();
        }
    };
    var pageActions = function() {
        if (_pageData.showLightbox == "true") {
            if (_pageData.javaErrorRegister == "true") {
                $("#java-error").trigger("click");
            } else {
                $("#success").modal("show");
            }
        }
        $("#name").focus();
        $(".js-input-clear").show();
        if (typeof _pageData.nationality != "undefined" && _pageData.nationality != "") {
            $("#nationality").val(_pageData.nationality);
        }
    };
    var validateForm = function() {
        var formulary = $("#rewardsForm");
        var cta = formulary.find("[type=submit]");
        var formularyValidations = formulary.find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            autoAdd: {
                helpBlocks: false
            },
            bindEvents: [ "blur", "change" ],
            submitError: function($form, event, errors) {
                var array_to_send = [];
                $.each(errors, function(ele, value) {
                    array_to_send.push(ele);
                });
                trackFormError("loginForm", array_to_send);
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                cta.prop("disabled", true);
                if ($($form).find(".has-error").length == 0) {
                    callLoading();
                    trackFormSuccess("rewardssignupfrom");
                    formularyValidations.jqBootstrapValidation("destroy");
                    $form.submit();
                } else {
                    hideLoading();
                    cta.prop("disabled", false);
                }
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    if ($("body").hasClass("page-rewards-register")) {
        Register.init();
    }
});

var ResetPassword = function() {
    var init = function() {
        validateForm();
    };
    var validateForm = function() {
        var formulary = $("#resetPasswordForm");
        var cta = formulary.find("[type=submit]");
        var formularyValidations = formulary.find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
                console.log("submitError: ", errors);
                if ($form.find("div.has-error").length) {
                    moveToOffset = $form.find("div.has-error").eq(0).offset().top - 90 || 0;
                    $("html, body").animate({
                        scrollTop: moveToOffset,
                        useTranslate3d: true
                    }, 700);
                }
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                var button = $($form).find("[type=submit]");
                button.prop("disabled", true);
                var pwError = $(".pw-feedback");
                var pw = $form.find("input,textarea,select").not("[type=submit]").val();
                var _RegExp = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])|(?=.*[a-z])(?=.*[0-9])(?=.*[^\w\s])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])).{8,}$/;
                var _empty = pw === "";
                if ((pw.match(_RegExp) || _empty) && $($form).find(".has-error").length == 0) {
                    pwError.addClass("hide");
                    callLoading();
                    formularyValidations.jqBootstrapValidation("destroy");
                    var url = "/rest/reset-password-token";
                    var data = {
                        token: token,
                        password: $("#password").val()
                    };
                    var jqxhr = $.ajax({
                        url: url,
                        type: "POST",
                        data: JSON.stringify(data),
                        contentType: "application/json"
                    }).done(function(result) {
                        $("#reset-password-modal-success").modal("show");
                    }).fail(function(error) {
                        $("#reset-password-modal-error").modal("show");
                    }).always(function() {
                        button.prop("disabled", false);
                        hideLoading();
                    });
                } else {
                    event.preventDefault();
                    pwError.removeClass("hide");
                    hideLoading();
                    button.prop("disabled", false);
                }
            },
            filter: function() {
                return $(this).is(":visible");
            }
        });
    };
    return {
        init: init
    };
}();

$(function() {
    if ($("body").hasClass("page-reset-password") || $("#resetPasswordForm").length > 0) {
        ResetPassword.init();
    }
});

RW = function() {
    var errorCode;
    var successCode;
    var init = function() {
        if (typeof pageData != "undefined") {
            errorCode = typeof pageData.errorCode != "undefined" ? pageData.errorCode : "";
            successCode = typeof pageData.successCode != "undefined" ? pageData.successCode : "";
            passbookParam = typeof pageData.passbookParam != "undefined" && pageData.passbookParam == "true" ? true : false;
        }
        RW.Donate.init();
        RW.CustomerCare.init();
        RW.Transfer.init();
        RW.ProfileLoginInfo.init();
        RW.ProfilePersonalInfo.init();
        RW.ProfileContactInfo.init();
        core();
        sendInvitation();
        downloadPassbookParam();
    };
    var core = function() {
        $(window).load(function() {
            if (errorCode != null && errorCode != "" && errorCode != "00000") {
                $("#modal-error").modal("show");
            }
            if (successCode != null && successCode != "" && successCode != "00000") {
                $("#modal-success").modal("show");
            }
        });
        if ($(".js-link-customer-care").length > 0) {
            var url = $(".js-link-customer-care").attr("href") + "#cc-claim";
            $(".js-link-customer-care").attr("href", url);
        }
        $("#go-to-section").on("change", function() {
            var url = $(this).val();
            if (url) {
                window.location = url;
            }
            return false;
        });
    };
    var sendInvitation = function() {
        $("#inviteForm").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "blur", "change" ],
            autoAdd: {
                helpBlocks: !1
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var button = $($form).find("[type=submit]");
                var content_drop = $($form).parents(".booking-aditional-info");
                button.prop("disabled", true);
                var toEmail = $("#friend-email").val();
                var subjectEmail = $("#subject-email").val();
                var bodyEmail = $("#body-email").val();
                window.location = "mailto:" + toEmail + "?subject=" + subjectEmail + "&body=" + bodyEmail;
                button.prop("disabled", false);
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var downloadPassbookParam = function() {
        if (passbookParam) {
            $(".track-card-passbook")[0].click();
        }
    };
    return {
        init: init
    };
}();

RW.Donate = function() {
    var init = function() {
        $("#js-donate-submit").on("click", function(e) {
            var url = "/rewards/savedonate";
            var data = {
                points: $("#pointsId").html()
            };
            var jqxhr = $.ajax({
                url: url,
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json"
            });
            jqxhr.done(function(result) {
                console.log("result : " + JSON.stringify(result));
                var errorCode = "${result.errorCode}";
                if (errorCode) {
                    $("#modal-error").modal("show");
                    return;
                }
                $("#nhUser-points").text(result.points);
                $("#nhUser-value").text(result.value);
            }).fail(function(error) {
                alert("error : " + error);
            }).always(function() {});
        });
    };
    return {
        init: init
    };
}();

RW.CustomerCare = function() {
    var labelErrorClaimFields;
    var labelErrorClaimExcep;
    var labelSuccessFaq;
    var init = function() {
        if (typeof pageData != "undefined" && $(".js-block-customer-care").length > 0) {
            labelErrorClaimFields = typeof pageData.labelErrorClaimFields != "undefined" ? pageData.labelErrorClaimFields : "";
            labelErrorClaimExcep = typeof pageData.labelErrorClaimExcep != "undefined" ? pageData.labelErrorClaimExcep : "";
            labelSuccessFaq = typeof pageData.labelSuccessFaq != "undefined" ? pageData.labelSuccessFaq : "";
            claimPointsValidations();
            commentsValidations();
        }
    };
    var commentsValidations = function() {
        $("#ccCommentsForm").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "blur", "change" ],
            autoAdd: {
                helpBlocks: !1
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var button = $($form).find("[type=submit]");
                button.prop("disabled", true);
                var data = $("#comments-comments-text").val();
                var jqxhr = $.ajax({
                    url: "/rewards/comments",
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json"
                }).done(function(result) {
                    console.log(result.messageError);
                    var errorCode = result.errorCode;
                    if (!checkResult(errorCode)) {
                        return;
                    } else {
                        clearClaim();
                    }
                }).fail(function(error) {
                    $("#modal-error .modal-body p").text(labelErrorClaimExcep);
                    $("#modal-error").modal("show");
                }).always(function() {
                    button.prop("disabled", false);
                });
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var claimPointsValidations = function() {
        $(window).load(function() {
            $('.js-range-calendars .day:disabled:not([data-day=""])').removeClass("not-available");
            $('.js-range-calendars .day:disabled:not([data-day=""])').removeAttr("disabled");
        });
        $("#ccClaimPointsForm").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "blur", "change" ],
            autoAdd: {
                helpBlocks: !1
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var button = $($form).find("[type=submit]");
                var cIn = $($form).find(".check-in");
                var cOut = $($form).find(".check-out");
                var _checkIn = cIn.find(".day-number").text() + "/" + cIn.find(".day-month").text() + "/" + cIn.find(".day-year").text();
                var _checkOut = cOut.find(".day-number").text() + "/" + cOut.find(".day-month").text() + "/" + cOut.find(".day-year").text();
                button.prop("disabled", true);
                var data = {
                    country: $("#select-country").val(),
                    city: $("#select-city").val(),
                    hotel: $("#select-hotel").val(),
                    bookingId: $("#claim-booking-id").val(),
                    comments: $("#claim-comments").val(),
                    checkIn: _checkIn,
                    checkOut: _checkOut
                };
                var jqxhr = $.ajax({
                    url: "/rewards/claim",
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json"
                }).done(function(result) {
                    console.log(result.messageError);
                    var errorCode = result.errorCode;
                    if (!checkResult(errorCode)) {
                        return;
                    } else {
                        clearComments();
                    }
                }).fail(function(error) {
                    $("#modal-error .modal-body .h1").text(labelErrorClaimExcep);
                    $("#modal-error").modal("show");
                }).always(function() {
                    button.prop("disabled", false);
                });
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var clearClaim = function() {
        $("#select-country").val("").selectpicker("refresh");
        $("#select-city").val("").selectpicker("refresh");
        $("#select-hotel").val("").selectpicker("refresh");
        $("#booking-id").val("");
        $("#comments").val("");
    };
    var clearComments = function() {
        $("#comments-comments-text").val("");
    };
    var checkResult = function(errorCode) {
        if (errorCode != null && errorCode != "" && errorCode === "99999") {
            $("#modal-error .modal-body p").text(labelErrorClaimExcep);
            $("#modal-error").modal("show");
            return false;
        }
        if (errorCode != null && errorCode != "" && errorCode === "00010") {
            $("#modal-error .modal-body p").text(labelErrorClaimFields);
            $("#modal-error").modal("show");
            return false;
        }
        if (errorCode != null && errorCode != "" && errorCode === "00000") {
            $("#modal-success .modal-body p").text(labelSuccessFaq);
            $("#modal-success").modal("show");
            return true;
        }
        return true;
    };
    return {
        init: init
    };
}();

RW.Transfer = function() {
    var labelErrorTransferExcep;
    var labelErrorTransferFields;
    var errorCodeTransfer;
    var init = function() {
        if (typeof pageData != "undefined" && $(".js-block-transfer").length > 0) {
            labelErrorTransferExcep = typeof pageData.labelErrorTransferExcep != "undefined" ? pageData.labelErrorTransferExcep : "";
            labelErrorTransferFields = typeof pageData.labelErrorTransferFields != "undefined" ? pageData.labelErrorTransferFields : "";
            errorCodeTransfer = typeof pageData.errorCodeTransfer != "undefined" ? pageData.errorCodeTransfer : "";
            if (errorCodeTransfer != "") {
                checkResult(errorCodeTransfer);
            }
        }
    };
    var checkResult = function(errorCode) {
        if (errorCode != null && errorCode != "") {
            if (errorCode == "99999") {
                $("#modal-error .modal-body p").text(labelErrorTransferExcep);
                $("#modal-error").modal("show");
                return false;
            }
            if (errorCode == "00010") {
                $("#modal-error .modal-body p").text(labelErrorTransferFields);
                $("#modal-error").modal("show");
                return false;
            }
            if (errorCode == "00000") {
                $("#modal-success").modal("show");
                return true;
            }
        }
        return true;
    };
    return {
        init: init
    };
}();

RW.ProfileLoginInfo = function() {
    var labelErrorEmail;
    var labelErrorPass;
    var init = function() {
        if (typeof pageData != "undefined" && typeof pageData.labelErrorEmail != "undefined") {
            labelErrorEmail = typeof pageData.labelErrorEmail != "undefined" ? pageData.labelErrorEmail : "";
            labelErrorPass = typeof pageData.labelErrorPass != "undefined" ? pageData.labelErrorPass : "";
            validationsUpdateEmail();
            validationsUpdatePassword();
        }
    };
    var validationsUpdateEmail = function() {
        $("#emailInfForm").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "blur", "change" ],
            autoAdd: {
                helpBlocks: !1
            },
            submitError: function($form, event, errors) {
                console.log("Errors: ", errors);
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var button = $($form).find("[type=submit]");
                var content_drop = $($form).parents(".booking-aditional-info");
                button.prop("disabled", true);
                var data = {
                    email: $("#my-profile-email").val()
                };
                var jqxhr = $.ajax({
                    url: "/rewards/updatemail",
                    type: "POST",
                    data: data
                }).done(function(result) {
                    var errorCode = result;
                    if (!checkResult(errorCode, labelErrorEmail)) {
                        return;
                    }
                }).fail(function(error) {
                    $("#modal-error .modal-body p").text(labelErrorEmail);
                    $("#modal-error").modal("show");
                }).always(function() {
                    button.prop("disabled", false);
                    $(content_drop).find(".aditional-info").slideToggle();
                    $(content_drop).find(".icon-go-link").removeClass("opened");
                });
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var validationsUpdatePassword = function() {
        $("#updatePassForm").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            bindEvents: [ "blur", "change" ],
            autoAdd: {
                helpBlocks: !1
            },
            submitError: function($form, event, errors) {
                console.log("Errors: ", errors);
            },
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var button = $($form).find("[type=submit]");
                var content_drop = $($form).parents(".booking-aditional-info");
                button.prop("disabled", true);
                var url = "/rewards/updatepass";
                var data = {
                    currentPass: $("#recent-pass").val(),
                    newPass: $("#new-pass").val()
                };
                var jqxhr = $.ajax({
                    url: url,
                    type: "POST",
                    data: data
                }).done(function(result) {
                    var errorCode = result;
                    if (!checkResult(errorCode, labelErrorPass)) {
                        return;
                    }
                }).fail(function(error) {
                    $("#modal-error .modal-body p").text(labelErrorPass);
                    $("#modal-error").modal("show");
                }).always(function() {
                    button.prop("disabled", false);
                    $(content_drop).find(".aditional-info").slideToggle();
                    $(content_drop).find(".icon-go-link").removeClass("opened");
                });
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var checkResult = function(errorCode, errorMessage) {
        if (!errorCode) {
            $("#modal-error .modal-body p").text(errorMessage);
            $("#modal-error").modal("show");
            return false;
        }
        if (errorCode) {
            $("#modal-success").modal("show");
            return true;
        }
        return true;
    };
    return {
        init: init
    };
}();

RW.ProfilePersonalInfo = function() {
    var javaReturn;
    var nacionalidad;
    var mydia;
    var mymes;
    var myano;
    var labelRequired;
    var labelDniNotValid;
    var init = function() {
        if (typeof pageData != "undefined" && typeof pageData.nacionalidad != "undefined" && typeof pageData.mydia != "undefined") {
            now = new Date();
            nowYear = now.getYear();
            if (nowYear < 2e3) {
                nowYear += 1900;
            }
            javaReturn = typeof pageData.javaReturn != "undefined" ? pageData.javaReturn : "";
            nacionalidad = typeof pageData.nacionalidad != "undefined" ? pageData.nacionalidad : null;
            mydia = typeof pageData.mydia != "undefined" ? pageData.mydia : now.getDate();
            mymes = typeof pageData.mymes != "undefined" ? pageData.mymes : now.getMonth() + 1;
            myano = typeof pageData.myano != "undefined" ? pageData.myano : nowYear;
            labelRequired = typeof pageData.labelRequired != "undefined" ? pageData.labelRequired : "";
            labelDniNotValid = typeof pageData.labelDniNotValid != "undefined" ? pageData.labelDniNotValid : "";
            javaError();
            nationality();
            dateBirth();
            validations();
        }
    };
    var javaError = function() {
        if (javaReturn == "0") {
            $("#modal-success").modal("show");
        } else if (javaReturn == "1") {
            $("#modal-error").modal("show");
        }
    };
    var nationality = function() {
        if (nacionalidad != null) {
            setTimeout(function() {
                var posnac = $("#nationality").find("option[value=" + nacionalidad + "]").index();
                var nac2 = $("#nationality").find("option[value=" + nacionalidad + "]").text();
                $("#nationality").val(nacionalidad);
            }, 700);
        }
    };
    var dateBirth = function() {
        var selectAnio = $("#anio");
        if (mydia != "" && mymes != "" && myano != "") {
            var comprobardia = mydia.toString();
            var comprobarmes = mymes.toString();
            if (comprobarmes.length < 2) {
                comprobarmes = 0 + comprobarmes;
                mymes = comprobarmes;
            }
            if (comprobardia.length < 2) {
                comprobardia = 0 + comprobardia;
                mydia = comprobardia;
            }
            setTimeout(function() {
                var dianac = myano + "-" + mymes + "-" + mydia;
                $("#date-birth").val(dianac);
                $(".js-fake-placeholder").hide();
            }, 700);
            var d = new Date(), month = d.getMonth() + 1, day = d.getDate(), output = d.getFullYear() - 18 + "-" + (10 > month ? "0" : "") + month + "-" + (10 > day ? "0" : "") + day;
            $("#date-birth").each(function() {
                $(this).attr({
                    max: output
                });
            });
        }
    };
    var validations = function() {
        var formulary = $("#personalDataForm");
        var dniInput = $("#nationality-id");
        var formularyValidations = $(formulary).find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
            preventSubmit: true,
            autoAdd: {
                helpBlocks: false
            },
            bindEvents: [ "blur", "change" ],
            submitSuccess: function($form, event) {
                event.preventDefault();
                console.log("OK validations");
                var button = $($form).find("[type=submit]");
                var resultDni = isSpanishDni(dniInput.val());
                button.prop("disabled", true);
                if (resultDni) {
                    console.log("there is no errors");
                    formularyValidations.jqBootstrapValidation("destroy");
                    $form.submit();
                } else {
                    console.log("there is DNI errors");
                    var $inputs = dniInput;
                    $inputs.jqBootstrapValidation();
                    $inputs.trigger("change.validation", {
                        submitting: true
                    });
                    button.prop("disabled", false);
                }
            },
            filter: function() {
                return $(this).is(":visible") || $(this).hasClass("force-validation");
            }
        });
    };
    var isSpanishDni = function(dni) {
        var parent_formgroup = $("#nationality-id").parents(".form-group");
        if ($("#nationality").val() == "ES") {
            if (dni != "") {
                var numero;
                var letr;
                var letra;
                if (/^\d{8}[a-zA-Z]$/.test(dni)) {
                    numero = dni.substr(0, dni.length - 1);
                    letr = dni.substr(dni.length - 1, 1);
                    numero = numero % 23;
                    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
                    letra = letra.substring(numero, numero + 1);
                    if (letra != letr.toUpperCase()) {
                        parent_formgroup.find(".help-block").html('<ul role="alert"><li>' + labelDniNotValid + "</li></ul>");
                        parent_formgroup.addClass("has-warning");
                        return false;
                    } else {
                        parent_formgroup.removeClass("has-warning").removeClass("has-error");
                        return true;
                    }
                } else {
                    parent_formgroup.find(".help-block").html('<ul role="alert"><li>' + labelDniNotValid + "</li></ul>");
                    parent_formgroup.addClass("has-warning");
                    return false;
                }
            } else {
                parent_formgroup.find(".help-block").html('<ul role="alert"><li>' + labelRequired + "</li></ul>");
                parent_formgroup.addClass("has-error");
                return false;
            }
        } else {
            parent_formgroup.removeClass("has-warning").removeClass("has-error");
            return true;
        }
    };
    var validateSpanishDni = function($el, value, callback) {
        callback({
            value: value,
            valid: isSpanishDni(value),
            message: labelDniNotValid
        });
    };
    return {
        init: init,
        validateSpanishDni: validateSpanishDni
    };
}();

RW.ProfileContactInfo = function() {
    var profileCountry;
    var init = function() {
        if (typeof pageData != "undefined" && typeof pageData.profileCountry != "undefined") {
            profileCountry = typeof pageData.profileCountry != "undefined" ? pageData.profileCountry : null;
            if (profileCountry != null && $("#ci_country").length > 0) {
                $(window).load(function() {
                    $("#ci_country").val(profileCountry);
                });
            }
        }
    };
    return {
        init: init
    };
}();

$(function() {
    if ($("body").hasClass("page-rewards")) {
        RW.init();
    }
});

var dynamicTelephones = function() {
    var telephoneJSON = "/resources/telephoneJSON.txt";
    var channelIndex = "-1";
    var channelIndexDefault = "0";
    var telephoneArray = "";
    var _campId = "";
    var _country = "";
    var _continent = "";
    var result = {
        countryTelf: "",
        globalTelf: "",
        countryName: "",
        countryKey: ""
    };
    var dyanmicTypePhone = "";
    var init = function() {
        if (typeof Vars != "undefined") {
            _campId = typeof Vars.campId != "undefined" && Vars.campId ? Vars.campId : "";
            _country = typeof Vars.country != "undefined" && Vars.country ? Vars.country : "";
            _continent = typeof Vars.continent != "undefined" && Vars.continent ? Vars.continent : "";
        }
        _continent = $.cookie("USER_CT_CONTINENT") != "" && $.cookie("USER_CT_CONTINENT") != null ? $.cookie("USER_CT_CONTINENT") : _continent;
        _country = $.cookie("USER_CT_COUNTRYCODE") != "" && $.cookie("USER_CT_COUNTRYCODE") != null ? $.cookie("USER_CT_COUNTRYCODE") : _country;
        getTelephones();
    };
    var getTelephones = function() {
        $.ajax({
            url: telephoneJSON,
            dataType: "json",
            cache: true
        }).done(function(data) {
            for (var i = 0; i < data.channels.length; i++) {
                if (_campId != "") {
                    for (var j = 0; j < data.channels[i].agent.length; j++) {
                        if (data.channels[i].agent[j].campId == _campId) {
                            channelIndex = i;
                        }
                    }
                }
                if (data.channels[i].name == "MOBILE TELEPHONES") {
                    channelIndexDefault = i;
                }
            }
            channelIndex = channelIndexDefault;
            result.globalTelf = data.channels[channelIndex].globalChannel;
            telephoneArray = data.channels[channelIndex].telephones;
            $.each(telephoneArray, function(i, ele) {
                if (ele.country == _country) {
                    result.countryTelf = ele.telephone;
                    result.countryName = ele.countryName;
                    result.countryKey = ele.country;
                }
            });
            changeHTML();
            console.log(result);
        }).fail(function(data) {
            console.log("Error al recuperar los telefonos dynamicos");
            result.countryTelf = "+34 91 398 46 61";
            result.globalTelf = "+34 91 398 46 61";
            changeHTML();
        });
    };
    var changeHTML = function() {
        dyanmicTypePhone = result.countryTelf ? result.countryTelf : result.globalTelf;
        $("a.dynamicTelephone").attr("href", "tel:" + dyanmicTypePhone.replace(/ /g, "")).html(dyanmicTypePhone);
        $(".dynamicTelephoneTxt").html(dyanmicTypePhone);
        $(".dynamicTelephoneHref").attr("href", "tel:" + dyanmicTypePhone.replace(/ /g, ""));
        $(".dynamicCountryName").html(result.countryName);
        $(".dynamicFlag").addClass("icon-flag-" + result.countryKey.toLowerCase());
        $("a.dynamicPhoneGlobal").attr("href", "tel:" + result.globalTelf.replace(/ /g, "")).html(result.globalTelf);
        $(".dynamicPhoneGlobalTxt").html(result.globalTelf);
        $("a.dynamicPhoneGlobalHref").attr("href", "tel:" + result.globalTelf.replace(/ /g, ""));
        $("#contactTel .dynamicTelephone").html(result.countryName + "</br> " + dyanmicTypePhone);
        $(".dynamicTelephoneInput").val(dyanmicTypePhone);
        if ($(".dynamicAddWrap").length > 0) {
            var tridion_countries = [];
            $.each($(".dynamicAddWrap"), function(i, ele) {
                tridion_countries.push($(ele).data("country"));
            });
            $.each(telephoneArray, function(i, ele) {
                if ($.inArray(ele.countryName, tridion_countries) != -1) {
                    var parent = $('[data-country="' + ele.countryName + '"]');
                    parent.find(".dynamicAddPhone").html(ele.telephone);
                    parent.find(".dynamicAddPhoneHref").attr("href", "tel:" + ele.telephone.replace(/ /g, ""));
                }
            });
        }
    };
    var changelazyLoadHTML = function() {
        if (dyanmicTypePhone && "null" != dyanmicTypePhone) {
            $(".dynamicTelephoneHref").attr("href", "tel:" + dyanmicTypePhone.replace(/ /g, ""));
        }
    };
    return {
        init: init,
        changelazyLoadHTML: changelazyLoadHTML
    };
}();

$(document).ready(function() {
    dynamicTelephones.init();
});

var SearchCriteria = {
    hotelId: null,
    destination: null,
    searchDate: null,
    roomsNumber: null,
    numberOfAdults: null,
    numberOfChildren: null,
    numberOfNights: null,
    promoCode: null,
    loadData: function() {
        if (jQuery.type($("#code").attr("name")) !== "undefined") {
            var name = $("#code").attr("name");
            if (name === "hotelId") {
                this.hotelId = $("#code").attr("value");
            } else if (name === "destinationId") {
                this.destination = $("#code").attr("value");
            }
        }
        this.searchDate = rotateDate($("#fini").val()) + " - " + rotateDate($("#fout").val());
        if ($("#voucherCode").val() !== "") this.promoCode = $("#voucherCode").val();
        this.roomsNumber = $("#srooms").text();
        this.numberOfAdults = $("#sadults").text();
        this.numberOfChildren = $("#schilds").text();
        this.numberOfBabies = $("#sbabies").text();
        this.numberOfNights = $(".js-total-nights").text();
        return this;
    },
    newEmpty: function() {
        this.hotelId = null;
        this.destination = null;
        this.searchDate = null;
        this.roomsNumber = null;
        this.numberOfAdults = null;
        this.numberOfChildren = null;
        this.numberOfNights = null;
        this.promoCode = null;
        return this;
    },
    getHotelId: function() {
        return this.hotelId;
    },
    setHotelId: function(hotelId) {
        this.hotelId = hotelId;
    },
    getDestination: function() {
        return this.destination;
    },
    setDestination: function(destination) {
        this.destination = destination;
    },
    getSearchDate: function() {
        return this.searchDate;
    },
    setSearchDate: function(searchDate) {
        this.searchDate = searchDate;
    },
    getRoomsNumber: function() {
        return this.roomsNumber;
    },
    setRoomsNumber: function(roomsNumber) {
        this.roomsNumber = roomsNumber;
    },
    getNumberOfAdults: function() {
        return this.numberOfAdults;
    },
    setNumberOfAdults: function(numberOfAdults) {
        this.numberOfAdults = numberOfAdults;
    },
    getNumberOfChildren: function() {
        return this.numberOfChildren;
    },
    setNumberOfChildren: function(numberOfChildren) {
        this.numberOfChildren = numberOfChildren;
    },
    getNumberOfBabies: function() {
        return this.numberOfBabies;
    },
    setNumberOfBabies: function(numberOfBabies) {
        this.numberOfBabies = numberOfBabies;
    },
    getNumberOfNights: function() {
        return this.numberOfNights;
    },
    setNumberOfNights: function(numberOfNights) {
        this.numberOfNights = numberOfNights;
    },
    getPromoCode: function() {
        return this.promoCode;
    },
    setPromoCode: function(promoCode) {
        this.promoCode = promoCode;
    }
};

var Filter = {
    order: null,
    maxPrice: null,
    maxDistance: null,
    starsNumber1: false,
    starsNumber2: false,
    starsNumber3: false,
    starsNumber4: false,
    starsNumber5: false,
    loadData: function() {
        var maxPrice = $("#filter-price").val();
        var sortBy = $("#sortby").val().trim();
        var maxDistance = $("#filter-distance").val();
        if (jQuery.type(sortBy) !== "undefined") {
            this.order = sortBy;
        }
        if (jQuery.type(maxPrice) !== "undefined") {
            this.maxPrice = maxPrice;
        }
        if (jQuery.type(maxDistance) !== "undefined") {
            this.maxDistance = maxDistance;
        }
        if ($("#stars-number-1").is(":checked")) {
            this.starsNumber1 = true;
        }
        if ($("#stars-number-2").is(":checked")) {
            this.starsNumber2 = true;
        }
        if ($("#stars-number-3").is(":checked")) {
            this.starsNumber3 = true;
        }
        if ($("#stars-number-4").is(":checked")) {
            this.starsNumber4 = true;
        }
        if ($("#stars-number-5").is(":checked")) {
            this.starsNumber5 = true;
        }
        return this;
    },
    setOrder: function(order) {
        this.order = order;
    },
    getOrder: function() {
        return this.order;
    },
    setMaxPrice: function(maxPrice) {
        this.order = order;
    },
    getMaxPrice: function() {
        return this.maxPrice;
    },
    setMaxDistance: function(maxDistance) {
        this.maxDistance = maxDistance;
    },
    getMaxDistance: function() {
        return this.maxDistance;
    },
    setStarsNumber1: function(selected) {
        this.starsNumber1 = selected;
    },
    isStarsNumber1: function() {
        return this.starsNumber1;
    },
    setStarsNumber2: function(selected) {
        this.starsNumber2 = selected;
    },
    isStarsNumber2: function() {
        return this.starsNumber2;
    },
    setStarsNumber3: function(selected) {
        this.starsNumber3 = selected;
    },
    isStarsNumber3: function() {
        return this.starsNumber3;
    },
    setStarsNumber4: function(selected) {
        this.starsNumber4 = selected;
    },
    isStarsNumber4: function() {
        return this.starsNumber4;
    },
    setStarsNumber5: function(selected) {
        this.starsNumber5 = selected;
    },
    isStarsNumber5: function() {
        return this.starsNumber5;
    },
    getNumStartsSelected: function() {
        var total = 0;
        if (this.starsNumber1) total++;
        if (this.starsNumber2) total++;
        if (this.starsNumber3) total++;
        if (this.starsNumber4) total++;
        if (this.starsNumber5) total++;
        return total;
    }
};

function rotateDate(date) {
    var rotatedDate = "";
    var parsedDate;
    if (jQuery.type(date) !== "undefined" && date != null && date !== "") {
        parsedDate = date.split("/");
        rotatedDate = parsedDate[2] + "/" + parsedDate[1] + "/" + parsedDate[0];
    }
    return rotatedDate;
}

var TrackForms = function() {
    var eventLeave = false;
    var formulario;
    var init = function() {
        formulario = $("form.track-form");
        validations();
        events();
    };
    var validations = function() {
        formulario.find("input,textarea,select").not("[type=submit]").jqBootstrapValidation({
            bindEvents: [ "blur", "change" ],
            submitError: function($form, event, errors) {
                eventLeave = true;
            },
            submitSuccess: function($form, event) {
                eventLeave = false;
            },
            filter: function() {
                return $(this).is(":visible");
            }
        });
    };
    var events = function() {
        formulario.find("input,textarea,select").on("change", function() {
            eventLeave = true;
        });
        window.onbeforeunload = function() {
            if (eventLeave) {
                callTrackFunctions();
            }
        };
    };
    var callTrackFunctions = function() {
        if (formulario.attr("name") == "rewardsForm") {
            trackRewardsAbandon();
        } else {
            trackLoginAbandon();
        }
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    TrackForms.init();
    $("#languajes").focus(function() {
        previousLanguage = $(this).val().trim();
    }).on("change", function() {
        currentLanguage = $(this).val().trim();
        if (currentLanguage !== previousLanguage) {
            trackChangeLanguage(previousLanguage, currentLanguage);
        }
    });
    $(".track-sigin").on("click", function() {
        trackClickOnLogin();
    });
    $(".track-menu-sigin").on("click", function() {
        trackClickOnLoginMenu();
    });
    $(".track-call").on("click", function() {
        trackClickOnCall();
    });
    $(".track-last-search").on("click", function() {
        var criteria = SearchCriteria.newEmpty();
        criteria.setHotelId("");
        criteria.setDestination(LastViewedDestination.destination);
        criteria.setSearchDate(rotateDate(LastViewedDestination.fini) + " - " + rotateDate(LastViewedDestination.fout));
        criteria.setRoomsNumber(LastViewedDestination.roomsNumber);
        criteria.setNumberOfAdults(LastViewedDestination.numberOfAdults);
        criteria.setNumberOfChildren(LastViewedDestination.numberOfChildren);
        criteria.setNumberOfBabies(LastViewedDestination.numberOfBabies);
        criteria.setNumberOfNights(LastViewedDestination.numberOfNights);
        trackClickOnLastSearch(criteria);
    });
    $(".track-last-viewed-hotel").on("click", function() {
        var criteria = SearchCriteria.newEmpty();
        criteria.setHotelId(LastViewedHotel.hotelId);
        criteria.setDestination("");
        criteria.setSearchDate(rotateDate(LastViewedHotel.fini) + " - " + rotateDate(LastViewedHotel.fout));
        criteria.setRoomsNumber(LastViewedHotel.roomsNumber);
        criteria.setNumberOfAdults(LastViewedHotel.numberOfAdults);
        criteria.setNumberOfChildren(LastViewedHotel.numberOfChildren);
        criteria.setNumberOfBabies(LastViewedHotel.numberOfBabies);
        criteria.setNumberOfNights(LastViewedHotel.numberOfNights);
        trackClickOnLastViewHotel(criteria);
    });
    $(".track-search").on("click", function() {
        var hotelCountry = HotelData.country;
        var hotelCity = HotelData.city;
        var seachDate = rotateDate(SearchData.fini) + " - " + rotateDate(SearchData.fout);
        var numberOfNights = SearchData.numberOfNights;
        var criteria = SearchCriteria.loadData();
        if ($("input#voucherCode").val() === "" || $("#pcodeSearch").val() === "") {
            trackClickOnSearch(criteria, hotelCity, seachDate, numberOfNights);
        } else {
            trackClickOnSearchWithPromo(criteria, hotelCity, seachDate, numberOfNights);
        }
    });
    $(".track-nhrewards").on("click", function() {
        trackClickOnNHRewards();
    });
    $(document).on("click", ".track-show-key", function(e) {
        var hotelId = SearchData.hotelId;
        var totalRooms = SearchData.roomsNumber;
        var totalAdults = SearchData.numberOfAdults;
        var totalChildren = SearchData.numberOfChildren;
        var endDate = rotateDate(SearchData.fini);
        var startDate = rotateDate(SearchData.fini);
        var totalBabies = SearchData.numberOfBabies;
        var $this = $(this);
        if ($this.data("track")) {
            var trackData = $this.data("track");
            if (trackData == "rewards") {
                trackShowRewardsRate(page_section, hotelId, totalRooms, totalAdults, totalChildren, endDate, startDate, totalBabies);
            } else if (trackData == "standard") {
                trackShowStandardRate(page_section, hotelId, totalRooms, totalAdults, totalChildren, endDate, startDate, totalBabies);
            } else if (trackData == "corporate") {
                trackShowCorporateRate(page_section, hotelId, totalRooms, totalAdults, totalChildren, endDate, startDate, totalBabies);
            } else if (trackData == "platinum_vip") {
                trackShowPlatinumVipRate(page_section, hotelId, totalRooms, totalAdults, totalChildren, endDate, startDate, totalBabies);
            } else if (trackData == "nh_media") {
                trackShowNHMediaRate(page_section, hotelId, totalRooms, totalAdults, totalChildren, endDate, startDate, totalBabies);
            } else if (trackData == "travel_partner") {
                trackShowTravelPartnerRate(page_section, hotelId, totalRooms, totalAdults, totalChildren, endDate, startDate, totalBabies);
            } else if (trackData == "package") {
                trackShowPackageRate(page_section);
            }
        }
    });
    $(".track-change-payment").change(function() {
        var $this = $(this);
        var paymentMethods = $this.val();
        trackChangePaymentMethod(page_section, paymentMethods);
    });
    $(".track-change-currency").click(function() {
        var currency = $(".track-currency").val();
        trackChangecCurrency(page_section, currency);
    });
    $(".track-add-cot").click(function() {
        trackAddCot(page_section);
    });
    $(".track-book-other-guest").click(function() {
        trackBookOtherGuest(page_section);
    });
    $("#modal-session-expire").on("show.bs.modal", function(e) {
        trackExpireBooking(page_section);
    });
    $(".track-another-book").click(function() {
        trackConfirmationOtraReserva(page_section);
    });
    $(".track-another-book").click(function() {
        trackConfirmationOtraReserva(page_section);
    });
    $(".track-newsletter").on("click", function() {
        trackClickOnNewsletter();
    });
    $("#show-filters").on("click", function() {
        trackClickOnFilters();
    });
    $(".track-list").on("click", function() {
        trackClickOnList();
    });
    $(".track-map").on("click", function() {
        trackClickOnMap();
    });
    $("#submit-filters").on("click", function() {
        var filter = Filter.loadData();
        trackApplyFilters(filter);
    });
    $(".track-hotel").on("click", function() {
        var criteria = SearchCriteria.newEmpty();
        criteria.setHotelId(SearchData.hotelId);
        criteria.setSearchDate(rotateDate(SearchData.fini) + " - " + rotateDate(SearchData.fout));
        criteria.setRoomsNumber(SearchData.roomsNumber);
        criteria.setNumberOfAdults(SearchData.numberOfAdults);
        criteria.setNumberOfChildren(SearchData.numberOfChildren);
        criteria.setNumberOfBabies(SearchData.numberOfBabies);
        criteria.setNumberOfNights(SearchData.numberOfNights);
        criteria.setPromoCode(SearchData.promoCode);
        trackClickHotel(criteria, false);
    });
    $(".track-book").on("click", function() {
        var hotelname = $(this).data("hotelname"), price = $(this).data("preciototal"), position = $(this).data("n"), quantity = 1, id = $(this).data("backcode");
        trackClickOnBook(hotelname, id, price, quantity, position);
    });
    $(".track-book-co").on("click", function() {
        var $this = $(this);
        if ($this.data("track")) {
            var criteria = SearchCriteria.loadData();
            var trackData = $this.data("track");
            var hotelId = trackData.hotelId;
            var startDate = trackData.startDate;
            var endDate = trackData.endDate;
            var totalRooms = trackData.totalRooms;
            var totalAdults = trackData.totalAdults;
            var totalChildren = trackData.totalChildren;
            var ratecode = CheckoutData.rate;
            var totalBabies = trackData.totalBabies;
            trackProceedToBook(page_section, hotelId, startDate, endDate, totalRooms, totalAdults, totalChildren, totalBabies, ratecode, criteria);
        }
    });
    $(".track-call-reservation").on("click", function() {
        trackClickOnCallReservation();
    });
    $(".track-call-information").on("click", function() {
        trackClickOnCallInformation();
    });
    $(".track-search-availability").on("click", function() {
        var hotelCountry = HotelData.country;
        var hotelCity = HotelData.city;
        var seachDate = rotateDate(SearchData.fini) + " - " + rotateDate(SearchData.fout);
        var numberOfNights = SearchData.numberOfNights;
        trackClickOnSearchAvailability(hotelCountry, hotelCity, seachDate, numberOfNights);
    });
    $("#carousel-rewards-btn").on("click", function() {
        trackClickOnNhrewards();
    });
    $(".track-packagestab").on("click", function() {
        trackClickOnPackagesTab();
    });
    $(document).on("click", ".fake-radio", function(e) {
        if ($(this).hasClass("active")) {
            var searchCriteria = SearchCriteria.loadData();
            var selectedTab = $(".tabs.purchase").find(".js-reveal-carousel.active").data("id-show");
            trackClickOnRoom(selectedTab, searchCriteria);
        }
    });
    $(document).on("click", ".track-call-us", function(e) {
        trackClickOnCallUs();
    });
    $(".track-book-now").on("click", function() {
        var criteria = SearchCriteria.newEmpty();
        criteria.setHotelId(SearchData.hotelId);
        criteria.setSearchDate(rotateDate(SearchData.fini) + " - " + rotateDate(SearchData.fout));
        criteria.setRoomsNumber(SearchData.roomsNumber);
        criteria.setNumberOfAdults(SearchData.numberOfAdults);
        criteria.setNumberOfChildren(SearchData.numberOfChildren);
        criteria.setNumberOfBabies(SearchData.numberOfBabies);
        trackClickOnBookNow(criteria);
    });
    $(".track-passbook-confirm").on("click", function() {
        trackClickOnDownloadPassbookConf("reservation");
    });
    $(".track-passbook-confirm").on("click", function() {
        trackClickOnDownloadPasswallet("reservation");
    });
    $(".track-passbook").on("click", function() {
        trackClickOnDownloadPassbook("reservation");
    });
    $(".track-card-passbook").on("click", function() {
        trackClickOnDownloadPassbook("card");
    });
    $(".track-manage-reservation").on("click", function() {
        trackClickOnManageReservation();
    });
    $(".track-facebook").on("click", function() {
        trackClickOnFacebook();
    });
    $(".track-gplus").on("click", function() {
        trackClickOnGplus();
    });
    $(".track-twitter").on("click", function() {
        trackClickOnTwitter();
    });
    $(".track-whatsapp").on("click", function() {
        trackClickOnWhatsapp();
    });
    $(".track-upgrade").on("click", function() {
        var upgradedService = "";
        trackClickOnUpgrade(upgradedService);
    });
    $(".track-apply-upgrade").on("click", function() {
        var price = 0;
        var upgradedService = "";
        trackApplyUpgrade(upgradedService, price);
    });
    $(".track-checkin-online").on("click", function() {
        var hotelId = "";
        var daysInAdvance = "";
        trackCheckinOnline(hotelId, daysInAdvance);
    });
    $(".track-search-booking").on("click", function() {
        trackClickOnSearchBooking();
    });
    $(".track-guarantee-booking").on("click", function() {
        var bookingCriteria = SearchCriteria.newEmpty();
        bookingCriteria.setHotelId(SearchData.hotelId);
        bookingCriteria.setSearchDate(rotateDate(SearchData.fini) + " - " + rotateDate(SearchData.fout));
        bookingCriteria.setRoomsNumber(SearchData.roomsNumber);
        bookingCriteria.setNumberOfAdults(SearchData.numberOfAdults);
        bookingCriteria.setNumberOfChildren(SearchData.numberOfChildren);
        bookingCriteria.setNumberOfBabies(SearchData.numberOfBabies);
        bookingCriteria.setNumberOfNights(SearchData.numberOfNights);
        bookingCriteria.setPromoCode(SearchData.promoCode);
        trackClickOnGuaranteeBooking(bookingCriteria);
    });
    $(".track-cancel-booking").on("click", function() {
        var bookingCriteria = SearchCriteria.newEmpty();
        bookingCriteria.setHotelId(SearchData.hotelId);
        bookingCriteria.setSearchDate(rotateDate(SearchData.fini) + " - " + rotateDate(SearchData.fout));
        bookingCriteria.setRoomsNumber(SearchData.roomsNumber);
        bookingCriteria.setNumberOfAdults(SearchData.numberOfAdults);
        bookingCriteria.setNumberOfChildren(SearchData.numberOfChildren);
        bookingCriteria.setNumberOfBabies(SearchData.numberOfBabies);
        bookingCriteria.setNumberOfNights(SearchData.numberOfNights);
        bookingCriteria.setPromoCode(SearchData.promoCode);
        trackClickOnCancelBooking(bookingCriteria);
    });
    $(".track-personalize-booking").on("click", function() {
        trackClickOnPersonalize();
    });
    $(".track-upsell").on("click", function() {
        trackClickOnUpSelling();
    });
    $(".track-error-call").on("click", function() {
        trackClickOnCallInErrorPage();
    });
    $(".track-promo").on("click", function() {
        var idpromo = $(this).data("idpromo"), category = $(this).data("category"), namepromo = $(this).data("namepromo"), creative = "";
        trackClickOnPromo(idpromo, category, creative, namepromo);
    });
    $(document).on("click", ".track-step1-rates", function(e) {
        var mealPlan = $(this).parents(".form-options-room").data("mealplan"), roomCategoryCode = $(this).data("roomcategorycode"), ratePriceCode = $(this).data("ratepricecode");
        var criteria = SearchCriteria.loadData();
        if ($("#voucherCode").val() === "") {
            trackClickbookRD(criteria, ratePriceCode);
        } else {
            trackClickOnSearchWithPromo(criteria, mealPlan, roomCategoryCode, ratePriceCode);
        }
    });
    $(".track-register").on("click", function() {
        trackFormSuccess(formValid);
    });
    $(".track_rewards_booknow").on("click", function() {
        var bookingCriteria = SearchCriteria.newEmpty();
    });
    $(".track_rewards_help").on("click", function() {
        trackRWClickHelp();
    });
    $(".track_rewards_app").on("click", function() {
        trackRWClickApp();
    });
});

function trackClickOnLogin() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "login",
            eventLabel: undefined,
            eventValue: undefined,
            event: "header | login"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackLoginAbandon() {
    try {
        utag.link({
            eventCategory: "loginform",
            eventAction: "login abandon",
            eventLabel: "login-user",
            event: "form | abandon"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackRewardsAbandon() {
    try {
        utag.link({
            eventCategory: "rewardssignupform",
            eventAction: "rewards sign up abandon",
            eventLabel: lastElement,
            event: "form | abandon"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnCall() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "click call",
            eventLabel: undefined,
            eventValue: undefined,
            event: "header | call"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnLoginMenu() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "menu | login",
            eventLabel: undefined,
            eventValue: undefined,
            event: "menu | login"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackChangeLanguage(actualLanguage, destinationLanguage) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "menu | change language",
            eventLabel: "from " + actualLanguage + " to " + destinationLanguage,
            eventValue: undefined,
            event: "menu | language"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnLastSearch(searchCriteria) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "last search",
            eventLabel: getEventLabel(searchCriteria, false),
            eventValue: searchCriteria.getNumberOfNights(),
            event: "home | last search"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnLastViewHotel(searchCriteria) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "last view hotel",
            eventLabel: getEventLabel(searchCriteria, false),
            eventValue: searchCriteria.getNumberOfNights(),
            event: "home | last view"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnSearch(searchCriteria, mealplan, roomCategoryCode, ratePriceCode) {
    try {
        switch (page_section) {
          case "Home":
            utag.link({
                eventCategory: page_section,
                eventAction: "search",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "home | searchbox"
            });
            break;

          case "Hotel page":
            utag.link({
                eventCategory: page_section,
                eventAction: "search",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "PDP | search"
            });
            break;

          case "Search results":
            utag.link({
                eventCategory: page_section,
                eventAction: "new search",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "SRP | newSearch"
            });
            break;

          case "Room Display":
            utag.link({
                eventCategory: page_section,
                eventAction: "search",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "PDP | search"
            });
            break;

          case "Booking process":
            utag.link({
                eventCategory: page_section,
                eventAction: "modify search",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "funnel | step1 | modify"
            });
            break;
        }
    } catch (err) {
        utagError = err;
    }
}

function trackClickbookRD(searchCriteria, rate) {
    if (searchCriteria != "") {
        var result = searchCriteria.getHotelId() + " | " + searchCriteria.getSearchDate() + " | " + searchCriteria.getRoomsNumber() + " | " + searchCriteria.getNumberOfAdults() + " | " + searchCriteria.getNumberOfChildren() + " | " + searchCriteria.getNumberOfBabies() + " | " + rate;
    }
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "room display",
            eventLabel: result,
            eventValue: searchCriteria.getNumberOfNights(),
            event: "funnel | step1 | " + page_section
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnSearchWithPromo(searchCriteria, mealplan, roomCategoryCode, ratePriceCode) {
    try {
        switch (page_section) {
          case "Search results":
            utag.link({
                eventCategory: page_section,
                eventAction: "new search with promo",
                eventLabel: getEventLabel(searchCriteria, true),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "SRP | newSearchpromo"
            });
            break;

          case "Home":
            utag.link({
                eventCategory: page_section,
                eventAction: "search with promo",
                eventLabel: getEventLabel(searchCriteria, true),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "home | searchboxpromo"
            });
            break;

          case "Hotel page":
            utag.link({
                eventCategory: page_section,
                eventAction: "search with promo",
                eventLabel: getEventLabel(searchCriteria, true),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "PDP | searchpromo"
            });
            break;

          case "Booking process":
            utag.link({
                eventCategory: page_section,
                eventAction: "search with promo",
                eventLabel: getEventLabel(searchCriteria, true),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "funntel | step1 | modifypromo"
            });
            break;
        }
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnNHRewards() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "select nh rewards rates tab",
            eventLabel: undefined,
            eventValue: undefined,
            event: "funnel | step1 | nhrewtab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnNewsletter() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "sign up newsletter",
            eventLabel: undefined,
            eventValue: undefined,
            event: "home | newsletter"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnFilters() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "filter results",
            eventLabel: undefined,
            eventValue: undefined,
            event: "SRP | filters"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnList() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "click list",
            eventLabel: undefined,
            eventValue: undefined,
            event: "SRP | list"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnMap() {
    try {
        switch (page_section) {
          case "Hotel page":
            utag.link({
                eventCategory: page_section,
                eventAction: "see map",
                eventLabel: undefined,
                eventValue: undefined,
                event: "PDP | map"
            });
            break;

          case "Search results":
            utag.link({
                eventCategory: page_section,
                eventAction: "click map",
                eventLabel: undefined,
                eventValue: undefined,
                event: "SRP | map"
            });
            break;
        }
    } catch (err) {
        utagError = err;
    }
}

function trackApplyFilters(filters) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "apply filters  | order by | max price | max disttance | categories",
            eventLabel: getFilterEventLabel(filters),
            eventValue: undefined,
            event: "SRP | apply"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnNewSearch(searchCriteria) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "new search",
            eventLabel: getEventLabel(searchCriteria, true),
            eventValue: searchCriteria.getNumberOfNights(),
            event: "SRP | newSearch"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickHotel(searchCriteria) {
    try {
        switch (page_section) {
          case "Booking process":
            utag.link({
                eventCategory: page_section,
                eventAction: "view hotel page",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "funnel | step1 | viewhotel"
            });
            break;

          case "Search results":
            utag.link({
                eventCategory: page_section,
                eventAction: "view hotel page",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: undefined,
                event: "SRP | select hotel",
                ecommerce_action: "product_click",
                ecommerce_actionField_list: utag_data.ecommerce_actionField_list,
                ecommerce_actionField_step: utag_data.ecommerce_actionField_step,
                products_id: utag_data.products_id,
                products_price: utag_data.products_price,
                products_quantity: utag_data.products_quantity,
                products_position: utag_data.products_position,
                products_list: utag_data.products_list
            });
            break;
        }
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnBook(hotelName, id, price, quantity, position) {
    try {
        switch (page_section) {
          case "Hotel page":
            utag.link({
                eventCategory: page_section,
                eventAction: "select hotel",
                eventLabel: hotelName,
                eventValue: undefined,
                event: "PDP | book",
                ecommerce_action: "add",
                ecommerce_actionField_list: utag_data.ecommerce_actionField_list,
                ecommerce_actionField_step: utag_data.ecommerce_actionField_step,
                products_id: id,
                products_price: price,
                products_quantity: quantity,
                products_position: position
            });
            break;

          case "Search results":
            utag.link({
                eventCategory: page_section,
                eventAction: "select hotel",
                eventLabel: hotelName,
                eventValue: undefined,
                event: "SRP | view hotel",
                ecommerce_action: "add",
                ecommerce_actionField_list: utag_data.ecommerce_actionField_list,
                ecommerce_actionField_step: utag_data.ecommerce_actionField_step,
                products_id: id,
                products_price: price,
                products_quantity: quantity,
                products_position: position
            });
            break;
        }
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnCallInformation() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "call information",
            eventLabel: undefined,
            evenValue: undefined,
            event: "PDP | call information"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnCallReservation() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "call reservations",
            eventLabel: undefined,
            evenValue: undefined,
            event: "PDP | call res"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackClickOnSearchAvailability(hotelCountry, hotelCity, seachDate, numberOfNights) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "offer search availability",
            eventLabel: hotelCountry + " | " + hotelCity + " | " + seachDate,
            eventValue: numberOfNights,
            event: "offers | search"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnNhrewards() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "select nh rewards rates tab",
            eventLabel: undefined,
            evenValue: undefined,
            event: "funnel | step1 | nhrewtab"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnPackagesTab() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "select packages tab",
            eventLabel: undefined,
            evenValue: undefined,
            event: "funnel | step1 | packagestab"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnPromo(idpromo, category, creative, namepromo) {
    try {
        var pos = 0;
        var mo = $("[data-type]:visible");
        $.each(mo, function(i, ele) {
            if (idpromo == $(ele).data("idpromo")) {
                pos = i + 1;
            }
        });
        utag.link({
            ecommerce_action: "promotionClick",
            promotions_id: idpromo,
            promotions_name: namepromo,
            promotions_creative: creative,
            promotions_position: pos
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnCallUs() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "call us to book",
            eventLabel: undefined,
            evenValue: undefined,
            event: "funnel | step1 | call",
            ecommerce_action: utag_data.ecommerce_action,
            ecommerce_actionField_list: utag_data.ecommerce_actionField_list,
            ecommerce_actionField_step: utag_data.ecommerce_actionField_step,
            products_id: utag_data.products_id,
            products_price: utag_data.products_price,
            products_quantity: utag_data.products_quantity,
            products_position: utag_data.products_position,
            products_list: utag_data.products_list
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnRoom(selectedTab, searchCriteria) {
    try {
        switch (selectedTab) {
          case "#price-rewards":
            utag.link({
                eventCategory: page_section,
                eventAction: "room display | NH Rewards",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "funnel | step1 | booknhrew"
            });
            break;

          case "#price-normal":
            utag.link({
                eventCategory: page_section,
                eventAction: "room display",
                eventLabel: getEventLabel(searchCriteria, false),
                eventValue: searchCriteria.getNumberOfNights(),
                event: "funnel | step1 | book"
            });
            break;
        }
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnBookNow(searchCriteria) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "proceed to book",
            eventLabel: getEventLabel(searchCriteria, false),
            eventValue: undefined,
            event: "funnel | step2"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackFormAbandon(formName, field) {
    try {
        utag.link({
            eventCategory: formName,
            eventAction: "form analysys abandon",
            eventLabel: field,
            eventValue: undefined,
            event: "form | abandon"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackFormSuccess(formName) {
    try {
        utag.link({
            eventCategory: formName,
            eventAction: "form analysys success",
            eventLabel: undefined,
            eventValue: undefined,
            event: "form | success"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackFormError(formName) {
    try {
        utag.link({
            eventCategory: formName,
            eventAction: "form analysys error",
            eventLabel: "login-user",
            eventValue: undefined,
            event: "form | error"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackFormRewardsError(formName, field) {
    try {
        utag.link({
            eventCategory: formName,
            eventAction: "form analysys error",
            eventLabel: field,
            eventValue: undefined,
            event: "form | error"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnDownloadPassbook(type) {
    try {
        switch (type) {
          case "reservation":
            utag.link({
                eventCategory: page_section,
                eventAction: "download passbook",
                eventLabel: undefined,
                eventValue: undefined,
                event: "confirmation | passbook"
            });
            break;

          case "card":
            utag.link({
                eventCategory: page_section,
                eventAction: "NHR passbook",
                eventLabel: undefined,
                eventValue: undefined,
                event: "home |passbook"
            });
            break;
        }
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnManageReservation() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "manage reservation",
            eventLabel: undefined,
            eventValue: undefined,
            event: "confirmation | reservation"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnDownloadPassbookConf() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "dowload passbook",
            eventLabel: undefined,
            eventValue: undefined,
            event: "funnel | stept3 | passbook"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickaAddcalendar() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "add to calendar",
            eventLabel: undefined,
            eventValue: undefined,
            event: "funnel | stept3 | add calendar"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnDownloadPasswallet() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "dowload google wallet",
            eventLabel: undefined,
            eventValue: undefined,
            event: "funnel | stept3 | Passwallet"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnFacebook() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "share",
            eventLabel: "facebook",
            eventValue: undefined,
            event: "confirmation | share"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnGplus() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "share",
            eventLabel: "gplus",
            eventValue: undefined,
            event: "confirmation | share"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnTwitter() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "share",
            eventLabel: "twitter",
            eventValue: undefined,
            event: "confirmation | share"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnWhatsapp() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "share",
            eventLabel: "whatsapp",
            eventValue: undefined,
            event: "confirmation | share"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackUpgrade(upgradedService) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "upgrade",
            eventLabel: upgradedService,
            eventValue: undefined,
            event: "confirmation | upgrade"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackApplyUpgrade(upgradedService, price) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "apply upgrade",
            eventLabel: upgradedService,
            eventValue: price,
            event: "confirmation | applyupgrade"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackCheckinOnline(hotelId, daysInAdvance) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "check in online",
            eventLabel: hotelId + " | " + daysInAdvance,
            eventValue: undefined,
            event: "checkinonline"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnSearchBooking() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "search booking",
            eventLabel: undefined,
            eventValue: undefined,
            event: "eservicing | search"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnGuaranteeBooking(bookingCriteria) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "guarantee booking",
            eventLabel: getEventLabel(bookingCriteria, false),
            eventValue: undefined,
            event: "eservicing | guarantee"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnCancelBooking(bookingCriteria, bookingTotalValue) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "cancel booking",
            eventLabel: getEventLabel(bookingCriteria, false),
            eventValue: bookingTotalValue,
            event: "eservicing | cancel"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnPersonalize() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "personalize booking",
            eventLabel: undefined,
            eventValue: undefined,
            event: "eservicing | personalize"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnUpSelling() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "upsell booking",
            eventLabel: undefined,
            eventValue: undefined,
            event: "eservicing | upsell"
        });
    } catch (error) {
        utagError = error;
    }
}

function trackClickOnCallInErrorPage() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "error 404 (o 50x) | contact us",
            eventLabel: undefined,
            eventValue: undefined,
            event: "error | call"
        });
    } catch (error) {
        utagError = error;
    }
}

function getFilterEventLabel(filter) {
    var result = filter.getOrder() + " | " + filter.getMaxPrice() + " | " + filter.getMaxDistance();
    var starsSelected = 0;
    if ((starsSelected = filter.getNumStartsSelected()) > 0) {
        result += " | ";
        if (filter.isStarsNumber1()) {
            result += "1";
            if (--starsSelected > 0) result += ", ";
        }
        if (filter.isStarsNumber2()) {
            result += "2";
            if (--starsSelected > 0) result += ", ";
        }
        if (filter.isStarsNumber3()) {
            result += "3";
            if (--starsSelected > 0) result += ", ";
        }
        if (filter.isStarsNumber4()) {
            result += "4";
            if (--starsSelected > 0) result += ", ";
        }
        if (filter.isStarsNumber5()) {
            result += "5";
        }
    }
    return result;
}

function getEventLabel(searchCriteria, withPromoCode) {
    var result = "";
    if (searchCriteria.getDestination() != null) {
        result = searchCriteria.getDestination();
    } else if (searchCriteria.getHotelId() != null) {
        result = searchCriteria.getHotelId();
    }
    if (result != "") {
        result += " | " + searchCriteria.getSearchDate() + " | " + searchCriteria.getRoomsNumber() + " | " + searchCriteria.getNumberOfAdults() + " | " + searchCriteria.getNumberOfChildren() + " | " + searchCriteria.getNumberOfBabies();
        if (withPromoCode) result += " | " + searchCriteria.getPromoCode();
    }
    return result;
}

function trackShowCorporateRate(page, hotelID, roomsNumber, numberofadults, numberofchildren, endDate, startDate, totalBabies) {
    try {
        var eventLabelTrack = hotelID + "|" + startDate + "-" + endDate + "|" + roomsNumber + "|" + numberofadults + "|" + numberofchildren + "|" + totalBabies;
        utag.link({
            eventCategory: page,
            eventAction: "select Corporate rates tab",
            eventLabel: eventLabelTrack,
            event: "funnel | step1 | Corporatetab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackShowStandardRate(page, hotelID, roomsNumber, numberofadults, numberofchildren, endDate, startDate, totalBabies) {
    try {
        var eventLabelTrack = hotelID + "|" + startDate + "-" + endDate + "|" + roomsNumber + "|" + numberofadults + "|" + numberofchildren + "|" + totalBabies;
        utag.link({
            eventCategory: page,
            eventAction: "select standard rates tab",
            eventLabel: eventLabelTrack,
            event: "funnel | step1 | standardtab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackShowRewardsRate(page, hotelID, roomsNumber, numberofadults, numberofchildren, endDate, startDate, totalBabies) {
    try {
        var eventLabelTrack = hotelID + "|" + startDate + "-" + endDate + "|" + roomsNumber + "|" + numberofadults + "|" + numberofchildren + "|" + totalBabies;
        utag.link({
            eventCategory: page,
            eventAction: "select nh rewards rates tab",
            eventLabel: eventLabelTrack,
            event: "funnel | step1 | nhrewtab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackShowPlatinumVipRate(page, hotelID, roomsNumber, numberofadults, numberofchildren, endDate, startDate, totalBabies) {
    try {
        var eventLabelTrack = hotelID + "|" + startDate + "-" + endDate + "|" + roomsNumber + "|" + numberofadults + "|" + numberofchildren + "|" + totalBabies;
        utag.link({
            eventCategory: page,
            eventAction: "select PlatinumVip rates tab",
            eventLabel: eventLabelTrack,
            event: "funnel | step1 | PlatinumViptab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackShowNHMediaRate(page, hotelID, roomsNumber, numberofadults, numberofchildren, endDate, startDate, totalBabies) {
    try {
        var eventLabelTrack = hotelID + "|" + startDate + "-" + endDate + "|" + roomsNumber + "|" + numberofadults + "|" + numberofchildren + "|" + totalBabies;
        utag.link({
            eventCategory: page,
            eventAction: "select NHMedia rates tab",
            eventLabel: eventLabelTrack,
            event: "funnel | step1 | NHMediatab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackShowTravelPartnerRate(page, hotelID, roomsNumber, numberofadults, numberofchildren, endDate, startDate, totalBabies) {
    try {
        var eventLabelTrack = hotelID + "|" + startDate + "-" + endDate + "|" + roomsNumber + "|" + numberofadults + "|" + numberofchildren + "|" + totalBabies;
        utag.link({
            eventCategory: page,
            eventAction: "select Travel Partner rates tab",
            eventLabel: eventLabelTrack,
            event: "funnel | step1 | TravelPartnertab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackShowPackageRate(page) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "select packages tab",
            event: "funnel1 | step1 | packagestab"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackChangecCurrency(page, currency) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "change currency",
            eventLabel: currency,
            event: "funnel | Step1 | change currecy"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackChangePaymentMethod(page, payment) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "change paymend method",
            eventLabel: payment,
            event: "funnel | step1 | payment"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackExpireBooking(page) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "Expire Booking",
            event: "funnel | stept2 | Expire"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackBookOtherGuest(page) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "book other guest",
            event: "funnel | step2 | other guest"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackAddCot(page) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "add cot",
            event: "funnel | stept2 | add cot"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackProceedToBook(page, name, startDate, endDate, nrooms, nadults, nchild, nbabies, rate, bookingCriteria) {
    try {
        var eventLabelTrack = name + "|" + startDate + "-" + endDate + "|" + nrooms + "|" + nadults + "|" + nchild + "|" + nbabies + "|" + rate;
        utag.link({
            eventCategory: page,
            eventAction: "proceed to book",
            eventLabel: eventLabelTrack,
            eventValue: bookingCriteria.getNumberOfNights,
            event: "funnel | step2"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackRWClickTransferPoints(page, party, mail, points) {
    try {
        utag.link({
            eventCategory: page,
            eventAction: "NHR transfer points",
            eventLabel: party + "|" + mail,
            eventValue: points,
            event: "points | transfer"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackRWClickBookNow(bookingCriteria) {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "NHR search down",
            eventLabel: getEventLabel(bookingCriteria, false),
            eventValue: bookingCriteria.getNumberOfNights,
            event: "search"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackRWClickHelp() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "NHR contact us left",
            eventLabel: undefined,
            eventValue: undefined,
            event: "contact"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackRWClickApp() {
    try {
        utag.link({
            eventCategory: page_section,
            eventAction: "NHR app left",
            eventLabel: undefined,
            eventValue: undefined,
            event: "app"
        });
    } catch (err) {
        utagError = err;
    }
}

function trackLandingLazyload(data) {
    try {
        if (data) {
            utag.view({
                busqHSinDispo: data.busqHSinDispo,
                busqListado: data.busqListado,
                busqNumResult: data.busqNumResult,
                busqSinDispo: data.busqSinDispo,
                products_id: data.products_id,
                products_list: data.products_list,
                products_position: data.products_position,
                products_price: data.products_price,
                products_quantity: data.products_quantity,
                search: data.search
            });
        }
    } catch (err) {
        utagError = err;
    }
}

function sendUtagData() {
    console.log("sendUtagData", utag_data);
    (function(a, b, c, d) {
        a = "//tags.tiqcdn.com/utag/nh-hoteles/web-mobile/prod/utag.js";
        b = document;
        c = "script";
        d = b.createElement(c);
        d.src = a;
        d.type = "text/java" + c;
        d.async = true;
        a = b.getElementsByTagName(c)[0];
        a.parentNode.insertBefore(d, a);
    })();
}

function trackLogin(eventCategory, eventLabel, eventAction) {
    try {
        utag.link({
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
            event: "event"
        });
    } catch (err) {
        utagError = err;
    }
}