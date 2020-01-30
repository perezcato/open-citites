!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ODRI = e() : t.ODRI = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r])
                return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(a.exports, a, a.exports, e), a.l = !0, a.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/", e(e.s = 177)
    }([function(t, e, n) {
        function r(t, e) {
            if (s(t))
                return new Date(t.getTime());
            if ("string" != typeof t)
                return new Date(t);
            var n = e || {},
                r = n.additionalDigits;
            r = null == r ? p : Number(r);
            var f = a(t),
                l = o(f.date, r),
                h = l.year,
                b = l.restDateString,
                v = u(b, h);
            if (v) {
                var g,
                    m = v.getTime(),
                    y = 0;
                return f.time && (y = i(f.time)), f.timezone ? g = c(f.timezone) : (g = new Date(m + y).getTimezoneOffset(), g = new Date(m + y + g * d).getTimezoneOffset()), new Date(m + y + g * d)
            }
            return new Date(t)
        }
        function a(t) {
            var e,
                n = {},
                r = t.split(h);
            if (b.test(r[0]) ? (n.date = null, e = r[0]) : (n.date = r[0], e = r[1]), e) {
                var a = S.exec(e);
                a ? (n.time = e.replace(a[1], ""), n.timezone = a[1]) : n.time = e
            }
            return n
        }
        function o(t, e) {
            var n,
                r = g[e],
                a = y[e];
            if (n = m.exec(t) || a.exec(t)) {
                var o = n[1];
                return {
                    year: parseInt(o, 10),
                    restDateString: t.slice(o.length)
                }
            }
            if (n = v.exec(t) || r.exec(t)) {
                var u = n[1];
                return {
                    year: 100 * parseInt(u, 10),
                    restDateString: t.slice(u.length)
                }
            }
            return {
                year: null
            }
        }
        function u(t, e) {
            if (null === e)
                return null;
            var n,
                r,
                a,
                o;
            if (0 === t.length)
                return r = new Date(0), r.setUTCFullYear(e), r;
            if (n = x.exec(t))
                return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(e, a), r;
            if (n = _.exec(t)) {
                r = new Date(0);
                var u = parseInt(n[1], 10);
                return r.setUTCFullYear(e, 0, u), r
            }
            if (n = w.exec(t)) {
                r = new Date(0), a = parseInt(n[1], 10) - 1;
                var i = parseInt(n[2], 10);
                return r.setUTCFullYear(e, a, i), r
            }
            if (n = M.exec(t))
                return o = parseInt(n[1], 10) - 1, f(e, o);
            if (n = T.exec(t)) {
                o = parseInt(n[1], 10) - 1;
                return f(e, o, parseInt(n[2], 10) - 1)
            }
            return null
        }
        function i(t) {
            var e,
                n,
                r;
            if (e = O.exec(t))
                return (n = parseFloat(e[1].replace(",", "."))) % 24 * l;
            if (e = D.exec(t))
                return n = parseInt(e[1], 10), r = parseFloat(e[2].replace(",", ".")), n % 24 * l + r * d;
            if (e = k.exec(t)) {
                n = parseInt(e[1], 10), r = parseInt(e[2], 10);
                var a = parseFloat(e[3].replace(",", "."));
                return n % 24 * l + r * d + 1e3 * a
            }
            return null
        }
        function c(t) {
            var e,
                n;
            return (e = j.exec(t)) ? 0 : (e = N.exec(t)) ? (n = 60 * parseInt(e[2], 10), "+" === e[1] ? -n : n) : (e = A.exec(t), e ? (n = 60 * parseInt(e[2], 10) + parseInt(e[3], 10), "+" === e[1] ? -n : n) : 0)
        }
        function f(t, e, n) {
            e = e || 0, n = n || 0;
            var r = new Date(0);
            r.setUTCFullYear(t, 0, 4);
            var a = r.getUTCDay() || 7,
                o = 7 * e + n + 1 - a;
            return r.setUTCDate(r.getUTCDate() + o), r
        }
        var s = n(48),
            l = 36e5,
            d = 6e4,
            p = 2,
            h = /[T ]/,
            b = /:/,
            v = /^(\d{2})$/,
            g = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            m = /^(\d{4})/,
            y = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            x = /^-(\d{2})$/,
            _ = /^-?(\d{3})$/,
            w = /^-?(\d{2})-?(\d{2})$/,
            M = /^-?W(\d{2})$/,
            T = /^-?W(\d{2})-?(\d{1})$/,
            O = /^(\d{2}([.,]\d*)?)$/,
            D = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            k = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            S = /([Z+-].*)$/,
            j = /^(Z)$/,
            N = /^([+-])(\d{2})$/,
            A = /^([+-])(\d{2}):?(\d{2})$/;
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        function r(t, e, n, u) {
            function i(e) {
                return t(e = new Date(+e)), e
            }
            return i.floor = i, i.ceil = function(n) {
                return t(n = new Date(n - 1)), e(n, 1), t(n), n
            }, i.round = function(t) {
                var e = i(t),
                    n = i.ceil(t);
                return t - e < n - t ? e : n
            }, i.offset = function(t, n) {
                return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
            }, i.range = function(n, r, a) {
                var o = [];
                if (n = i.ceil(n), a = null == a ? 1 : Math.floor(a), !(n < r && a > 0))
                    return o;
                do {
                    o.push(new Date(+n))
                } while (e(n, a), t(n), n < r);
                return o
            }, i.filter = function(n) {
                return r(function(e) {
                    if (e >= e)
                        for (; t(e), !n(e);)
                            e.setTime(e - 1)
                }, function(t, r) {
                    if (t >= t)
                        if (r < 0)
                            for (; ++r <= 0;)
                                for (; e(t, -1), !n(t);)
                                    ;
                        else
                            for (; --r >= 0;)
                                for (; e(t, 1), !n(t);)
                                    ;
                })
            }, n && (i.count = function(e, r) {
                return a.setTime(+e), o.setTime(+r), t(a), t(o), Math.floor(n(a, o))
            }, i.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(u ? function(e) {
                    return u(e) % t == 0
                } : function(e) {
                    return i.count(0, e) % t == 0
                }) : i : null
            }), i
        }
        e.a = r;
        var a = new Date,
            o = new Date
    }, function(t, e, n) {
        !function() {
            "use strict";
            function e() {}
            function n(t, n) {
                var r,
                    a,
                    o,
                    u,
                    i = I;
                for (u = arguments.length; u-- > 2;)
                    C.push(arguments[u]);
                for (n && null != n.children && (C.length || C.push(n.children), delete n.children); C.length;)
                    if ((a = C.pop()) && void 0 !== a.pop)
                        for (u = a.length; u--;)
                            C.push(a[u]);
                    else
                        !0 !== a && !1 !== a || (a = null), (o = "function" != typeof t) && (null == a ? a = "" : "number" == typeof a ? a = String(a) : "string" != typeof a && (o = !1)), o && r ? i[i.length - 1] += a : i === I ? i = [a] : i.push(a), r = o;
                var c = new e;
                return c.nodeName = t, c.children = i, c.attributes = null == n ? void 0 : n, c.key = null == n ? void 0 : n.key, void 0 !== A.vnode && A.vnode(c), c
            }
            function r(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            function a(t, e) {
                return n(t.nodeName, r(r({}, t.attributes), e), arguments.length > 2 ? [].slice.call(arguments, 2) : t.children)
            }
            function o(t) {
                !t.__d && (t.__d = !0) && 1 == F.push(t) && (A.debounceRendering || setTimeout)(u)
            }
            function u() {
                var t,
                    e = F;
                for (F = []; t = e.pop();)
                    t.__d && D(t)
            }
            function i(t, e, n) {
                return "string" == typeof e || "number" == typeof e ? void 0 !== t.splitText : "string" == typeof e.nodeName ? !t._componentConstructor && c(t, e.nodeName) : n || t._componentConstructor === e.nodeName
            }
            function c(t, e) {
                return t.__n === e || t.nodeName.toLowerCase() === e.toLowerCase()
            }
            function f(t) {
                var e = r({}, t.attributes);
                e.children = t.children;
                var n = t.nodeName.defaultProps;
                if (void 0 !== n)
                    for (var a in n)
                        void 0 === e[a] && (e[a] = n[a]);
                return e
            }
            function s(t, e) {
                var n = e ? document.createElementNS("http://www.w3.org/2000/svg", t) : document.createElement(t);
                return n.__n = t, n
            }
            function l(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }
            function d(t, e, n, r, a) {
                if ("className" === e && (e = "class"), "key" === e)
                    ;
                else if ("ref" === e)
                    n && n(null), r && r(t);
                else if ("class" !== e || a)
                    if ("style" === e) {
                        if (r && "string" != typeof r && "string" != typeof n || (t.style.cssText = r || ""), r && "object" == typeof r) {
                            if ("string" != typeof n)
                                for (var o in n)
                                    o in r || (t.style[o] = "");
                            for (var o in r)
                                t.style[o] = "number" == typeof r[o] && !1 === E.test(o) ? r[o] + "px" : r[o]
                        }
                    } else if ("dangerouslySetInnerHTML" === e)
                        r && (t.innerHTML = r.__html || "");
                    else if ("o" == e[0] && "n" == e[1]) {
                        var u = e !== (e = e.replace(/Capture$/, ""));
                        e = e.toLowerCase().substring(2), r ? n || t.addEventListener(e, h, u) : t.removeEventListener(e, h, u), (t.__l || (t.__l = {}))[e] = r
                    } else if ("list" !== e && "type" !== e && !a && e in t)
                        p(t, e, null == r ? "" : r), null != r && !1 !== r || t.removeAttribute(e);
                    else {
                        var i = a && e !== (e = e.replace(/^xlink\:?/, ""));
                        null == r || !1 === r ? i ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.removeAttribute(e) : "function" != typeof r && (i ? t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : t.setAttribute(e, r))
                    }
                else
                    t.className = r || ""
            }
            function p(t, e, n) {
                try {
                    t[e] = n
                } catch (t) {}
            }
            function h(t) {
                return this.__l[t.type](A.event && A.event(t) || t)
            }
            function b() {
                for (var t; t = Y.pop();)
                    A.afterMount && A.afterMount(t), t.componentDidMount && t.componentDidMount()
            }
            function v(t, e, n, r, a, o) {
                z++ || (U = null != a && void 0 !== a.ownerSVGElement, P = null != t && !("__preactattr_" in t));
                var u = g(t, e, n, r, o);
                return a && u.parentNode !== a && a.appendChild(u), --z || (P = !1, o || b()), u
            }
            function g(t, e, n, r, a) {
                var o = t,
                    u = U;
                if (null == e && (e = ""), "string" == typeof e)
                    return t && void 0 !== t.splitText && t.parentNode && (!t._component || a) ? t.nodeValue != e && (t.nodeValue = e) : (o = document.createTextNode(e), t && (t.parentNode && t.parentNode.replaceChild(o, t), y(t, !0))), o.__preactattr_ = !0, o;
                if ("function" == typeof e.nodeName)
                    return k(t, e, n, r);
                if (U = "svg" === e.nodeName || "foreignObject" !== e.nodeName && U, (!t || !c(t, String(e.nodeName))) && (o = s(String(e.nodeName), U), t)) {
                    for (; t.firstChild;)
                        o.appendChild(t.firstChild);
                    t.parentNode && t.parentNode.replaceChild(o, t), y(t, !0)
                }
                var i = o.firstChild,
                    f = o.__preactattr_ || (o.__preactattr_ = {}),
                    l = e.children;
                return !P && l && 1 === l.length && "string" == typeof l[0] && null != i && void 0 !== i.splitText && null == i.nextSibling ? i.nodeValue != l[0] && (i.nodeValue = l[0]) : (l && l.length || null != i) && m(o, l, n, r, P || null != f.dangerouslySetInnerHTML), _(o, e.attributes, f), U = u, o
            }
            function m(t, e, n, r, a) {
                var o,
                    u,
                    c,
                    f,
                    s = t.childNodes,
                    d = [],
                    p = {},
                    h = 0,
                    b = 0,
                    v = s.length,
                    m = 0,
                    x = e ? e.length : 0;
                if (0 !== v)
                    for (var _ = 0; _ < v; _++) {
                        var w = s[_],
                            M = w.__preactattr_,
                            T = x && M ? w._component ? w._component.__k : M.key : null;
                        null != T ? (h++, p[T] = w) : (M || (void 0 !== w.splitText ? !a || w.nodeValue.trim() : a)) && (d[m++] = w)
                    }
                if (0 !== x)
                    for (var _ = 0; _ < x; _++) {
                        c = e[_], f = null;
                        var T = c.key;
                        if (null != T)
                            h && void 0 !== p[T] && (f = p[T], p[T] = void 0, h--);
                        else if (!f && b < m)
                            for (o = b; o < m; o++)
                                if (void 0 !== d[o] && i(u = d[o], c, a)) {
                                    f = u, d[o] = void 0, o === m - 1 && m--, o === b && b++;
                                    break
                                }
                        f = g(f, c, n, r), f && f !== t && (_ >= v ? t.appendChild(f) : f !== s[_] && (f === s[_ + 1] ? l(s[_]) : t.insertBefore(f, s[_] || null)))
                    }
                if (h)
                    for (var _ in p)
                        void 0 !== p[_] && y(p[_], !1);
                for (; b <= m;)
                    void 0 !== (f = d[m--]) && y(f, !1)
            }
            function y(t, e) {
                var n = t._component;
                n ? S(n) : (null != t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), !1 !== e && null != t.__preactattr_ || l(t), x(t))
            }
            function x(t) {
                for (t = t.lastChild; t;) {
                    var e = t.previousSibling;
                    y(t, !0), t = e
                }
            }
            function _(t, e, n) {
                var r;
                for (r in n)
                    e && null != e[r] || null == n[r] || d(t, r, n[r], n[r] = void 0, U);
                for (r in e)
                    "children" === r || "innerHTML" === r || r in n && e[r] === ("value" === r || "checked" === r ? t[r] : n[r]) || d(t, r, n[r], n[r] = e[r], U)
            }
            function w(t) {
                var e = t.constructor.name;
                (H[e] || (H[e] = [])).push(t)
            }
            function M(t, e, n) {
                var r,
                    a = H[t.name];
                if (t.prototype && t.prototype.render ? (r = new t(e, n), j.call(r, e, n)) : (r = new j(e, n), r.constructor = t, r.render = T), a)
                    for (var o = a.length; o--;)
                        if (a[o].constructor === t) {
                            r.__b = a[o].__b, a.splice(o, 1);
                            break
                        }
                return r
            }
            function T(t, e, n) {
                return this.constructor(t, n)
            }
            function O(t, e, n, r, a) {
                t.__x || (t.__x = !0, (t.__r = e.ref) && delete e.ref, (t.__k = e.key) && delete e.key, !t.base || a ? t.componentWillMount && t.componentWillMount() : t.componentWillReceiveProps && t.componentWillReceiveProps(e, r), r && r !== t.context && (t.__c || (t.__c = t.context), t.context = r), t.__p || (t.__p = t.props), t.props = e, t.__x = !1, 0 !== n && (1 !== n && !1 === A.syncComponentUpdates && t.base ? o(t) : D(t, 1, a)), t.__r && t.__r(t))
            }
            function D(t, e, n, a) {
                if (!t.__x) {
                    var o,
                        u,
                        i,
                        c = t.props,
                        s = t.state,
                        l = t.context,
                        d = t.__p || c,
                        p = t.__s || s,
                        h = t.__c || l,
                        g = t.base,
                        m = t.__b,
                        x = g || m,
                        _ = t._component,
                        w = !1;
                    if (g && (t.props = d, t.state = p, t.context = h, 2 !== e && t.shouldComponentUpdate && !1 === t.shouldComponentUpdate(c, s, l) ? w = !0 : t.componentWillUpdate && t.componentWillUpdate(c, s, l), t.props = c, t.state = s, t.context = l), t.__p = t.__s = t.__c = t.__b = null, t.__d = !1, !w) {
                        o = t.render(c, s, l), t.getChildContext && (l = r(r({}, l), t.getChildContext()));
                        var T,
                            k,
                            j = o && o.nodeName;
                        if ("function" == typeof j) {
                            var N = f(o);
                            u = _, u && u.constructor === j && N.key == u.__k ? O(u, N, 1, l, !1) : (T = u, t._component = u = M(j, N, l), u.__b = u.__b || m, u.__u = t, O(u, N, 0, l, !1), D(u, 1, n, !0)), k = u.base
                        } else
                            i = x, T = _, T && (i = t._component = null), (x || 1 === e) && (i && (i._component = null), k = v(i, o, l, n || !g, x && x.parentNode, !0));
                        if (x && k !== x && u !== _) {
                            var C = x.parentNode;
                            C && k !== C && (C.replaceChild(k, x), T || (x._component = null, y(x, !1)))
                        }
                        if (T && S(T), t.base = k, k && !a) {
                            for (var I = t, E = t; E = E.__u;)
                                (I = E).base = k;
                            k._component = I, k._componentConstructor = I.constructor
                        }
                    }
                    if (!g || n ? Y.unshift(t) : w || (b(), t.componentDidUpdate && t.componentDidUpdate(d, p, h), A.afterUpdate && A.afterUpdate(t)), null != t.__h)
                        for (; t.__h.length;)
                            t.__h.pop().call(t);
                    z || a || b()
                }
            }
            function k(t, e, n, r) {
                for (var a = t && t._component, o = a, u = t, i = a && t._componentConstructor === e.nodeName, c = i, s = f(e); a && !c && (a = a.__u);)
                    c = a.constructor === e.nodeName;
                return a && c && (!r || a._component) ? (O(a, s, 3, n, r), t = a.base) : (o && !i && (S(o), t = u = null), a = M(e.nodeName, s, n), t && !a.__b && (a.__b = t, u = null), O(a, s, 1, n, r), t = a.base, u && t !== u && (u._component = null, y(u, !1))), t
            }
            function S(t) {
                A.beforeUnmount && A.beforeUnmount(t);
                var e = t.base;
                t.__x = !0, t.componentWillUnmount && t.componentWillUnmount(), t.base = null;
                var n = t._component;
                n ? S(n) : e && (e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), t.__b = e, l(e), w(t), x(e)), t.__r && t.__r(null)
            }
            function j(t, e) {
                this.__d = !0, this.context = e, this.props = t, this.state = this.state || {}
            }
            function N(t, e, n) {
                return v(n, t, {}, !1, e, !1)
            }
            var A = {},
                C = [],
                I = [],
                E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
                F = [],
                Y = [],
                z = 0,
                U = !1,
                P = !1,
                H = {};
            r(j.prototype, {
                setState: function(t, e) {
                    var n = this.state;
                    this.__s || (this.__s = r({}, n)), r(n, "function" == typeof t ? t(n, this.props) : t), e && (this.__h = this.__h || []).push(e), o(this)
                },
                forceUpdate: function(t) {
                    t && (this.__h = this.__h || []).push(t), D(this, 2)
                },
                render: function() {}
            });
            var L = {
                h: n,
                createElement: n,
                cloneElement: a,
                Component: j,
                render: N,
                rerender: u,
                options: A
            };
            t.exports = L
        }()
    }, function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }, function(t, e, n) {
        var r = n(116),
            a = "object" == typeof self && self && self.Object === Object && self,
            o = r || a || Function("return this")();
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        var r = n(144);
        n.d(e, "b", function() {
            return r.a
        });
        var a = n(17);
        n.d(e, "a", function() {
            return a.a
        });
        var o = n(145);
        n.d(e, "c", function() {
            return o.a
        });
        var u = (n(394), n(395), n(147), n(149), n(396), n(399), n(400), n(153), n(401), n(402), n(403), n(404), n(154), n(146), n(405), n(67));
        n.d(e, "d", function() {
            return u.a
        });
        var i = n(151);
        n.d(e, "e", function() {
            return i.a
        });
        var c = (n(406), n(407), n(408), n(152));
        n.d(e, "h", function() {
            return c.a
        }), n.d(e, "f", function() {
            return c.b
        }), n.d(e, "g", function() {
            return c.c
        });
        n(155), n(148), n(409)
    }, function(t, e, n) {
        "use strict";
        n.d(e, "d", function() {
            return r
        }), n.d(e, "c", function() {
            return a
        }), n.d(e, "b", function() {
            return o
        }), n.d(e, "a", function() {
            return u
        }), n.d(e, "e", function() {
            return i
        });
        var r = 1e3,
            a = 6e4,
            o = 36e5,
            u = 864e5,
            i = 6048e5
    }, function(t, e, n) {
        var r,
            a;
        !function() {
            "use strict";
            function n() {
                for (var t = [], e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    if (r) {
                        var a = typeof r;
                        if ("string" === a || "number" === a)
                            t.push(r);
                        else if (Array.isArray(r))
                            t.push(n.apply(null, r));
                        else if ("object" === a)
                            for (var u in r)
                                o.call(r, u) && r[u] && t.push(u)
                    }
                }
                return t.join(" ")
            }
            var o = {}.hasOwnProperty;
            void 0 !== t && t.exports ? t.exports = n : (r = [], void 0 !== (a = function() {
                return n
            }.apply(e, r)) && (t.exports = a))
        }()
    }, function(t, e, n) {
        "use strict";
        var r = n(70);
        n.d(e, "a", function() {
            return r.e
        }), n.d(e, "f", function() {
            return r.g
        }), n.d(e, "d", function() {
            return r.f
        });
        var a = n(417);
        n.d(e, "e", function() {
            return a.a
        }), n.d(e, "c", function() {
            return a.b
        });
        var o = n(418);
        n.d(e, "b", function() {
            return o.a
        })
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getFullYear(),
                r = new Date(0);
            r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
            var u = o(r),
                i = new Date(0);
            i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
            var c = o(i);
            return e.getTime() >= u.getTime() ? n + 1 : e.getTime() >= c.getTime() ? n : n - 1
        }
        var a = n(0),
            o = n(10);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t, {
                weekStartsOn: 1
            })
        }
        var a = n(32);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setHours(0, 0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return o
        });
        var r = Array.prototype,
            a = r.map,
            o = r.slice
    }, function(t, e, n) {
        function r(t) {
            return null == t ? void 0 === t ? c : i : f && f in Object(t) ? o(t) : u(t)
        }
        var a = n(36),
            o = n(286),
            u = n(287),
            i = "[object Null]",
            c = "[object Undefined]",
            f = a ? a.toStringTag : void 0;
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return null != t && "object" == typeof t
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var n = o(t, e);
            return a(n) ? n : void 0
        }
        var a = n(300),
            o = n(303);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.toTime = e.monthLength = e.isLeap = e.percent = e.toInt = e.mountComponent = void 0;
        var r = n(2),
            a = function(t) {
                return new Promise(function(e, n) {
                    t.innerHTML = "", e(t)
                })
            },
            o = (e.mountComponent = function(t, e, n) {
                return a(document.querySelector(e)).then(function(e) {
                    return (0, r.render)((0, r.h)(t, n), e)
                })
            }, e.toInt = function(t) {
                return Math.floor(Number(t))
            }),
            u = (e.percent = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                    r = 100 * t / e,
                    a = Number(r.toFixed(n)),
                    u = o(r);
                return u === a ? u : a
            }, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]),
            i = e.isLeap = function(t) {
                return 1 === new Date(t, 1, 29).getMonth()
            };
        e.monthLength = function(t, e) {
            return 1 === t && i(e) ? u[t] + 1 : u[t]
        }, e.toTime = function(t) {
            return Number(new Date(t).getTime()) || 0
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setDate(n.getDate() + r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t).getTime(),
                r = Number(e);
            return new Date(n + r)
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = new Date(0);
            return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), o(n)
        }
        var a = n(9),
            o = n(10);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = n.getTime(),
                o = a(e),
                u = o.getTime();
            return r < u ? -1 : r > u ? 1 : 0
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return "symbol" == typeof t || o(t) && a(t) == u
        }
        var a = n(13),
            o = n(14),
            u = "[object Symbol]";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return "function" == typeof t ? t : null == t ? u : "object" == typeof t ? i(t) ? o(t[0], t[1]) : a(t) : c(t)
        }
        var a = n(288),
            o = n(348),
            u = n(66),
            i = n(3),
            c = n(356);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return null == t ? "" : a(t)
        }
        var a = n(133);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return null === t ? NaN : +t
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.domain;
            return t.ticks = function(t) {
                var n = e();
                return o.h(n[0], n[n.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function(t, n) {
                return c.a(e(), t, n)
            }, t.nice = function(n) {
                null == n && (n = 10);
                var r,
                    a = e(),
                    u = 0,
                    i = a.length - 1,
                    c = a[u],
                    f = a[i];
                return f < c && (r = c, c = f, f = r, r = u, u = i, i = r), r = o.f(c, f, n), r > 0 ? (c = Math.floor(c / r) * r, f = Math.ceil(f / r) * r, r = o.f(c, f, n)) : r < 0 && (c = Math.ceil(c * r) / r, f = Math.floor(f * r) / r, r = o.f(c, f, n)), r > 0 ? (a[u] = Math.floor(c / r) * r, a[i] = Math.ceil(f / r) * r, e(a)) : r < 0 && (a[u] = Math.ceil(c * r) / r, a[i] = Math.floor(f * r) / r, e(a)), t
            }, t
        }
        function a() {
            var t = i.b(i.c, u.c);
            return t.copy = function() {
                return i.a(t, a())
            }, r(t)
        }
        e.b = r, e.a = a;
        var o = n(5),
            u = n(28),
            i = n(46),
            c = n(429)
    }, function(t, e, n) {
        "use strict";
        var r = n(69);
        n.d(e, "a", function() {
            return r.a
        });
        var a = (n(161), n(72), n(159), n(162), n(45));
        n.d(e, "c", function() {
            return a.a
        });
        var o = (n(163), n(419));
        n.d(e, "d", function() {
            return o.a
        });
        var u = (n(164), n(420), n(423), n(158), n(424), n(425), n(426), n(427));
        n.d(e, "b", function() {
            return u.a
        });
        n(428)
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            return function(n) {
                return t + n * e
            }
        }
        function a(t, e, n) {
            return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
                return Math.pow(t + r * e, n)
            }
        }
        function o(t, e) {
            var n = e - t;
            return n ? r(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : c.a(isNaN(t) ? e : t)
        }
        function u(t) {
            return 1 == (t = +t) ? i : function(e, n) {
                return n - e ? a(e, n, t) : c.a(isNaN(e) ? n : e)
            }
        }
        function i(t, e) {
            var n = e - t;
            return n ? r(t, n) : c.a(isNaN(t) ? e : t)
        }
        e.c = o, e.b = u, e.a = i;
        var c = n(160)
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return t.match(/.{6}/g).map(function(t) {
                return "#" + t
            })
        }
    }, function(t, e) {
        t.exports = {
            viz: "styles__viz___1t7Zs",
            heading: "styles__heading___3gz-G",
            title: "styles__title___XHc_7",
            subtitle: "styles__subtitle___3yD3t",
            download: "styles__download___3EPBl"
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n = e ? Number(e.weekStartsOn) || 0 : 0,
                r = a(t),
                o = r.getDay(),
                u = (o < n ? 7 : 0) + o - n;
            return r.setDate(r.getDate() - u), r.setHours(0, 0, 0, 0), r
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                i = n.getTime() - n.getTimezoneOffset() * o,
                c = r.getTime() - r.getTimezoneOffset() * o;
            return Math.round((i - c) / u)
        }
        var a = n(11),
            o = 6e4,
            u = 864e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e),
                u = n.getMonth() + r,
                i = new Date(0);
            i.setFullYear(n.getFullYear(), u, 1), i.setHours(0, 0, 0, 0);
            var c = o(i);
            return n.setMonth(u, Math.min(c, n.getDate())), n
        }
        var a = n(0),
            o = n(49);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() - r.getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        var r = n(4),
            a = r.Symbol;
        t.exports = a
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        var a = n(290),
            o = n(291),
            u = n(292),
            i = n(293),
            c = n(294);
        r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = u, r.prototype.has = i, r.prototype.set = c, t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            for (var n = t.length; n--;)
                if (a(t[n][0], e))
                    return n;
            return -1
        }
        var a = n(59);
        t.exports = r
    }, function(t, e, n) {
        var r = n(15),
            a = r(Object, "create");
        t.exports = a
    }, function(t, e, n) {
        function r(t, e) {
            var n = t.__data__;
            return a(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
        var a = n(312);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return null != t && o(t.length) && !a(t)
        }
        var a = n(119),
            o = n(64);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if ("string" == typeof t || a(t))
                return t;
            var e = t + "";
            return "0" == e && 1 / t == -o ? "-0" : e
        }
        var a = n(23),
            o = 1 / 0;
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return r.test(t)
        }
        var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], e.FACETS = {
            Features: "Features",
            Users: "Users"
        }, e.USER_SCOPES = {
            all: "All users",
            local: "Local only"
        }, e.GRANULARITIES = {
            Daily: "Daily",
            Weekly: "Weekly",
            Monthly: "Monthly"
        }, e.COMPARE_MAP_DEFAULTS = {
            iframe_base_url: "https://osm-analytics-ui.vizzuality.com/",
            polygon: "tvv%40y%7D~%60%40cm%40wxBct%40%7BsAieAqfA_s%40ej%40st%40%7D%5Co%5CcQwkAyj%40qbAk%7CAxCkcBgnCr%40azFfC%7BrBlm%40ae%40%60fCgbBic%40ygCt%60Bg%7BA~mA%7Bi%40lcCflDt%60BrlChcA%60gB%60_%40fsDvy%40bjG~mAhR%7Cl%40bpPxyB",
            default_start_year: "2016",
            default_end_year: "now",
            default_feature_type: "buildings"
        }, e.VALID_FEATURE_TYPES = ["buildings", "highways", "waterways"], e.ACTIVITY_HELP_URL = "https://github.com/GFDRR/osm-analytics-charts/blob/master/README.md#aggregation-method-for-contributions-on-different-features"
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return t = +t, e -= t, function(n) {
                return t + e * n
            }
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            return (e -= t = +t) ? function(n) {
                return (n - t) / e
            } : p.a(e)
        }
        function a(t) {
            return function(e, n) {
                var r = t(e = +e, n = +n);
                return function(t) {
                    return t <= e ? 0 : t >= n ? 1 : r(t)
                }
            }
        }
        function o(t) {
            return function(e, n) {
                var r = t(e = +e, n = +n);
                return function(t) {
                    return t <= 0 ? e : t >= 1 ? n : r(t)
                }
            }
        }
        function u(t, e, n, r) {
            var a = t[0],
                o = t[1],
                u = e[0],
                i = e[1];
            return o < a ? (a = n(o, a), u = r(i, u)) : (a = n(a, o), u = r(u, i)), function(t) {
                return u(a(t))
            }
        }
        function i(t, e, n, r) {
            var a = Math.min(t.length, e.length) - 1,
                o = new Array(a),
                u = new Array(a),
                i = -1;
            for (t[a] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++i < a;)
                o[i] = n(t[i], t[i + 1]), u[i] = r(e[i], e[i + 1]);
            return function(e) {
                var n = s.b(t, e, 1, a) - 1;
                return u[n](o[n](e))
            }
        }
        function c(t, e) {
            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }
        function f(t, e) {
            function n() {
                return f = Math.min(v.length, g.length) > 2 ? i : u, s = p = null, c
            }
            function c(e) {
                return (s || (s = f(v, g, y ? a(t) : t, m)))(+e)
            }
            var f,
                s,
                p,
                v = b,
                g = b,
                m = l.a,
                y = !1;
            return c.invert = function(t) {
                return (p || (p = f(g, v, r, y ? o(e) : e)))(+t)
            }, c.domain = function(t) {
                return arguments.length ? (v = d.a.call(t, h.a), n()) : v.slice()
            }, c.range = function(t) {
                return arguments.length ? (g = d.b.call(t), n()) : g.slice()
            }, c.rangeRound = function(t) {
                return g = d.b.call(t), m = l.d, n()
            }, c.clamp = function(t) {
                return arguments.length ? (y = !!t, n()) : y
            }, c.interpolate = function(t) {
                return arguments.length ? (m = t, n()) : m
            }, n()
        }
        e.c = r, e.a = c, e.b = f;
        var s = n(5),
            l = n(28),
            d = n(12),
            p = n(73),
            h = n(165),
            b = [0, 1]
    }, function(t, e, n) {
        "use strict";
        var r = n(74);
        e.a = function(t) {
            return t = r.a(Math.abs(t)), t ? t[1] : NaN
        }
    }, function(t, e) {
        function n(t) {
            return t instanceof Date
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getFullYear(),
                r = e.getMonth(),
                o = new Date(0);
            return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, 7 * n)
        }
        var a = n(19);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = n.getTime(),
                o = a(e),
                u = o.getTime();
            return r > u ? -1 : r < u ? 1 : 0
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                i = u(n, r),
                c = Math.abs(o(n, r));
            return n.setMonth(n.getMonth() - i * c), i * (c - (u(n, r) === -i))
        }
        var a = n(0),
            o = n(88),
            u = n(22);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t, e) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var a = n(35);
        t.exports = r
    }, function(t, e, n) {
        var r = n(193),
            a = n(194);
        t.exports = {
            distanceInWords: r(),
            format: a()
        }
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setHours(23, 59, 59, 999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = o(e).getTime() - u(e).getTime();
            return Math.round(n / i) + 1
        }
        var a = n(0),
            o = n(10),
            u = n(21),
            i = 6048e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = a(t, n),
                o = a(e, n);
            return r.getTime() === o.getTime()
        }
        var a = n(32);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            for (var r = -1, o = t.length; ++r < o;) {
                var u = t[r],
                    i = e(u);
                if (null != i && (void 0 === c ? i === i && !a(i) : n(i, c)))
                    var c = i,
                        f = u
            }
            return f
        }
        var a = n(23);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return t === e || t !== t && e !== e
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(15),
            a = n(4),
            o = r(a, "Map");
        t.exports = o
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        var a = n(304),
            o = n(311),
            u = n(313),
            i = n(314),
            c = n(315);
        r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = u, r.prototype.has = i, r.prototype.set = c, t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return u(t) ? a(t) : o(t)
        }
        var a = n(333),
            o = n(338),
            u = n(41);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return !!(e = null == e ? r : e) && ("number" == typeof t || a.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        var r = 9007199254740991,
            a = /^(?:0|[1-9]\d*)$/;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
        }
        var r = 9007199254740991;
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            if (a(t))
                return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || (i.test(t) || !u.test(t) || null != e && t in Object(e))
        }
        var a = n(3),
            o = n(23),
            u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            i = /^\w*$/;
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return t
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        var r = n(26);
        e.a = function(t, e, n) {
            if (null == n && (n = r.a), a = t.length) {
                if ((e = +e) <= 0 || a < 2)
                    return +n(t[0], 0, t);
                if (e >= 1)
                    return +n(t[a - 1], a - 1, t);
                var a,
                    o = (a - 1) * e,
                    u = Math.floor(o),
                    i = +n(t[u], u, t);
                return i + (+n(t[u + 1], u + 1, t) - i) * (o - u)
            }
        }
    }, function(t, e, n) {
        "use strict";
        function r() {}
        function a(t, e) {
            var n = new r;
            if (t instanceof r)
                t.each(function(t, e) {
                    n.set(e, t)
                });
            else if (Array.isArray(t)) {
                var a,
                    o = -1,
                    u = t.length;
                if (null == e)
                    for (; ++o < u;)
                        n.set(o, t[o]);
                else
                    for (; ++o < u;)
                        n.set(e(a = t[o], o, t), a)
            } else if (t)
                for (var i in t)
                    n.set(i, t[i]);
            return n
        }
        n.d(e, "b", function() {
            return o
        });
        var o = "$";
        r.prototype = a.prototype = {
            constructor: r,
            has: function(t) {
                return o + t in this
            },
            get: function(t) {
                return this[o + t]
            },
            set: function(t, e) {
                return this[o + t] = e, this
            },
            remove: function(t) {
                var e = o + t;
                return e in this && delete this[e]
            },
            clear: function() {
                for (var t in this)
                    t[0] === o && delete this[t]
            },
            keys: function() {
                var t = [];
                for (var e in this)
                    e[0] === o && t.push(e.slice(1));
                return t
            },
            values: function() {
                var t = [];
                for (var e in this)
                    e[0] === o && t.push(this[e]);
                return t
            },
            entries: function() {
                var t = [];
                for (var e in this)
                    e[0] === o && t.push({
                        key: e.slice(1),
                        value: this[e]
                    });
                return t
            },
            size: function() {
                var t = 0;
                for (var e in this)
                    e[0] === o && ++t;
                return t
            },
            empty: function() {
                for (var t in this)
                    if (t[0] === o)
                        return !1;
                return !0
            },
            each: function(t) {
                for (var e in this)
                    e[0] === o && t(this[e], e.slice(1), this)
            }
        }, e.a = a
    }, function(t, e, n) {
        "use strict";
        var r = n(8),
            a = n(158),
            o = n(161),
            u = n(162),
            i = n(45),
            c = n(163),
            f = n(164),
            s = n(160);
        e.a = function(t, e) {
            var n,
                l = typeof e;
            return null == e || "boolean" === l ? s.a(e) : ("number" === l ? i.a : "string" === l ? (n = r.a(e)) ? (e = n, a.a) : f.a : e instanceof r.a ? a.a : e instanceof Date ? u.a : Array.isArray(e) ? o.a : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? c.a : i.a)(t, e)
        }
    }, function(t, e, n) {
        "use strict";
        function r() {}
        function a(t) {
            var e;
            return t = (t + "").trim().toLowerCase(), (e = _.exec(t)) ? (e = parseInt(e[1], 16), new f(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1)) : (e = w.exec(t)) ? o(parseInt(e[1], 16)) : (e = M.exec(t)) ? new f(e[1], e[2], e[3], 1) : (e = T.exec(t)) ? new f(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = O.exec(t)) ? u(e[1], e[2], e[3], e[4]) : (e = D.exec(t)) ? u(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = k.exec(t)) ? s(e[1], e[2] / 100, e[3] / 100, 1) : (e = S.exec(t)) ? s(e[1], e[2] / 100, e[3] / 100, e[4]) : j.hasOwnProperty(t) ? o(j[t]) : "transparent" === t ? new f(NaN, NaN, NaN, 0) : null
        }
        function o(t) {
            return new f(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }
        function u(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN), new f(t, e, n, r)
        }
        function i(t) {
            return t instanceof r || (t = a(t)), t ? (t = t.rgb(), new f(t.r, t.g, t.b, t.opacity)) : new f
        }
        function c(t, e, n, r) {
            return 1 === arguments.length ? i(t) : new f(t, e, n, null == r ? 1 : r)
        }
        function f(t, e, n, r) {
            this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
        }
        function s(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new p(t, e, n, r)
        }
        function l(t) {
            if (t instanceof p)
                return new p(t.h, t.s, t.l, t.opacity);
            if (t instanceof r || (t = a(t)), !t)
                return new p;
            if (t instanceof p)
                return t;
            t = t.rgb();
            var e = t.r / 255,
                n = t.g / 255,
                o = t.b / 255,
                u = Math.min(e, n, o),
                i = Math.max(e, n, o),
                c = NaN,
                f = i - u,
                s = (i + u) / 2;
            return f ? (c = e === i ? (n - o) / f + 6 * (n < o) : n === i ? (o - e) / f + 2 : (e - n) / f + 4, f /= s < .5 ? i + u : 2 - i - u, c *= 60) : f = s > 0 && s < 1 ? 0 : c, new p(c, f, s, t.opacity)
        }
        function d(t, e, n, r) {
            return 1 === arguments.length ? l(t) : new p(t, e, n, null == r ? 1 : r)
        }
        function p(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }
        function h(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }
        e.a = r, n.d(e, "d", function() {
            return v
        }), n.d(e, "c", function() {
            return g
        }), e.e = a, e.h = i, e.g = c, e.b = f, e.f = d;
        var b = n(71),
            v = .7,
            g = 1 / v,
            m = "\\s*([+-]?\\d+)\\s*",
            y = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            x = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            _ = /^#([0-9a-f]{3})$/,
            w = /^#([0-9a-f]{6})$/,
            M = new RegExp("^rgb\\(" + [m, m, m] + "\\)$"),
            T = new RegExp("^rgb\\(" + [x, x, x] + "\\)$"),
            O = new RegExp("^rgba\\(" + [m, m, m, y] + "\\)$"),
            D = new RegExp("^rgba\\(" + [x, x, x, y] + "\\)$"),
            k = new RegExp("^hsl\\(" + [y, x, x] + "\\)$"),
            S = new RegExp("^hsla\\(" + [y, x, x, y] + "\\)$"),
            j = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };
        b.a(r, a, {
            displayable: function() {
                return this.rgb().displayable()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }), b.a(f, c, b.b(r, {
            brighter: function(t) {
                return t = null == t ? g : Math.pow(g, t), new f(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? v : Math.pow(v, t), new f(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            toString: function() {
                var t = this.opacity;
                return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), b.a(p, d, b.b(r, {
            brighter: function(t) {
                return t = null == t ? g : Math.pow(g, t), new p(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? v : Math.pow(v, t), new p(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    n = this.l,
                    r = n + (n < .5 ? n : 1 - n) * e,
                    a = 2 * n - r;
                return new f(h(t >= 240 ? t - 240 : t + 120, a, r), h(t, a, r), h(t < 120 ? t + 240 : t - 120, a, r), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }))
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e)
                n[r] = e[r];
            return n
        }
        e.b = r, e.a = function(t, e, n) {
            t.prototype = e.prototype = n, n.constructor = t
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e, n, r, a) {
            var o = t * t,
                u = o * t;
            return ((1 - 3 * t + 3 * o - u) * e + (4 - 6 * o + 3 * u) * n + (1 + 3 * t + 3 * o - 3 * u) * r + u * a) / 6
        }
        e.a = r, e.b = function(t) {
            var e = t.length - 1;
            return function(n) {
                var a = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                    o = t[a],
                    u = t[a + 1],
                    i = a > 0 ? t[a - 1] : 2 * o - u,
                    c = a < e - 1 ? t[a + 2] : 2 * u - o;
                return r((n - a / e) * e, i, o, u, c)
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return function() {
                return t
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
                return null;
            var n,
                r = t.slice(0, n);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
        }
    }, function(t, e, n) {
        "use strict";
        var r = (n(1), n(444));
        n.d(e, "c", function() {
            return r.a
        }), n.d(e, "m", function() {
            return r.a
        });
        var a = n(445);
        n.d(e, "g", function() {
            return a.a
        }), n.d(e, "q", function() {
            return a.a
        });
        var o = n(446);
        n.d(e, "d", function() {
            return o.a
        });
        var u = n(447);
        n.d(e, "b", function() {
            return u.a
        });
        var i = n(448);
        n.d(e, "a", function() {
            return i.a
        });
        var c = n(449);
        n.d(e, "i", function() {
            return c.b
        }), n.d(e, "h", function() {
            return c.b
        }), n.d(e, "e", function() {
            return c.a
        });
        var f = n(450);
        n.d(e, "f", function() {
            return f.a
        });
        var s = n(451);
        n.d(e, "j", function() {
            return s.a
        });
        var l = n(452);
        n.d(e, "n", function() {
            return l.a
        });
        var d = n(453);
        n.d(e, "l", function() {
            return d.a
        });
        var p = n(454);
        n.d(e, "k", function() {
            return p.a
        });
        var h = n(455);
        n.d(e, "s", function() {
            return h.b
        }), n.d(e, "r", function() {
            return h.b
        }), n.d(e, "o", function() {
            return h.a
        });
        var b = n(456);
        n.d(e, "p", function() {
            return b.a
        });
        var v = n(457);
        n.d(e, "t", function() {
            return v.a
        })
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return u
        }), n.d(e, "c", function() {
            return i
        });
        var r,
            a,
            o,
            u,
            i,
            c = n(174);
        !function(t) {
            r = c.a(t), a = r.format, o = r.parse, u = r.utcFormat, i = r.utcParse
        }({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        })
    }, function(t, e) {
        t.exports = {
            histogram: "histogram__histogram___3oDw_",
            "histogram-month": "histogram__histogram-month___3e0wn",
            "histogram-month-label": "histogram__histogram-month-label___HtggJ",
            bars: "histogram__bars___MQ7ny",
            bar: "histogram__bar___TCCFV",
            label: "histogram__label___1f56A",
            labelHidden: "histogram__labelHidden___3TD-J",
            labelBorder: "histogram__labelBorder___2T7lU",
            year: "histogram__year___-udcm",
            monthHidden: "histogram__monthHidden___2GErk",
            yearVisible: "histogram__yearVisible___OT8nU",
            last: "histogram__last___1nNqc",
            labelBorderLast: "histogram__labelBorderLast___3prvS",
            month: "histogram__month___26fcM"
        }
    }, function(t, e) {
        t.exports = {
            blue: "#1477c9",
            white: "#fff",
            black: "#555",
            lightGrey: "#b7b7b7",
            thinGrey: "rgba(0, 0, 0, 0.1)",
            fontPrimary: "'Bariol', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            behind: "-100",
            underground: "-10",
            ground: "0",
            foreground: "10",
            top: "100",
            topOver: "101",
            percentWidth: "5px",
            monthMargin: "2px"
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2),
            a = n(180),
            o = n(31),
            u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o),
            i = function(t) {
                var e = t.data,
                    n = [];
                if (void 0 !== e.min_date) {
                    var o = [e.min_date, e.max_date].map(function(t) {
                        return parseInt(1e3 * t)
                    }).map(function(t) {
                        return (0, a.parse)(t)
                    }).map(function(t) {
                        return (0, a.addDays)(t, 1)
                    }).map(function(t) {
                        return (0, a.format)(t, "MMM Do, YYYY")
                    }).join(" to ");
                    n.push(o)
                }
                return void 0 !== e.country_name && n.push("Area: " + e.country_name), n.length ? (0, r.h)("div", {
                    class: u.default.subtitle
                }, n.join(". ")) : null
            };
        e.default = i
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, n * o)
        }
        var a = n(20),
            o = 36e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return o(t, a(t) + n)
        }
        var a = n(9),
            o = n(82);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e),
                i = u(n, o(n)),
                c = new Date(0);
            return c.setFullYear(r, 0, 4), c.setHours(0, 0, 0, 0), n = o(c), n.setDate(n.getDate() + i), n
        }
        var a = n(0),
            o = n(21),
            u = n(33);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, n * o)
        }
        var a = n(20),
            o = 6e4;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, 3 * n)
        }
        var a = n(34);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, 1e3 * n)
        }
        var a = n(20);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, 12 * n)
        }
        var a = n(34);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return a(t) - a(e)
        }
        var a = n(9);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return Math.floor(e.getMonth() / 3) + 1
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getFullYear() - r.getFullYear()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                i = u(n, r),
                c = Math.abs(o(n, r));
            return n.setDate(n.getDate() - i * c), i * (c - (u(n, r) === -i))
        }
        var a = n(0),
            o = n(33),
            u = n(22);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(81);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = n || {},
                p = a(t, e),
                h = r.locale,
                b = c.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (b = h.distanceInWords.localize);
            var v,
                g,
                m = {
                    addSuffix: Boolean(r.addSuffix),
                    comparison: p
                };
            p > 0 ? (v = o(t), g = o(e)) : (v = o(e), g = o(t));
            var y,
                x = u(g, v),
                _ = g.getTimezoneOffset() - v.getTimezoneOffset(),
                w = Math.round(x / 60) - _;
            if (w < 2)
                return r.includeSeconds ? x < 5 ? b("lessThanXSeconds", 5, m) : x < 10 ? b("lessThanXSeconds", 10, m) : x < 20 ? b("lessThanXSeconds", 20, m) : x < 40 ? b("halfAMinute", null, m) : x < 60 ? b("lessThanXMinutes", 1, m) : b("xMinutes", 1, m) : 0 === w ? b("lessThanXMinutes", 1, m) : b("xMinutes", w, m);
            if (w < 45)
                return b("xMinutes", w, m);
            if (w < 90)
                return b("aboutXHours", 1, m);
            if (w < f) {
                return b("aboutXHours", Math.round(w / 60), m)
            }
            if (w < s)
                return b("xDays", 1, m);
            if (w < l) {
                return b("xDays", Math.round(w / f), m)
            }
            if (w < d)
                return y = Math.round(w / l), b("aboutXMonths", y, m);
            if ((y = i(g, v)) < 12) {
                return b("xMonths", Math.round(w / l), m)
            }
            var M = y % 12,
                T = Math.floor(y / 12);
            return M < 3 ? b("aboutXYears", T, m) : M < 9 ? b("overXYears", T, m) : b("almostXYears", T + 1, m)
        }
        var a = n(51),
            o = n(0),
            u = n(53),
            i = n(52),
            c = n(54),
            f = 1440,
            s = 2520,
            l = 43200,
            d = 86400;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = e ? Number(e.weekStartsOn) || 0 : 0,
                r = a(t),
                o = r.getDay(),
                u = 6 + (o < n ? -7 : 0) - (o - n);
            return r.setDate(r.getDate() + u), r.setHours(23, 59, 59, 999), r
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getMonth();
            return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return u(e, o(e)) + 1
        }
        var a = n(0),
            o = n(97),
            u = n(33);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = new Date(0);
            return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (a(t))
                return !isNaN(t);
            throw new TypeError(toString.call(t) + " is not an instance of Date")
        }
        var a = n(48);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getFullYear();
            return n % 400 == 0 || n % 4 == 0 && n % 100 != 0
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getDay();
            return 0 === n && (n = 7), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(102);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setMinutes(0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return a(t, e, {
                weekStartsOn: 1
            })
        }
        var a = n(57);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(21);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(106);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setSeconds(0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(109);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getMonth(),
                r = n - n % 3;
            return e.setMonth(r, 1), e.setHours(0, 0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(111);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setMilliseconds(0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getFullYear() === r.getFullYear()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = e ? Number(e.weekStartsOn) || 0 : 0,
                r = a(t),
                o = r.getDay(),
                u = 6 + (o < n ? -7 : 0) - (o - n);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + u), r
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e),
                u = n.getFullYear(),
                i = n.getDate(),
                c = new Date(0);
            c.setFullYear(u, r, 15), c.setHours(0, 0, 0, 0);
            var f = o(c);
            return n.setMonth(r, Math.min(i, f)), n
        }
        var a = n(0),
            o = n(49);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!t)
                return e;
            var n = t.split("-");
            return n.splice(1, 0, e), n.join("-")
        }
        function a(t, e) {
            for (var n = {}, a = 0; a < e.length; a += 1)
                e[a] && (n[r(t, St[a])] = e[a]);
            return n
        }
        function o(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            var o = n[0],
                u = n[1],
                i = void 0 === u ? o : u,
                c = n[2],
                f = void 0 === c ? o : c,
                s = n[3];
            return a(t, [o, i, f, void 0 === s ? i : s])
        }
        function u(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }
        function i(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1em",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "perfectFourth";
            if ("number" != typeof t)
                throw new Error("Please provide a number of steps to the modularScale helper.");
            if ("string" == typeof n && !Ct[n])
                throw new Error("Please pass a number or one of the predefined scales to the modularScale helper as the ratio.");
            var r = "string" == typeof e ? u(e) : e,
                a = "string" == typeof n ? Ct[n] : n;
            if ("string" == typeof r)
                throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "' + e + '"');
            return r * Math.pow(a, t) + "em"
        }
        function c() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "&";
            return Ft({}, t + "::after", {
                clear: "both",
                content: '""',
                display: "table"
            })
        }
        function f() {
            return {
                display: "inline-block",
                "max-width": arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "100%",
                overflow: "hidden",
                "text-overflow": "ellipsis",
                "white-space": "nowrap",
                "word-wrap": "normal"
            }
        }
        function s(t, e) {
            return e.map(function(e) {
                return 'url("' + t + "." + e + '")'
            }).join(", ")
        }
        function l(t) {
            return t.map(function(t) {
                return 'local("' + t + '")'
            }).join(", ")
        }
        function d(t, e, n) {
            var r = [];
            return e && r.push(l(e)), t && r.push(s(t, n)), r.join(", ")
        }
        function p(t) {
            var e = t.fontFamily,
                n = t.fontFilePath,
                r = t.fontStretch,
                a = t.fontStyle,
                o = t.fontVariant,
                u = t.fontWeight,
                i = t.fileFormats,
                c = void 0 === i ? ["eot", "woff2", "woff", "ttf", "svg"] : i,
                f = t.localFonts,
                s = t.unicodeRange;
            if (!e)
                throw new Error("fontFace expects a name of a font-family.");
            if (!n && !f)
                throw new Error("fontFace expects either the path to the font file(s) or a name of a local copy.");
            if (f && !Array.isArray(f))
                throw new Error("fontFace expects localFonts to be an array.");
            if (!Array.isArray(c))
                throw new Error("fontFace expects fileFormats to be an array.");
            var l = {
                "@font-face": {
                    "font-family": e,
                    src: d(n, f, c),
                    "unicode-range": s,
                    "font-stretch": r,
                    "font-style": a,
                    "font-variant": o,
                    "font-weight": u
                }
            };
            return JSON.parse(JSON.stringify(l))
        }
        function h() {
            return {
                "text-indent": "101%",
                overflow: "hidden",
                "white-space": "nowrap"
            }
        }
        function b() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.3;
            return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + t + "),\n    only screen and (min--moz-device-pixel-ratio: " + t + "),\n    only screen and (-o-min-device-pixel-ratio: " + t + "/1),\n    only screen and (min-resolution: " + Math.round(96 * t) + "dpi),\n    only screen and (min-resolution: " + t + "dppx)\n  "
        }
        function v(t, e) {
            var n = Yt({}, t);
            return Object.keys(e).forEach(function(t) {
                n[t] ? n[t] = Yt({}, n[t], e[t]) : n[t] = Yt({}, e[t])
            }), n
        }
        function g(t) {
            return t ? Ut : v(Ut, zt)
        }
        function m(t) {
            var e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
            return e = {}, Ft(e, n + "::-webkit-input-placeholder", Yt({}, t)), Ft(e, n + ":-moz-placeholder", Yt({}, t)), Ft(e, n + "::-moz-placeholder", Yt({}, t)), Ft(e, n + ":-ms-input-placeholder", Yt({}, t)), e
        }
        function y(t) {
            return t[0].split(" ")[0]
        }
        function x(t) {
            for (var e = "", n = 0; n < t.length; n += 1)
                e += t[n], 3 === n && (arguments.length <= n + 1 ? void 0 : arguments[n + 1]) && ((arguments.length <= 1 ? void 0 : arguments[1]) || (arguments.length <= 2 ? void 0 : arguments[2]) || (arguments.length <= 3 ? void 0 : arguments[3])) ? (e = e.slice(0, -1), e += ", " + (arguments.length <= n + 1 ? void 0 : arguments[n + 1])) : 3 !== n || arguments.length <= n + 1 || !arguments[n + 1] || (arguments.length <= 1 ? void 0 : arguments[1]) || (arguments.length <= 2 ? void 0 : arguments[2]) || (arguments.length <= 3 ? void 0 : arguments[3]) ? (arguments.length <= n + 1 ? void 0 : arguments[n + 1]) && (e += (arguments.length <= n + 1 ? void 0 : arguments[n + 1]) + " ") : e += "" + (arguments.length <= n + 1 ? void 0 : arguments[n + 1]);
            return e.trim()
        }
        function _(t) {
            var e = t.colorStops,
                n = t.extent,
                r = t.fallback,
                a = t.position,
                o = t.shape;
            if (!e || e.length < 2)
                throw new Error("radialGradient requries at least 2 color-stops to properly render.");
            return {
                "background-color": r || y(e),
                "background-image": x(Pt, a, o, n, e.join(", "))
            }
        }
        function w(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "png",
                r = arguments[3],
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "_2x";
            if (!t)
                throw new Error("Please supply a filename to retinaImage() as the first argument.");
            var o = n.replace(/^\./, ""),
                u = r ? r + "." + o : "" + t + a + "." + o;
            return Ft({
                backgroundImage: "url(" + t + "." + o + ")"
            }, b(), {
                backgroundImage: "url(" + u + ")",
                backgroundSize: e
            })
        }
        function M(t) {
            var e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e = {}, Ft(e, n + "::-moz-selection", Yt({}, t)), Ft(e, n + "::selection", Yt({}, t)), e
        }
        function T(t) {
            return Ht[t]
        }
        function O(t) {
            var e = t.pointingDirection,
                n = t.height,
                r = t.width,
                a = t.foregroundColor,
                o = t.backgroundColor,
                u = void 0 === o ? "transparent" : o,
                i = parseFloat(n),
                c = parseFloat(r);
            if (isNaN(i) || isNaN(c))
                throw new Error("Passed an invalid value to `height` or `width`. Please provide a pixel based unit");
            return Ft({
                "border-color": u,
                width: "0",
                height: "0",
                "border-width": Lt(e, i, c),
                "border-style": "solid"
            }, "border-" + Wt[e] + "-color", a + " !important")
        }
        function D() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "break-word";
            return {
                "overflow-wrap": t,
                "word-wrap": t,
                "word-break": "break-word" === t ? "break-all" : t
            }
        }
        function k(t) {
            return Math.round(255 * t)
        }
        function S(t, e, n) {
            return k(t) + "," + k(e) + "," + k(n)
        }
        function j(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : S;
            if (0 === e)
                return r(n, n, n);
            var a = t % 360 / 60,
                o = (1 - Math.abs(2 * n - 1)) * e,
                u = o * (1 - Math.abs(a % 2 - 1)),
                i = 0,
                c = 0,
                f = 0;
            a >= 0 && a < 1 ? (i = o, c = u) : a >= 1 && a < 2 ? (i = u, c = o) : a >= 2 && a < 3 ? (c = o, f = u) : a >= 3 && a < 4 ? (c = u, f = o) : a >= 4 && a < 5 ? (i = u, f = o) : a >= 5 && a < 6 && (i = o, f = u);
            var s = n - o / 2;
            return r(i + s, c + s, f + s)
        }
        function N(t) {
            if ("string" != typeof t)
                return t;
            var e = t.toLowerCase();
            return Rt[e] ? "#" + Rt[e] : t
        }
        function A(t) {
            if ("string" != typeof t)
                throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");
            var e = N(t);
            if (e.match($t))
                return {
                    red: parseInt("" + e[1] + e[2], 16),
                    green: parseInt("" + e[3] + e[4], 16),
                    blue: parseInt("" + e[5] + e[6], 16)
                };
            if (e.match(Bt))
                return {
                    red: parseInt("" + e[1] + e[1], 16),
                    green: parseInt("" + e[2] + e[2], 16),
                    blue: parseInt("" + e[3] + e[3], 16)
                };
            var n = Xt.exec(e);
            if (n)
                return {
                    red: parseInt("" + n[1], 10),
                    green: parseInt("" + n[2], 10),
                    blue: parseInt("" + n[3], 10)
                };
            var r = qt.exec(e);
            if (r)
                return {
                    red: parseInt("" + r[1], 10),
                    green: parseInt("" + r[2], 10),
                    blue: parseInt("" + r[3], 10),
                    alpha: parseFloat("" + r[4], 10)
                };
            var a = Gt.exec(e);
            if (a) {
                var o = parseInt("" + a[1], 10),
                    u = parseInt("" + a[2], 10) / 100,
                    i = parseInt("" + a[3], 10) / 100,
                    c = "rgb(" + j(o, u, i) + ")",
                    f = Xt.exec(c);
                return {
                    red: parseInt("" + f[1], 10),
                    green: parseInt("" + f[2], 10),
                    blue: parseInt("" + f[3], 10)
                }
            }
            var s = Vt.exec(e);
            if (s) {
                var l = parseInt("" + s[1], 10),
                    d = parseInt("" + s[2], 10) / 100,
                    p = parseInt("" + s[3], 10) / 100,
                    h = "rgb(" + j(l, d, p) + ")",
                    b = Xt.exec(h);
                return {
                    red: parseInt("" + b[1], 10),
                    green: parseInt("" + b[2], 10),
                    blue: parseInt("" + b[3], 10),
                    alpha: parseFloat("" + s[4], 10)
                }
            }
            throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")
        }
        function C(t) {
            var e = t.red / 255,
                n = t.green / 255,
                r = t.blue / 255,
                a = Math.max(e, n, r),
                o = Math.min(e, n, r),
                u = (a + o) / 2;
            if (a === o)
                return void 0 !== t.alpha ? {
                    hue: 0,
                    saturation: 0,
                    lightness: u,
                    alpha: t.alpha
                } : {
                    hue: 0,
                    saturation: 0,
                    lightness: u
                };
            var i = void 0,
                c = a - o,
                f = u > .5 ? c / (2 - a - o) : c / (a + o);
            switch (a) {
            case e:
                i = (n - r) / c + (n < r ? 6 : 0);
                break;
            case n:
                i = (r - e) / c + 2;
                break;
            default:
                i = (e - n) / c + 4
            }
            return i *= 60, void 0 !== t.alpha ? {
                hue: i,
                saturation: f,
                lightness: u,
                alpha: t.alpha
            } : {
                hue: i,
                saturation: f,
                lightness: u
            }
        }
        function I(t) {
            return C(A(t))
        }
        function E(t) {
            var e = t.toString(16);
            return 1 === e.length ? "0" + e : e
        }
        function F(t, e, n) {
            if ("number" == typeof t && "number" == typeof e && "number" == typeof n)
                return Zt("#" + E(t) + E(e) + E(n));
            if ("object" === (void 0 === t ? "undefined" : Et(t)) && void 0 === e && void 0 === n)
                return Zt("#" + E(t.red) + E(t.green) + E(t.blue));
            throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")
        }
        function Y(t, e, n, r) {
            if ("string" == typeof t && "number" == typeof e) {
                var a = A(t);
                return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + e + ")"
            }
            if ("number" == typeof t && "number" == typeof e && "number" == typeof n && "number" == typeof r)
                return r >= 1 ? F(t, e, n) : "rgba(" + t + "," + e + "," + n + "," + r + ")";
            if ("object" === (void 0 === t ? "undefined" : Et(t)) && void 0 === e && void 0 === n && void 0 === r)
                return t.alpha >= 1 ? F(t.red, t.green, t.blue) : "rgba(" + t.red + "," + t.green + "," + t.blue + "," + t.alpha + ")";
            throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")
        }
        function z(t) {
            return E(Math.round(255 * t))
        }
        function U(t, e, n) {
            return Zt("#" + z(t) + z(e) + z(n))
        }
        function P(t, e, n) {
            return j(t, e, n, U)
        }
        function H(t, e, n) {
            if ("number" == typeof t && "number" == typeof e && "number" == typeof n)
                return P(t, e, n);
            if ("object" === (void 0 === t ? "undefined" : Et(t)) && void 0 === e && void 0 === n)
                return P(t.hue, t.saturation, t.lightness);
            throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")
        }
        function L(t, e, n, r) {
            if ("number" == typeof t && "number" == typeof e && "number" == typeof n && "number" == typeof r)
                return r >= 1 ? P(t, e, n) : "rgba(" + j(t, e, n) + "," + r + ")";
            if ("object" === (void 0 === t ? "undefined" : Et(t)) && void 0 === e && void 0 === n && void 0 === r)
                return t.alpha >= 1 ? P(t.hue, t.saturation, t.lightness) : "rgba(" + j(t.hue, t.saturation, t.lightness) + "," + t.alpha + ")";
            throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")
        }
        function W(t) {
            if (Jt(t))
                return Y(t);
            if (Qt(t))
                return F(t);
            if (te(t))
                return L(t);
            if (Kt(t))
                return H(t);
            throw new Error("Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.")
        }
        function R(t, e, n) {
            return function() {
                var r = n.concat(Array.prototype.slice.call(arguments));
                return r.length >= e ? t.apply(this, r) : R(t, e, r)
            }
        }
        function $(t) {
            return R(t, t.length, [])
        }
        function B(t, e) {
            var n = I(e);
            return W(Yt({}, n, {
                hue: (n.hue + t) % 360
            }))
        }
        function X(t) {
            var e = I(t);
            return W(Yt({}, e, {
                hue: (e.hue + 180) % 360
            }))
        }
        function q(t, e, n) {
            return Math.max(t, Math.min(e, n))
        }
        function G(t, e) {
            var n = I(e);
            return W(Yt({}, n, {
                lightness: q(0, 1, n.lightness - t)
            }))
        }
        function V(t, e) {
            var n = I(e);
            return W(Yt({}, n, {
                saturation: q(0, 1, n.saturation - t)
            }))
        }
        function Z(t) {
            return W(Yt({}, I(t), {
                saturation: 0
            }))
        }
        function Q(t) {
            var e = A(t);
            return W(Yt({}, e, {
                red: 255 - e.red,
                green: 255 - e.green,
                blue: 255 - e.blue
            }))
        }
        function J(t, e) {
            var n = I(e);
            return W(Yt({}, n, {
                lightness: q(0, 1, n.lightness + t)
            }))
        }
        function K() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
                e = arguments[1],
                n = arguments[2],
                r = A(e),
                a = Yt({}, r, {
                    alpha: "number" == typeof r.alpha ? r.alpha : 1
                }),
                o = A(n),
                u = Yt({}, o, {
                    alpha: "number" == typeof o.alpha ? o.alpha : 1
                }),
                i = a.alpha - u.alpha,
                c = 2 * t - 1,
                f = c * i == -1 ? c : c + i,
                s = 1 + c * i,
                l = (f / s + 1) / 2,
                d = 1 - l;
            return Y({
                red: Math.floor(a.red * l + u.red * d),
                green: Math.floor(a.green * l + u.green * d),
                blue: Math.floor(a.blue * l + u.blue * d),
                alpha: a.alpha + (u.alpha - a.alpha) * (t / 1)
            })
        }
        function tt(t, e) {
            var n = A(e),
                r = "number" == typeof n.alpha ? n.alpha : 1;
            return Y(Yt({}, n, {
                alpha: q(0, 1, (100 * r + 100 * t) / 100)
            }))
        }
        function et(t, e) {
            var n = I(e);
            return W(Yt({}, n, {
                saturation: q(0, 1, n.saturation + t)
            }))
        }
        function nt(t, e) {
            return W(Yt({}, I(e), {
                hue: t
            }))
        }
        function rt(t, e) {
            return W(Yt({}, I(e), {
                lightness: t
            }))
        }
        function at(t, e) {
            return W(Yt({}, I(e), {
                saturation: t
            }))
        }
        function ot(t, e) {
            if ("number" != typeof t || t > 1 || t < -1)
                throw new Error("Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.");
            if ("string" != typeof e)
                throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");
            return oe(t, e, "rgb(0, 0, 0)")
        }
        function ut(t, e) {
            if ("number" != typeof t || t > 1 || t < -1)
                throw new Error("Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.");
            if ("string" != typeof e)
                throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");
            return oe(t, e, "rgb(255, 255, 255)")
        }
        function it(t, e) {
            var n = A(e),
                r = "number" == typeof n.alpha ? n.alpha : 1;
            return Y(Yt({}, n, {
                alpha: q(0, 1, (100 * r - 100 * t) / 100)
            }))
        }
        function ct() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            var r = Array.isArray(e[0]);
            if (!r && e.length > 8)
                throw new Error("The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation");
            return {
                animation: e.map(function(t) {
                    if (r && !Array.isArray(t) || !r && Array.isArray(t))
                        throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
                    if (Array.isArray(t) && t.length > 8)
                        throw new Error("The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation");
                    return Array.isArray(t) ? t.join(" ") : t
                }).join(", ")
            }
        }
        function ft() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return {
                "background-image": e.join(", ")
            }
        }
        function st() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return {
                background: e.join(", ")
            }
        }
        function lt() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return o.apply(void 0, ["border-color"].concat(e))
        }
        function dt(t, e) {
            if (!e || "string" != typeof e)
                throw new Error("borderRadius expects a radius value as a string as the second argument.");
            if ("top" === t || "bottom" === t) {
                var n;
                return n = {}, Ft(n, "border-" + t + "-right-radius", e), Ft(n, "border-" + t + "-left-radius", e), n
            }
            if ("left" === t || "right" === t) {
                var r;
                return r = {}, Ft(r, "border-top-" + t + "-radius", e), Ft(r, "border-bottom-" + t + "-radius", e), r
            }
            throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.')
        }
        function pt() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return o.apply(void 0, ["border-style"].concat(e))
        }
        function ht() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return o.apply(void 0, ["border-width"].concat(e))
        }
        function bt(t, e) {
            return t(e ? ":" + e : "")
        }
        function vt(t, e, n) {
            if (!e)
                throw new Error("You must provide a template to this method.");
            if (0 === t.length)
                return bt(e, null);
            for (var r = [], a = 0; a < t.length; a += 1) {
                if (n && n.indexOf(t[a]) < 0)
                    throw new Error("You passed an unsupported selector state to this method.");
                r.push(bt(e, t[a]))
            }
            return r = r.join(",")
        }
        function gt(t) {
            return "button" + t + ',\n  input[type="button"]' + t + ',\n  input[type="reset"]' + t + ',\n  input[type="submit"]' + t
        }
        function mt() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return vt(e, gt, he)
        }
        function yt() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return o.apply(void 0, ["margin"].concat(e))
        }
        function xt() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return o.apply(void 0, ["padding"].concat(e))
        }
        function _t(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            if (be.indexOf(t) >= 0)
                return Yt({
                    position: t
                }, o.apply(void 0, [""].concat(n)));
            var a = t;
            return o.apply(void 0, ["", a].concat(n))
        }
        function wt(t) {
            return {
                height: t,
                width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
            }
        }
        function Mt(t) {
            return 'input[type="color"]' + t + ',\n    input[type="date"]' + t + ',\n    input[type="datetime"]' + t + ',\n    input[type="datetime-local"]' + t + ',\n    input[type="email"]' + t + ',\n    input[type="month"]' + t + ',\n    input[type="number"]' + t + ',\n    input[type="password"]' + t + ',\n    input[type="search"]' + t + ',\n    input[type="tel"]' + t + ',\n    input[type="text"]' + t + ',\n    input[type="time"]' + t + ',\n    input[type="url"]' + t + ',\n    input[type="week"]' + t + ",\n    input:not([type])" + t + ",\n    textarea" + t
        }
        function Tt() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return vt(e, Mt, ve)
        }
        function Ot() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return {
                transition: e.join(", ")
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "adjustHue", function() {
            return ee
        }), n.d(e, "animation", function() {
            return ct
        }), n.d(e, "backgroundImages", function() {
            return ft
        }), n.d(e, "backgrounds", function() {
            return st
        }), n.d(e, "borderColor", function() {
            return lt
        }), n.d(e, "borderRadius", function() {
            return dt
        }), n.d(e, "borderStyle", function() {
            return pt
        }), n.d(e, "borderWidth", function() {
            return ht
        }), n.d(e, "buttons", function() {
            return mt
        }), n.d(e, "clearFix", function() {
            return c
        }), n.d(e, "complement", function() {
            return X
        }), n.d(e, "darken", function() {
            return ne
        }), n.d(e, "desaturate", function() {
            return re
        }), n.d(e, "directionalProperty", function() {
            return o
        }), n.d(e, "ellipsis", function() {
            return f
        }), n.d(e, "em", function() {
            return At
        }), n.d(e, "fontFace", function() {
            return p
        }), n.d(e, "grayscale", function() {
            return Z
        }), n.d(e, "invert", function() {
            return Q
        }), n.d(e, "hideText", function() {
            return h
        }), n.d(e, "hiDPI", function() {
            return b
        }), n.d(e, "hsl", function() {
            return H
        }), n.d(e, "hsla", function() {
            return L
        }), n.d(e, "lighten", function() {
            return ae
        }), n.d(e, "margin", function() {
            return yt
        }), n.d(e, "mix", function() {
            return oe
        }), n.d(e, "modularScale", function() {
            return i
        }), n.d(e, "normalize", function() {
            return g
        }), n.d(e, "opacify", function() {
            return ue
        }), n.d(e, "padding", function() {
            return xt
        }), n.d(e, "parseToHsl", function() {
            return I
        }), n.d(e, "parseToRgb", function() {
            return A
        }), n.d(e, "placeholder", function() {
            return m
        }), n.d(e, "position", function() {
            return _t
        }), n.d(e, "radialGradient", function() {
            return _
        }), n.d(e, "rem", function() {
            return It
        }), n.d(e, "retinaImage", function() {
            return w
        }), n.d(e, "rgb", function() {
            return F
        }), n.d(e, "rgba", function() {
            return Y
        }), n.d(e, "saturate", function() {
            return ie
        }), n.d(e, "selection", function() {
            return M
        }), n.d(e, "setHue", function() {
            return ce
        }), n.d(e, "setLightness", function() {
            return fe
        }), n.d(e, "setSaturation", function() {
            return se
        }), n.d(e, "shade", function() {
            return le
        }), n.d(e, "size", function() {
            return wt
        }), n.d(e, "stripUnit", function() {
            return u
        }), n.d(e, "textInputs", function() {
            return Tt
        }), n.d(e, "timingFunctions", function() {
            return T
        }), n.d(e, "tint", function() {
            return de
        }), n.d(e, "toColorString", function() {
            return W
        }), n.d(e, "transitions", function() {
            return Ot
        }), n.d(e, "transparentize", function() {
            return pe
        }), n.d(e, "triangle", function() {
            return O
        }), n.d(e, "wordWrap", function() {
            return D
        });
        var Dt,
            kt,
            St = ["top", "right", "bottom", "left"],
            jt = function(t, e) {
                return t.substr(-e.length) === e
            },
            Nt = function(t) {
                return function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "16px",
                        r = e,
                        a = n;
                    if ("string" == typeof e) {
                        if (!jt(e, "px"))
                            throw new Error('Expected a string ending in "px" or a number passed as the first argument to ' + t + '(), got "' + e + '" instead.');
                        r = u(e)
                    }
                    if ("string" == typeof n) {
                        if (!jt(n, "px"))
                            throw new Error('Expected a string ending in "px" or a number passed as the second argument to ' + t + '(), got "' + n + '" instead.');
                        a = u(n)
                    }
                    if ("string" == typeof r)
                        throw new Error('Passed invalid pixel value ("' + e + '") to ' + t + '(), please pass a value like "12px" or 12.');
                    if ("string" == typeof a)
                        throw new Error('Passed invalid base value ("' + n + '") to ' + t + '(), please pass a value like "12px" or 12.');
                    return "" + r / a + t
                }
            },
            At = Nt("em"),
            Ct = {
                minorSecond: 1.067,
                majorSecond: 1.125,
                minorThird: 1.2,
                majorThird: 1.25,
                perfectFourth: 1.333,
                augFourth: 1.414,
                perfectFifth: 1.5,
                minorSixth: 1.6,
                goldenSection: 1.618,
                majorSixth: 1.667,
                minorSeventh: 1.778,
                majorSeventh: 1.875,
                octave: 2,
                majorTenth: 2.5,
                majorEleventh: 2.667,
                majorTwelfth: 3,
                doubleOctave: 4
            },
            It = Nt("rem"),
            Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            Ft = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            },
            Yt = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            zt = (Dt = {
                html: {
                    "font-family": "sans-serif"
                },
                body: {
                    margin: "0"
                }
            }, Ft(Dt, "a:active,\n  a:hover", {
                "outline-width": "0"
            }), Ft(Dt, "button,\n  input,\n  optgroup,\n  select,\n  textarea", {
                "font-family": "sans-serif",
                "font-size": "100%",
                "line-height": "1.15"
            }), Dt),
            Ut = (kt = {
                html: {
                    "line-height": "1.15",
                    "-ms-text-size-adjust": "100%",
                    "-webkit-text-size-adjust": "100%"
                }
            }, Ft(kt, "article,\n  aside,\n  footer,\n  header,\n  nav,\n  section", {
                display: "block"
            }), Ft(kt, "h1", {
                "font-size": "2em",
                margin: "0.67em 0"
            }), Ft(kt, "figcaption,\n  figure,\n  main", {
                display: "block"
            }), Ft(kt, "figure", {
                margin: "1em 40px"
            }), Ft(kt, "hr", {
                "box-sizing": "content-box",
                height: "0",
                overflow: "visible"
            }), Ft(kt, "pre", {
                "font-family": "monospace, monospace",
                "font-size": "1em"
            }), Ft(kt, "a", {
                "background-color": "transparent",
                "-webkit-text-decoration-skip": "objects"
            }), Ft(kt, "abbr[title]", Ft({
                "border-bottom": "none",
                "text-decoration": "underline"
            }, "text-decoration", "underline dotted")), Ft(kt, "b,\n  strong", {
                "font-weight": "inherit"
            }), Ft(kt, "code,\n  kbd,\n  samp", {
                "font-family": "monospace, monospace",
                "font-size": "1em"
            }), Ft(kt, "dfn", {
                "font-style": "italic"
            }), Ft(kt, "mark", {
                "background-color": "#ff0",
                color: "#000"
            }), Ft(kt, "small", {
                "font-size": "80%"
            }), Ft(kt, "sub,\n  sup", {
                "font-size": "75%",
                "line-height": "0",
                position: "relative",
                "vertical-align": "baseline"
            }), Ft(kt, "sub", {
                bottom: "-0.25em"
            }), Ft(kt, "sup", {
                top: "-0.5em"
            }), Ft(kt, "audio,\n  video", {
                display: "inline-block"
            }), Ft(kt, "audio:not([controls])", {
                display: "none",
                height: "0"
            }), Ft(kt, "img", {
                "border-style": "none"
            }), Ft(kt, "svg:not(:root)", {
                overflow: "hidden"
            }), Ft(kt, "button,\n  input,\n  optgroup,\n  select,\n  textarea", {
                margin: "0"
            }), Ft(kt, "button,\n  input", {
                overflow: "visible"
            }), Ft(kt, "button,\n  select", {
                "text-transform": "none"
            }), Ft(kt, 'button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]', {
                "-webkit-appearance": "button"
            }), Ft(kt, 'button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner', {
                "border-style": "none",
                padding: "0"
            }), Ft(kt, 'button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring', {
                outline: "1px dotted ButtonText"
            }), Ft(kt, "fieldset", {
                border: "1px solid #c0c0c0",
                margin: "0 2px",
                padding: "0.35em 0.625em 0.75em"
            }), Ft(kt, "legend", {
                "box-sizing": "border-box",
                color: "inherit",
                display: "table",
                "max-width": "100%",
                padding: "0",
                "white-space": "normal"
            }), Ft(kt, "progress", {
                display: "inline-block",
                "vertical-align": "baseline"
            }), Ft(kt, "textarea", {
                overflow: "auto"
            }), Ft(kt, '[type="checkbox"],\n  [type="radio"]', {
                "box-sizing": "border-box",
                padding: "0"
            }), Ft(kt, '[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button', {
                height: "auto"
            }), Ft(kt, '[type="search"]', {
                "-webkit-appearance": "textfield",
                "outline-offset": "-2px"
            }), Ft(kt, '[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration', {
                "-webkit-appearance": "none"
            }), Ft(kt, "::-webkit-file-upload-button", {
                "-webkit-appearance": "button",
                font: "inherit"
            }), Ft(kt, "details,\n  menu", {
                display: "block"
            }), Ft(kt, "summary", {
                display: "list-item"
            }), Ft(kt, "canvas", {
                display: "inline-block"
            }), Ft(kt, "template", {
                display: "none"
            }), Ft(kt, "[hidden]", {
                display: "none"
            }), kt),
            Pt = function(t, e) {
                return Object.freeze(Object.defineProperties(t, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }(["radial-gradient(", "", "", "", ")"], ["radial-gradient(", "", "", "", ")"]),
            Ht = {
                easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                easeInCirc: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
                easeInCubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
                easeInExpo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
                easeInQuad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
                easeInQuart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
                easeInQuint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
                easeInSine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
                easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
                easeOutCubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
                easeOutCirc: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
                easeOutExpo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
                easeOutQuad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
                easeOutQuart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
                easeOutQuint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
                easeOutSine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
                easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                easeInOutCirc: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
                easeInOutCubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
                easeInOutExpo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
                easeInOutQuad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
                easeInOutQuart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
                easeInOutQuint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
                easeInOutSine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
            },
            Lt = function(t, e, n) {
                switch (t) {
                case "top":
                    return "0 " + n / 2 + "px " + e + "px " + n / 2 + "px";
                case "left":
                    return e / 2 + "px " + n + "px " + e / 2 + "px 0";
                case "bottom":
                    return e + "px " + n / 2 + "px 0 " + n / 2 + "px";
                case "right":
                    return e / 2 + "px 0 " + e / 2 + "px " + n + "px";
                default:
                    throw new Error("Passed invalid argument to triangle, please pass correct poitingDirection e.g. 'right'.")
                }
            },
            Wt = {
                left: "right",
                right: "left",
                top: "bottom",
                bottom: "top"
            },
            Rt = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "639",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            $t = /^#[a-fA-F0-9]{6}$/,
            Bt = /^#[a-fA-F0-9]{3}$/,
            Xt = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
            qt = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,
            Gt = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,
            Vt = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,
            Zt = function(t) {
                return 7 === t.length && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t
            },
            Qt = function(t) {
                return "object" === (void 0 === t ? "undefined" : Et(t)) && "number" == typeof t.red && "number" == typeof t.green && "number" == typeof t.blue && "number" != typeof t.alpha
            },
            Jt = function(t) {
                return "object" === (void 0 === t ? "undefined" : Et(t)) && "number" == typeof t.red && "number" == typeof t.green && "number" == typeof t.blue && "number" == typeof t.alpha
            },
            Kt = function(t) {
                return "object" === (void 0 === t ? "undefined" : Et(t)) && "number" == typeof t.hue && "number" == typeof t.saturation && "number" == typeof t.lightness && "number" != typeof t.alpha
            },
            te = function(t) {
                return "object" === (void 0 === t ? "undefined" : Et(t)) && "number" == typeof t.hue && "number" == typeof t.saturation && "number" == typeof t.lightness && "number" == typeof t.alpha
            },
            ee = $(B),
            ne = $(G),
            re = $(V),
            ae = $(J),
            oe = $(K),
            ue = $(tt),
            ie = $(et),
            ce = $(nt),
            fe = $(rt),
            se = $(at),
            le = $(ot),
            de = $(ut),
            pe = $(it),
            he = [void 0, null, "active", "focus", "hover"],
            be = ["absolute", "fixed", "relative", "static", "sticky"],
            ve = [void 0, null, "active", "focus", "hover"]
    }, function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(e, n(285))
    }, function(t, e) {
        function n(t, e) {
            return t > e
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__ = new a(t);
            this.size = e.size
        }
        var a = n(37),
            o = n(295),
            u = n(296),
            i = n(297),
            c = n(298),
            f = n(299);
        r.prototype.clear = o, r.prototype.delete = u, r.prototype.get = i, r.prototype.has = c, r.prototype.set = f, t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (!o(t))
                return !1;
            var e = a(t);
            return e == i || e == c || e == u || e == f
        }
        var a = n(13),
            o = n(16),
            u = "[object AsyncFunction]",
            i = "[object Function]",
            c = "[object GeneratorFunction]",
            f = "[object Proxy]";
        t.exports = r
    }, function(t, e) {
        function n(t) {
            if (null != t) {
                try {
                    return a.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
        var r = Function.prototype,
            a = r.toString;
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n, u, i) {
            return t === e || (null == t || null == e || !o(t) && !o(e) ? t !== t && e !== e : a(t, e, n, u, r, i))
        }
        var a = n(316),
            o = n(14);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r, f, s) {
            var l = n & i,
                d = t.length,
                p = e.length;
            if (d != p && !(l && p > d))
                return !1;
            var h = s.get(t);
            if (h && s.get(e))
                return h == e;
            var b = -1,
                v = !0,
                g = n & c ? new a : void 0;
            for (s.set(t, e), s.set(e, t); ++b < d;) {
                var m = t[b],
                    y = e[b];
                if (r)
                    var x = l ? r(y, m, b, e, t, s) : r(m, y, b, t, e, s);
                if (void 0 !== x) {
                    if (x)
                        continue;
                    v = !1;
                    break
                }
                if (g) {
                    if (!o(e, function(t, e) {
                        if (!u(g, e) && (m === t || f(m, t, n, r, s)))
                            return g.push(e)
                    })) {
                        v = !1;
                        break
                    }
                } else if (m !== y && !f(m, y, n, r, s)) {
                    v = !1;
                    break
                }
            }
            return s.delete(t), s.delete(e), v
        }
        var a = n(317),
            o = n(320),
            u = n(321),
            i = 1,
            c = 2;
        t.exports = r
    }, function(t, e, n) {
        var r = n(335),
            a = n(14),
            o = Object.prototype,
            u = o.hasOwnProperty,
            i = o.propertyIsEnumerable,
            c = r(function() {
                return arguments
            }()) ? r : function(t) {
                return a(t) && u.call(t, "callee") && !i.call(t, "callee")
            };
        t.exports = c
    }, function(t, e, n) {
        (function(t) {
            var r = n(4),
                a = n(336),
                o = "object" == typeof e && e && !e.nodeType && e,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                i = u && u.exports === o,
                c = i ? r.Buffer : void 0,
                f = c ? c.isBuffer : void 0,
                s = f || a;
            t.exports = s
        }).call(e, n(125)(t))
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, n) {
        var r = n(337),
            a = n(127),
            o = n(128),
            u = o && o.isTypedArray,
            i = u ? a(u) : r;
        t.exports = i
    }, function(t, e) {
        function n(t) {
            return function(e) {
                return t(e)
            }
        }
        t.exports = n
    }, function(t, e, n) {
        (function(t) {
            var r = n(116),
                a = "object" == typeof e && e && !e.nodeType && e,
                o = a && "object" == typeof t && t && !t.nodeType && t,
                u = o && o.exports === a,
                i = u && r.process,
                c = function() {
                    try {
                        return i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        }).call(e, n(125)(t))
    }, function(t, e, n) {
        function r(t) {
            return t === t && !a(t)
        }
        var a = n(16);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return function(n) {
                return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            e = a(e, t);
            for (var n = 0, r = e.length; null != t && n < r;)
                t = t[o(e[n++])];
            return n && n == r ? t : void 0
        }
        var a = n(132),
            o = n(42);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return a(t) ? t : o(t, e) ? [t] : u(i(t))
        }
        var a = n(3),
            o = n(65),
            u = n(350),
            i = n(25);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if ("string" == typeof t)
                return t;
            if (u(t))
                return o(t, r) + "";
            if (i(t))
                return s ? s.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -c ? "-0" : e
        }
        var a = n(36),
            o = n(134),
            u = n(3),
            i = n(23),
            c = 1 / 0,
            f = a ? a.prototype : void 0,
            s = f ? f.toString : void 0;
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, a = Array(r); ++n < r;)
                a[n] = e(t[n], n, t);
            return a
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var n = null == t ? 0 : t.length;
            return n ? a(t, e) / n : o
        }
        var a = n(361),
            o = NaN;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return o(t, a(e, 2))
        }
        var a = n(24),
            o = n(136);
        t.exports = r
    }, function(t, e) {
        function n(t, e, n) {
            var r = -1,
                a = t.length;
            e < 0 && (e = -e > a ? 0 : a + e), n = n > a ? a : n, n < 0 && (n += a), a = e > n ? 0 : n - e >>> 0, e >>>= 0;
            for (var o = Array(a); ++r < a;)
                o[r] = t[r + e];
            return o
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e % 1;
            return e === e ? n ? e - n : e : 0
        }
        var a = n(364);
        t.exports = r
    }, function(t, e) {
        function n(t, e, n, r) {
            var a = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++a]); ++a < o;)
                n = e(n, t[a], a, t);
            return n
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(367),
            a = n(370),
            o = a(r);
        t.exports = o
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = t.length;
            return n = void 0 === n ? r : n, !e && n >= r ? t : a(t, e, n)
        }
        var a = n(138);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return o(t) ? u(t) : a(t)
        }
        var a = n(385),
            o = n(43),
            u = n(386);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(17),
            a = n(145),
            o = a.a(r.a),
            u = o.right;
        o.left;
        e.a = u
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return function(e, n) {
                return a.a(t(e), n)
            }
        }
        var a = n(17);
        e.a = function(t) {
            return 1 === t.length && (t = r(t)), {
                left: function(e, n, r, a) {
                    for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                        var o = r + a >>> 1;
                        t(e[o], n) < 0 ? r = o + 1 : a = o
                    }
                    return r
                },
                right: function(e, n, r, a) {
                    for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                        var o = r + a >>> 1;
                        t(e[o], n) > 0 ? a = o : r = o + 1
                    }
                    return r
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            return [t, e]
        }
        e.a = r
    }, function(t, e, n) {
        "use strict";
        var r = n(148);
        e.a = function(t, e) {
            var n = r.a(t, e);
            return n ? Math.sqrt(n) : n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(26);
        e.a = function(t, e) {
            var n,
                a,
                o = t.length,
                u = 0,
                i = -1,
                c = 0,
                f = 0;
            if (null == e)
                for (; ++i < o;)
                    isNaN(n = r.a(t[i])) || (a = n - c, c += a / ++u, f += a * (n - c));
            else
                for (; ++i < o;)
                    isNaN(n = r.a(e(t[i], i, t))) || (a = n - c, c += a / ++u, f += a * (n - c));
            if (u > 1)
                return f / (u - 1)
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            var n,
                r,
                a,
                o = t.length,
                u = -1;
            if (null == e) {
                for (; ++u < o;)
                    if (null != (n = t[u]) && n >= n)
                        for (r = a = n; ++u < o;)
                            null != (n = t[u]) && (r > n && (r = n), a < n && (a = n))
            } else
                for (; ++u < o;)
                    if (null != (n = e(t[u], u, t)) && n >= n)
                        for (r = a = n; ++u < o;)
                            null != (n = e(t[u], u, t)) && (r > n && (r = n), a < n && (a = n));
            return [r, a]
        }
    }, function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a
        }), n.d(e, "a", function() {
            return o
        });
        var r = Array.prototype,
            a = r.slice,
            o = r.map
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e, n) {
            t = +t, e = +e, n = (a = arguments.length) < 2 ? (e = t, t = 0, 1) : a < 3 ? 1 : +n;
            for (var r = -1, a = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(a); ++r < a;)
                o[r] = t + r * n;
            return o
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            var r = (e - t) / Math.max(0, n),
                a = Math.floor(Math.log(r) / Math.LN10),
                c = r / Math.pow(10, a);
            return a >= 0 ? (c >= o ? 10 : c >= u ? 5 : c >= i ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (c >= o ? 10 : c >= u ? 5 : c >= i ? 2 : 1)
        }
        function a(t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n),
                a = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                c = r / a;
            return c >= o ? a *= 10 : c >= u ? a *= 5 : c >= i && (a *= 2), e < t ? -a : a
        }
        e.b = r, e.c = a;
        var o = Math.sqrt(50),
            u = Math.sqrt(10),
            i = Math.sqrt(2);
        e.a = function(t, e, n) {
            var a,
                o,
                u,
                i = e < t,
                c = -1;
            if (i && (a = t, t = e, e = a), 0 === (u = r(t, e, n)) || !isFinite(u))
                return [];
            if (u > 0)
                for (t = Math.ceil(t / u), e = Math.floor(e / u), o = new Array(a = Math.ceil(e - t + 1)); ++c < a;)
                    o[c] = (t + c) * u;
            else
                for (t = Math.floor(t * u), e = Math.ceil(e * u), o = new Array(a = Math.ceil(t - e + 1)); ++c < a;)
                    o[c] = (t - c) / u;
            return i && o.reverse(), o
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            var n,
                r,
                a = t.length,
                o = -1;
            if (null == e) {
                for (; ++o < a;)
                    if (null != (n = t[o]) && n >= n)
                        for (r = n; ++o < a;)
                            null != (n = t[o]) && r > n && (r = n)
            } else
                for (; ++o < a;)
                    if (null != (n = e(t[o], o, t)) && n >= n)
                        for (r = n; ++o < a;)
                            null != (n = e(t[o], o, t)) && r > n && (r = n);
            return r
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t.length
        }
        var a = n(154);
        e.a = function(t) {
            if (!(u = t.length))
                return [];
            for (var e = -1, n = a.a(t, r), o = new Array(n); ++e < n;)
                for (var u, i = -1, c = o[e] = new Array(u); ++i < u;)
                    c[i] = t[i][e];
            return o
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            function e(e) {
                var r = e + "",
                    a = n.get(r);
                if (!a) {
                    if (c !== u)
                        return c;
                    n.set(r, a = i.push(e))
                }
                return t[(a - 1) % t.length]
            }
            var n = a.a(),
                i = [],
                c = u;
            return t = null == t ? [] : o.b.call(t), e.domain = function(t) {
                if (!arguments.length)
                    return i.slice();
                i = [], n = a.a();
                for (var r, o, u = -1, c = t.length; ++u < c;)
                    n.has(o = (r = t[u]) + "") || n.set(o, i.push(r));
                return e
            }, e.range = function(n) {
                return arguments.length ? (t = o.b.call(n), e) : t.slice()
            }, e.unknown = function(t) {
                return arguments.length ? (c = t, e) : c
            }, e.copy = function() {
                return r().domain(i).range(t).unknown(c)
            }, e
        }
        n.d(e, "b", function() {
            return u
        }), e.a = r;
        var a = n(410),
            o = n(12),
            u = {
                name: "implicit"
            }
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        }), n.d(e, "b", function() {
            return a
        });
        var r = Math.PI / 180,
            a = 180 / Math.PI
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return function(e) {
                var n,
                    r,
                    o = e.length,
                    u = new Array(o),
                    i = new Array(o),
                    c = new Array(o);
                for (n = 0; n < o; ++n)
                    r = a.f(e[n]), u[n] = r.r || 0, i[n] = r.g || 0, c[n] = r.b || 0;
                return u = t(u), i = t(i), c = t(c), r.opacity = 1, function(t) {
                    return r.r = u(t), r.g = i(t), r.b = c(t), r + ""
                }
            }
        }
        var a = n(8),
            o = n(72),
            u = n(159),
            i = n(29);
        e.a = function t(e) {
            function n(t, e) {
                var n = r((t = a.f(t)).r, (e = a.f(e)).r),
                    o = r(t.g, e.g),
                    u = r(t.b, e.b),
                    c = i.a(t.opacity, e.opacity);
                return function(e) {
                    return t.r = n(e), t.g = o(e), t.b = u(e), t.opacity = c(e), t + ""
                }
            }
            var r = i.b(e);
            return n.gamma = t, n
        }(1);
        r(o.b), r(u.a)
    }, function(t, e, n) {
        "use strict";
        var r = n(72);
        e.a = function(t) {
            var e = t.length;
            return function(n) {
                var a = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                    o = t[(a + e - 1) % e],
                    u = t[a % e],
                    i = t[(a + 1) % e],
                    c = t[(a + 2) % e];
                return r.a((n - a / e) * e, o, u, i, c)
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return function() {
                return t
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(69);
        e.a = function(t, e) {
            var n,
                a = e ? e.length : 0,
                o = t ? Math.min(a, t.length) : 0,
                u = new Array(a),
                i = new Array(a);
            for (n = 0; n < o; ++n)
                u[n] = r.a(t[n], e[n]);
            for (; n < a; ++n)
                i[n] = e[n];
            return function(t) {
                for (n = 0; n < o; ++n)
                    i[n] = u[n](t);
                return i
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            var n = new Date;
            return t = +t, e -= t, function(r) {
                return n.setTime(t + e * r), n
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(69);
        e.a = function(t, e) {
            var n,
                a = {},
                o = {};
            null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {});
            for (n in e)
                n in t ? a[n] = r.a(t[n], e[n]) : o[n] = e[n];
            return function(t) {
                for (n in a)
                    o[n] = a[n](t);
                return o
            }
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return function() {
                return t
            }
        }
        function a(t) {
            return function(e) {
                return t(e) + ""
            }
        }
        var o = n(45),
            u = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            i = new RegExp(u.source, "g");
        e.a = function(t, e) {
            var n,
                c,
                f,
                s = u.lastIndex = i.lastIndex = 0,
                l = -1,
                d = [],
                p = [];
            for (t += "", e += ""; (n = u.exec(t)) && (c = i.exec(e));)
                (f = c.index) > s && (f = e.slice(s, f), d[l] ? d[l] += f : d[++l] = f), (n = n[0]) === (c = c[0]) ? d[l] ? d[l] += c : d[++l] = c : (d[++l] = null, p.push({
                    i: l,
                    x: o.a(n, c)
                })), s = i.lastIndex;
            return s < e.length && (f = e.slice(s), d[l] ? d[l] += f : d[++l] = f), d.length < 2 ? p[0] ? a(p[0].x) : r(e) : (e = p.length, function(t) {
                for (var n, r = 0; r < e; ++r)
                    d[(n = p[r]).i] = n.x(t);
                return d.join("")
            })
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return +t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(430);
        n.d(e, "a", function() {
            return r.a
        }), n.d(e, "b", function() {
            return r.b
        });
        var a = (n(167), n(168));
        n.d(e, "c", function() {
            return a.a
        });
        var o = n(436);
        n.d(e, "d", function() {
            return o.a
        });
        var u = n(437);
        n.d(e, "e", function() {
            return u.a
        });
        var i = n(438);
        n.d(e, "f", function() {
            return i.a
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(47),
            a = n(431),
            o = n(432),
            u = n(168),
            i = n(169),
            c = n(170),
            f = n(435),
            s = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        e.a = function(t) {
            function e(t) {
                function e(t) {
                    var e,
                        o,
                        u,
                        i = x,
                        d = _;
                    if ("c" === y)
                        d = w(t) + d, t = "";
                    else {
                        t = +t;
                        var b = t < 0;
                        if (t = w(Math.abs(t), m), b && 0 == +t && (b = !1), i = (b ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + i, d = d + ("s" === y ? s[8 + c.b / 3] : "") + (b && "(" === a ? ")" : ""), M)
                            for (e = -1, o = t.length; ++e < o;)
                                if (48 > (u = t.charCodeAt(e)) || u > 57) {
                                    d = (46 === u ? p + t.slice(e + 1) : t.slice(e)) + d, t = t.slice(0, e);
                                    break
                                }
                    }
                    g && !f && (t = l(t, 1 / 0));
                    var T = i.length + t.length + d.length,
                        O = T < v ? new Array(v - T + 1).join(n) : "";
                    switch (g && f && (t = l(O + t, O.length ? v - d.length : 1 / 0), O = ""), r) {
                    case "<":
                        t = i + t + d + O;
                        break;
                    case "=":
                        t = i + O + t + d;
                        break;
                    case "^":
                        t = O.slice(0, T = O.length >> 1) + i + t + d + O.slice(T);
                        break;
                    default:
                        t = O + i + t + d
                    }
                    return h(t)
                }
                t = u.a(t);
                var n = t.fill,
                    r = t.align,
                    a = t.sign,
                    o = t.symbol,
                    f = t.zero,
                    v = t.width,
                    g = t.comma,
                    m = t.precision,
                    y = t.type,
                    x = "$" === o ? d[0] : "#" === o && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
                    _ = "$" === o ? d[1] : /[%p]/.test(y) ? b : "",
                    w = i.a[y],
                    M = !y || /[defgprs%]/.test(y);
                return m = null == m ? y ? 6 : 12 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)), e.toString = function() {
                    return t + ""
                }, e
            }
            function n(t, n) {
                var a = e((t = u.a(t), t.type = "f", t)),
                    o = 3 * Math.max(-8, Math.min(8, Math.floor(r.a(n) / 3))),
                    i = Math.pow(10, -o),
                    c = s[8 + o / 3];
                return function(t) {
                    return a(i * t) + c
                }
            }
            var l = t.grouping && t.thousands ? a.a(t.grouping, t.thousands) : f.a,
                d = t.currency,
                p = t.decimal,
                h = t.numerals ? o.a(t.numerals) : f.a,
                b = t.percent || "%";
            return {
                format: e,
                formatPrefix: n
            }
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return new a(t)
        }
        function a(t) {
            if (!(e = u.exec(t)))
                throw new Error("invalid format: " + t);
            var e,
                n = e[1] || " ",
                r = e[2] || ">",
                a = e[3] || "-",
                i = e[4] || "",
                c = !!e[5],
                f = e[6] && +e[6],
                s = !!e[7],
                l = e[8] && +e[8].slice(1),
                d = e[9] || "";
            "n" === d ? (s = !0, d = "g") : o.a[d] || (d = ""), (c || "0" === n && "=" === r) && (c = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = a, this.symbol = i, this.zero = c, this.width = f, this.comma = s, this.precision = l, this.type = d
        }
        e.a = r;
        var o = n(169),
            u = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        r.prototype = a.prototype, a.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(433),
            a = n(170),
            o = n(434);
        e.a = {
            "": r.a,
            "%": function(t, e) {
                return (100 * t).toFixed(e)
            },
            b: function(t) {
                return Math.round(t).toString(2)
            },
            c: function(t) {
                return t + ""
            },
            d: function(t) {
                return Math.round(t).toString(10)
            },
            e: function(t, e) {
                return t.toExponential(e)
            },
            f: function(t, e) {
                return t.toFixed(e)
            },
            g: function(t, e) {
                return t.toPrecision(e)
            },
            o: function(t) {
                return Math.round(t).toString(8)
            },
            p: function(t, e) {
                return o.a(100 * t, e)
            },
            r: o.a,
            s: a.a,
            X: function(t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function(t) {
                return Math.round(t).toString(16)
            }
        }
    }, function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        });
        var r,
            a = n(74);
        e.a = function(t, e) {
            var n = a.a(t, e);
            if (!n)
                return t + "";
            var o = n[0],
                u = n[1],
                i = u - (r = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1,
                c = o.length;
            return i === c ? o : i > c ? o + new Array(i - c + 1).join("0") : i > 0 ? o.slice(0, i) + "." + o.slice(i) : "0." + new Array(1 - i).join("0") + a.a(t, Math.max(0, e + i - 1))[0]
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            t = t.slice();
            var n,
                r = 0,
                a = t.length - 1,
                o = t[r],
                u = t[a];
            return u < o && (n = r, r = a, a = n, n = o, o = u, u = n), t[r] = e.floor(o), t[a] = e.ceil(u), t
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return new Date(t)
        }
        function a(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }
        function o(t, e, n, c, f, x, _, w, M) {
            function T(r) {
                return (_(r) < r ? j : x(r) < r ? N : f(r) < r ? A : c(r) < r ? C : e(r) < r ? n(r) < r ? I : E : t(r) < r ? F : Y)(r)
            }
            function O(e, n, r, a) {
                if (null == e && (e = 10), "number" == typeof e) {
                    var o = Math.abs(r - n) / e,
                        i = u.c(function(t) {
                            return t[2]
                        }).right(z, o);
                    i === z.length ? (a = u.g(n / y, r / y, e), e = t) : i ? (i = z[o / z[i - 1][2] < z[i][2] / o ? i - 1 : i], a = i[1], e = i[0]) : (a = u.g(n, r, e), e = w)
                }
                return null == a ? e : e.every(a)
            }
            var D = l.b(l.c, i.c),
                k = D.invert,
                S = D.domain,
                j = M(".%L"),
                N = M(":%S"),
                A = M("%I:%M"),
                C = M("%I %p"),
                I = M("%a %d"),
                E = M("%b %d"),
                F = M("%B"),
                Y = M("%Y"),
                z = [[_, 1, p], [_, 5, 5 * p], [_, 15, 15 * p], [_, 30, 30 * p], [x, 1, h], [x, 5, 5 * h], [x, 15, 15 * h], [x, 30, 30 * h], [f, 1, b], [f, 3, 3 * b], [f, 6, 6 * b], [f, 12, 12 * b], [c, 1, v], [c, 2, 2 * v], [n, 1, g], [e, 1, m], [e, 3, 3 * m], [t, 1, y]];
            return D.invert = function(t) {
                return new Date(k(t))
            }, D.domain = function(t) {
                return arguments.length ? S(s.a.call(t, a)) : S().map(r)
            }, D.ticks = function(t, e) {
                var n,
                    r = S(),
                    a = r[0],
                    o = r[r.length - 1],
                    u = o < a;
                return u && (n = a, a = o, o = n), n = O(t, a, o, e), n = n ? n.range(a, o + 1) : [], u ? n.reverse() : n
            }, D.tickFormat = function(t, e) {
                return null == e ? T : M(e)
            }, D.nice = function(t, e) {
                var n = S();
                return (t = O(t, n[0], n[n.length - 1], e)) ? S(d.a(n, t)) : D
            }, D.copy = function() {
                return l.a(D, o(t, e, n, c, f, x, _, w, M))
            }, D
        }
        e.a = o;
        var u = n(5),
            i = n(28),
            c = n(75),
            f = n(173),
            s = n(12),
            l = n(46),
            d = n(171),
            p = 1e3,
            h = 60 * p,
            b = 60 * h,
            v = 24 * b,
            g = 7 * v,
            m = 30 * v,
            y = 365 * v;
        e.b = function() {
            return o(c.j, c.f, c.i, c.a, c.b, c.d, c.g, c.c, f.a).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(76);
        n.d(e, "a", function() {
            return r.a
        }), n.d(e, "b", function() {
            return r.b
        });
        n(174), n(175), n(458)
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return e.setFullYear(t.y), e
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }
        function a(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return e.setUTCFullYear(t.y), e
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }
        function o(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }
        function u(t) {
            function e(t, e) {
                return function(n) {
                    var r,
                        a,
                        o,
                        u = [],
                        i = -1,
                        c = 0,
                        f = t.length;
                    for (n instanceof Date || (n = new Date(+n)); ++i < f;)
                        37 === t.charCodeAt(i) && (u.push(t.slice(c, i)), null != (a = et[r = t.charAt(++i)]) ? r = t.charAt(++i) : a = "e" === r ? " " : "0", (o = e[r]) && (r = o(n, a)), u.push(r), c = i + 1);
                    return u.push(t.slice(c, i)), u.join("")
                }
            }
            function n(t, e) {
                return function(n) {
                    var r = o(1900);
                    if (u(r, t, n += "", 0) != n.length)
                        return null;
                    if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "W" in r || "U" in r) {
                        "w" in r || (r.w = "W" in r ? 1 : 0);
                        var i = "Z" in r ? a(o(r.y)).getUTCDay() : e(o(r.y)).getDay();
                        r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (i + 5) % 7 : r.w + 7 * r.U - (i + 6) % 7
                    }
                    return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, a(r)) : e(r)
                }
            }
            function u(t, e, n, r) {
                for (var a, o, u = 0, i = e.length, c = n.length; u < i;) {
                    if (r >= c)
                        return -1;
                    if (37 === (a = e.charCodeAt(u++))) {
                        if (a = e.charAt(u++), !(o = zt[a in et ? e.charAt(u++) : a]) || (r = o(t, n, r)) < 0)
                            return -1
                    } else if (a != n.charCodeAt(r++))
                        return -1
                }
                return r
            }
            function i(t, e, n) {
                var r = Ot.exec(e.slice(n));
                return r ? (t.p = Dt[r[0].toLowerCase()], n + r[0].length) : -1
            }
            function c(t, e, n) {
                var r = jt.exec(e.slice(n));
                return r ? (t.w = Nt[r[0].toLowerCase()], n + r[0].length) : -1
            }
            function tt(t, e, n) {
                var r = kt.exec(e.slice(n));
                return r ? (t.w = St[r[0].toLowerCase()], n + r[0].length) : -1
            }
            function nt(t, e, n) {
                var r = It.exec(e.slice(n));
                return r ? (t.m = Et[r[0].toLowerCase()], n + r[0].length) : -1
            }
            function rt(t, e, n) {
                var r = At.exec(e.slice(n));
                return r ? (t.m = Ct[r[0].toLowerCase()], n + r[0].length) : -1
            }
            function at(t, e, n) {
                return u(t, gt, e, n)
            }
            function ot(t, e, n) {
                return u(t, mt, e, n)
            }
            function ut(t, e, n) {
                return u(t, yt, e, n)
            }
            function it(t) {
                return wt[t.getDay()]
            }
            function ct(t) {
                return _t[t.getDay()]
            }
            function ft(t) {
                return Tt[t.getMonth()]
            }
            function st(t) {
                return Mt[t.getMonth()]
            }
            function lt(t) {
                return xt[+(t.getHours() >= 12)]
            }
            function dt(t) {
                return wt[t.getUTCDay()]
            }
            function pt(t) {
                return _t[t.getUTCDay()]
            }
            function ht(t) {
                return Tt[t.getUTCMonth()]
            }
            function bt(t) {
                return Mt[t.getUTCMonth()]
            }
            function vt(t) {
                return xt[+(t.getUTCHours() >= 12)]
            }
            var gt = t.dateTime,
                mt = t.date,
                yt = t.time,
                xt = t.periods,
                _t = t.days,
                wt = t.shortDays,
                Mt = t.months,
                Tt = t.shortMonths,
                Ot = f(xt),
                Dt = s(xt),
                kt = f(_t),
                St = s(_t),
                jt = f(wt),
                Nt = s(wt),
                At = f(Mt),
                Ct = s(Mt),
                It = f(Tt),
                Et = s(Tt),
                Ft = {
                    a: it,
                    A: ct,
                    b: ft,
                    B: st,
                    c: null,
                    d: O,
                    e: O,
                    H: D,
                    I: k,
                    j: S,
                    L: j,
                    m: N,
                    M: A,
                    p: lt,
                    S: C,
                    U: I,
                    w: E,
                    W: F,
                    x: null,
                    X: null,
                    y: Y,
                    Y: z,
                    Z: U,
                    "%": K
                },
                Yt = {
                    a: dt,
                    A: pt,
                    b: ht,
                    B: bt,
                    c: null,
                    d: P,
                    e: P,
                    H: H,
                    I: L,
                    j: W,
                    L: R,
                    m: $,
                    M: B,
                    p: vt,
                    S: X,
                    U: q,
                    w: G,
                    W: V,
                    x: null,
                    X: null,
                    y: Z,
                    Y: Q,
                    Z: J,
                    "%": K
                },
                zt = {
                    a: c,
                    A: tt,
                    b: nt,
                    B: rt,
                    c: at,
                    d: m,
                    e: m,
                    H: x,
                    I: x,
                    j: y,
                    L: M,
                    m: g,
                    M: _,
                    p: i,
                    S: w,
                    U: d,
                    w: l,
                    W: p,
                    x: ot,
                    X: ut,
                    y: b,
                    Y: h,
                    Z: v,
                    "%": T
                };
            return Ft.x = e(mt, Ft), Ft.X = e(yt, Ft), Ft.c = e(gt, Ft), Yt.x = e(mt, Yt), Yt.X = e(yt, Yt), Yt.c = e(gt, Yt), {
                format: function(t) {
                    var n = e(t += "", Ft);
                    return n.toString = function() {
                        return t
                    }, n
                },
                parse: function(t) {
                    var e = n(t += "", r);
                    return e.toString = function() {
                        return t
                    }, e
                },
                utcFormat: function(t) {
                    var n = e(t += "", Yt);
                    return n.toString = function() {
                        return t
                    }, n
                },
                utcParse: function(t) {
                    var e = n(t, a);
                    return e.toString = function() {
                        return t
                    }, e
                }
            }
        }
        function i(t, e, n) {
            var r = t < 0 ? "-" : "",
                a = (r ? -t : t) + "",
                o = a.length;
            return r + (o < n ? new Array(n - o + 1).join(e) + a : a)
        }
        function c(t) {
            return t.replace(at, "\\$&")
        }
        function f(t) {
            return new RegExp("^(?:" + t.map(c).join("|") + ")", "i")
        }
        function s(t) {
            for (var e = {}, n = -1, r = t.length; ++n < r;)
                e[t[n].toLowerCase()] = n;
            return e
        }
        function l(t, e, n) {
            var r = nt.exec(e.slice(n, n + 1));
            return r ? (t.w = +r[0], n + r[0].length) : -1
        }
        function d(t, e, n) {
            var r = nt.exec(e.slice(n));
            return r ? (t.U = +r[0], n + r[0].length) : -1
        }
        function p(t, e, n) {
            var r = nt.exec(e.slice(n));
            return r ? (t.W = +r[0], n + r[0].length) : -1
        }
        function h(t, e, n) {
            var r = nt.exec(e.slice(n, n + 4));
            return r ? (t.y = +r[0], n + r[0].length) : -1
        }
        function b(t, e, n) {
            var r = nt.exec(e.slice(n, n + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
        }
        function v(t, e, n) {
            var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(e.slice(n, n + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
        }
        function g(t, e, n) {
            var r = nt.exec(e.slice(n, n + 2));
            return r ? (t.m = r[0] - 1, n + r[0].length) : -1
        }
        function m(t, e, n) {
            var r = nt.exec(e.slice(n, n + 2));
            return r ? (t.d = +r[0], n + r[0].length) : -1
        }
        function y(t, e, n) {
            var r = nt.exec(e.slice(n, n + 3));
            return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
        }
        function x(t, e, n) {
            var r = nt.exec(e.slice(n, n + 2));
            return r ? (t.H = +r[0], n + r[0].length) : -1
        }
        function _(t, e, n) {
            var r = nt.exec(e.slice(n, n + 2));
            return r ? (t.M = +r[0], n + r[0].length) : -1
        }
        function w(t, e, n) {
            var r = nt.exec(e.slice(n, n + 2));
            return r ? (t.S = +r[0], n + r[0].length) : -1
        }
        function M(t, e, n) {
            var r = nt.exec(e.slice(n, n + 3));
            return r ? (t.L = +r[0], n + r[0].length) : -1
        }
        function T(t, e, n) {
            var r = rt.exec(e.slice(n, n + 1));
            return r ? n + r[0].length : -1
        }
        function O(t, e) {
            return i(t.getDate(), e, 2)
        }
        function D(t, e) {
            return i(t.getHours(), e, 2)
        }
        function k(t, e) {
            return i(t.getHours() % 12 || 12, e, 2)
        }
        function S(t, e) {
            return i(1 + tt.a.count(tt.j(t), t), e, 3)
        }
        function j(t, e) {
            return i(t.getMilliseconds(), e, 3)
        }
        function N(t, e) {
            return i(t.getMonth() + 1, e, 2)
        }
        function A(t, e) {
            return i(t.getMinutes(), e, 2)
        }
        function C(t, e) {
            return i(t.getSeconds(), e, 2)
        }
        function I(t, e) {
            return i(tt.h.count(tt.j(t), t), e, 2)
        }
        function E(t) {
            return t.getDay()
        }
        function F(t, e) {
            return i(tt.e.count(tt.j(t), t), e, 2)
        }
        function Y(t, e) {
            return i(t.getFullYear() % 100, e, 2)
        }
        function z(t, e) {
            return i(t.getFullYear() % 1e4, e, 4)
        }
        function U(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : (e *= -1, "+")) + i(e / 60 | 0, "0", 2) + i(e % 60, "0", 2)
        }
        function P(t, e) {
            return i(t.getUTCDate(), e, 2)
        }
        function H(t, e) {
            return i(t.getUTCHours(), e, 2)
        }
        function L(t, e) {
            return i(t.getUTCHours() % 12 || 12, e, 2)
        }
        function W(t, e) {
            return i(1 + tt.k.count(tt.t(t), t), e, 3)
        }
        function R(t, e) {
            return i(t.getUTCMilliseconds(), e, 3)
        }
        function $(t, e) {
            return i(t.getUTCMonth() + 1, e, 2)
        }
        function B(t, e) {
            return i(t.getUTCMinutes(), e, 2)
        }
        function X(t, e) {
            return i(t.getUTCSeconds(), e, 2)
        }
        function q(t, e) {
            return i(tt.r.count(tt.t(t), t), e, 2)
        }
        function G(t) {
            return t.getUTCDay()
        }
        function V(t, e) {
            return i(tt.o.count(tt.t(t), t), e, 2)
        }
        function Z(t, e) {
            return i(t.getUTCFullYear() % 100, e, 2)
        }
        function Q(t, e) {
            return i(t.getUTCFullYear() % 1e4, e, 4)
        }
        function J() {
            return "+0000"
        }
        function K() {
            return "%"
        }
        e.a = u;
        var tt = n(75),
            et = {
                "-": "",
                _: " ",
                0: "0"
            },
            nt = /^\s*\d+/,
            rt = /^%/,
            at = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t.toISOString()
        }
        n.d(e, "a", function() {
            return o
        });
        var a = n(76),
            o = "%Y-%m-%dT%H:%M:%S.%LZ";
        Date.prototype.toISOString || a.b(o)
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            i = n(2),
            c = n(468),
            f = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(c),
            s = function(t) {
                function e(t) {
                    r(this, e);
                    var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.hide = function() {
                        n.setVisibility(!1)
                    }, n.move = function(t) {
                        var e = n.el.getBoundingClientRect().left + document.documentElement.scrollLeft;
                        t.pageX > window.innerWidth - 220 && (e += 240);
                        var r = n.el.getBoundingClientRect().top + document.documentElement.scrollTop;
                        if (t.target) {
                            var a = t.target.getAttribute("data-tooltip");
                            if (null !== a) {
                                var o = a.split("|");
                                return void (o.every(function(t) {
                                    return "" !== t
                                }) && n.setVisibility(!0, o, t.pageX - e, t.pageY - r))
                            }
                        }
                        n.setVisibility(!1)
                    }, n.setVisibility = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = arguments[2],
                            a = arguments[3];
                        n.setState(Object.assign({}, n.state, {
                            visible: t,
                            content: e,
                            x: r,
                            y: a
                        }))
                    }, n.state = {
                        visible: !1
                    }, n
                }
                return o(e, t), u(e, [{
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = this.state,
                            r = this.hide,
                            a = this.move,
                            o = this.handleTouch;
                        return (0, i.h)("div", {
                            ref: function(e) {
                                t.el = e
                            },
                            onMouseLeave: r,
                            onMouseMove: a,
                            onTouchStart: o,
                            class: f.default.wrapper
                        }, e.children, n.visible && (0, i.h)("div", {
                            class: f.default.tooltip,
                            style: {
                                top: n.y,
                                left: n.x
                            }
                        }, (0, i.h)("div", {
                            class: f.default.content
                        }, n.content.map(function(t) {
                            return (0, i.h)("div", null, t)
                        }))))
                    }
                }]), e
            }(i.Component);
        e.default = s
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.contributors = e.compareMap = e.activity = e.overallStats = e.inlineStat = void 0;
        var a = n(178),
            o = r(a),
            u = n(282),
            i = r(u),
            c = n(283),
            f = r(c),
            s = n(473),
            l = r(s),
            d = n(474),
            p = r(d);
        e.inlineStat = i.default, e.overallStats = o.default, e.activity = f.default, e.compareMap = l.default, e.contributors = p.default
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function u(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function i(t, e) {
            return (0, s.mountComponent)(y, t, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        e.default = i;
        var f = n(2),
            s = n(18),
            l = n(7),
            d = r(l),
            p = n(31),
            h = r(p),
            b = n(179),
            v = r(b),
            g = n(79),
            m = r(g),
            y = function(t) {
                function e() {
                    return a(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return u(e, t), c(e, [{
                    key: "formatStats",
                    value: function() {
                        var t = this.props,
                            e = t.data;
                        return t.stats.map(function(t) {
                            var n = e[t.featureType],
                                r = "users" === t.stat ? Math.round(n.users_length) : Math.round(n.total_feature_value);
                            return isNaN(r) ? null : {
                                value: r,
                                unit: "buildings" === t.featureType || "users" === t.stat ? "contributors" : "km",
                                label: "users" === t.stat ? "" + t.featureType : t.featureType + " edited"
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.apiUrl,
                            n = t.data,
                            r = this.formatStats().filter(function(t) {
                                return !!t
                            });
                        return (0, f.h)("div", {
                            className: h.default
                        }, (0, f.h)("div", {
                            class: (0, d.default)(v.default.title, h.default.title)
                        }, "OSM Overall stats", void 0 !== e && (0, f.h)("a", {
                            target: "_blank",
                            className: h.default.download,
                            href: e
                        }, "Download data")), (0, f.h)(m.default, {
                            data: n
                        }), r.map(function(t) {
                            return (0, f.h)("div", {
                                className: v.default.overallStat
                            }, (0, f.h)("span", {
                                className: v.default.label
                            }, t.label), (0, f.h)("span", {
                                className: v.default.value
                            }, t.value), null !== t.unit && (0, f.h)("span", {
                                className: v.default.unit
                            }, t.unit))
                        }))
                    }
                }]), e
            }(f.Component)
    }, function(t, e) {
        t.exports = {
            overallStat: "overall-stats__overallStat___wkVDM",
            value: "overall-stats__value___2A-HM",
            unit: "overall-stats__unit___11TA_",
            label: "overall-stats__label___3cY92",
            title: "overall-stats__title___13bs0"
        }
    }, function(t, e, n) {
        t.exports = {
            addDays: n(19),
            addHours: n(80),
            addISOYears: n(81),
            addMilliseconds: n(20),
            addMinutes: n(83),
            addMonths: n(34),
            addQuarters: n(84),
            addSeconds: n(85),
            addWeeks: n(50),
            addYears: n(86),
            areRangesOverlapping: n(181),
            closestIndexTo: n(182),
            closestTo: n(183),
            compareAsc: n(22),
            compareDesc: n(51),
            differenceInCalendarDays: n(33),
            differenceInCalendarISOWeeks: n(184),
            differenceInCalendarISOYears: n(87),
            differenceInCalendarMonths: n(88),
            differenceInCalendarQuarters: n(185),
            differenceInCalendarWeeks: n(186),
            differenceInCalendarYears: n(90),
            differenceInDays: n(91),
            differenceInHours: n(187),
            differenceInISOYears: n(188),
            differenceInMilliseconds: n(35),
            differenceInMinutes: n(189),
            differenceInMonths: n(52),
            differenceInQuarters: n(190),
            differenceInSeconds: n(53),
            differenceInWeeks: n(191),
            differenceInYears: n(192),
            distanceInWords: n(93),
            distanceInWordsStrict: n(196),
            distanceInWordsToNow: n(197),
            eachDay: n(198),
            endOfDay: n(55),
            endOfHour: n(199),
            endOfISOWeek: n(200),
            endOfISOYear: n(201),
            endOfMinute: n(202),
            endOfMonth: n(95),
            endOfQuarter: n(203),
            endOfSecond: n(204),
            endOfToday: n(205),
            endOfTomorrow: n(206),
            endOfWeek: n(94),
            endOfYear: n(207),
            endOfYesterday: n(208),
            format: n(209),
            getDate: n(210),
            getDay: n(211),
            getDayOfYear: n(96),
            getDaysInMonth: n(49),
            getDaysInYear: n(212),
            getHours: n(213),
            getISODay: n(100),
            getISOWeek: n(56),
            getISOWeeksInYear: n(214),
            getISOYear: n(9),
            getMilliseconds: n(215),
            getMinutes: n(216),
            getMonth: n(217),
            getOverlappingDaysInRanges: n(218),
            getQuarter: n(89),
            getSeconds: n(219),
            getTime: n(220),
            getYear: n(221),
            isAfter: n(222),
            isBefore: n(223),
            isDate: n(48),
            isEqual: n(224),
            isFirstDayOfMonth: n(225),
            isFriday: n(226),
            isFuture: n(227),
            isLastDayOfMonth: n(228),
            isLeapYear: n(99),
            isMonday: n(229),
            isPast: n(230),
            isSameDay: n(231),
            isSameHour: n(101),
            isSameISOWeek: n(103),
            isSameISOYear: n(104),
            isSameMinute: n(105),
            isSameMonth: n(107),
            isSameQuarter: n(108),
            isSameSecond: n(110),
            isSameWeek: n(57),
            isSameYear: n(112),
            isSaturday: n(232),
            isSunday: n(233),
            isThisHour: n(234),
            isThisISOWeek: n(235),
            isThisISOYear: n(236),
            isThisMinute: n(237),
            isThisMonth: n(238),
            isThisQuarter: n(239),
            isThisSecond: n(240),
            isThisWeek: n(241),
            isThisYear: n(242),
            isThursday: n(243),
            isToday: n(244),
            isTomorrow: n(245),
            isTuesday: n(246),
            isValid: n(98),
            isWednesday: n(247),
            isWeekend: n(248),
            isWithinRange: n(249),
            isYesterday: n(250),
            lastDayOfISOWeek: n(251),
            lastDayOfISOYear: n(252),
            lastDayOfMonth: n(253),
            lastDayOfQuarter: n(254),
            lastDayOfWeek: n(113),
            lastDayOfYear: n(255),
            max: n(256),
            min: n(257),
            parse: n(0),
            setDate: n(258),
            setDay: n(259),
            setDayOfYear: n(260),
            setHours: n(261),
            setISODay: n(262),
            setISOWeek: n(263),
            setISOYear: n(82),
            setMilliseconds: n(264),
            setMinutes: n(265),
            setMonth: n(114),
            setQuarter: n(266),
            setSeconds: n(267),
            setYear: n(268),
            startOfDay: n(11),
            startOfHour: n(102),
            startOfISOWeek: n(10),
            startOfISOYear: n(21),
            startOfMinute: n(106),
            startOfMonth: n(269),
            startOfQuarter: n(109),
            startOfSecond: n(111),
            startOfToday: n(270),
            startOfTomorrow: n(271),
            startOfWeek: n(32),
            startOfYear: n(97),
            startOfYesterday: n(272),
            subDays: n(273),
            subHours: n(274),
            subISOYears: n(92),
            subMilliseconds: n(275),
            subMinutes: n(276),
            subMonths: n(277),
            subQuarters: n(278),
            subSeconds: n(279),
            subWeeks: n(280),
            subYears: n(281)
        }
    }, function(t, e, n) {
        function r(t, e, n, r) {
            var o = a(t).getTime(),
                u = a(e).getTime(),
                i = a(n).getTime(),
                c = a(r).getTime();
            if (o > u || i > c)
                throw new Error("The start of the range cannot be after the end of the range");
            return o < c && i < u
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            if (!(e instanceof Array))
                throw new TypeError(toString.call(e) + " is not an instance of Array");
            var n,
                r,
                o = a(t),
                u = o.getTime();
            return e.forEach(function(t, e) {
                var o = a(t),
                    i = Math.abs(u - o.getTime());
                (void 0 === n || i < r) && (n = e, r = i)
            }), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            if (!(e instanceof Array))
                throw new TypeError(toString.call(e) + " is not an instance of Array");
            var n,
                r,
                o = a(t),
                u = o.getTime();
            return e.forEach(function(t) {
                var e = a(t),
                    o = Math.abs(u - e.getTime());
                (void 0 === n || o < r) && (n = e, r = o)
            }), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                i = n.getTime() - n.getTimezoneOffset() * o,
                c = r.getTime() - r.getTimezoneOffset() * o;
            return Math.round((i - c) / u)
        }
        var a = n(10),
            o = 6e4,
            u = 6048e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = o(t),
                r = o(e);
            return 4 * (n.getFullYear() - r.getFullYear()) + (a(n) - a(r))
        }
        var a = n(89),
            o = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = a(t, n),
                i = a(e, n),
                c = r.getTime() - r.getTimezoneOffset() * o,
                f = i.getTime() - i.getTimezoneOffset() * o;
            return Math.round((c - f) / u)
        }
        var a = n(32),
            o = 6e4,
            u = 6048e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t, e) / o;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var a = n(35),
            o = 36e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                c = u(n, r),
                f = Math.abs(o(n, r));
            return n = i(n, c * f), c * (f - (u(n, r) === -c))
        }
        var a = n(0),
            o = n(87),
            u = n(22),
            i = n(92);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t, e) / o;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var a = n(35),
            o = 6e4;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t, e) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var a = n(52);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t, e) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var a = n(91);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                i = u(n, r),
                c = Math.abs(o(n, r));
            return n.setFullYear(n.getFullYear() - i * c), i * (c - (u(n, r) === -i))
        }
        var a = n(0),
            o = n(90),
            u = n(22);
        t.exports = r
    }, function(t, e) {
        function n() {
            function t(t, n, r) {
                r = r || {};
                var a;
                return a = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), r.addSuffix ? r.comparison > 0 ? "in " + a : a + " ago" : a
            }
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: t
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            var t = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                u = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                i = ["AM", "PM"],
                c = ["am", "pm"],
                f = ["a.m.", "p.m."],
                s = {
                    MMM: function(e) {
                        return t[e.getMonth()]
                    },
                    MMMM: function(t) {
                        return e[t.getMonth()]
                    },
                    dd: function(t) {
                        return n[t.getDay()]
                    },
                    ddd: function(t) {
                        return r[t.getDay()]
                    },
                    dddd: function(t) {
                        return u[t.getDay()]
                    },
                    A: function(t) {
                        return t.getHours() / 12 >= 1 ? i[1] : i[0]
                    },
                    a: function(t) {
                        return t.getHours() / 12 >= 1 ? c[1] : c[0]
                    },
                    aa: function(t) {
                        return t.getHours() / 12 >= 1 ? f[1] : f[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(t) {
                s[t + "o"] = function(e, n) {
                    return a(n[t](e))
                }
            }), {
                formatters: s,
                formattingTokensRegExp: o(s)
            }
        }
        function a(t) {
            var e = t % 100;
            if (e > 20 || e < 10)
                switch (e % 10) {
                case 1:
                    return t + "st";
                case 2:
                    return t + "nd";
                case 3:
                    return t + "rd"
                }
            return t + "th"
        }
        var o = n(195);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = [];
            for (var n in t)
                t.hasOwnProperty(n) && e.push(n);
            var a = r.concat(e).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + a.join("|") + "|.)", "g")
        }
        var r = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = n || {},
                l = a(t, e),
                d = r.locale,
                p = i.distanceInWords.localize;
            d && d.distanceInWords && d.distanceInWords.localize && (p = d.distanceInWords.localize);
            var h,
                b,
                v = {
                    addSuffix: Boolean(r.addSuffix),
                    comparison: l
                };
            l > 0 ? (h = o(t), b = o(e)) : (h = o(e), b = o(t));
            var g,
                m,
                y,
                x,
                _,
                w = Math[r.partialMethod ? String(r.partialMethod) : "floor"],
                M = u(b, h),
                T = b.getTimezoneOffset() - h.getTimezoneOffset(),
                O = w(M / 60) - T;
            if ("s" === (g = r.unit ? String(r.unit) : O < 1 ? "s" : O < 60 ? "m" : O < c ? "h" : O < f ? "d" : O < s ? "M" : "Y"))
                return p("xSeconds", M, v);
            if ("m" === g)
                return p("xMinutes", O, v);
            if ("h" === g)
                return m = w(O / 60), p("xHours", m, v);
            if ("d" === g)
                return y = w(O / c), p("xDays", y, v);
            if ("M" === g)
                return x = w(O / f), p("xMonths", x, v);
            if ("Y" === g)
                return _ = w(O / s), p("xYears", _, v);
            throw new Error("Unknown unit: " + g)
        }
        var a = n(51),
            o = n(0),
            u = n(53),
            i = n(54),
            c = 1440,
            f = 43200,
            s = 525600;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return a(Date.now(), t, e)
        }
        var a = n(93);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e),
                o = r.getTime();
            if (n.getTime() > o)
                throw new Error("The first date cannot be after the second date");
            var u = [],
                i = n;
            for (i.setHours(0, 0, 0, 0); i.getTime() <= o;)
                u.push(a(i)), i.setDate(i.getDate() + 1);
            return u
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setMinutes(59, 59, 999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t, {
                weekStartsOn: 1
            })
        }
        var a = n(94);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = new Date(0);
            n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var r = o(n);
            return r.setMilliseconds(r.getMilliseconds() - 1), r
        }
        var a = n(9),
            o = n(10);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setSeconds(59, 999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getMonth(),
                r = n - n % 3 + 3;
            return e.setMonth(r, 0), e.setHours(23, 59, 59, 999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setMilliseconds(999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            return a(new Date)
        }
        var a = n(55);
        t.exports = r
    }, function(t, e) {
        function n() {
            var t = new Date,
                e = t.getFullYear(),
                n = t.getMonth(),
                r = t.getDate(),
                a = new Date(0);
            return a.setFullYear(e, n, r + 1), a.setHours(23, 59, 59, 999), a
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getFullYear();
            return e.setFullYear(n + 1, 0, 0), e.setHours(23, 59, 59, 999), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e) {
        function n() {
            var t = new Date,
                e = t.getFullYear(),
                n = t.getMonth(),
                r = t.getDate(),
                a = new Date(0);
            return a.setFullYear(e, n, r - 1), a.setHours(23, 59, 59, 999), a
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = e ? String(e) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                o = n || {},
                u = o.locale,
                i = p.format.formatters,
                c = p.format.formattingTokensRegExp;
            u && u.format && u.format.formatters && (i = u.format.formatters, u.format.formattingTokensRegExp && (c = u.format.formattingTokensRegExp));
            var f = l(t);
            return d(f) ? a(r, i, c)(f) : "Invalid Date"
        }
        function a(t, e, n) {
            var r,
                a,
                u = t.match(n),
                i = u.length;
            for (r = 0; r < i; r++)
                a = e[u[r]] || h[u[r]], u[r] = a || o(u[r]);
            return function(t) {
                for (var e = "", n = 0; n < i; n++)
                    u[n] instanceof Function ? e += u[n](t, h) : e += u[n];
                return e
            }
        }
        function o(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|]$/g, "") : t.replace(/\\/g, "")
        }
        function u(t, e) {
            e = e || "";
            var n = t > 0 ? "-" : "+",
                r = Math.abs(t),
                a = Math.floor(r / 60),
                o = r % 60;
            return n + i(a, 2) + e + i(o, 2)
        }
        function i(t, e) {
            for (var n = Math.abs(t).toString(); n.length < e;)
                n = "0" + n;
            return n
        }
        var c = n(96),
            f = n(56),
            s = n(9),
            l = n(0),
            d = n(98),
            p = n(54),
            h = {
                M: function(t) {
                    return t.getMonth() + 1
                },
                MM: function(t) {
                    return i(t.getMonth() + 1, 2)
                },
                Q: function(t) {
                    return Math.ceil((t.getMonth() + 1) / 3)
                },
                D: function(t) {
                    return t.getDate()
                },
                DD: function(t) {
                    return i(t.getDate(), 2)
                },
                DDD: function(t) {
                    return c(t)
                },
                DDDD: function(t) {
                    return i(c(t), 3)
                },
                d: function(t) {
                    return t.getDay()
                },
                E: function(t) {
                    return t.getDay() || 7
                },
                W: function(t) {
                    return f(t)
                },
                WW: function(t) {
                    return i(f(t), 2)
                },
                YY: function(t) {
                    return i(t.getFullYear(), 4).substr(2)
                },
                YYYY: function(t) {
                    return i(t.getFullYear(), 4)
                },
                GG: function(t) {
                    return String(s(t)).substr(2)
                },
                GGGG: function(t) {
                    return s(t)
                },
                H: function(t) {
                    return t.getHours()
                },
                HH: function(t) {
                    return i(t.getHours(), 2)
                },
                h: function(t) {
                    var e = t.getHours();
                    return 0 === e ? 12 : e > 12 ? e % 12 : e
                },
                hh: function(t) {
                    return i(h.h(t), 2)
                },
                m: function(t) {
                    return t.getMinutes()
                },
                mm: function(t) {
                    return i(t.getMinutes(), 2)
                },
                s: function(t) {
                    return t.getSeconds()
                },
                ss: function(t) {
                    return i(t.getSeconds(), 2)
                },
                S: function(t) {
                    return Math.floor(t.getMilliseconds() / 100)
                },
                SS: function(t) {
                    return i(Math.floor(t.getMilliseconds() / 10), 2)
                },
                SSS: function(t) {
                    return i(t.getMilliseconds(), 3)
                },
                Z: function(t) {
                    return u(t.getTimezoneOffset(), ":")
                },
                ZZ: function(t) {
                    return u(t.getTimezoneOffset())
                },
                X: function(t) {
                    return Math.floor(t.getTime() / 1e3)
                },
                x: function(t) {
                    return t.getTime()
                }
            };
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getDate()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t) ? 366 : 365
        }
        var a = n(99);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getHours()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = a(o(e, 60)),
                r = n.valueOf() - e.valueOf();
            return Math.round(r / u)
        }
        var a = n(21),
            o = n(50),
            u = 6048e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getMilliseconds()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getMinutes()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getMonth()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r) {
            var u = a(t).getTime(),
                i = a(e).getTime(),
                c = a(n).getTime(),
                f = a(r).getTime();
            if (u > i || c > f)
                throw new Error("The start of the range cannot be after the end of the range");
            if (!(u < f && c < i))
                return 0;
            var s = c < u ? u : c,
                l = f > i ? i : f,
                d = l - s;
            return Math.ceil(d / o)
        }
        var a = n(0),
            o = 864e5;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getSeconds()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getFullYear()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() > r.getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() < r.getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 1 === a(t).getDate()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 5 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getTime() > (new Date).getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return o(e).getTime() === u(e).getTime()
        }
        var a = n(0),
            o = n(55),
            u = n(95);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 1 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getTime() < (new Date).getTime()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = a(e);
            return n.getTime() === r.getTime()
        }
        var a = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 6 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 0 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(101);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(103);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(104);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(105);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(107);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(108);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(110);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return a(new Date, t, e)
        }
        var a = n(57);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(new Date, t)
        }
        var a = n(112);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 4 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t).getTime() === a(new Date).getTime()
        }
        var a = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = new Date;
            return e.setDate(e.getDate() + 1), a(t).getTime() === a(e).getTime()
        }
        var a = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 2 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return 3 === a(t).getDay()
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getDay();
            return 0 === n || 6 === n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = a(t).getTime(),
                o = a(e).getTime(),
                u = a(n).getTime();
            if (o > u)
                throw new Error("The start of the range cannot be after the end of the range");
            return r >= o && r <= u
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = new Date;
            return e.setDate(e.getDate() - 1), a(t).getTime() === a(e).getTime()
        }
        var a = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t, {
                weekStartsOn: 1
            })
        }
        var a = n(113);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = new Date(0);
            n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var r = o(n);
            return r.setDate(r.getDate() - 1), r
        }
        var a = n(9),
            o = n(10);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getMonth();
            return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(0, 0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getMonth(),
                r = n - n % 3 + 3;
            return e.setMonth(r, 0), e.setHours(0, 0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = e.getFullYear();
            return e.setFullYear(n + 1, 0, 0), e.setHours(0, 0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            var t = Array.prototype.slice.call(arguments),
                e = t.map(function(t) {
                    return a(t)
                }),
                n = Math.max.apply(null, e);
            return new Date(n)
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            var t = Array.prototype.slice.call(arguments),
                e = t.map(function(t) {
                    return a(t)
                }),
                n = Math.min.apply(null, e);
            return new Date(n)
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setDate(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = n ? Number(n.weekStartsOn) || 0 : 0,
                u = a(t),
                i = Number(e),
                c = u.getDay();
            return o(u, ((i % 7 + 7) % 7 < r ? 7 : 0) + i - c)
        }
        var a = n(0),
            o = n(19);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setMonth(0), n.setDate(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setHours(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e),
                i = u(n);
            return o(n, r - i)
        }
        var a = n(0),
            o = n(19),
            u = n(100);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e),
                u = o(n) - r;
            return n.setDate(n.getDate() - 7 * u), n
        }
        var a = n(0),
            o = n(56);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setMilliseconds(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setMinutes(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e),
                u = Math.floor(n.getMonth() / 3) + 1,
                i = r - u;
            return o(n, n.getMonth() + 3 * i)
        }
        var a = n(0),
            o = n(114);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setSeconds(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(t),
                r = Number(e);
            return n.setFullYear(r), n
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(t);
            return e.setDate(1), e.setHours(0, 0, 0, 0), e
        }
        var a = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            return a(new Date)
        }
        var a = n(11);
        t.exports = r
    }, function(t, e) {
        function n() {
            var t = new Date,
                e = t.getFullYear(),
                n = t.getMonth(),
                r = t.getDate(),
                a = new Date(0);
            return a.setFullYear(e, n, r + 1), a.setHours(0, 0, 0, 0), a
        }
        t.exports = n
    }, function(t, e) {
        function n() {
            var t = new Date,
                e = t.getFullYear(),
                n = t.getMonth(),
                r = t.getDate(),
                a = new Date(0);
            return a.setFullYear(e, n, r - 1), a.setHours(0, 0, 0, 0), a
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(19);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(80);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(20);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(83);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(34);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(84);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(85);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(50);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = Number(e);
            return a(t, -n)
        }
        var a = n(86);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function u(t, e) {
            return (0, f.mountComponent)(s, t, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        e.default = u;
        var c = n(2),
            f = n(18),
            s = function(t) {
                function e() {
                    return r(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return o(e, t), i(e, [{
                    key: "formatStat",
                    value: function() {
                        var t = this.props,
                            e = t.data,
                            n = t.featureType,
                            r = t.stat,
                            a = e[n],
                            o = "users" === r ? a.users_length : a.total_feature_value;
                        return Math.round(o)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.formatStat();
                        return (0, c.h)("span", null, t)
                    }
                }]), e
            }(c.Component)
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function c(t, e) {
            return (0, C.mountComponent)(G, t, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            s = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var u, i = t[Symbol.iterator](); !(r = (u = i.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0)
                            ;
                    } catch (t) {
                        a = !0, o = t
                    } finally {
                        try {
                            !r && i.return && i.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();
        e.default = c;
        var d = n(2),
            p = n(7),
            h = r(p),
            b = n(115),
            v = n(284),
            g = r(v),
            m = n(358),
            y = r(m),
            x = n(360),
            _ = r(x),
            w = n(137),
            M = r(w),
            T = n(362),
            O = r(T),
            D = n(366),
            k = r(D),
            S = n(372),
            j = r(S),
            N = n(374),
            A = r(N),
            C = n(18),
            I = n(44),
            E = n(387),
            F = r(E),
            Y = n(389),
            z = r(Y),
            U = n(391),
            P = r(U),
            H = n(78),
            L = r(H),
            W = n(31),
            R = r(W),
            $ = n(472),
            B = r($),
            X = n(176),
            q = r(X),
            G = function(t) {
                function e(t) {
                    o(this, e);
                    var n = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.updateFacet = n.updateFacet.bind(n), n.updateGranularity = n.updateGranularity.bind(n), n.state = n.formatState(t), n
                }
                return i(e, t), l(e, [{
                    key: "formatState",
                    value: function(t) {
                        return {
                            granularity: t.granularity && (0, A.default)(t.granularity) || I.GRANULARITIES.Daily,
                            facet: 13 === t.precision && t.facet && (0, A.default)(t.facet) || I.FACETS.Features,
                            data: t.data,
                            precision: t.precision || 13,
                            range: t.range || [new Date, new Date]
                        }
                    }
                }, {
                    key: "getFacets",
                    value: function() {
                        return 13 !== parseInt(this.props.precision) ? {} : I.FACETS
                    }
                }, {
                    key: "parseDate",
                    value: function(t) {
                        var e = new Date(t),
                            n = e.getDate() - 1,
                            r = e.getMonth(),
                            a = e.getFullYear();
                        return {
                            day: n,
                            month: r,
                            year: a,
                            len: (0, C.monthLength)(r, a)
                        }
                    }
                }, {
                    key: "formatData",
                    value: function(t, e, n) {
                        var r = this,
                            a = this.state.range,
                            o = new Date(0).getTime(),
                            u = (new Date).getTime(),
                            i = (0, C.toTime)(a[0]),
                            c = (0, C.toTime)(a[1]),
                            f = i > 0 ? Math.min(i, c) : o,
                            s = c > 0 ? Math.max(i, c) : u,
                            l = t.sort(function(t, e) {
                                return t.day - e.day
                            }).filter(function(t) {
                                return t && t.day >= f && t.day < s
                            }),
                            d = function(t) {
                                return Boolean(Math.abs(e(t)))
                            },
                            p = l.length ? l.filter(d) : [],
                            h = p.length ? e((0, g.default)(p, e)) : 0,
                            b = p.length ? e((0, y.default)(p, e)) : 0;
                        return [l.reduce(function(t, e) {
                            var a = r.parseDate(e.day),
                                o = a.day,
                                u = a.month,
                                i = a.year,
                                c = a.len;
                            return t[i] = t[i] ? t[i] : new Array(12), t[i][u] = t[i][u] || new Array(c).fill({
                                aggr: 0,
                                rawDict: {}
                            }, 0, c), t[i][u].forEach(function(r, a) {
                                a + 1 === o && (t[i][u][a] = n(e))
                            }), t
                        }, {}), [b, h]]
                    }
                }, {
                    key: "stdDeviation",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t) {
                                return t
                            },
                            r = t.map(function(t) {
                                return Math.pow(n(t) - e, 2)
                            });
                        return Math.sqrt((0, _.default)(r))
                    }
                }, {
                    key: "aggregateFeatures",
                    value: function(t, e, n, r) {
                        var o = this,
                            u = function(t) {
                                return t[n]
                            },
                            i = function(t) {
                                return t[e]
                            },
                            c = (0, k.default)(t, function(t, e, r) {
                                var c = i(e) && i(e) || [],
                                    f = (0, M.default)(i(e), u),
                                    s = o.stdDeviation(c, f, u) || 1;
                                return t[r] = c.map(function(t) {
                                    return a({
                                        day: t.day
                                    }, n, {
                                        aggr: (u(t) - f) / s,
                                        raw: u(t)
                                    })
                                }), t
                            }, {}),
                            f = (0, k.default)(c, function(t, e, r) {
                                return e.forEach(function(e) {
                                    var a = e.day;
                                    t[a] = {
                                        sum: t[a] ? t[a].sum + e[n].aggr : e[n].aggr,
                                        count: t[a] ? t[a].count + 1 : 1,
                                        rawSum: t[a] ? t[a].rawSum + e[n].raw : e[n].raw,
                                        rawDict: t[a] ? t[a].rawDict : {}
                                    }, t[a].rawDict[r] = e[n].raw
                                }), t
                            }, {});
                        return Object.keys(f).forEach(function(t) {
                            f[t].aggr = f[t].sum
                        }), (0, j.default)(f, function(t, e) {
                            return a({
                                day: Number(e)
                            }, n, {
                                aggr: t[r],
                                rawDict: t.rawDict
                            })
                        })
                    }
                }, {
                    key: "filterValidFeatureTypes",
                    value: function(t) {
                        var e = {};
                        return Object.keys(t).forEach(function(n) {
                            I.VALID_FEATURE_TYPES.indexOf(n) > -1 && (e[n] = t[n])
                        }), e
                    }
                }, {
                    key: "getFeatures",
                    value: function() {
                        var t = "count_features",
                            e = function(e) {
                                return e[t].aggr
                            },
                            n = function(e) {
                                return e[t]
                            };
                        return this.formatData(this.aggregateFeatures(this.filterValidFeatureTypes(this.state.data), "activity_count", t, "aggr"), e, n)
                    }
                }, {
                    key: "getUsers",
                    value: function(t) {
                        var e = "count_users",
                            n = function(t) {
                                return t[e].aggr
                            },
                            r = function(t) {
                                return t[e]
                            };
                        return this.formatData(this.aggregateFeatures(this.filterValidFeatureTypes(this.state.data), "activity_users", e, "rawSum"), n, r)
                    }
                }, {
                    key: "groupBy",
                    value: function(t, e) {
                        return (0, k.default)(t, function(t, n, r) {
                            return t[r] = t[r] || n.map(e), t
                        }, {})
                    }
                }, {
                    key: "getGroupedItem",
                    value: function(t) {
                        var e = {
                            aggr: (0, M.default)(t, function(t) {
                                return t.aggr
                            }),
                            rawDict: {}
                        };
                        return I.VALID_FEATURE_TYPES.forEach(function(n) {
                            var r = (0, M.default)(t, function(t) {
                                return t.rawDict[n] ? t.rawDict[n] : 0
                            });
                            if (r > 0) {
                                var a = Math.round(r);
                                e.rawDict[n] = 0 === a ? "<1" : a
                            }
                        }), e
                    }
                }, {
                    key: "groupByWeek",
                    value: function(t) {
                        var e = this,
                            n = s(t, 2),
                            r = n[0],
                            a = n[1];
                        return [this.groupBy(r, function(t) {
                            return (0, O.default)(t, 7).map(e.getGroupedItem)
                        }), a]
                    }
                }, {
                    key: "groupByMonth",
                    value: function(t) {
                        var e = this,
                            n = s(t, 2),
                            r = n[0],
                            a = n[1];
                        return [this.groupBy(r, function(t) {
                            return [e.getGroupedItem(t)]
                        }), a]
                    }
                }, {
                    key: "updateGranularity",
                    value: function(t) {
                        this.setState(f({}, this.state, {
                            granularity: t
                        }))
                    }
                }, {
                    key: "updateFacet",
                    value: function(t) {
                        this.setState(f({}, this.state, {
                            facet: t
                        }))
                    }
                }, {
                    key: "getData",
                    value: function() {
                        var t = this.state,
                            e = t.facet,
                            n = t.granularity,
                            r = I.FACETS[e],
                            a = this["get" + r]();
                        switch (n) {
                        case I.GRANULARITIES.Weekly:
                            return this.groupByWeek(a);
                        case I.GRANULARITIES.Monthly:
                            return this.groupByMonth(a)
                        }
                        return a
                    }
                }, {
                    key: "renderYAxisLegend",
                    value: function(t) {
                        return t === I.FACETS.Features ? (0, d.h)("div", {
                            className: B.default.axisHelp
                        }, (0, d.h)(q.default, null, (0, d.h)("span", {
                            "data-tooltip": "Index of normalized OSM activity that includes edits of different types of map features. For more information click '+info'"
                        }, "Normalized OSM activity")), (0, d.h)("a", {
                            target: "_blank",
                            href: I.ACTIVITY_HELP_URL
                        }, "+info")) : t === I.FACETS.Users ? (0, d.h)("div", {
                            className: B.default.axisHelp
                        }, (0, d.h)(q.default, null, (0, d.h)("span", {
                            "data-tooltip": "Average number of active users per time period"
                        }, "Active users"))) : void 0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = (0, b.stripUnit)(L.default.monthMargin),
                            e = this.state,
                            n = e.facet,
                            r = e.granularity,
                            a = this.getData(),
                            o = s(a, 2),
                            u = o[0],
                            i = s(o[1], 2),
                            c = i[0],
                            l = i[1];
                        return (0, d.h)("div", {
                            class: (0, h.default)(B.default.activity)
                        }, (0, d.h)("div", {
                            class: R.default.heading
                        }, (0, d.h)("div", {
                            class: R.default.title
                        }, "OSM", " ", (0, d.h)(z.default, f({
                            className: B.default.dropdown,
                            onSelect: this.updateGranularity
                        }, {
                            options: I.GRANULARITIES,
                            selected: r
                        })), " ", "activity", void 0 !== this.props.apiUrl && (0, d.h)("a", {
                            target: "_blank",
                            className: R.default.download,
                            href: this.props.apiUrl
                        }, "Download data")), (0, d.h)(F.default, f({
                            className: B.default.tabs,
                            onClick: this.updateFacet
                        }, {
                            tabs: this.getFacets(),
                            selected: n
                        }))), void 0 !== this.state.data.country_name && (0, d.h)("div", {
                            class: R.default.subtitle
                        }, "Area: ", this.state.data.country_name), (0, d.h)("div", {
                            className: B.default.axis
                        }), this.renderYAxisLegend(n), (0, d.h)(P.default, f({
                            className: B.default.histogram
                        }, {
                            data: u,
                            min: c,
                            max: l,
                            margin: t,
                            facet: n
                        })))
                    }
                }]), e
            }(d.Component)
    }, function(t, e, n) {
        function r(t, e) {
            return t && t.length ? a(t, u(e, 2), o) : void 0
        }
        var a = n(58),
            o = n(117),
            u = n(24);
        t.exports = r
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = u.call(t, c),
                n = t[c];
            try {
                t[c] = void 0;
                var r = !0
            } catch (t) {}
            var a = i.call(t);
            return r && (e ? t[c] = n : delete t[c]), a
        }
        var a = n(36),
            o = Object.prototype,
            u = o.hasOwnProperty,
            i = o.toString,
            c = a ? a.toStringTag : void 0;
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return a.call(t)
        }
        var r = Object.prototype,
            a = r.toString;
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = o(t);
            return 1 == e.length && e[0][2] ? u(e[0][0], e[0][1]) : function(n) {
                return n === t || a(n, t, e)
            }
        }
        var a = n(289),
            o = n(347),
            u = n(130);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r) {
            var c = n.length,
                f = c,
                s = !r;
            if (null == t)
                return !f;
            for (t = Object(t); c--;) {
                var l = n[c];
                if (s && l[2] ? l[1] !== t[l[0]] : !(l[0] in t))
                    return !1
            }
            for (; ++c < f;) {
                l = n[c];
                var d = l[0],
                    p = t[d],
                    h = l[1];
                if (s && l[2]) {
                    if (void 0 === p && !(d in t))
                        return !1
                } else {
                    var b = new a;
                    if (r)
                        var v = r(p, h, d, t, e, b);
                    if (!(void 0 === v ? o(h, p, u | i, r, b) : v))
                        return !1
                }
            }
            return !0
        }
        var a = n(118),
            o = n(121),
            u = 1,
            i = 2;
        t.exports = r
    }, function(t, e) {
        function n() {
            this.__data__ = [], this.size = 0
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__,
                n = a(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : u.call(e, n, 1), --this.size, !0)
        }
        var a = n(38),
            o = Array.prototype,
            u = o.splice;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__,
                n = a(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
        var a = n(38);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(this.__data__, t) > -1
        }
        var a = n(38);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = this.__data__,
                r = a(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
        }
        var a = n(38);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            this.__data__ = new a, this.size = 0
        }
        var a = n(37);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = this.__data__,
                n = e.delete(t);
            return this.size = e.size, n
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return this.__data__.get(t)
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return this.__data__.has(t)
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var n = this.__data__;
            if (n instanceof a) {
                var r = n.__data__;
                if (!o || r.length < i - 1)
                    return r.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new u(r)
            }
            return n.set(t, e), this.size = n.size, this
        }
        var a = n(37),
            o = n(60),
            u = n(61),
            i = 200;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return !(!u(t) || o(t)) && (a(t) ? h : f).test(i(t))
        }
        var a = n(119),
            o = n(301),
            u = n(16),
            i = n(120),
            c = /[\\^$.*+?()[\]{}|]/g,
            f = /^\[object .+?Constructor\]$/,
            s = Function.prototype,
            l = Object.prototype,
            d = s.toString,
            p = l.hasOwnProperty,
            h = RegExp("^" + d.call(p).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return !!o && o in t
        }
        var a = n(302),
            o = function() {
                var t = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }();
        t.exports = r
    }, function(t, e, n) {
        var r = n(4),
            a = r["__core-js_shared__"];
        t.exports = a
    }, function(t, e) {
        function n(t, e) {
            return null == t ? void 0 : t[e]
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            this.size = 0, this.__data__ = {
                hash: new a,
                map: new (u || o),
                string: new a
            }
        }
        var a = n(305),
            o = n(37),
            u = n(60);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        var a = n(306),
            o = n(307),
            u = n(308),
            i = n(309),
            c = n(310);
        r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = u, r.prototype.has = i, r.prototype.set = c, t.exports = r
    }, function(t, e, n) {
        function r() {
            this.__data__ = a ? a(null) : {}, this.size = 0
        }
        var a = n(39);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__;
            if (a) {
                var n = e[t];
                return n === o ? void 0 : n
            }
            return i.call(e, t) ? e[t] : void 0
        }
        var a = n(39),
            o = "__lodash_hash_undefined__",
            u = Object.prototype,
            i = u.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__;
            return a ? void 0 !== e[t] : u.call(e, t)
        }
        var a = n(39),
            o = Object.prototype,
            u = o.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = a && void 0 === e ? o : e, this
        }
        var a = n(39),
            o = "__lodash_hash_undefined__";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = a(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
        var a = n(40);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            return a(this, t).get(t)
        }
        var a = n(40);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(this, t).has(t)
        }
        var a = n(40);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = a(this, t),
                r = n.size;
            return n.set(t, e), this.size += n.size == r ? 0 : 1, this
        }
        var a = n(40);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r, v, m) {
            var y = f(t),
                x = f(e),
                _ = y ? h : c(t),
                w = x ? h : c(e);
            _ = _ == p ? b : _, w = w == p ? b : w;
            var M = _ == b,
                T = w == b,
                O = _ == w;
            if (O && s(t)) {
                if (!s(e))
                    return !1;
                y = !0, M = !1
            }
            if (O && !M)
                return m || (m = new a), y || l(t) ? o(t, e, n, r, v, m) : u(t, e, _, n, r, v, m);
            if (!(n & d)) {
                var D = M && g.call(t, "__wrapped__"),
                    k = T && g.call(e, "__wrapped__");
                if (D || k) {
                    var S = D ? t.value() : t,
                        j = k ? e.value() : e;
                    return m || (m = new a), v(S, j, n, r, m)
                }
            }
            return !!O && (m || (m = new a), i(t, e, n, r, v, m))
        }
        var a = n(118),
            o = n(122),
            u = n(322),
            i = n(326),
            c = n(342),
            f = n(3),
            s = n(124),
            l = n(126),
            d = 1,
            p = "[object Arguments]",
            h = "[object Array]",
            b = "[object Object]",
            v = Object.prototype,
            g = v.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new a; ++e < n;)
                this.add(t[e])
        }
        var a = n(61),
            o = n(318),
            u = n(319);
        r.prototype.add = r.prototype.push = o, r.prototype.has = u, t.exports = r
    }, function(t, e) {
        function n(t) {
            return this.__data__.set(t, r), this
        }
        var r = "__lodash_hash_undefined__";
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return this.__data__.has(t)
        }
        t.exports = n
    }, function(t, e) {
        function n(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                if (e(t[n], n, t))
                    return !0;
            return !1
        }
        t.exports = n
    }, function(t, e) {
        function n(t, e) {
            return t.has(e)
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n, r, a, M, O) {
            switch (n) {
            case w:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                    return !1;
                t = t.buffer, e = e.buffer;
            case _:
                return !(t.byteLength != e.byteLength || !M(new o(t), new o(e)));
            case d:
            case p:
            case v:
                return u(+t, +e);
            case h:
                return t.name == e.name && t.message == e.message;
            case g:
            case y:
                return t == e + "";
            case b:
                var D = c;
            case m:
                var k = r & s;
                if (D || (D = f), t.size != e.size && !k)
                    return !1;
                var S = O.get(t);
                if (S)
                    return S == e;
                r |= l, O.set(t, e);
                var j = i(D(t), D(e), r, a, M, O);
                return O.delete(t), j;
            case x:
                if (T)
                    return T.call(t) == T.call(e)
            }
            return !1
        }
        var a = n(36),
            o = n(323),
            u = n(59),
            i = n(122),
            c = n(324),
            f = n(325),
            s = 1,
            l = 2,
            d = "[object Boolean]",
            p = "[object Date]",
            h = "[object Error]",
            b = "[object Map]",
            v = "[object Number]",
            g = "[object RegExp]",
            m = "[object Set]",
            y = "[object String]",
            x = "[object Symbol]",
            _ = "[object ArrayBuffer]",
            w = "[object DataView]",
            M = a ? a.prototype : void 0,
            T = M ? M.valueOf : void 0;
        t.exports = r
    }, function(t, e, n) {
        var r = n(4),
            a = r.Uint8Array;
        t.exports = a
    }, function(t, e) {
        function n(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach(function(t, r) {
                n[++e] = [r, t]
            }), n
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach(function(t) {
                n[++e] = t
            }), n
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n, r, u, c) {
            var f = n & o,
                s = a(t),
                l = s.length;
            if (l != a(e).length && !f)
                return !1;
            for (var d = l; d--;) {
                var p = s[d];
                if (!(f ? p in e : i.call(e, p)))
                    return !1
            }
            var h = c.get(t);
            if (h && c.get(e))
                return h == e;
            var b = !0;
            c.set(t, e), c.set(e, t);
            for (var v = f; ++d < l;) {
                p = s[d];
                var g = t[p],
                    m = e[p];
                if (r)
                    var y = f ? r(m, g, p, e, t, c) : r(g, m, p, t, e, c);
                if (!(void 0 === y ? g === m || u(g, m, n, r, c) : y)) {
                    b = !1;
                    break
                }
                v || (v = "constructor" == p)
            }
            if (b && !v) {
                var x = t.constructor,
                    _ = e.constructor;
                x != _ && "constructor" in t && "constructor" in e && !("function" == typeof x && x instanceof x && "function" == typeof _ && _ instanceof _) && (b = !1)
            }
            return c.delete(t), c.delete(e), b
        }
        var a = n(327),
            o = 1,
            u = Object.prototype,
            i = u.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return a(t, u, o)
        }
        var a = n(328),
            o = n(330),
            u = n(62);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = e(t);
            return o(t) ? r : a(r, n(t))
        }
        var a = n(329),
            o = n(3);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            for (var n = -1, r = e.length, a = t.length; ++n < r;)
                t[a + n] = e[n];
            return t
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(331),
            a = n(332),
            o = Object.prototype,
            u = o.propertyIsEnumerable,
            i = Object.getOwnPropertySymbols,
            c = i ? function(t) {
                return null == t ? [] : (t = Object(t), r(i(t), function(e) {
                    return u.call(t, e)
                }))
            } : a;
        t.exports = c
    }, function(t, e) {
        function n(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, a = 0, o = []; ++n < r;) {
                var u = t[n];
                e(u, n, t) && (o[a++] = u)
            }
            return o
        }
        t.exports = n
    }, function(t, e) {
        function n() {
            return []
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var n = u(t),
                r = !n && o(t),
                s = !n && !r && i(t),
                d = !n && !r && !s && f(t),
                p = n || r || s || d,
                h = p ? a(t.length, String) : [],
                b = h.length;
            for (var v in t)
                !e && !l.call(t, v) || p && ("length" == v || s && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || c(v, b)) || h.push(v);
            return h
        }
        var a = n(334),
            o = n(123),
            u = n(3),
            i = n(124),
            c = n(63),
            f = n(126),
            s = Object.prototype,
            l = s.hasOwnProperty;
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            for (var n = -1, r = Array(t); ++n < t;)
                r[n] = e(n);
            return r
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            return o(t) && a(t) == u
        }
        var a = n(13),
            o = n(14),
            u = "[object Arguments]";
        t.exports = r
    }, function(t, e) {
        function n() {
            return !1
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            return u(t) && o(t.length) && !!i[a(t)]
        }
        var a = n(13),
            o = n(64),
            u = n(14),
            i = {};
        i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (!a(t))
                return o(t);
            var e = [];
            for (var n in Object(t))
                i.call(t, n) && "constructor" != n && e.push(n);
            return e
        }
        var a = n(339),
            o = n(340),
            u = Object.prototype,
            i = u.hasOwnProperty;
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || r)
        }
        var r = Object.prototype;
        t.exports = n
    }, function(t, e, n) {
        var r = n(341),
            a = r(Object.keys, Object);
        t.exports = a
    }, function(t, e) {
        function n(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(343),
            a = n(60),
            o = n(344),
            u = n(345),
            i = n(346),
            c = n(13),
            f = n(120),
            s = f(r),
            l = f(a),
            d = f(o),
            p = f(u),
            h = f(i),
            b = c;
        (r && "[object DataView]" != b(new r(new ArrayBuffer(1))) || a && "[object Map]" != b(new a) || o && "[object Promise]" != b(o.resolve()) || u && "[object Set]" != b(new u) || i && "[object WeakMap]" != b(new i)) && (b = function(t) {
            var e = c(t),
                n = "[object Object]" == e ? t.constructor : void 0,
                r = n ? f(n) : "";
            if (r)
                switch (r) {
                case s:
                    return "[object DataView]";
                case l:
                    return "[object Map]";
                case d:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
                }
            return e
        }), t.exports = b
    }, function(t, e, n) {
        var r = n(15),
            a = n(4),
            o = r(a, "DataView");
        t.exports = o
    }, function(t, e, n) {
        var r = n(15),
            a = n(4),
            o = r(a, "Promise");
        t.exports = o
    }, function(t, e, n) {
        var r = n(15),
            a = n(4),
            o = r(a, "Set");
        t.exports = o
    }, function(t, e, n) {
        var r = n(15),
            a = n(4),
            o = r(a, "WeakMap");
        t.exports = o
    }, function(t, e, n) {
        function r(t) {
            for (var e = o(t), n = e.length; n--;) {
                var r = e[n],
                    u = t[r];
                e[n] = [r, u, a(u)]
            }
            return e
        }
        var a = n(129),
            o = n(62);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return i(t) && c(e) ? f(s(t), e) : function(n) {
                var r = o(n, t);
                return void 0 === r && r === e ? u(n, t) : a(e, r, l | d)
            }
        }
        var a = n(121),
            o = n(349),
            u = n(353),
            i = n(65),
            c = n(129),
            f = n(130),
            s = n(42),
            l = 1,
            d = 2;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = null == t ? void 0 : a(t, e);
            return void 0 === r ? n : r
        }
        var a = n(131);
        t.exports = r
    }, function(t, e, n) {
        var r = n(351),
            a = /^\./,
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            u = /\\(\\)?/g,
            i = r(function(t) {
                var e = [];
                return a.test(t) && e.push(""), t.replace(o, function(t, n, r, a) {
                    e.push(r ? a.replace(u, "$1") : n || t)
                }), e
            });
        t.exports = i
    }, function(t, e, n) {
        function r(t) {
            var e = a(t, function(t) {
                    return n.size === o && n.clear(), t
                }),
                n = e.cache;
            return e
        }
        var a = n(352),
            o = 500;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e)
                throw new TypeError(o);
            var n = function() {
                var r = arguments,
                    a = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(a))
                    return o.get(a);
                var u = t.apply(this, r);
                return n.cache = o.set(a, u) || o, u
            };
            return n.cache = new (r.Cache || a), n
        }
        var a = n(61),
            o = "Expected a function";
        r.Cache = a, t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return null != t && o(t, e, a)
        }
        var a = n(354),
            o = n(355);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return null != t && e in Object(t)
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            e = a(e, t);
            for (var r = -1, s = e.length, l = !1; ++r < s;) {
                var d = f(e[r]);
                if (!(l = null != t && n(t, d)))
                    break;
                t = t[d]
            }
            return l || ++r != s ? l : !!(s = null == t ? 0 : t.length) && c(s) && i(d, s) && (u(t) || o(t))
        }
        var a = n(132),
            o = n(123),
            u = n(3),
            i = n(63),
            c = n(64),
            f = n(42);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return u(t) ? a(i(t)) : o(t)
        }
        var a = n(135),
            o = n(357),
            u = n(65),
            i = n(42);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                return a(e, t)
            }
        }
        var a = n(131);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return t && t.length ? a(t, o(e, 2), u) : void 0
        }
        var a = n(58),
            o = n(24),
            u = n(359);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return t < e
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            return a(t, o)
        }
        var a = n(136),
            o = n(66);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            for (var n, r = -1, a = t.length; ++r < a;) {
                var o = e(t[r]);
                void 0 !== o && (n = void 0 === n ? o : n + o)
            }
            return n
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            e = (n ? o(t, e, n) : void 0 === e) ? 1 : c(u(e), 0);
            var r = null == t ? 0 : t.length;
            if (!r || e < 1)
                return [];
            for (var f = 0, s = 0, l = Array(i(r / e)); f < r;)
                l[s++] = a(t, f, f += e);
            return l
        }
        var a = n(138),
            o = n(363),
            u = n(139),
            i = Math.ceil,
            c = Math.max;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            if (!i(n))
                return !1;
            var r = typeof e;
            return !!("number" == r ? o(n) && u(e, n.length) : "string" == r && e in n) && a(n[e], t)
        }
        var a = n(59),
            o = n(41),
            u = n(63),
            i = n(16);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (!t)
                return 0 === t ? t : 0;
            if ((t = a(t)) === o || t === -o) {
                return (t < 0 ? -1 : 1) * u
            }
            return t === t ? t : 0
        }
        var a = n(365),
            o = 1 / 0,
            u = 1.7976931348623157e308;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if ("number" == typeof t)
                return t;
            if (o(t))
                return u;
            if (a(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = a(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(i, "");
            var n = f.test(t);
            return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : c.test(t) ? u : +t
        }
        var a = n(16),
            o = n(23),
            u = NaN,
            i = /^\s+|\s+$/g,
            c = /^[-+]0x[0-9a-f]+$/i,
            f = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            l = parseInt;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = c(t) ? a : i,
                f = arguments.length < 3;
            return r(t, u(e, 4), n, f, o)
        }
        var a = n(140),
            o = n(141),
            u = n(24),
            i = n(371),
            c = n(3);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return t && a(t, e, o)
        }
        var a = n(368),
            o = n(62);
        t.exports = r
    }, function(t, e, n) {
        var r = n(369),
            a = r();
        t.exports = a
    }, function(t, e) {
        function n(t) {
            return function(e, n, r) {
                for (var a = -1, o = Object(e), u = r(e), i = u.length; i--;) {
                    var c = u[t ? i : ++a];
                    if (!1 === n(o[c], c, o))
                        break
                }
                return e
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            return function(n, r) {
                if (null == n)
                    return n;
                if (!a(n))
                    return t(n, r);
                for (var o = n.length, u = e ? o : -1, i = Object(n); (e ? u-- : ++u < o) && !1 !== r(i[u], u, i);)
                    ;
                return n
            }
        }
        var a = n(41);
        t.exports = r
    }, function(t, e) {
        function n(t, e, n, r, a) {
            return a(t, function(t, a, o) {
                n = r ? (r = !1, t) : e(n, t, a, o)
            }), n
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            return (i(t) ? a : u)(t, o(e, 3))
        }
        var a = n(134),
            o = n(24),
            u = n(373),
            i = n(3);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = -1,
                r = o(t) ? Array(t.length) : [];
            return a(t, function(t, a, o) {
                r[++n] = e(t, a, o)
            }), r
        }
        var a = n(141),
            o = n(41);
        t.exports = r
    }, function(t, e, n) {
        var r = n(375),
            a = n(383),
            o = r(function(t, e, n) {
                return t + (n ? " " : "") + a(e)
            });
        t.exports = o
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                return a(u(o(e).replace(i, "")), t, "")
            }
        }
        var a = n(140),
            o = n(376),
            u = n(379),
            i = RegExp("['’]", "g");
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return (t = o(t)) && t.replace(u, a).replace(i, "")
        }
        var a = n(377),
            o = n(25),
            u = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            i = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
        t.exports = r
    }, function(t, e, n) {
        var r = n(378),
            a = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            },
            o = r(a);
        t.exports = o
    }, function(t, e) {
        function n(t) {
            return function(e) {
                return null == t ? void 0 : t[e]
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            return t = u(t), e = n ? void 0 : e, void 0 === e ? o(t) ? i(t) : a(t) : t.match(e) || []
        }
        var a = n(380),
            o = n(381),
            u = n(25),
            i = n(382);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return t.match(r) || []
        }
        var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return r.test(t)
        }
        var r = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return t.match(b) || []
        }
        var r = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            a = "[" + r + "]",
            o = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
            u = "[^\\ud800-\\udfff" + r + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
            i = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            f = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
            s = "(?:" + o + "|" + u + ")",
            l = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            d = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", i, c].join("|") + ")[\\ufe0e\\ufe0f]?" + l + ")*",
            p = "[\\ufe0e\\ufe0f]?" + l + d,
            h = "(?:" + ["[\\u2700-\\u27bf]", i, c].join("|") + ")" + p,
            b = RegExp([f + "?" + o + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [a, f, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [a, f + s, "$"].join("|") + ")", f + "?" + s + "+(?:['’](?:d|ll|m|re|s|t|ve))?", f + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", "\\d+", h].join("|"), "g");
        t.exports = n
    }, function(t, e, n) {
        var r = n(384),
            a = r("toUpperCase");
        t.exports = a
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                e = i(e);
                var n = o(e) ? u(e) : void 0,
                    r = n ? n[0] : e.charAt(0),
                    c = n ? a(n, 1).join("") : e.slice(1);
                return r[t]() + c
            }
        }
        var a = n(142),
            o = n(43),
            u = n(143),
            i = n(25);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return t.split("")
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return t.match(l) || []
        }
        var r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            a = "\\ud83c[\\udffb-\\udfff]",
            o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            i = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            c = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", o, u].join("|") + ")[\\ufe0e\\ufe0f]?" + i + ")*",
            f = "[\\ufe0e\\ufe0f]?" + i + c,
            s = "(?:" + ["[^\\ud800-\\udfff]" + r + "?", r, o, u, "[\\ud800-\\udfff]"].join("|") + ")",
            l = RegExp(a + "(?=" + a + ")|" + s + f, "g");
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2),
            u = n(7),
            i = r(u),
            c = n(388),
            f = r(c),
            s = function(t) {
                var e = t.tabs,
                    n = t.selected,
                    r = t.onClick,
                    u = t.className;
                return (0, o.h)("div", {
                    class: f.default.tabs
                }, Object.keys(e).map(function(t) {
                    return (0, o.h)("span", {
                        class: (0, i.default)(u, f.default.tab, a({}, f.default["tab-selected"], t === n)),
                        onClick: function() {
                            return r(t)
                        }
                    }, e[t])
                }))
            };
        e.default = s
    }, function(t, e) {
        t.exports = {
            tab: "tabs__tab___1Ol3X",
            "tab-selected": "tabs__tab-selected___1QY4E"
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            f = n(2),
            s = n(7),
            l = r(s),
            d = n(390),
            p = r(d),
            h = function(t) {
                function e(t) {
                    o(this, e);
                    var n = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.handle = function(t) {
                        n.container.contains(t.target) || n.close(t)
                    }, n.selectItem = n.selectItem.bind(n), n.close = n.close.bind(n), n.toggleOpen = n.toggleOpen.bind(n), n.state = {
                        closed: !0
                    }, n
                }
                return i(e, t), c(e, [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("click", this.handle, !0)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("click", this.handle, !0)
                    }
                }, {
                    key: "toggleOpen",
                    value: function() {
                        this.setState({
                            closed: !this.state.closed
                        })
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.setState({
                            closed: !0
                        })
                    }
                }, {
                    key: "selectItem",
                    value: function(t) {
                        (0, this.props.onSelect)(t), this.setState({
                            closed: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = e.options,
                            r = e.selected,
                            o = e.className,
                            u = this.state.closed;
                        return (0, f.h)("div", {
                            class: (0, l.default)(o, p.default.dropdown),
                            ref: function(e) {
                                t.container = e
                            }
                        }, (0, f.h)("div", {
                            onClick: this.toggleOpen,
                            class: p.default.label
                        }, n[r]), (0, f.h)("ul", {
                            style: {
                                zIndex: 2
                            },
                            class: (0, l.default)(p.default.options, a({}, p.default["options-closed"], u))
                        }, Object.keys(n).map(function(e) {
                            return (0, f.h)("li", {
                                class: (0, l.default)(p.default.option, a({}, p.default["option-selected"], e === r)),
                                onClick: function() {
                                    return t.selectItem(e)
                                }
                            }, n[e])
                        })))
                    }
                }]), e
            }(f.Component);
        e.default = h
    }, function(t, e) {
        t.exports = {
            options: "dropdown__options___2LmV9",
            label: "dropdown__label___ETpC_",
            option: "dropdown__option___1odGL",
            "options-closed": "dropdown__options-closed___2f8fK",
            "option-selected": "dropdown__option-selected____2K8d"
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            o = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var u, i = t[Symbol.iterator](); !(r = (u = i.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0)
                            ;
                    } catch (t) {
                        a = !0, o = t
                    } finally {
                        try {
                            !r && i.return && i.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            u = n(2),
            i = n(7),
            c = r(i),
            f = n(137),
            s = r(f),
            l = n(115),
            d = n(392),
            p = n(176),
            h = r(p),
            b = n(469),
            v = r(b),
            g = n(471),
            m = r(g),
            y = n(77),
            x = r(y),
            _ = n(78),
            w = r(_),
            M = function(t) {
                return !0
            },
            T = function(t) {
                var e = 0;
                return Object.keys(t).reduce(function(n, r) {
                    return n[r] = t[r].map(function(t) {
                        return [e++, t]
                    }), n
                }, {})
            },
            O = function(t) {
                var e = t.data,
                    n = t.min,
                    r = t.max,
                    i = (t.margin, t.className),
                    f = t.facet,
                    p = Object.keys(e),
                    b = T(e),
                    g = p.reduce(function(t, n) {
                        return t += Number(e[n].filter(M).length)
                    }, 0),
                    y = (0, d.scalePow)().exponent(.25).domain([n, r]),
                    _ = y.copy().range([0, 100]),
                    O = y.copy().range([.5, 1]),
                    D = function(t) {
                        return (0, l.rgba)(w.default.blue, O((0, s.default)(t, function(t) {
                            return t.aggr
                        })))
                    },
                    k = e[p[0]].filter(Boolean)[0],
                    S = e[p[0]].indexOf(k);
                return (0, u.h)(h.default, null, (0, u.h)("div", {
                    class: (0, c.default)(i, x.default.histogram)
                }, Object.keys(b).map(function(t, e) {
                    return b[t].map(function(e, n) {
                        var r = o(e, 2),
                            i = r[0],
                            c = r[1];
                        return (0, u.h)("div", {
                            class: x.default["histogram-month"],
                            style: {
                                width: 100 / g + "%"
                            }
                        }, (0, u.h)(v.default, a({
                            data: c
                        }, {
                            yScale: _,
                            opacityScale: O,
                            facet: f
                        })), (0, u.h)("div", {
                            style: {
                                borderColor: D(c)
                            },
                            class: x.default["histogram-month-label"]
                        }, (0, u.h)(m.default, {
                            year: t,
                            index: i,
                            firstItemIndex: S,
                            monthIndex: n,
                            numMonths: g
                        })))
                    })
                })))
            };
        e.default = O
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(393);
        n.d(e, "scaleBand", function() {
            return r.a
        }), n.d(e, "scalePoint", function() {
            return r.b
        });
        var a = n(416);
        n.d(e, "scaleIdentity", function() {
            return a.a
        });
        var o = n(27);
        n.d(e, "scaleLinear", function() {
            return o.a
        });
        var u = n(439);
        n.d(e, "scaleLog", function() {
            return u.a
        });
        var i = n(156);
        n.d(e, "scaleOrdinal", function() {
            return i.a
        }), n.d(e, "scaleImplicit", function() {
            return i.b
        });
        var c = n(440);
        n.d(e, "scalePow", function() {
            return c.a
        }), n.d(e, "scaleSqrt", function() {
            return c.b
        });
        var f = n(441);
        n.d(e, "scaleQuantile", function() {
            return f.a
        });
        var s = n(442);
        n.d(e, "scaleQuantize", function() {
            return s.a
        });
        var l = n(443);
        n.d(e, "scaleThreshold", function() {
            return l.a
        });
        var d = n(172);
        n.d(e, "scaleTime", function() {
            return d.b
        });
        var p = n(459);
        n.d(e, "scaleUtc", function() {
            return p.a
        });
        var h = n(460);
        n.d(e, "schemeCategory10", function() {
            return h.a
        });
        var b = n(461);
        n.d(e, "schemeCategory20b", function() {
            return b.a
        });
        var v = n(462);
        n.d(e, "schemeCategory20c", function() {
            return v.a
        });
        var g = n(463);
        n.d(e, "schemeCategory20", function() {
            return g.a
        });
        var m = n(464);
        n.d(e, "interpolateCubehelixDefault", function() {
            return m.a
        });
        var y = n(465);
        n.d(e, "interpolateRainbow", function() {
            return y.b
        }), n.d(e, "interpolateWarm", function() {
            return y.c
        }), n.d(e, "interpolateCool", function() {
            return y.a
        });
        var x = n(466);
        n.d(e, "interpolateViridis", function() {
            return x.a
        }), n.d(e, "interpolateMagma", function() {
            return x.c
        }), n.d(e, "interpolateInferno", function() {
            return x.b
        }), n.d(e, "interpolatePlasma", function() {
            return x.d
        });
        var _ = n(467);
        n.d(e, "scaleSequential", function() {
            return _.a
        })
    }, function(t, e, n) {
        "use strict";
        function r() {
            function t() {
                var t = o().length,
                    r = f[1] < f[0],
                    a = f[r - 0],
                    i = f[1 - r];
                e = (i - a) / Math.max(1, t - l + 2 * d), s && (e = Math.floor(e)), a += (i - a - e * (t - l)) * p, n = e * (1 - l), s && (a = Math.round(a), n = Math.round(n));
                var h = u.e(t).map(function(t) {
                    return a + e * t
                });
                return c(r ? h.reverse() : h)
            }
            var e,
                n,
                a = i.a().unknown(void 0),
                o = a.domain,
                c = a.range,
                f = [0, 1],
                s = !1,
                l = 0,
                d = 0,
                p = .5;
            return delete a.unknown, a.domain = function(e) {
                return arguments.length ? (o(e), t()) : o()
            }, a.range = function(e) {
                return arguments.length ? (f = [+e[0], +e[1]], t()) : f.slice()
            }, a.rangeRound = function(e) {
                return f = [+e[0], +e[1]], s = !0, t()
            }, a.bandwidth = function() {
                return n
            }, a.step = function() {
                return e
            }, a.round = function(e) {
                return arguments.length ? (s = !!e, t()) : s
            }, a.padding = function(e) {
                return arguments.length ? (l = d = Math.max(0, Math.min(1, e)), t()) : l
            }, a.paddingInner = function(e) {
                return arguments.length ? (l = Math.max(0, Math.min(1, e)), t()) : l
            }, a.paddingOuter = function(e) {
                return arguments.length ? (d = Math.max(0, Math.min(1, e)), t()) : d
            }, a.align = function(e) {
                return arguments.length ? (p = Math.max(0, Math.min(1, e)), t()) : p
            }, a.copy = function() {
                return r().domain(o()).range(f).round(s).paddingInner(l).paddingOuter(d).align(p)
            }, t()
        }
        function a(t) {
            var e = t.copy;
            return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
                return a(e())
            }, t
        }
        function o() {
            return a(r().paddingInner(1))
        }
        e.a = r, e.b = o;
        var u = n(5),
            i = n(156)
    }, function(t, e, n) {
        "use strict";
        n(146)
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        n(150), n(144), n(397), n(149), n(398), n(151), n(152), n(153)
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return function() {
                return t
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return t
        }
    }, function(t, e, n) {
        "use strict";
        n(150), n(17), n(26), n(67)
    }, function(t, e, n) {
        "use strict";
        n(147)
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        n(26)
    }, function(t, e, n) {
        "use strict";
        n(17), n(26), n(67)
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        n(17)
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        n(155)
    }, function(t, e, n) {
        "use strict";
        var r = (n(411), n(412), n(68));
        n.d(e, "a", function() {
            return r.a
        });
        n(413), n(414), n(415)
    }, function(t, e, n) {
        "use strict";
        n(68)
    }, function(t, e, n) {
        "use strict";
        function r() {}
        function a(t, e) {
            var n = new r;
            if (t instanceof r)
                t.each(function(t) {
                    n.add(t)
                });
            else if (t) {
                var a = -1,
                    o = t.length;
                if (null == e)
                    for (; ++a < o;)
                        n.add(t[a]);
                else
                    for (; ++a < o;)
                        n.add(e(t[a], a, t))
            }
            return n
        }
        var o = n(68),
            u = o.a.prototype;
        r.prototype = a.prototype = {
            constructor: r,
            has: u.has,
            add: function(t) {
                return t += "", this[o.b + t] = t, this
            },
            remove: u.remove,
            clear: u.clear,
            values: u.keys,
            size: u.size,
            empty: u.empty,
            each: u.each
        }
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        function r() {
            function t(t) {
                return +t
            }
            var e = [0, 1];
            return t.invert = t, t.domain = t.range = function(n) {
                return arguments.length ? (e = a.a.call(n, u.a), t) : e.slice()
            }, t.copy = function() {
                return r().domain(e)
            }, o.b(t)
        }
        e.a = r;
        var a = n(12),
            o = n(27),
            u = n(165)
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            if (t instanceof o)
                return new o(t.l, t.a, t.b, t.opacity);
            if (t instanceof d) {
                var e = t.h * b.a;
                return new o(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
            }
            t instanceof h.b || (t = h.h(t));
            var n = f(t.r),
                r = f(t.g),
                a = f(t.b),
                i = u((.4124564 * n + .3575761 * r + .1804375 * a) / v),
                c = u((.2126729 * n + .7151522 * r + .072175 * a) / g);
            return new o(116 * c - 16, 500 * (i - c), 200 * (c - u((.0193339 * n + .119192 * r + .9503041 * a) / m)), t.opacity)
        }
        function a(t, e, n, a) {
            return 1 === arguments.length ? r(t) : new o(t, e, n, null == a ? 1 : a)
        }
        function o(t, e, n, r) {
            this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
        }
        function u(t) {
            return t > w ? Math.pow(t, 1 / 3) : t / _ + y
        }
        function i(t) {
            return t > x ? t * t * t : _ * (t - y)
        }
        function c(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }
        function f(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        function s(t) {
            if (t instanceof d)
                return new d(t.h, t.c, t.l, t.opacity);
            t instanceof o || (t = r(t));
            var e = Math.atan2(t.b, t.a) * b.b;
            return new d(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }
        function l(t, e, n, r) {
            return 1 === arguments.length ? s(t) : new d(t, e, n, null == r ? 1 : r)
        }
        function d(t, e, n, r) {
            this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
        }
        e.a = a, e.b = l;
        var p = n(71),
            h = n(70),
            b = n(157),
            v = .95047,
            g = 1,
            m = 1.08883,
            y = 4 / 29,
            x = 6 / 29,
            _ = 3 * x * x,
            w = x * x * x;
        p.a(o, a, p.b(h.a, {
            brighter: function(t) {
                return new o(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function(t) {
                return new o(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    e = isNaN(this.a) ? t : t + this.a / 500,
                    n = isNaN(this.b) ? t : t - this.b / 200;
                return t = g * i(t), e = v * i(e), n = m * i(n), new h.b(c(3.2404542 * e - 1.5371385 * t - .4985314 * n), c(-.969266 * e + 1.8760108 * t + .041556 * n), c(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity)
            }
        })), p.a(d, l, p.b(h.a, {
            brighter: function(t) {
                return new d(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            },
            darker: function(t) {
                return new d(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            },
            rgb: function() {
                return r(this).rgb()
            }
        }))
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            if (t instanceof o)
                return new o(t.h, t.s, t.l, t.opacity);
            t instanceof i.b || (t = i.h(t));
            var e = t.r / 255,
                n = t.g / 255,
                r = t.b / 255,
                a = (v * r + h * e - b * n) / (v + h - b),
                u = r - a,
                f = (p * (n - a) - l * u) / d,
                s = Math.sqrt(f * f + u * u) / (p * a * (1 - a)),
                g = s ? Math.atan2(f, u) * c.b - 120 : NaN;
            return new o(g < 0 ? g + 360 : g, s, a, t.opacity)
        }
        function a(t, e, n, a) {
            return 1 === arguments.length ? r(t) : new o(t, e, n, null == a ? 1 : a)
        }
        function o(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }
        e.a = a;
        var u = n(71),
            i = n(70),
            c = n(157),
            f = -.14861,
            s = 1.78277,
            l = -.29227,
            d = -.90649,
            p = 1.97294,
            h = p * d,
            b = p * s,
            v = s * l - d * f;
        u.a(o, a, u.b(i.a, {
            brighter: function(t) {
                return t = null == t ? i.c : Math.pow(i.c, t), new o(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? i.d : Math.pow(i.d, t), new o(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * c.a,
                    e = +this.l,
                    n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                    r = Math.cos(t),
                    a = Math.sin(t);
                return new i.b(255 * (e + n * (f * r + s * a)), 255 * (e + n * (l * r + d * a)), 255 * (e + n * (p * r)), this.opacity)
            }
        }))
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return t = +t, e -= t, function(n) {
                return Math.round(t + e * n)
            }
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            function o(t) {
                return t.length ? t.pop() + " " : ""
            }
            function u(t, r, o, u, i, c) {
                if (t !== o || r !== u) {
                    var f = i.push("translate(", null, e, null, n);
                    c.push({
                        i: f - 4,
                        x: a.a(t, o)
                    }, {
                        i: f - 2,
                        x: a.a(r, u)
                    })
                } else
                    (o || u) && i.push("translate(" + o + e + u + n)
            }
            function i(t, e, n, u) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), u.push({
                    i: n.push(o(n) + "rotate(", null, r) - 2,
                    x: a.a(t, e)
                })) : e && n.push(o(n) + "rotate(" + e + r)
            }
            function c(t, e, n, u) {
                t !== e ? u.push({
                    i: n.push(o(n) + "skewX(", null, r) - 2,
                    x: a.a(t, e)
                }) : e && n.push(o(n) + "skewX(" + e + r)
            }
            function f(t, e, n, r, u, i) {
                if (t !== n || e !== r) {
                    var c = u.push(o(u) + "scale(", null, ",", null, ")");
                    i.push({
                        i: c - 4,
                        x: a.a(t, n)
                    }, {
                        i: c - 2,
                        x: a.a(e, r)
                    })
                } else
                    1 === n && 1 === r || u.push(o(u) + "scale(" + n + "," + r + ")")
            }
            return function(e, n) {
                var r = [],
                    a = [];
                return e = t(e), n = t(n), u(e.translateX, e.translateY, n.translateX, n.translateY, r, a), i(e.rotate, n.rotate, r, a), c(e.skewX, n.skewX, r, a), f(e.scaleX, e.scaleY, n.scaleX, n.scaleY, r, a), e = n = null, function(t) {
                    for (var e, n = -1, o = a.length; ++n < o;)
                        r[(e = a[n]).i] = e.x(t);
                    return r.join("")
                }
            }
        }
        var a = n(45),
            o = n(421);
        r(o.a, "px, ", "px)", "deg)"), r(o.b, ", ", ")", ")")
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return "none" === t ? f.b : (o || (o = document.createElement("DIV"), u = document.documentElement, i = document.defaultView), o.style.transform = t, t = i.getComputedStyle(u.appendChild(o), null).getPropertyValue("transform"), u.removeChild(o), t = t.slice(7, -1).split(","), f.a(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }
        function a(t) {
            return null == t ? f.b : (c || (c = document.createElementNS("http://www.w3.org/2000/svg", "g")), c.setAttribute("transform", t), (t = c.transform.baseVal.consolidate()) ? (t = t.matrix, f.a(t.a, t.b, t.c, t.d, t.e, t.f)) : f.b)
        }
        e.a = r, e.b = a;
        var o,
            u,
            i,
            c,
            f = n(422)
    }, function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a
        });
        var r = 180 / Math.PI,
            a = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            };
        e.a = function(t, e, n, a, o, u) {
            var i,
                c,
                f;
            return (i = Math.sqrt(t * t + e * e)) && (t /= i, e /= i), (f = t * n + e * a) && (n -= t * f, a -= e * f), (c = Math.sqrt(n * n + a * a)) && (n /= c, a /= c, f /= c), t * a < e * n && (t = -t, e = -e, f = -f, i = -i), {
                translateX: o,
                translateY: u,
                rotate: Math.atan2(e, t) * r,
                skewX: Math.atan(f) * r,
                scaleX: i,
                scaleY: c
            }
        }
    }, function(t, e, n) {
        "use strict";
        Math.SQRT2
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return function(e, n) {
                var r = t((e = a.d(e)).h, (n = a.d(n)).h),
                    u = o.a(e.s, n.s),
                    i = o.a(e.l, n.l),
                    c = o.a(e.opacity, n.opacity);
                return function(t) {
                    return e.h = r(t), e.s = u(t), e.l = i(t), e.opacity = c(t), e + ""
                }
            }
        }
        var a = n(8),
            o = n(29);
        r(o.c), r(o.a)
    }, function(t, e, n) {
        "use strict";
        n(8), n(29)
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return function(e, n) {
                var r = t((e = a.c(e)).h, (n = a.c(n)).h),
                    u = o.a(e.c, n.c),
                    i = o.a(e.l, n.l),
                    c = o.a(e.opacity, n.opacity);
                return function(t) {
                    return e.h = r(t), e.c = u(t), e.l = i(t), e.opacity = c(t), e + ""
                }
            }
        }
        var a = n(8),
            o = n(29);
        r(o.c), r(o.a)
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return function e(n) {
                function r(e, r) {
                    var u = t((e = a.b(e)).h, (r = a.b(r)).h),
                        i = o.a(e.s, r.s),
                        c = o.a(e.l, r.l),
                        f = o.a(e.opacity, r.opacity);
                    return function(t) {
                        return e.h = u(t), e.s = i(t), e.l = c(Math.pow(t, n)), e.opacity = f(t), e + ""
                    }
                }
                return n = +n, r.gamma = e, r
            }(1)
        }
        n.d(e, "a", function() {
            return u
        });
        var a = n(8),
            o = n(29),
            u = (r(o.c), r(o.a))
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            a = n(166);
        e.a = function(t, e, n) {
            var o,
                u = t[0],
                i = t[t.length - 1],
                c = r.g(u, i, null == e ? 10 : e);
            switch (n = a.c(null == n ? ",f" : n), n.type) {
            case "s":
                var f = Math.max(Math.abs(u), Math.abs(i));
                return null != n.precision || isNaN(o = a.e(c, f)) || (n.precision = o), a.b(n, f);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != n.precision || isNaN(o = a.f(c, Math.max(Math.abs(u), Math.abs(i)))) || (n.precision = o - ("e" === n.type));
                break;
            case "f":
            case "%":
                null != n.precision || isNaN(o = a.d(c)) || (n.precision = o - 2 * ("%" === n.type))
            }
            return a.a(n)
        }
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return o
        });
        var r,
            a,
            o,
            u = n(167);
        !function(t) {
            r = u.a(t), a = r.format, o = r.formatPrefix
        }({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        })
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return function(n, r) {
                for (var a = n.length, o = [], u = 0, i = t[0], c = 0; a > 0 && i > 0 && (c + i + 1 > r && (i = Math.max(1, r - c)), o.push(n.substring(a -= i, a + i)), !((c += i + 1) > r));)
                    i = t[u = (u + 1) % t.length];
                return o.reverse().join(e)
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return function(e) {
                return e.replace(/[0-9]/g, function(e) {
                    return t[+e]
                })
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            t = t.toPrecision(e);
            t:
            for (var n, r = t.length, a = 1, o = -1; a < r; ++a)
                switch (t[a]) {
                case ".":
                    o = n = a;
                    break;
                case "0":
                    0 === o && (o = a), n = a;
                    break;
                case "e":
                    break t;
                default:
                    o > 0 && (o = 0)
                }
            return o > 0 ? t.slice(0, o) + t.slice(n + 1) : t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(74);
        e.a = function(t, e) {
            var n = r.a(t, e);
            if (!n)
                return t + "";
            var a = n[0],
                o = n[1];
            return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0")
        }
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(47);
        e.a = function(t) {
            return Math.max(0, -r.a(Math.abs(t)))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(47);
        e.a = function(t, e) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(r.a(e) / 3))) - r.a(Math.abs(t)))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(47);
        e.a = function(t, e) {
            return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, r.a(e) - r.a(t)) + 1
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            return (e = Math.log(e / t)) ? function(n) {
                return Math.log(n / t) / e
            } : d.a(e)
        }
        function a(t, e) {
            return t < 0 ? function(n) {
                return -Math.pow(-e, n) * Math.pow(-t, 1 - n)
            } : function(n) {
                return Math.pow(e, n) * Math.pow(t, 1 - n)
            }
        }
        function o(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }
        function u(t) {
            return 10 === t ? o : t === Math.E ? Math.exp : function(e) {
                return Math.pow(t, e)
            }
        }
        function i(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(e) {
                return Math.log(e) / t
            })
        }
        function c(t) {
            return function(e) {
                return -t(-e)
            }
        }
        function f() {
            function t() {
                return d = i(o), b = u(o), n()[0] < 0 && (d = c(d), b = c(b)), e
            }
            var e = h.b(r, a).domain([1, 10]),
                n = e.domain,
                o = 10,
                d = i(10),
                b = u(10);
            return e.base = function(e) {
                return arguments.length ? (o = +e, t()) : o
            }, e.domain = function(e) {
                return arguments.length ? (n(e), t()) : n()
            }, e.ticks = function(t) {
                var e,
                    r = n(),
                    a = r[0],
                    u = r[r.length - 1];
                (e = u < a) && (l = a, a = u, u = l);
                var i,
                    c,
                    f,
                    l = d(a),
                    p = d(u),
                    h = null == t ? 10 : +t,
                    v = [];
                if (!(o % 1) && p - l < h) {
                    if (l = Math.round(l) - 1, p = Math.round(p) + 1, a > 0) {
                        for (; l < p; ++l)
                            for (c = 1, i = b(l); c < o; ++c)
                                if (!((f = i * c) < a)) {
                                    if (f > u)
                                        break;
                                    v.push(f)
                                }
                    } else
                        for (; l < p; ++l)
                            for (c = o - 1, i = b(l); c >= 1; --c)
                                if (!((f = i * c) < a)) {
                                    if (f > u)
                                        break;
                                    v.push(f)
                                }
                } else
                    v = s.h(l, p, Math.min(p - l, h)).map(b);
                return e ? v.reverse() : v
            }, e.tickFormat = function(t, n) {
                if (null == n && (n = 10 === o ? ".0e" : ","), "function" != typeof n && (n = l.a(n)), t === 1 / 0)
                    return n;
                null == t && (t = 10);
                var r = Math.max(1, o * t / e.ticks().length);
                return function(t) {
                    var e = t / b(Math.round(d(t)));
                    return e * o < o - .5 && (e *= o), e <= r ? n(t) : ""
                }
            }, e.nice = function() {
                return n(p.a(n(), {
                    floor: function(t) {
                        return b(Math.floor(d(t)))
                    },
                    ceil: function(t) {
                        return b(Math.ceil(d(t)))
                    }
                }))
            }, e.copy = function() {
                return h.a(e, f().base(o))
            }, e
        }
        e.a = f;
        var s = n(5),
            l = n(166),
            d = n(73),
            p = n(171),
            h = n(46)
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
        }
        function a() {
            function t(t, e) {
                return (e = r(e, n) - (t = r(t, n))) ? function(a) {
                    return (r(a, n) - t) / e
                } : u.a(e)
            }
            function e(t, e) {
                return e = r(e, n) - (t = r(t, n)), function(a) {
                    return r(t + e * a, 1 / n)
                }
            }
            var n = 1,
                o = c.b(t, e),
                f = o.domain;
            return o.exponent = function(t) {
                return arguments.length ? (n = +t, f(f())) : n
            }, o.copy = function() {
                return c.a(o, a().exponent(n))
            }, i.b(o)
        }
        function o() {
            return a().exponent(.5)
        }
        e.a = a, e.b = o;
        var u = n(73),
            i = n(27),
            c = n(46)
    }, function(t, e, n) {
        "use strict";
        function r() {
            function t() {
                var t = 0,
                    r = Math.max(1, u.length);
                for (i = new Array(r - 1); ++t < r;)
                    i[t - 1] = a.d(n, t / r);
                return e
            }
            function e(t) {
                if (!isNaN(t = +t))
                    return u[a.b(i, t)]
            }
            var n = [],
                u = [],
                i = [];
            return e.invertExtent = function(t) {
                var e = u.indexOf(t);
                return e < 0 ? [NaN, NaN] : [e > 0 ? i[e - 1] : n[0], e < i.length ? i[e] : n[n.length - 1]]
            }, e.domain = function(e) {
                if (!arguments.length)
                    return n.slice();
                n = [];
                for (var r, o = 0, u = e.length; o < u; ++o)
                    null == (r = e[o]) || isNaN(r = +r) || n.push(r);
                return n.sort(a.a), t()
            }, e.range = function(e) {
                return arguments.length ? (u = o.b.call(e), t()) : u.slice()
            }, e.quantiles = function() {
                return i.slice()
            }, e.copy = function() {
                return r().domain(n).range(u)
            }, e
        }
        e.a = r;
        var a = n(5),
            o = n(12)
    }, function(t, e, n) {
        "use strict";
        function r() {
            function t(t) {
                if (t <= t)
                    return s[a.b(f, t, 0, c)]
            }
            function e() {
                var e = -1;
                for (f = new Array(c); ++e < c;)
                    f[e] = ((e + 1) * i - (e - c) * n) / (c + 1);
                return t
            }
            var n = 0,
                i = 1,
                c = 1,
                f = [.5],
                s = [0, 1];
            return t.domain = function(t) {
                return arguments.length ? (n = +t[0], i = +t[1], e()) : [n, i]
            }, t.range = function(t) {
                return arguments.length ? (c = (s = o.b.call(t)).length - 1, e()) : s.slice()
            }, t.invertExtent = function(t) {
                var e = s.indexOf(t);
                return e < 0 ? [NaN, NaN] : e < 1 ? [n, f[0]] : e >= c ? [f[c - 1], i] : [f[e - 1], f[e]]
            }, t.copy = function() {
                return r().domain([n, i]).range(s)
            }, u.b(t)
        }
        e.a = r;
        var a = n(5),
            o = n(12),
            u = n(27)
    }, function(t, e, n) {
        "use strict";
        function r() {
            function t(t) {
                if (t <= t)
                    return n[a.b(e, t, 0, u)]
            }
            var e = [.5],
                n = [0, 1],
                u = 1;
            return t.domain = function(r) {
                return arguments.length ? (e = o.b.call(r), u = Math.min(e.length, n.length - 1), t) : e.slice()
            }, t.range = function(r) {
                return arguments.length ? (n = o.b.call(r), u = Math.min(e.length, n.length - 1), t) : n.slice()
            }, t.invertExtent = function(t) {
                var r = n.indexOf(t);
                return [e[r - 1], e[r]]
            }, t.copy = function() {
                return r().domain(e).range(n)
            }, t
        }
        e.a = r;
        var a = n(5),
            o = n(12)
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = r.a(function() {}, function(t, e) {
                t.setTime(+t + e)
            }, function(t, e) {
                return e - t
            });
        a.every = function(t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.a(function(e) {
                e.setTime(Math.floor(e / t) * t)
            }, function(e, n) {
                e.setTime(+e + n * t)
            }, function(e, n) {
                return (n - e) / t
            }) : a : null
        }, e.a = a;
        a.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                t.setTime(Math.floor(t / a.d) * a.d)
            }, function(t, e) {
                t.setTime(+t + e * a.d)
            }, function(t, e) {
                return (e - t) / a.d
            }, function(t) {
                return t.getUTCSeconds()
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                t.setTime(Math.floor(t / a.c) * a.c)
            }, function(t, e) {
                t.setTime(+t + e * a.c)
            }, function(t, e) {
                return (e - t) / a.c
            }, function(t) {
                return t.getMinutes()
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                var e = t.getTimezoneOffset() * a.c % a.b;
                e < 0 && (e += a.b), t.setTime(Math.floor((+t - e) / a.b) * a.b + e)
            }, function(t, e) {
                t.setTime(+t + e * a.b)
            }, function(t, e) {
                return (e - t) / a.b
            }, function(t) {
                return t.getHours()
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                t.setHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setDate(t.getDate() + e)
            }, function(t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * a.c) / a.a
            }, function(t) {
                return t.getDate() - 1
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return a.a(function(e) {
                e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setDate(t.getDate() + 7 * e)
            }, function(t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * o.c) / o.e
            })
        }
        n.d(e, "b", function() {
            return u
        }), n.d(e, "a", function() {
            return i
        });
        var a = n(1),
            o = n(6),
            u = r(0),
            i = r(1),
            c = r(2),
            f = r(3),
            s = r(4),
            l = r(5),
            d = r(6);
        u.range, i.range, c.range, f.range, s.range, l.range, d.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = r.a(function(t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setMonth(t.getMonth() + e)
            }, function(t, e) {
                return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
            }, function(t) {
                return t.getMonth()
            });
        e.a = a;
        a.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = r.a(function(t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setFullYear(t.getFullYear() + e)
            }, function(t, e) {
                return e.getFullYear() - t.getFullYear()
            }, function(t) {
                return t.getFullYear()
            });
        a.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? r.a(function(e) {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
            }, function(e, n) {
                e.setFullYear(e.getFullYear() + n * t)
            }) : null
        }, e.a = a;
        a.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                t.setUTCSeconds(0, 0)
            }, function(t, e) {
                t.setTime(+t + e * a.c)
            }, function(t, e) {
                return (e - t) / a.c
            }, function(t) {
                return t.getUTCMinutes()
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                t.setUTCMinutes(0, 0, 0)
            }, function(t, e) {
                t.setTime(+t + e * a.b)
            }, function(t, e) {
                return (e - t) / a.b
            }, function(t) {
                return t.getUTCHours()
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = n(6),
            o = r.a(function(t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCDate(t.getUTCDate() + e)
            }, function(t, e) {
                return (e - t) / a.a
            }, function(t) {
                return t.getUTCDate() - 1
            });
        e.a = o;
        o.range
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return a.a(function(e) {
                e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }, function(t, e) {
                return (e - t) / o.e
            })
        }
        n.d(e, "b", function() {
            return u
        }), n.d(e, "a", function() {
            return i
        });
        var a = n(1),
            o = n(6),
            u = r(0),
            i = r(1),
            c = r(2),
            f = r(3),
            s = r(4),
            l = r(5),
            d = r(6);
        u.range, i.range, c.range, f.range, s.range, l.range, d.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = r.a(function(t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCMonth(t.getUTCMonth() + e)
            }, function(t, e) {
                return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
            }, function(t) {
                return t.getUTCMonth()
            });
        e.a = a;
        a.range
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            a = r.a(function(t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCFullYear(t.getUTCFullYear() + e)
            }, function(t, e) {
                return e.getUTCFullYear() - t.getUTCFullYear()
            }, function(t) {
                return t.getUTCFullYear()
            });
        a.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? r.a(function(e) {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
            }, function(e, n) {
                e.setUTCFullYear(e.getUTCFullYear() + n * t)
            }) : null
        }, e.a = a;
        a.range
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            var e = new Date(t);
            return isNaN(e) ? null : e
        }
        var a = n(175),
            o = n(76);
        +new Date("2000-01-01T00:00:00.000Z") || o.c(a.a)
    }, function(t, e, n) {
        "use strict";
        var r = n(172),
            a = n(173),
            o = n(75);
        e.a = function() {
            return r.a(o.t, o.p, o.s, o.k, o.l, o.n, o.q, o.m, a.b).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(30);
        e.a = r.a("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")
    }, function(t, e, n) {
        "use strict";
        var r = n(30);
        e.a = r.a("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6")
    }, function(t, e, n) {
        "use strict";
        var r = n(30);
        e.a = r.a("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9")
    }, function(t, e, n) {
        "use strict";
        var r = n(30);
        e.a = r.a("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5")
    }, function(t, e, n) {
        "use strict";
        var r = n(8),
            a = n(28);
        e.a = a.b(r.b(300, .5, 0), r.b(-240, .5, 1))
    }, function(t, e, n) {
        "use strict";
        n.d(e, "c", function() {
            return o
        }), n.d(e, "a", function() {
            return u
        });
        var r = n(8),
            a = n(28),
            o = a.b(r.b(-100, .75, .35), r.b(80, 1.5, .8)),
            u = a.b(r.b(260, .75, .35), r.b(80, 1.5, .8)),
            i = r.b();
        e.b = function(t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var e = Math.abs(t - .5);
            return i.h = 360 * t - 100, i.s = 1.5 - 1.5 * e, i.l = .8 - .9 * e, i + ""
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.length;
            return function(n) {
                return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))]
            }
        }
        n.d(e, "c", function() {
            return o
        }), n.d(e, "b", function() {
            return u
        }), n.d(e, "d", function() {
            return i
        });
        var a = n(30);
        e.a = r(a.a("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
        var o = r(a.a("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
            u = r(a.a("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
            i = r(a.a("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            function e(e) {
                var r = (e - n) / (o - n);
                return t(u ? Math.max(0, Math.min(1, r)) : r)
            }
            var n = 0,
                o = 1,
                u = !1;
            return e.domain = function(t) {
                return arguments.length ? (n = +t[0], o = +t[1], e) : [n, o]
            }, e.clamp = function(t) {
                return arguments.length ? (u = !!t, e) : u
            }, e.interpolator = function(n) {
                return arguments.length ? (t = n, e) : t
            }, e.copy = function() {
                return r(t).domain([n, o]).clamp(u)
            }, a.b(e)
        }
        e.a = r;
        var a = n(27)
    }, function(t, e) {
        t.exports = {
            wrapper: "tooltip__wrapper___hCNmt",
            tooltip: "tooltip__tooltip___32E7I"
        }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(2),
            o = n(7),
            u = r(o),
            i = n(470),
            c = r(i),
            f = n(77),
            s = r(f),
            l = n(44),
            d = function(t, e) {
                return "calc((100% / " + t.length
            },
            p = function(t, e) {
                return "calc(" + d(t) + " * " + e + ")"
            },
            h = function(t, e) {
                var n = Object.keys(t.rawDict).map(function(n) {
                    var r = Math.round(t.rawDict[n]) || "1 >";
                    return e === l.FACETS.Users ? r + " user" + (1 === r ? "" : "s") + " edited " + n + " each day" : r + ("buildings" === n ? "" : " km") + " " + (1 === r && "buildings" === n ? n.replace(/s$/i, "") : n) + " edited per day"
                });
                return (0, c.default)(n).join("|")
            },
            b = function(t) {
                var e = t.data,
                    n = t.yScale,
                    r = t.opacityScale,
                    o = t.facet;
                return (0, a.h)("div", {
                    class: s.default.bars
                }, e.map(function(t, i) {
                    return (0, a.h)("div", {
                        "data-tooltip": h(t, o),
                        class: (0, u.default)(s.default.bar),
                        style: {
                            opacity: 0 === t.aggr ? 0 : r(t.aggr),
                            height: (0 === t.aggr ? 0 : Math.max(n(t.aggr), 1)) + "%",
                            left: p(e, i),
                            width: d(e)
                        }
                    })
                }))
            };
        e.default = b
    }, function(t, e) {
        function n(t) {
            for (var e = -1, n = null == t ? 0 : t.length, r = 0, a = []; ++e < n;) {
                var o = t[e];
                o && (a[r++] = o)
            }
            return a
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2),
            u = n(7),
            i = r(u),
            c = n(44),
            f = n(77),
            s = r(f),
            l = function(t) {
                return c.MONTH_NAMES[t]
            },
            d = function(t) {
                return t.substr(0, 3)
            },
            p = function(t) {
                return d(l(t))
            },
            h = function(t) {
                var e,
                    n = t.index,
                    r = t.firstItemIndex,
                    u = t.monthIndex,
                    c = t.year,
                    f = t.numMonths,
                    d = 0 === u,
                    h = 0 === n,
                    b = n === f - 1,
                    v = n > f - 12,
                    g = d && r - n > 0,
                    m = (0, i.default)((e = {}, a(e, s.default.label, d || f <= 1 || h || b), a(e, s.default.labelHidden, f >= 24 && !h && !b && !d || f >= 24 && (!h && g || !b && v)), a(e, s.default.labelBorder, f > 24 && (d && !b || h)), a(e, s.default.labelBorderLast, f > 24 && b), a(e, s.default.last, b), e)),
                    y = (0, i.default)(s.default.year, a({}, s.default.yearVisible, h || b || d || f <= 1)),
                    x = (0, i.default)(s.default.month, a({}, s.default.monthHidden, f >= 24 && !h && !b));
                return (0, o.h)("span", {
                    className: m
                }, (0, o.h)("span", {
                    className: x
                }, f <= 1 ? l(u) : p(u)), (0, o.h)("span", {
                    className: y
                }, c))
            };
        e.default = h
    }, function(t, e) {
        t.exports = {
            activity: "activity__activity___1SGMw",
            dropdown: "activity__dropdown___D5K-f",
            axis: "activity__axis___1VDWX",
            axisHelp: "activity__axisHelp___2DFWv",
            histogram: "activity__histogram___3sTp_"
        }
    }, function(t, e, n) {
        "use strict";
        function r(t, e) {
            return (0, o.mountComponent)(i, t, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = r;
        var a = n(2),
            o = n(18),
            u = n(44),
            i = function(t) {
                var e = t.width,
                    n = t.height,
                    r = t.settings,
                    o = Object.assign(u.COMPARE_MAP_DEFAULTS, r),
                    i = (o.iframe_base_url.replace(/\/$/, "") + "/#/compare\n  /polygon:" + o.polygon + "\n  /" + o.default_start_year + "..." + o.default_end_year + "\n  /" + o.default_feature_type + "\n  /embed/opendri").replace(/\s/gm, "");
                return (0, a.h)("iframe", {
                    scrolling: "no",
                    style: {
                        width: e,
                        height: n,
                        border: 0
                    },
                    src: i
                })
            }
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function c(t, e) {
            return (0, g.mountComponent)(O, t, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        e.default = c;
        var s = n(2),
            l = n(7),
            d = r(l),
            p = n(475),
            h = r(p),
            b = n(476),
            v = r(b),
            g = n(18),
            m = n(78),
            y = n(79),
            x = r(y),
            _ = n(31),
            w = r(_),
            M = n(482),
            T = r(M),
            O = function(t) {
                function e(t) {
                    o(this, e);
                    var n = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.formatContributors = n.formatContributors.bind(n), n
                }
                return i(e, t), f(e, [{
                    key: "formatContributors",
                    value: function() {
                        var t = this.props,
                            e = t.data,
                            n = t.numUsers,
                            r = n || 10,
                            a = this.props.featureType || "buildings",
                            o = e[a],
                            u = o.top_users;
                        if (void 0 === u)
                            return {};
                        var i = o.total_feature_value,
                            c = (0, h.default)(u.map(function(t) {
                                return t.feature_value
                            })),
                            f = u.map(function(t) {
                                return {
                                    name: t.osm_name,
                                    contributions: t.feature_value,
                                    percent: (0, g.percent)(t.feature_value, c, 1),
                                    percentContrib: (0, g.percent)(t.feature_value, i, 1)
                                }
                            }),
                            s = f.slice(0, r),
                            l = s.reduce(function(t, e) {
                                return t += e.contributions
                            }, 0);
                        return {
                            topUsers: s,
                            remaining: o.users_length - r,
                            remainingPercent: (0, g.percent)(i - l, i, 1),
                            featureType: a
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.width,
                            n = t.data,
                            r = this.formatContributors(),
                            o = r.topUsers,
                            u = r.remaining,
                            i = r.remainingPercent,
                            c = r.featureType;
                        return void 0 === o ? null : 0 === o.length ? (0, s.h)("div", {
                            style: {
                                width: e
                            },
                            class: (0, d.default)(T.default.contributors, w.default.viz)
                        }, (0, s.h)("div", {
                            class: (0, d.default)(T.default.header, w.default.heading)
                        }, (0, s.h)("div", {
                            class: (0, d.default)(T.default.title, w.default.title)
                        }, "Top contributors (", c, ")", void 0 !== this.props.apiUrl && (0, s.h)("a", {
                            target: "_blank",
                            className: w.default.download,
                            href: this.props.apiUrl
                        }, "Download data")), (0, s.h)(x.default, {
                            data: n
                        })), (0, s.h)("div", {
                            class: (0, d.default)(T.default.title, w.default.subtitle)
                        }, "No contributions found.")) : (0, s.h)("div", {
                            style: {
                                width: e
                            },
                            class: (0, d.default)(T.default.contributors, w.default.viz)
                        }, (0, s.h)("div", {
                            class: (0, d.default)(T.default.header, w.default.heading)
                        }, (0, s.h)("div", {
                            class: (0, d.default)(T.default.title, w.default.title)
                        }, "Top contributors (", c, ")", void 0 !== this.props.apiUrl && (0, s.h)("a", {
                            target: "_blank",
                            className: w.default.download,
                            href: this.props.apiUrl
                        }, "Download data")), (0, s.h)(x.default, {
                            data: n
                        })), (0, s.h)("ul", {
                            class: T.default.list
                        }, o.map(function(t) {
                            return (0, s.h)("li", {
                                class: T.default["list-items"]
                            }, (0, s.h)("span", {
                                title: t.name,
                                class: (0, d.default)(T.default.name, a({}, T.default.local, t.local))
                            }, (0, s.h)("a", {
                                target: "_blank",
                                href: "http://www.openstreetmap.org/user/" + t.name
                            }, (0, v.default)(t.name, {
                                length: 10
                            }))), (0, s.h)("div", {
                                class: (0, d.default)(T.default.percent)
                            }, (0, s.h)("div", {
                                style: {
                                    width: "calc(" + Math.round(t.percent) + "% - " + m.percentWidth + ")"
                                },
                                class: (0, d.default)(T.default["percent-bar"])
                            }), (0, s.h)("span", {
                                class: (0, d.default)(T.default["percent-nr"])
                            }, t.percentContrib, "%")))
                        })), i > 0 && i < 100 && (0, s.h)("div", {
                            class: T.default.remaining
                        }, "+ ", u, " More (", i, "% of total)"))
                    }
                }]), e
            }(s.Component)
    }, function(t, e, n) {
        function r(t) {
            return t && t.length ? a(t, u, o) : void 0
        }
        var a = n(58),
            o = n(117),
            u = n(66);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = p,
                r = h;
            if (i(e)) {
                var v = "separator" in e ? e.separator : v;
                n = "length" in e ? l(e.length) : n, r = "omission" in e ? a(e.omission) : r
            }
            t = d(t);
            var g = t.length;
            if (u(t)) {
                var m = s(t);
                g = m.length
            }
            if (n >= g)
                return t;
            var y = n - f(r);
            if (y < 1)
                return r;
            var x = m ? o(m, 0, y).join("") : t.slice(0, y);
            if (void 0 === v)
                return x + r;
            if (m && (y += x.length - y), c(v)) {
                if (t.slice(y).search(v)) {
                    var _,
                        w = x;
                    for (v.global || (v = RegExp(v.source, d(b.exec(v)) + "g")), v.lastIndex = 0; _ = v.exec(w);)
                        var M = _.index;
                    x = x.slice(0, void 0 === M ? y : M)
                }
            } else if (t.indexOf(a(v), y) != y) {
                var T = x.lastIndexOf(v);
                T > -1 && (x = x.slice(0, T))
            }
            return x + r
        }
        var a = n(133),
            o = n(142),
            u = n(43),
            i = n(16),
            c = n(477),
            f = n(479),
            s = n(143),
            l = n(139),
            d = n(25),
            p = 30,
            h = "...",
            b = /\w*$/;
        t.exports = r
    }, function(t, e, n) {
        var r = n(478),
            a = n(127),
            o = n(128),
            u = o && o.isRegExp,
            i = u ? a(u) : r;
        t.exports = i
    }, function(t, e, n) {
        function r(t) {
            return o(t) && a(t) == u
        }
        var a = n(13),
            o = n(14),
            u = "[object RegExp]";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return o(t) ? u(t) : a(t)
        }
        var a = n(480),
            o = n(43),
            u = n(481);
        t.exports = r
    }, function(t, e, n) {
        var r = n(135),
            a = r("length");
        t.exports = a
    }, function(t, e) {
        function n(t) {
            for (var e = l.lastIndex = 0; l.test(t);)
                ++e;
            return e
        }
        var r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            a = "\\ud83c[\\udffb-\\udfff]",
            o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            i = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            c = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", o, u].join("|") + ")[\\ufe0e\\ufe0f]?" + i + ")*",
            f = "[\\ufe0e\\ufe0f]?" + i + c,
            s = "(?:" + ["[^\\ud800-\\udfff]" + r + "?", r, o, u, "[\\ud800-\\udfff]"].join("|") + ")",
            l = RegExp(a + "(?=" + a + ")|" + s + f, "g");
        t.exports = n
    }, function(t, e) {
        t.exports = {
            contributors: "contributors__contributors___ZYPVr",
            header: "contributors__header___2AgNE",
            name: "contributors__name___1rVlU",
            percent: "contributors__percent___2ojhm",
            "percent-bar": "contributors__percent-bar___2kklQ",
            "percent-nr": "contributors__percent-nr___1WoZK",
            list: "contributors__list___2KfYP",
            "list-items": "contributors__list-items___3Y-Y4",
            remaining: "contributors__remaining___1cSLr"
        }
    }])
});
