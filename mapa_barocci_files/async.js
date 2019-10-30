alert("1")
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function() {
    "use strict";
    function a() {
        return Dc.apply(null, arguments);
    }
    function b(a) {
        Dc = a;
    }
    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
    }
    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d;
    }
    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), 
        a;
    }
    function h(a, b, c, d) {
        return za(a, b, c, d, !0).utc();
    }
    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        };
    }
    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf;
    }
    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.nullInput && !b.invalidFormat && !b.userInvalidated, 
            a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
        }
        return a._isValid;
    }
    function l(a) {
        var b = h(0 / 0);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b;
    }
    function m(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), 
        "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), 
        "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), 
        "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), 
        "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), 
        "undefined" != typeof b._locale && (a._locale = b._locale), Fc.length > 0) for (c in Fc) d = Fc[c], 
        e = b[d], "undefined" != typeof e && (a[d] = e);
        return a;
    }
    function n(b) {
        m(this, b), this._d = new Date(+b._d), Gc === !1 && (Gc = !0, a.updateOffset(this), 
        Gc = !1);
    }
    function o(a) {
        return a instanceof n || null != a && null != a._isAMomentObject;
    }
    function p(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c;
    }
    function q(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && p(a[d]) !== p(b[d])) && g++;
        return g + f;
    }
    function r() {}
    function s(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function t(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (e = s(a[f]).split("-"), b = e.length, c = s(a[f + 1]), c = c ? c.split("-") : null; b > 0; ) {
                if (d = u(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && q(e, c, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return null;
    }
    function u(a) {
        var b = null;
        if (!Hc[a] && "undefined" != typeof module && module && module.exports) try {
            b = Ec._abbr, require("./locale/" + a), v(b);
        } catch (c) {}
        return Hc[a];
    }
    function v(a, b) {
        var c;
        return a && (c = "undefined" == typeof b ? x(a) : w(a, b), c && (Ec = c)), Ec._abbr;
    }
    function w(a, b) {
        return null !== b ? (b.abbr = a, Hc[a] || (Hc[a] = new r()), Hc[a].set(b), v(a), 
        Hc[a]) : (delete Hc[a], null);
    }
    function x(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ec;
        if (!c(a)) {
            if (b = u(a)) return b;
            a = [ a ];
        }
        return t(a);
    }
    function y(a, b) {
        var c = a.toLowerCase();
        Ic[c] = Ic[c + "s"] = Ic[b] = a;
    }
    function z(a) {
        return "string" == typeof a ? Ic[a] || Ic[a.toLowerCase()] : void 0;
    }
    function A(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = z(c), b && (d[b] = a[c]));
        return d;
    }
    function B(b, c) {
        return function(d) {
            return null != d ? (D(this, b, d), a.updateOffset(this, c), this) : C(this, b);
        };
    }
    function C(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]();
    }
    function D(a, b, c) {
        return a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    function E(a, b) {
        var c;
        if ("object" == typeof a) for (c in a) this.set(c, a[c]); else if (a = z(a), "function" == typeof this[a]) return this[a](b);
        return this;
    }
    function F(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b; ) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d;
    }
    function G(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]();
        }), a && (Mc[a] = e), b && (Mc[b[0]] = function() {
            return F(e.apply(this, arguments), b[1], b[2]);
        }), c && (Mc[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a);
        });
    }
    function H(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function I(a) {
        var b, c, d = a.match(Jc);
        for (b = 0, c = d.length; c > b; b++) Mc[d[b]] ? d[b] = Mc[d[b]] : d[b] = H(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f;
        };
    }
    function J(a, b) {
        return a.isValid() ? (b = K(b, a.localeData()), Lc[b] || (Lc[b] = I(b)), Lc[b](a)) : a.localeData().invalidDate();
    }
    function K(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (Kc.lastIndex = 0; d >= 0 && Kc.test(a); ) a = a.replace(Kc, c), Kc.lastIndex = 0, 
        d -= 1;
        return a;
    }
    function L(a, b, c) {
        _c[a] = "function" == typeof b ? b : function(a) {
            return a && c ? c : b;
        };
    }
    function M(a, b) {
        return f(_c, a) ? _c[a](b._strict, b._locale) : new RegExp(N(a));
    }
    function N(a) {
        return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function O(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [ a ]), "number" == typeof b && (d = function(a, c) {
            c[b] = p(a);
        }), c = 0; c < a.length; c++) ad[a[c]] = d;
    }
    function P(a, b) {
        O(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e);
        });
    }
    function Q(a, b, c) {
        null != b && f(ad, a) && ad[a](b, c._a, c, a);
    }
    function R(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function S(a) {
        return this._months[a.month()];
    }
    function T(a) {
        return this._monthsShort[a.month()];
    }
    function U(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        d = 0; 12 > d; d++) {
            if (e = h([ 2e3, d ]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), 
            c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), 
            this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d;
        }
    }
    function V(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), R(a.year(), b)), 
        a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a);
    }
    function W(b) {
        return null != b ? (V(this, b), a.updateOffset(this, !0), this) : C(this, "Month");
    }
    function X() {
        return R(this.year(), this.month());
    }
    function Y(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[cd] < 0 || c[cd] > 11 ? cd : c[dd] < 1 || c[dd] > R(c[bd], c[cd]) ? dd : c[ed] < 0 || c[ed] > 24 || 24 === c[ed] && (0 !== c[fd] || 0 !== c[gd] || 0 !== c[hd]) ? ed : c[fd] < 0 || c[fd] > 59 ? fd : c[gd] < 0 || c[gd] > 59 ? gd : c[hd] < 0 || c[hd] > 999 ? hd : -1, 
        j(a)._overflowDayOfYear && (bd > b || b > dd) && (b = dd), j(a).overflow = b), a;
    }
    function Z(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
    }
    function $(a, b) {
        var c = !0, d = a + "\n" + new Error().stack;
        return g(function() {
            return c && (Z(d), c = !1), b.apply(this, arguments);
        }, b);
    }
    function _(a, b) {
        kd[a] || (Z(b), kd[a] = !0);
    }
    function aa(a) {
        var b, c, d = a._i, e = ld.exec(d);
        if (e) {
            for (j(a).iso = !0, b = 0, c = md.length; c > b; b++) if (md[b][1].exec(d)) {
                a._f = md[b][0] + (e[6] || " ");
                break;
            }
            for (b = 0, c = nd.length; c > b; b++) if (nd[b][1].exec(d)) {
                a._f += nd[b][0];
                break;
            }
            d.match(Yc) && (a._f += "Z"), ta(a);
        } else a._isValid = !1;
    }
    function ba(b) {
        var c = od.exec(b._i);
        return null !== c ? void (b._d = new Date(+c[1])) : (aa(b), void (b._isValid === !1 && (delete b._isValid, 
        a.createFromInputFallback(b))));
    }
    function ca(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h;
    }
    function da(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b;
    }
    function ea(a) {
        return fa(a) ? 366 : 365;
    }
    function fa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }
    function ga() {
        return fa(this.year());
    }
    function ha(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = Aa(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        };
    }
    function ia(a) {
        return ha(a, this._week.dow, this._week.doy).week;
    }
    function ja() {
        return this._week.dow;
    }
    function ka() {
        return this._week.doy;
    }
    function la(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function ma(a) {
        var b = ha(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function na(a, b, c, d, e) {
        var f, g, h = da(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), 
        g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : ea(a - 1) + g
        };
    }
    function oa(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d");
    }
    function pa(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }
    function qa(a) {
        var b = new Date();
        return a._useUTC ? [ b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate() ] : [ b.getFullYear(), b.getMonth(), b.getDate() ];
    }
    function ra(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = qa(a), a._w && null == a._a[dd] && null == a._a[cd] && sa(a), a._dayOfYear && (e = pa(a._a[bd], d[bd]), 
            a._dayOfYear > ea(e) && (j(a)._overflowDayOfYear = !0), c = da(e, 0, a._dayOfYear), 
            a._a[cd] = c.getUTCMonth(), a._a[dd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (;7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[ed] && 0 === a._a[fd] && 0 === a._a[gd] && 0 === a._a[hd] && (a._nextDay = !0, 
            a._a[ed] = 0), a._d = (a._useUTC ? da : ca).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), 
            a._nextDay && (a._a[ed] = 24);
        }
    }
    function sa(a) {
        var b, c, d, e, f, g, h;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = pa(b.GG, a._a[bd], ha(Aa(), 1, 4).year), 
        d = pa(b.W, 1), e = pa(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, 
        c = pa(b.gg, a._a[bd], ha(Aa(), f, g).year), d = pa(b.w, 1), null != b.d ? (e = b.d, 
        f > e && ++d) : e = null != b.e ? b.e + f : f), h = na(c, d, e, g, f), a._a[bd] = h.year, 
        a._dayOfYear = h.dayOfYear;
    }
    function ta(b) {
        if (b._f === a.ISO_8601) return void aa(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, k = 0;
        for (e = K(b._f, b._locale).match(Jc) || [], c = 0; c < e.length; c++) f = e[c], 
        d = (h.match(M(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), 
        h = h.slice(h.indexOf(d) + d.length), k += d.length), Mc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), 
        Q(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ed] <= 12 && b._a[ed] > 0 && (j(b).bigHour = void 0), 
        b._a[ed] = ua(b._locale, b._a[ed], b._meridiem), ra(b), Y(b);
    }
    function ua(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), 
        d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b;
    }
    function va(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void (a._d = new Date(0 / 0));
        for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), 
        b._f = a._f[e], ta(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, 
        j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b);
    }
    function wa(a) {
        if (!a._d) {
            var b = A(a._i);
            a._a = [ b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond ], 
            ra(a);
        }
    }
    function xa(a) {
        var b, e = a._i, f = a._f;
        return a._locale = a._locale || x(a._l), null === e || void 0 === f && "" === e ? l({
            nullInput: !0
        }) : ("string" == typeof e && (a._i = e = a._locale.preparse(e)), o(e) ? new n(Y(e)) : (c(f) ? va(a) : f ? ta(a) : d(e) ? a._d = e : ya(a), 
        b = new n(Y(a)), b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b));
    }
    function ya(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date() : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ba(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
            return parseInt(a, 10);
        }), ra(b)) : "object" == typeof f ? wa(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b);
    }
    function za(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, 
        f._l = c, f._i = a, f._f = b, f._strict = d, xa(f);
    }
    function Aa(a, b, c, d) {
        return za(a, b, c, d, !1);
    }
    function Ba(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Aa();
        for (d = b[0], e = 1; e < b.length; ++e) b[e][a](d) && (d = b[e]);
        return d;
    }
    function Ca() {
        var a = [].slice.call(arguments, 0);
        return Ba("isBefore", a);
    }
    function Da() {
        var a = [].slice.call(arguments, 0);
        return Ba("isAfter", a);
    }
    function Ea(a) {
        var b = A(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, 
        this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = x(), this._bubble();
    }
    function Fa(a) {
        return a instanceof Ea;
    }
    function Ga(a, b) {
        G(a, 0, 0, function() {
            var a = this.utcOffset(), c = "+";
            return 0 > a && (a = -a, c = "-"), c + F(~~(a / 60), 2) + b + F(~~a % 60, 2);
        });
    }
    function Ha(a) {
        var b = (a || "").match(Yc) || [], c = b[b.length - 1] || [], d = (c + "").match(td) || [ "-", 0, 0 ], e = +(60 * d[1]) + p(d[2]);
        return "+" === d[0] ? e : -e;
    }
    function Ia(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Aa(b)) - +e, e._d.setTime(+e._d + f), 
        a.updateOffset(e, !1), e) : Aa(b).local();
        return c._isUTC ? Aa(b).zone(c._offset || 0) : Aa(b).local();
    }
    function Ja(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }
    function Ka(b, c) {
        var d, e = this._offset || 0;
        return null != b ? ("string" == typeof b && (b = Ha(b)), Math.abs(b) < 16 && (b = 60 * b), 
        !this._isUTC && c && (d = Ja(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), 
        e !== b && (!c || this._changeInProgress ? $a(this, Va(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
        a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ja(this);
    }
    function La(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
    }
    function Ma(a) {
        return this.utcOffset(0, a);
    }
    function Na(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ja(this), "m")), 
        this;
    }
    function Oa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ha(this._i)), 
        this;
    }
    function Pa(a) {
        return a = a ? Aa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0;
    }
    function Qa() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function Ra() {
        if (this._a) {
            var a = this._isUTC ? h(this._a) : Aa(this._a);
            return this.isValid() && q(this._a, a.toArray()) > 0;
        }
        return !1;
    }
    function Sa() {
        return !this._isUTC;
    }
    function Ta() {
        return this._isUTC;
    }
    function Ua() {
        return this._isUTC && 0 === this._offset;
    }
    function Va(a, b) {
        var c, d, e, g = a, h = null;
        return Fa(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = ud.exec(a)) ? (c = "-" === h[1] ? -1 : 1, 
        g = {
            y: 0,
            d: p(h[dd]) * c,
            h: p(h[ed]) * c,
            m: p(h[fd]) * c,
            s: p(h[gd]) * c,
            ms: p(h[hd]) * c
        }) : (h = vd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: Wa(h[2], c),
            M: Wa(h[3], c),
            d: Wa(h[4], c),
            h: Wa(h[5], c),
            m: Wa(h[6], c),
            s: Wa(h[7], c),
            w: Wa(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Ya(Aa(g.from), Aa(g.to)), 
        g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ea(g), Fa(a) && f(a, "_locale") && (d._locale = a._locale), 
        d;
    }
    function Wa(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b;
    }
    function Xa(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, 
        c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
    }
    function Ya(a, b) {
        var c;
        return b = Ia(b, a), a.isBefore(b) ? c = Xa(a, b) : (c = Xa(b, a), c.milliseconds = -c.milliseconds, 
        c.months = -c.months), c;
    }
    function Za(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (_(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), 
            f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Va(c, d), $a(this, e, a), 
            this;
        };
    }
    function $a(b, c, d, e) {
        var f = c._milliseconds, g = c._days, h = c._months;
        e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && D(b, "Date", C(b, "Date") + g * d), 
        h && V(b, C(b, "Month") + h * d), e && a.updateOffset(b, g || h);
    }
    function _a(a) {
        var b = a || Aa(), c = Ia(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
        return this.format(this.localeData().calendar(e, this, Aa(b)));
    }
    function ab() {
        return new n(this);
    }
    function bb(a, b) {
        var c;
        return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), 
        +this > +a) : (c = o(a) ? +a : +Aa(a), c < +this.clone().startOf(b));
    }
    function cb(a, b) {
        var c;
        return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), 
        +a > +this) : (c = o(a) ? +a : +Aa(a), +this.clone().endOf(b) < c);
    }
    function db(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c);
    }
    function eb(a, b) {
        var c;
        return b = z(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this === +a) : (c = +Aa(a), 
        +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b));
    }
    function fb(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
    }
    function gb(a, b, c) {
        var d, e, f = Ia(a, this), g = 6e4 * (f.utcOffset() - this.utcOffset());
        return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = hb(this, f), 
        "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), 
        c ? e : fb(e);
    }
    function hb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), 
        d = (b - f) / (c - f)), -(e + d);
    }
    function ib() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function jb() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : J(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : J(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    function kb(b) {
        var c = J(this, b || a.defaultFormat);
        return this.localeData().postformat(c);
    }
    function lb(a, b) {
        return this.isValid() ? Va({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function mb(a) {
        return this.from(Aa(), a);
    }
    function nb(a, b) {
        return this.isValid() ? Va({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function ob(a) {
        return this.to(Aa(), a);
    }
    function pb(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = x(a), null != b && (this._locale = b), 
        this);
    }
    function qb() {
        return this._locale;
    }
    function rb(a) {
        switch (a = z(a)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }
    function sb(a) {
        return a = z(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms");
    }
    function tb() {
        return +this._d - 6e4 * (this._offset || 0);
    }
    function ub() {
        return Math.floor(+this / 1e3);
    }
    function vb() {
        return this._offset ? new Date(+this) : this._d;
    }
    function wb() {
        var a = this;
        return [ a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond() ];
    }
    function xb() {
        return k(this);
    }
    function yb() {
        return g({}, j(this));
    }
    function zb() {
        return j(this).overflow;
    }
    function Ab(a, b) {
        G(0, [ a, a.length ], 0, b);
    }
    function Bb(a, b, c) {
        return ha(Aa([ a, 11, 31 + b - c ]), b, c).week;
    }
    function Cb(a) {
        var b = ha(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == a ? b : this.add(a - b, "y");
    }
    function Db(a) {
        var b = ha(this, 1, 4).year;
        return null == a ? b : this.add(a - b, "y");
    }
    function Eb() {
        return Bb(this.year(), 1, 4);
    }
    function Fb() {
        var a = this.localeData()._week;
        return Bb(this.year(), a.dow, a.doy);
    }
    function Gb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
    }
    function Hb(a, b) {
        if ("string" == typeof a) if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a) return null;
        } else a = parseInt(a, 10);
        return a;
    }
    function Ib(a) {
        return this._weekdays[a.day()];
    }
    function Jb(a) {
        return this._weekdaysShort[a.day()];
    }
    function Kb(a) {
        return this._weekdaysMin[a.day()];
    }
    function Lb(a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = Aa([ 2e3, 1 ]).day(b), 
        d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), 
        this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b;
    }
    function Mb(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Hb(a, this.localeData()), this.add(a - b, "d")) : b;
    }
    function Nb(a) {
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d");
    }
    function Ob(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
    }
    function Pb(a, b) {
        G(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }
    function Qb(a, b) {
        return b._meridiemParse;
    }
    function Rb(a) {
        return "p" === (a + "").toLowerCase().charAt(0);
    }
    function Sb(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
    }
    function Tb(a) {
        G(0, [ a, 3 ], 0, "millisecond");
    }
    function Ub() {
        return this._isUTC ? "UTC" : "";
    }
    function Vb() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function Wb(a) {
        return Aa(1e3 * a);
    }
    function Xb() {
        return Aa.apply(null, arguments).parseZone();
    }
    function Yb(a, b, c) {
        var d = this._calendar[a];
        return "function" == typeof d ? d.call(b, c) : d;
    }
    function Zb(a) {
        var b = this._longDateFormat[a];
        return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1);
        }), this._longDateFormat[a] = b), b;
    }
    function $b() {
        return this._invalidDate;
    }
    function _b(a) {
        return this._ordinal.replace("%d", a);
    }
    function ac(a) {
        return a;
    }
    function bc(a, b, c, d) {
        var e = this._relativeTime[c];
        return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a);
    }
    function cc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return "function" == typeof c ? c(b) : c.replace(/%s/i, b);
    }
    function dc(a) {
        var b, c;
        for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
    }
    function ec(a, b, c, d) {
        var e = x(), f = h().set(d, b);
        return e[c](f, a);
    }
    function fc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return ec(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = ec(a, f, c, e);
        return g;
    }
    function gc(a, b) {
        return fc(a, b, "months", 12, "month");
    }
    function hc(a, b) {
        return fc(a, b, "monthsShort", 12, "month");
    }
    function ic(a, b) {
        return fc(a, b, "weekdays", 7, "day");
    }
    function jc(a, b) {
        return fc(a, b, "weekdaysShort", 7, "day");
    }
    function kc(a, b) {
        return fc(a, b, "weekdaysMin", 7, "day");
    }
    function lc() {
        var a = this._data;
        return this._milliseconds = Rd(this._milliseconds), this._days = Rd(this._days), 
        this._months = Rd(this._months), a.milliseconds = Rd(a.milliseconds), a.seconds = Rd(a.seconds), 
        a.minutes = Rd(a.minutes), a.hours = Rd(a.hours), a.months = Rd(a.months), a.years = Rd(a.years), 
        this;
    }
    function mc(a, b, c, d) {
        var e = Va(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, 
        a._bubble();
    }
    function nc(a, b) {
        return mc(this, a, b, 1);
    }
    function oc(a, b) {
        return mc(this, a, b, -1);
    }
    function pc() {
        var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0;
        return g.milliseconds = d % 1e3, a = fb(d / 1e3), g.seconds = a % 60, b = fb(a / 60), 
        g.minutes = b % 60, c = fb(b / 60), g.hours = c % 24, e += fb(c / 24), h = fb(qc(e)), 
        e -= fb(rc(h)), f += fb(e / 30), e %= 30, h += fb(f / 12), f %= 12, g.days = e, 
        g.months = f, g.years = h, this;
    }
    function qc(a) {
        return 400 * a / 146097;
    }
    function rc(a) {
        return 146097 * a / 400;
    }
    function sc(a) {
        var b, c, d = this._milliseconds;
        if (a = z(a), "month" === a || "year" === a) return b = this._days + d / 864e5, 
        c = this._months + 12 * qc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(rc(this._months / 12)), a) {
          case "week":
            return b / 7 + d / 6048e5;

          case "day":
            return b + d / 864e5;

          case "hour":
            return 24 * b + d / 36e5;

          case "minute":
            return 1440 * b + d / 6e4;

          case "second":
            return 86400 * b + d / 1e3;

          case "millisecond":
            return Math.floor(864e5 * b) + d;

          default:
            throw new Error("Unknown unit " + a);
        }
    }
    function tc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * p(this._months / 12);
    }
    function uc(a) {
        return function() {
            return this.as(a);
        };
    }
    function vc(a) {
        return a = z(a), this[a + "s"]();
    }
    function wc(a) {
        return function() {
            return this._data[a];
        };
    }
    function xc() {
        return fb(this.days() / 7);
    }
    function yc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function zc(a, b, c) {
        var d = Va(a).abs(), e = fe(d.as("s")), f = fe(d.as("m")), g = fe(d.as("h")), h = fe(d.as("d")), i = fe(d.as("M")), j = fe(d.as("y")), k = e < ge.s && [ "s", e ] || 1 === f && [ "m" ] || f < ge.m && [ "mm", f ] || 1 === g && [ "h" ] || g < ge.h && [ "hh", g ] || 1 === h && [ "d" ] || h < ge.d && [ "dd", h ] || 1 === i && [ "M" ] || i < ge.M && [ "MM", i ] || 1 === j && [ "y" ] || [ "yy", j ];
        return k[2] = b, k[3] = +a > 0, k[4] = c, yc.apply(null, k);
    }
    function Ac(a, b) {
        return void 0 === ge[a] ? !1 : void 0 === b ? ge[a] : (ge[a] = b, !0);
    }
    function Bc(a) {
        var b = this.localeData(), c = zc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }
    function Cc() {
        var a = he(this.years()), b = he(this.months()), c = he(this.days()), d = he(this.hours()), e = he(this.minutes()), f = he(this.seconds() + this.milliseconds() / 1e3), g = this.asSeconds();
        return g ? (0 > g ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D";
    }
    var Dc, Ec, Fc = a.momentProperties = [], Gc = !1, Hc = {}, Ic = {}, Jc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Kc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Lc = {}, Mc = {}, Nc = /\d/, Oc = /\d\d/, Pc = /\d{3}/, Qc = /\d{4}/, Rc = /[+-]?\d{6}/, Sc = /\d\d?/, Tc = /\d{1,3}/, Uc = /\d{1,4}/, Vc = /[+-]?\d{1,6}/, Wc = /\d+/, Xc = /[+-]?\d+/, Yc = /Z|[+-]\d\d:?\d\d/gi, Zc = /[+-]?\d+(\.\d{1,3})?/, $c = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, _c = {}, ad = {}, bd = 0, cd = 1, dd = 2, ed = 3, fd = 4, gd = 5, hd = 6;
    G("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), G("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a);
    }), G("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a);
    }), y("month", "M"), L("M", Sc), L("MM", Sc, Oc), L("MMM", $c), L("MMMM", $c), O([ "M", "MM" ], function(a, b) {
        b[cd] = p(a) - 1;
    }), O([ "MMM", "MMMM" ], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[cd] = e : j(c).invalidMonth = a;
    });
    var id = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), jd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), kd = {};
    a.suppressDeprecationWarnings = !1;
    var ld = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, md = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/ ], [ "YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d{2}/ ], [ "YYYY-DDD", /\d{4}-\d{3}/ ] ], nd = [ [ "HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], od = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = $("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }), G(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), G(0, [ "YYYY", 4 ], 0, "year"), G(0, [ "YYYYY", 5 ], 0, "year"), G(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    y("year", "y"), L("Y", Xc), L("YY", Sc, Oc), L("YYYY", Uc, Qc), L("YYYYY", Vc, Rc), 
    L("YYYYYY", Vc, Rc), O([ "YYYY", "YYYYY", "YYYYYY" ], bd), O("YY", function(b, c) {
        c[bd] = a.parseTwoDigitYear(b);
    }), a.parseTwoDigitYear = function(a) {
        return p(a) + (p(a) > 68 ? 1900 : 2e3);
    };
    var pd = B("FullYear", !1);
    G("w", [ "ww", 2 ], "wo", "week"), G("W", [ "WW", 2 ], "Wo", "isoWeek"), y("week", "w"), 
    y("isoWeek", "W"), L("w", Sc), L("ww", Sc, Oc), L("W", Sc), L("WW", Sc, Oc), P([ "w", "ww", "W", "WW" ], function(a, b, c, d) {
        b[d.substr(0, 1)] = p(a);
    });
    var qd = {
        dow: 0,
        doy: 6
    };
    G("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), y("dayOfYear", "DDD"), L("DDD", Tc), 
    L("DDDD", Pc), O([ "DDD", "DDDD" ], function(a, b, c) {
        c._dayOfYear = p(a);
    }), a.ISO_8601 = function() {};
    var rd = $("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Aa.apply(null, arguments);
        return this > a ? this : a;
    }), sd = $("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Aa.apply(null, arguments);
        return a > this ? this : a;
    });
    Ga("Z", ":"), Ga("ZZ", ""), L("Z", Yc), L("ZZ", Yc), O([ "Z", "ZZ" ], function(a, b, c) {
        c._useUTC = !0, c._tzm = Ha(a);
    });
    var td = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var ud = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, vd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Va.fn = Ea.prototype;
    var wd = Za(1, "add"), xd = Za(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var yd = $("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a);
    });
    G(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), G(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Ab("gggg", "weekYear"), Ab("ggggg", "weekYear"), Ab("GGGG", "isoWeekYear"), 
    Ab("GGGGG", "isoWeekYear"), y("weekYear", "gg"), y("isoWeekYear", "GG"), L("G", Xc), 
    L("g", Xc), L("GG", Sc, Oc), L("gg", Sc, Oc), L("GGGG", Uc, Qc), L("gggg", Uc, Qc), 
    L("GGGGG", Vc, Rc), L("ggggg", Vc, Rc), P([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(a, b, c, d) {
        b[d.substr(0, 2)] = p(a);
    }), P([ "gg", "GG" ], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b);
    }), G("Q", 0, 0, "quarter"), y("quarter", "Q"), L("Q", Nc), O("Q", function(a, b) {
        b[cd] = 3 * (p(a) - 1);
    }), G("D", [ "DD", 2 ], "Do", "date"), y("date", "D"), L("D", Sc), L("DD", Sc, Oc), 
    L("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient;
    }), O([ "D", "DD" ], dd), O("Do", function(a, b) {
        b[dd] = p(a.match(Sc)[0], 10);
    });
    var zd = B("Date", !0);
    G("d", 0, "do", "day"), G("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a);
    }), G("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a);
    }), G("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a);
    }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), y("day", "d"), y("weekday", "e"), 
    y("isoWeekday", "E"), L("d", Sc), L("e", Sc), L("E", Sc), L("dd", $c), L("ddd", $c), 
    L("dddd", $c), P([ "dd", "ddd", "dddd" ], function(a, b, c) {
        var d = c._locale.weekdaysParse(a);
        null != d ? b.d = d : j(c).invalidWeekday = a;
    }), P([ "d", "e", "E" ], function(a, b, c, d) {
        b[d] = p(a);
    });
    var Ad = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Bd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Cd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    G("H", [ "HH", 2 ], 0, "hour"), G("h", [ "hh", 2 ], 0, function() {
        return this.hours() % 12 || 12;
    }), Pb("a", !0), Pb("A", !1), y("hour", "h"), L("a", Qb), L("A", Qb), L("H", Sc), 
    L("h", Sc), L("HH", Sc, Oc), L("hh", Sc, Oc), O([ "H", "HH" ], ed), O([ "a", "A" ], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a;
    }), O([ "h", "hh" ], function(a, b, c) {
        b[ed] = p(a), j(c).bigHour = !0;
    });
    var Dd = /[ap]\.?m?\.?/i, Ed = B("Hours", !0);
    G("m", [ "mm", 2 ], 0, "minute"), y("minute", "m"), L("m", Sc), L("mm", Sc, Oc), 
    O([ "m", "mm" ], fd);
    var Fd = B("Minutes", !1);
    G("s", [ "ss", 2 ], 0, "second"), y("second", "s"), L("s", Sc), L("ss", Sc, Oc), 
    O([ "s", "ss" ], gd);
    var Gd = B("Seconds", !1);
    G("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), G(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), Tb("SSS"), Tb("SSSS"), y("millisecond", "ms"), L("S", Tc, Nc), L("SS", Tc, Oc), 
    L("SSS", Tc, Pc), L("SSSS", Wc), O([ "S", "SS", "SSS", "SSSS" ], function(a, b) {
        b[hd] = p(1e3 * ("0." + a));
    });
    var Hd = B("Milliseconds", !1);
    G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
    var Id = n.prototype;
    Id.add = wd, Id.calendar = _a, Id.clone = ab, Id.diff = gb, Id.endOf = sb, Id.format = kb, 
    Id.from = lb, Id.fromNow = mb, Id.to = nb, Id.toNow = ob, Id.get = E, Id.invalidAt = zb, 
    Id.isAfter = bb, Id.isBefore = cb, Id.isBetween = db, Id.isSame = eb, Id.isValid = xb, 
    Id.lang = yd, Id.locale = pb, Id.localeData = qb, Id.max = sd, Id.min = rd, Id.parsingFlags = yb, 
    Id.set = E, Id.startOf = rb, Id.subtract = xd, Id.toArray = wb, Id.toDate = vb, 
    Id.toISOString = jb, Id.toJSON = jb, Id.toString = ib, Id.unix = ub, Id.valueOf = tb, 
    Id.year = pd, Id.isLeapYear = ga, Id.weekYear = Cb, Id.isoWeekYear = Db, Id.quarter = Id.quarters = Gb, 
    Id.month = W, Id.daysInMonth = X, Id.week = Id.weeks = la, Id.isoWeek = Id.isoWeeks = ma, 
    Id.weeksInYear = Fb, Id.isoWeeksInYear = Eb, Id.date = zd, Id.day = Id.days = Mb, 
    Id.weekday = Nb, Id.isoWeekday = Ob, Id.dayOfYear = oa, Id.hour = Id.hours = Ed, 
    Id.minute = Id.minutes = Fd, Id.second = Id.seconds = Gd, Id.millisecond = Id.milliseconds = Hd, 
    Id.utcOffset = Ka, Id.utc = Ma, Id.local = Na, Id.parseZone = Oa, Id.hasAlignedHourOffset = Pa, 
    Id.isDST = Qa, Id.isDSTShifted = Ra, Id.isLocal = Sa, Id.isUtcOffset = Ta, Id.isUtc = Ua, 
    Id.isUTC = Ua, Id.zoneAbbr = Ub, Id.zoneName = Vb, Id.dates = $("dates accessor is deprecated. Use date instead.", zd), 
    Id.months = $("months accessor is deprecated. Use month instead", W), Id.years = $("years accessor is deprecated. Use year instead", pd), 
    Id.zone = $("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", La);
    var Jd = Id, Kd = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Ld = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY LT",
        LLLL: "dddd, MMMM D, YYYY LT"
    }, Md = "Invalid date", Nd = "%d", Od = /\d{1,2}/, Pd = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Qd = r.prototype;
    Qd._calendar = Kd, Qd.calendar = Yb, Qd._longDateFormat = Ld, Qd.longDateFormat = Zb, 
    Qd._invalidDate = Md, Qd.invalidDate = $b, Qd._ordinal = Nd, Qd.ordinal = _b, Qd._ordinalParse = Od, 
    Qd.preparse = ac, Qd.postformat = ac, Qd._relativeTime = Pd, Qd.relativeTime = bc, 
    Qd.pastFuture = cc, Qd.set = dc, Qd.months = S, Qd._months = id, Qd.monthsShort = T, 
    Qd._monthsShort = jd, Qd.monthsParse = U, Qd.week = ia, Qd._week = qd, Qd.firstDayOfYear = ka, 
    Qd.firstDayOfWeek = ja, Qd.weekdays = Ib, Qd._weekdays = Ad, Qd.weekdaysMin = Kb, 
    Qd._weekdaysMin = Cd, Qd.weekdaysShort = Jb, Qd._weekdaysShort = Bd, Qd.weekdaysParse = Lb, 
    Qd.isPM = Rb, Qd._meridiemParse = Dd, Qd.meridiem = Sb, v("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10, c = 1 === p(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c;
        }
    }), a.lang = $("moment.lang is deprecated. Use moment.locale instead.", v), a.langData = $("moment.langData is deprecated. Use moment.localeData instead.", x);
    var Rd = Math.abs, Sd = uc("ms"), Td = uc("s"), Ud = uc("m"), Vd = uc("h"), Wd = uc("d"), Xd = uc("w"), Yd = uc("M"), Zd = uc("y"), $d = wc("milliseconds"), _d = wc("seconds"), ae = wc("minutes"), be = wc("hours"), ce = wc("days"), de = wc("months"), ee = wc("years"), fe = Math.round, ge = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, he = Math.abs, ie = Ea.prototype;
    ie.abs = lc, ie.add = nc, ie.subtract = oc, ie.as = sc, ie.asMilliseconds = Sd, 
    ie.asSeconds = Td, ie.asMinutes = Ud, ie.asHours = Vd, ie.asDays = Wd, ie.asWeeks = Xd, 
    ie.asMonths = Yd, ie.asYears = Zd, ie.valueOf = tc, ie._bubble = pc, ie.get = vc, 
    ie.milliseconds = $d, ie.seconds = _d, ie.minutes = ae, ie.hours = be, ie.days = ce, 
    ie.weeks = xc, ie.months = de, ie.years = ee, ie.humanize = Bc, ie.toISOString = Cc, 
    ie.toString = Cc, ie.toJSON = Cc, ie.locale = pb, ie.localeData = qb, ie.toIsoString = $("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Cc), 
    ie.lang = yd, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), L("x", Xc), L("X", Zc), 
    O("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10));
    }), O("x", function(a, b, c) {
        c._d = new Date(p(a));
    }), a.version = "2.10.3", b(Aa), a.fn = Jd, a.min = Ca, a.max = Da, a.utc = h, a.unix = Wb, 
    a.months = gc, a.isDate = d, a.locale = v, a.invalid = l, a.duration = Va, a.isMoment = o, 
    a.weekdays = ic, a.parseZone = Xb, a.localeData = x, a.isDuration = Fa, a.monthsShort = hc, 
    a.weekdaysMin = kc, a.defineLocale = w, a.weekdaysShort = jc, a.normalizeUnits = z, 
    a.relativeTimeThreshold = Ac;
    var je = a;
    return je;
});

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function(t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var u = a.data(h, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o;
            }), void 0 !== o ? o : t;
        }
        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
            });
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e);
            }
            return u(this, t), this;
        }, n(a));
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i);
    }
    var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r ? function() {} : function(t) {
        r.error(t);
    };
    return n(e || t.jQuery), i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this;
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {};
            return n[e] = !0, this;
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this;
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o], s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e);
            }
            return this;
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents;
    }, t;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e();
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e;
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0;
        }
        return t;
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), 
        e;
    }
    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
            e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e);
        }
    }
    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l], f = r[c], m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m;
            }
            var p = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom, y = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, E = d && s, b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), 
            a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, 
            a;
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
        console.error(t);
    }, h = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], u = h.length, d = !1;
    return r;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
            var n = e[i], o = n + "MatchesSelector";
            if (t[o]) return o;
        }
    }();
    return function(e, i) {
        return e[t](i);
    };
}), function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }, i.modulo = function(t, e) {
        return (t % e + e) % e;
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e;
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
    }, i.getParent = function(t, i) {
        for (;t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, i)) return t;
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r]);
            }
        }), o;
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o];
            }, i || 100);
        };
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"), h = document.querySelectorAll(".js-" + r), u = i.makeArray(a).concat(i.makeArray(h)), d = s + "-options", l = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r);
                } catch (a) {
                    return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + a));
                }
                var h = new e(t, i);
                l && l.data(t, o, h);
            });
        });
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", [ "ev-emitter/ev-emitter", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, 
    t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t) return !1;
        return e = null, !0;
    }
    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create());
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase();
        });
    }
    var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", a = "string" == typeof r.transform ? "transform" : "WebkitTransform", h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[s], u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
    }, d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        });
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, d.getSize = function() {
        this.size = e(this.element);
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i];
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"], r = this.layout.size, s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10), a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, 
        a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a;
    }, d.layoutPosition = function() {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", r = i ? "left" : "right", s = i ? "right" : "left", a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom", u = n ? "top" : "bottom", d = n ? "bottom" : "top", l = this.position.y + t[h];
        e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [ this ]);
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i, h = e - n, u = {};
        u.transform = this.getTranslate(a, h), this.transition({
            to: u,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        });
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null;
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(h, this, !1);
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t);
    };
    var c = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn, n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", 
            delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n];
            }
            this.emitEvent("transitionEnd", [ this ]);
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(f);
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [ this ]);
    }, d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        });
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"));
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    }, n;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], function(i, n, o, r) {
        return e(t, i, n, o, r);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), 
        this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, c[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout();
    }
    function s(t) {
        function e() {
            t.apply(this, arguments);
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }
    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o;
    }
    var h = t.console, u = t.jQuery, d = function() {}, l = 0, c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype), f.option = function(t) {
        n.extend(this.options, t);
    }, f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }, f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o], s = new i(r, this);
            n.push(s);
        }
        return n;
    }, f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector);
    }, f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element;
        });
    }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize();
    }, f.getSize = function() {
        this.size = i(this.element);
    }, f._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), 
        this[t] = n ? i(n)[e] : o) : this[t] = 0;
    }, f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored;
        });
    }, f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
            }, this), this._processLayoutQueue(i);
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }, f._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), 
        this.stagger);
    }, f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
    }, f._postLayout = function() {
        this.resizeContainer();
    }, f.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
            t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [ e ]);
        }
        function n() {
            s++, s == r && i();
        }
        var o = this, r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n);
        });
    }, f.dispatchEvent = function(t, e, i) {
        var n = e ? [ e ].concat(i) : i;
        if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), 
        e) {
            var o = u.Event(e);
            o.type = t, this.$element.trigger(o, i);
        } else this.$element.trigger(t, i);
    }, f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
    }, f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
    }, f.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, f.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, f._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
    }, f._manageStamp = d, f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t), r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        };
        return r;
    }, f.handleEvent = n.handleEvent, f.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, f.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, f.onresize = function() {
        this.resize();
    }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, f.needsResizeLayout = function() {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
    }, f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
    }, f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), 
            this.reveal(e), this.layoutItems(i);
        }
    }, f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e);
    }, f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e);
    }, f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i;
        }
    }, f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i);
        }, this), e;
    }, f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t);
        }, this);
    }, f.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy();
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), 
        i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), 
        i;
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r;
}), function(t, e) {
    "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
        this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0;
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1);
    }, n.getContainerWidth = function() {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i);
        this.containerWidth = n && n.innerWidth;
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
            x: this.columnWidth * r.col,
            y: r.y
        }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
        return s;
    }, n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        };
    }, n._getTopColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
        return e;
    }, n._getColGroupY = function(t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
    }, n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols, n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        };
    }, n._manageStamp = function(t) {
        var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft"), r = o ? n.left : n.right, s = r + i.outerWidth, a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), 
        t;
    }, n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
    }, n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
    }, i;
});

!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), 
        this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, 
        this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, 
        this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, 
        this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: [ "busy" ],
                animating: [ "busy" ],
                dragging: [ "interacting" ]
            }
        }, a.each([ "onResize", "onThrottledResize" ], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this);
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            });
        }, this)), this.setup(), this.initialize();
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [ {
        filter: [ "width", "settings" ],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ "items", "settings" ],
        run: function() {
            this.$stage.children(".cloned").remove();
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e), a.css = e;
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; ) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, 
            a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f;
        }
    }, {
        filter: [ "items", "settings" ],
        run: function() {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
            for (g /= 2; g > 0; ) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, 
            b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, 
            g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; ) d = f[c - 1] || 0, 
            e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f;
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function() {
            var a = this.settings.stagePadding, b = this._coordinates, c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c);
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge) for (;b--; ) a.css.width = this._widths[this.relative(b)], 
            d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css));
        }
    }, {
        filter: [ "items" ],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), 
            this.reset(a.current);
        }
    }, {
        filter: [ "position" ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ "width", "position", "items", "settings" ],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, 
            b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), 
            this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
        }
    } ], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), 
        this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, 
            e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), 
        this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), 
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), 
        this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.setup = function() {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a));
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), 
        delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), 
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        });
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), 
        this.trigger("prepared", {
            content: c.data
        }), c.data;
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a];
        }, this._invalidated), e = {}; b < c; ) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), 
        b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
          case e.Width.Inner:
          case e.Width.Outer:
            return this._width;

          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin;
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), 
        this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), 
        this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), 
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), 
        this.refresh(), this.leave("resizing"), void this.trigger("resized")))));
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), 
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), 
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), 
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), 
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), 
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), 
        this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), 
        this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), 
        this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), 
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), 
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), 
            this.trigger("drag"));
        }, this)));
    }, e.prototype.onDragMove = function(a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), 
        c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), 
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), 
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), 
        this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), 
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), 
        this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function(b, c) {
        var d = -1, e = 30, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), 
            -1 === d;
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), 
        d;
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), 
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        });
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), 
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            });
        }
        return this._current;
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), 
        a.map(this._invalidated, function(a, b) {
            return b;
        });
    }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress([ "translate", "translated" ]), 
        this.animate(this.coordinates(a)), this.release([ "translate", "translated" ]));
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), 
        a;
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); ) ;
            f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b);
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], 
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, 
        c = Math.ceil(c));
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function(a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), 
        a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, 
        a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), 
        this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), 
        d;
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), 
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), 
        b.filter(function() {
            return 1 === this.nodeType;
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), 
        this.invalidate("items");
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), 
        this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 
        0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), 
        this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), 
        this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), 
        this.trigger("added", {
            content: b,
            position: c
        });
    }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), 
        this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }));
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this));
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), 
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), 
        this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
          case "<":
            return d ? a > c : a < c;

          case ">":
            return d ? a < c : a > c;

          case ">=":
            return d ? a <= c : a >= c;

          case "<=":
            return d ? a >= c : a <= c;
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, i = a.camelCase(a.grep([ "on", b, d ], function(a) {
            return a;
        }).join("-").toLowerCase()), j = a.Event([ b, "owl", d || "carousel" ].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j);
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), 
        j;
    }, e.prototype.enter = function(b) {
        a.each([ b ].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this));
    }, e.prototype.leave = function(b) {
        a.each([ b ].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--;
        }, this));
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                }, a.event.special[b.name].owl = !0;
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, 
        this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d;
        }, this)));
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, 
        a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a));
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        };
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each([ "next", "prev", "to", "destroy", "refresh", "replace", "add", "remove" ], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([ c ]), f[c].apply(this, [].slice.call(arguments, 1)), 
                    this.release([ c ]));
                }, f));
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, 
        this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                    this.load(b);
                }, this); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), 
                g++;
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy");
            }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current, c = b + this._core.settings.items, d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height());
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: [ "interacting" ]
                });
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), 
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a);
        }, this));
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
        }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), 
        d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar";
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', 
            b.after(d), b.after(e);
        };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", 
        j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f);
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f);
            }
        });
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), 
        this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), 
        this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), 
        e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), 
        "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), 
        a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), 
        this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), 
        this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), 
                this.next = a.property.value);
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this)
        }, this.core.$element.on(this.handlers);
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), 
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), 
        this.core.onTransitionEnd();
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, 
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c);
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop();
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play();
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), 
        this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
    }, e.prototype.read = function() {
        return new Date().getTime() - this._time;
    }, e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, 
        e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), 
        this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, 
        this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), 
        this._core.leave("rotating"));
    }, e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, 
        b.clearTimeout(this._call));
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], 
        this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), 
                this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), 
                this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };
    e.Defaults = {
        nav: !1,
        navText: [ '<span aria-label="prev">&#x2039;</span>', '<span aria-label="next">&#x203a;</span>' ],
        navSpeed: !1,
        navElement: 'button role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: [ "owl-prev", "owl-next" ],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), 
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed);
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed);
        }, this)), c.dotsData || (this._templates = [ a("<button>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML") ]), 
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), 
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
    }, e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], 
        a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({
                    start: Math.min(f, a - d),
                    end: a - d + h - 1
                }), Math.min(f, a - d) === f) break;
                b = 0, ++c;
            }
            b += this._core.mergers(this._core.relative(a));
        }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), 
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), 
        this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, 
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), 
        this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        };
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b;
        }, this)).pop();
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, 
        b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), 
        d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content;
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null;
                    }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e;
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), 
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
        }, this));
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1;
        }), e;
    }
    function f(a) {
        return e(a, !0);
    }
    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j = {
        csstransforms: function() {
            return !!e("transform");
        },
        csstransforms3d: function() {
            return !!e("perspective");
        },
        csstransitions: function() {
            return !!e("transition");
        },
        cssanimations: function() {
            return !!e("animation");
        }
    };
    j.csstransitions() && (a.support.transition = a.support.transition || {}, a.support.transition.end || (a.support.transition.end = i.transition.end[new String(f("transition"))])), 
    j.cssanimations() && (a.support.animation = a.support.animation || {}, a.support.animation.end || (a.support.animation.end = i.animation.end[new String(f("animation"))])), 
    j.csstransforms() && (a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);

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
                    9: {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    a: {
                        validator: "[A-Za-zА-яЁё]",
                        cardinality: 1
                    },
                    "*": {
                        validator: "[A-Za-zА-яЁё0-9]",
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

+function($) {
    "use strict";
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
    };
    Button.VERSION = "3.3.1";
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
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) this.toggle();
    };
    Collapse.VERSION = "3.3.1";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
        toggle: true,
        trigger: '[data-toggle="collapse"]'
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var activesData;
        var actives = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
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
            if (!data && options.toggle && option == "show") options.toggle = false;
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
        var option = data ? "toggle" : $.extend({}, $this.data(), {
            trigger: this
        });
        Plugin.call($target, option);
    });
}(jQuery);

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
            bindEvents: "default",
            autoAdd: {
                helpBlocks: true
            },
            filter: function() {
                return $(this).is(":visible") || $(this).is('[type="checkbox"]');
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
                        var $this = $(el), $controlGroup = $this.parents(".form-group:not(.no-validate)").first();
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
                        $form.addClass("error");
                        if ($.isFunction(settings.options.submitError)) {
                            settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
                        }
                    } else {
                        $form.removeClass("error");
                        if ($.isFunction(settings.options.submitSuccess)) {
                            settings.options.submitSuccess($form, e);
                        }
                    }
                });
                return this.each(function() {
                    var $this = $(this), $controlGroup = $this.parents(".form-group:not(.no-validate)").first(), $helpBlock = $controlGroup.find(".help-block").first(), $form = $this.parents("form").first(), validatorNames = [];
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
                    if (settings.options.bindEvents == "default") {
                        var events = [ "keyup", "focus", "blur", "click", "keydown", "keypress", "change" ];
                    } else {
                        var events = settings.options.bindEvents;
                    }
                    $this.bind(events.join(".validation ") + ".validation", function(e, params) {
                        var value = getValue($this);
                        var errorsFound = [];
                        if (!params && e.type === "blur") {
                            params = {
                                submitting: true
                            };
                        }
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
                    var $this = $(this), $controlGroup = $this.parents(".form-group:not(.no-validate)").first(), $helpBlock = $controlGroup.find(".help-block").first();
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
                    element.bind("validation.validation", function() {});
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

+function($) {
    "use strict";
    function getValue($el) {
        return $el.is('[type="checkbox"]') ? $el.prop("checked") : $el.is('[type="radio"]') ? !!$('[name="' + $el.attr("name") + '"]:checked').length : $el.is("select[multiple]") ? ($el.val() || []).length : $el.val();
    }
    var Validator = function(element, options) {
        this.options = options;
        this.validators = $.extend({}, Validator.VALIDATORS, options.custom);
        this.$element = $(element);
        this.$btn = $('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
        this.update();
        this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", $.proxy(this.onInput, this));
        this.$element.on("submit.bs.validator", $.proxy(this.onSubmit, this));
        this.$element.on("reset.bs.validator", $.proxy(this.reset, this));
        this.$element.find("[data-match]").each(function() {
            var $this = $(this);
            var target = $this.attr("data-match");
            $(target).on("input.bs.validator", function(e) {
                getValue($this) && $this.trigger("input.bs.validator");
            });
        });
        this.$inputs.filter(function() {
            return getValue($(this)) && !$(this).closest(".has-error").length;
        }).trigger("focusout");
        this.$element.attr("novalidate", true);
    };
    Validator.VERSION = "0.11.9";
    Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)';
    Validator.FOCUS_OFFSET = 20;
    Validator.DEFAULTS = {
        delay: 500,
        html: false,
        disable: true,
        focus: true,
        custom: {},
        errors: {
            match: "Does not match",
            minlength: "Not long enough"
        },
        feedback: {
            success: "glyphicon-ok",
            error: "glyphicon-remove"
        }
    };
    Validator.VALIDATORS = {
        native: function($el) {
            var el = $el[0];
            if (el.checkValidity) {
                return !el.checkValidity() && !el.validity.valid && (el.validationMessage || "error!");
            }
        },
        match: function($el) {
            var target = $el.attr("data-match");
            return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match;
        },
        minlength: function($el) {
            var minlength = $el.attr("data-minlength");
            return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength;
        }
    };
    Validator.prototype.update = function() {
        var self = this;
        this.$inputs = this.$element.find(Validator.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function() {
            self.clearErrors($(this));
        }));
        this.toggleSubmit();
        return this;
    };
    Validator.prototype.onInput = function(e) {
        var self = this;
        var $el = $(e.target);
        var deferErrors = e.type !== "focusout";
        if (!this.$inputs.is($el)) return;
        this.validateInput($el, deferErrors).done(function() {
            self.toggleSubmit();
        });
    };
    Validator.prototype.validateInput = function($el, deferErrors) {
        var value = getValue($el);
        var prevErrors = $el.data("bs.validator.errors");
        if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr("name") + '"]');
        var e = $.Event("validate.bs.validator", {
            relatedTarget: $el[0]
        });
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;
        var self = this;
        return this.runValidators($el).done(function(errors) {
            $el.data("bs.validator.errors", errors);
            errors.length ? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el) : self.clearErrors($el);
            if (!prevErrors || errors.toString() !== prevErrors.toString()) {
                e = errors.length ? $.Event("invalid.bs.validator", {
                    relatedTarget: $el[0],
                    detail: errors
                }) : $.Event("valid.bs.validator", {
                    relatedTarget: $el[0],
                    detail: prevErrors
                });
                self.$element.trigger(e);
            }
            self.toggleSubmit();
            self.$element.trigger($.Event("validated.bs.validator", {
                relatedTarget: $el[0]
            }));
        });
    };
    Validator.prototype.runValidators = function($el) {
        var errors = [];
        var deferred = $.Deferred();
        $el.data("bs.validator.deferred") && $el.data("bs.validator.deferred").reject();
        $el.data("bs.validator.deferred", deferred);
        function getValidatorSpecificError(key) {
            return $el.attr("data-" + key + "-error");
        }
        function getValidityStateError() {
            var validity = $el[0].validity;
            return validity.typeMismatch ? $el.attr("data-type-error") : validity.patternMismatch ? $el.attr("data-pattern-error") : validity.stepMismatch ? $el.attr("data-step-error") : validity.rangeOverflow ? $el.attr("data-max-error") : validity.rangeUnderflow ? $el.attr("data-min-error") : validity.valueMissing ? $el.attr("data-required-error") : null;
        }
        function getGenericError() {
            return $el.attr("data-error");
        }
        function getErrorMessage(key) {
            return getValidatorSpecificError(key) || getValidityStateError() || getGenericError();
        }
        $.each(this.validators, $.proxy(function(key, validator) {
            var error = null;
            var value = getValue($el);
            if ((value == "" || value || $el.attr("required")) && ($el.attr("data-" + key) !== undefined || key == "native") && (error = validator.call(this, $el))) {
                error = getErrorMessage(key) || error;
                !~errors.indexOf(error) && errors.push(error);
            }
        }, this));
        if (!errors.length && getValue($el) && $el.attr("data-remote")) {
            this.defer($el, function() {
                var data = {};
                data[$el.attr("name")] = getValue($el);
                $.get($el.attr("data-remote"), data).fail(function(jqXHR, textStatus, error) {
                    errors.push(getErrorMessage("remote") || error);
                }).always(function() {
                    deferred.resolve(errors);
                });
            });
        } else deferred.resolve(errors);
        return deferred.promise();
    };
    Validator.prototype.validate = function() {
        var self = this;
        $.when(this.$inputs.map(function(el) {
            return self.validateInput($(this), false);
        })).then(function() {
            self.toggleSubmit();
            self.focusError();
        });
        return this;
    };
    Validator.prototype.focusError = function() {
        if (!this.options.focus) return;
        var $input = this.$element.find(".has-error :input:first");
        if ($input.length === 0) return;
        $("html, body").animate({
            scrollTop: $input.offset().top - Validator.FOCUS_OFFSET
        }, 250);
        $input.focus();
    };
    Validator.prototype.showErrors = function($el) {
        var method = this.options.html ? "html" : "text";
        var errors = $el.data("bs.validator.errors");
        var $group = $el.closest(".form-group");
        var $block = $group.find(".help-block.with-errors");
        var $feedback = $group.find(".form-control-feedback");
        if (!errors.length) return;
        errors = $("<ul/>").addClass("list-unstyled").append($.map(errors, function(error) {
            return $("<li/>")[method](error);
        }));
        $block.data("bs.validator.originalContent") === undefined && $block.data("bs.validator.originalContent", $block.html());
        $block.empty().append(errors);
        $group.addClass("has-error has-danger");
        $group.hasClass("has-feedback") && $feedback.removeClass(this.options.feedback.success) && $feedback.addClass(this.options.feedback.error) && $group.removeClass("has-success");
    };
    Validator.prototype.clearErrors = function($el) {
        var $group = $el.closest(".form-group");
        var $block = $group.find(".help-block.with-errors");
        var $feedback = $group.find(".form-control-feedback");
        $block.html($block.data("bs.validator.originalContent"));
        $group.removeClass("has-error has-danger has-success");
        $group.hasClass("has-feedback") && $feedback.removeClass(this.options.feedback.error) && $feedback.removeClass(this.options.feedback.success) && getValue($el) && $feedback.addClass(this.options.feedback.success) && $group.addClass("has-success");
    };
    Validator.prototype.hasErrors = function() {
        function fieldErrors() {
            return !!($(this).data("bs.validator.errors") || []).length;
        }
        return !!this.$inputs.filter(fieldErrors).length;
    };
    Validator.prototype.isIncomplete = function() {
        function fieldIncomplete() {
            var value = getValue($(this));
            return !(typeof value == "string" ? $.trim(value) : value);
        }
        return !!this.$inputs.filter("[required]").filter(fieldIncomplete).length;
    };
    Validator.prototype.onSubmit = function(e) {
        this.validate();
        if (this.isIncomplete() || this.hasErrors()) e.preventDefault();
    };
    Validator.prototype.toggleSubmit = function() {
        if (!this.options.disable) return;
        this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
    };
    Validator.prototype.defer = function($el, callback) {
        callback = $.proxy(callback, this, $el);
        if (!this.options.delay) return callback();
        window.clearTimeout($el.data("bs.validator.timeout"));
        $el.data("bs.validator.timeout", window.setTimeout(callback, this.options.delay));
    };
    Validator.prototype.reset = function() {
        this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);
        this.$inputs.removeData([ "bs.validator.errors", "bs.validator.deferred" ]).each(function() {
            var $this = $(this);
            var timeout = $this.data("bs.validator.timeout");
            window.clearTimeout(timeout) && $this.removeData("bs.validator.timeout");
        });
        this.$element.find(".help-block.with-errors").each(function() {
            var $this = $(this);
            var originalContent = $this.data("bs.validator.originalContent");
            $this.removeData("bs.validator.originalContent").html(originalContent);
        });
        this.$btn.removeClass("disabled");
        this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success");
        return this;
    };
    Validator.prototype.destroy = function() {
        this.reset();
        this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator");
        this.$inputs.off(".bs.validator");
        this.options = null;
        this.validators = null;
        this.$element = null;
        this.$btn = null;
        this.$inputs = null;
        return this;
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var options = $.extend({}, Validator.DEFAULTS, $this.data(), typeof option == "object" && option);
            var data = $this.data("bs.validator");
            if (!data && option == "destroy") return;
            if (!data) $this.data("bs.validator", data = new Validator(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.validator;
    $.fn.validator = Plugin;
    $.fn.validator.Constructor = Validator;
    $.fn.validator.noConflict = function() {
        $.fn.validator = old;
        return this;
    };
    $(window).on("load", function() {
        $('form[data-toggle="validator"]').each(function() {
            var $form = $(this);
            Plugin.call($form, $form.data());
        });
    });
}(jQuery);

$(".js-toggle-basic").click(function(event) {
    var idToggle = $(this).attr("data-id-toggle");
    $(this).toggleClass("active");
    if ($(idToggle).is(":visible")) {
        $(idToggle).hide();
    } else {
        $(idToggle).show();
    }
});

$(document).mouseup(function(e) {
    var container = $($(".js-toggle-basic").attr("data-id-toggle"));
    if (!$(".js-toggle-basic").is(e.target) && !container.is(e.target) && container.has(e.target).length === 0 && $(".js-toggle-basic").length) {
        container.hide();
        $(".js-toggle-basic").removeClass("active");
    }
});

$(".header-mob-v2 .btn-ico-user-nav").click(function() {
    $("body").toggleClass("logged");
});

if (!$(".js-rewards-submenu").is(":visible")) {
    $("header.space").addClass("not-logged");
}

$(function() {
    validateCard();
    validateCard2();
    $(".js-validate-card .js-month").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".custom-card .expired-date-card .month").text(cardMonth);
        if ($(".custom-card .expired-date-card .month").text() < 1) {
            $(".custom-card .expired-date-card .month").text("12");
        }
    });
    $(".js-validate-card .js-year").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".custom-card .expired-date-card .year").text(cardMonth);
        if ($(".custom-card .expired-date-card .year").text() < 1) {
            $(".custom-card .expired-date-card .year").text("15");
        }
    });
    $(".js-validate-card-2 .js-month").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".custom-card-2 .expired-date-card .month").text(cardMonth);
        if ($(".custom-card-2 .expired-date-card .month").text() < 1) {
            $(".custom-card-2 .expired-date-card .month").text("12");
        }
    });
    $(".js-validate-card-2 .js-year").keyup(function() {
        cardInput = $(this);
        cardMonth = $(this).val();
        $(".custom-card-2 .expired-date-card .year").text(cardMonth);
        if ($(".custom-card-2 .expired-date-card .year").text() < 1) {
            $(".custom-card-2 .expired-date-card .year").text("15");
        }
    });
    $(".js-validate-card input").focus(function() {
        $(".card-container").removeClass("hover");
        if ($(this).hasClass("js-cvv") && $(this).hasClass("no-amex")) {
            $(".card-container").addClass("hover");
        }
    });
    $(".js-validate-card-2 input").focus(function() {
        $(".card-container-2").removeClass("hover");
        if ($(this).hasClass("js-cvv") && $(this).hasClass("no-amex")) {
            $(".card-container-2").addClass("hover");
        }
    });
    $(".js-validate-card .js-name").keyup(function() {
        cardName = $(this).val();
        $(".custom-card .name-card").text(cardName);
        if ($(".custom-card .name-card").text().length < 1) {
            $(".custom-card .name-card").text("NOMBRE DEL TITULAR");
        }
    });
    $(".js-cvv").keyup(function() {
        if (parseInt($(".js-cvv").val(), 10) >= 3 && $(".js-cvv").hasClass("no-amex")) {
            $(".js-cvv").val($(".js-cvv").val().slice(0, 3));
        } else {
            $(".js-cvv").val($(".js-cvv").val().slice(0, 4));
        }
        $(".custom-card .cvv-number").text($(this).val());
        if ($(".custom-card .cvv-number").text() < 1) {
            $(".custom-card .cvv-number").text("000");
        }
    });
    $("#booking-step-4-card-9").change(function() {
        $(".month").html($("#booking-step-4-card-9").val());
        $(".month").removeClass("active");
    });
    $("#booking-step-4-card-4").change(function() {
        $(".year").html($("#booking-step-4-card-4").val());
        $(".year").removeClass("active");
    });
    $("#garantee-expiration-month").change(function() {
        $(".month-2").html($("#garantee-expiration-month").val());
        $(".month-2").removeClass("active");
    });
    $("#garantee-expiration-year").change(function() {
        $(".year-2").html($("#garantee-expiration-year").val());
        $(".year-2").removeClass("active");
    });
    $("#booking-step-4-card-1").focusin(function() {
        $(".number-card").addClass("active");
    });
    $("#booking-step-4-card-1").focusout(function() {
        $(".number-card").removeClass("active");
    });
    $("#booking-step-4-card-2").focusin(function() {
        $(".name-card").addClass("active");
    });
    $("#booking-step-4-card-2").focusout(function() {
        $(".name-card").removeClass("active");
    });
    $("#garantee-payment-method").focusin(function() {
        $(".number-card-2").addClass("active");
    });
    $("#garantee-payment-method").focusout(function() {
        $(".number-card-2").removeClass("active");
    });
    $("[data-id='booking-step-4-card-9']").click(function() {
        $(".month").addClass("active");
        $(".card-container").removeClass("hover");
    });
    $("[data-id='booking-step-4-card-9']").focusout(function() {
        $(".month").removeClass("active");
    });
    $("[data-id='booking-step-4-card-4']").click(function() {
        $(".year").addClass("active");
        $(".card-container").removeClass("hover");
    });
    $("[data-id='booking-step-4-card-4']").focusout(function() {
        $(".year").removeClass("active");
    });
    $("[data-id='garantee-expiration-month']").click(function() {
        $(".month-2").addClass("active");
        $(".card-container-2").removeClass("hover");
    });
    $("[data-id='garantee-expiration-month']").focusout(function() {
        $(".month-2").removeClass("active");
    });
    $("[data-id='garantee-expiration-year']").click(function() {
        $(".year-2").addClass("active");
        $(".card-container-2").removeClass("hover");
    });
    $("[data-id='garantee-expiration-year']").focusout(function() {
        $(".year-2").removeClass("active");
    });
    $("#booking-step-4-card-5").focusin(function() {
        $(".cvv-number").addClass("active");
    });
    $("#booking-step-4-card-5").focusout(function() {
        $(".cvv-number").removeClass("active");
    });
});

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validateCard() {
    if (globalConfig.windowWidth > globalConfig.smBreak) {
        $(".js-validate-card .js-number-key").removeAttr("pattern inputmode").attr("type", "text").removeClass("only-phone");
        $(".js-validate-card .js-number-key").keyup(function(ev) {
            if (ev.which != 37 && ev.which != 39) {
                cardInput = $(this);
                cardNumber = $(this).val();
                cardImg = $(".brand-card span");
                var ccMethods = $(this).data("methods").split(",");
                ccDefinitions = {
                    "ic-card-visa": /^4/,
                    "ic-card-disc": /^(6011|65|64[4-9]|622)/,
                    "ic-card-american": /^3(4|7)/,
                    "ic-card-master": /^(5|2)[1-5]/,
                    "ic-card-unionpay": /^62/,
                    "ic-card-diners": /^(36|38|30[0-5])/
                };
                if (ccMethods && ccMethods.length > 0) {
                    ccDefinitionsNew = {};
                    for (metodo in ccDefinitions) {
                        if (ccMethods.indexOf(metodo) > -1) {
                            ccDefinitionsNew[metodo] = ccDefinitions[metodo];
                        }
                    }
                    ccDefinitions = ccDefinitionsNew;
                }
                $.each(ccDefinitions, function(i, value) {
                    if (value.test(cardNumber)) {
                        cardType = i;
                        cardImg.addClass(i);
                        cardInput.removeClass("invalidType");
                        return false;
                    } else {
                        cardType = i;
                        cardImg.removeClass();
                        cardInput.addClass("invalidType");
                    }
                });
                if (cardType === "ic-card-american") {
                    if (ev.which != 8 && ev.which != 46) {
                        $(this).inputmask("9999 999999 99999", {
                            oncomplete: function() {}
                        });
                    }
                    $(".front .custom-card .cvv").removeClass("hide");
                    $(".js-validate-card .js-cvv").removeClass("no-amex");
                } else if (cardType === "ic-card-diners") {
                    if (ev.which != 8 && ev.which != 46) {
                        $(this).inputmask("9999 999999 9999", {
                            oncomplete: function() {}
                        });
                    }
                    $(".front .custom-card .cvv").addClass("hide");
                    $(".js-validate-card .js-cvv").addClass("no-amex");
                } else {
                    if (ev.which != 8 && ev.which != 46) {
                        $(this).inputmask("9999 9999 9999 9999", {
                            oncomplete: function() {}
                        });
                    }
                    $(".front .custom-card .cvv").addClass("hide");
                    $(".js-validate-card .js-cvv").addClass("no-amex");
                }
                $(".custom-card .number-card").text($(this).val());
                if ($(".custom-card .number-card").text() < 1) {
                    $(".custom-card .number-card").text("1234 5678 1234 5678");
                }
            }
        });
    } else {
        $(".js-validate-card .js-number-key").attr({
            pattern: "[0-9]*",
            inputmode: "numeric",
            maxlength: "16",
            type: "number"
        }).keypress(function(e) {
            return isNumberKey(e);
        });
        $(".js-validate-card .js-number-key").keyup(function(ev) {
            if (ev.which != 37 && ev.which != 39) {
                cardInput = $(this);
                cardNumber = $(this).val();
                cardImg = $(".brand-card span");
                var ccMethods = $(this).data("methods").split(",");
                ccDefinitions = {
                    "ic-card-visa": /^4/,
                    "ic-card-disc": /^(6011|65|64[4-9]|622)/,
                    "ic-card-american": /^3(4|7)/,
                    "ic-card-master": /^(5|2)[1-5]/,
                    "ic-card-unionpay": /^62/,
                    "ic-card-diners": /^(36|38|30[0-5])/
                };
                if (ccMethods && ccMethods.length > 0) {
                    ccDefinitionsNew = {};
                    for (metodo in ccDefinitions) {
                        if (ccMethods.indexOf(metodo) > -1) {
                            ccDefinitionsNew[metodo] = ccDefinitions[metodo];
                        }
                    }
                    ccDefinitions = ccDefinitionsNew;
                }
                $.each(ccDefinitions, function(i, value) {
                    if (value.test(cardNumber)) {
                        cardType = i;
                        cardImg.addClass(i);
                        cardInput.removeClass("invalidType");
                        return false;
                    } else {
                        cardType = i;
                        cardImg.removeClass();
                        cardInput.addClass("invalidType");
                    }
                });
                if (cardType === "ic-card-american") {
                    $(".front .custom-card .cvv").removeClass("hide");
                    $(".js-validate-card .js-cvv").removeClass("no-amex");
                    var actualCvv = parseInt($(".js-validate-card .js-cvv").attr("data-callback-num"), 10);
                    if (actualCvv != 4) {
                        $(".js-validate-card .js-cvv").attr("data-callback-num", "4").val("");
                    }
                    $(".js-validate-card .js-number-key").attr({
                        pattern: "[0-9]*",
                        inputmode: "numeric",
                        maxlength: "15",
                        type: "number"
                    }).addClass("only-phone");
                    var max = 15;
                    if ($(".js-number-key").val().length > max) {
                        $(".js-number-key").val($(".js-number-key").val().substr(0, max));
                    }
                    $(this).attr("maxlength", "15");
                } else if (cardType === "ic-card-diners") {
                    $(".front .custom-card .cvv").addClass("hide");
                    $(".js-validate-card .js-cvv").addClass("no-amex");
                    var actualCvv = parseInt($(".js-validate-card .js-cvv").attr("data-callback-num"), 10);
                    if (actualCvv != 3) {
                        $(".js-validate-card .js-cvv").attr("data-callback-num", "3").val("");
                    }
                    $(".js-validate-card .js-number-key").attr({
                        pattern: "[0-9]*",
                        inputmode: "numeric",
                        maxlength: "14",
                        type: "number"
                    }).addClass("only-phone");
                    var max = 14;
                    if ($(".js-number-key").val().length > max) {
                        $(".js-number-key").val($(".js-number-key").val().substr(0, max));
                    }
                    $(this).attr("maxlength", "14");
                } else {
                    $(".front .custom-card .cvv").addClass("hide");
                    $(".js-validate-card .js-cvv").addClass("no-amex");
                    var actualCvv = parseInt($(".js-validate-card .js-cvv").attr("data-callback-num"), 10);
                    if (actualCvv != 3) {
                        $(".js-validate-card .js-cvv").attr("data-callback-num", "3").val("");
                    }
                    $(".js-validate-card .js-number-key").attr({
                        pattern: "[0-9]*",
                        inputmode: "numeric",
                        maxlength: "16",
                        type: "number"
                    }).addClass("only-phone");
                    var max = 16;
                    if ($(".js-number-key").val().length > max) {
                        $(".js-number-key").val($(".js-number-key").val().substr(0, max));
                    }
                    $(this).attr("maxlength", "16");
                }
                $(".custom-card .number-card").text($(this).val());
                if ($(".custom-card .number-card").text() < 1) {
                    $(".custom-card .number-card").text("1234 5678 1234 5678");
                }
            }
        });
    }
    $(".js-form-checkout input, .js-form-checkout select, .js-form-checkout textarea").not("[type=submit]").jqBootstrapValidation("destroy");
    $(".js-form-checkout input, .js-form-checkout select, .js-form-checkout textarea").not("[type=submit]").jqBootstrapValidation({
        bindEvents: [ "change", "blur", "focus" ],
        filter: function() {
            return $(this).is(":visible") || $(this).is(".callback_date");
        },
        submitError: function($form, event, errors) {
            toggleLoadingButton($form, true);
            scrollToFistError($form);
        },
        submitSuccess: function($form, event) {
            toggleLoadingButton($form, true);
        }
    });
}

function validateCard2() {
    if (globalConfig.windowWidth > globalConfig.smBreak) {
        $(".js-validate-card-2 .js-number-key").removeAttr("pattern inputmode").attr("type", "text").removeClass("only-phone");
        $(".js-validate-card-2 .js-number-key").keyup(function(ev) {
            if (ev.which != 37 && ev.which != 39) {
                cardInput = $(this);
                cardNumber = $(this).val();
                cardImg = $(".brand-card span");
                var ccMethods = $(this).data("methods").split(",");
                ccDefinitions = {
                    "ic-card-visa": /^4/,
                    "ic-card-disc": /^(6011|65|64[4-9]|622)/,
                    "ic-card-american": /^3(4|7)/,
                    "ic-card-master": /^(5|2)[1-5]/,
                    "ic-card-unionpay": /^62/,
                    "ic-card-diners": /^(36|38|30[0-5])/
                };
                if (ccMethods && ccMethods.length > 0) {
                    ccDefinitionsNew = {};
                    for (metodo in ccDefinitions) {
                        if (ccMethods.indexOf(metodo) > -1) {
                            ccDefinitionsNew[metodo] = ccDefinitions[metodo];
                        }
                    }
                    ccDefinitions = ccDefinitionsNew;
                }
                $.each(ccDefinitions, function(i, value) {
                    if (value.test(cardNumber)) {
                        cardType = i;
                        cardImg.addClass(i);
                        cardInput.removeClass("invalidType");
                        return false;
                    } else {
                        cardType = i;
                        cardImg.removeClass();
                        cardInput.addClass("invalidType");
                    }
                });
                if (cardType === "ic-card-american") {
                    if (ev.which != 8 && ev.which != 46) {
                        $(this).inputmask("9999 999999 99999", {
                            oncomplete: function() {}
                        });
                    }
                } else if (cardType === "ic-card-diners") {
                    if (ev.which != 8 && ev.which != 46) {
                        $(this).inputmask("9999 999999 9999", {
                            oncomplete: function() {}
                        });
                    }
                } else {
                    if (ev.which != 8 && ev.which != 46) {
                        $(this).inputmask("9999 9999 9999 9999", {
                            oncomplete: function() {}
                        });
                    }
                }
                $(".custom-card-2 .number-card-2").text($(this).val());
                if ($(".custom-card-2 .number-card-2").text() < 1) {
                    $(".custom-card-2 .number-card-2").text("1234 5678 1234 5678");
                }
            }
        });
    } else {
        $(".js-validate-card-2 .js-number-key").attr({
            pattern: "[0-9]*",
            inputmode: "numeric",
            maxlength: "16",
            type: "number"
        }).addClass("only-phone");
        $(".js-validate-card-2 .js-number-key").keyup(function(ev) {
            $(".custom-card-2 .number-card-2").text($(this).val());
            if ($(".custom-card-2 .number-card-2").text() < 1) {
                $(".custom-card-2 .number-card-2").text("1234 5678 1234 5678");
            }
        });
    }
    $(".js-form-checkout input, .js-form-checkout select, .js-form-checkout textarea").not("[type=submit]").jqBootstrapValidation("destroy");
    $(".js-form-checkout input, .js-form-checkout select, .js-form-checkout textarea").not("[type=submit]").jqBootstrapValidation({
        bindEvents: [ "change", "blur", "focus" ],
        filter: function() {
            return $(this).is(":visible") || $(this).is(".callback_date");
        },
        submitError: function($form, event, errors) {
            toggleLoadingButton($form, true);
            scrollToFistError($form);
        },
        submitSuccess: function($form, event) {
            toggleLoadingButton($form, true);
        }
    });
}

$(window).on("resize", function() {
    validateCard();
    validateCard2();
});

function valida(e) {
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }
    patron = /^[a-zA-ZÀ-ÿ-.\u00f1\u00d1\s]*$/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

class Navigator {
    constructor(viewElement, initState, cssSelector, onNavCompleteCallback) {
        this.$viewElement = $(viewElement);
        this.cssSelector = cssSelector;
        this._initState = initState;
        this._actualState;
        this._prevState;
        this._onNavCompleteCallback = onNavCompleteCallback;
        this.$viewElement.htmlInject();
    }
    getActualState() {
        return this._actualState;
    }
    getPrevState() {
        return this._prevState;
    }
    getViewElement() {
        return this.$viewElement;
    }
    setViewElement(el) {
        this.$viewElement = $(el);
    }
    initViewElementState(callback) {
        this.navigate(this._initState, callback);
    }
    navigate(tplUrl, customCallback) {
        var callback = this._onNavCompleteCallback;
        if (typeof customCallback === "function") {
            callback = customCallback;
        }
        this.$viewElement.htmlInject("injectHTMLByUrl", this.cssSelector, tplUrl, callback);
        this._prevState = this._actualState;
        this._actualState = tplUrl;
    }
    goBackHandler(callback) {
        this.navigate(this._prevState, callback);
    }
}

(function($, window) {
    "use strict";
    var MultiModal = function(element) {
        this.$element = $(element);
        this.modalCount = 0;
    };
    MultiModal.BASE_ZINDEX = 1062;
    MultiModal.prototype.show = function(target) {
        var that = this;
        var $target = $(target);
        var modalIndex = that.modalCount++;
        var $form;
        $target.css("z-index", MultiModal.BASE_ZINDEX + modalIndex * 20 + 10);
        this.adjustCurrentModalBackdrop($target, modalIndex);
        window.setTimeout(function() {
            that.adjustBackdrop();
        });
        if ($target.hasClass("modal-GDPR")) {
            $form = $target.find("form");
            $form.on("submit", function() {
                that.setBackDropSize($target);
            });
        }
    };
    MultiModal.prototype.setBackDropSize = function($target) {
        var $modalBackdrop = $target.find(".modal-backdrop");
        var $modalDialog = $target.find(".modal-dialog");
        $modalBackdrop.css("height", $modalDialog.outerHeight(true));
    };
    MultiModal.prototype.adjustCurrentModalBackdrop = function($target, modalIndex) {
        var previousModalBackdrop = $(".modal-backdrop").eq(modalIndex - 1);
        var currentModalBackdrop;
        var previousModalBackdropOpacity;
        var actualModalIndex = modalIndex;
        if (previousModalBackdrop.length) {
            setTimeout(function() {
                currentModalBackdrop = $(".modal-backdrop").eq(actualModalIndex);
                previousModalBackdropOpacity = previousModalBackdrop.css("opacity");
                currentModalBackdrop.css({
                    opacity: previousModalBackdropOpacity < 1 ? 0 : previousModalBackdropOpacity
                });
            });
        }
    };
    MultiModal.prototype.hidden = function(target) {
        var $target = $(target);
        var $gdprPanels;
        var $gdprPanelsTriggers;
        this.modalCount--;
        if (this.modalCount) {
            this.adjustBackdrop();
            $("body").addClass("modal-open");
        }
        if ($target.hasClass("modal-GDPR")) {
            $gdprPanels = $target.find(".m-panel-info-GDPR");
            $gdprPanelsTriggers = $target.find("[data-toggle-gdpr-panel]");
            $gdprPanels.addClass("is_close");
            $gdprPanelsTriggers.removeClass("is_active");
        }
    };
    MultiModal.prototype.adjustBackdrop = function() {
        var modalIndex = this.modalCount - 1;
        $(".modal-backdrop").css("z-index", MultiModal.BASE_ZINDEX + modalIndex * 20);
    };
    function Plugin(method, target) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("multi-modal-plugin");
            if (!data) $this.data("multi-modal-plugin", data = new MultiModal(this));
            if (method) data[method](target);
        });
    }
    $.fn.multiModal = Plugin;
    $.fn.multiModal.Constructor = MultiModal;
    $(document).on("show.bs.modal", function(e) {
        $(document).multiModal("show", e.target);
    });
    $(document).on("hidden.bs.modal", function(e) {
        $(document).multiModal("hidden", e.target);
    });
})(jQuery, window);

var login = function() {
    var defaultErrorMsg = null;
    var $changePasswordSuccesModal = $("#change-password-success");
    var $changePasswordFailedModal = $("#change-password-failed");
    function init() {
        $("#logout, .js-logout").on("click", _logout);
        $("#js-reset-password").on("click", _resetPassword);
       //_showLoggedMenu();
        _forgotPassword();
    }
    function checkUserLogged() {
        var action = "/auth/consultarUsuarioLogado.do";
        var message = null;
        var isLogged = false;
        var deferred = $.Deferred();
        var promise = $.ajax({
            dataType: "json",
            url: action,
            cache: false
        });
        return promise.then(function(response) {
            isLogged = response.username && response.username !== "anonymous";
            if (isLogged) {
                return {
                    isLogged: isLogged,
                    userData: response,
                    message: message
                };
            } else {
                _removeLoginCookies();
                message = "Username is anonymous /auth/consultarUsuarioLogado.do";
                response = null;
                return deferred.reject({
                    isLogged: isLogged,
                    userData: response,
                    message: message
                });
            }
        }, function(error) {
            _removeLoginCookies();
            return {
                isLogged: isLogged,
                userData: null,
                message: error
            };
        });
    }
    function handleLoginAnalytics(rol, user, action) {
        var eventCategory = _getLoginForm(user);
        var eventLabel = _getUserType(rol, user);
        trackLogin(eventCategory, eventLabel, action);
    }
    function handleLoginErrorAnalytics(page, action) {
        var eventCategory = _getLoginPage(page);
        var eventLabel = "userName/pass";
        trackLogin(eventCategory, eventLabel, "form analysys error");
    }
    function loginSSO(loginData) {
        var ssoUrl = typeof Globals.ssoUrl !== "undefined" ? Globals.ssoUrl : null;
        var ssoService = typeof Globals.ssoService !== "undefined" ? Globals.ssoService : null;
        var url;
        var deferred = $.Deferred();
        var errorMessage;
        var promise;
        defaultErrorMsg = loginData.defaultErrorMsg;
        url = ssoUrl + "?service=" + ssoService + "&username=" + loginData.user + "&password=" + encodeURIComponent(loginData.password);
        if (loginData.user && loginData.password && ssoService && ssoUrl) {
            promise = $.ajax({
                method: "GET",
                url: url,
                async: false,
                dataType: "jsonp"
            });
            return promise.then(function(res) {
                if (res.data && res.data.ticketGrantingTicket) {
                    return _checkLoginTicket(res.data.ticketGrantingTicket);
                } else if (res.response.resultCode) {
                    return $.ajax({
                        method: "GET",
                        url: urlGlobalConfig.host + urlGlobalConfig.loginErrorMessage + res.response.resultCode
                    }).then(function(response) {
                        return deferred.reject({
                            message: response
                        });
                    }, function() {
                        return {
                            message: "Login Error"
                        };
                    });
                }
            }, function(jqXHR, exception) {
                if (jqXHR.status === 0) {
                    errorMessage = "Not connect.\n Verify Network.";
                } else if (jqXHR.status == 404) {
                    errorMessage = "Requested page not found. [404]";
                } else if (jqXHR.status == 500) {
                    errorMessage = "Internal Server Error [500].";
                } else if (exception === "parsererror") {
                    errorMessage = "Requested JSON parse failed.";
                } else if (exception === "timeout") {
                    errorMessage = "Time out error.";
                } else if (exception === "abort") {
                    errorMessage = "Ajax request aborted.";
                } else {
                    errorMessage = "Login Error";
                }
                return {
                    message: errorMessage
                };
            });
        } else {
            console.log("One of this params are empty: user, password, Globals.ssoService or Globals.ssoUrl");
            errorMessage = loginData.user && loginData.password ? defaultErrorMsg : "One of this fields are empty: user, password";
            deferred.reject({
                message: errorMessage
            });
            return deferred.promise();
        }
    }
    function _checkLoginTicket(ticket) {
        var action = urlGlobalConfig.host + urlGlobalConfig.checkSecurityTicket + ticket;
        var deferred = $.Deferred();
        var targetUrl = location.href;
        var date;
        var promise = $.post(action);
        promise.then(function(res) {
            if (res && res.user) {
                targetUrl = res.targetUrl ? res.targetUrl : targetUrl;
                if (targetUrl.search("roldispacher") !== -1) {
                    date = new Date();
                    targetUrl = targetUrl + "&_=" + date.getTime();
                }
                return {
                    targetUrl: targetUrl
                };
            } else if (res.response && res.response.resultCode === "KO") {
                return deferred.reject({
                    message: defaultErrorMsg
                });
            }
        }, function(error) {
            if (error.responseText === "") {
                return deferred.reject({
                    message: defaultErrorMsg
                });
            } else {
                var errorResponse = JSON.parse(error.responseText);
                var messageError = errorResponse.errorCode || defaultErrorMsg;
                return deferred.reject({
                    message: messageError
                });
            }
        });
        return promise;
    }
    function _forgotPassword() {
        var $forgotPasswordForm = $("#recoverPasswordForm");
        $forgotPasswordForm.validator({
            disable: false
        }).on("submit", _onForgotFormSubmit).off("input.bs.validator focusout.bs.validator");
    }
    function _getB2bClientType(b2bType) {
        if (!b2bType) {
            return "agency|business";
        }
        return b2bType == "AG" ? "agency" : "business";
    }
    function _getLoginForm(user) {
        var loginForm = user.b2bAgentAgencyLogin || user.b2bAgentBusinessLogin ? "loginb2bForm" : "loginRewardsForm";
        return loginForm;
    }
    function _getLoginPage(page) {
        var loginPage = "";
        var pageName = page ? page.toLowerCase() : "";
        switch (pageName) {
          case "home":
            loginPage = "loginRewardsForm";
            break;

          case "travel guides":
          case "agencies":
          case "business":
            loginPage = "loginb2bForm";
            break;

          default:
            break;
        }
        return loginPage;
    }
    function _getUserType(rol, user) {
        var userType = "";
        switch (rol) {
          case "B2B_HOME":
            userType = _getB2bClientType(user.b2bType);
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
    }
    function _logout(ev) {
        var action = urlGlobalConfig.host + urlGlobalConfig.logout;
        ev.preventDefault();
        $.ajaxSetup({
            cache: false
        });
        $.getJSON(action, null, function(data) {
            if (typeof data.exitCode !== "undefined") {
                if ($("body").hasClass("page-landings")) {
                    window.location.reload();
                } else {
                    window.location = location.protocol + "//" + location.host;
                }
            }
        });
        _removeLoginCookies();
    }
    function _onForgotFormSubmit(ev) {
        var $form = $(this);
        var defaultProtocol = location.host.search("webint") !== -1 ? "http://" : "https://";
        var secureDomain = defaultProtocol + location.host;
        var formData = {
            email: $form.find("#emailRecover").val(),
            cmp: $form.find("#cmp").val(),
            cmpView: $form.find("#cmpView").val(),
            url: secureDomain + "/nhrewards/reset-password"
        };
        toggleLoadingButton($form, true);
        if (ev.isDefaultPrevented()) {
            toggleLoadingButton($form, false);
        } else {
            ev.preventDefault();
            _sendForgotPasswordForm($form, formData);
        }
    }
    function _resetPassword(ev) {
        var defaultProtocol = location.host.search("webint") != -1 ? "http://" : "https://";
        var secureDomain = defaultProtocol + location.host;
        var url = secureDomain + "/nhrewards/reset-password-user";
        ev.preventDefault();
        $.ajax({
            type: "POST",
            url: url,
            data: "email=" + $("#email").val(),
            async: true,
            dataType: "json"
        }).done(function(data) {
            if (data && data.success === "true") {
                $changePasswordSuccesModal.modal("show");
            } else {
                $changePasswordFailedModal.modal("show");
            }
        }).fail(function(jqXHR, textStatus) {
            console.log("fail reset password: ", jqXHR, textStatus);
            $changePasswordFailedModal.modal("show");
        });
    }
    function _sendForgotPasswordForm($form, formData) {
        $("#recover-password").find(".js-error-message").empty();
        $.ajax({
            type: "POST",
            url: formData.url,
            data: "email=" + formData.email + "&cmp=" + formData.cmp + "&cmpView=" + formData.cmpView,
            async: true,
            dataType: "json"
        }).done(function(data) {
            if (data && data.success == "true") {
                $("#recover-content").hide();
                $("#recover-password").find("#confirmation-msg").removeClass("hide");
            } else {
                $(".js-error-message").text(data.response);
            }
        }).fail(function(data) {
            $(".js-error-message").text(data.response);
        }).always(function() {
            toggleLoadingButton($form, false);
        });
    }
    function _showLoggedMenu() {
        checkUserLogged(true).then(function(response) {
            if (response.isLogged) {
                $("body").addClass("logged");
                $("header .goMenuRight").off("click").removeAttr("data-toggle");
                $("#undefined-holder").show();
                $(".js-rewards-submenu").attr("style", "display: block");
                $("header").removeClass("not-logged");
                $(".boxLoginMob.row").hide();
                $(".boxLogado.Mob.row").show();
                $(".logged-mode").show();
            }
        });
    }
    function _removeLoginCookies() {
        sessionStorage.removeItem("userLoggedData");
        $.cookie("rememberme", null, {
            path: "/"
        });
    }
    return {
        checkUserLogged: checkUserLogged,
        init: init,
        loginSSO: loginSSO,
        handleLoginAnalytics: handleLoginAnalytics
    };
}();

$(() => {
    login.init();
});

(function($, window, undefined) {
    "use strict";
    var pluginName = "pep";
    var defaults = {
        initiate: function() {},
        start: function() {},
        drag: function() {},
        stop: function() {},
        easing: null,
        rest: function() {},
        moveTo: false,
        callIfNotStarted: [ "stop", "rest" ],
        startThreshold: [ 0, 0 ],
        grid: [ 1, 1 ],
        debug: false,
        activeClass: "pep-active",
        startClass: "pep-start",
        easeClass: "pep-ease",
        multiplier: 1,
        velocityMultiplier: 2.5,
        shouldPreventDefault: true,
        allowDragEventPropagation: true,
        stopEvents: "",
        hardwareAccelerate: true,
        useCSSTranslation: true,
        disableSelect: true,
        cssEaseString: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        cssEaseDuration: 1e3,
        shouldEase: true,
        droppable: false,
        droppableActiveClass: "pep-dpa",
        overlapFunction: false,
        constrainTo: false,
        removeMargins: true,
        place: true,
        deferPlacement: false,
        axis: null,
        forceNonCSS3Movement: false,
        elementsWithInteraction: "input",
        revert: false,
        revertAfter: "stop",
        revertIf: function() {
            return true;
        },
        ignoreRightClick: true,
        startPos: {
            left: null,
            top: null
        },
        useBoundingClientRect: false
    };
    function Pep(el, options) {
        this.name = pluginName;
        this.el = el;
        this.$el = $(el);
        this.options = $.extend({}, defaults, options);
        this.$document = $(this.$el[0].ownerDocument);
        this.$body = this.$document.find("body");
        this.moveTrigger = "MSPointerMove pointermove touchmove mousemove";
        this.startTrigger = "MSPointerDown pointerdown touchstart mousedown";
        this.stopTrigger = "MSPointerUp pointerup touchend mouseup";
        this.startTriggerArray = this.startTrigger.split(" ");
        this.moveTriggerArray = this.moveTrigger.split(" ");
        this.stopTriggerArray = this.stopTrigger.split(" ");
        this.stopEvents = [ this.stopTrigger, this.options.stopEvents ].join(" ");
        if (this.options.constrainTo === "window") this.$container = this.$document; else if (this.options.constrainTo && this.options.constrainTo !== "parent") this.$container = $(this.options.constrainTo); else this.$container = this.$el.parent();
        if (this.isPointerEventCompatible()) this.applyMSDefaults();
        this.CSSEaseHash = this.getCSSEaseHash();
        this.scale = 1;
        this.started = false;
        this.disabled = false;
        this.autoAxis = false;
        this.activeDropRegions = [];
        this.resetVelocityQueue();
        this.init();
        return this;
    }
    Pep.prototype.init = function() {
        if (this.options.debug) this.buildDebugDiv();
        if (this.options.disableSelect) this.disableSelect();
        if (this.options.place && !this.options.deferPlacement) {
            this.positionParent();
            this.placeObject();
        }
        this.ev = {};
        this.pos = {};
        this.subscribe();
    };
    Pep.prototype.subscribe = function() {
        var self = this;
        this.onStartEvent = function(ev) {
            self.handleStart(ev);
        };
        this.$el.on(this.startTrigger, this.onStartEvent);
        this.onStartEventOnElementsWithInteraction = function(ev) {
            ev.ignorePropagation = true;
        };
        this.$el.on(this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction);
        this.onStopEvents = function(ev) {
            self.handleStop(ev);
        };
        this.$document.on(this.stopEvents, this.onStopEvents);
        this.onMoveEvents = function(ev) {
            self.moveEvent = ev;
        };
        this.$document.on(this.moveTrigger, this.onMoveEvents);
    };
    Pep.prototype.unsubscribe = function() {
        this.$el.off(this.startTrigger, this.onStartEvent);
        this.$el.off(this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction);
        this.$document.off(this.stopEvents, this.onStopEvents);
        this.$document.off(this.moveTrigger, this.onMoveEvents);
    };
    Pep.prototype.handleStart = function(ev) {
        if (ev.ignorePropagation) return;
        var self = this;
        if (this.isValidMoveEvent(ev) && !this.disabled) {
            if (!(this.options.ignoreRightClick && ev.which === 3)) {
                if (this.isPointerEventCompatible() && ev.preventManipulation) ev.preventManipulation();
                ev = this.normalizeEvent(ev);
                if (this.options.place && this.options.deferPlacement) {
                    this.positionParent();
                    this.placeObject();
                }
                this.log({
                    type: "event",
                    event: ev.type
                });
                if (this.options.hardwareAccelerate && !this.hardwareAccelerated) {
                    this.hardwareAccelerate();
                    this.hardwareAccelerated = true;
                }
                var shouldContinue = this.options.initiate.call(this, ev, this);
                if (shouldContinue === false) return;
                clearTimeout(this.restTimeout);
                this.$el.addClass(this.options.activeClass);
                this.removeCSSEasing();
                this.startX = this.ev.x = ev.pep.x;
                this.startY = this.ev.y = ev.pep.y;
                this.initialPosition = this.initialPosition || this.$el.position();
                this.startEvent = this.moveEvent = ev;
                this.active = true;
                if (this.options.shouldPreventDefault) ev.preventDefault();
                if (!this.options.allowDragEventPropagation) ev.stopPropagation();
                (function watchMoveLoop() {
                    if (!self.active) return;
                    self.handleMove();
                    self.requestAnimationFrame(watchMoveLoop);
                })();
                (function watchEasingLoop() {
                    if (!self.options.easing) return;
                    if (self.easing) self.options.easing.call(self, null, self);
                    self.requestAnimationFrame(watchEasingLoop);
                })();
            }
        }
    };
    Pep.prototype.handleMove = function() {
        if (typeof this.moveEvent === "undefined") return;
        var ev = this.normalizeEvent(this.moveEvent);
        var curX = window.parseInt(ev.pep.x / this.options.grid[0]) * this.options.grid[0];
        var curY = window.parseInt(ev.pep.y / this.options.grid[1]) * this.options.grid[1];
        this.addToLIFO({
            time: ev.timeStamp,
            x: curX,
            y: curY
        });
        var dx, dy;
        if ($.inArray(ev.type, this.startTriggerArray) > -1) {
            dx = 0;
            dy = 0;
        } else {
            dx = curX - this.ev.x;
            dy = curY - this.ev.y;
        }
        this.dx = dx;
        this.dy = dy;
        this.ev.x = curX;
        this.ev.y = curY;
        if (dx === 0 && dy === 0) {
            this.log({
                type: "event",
                event: "** stopped **"
            });
            return;
        }
        var initialDx = Math.abs(this.startX - curX);
        var initialDy = Math.abs(this.startY - curY);
        if (!this.started && (initialDx > this.options.startThreshold[0] || initialDy > this.options.startThreshold[1])) {
            this.started = true;
            this.$el.addClass(this.options.startClass);
            this.options.start.call(this, this.startEvent, this);
        }
        this.doMoveTo(dx, dy);
        if (this.options.droppable) {
            this.calculateActiveDropRegions();
        }
        var continueDrag = this.options.drag.call(this, ev, this);
        if (continueDrag === false) {
            this.resetVelocityQueue();
            return;
        }
        this.log({
            type: "event",
            event: ev.type
        });
        this.log({
            type: "event-coords",
            x: this.ev.x,
            y: this.ev.y
        });
        this.log({
            type: "velocity"
        });
    };
    Pep.prototype.doMoveTo = function(dx, dy) {
        var hash = this.handleConstraint(dx, dy);
        var xOp, yOp;
        if (this.options.axis === "auto" && !this.autoAxis) {
            if (Math.abs(dx) > Math.abs(dy)) this.autoAxis = "x"; else if (Math.abs(dx) < Math.abs(dy)) this.autoAxis = "y"; else {
                dy = 0;
                dx = 0;
            }
        }
        if (typeof this.options.moveTo === "function") {
            xOp = dx >= 0 ? "+=" + Math.abs(dx / this.scale) * this.options.multiplier : "-=" + Math.abs(dx / this.scale) * this.options.multiplier;
            yOp = dy >= 0 ? "+=" + Math.abs(dy / this.scale) * this.options.multiplier : "-=" + Math.abs(dy / this.scale) * this.options.multiplier;
            if (this.options.constrainTo) {
                xOp = hash.x !== false ? hash.x : xOp;
                yOp = hash.y !== false ? hash.y : yOp;
            }
            if (this.options.axis === "x" || this.autoAxis === "x") yOp = hash.y;
            if (this.options.axis === "y" || this.autoAxis === "y") xOp = hash.x;
            this.options.moveTo.call(this, xOp, yOp);
        } else if (!this.shouldUseCSSTranslation()) {
            xOp = dx >= 0 ? "+=" + Math.abs(dx / this.scale) * this.options.multiplier : "-=" + Math.abs(dx / this.scale) * this.options.multiplier;
            yOp = dy >= 0 ? "+=" + Math.abs(dy / this.scale) * this.options.multiplier : "-=" + Math.abs(dy / this.scale) * this.options.multiplier;
            if (this.options.constrainTo) {
                xOp = hash.x !== false ? hash.x : xOp;
                yOp = hash.y !== false ? hash.y : yOp;
            }
            if (this.options.axis === "x" || this.autoAxis === "x") yOp = hash.y;
            if (this.options.axis === "y" || this.autoAxis === "y") xOp = hash.x;
            this.moveTo(xOp, yOp);
        } else {
            dx = dx / this.scale * this.options.multiplier;
            dy = dy / this.scale * this.options.multiplier;
            if (this.options.constrainTo) {
                dx = hash.x === false ? dx : 0;
                dy = hash.y === false ? dy : 0;
            }
            if (this.options.axis === "x" || this.autoAxis === "x") dy = 0;
            if (this.options.axis === "y" || this.autoAxis === "y") dx = 0;
            this.moveToUsingTransforms(dx, dy);
        }
    };
    Pep.prototype.handleStop = function(ev) {
        if (!this.active) return;
        this.log({
            type: "event",
            event: ev.type
        });
        this.active = false;
        this.easing = true;
        this.$el.removeClass(this.options.startClass).addClass(this.options.easeClass);
        if (this.options.droppable) {
            this.calculateActiveDropRegions();
        }
        if (this.started || !this.started && $.inArray("stop", this.options.callIfNotStarted) > -1) {
            this.options.stop.call(this, ev, this);
        }
        if (this.options.shouldEase) {
            this.ease(ev, this.started);
        } else {
            this.removeActiveClass();
        }
        if (this.options.revert && (this.options.revertAfter === "stop" || !this.options.shouldEase) && (this.options.revertIf && this.options.revertIf.call(this))) {
            this.revert();
        }
        this.started = false;
        if (this.autoAxis) this.autoAxis = false;
        this.resetVelocityQueue();
    };
    Pep.prototype.ease = function(ev, started) {
        var pos = this.$el.position();
        var vel = this.velocity();
        var dt = this.dt;
        var x = vel.x / this.scale * this.options.multiplier;
        var y = vel.y / this.scale * this.options.multiplier;
        var hash = this.handleConstraint(x, y, true);
        if (this.cssAnimationsSupported()) this.$el.css(this.getCSSEaseHash());
        var xOp = vel.x > 0 ? "+=" + x : "-=" + Math.abs(x);
        var yOp = vel.y > 0 ? "+=" + y : "-=" + Math.abs(y);
        if (this.options.constrainTo) {
            xOp = hash.x !== false ? hash.x : xOp;
            yOp = hash.y !== false ? hash.y : yOp;
        }
        if (this.options.axis === "x" || this.autoAxis === "x") yOp = "+=0";
        if (this.options.axis === "y" || this.autoAxis === "y") xOp = "+=0";
        var jsAnimateFallback = !this.cssAnimationsSupported() || this.options.forceNonCSS3Movement;
        if (typeof this.options.moveTo === "function") {
            this.options.moveTo.call(this, xOp, yOp);
        } else {
            this.moveTo(xOp, yOp, jsAnimateFallback);
        }
        var self = this;
        this.restTimeout = setTimeout(function() {
            if (self.options.droppable) {
                self.calculateActiveDropRegions();
            }
            self.easing = false;
            if (started || !started && $.inArray("rest", self.options.callIfNotStarted) > -1) {
                self.options.rest.call(self, ev, self);
            }
            if (self.options.revert && (self.options.revertAfter === "ease" && self.options.shouldEase) && (self.options.revertIf && self.options.revertIf.call(self))) {
                self.revert();
            }
            self.removeActiveClass();
        }, this.options.cssEaseDuration);
    };
    Pep.prototype.normalizeEvent = function(ev) {
        ev.pep = {};
        if (this.isTouch(ev)) {
            ev.pep.x = ev.originalEvent.touches[0].pageX;
            ev.pep.y = ev.originalEvent.touches[0].pageY;
            ev.pep.type = ev.type;
        } else if (this.isPointerEventCompatible() || !this.isTouch(ev)) {
            if (ev.pageX) {
                ev.pep.x = ev.pageX;
                ev.pep.y = ev.pageY;
            } else {
                ev.pep.x = ev.originalEvent.pageX;
                ev.pep.y = ev.originalEvent.pageY;
            }
            ev.pep.type = ev.type;
        }
        return ev;
    };
    Pep.prototype.resetVelocityQueue = function() {
        this.velocityQueue = new Array(5);
    };
    Pep.prototype.moveTo = function(x, y, animate) {
        this.log({
            type: "delta",
            x: x,
            y: y
        });
        if (animate) {
            this.$el.animate({
                top: y,
                left: x
            }, 0, "easeOutQuad", {
                queue: false
            });
        } else {
            this.$el.stop(true, false).css({
                top: y,
                left: x
            });
        }
    };
    Pep.prototype.moveToUsingTransforms = function(x, y) {
        var matrixArray = this.matrixToArray(this.matrixString());
        if (!this.cssX) this.cssX = this.xTranslation(matrixArray);
        if (!this.cssY) this.cssY = this.yTranslation(matrixArray);
        this.cssX = this.cssX + x;
        this.cssY = this.cssY + y;
        this.log({
            type: "delta",
            x: x,
            y: y
        });
        matrixArray[4] = this.cssX;
        matrixArray[5] = this.cssY;
        this.translation = this.arrayToMatrix(matrixArray);
        this.transform(this.translation);
    };
    Pep.prototype.transform = function(value) {
        this.$el.css({
            "-webkit-transform": value,
            "-moz-transform": value,
            "-ms-transform": value,
            "-o-transform": value,
            transform: value
        });
    };
    Pep.prototype.xTranslation = function(matrixArray) {
        matrixArray = matrixArray || this.matrixToArray(this.matrixString());
        return parseInt(matrixArray[4], 10);
    };
    Pep.prototype.yTranslation = function(matrixArray) {
        matrixArray = matrixArray || this.matrixToArray(this.matrixString());
        return parseInt(matrixArray[5], 10);
    };
    Pep.prototype.matrixString = function() {
        var validMatrix = function(o) {
            return !(!o || o === "none" || o.indexOf("matrix") < 0);
        };
        var matrix = "matrix(1, 0, 0, 1, 0, 0)";
        if (validMatrix(this.$el.css("-webkit-transform"))) matrix = this.$el.css("-webkit-transform");
        if (validMatrix(this.$el.css("-moz-transform"))) matrix = this.$el.css("-moz-transform");
        if (validMatrix(this.$el.css("-ms-transform"))) matrix = this.$el.css("-ms-transform");
        if (validMatrix(this.$el.css("-o-transform"))) matrix = this.$el.css("-o-transform");
        if (validMatrix(this.$el.css("transform"))) matrix = this.$el.css("transform");
        return matrix;
    };
    Pep.prototype.matrixToArray = function(str) {
        return str.split("(")[1].split(")")[0].split(",");
    };
    Pep.prototype.arrayToMatrix = function(array) {
        return "matrix(" + array.join(",") + ")";
    };
    Pep.prototype.addToLIFO = function(val) {
        var arr = this.velocityQueue;
        arr = arr.slice(1, arr.length);
        arr.push(val);
        this.velocityQueue = arr;
    };
    Pep.prototype.velocity = function() {
        var sumX = 0;
        var sumY = 0;
        for (var i = 0; i < this.velocityQueue.length - 1; i++) {
            if (this.velocityQueue[i]) {
                sumX += this.velocityQueue[i + 1].x - this.velocityQueue[i].x;
                sumY += this.velocityQueue[i + 1].y - this.velocityQueue[i].y;
                this.dt = this.velocityQueue[i + 1].time - this.velocityQueue[i].time;
            }
        }
        return {
            x: sumX * this.options.velocityMultiplier,
            y: sumY * this.options.velocityMultiplier
        };
    };
    Pep.prototype.revert = function() {
        if (this.shouldUseCSSTranslation()) {
            this.moveToUsingTransforms(-this.xTranslation(), -this.yTranslation());
        }
        if (this.options.place) {
            this.moveTo(this.initialPosition.left, this.initialPosition.top);
        }
    };
    Pep.prototype.requestAnimationFrame = function(callback) {
        return window.requestAnimationFrame && window.requestAnimationFrame(callback) || window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(callback) || window.mozRequestAnimationFrame && window.mozRequestAnimationFrame(callback) || window.oRequestAnimationFrame && window.mozRequestAnimationFrame(callback) || window.msRequestAnimationFrame && window.msRequestAnimationFrame(callback) || window.setTimeout(callback, 1e3 / 60);
    };
    Pep.prototype.positionParent = function() {
        if (!this.options.constrainTo || this.parentPositioned) return;
        this.parentPositioned = true;
        if (this.options.constrainTo === "parent") {
            this.$container.css({
                position: "relative"
            });
        } else if (this.options.constrainTo === "window" && this.$container.get(0).nodeName !== "#document" && this.$container.css("position") !== "static") {
            this.$container.css({
                position: "static"
            });
        }
    };
    Pep.prototype.placeObject = function() {
        if (this.objectPlaced) return;
        this.objectPlaced = true;
        this.offset = this.options.constrainTo === "parent" || this.hasNonBodyRelative() ? this.$el.position() : this.$el.offset();
        if (parseInt(this.$el.css("left"), 10)) this.offset.left = this.$el.css("left");
        if (typeof this.options.startPos.left === "number") this.offset.left = this.options.startPos.left;
        if (parseInt(this.$el.css("top"), 10)) this.offset.top = this.$el.css("top");
        if (typeof this.options.startPos.top === "number") this.offset.top = this.options.startPos.top;
        if (this.options.removeMargins) this.$el.css({
            margin: 0
        });
        this.$el.css({
            position: "absolute",
            top: this.offset.top,
            left: this.offset.left
        });
    };
    Pep.prototype.hasNonBodyRelative = function() {
        return this.$el.parents().filter(function() {
            var $this = $(this);
            return $this.is("body") || $this.css("position") === "relative";
        }).length > 1;
    };
    Pep.prototype.setScale = function(val) {
        this.scale = val;
    };
    Pep.prototype.setMultiplier = function(val) {
        this.options.multiplier = val;
    };
    Pep.prototype.removeCSSEasing = function() {
        if (this.cssAnimationsSupported()) this.$el.css(this.getCSSEaseHash(true));
    };
    Pep.prototype.disableSelect = function() {
        this.$el.css({
            "-webkit-touch-callout": "none",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none"
        });
    };
    Pep.prototype.removeActiveClass = function() {
        this.$el.removeClass([ this.options.activeClass, this.options.easeClass ].join(" "));
    };
    Pep.prototype.handleConstraint = function(dx, dy, accountForTranslation) {
        var pos = this.$el.position();
        this.pos.x = pos.left;
        this.pos.y = pos.top;
        var hash = {
            x: false,
            y: false
        };
        var upperYLimit, upperXLimit, lowerXLimit, lowerYLimit;
        this.log({
            type: "pos-coords",
            x: this.pos.x,
            y: this.pos.y
        });
        if ($.isArray(this.options.constrainTo)) {
            if (this.options.constrainTo[3] !== undefined && this.options.constrainTo[1] !== undefined) {
                upperXLimit = this.options.constrainTo[1] === false ? Infinity : this.options.constrainTo[1];
                lowerXLimit = this.options.constrainTo[3] === false ? -Infinity : this.options.constrainTo[3];
            }
            if (this.options.constrainTo[0] !== false && this.options.constrainTo[2] !== false) {
                upperYLimit = this.options.constrainTo[2] === false ? Infinity : this.options.constrainTo[2];
                lowerYLimit = this.options.constrainTo[0] === false ? -Infinity : this.options.constrainTo[0];
            }
            if (this.pos.x + dx < lowerXLimit) hash.x = lowerXLimit;
            if (this.pos.y + dy < lowerYLimit) hash.y = lowerYLimit;
        } else if (typeof this.options.constrainTo === "string") {
            lowerXLimit = 0;
            lowerYLimit = 0;
            upperXLimit = this.$container.width() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().width : this.$el.outerWidth());
            upperYLimit = this.$container.height() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().height : this.$el.outerHeight());
            if (this.pos.x + dx < 0) hash.x = 0;
            if (this.pos.y + dy < 0) hash.y = 0;
        }
        if (this.pos.x + dx > upperXLimit) hash.x = upperXLimit;
        if (this.pos.y + dy > upperYLimit) hash.y = upperYLimit;
        if (this.shouldUseCSSTranslation() && accountForTranslation) {
            if (hash.x === lowerXLimit && this.xTranslation()) hash.x = lowerXLimit - this.xTranslation();
            if (hash.x === upperXLimit && this.xTranslation()) hash.x = upperXLimit - this.xTranslation();
            if (hash.y === lowerYLimit && this.yTranslation()) hash.y = lowerYLimit - this.yTranslation();
            if (hash.y === upperYLimit && this.yTranslation()) hash.y = upperYLimit - this.yTranslation();
        }
        return hash;
    };
    Pep.prototype.getCSSEaseHash = function(reset) {
        if (typeof reset === "undefined") reset = false;
        var cssEaseString;
        if (reset) {
            cssEaseString = "";
        } else if (this.CSSEaseHash) {
            return this.CSSEaseHash;
        } else {
            cssEaseString = [ "all", this.options.cssEaseDuration + "ms", this.options.cssEaseString ].join(" ");
        }
        return {
            "-webkit-transition": cssEaseString,
            "-moz-transition": cssEaseString,
            "-ms-transition": cssEaseString,
            "-o-transition": cssEaseString,
            transition: cssEaseString
        };
    };
    Pep.prototype.calculateActiveDropRegions = function() {
        var self = this;
        this.activeDropRegions.length = 0;
        $.each($(this.options.droppable), function(idx, el) {
            var $el = $(el);
            if (self.isOverlapping($el, self.$el)) {
                $el.addClass(self.options.droppableActiveClass);
                self.activeDropRegions.push($el);
            } else {
                $el.removeClass(self.options.droppableActiveClass);
            }
        });
    };
    Pep.prototype.isOverlapping = function($a, $b) {
        if (this.options.overlapFunction) {
            return this.options.overlapFunction($a, $b);
        }
        var rect1 = $a[0].getBoundingClientRect();
        var rect2 = $b[0].getBoundingClientRect();
        return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    };
    Pep.prototype.isTouch = function(ev) {
        return ev.type.search("touch") > -1;
    };
    Pep.prototype.isPointerEventCompatible = function() {
        return "MSPointerEvent" in window;
    };
    Pep.prototype.applyMSDefaults = function(first_argument) {
        this.$el.css({
            "-ms-touch-action": "none",
            "touch-action": "none",
            "-ms-scroll-chaining": "none",
            "-ms-scroll-limit": "0 0 0 0"
        });
    };
    Pep.prototype.isValidMoveEvent = function(ev) {
        return !this.isTouch(ev) || this.isTouch(ev) && ev.originalEvent && ev.originalEvent.touches && ev.originalEvent.touches.length === 1;
    };
    Pep.prototype.shouldUseCSSTranslation = function() {
        if (this.options.forceNonCSS3Movement) return false;
        if (typeof this.useCSSTranslation !== "undefined") return this.useCSSTranslation;
        var useCSSTranslation = false;
        if (!this.options.useCSSTranslation || typeof Modernizr !== "undefined" && !Modernizr.csstransforms) {
            useCSSTranslation = false;
        } else {
            useCSSTranslation = true;
        }
        this.useCSSTranslation = useCSSTranslation;
        return useCSSTranslation;
    };
    Pep.prototype.cssAnimationsSupported = function() {
        if (typeof this.cssAnimationsSupport !== "undefined") {
            return this.cssAnimationsSupport;
        }
        if (typeof Modernizr !== "undefined" && Modernizr.cssanimations) {
            this.cssAnimationsSupport = true;
            return true;
        }
        var animation = false, elm = document.createElement("div"), animationstring = "animation", keyframeprefix = "", domPrefixes = "Webkit Moz O ms Khtml".split(" "), pfx = "";
        if (elm.style.animationName) {
            animation = true;
        }
        if (animation === false) {
            for (var i = 0; i < domPrefixes.length; i++) {
                if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
                    pfx = domPrefixes[i];
                    animationstring = pfx + "Animation";
                    keyframeprefix = "-" + pfx.toLowerCase() + "-";
                    animation = true;
                    break;
                }
            }
        }
        this.cssAnimationsSupport = animation;
        return animation;
    };
    Pep.prototype.hardwareAccelerate = function() {
        this.$el.css({
            "-webkit-perspective": 1e3,
            perspective: 1e3,
            "-webkit-backface-visibility": "hidden",
            "backface-visibility": "hidden"
        });
    };
    Pep.prototype.getMovementValues = function() {
        return {
            ev: this.ev,
            pos: this.pos,
            velocity: this.velocity()
        };
    };
    Pep.prototype.buildDebugDiv = function() {
        var $debugDiv;
        if ($("#pep-debug").length === 0) {
            $debugDiv = $("<div></div>");
            $debugDiv.attr("id", "pep-debug").append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>").append("<div id='pep-debug-event'>no event</div>").append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").css({
                position: "fixed",
                bottom: 5,
                right: 5,
                zIndex: 99999,
                textAlign: "right",
                fontFamily: "Arial, sans",
                fontSize: 10,
                border: "1px solid #DDD",
                padding: "3px",
                background: "white",
                color: "#333"
            });
        }
        var self = this;
        setTimeout(function() {
            self.debugElements = {
                $event: $("#pep-debug-event"),
                $velocityX: $("#pep-debug-velocity .pep-x"),
                $velocityY: $("#pep-debug-velocity .pep-y"),
                $dX: $("#pep-debug-delta .pep-x"),
                $dY: $("#pep-debug-delta .pep-y"),
                $evCoordsX: $("#pep-debug-ev-coords .pep-x"),
                $evCoordsY: $("#pep-debug-ev-coords .pep-y"),
                $posCoordsX: $("#pep-debug-pos-coords .pep-x"),
                $posCoordsY: $("#pep-debug-pos-coords .pep-y")
            };
        }, 0);
        $("body").append($debugDiv);
    };
    Pep.prototype.log = function(opts) {
        if (!this.options.debug) return;
        switch (opts.type) {
          case "event":
            this.debugElements.$event.text(opts.event);
            break;

          case "pos-coords":
            this.debugElements.$posCoordsX.text(opts.x);
            this.debugElements.$posCoordsY.text(opts.y);
            break;

          case "event-coords":
            this.debugElements.$evCoordsX.text(opts.x);
            this.debugElements.$evCoordsY.text(opts.y);
            break;

          case "delta":
            this.debugElements.$dX.text(opts.x);
            this.debugElements.$dY.text(opts.y);
            break;

          case "velocity":
            var vel = this.velocity();
            this.debugElements.$velocityX.text(Math.round(vel.x));
            this.debugElements.$velocityY.text(Math.round(vel.y));
            break;
        }
    };
    Pep.prototype.toggle = function(on) {
        if (typeof on === "undefined") {
            this.disabled = !this.disabled;
        } else {
            this.disabled = !on;
        }
    };
    $.extend($.easing, {
        easeOutQuad: function(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeOutCirc: function(x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeOutExpo: function(x, t, b, c, d) {
            return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    });
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                var pepObj = new Pep(this, options);
                $.data(this, "plugin_" + pluginName, pepObj);
                $.pep.peps.push(pepObj);
            }
        });
    };
    $.pep = {};
    $.pep.peps = [];
    $.pep.toggleAll = function(on) {
        $.each(this.peps, function(index, pepObj) {
            pepObj.toggle(on);
        });
    };
    $.pep.unbind = function($obj) {
        $.each($obj, function(index, pepObj) {
            pepObj = $(pepObj);
            var pep = pepObj.data("plugin_" + pluginName);
            if (typeof pep === "undefined") return;
            pep.toggle(false);
            pep.unsubscribe();
            pepObj.removeData("plugin_" + pluginName);
        });
    };
})(jQuery, window);

(function($) {
    var settings = {
        sort: false,
        "sort-attr": "data-priority",
        "sort-desc": false,
        autoselect: true,
        "alternative-spellings": true,
        "alternative-spellings-attr": "data-alternative-spellings",
        "remove-valueless-options": true,
        "copy-attributes-to-text-field": true,
        "autocomplete-plugin": "jquery_ui",
        "relevancy-sorting": true,
        "relevancy-sorting-partial-match-value": 1,
        "relevancy-sorting-strict-match-value": 5,
        "relevancy-sorting-booster-attr": "data-relevancy-booster",
        minLength: 0,
        delay: 0,
        autoFocus: true,
        handle_invalid_input: function(context) {
            var selected_finder = "option:selected:first";
            if (context.settings["remove-valueless-options"]) {
                selected_finder = 'option:selected[value!=""]:first';
            }
            context.$text_field.val(context.$select_field.find(selected_finder).text());
        },
        handle_select_field: function($select_field) {
            return $select_field.hide();
        },
        insert_text_field: function(context) {
            var $text_field = $('<input type="text" data-initialized="true"></input>');
            if (settings["copy-attributes-to-text-field"]) {
                var attrs = {};
                var raw_attrs = context.$select_field[0].attributes;
                for (var i = 0; i < raw_attrs.length; i++) {
                    var key = raw_attrs[i].nodeName;
                    var value = raw_attrs[i].nodeValue;
                    if (key !== "name" && typeof context.$select_field.attr(key) !== "undefined") {
                        attrs[key] = key === "id" ? value + "-clone" : value;
                    }
                }
                $text_field.attr(attrs);
            }
            $text_field.blur(function() {
                var valid_values = context.$select_field.find("option").map(function(i, option) {
                    return $(option).text();
                });
                if ($.inArray($text_field.val(), valid_values) < 0 && typeof settings["handle_invalid_input"] === "function") {
                    settings["handle_invalid_input"](context);
                }
            });
            if (context.settings["autoselect"]) {
                $text_field.click(function() {
                    this.select();
                });
            }
            var selected_finder = "option:selected:first";
            if (context.settings["remove-valueless-options"]) {
                selected_finder = 'option:selected[value!=""]:first';
            }
            return $text_field.val(context.$select_field.find(selected_finder).text()).insertAfter(context.$select_field);
        },
        extract_options: function($select_field) {
            var options = [];
            var $options = $select_field.find("option");
            var number_of_options = $options.length;
            $options.each(function() {
                var $option = $(this);
                var option = {
                    "real-value": $option.attr("value"),
                    label: $option.text()
                };
                if (settings["remove-valueless-options"] && option["real-value"] === "") {} else {
                    option["matches"] = option["label"];
                    var alternative_spellings = $option.attr(settings["alternative-spellings-attr"]);
                    if (alternative_spellings) {
                        option["matches"] += " " + alternative_spellings;
                    }
                    if (settings["sort"]) {
                        var weight = parseInt($option.attr(settings["sort-attr"]), 10);
                        if (weight) {
                            option["weight"] = weight;
                        } else {
                            option["weight"] = number_of_options;
                        }
                    }
                    if (settings["relevancy-sorting"]) {
                        option["relevancy-score"] = 0;
                        option["relevancy-score-booster"] = 1;
                        var boost_by = parseFloat($option.attr(settings["relevancy-sorting-booster-attr"]));
                        if (boost_by) {
                            option["relevancy-score-booster"] = boost_by;
                        }
                    }
                    options.push(option);
                }
            });
            if (settings["sort"]) {
                if (settings["sort-desc"]) {
                    options.sort(function(a, b) {
                        return b["weight"] - a["weight"];
                    });
                } else {
                    options.sort(function(a, b) {
                        return a["weight"] - b["weight"];
                    });
                }
            }
            return options;
        }
    };
    var public_methods = {
        init: function(customizations) {
            if (/msie/.test(navigator.userAgent.toLowerCase()) && parseInt(navigator.appVersion, 10) <= 6) {
                return this;
            } else {
                settings = $.extend(settings, customizations);
                return this.each(function() {
                    var $select_field = $(this);
                    if (!$select_field.attr("data-initialized")) {
                        var context = {
                            $select_field: $select_field,
                            options: settings["extract_options"]($select_field),
                            settings: settings
                        };
                        context["$text_field"] = settings["insert_text_field"](context);
                        settings["handle_select_field"]($select_field);
                        if (typeof settings["autocomplete-plugin"] === "string") {
                            adapters[settings["autocomplete-plugin"]](context);
                        } else {
                            settings["autocomplete-plugin"](context);
                        }
                        $select_field.attr("data-initialized", true);
                    }
                });
            }
        }
    };
    var adapters = {
        jquery_ui: function(context) {
            var filter_options = function(term) {
                var split_term = term.split(" ");
                var matchers = [];
                for (var i = 0; i < split_term.length; i++) {
                    if (split_term[i].length > 0) {
                        var matcher = {};
                        matcher["partial"] = new RegExp($.ui.autocomplete.escapeRegex(split_term[i]), "i");
                        if (context.settings["relevancy-sorting"]) {
                            matcher["strict"] = new RegExp("^" + $.ui.autocomplete.escapeRegex(split_term[i]), "i");
                        }
                        matchers.push(matcher);
                    }
                }
                return $.grep(context.options, function(option) {
                    var partial_matches = 0;
                    if (context.settings["relevancy-sorting"]) {
                        var strict_match = false;
                        var split_option_matches = option.matches.split(" ");
                    }
                    for (var i = 0; i < matchers.length; i++) {
                        if (matchers[i]["partial"].test(option.matches)) {
                            partial_matches++;
                        }
                        if (context.settings["relevancy-sorting"]) {
                            for (var q = 0; q < split_option_matches.length; q++) {
                                if (matchers[i]["strict"].test(split_option_matches[q])) {
                                    strict_match = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (context.settings["relevancy-sorting"]) {
                        var option_score = 0;
                        option_score += partial_matches * context.settings["relevancy-sorting-partial-match-value"];
                        if (strict_match) {
                            option_score += context.settings["relevancy-sorting-strict-match-value"];
                        }
                        option_score = option_score * option["relevancy-score-booster"];
                        option["relevancy-score"] = option_score;
                    }
                    return !term || matchers.length === partial_matches;
                });
            };
            var update_select_value = function(option) {
                if (option) {
                    if (context.$select_field.val() !== option["real-value"]) {
                        context.$select_field.val(option["real-value"]);
                        context.$select_field.change();
                    }
                } else {
                    var option_name = context.$text_field.val().toLowerCase();
                    var matching_option = {
                        "real-value": false
                    };
                    for (var i = 0; i < context.options.length; i++) {
                        if (option_name === context.options[i]["label"].toLowerCase()) {
                            matching_option = context.options[i];
                            break;
                        }
                    }
                    if (context.$select_field.val() !== matching_option["real-value"]) {
                        context.$select_field.val(matching_option["real-value"] || "");
                        context.$select_field.change();
                    }
                    if (matching_option["real-value"]) {
                        context.$text_field.val(matching_option["label"]);
                    }
                    if (typeof context.settings["handle_invalid_input"] === "function" && context.$select_field.val() === "") {
                        context.settings["handle_invalid_input"](context);
                    }
                }
            };
            context.$text_field.autocomplete({
                minLength: context.settings["minLength"],
                delay: context.settings["delay"],
                autoFocus: context.settings["autoFocus"],
                source: function(request, response) {
                    var filtered_options = filter_options(request.term);
                    if (context.settings["relevancy-sorting"]) {
                        filtered_options = filtered_options.sort(function(a, b) {
                            if (b["relevancy-score"] == a["relevancy-score"]) {
                                return b["label"] < a["label"] ? 1 : -1;
                            } else {
                                return b["relevancy-score"] - a["relevancy-score"];
                            }
                        });
                    }
                    response(filtered_options);
                },
                select: function(event, ui) {
                    update_select_value(ui.item);
                },
                change: function(event, ui) {
                    update_select_value(ui.item);
                }
            });
            context.$text_field.parents("form:first").submit(function() {
                update_select_value();
            });
            update_select_value();
        }
    };
    $.fn.selectToAutocomplete = function(method) {
        if (public_methods[method]) {
            return public_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return public_methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.fn.selectToAutocomplete");
        }
    };
})(jQuery);

var offCanvas = function() {
    var $html = $("html");
    var $body = $("body");
    var $canvasWrap = $(".canvas-wrap");
    var $offCanvas = $(".off-canvas");
    function _closeCanvas() {
        if ($body.hasClass("in")) {
            $(".off-canvas").removeClass("out");
            $body.removeClass("in").css({
                position: "relative"
            }).addClass("out");
            $html.removeClass("in").css({
                position: "relative"
            }).addClass("out");
            $canvasWrap.hide();
            setTimeout(function() {
                $body.removeClass("out left right");
                $html.removeClass("out left right");
            }, 50);
        }
    }
    function _toggleNavbar() {
        var $this = $(this);
        var $canvasTarget = $($this.attr("data-target"));
        var dataSide = $this.attr("data-side");
        $canvasWrap.addClass(dataSide);
        if ($canvasTarget.hasClass("out")) {
            _closeCanvas();
        } else {
            $offCanvas.removeClass("out");
            $body.addClass("in").css("position", "fixed").removeClass("left right").addClass(dataSide);
            $html.addClass("in").removeClass("left right").addClass(dataSide);
            $canvasTarget.addClass("out");
            $canvasWrap.show().css("height", "100%");
        }
    }
    function toggleNavbarOnBodyClick(e) {
        var $this = $(this);
        var hcanvas;
        var lcanvas;
        if ($("#off-canvas-left-mob:visible").length > 0) {
            hcanvas = $("#off-canvas-left-mob").outerWidth();
        } else {
            hcanvas = $("#off-canvas-menuLeft").outerWidth();
        }
        if ($("#off-canvas-right-mob:visible").length > 0) {
            lcanvas = $("#off-canvas-right-mob").outerWidth();
        } else {
            lcanvas = $("#off-canvas-right").outerWidth();
        }
        if ($this.hasClass("in") && $this.hasClass("left")) {
            if (e.pageX > hcanvas) {
                $('.navbar-toggle:visible[data-side="left"]').trigger("click");
            }
        }
        if ($this.hasClass("in") && $this.hasClass("right")) {
            var margen = parseInt($(window).width(), 10) - lcanvas;
            if (e.pageX < margen) {
                $('.navbar-toggle:visible[data-side="right"]').trigger("click");
            }
        }
    }
    function init() {
        $body.on("click touchend", toggleNavbarOnBodyClick);
        $("button.navbar-toggle").on("click", _toggleNavbar);
        $(".canvas-wrap").click("click touchend", _closeCanvas);
        $('.off-canvas [data-toggle="close"]').click("click touchend", _closeCanvas);
    }
    return {
        init: init
    };
}();

$(function() {
    offCanvas.init();
});

function allowGoPrevMonth(selectedMonth, selectedYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var allowed = false;
    if (selectedYear > currentYear) {
        allowed = true;
    } else if (selectedYear === currentYear && selectedMonth >= currentMonth) {
        allowed = true;
    }
    return allowed;
}

function disablePrevMonthButton(month, year, prevButton) {
    var enableButton;
    var previousMonth = month - 1;
    var selectedYear = year;
    if (previousMonth < 0) {
        selectedYear = year - 1;
        previousMonth = 11;
    } else {
        previousMonth = month - 1;
    }
    enableButton = allowGoPrevMonth(previousMonth, selectedYear);
    prevButton.toggleClass("disabled", !enableButton);
}

function resetRanges(cal) {
    cal.find(".range-start").removeClass("range-start");
    cal.find(".range-end").removeClass("range-end");
    cal.find(".range-in").removeClass("range-in");
}

function batchPaintRange(cal) {
    resetRanges(cal);
    if (cal.attr("data-range-start") && cal.attr("data-range-start") != "" && cal.attr("data-range-end") && cal.attr("data-range-end") != "") {
        var rangeStart = parseInt(cal.attr("data-range-start"));
        var rangeEnd = parseInt(cal.attr("data-range-end"));
        var dateStart = moment(rangeStart);
        var dateEnd = moment(rangeEnd);
        cal.find('[data-day="' + dateStart.date() + '"][data-month="' + (dateStart.month() + 1) + '"][data-year="' + dateStart.year() + '"]').addClass("range-start");
        cal.find("[data-day=" + dateEnd.date() + "][data-month=" + (dateEnd.month() + 1) + "][data-year=" + dateEnd.year() + "]").addClass("range-end");
        while (!dateStart.isAfter(dateEnd)) {
            var currentDay = cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]");
            if (!currentDay.hasClass("range-start") && !currentDay.hasClass("range-end")) {
                currentDay.addClass("range-in");
            }
            dateStart.add(1, "day");
        }
    } else {
        if (cal.attr("data-range-start") && cal.attr("data-range-start") != "") {
            var rangeStart = parseInt(cal.attr("data-range-start"));
            var dateStart = moment(rangeStart);
            cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]").addClass("range-start");
        } else {
            var rangeEnd = parseInt(cal.attr("data-range-end"));
            var dateEnd = moment(rangeEnd);
            cal.find("[data-day=" + dateEnd.date() + "][data-month=" + (dateEnd.month() + 1) + "][data-year=" + dateEnd.year() + "]").addClass("range-end");
        }
    }
}

function applyCurrentDay() {
    var now = new Date();
    $("[data-day=" + parseInt(now.getDate()) + "][data-month=" + parseInt(now.getMonth() + 1) + "][data-year=" + now.getFullYear() + "]").addClass("currentDay");
}

function shadowDays() {
    var diasMes = $(".myDay");
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    month++;
    var year = now.getFullYear();
    var hoy = new Date(year, month - 1, day);
    var one_day = 1e3 * 60 * 60 * 24;
    for (var i = 0; i < diasMes.length; i++) {
        var diaSel = parseInt($(diasMes[i]).attr("data-day"), 10);
        var mesSel = parseInt($(diasMes[i]).attr("data-month"), 10);
        var anioSel = parseInt($(diasMes[i]).attr("data-year"), 10);
        var myDay = new Date(anioSel, mesSel - 1, diaSel);
        var diferencia = Math.floor((myDay.getTime() - hoy.getTime()) / one_day);
        if (diferencia < 0) {
            $(diasMes[i]).addClass("shadow");
            $(diasMes[i]).attr("onclick", "");
        }
    }
}

function isValidDay(obj) {
    var valid = false;
    if (!obj.parent(".day").hasClass("past") && !obj.hasClass("disabled-date")) {
        valid = true;
    }
    return valid;
}

function rangeSelectDay(obj) {
    var dateInput = obj.closest(".responsive-calendar-wrap").attr("data-date-input");
    var dateInputStart = obj.closest(".responsive-calendar").attr("data-date-input-from");
    var dateInputEnd = obj.closest(".responsive-calendar").attr("data-date-input-to");
    var rangeType = obj.closest(".responsive-calendar-wrap").attr("data-range-type");
    var curCalendar = obj.closest(".responsive-calendar-wrap");
    var curCalendarIn = $($(obj.closest(".responsive-calendar").attr("data-date-input-from")).attr("data-calendar"));
    var curCalendarOut = $($(obj.closest(".responsive-calendar").attr("data-date-input-to")).attr("data-calendar"));
    var minDays = obj.closest(".responsive-calendar").attr("data-min-nights") || 1;
    var maxDays = obj.closest(".responsive-calendar").attr("data-max-nights") || 99;
    var errNights = obj.closest(".responsive-calendar").attr("data-error-nights");
    var errBlacks = obj.closest(".responsive-calendar").attr("data-error-blackout");
    var initRange = obj.closest(".responsive-calendar").attr("data-first-valid-date");
    var endRange = obj.closest(".responsive-calendar").attr("data-last-valid-date");
    if (initRange && endRange) {
        initRange = initRange.split("/");
        endRange = endRange.split("/");
        var objInitRange = moment({
            year: parseInt(initRange[2]),
            month: parseInt(initRange[1]) - 1,
            day: parseInt(initRange[0])
        });
        var objEndRange = moment({
            year: parseInt(endRange[2]),
            month: parseInt(endRange[1]) - 1,
            day: parseInt(endRange[0])
        });
        var rangeNights = objEndRange.diff(objInitRange, "days");
        if (rangeNights < minDays) {
            minDays = rangeNights;
        }
    }
    var gDay = obj.attr("data-day");
    var gMonth = obj.attr("data-month");
    var gYear = obj.attr("data-year");
    var selectedDate = fillZeros(gDay, 2, "left") + "/" + fillZeros(gMonth, 2, "left") + "/" + gYear;
    var currentDate = moment({
        year: gYear,
        month: gMonth - 1,
        day: gDay
    });
    var todayDate = moment();
    var numDays = 0;
    var newDate;
    curCalendar.find(".selected-day").removeClass("selected-day");
    if (rangeType == "start") {
        if (curCalendar.attr("data-range-end") && curCalendar.attr("data-range-end") != "") {
            var currentEnd = moment(parseInt(curCalendar.attr("data-range-end")));
            if (!validateBlackOuts(currentDate, currentEnd)) {
                $("#error-modal").modal();
                return false;
            }
            numDays = currentEnd.diff(currentDate, "days");
            if (numDays > parseInt(maxDays, 10)) {
                $("#error-modal").modal();
                return false;
            }
            if (currentDate.isAfter(currentEnd)) {
                if (initRange && endRange) {
                    currentDate.add(minDays, "day");
                    if (!currentDate.isAfter(objEndRange)) {
                        currentDate.subtract(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", currentDate);
                        curCalendarOut.attr("data-range-start", currentDate);
                        currentDate.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", currentDate);
                        curCalendarOut.attr("data-range-end", currentDate);
                    }
                } else {
                    updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                    curCalendarIn.attr("data-range-start", currentDate);
                    curCalendarOut.attr("data-range-start", currentDate);
                    currentDate.add(minDays, "day");
                    updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                    curCalendarIn.attr("data-range-end", currentDate);
                    curCalendarOut.attr("data-range-end", currentDate);
                }
            } else {
                if (initRange && endRange) {
                    currentDate.add(minDays, "day");
                    if (currentDate.isAfter(objEndRange)) {
                        updateDate(curCalendarIn, curCalendarOut, objEndRange, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", objEndRange);
                        curCalendarOut.attr("data-range-end", objEndRange);
                        objEndRange.subtract(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, objEndRange, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", objEndRange);
                        curCalendarOut.attr("data-range-start", objEndRange);
                    } else {
                        currentDate.subtract(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", currentDate);
                        curCalendarOut.attr("data-range-start", currentDate);
                        numDays = currentEnd.diff(currentDate, "days");
                        if (numDays < minDays) {
                            currentDate.add(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentDate);
                            curCalendarOut.attr("data-range-end", currentDate);
                        }
                    }
                } else {
                    updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                    curCalendarIn.attr("data-range-start", currentDate);
                    curCalendarOut.attr("data-range-start", currentDate);
                    if (numDays < minDays) {
                        currentDate.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", currentDate);
                        curCalendarOut.attr("data-range-end", currentDate);
                    }
                }
            }
        } else {
            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
            curCalendarIn.attr("data-range-start", currentDate);
            curCalendarOut.attr("data-range-start", currentDate);
            currentDate.add(minDays, "day");
            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
            curCalendarIn.attr("data-range-end", currentDate);
            curCalendarOut.attr("data-range-end", currentDate);
        }
    } else {
        if (curCalendar.attr("data-range-start") && curCalendar.attr("data-range-start") != "") {
            var currentStart = moment(parseInt(curCalendar.attr("data-range-start")));
            numDays = currentDate.diff(currentStart, "days");
            if (!validateBlackOuts(currentStart, currentDate)) {
                $("#error-modal").modal();
                return false;
            }
            if (numDays > parseInt(maxDays, 10)) {
                $("#error-modal").modal();
                return false;
            }
            if (currentDate.isBefore(currentStart)) {
                currentDate.subtract(minDays, "day");
                if (initRange && endRange) {
                    todayDate = objInitRange;
                }
                if (currentDate.isBefore(todayDate)) {
                    updateDate(curCalendarIn, curCalendarOut, todayDate, "range-start", dateInputStart);
                    curCalendarIn.attr("data-range-start", todayDate);
                    curCalendarOut.attr("data-range-start", todayDate);
                    todayDate.add(minDays, "day");
                    updateDate(curCalendarIn, curCalendarOut, todayDate, "range-end", dateInputEnd);
                    curCalendarIn.attr("data-range-end", todayDate);
                    curCalendarOut.attr("data-range-end", todayDate);
                } else {
                    currentDate.add(minDays, "day");
                    updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                    curCalendarIn.attr("data-range-end", currentDate);
                    curCalendarOut.attr("data-range-end", currentDate);
                    currentDate.subtract(minDays, "day");
                    updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                    curCalendarIn.attr("data-range-start", currentDate);
                    curCalendarOut.attr("data-range-start", currentDate);
                }
            } else {
                if (initRange && endRange) {
                    currentDate.subtract(minDays, "day");
                    if (currentDate.isBefore(objInitRange)) {
                        updateDate(curCalendarIn, curCalendarOut, objInitRange, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", objInitRange);
                        curCalendarOut.attr("data-range-start", objInitRange);
                        objInitRange.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, objInitRange, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", objInitRange);
                        curCalendarOut.attr("data-range-end", objInitRange);
                    } else {
                        currentDate.add(minDays, "day");
                        if (numDays >= minDays) {
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentDate);
                            curCalendarOut.attr("data-range-end", currentDate);
                        } else {
                            currentStart.add(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentStart, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentStart);
                            curCalendarOut.attr("data-range-end", currentStart);
                        }
                    }
                } else {
                    if (numDays >= minDays) {
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", currentDate);
                        curCalendarOut.attr("data-range-end", currentDate);
                    } else {
                        currentStart.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentStart, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", currentStart);
                        curCalendarOut.attr("data-range-end", currentStart);
                    }
                }
            }
        } else {
            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
            curCalendarIn.attr("data-range-end", currentDate);
            curCalendarOut.attr("data-range-end", currentDate);
            var curEndDate = moment(parseInt(curCalendar.attr("data-range-end")));
            $(curCalendarIn).find(".responsive-calendar").responsiveCalendar(curEndDate.format("YYYY-MM"));
        }
    }
    paintRange(curCalendarIn);
    paintRange(curCalendarOut);
    obj.closest(".responsive-calendar-wrap").removeClass("active");
}

function validateBlackOuts(date1, date2) {
    var blacks = getBlackOuts();
    for (i = 0; i < blacks.length; i++) {
        var ab = blacks[i].split("-");
        var black = moment(blacks[i]);
        if (moment(blacks[i]).isBetween(date1, date2)) {
            return false;
        }
    }
    return true;
}

function paintBlackOuts() {
    var blacks = getBlackOuts();
    for (i = 0; i < blacks.length; i++) {
        var ab = blacks[i].split("-");
        var month = ab[1];
        $("[data-day=" + ab[2] + "][data-month=" + month + "][data-year=" + ab[0] + "]").parent().removeClass("future");
        $("[data-day=" + ab[2] + "][data-month=" + month + "][data-year=" + ab[0] + "]").parent().addClass("past");
    }
}

function getBlackOuts() {
    if (typeof dateString != "undefined") {
        var aDates = dateString.split("*");
    } else {
        var aDates = "";
    }
    return aDates;
}

function updateDate(calIn, calOut, currentDate, newClass, dateInput) {
    var day = currentDate.date();
    var month = currentDate.month() + 1;
    var year = currentDate.year();
    var inputYear = year.toString();
    calIn.find("[data-day=" + day + "][data-month=" + month + "][data-year=" + year + "]").addClass(newClass);
    calOut.find("[data-day=" + day + "][data-month=" + month + "][data-year=" + year + "]").addClass(newClass);
    if ($(dateInput).attr("data-short-year")) {
        inputYear = inputYear.substring(2, 4);
    }
    $(dateInput).val(fillZeros(day.toString(), 2, "left") + "/" + fillZeros(month.toString(), 2, "left") + "/" + inputYear).change();
}

function paintRange(cal) {
    resetRanges(cal);
    if (cal.attr("data-range-start") && cal.attr("data-range-start") != "" && cal.attr("data-range-end") && cal.attr("data-range-end") != "") {
        var rangeStart = parseInt(cal.attr("data-range-start"));
        var rangeEnd = parseInt(cal.attr("data-range-end"));
        var dateStart = moment(rangeStart);
        var dateEnd = moment(rangeEnd);
        cal.find('[data-day="' + dateStart.date() + '"][data-month="' + (dateStart.month() + 1) + '"][data-year="' + dateStart.year() + '"]').addClass("range-start");
        cal.find("[data-day=" + dateEnd.date() + "][data-month=" + (dateEnd.month() + 1) + "][data-year=" + dateEnd.year() + "]").addClass("range-end");
        while (!dateStart.isAfter(dateEnd)) {
            var currentDay = cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]");
            if (!currentDay.hasClass("range-start") && !currentDay.hasClass("range-end")) {
                currentDay.addClass("range-in");
            }
            dateStart.add(1, "day");
        }
    } else {
        if (cal.attr("data-range-start") && cal.attr("data-range-start") !== "") {
            var rangeStart = parseInt(cal.attr("data-range-start"));
            var dateStart = moment(rangeStart);
            cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]").addClass("range-start");
        } else {
            var rangeEnd = parseInt(cal.attr("data-range-end"));
            var dateEnd = moment(rangeEnd);
            cal.find("[data-day=" + dateEnd.date() + "][data-month=" + (dateEnd.month() + 1) + "][data-year=" + dateEnd.year() + "]").addClass("range-end");
        }
    }
}

function muestraDias(elemento) {
    $(".currentDay").removeClass("currentDay");
    var one_day = 1e3 * 60 * 60 * 24;
    var meses = new Array("None", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var aDias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
    var idPadre = $(elemento).parent().parent().attr("id");
    if (idPadre == "diasIda") {
        $(".myDay").attr("style", "");
        $("#hideSal").show();
        $("#diaLlegada").val($(elemento).attr("data-day"));
        $("#mesLlegada").val($(elemento).attr("data-month"));
        $("#mesLlegadav").val(meses[$(elemento).attr("data-month")]);
        $("#anioLlegada").val($(elemento).attr("data-year"));
        var diaSet = parseInt($("#diaLlegada").val(), 10);
        var mesSet = parseInt($("#mesLlegada").val(), 10);
        var anoSet = parseInt($("#anioLlegada").val(), 10);
        var iFechaSet = new Date(anoSet, mesSet - 1, diaSet);
        var fechaSet = new Date(anoSet, mesSet - 1, diaSet + 1);
        var fechaSetDays = fechaSet.getTime();
        fechaSetDays = fechaSetDays + one_day;
        var firstDay = iFechaSet.getDay();
        var lastDay = fechaSet.getDay();
        $("#nameDiaLlegada").val(aDias[firstDay]);
        $("#nameDiaSalida").val(aDias[lastDay]);
        $("#diaSalida").val(parseInt(fechaSet.getDate()));
        $("#mesSalida").val(parseInt(fechaSet.getMonth() + 1));
        $("#mesSalidav").val(meses[parseInt(fechaSet.getMonth() + 1)]);
        $("#anioSalida").val(fechaSet.getFullYear());
        paintRange();
        $("[data-day=" + $(elemento).attr("data-day") + "][data-month=" + $(elemento).attr("data-month") + "][data-year=" + $(elemento).attr("data-year") + "]");
        $("[data-day=" + parseInt(fechaSet.getDate()) + "][data-month=" + parseInt(fechaSet.getMonth() + 1) + "][data-year=" + fechaSet.getFullYear() + "]");
        $("#nNoches").html("1");
    } else {
        $(".myDay").attr("style", "");
        $("#diaSalida").val($(elemento).attr("data-day"));
        $("#mesSalida").val($(elemento).attr("data-month"));
        $("#mesSalidav").val(meses[$(elemento).attr("data-month")]);
        $("#anioSalida").val($(elemento).attr("data-year"));
        var diaIni = parseInt($("#diaLlegada").val(), 10);
        var mesIni = parseInt($("#mesLlegada").val(), 10);
        var anoIni = parseInt($("#anioLlegada").val(), 10);
        var diaFin = parseInt($("#diaSalida").val(), 10);
        var mesFin = parseInt($("#mesSalida").val(), 10);
        var anoFin = parseInt($("#anioSalida").val(), 10);
        var inicialb = new Date(anoIni, mesIni - 1, diaIni);
        var inicialf = new Date(anoIni, mesIni - 1, diaIni);
        var finalf = new Date(anoFin, mesFin - 1, diaFin);
        var diasSum = parseInt(1, 10);
        var diferencia = Math.floor((finalf.getTime() - inicialf.getTime()) / one_day);
        $("#nNoches").html(diferencia);
        if (diferencia <= 0) {
            $("#nNoches").html("1");
            $(".myDay").attr("style", "");
            $("#diaSalida").val($("#diaLlegada").val());
            $("#mesSalida").val($("#mesLlegada").val());
            $("#anioSalida").val($("#anioLlegada").val());
            $("[data-day=" + parseInt(inicialb.getDate()) + "][data-month=" + parseInt(inicialb.getMonth() + 1) + "][data-year=" + inicialb.getFullYear() + "]").attr("style", "background-color:#002a92; color:#fff;");
            var solveDate = new Date(anoFin, mesFin - 1, parseInt(diaFin, 10) + 1);
            var firstDay = inicialb.getDay();
            var lastDay = solveDate.getDay();
            $("#nameDiaLlegada").val(aDias[firstDay]);
            $("#nameDiaSalida").val(aDias[lastDay]);
            alert("La fecha de salida debe ser mayor a la de llegada.");
            $("[data-day=" + parseInt(solveDate.getDate()) + "][data-month=" + parseInt(solveDate.getMonth() + 1) + "][data-year=" + solveDate.getFullYear() + "]").attr("style", "background-color:#002a92; color:#fff;");
            $("#diaSalida").val(parseInt(solveDate.getDate()));
            $("#mesSalida").val(parseInt(solveDate.getMonth() + 1));
            $("#mesSalidav").val(meses[parseInt(solveDate.getMonth() + 1)]);
            $("#anioSalida").val($(elemento).attr(solveDate.getFullYear()));
            var diaFin = parseInt($("#diaSalida").val(), 10);
            var mesFin = parseInt($("#mesSalida").val(), 10);
            var anoFin = parseInt($("#anioSalida").val(), 10);
            return false;
        }
        while (diferencia > -1) {
            var trueMonth = inicialf.getMonth() + 1;
            $("[data-day=" + inicialf.getDate() + "][data-month=" + trueMonth + "][data-year=" + inicialf.getFullYear() + "]").attr("style", "background-color:#e9efff;");
            inicialf.setDate(inicialf.getDate() + 1);
            diferencia--;
        }
        var firstDay = inicialb.getDay();
        var lastDay = finalf.getDay();
        $("#nameDiaLlegada").val(aDias[firstDay]);
        $("#nameDiaSalida").val(aDias[lastDay]);
        $("[data-day=" + parseInt(inicialb.getDate()) + "][data-month=" + parseInt(inicialb.getMonth() + 1) + "][data-year=" + inicialb.getFullYear() + "]").attr("style", "background-color:#002a92; color:#fff;");
        $("[data-day=" + parseInt(finalf.getDate()) + "][data-month=" + parseInt(finalf.getMonth() + 1) + "][data-year=" + finalf.getFullYear() + "]").attr("style", "background-color:#002a92; color:#fff;");
    }
}

(function() {
    (function($) {
        "use strict";
        var Calendar, opts, spy;
        Calendar = function(element, options) {
            var time;
            this.$element = element;
            this.options = options;
            this.weekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun" ];
            this.time = new Date();
            this.currentYear = this.time.getYear();
            this.currentMonth = this.time.getMonth();
            this.prevButton = this.$element.find(".go-prev-month");
            if (this.options.time) {
                time = this.splitDateString(this.options.time);
                this.currentYear = time.year;
                this.currentMonth = time.month;
            }
            this.initialDraw();
            return null;
        };
        Calendar.prototype = {
            addLeadingZero: function(num) {
                if (num < 10) {
                    return "0" + num;
                } else {
                    return "" + num;
                }
            },
            applyTransition: function($el, transition) {
                $el.css("transition", transition);
                $el.css("-ms-transition", "-ms-" + transition);
                $el.css("-moz-transition", "-moz-" + transition);
                return $el.css("-webkit-transition", "-webkit-" + transition);
            },
            applyBackfaceVisibility: function($el) {
                $el.css("backface-visibility", "hidden");
                $el.css("-ms-backface-visibility", "hidden");
                $el.css("-moz-backface-visibility", "hidden");
                return $el.css("-webkit-backface-visibility", "hidden");
            },
            applyTransform: function($el, transform) {
                $el.css("transform", transform);
                $el.css("-ms-transform", transform);
                $el.css("-moz-transform", transform);
                return $el.css("-webkit-transform", transform);
            },
            splitDateString: function(dateString) {
                var day, month, time, year;
                time = dateString.split("-");
                year = parseInt(time[0]);
                month = parseInt(time[1] - 1);
                day = parseInt(time[2]);
                return time = {
                    year: year,
                    month: month,
                    day: day
                };
            },
            initialDraw: function() {
                disablePrevMonthButton(this.currentMonth, this.currentYear, this.prevButton);
                return this.drawDays(this.currentYear, this.currentMonth);
            },
            editDays: function(events) {
                var dateString, day, dayEvents, time, _results;
                _results = [];
                for (dateString in events) {
                    dayEvents = events[dateString];
                    this.options.events[dateString] = events[dateString];
                    time = this.splitDateString(dateString);
                    day = this.$element.find('[data-year="' + time.year + '"][data-month="' + (time.month + 1) + '"][data-day="' + time.day + '"]').parent(".day");
                    day.removeClass("active");
                    day.find(".badge").remove();
                    day.find("a").removeAttr("href");
                    if (this.currentMonth === time.month || this.options.activateNonCurrentMonths) {
                        _results.push(this.makeActive(day, dayEvents));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            },
            clearDays: function(days) {
                var dateString, day, time, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = days.length; _i < _len; _i++) {
                    dateString = days[_i];
                    delete this.options.events[dateString];
                    time = this.splitDateString(dateString);
                    day = this.$element.find('[data-year="' + time.year + '"][data-month="' + (time.month + 1) + '"][data-day="' + time.day + '"]').parent(".day");
                    day.removeClass("active");
                    day.find(".badge").remove();
                    _results.push(day.find("a").removeAttr("href"));
                }
                return _results;
            },
            clearAll: function() {
                var day, days, i, _i, _len, _results;
                this.options.events = {};
                days = this.$element.find('[data-group="days"] .day');
                _results = [];
                for (i = _i = 0, _len = days.length; _i < _len; i = ++_i) {
                    day = days[i];
                    $(day).removeClass("active");
                    $(day).find(".badge").remove();
                    _results.push($(day).find("a").removeAttr("href"));
                }
                return _results;
            },
            setMonth: function(dateString) {
                var time;
                time = this.splitDateString(dateString);
                return this.currentMonth = this.drawDays(time.year, time.month);
            },
            prev: function() {
                var selectedMonth, selectedYear;
                if (this.currentMonth - 1 < 0) {
                    selectedYear = this.currentYear - 1;
                    selectedMonth = 11;
                } else {
                    selectedMonth = this.currentMonth - 1;
                    selectedYear = this.currentYear;
                }
                if (allowGoPrevMonth(selectedMonth, selectedYear)) {
                    this.currentYear = selectedYear;
                    this.currentMonth = selectedMonth;
                    disablePrevMonthButton(this.currentMonth, this.currentYear, this.prevButton);
                    this.drawDays(this.currentYear, this.currentMonth);
                }
                return null;
            },
            next: function() {
                if (this.currentMonth + 1 > 11) {
                    this.currentYear = this.currentYear + 1;
                    this.currentMonth = 0;
                } else {
                    this.currentMonth = this.currentMonth + 1;
                }
                disablePrevMonthButton(this.currentMonth, this.currentYear, this.prevButton);
                this.drawDays(this.currentYear, this.currentMonth);
                return null;
            },
            setNewDate: function(myDate) {
                var aDate = myDate.split("-");
                this.currentYear = parseInt(aDate[1], 10);
                this.currentMonth = parseInt(aDate[0], 10) - 1;
                this.drawDays(this.currentYear, this.currentMonth);
                if (this.options.onMonthChange) {
                    this.options.onMonthChange.call(this);
                }
                return null;
            },
            getCurrentDate: function() {
                var visualMonth = this.currentMonth + 1;
                var sDate = visualMonth + "-" + this.currentYear;
                return sDate;
            },
            addOthers: function(day, dayEvents) {
                if (typeof dayEvents === "object") {
                    if (dayEvents.number != null && dayEvents.badgeClass != null) {
                        day.append($("<span></span>").html(dayEvents.number).addClass("badge").addClass(dayEvents.badgeClass));
                    }
                    if (dayEvents.url) {
                        day.find("a").attr("href", dayEvents.url);
                    }
                }
                return day;
            },
            makeActive: function(day, dayEvents) {
                var classes, eventClass, i, _i, _len;
                if (dayEvents) {
                    if (dayEvents["class"]) {
                        classes = dayEvents["class"].split(" ");
                        for (i = _i = 0, _len = classes.length; _i < _len; i = ++_i) {
                            eventClass = classes[i];
                            day.addClass(eventClass);
                        }
                    } else {
                        day.addClass("active");
                    }
                    day = this.addOthers(day, dayEvents);
                }
                return day;
            },
            getDaysInMonth: function(year, month) {
                return new Date(year, month + 1, 0).getDate();
            },
            drawDay: function(lastDayOfMonth, yearNum, monthNum, dayNum, i) {
                var calcDate, dateNow, dateString, day, dayDate, pastFutureClass;
                day = $("<div></div>").addClass("day");
                dateNow = new Date();
                dateNow.setHours(0, 0, 0, 0);
                dayDate = new Date(yearNum, monthNum - 1, dayNum);
                if (dayDate.getTime() < dateNow.getTime()) {
                    pastFutureClass = "past";
                } else if (dayDate.getTime() === dateNow.getTime()) {
                    pastFutureClass = "today";
                } else {
                    pastFutureClass = "future";
                }
                day.addClass(this.weekDays[i % 7]);
                day.addClass(pastFutureClass);
                dateString = yearNum + "-" + this.addLeadingZero(monthNum) + "-" + this.addLeadingZero(dayNum);
                if (dayNum <= 0 || dayNum > lastDayOfMonth) {
                    calcDate = new Date(yearNum, monthNum - 1, dayNum);
                    dayNum = calcDate.getDate();
                    monthNum = calcDate.getMonth() + 1;
                    yearNum = calcDate.getFullYear();
                    day.addClass("not-current").addClass(pastFutureClass);
                    if (this.options.activateNonCurrentMonths) {
                        dateString = yearNum + "-" + this.addLeadingZero(monthNum) + "-" + this.addLeadingZero(dayNum);
                    }
                }
                day.append($("<a class='myDay'>" + dayNum + "</a>").attr("data-day", dayNum).attr("data-month", monthNum).attr("data-year", yearNum));
                this.applyTransform(day, "rotateY(0deg)");
                this.applyBackfaceVisibility(day);
                day = this.makeActive(day, this.options.events[dateString]);
                return this.$element.find('[data-group="days"]').append(day);
            },
            drawDays: function(year, month) {
                var currentMonth, day, dayBase, days, delay, draw, firstDayOfMonth, i, lastDayOfMonth, loopBase, monthNum, multiplier, thisRef, time, timeout, yearNum, _i, _len;
                thisRef = this;
                time = new Date(year, month);
                currentMonth = time.getMonth();
                monthNum = time.getMonth() + 1;
                yearNum = time.getFullYear();
                time.setDate(1);
                firstDayOfMonth = this.options.startFromSunday ? time.getDay() + 1 : time.getDay() || 7;
                lastDayOfMonth = this.getDaysInMonth(year, month);
                if (this.options.monthChangeAnimation) {
                    timeout = 0;
                    days = this.$element.find('[data-group="days"] .day');
                    for (i = _i = 0, _len = days.length; _i < _len; i = ++_i) {
                        day = days[i];
                        delay = i * .01;
                        this.applyTransition($(day), "transform .5s ease " + delay + "s");
                        this.applyTransform($(day), "rotateY(0deg)");
                        this.applyBackfaceVisibility($(day));
                        timeout = (delay + .1) * 1e3;
                    }
                }
                dayBase = 2;
                if (this.options.allRows) {
                    loopBase = 42;
                } else {
                    multiplier = Math.ceil((firstDayOfMonth - (dayBase - 1) + lastDayOfMonth) / 7);
                    loopBase = multiplier * 7;
                }
                this.$element.find(".timeInfo").html(time.getFullYear() + " " + this.options.translateMonths[time.getMonth()]);
                draw = function() {
                    var dayNum;
                    thisRef.$element.find('[data-group="days"]').empty();
                    dayNum = dayBase - firstDayOfMonth;
                    i = thisRef.options.startFromSunday ? 0 : 1;
                    while (dayNum < loopBase - firstDayOfMonth + dayBase) {
                        thisRef.drawDay(lastDayOfMonth, yearNum, monthNum, dayNum, i);
                        dayNum = dayNum + 1;
                        i = i + 1;
                    }
                    paintRange(thisRef.$element);
                    delay = function() {
                        var _j, _len1;
                        days = thisRef.$element.find('[data-group="days"] .day');
                        for (i = _j = 0, _len1 = days.length; _j < _len1; i = ++_j) {
                            day = days[i];
                            thisRef.applyTransition($(day), "transform .5s ease " + i * .01 + "s");
                            thisRef.applyTransform($(day), "rotateY(0deg)");
                        }
                        if (thisRef.options.onDayClick) {
                            thisRef.$element.find('[data-group="days"] .day a').click(function() {
                                return thisRef.options.onDayClick.call(this, thisRef.options.events);
                            });
                        }
                        if (thisRef.options.onDayHover) {
                            thisRef.$element.find('[data-group="days"] .day a').hover(function() {
                                return thisRef.options.onDayHover.call(this, thisRef.options.events);
                            });
                        }
                        if (thisRef.options.onActiveDayClick) {
                            thisRef.$element.find('[data-group="days"] .day.active a').click(function() {
                                return thisRef.options.onActiveDayClick.call(this, thisRef.options.events);
                            });
                        }
                        if (thisRef.options.onActiveDayHover) {
                            return thisRef.$element.find('[data-group="days"] .day.active a').hover(function() {
                                return thisRef.options.onActiveDayHover.call(this, thisRef.options.events);
                            });
                        }
                        shadowDays();
                    };
                    return setTimeout(delay, 0);
                };
                setTimeout(draw, timeout);
                return currentMonth;
            }
        };
        $.fn.responsiveCalendar = function(option, params) {
            var init, options, publicFunc;
            if (params == null) {
                params = void 0;
            }
            options = $.extend({}, $.fn.responsiveCalendar.defaults, typeof option === "object" && option);
            publicFunc = {
                next: "next",
                prev: "prev",
                edit: "editDays",
                clear: "clearDays",
                clearAll: "clearAll",
                setNewDate: "setNewDate",
                getCurrentDate: "getCurrentDate"
            };
            init = function($this) {
                var data;
                options = $.metadata ? $.extend({}, options, $this.metadata()) : options;
                $this.data("calendar", data = new Calendar($this, options));
                if (options.onInit) {
                    options.onInit.call(this);
                }
                return $this.find("[data-go]").click(function() {
                    if ($(this).data("go") === "prev") {
                        data.prev();
                    }
                    if ($(this).data("go") === "next") {
                        data.next();
                    }
                    if (options.onMonthChange) {
                        return options.onMonthChange.call(this);
                    }
                });
            };
            return this.each(function() {
                var $this, data;
                $this = $(this);
                data = $this.data("calendar");
                if (!data) {
                    init($this);
                } else if (typeof option === "string") {
                    if (publicFunc[option] != null) {
                        data[publicFunc[option]](params);
                    } else {
                        data.setMonth(option);
                    }
                } else if (typeof option === "number") {
                    data.jump(Math.abs(option) + 1);
                }
                return null;
            });
        };
        $.fn.responsiveCalendar.defaults = {
            translateMonths: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            events: {},
            time: void 0,
            allRows: true,
            startFromSunday: false,
            activateNonCurrentMonths: false,
            monthChangeAnimation: false,
            onInit: void 0,
            onDayClick: void 0,
            onDayHover: void 0,
            onActiveDayClick: void 0,
            onActiveDayHover: void 0,
            onMonthChange: void 0
        };
        spy = $('[data-spy="responsive-calendar"]');
        if (spy.length) {
            opts = {};
            if (spy.data("translate-months") != null) {
                opts.translateMonths = spy.data("translate-months").split(",");
            }
            if (spy.data("time") != null) {
                opts.time = spy.data("time");
            }
            if (spy.data("all-rows") != null) {
                opts.allRows = spy.data("all-rows");
            }
            if (spy.data("start-from-sunday") != null) {
                opts.startFromSunday = spy.data("start-from-sunday");
            }
            if (spy.data("activate-non-current-months") != null) {
                opts.activateNonCurrentMonths = spy.data("activate-non-current-months");
            }
            if (spy.data("month-change-animation") != null) {
                opts.monthChangeAnimation = spy.data("month-change-animation");
            }
            return spy.responsiveCalendar(opts);
        }
    })(jQuery);
    $(document).on("mouseup touchend", function(e) {
        $(".js-close-blur").each(function(index) {
            var container = $(this);
            var linked = $($(this).attr("data-linked-element"));
            if (!container.is(e.target) && container.has(e.target).length === 0 && !linked.is(e.target) && linked.has(e.target).length === 0) {
                if (container.is(":visible")) {
                    linked.trigger("blur");
                    container.removeClass("active");
                }
            }
        });
    });
}).call(this);

$(function() {
    function isMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            return true;
        }
    }
    var weekDays = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
    if ($(".responsive-calendar").length) {
        $.each($(".responsive-calendar"), function() {
            var $curCalendar = $(this);
            var dateInput = $($curCalendar.attr("data-date-input"));
            if (!dateInput.hasClass("prevent-mobile") || dateInput.hasClass("prevent-mobile") && !isMobile()) {
                var calType = $curCalendar.attr("data-calendar-type");
                var rangeType = $($curCalendar.closest(".responsive-calendar-wrap").attr("data-linked-element")).attr("data-range-type");
                var now = new Date();
                var tday = now.getDate();
                var tmonth = now.getMonth() + 1;
                var tyear = now.getFullYear();
                var strFormt = tyear + "-" + tmonth;
                var x = "";
                var monthsDefaults = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                var firstValidDate;
                var firstWeeklyDay;
                if (dateInput.length) {
                    dateInput.attr("type", "text").prop("readonly", true);
                }
                if ($(this).data("translate-months") != null) {
                    var monthsArray = $(this).data("translate-months").split(",");
                }
                if ($curCalendar.attr("data-first-valid-date") && calType == "range") {
                    firstValidDate = $curCalendar.attr("data-first-valid-date").split("/");
                    firstWeeklyDay = $curCalendar.attr("data-first-weekly-day");
                    if (!firstValidDate && firstWeeklyDay) {
                        firstValidDate = setFirstWeekAvailableDay(firstWeeklyDay, moment().format("DD/MM/YYYY"));
                    } else if (firstValidDate && firstWeeklyDay) {
                        firstValidDate = setFirstWeekAvailableDay(firstWeeklyDay, firstValidDate).split("/");
                    }
                    if (strFormt < parseInt(firstValidDate[2]) + "-" + parseInt(firstValidDate[1])) {
                        strFormt = parseInt(firstValidDate[2]) + "-" + parseInt(firstValidDate[1]);
                    }
                }
                $curCalendar.responsiveCalendar({
                    time: strFormt,
                    translateMonths: typeof monthsArray !== "undefined" ? monthsArray : monthsArray,
                    allRows: false,
                    onDayClick: function(events) {
                        var $dayClicked = $(this);
                        if (isValidDay($dayClicked)) {
                            switch (calType) {
                              case "simple":
                                simpleSelectDay($dayClicked);
                                break;

                              case "multiselect":
                                multiSelectDay($dayClicked);
                                break;

                              case "range":
                                rangeSelectDay($dayClicked);
                                break;

                              default:
                                simpleSelectDay($dayClicked);
                            }
                        }
                    },
                    onInit: function() {
                        if (rangeType == "end") {
                            setTimeout(function() {
                                $curCalendar.find(".today").addClass("past");
                            }, 50);
                        }
                    }
                });
            }
        });
    }
    $(".responsive-calendar[data-calendar-type='range'] .go-prev-month").click(function() {
        var curCalendar = $(this).closest(".responsive-calendar-wrap");
        var self = $(this);
        setTimeout(function() {
            if (curCalendar.attr("data-range-end") && curCalendar.attr("data-range-end") != "" && curCalendar.attr("data-range-start") && curCalendar.attr("data-range-start") != "") {
                paintRange(curCalendar);
            }
            disableDates("#" + self.closest(".responsive-calendar-wrap").attr("id"));
            paintBlackOuts();
        });
    });
    $(".responsive-calendar[data-calendar-type='range'] .go-next-month").click(function(e) {
        e.preventDefault();
        var curCalendar = $(this).closest(".responsive-calendar-wrap");
        var self = $(this);
        setTimeout(function() {
            if (curCalendar.attr("data-range-end") && curCalendar.attr("data-range-end") != "" && curCalendar.attr("data-range-start") && curCalendar.attr("data-range-start") != "") {
                paintRange(curCalendar);
            }
            disableDates("#" + self.closest(".responsive-calendar-wrap").attr("id"));
            paintBlackOuts();
        });
    });
    function simpleSelectDay(obj) {
        var dateInput = obj.closest(".responsive-calendar[data-calendar-type='simple']").attr("data-date-input");
        var gDay = fillZeros(obj.attr("data-day"), 2, "left");
        var gMonth = fillZeros(obj.attr("data-month"), 2, "left");
        var gYear = obj.attr("data-year");
        var selectedDateText = gDay + "/" + gMonth + "/" + gYear;
        var selectedDate = gYear + "-" + gMonth + "-" + gDay;
        obj.closest(".responsive-calendar-wrap").find(".selected-day").removeClass("selected-day");
        obj.addClass("selected-day");
        if ($(dateInput).is("input[type='date']")) {
            $(dateInput).val(selectedDate).change();
        } else {
            $(dateInput).val(selectedDateText).change();
        }
        obj.closest(".responsive-calendar-wrap").removeClass("active");
    }
    function multiSelectDay(obj) {
        var dateInput = obj.closest(".responsive-calendar[data-calendar-type='multiselect']").attr("data-date-input");
        var selectedDates = $(dateInput).val().split(", ");
        var gDay = fillZeros(obj.attr("data-day"), 2, "left");
        var gMonth = fillZeros(obj.attr("data-month"), 2, "left");
        var gYear = obj.attr("data-year");
        var selectedDate = gDay + "/" + gMonth + "/" + gYear;
        if (obj.hasClass("selected-day")) {
            obj.removeClass("selected-day");
            if (selectedDates.length == 1) {
                $(dateInput).val("").change();
            } else {
                $.each(selectedDates, function(key, value) {
                    if (value == selectedDate) {
                        selectedDates.splice(key, 1);
                        newValue = selectedDates.join(", ");
                    }
                });
            }
        } else {
            obj.addClass("selected-day");
            if ($(dateInput).val() == "") {
                var newValue = selectedDate;
            } else {
                var newValue = $(dateInput).val() + ", " + selectedDate;
            }
        }
        $(dateInput).val(newValue).change();
    }
    function rangeSelectDay(obj) {
        var dateInput = obj.closest(".responsive-calendar-wrap").attr("data-date-input");
        var dateInputStart = obj.closest(".responsive-calendar").attr("data-date-input-from");
        var dateInputEnd = obj.closest(".responsive-calendar").attr("data-date-input-to");
        var rangeType = obj.closest(".responsive-calendar-wrap").attr("data-range-type");
        var curCalendar = obj.closest(".responsive-calendar-wrap");
        var curCalendarIn = $($(obj.closest(".responsive-calendar").attr("data-date-input-from")).attr("data-calendar"));
        var curCalendarOut = $($(obj.closest(".responsive-calendar").attr("data-date-input-to")).attr("data-calendar"));
        var dateMonthEnd = curCalendarOut.attr("data-range-start", currentDate) ? moment(parseInt(curCalendarOut.attr("data-range-start", currentDate))).month() - 1 : null;
        var minDays = obj.closest(".responsive-calendar").attr("data-min-nights") || 1;
        var maxDays = obj.closest(".responsive-calendar").attr("data-max-nights") || 99;
        var errNights = obj.closest(".responsive-calendar").attr("data-error-nights");
        var errBlacks = obj.closest(".responsive-calendar").attr("data-error-blackout");
        var endDate = curCalendarOut.attr("data-range-end");
        var endDateMonth = null;
        var endDateYear = null;
        var initRange = obj.closest(".responsive-calendar").attr("data-first-valid-date");
        var endRange = obj.closest(".responsive-calendar").attr("data-last-valid-date");
        var firstWeeklyDay = obj.closest(".responsive-calendar").attr("data-first-weekly-day");
        if (!initRange && firstWeeklyDay) {
            initRange = setFirstWeekAvailableDay(firstWeeklyDay, moment().format("DD/MM/YYYY"));
        } else if (initRange && firstWeeklyDay) {
            initRange = setFirstWeekAvailableDay(firstWeeklyDay, initRange);
        }
        if (initRange && endRange) {
            initRange = initRange ? initRange.split("/") : "";
            endRange = endRange ? endRange.split("/") : "";
            var objInitRange = moment({
                year: parseInt(initRange[2]),
                month: parseInt(initRange[1]) - 1,
                day: parseInt(initRange[0])
            });
            var objEndRange = moment({
                year: parseInt(endRange[2]),
                month: parseInt(endRange[1]) - 1,
                day: parseInt(endRange[0])
            });
            var rangeNights = objEndRange.diff(objInitRange, "days");
            if (rangeNights < minDays) {
                minDays = rangeNights;
            }
        }
        var gDay = obj.attr("data-day");
        var gMonth = obj.attr("data-month");
        var gYear = obj.attr("data-year");
        var selectedDate = fillZeros(gDay, 2, "left") + "/" + fillZeros(gMonth, 2, "left") + "/" + gYear;
        var currentDate = moment({
            year: gYear,
            month: gMonth - 1,
            day: gDay
        });
        var todayDate = moment();
        var numDays = 0;
        var newDate;
        curCalendar.find(".selected-day").removeClass("selected-day");
        if (rangeType == "start") {
            if (curCalendar.attr("data-range-end") && curCalendar.attr("data-range-end") != "") {
                var currentEnd = moment(parseInt(curCalendar.attr("data-range-end")));
                endDateMonth = currentEnd.month() + 1;
                endDateYear = currentEnd.year();
                if (!validateBlackOuts(currentDate, currentEnd)) {
                    $("#error-modal").modal();
                    return false;
                }
                numDays = currentEnd.diff(currentDate, "days");
                if (numDays > parseInt(maxDays, 10)) {
                    $("#error-modal").modal();
                    return false;
                }
                if (currentDate.isAfter(currentEnd)) {
                    if (initRange && endRange) {
                        currentDate.add(minDays, "day");
                        if (!currentDate.isAfter(objEndRange)) {
                            currentDate.subtract(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                            curCalendarIn.attr("data-range-start", currentDate);
                            curCalendarOut.attr("data-range-start", currentDate);
                            currentDate.add(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentDate);
                            curCalendarOut.attr("data-range-end", currentDate);
                        }
                    } else {
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", currentDate);
                        curCalendarOut.attr("data-range-start", currentDate);
                        currentDate.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", currentDate);
                        curCalendarOut.attr("data-range-end", currentDate);
                    }
                } else {
                    if (initRange && endRange) {
                        currentDate.add(minDays, "day");
                        if (currentDate.isAfter(objEndRange)) {
                            updateDate(curCalendarIn, curCalendarOut, objEndRange, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", objEndRange);
                            curCalendarOut.attr("data-range-end", objEndRange);
                            objEndRange.subtract(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, objEndRange, "range-start", dateInputStart);
                            curCalendarIn.attr("data-range-start", objEndRange);
                            curCalendarOut.attr("data-range-start", objEndRange);
                        } else {
                            currentDate.subtract(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                            curCalendarIn.attr("data-range-start", currentDate);
                            curCalendarOut.attr("data-range-start", currentDate);
                            numDays = currentEnd.diff(currentDate, "days");
                            if (numDays < minDays) {
                                currentDate.add(minDays, "day");
                                updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                                curCalendarIn.attr("data-range-end", currentDate);
                                curCalendarOut.attr("data-range-end", currentDate);
                            }
                        }
                    } else {
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", currentDate);
                        curCalendarOut.attr("data-range-start", currentDate);
                        if (numDays < minDays) {
                            currentDate.add(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentDate);
                            curCalendarOut.attr("data-range-end", currentDate);
                        }
                    }
                }
            } else {
                updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                curCalendarIn.attr("data-range-start", currentDate);
                curCalendarOut.attr("data-range-start", currentDate);
                currentDate.add(minDays, "day");
                updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                curCalendarIn.attr("data-range-end", currentDate);
                curCalendarOut.attr("data-range-end", currentDate);
            }
            var fechaIni = moment(parseInt(curCalendarOut.attr("data-range-start")));
            var fechaFin = moment(parseInt(curCalendarOut.attr("data-range-end")));
            if (endDateMonth) {
                if (endDateMonth !== fechaFin.month() + 1 || endDateYear !== fechaFin.year()) {
                    curCalendarOut.find(".responsive-calendar").responsiveCalendar(fechaFin.format("YYYY-MM"));
                }
            } else if (!endDateMonth) {
                if (endDateMonth !== moment().month() + 1 || endDateYear !== moment().year()) {
                    curCalendarOut.find(".responsive-calendar").responsiveCalendar(fechaFin.format("YYYY-MM"));
                }
            }
            setTimeout(function() {
                curCalendarOut.find("[data-day=" + fechaIni.date() + "][data-month=" + (fechaIni.month() + 1) + "][data-year=" + fechaIni.year() + "]").addClass("range-start");
                curCalendarOut.find("[data-day=" + fechaFin.date() + "][data-month=" + (fechaFin.month() + 1) + "][data-year=" + fechaFin.year() + "]").addClass("range-end");
            }, 100);
        } else {
            if (curCalendar.attr("data-range-start") && curCalendar.attr("data-range-start") != "") {
                var currentStart = moment(parseInt(curCalendar.attr("data-range-start")));
                numDays = currentDate.diff(currentStart, "days");
                if (!validateBlackOuts(currentStart, currentDate)) {
                    $("#error-modal").modal();
                    return false;
                }
                if (numDays > parseInt(maxDays, 10)) {
                    $("#error-modal").modal();
                    return false;
                }
                if (currentDate.isBefore(currentStart)) {
                    currentDate.subtract(minDays, "day");
                    if (initRange && endRange) {
                        todayDate = objInitRange;
                    }
                    if (currentDate.isBefore(todayDate)) {
                        updateDate(curCalendarIn, curCalendarOut, todayDate, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", todayDate);
                        curCalendarOut.attr("data-range-start", todayDate);
                        todayDate.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, todayDate, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", todayDate);
                        curCalendarOut.attr("data-range-end", todayDate);
                    } else {
                        currentDate.add(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                        curCalendarIn.attr("data-range-end", currentDate);
                        curCalendarOut.attr("data-range-end", currentDate);
                        currentDate.subtract(minDays, "day");
                        updateDate(curCalendarIn, curCalendarOut, currentDate, "range-start", dateInputStart);
                        curCalendarIn.attr("data-range-start", currentDate);
                        curCalendarOut.attr("data-range-start", currentDate);
                    }
                } else {
                    if (initRange && endRange) {
                        currentDate.subtract(minDays, "day");
                        if (currentDate.isBefore(objInitRange)) {
                            updateDate(curCalendarIn, curCalendarOut, objInitRange, "range-start", dateInputStart);
                            curCalendarIn.attr("data-range-start", objInitRange);
                            curCalendarOut.attr("data-range-start", objInitRange);
                            objInitRange.add(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, objInitRange, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", objInitRange);
                            curCalendarOut.attr("data-range-end", objInitRange);
                        } else {
                            currentDate.add(minDays, "day");
                            if (numDays >= minDays) {
                                updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                                curCalendarIn.attr("data-range-end", currentDate);
                                curCalendarOut.attr("data-range-end", currentDate);
                            } else {
                                currentStart.add(minDays, "day");
                                updateDate(curCalendarIn, curCalendarOut, currentStart, "range-end", dateInputEnd);
                                curCalendarIn.attr("data-range-end", currentStart);
                                curCalendarOut.attr("data-range-end", currentStart);
                            }
                        }
                    } else {
                        if (numDays >= minDays) {
                            updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentDate);
                            curCalendarOut.attr("data-range-end", currentDate);
                        } else {
                            currentStart.add(minDays, "day");
                            updateDate(curCalendarIn, curCalendarOut, currentStart, "range-end", dateInputEnd);
                            curCalendarIn.attr("data-range-end", currentStart);
                            curCalendarOut.attr("data-range-end", currentStart);
                        }
                    }
                }
            } else {
                updateDate(curCalendarIn, curCalendarOut, currentDate, "range-end", dateInputEnd);
                curCalendarIn.attr("data-range-end", currentDate);
                curCalendarOut.attr("data-range-end", currentDate);
                var curEndDate = moment(parseInt(curCalendar.attr("data-range-end")));
                $(curCalendarIn).find(".responsive-calendar").responsiveCalendar(curEndDate.format("YYYY-MM"));
            }
        }
        paintRange(curCalendarIn);
        paintRange(curCalendarOut);
        obj.closest(".responsive-calendar-wrap").removeClass("active");
    }
    $(".js-date-select").on("focus", function(e) {
        if (!$(this).hasClass("prevent-mobile") || $(this).hasClass("prevent-mobile") && !isMobile()) {
            var calendar = $(this).attr("data-calendar");
            var rangeType = $(this).attr("data-range-type");
            calendarPosition(calendar, $(this));
            $(".responsive-calendar-wrap.active").removeClass("active");
            if ($(calendar).find(".responsive-calendar").attr("data-calendar-type") == "range") {
                $(calendar).attr("data-range-type", $(this).attr("data-range-type"));
                disableDates(calendar);
                paintBlackOuts();
            }
            $(calendar).addClass("active").attr("data-date-input", "#" + $(this).attr("id"));
        }
    });
    function disableDates(calendar) {
        var initRange = $(calendar).find(".responsive-calendar").attr("data-first-valid-date");
        var endRange = $(calendar).find(".responsive-calendar").attr("data-last-valid-date");
        var firstWeeklyDay = $(calendar).find(".responsive-calendar").attr("data-last-valid-date");
        firstWeeklyDay = $(calendar).find(".responsive-calendar").attr("data-first-weekly-day");
        if (!initRange && firstWeeklyDay) {
            initRange = setFirstWeekAvailableDay(firstWeeklyDay, moment().format("DD/MM/YYYY"));
        } else if (initRange && firstWeeklyDay) {
            initRange = setFirstWeekAvailableDay(firstWeeklyDay, initRange);
        }
        if (initRange || endRange) {
            initRange = initRange ? initRange.split("/") : "";
            endRange = endRange ? endRange.split("/") : "";
            var objInitRange = moment({
                year: parseInt(initRange[2]),
                month: parseInt(initRange[1]) - 1,
                day: parseInt(initRange[0])
            });
            var objEndRange = moment({
                year: parseInt(endRange[2]),
                month: parseInt(endRange[1]) - 1,
                day: parseInt(endRange[0])
            });
            var objCurDate = "";
            $.each($(calendar).find(".days").find(".day"), function(index) {
                var self = $(this).find(".myDay");
                objCurDate = moment({
                    year: parseInt(self.attr("data-year")),
                    month: parseInt(self.attr("data-month")) - 1,
                    day: parseInt(self.attr("data-day"))
                });
                if (objCurDate.isBefore(objInitRange) || objCurDate.isAfter(objEndRange)) {
                    $(this).addClass("past").removeClass("future").removeClass("today");
                }
            });
        }
    }
    function setFirstWeekAvailableDay(firstWeeklyDay, date) {
        var dateMoment = moment(date, "DD/MM/YYYY");
        var firstWeeklyDayNumber = weekDays.indexOf(firstWeeklyDay);
        if (firstWeeklyDayNumber > dateMoment.day()) {
            dateMoment.day(firstWeeklyDayNumber);
        } else if (firstWeeklyDayNumber < dateMoment.day()) {
            dateMoment.day(firstWeeklyDayNumber + 7);
        }
        return dateMoment.format("DD/MM/YYYY");
    }
    function isValidDay(obj) {
        var valid = false;
        if (!obj.parent(".day").hasClass("past") && !obj.hasClass("disabled-date")) {
            valid = true;
        }
        return valid;
    }
    $(".js-close-calendar").on("click", function(e) {
        $(this).closest(".responsive-calendar-wrap").removeClass("active");
    });
    function calendarPosition(calendar, dateInput) {
        var relativeY = dateInput.offset().top - dateInput.closest(".form-group").offset().top;
        var topPosition = dateInput.outerHeight() + relativeY - 1;
        topPosition = topPosition + "px";
        if ($(calendar).find(".responsive-calendar").attr("data-fit-to-input")) {
            $(calendar).closest(".responsive-calendar-wrap").css("top", topPosition).css("width", dateInput.closest(".form-group").outerWidth());
        }
        if ($(calendar).find(".responsive-calendar").attr("data-fit-to-range-input")) {
            var inputPadding = dateInput.closest('[class^="col-"]').css("padding-left");
            inputPadding = parseInt(inputPadding.replace("px", ""));
            var posRight = inputPadding;
            if (dateInput.closest(".form-group").hasClass("js-input-wrapper")) {
                inputPadding = 0;
            }
            if (dateInput.attr("data-range-type") == "start") {
                $(calendar).closest(".responsive-calendar-wrap").css("top", topPosition).css("width", dateInput.closest(".form-group").outerWidth() * 2 + inputPadding * 2);
            } else {
                if (dateInput.attr("data-range-type") == "end") {
                    $(calendar).closest(".responsive-calendar-wrap").css("top", topPosition).css("width", dateInput.closest(".form-group").outerWidth() * 2 + inputPadding * 2).css("right", posRight + "px");
                }
            }
        }
        $(calendar).closest(".responsive-calendar-wrap").css("top", topPosition);
    }
    $(window).resize(function() {
        var activeCal = $(".responsive-calendar-wrap.active");
        var inputReference = activeCal.attr("data-date-input");
        if (activeCal.length) {
            calendarPosition("#" + activeCal.attr("id"), $(inputReference));
        }
    });
    function updateDate(calIn, calOut, currentDate, newClass, dateInput) {
        var day = currentDate.date();
        var month = currentDate.month() + 1;
        var year = currentDate.year();
        var inputYear = year.toString();
        calIn.find("[data-day=" + day + "][data-month=" + month + "][data-year=" + year + "]").addClass(newClass);
        calOut.find("[data-day=" + day + "][data-month=" + month + "][data-year=" + year + "]").addClass(newClass);
        if ($(dateInput).attr("data-short-year")) {
            inputYear = inputYear.substring(2, 4);
        }
        $(dateInput).val(fillZeros(day.toString(), 2, "left") + "/" + fillZeros(month.toString(), 2, "left") + "/" + inputYear).change();
    }
    function resetRanges(cal) {
        cal.find(".range-start").removeClass("range-start");
        cal.find(".range-end").removeClass("range-end");
        cal.find(".range-in").removeClass("range-in");
    }
    function paintRange(cal) {
        resetRanges(cal);
        if (cal.attr("data-range-start") && cal.attr("data-range-start") != "" && cal.attr("data-range-end") && cal.attr("data-range-end") != "") {
            var rangeStart = parseInt(cal.attr("data-range-start"));
            var rangeEnd = parseInt(cal.attr("data-range-end"));
            var dateStart = moment(rangeStart);
            var dateEnd = moment(rangeEnd);
            cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]").addClass("range-start");
            cal.find("[data-day=" + dateEnd.date() + "][data-month=" + (dateEnd.month() + 1) + "][data-year=" + dateEnd.year() + "]").addClass("range-end");
            while (!dateStart.isAfter(dateEnd)) {
                var currentDay = cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]");
                if (!currentDay.hasClass("range-start") && !currentDay.hasClass("range-end")) {
                    currentDay.addClass("range-in");
                }
                dateStart.add(1, "day");
            }
        } else {
            if (cal.attr("data-range-start") && cal.attr("data-range-start") != "") {
                var rangeStart = parseInt(cal.attr("data-range-start"));
                var dateStart = moment(rangeStart);
                cal.find("[data-day=" + dateStart.date() + "][data-month=" + (dateStart.month() + 1) + "][data-year=" + dateStart.year() + "]").addClass("range-start");
            } else {
                var rangeEnd = parseInt(cal.attr("data-range-end"));
                var dateEnd = moment(rangeEnd);
                cal.find("[data-day=" + dateEnd.date() + "][data-month=" + (dateEnd.month() + 1) + "][data-year=" + dateEnd.year() + "]").addClass("range-end");
            }
        }
    }
    function fillZeros(val, len, dir) {
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
    function paintBlackOuts() {
        var blacks = getBlackOuts();
        for (i = 0; i < blacks.length; i++) {
            var ab = blacks[i].split("-");
            var month = ab[1];
            $("[data-day=" + ab[2] + "][data-month=" + month + "][data-year=" + ab[0] + "]").parent().removeClass("future");
            $("[data-day=" + ab[2] + "][data-month=" + month + "][data-year=" + ab[0] + "]").parent().addClass("past");
        }
    }
    function getBlackOuts() {
        if (typeof dateString != "undefined") {
            var aDates = dateString.split("*");
        } else {
            var aDates = "";
        }
        return aDates;
    }
    function validateBlackOuts(date1, date2) {
        var blacks = getBlackOuts();
        for (i = 0; i < blacks.length; i++) {
            var ab = blacks[i].split("-");
            var black = moment(blacks[i]);
            if (moment(blacks[i]).isBetween(date1, date2)) {
                return false;
            }
        }
        return true;
    }
});

$.widget("nh.selectorDatepicker", {
    options: {
        format: "DD/MM/YYYY",
        initYear: "1920",
        monthTranslations: monthsArray,
        invalidDateMessage: Labels.lblInvalidDate
    },
    _create: function() {
        this.daySelector = this.element.find("select.js-day-selector");
        this.monthSelector = this.element.find("select.js-month-selector");
        this.yearSelector = this.element.find("select.js-year-selector");
        this.daySelectorWrapper = this.element.find("div.js-day-selector");
        this.monthSelectorWrapper = this.element.find("div.js-month-selector");
        this.yearSelectorWrapper = this.element.find("div.js-year-selector");
        this.invalidDateBlock = this.element.find(".js-selector-datepicker-invalid-date");
        if (this.element.hasClass("widget-initialized")) {
            return;
        }
        this._on(this.daySelector, {
            change: this._onDateChange
        });
        this._on(this.monthSelector, {
            change: this._onDateChange
        });
        this._on(this.yearSelector, {
            change: this._onDateChange
        });
        this._on(this.daySelectorWrapper, {
            click: this._onDateTouch
        });
        this._on(this.monthSelectorWrapper, {
            click: this._onDateTouch
        });
        this._on(this.yearSelectorWrapper, {
            click: this._onDateTouch
        });
        this._initDays();
        this._initYears();
        this._initMonth();
        this._initInvalidDateBlock();
        this._addClass("widget-initialized");
    },
    _initDays: function() {
        for (var i = 0; i < 31; i++) {
            var value = i + 1;
            var option = '<option role="option" value="' + value + '">' + value + "</option>";
            this.daySelector.append(option);
        }
        if (this.daySelector.hasClass("selectpicker")) {
            this.daySelector.selectpicker("refresh");
        }
    },
    _initMonth: function() {
        for (var i = 0; i < 12; i++) {
            var value = i;
            var monthTranslation = this.options.monthTranslations[i];
            var option = '<option role="option" value="' + value + '">' + monthTranslation + "</option>";
            this.monthSelector.append(option);
        }
        if (this.monthSelector.hasClass("selectpicker")) {
            this.monthSelector.selectpicker("refresh");
        }
    },
    _initYears: function() {
        var numberOfYears = new Date().getFullYear() - this.options.initYear;
        for (var i = numberOfYears; i >= 0; i--) {
            var value = parseInt(this.options.initYear) + i;
            var option = '<option role="option" value="' + value + '">' + value + "</option>";
            this.yearSelector.append(option);
        }
        if (this.yearSelector.hasClass("selectpicker")) {
            this.yearSelector.selectpicker("refresh");
        }
    },
    _initInvalidDateBlock: function() {
        this._toggleInvalidDate(false);
        var invalidMessage = '<ul role="alert"><li>' + this.options.invalidDateMessage + "</li></ul>";
        this.invalidDateBlock.append(invalidMessage);
    },
    _onDateChange: function(e) {
        var formattedDate = this.getDate();
        this._trigger("change", e, {
            value: formattedDate
        });
        this._toggleInvalidDate(!this.checkIsValidDate());
    },
    _isDateTouched: function() {
        return this.daySelectorWrapper.data("touched") === true && this.monthSelectorWrapper.data("touched") === true && this.yearSelectorWrapper.data("touched") === true;
    },
    _isFieldsFilled: function() {
        return this.daySelector.val() !== "" && this.monthSelector.val() !== "" && this.yearSelector.val() !== "";
    },
    _onDateTouch: function(e) {
        var $selector = $(e.currentTarget);
        if (!$selector.data("touched")) {
            $selector.data("touched", true);
        }
    },
    getMomentDate: function() {
        var dayValue = this.daySelector.val();
        var monthValue = this.monthSelector.val();
        var yearValue = this.yearSelector.val();
        return moment({
            year: yearValue,
            month: monthValue,
            day: dayValue
        });
    },
    getDate: function() {
        var momentDate = this.getMomentDate();
        return momentDate.format(this.options.format);
    },
    setDate: function(date) {
        var momentDate = moment(date, this.options.format);
        if (momentDate.isValid()) {
            this.daySelector.selectpicker("val", momentDate.date());
            this.monthSelector.selectpicker("val", momentDate.month());
            this.yearSelector.selectpicker("val", momentDate.year());
        } else {
            this.daySelector.selectpicker("val", "");
            this.monthSelector.selectpicker("val", "");
            this.yearSelector.selectpicker("val", "");
        }
    },
    hasValue: function() {
        var hasValue = true;
        if (!this.yearSelector.val() || !this.monthSelector.val() || !this.daySelector.val()) {
            hasValue = false;
        }
        return hasValue;
    },
    validateOnSubmit: function() {
        this._toggleInvalidDate(!this.checkIsValidDate(true));
        return this.checkIsValidDate(true);
    },
    checkIsValidDate: function(submitForm) {
        var validateDate;
        var isValid;
        var date = this.daySelector.val() + "/" + (parseInt(this.monthSelector.val()) + 1) + "/" + this.yearSelector.val();
        if (!submitForm) {
            validateDate = this._isDateTouched() && this._isFieldsFilled();
        } else {
            validateDate = this._isFieldsFilled();
        }
        if (validateDate) {
            isValid = moment(date, "DD/MM/YYYY").isValid();
            return isValid;
        } else if (this._isDateTouched() && !this._isFieldsFilled()) {
            return false;
        } else if (submitForm && !this._isFieldsFilled()) {
            return false;
        } else if (!submitForm) {
            return true;
        }
    },
    checkTimelineDate: function() {
        var selectedDate = this.getMomentDate();
        var now = moment();
        var timeline;
        var difference = selectedDate.diff(now, "days");
        if (difference < 0) {
            timeline = -1;
        } else if (difference === 0) {
            timeline = 0;
        } else if (difference > 0) {
            timeline = 1;
        }
        return timeline;
    },
    _toggleInvalidDate: function(visible) {
        if (visible) {
            this.invalidDateBlock.show();
            this._addClass("has-invalid-datepicker-error");
            this._addClass("has-error");
        } else {
            this.invalidDateBlock.hide();
            this._removeClass("has-invalid-datepicker-error");
            this._removeClass("has-error");
        }
    },
    _destroy: function() {
        this._removeClass("widget-initialized");
    }
});

var headerLoginForm = function() {
    var headerLoginFormView = $(".boxLogin");
    var loginFormMobView = $(".boxLoginMob");
    function init() {
        var jqBootstrapConfig = {
            bindEvents: [ "blur", "change" ],
            preventSubmit: true,
            submitError: function($form, event, errors) {
                validationError($form, event, errors);
            },
            submitSuccess: function($form, event) {
                validationSuccess($form, event, errors);
            },
            filter: function() {
                return !$(this).is(":visible") && $(this).hasClass("force-validation") || $(this).is(":visible") || $(this).hasClass("force-validation") || !$(this).is(".no-validation") || $(this).is(".callback_date");
            }
        };
        headerLoginFormView.find("input, textarea, select, button").not("[type=submit]").jqBootstrapValidation(jqBootstrapConfig);
        loginFormMobView.find("input, textarea, select, button").not("[type=submit]").jqBootstrapValidation(jqBootstrapConfig);
    }
    function validationError($form, event, errors) {
        var bottonsubmit = $form.find("button[type=submit]");
        var koModal = $form.attr("data-ko-modal");
        bottonsubmit.prop("disabled", true);
        if (koModal) {
            $(koModal).modal("show");
        }
        if ($form.find("div.has-error:not(.js-no-scroll):visible").length > 0) {
            moveToOffset = $form.find("div.has-error:not(.js-no-scroll):visible").eq(0).offset().top - 90;
            $("html, body").animate({
                scrollTop: moveToOffset,
                useTranslate3d: true
            }, 200, "linear", function() {
                bottonsubmit.prop("disabled", false);
            });
        }
    }
    function validationSuccess($form, event, errors) {
        var okModal = $form.attr("data-ok-modal");
        var currentModal = $form.attr("data-target-modal");
        var okMsg = $form.attr("data-ok-msg");
        var hideInputs = $form.attr("data-hide-inputs");
        if (okModal) {
            if (!$form.hasClass("ready-to-submit")) {
                event.preventDefault();
                $(okModal).modal("show");
                $form.addClass("ready-to-submit");
                $(okModal).on("hidden.bs.modal", function() {
                    $form.submit();
                });
            }
        }
        if (okMsg) {
            if (!$form.hasClass("ready-to-submit")) {
                event.preventDefault();
                $(okMsg).removeClass("hide");
                $(hideInputs).addClass("hide");
                $form.addClass("ready-to-submit");
                $(currentModal).on("hidden.bs.modal", function() {
                    $form.submit();
                });
            }
        }
    }
    return {
        init: init
    };
}();

$(function() {
    headerLoginForm.init();
});

var GDPR = (() => {
    var gdprTogglers;
    var gdprHelpPanels;
    var gdprHelpPanelCloseBtn;
    var IS_ACTIVE_TOGGLER_CLASS = "is_active";
    var IS_CLOSE_PANEL_CLASS = "is_close";
    function init() {
        gdprTogglers = $("[data-toggle-gdpr-panel]");
        gdprHelpPanels = $(".m-panel-info-GDPR");
        gdprHelpPanelCloseBtn = gdprHelpPanels.find(".js-close-gdpr-panel");
        gdprTogglers.on("click", _toggleGDPRPanel);
        gdprHelpPanelCloseBtn.on("click", _handlerCloseGDPRPanel);
        gdprPageWithAnchor();
        $("#GDPR_flag_5").change(function() {
            if ($("#GDPR_flag_5").is(":checked")) {
                $("#subscribeRewards").attr("value", true);
            } else {
                $("#subscribeRewards").attr("value", false);
            }
        });
    }
    function _toggleGDPRPanel() {
        var panelVisibility = _toggleActive(this);
        gdprHelpPanels.addClass(IS_CLOSE_PANEL_CLASS);
        _toggleHelpPanelVisibility(panelVisibility, this);
    }
    function _toggleActive(toggleElement) {
        var $this = $(toggleElement);
        var panelVisible = true;
        gdprTogglers.each(function(index, toggle) {
            var $toggle = $(toggle);
            if (!$toggle.is($this)) {
                $toggle.removeClass(IS_ACTIVE_TOGGLER_CLASS);
            }
        });
        if ($this.hasClass(IS_ACTIVE_TOGGLER_CLASS)) {
            $this.removeClass(IS_ACTIVE_TOGGLER_CLASS);
            panelVisible = false;
        } else {
            $this.addClass(IS_ACTIVE_TOGGLER_CLASS);
        }
        return panelVisible;
    }
    function _toggleHelpPanelVisibility(panelVisibility, toggleElement) {
        var $toggleElement = $(toggleElement);
        var helpPanelSelector = $toggleElement.data("toggle-gdpr-panel");
        var helpPanel = $(helpPanelSelector);
        if (panelVisibility) {
            helpPanel.removeClass(IS_CLOSE_PANEL_CLASS);
        } else {
            helpPanel.addClass(IS_CLOSE_PANEL_CLASS);
        }
    }
    function _handlerCloseGDPRPanel(e) {
        gdprHelpPanels.addClass(IS_CLOSE_PANEL_CLASS);
        gdprTogglers.removeClass(IS_ACTIVE_TOGGLER_CLASS);
    }
    function getGDPRPanels() {
        return gdprHelpPanels;
    }
    function gdprPageWithAnchor() {
        $(".js-gdpr-anchor-page").each(function() {
            var linkHref = $(this).find("a").attr("href");
            var anchor = $(this).data("page-anchor");
            var finalLink = linkHref + "#" + anchor;
            $(this).find("a").attr("href", finalLink);
        });
    }
    return {
        init: init,
        getGDPRPanels: getGDPRPanels
    };
})();

$(() => {
    GDPR.init();
});

var mModals = function() {
    const MODAL_UPDATE_CONTENT_EVENT = "modal.update.content";
    var gdprHelpPanels;
    function init() {
        var modals = $(".modal");
        var $externalModalsTriggers = $('[data-toggle="external-modal"], [data-href][data-toggle="modal"]');
        gdprHelpPanels = GDPR.getGDPRPanels();
        modals.each((index, modalView) => {
            var $modalView = $(modalView);
            attachModalEventsBehaviour($modalView);
        });
        $externalModalsTriggers.on("click", _loadExternalModal);
    }
    function _handlerModalShow() {}
    function _handlerModalShown() {}
    function _handlerModalHide() {}
    function _scrollToModalElement(anchorElement, $modal) {
        var modalOffsetTop;
        var targetOffsetTop;
        if (anchorElement.length) {
            modalOffsetTop = $modal.offset().top;
            targetOffsetTop = anchorElement.offset().top;
            $modal.animate({
                scrollTop: targetOffsetTop - modalOffsetTop
            });
        }
    }
    function _loadExternalModal(ev) {
        var $modalTrigger = $(this);
        var modalContentPath = $modalTrigger.data("href");
        var modalTargetId = $modalTrigger.data("target");
        var modalScrollTo = $modalTrigger.data("modal-scrollto");
        var $modal;
        var $modalContent;
        ev.preventDefault();
        ev.stopPropagation();
        if (!modalTargetId) {
            return;
        }
        $modal = $(modalTargetId);
        $modalContent = $modal.find(".modal-content");
        if (modalContentPath) {
            $modal.data("scrollto", modalScrollTo);
            $modalContent.html("").load(modalContentPath, () => {
                $modal.modal("show");
            });
        }
    }
    function attachModalEventsBehaviour($modal) {
        var eventData = {
            windowScroll: null
        };
        $modal.on("show.bs.modal", eventData, _handleShowModal).on("shown.bs.modal", _handleShownModal).on(MODAL_UPDATE_CONTENT_EVENT, _setModalPosition).on("hidden.bs.modal", eventData, _handleHiddenModal);
    }
    function handleDinamicModals($modals) {
        $modals.each(function() {
            var $this = $(this);
            var $modal = $($this.data("target"));
            attachModalEventsBehaviour($modal);
        });
    }
    function _handleShowModal(ev) {
        var $this = $(this);
        var $modalContent = $this.find(".modal-content");
        var scrollWidth = getScrollBarWidth();
        ev.data.windowScroll = $(window).scrollTop();
        $("body").css({
            position: "fixed",
            "margin-top": ev.data.windowScroll * -1
        });
        $modalContent.parent(".modal-dialog").addClass("prevent-show");
        if (scrollWidth > 0) {
            gdprHelpPanels.css({
                "padding-right": scrollWidth
            });
        }
    }
    function _handleShownModal() {
        var $modal = $(this);
        var anchorSelector = $modal.data("scrollto");
        var anchorElement;
        _setModalPosition($modal);
        if (anchorSelector) {
            anchorElement = $modal.find(anchorSelector);
            _scrollToModalElement(anchorElement, $modal);
        }
    }
    function _setModalPosition($modal) {
        var $this = $modal.length ? $modal : $(this);
        var $modalContent = $this.find(".modal-content");
        var $modalContentParent = $modalContent.parent(".modal-dialog");
        setTimeout(function() {
            if ($modalContent.outerHeight() < globalConfig.windowHeight) {
                $modalContentParent.addClass("center-modal");
            } else {
                $modalContentParent.removeClass("center-modal");
            }
            $modalContentParent.removeClass("prevent-show");
        }, 100);
    }
    function _handleHiddenModal(ev) {
        $("body").css({
            position: "static",
            "margin-top": 0
        });
        $(window).scrollTop(ev.data.windowScroll);
        gdprHelpPanels.css({
            "padding-right": 0
        });
    }
    return {
        init: init,
        attachModalEventsBehaviour: attachModalEventsBehaviour,
        handleDinamicModals: handleDinamicModals,
        MODAL_UPDATE_CONTENT_EVENT: MODAL_UPDATE_CONTENT_EVENT
    };
}();

$(function() {
    if (globalConfig.elements.$openModal.length) {
        mModals.init();
    }
});

var collapsePanel = (() => {
    var collapsePanelModule;
    var collapseLink;
    function init() {
        collapsePanelModule = $(".js-collapse-panel");
        collapseLink = collapsePanelModule.find(".panel-heading");
        collapsePanelModule.on("show.bs.collapse", _onExpandPanel);
        collapsePanelModule.on("hide.bs.collapse", _onCollapsePanel);
    }
    function _onExpandPanel() {
        var $this = $(this);
        var toggleElement = $this.find('a[data-toggle="collapse"]');
        var openText = toggleElement.data("open-header-text");
        if (openText && openText.length > 0) {
            toggleElement.html(openText);
        }
    }
    function _onCollapsePanel() {
        var $this = $(this);
        var toggleElement = $this.find('a[data-toggle="collapse"]');
        var closeText = toggleElement.data("closed-header-text");
        if (closeText && closeText.length > 0) {
            toggleElement.html(closeText);
        }
    }
    return {
        init: init
    };
})();

$(() => {
    collapsePanel.init();
});

$.widget("nh.floorSelector", {
    options: {
        hotelInfo: {},
        floorTranslation: typeof pageData !== "undefined" ? pageData.labelFloor : "",
        buildingLabel: typeof pageData !== "undefined" ? pageData.labelBuilding + " " : ""
    },
    selectedFloor: {},
    _create: function() {
        this.floorList = this.element.find(".m-floor-selector-list");
        this.selectedFloorDescription = this.element.find(".js-selected-floor");
        this.selectedBuildingDescription = this.element.find(".js-selected-building");
        this.selectedFloorAvailableRooms = this.element.find(".js-selected-floor-available-rooms");
        this.selectedFloorUpsellingRooms = this.element.find(".js-selected-floor-upselling-rooms");
        this._renderFloorList();
        this._on(this.element.find(".dropdown"), {
            "shown.bs.dropdown": this._onDropdownShown
        });
    },
    _renderFloorList: function() {
        var hotelInfo = this.options.hotelInfo;
        var buildings = hotelInfo.buildings;
        if (!buildings || buildings.length === 0) {
            return;
        }
        buildings.forEach(buildingInfo => {
            let buildName = parseInt(buildingInfo.name) || buildingInfo.name;
            this.floorList.append(this._renderLineSeparator(this.options.buildingLabel + buildName));
            var buildingFloors = buildingInfo.floors.sort(this._sortByFloor);
            buildingFloors.forEach(floorInfo => {
                this.floorList.append(this._renderFloorLine(floorInfo, this.options.buildingLabel + buildName, buildingInfo.name));
                if (floorInfo.selected) {
                    this.setSelectedFloor(floorInfo, buildName, buildingFloors);
                }
            });
        });
        this._addFloorLineListeners();
    },
    _renderLineSeparator: function(separatorText) {
        return `\n      <li class="floor-selector-separator">\n        <span>${separatorText}</span>\n      </li>\n    `;
    },
    _renderFloorLine: function(floorInfo, building, buildingName) {   
        return `\n      <li class="floor-selector-item" id="#${floorInfo.idFloor}__${building}" data-id="#${floorInfo.idFloor}__${buildingName}">\n        <div class="floor-selector-item-text">\n          <span>${this.options.floorTranslation} ${parseInt(floorInfo.idFloor)}</span>\n        </div>\n        <div class="floor-selector-item-rooms">\n        ${floorInfo.upsellings !== null && floorInfo.upsellings > 0 ? `<div class="floor-room room-upselling">\n          <div class="room-content"><span>${floorInfo.upsellings}</span></div>\n          </div>` : ""}\n          <div class="floor-room room-available">\n            <div class="room-content"><span>${floorInfo.rooms}</span></div>\n          </div>\n        </div>\n      </li>\n    `;
    },
    _addFloorLineListeners: function() {
        this._on(this.floorList.find(".floor-selector-item"), {
            click: this._onFloorClick
        });
    },
    _sortByFloor: function(a, b) {
        if (a.idFloor < b.idFloor) return 1;
        if (a.idFloor > b.idFloor) return -1;
        return 0;
    },
    _setOption: function(key, value) {
        this._super(key, value);
        if (key === "hotelInfo") {
            this.floorList.empty();
            this._renderFloorList();
        }
    },
    _onFloorClick: function(e) {
        var $selectedFloorId = $(e.currentTarget).attr("data-id");
        $selectedFloorId = $selectedFloorId.slice(1, $selectedFloorId.length)
        var split = $selectedFloorId.split("__");
        var floorNumber = split[0];
        var buildingName =split[1];
        console.log("datos",floorNumber,buildingName,$selectedFloorId)
        var buildingFloors;
        var selectedFloorInfo;
        this.options.hotelInfo.buildings.some(buildingInfo => {
            if (buildingInfo.name == buildingName) {
                buildingFloors = buildingInfo;
            }
        });
        buildingFloors.floors.some(info => {
            if (info.idFloor == floorNumber) {
                selectedFloorInfo = info;
            }
        });
        this.setSelectedFloor(selectedFloorInfo, buildingName, buildingFloors);
    },
    getSelectedFloor: function() {
        return this.selectedFloor;
    },
    setSelectedFloor: function(selectedFloorInfo, buildingDescription, buildingFloors) {
        if (!selectedFloorInfo) {
            return;
        }
        this.selectedFloorDescription.html(`${this.options.floorTranslation} ${parseInt(selectedFloorInfo.idFloor)}`);
        this.selectedBuildingDescription.html(this.options.buildingLabel + (parseInt(buildingDescription) || buildingDescription));
        this.selectedFloorAvailableRooms.html(selectedFloorInfo.rooms ? selectedFloorInfo.rooms : 0);
        if (selectedFloorInfo.upsellings && selectedFloorInfo.upsellings > 0) {
            this.selectedFloorUpsellingRooms.html(selectedFloorInfo.upsellings ? selectedFloorInfo.upsellings : 0);
        } else {
            $(this.selectedFloorUpsellingRooms).parent().parent().hide();
        }
        this.selectedFloor = {
            selectedFloorInfo: selectedFloorInfo,
            buildingDescription: buildingDescription,
            buildingFloors: buildingFloors
        };
        this._trigger("change", {}, this.selectedFloor);
    },
    setFloorListHeight: function(height) {
        this.floorList.css("max-height", height);
    },
    _onDropdownShown: function(e) {
        this.floorList.focus();
    },
    _destroy: function() {}
});

$.widget("nh.customSelector", {
    options: {
        multipleChoice: false
    },
    _create: function() {
        this.inputElements = this.element.find("input");
        if (this.element.attr("data-multiple-choice") !== undefined) {
            this.options.multipleChoice = this.element.attr("data-multiple-choice") == "true";
        }
        this.element.removeClass("is_checked");
        this.inputElements.not("input[type='hidden']").each((index, el) => {
            let $el = $(el);
            let $div = $el.parent();
            if ($el.prop("checked")) {
                $div.addClass("is_checked");
            } else {
                $div.removeClass("is_checked");
            }
        });
        this._on(this.inputElements, {
            change: this._onInputChange
        });
        this._on(this.element.find(".custom-selector-item"), {
            mouseup: this._onInputFocusout
        });
    },
    _onInputChange: function(e) {
        var $radio = $(e.currentTarget);
        var containerRadio = $radio.parent();
        if ($radio.prop("checked")) {
            containerRadio.addClass("is_checked");
            if (!this.options.multipleChoice) {
                containerRadio.siblings(".is_checked").removeClass("is_checked");
            }
        }
    },
    _onInputFocusout: function(e) {
        var $this = $(e.currentTarget);
        var inputRadio = $this.find("input");
        if ($this.hasClass("is_checked")) {
            $this.removeClass("is_checked");
            inputRadio.prop("checked", false);
            inputRadio.trigger("change");
        }
    },
    getValue: function() {
        var checkedValue = null;
        this.inputElements.each((index, el) => {
            let $el = $(el);
            if ($el.prop("checked")) {
                if (!this.options.multipleChoice) {
                    checkedValue = $el.val();
                } else if ($el.val()) {
                    if (!checkedValue) {
                        checkedValue = [];
                    }
                    checkedValue.push($el.val());
                }
            }
        });
        return checkedValue;
    },
    _destroy: function() {}
});

$.widget("nh.formSteps", {
    options: {
        initStep: 0,
        validateStep: null
    },
    activeStep: 0,
    _create: function() {
        this.formSteps = this.element.find("[data-step]");
        this.stepIndicators = this.element.find("[data-active-step]");
        this.nextStepNavigators = this.element.find("[data-next-step]");
        this.prevStepNavigators = this.element.find("[data-prev-step]");
        this.form = this.element.find("form");
        this._initSteps();
        this._on(this.stepIndicators, {
            click: this._onStepIndicatorClick
        });
        this._on(this.nextStepNavigators, {
            click: this._onNextStepNavigatorClick
        });
        this._on(this.prevStepNavigators, {
            click: this._onPrevStepNavigatorClick
        });
    },
    _initSteps: function() {
        this._navigateStep(this.options.initStep);
    },
    navTo: function(stepToNav) {
        if (this.form.validator) {
            if (stepToNav > this.activeStep) {
                this.form.validator("validate");
                var errorElements = this.form.find(".has-error");
                if (errorElements.length === 0) {
                    this._navigateStep(stepToNav);
                }
            } else {
                this._navigateStep(stepToNav);
            }
        }
    },
    _navigateStep: function(stepToNav) {
        this.formSteps.each((index, step) => {
            let $step = $(step);
            if ($step.data("step") == stepToNav) {
                $step.removeClass("hide");
                this._setInputValidate($step, true);
                this._setStepIndicator($step.data("step"));
                this.activeStep = $step.data("step");
            } else {
                $step.addClass("hide");
                this._setInputValidate($step, false);
            }
        });
        this.form.validator("update");
    },
    _setInputValidate: function($step, validate) {
        var stepInputs = $step.find(":input:not(button)").add(":input[type='radio']:not(:visible)").add(".bootstrap-select button:visible");
        stepInputs.attr("data-validate", validate);
    },
    _setStepIndicator: function(activeStep) {
        this.stepIndicators.removeClass("is_active");
        this.stepIndicators.each((index, stepIndicator) => {
            let $stepIndicator = $(stepIndicator);
            if ($stepIndicator.data("active-step") == activeStep) {
                $stepIndicator.addClass("is_active");
            }
        });
    },
    _onStepIndicatorClick: function(e) {
        let $clickedStep = $(e.currentTarget);
        let stepToNav = $clickedStep.data("active-step");
        this.navTo(stepToNav);
    },
    _onNextStepNavigatorClick: function(e) {
        this.navTo(this.activeStep + 1);
    },
    _onPrevStepNavigatorClick: function(e) {
        if (this.activeStep - 1 >= 0) {
            this.navTo(this.activeStep - 1);
        }
    },
    _destroy: function() {}
});

$.widget("nh.htmlInject", {
    options: {},
    HTML_INJECTED_EVENT: "html_injected_event",
    _create: function() {},
    injectHTMLByUrl: function(containerSelector, tplUrl, callback) {
        var $containerElement = this.element.find(containerSelector);
        if ($containerElement) {
            this.toggleLoading(true);
            $containerElement.load(`${tplUrl}`, (response, status, xhr) => {
                this.toggleLoading(false);
                this._trigger(this.HTML_INJECTED_EVENT, {}, {
                    response: response,
                    status: status,
                    xhr: xhr
                });
                this._onLoadComplete(response, status, xhr, callback);
            });
        }
    },
    injectHTMLByJson: function(containerSelector, tplUrl, callback) {
        var $containerElement = this.element.find(containerSelector);
        if ($containerElement) {
            $containerElement.html(tplUrl);
            this.toggleLoading(false);
            this._trigger(this.HTML_INJECTED_EVENT, {}, {});
            if (typeof callback === "function") {
                callback();
            }
        }
    },
    _onLoadComplete: function(response, status, xhr, callback) {
        if (status === "error") {
            this._onLoadError();
        } else {
            if (typeof callback === "function") {
                callback(response, status, xhr);
            }
        }
    },
    toggleLoading: function(loadingVisible, capa = false) {
        if (loadingVisible && capa) {
            var $capa = capa;
            $(".spinnerPanel").remove();
            var $spinner = $(".spinner:first").clone();
            $spinner.css({
                padding: "20%",
                "text-align": "center"
            }).addClass("spinnerPanel");
            $capa.html("").html($spinner);
            $(".spinnerPanel").show();
        } else {
            $(".spinnerPanel").remove();
        }
    },
    _onLoadError: function() {},
    _destroy: function() {}
});

$.widget("nh.limitCharacters", {
    options: {
        maxLenght: 255
    },
    _create: function() {
        this.counterBox = this.element.closest(".form-group").find(".rest-caracters");
        this.max = !this.element.data("maxlength") ? this.options.maxLenght : parseInt(this.element.data("maxlength"));
        this._on(this.element, {
            change: this._countCharacters,
            keyup: this._countCharacters
        });
    },
    _countCharacters: function(e) {
        var value = this.element.val();
        var remainingCharacters = this.max - value.length;
        var remainingCaracteresLabel = this.counterBox.data("label") || "";
        if (value && value.length > this.max) {
            this.element.val(value.substring(0, this.max));
            remainingCharacters = 0;
        }
        if (this.counterBox.length) {
            this.counterBox.html(remainingCharacters + " " + remainingCaracteresLabel);
        }
    },
    _destroy: function() {}
});

var commonFormSetup = (() => {
    function init() {
        $('.ui-autocomplete-input[data-await="false"]').selectToAutocomplete();
        $(".labelup-select").on("change", _labelUpSelect);
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $(".selectpicker").not("[data-live-search='true']").selectpicker("mobile");
        }
        if (globalConfig.windowWidth < 992) {
            _initClearButton();
        }
        $(".custom-selector").customSelector();
        $(".js-selector-datepicker").selectorDatepicker({
            format: "DD/MM/YYYY",
            initYear: "1920",
            monthTranslations: monthsArray,
            invalidDateMessage: Labels.lblInvalidDate
        });
        $(".js-count-maxlength").limitCharacters();
        $(".form-control").each(_labelAnimation);
        $("select.form-control-select").each(_labelAnimation);
    }
    function _labelUpSelect() {
        var selected = $(this).find("option:selected").val();
        if (selected) {
            $(".relative").addClass("labelup");
        }
    }
    function _labelAnimation() {
        var $this = $(this);
        if ($this.val()) {
            $this.closest(".form-group").find(".labelup-control").addClass("focus");
        }
        $this.on("focus change keyup", function() {
            $(this).closest(".form-group").find(".labelup-control").addClass("focus");
        }).on("focusout blur", function() {
            var $this = $(this);
            if ($this.is('input[type="number"]') && $this[0].validity && !$this[0].validity.valid) {
                return;
            }
            if (!$this.val()) {
                $this.closest(".form-group").find(".labelup-control").removeClass("focus");
            }
        });
    }
    function _initClearButton() {
        var $inputClearBtns = $(".js-input-clear");
        var $clearElements = $inputClearBtns.siblings("input, textarea");
        $clearElements.each(function(index, clearEl) {
            var clearBtn = $(clearEl).siblings(".js-input-clear");
            if ($(clearEl).val()) {
                clearBtn.show();
            } else {
                clearBtn.hide();
            }
        });
        $clearElements.on("keyup blur", function() {
            var $this = $(this);
            var clearBtn = $this.siblings(".js-input-clear");
            if ($this.val() !== "") {
                clearBtn.show();
            } else {
                clearBtn.hide();
            }
        });
        $inputClearBtns.on("click", function() {
            var $this = $(this);
            $this.siblings("textarea, input").val("");
            $this.siblings("textarea, input").trigger("blur");
            $this.hide();
            $this.closest(".form-group.labelup").find("label").removeClass("focus");
        });
    }
    return {
        init: init
    };
})();

$(document).ready(function() {
    commonFormSetup.init();
});

function scrollToFistError($form) {
    var moveToOffset;
    if ($form.find("div.has-error:not(.js-no-scroll):visible").length > 0) {
        moveToOffset = $form.find("div.has-error:not(.js-no-scroll):visible").eq(0).offset().top - 90;
        $("html, body").animate({
            scrollTop: moveToOffset,
            useTranslate3d: true
        }, 200, "linear", function() {
            toggleLoadingButton($form, false);
        });
    }
}

function toggleLoadingButton($form, isDisabled) {
    var $bottonSubmit = $form.find("button[type=submit]");
    $bottonSubmit.prop("disabled", isDisabled);
}

function validateNumberDocument(docType, docuNumber) {
    var isValid = false;
    var numero;
    var letter;
    var letra;
    var docTypeLowerCase = docType.toLowerCase();
    if (docTypeLowerCase === "dni" || docTypeLowerCase === "nie") {
        numero = docuNumber.substr(0, docuNumber.length - 1);
        numero = numero.replace("X", 0);
        numero = numero.replace("Y", 1);
        numero = numero.replace("Z", 2);
        letter = docuNumber.substr(docuNumber.length - 1, 1).toUpperCase();
        numero = numero % 23;
        letra = "TRWAGMYFPDXBNJZSQVHLCKET";
        letra = letra.substring(numero, numero + 1);
        isValid = letra !== letter ? false : true;
    } else {
        isValid = true;
    }
    return isValid;
}

function validateDate($el) {
    var $calendar = $el.parent().siblings(".responsive-calendar-wrap");
    var isValid;
    if (!$el.hasClass("readyValidate")) {
        setTimeout(function() {
            $el.addClass("readyValidate");
            if ($el.val().length < 1 && !$calendar.hasClass("active")) {
                $el.trigger("focusout");
            }
        }, 200);
    } else {
        $el.removeClass("readyValidate");
        isValid = $el.val() ? null : "error";
        return isValid;
    }
}

function validateMinCheckbox($el) {
    var fieldsetName = $el.data("fieldset");
    var fieldset = this.$element.find(`[name="${fieldsetName}"]`);
    var minCheckbox = parseInt($el.data("mincheckbox"));
    var checkedCheckboxes = fieldset.find('input[type="checkbox"]:checked:visible');
    if (isNaN(minCheckbox)) {
        return;
    }
    if (checkedCheckboxes.length < minCheckbox) {
        return "error";
    }
}

$.fn.validator.Constructor.prototype.focusError = function() {
    if (!this.options.focus) return;
    var $input = this.$element.find(".has-error :input:visible:not(button):first").add(".has-error :input[type='radio']:not(:visible):first").add(".has-invalid-datepicker-error:first").add(".has-error .bootstrap-select button:visible:first").first();
    if ($input.length === 0) return;
    $("html, body").animate({
        scrollTop: $input.offset().top - $.fn.validator.Constructor.FOCUS_OFFSET
    }, 250, function() {
        $input.focus();
    });
};

function validateMultipleEmails($el) {
    var isValid;
    var emailStrings = $el.val().split(",");
    var emailRegExp = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
    emailStrings.forEach(emailString => {
        if (!emailRegExp.test(emailString)) {
            isValid = "error";
        }
    });
    return isValid;
}

$.fn.validator.Constructor.prototype.onInput = function(e) {
    var self = this;
    var $el = $(e.target);
    var deferErrors = e.type !== "focusout";
    if ($el.hasClass("dropdown-toggle")) {
        $el = $("#" + $el.data("id"));
    }
    if (!this.$inputs.is($el)) {
        return;
    }
    if (e.type === "focusout" || $el.data("validate-all-events")) {
        this.validateInput($el, deferErrors).done(function() {
            self.toggleSubmit();
        });
    }
};

var mArrival = function() {
    var mArrivalView = $(".m-arrival");
    function init() {
        mArrivalView.find("form").validator({
            disable: false
        }).on("submit", function(e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
            if (e.isDefaultPrevented()) {
                toggleLoadingButton($form, false);
            } else {}
        });
    }
    return {
        init: init
    };
}();

$(function() {
    mArrival.init();
});

var mCioRoomSelectedUpgrade = (() => {
    var mCioUpgradeView;
    var mCioCurrencyChangeModal;
    var currencyConfirmationModal;
    var upsellingCurrencyChangeInfo;
    var currencySelect;
    var currencyChangeBtn;
    var isVisibleUpsellingCurrencyChangeInfo = false;
    function init() {
        mCioUpgradeView = $(".m-cio-room-selected-upgrade");
        mCioCurrencyChangeModal = $("#m-modal-cio-currency-selected");
        currencyConfirmationModal = $("#m-modal-cio-currency-confirmation");
        upsellingCurrencyChangeInfo = mCioUpgradeView.find(".js-currency-change-info");
        currencySelect = mCioUpgradeView.find("select.js-select-currency");
        currencyChangeBtn = mCioCurrencyChangeModal.find(".js-change-currency-btn");
        currencySelect.on("change", _onCurrencyChange);
        currencyChangeBtn.on("click", _onCurrencyChange);
        mModals.attachModalEventsBehaviour(mCioCurrencyChangeModal);
        mModals.attachModalEventsBehaviour(currencyConfirmationModal);
        if (isMobileTest()) {
            currencySelect.selectpicker("mobile");
        } else {
            currencySelect.selectpicker();
        }
        if (isVisibleUpsellingCurrencyChangeInfo) {
            upsellingCurrencyChangeInfo.show();
        } else {
            upsellingCurrencyChangeInfo.hide();
        }
    }
    function _onCurrencyChange(e) {
        if (globalConfig.windowWidth < globalConfig.smBreak) {
            $("#modal-room-selected").modal("hide");
            currencyConfirmationModal.modal("show");
            currencyConfirmationModal.on("hidden.bs.modal", () => {
                if (globalConfig.windowWidth < globalConfig.xsBreak) {
                    $("#modal-room-selected").modal("show");
                }
            });
        }
        isVisibleUpsellingCurrencyChangeInfo = true;
        upsellingCurrencyChangeInfo.show();
    }
    return {
        init: init
    };
})();

$(() => {
    mCioRoomSelectedUpgrade.init();
});

var mCioRoomSelected = function() {
    var mCioRoomSelectedModal = $("#modal-room-selected");
    var mCioRoomModalHeader = mCioRoomSelectedModal.find(".modal-header");
    var mCioRoomBackButton = mCioRoomSelectedModal.find("a.btn-back");
    const ROOM_TEMPLATE_SELECTOR = $(".sidebar-panel").find(".sidebar-panel-body");
    const ROOM_TEMPLATE = ROOM_TEMPLATE_SELECTOR.html();
    ROOM_TEMPLATE_SELECTOR.html("");
    const ROOM_TEMPLATE_SELECTOR_MODAL = $("#modal-room-selected").find(".modal-body");
    const ROOM_TEMPLATE_MODAL = ROOM_TEMPLATE_SELECTOR_MODAL.html();
    ROOM_TEMPLATE_SELECTOR_MODAL.html("");
    var hotelBackCode, reservationId;
    var ROOM_INFO_URL = "i-cio-room-selected.html";
    var ROOM_UPSELLING_INFO_URL = "i-cio-room-selected-upselling.html";
    var ROOM_MORE_INFO_URL = "i-cio-room-selected-info.html";
    const BTN_PREV_CLS = "with-btn-black";
    const MODAL_TITLE_CLS = "modal-title";
    const MODAL_BODY_CLS = "modal-body";
    const MORE_INFO_BUTTON_CLS = "js-more-info-button";
    const DEFAULT_MODAL_TITLE = mCioRoomModalHeader.find("." + MODAL_TITLE_CLS).html();
    const MODAL_CLOSE_EVENT = "modal.close";
    var roomData = {
        description: ""
    };
    var modalState;
    var prevState;
    var roomDefault = null;
    var selectedModalTemplate = ROOM_INFO_URL;
    function init() {
        hotelBackCode = displayObj.hotelBackCode;
        reservationId = displayObj.reservationId;
        mCioRoomSelectedModal.htmlInject();
        mCioRoomSelectedModal.on("shown.bs.modal", _initialRoomModalState);
        mCioRoomSelectedModal.on("hide.bs.modal", _onCloseSelectedRoomModal);
        mCioRoomBackButton.on("click", goBackHandler);
    }
    function setModalSelectedTemplate(roomType, tplUrl) {
        selectedModalTemplate = roomType ? roomType === "upselling" ? ROOM_UPSELLING_INFO_URL : ROOM_INFO_URL : ROOM_MORE_INFO_URL;
    }
    function setModalSelectedTemplateByTpl(tplUrl) {
        selectedModalTemplate = tplUrl;
    }
    function _initialRoomModalState() {
        navigate(selectedModalTemplate);
    }
    function navigate(tplUrl) {
        mCioRoomSelectedModal.htmlInject("toggleLoading", true, $("#modal-room-selected").find(".modal-body"));
        let roomSelect = $(".is-selected").find(".room-content").data("room");
        mChooseRoom.hiddenForm.val(roomSelect);
        let url = apiUrlPath + "/OCI/" + reservationId + "/" + hotelBackCode + "/room/" + roomSelect + "?language=" + language;
        promise = $.ajax({
            type: "GET",
            url: url,
            crossDomain: true,
            async: true,
            dataType: "json",
            contentType: "application/json"
        });
        promise.then(function(response) {
            var floorbuilding = mChooseRoom.getFloorBuilding();
            var data = {
                lblOCIYSAltRoomImage: "<img src='" + response.image + "?output-quality=70&resize=1000:*&composite-to=center,center|1000:402&background-color=white' >",
                roomNumber: roomSelect,
                roomName: response.roomName,
                lblOCIYSFloor: parseInt(floorbuilding[1]),
                lblOCIYSBuilding: parseInt(floorbuilding[0]) || floorbuilding[0],
                lblOCIYSAltPeople: response.features[0].description,
                lblOCIYSAltRoomSize: response.features[1].description,
                lblOCIYSAltBedType: response.features[2].description
            };
            var templateSel = ROOM_TEMPLATE;
            if (tplUrl == "i-cio-room-selected-info.html") {
                var tplroomicon = $(ROOM_TEMPLATE_MODAL);
                var lista = tplroomicon.find(".room-detail-features").find(".room-icons");
                var src = tplroomicon.find(".room-detail-features").find(".room-icons").attr("data-src");
                var listbullet = tplroomicon.find(".room-detail-more-features").find(".list-bullets");
                $.each(response.featuresHighlighted, function(index, value) {
                    lista.append(`<li class="item-room-icons">\n            <div class="container-icon"><img src="${src}${value.iconFileName}.svg"></div><span>${value.description}</span>\n            </li>`);
                });
                $.each(response.services, function(index, value) {
                    listbullet.append(`<li>${value.text}</li>`);
                });
                templateSel = "<div class='m-cio-room-selected-info'>" + tplroomicon.html() + "</div>";
            }
            var output = templatesRoom.getTemplate(templateSel, data);
            mCioRoomSelectedModal.htmlInject("injectHTMLByJson", "." + MODAL_BODY_CLS, output, _onNavigationComplete);
        }, function(error) {}).always(function() {});
        prevState = modalState;
        modalState = tplUrl;
    }
    function _onNavigationComplete() {
        mCioRoomSelectedModal.trigger(mModals.MODAL_UPDATE_CONTENT_EVENT);
        switch (modalState) {
          case ROOM_INFO_URL:
            _onRoomInfoShow();
            break;

          case ROOM_UPSELLING_INFO_URL:
            mCioRoomSelectedUpgrade.init();
            _onRoomInfoShow();
            break;

          case ROOM_MORE_INFO_URL:
            _onMoreInfoShow();
            break;
        }
    }
    function _handlerMoreInfoButton() {
        navigate(ROOM_MORE_INFO_URL);
    }
    function _onRoomInfoShow() {
        toggleNavigationHeader(DEFAULT_MODAL_TITLE, false);
        roomData.description = mCioRoomSelectedModal.find(".js-room-description").html();
        mCioRoomSelectedModal.find("." + MORE_INFO_BUTTON_CLS).on("click", _handlerMoreInfoButton);
    }
    function _onMoreInfoShow() {
        let roomDescription;
        toggleNavigationHeader(roomData.description, true);
    }
    function toggleNavigationHeader(headerText, prevButton) {
        if (prevButton) {
            mCioRoomModalHeader.addClass(BTN_PREV_CLS);
        } else {
            mCioRoomModalHeader.removeClass(BTN_PREV_CLS);
        }
        if (headerText && headerText.length > 0) {
            mCioRoomModalHeader.find("." + MODAL_TITLE_CLS).html(headerText);
        }
    }
    function setRoomData(room) {
        roomData = room;
    }
    function getRoomData() {
        return roomData;
    }
    function goBackHandler() {
        navigate(prevState);
    }
    function _onCloseSelectedRoomModal(e) {
        roomData = {};
        mCioRoomSelectedModal.trigger(MODAL_CLOSE_EVENT);
    }
    function getSlideTpl() {
        return ROOM_TEMPLATE;
    }
    return {
        init: init,
        getRoomData: getRoomData,
        setRoomData: setRoomData,
        goBackHandler: goBackHandler,
        toggleNavigationHeader: toggleNavigationHeader,
        setModalSelectedTemplate: setModalSelectedTemplate,
        navigate: navigate,
        selectedModalTemplate: selectedModalTemplate,
        MODAL_CLOSE_EVENT: MODAL_CLOSE_EVENT,
        ROOM_MORE_INFO_URL: ROOM_MORE_INFO_URL,
        setModalSelectedTemplateByTpl: setModalSelectedTemplateByTpl,
        mCioRoomBackButton: mCioRoomBackButton,
        getSlideTpl: getSlideTpl
    };
}();

$(() => {
    if (typeof displayObj !== "undefined" && displayObj) {}
});

var selectedRoomPanel = function() {
    var panel = $("#sidebar-panel");
    var panelHeader = panel.find(".sidebar-panel-header");
    var togglePanelElement = $('[data-toggle="sidebar-panel"]');
    var togglePanelButton = $('.sidebar-panel-toggle[data-toggle="sidebar-panel"]');
    var closePanelButton = $("#sidebar-panel .btn-ico");
    var mCioRoomSelectedModal = $("#modal-room-selected");
    var chooseOtherRoomButton = panel.find("button.js-choose-other-room");
    var hotelBackCode, reservationId;
    var panelTexts = {
        header: {
            preselected: panel.data("room-preselected-translation"),
            selected: panel.data("room-selected-translation")
        }
    };
    var roomStatus = "preselected";
    var panelState;
    var prevState;
    const ROOM_TEMPLATE = mCioRoomSelected.getSlideTpl();
    const ROOM_INFO_URL = "i-cio-room-selected.html";
    const ROOM_UPSELLING_INFO_URL = "i-cio-room-selected-upselling.html";
    const PANEL_TITLE_CLS = "sidebar-panel-header-title";
    const PANEL_BODY_CLS = "sidebar-panel-body";
    const MORE_INFO_BUTTON_CLS = "js-more-info-button";
    const PANEL_UPDATE_CONTENT_EVENT = "panel.update.content";
    const PANEL_CLOSE_EVENT = "panel.close";
    var selectedPanelTemplate = ROOM_INFO_URL;
    function init() {
        hotelBackCode = displayObj.hotelBackCode;
        reservationId = displayObj.reservationId;
        panel.htmlInject();
        mCioRoomSelectedModal.htmlInject();
        panel.on(PANEL_UPDATE_CONTENT_EVENT, _loadRoomPanel);
        togglePanelElement.on("click", _togglePanel);
        closePanelButton.on("click", closePanel);
        chooseOtherRoomButton.on("click", closePanel);
    }
    function _togglePanel() {
        panel.toggleClass("is-hidden");
    }
    function hidePanel() {
        panel.addClass("is-hidden");
    }
    function closePanel() {
        mChooseRoom.hiddenForm.val("");
        panel.addClass("is-hidden");
        togglePanelButton.addClass("hidden");
        panel.trigger(PANEL_CLOSE_EVENT);
    }
    function showPanel(roomType, status) {
        roomStatus = status;
        _setPanelSelectedTemplate(roomType);
        panel.trigger(PANEL_UPDATE_CONTENT_EVENT);
        togglePanelButton.removeClass("hidden");
    }
    function _loadRoomPanel() {
        panel.htmlInject("toggleLoading", true, $(".sidebar-panel").find(".sidebar-panel-body"));
        let roomSelect = $(".is-selected").find(".room-content").data("room");
        mChooseRoom.hiddenForm.val(roomSelect);
        let url = apiUrlPath + "/OCI/" + reservationId + "/" + hotelBackCode + "/room/" + roomSelect + "?language=" + language;
        promise = $.ajax({
            type: "GET",
            url: url,
            async: true,
            crossDomain: true,
            dataType: "json",
            contentType: "application/json"
        });
        promise.then(function(response) {
            var floorbuilding = mChooseRoom.getFloorBuilding();
            var data = {
                lblOCIYSAltRoomImage: "<img src='" + response.image + "?output-quality=70&amp;resize=870:*&amp;composite-to=center,center|870:350&amp;background-color=white'>",
                roomNumber: roomSelect,
                roomName: response.roomName,
                lblOCIYSFloor: parseInt(floorbuilding[1]),
                lblOCIYSBuilding: parseInt(floorbuilding[0]) || floorbuilding[0],
                lblOCIYSAltPeople: response.features[0].description,
                lblOCIYSAltRoomSize: response.features[1].description,
                lblOCIYSAltBedType: response.features[2].description
            };
            var output = templatesRoom.getTemplate(ROOM_TEMPLATE, data);
            panel.htmlInject("injectHTMLByJson", "." + PANEL_BODY_CLS, output, _onNavigationComplete);
        }, function(error) {}).always(function() {});
        prevState = panelState;
        panelState = selectedPanelTemplate;
    }
    function _onNavigationComplete() {
        mCioRoomSelectedModal.trigger(mModals.MODAL_UPDATE_CONTENT_EVENT);
        switch (panelState) {
          case ROOM_INFO_URL:
            _onRoomInfoShow();
            break;

          case ROOM_UPSELLING_INFO_URL:
            mCioRoomSelectedUpgrade.init();
            _onRoomInfoShow();
            break;
        }
    }
    function _onRoomInfoShow() {
        panel.find("." + PANEL_TITLE_CLS).html(panelTexts.header[roomStatus]);
        panel.find("." + MORE_INFO_BUTTON_CLS).on("click", _handlerMoreInfoButton);
        panel.removeClass("is-hidden");
    }
    function _handlerMoreInfoButton() {
        mCioRoomSelected.setModalSelectedTemplate();
        mCioRoomSelectedModal.modal("show");
        trackOCIZoomMoreAbout(Globals.page_section, reservationIdOci);
    }
    function _setPanelSelectedTemplate(roomType) {
        selectedPanelTemplate = roomType === "upselling" ? ROOM_UPSELLING_INFO_URL : ROOM_INFO_URL;
    }
    return {
        init: init,
        closePanel: closePanel,
        showPanel: showPanel,
        hidePanel: hidePanel,
        PANEL_CLOSE_EVENT: PANEL_CLOSE_EVENT
    };
}();

$(function() {
    if ($('[data-toggle="sidebar-panel"]').length && (typeof displayObj !== "undefined" && displayObj)) {}
});

$.widget("nh.floorMap", {
    options: {
        data: null,
        streetsSize: 140,
        defaultMargin: 150,
        ratio: 8,
        adjustWindow: false,
        offsetHeight: null,
        maxScreenWidth: null,
        showRoomDetail: null,
        scaleZoomOut: .5,
        scaleZoomIn: 1,
        zoomType: "In",
        initial: true
    },
    previousSelectedRoom: null,
    selectedRoomData: null,
    preselectedRoomInfo: null,
    mapContentMargin: {
        leftRight: 0,
        topBottom: 0
    },
    preferencesCoor: {
        x: null,
        y: null
    },
    centered: {
        top: 0,
        left: 0
    },
    keepPreselectedRoom: false,
    centerToPoint: false,
    newMapFetched: false,
    deselectRoom: function() {
        if (this.previousSelectedRoom) {
            this.previousSelectedRoom.removeClass("is-selected");
            this.previousSelectedRoom = null;
            this.selectedRoomData = null;
            this.preselectedRoomInfo.preselected = false;
            this.keepPreselectedRoom = false;
        }
    },
    getSelectedRoomData: function() {
        return this.selectedRoomData;
    },
    renderMap: function() {
        var structureData;
        var zoomClass = this.options.zoomType.toLowerCase();
        this.setZoomMapSize(this.options.zoomType);
        structureData = this._getStructureData(this.options.data.floor.structure);
        this.floorMapCanvas = $(this._getMapStructure(structureData)).show();
        this.floorMap.css({
            height: structureData.height
        }).empty().append(this.floorMapCanvas);
        this._drawStreets(this.options.data.streets);
        this._drawRooms(this.options.data.rooms);
        this._setMapSize();
        this._applyInteractions();
        this.floorMap.trigger("onMapLoaded", [ this.keepPreselectedRoom ]);
        this.element.toggleClass(this._getZoomClass, zoomClass);
        this.newMapFetched = false;
        this.mapMoved = false;
        if (this.options.zoomType === "In") {
            this.floorMapContent.data("zoom-in-top", this.preferencesCoor.y);
            this.floorMapContent.data("zoom-in-left", this.preferencesCoor.x);
            this.floorMapContent.data("zoom-out-top", this.preferencesCoor.y * this.options.scaleZoomOut);
            this.floorMapContent.data("zoom-out-left", this.preferencesCoor.x * this.options.scaleZoomOut);
        } else {
            this.floorMapContent.data("zoom-in-top", this.preferencesCoor.y / this.options.scaleZoomOut);
            this.floorMapContent.data("zoom-in-left", this.preferencesCoor.x / this.options.scaleZoomOut);
            this.floorMapContent.data("zoom-out-top", this.preferencesCoor.y);
            this.floorMapContent.data("zoom-out-left", this.preferencesCoor.x);
        }
        this.preferencesCoor = {};
    },
    selectRoom: function(ev) {
        var $this = $(ev.currentTarget);
        var isSelected = $this.hasClass("is-selected");
        if (this.selectedRoomData) {
            this.selectedRoomData.selected = false;
        }
        this.options.data.rooms.some(room => {
            if (room.id === $this.data("number") && !$this.hasClass("prevent-click")) {
                this.selectedRoomData = room;
                return true;
            }
        });
        this.keepPreselectedRoom = true;
        this.preselectedRoomInfo.preselected = false;
        if ($this.hasClass("prevent-click")) {
            ev.preventDefault();
            ev.stopPropagation();
            $this.removeClass("prevent-click");
            return;
        } else {
            if (!isSelected) {
                $this.addClass("is-selected");
                this.selectedRoomData.selected = true;
                if (this.previousSelectedRoom) {
                    this.previousSelectedRoom.removeClass("is-selected");
                }
            }
            this.previousSelectedRoom = $this;
            this._trigger("onRoomSelected", ev, {
                roomTcm: $this.data("tcm"),
                roomNumber: $this.data("number"),
                isSelected: isSelected,
                type: $this.attr("class").indexOf("upselling") >= 0 ? "upselling" : "room"
            });
        }
    },
    setZoomMapSize: function(zoomType) {
        this._setSize(this.options.data.floor.structure, zoomType, "structure");
        this._setSize(this.options.data.rooms, zoomType, "room");
    },
    _applyInteractions: function() {
        var widget = this;
        $.pep.unbind(this.floorMapContent);
        if (this.element.width() < this.floorMapContent.outerWidth(true) || this.element.height() < this.floorMapContent.outerHeight(true)) {
            this.floorMapContent.pep({
                constrainTo: this._getMapPosition(),
                startPos: this.centered,
                useCSSTranslation: false,
                shouldEase: false,
                debug: false,
                removeMargins: false,
                startThreshold: [ 10, 10 ],
                stop: this._endTouch,
                start: this._preventClickWhenDragging,
                drag: this._preventClickWhenDragging,
                widget: widget
            });
        } else {
            this.floorMapContent.css({
                top: this.centered.top,
                left: this.centered.left
            });
        }
    },
    _centerMap: function(positionData) {
        positionData.top = positionData.topAvailable / 2;
        positionData.left = positionData.leftAvailable !== 0 ? positionData.leftAvailable / 2 : positionData.leftAvailable;
        this.centered = {
            top: positionData.top * -1,
            left: positionData.left * -1
        };
    },
    _centerMapInPoint: function(positionData) {
        positionData.centeredX += this.preferencesCoor.x;
        positionData.centeredY += this.preferencesCoor.y;
        positionData.left = positionData.centeredX - this.element.width() / 2;
        positionData.top = positionData.centeredY - this.element.height() / 2;
        if (positionData.left < 0) {
            positionData.left = 0;
        } else if (positionData.left > positionData.leftAvailable) {
            this._setLeftMapPosition(positionData);
        }
        if (positionData.top < 0) {
            positionData.top = 0;
        } else if (positionData.top > positionData.topAvailable) {
            this._setTopMapPosition(positionData);
        }
        this.centered = {
            top: positionData.top * -1,
            left: positionData.left * -1
        };
    },
    _clearInteractions: function() {
        $.pep.unbind(this.floorMapContent);
        this.element.css({
            height: this.floorMapContent.height()
        });
    },
    _create: function() {
        this.floorMapContent = this.element.find(".map-content");
        this.floorMap = this.floorMapContent.find(".map");
        this.floorMapCanvas = this.floorMap.find(".maps-canvas");
        this.zoomButton = this.element.find(".zoom-button");
        if (this.element.hasClass("widget-initialized")) {
            return;
        }
        this._on(this.zoomButton, {
            click: this._toggleZoom
        });
        this._addClass("widget-initialized");
    },
    _destroy: function() {
        this._removeClass("widget-initialized");
    },
    _drawStreets: function(streetsData) {
        let $floorMapContent = this.floorMapContent;
        let $streets = $floorMapContent.find("div.street");
        let $currentStreet;
        let streetHtml;
        $.each(streetsData, (key, value) => {
            $currentStreet = $streets.filter(".street-" + key);
            streetHtml = `<div class="street-info info-${value.type === "city" && value.name ? "poi" : value.type}">\n                      <p class="street-name">\n                        <span>${value.name && value.name.length > 0 && value.name !== "null" ? value.name : ""}</span>\n                      </p>\n                      <span class="street-orientation ${value.type === "city" && value.name ? "poi" : value.type}"></span>\n                    </div>`;
            $currentStreet.html(streetHtml);
        });
    },
    _drawRooms: function(roomsData) {
        var roomData;
        var roomContainer;
        var roomContent;
        var roomClass;
        var selectableRoomsList = [ "none", "room", "upselling", "duplex", "duplex-upsell", "duplex-upselling" ];
        this.keepPreselectedRoom = false;
        for (let x = 0; x < roomsData.length; x++) {
            roomContainer = $("<div></div>");
            roomContent = null;
            roomClass = "room ";
            roomData = roomsData[x];
            this._setUpRoomContainer(roomData, roomContainer);
            if (selectableRoomsList.indexOf(roomData.special) >= 0) {
                if (roomData.available) {
                    roomClass += "room-available";
                    roomContainer.off("click touchend");
                    if (this.options.zoomType === "In") {
                        //roomContainer.on("click touchend", this.selectRoom.bind(this));
                    }
                } else {
                    roomClass += "room-noavailable";
                }
                roomClass += roomData.preferences ? "-preferences" : "";
                roomClass += roomData.special.indexOf("upselling") >= 0 ? "-upselling" : "";
                roomClass += roomData.special.indexOf("duplex") >= 0 ? " room-duplex" : "";
                if (roomData.door) {
                    roomClass += " door door-" + roomData.door;
                }
                if (this._isSelectedRoom(roomData)) {
                    roomData.selected = true;
                    this.keepPreselectedRoom = true;
                    roomClass += " is-selected";
                    this._saveRoomData(roomData, roomContainer);
                }
                roomContent = `<div data-room='${roomData.id || ""}' class='room-content'><span>${roomData.id || ""}</span><i></i></div>`;
            } else {
                roomClass += "room-" + roomData.special.toLowerCase();
                roomContent = `<div class='room-content'><span>${roomData.description || ""}</span></div>`;
            }
            roomContainer.html(roomContent).addClass(roomClass);
            this.floorMap.append(roomContainer);
        }
    },
    _endTouch: function(ev) {
        var pointerCoordinates = {
            top: ev.pageY || this.ev.y,
            left: ev.pageX || this.ev.x
        };
        if (!this.initPosition) {
            this.initPosition = {
                x: this.initialPosition.left,
                y: this.initialPosition.top
            };
        }
        if (this.options.widget._isClickEvent(this)) {
            this.options.widget._goToSelectedPointInZoomInMap(pointerCoordinates);
        }
        this.initPosition = {
            x: this.pos.x,
            y: this.pos.y
        };
    },
    _getAreaPosition() {
        var previousZoom = this.options.zoomType === "In" ? "out" : "in";
        var zoomType = this.mapMoved ? previousZoom : this.options.zoomType.toLowerCase();
        var zoomTypePosition = {
            left: this.floorMapContent.data("zoom-" + zoomType + "-left"),
            top: this.floorMapContent.data("zoom-" + zoomType + "-top")
        };
        if (this.mapMoved) {
            zoomTypePosition = {
                top: this.options.zoomType === "In" ? zoomTypePosition.top / this.options.scaleZoomOut : zoomTypePosition.top * this.options.scaleZoomOut,
                left: this.options.zoomType === "In" ? zoomTypePosition.left / this.options.scaleZoomOut : zoomTypePosition.left * this.options.scaleZoomOut
            };
        }
        return zoomTypePosition;
    },
    _goToSelectedPointInZoomInMap: function(pointerCoordinates) {
        var mapOffset = this.floorMap.offset();
        this.preferencesCoor.x = (pointerCoordinates.left - mapOffset.left) / this.options.scaleZoomOut;
        this.preferencesCoor.y = (pointerCoordinates.top - mapOffset.top) / this.options.scaleZoomOut;
        this.centerToPoint = true;
        this._toggleZoom();
    },
    _isClickEvent: function(data) {
        data.options.widget.mapMoved = true;
        if ($.isEmptyObject(data.pos) || data.pos.x === data.initPosition.x && data.pos.y === data.initPosition.y) {
            data.options.widget.mapMoved = false;
            if (data.options.widget.options.zoomType === "Out") {
                return true;
            }
        }
        return false;
    },
    _isSelectedRoom: function(roomData) {
        var isSelected = false;
        var isPreselected = roomData.hasOwnProperty("preselected") && roomData.preselected && this.options.initial;
        if (this.options.zoomType === "Out") {
            return false;
        }
        if (isPreselected || this.selectedRoomData && this.selectedRoomData.id === roomData.id) {
            isSelected = true;
        }
        return isSelected;
    },
    _getMapPosition: function() {
        var wDiff = this.floorMapContent.outerWidth(true) - this.element.width(), hDiff = this.floorMapContent.outerHeight(true) - this.element.height();
        wDiff = wDiff < 0 ? 0 : -wDiff;
        hDiff = hDiff < 0 ? 0 : -hDiff;
        return [ hDiff, 0, 0, wDiff ];
    },
    _getMapStructure: function(shapeData) {
        return `\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" mlns:xlink="http://www.w3.org/1999/xlink" class="maps-canvas" width="${shapeData.width}" height="${shapeData.height}">\n        <polyline points="${shapeData.points}" fill="#fff" stroke="#fff" stroke-width="1"></polyline>\n      </svg>\n    `;
    },
    _getPointerCoordinates: function() {
        var mapContainerOffset = this.element.offset();
        var pointerCoordinates = {
            top: mapContainerOffset.top + this.element.height() / 2,
            left: mapContainerOffset.left + this.element.width() / 2
        };
        return pointerCoordinates;
    },
    _getPreferencesCoordenates: function() {
        var pointerCoordinates = this._getPointerCoordinates();
        var mapOffset = this.floorMap.offset();
        return {
            x: this.options.zoomType === "In" ? (pointerCoordinates.left - mapOffset.left) / this.options.scaleZoomOut : (pointerCoordinates.left - mapOffset.left) * this.options.scaleZoomOut,
            y: this.options.zoomType === "In" ? (pointerCoordinates.top - mapOffset.top) / this.options.scaleZoomOut : (pointerCoordinates.top - mapOffset.top) * this.options.scaleZoomOut
        };
    },
    _getStructureData: function(structureData) {
        var canvasWidth = 0;
        var canvasHeight = 0;
        var coor = "";
        var data;
        for (var x = 0; x < structureData.length; x++) {
            data = structureData[x];
            canvasWidth = data.endX * this.options.ratio > canvasWidth ? data.endX * this.options.ratio : canvasWidth;
            canvasHeight = data.endY * this.options.ratio > canvasHeight ? data.endY * this.options.ratio : canvasHeight;
            coor += data.initX * this.options.ratio + "," + data.initY * this.options.ratio + " " + data.endX * this.options.ratio + "," + data.endY * this.options.ratio + " ";
        }
        return {
            points: coor,
            width: canvasWidth,
            height: canvasHeight
        };
    },
    _getZoomClass: function(index, className, state) {
        var $this = $(this);
        var classList = this.classList;
        if (!classList.contains("zoom-" + state)) {
            if (!$this.hasClass("zoom-in") && !$this.hasClass("zoom-out")) {
                return "zoom-" + state;
            } else if ($this.hasClass("zoom-out") && !$this.hasClass("zoom-in")) {
                $this.removeClass("zoom-out");
                return "zoom-in";
            } else if ($this.hasClass("zoom-in")) {
                $this.removeClass("zoom-in");
                return "zoom-out";
            }
        } else {
            return classList;
        }
    },
    _hasToCenterMapInPoint: function() {
        if (this.options.initial || !this.newMapFetched) {
            return true;
        } else {
            return false;
        }
    },
    _preventClickWhenDragging: function(ev) {
        var target = $(ev.target);
        var targetParent = target.parents(".room");
        if (targetParent.length && !targetParent.hasClass("prevent-click")) {
            targetParent.addClass("prevent-click");
        }
    },
    _saveRoomData: function(roomData, roomContainer) {
        if (!this.centerToPoint) {
            this.preferencesCoor = {
                x: roomData.x * this.options.ratio + roomData.hsize / 2 * this.options.ratio,
                y: roomData.y * this.options.ratio + roomData.vsize / 2 * this.options.ratio
            };
        }
        this.previousSelectedRoom = roomContainer;
        this.preselectedRoomInfo = roomData;
        this.selectedRoomData = roomData;
    },
    _setElementSize: function(elementData, zoomType, type) {
        var zoomSize = {};
        var test = {
            structure: {
                initX: "xst",
                initY: "yst",
                endX: "xend",
                endY: "yend"
            },
            room: {
                initX: "x",
                initY: "y",
                sizeX: "hsize",
                sizeY: "vsize"
            }
        };
        $.each(test[type], (key, value) => {
            zoomSize[key] = parseInt(elementData[value]) * this.options["scaleZoom" + zoomType];
        });
        $.extend(elementData, zoomSize);
    },
    _setMapSize: function() {
        var mapMargin = null;
        var initialMapSize = {
            outherHeight: this.floorMapCanvas.height() + this.options.streetsSize * 2 + this.options.defaultMargin * 2,
            outherWidth: this.floorMapCanvas.width() + this.options.streetsSize * 2 + this.options.defaultMargin * 2,
            height: this.floorMapCanvas.height() + this.options.streetsSize * 2,
            width: this.floorMapCanvas.width() + this.options.streetsSize * 2
        };
        this.mapContentMargin.leftRight = initialMapSize.outherWidth < this.element.width() ? (this.element.width() - initialMapSize.width) / 2 : this.options.defaultMargin;
        this.mapContentMargin.topBottom = initialMapSize.outherHeight < this.element.height() ? (this.element.height() - initialMapSize.height) / 2 : this.options.defaultMargin;
        mapMargin = this.mapContentMargin.topBottom === this.mapContentMargin.leftRight ? this.mapContentMargin.leftRight + "px" : this.mapContentMargin.topBottom + "px " + this.mapContentMargin.leftRight + "px";
        this.floorMapContent.css({
            width: this.floorMapCanvas.width() + this.options.streetsSize * 2,
            height: this.floorMapCanvas.height() + this.options.streetsSize * 2,
            margin: mapMargin
        });
        this._setMapContainerSize();
    },
    _setMapContainerSize: function() {
        var hasAdjustToWindow = false;
        var height = window.innerHeight ? window.innerHeight : $(window).height();
        if ($(window).width() > this.options.maxScreenWidth && this.options.adjustWindow && !isMobile.any()) {
            hasAdjustToWindow = true;
        }
        this.element.css({
            height: hasAdjustToWindow ? "580px" : height - this.options.offsetHeight - 5 + "px"
        });
        this._setMapPosition();
    },
    _setMapSizeAndInteraction: function(ev) {
        ev.data.widget._setMapContainerSize();
        ev.data.widget._applyInteractions();
    },
    _setSize: function(data, zoomType, type) {
        for (let x = 0; x < data.length; x++) {
            this._setElementSize(data[x], zoomType, type);
        }
    },
    _setMapPosition: function() {
        var positionData = {
            leftAvailable: this.floorMapContent.outerWidth(true) - this.element.width(),
            topAvailable: this.floorMapContent.outerHeight(true) - this.element.height(),
            centeredX: this.options.streetsSize + this.options.defaultMargin,
            centeredY: this.options.streetsSize + this.options.defaultMargin,
            left: null,
            top: null
        };
        if (this.floorMapContent.outerWidth(true) <= this.element.width()) {
            positionData.centeredX = this.options.streetsSize + this.mapContentMargin.leftRight;
        }
        if (this._hasToCenterMapInPoint()) {
            this._centerMapInPoint(positionData);
        } else if (this.newMapFetched) {
            this._centerMap(positionData);
        }
    },
    _setLeftMapPosition: function(positionData) {
        if (this.floorMapContent.outerWidth(true) < this.element.width()) {
            positionData.left = positionData.left / 2;
        } else {
            positionData.left = positionData.leftAvailable;
        }
    },
    _setTopMapPosition: function(positionData) {
        if (this.floorMapContent.outerHeight(true) < this.element.height()) {
            positionData.top = positionData.top / 2;
        } else {
            positionData.top = positionData.topAvailable;
        }
    },
    _setUpRoomContainer: function(roomData, roomContainer) {
        roomContainer.css({
            width: roomData.sizeX * this.options.ratio,
            height: roomData.sizeY * this.options.ratio,
            position: "absolute",
            top: roomData.initY * this.options.ratio,
            left: roomData.initX * this.options.ratio
        }).data("tcm", roomData.tcm).data("number", roomData.id);
    },
    _toggleZoom: function() {
        this.options.zoomType = this.options.zoomType === "In" ? "Out" : "In";
        if (this.mapMoved) {
            this.preferencesCoor = this._getPreferencesCoordenates();
        } else {
            this.preferencesCoor = {
                y: !this.preferencesCoor.y ? this.floorMapContent.data("zoom-" + this.options.zoomType.toLowerCase() + "-top") : this.preferencesCoor.y,
                x: !this.preferencesCoor.x ? this.floorMapContent.data("zoom-" + this.options.zoomType.toLowerCase() + "-left") : this.preferencesCoor.x
            };
        }
        this.renderMap();
        this.floorMap.trigger("toggleZoom", [ this.options.zoomType ]);
        if (this.options.zoomType === "In") {
            trackOCIZoomOutRoom(Globals.page_section, reservationIdOci);
        } else {
            trackOCIZoomInRoom(Globals.page_section, reservationIdOci);
        }
    },
    _setOption: function(key, value) {
        this._super(key, value);
        if (key === "data") {
            this.newMapFetched = true;
            this.renderMap();
        } else if (key !== "initial") {
            this._setMapSize();
            this._applyInteractions();
        }
    }
});

var templatesRoom = (() => {
    var _template = function(template, data) {
        var cursor = 0, code = "var r=[];\n", stack = [], re = /\{\{(.*?)\}\}/gim;
        var tpl = _parseTemplate(template);
        var variable = function(line, obj) {
            return line == "." ? obj : eval("try{obj." + line + ";} catch(e){try{this." + line + ";} catch(e){}}");
        };
        var block = function(obj) {
            var args = Array.prototype.slice.call(arguments, 1), out = "";
            if (Array.isArray(obj)) {
                for (var i = 0, len = obj.length; i < len; i++) {
                    var el = obj[i];
                    for (var i2 = 0, len2 = args.length; i2 < len2; i2++) {
                        out += typeof args[i2] === "function" ? args[i2].call(null, el) : args[i2];
                    }
                }
            } else if (obj) {
                for (var i = 0, len = args.length; i < len; i++) {
                    out += typeof args[i] === "function" ? args[i].call(null, obj) : args[i];
                }
            }
            return out;
        };
        var add = function(line, tag) {
            if (tag) {
                if (line.charAt(0) === "#") {
                    code += stack.length ? ", block(data." + stack + "." + line.slice(1) : "r.push(block(data." + line.slice(1);
                    stack.push(line.slice(1));
                } else if (line.charAt(0) === "/") {
                    stack.pop();
                    code += stack.length ? ")" : "));\n";
                } else {
                    if (stack.length) code += ', variable.bind(data, "' + line + '")'; else code += line === "." ? "r.push(el || data);\n" : "r.push(data." + line + ");\n";
                }
            } else {
                if (stack.length) code += ', "' + line.replace(/"/g, '"') + '"'; else code += line != "" ? 'r.push("' + line.replace(/"/g, '"') + '");\n' : "";
            }
        };
        while (match = re.exec(tpl)) {
            add(tpl.slice(cursor, match.index));
            add(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(tpl.substr(cursor, tpl.length - cursor));
        code += 'return r.join("");';
        try {
            result = eval("(function(data){" + code + "})");
        } catch (err) {
            console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n");
        }
        return result;
    };
    var _parseTemplate = function(template) {
        tpl = template.replace(new RegExp("\x3c!--[\\s\\S]*?(?:--\x3e)?" + "\x3c!---+>?" + "|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?" + "|<[?][^>]*>?", "g"), "");
        tpl = tpl.replace(new RegExp('"', "g"), "'");
        tpl = tpl.replace(new RegExp(/\r?\n|\r/g, "g"), "");
        return tpl;
    };
    var getTemplate = function(tpl, data) {
        return _template(tpl)(data);
    };
    return {
        getTemplate: getTemplate
    };
})();

var mChooseRoom = function(window) {
    var $header = $(".header-mob-v2");
    var $headerTitle = $(".nh-header");
    var $pCioRoomMap = $(".p-cio-roommap");
    var $introText = $pCioRoomMap.find(".text-intro");
    var $mFloorMap = $pCioRoomMap.find(".m-floor-map");
    var $floorMapHeader = $mFloorMap.find(".floor-map-header");
    var $floorMapContainer = $mFloorMap.find(".maps-container");
    var $floorMapContent = $floorMapContainer.find(".map-content");
    var $floorMapCanvas = $floorMapContent.find(".maps-canvas");
    var $floorSelectorDropdown = $mFloorMap.find(".m-floor-selector-dropdown");
    var $floorLegend = $mFloorMap.find(".m-floor-legend");
    var $sidebarPanel = $("#sidebar-panel");
    var $modalRoomSelected = $("#modal-room-selected");
    var $preselectedRoomPanel = $mFloorMap.find(".m-cio-room-preselected");
    var $preselectedCloseButton = $preselectedRoomPanel.find("button.js-room-preselected-close");
    var $form = $("#roomNumber");
    var $hiddenForm = $form.find("input#hidden_roomNumber");
    var $loading = $mFloorMap.find(".spinner");
    var $footerMobile = $(".footer-mob");
    var isBigScreen;
    var isMobileDevice = isMobile.any();
    var initialFloor = true;
    var selectedFloor = null;
    var onceLoad = true;
    var hotelBackCode, reservationId, JsonBean, roomPreAssignedBean, floorPlanta, dataBuild, dataPreasigned, roomCategoryCode, roomPreferences;
    function init(building, floor, room) {
        hotelBackCode = displayObj.hotelBackCode;
        reservationId = displayObj.reservationId;
        JsonBean = displayObj.buildingAndFloorDataResponse;
        var buildings = JsonBean.buildings;
        roomPreAssignedBean = JsonBean.preAssignedRoom.roomPreAssigned;
        var roomPreAssigned = roomPreAssignedBean.floor;
        var buildingPreAssigned = roomPreAssignedBean.building;
        roomCategoryCode = roomPreAssignedBean.roomCategoryCode;
        roomPreferences = displayObj.preferences;
        var buildPre = buildings.filter(el => el.idBuilding == buildingPreAssigned);
        var floorPre = (roomPreAssigned, buildPre[0].floors).filter(el => el.idFloor == roomPreAssigned);
        floorPlanta = floorPre[0].jsonplanta;
        dataPreasigned = [ buildPre[0].idBuilding, floorPre[0].idFloor ];
        dataBuild = [ buildPre[0].idBuilding, floorPre[0].idFloor ];
        $loading.show();
        $footerMobile.hide();
        $mFloorMap.on("onMapLoaded", _loadPreselectedRoomData).on("toggleZoom", _toggleZoom);
        requestBuildingInfo();
        $floorMapContainer.floorMap({
            adjustWindow: true,
            offsetHeight: _getOffsetHeight(),
            maxScreenWidth: globalConfig.smBreak
        }).on("floormaponroomselected", _showRoomDetail);
        _setViewContent();
        $(window).on("resize", _setViewContent);
        $floorSelectorDropdown.on("floorselectorchange", _onSelectedFloor);
        $sidebarPanel.on(selectedRoomPanel.PANEL_CLOSE_EVENT, _onRoomInfoCloseHandler);
        $modalRoomSelected.on(mCioRoomSelected.MODAL_CLOSE_EVENT, _onRoomInfoCloseHandler);
        $preselectedCloseButton.on("click", _onClosePreselectedRoom);
        $(document).on("click", ".submitMap", _submitForm);
    }
    function _getOffsetHeight() {
        var offsetHeight = $headerTitle.outerHeight(true);
        isBigScreen = globalConfig.windowWidth > globalConfig.xsBreak;
        if (isBigScreen && isMobileDevice) {
            offsetHeight += $floorMapHeader.outerHeight() + 5;
        }
        if ($header.is(":visible")) {
            offsetHeight += $header.outerHeight();
        }
        return offsetHeight;
    }
    function requestBuildingInfo() {
        var promise = new Promise(function(resolve, reject) {
            resolve();
        });
        promise.then(function(response) {
            $floorSelectorDropdown.floorSelector("option", "hotelInfo", JsonBean);
        });
        $floorSelectorDropdown.floorSelector();
    }
    function getFloor(floorInfo, buildingDescription) {
        dataBuild[0] = buildingDescription;
        dataBuild[1] = floorInfo.idFloor;
        var url = apiUrlPath + "/OCI/" + reservationId + "/" + hotelBackCode + "/select/blueprint/" + buildingDescription + "/" + floorInfo.idFloor + "?language=" + language;
        var promise = null;
        var data = roomPreferences;
        $floorMapCanvas.hide();
        $loading.show();
        if (onceLoad || JSON.stringify(dataPreasigned) === JSON.stringify(dataBuild)) {
            promise = new Promise(function(resolve, reject) {
                resolve(floorPlanta);
            });
            onceLoad = false;
        } else {
            promise = $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(data),
                processData: false,
                async: true,
                dataType: "json",
                contentType: "application/json"
            });
        }
        promise.then(function(response) {
            $floorMapContainer.floorMap("option", "data", response);
            _setFloatElementsHeight();
            _displayLegend(response, roomPreferences);
            $loading.hide();
            trackOCIChangeFloor(Globals.page_section, hotelBackCode, dataBuild[1]);
        }, function(error) {
            $loading.hide();
        });
    }
    function _displayLegend(dataFloor, roomPreferences) {
        let rooms = $floorMapContent.find("div.map").find(".room");
        let roomstype = [];
        var upselling = {
            "-preferences": ".room-available-preferences",
            "-upselling": ".room-upselling",
            "-duplex": ".room-duplex",
            "-lift": ".room-lift",
            "-stairs": ".room-stairs",
            "-gym": ".room-gym",
            "-spa": ".room-spa",
            "-swimming": ".room-swimming",
            "-breakfast": ".room-breakfast",
            "-courtyard": ".room-courtyard"
        };
        rooms.each(function(index, value) {
            roomClass = $(value).attr("class");
            if (roomClass.indexOf("-noavailable") >= 0) {
                roomstype.push(".room-noavailable");
            } else {
                if (roomClass.indexOf("-available") >= 0) roomstype.push(".room-available");
                Object.entries(upselling).forEach(([key, value]) => {
                    if (roomClass.indexOf(key) >= 0) {
                        roomstype.push(value);
                    }
                });
            }
        });
        let calles = [ "poi", "monument", "sea", "park" ];
        calles.forEach(function(element) {
            var cl = "." + element;
            if ($floorMapContent.find(cl).length) roomstype.push("." + element);
        });
        let lista = [ ...new Set(roomstype) ];
        let preferences = typeof roomPreferences !== "undefined" && roomPreferences.features !== null ? roomPreferences.features.length : 0;
        if (preferences == 0) {
            if (!lista.includes(".room-available-preferences") && lista.includes(".room-available")) {
                $floorMapContent.find("div.map .room-available").toggleClass("room-available-preferences");
                lista.push(".room-available-preferences");
            }
        }
        $element = $(".legend-room > li");
        $element.addClass("hide");
        lista.forEach(function(element) {
            if (element == ".room-available") {
                $element.find(element).not(".room-duplex").closest("li").removeClass("hide").addClass("legendtrue");
            } else $element.find(element).closest("li").removeClass("hide").addClass("legendtrue");
        });
        let legend = $("ul.legend-room");
        legend.each(function() {
            if ($(this).find(".legendtrue").length > 0) {
                $(this).find("li").first().removeClass("hide");
            }
        });
    }
    function _loadPreselectedRoomData(ev, loadPreselectedRoomData) {
        if (initialFloor) {
            if (loadPreselectedRoomData) {
                var selectorPreselect = $(".m-cio-room-preselected");
                selectorPreselect.find(".room-content span").html(roomPreAssignedBean.roomNumber);
                selectorPreselect.find(".info-room").find(".h5").html(roomPreAssignedBean.roomName);
                selectorPreselect.find("#txtFloor").html(parseInt(roomPreAssignedBean.floor));
                selectorPreselect.find("#txtBuilding").html(parseInt(roomPreAssignedBean.building) || roomPreAssignedBean.building);
                selectedRoomPanel.showPanel("room", "preselected");
                $preselectedRoomPanel.removeClass("close");
            }
        }
        initialFloor = false;
    }
    function _toggleZoom() {
        selectedRoomPanel.hidePanel();
    }
    function _showRoomDetail(ev, data) {
        if (data.isSelected) {
            if (isBigScreen) {
                selectedRoomPanel.showPanel(data.type, "selected");
            } else {
                $preselectedRoomPanel.addClass("close");
                mCioRoomSelected.setModalSelectedTemplate(data.type);
                $("#modal-room-selected").modal("show");
            }
        } else {
            if (isBigScreen) {
                selectedRoomPanel.showPanel(data.type, "selected");
            } else {
                $preselectedRoomPanel.addClass("close");
                mCioRoomSelected.setModalSelectedTemplate(data.type);
                $("#modal-room-selected").modal("show");
            }
        }
    }
    function _setViewContent() {
        isBigScreen = globalConfig.windowWidth > globalConfig.xsBreak;
        $introText.toggle(isBigScreen && !isMobileDevice);
        $mFloorMap.css({
            "margin-bottom": isBigScreen ? "40px" : 0
        });
        $headerTitle.css({
            "margin-bottom": isBigScreen ? "30px" : 0
        });
        $floorMapContainer.floorMap("option", "offsetHeight", _getOffsetHeight());
        _setFloatElementsHeight();
    }
    function _setFloatElementsHeight() {
        if ($(window).outerWidth() >= 768) {
            var mapContainerHeight = $floorMapContainer.outerHeight();
            $floorSelectorDropdown.floorSelector("setFloorListHeight", mapContainerHeight);
            $floorLegend.find(".m-cio-room-legend").css("max-height", mapContainerHeight);
        } else {
            var floorSelectorDropdownHeight = $floorSelectorDropdown.outerHeight();
            var viewportHeight = $(window).outerHeight();
            $floorSelectorDropdown.floorSelector("setFloorListHeight", viewportHeight - floorSelectorDropdownHeight);
        }
    }
    function _onSelectedFloor(e, selectedFloor) {
        $floorMapContainer.floorMap("option", "initial", initialFloor);
        selectedRoomPanel.closePanel();
        getFloor(selectedFloor.selectedFloorInfo, selectedFloor.buildingDescription);
        window.scrollTo(0, 0);
    }
    function _onRoomInfoCloseHandler(e) {
        if ($(".m-cio-room-selected-info").length && isBigScreen) {} else $floorMapContainer.floorMap("deselectRoom");
        $("#modal-room-selected").find(".modal-body").html("");
    }
    function _onClosePreselectedRoom(e) {
        $preselectedRoomPanel.addClass("close");
        $floorMapContainer.floorMap("deselectRoom");
    }
    function _submitForm(e) {
        var roomSelected = mChooseRoom.hiddenForm.val();
        if (roomSelected.length) {
            $(".submitMap").prop("disabled", true);
            $form.submit();
        }
    }
    return {
        init: init,
        getFloor: getFloor,
        getFloorBuilding() {
            return dataBuild;
        },
        hiddenForm: $hiddenForm
    };
}(window);

$(function() {
    if ($(".p-cio-roommap").length && (typeof displayObj !== "undefined" && displayObj)) {
        mChooseRoom.init();
        mCioRoomSelected.init();
        selectedRoomPanel.init();
    }
});

var mCioPreferences = (() => {
    var mCioPreferencesView = $(".m-cio-preferences");
    var warningTooMuchOptions = mCioPreferencesView.find(".js-warning-chosen-options");
    var chooseWarningCounter = parseInt(mCioPreferencesView.attr("data-choose-warning-counter"));
    function init() {
        mCioPreferencesView.find("input").on("change", _onChooseInputChange);
        $("#btn-preferences").on("click", _submitForm);
    }
    function _onChooseInputChange(e) {
        if (getChoosenOptionsValue() >= chooseWarningCounter) {
            warningTooMuchOptions.show();
        } else {
            warningTooMuchOptions.hide();
        }
    }
    function getChoosenOptionsValue() {
        let inputs = mCioPreferencesView.find("input");
        let totalChosenCount = 0;
        inputs.each((index, input) => {
            let $input = $(input);
            if ($input.is("checked") || $input.prop("checked") === true) {
                let inputCountValue = parseInt($input.attr("data-count-value")) > 0 ? parseInt($input.attr("data-count-value")) : 0;
                totalChosenCount += inputCountValue;
            }
        });
        return totalChosenCount;
    }
    function _submitForm(event) {
        event.preventDefault();
        var $selectedSimple = $("input[type=radio]").filter(":checked");
        var $selectedMultiple = $("input[type=checkbox]").filter(":checked");
        _fillSimpleHiddenElements($selectedSimple);
        _fillMultipleHiddenElements($selectedMultiple);
        $("button:submit").prop("disabled", true);
        $("#preferences").submit();
        trackOCIPreferences(Globals.page_section, reservationIdOci);
    }
    function _fillSimpleHiddenElements($element) {
        $element.each(function() {
            var $hiddenElement = $("#hidden-" + this.name);
            $hiddenElement.val(this.value);
        });
    }
    function _fillMultipleHiddenElements($element) {
        $element.each(function() {
            $hiddenElement = $("#hidden-" + this.id);
            $hiddenElement.val(this.value);
        });
    }
    return {
        init: init
    };
})();

$(() => {
    if ($(".m-cio-preferences").length) {
        mCioPreferences.init();
    }
});

var mModalLogin = (() => {
    var modalLoginView = $("#m-modal-login");
    var modalLoginHeader = modalLoginView.find(".modal-header");
    var navigator;
    var LOGIN_FORM = typeof pageData !== "undefined" ? pageData.loginForm : "";
    var RECOVER_PASSWORD = typeof pageData !== "undefined" ? pageData.recoverPassword : "";
    var RECOVER_PASSWORD_CONFIRMATION = typeof pageData !== "undefined" ? pageData.confirmationPassword : "";
    const MODAL_BODY_CLS = "modal-body";
    const MODAL_DIALOG = "modal-dialog";
    const MODAL_TITLE_CLS = "modal-title";
    const headerTranslations = {
        LOGIN_FORM: modalLoginView.attr("data-login-header-translation"),
        RECOVER_PASSWORD: modalLoginView.attr("data-login-recover-password-translation")
    };
    function init() {
        navigator = new Navigator(modalLoginView, LOGIN_FORM, "." + MODAL_BODY_CLS, _onNavigationComplete);
        modalLoginView.on("shown.bs.modal", _initialLoginModalState);
    }
    function getNavigator() {
        if (modalLoginView != "undefined") return navigator;
    }
    function _initialLoginModalState() {
        navigator.initViewElementState();
    }
    function _onNavigationComplete() {
        modalLoginView.trigger(mModals.MODAL_UPDATE_CONTENT_EVENT);
        switch (navigator.getActualState()) {
          case LOGIN_FORM:
            mLoginForm.init();
            _setModalSize("modal-xs");
            toggleNavigationHeader(headerTranslations.LOGIN_FORM);
            commonFormSetup.init();
            break;

          case RECOVER_PASSWORD:
            _setModalSize("modal-xs");
            mLoginRecoverPassword.init();
            toggleNavigationHeader(headerTranslations.RECOVER_PASSWORD);
            commonFormSetup.init();
            break;

          case RECOVER_PASSWORD_CONFIRMATION:
            _setModalSize("modal-xs");
            mLoginRecoverPasswordConfirmation.init();
            break;
        }
    }
    function toggleNavigationHeader(headerText) {
        if (headerText && headerText.length > 0) {
            modalLoginHeader.find("." + MODAL_TITLE_CLS).html(headerText);
        }
    }
    function _setModalSize(modalSizeCls) {
        var modalDialog = modalLoginView.find("." + MODAL_DIALOG);
        modalDialog.removeClass("modal-xs modal-sm modal-lg");
        modalDialog.addClass(modalSizeCls);
    }
    function getModalView() {
        if (modalLoginView != "undefined") return modalLoginView;
    }
    return {
        init: init,
        LOGIN_FORM: LOGIN_FORM,
        RECOVER_PASSWORD: RECOVER_PASSWORD,
        RECOVER_PASSWORD_CONFIRMATION: RECOVER_PASSWORD_CONFIRMATION,
        getNavigator: getNavigator,
        getModalView: getModalView
    };
})();

$(() => {
    if ($("#m-modal-login").length) {
        mModalLogin.init();
    }
});

var mLoginForm = (() => {
    var mLoginFormView;
    var forgottenPassword;
    var wrongCredentials;
    var $loginForm;
    var $userInput;
    var $passwordInput;
    var $modalLogin;
    var $loginForm;
    function init() {
        mLoginFormView = $(".m-login-form");
        forgottenPassword = mLoginFormView.find(".js-forgotten-password");
        wrongCredentials = mLoginFormView.find(".js-wrong-credentials");
        $loginForm = mLoginFormView.find("form");
        $userInput = $loginForm.find("input#username");
        $passwordInput = $loginForm.find("input#password");
        $modalLogin = mModalLogin.getModalView();
        _setupForm();
        forgottenPassword.on("click", _handlerForgottenPassword);
        $loginForm.validator({
            disable: false
        }).on("submit", _onLoginFormSubmit).off("input.bs.validator focusout.bs.validator");
    }
    function _setupForm() {
        var loginMessage;
        var loginCallback;
        if ($modalLogin.length) {
            loginMessage = $modalLogin.data("login-message-error");
            loginCallback = $modalLogin.data("login-callback");
            $loginForm.attr("data-login-message-error", loginMessage);
            $loginForm.attr("data-callback", loginCallback);
        }
    }
    function _handlerForgottenPassword() {
        mLoginRecoverPassword.setDefaultEmail(getUsername());
        mModalLogin.getNavigator().navigate(mModalLogin.RECOVER_PASSWORD);
    }
    function _onLoginFormSubmit(ev) {
        var $form = $(this);
        var loginData = {
            user: $userInput.val(),
            password: $passwordInput.val(),
            defaultErrorMsg: $form.data("login-message-error") || ""
        };
        toggleLoadingButton($form, true);
        if (ev.isDefaultPrevented()) {
            toggleLoadingButton($form, false);
        } else {
            ev.preventDefault();
            if ($(".p-cio-guest-data").length) {
                Globals.ssoUrl = "/ci-online/guest-form/access";
                loginSSO(loginData).then(_onSubmitLoginSuccess, _onSubmitLoginFailure);
            } else login.loginSSO(loginData).then(_onSubmitLoginSuccess, _onSubmitLoginFailure);
            window.onbeforeunload = null;
        }
    }
    function loginSSO(loginData) {
        var ssoUrl = typeof Globals.ssoUrl !== "undefined" ? Globals.ssoUrl : null;
        var ssoService = typeof Globals.ssoService !== "undefined" ? Globals.ssoService : null;
        var url;
        var deferred = $.Deferred();
        var errorMessage;
        var promise;
        defaultErrorMsg = loginData.defaultErrorMsg;
        url = ssoUrl;
        var params = {
            service: ssoService,
            username: loginData.user,
            password: encodeURIComponent(loginData.password)
        };
        if (loginData.user && loginData.password && ssoService && ssoUrl) {
            promise = $.ajax({
                method: "POST",
                url: url,
                data: JSON.stringify(params),
                async: false,
                dataType: "json",
                contentType: "application/json"
            });
            return promise.then(function(res) {
                if (res) {
                    return res;
                } else {
                    return {
                        message: "Login Error"
                    };
                }
            }, function(jqXHR, exception) {
                if (jqXHR.status === 0) {
                    errorMessage = "Not connect.\n Verify Network.";
                } else if (jqXHR.status == 404) {
                    errorMessage = "Requested page not found. [404]";
                } else if (jqXHR.status == 500) {
                    errorMessage = "Internal Server Error [500].";
                } else if (exception === "parsererror") {
                    errorMessage = "Requested JSON parse failed.";
                } else if (exception === "timeout") {
                    errorMessage = "Time out error.";
                } else if (exception === "abort") {
                    errorMessage = "Ajax request aborted.";
                } else {
                    errorMessage = "Login Error";
                }
                return {
                    message: errorMessage
                };
            });
        } else {
            console.log("One of this params are empty: user, password, Globals.ssoService or Globals.ssoUrl");
            errorMessage = loginData.user && loginData.password ? defaultErrorMsg : "One of this fields are empty: user, password";
            deferred.reject({
                message: errorMessage
            });
            return deferred.promise();
        }
    }
    function _onSubmitLoginSuccess(response) {
        var loginSuccessCallbackName = $loginForm.data("callback");
        var loginSuccessCallback = getFunctionByName(loginSuccessCallbackName);
        var isFunction = typeof loginSuccessCallback === "function";
        utils.callTrackForms("success", "loginRewardsForm", "success");
        if (isFunction) {
            loginSuccessCallback(response).then(function() {
                if ($modalLogin.length) {
                    trackOCILogin(Globals.page_section, reservationIdOci);
                    $modalLogin.modal("hide");
                }
            }, function(error) {
                _onSubmitLoginFailure(error);
            });
        } else {
            window.location = response.targetUrl;
        }
    }
    function _onSubmitLoginFailure(error) {
        toggleLoadingButton($loginForm, false);
        $userInput.closest(".form-group").addClass("has-error");
        $passwordInput.closest(".form-group").addClass("has-error");
        $userInput.closest(".form-group").removeClass("has-success");
        $passwordInput.closest(".form-group").removeClass("has-success");
        wrongCredentials.find("p").html(error.message);
        wrongCredentials.removeClass("hidden");
    }
    function _toggleWrongCredentials(visibility) {
        var userInput = mLoginFormView.find("form input#username");
        var passwordInput = mLoginFormView.find("form input#password");
        if (visibility) {
            userInput.closest(".form-group").addClass("has-error");
            passwordInput.closest(".form-group").addClass("has-error");
            userInput.on("change", _onWrongInputChanges);
            passwordInput.on("change", _onWrongInputChanges);
            wrongCredentials.removeClass("hidden");
        } else {
            wrongCredentials.addClass("hidden");
        }
    }
    function _onWrongInputChanges(e) {
        var $this = $(this);
        wrongCredentials.addClass("hidden");
        $this.off("change", _onWrongInputChanges);
    }
    function getUsername() {
        return mLoginFormView.find("form input#username").val();
    }
    return {
        init: init,
        getUsername: getUsername
    };
})();

$(() => {
    mLoginForm.init();
});

var mLoginRecoverPassword = (() => {
    var mLoginRecoverPasswordView;
    var backButton;
    var errorBlock;
    var errorMessage;
    var defaultEmail;
    var $recoverPasswordForm;
    var $email;
    function init() {
        mLoginRecoverPasswordView = $(".m-login-recover-password");
        $recoverPasswordForm = mLoginRecoverPasswordView.find("form");
        $email = $recoverPasswordForm.find("#mail");
        backButton = mLoginRecoverPasswordView.find(".js-back-login-form");
        errorBlock = mLoginRecoverPasswordView.find(".help-block");
        errorMessage = errorBlock.find("li").eq(0);
        _setEmailValue();
        backButton.on("click", _backButtonHandler);
        mLoginRecoverPasswordView.find("form").validator({
            disable: false
        }).on("submit", _onRecoverPasswordFormSubmit);
    }
    function _setEmailValue() {
        if (defaultEmail && defaultEmail.length > 0) {
            var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (pattern.test(defaultEmail)) {
                mLoginRecoverPasswordView.find("form input#mail").val(defaultEmail);
                defaultEmail = "";
            }
        }
    }
    function _backButtonHandler(e) {
        mModalLogin.getNavigator().goBackHandler();
    }
    function toggleEmailNonExistent(visibility) {
        var mailInput = mLoginRecoverPasswordView.find("form input#mail");
        if (visibility) {
            mailInput.closest(".form-group").addClass("has-error");
        } else {}
    }
    function _onRecoverPasswordFormSubmit(e) {
        var $form = $(this);
        toggleLoadingButton($form, true);
        if (e.isDefaultPrevented()) {
            toggleLoadingButton($form, false);
        } else {
            e.preventDefault();
            _submitRecoverPasswordEmail();
        }
    }
    function _submitRecoverPasswordEmail() {
        var url = "/nhrewards/reset-password";
        var errorMessage;
        $.ajax({
            type: "POST",
            url: url,
            data: "email=" + $email.val() + "&cmp=" + $recoverPasswordForm.find("#cmp").val() + +"&cmpView=" + $recoverPasswordForm.find("#cmpView").val(),
            async: true,
            dataType: "json"
        }).then(function(response) {
            mModalLogin.getNavigator().navigate(mModalLogin.RECOVER_PASSWORD_CONFIRMATION);
        }, function(error) {
            errorMessage = `<ul class="list-unstyled"><li>${error.response}</li></ul>`;
            $email.val("");
            $email.closest(".form-group").addClass("has-error");
            $email.closest(".help-block").html(errorMessage);
        });
    }
    function setDefaultEmail(email) {
        defaultEmail = email;
    }
    return {
        init: init,
        setDefaultEmail: setDefaultEmail
    };
})();

$(() => {
    mLoginRecoverPassword.init();
});

var mLoginRecoverPasswordConfirmation = (() => {
    var mLoginRecoverPasswordConfirmationView;
    var goBackLoginCTA;
    function init() {
        mLoginRecoverPasswordConfirmationView = $(".m-login-recover-password-confirmation");
        goBackLoginCTA = mLoginRecoverPasswordConfirmationView.find(".js-go-back-login");
        goBackLoginCTA.on("click", _goBackLoginCTAHandler);
    }
    function _goBackLoginCTAHandler(e) {
        mModalLogin.getNavigator().navigate(mModalLogin.LOGIN_FORM);
    }
    return {
        init: init
    };
})();

$(() => {
    mLoginRecoverPasswordConfirmation.init();
});

var modalSendReservation = (() => {
    var modalSendReservationView = $("#modal-send-reservation");
    var modalSendReservationForm = modalSendReservationView.find("form");
    var modalSendReservationSuccess = modalSendReservationView.find(".modal-send-reservation-success-content");
    function init() {
        modalSendReservationForm.validator({
            disable: false,
            custom: {
                multipleemails: validateMultipleEmails
            }
        }).on("submit", function(e) {
            if (e.isDefaultPrevented()) {
                modalSendReservationSuccess.addClass("hide");
            } else {
                modalSendReservationForm.addClass("hide");
                modalSendReservationSuccess.removeClass("hide");
                e.preventDefault();
            }
        });
        modalSendReservationView.on("show.bs.modal", _onShowSendReservationModal);
        modalSendReservationView.on("hide.bs.modal", _onHideSendReservationModal);
    }
    function _onShowSendReservationModal(e) {
        modalSendReservationForm.removeClass("hide");
        modalSendReservationSuccess.addClass("hide");
    }
    function _onHideSendReservationModal(e) {
        modalSendReservationForm.addClass("hide");
        modalSendReservationSuccess.removeClass("hide");
    }
    return {
        init: init
    };
})();

$(() => {
    modalSendReservation.init();
});

var mCustomizeRoomDetail = function() {
    var $roomsContainer = $("#rooms-detail");
    var $rooms = $roomsContainer.find(".panel");
    var rooms = [];
    function init() {
        var $room;
        var room;
        $.each($rooms, function(index, element) {
            $room = $(this);
            room = new CustomizeRoom($room);
            room.init();
        });
    }
    return {
        init: init
    };
}();

$(function() {
    mCustomizeRoomDetail.init();
});

class CustomizeRoom {
    constructor($room) {
        this.$room = $room;
        this.hostsAmount = 1;
    }
    init() {
        this.$addHostBtn = this.$room.find(".js-add-person");
        this.maxHostsAllowed = this.$addHostBtn.data("max-add");
        this.$hostData = this.$room.find(".host-data-new");
        this.$hosts = this.$hostData.find(".data");
        this.$removeHostBtn = this.$hostData.find(".btn-ico");
        this.$removeHostBtn.hide();
        this.$addHostBtn.on("click", {
            room: this
        }, this._addNewHost);
        this.$removeHostBtn.on("click", {
            room: this
        }, this._removeNewHost);
    }
    _addNewHost(ev) {
        var room = ev.data.room;
        var currentHost;
        if (room.hostsAmount < room.maxHostsAllowed) {
            currentHost = room.$hosts.eq(room.hostsAmount);
            currentHost.show();
            room.hostsAmount++;
            if (room.hostsAmount == room.maxHostsAllowed) {
                room.$addHostBtn.hide();
            }
            currentHost.prev().find(".btn-ico").hide();
            currentHost.find(".btn-ico").show();
        }
    }
    _removeNewHost(ev) {
        var room = ev.data.room;
        var currentHost = room.$hosts.eq(room.hostsAmount - 1);
        if (room.hostsAmount > 1) {
            currentHost.hide();
            currentHost.find("input").val("");
            room.$addHostBtn.show();
            currentHost.prev().find(".btn-ico").show();
            room.hostsAmount--;
            if (room.hostsAmount === 1) {
                currentHost.prev().find(".btn-ico").hide();
            }
        }
    }
}

var mPaymentMethods = (() => {
    var paymentMethods = $(".m-payment-methods");
    var flexiblePaymentMethodSelector = paymentMethods.find("#flexible-credit-method-select");
    var flexiblePaymentMethodOptions = paymentMethods.find(".flexible-credit-options");
    var paymentRadios = paymentMethods.find('.radio input[type="radio"]');
    var paymentInfo = paymentMethods.find(".payment-method-info");
    function init() {
        _initPaymentInfo();
        _initFlexiblePaymentOptions();
        paymentRadios.on("change", _onSelectPaymentMethod);
        flexiblePaymentMethodSelector.on("changed.bs.select", _onFlexiblePaymentMethodSelectorChange);
    }
    function _onSelectPaymentMethod(e) {
        var radioInput = $(this);
        if (e.target.checked) {
            _showPaymentInfo(radioInput);
        }
        _requiredBono($(e.target).data("bono-required"), $(e.target));
    }
    function _initPaymentInfo() {
        paymentRadios.each((index, radio) => {
            var $radio = $(radio);
            if ($radio.is(":checked")) {
                _showPaymentInfo($radio);
            }
        });
    }
    function _showPaymentInfo($radioInput) {
        paymentInfo.hide();
        var paymentInfoTarget = $radioInput.data("collapsible-target");
        paymentMethods.find(paymentInfoTarget).show();
    }
    function _onFlexiblePaymentMethodSelectorChange(e, clickedIndex, isSelected, previousValue) {
        var $selectedOption = $(e.target.options[e.target.selectedIndex]);
        _showFlexiblePaymentMethodOptions($selectedOption);
    }
    function _initFlexiblePaymentOptions() {
        var flexibleCreditSelector = flexiblePaymentMethodSelector[0];
        if (!flexibleCreditSelector) {
            return;
        }
        var $selectedOption = $(flexibleCreditSelector[flexibleCreditSelector.selectedIndex]);
        _showFlexiblePaymentMethodOptions($selectedOption);
    }
    function _showFlexiblePaymentMethodOptions($selectedOption) {
        flexiblePaymentMethodOptions.hide();
        var collapsibleTarget = $selectedOption.data("collapsible-target");
        if (collapsibleTarget && collapsibleTarget.length > 0) {
            var collapsedOptions = paymentMethods.find(collapsibleTarget);
            collapsedOptions.show();
            collapsedOptions.find("input:checked").prop("checked", false);
        }
    }
    function _requiredBono(required, $input) {
        var bonoInput = $($input.data("collapsible-target")).find("#bono");
        if (required === true) {
            bonoInput.attr("data-validate", required);
        } else {
            bonoInput.attr("data-validate", false);
        }
        $input.closest("form").validator("update");
    }
    return {
        init: init
    };
})();

$(() => {
    mPaymentMethods.init();
});

var landingCarousel = (() => {
    var landingCarouselModules = $(".m-landing-carousel");
    const commonOwlConfig = {
        items: 1,
        margin: 0,
        nav: false,
        loop: true,
        dots: false
    };
    function init() {
        landingCarouselModules.each((index, landingCarousel) => {
            let $landingCarousel = $(landingCarousel);
            _initOwlCarousel($landingCarousel);
        });
    }
    function _initOwlCarousel($landingCarousel) {
        var carouselChildren = $landingCarousel.find(".carousel-slide");
        var owlCustomOptions = $landingCarousel.data("owl-carousel-options") ? $landingCarousel.data("owl-carousel-options") : {};
        var owlConfig = _getMultipleSlideCarouselConfig(owlCustomOptions);
        if (carouselChildren.length === 1) {
            owlConfig = _getSingleSlideCarouselConfig(owlCustomOptions);
        }
        if (carouselChildren && carouselChildren.length > 0) {
            $landingCarousel.owlCarousel(owlConfig);
        }
    }
    function _getSingleSlideCarouselConfig(owlCustomOptions) {
        var owlConfig = {};
        owlConfig = Object.assign(owlConfig, commonOwlConfig, {
            nav: false,
            loop: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false
        }, owlCustomOptions);
        return owlConfig;
    }
    function _getMultipleSlideCarouselConfig(owlCustomOptions) {
        var owlConfig = {};
        owlConfig = Object.assign(owlConfig, commonOwlConfig, {
            nav: true,
            navText: [ `<span class="owl-prev-icon nh-ic-chevron"></span>`, `<span class="owl-next-icon nh-ic-chevron"></span>` ]
        }, owlCustomOptions);
        return owlConfig;
    }
    return {
        init: init
    };
})();

$(() => {
    landingCarousel.init();
});

var mTotalPrice = function() {
    var $priceSummary = $("#price-summary");
    var $collapseTriggers = $priceSummary.find("[data-toggle='collapse']");
    var $collapsePanels = $priceSummary.find(".panel-collapse");
    function init() {
        $collapsePanels.on("show.bs.collapse", {
            state: "open"
        }, _togglePriceSummaryCollapseHeaderText).on("hide.bs.collapse", {
            state: "close"
        }, _togglePriceSummaryCollapseHeaderText);
    }
    function _togglePriceSummaryCollapseHeaderText(ev) {
        $collapseTriggers.html($(this).data("text-" + ev.data.state));
    }
    return {
        init: init
    };
}();

$(function() {
    mTotalPrice.init();
});

var hotelMapModule = function() {
    var hotelMapView = $(".m-hotel-map");
    function init() {
        _loadGoogleMap();
    }
    function _loadGoogleMap() {
        utils.loadGoogleMapScript().done(_onLoadGooglepMap);
    }
    function _onLoadGooglepMap(script, textStatus) {
        hotelMapView.each((index, mapContainer) => {
            var map = new google.maps.Map(mapContainer, _getDefaultConfig());
        });
    }
    function _getDefaultConfig() {
        const mapConfig = {
            center: {
                lat: 40.3233764,
                lng: -3.845045
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            navigationControl: true,
            panControl: true,
            zoomControl: true,
            scaleControl: true,
            streetViewControl: false,
            zoom: 3,
            minZoom: 5,
            maxZoom: 20,
            scrollwheel: true,
            draggable: true
        };
        return mapConfig;
    }
    return {
        init: init
    };
}();

$(function() {
    hotelMapModule.init();
});

var yourRoomChoose = (() => {
    var yourRoomChooseView = $(".m-room-card-choose");
    var yourRoomImage = yourRoomChooseView.find(".js-room-card-image");
    function init() {
        yourRoomImage.on("click", _onRoomImageClick);
        $("button:submit").on("click", function() {
            var btn = $(this);
            btn.prop("disabled", true);
            btn.closest("form").submit();
        });
    }
    function _onRoomImageClick(e) {
        var form = $(this).siblings("form");
        form.find("button:submit").prop("disabled", true);
        form.submit();
    }
    return {
        init: init
    };
})();

$(() => {
    if ($(".m-room-card-choose").length) {
        yourRoomChoose.init();
    }
});

var checkout = (() => {
    var checkoutView = $(".p-bp-checkout").add(".p-bp-checkout-fase-1-b2b-company").add(".p-bp-checkout-fase-1-b2b-agency");
    var $checkoutForm = checkoutView.find("form.form-checkout");
    var $checkoutFormToSend = checkoutView.find("form.form-checkout-to-send");
    var $bottonSubmit = $checkoutForm.find("button[type=submit]");
    var $checkAccountRewards = $(".js-account-rewards");
    var needBillCheckbox = $checkoutForm.find("#need-bill");
    var $otherGuestsCheckbox = checkoutView.find("#booking-other");
    var infoBillFieldset = $checkoutForm.find("#info-bill");
    var copyReservationInfoCheck = infoBillFieldset.find("#copy-info");
    var finalPrice = checkoutView.find(".js-final-price");
    var garanteeCheck = $checkoutForm.find(".js-garantee-modal");
    var modalGarantee = $("#modal-garantee");
    var needBillRequiredInputs;
    var infoBillForm = $checkoutForm.find("#info-bill");
    var billFormCountry = infoBillFieldset.find("#country-bill");
    var cifInput = infoBillFieldset.find("#pc-nif");
    var otherGuestsRequiredInputs = $checkoutForm.find("#other-guests :input[required]");
    var currentPage = null;
    var $garanteeReservationField = $("input#garantee-reservation");
    var personalizeRooms = $(".m-customize-room-detail").find(".panel .collapse");
    var $sessionExpireModal = $("#modal-session-expire");
    var $sessionExpireCounter = $sessionExpireModal.find(".js-time-counter");
    var $sessionExpireMessageModal = $("#modal-expired-message");
    var sessionExpired = false;
    var yourSearchSubmitButton = checkoutView.find("#your-search-submit-button");
    var customer = {
        hasCredit: false,
        isB2B: false,
        isAgency: false,
        isB2EFriends: false,
        isTravelAgent: false,
        isB2EEmployee: false
    };
    var timeIntervals = [];
    var userLoggedFields = {
        name: {
            class: ".js-logged-name",
            dataKey: "name",
            value: null
        },
        surname: {
            class: ".js-logged-surname",
            dataKey: "surname",
            value: null
        },
        mail: {
            class: ".js-logged-email",
            dataKey: typeof pageData !== "undefined" ? pageData.isRewards === "true" ? "customerEmail" : "email" : "email",
            value: null
        },
        telephone: {
            class: ".js-logged-telephone",
            dataKey: "telephone",
            value: null
        },
        points: {
            class: ".js-logged-points",
            dataKey: "customerTotal",
            value: null
        },
        program: {
            class: ".js-logged-program",
            dataKey: "customerProgram",
            value: null
        },
        category: {
            class: ".js-logged-category",
            dataKey: "customerCategoryDescription",
            value: null
        },
        party: {
            class: "#inputPartyId",
            dataKey: "partyId",
            value: null
        }
    };
    function init() {
        if (typeof pageData !== "undefined") {
            if (typeof pageData.javaError !== "undefined" && pageData.javaError === "true") {
                _showJavaError();
            }
            $.each(customer, function(key, value) {
                customer[key] = pageData[key] ? $.parseJSON(pageData[key]) : false;
            });
        }
        currentPage = _getCurrentPage();
        $checkoutForm.validator({
            disable: false,
            custom: {
                docNumber: _customDocumentNumberValidator
            }
        }).on("submit", _onFormSubmit);
        yourSearchSubmitButton.on("click", e => {
            $checkoutForm.submit();
        });
        needBillRequiredInputs = infoBillFieldset.find(":input[required]");
        $(".js-submit-form-checkout").on("click", function() {
            $checkoutForm.find('[type="submit"]').trigger("click");
        });
        _beforeUnloadSession();
        _setNationalityField();
        _initializeCounterClock();
        _handleSessionExpiredCountdownModal();
        timeIntervals.push(_initSessionExpiredCountdown());
        _setSessionExpiredCountdownModalTimeout();
        $checkAccountRewards.on("change", _toggleNationalityField);
        $garanteeReservationField.on("change", _guaranteeActions);
        $otherGuestsCheckbox.on("change", _onOtherGuestsChange);
        needBillCheckbox.on("change", _onNeedBillChange);
        infoBillFieldset.on("shown.bs.collapse hidden.bs.collapse", _onInfoBillToggles);
        infoBillFieldset.find("#personalInvoice").on("change", _onPersonallBillChange);
        infoBillFieldset.find("#businessInvoice").on("change", _onBussinessBillChange);
        copyReservationInfoCheck.on("change", _copyReservationData);
        $(".js-update-filter #payment-type").on("change", _toggleGuaranteeCheckbox);
        $checkoutForm.find("#agency-service").on("change", _setupAgencyService);
        billFormCountry.on("change", _onBillCountrySelectorChange);
        garanteeCheck.on("change", _onGaranteeChange);
        _initIsCifRequired();
        _onNeedBillChange();
        _onOtherGuestsChange();
        _toggleBillCompanyNameVisibility(false);
        _toggleBillUserNameVisiblity(true);
        _onGaranteeChange();
        _setGaranteeModal();
    }
    var fixTabInputValidation = function() {
        changeInput($(".js-change-validation"), {
            submitting: false
        });
        $(".js-change-validation").on("shown.bs.tab", function() {
            changeInput(this);
        });
        function changeInput(container, options) {
            var inputChange = $(container).find(".js-change-input");
            $.each(inputChange, function(i, ele) {
                var $ele = $(ele);
                var required = $ele.is(":visible") ? true : false;
                utils.changeInputValidation($ele, required, options);
            });
        }
    };
    function fillLoggedInfo(targetUrl) {
        var $input;
        var inputId;
        var $inputLabel;
        var $element;
        $.ajaxSetup({
            cache: false,
            async: false
        });
        $.ajax({
            method: "GET",
            url: urlGlobalConfig.host + targetUrl
        });
        return login.checkUserLogged().then(function(response) {
            $("body").addClass("logged");
            $.each(userLoggedFields, function(key, data) {
                $element = $(data.class).not(":input");
                $input = checkoutForm.find("input" + data.class);
                inputId = $input.attr("id");
                $inputLabel = checkoutForm.find('label[for="' + inputId + '"]');
                data.value = response.userData[data.dataKey];
                if ($input.length > 0 && data.value) {
                    $input.val(data.value).trigger("blur");
                    $inputLabel.addClass("focus");
                }
                if ($element.length > 0 && data.value) {
                    $element.text(data.value);
                }
            });
            if (response.userData.name && typeof pageData !== "undefined" && !$.parseJSON(pageData.isB2B) && !$.parseJSON(pageData.isB2EFriends)) {
                $("#name-checkout, #last-name-checkout").prop("disabled", true);
            }
            $(".join-rewards-logged-block").addClass("join-rewards-" + userLoggedFields.category.value.toLowerCase());
        }, function(error) {
            return error;
        });
    }
    function _beforeUnloadSession() {
        var fireEvent = true;
        var urlSend = currentPage === "flexible" ? "https://www.nh-hotels.com/booking/save-flexibleform-data" : "https://www.nh-hotels.com/booking/save-prepaidform-data";
        if (pageData.tcmFromErrorCode) {
            var splitt = pageData.tcmFromErrorCode.split("-");
            if (splitt[1] + "-" + splitt[2] === "82579-16") {
                fireEvent = false;
            }
        }
        if (fireEvent) {
            window.onbeforeunload = function() {
                if (typeof sessionDataSend !== "undefined") {
                    _getSessionData().then(function(response) {
                        sessionDataSend = response;
                        $.ajax({
                            type: "POST",
                            url: urlSend,
                            data: sessionDataSend,
                            cache: false,
                            async: false
                        }).done(function() {}).fail(function(data) {
                            if (data.responseText !== 200) {
                                return false;
                            }
                        });
                    });
                }
            };
        }
    }
    function _copyReservationData(e) {
        var $this = $(this);
        var nameSurnameBillInput = infoBillFieldset.find("#name-surname-bill");
        var nameBillInput = infoBillFieldset.find("#name-bill");
        var surnameBillInput = infoBillFieldset.find("#last-name-bill");
        if (e.target.checked) {
            var guestNameSurnameInput = $checkoutForm.find("#name-surname-checkout");
            var guestNameInput = $checkoutForm.find("#name-checkout");
            var guestLastNameInput = $checkoutForm.find("#last-name-checkout");
            var valueNameSurname = guestNameSurnameInput.val();
            var valueName = guestNameInput.val();
            var valueLastName = guestLastNameInput.val();
            nameSurnameBillInput.val(valueNameSurname);
            nameBillInput.val(valueName);
            surnameBillInput.val(valueLastName);
            nameBillInput.focus();
            surnameBillInput.focus();
        } else {
            nameSurnameBillInput.val("");
            nameBillInput.val("");
            surnameBillInput.val("");
        }
        nameSurnameBillInput.blur();
        nameBillInput.blur();
        surnameBillInput.blur();
    }
    function _customDocumentNumberValidator($el) {
        var isValid = validateNumberDocument("dni", $el.val());
        if (!isValid) {
            return "error";
        }
    }
    function _fillInputHidden() {
        var fields = $checkoutFormToSend.find("input[data-id]");
        var deferred = $.Deferred();
        $.each(fields, function(i, ele) {
            var $formInputHidden = $(ele);
            var valueInput = _getFieldToSendValue($formInputHidden);
            if (valueInput) {
                valueInput = $formInputHidden.attr("name") === "subscribeRewards" && valueInput === "S" ? true : valueInput;
                $formInputHidden.val(valueInput, $formInputHidden);
            }
        });
        _fillCustomPageInputHidden().then(function() {
            deferred.resolve(true);
        });
        return deferred.promise();
    }
    function _fillCustomPageInputHidden() {
        var fields = {};
        var $field;
        var deferred = $.Deferred();
        if (currentPage === "flexible" && customer.isB2B && customer.isAgency && customer.hasCredit) {
            if ($(".js-b2b-paymenttype").val() == "NOPAYMENT") {
                fields = {
                    paymentType: $checkoutForm.find("input.js-guarantee-paymenttype").val()
                };
            }
        }
        if (!$.isEmptyObject(fields)) {
            $.each(fields, function(ele, value) {
                $field = $checkoutFormToSend.find('input[name="' + ele + '"]');
                if (value && $field.length) {
                    $field.val(value);
                }
            });
        }
        deferred.resolve();
        return deferred.promise();
    }
    function _getCurrentPage() {
        var bodyclass = $("body").attr("class");
        if (/prepayment/g.test(bodyclass)) {
            return "prepayment";
        } else {
            return "flexible";
        }
    }
    function _getFieldToSendValue($field) {
        var dataId = $field.data("id");
        var $dataField = _getField(dataId);
        var valueInput = null;
        var fieldType = null;
        var isFieldVisible;
        var dataAltValue = $field.data("alt-value");
        var altValue;
        if ($dataField && $dataField.length > 0) {
            fieldType = _getFieldType($dataField);
            isFieldVisible = _isFieldVisible($dataField);
            if (isFieldVisible) {
                switch (fieldType) {
                  case "checkbox":
                    var isChecked = $dataField.is(":checked");
                    valueInput = isChecked ? "true" : "false";
                    if (dataId.indexOf("GDPR") >= 0) {
                        valueInput = isChecked ? "S" : "N";
                        if (dataId.indexOf("GDPR_flag_5") >= 0 && !isChecked) {
                            $checkoutFormToSend.find('[name="' + dataId + '"]').remove();
                            valueInput = null;
                        }
                    }
                    break;

                  case "input":
                  case "hidden":
                    valueInput = $dataField.val();
                    break;

                  case "radio":
                    valueInput = $dataField.val();
                    break;

                  case "select":
                    valueInput = $dataField.val();
                    if ($field.data("format-year")) {
                        var format = $field.data("format-year") || "20";
                        if (format) {
                            valueInput = format + "" + valueInput;
                        }
                    }
                    break;

                  default:
                    valueInput = $dataField.val();
                }
                if (dataAltValue) {
                    altValue = fieldType === "select" ? $dataField.find(":selected").data(dataAltValue) : $dataField.data(dataAltValue);
                    valueInput = altValue ? altValue.toString() : valueInput;
                    if (fieldType === "select" && typeof valueInput === "undefined") {
                        valueInput = "";
                    }
                }
            }
        }
        return valueInput;
    }
    function _getField(fieldId) {
        var $field = null;
        if (fieldId) {
            $field = $checkoutForm.find("#" + fieldId + ", [name='" + fieldId + "']:checked");
        }
        return $field;
    }
    function _getFieldType($field) {
        var fieldType = null;
        var type = $field.attr("type");
        if ([ "select", "radio", "checkbox" ].indexOf(type) >= 0) {
            fieldType = type;
        } else {
            fieldType = $field.prop("tagName").toLowerCase();
        }
        return fieldType;
    }
    function _getSessionData() {
        var deferred = $.Deferred();
        _fillInputHidden().then(function() {
            return deferred.resolve($checkoutFormToSend.serialize());
        });
        return deferred.promise();
    }
    function _guaranteeActions() {
        var inputToSend = $("input.js-guarantee-paymenttype");
        var data = inputToSend.data("value");
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            inputToSend.val(data ? data.guarantee : inputToSend.val());
        } else {
            inputToSend.val(data ? data.noguarantee : inputToSend.val());
        }
    }
    function _handleSessionExpiredCountdownModal() {
        var urlSend = currentPage === "flexible" ? "/booking/hold-prereservation-flexible" : "/booking/hold-prereservation-prepaid";
        if (typeof pageData.reservationId !== "undefined") {
            $sessionExpireModal.on("hidden.bs.modal", function(ev) {
                if (!sessionExpired) {
                    $.ajax({
                        type: "POST",
                        url: "https://www.nh-hotels.com" + urlSend + "?merchantReturnData=" + pageData.reservationId,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        dataType: "json",
                        cache: false
                    }).done(function(data) {
                        if (data) {
                            _initializeCounterClock();
                            timeIntervals.push(_initSessionExpiredCountdown());
                            _setSessionExpiredCountdownModalTimeout();
                        }
                    }).fail(function(data) {
                        console.log("fail", data);
                    });
                } else {
                    $sessionExpireMessageModal.modal({
                        backdrop: "static",
                        keyboard: true,
                        show: true
                    });
                }
            });
        }
    }
    function _initSessionExpiredCountdown() {
        var minutes;
        var seconds;
        var now;
        var endTime;
        var timeRemaining;
        var timeinterval;
        if ($sessionExpireCounter.length > 0) {
            minutes = parseInt($sessionExpireCounter.attr("data-mins"), 10);
            seconds = parseInt($sessionExpireCounter.attr("data-secs"), 10);
            now = new Date().getTime();
            endTime = new Date(now + minutes * 60 * 1e3 + seconds * 1e3);
            timeinterval = setInterval(function() {
                timeRemaining = utils.getTimeRemaining(endTime);
                if (timeRemaining.total <= 0) {
                    clearInterval(timeinterval);
                    sessionExpired = true;
                    if (!$sessionExpireModal.is(":visible") || !$sessionExpireModal.hasClass("in")) {
                        $sessionExpireMessageModal.modal({
                            backdrop: "static",
                            keyboard: true,
                            show: true
                        });
                    } else {
                        $sessionExpireModal.modal("hide");
                    }
                }
            }, 1e3);
        }
        return timeinterval;
    }
    function _isFieldVisible($field) {
        var $elementToCheck = $field;
        var fieldId = $field.attr("id");
        if ($field.hasClass("selectpicker")) {
            $elementToCheck = $('.selectpicker[data-id="' + fieldId + '"]');
        } else if ($field.hasClass("ui-autocomplete-input")) {
            $elementToCheck = $("#" + fieldId + "-clone");
        }
        return $elementToCheck.is(":visible") || $elementToCheck.hasClass("force-send");
    }
    function _onBussinessBillChange(e) {
        if (e.target.checked) {
            copyReservationInfoCheck.closest(".checkbox").hide();
            copyReservationInfoCheck.attr("checked", false);
            _toggleBillCompanyNameVisibility(true);
            _toggleBillUserNameVisiblity(false);
        }
    }
    function _onFormSubmit(e) {
        var $form = $(this);
        var moveToOffset;
        toggleLoadingButton($form, true);
        if (e.isDefaultPrevented()) {
            utils.callTrackForms("errors", "prepaymentForm", "errors");
            toggleLoadingButton($form, false);
        } else {
            e.preventDefault();
            var validateGuests = _validateGuestsName();
            if (validateGuests) {
                utils.clearAllIntervals();
                if ($bottonSubmit.hasClass("show-loading")) {
                    _setupAndShowLoadingModal();
                }
                _fillInputHidden().then(function() {
                    if (currentPage == "prepayment") {
                        utils.callTrackForms("success", "prepaymentForm", "success");
                    }
                    $checkoutFormToSend.submit();
                });
            } else {
                moveToOffset = personalizeRooms.first().eq(0).offset().top - 90;
                $("html, body").animate({
                    scrollTop: moveToOffset,
                    useTranslate3d: true
                }, 700);
            }
        }
    }
    function _onNeedBillChange() {
        if (needBillCheckbox.is(":checked")) {
            needBillRequiredInputs.attr("data-validate", true);
        } else {
            needBillRequiredInputs.attr("data-validate", false);
        }
        $checkoutForm.validator("update");
    }
    function _onInfoBillToggles() {
        _initIsCifRequired();
        $checkoutForm.validator("update");
    }
    function _onOtherGuestsChange() {
        if ($otherGuestsCheckbox.is(":checked")) {
            otherGuestsRequiredInputs.attr("data-validate", true);
            personalizeRooms.first().collapse("show");
        } else {
            otherGuestsRequiredInputs.attr("data-validate", false);
        }
        $checkoutForm.validator("update");
    }
    function _onPersonallBillChange(e) {
        if (e.target.checked) {
            copyReservationInfoCheck.closest(".checkbox").show();
            copyReservationInfoCheck.attr("checked", false);
            _toggleBillCompanyNameVisibility(false);
            _toggleBillUserNameVisiblity(true);
        }
    }
    function _showJavaError() {
        var $modal = $("#modal-java-error");
        if (pageData.urlError && typeof pageData.urlError !== "undefined") {
            $modal.modal({
                backdrop: "static",
                keyboard: true,
                show: true
            });
            utils.clearAllIntervals();
        } else {
            modal.modal("show");
        }
    }
    function _setNationalityField() {
        utils.getGeoIpData().then(function(response) {
            var selectedOption;
            if (response && response.country) {
                selectedOption = $("select.js-country-geoip").find("option[value=" + response.country + "]");
                $("select.js-country-geoip").val(response.country).change();
                $("input.js-country-geoip").val(selectedOption.text());
            }
        });
    }
    function _setupAgencyService() {
        var $this = $(this);
        var valor;
        if ($this.is(":checked")) {
            valor = $this.attr("data-no-text");
            $this.removeAttr("data-no-text");
            $this.attr("data-text", valor);
        } else {
            valor = $this.attr("data-text");
            $this.removeAttr("data-text");
            $this.attr("data-no-text", valor);
        }
    }
    function _toggleBillCompanyNameVisibility(visible) {
        var companyName = infoBillFieldset.find("#company-name");
        companyName.closest(".js-company-name-wrapper").toggle(visible);
        companyName.attr("data-validation", visible);
        companyName.val("");
    }
    function _toggleBillUserNameVisiblity(visible) {
        var nameSurnameInput = infoBillFieldset.find("#name-surname-bill");
        var nameInput = infoBillFieldset.find("#name-bill");
        var surnameInput = infoBillFieldset.find("#last-name-bill");
        nameSurnameInput.closest(".js-bill-user").toggle(visible);
        nameSurnameInput.attr("data-validation", visible);
        nameSurnameInput.val("");
        nameInput.closest(".js-bill-user").toggle(visible);
        nameInput.attr("data-validation", visible);
        nameInput.val("");
        surnameInput.closest(".js-bill-user").toggle(visible);
        surnameInput.attr("data-validation", visible);
        surnameInput.val("");
    }
    function _toggleGuaranteeCheckbox() {
        var value = $(this).val();
        var $wrapGuarantee = $(".js-wrap-guarantee");
        var showGuarantee = [ "BONOPAYMENT", "COMPANYCREDIT", "FACTURAPROFORMA", "BONOPAYMENT_" ].indexOf(value) < 0;
        $wrapGuarantee.toggle(showGuarantee);
    }
    function _setSessionExpiredCountdownModalTimeout() {
        var time = $sessionExpireModal.data("timeout") || 3e5;
        setTimeout(function() {
            $sessionExpireModal.modal("show");
        }, parseInt(time));
    }
    function _setupAndShowLoadingModal() {
        var $modal = $("#loading-modal-checkout");
        var $paymentMethod = $checkoutFormToSend.find("#paymentMethod");
        var $externalMethodsWrapper = $modal.find(".method-external");
        var $cardMethodsWrapper = $modal.find(".method-card");
        var paymentMethod = _getFieldToSendValue($paymentMethod);
        var $methodOption = $externalMethodsWrapper.find(".lbl-" + paymentMethod.toLowerCase());
        if (paymentMethod && $methodOption.length) {
            $methodOption.show();
            $externalMethodsWrapper.show();
        } else {
            $cardMethodsWrapper.show();
        }
        $("#loading-modal-checkout").modal({
            backdrop: "static",
            keyboard: true,
            show: true
        });
    }
    function _toggleNationalityField() {
        var $this = $(this);
        var $nationality = $("#group-nationality-checkout");
        var $nationatilyInput = $nationality.find("input");
        if ($this.is(":checked")) {
            $nationality.show().removeClass("hide");
            $nationatilyInput.attr("data-validate", true);
        } else {
            $nationality.hide().addClass("hide");
            $nationatilyInput.attr("data-validate", false);
        }
        $checkoutForm.validator("update");
    }
    function _validateGuestsName() {
        var $guestName = $("#room-01-name-01");
        var $formGroup = $guestName.parents(".form-group");
        var labelRequired = $guestName.data("required-error");
        var isValid = true;
        if ($otherGuestsCheckbox.is(":checked")) {
            personalizeRooms.first().collapse("show");
            if ($guestName.val() !== "") {
                $formGroup.removeClass("has-error").find(".help-block").html("");
                isValid = true;
            } else {
                $formGroup.addClass("has-error").find(".help-block").html('<ul role="alert"><li>' + labelRequired + "</li></ul>");
                isValid = false;
            }
        }
        return isValid;
    }
    function _initializeCounterClock() {
        _clearClockIntervals();
        timeIntervals.push(utils.initializeClock($sessionExpireCounter));
    }
    function _clearClockIntervals() {
        utils.clearIntervals(timeIntervals);
        timeIntervals = [];
    }
    function _onBillCountrySelectorChange(e) {
        var $selectedOption = $(e.target.options[e.target.selectedIndex]);
        _setBillCIFRequired($selectedOption);
    }
    function _setBillCIFRequired($selectedOption) {
        var isCIFRequiredByCountry = false;
        var isCIFRequiredByPrice = _checkCIFRequiredTotalPrice();
        var isCIFRequired = false;
        if ($selectedOption && cifInput.is(":visible")) {
            isCIFRequiredByCountry = $selectedOption.data("required-cif");
        }
        if (cifInput.is(":visible") && (isCIFRequiredByCountry === true || isCIFRequiredByPrice)) {
            isCIFRequired = true;
        }
        _setCifValidationAttr(isCIFRequired);
    }
    function _initIsCifRequired() {
        var billFormCountryElement = billFormCountry[0];
        if (!billFormCountryElement) {
            return;
        }
        var $selectedOption = $(billFormCountryElement[billFormCountryElement.selectedIndex]);
        _setBillCIFRequired($selectedOption);
    }
    function _checkCIFRequiredTotalPrice() {
        var cifRequired = false;
        var finalPriceValue = finalPrice.data("final-price");
        var finalPriceMaxPriceCif = finalPrice.data("max-price-cif");
        if (!finalPriceValue || !finalPriceMaxPriceCif) {
            return cifRequired;
        }
        if (finalPriceValue >= finalPriceMaxPriceCif) {
            cifRequired = true;
        }
        return cifRequired;
    }
    function _setCifValidationAttr(validate) {
        if (validate === undefined || validate && validate.length === 0) {
            validate = false;
        }
        cifInput.attr({
            "data-validate": validate,
            required: validate
        });
        _setRequiredSymbol(cifInput, validate);
        $checkoutForm.validator("update");
    }
    function _setRequiredSymbol(input, validate) {
        var label = input.siblings("label");
        var labelText = label.html();
        var requiredSymbol = "*";
        if (validate === true && labelText.indexOf(requiredSymbol) === -1) {
            label.html(label.html() + requiredSymbol);
        } else if (validate === false && labelText.indexOf(requiredSymbol) > -1) {
            labelText = labelText.slice(0, labelText.indexOf(requiredSymbol));
            label.html(labelText);
        }
    }
    function _onGaranteeChange() {
        var infoTarget = $(garanteeCheck.data("target"));
        if (garanteeCheck.is(":checked")) {
            infoTarget.collapse("show");
        } else if (!garanteeCheck.is(":checked") && infoTarget.is(":visible")) {
            infoTarget.collapse("hide");
        }
    }
    function _setGaranteeModal() {
        if (garanteeCheck.is(":disabled") && garanteeCheck.is(":checked")) {
            var $wrapGuarantee = $(".js-wrap-guarantee");
            $wrapGuarantee.on("click", () => {
                modalGarantee.modal("show");
            });
        }
    }
    return {
        init: init,
        fillLoggedInfo: fillLoggedInfo
    };
})();

$(() => {
    if ($(".p-bp-checkout").length) {
        checkout.init();
    }
});

var b2bSignup = (() => {
    var b2bSignupView = $(".p-b2b-signup").add(".p-b2b-signup-agency");
    var signupForm = b2bSignupView.find("form.js-form-steps");
    var intermediaryInput = signupForm.find('[name="input_intermediario"]');
    var affirmativeIntermediaryInput = signupForm.find("#input_intermediario_si");
    var intermediaryTextInput = signupForm.find("#intermediary_text_input");
    function init() {
        b2bSignupView.formSteps({
            initStep: 0
        });
        signupForm.validator({
            disable: false
        }).on("submit", function(e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
            if (e.isDefaultPrevented()) {
                toggleLoadingButton($form, false);
            } else {}
        });
        intermediaryInput.on("change", _onIntermediaryInputChange);
        _onIntermediaryInputChange();
    }
    function _onIntermediaryInputChange(e) {
        var intermediaryInputTextFormGroup = intermediaryTextInput.closest(".form-group");
        if (affirmativeIntermediaryInput.is(":checked")) {
            intermediaryInputTextFormGroup.closest(".form-group").removeClass("hide");
            intermediaryTextInput.attr("data-validate", true);
        } else {
            intermediaryInputTextFormGroup.addClass("hide");
            intermediaryTextInput.attr("data-validate", false);
        }
        signupForm.validator("update");
    }
    return {
        init: init
    };
})();

$(() => {
    b2bSignup.init();
});

var pCancelReservation = (() => {
    var cancelReservationView = $(".p-eservicing-cancel");
    var additionalComments = cancelReservationView.find("form #additional-comments");
    var reasonSelector = cancelReservationView.find("form #reason");
    var cancelRoomsSet = cancelReservationView.find('fieldset[name="cancel-rooms"]');
    var totalCostWell = cancelReservationView.find(".js-total-cancel-price");
    var CURRENCY = cancelRoomsSet.data("currency");
    const CANCELATION_DECIMALS = 2;
    function init() {
        cancelReservationView.find("form").validator({
            disable: false,
            custom: {
                mincheckbox: validateMinCheckbox
            }
        }).on("submit", function(e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
            if (e.isDefaultPrevented()) {
                toggleLoadingButton($form, false);
            } else {}
        });
        reasonSelector.on("change", _onReasonChange);
        cancelRoomsSet.find('input[type="checkbox"]').on("change", _handlerCancelRoomChange);
        _checkSelectedReason(reasonSelector);
        _renderRoomCancelPrices();
        _handlerCancelRoomChange();
    }
    function _onReasonChange(e) {
        var $this = $(this);
        _checkSelectedReason($this);
    }
    function _checkSelectedReason($selector) {
        var selectedOption = $selector.find(":selected");
        if (selectedOption.data("reason-comment-required")) {
            _toggleRequireAdditionalComment(true);
        } else {
            _toggleRequireAdditionalComment(false);
        }
    }
    function _toggleRequireAdditionalComment(toggle) {
        additionalComments.attr("required", toggle);
        cancelReservationView.find("form").validator("update");
        if (!toggle) {
            additionalComments.closest(".form-group").removeClass("has-error", "has-danger");
        }
    }
    function _handlerCancelRoomChange() {
        let roomPrices = _getRoomCancelPrices();
        let totalPrice = _calcCancellationCost(roomPrices);
        _renderCancellationTotalCost(totalPrice);
    }
    function _renderRoomCancelPrices() {
        var checkboxes = cancelRoomsSet.find('input[type="checkbox"]');
        checkboxes.each((index, checkbox) => {
            let $checkbox = $(checkbox);
            let associatedPrice = $checkbox.data("associated-price");
            if (!isNaN(associatedPrice)) {
                let name = $checkbox.attr("name");
                let priceNode = cancelRoomsSet.find(`.price[name="${name}"]`);
                let formattedPrice = `${associatedPrice.toFixed(CANCELATION_DECIMALS)} ${CURRENCY}`;
                priceNode.html(formattedPrice);
            }
        });
    }
    function _getRoomCancelPrices() {
        var prices = [];
        var checkedRooms = cancelRoomsSet.find('input[type="checkbox"]:checked');
        checkedRooms.each((index, roomCheckbox) => {
            let $roomCheckbox = $(roomCheckbox);
            var associatedPrice = $roomCheckbox.data("associated-price");
            if (!isNaN(associatedPrice)) {
                prices.push(associatedPrice);
            }
        });
        return prices;
    }
    function _calcCancellationCost(costArray) {
        var totalPrice = 0;
        costArray.forEach(price => {
            totalPrice += price;
        });
        return totalPrice;
    }
    function _renderCancellationTotalCost(totalCost) {
        if (isNaN(totalCost)) {
            return;
        }
        let formattedTotalCost = `${totalCost.toFixed(CANCELATION_DECIMALS)} ${CURRENCY}`;
        totalCostWell.find(".price").html(formattedTotalCost);
    }
    return {
        init: init
    };
})();

$(() => {
    pCancelReservation.init();
});

var eServicing = function() {
    var eServicingPage = $(".p-eservicing-access");
    var $hotelSelector = $("#hotel-selector");
    function init() {
        setMinArrivalDate();
        _getHotels().then(function(response) {
            var options = `<option role="option" value=""></option>`;
            $.each(response, function(index, hotelData) {
                options += `<option role="option" value="${hotelData.code}">${hotelData.name}</option>`;
            });
            $hotelSelector.append(options).selectToAutocomplete();
            _setupForm();
        });
    }
    function setMinArrivalDate() {
        var inputDate = eServicingPage.find("#arrival-date");
        var today = moment().format("YYYY-MM-DD");
        inputDate.attr("min", today);
    }
    function _getHotels() {
        var promise = $.ajax({
            type: "GET",
            dataType: "json",
            url: "/rest/auto/autocompleteEservicing",
            cache: false
        });
        return promise.then(function(response) {
            return response[0];
        }, function(error) {
            return error;
        });
    }
    function _setupForm() {
        eServicingPage.find("form").validator({
            disable: false,
            custom: {
                entrydate: validateDate
            }
        }).on("submit", function(e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
            if (isMobile.any()) {
                $dateInput = $("#arrival-date");
                $dateInput.attr("name", "");
                var selectedDate = $dateInput.val();
                var selectedYear = selectedDate.split("-")[0];
                var selectedMonth = selectedDate.split("-")[1];
                var selectedDay = selectedDate.split("-")[2];
                var selectedDateFormatted = selectedDay + "/" + selectedMonth + "/" + selectedYear;
                $dateInput.parent().append('<input type="hidden" name="fecha" value="' + selectedDateFormatted + '"/>');
            }
            if (e.isDefaultPrevented()) {
                toggleLoadingButton($form, false);
            } else {}
        });
    }
    return {
        init: init
    };
}();

$(function() {
    if ($(".p-eservicing-access").length) {
        eServicing.init();
    }
});

var eServicingManagement = function() {
    function init() {
        urlPassbook();
        $(document).on("click", ".js-form-button", function(e) {
            e.preventDefault();
            $(".js-form-button").attr("disabled", true);
            var formId = "#" + $(this).data("form");
            $(formId).submit();
        });
    }
    function submitForm(formId) {
        $(formId).submit();
    }
    var urlPassbook = function() {
        if (typeof pageData !== "undefined") {
            if (typeof pageData.urlPassbook != "undefined") {
                var fecha = pageData.urlPassbook.split("/");
                var fullPassbook = pageData.fullDomain + "/getPassBook/" + pageData.idReservation + "/" + pageData.emailTitular + "/" + fecha[2] + "-" + fecha[1] + "-" + fecha[0];
                $(".js-passbook").on("click", function(e) {
                    e.preventDefault();
                    location.href = fullPassbook;
                });
            }
        }
    };
    return {
        init: init
    };
}();

$(function() {
    eServicingManagement.init();
});

var eServicingModify = function() {
    var eServicingPage = $(".p-eservicing-modify");
    function init() {
        eServicingPage.find("form").validator({
            disable: false
        }).on("submit", function(e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
            if (e.isDefaultPrevented()) {
                toggleLoadingButton($form, false);
            } else {}
        });
    }
    return {
        init: init
    };
}();

$(function() {
    eServicingModify.init();
});

var landingUikit = function() {
    var landingPage = $(".p-landing-uikit");
    var gridLanding = landingPage.find(".grid-landing");
    function _initGridLandings() {
        gridLanding.masonry({
            itemSelector: ".grid-landing-item",
            columnWidth: ".grid-landing-sizer",
            percentPosition: true,
            horizontalOrder: true
        });
    }
    function init() {
        _initGridLandings();
    }
    return {
        init: init
    };
}();

$(function() {
    landingUikit.init();
});

var guestData = function() {
    var guestDataView = $(".p-cio-guest-data");
    var guestDataForm = guestDataView.find("form#guestDataForm");
    var nationalityInput = guestDataView.find("#country");
    var datepickerSelector = guestDataView.find("#birth-date-selector");
    var boxConfirmDate = guestDataView.find(".box-confirm-age");
    var restOfForm = guestDataView.find(".js-hide-confirm-age");
    var childConfirmModal = guestDataView.find("#modal-child-confirm");
    var region = guestDataView.find("#region");
    var regionFields = guestDataView.find("select.region-autocomplete");
    var cityFields = guestDataView.find("select.city-autocomplete");
    var cityselect = guestDataView.find("#cityselect");
    var expedition_place = guestDataView.find("#expedition_place");
    var birthplace = guestDataView.find("#birthplace");
    var region = guestDataView.find("#region");
    var isUnderAgeInput = guestDataForm.find("#isUnderAge");
    var MIN_ADULT_AGE = 18;
    var userLoggedFields = {
        name: {
            class: ".js-logged-name",
            dataKey: "name",
            value: null
        },
        surname: {
            class: ".js-logged-surname",
            dataKey: "surname",
            value: null
        },
        gender: {
            class: ".js-logged-gender",
            dataKey: "gender",
            value: null
        },
        mail: {
            class: ".js-logged-email",
            dataKey: typeof pageData !== "undefined" ? pageData.isRewards === "true" ? "customerEmail" : "email" : "email",
            value: null
        },
        street: {
            class: ".js-logged-street",
            dataKey: "street",
            value: null
        },
        city: {
            class: ".js-logged-city",
            dataKey: "city",
            value: null
        },
        cityinput: {
            class: ".js-logged-cityinput",
            dataKey: "city",
            value: null
        },
        cityselect: {
            class: ".js-logged-cityselect",
            dataKey: "city",
            value: null
        },
        postalCode: {
            class: ".js-logged-zip-code",
            dataKey: "postalCode",
            value: null
        },
        nationality: {
            class: ".js-logged-nationality",
            dataKey: "nationality",
            value: null
        },
        country: {
            class: ".js-logged-country",
            dataKey: "country",
            value: null
        },
        language: {
            class: ".js-logged-language",
            dataKey: "language",
            value: null
        },
        taxNumber: {
            class: ".js-logged-tax-number",
            dataKey: "documentNumber",
            value: null
        },
        documentType: {
            class: ".js-logged-document-type",
            dataKey: "documentType",
            value: null
        },
        birthDate: {
            class: ".js-logged-birth-date",
            dataKey: "birthDate",
            value: null
        },
        get birthYear() {
            if (this.birthDate.value != null) return {
                class: ".js-logged-birth-year",
                dataKey: "birthYear",
                value: typeof this.birthDate.value != null ? this.birthDate.value.split("/")[2] : ""
            };
        },
        get birthMonth() {
            if (this.birthDate.value != null) return {
                class: ".js-logged-birth-month",
                dataKey: "birthMonth",
                value: typeof this.birthDate.value != null ? parseInt(this.birthDate.value.split("/")[1]) - 1 : ""
            };
        },
        get birthDay() {
            if (this.birthDate.value != null) return {
                class: ".js-logged-birth-day",
                dataKey: "birthDay",
                value: typeof this.birthDate.value != null ? parseInt(this.birthDate.value.split("/")[0]) : ""
            };
        }
    };
    var NATIONALITIES = {
        0: {
            hotelNationality: "",
            debug: false,
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            othterItaly: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "birth_province" ],
            validations: {
                acceptsnovat: true
            },
            validationsItaly: {},
            activeItaly: true,
            resetValidations: function() {
                $("#postalCode, #nationalIdNumber").removeAttr("pattern");
                $("#nationalIdNumber").removeData("docNumber");
                $("#nationalIdExpeditionDate").removeData("validateExpeditionDate");
                $("#name, #surname").attr({
                    maxlength: "100"
                });
                $("#street").attr("maxlength", "150");
                $("#cityinput, #email, #city").attr("maxlength", "50");
                $("#nationalIdNumber").attr("maxlength", "25");
                $("#postalCode").attr("maxlength", "15");
                $("#documentType option[value=passport]").show();
                $("#documentType option:first").prop("selected", true);
                $("#documentType").selectpicker("refresh");
                $("#documentType").attr("data-validate", false);
                $("#nationalIdNumber").attr("data-validate", false);
                guestDataForm.validator({
                    disable: false,
                    custom: NATIONALITIES[0].boostrapValidators
                }).validator("update");
            },
            boostrapValidators: {
                docNumber: customDocumentNumberValidator,
                validateExpeditionDate: customValidateExpeditionDate.bind(this)
            },
            addValidations: function(otherValidations) {
                Object.entries(otherValidations).forEach(([key, value]) => {
                    if (key == "postalCode") {
                        $("#" + key).attr("pattern", value);
                    }
                    if (key == "nationalIdNumber") {
                        $("#" + key).attr("pattern", value);
                    }
                    if (key == "data") {
                        Object.entries(value).forEach(([k, v]) => {
                            $("#" + v.field).attr("data-" + v.rule, "true");
                        });
                    }
                    if (key == "acceptsnovat") {
                        $("#documentType").attr("data-validate", value);
                        $("#nationalIdNumber").attr("data-validate", value);
                    }
                    if (key == "passport") {
                        if (value == true) {
                            $("#documentType option[value=" + key + "]").show();
                        } else {
                            $("#documentType option:first").prop("selected", true);
                            $("#documentType option[value=" + key + "]").hide();
                        }
                        $("#documentType").selectpicker("refresh");
                    }
                });
                guestDataForm.validator({
                    disable: false,
                    custom: NATIONALITIES[0].boostrapValidators
                }).validator("update");
            }
        },
        1: {
            nationalities: [ "AD", "AT", "CO", "CZ", "DO", "FR", "GB", "HT", "HU", "LU", "RO", "SK", "UY" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validations: {
                acceptsnovat: true
            }
        },
        2: {
            nationalities: [ "AR", "BE", "CH", "CL", "MX", "PL", "VE" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validations: {
                acceptsnovat: true
            }
        },
        3: {
            nationalities: [ "CN" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validations: {
                postalCode: `^[0-9]{6,6}$`,
                acceptsnovat: true
            }
        },
        4: {
            nationalities: [ "DE" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "documentType", "nationalIdNumber", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            others: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validationsOthers: {
                acceptsnovat: true
            }
        },
        5: {
            nationalities: [ "ES" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "expedition_place", "birth_province", "birthplace" ],
            others: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "expedition_place", "birth_province", "birthplace" ],
            validations: {
                postalCode: "((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}",
                data: {
                    0: {
                        field: "nationalIdNumber",
                        rule: "docNumber"
                    },
                    1: {
                        field: "nationalIdExpeditionDate",
                        rule: "validateExpeditionDate"
                    }
                },
                passport: false,
                acceptsnovat: true
            },
            validationsOthers: {
                postalCode: "((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}",
                data: {
                    0: {
                        field: "nationalIdNumber",
                        rule: "docNumber"
                    },
                    1: {
                        field: "nationalIdExpeditionDate",
                        rule: "validateExpeditionDate"
                    }
                },
                passport: false,
                acceptsnovat: true
            }
        },
        6: {
            nationalities: [ "IT" ],
            fields: [ "cityinput", "nationalIdExpeditionDate" ],
            others: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validations: {
                acceptsnovat: true
            },
            validationsOthers: {
                acceptsnovat: true
            }
        },
        7: {
            nationalities: [ "NL" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            others: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validationsOthers: {
                acceptsnovat: true
            }
        },
        8: {
            nationalities: [ "PT" ],
            fields: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            others: [ "region", "region_expedition_place", "region_birthplace", "cityselect", "nationalIdExpeditionDate", "expedition_place", "birth_province", "birthplace" ],
            validations: {
                acceptsnovat: true
            },
            validationsOthers: {
                acceptsnovat: true
            }
        }
    };
    function init() {
        if (NATIONALITIES[0].debug) console.clear("");
        createFields();
        nationalityInput.on("change", onNationalityInputChange);
        onNationalityInputChange();
        datepickerSelector.on("change", onDateBirthChange);
        mModals.attachModalEventsBehaviour(childConfirmModal);
        childConfirmModal.on("hide.bs.modal", onChildModalClose);
        childConfirmModal.find("button:submit").on("click", function() {
            guestDataForm.validator("destroy");
            guestDataForm[0].submit();
        });
        guestDataForm.on("blur", "input[type=text]", function(e) {
            $(this).val($.trim($(this).val()));
        });
        guestDataForm.on("blur", "#nationalIdNumber", function(e) {
            $(this).val($(this).val().replace(/ /g, ""));
        });
        boxConfirmDate.hide();
        restOfForm.show();
        if (sessionStorage.getItem("prevFormGuest")) {
            if (sessionStorage.getItem("prevFormGuest") == "true") _controlForward();
        } else sessionStorage.setItem("prevFormGuest", false);
        guestDataForm.validator({
            disable: false,
            custom: NATIONALITIES[0].boostrapValidators
        }).on("submit", submitForm.bind(this));
    }
    var regionInit = function() {
        $("#cityselect").on("change", function() {
            $("#postalCode").val($("option:selected", this).attr("data-postalcode")).focus().blur();
        });
        $(".bs-searchbox").css({
            padding: "1%"
        });
        $(".bs-searchbox").find(".form-control").removeClass("form-control").css("cssText", "border-color: #000000 !important;");
        var urlRegions = apiUrlPath + "/OCI/regions/IT";
        let promise = $.ajax({
            method: "GET",
            url: urlRegions,
            async: true,
            dataType: "json",
            contentType: "application/json"
        });
        return promise.then(function(result) {
            let toAppend = "";
            result.forEach((val, index) => toAppend += `<option value="${val.regionCode}">${val.regionName}</option>`);
            regionFields.each(function() {
                $(this).append(toAppend).selectpicker("refresh").on("change", onRegionInputChange);
            });
        }, function(err) {
            regionFields.each(function() {
                toggleInputVisibility($(this).attr("id"), false);
            });
            cityFields.each(function() {
                toggleInputVisibility($(this).attr("id"), false);
            });
            console.log("Ruta no encontrada");
        });
    };
    var onRegionInputChange = function() {
        cityFields.selectpicker("refresh");
        var selectid = $(this);
        var selectRegion = $(this).is("select") ? $(this).val().toUpperCase() : "";
        var dataAutocomplete = selectid.data("autocomplete");
        var select = $("#" + dataAutocomplete);
        if (selectRegion != "") {
            var urlCities = apiUrlPath + "/OCI/city/" + selectRegion;
            let promise = $.ajax({
                method: "GET",
                url: urlCities,
                async: true,
                dataType: "json",
                contentType: "application/json"
            });
            return promise.then(function(result) {
                let toAppend = `<option value=""></option>`;
                filterCities = result.filter(el => el.regionCode === selectRegion);
                filterCities.forEach((val, index) => toAppend += `<option data-postalcode="${val.zipCode}" value="${val.cityCode}">${val.cityDescription}</option>`);
                select.empty().append(toAppend);
                setTimeout(function() {
                    select.selectpicker("refresh");
                }, 160);
            }, function(err) {});
        } else {
            select.empty();
            setTimeout(function() {
                select.selectpicker("refresh");
            }, 160);
            return true;
        }
    };
    var changeComboNationality = function(selectedNationality, hotelNationality) {
        if (hotelNationality == "IT" && selectedNationality != "IT") {
            let toAppend = ``;
            cityFields.empty();
            $("#country > option").each(function() {
                toAppend += "<option value='" + $(this).val() + "'>" + $(this).text() + "</option>\n";
            });
            expedition_place.empty().append(toAppend);
            birthplace.empty().append(toAppend);
            setTimeout(function() {
                expedition_place.selectpicker("refresh");
                birthplace.selectpicker("refresh");
            }, 300);
        }
    };
    function createFields() {
        if (!$("#birthdate").length) {
            $("<input>").attr({
                type: "hidden",
                id: "birthdate",
                value: "",
                name: "birthDate"
            }).addClass("js-logged-birth-date").appendTo(guestDataForm);
        }
        if (!$("#city").length) {
            $("<input>").attr({
                type: "hidden",
                id: "city",
                value: "",
                name: "city"
            }).appendTo(guestDataForm);
        }
        if (!$("#loginRewards").length) {
            $("<input>").attr({
                type: "hidden",
                id: "loginRewards",
                value: "",
                name: "loginRewards"
            }).appendTo(guestDataForm);
        }
        if (!$("#taxExpeditorPlace").length) {
            $("<input>").attr({
                type: "hidden",
                id: "taxExpeditorPlace",
                value: "",
                name: "taxExpeditorPlace"
            }).appendTo(guestDataForm);
        }
        if (!$("#taxIssueDate").length) {
            $("<input>").attr({
                type: "hidden",
                id: "taxIssueDate",
                value: "",
                name: "taxIssueDate"
            }).appendTo(guestDataForm);
        }
    }
    function requestHidden(selectedNationality, hotelNationality) {
        if (NATIONALITIES[0].debug) console.log("PAIS RESIDENCIA:", selectedNationality, "\nHOTEL NACIONALIDAD:", hotelNationality);
        var found = {
            inputHidden: hotelNationality == "IT" && !NATIONALITIES[0].activeItaly ? NATIONALITIES[0].othterItaly : NATIONALITIES[0].fields,
            validations: hotelNationality == "IT" && !NATIONALITIES[0].activeItaly ? NATIONALITIES[0].validationsItaly : NATIONALITIES[0].validations
        };
        Object.entries(NATIONALITIES).forEach(([key, value]) => {
            if (typeof value.nationalities !== "undefined") {
                value.nationalities.find(function(element) {
                    if (element == selectedNationality) {
                        if (hotelNationality == selectedNationality) {
                            if (!NATIONALITIES[0].activeItaly && hotelNationality == "IT" && selectedNationality == "IT") {
                                if (NATIONALITIES[0].debug) console.log("EXCEPCION ACTIVAR ITALIA.");
                                found.inputHidden = NATIONALITIES[0].fields;
                                found.validations = NATIONALITIES[0].validations;
                            } else {
                                found.inputHidden = value.fields;
                                if (typeof value.validations !== "undefined") found.validations = value.validations;
                            }
                        } else {
                            if (hotelNationality == "IT") {
                                found.inputHidden = NATIONALITIES[0].othterItaly;
                                found.validations = NATIONALITIES[0].validationsItaly;
                            } else {
                                found.inputHidden = typeof value.others !== "undefined" ? value.others : value.fields;
                                found.validations = typeof value.validationsOthers !== "undefined" ? value.validationsOthers : value.validations;
                            }
                        }
                    }
                });
            }
        });
        if (NATIONALITIES[0].debug) console.log("COFIGURACIÓN FINAL.", found);
        return found;
    }
    const localData = function(create, data) {
        if (create) {
            sessionStorage.setItem("dataFormGuest", JSON.stringify(data));
            sessionStorage.setItem("prevFormGuest", false);
        } else {
            if (sessionStorage.getItem("dataFormGuest")) {
                return sessionStorage.getItem("dataFormGuest");
            } else return "";
        }
    };
    function onNationalityInputChange() {
        var hotelNationality = "";
        if (NATIONALITIES[0].hotelNationality !== false && NATIONALITIES[0].hotelNationality !== "") {
            hotelNationality = NATIONALITIES[0].hotelNationality;
        } else {
            if (typeof pageData.hotelCountryKey !== "undefined") {
                if (pageData.hotelCountryKey != "") {
                    hotelNationality = pageData.hotelCountryKey;
                } else $("form#guestDataForm")[0].reset();
            } else $("form#guestDataForm")[0].reset();
        }
        var selectedNationality = $(this).is("select") ? $(this).val().toUpperCase() : "";
        if (hotelNationality == "IT") {
            regionInit();
            $("#postalCode").val("");
            cityFields.empty();
            regionFields.each(function() {
                $(this).find("option:eq(0)").prop("selected", true);
            });
            setTimeout(function() {
                regionFields.selectpicker("refresh");
                cityFields.selectpicker("refresh");
            }, 100);
            changeComboNationality(selectedNationality, hotelNationality);
            if (selectedNationality != "") {
                let $moveTo = selectedNationality == "IT" ? $("#region_birthplace") : $("#birthplace");
                setTimeout(function() {
                    $("HTML, BODY").animate({
                        scrollTop: $moveTo.closest(".form-group").offset().top - 50
                    }, 1e3);
                }, 1e3);
            }
        }
        var requestNacionality = requestHidden(selectedNationality, hotelNationality);
        var inputsToHide = requestNacionality.inputHidden;
        showInputs();
        if (typeof NATIONALITIES[0].resetValidations !== "undefined") NATIONALITIES[0].resetValidations();
        hideInputs(requestNacionality.inputHidden);
        if (typeof requestNacionality.validations !== "undefined") NATIONALITIES[0].addValidations(requestNacionality.validations);
    }
    function hideInputs(inputIds) {
        inputIds.forEach(function(inputId) {
            if (typeof inputId != "undefined") toggleInputVisibility(inputId, false);
        });
    }
    function showInputs() {
        var allInputs = guestDataView.find(".form-group");
        allInputs.each(function(index, inputFormGroup) {
            if ($(inputFormGroup).find("select").length) {
                inputId = $(inputFormGroup).find("select").attr("id");
            } else {
                inputId = $(inputFormGroup).find("input, textarea").attr("id");
            }
            if (typeof inputId != "undefined") toggleInputVisibility(inputId, true);
        });
    }
    function toggleInputVisibility(inputId, visible) {
        if (typeof inputId == "undefined") return false;
        var input = guestDataView.find("#" + inputId);
        var inputFormGroup = input.closest(".form-group");
        inputFormGroup.each(function() {
            if (visible) {
                inputFormGroup.show();
                input.attr("data-validate", "true");
                input.removeAttr("disabled");
                if (inputId == "nationalIdExpeditionDate") inputFormGroup.closest(".row").children("div").show();
            } else {
                inputFormGroup.hide();
                input.attr("data-validate", "false");
                input.prop("disabled", true);
                if (inputId == "nationalIdExpeditionDate") inputFormGroup.closest(".row").children("div").hide();
            }
        });
        guestDataForm.validator({
            disable: false,
            custom: NATIONALITIES[0].boostrapValidators
        }).validator("update");
    }
    function onDateBirthChange() {
        $("#birthdate").val($(this).selectorDatepicker("getDate"));
        if (!$(this).selectorDatepicker("hasValue") || !$(this).selectorDatepicker("checkIsValidDate")) {
            boxConfirmDate.hide();
            restOfForm.show();
            return;
        }
        var selectedDateMoment = $(this).selectorDatepicker("getMomentDate");
        checkMinorGuest(selectedDateMoment);
    }
    function checkMinorGuest(birthDateMoment) {
        if (birthDateMoment.isValid() === true) {
            var age = moment().diff(birthDateMoment, "years");
            var isUnderAge = age < MIN_ADULT_AGE;
            if (isUnderAge) {
                onMinorGuestSelected();
            } else {
                boxConfirmDate.hide();
                restOfForm.show();
            }
            isUnderAgeInput.val(isUnderAge);
        }
    }
    function onMinorGuestSelected() {
        if (isMobile.any()) {
            childConfirmModal.modal("show");
        } else {
            boxConfirmDate.show();
        }
        restOfForm.hide();
    }
    function submitForm(e) {
        var isDisabled = $("#cityinput").prop("disabled");
        $("#city").val(isDisabled ? $("#cityselect").val() : $("#cityinput").val());
        $("#taxExpeditorPlace").val($("#expedition_place").val());
        let datetaxIssueDate = moment($("#nationalIdExpeditionDate").val(), "DDMMYY").format("DD/MM/YYYY");
        datetaxIssueDate = moment(datetaxIssueDate).isValid() ? datetaxIssueDate : "";
        $("#taxIssueDate").val(datetaxIssueDate);
        var validForm = true;
        var isUnderAge = isUnderAgeInput.val() === "true";
        var nacionalidad = document.querySelector("#nationality-clone");
        if (e.isDefaultPrevented()) {
            if (isUnderAge) {
                trackOCIMinorCheck();
                this.guestDataForm.validator("destroy");
                this.guestDataForm[0].submit();
            } else {
                validForm = false;
            }
            this.datepickerSelector.selectorDatepicker("validateOnSubmit");
        } else {
            validForm = this.datepickerSelector.selectorDatepicker("validateOnSubmit");
        }
        if (validForm === true) {
            $(".m-GDPR-group").find("input").each(function() {
                if ($(this).is(":checked") == false) {
                    $(this).parent().append('<input type="hidden" value="N" name="' + $(this).attr("name") + '" />');
                }
            });
            let datosForm = guestDataForm.serializeArray();
            localData(true, datosForm);
            if (NATIONALITIES[0].debug) console.log(datosForm);
            trackOCISuccess(Globals.page_section, nacionalidad.value);
            toggleLoadingButton(this.guestDataForm, true);
        } else {
            trackOCIError(Globals.page_section, nacionalidad.value);
            e.preventDefault();
        }
    }
    function onChildModalClose() {
        datepickerSelector.selectorDatepicker("setDate", "");
        datepickerSelector.find("select.js-day-selector").trigger("input");
        restOfForm.show();
    }
    function customDocumentNumberValidator($el) {
        value = $el.val();
        var docTypeInput = this.$element.find("select#tipo-doc");
        if (!value) {
            return;
        }
        if (value.length == 8) {
            var newDni = "0" + value;
            $el.val(newDni);
            value = newDni;
        }
        var validChars = "trwagmyfpdxbnjzsqvhlcket";
        var dniRexp = /^[0-9]{8}[trwagmyfpdxbnjzsqvhlcket]{1}$/i;
        var nieRexp = /^[XY]{1}[0-9]{7}[trwagmyfpdxbnjzsqvhlcket]{1}$/i;
        var string = (value == null ? "" : value).toString().toLowerCase();
        if (!dniRexp.test(string) && !nieRexp.test(string)) return "error";
        var nie = string.replace(/^[x]/, "0").replace(/^[y]/, "1");
        var letter = string.substr(-1);
        var charIndex = parseInt(nie.slice(0, -1)) % 23;
        return validChars.charAt(charIndex) === letter ? "" : "error";
    }
    function customBirthDateValidator() {
        if (this.datepickerSelector.selectorDatepicker("checkIsValidDate", true) === true) {
            if (this.datepickerSelector.selectorDatepicker("checkTimelineDate") === 1) {
                return "error";
            }
        }
    }
    function customValidateExpeditionDate($el) {
        f = $el.val();
        var dia = f.substr(0, 2), mes = f.substr(2, 2), year = f.substr(4, 2);
        var dd = parseInt(dia), m = parseInt(mes), y = parseInt(year);
        j = m == 1 ? 1 : m - 1;
        if (f.length < 6 || f.length > 6 || dd > 31 || m > 12 || dd == 0 || m == 0 || y == 0) return "error";
        var t = new Date(), yy = t.getFullYear(), mesactual = t.getMonth() + 1, diaactual = t.getDate();
        ya = yy.toString().substr(-2);
        y = y > ya && y > 50 ? y + 1900 : y + 2e3;
        var dt = `${y}-${mes}-${dia}`;
        var date = moment(dt);
        let today = moment(new Date());
        if (!date.isValid()) return "error";
        if (today.diff(date) < 0) return "error";
    }
    function fillLoggedInfo(response) {
        var inputId;
        var $inputLabel;
        var $selectedInput;
        var $element;
        var $select;
        var promise = new Promise(function(resolve, reject) {
            $.each(userLoggedFields, function(key, data) {
                if (typeof data != "undefined") {
                    $element = guestDataForm.find(data.class);
                    if ($element.length > 0) {
                        inputId = $element.attr("id");
                        $inputLabel = guestDataForm.find('label[for="' + inputId + '"]');
                        if (response[data.dataKey]) {
                            data.value = response[data.dataKey];
                        }
                        if (data.value != null) {
                            $select = $element.filter("select");
                            if ($select.length) {
                                _fillSelectElement($element, data.value);
                            } else if ([ "radio", "checkbox" ].indexOf($element.attr("type")) >= 0) {
                                var defaulGender = data.value.toLowerCase();
                                var genderValue = defaulGender == "male" || defaulGender == "female" ? defaulGender == "male" ? 1 : 2 : defaulGender;
                                $selectedInput = $element.filter("[value=" + genderValue + "]");
                                $selectedInput.trigger("click");
                            } else {
                                $element.val(data.value).focus();
                                $inputLabel.addClass("focus");
                            }
                        }
                    }
                }
            });
            resolve();
        });
        return promise.then(function(result) {
            _hideRewards();
        }, function(err) {
            if (NATIONALITIES[0].debug) console.log(err);
        }).catch(function(reason) {
            if (NATIONALITIES[0].debug) console.log("Manejar promesa rechazada (" + reason + ") aquí.");
        });
    }
    var _hideRewards = function() {
        $("#loginRewards").val("1");
        $(".box.m-rewards").remove();
        $("#GDPR_flag_5").closest(".m-GDPR").remove();
    };
    var _controlForward = function() {
        if ($("#name").val() != "") {
            var datosform = localData();
            Object.entries(JSON.parse(datosform)).forEach(([key, field]) => {
                console.log(field);
                var $element = $('[name="' + field.name + '"]');
                $select = $element.filter("select");
                if ($select.length) {
                    _fillSelectElement($element, field.value);
                }
                if (field.name == "birthDate") {
                    let birthDate = field.value;
                    if (birthDate != null) {
                        _fillSelectElement($("#dia"), parseInt(birthDate.split("/")[0]));
                        _fillSelectElement($("#mes"), parseInt(birthDate.split("/")[1]));
                        _fillSelectElement($("#year"), birthDate.split("/")[2]);
                    }
                }
                if (field.name == "loginRewards" && field.value == "1") _hideRewards();
            });
        }
    };
    function _fillSelectElement($element, value) {
        var $select = $element.filter("select");
        var selectedOption = $select.find("option[value=" + value + "]");
        var $input = $element.filter("input");
        if ($select.hasClass("ui-autocomplete-input")) {
            $input.val(selectedOption.text());
            $input.trigger("click");
        }
        $select.val(selectedOption.val()).change();
    }
    return {
        init: init,
        hideInputs: hideInputs,
        showInputs: showInputs,
        toggleInputVisibility: toggleInputVisibility,
        guestDataView: guestDataView,
        guestDataForm: guestDataForm,
        nationalityInput: nationalityInput,
        datepickerSelector: datepickerSelector,
        fillLoggedInfo: fillLoggedInfo
    };
}();

$(function() {
    if ($(".p-cio-guest-data").length) {
        guestData.init();
    }
    if ($(".p-cio-your-room").length) {
        if (typeof pageData != "undefined") {
            if (typeof pageData.javaError != "undefined" && pageData.javaError == "true") {
                $("#modal-java-error").modal("show");
            }
            hotelIdPage = typeof pageData.hotelId != "undefined" ? pageData.hotelId : "";
        }
        window.onbeforeunload = function(e) {
            sessionStorage.setItem("prevFormGuest", false);
        };
    }
    if ($(".m-arrival").length) {
        window.onbeforeunload = function(e) {
            sessionStorage.setItem("prevFormGuest", true);
        };
    }
    if ($(".m-guests-view").length) {
        sessionStorage.setItem("prevFormGuest", false);
    }
});

var guestPage = (() => {
    function init(selector) {
        var view = $(".guests-view-guests");
        $(".guests-view-guests").on("click", "button:submit", _clickButton);
    }
    _clickButton = function() {
        $(this).prop("disabled", true);
        $(this).closest("form").submit();
    };
    return {
        init: init
    };
})();

$(() => {
    if ($(".guests-view-guests").length) {
        guestPage.init(".guests-view-guests");
    }
});

var hotelMap = function(window, undefined) {
    var $mapsContainer;
    var $mapsContent;
    var $mapCanvas;
    var streetsSize = 140;
    var ratio = 8;
    var $floorsButtons;
    var $map;
    var data;
    function init(floorNumber) {
        $mapsContainer = $(".maps-container");
        $mapsContainer.css({
            width: "700px",
            height: "800px"
        });
        $mapsContent = $mapsContainer.find(".map-content");
        $map = $mapsContent.find(".map");
        $mapCanvas = $map.find(".maps-canvas");
        $floorsButtons = $(".floor-button");
        $floorsButtons.on("click", function() {
            data = $(this).data("floor");
            getFloor(data);
        });
        getFloor(1);
    }
    function getFloor(floorNumber) {
        var domain = window.location.host;
        var url;
        var promise = null;
        if (window.location.host.indexOf("localhost") >= 0 || window.location.host.indexOf("172.18.65.107") >= 0) {
            url = "http://" + domain + "/src/mocks/floor" + floorNumber + ".json";
        } else {
            if (window.location.pathname.indexOf("/dev/nh-v3/") >= 0) {
                url = "http://" + domain + "/dev/nh-v3/mocks/floor" + floorNumber + ".json";
            } else {
                url = "http://" + domain + "/html/nh-v3/mocks/floor" + floorNumber + ".json";
            }
        }
        promise = $.getJSON(url);
        $mapCanvas.html("").hide();
        $map.html("").append($mapCanvas);
        $.when(promise).then(function(response) {
            _buildMap(response);
        }, function(error) {}).always(function() {});
    }
    function getFloorByUrl(floorUrl) {
        var promise = $.getJSON(floorUrl);
        $mapCanvas.html("").hide();
        $map.html("").append($mapCanvas);
        $.when(promise).then(function(response) {
            _buildMap(response);
        }, function(error) {}).always(function() {});
    }
    function getFloorByString(jsonString) {
        _buildMap(JSON.parse(jsonString));
    }
    function _buildMap(floorData) {
        var structure = $(document.createElementNS("http://www.w3.org/2000/svg", "polyline")).attr({
            points: _getStructureCoordinates(floorData.floor.structure),
            fill: "#fff",
            stroke: "#fff",
            "stroke-width": 1
        });
        var hiddenMap;
        $mapCanvas.append(structure);
        $map.css({
            height: $mapCanvas.height()
        });
        $mapsContent.css({
            width: $mapCanvas.width() + streetsSize * 2,
            height: $mapCanvas.height() + streetsSize * 2
        });
        _drawStreets(floorData.streets);
        _drawRooms(floorData.rooms);
        hiddenMap = getVisibleMapAvailable();
        $mapsContent.css(centerMap(hiddenMap)).pep({
            constrainTo: [ -hiddenMap.hSize, 0, 0, -hiddenMap.wSize ],
            useCSSTranslation: false,
            shouldEase: false,
            debug: false
        });
    }
    function getVisibleMapAvailable() {
        var wDiff = $mapsContent.outerWidth(true) - $mapsContainer.width(), hDiff = $mapsContent.outerHeight(true) - $mapsContainer.height();
        return {
            hSize: hDiff,
            wSize: wDiff
        };
    }
    function centerMap(data) {
        var centerCoor = {
            left: data.wSize / 2 * -1,
            top: data.hSize / 2 * -1
        };
        return centerCoor;
    }
    function _drawStreets(streetsData) {
        var streetInfo;
        var streetInfoValue;
        var $streets;
        $.each(streetsData, function(key, value) {
            var info = "";
            var $currentStreet;
            streetInfo = $("<div class='street-info'></div>");
            streetInfoValue = $("<span class='street-orientation'></span>");
            $streets = $mapsContent.find("div.street");
            streetInfoValue.addClass(value.type.toLowerCase());
            $currentStreet = $streets.filter(".street-" + key);
            $currentStreet.html("");
            if (value.name && value.name.length > 0) {
                info += "<p class='street-name'><span>" + value.name + "</span></p>";
            }
            if (value.type === "city" && value.name) {
                streetInfo.addClass("info-poi");
                info += "<span class='street-orientation poi' ></span>";
            } else if (value.type !== "city") {
                streetInfo.addClass("info-" + value.type);
                info += "<span class='street-orientation " + value.type + "' ></span>";
            }
            streetInfo.html(info);
            $currentStreet.append(streetInfo);
        });
    }
    function _drawRooms(roomsData) {
        var roomData;
        var roomContainer;
        var roomContent;
        var roomClass;
        var selectableRoomsList = [ "none", "room", "upselling", "duplex", "duplex-upsell", "duplex-upselling" ];
        for (let x = 0; x < roomsData.length; x++) {
            roomContainer = $("<div></div>");
            roomContent = null;
            roomClass = "room ";
            roomData = roomsData[x];
            _setUpRoomContainer(roomData, roomContainer);
            if (selectableRoomsList.indexOf(roomData.special) >= 0) {
                roomClass += roomData.available ? "room-available" : "room-noavailable";
                roomClass += roomData.preferences ? "-preferences" : "";
                roomClass += roomData.special.indexOf("upselling") >= 0 ? "-upselling" : "";
                roomClass += roomData.special.indexOf("duplex") >= 0 ? " room-duplex" : "";
                roomClass += roomData.door ? " door door-" + roomData.door : "";
                roomContent = `<div class='room-content'><span>${roomData.id || ""}</span><i></i></div>`;
            } else {
                roomClass += "room-" + roomData.special.toLowerCase();
                roomContent = `<div class='room-content'><span>${roomData.description || ""}</span></div>`;
            }
            roomContainer.html(roomContent).addClass(roomClass);
            $map.append(roomContainer);
        }
    }
    function _setUpRoomContainer(roomData, roomContainer) {
        roomContainer.css({
            width: roomData.hsize * ratio,
            height: roomData.vsize * ratio,
            position: "absolute",
            top: roomData.y * ratio,
            left: roomData.x * ratio
        });
    }
    function _getStructureCoordinates(structureData) {
        var canvasWidth = 0;
        var canvasHeight = 0;
        var coor = "";
        for (var x = 0; x < structureData.length; x++) {
            data = structureData[x];
            canvasWidth = data.xend * ratio > canvasWidth ? data.xend * ratio : canvasWidth;
            canvasHeight = data.yend * ratio > canvasHeight ? data.yend * ratio : canvasHeight;
            coor += data.xst * ratio + "," + data.yst * ratio + " " + data.xend * ratio + "," + data.yend * ratio + " ";
        }
        $mapCanvas.attr({
            width: canvasWidth,
            height: canvasHeight
        }).show();
        return coor;
    }
    return {
        init: init,
        getFloor: getFloor
    };
}(window, undefined);

$(function() {
    var hasMap = $("#floor-map-guide").length;
    if (hasMap) {
        hotelMap.init();
    }
});

var styleGuide = (() => {
    var styleGuideView = $(".style-guide");
    var sgHeader = $(".sg-header");
    var navigationLinks = styleGuideView.find(".js-navigation-link");
    var btnMenu = sgHeader.find(".hamburguer");
    var sideBar = styleGuideView.find(".sg-sidebar");
    const DEFAULT_HASH = "#brand";
    const STICKY = styleGuideView.offset() ? styleGuideView.offset().top : "0";
    function init() {
        navigationLinks.on("click", _handlerClickNavigationLink);
        btnMenu.on("click", _handlerHamburguerButtonClick);
        if (styleGuideView.length > 0) {
            _initNavigation();
            $(window).on("scroll", _handlerStickySideBar);
        }
        _initForms();
    }
    function _handlerHamburguerButtonClick(e) {
        $(this).toggleClass("close-hamburguer");
        sideBar.toggleClass("is_active");
    }
    function _initNavigation() {
        var hashUrl = window.location.hash.length > 0 ? window.location.hash : DEFAULT_HASH;
        navigate(hashUrl);
    }
    function navigate(hashUrl) {
        $(`.js-navigation-link a[href="${hashUrl}"]`).closest("li").addClass("active");
        $(".accordion-section" + hashUrl + "-view").removeClass("hide").addClass("open");
        window.location.hash = hashUrl;
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    }
    function _handlerClickNavigationLink(e) {
        var currentAttrValue = $(this).find("a").attr("href");
        if ($(e.target).is(".active")) {
            _close_accordion_section();
        } else {
            _close_accordion_section();
            navigate(currentAttrValue);
        }
        e.preventDefault();
    }
    function _close_accordion_section() {
        navigationLinks.removeClass("active");
        $(".accordion-section").addClass("hide").removeClass("open");
    }
    function _handlerStickySideBar() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= STICKY) {
            styleGuideView.addClass("sg-sticky");
        } else {
            styleGuideView.removeClass("sg-sticky");
        }
    }
    function _initForms() {
        var form = styleGuideView.find("form.js-form-steps");
        var formStepsView = styleGuideView.find(".form-steps");
        formStepsView.formSteps({
            initStep: 0
        });
        form.validator({
            disable: false
        }).on("submit", function(e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
            if (e.isDefaultPrevented()) {
                toggleLoadingButton($form, false);
            } else {}
        });
    }
    return {
        init: init
    };
})();

$(() => {
    styleGuide.init();
});

function setCurrentDate() {
    var fecha = new Date();
    var curMonth = fecha.getMonth() + 1;
    var curYear = fecha.getFullYear();
    if (curMonth < 10) curMonth = "0" + curMonth;
    curYear = curYear.toString().substr(2, 2);
    $("[data-id='mesValidate']").val(curMonth);
    $("[data-id='mesValidate']").selectpicker("refresh");
    $("[data-id='anioValidate']").val(curYear);
    $("[data-id='anioValidate']").selectpicker("refresh");
    $(".custom-card .expired-date-card .month").text(curMonth);
    $(".custom-card .expired-date-card .year").text(curYear);
}

function setMonthsFromToday() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var options = "";
    var vi = 0;
    for (var i = month; i < 13; i++) {
        vi = i;
        if (i < 10) vi = "0" + i;
        options += "<option value='" + vi + "'>" + vi + "</option>";
    }
    $("[data-id='mesValidate']").html(options);
}

function setFullMonths() {
    var options = "";
    for (var i = 1; i < 13; i++) {
        options += "<option value='" + i + "'>" + i + "</option>";
    }
    $("[data-id='mesValidate']").html(options);
}

function isDateValid(month, year) {
    var fecha = new Date();
    var curYear = fecha.getFullYear();
    var curMonth = fecha.getMonth() + 1;
    if (year >= curYear) {
        if (year == curYear) {
            if (month >= curMonth) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

$(function() {
    $(".inputClear").click(function() {
        $(this).prev("input").val("");
        $(this).nextAll(".icon").removeClass("ok").removeClass("ko");
    });
    $(".mesValidate, .anioValidate").change(function() {
        var objYear = $(this).closest(".js-validate-card, .js-validate-card-2").find("select.anioValidate");
        var objMonth = $(this).closest(".js-validate-card, .js-validate-card-2").find("select.mesValidate");
        var selYear = "20" + objYear.val();
        var selMonth = objMonth.val();
        var objHidden = $(this).closest(".form-group").find(".callback_date");
        objHidden.val(selMonth + "-" + selYear);
        objHidden.trigger("change");
    });
    $('input[data-validation-callback-callback="callback_cvv"]').on("focus", function() {
        var maxMin = $(this).attr("data-callback-num");
        $(this).attr("maxlength", maxMin);
    });
});

function callback_date($el, value, callback) {
    var selMonth = parseInt(value.split("-")[0], 10);
    var selYear = parseInt(value.split("-")[1], 10);
    var isValid;
    if (!isNaN(selMonth) && selYear.toString().length > 2) {
        isValid = isDateValid(selMonth, selYear);
    } else {
        isValid = false;
    }
    callback({
        value: value,
        valid: isValid,
        message: ""
    });
}

function callback_card($el, value, callback) {
    var isValid = false;
    var errorMessage = $el.attr("data-validation-callback-message");
    var realValue = value.replace(/ /g, "").replace(/_/g, "");
    var valueLength = realValue.length;
    var checkedCard = checkCard(value);
    if ($el.attr("maxlength") == "34") {
        var lengthValid = valueLength == 15;
    } else if ($el.attr("maxlength") == "38") {
        var lengthValid = valueLength == 16;
    } else if ($el.attr("maxlength") == "32") {
        var lengthValid = valueLength == 14;
    }
    if (lengthValid || globalConfig.windowWidth <= globalConfig.smBreak) {
        if (checkedCard) {
            if (!$el.hasClass("invalidType")) {
                isValid = true;
            } else {
                errorMessage = $el.attr("data-validation-callback-valid-message");
            }
        } else {
            errorMessage = $el.attr("data-validation-callback-valid-message");
        }
    } else {
        errorMessage = $el.attr("data-validation-callback-length-message");
    }
    callback({
        value: value,
        valid: isValid,
        message: errorMessage
    });
}

function callback_cvv($el, value, callback) {
    var maxMin = parseInt($el.attr("data-callback-num"), 10);
    var valueLength = value.length;
    var callbackMessage = $el.attr("data-validation-callback-message");
    var isValid = valueLength == maxMin;
    var max = 3;
    if ($el.attr("maxlength") == "34") {
        var lengthValid = valueLength == 15;
        var max = 4;
    } else if ($el.attr("maxlength") == "38") {
        var lengthValid = valueLength == 16;
    } else if ($el.attr("maxlength") == "32") {
        var lengthValid = valueLength == 14;
    }
    if (lengthValid || globalConfig.windowWidth <= globalConfig.smBreak) {
        if ($(".js-cvv").val().length > max) {
            $(".js-cvv").val($(".js-cvv").val().substr(0, max));
        }
    }
    if ($(".js-cvv").val().length == max) {
        isValid = true;
    }
    callback({
        value: value,
        valid: isValid,
        message: callbackMessage
    });
}

var checkCard = function(cardValue) {
    var c = cardValue;
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

var dynamicTelephones = function() {
    var _campId = typeof campId != "undefined" ? campId : "";
    var _country = typeof country != "undefined" ? country : "";
    var _countryName = typeof countryName != "undefined" ? countryName : "";
    var _continent = typeof continent != "undefined" ? continent : "";
    var _webSection = typeof page_section != "undefined" ? page_section : "";
    var channelIndex = "-1";
    var telephone = "";
    var telephoneWebSection = "";
    var global = "";
    var countryName = "";
    var countryText = "";
    var countryFound = false;
    var telephoneJSON = "/resources/telephoneJSON.txt";
    var telephoneCountry = "";
    var countryUser = "";
    var lblGlobalAccess = typeof Labels.globalAccess != "undefined" ? Labels.globalAccess : "Global Access";
    var init = function() {
        if (typeof Agent != "undefined") {
            _country = Agent.country;
            _campId = Agent.campId;
            _countryName = Agent.countryName;
            _continent = Agent.continent;
        }
        if ($("body").hasClass("page-roomdisplay")) {
            _campId = Utils.getURLParameter("campid");
        }
        _continent = $.cookie("USER_CT_CONTINENT") != "" && $.cookie("USER_CT_CONTINENT") != null ? $.cookie("USER_CT_CONTINENT") : _continent;
        _country = $.cookie("USER_CT_COUNTRYCODE") != "" && $.cookie("USER_CT_COUNTRYCODE") != null ? $.cookie("USER_CT_COUNTRYCODE") : _country;
        _countryName = $.cookie("USER_CT_COUNTRYCODE") != "" && $.cookie("USER_CT_COUNTRYCODE") != null ? $.cookie("USER_CT_COUNTRYCODE") : _countryName;
        countryText = _country;
        countryUser = _country;
        if (_campId) {
            if (_campId == "8431996") {
                $(".labelMeta").removeClass("hidden");
                $(".imageMetaSearch").html('<img class="lazyload" src="/system/v2/html/img/logos/trivago_160x40.png" width="100" alt="" >');
            }
            if (_campId == "8435709") {
                $(".labelMeta").removeClass("hidden");
                $(".imageMetaSearch").html('<img class="lazyload" src="/system/v2/html/img/logos/tripadvisor_160x40.png" width="93" alt="" >');
            }
            if (_campId == "8565112") {
                $(".labelMeta").removeClass("hidden");
                $(".imageMetaSearch").html('<img class="lazyload" src="/system/v2/html/img/logos/google_160x40.png" width="93" alt="" >');
            }
            if (_campId == "20405652") {
                $(".labelMeta").removeClass("hidden");
                $(".imageMetaSearch").html('<img class="lazyload" src="/system/v2/html/img/logos/roomkey.png" width="93" alt="" >');
            }
        }
        /*
        $.ajax({
            url: telephoneJSON,
            dataType: "json",
            cache: true
        }).done(function(data) {
            if (data) {
                if (_campId) {
                    for (var i = 0; i < data.channels.length; i++) {
                        for (var j = 0; j < data.channels[i].agent.length; j++) {
                            if (data.channels[i].agent[j].campId == _campId) {
                                channelIndex = i;
                            }
                        }
                    }
                    if (channelIndex != "-1") {
                        for (var k = 0; k < data.channels[channelIndex].telephones.length; k++) {
                            if (data.channels[channelIndex].telephones[k].country == countryUser) {
                                telephoneCountry = data.channels[channelIndex].telephones[k].telephone;
                                telephone = data.channels[channelIndex].telephones[k].telephone;
                                countryName = data.channels[channelIndex].telephones[k].countryName;
                                countryFound = true;
                            } else {
                                $(".telephoneList").append('<li><a href="tel:' + data.channels[channelIndex].telephones[k].telephone + '">' + data.channels[channelIndex].telephones[k].telephone + " (" + data.channels[channelIndex].telephones[k].country + ")" + "</a></li>");
                            }
                        }
                        if (data.channels[channelIndex].globalChannel != "") {
                            if (countryFound) {
                                $(".telephoneList").html($(".telephoneList").html() + '<li><a href="tel:' + data.channels[channelIndex].globalChannel + '">' + data.channels[channelIndex].globalChannel + " (" + lblGlobalAccess + ")" + "</a></li>");
                                global = data.channels[channelIndex].globalChannel;
                            } else {
                                telephone = data.channels[channelIndex].globalChannel;
                                global = data.channels[channelIndex].globalChannel;
                                countryText = lblGlobalAccess;
                            }
                        }
                    }
                }
                if (Globals.responsive == "responsive") {
                    for (var i = 0; i < data.channels.length; i++) {
                        if (data.channels[i].name == "MOBILE TELEPHONES") {
                            channelIndex = i;
                            for (var k = 0; k < data.channels[channelIndex].telephones.length; k++) {
                                if (data.channels[channelIndex].telephones[k].country == countryUser) {
                                    telephoneCountry = data.channels[channelIndex].telephones[k].telephone;
                                    telephone = data.channels[channelIndex].telephones[k].telephone;
                                    countryName = data.channels[channelIndex].telephones[k].countryName;
                                    countryFound = true;
                                }
                            }
                            global = data.channels[channelIndex].globalChannel;
                        }
                    }
                }
                if (channelIndex == "-1") {
                    for (var i = 0; i < data.channels.length; i++) {
                        if (data.channels[i].defaultChannel == "Yes") {
                            for (var k = 0; k < data.channels[i].telephones.length; k++) {
                                if (data.channels[i].telephones[k].country == _country) {
                                    telephone = data.channels[i].telephones[k].telephone;
                                    countryName = data.channels[i].telephones[k].countryName;
                                    countryFound = true;
                                } else {
                                    $(".telephoneList").html($(".telephoneList").html() + '<li><a href="tel:' + data.channels[i].telephones[k].telephone + '">' + data.channels[i].telephones[k].telephone + " (" + data.channels[i].telephones[k].country + ")" + "</a></li>");
                                }
                            }
                            if (data.channels[i].globalChannel != "") {
                                if (countryFound) {
                                    $(".telephoneList").html($(".telephoneList").html() + '<li><a href="tel:' + data.channels[i].globalChannel + '">' + data.channels[i].globalChannel + " (" + lblGlobalAccess + ")" + "</a></li>");
                                    global = data.channels[i].globalChannel;
                                } else {
                                    telephone = data.channels[i].globalChannel;
                                    global = data.channels[i].globalChannel;
                                    countryText = lblGlobalAccess;
                                }
                            }
                        }
                        if (data.channels[i].webSection != null && data.channels[i].webSection == _webSection) {
                            for (var k = 0; k < data.channels[i].telephones.length; k++) {
                                if (data.channels[i].telephones[k].country == _country) {
                                    telephoneWebSection = data.channels[i].telephones[k].telephone;
                                    break;
                                } else {
                                    telephoneWebSection = data.channels[i].globalChannel;
                                }
                            }
                        }
                    }
                }
                if (telephone) {
                    $(".phoneHeader").html(telephone + " (" + countryText + ")" + $(".phoneHeader").html());
                    $(".phoneHeaderMob").html(telephone + " (" + countryText + ")" + $(".phoneHeaderMob").html());
                } else {
                    $(".phoneHeader,.phoneHeaderMob").parents("li").hide();
                }
                $(".dynamicTelephone").each(function(indice, elemento) {
                    $(elemento).text($(elemento).text() + telephone);
                });
                $(".phoneGlobal").html(global);
                $(".phoneCountry").html(countryName);
                if (telephone != global) {
                    $(".phoneContact").html(telephone);
                } else {
                    $("#telephoneContact").hide();
                }
                if (telephoneWebSection) {
                    $(".dynamicTelephoneWidget").html(telephoneWebSection);
                } else {
                    $(".dynamicTelephoneWidget").html(telephone);
                }
                $(".dynamicTelephone").attr("href", "tel:" + telephone);
                $(".phoneGlobal").attr("href", "tel:" + global);
                $("#contactTel .dynamicTelephone").html("(" + countryText + ")" + "</br> " + telephone);
                var sectionTel = $(".dynamicTelephoneWidget").html();
                $(".dynamicTelephoneWidget").attr("href", "tel:" + sectionTel);
                changeHTMLMobile();
            }
        }).fail(function(data) {
            console.log("Error al recuperar los telefonos dynamicos");
            var globalTelephone = "+34 91 398 46 61";
            $(".phoneHeader").html(globalTelephone + " (" + lblGlobalAccess + ") <b class='caret'></b>");
            $(".phoneHeaderMob").html(globalTelephone + " (" + lblGlobalAccess + ") <b class='caret'></b>");
            $().html("<li><a href='tel:+43 0820 40 11 56 08'>+43 0820 40 11 56 08 (AT)</a></li><li><a href='tel:+32 070 35 47 72'>+32 070 35 47 72 (BE)</a></li><li><a href='tel:+33 (0)821 77 42 96'>+33 (0)821 77 42 96 (FR)</a></li><li><a href='tel:+49 30 22388599'>+49 30 22388599 (DE)</a></li><li><a href='tel:(+39) 848 390 227'>(+39) 848 390 227 (IT)</a></li><li><a href='tel:+351 707 500 302'>+351 707 500 302 (PT)</a></li><li><a href='tel:902 570 368'>902 570 368 (ES)</a></li><li><a href='tel:+41 (0)848 20 74 16'>+41 (0)848 20 74 16 (CH)</a></li><li><a href='tel:+31 (0)20 79 56 088'>+31 (0)20 79 56 088 (NL)</a></li><li><a href='tel:+44 (0)870 80 71 359'>+44 (0)870 80 71 359 (GB)</a></li><li><a href='tel:+1 646 568 4725'>+1 646 568 4725 (US)</a></li><li><a href='tel:+54 (0)11 5776 6464'>+54 (0)11 5776 6464 (AR)</a></li><li><a href='tel:+56 (0)2 341 7575'>+56 (0)2 341 7575 (CL)</a></li><li><a href='tel:+57 1 589 7744'>+57 1 589 7744 (CO)</a></li><li><a href='tel:+52 (0)55 52291500'>+52 (0)55 52291500 (MX)</a></li><li><a href='tel:+598 (0)2 9160001'>+598 (0)2 9160001 (UY)</a></li><li><a href='tel:+58 295 400 7111'>+58 295 400 7111 (VE)</a></li>");
            $(".phoneGlobal").html(globalTelephone + "");
            $(".dynamicTelephone").attr("href", "tel:" + globalTelephone).html(globalTelephone);
            $(".phoneCountry").html("Spain");
            $("#telephoneContact").hide();
            telephoneCountry = "+34 91 398 46 61";
            global = "+34 91 398 46 61";
            changeHTMLMobile();
        });
        */
    };
    var changeHTMLMobile = function() {
        countryName = countryName != "" ? countryName : countryText;
        telephoneCountry = telephoneCountry != "" ? telephoneCountry : telephone;
        $("a.mobileDynamicTelephone").attr("href", "tel:" + telephoneCountry.replace(/ /g, "")).html(telephoneCountry);
        $(".mobileDynamicTelephoneTxt").html(telephoneCountry);
        $("a.mobileDynamicTelephoneHref").attr("href", "tel:" + telephoneCountry.replace(/ /g, ""));
        $("a.mobileDynamicPhoneGlobal").attr("href", "tel:" + global.replace(/ /g, "")).html(global);
        $("a.mobileDynamicPhoneGlobalHref").attr("href", "tel:" + global.replace(/ /g, ""));
        $(".mobileDynamicPhoneGlobalTxt").html(global);
        $("#mobileContactTel .mobileDynamicTelephone").html(countryName + "</br> " + telephoneCountry);
    };
    return {
        init: init
    };
}();

$(document).ready(function() {
    dynamicTelephones.init();
});

var TrackOci = function() {
    let trackList = null;
    if (typeof reservationIdOci !== "undefined") {
        trackList = {
            ".js-track-checking-now": [ {
                eventCategory: Globals.page_section,
                eventAction: "Cheking Now",
                eventLabel: reservationIdOci,
                event: "OCI|Checking"
            } ],
            ".js-trackPreselectedRoom": [ {
                eventCategory: Globals.page_section,
                eventAction: "Start Checking",
                eventLabel: reservationIdOci,
                event: "OCI|YourRoom"
            } ],
            ".js-trackChooseRoom": [ {
                eventCategory: Globals.page_section,
                eventAction: "Select Another Room",
                eventLabel: reservationIdOci,
                event: "OCI|YourRoom"
            } ],
            ".js-trackCheckInTime": [ {
                eventCategory: Globals.page_section,
                eventAction: "Arrival Info",
                eventLabel: function() {
                    let $arrivalTime = document.querySelector("#arrival_time");
                    return $arrivalTime.value;
                },
                event: "OCI|Arrival"
            } ],
            ".js-trackMoreInfPreselectedRoom": [ {
                eventCategory: Globals.page_section,
                eventAction: "Arrival Info Preselect",
                eventLabel: reservationIdOci,
                event: "OCI|Arrival"
            } ],
            "#submitminor": [ {
                eventCategory: "Checkingformanalysis",
                eventAction: "Minor Check",
                eventLabel: "Success",
                event: "OCI|Checkingformanalysis"
            } ],
            "#cancelminor": [ {
                eventCategory: "Checkingformanalysis",
                eventAction: "Minor Check",
                eventLabel: "Cancel",
                event: "OCI|Checkingformanalysis"
            } ]
        };
    }
    var events = trackList;
    return {
        events: trackList
    };
}();

var trackAnalitics = function() {
    const debutTraking = false;
    var init = trackList => events(trackList);
    var events = trackList => {
        if (trackList !== null) {
            if (debutTraking) {
                console.log(trackList);
            }
            Object.entries(trackList).forEach(([key, value]) => {
                if ($(key).length && value.length) {
                    $(document).on("click", key, function() {
                        parseTrack(key, trackList[key]);
                    });
                }
            });
        }
    };
    function parseTrack(selector, data) {
        return data.forEach(function(element) {
            var elemnTrack = {};
            Object.entries(element).forEach(([key, value]) => {
                elemnTrack[key] = typeof value === "function" ? value() : value;
            });
            track(elemnTrack);
        });
    }
    function track(data) {
        try {
            if (debutTraking) {
                console.log("---- TRACKING ----");
                console.log(data);
                console.log("---- FIN TRACK ----");
            }
            utag.link(data);
        } catch (err) {
            utagError = err;
        }
    }
    return {
        init: init,
        tracking: track
    };
}();

$(document).ready(function() {
    if (typeof TrackOci !== "undefined") trackAnalitics.init(TrackOci.events);
});

function trackOCILogin(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Login Rewards",
        eventLabel: idreserva,
        event: "OCI|Checkingformanalysis"
    });
}

function trackOCIError(page, nacionaliti) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Error",
        eventLabel: nacionaliti,
        event: "OCI|Checkingformanalysis"
    });
}

function trackOCISuccess(page, nacionaliti) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Success",
        eventLabel: nacionaliti,
        event: "OCI|Checkingformanalysis"
    });
}

function trackOCIMinorCheck() {
    trackAnalitics.tracking({
        eventCategory: "Checkingformanalysis",
        eventAction: "Minor Check",
        eventLabel: "Cancel",
        event: "OCI|Checkingformanalysis"
    });
}

function trackOCIPreferences(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Save Preferences",
        eventLabel: idreserva,
        event: "OCI|Preferences"
    });
}

function trackOCIChangeFloor(page, Hotelid, floor) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Change Floor",
        eventLabel: Hotelid + "|" + floor,
        event: "OCI|YourRoom"
    });
}

function trackOCIModifyPreferences(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Modify Preferences",
        eventLabel: idreserva,
        event: "OCI|YourRoomp"
    });
}

function trackOCIZoomInRoom(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Zoom In Room",
        eventLabel: idreserva,
        event: "OCI|YourRoom"
    });
}

function trackOCIZoomOutRoom(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Zoom out Room",
        eventLabel: idreserva,
        event: "OCI|map"
    });
}

function trackOCIZoomMoreAbout(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "More About",
        eventLabel: idreserva,
        event: "OCI|YourRoom"
    });
}

function trackOCIProcessToChecking(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Process to Checking",
        eventLabel: idreserva,
        event: "OCI|YourRoom"
    });
}

function trackOCICheckingAnotherGuest(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Checking Another Guest",
        eventLabel: idreserva,
        event: "OCI|Confirmation"
    });
}

function trackOCISendCheckingByMail(page, idreserva) {
    trackAnalitics.tracking({
        eventCategory: page,
        eventAction: "Send checking by mail",
        eventLabel: idreserva,
        event: "OCI|Confirmation"
    });
}

function trackLogin(eventCategory, eventLabel, eventAction) {
    trackAnalitics.tracking({
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        event: "event"
    });
}