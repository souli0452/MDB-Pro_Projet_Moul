/*!
 * Material Design for Bootstrap 4
 * Version: MDB PRO 4.9.0
 * 
 * 
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 * 
 * Read the license: https://mdbootstrap.com/license/
 * 
 * 
 * Documentation: https://mdbootstrap.com/
 * 
 * Getting started: https://mdbootstrap.com/getting-started/
 * 
 * Tutorials: https://mdbootstrap.com/bootstrap-tutorial/
 * 
 * Templates: https://mdbootstrap.com/templates/
 * 
 * Support: https://mdbootstrap.com/forums/forum/support/
 * 
 * Contact: office@mdbootstrap.com
 * 
 * Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js, jquery.easing.js, velocity.js, chart.js, wow.js, scrolling-navbar.js, waves.js, forms-free.js, preloading.js, cards.js, character-counter.js, toastr.js, smooth-scroll.js, dropdown.js, buttons.js, sidenav.js, collapsible.js, range-input.js, file-input.js, material-select.js, picker.js, picker-date.js, picker-time.js, lightbox.js, jquery.sticky.js, scrollbar.js, chips.js, ofi.js, jarallax.js, jarallax-video.js, mdb-autocomplete.js, enhanced-modals.js, treeview.js
 */
! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 220)
}([function(t, e, i) {
    (function(e) {
        var i = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")()
    }).call(this, i(54))
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(12),
        r = i(27),
        a = i(46),
        s = n.Symbol,
        l = o("wks");
    t.exports = function(t) {
        return l[t] || (l[t] = a && s[t] || (a ? s : r)("Symbol." + t))
    }
}, function(t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return i.call(t, e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(22).f,
        r = i(6),
        a = i(15),
        s = i(21),
        l = i(47),
        c = i(48);
    t.exports = function(t, e) {
        var i, u, d, h, f, p = t.target,
            v = t.global,
            g = t.stat;
        if (i = v ? n : g ? n[p] || s(p, {}) : (n[p] || {}).prototype)
            for (u in e) {
                if (h = e[u], d = t.noTargetGet ? (f = o(i, u)) && f.value : i[u], !c(v ? u : p + (g ? "." : "#") + u, t.forced) && void 0 !== d) {
                    if (typeof h == typeof d) continue;
                    l(h, d)
                }(t.sham || d && d.sham) && r(h, "sham", !0), a(i, u, h, t)
            }
    }
}, function(t, e, i) {
    var n = i(7),
        o = i(9),
        r = i(18);
    t.exports = n ? function(t, e, i) {
        return o.f(t, e, r(1, i))
    } : function(t, e, i) {
        return t[e] = i, t
    }
}, function(t, e, i) {
    var n = i(1);
    t.exports = !n((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, i) {
    var n = i(4);
    t.exports = function(t) {
        if (!n(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e, i) {
    var n = i(7),
        o = i(33),
        r = i(8),
        a = i(20),
        s = Object.defineProperty;
    e.f = n ? s : function(t, e, i) {
        if (r(t), e = a(e, !0), r(i), o) try {
            return s(t, e, i)
        } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e, i) {
    var n = i(26),
        o = i(13);
    t.exports = function(t) {
        return n(o(t))
    }
}, function(t, e, i) {
    var n = i(14),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0
    }
}, function(t, e, i) {
    var n = i(30),
        o = i(55);
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.3.2",
        mode: n ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e) {
    var i = Math.ceil,
        n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(12),
        r = i(6),
        a = i(3),
        s = i(21),
        l = i(34),
        c = i(29),
        u = c.get,
        d = c.enforce,
        h = String(l).split("toString");
    o("inspectSource", (function(t) {
        return l.call(t)
    })), (t.exports = function(t, e, i, o) {
        var l = !!o && !!o.unsafe,
            c = !!o && !!o.enumerable,
            u = !!o && !!o.noTargetGet;
        "function" == typeof i && ("string" != typeof e || a(i, "name") || r(i, "name", e), d(i).source = h.join("string" == typeof e ? e : "")), t !== n ? (l ? !u && t[e] && (c = !0) : delete t[e], c ? t[e] = i : r(t, e, i)) : c ? t[e] = i : s(e, i)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && u(this).source || l.call(this)
    }))
}, function(t, e, i) {
    var n = i(13);
    t.exports = function(t) {
        return Object(n(t))
    }
}, function(t, e) {
    var i = {}.toString;
    t.exports = function(t) {
        return i.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    var n = i(4);
    t.exports = function(t, e) {
        if (!n(t)) return t;
        var i, o;
        if (e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
        if ("function" == typeof(i = t.valueOf) && !n(o = i.call(t))) return o;
        if (!e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(6);
    t.exports = function(t, e) {
        try {
            o(n, t, e)
        } catch (i) {
            n[t] = e
        }
        return e
    }
}, function(t, e, i) {
    var n = i(7),
        o = i(42),
        r = i(18),
        a = i(10),
        s = i(20),
        l = i(3),
        c = i(33),
        u = Object.getOwnPropertyDescriptor;
    e.f = n ? u : function(t, e) {
        if (t = a(t), e = s(e, !0), c) try {
            return u(t, e)
        } catch (t) {}
        if (l(t, e)) return r(!o.f.call(t, e), t[e])
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, i) {
    var n = i(57),
        o = i(26),
        r = i(16),
        a = i(11),
        s = i(40),
        l = [].push,
        c = function(t) {
            var e = 1 == t,
                i = 2 == t,
                c = 3 == t,
                u = 4 == t,
                d = 6 == t,
                h = 5 == t || d;
            return function(f, p, v, g) {
                for (var m, y, b = r(f), x = o(b), w = n(p, v, 3), k = a(x.length), S = 0, C = g || s, T = e ? C(f, k) : i ? C(f, 0) : void 0; k > S; S++)
                    if ((h || S in x) && (y = w(m = x[S], S, b), t))
                        if (e) T[S] = y;
                        else if (y) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return m;
                    case 6:
                        return S;
                    case 2:
                        l.call(T, m)
                } else if (u) return !1;
                return d ? -1 : c || u ? u : T
            }
        };
    t.exports = {
        forEach: c(0),
        map: c(1),
        filter: c(2),
        some: c(3),
        every: c(4),
        find: c(5),
        findIndex: c(6)
    }
}, function(t, e, i) {
    var n = i(12),
        o = i(27),
        r = n("keys");
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(17),
        r = "".split;
    t.exports = n((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == o(t) ? r.call(t, "") : Object(t)
    } : Object
}, function(t, e) {
    var i = 0,
        n = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++i + n).toString(36)
    }
}, function(t, e, i) {
    var n = i(36),
        o = i(23).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, o)
    }
}, function(t, e, i) {
    var n, o, r, a = i(56),
        s = i(0),
        l = i(4),
        c = i(6),
        u = i(3),
        d = i(25),
        h = i(19),
        f = s.WeakMap;
    if (a) {
        var p = new f,
            v = p.get,
            g = p.has,
            m = p.set;
        n = function(t, e) {
            return m.call(p, t, e), e
        }, o = function(t) {
            return v.call(p, t) || {}
        }, r = function(t) {
            return g.call(p, t)
        }
    } else {
        var y = d("state");
        h[y] = !0, n = function(t, e) {
            return c(t, y, e), e
        }, o = function(t) {
            return u(t, y) ? t[y] : {}
        }, r = function(t) {
            return u(t, y)
        }
    }
    t.exports = {
        set: n,
        get: o,
        has: r,
        enforce: function(t) {
            return r(t) ? o(t) : n(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var i;
                if (!l(e) || (i = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return i
            }
        }
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, i) {
    var n = i(17);
    t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
    }
}, function(t, e, i) {
    var n = i(45),
        o = i(0),
        r = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? r(n[t]) || r(o[t]) : n[t] && n[t][e] || o[t] && o[t][e]
    }
}, function(t, e, i) {
    var n = i(7),
        o = i(1),
        r = i(35);
    t.exports = !n && !o((function() {
        return 7 != Object.defineProperty(r("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, i) {
    var n = i(12);
    t.exports = n("native-function-to-string", Function.toString)
}, function(t, e, i) {
    var n = i(0),
        o = i(4),
        r = n.document,
        a = o(r) && o(r.createElement);
    t.exports = function(t) {
        return a ? r.createElement(t) : {}
    }
}, function(t, e, i) {
    var n = i(3),
        o = i(10),
        r = i(39).indexOf,
        a = i(19);
    t.exports = function(t, e) {
        var i, s = o(t),
            l = 0,
            c = [];
        for (i in s) !n(a, i) && n(s, i) && c.push(i);
        for (; e.length > l;) n(s, i = e[l++]) && (~r(c, i) || c.push(i));
        return c
    }
}, function(t, e, i) {
    var n = i(8),
        o = i(60),
        r = i(23),
        a = i(19),
        s = i(61),
        l = i(35),
        c = i(25)("IE_PROTO"),
        u = function() {},
        d = function() {
            var t, e = l("iframe"),
                i = r.length;
            for (e.style.display = "none", s.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), d = t.F; i--;) delete d.prototype[r[i]];
            return d()
        };
    t.exports = Object.create || function(t, e) {
        var i;
        return null !== t ? (u.prototype = n(t), i = new u, u.prototype = null, i[c] = t) : i = d(), void 0 === e ? i : o(i, e)
    }, a[c] = !0
}, function(t, e, i) {
    var n = i(14),
        o = Math.max,
        r = Math.min;
    t.exports = function(t, e) {
        var i = n(t);
        return i < 0 ? o(i + e, 0) : r(i, e)
    }
}, function(t, e, i) {
    var n = i(10),
        o = i(11),
        r = i(38),
        a = function(t) {
            return function(e, i, a) {
                var s, l = n(e),
                    c = o(l.length),
                    u = r(a, c);
                if (t && i != i) {
                    for (; c > u;)
                        if ((s = l[u++]) != s) return !0
                } else
                    for (; c > u; u++)
                        if ((t || u in l) && l[u] === i) return t || u || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, e, i) {
    var n = i(4),
        o = i(31),
        r = i(2)("species");
    t.exports = function(t, e) {
        var i;
        return o(t) && ("function" != typeof(i = t.constructor) || i !== Array && !o(i.prototype) ? n(i) && null === (i = i[r]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === e ? 0 : e)
    }
}, function(t, e, i) {
    var n = i(36),
        o = i(23);
    t.exports = Object.keys || function(t) {
        return n(t, o)
    }
}, function(t, e, i) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        r = o && !n.call({
            1: 2
        }, 1);
    e.f = r ? function(t) {
        var e = o(this, t);
        return !!e && e.enumerable
    } : n
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(24).find,
        r = i(52),
        a = !0;
    "find" in [] && Array(1).find((function() {
        a = !1
    })), n({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        find: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r("find")
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, i) {
    t.exports = i(0)
}, function(t, e, i) {
    var n = i(1);
    t.exports = !!Object.getOwnPropertySymbols && !n((function() {
        return !String(Symbol())
    }))
}, function(t, e, i) {
    var n = i(3),
        o = i(53),
        r = i(22),
        a = i(9);
    t.exports = function(t, e) {
        for (var i = o(e), s = a.f, l = r.f, c = 0; c < i.length; c++) {
            var u = i[c];
            n(t, u) || s(t, u, l(e, u))
        }
    }
}, function(t, e, i) {
    var n = i(1),
        o = /#|\.prototype\./,
        r = function(t, e) {
            var i = s[a(t)];
            return i == c || i != l && ("function" == typeof e ? n(e) : !!e)
        },
        a = r.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        },
        s = r.data = {},
        l = r.NATIVE = "N",
        c = r.POLYFILL = "P";
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(2)("species");
    t.exports = function(t) {
        return !n((function() {
            var e = [];
            return (e.constructor = {})[o] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        }))
    }
}, function(t, e, i) {
    "use strict";
    var n = i(1);
    t.exports = function(t, e) {
        var i = [][t];
        return !i || !n((function() {
            i.call(null, e || function() {
                throw 1
            }, 1)
        }))
    }
}, function(t, e, i) {
    var n = i(2),
        o = i(37),
        r = i(6),
        a = n("unscopables"),
        s = Array.prototype;
    null == s[a] && r(s, a, o(null)), t.exports = function(t) {
        s[a][t] = !0
    }
}, function(t, e, i) {
    var n = i(32),
        o = i(28),
        r = i(44),
        a = i(8);
    t.exports = n("Reflect", "ownKeys") || function(t) {
        var e = o.f(a(t)),
            i = r.f;
        return i ? e.concat(i(t)) : e
    }
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    var n = i(0),
        o = i(21),
        r = n["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = r
}, function(t, e, i) {
    var n = i(0),
        o = i(34),
        r = n.WeakMap;
    t.exports = "function" == typeof r && /native code/.test(o.call(r))
}, function(t, e, i) {
    var n = i(49);
    t.exports = function(t, e, i) {
        if (n(t), void 0 === e) return t;
        switch (i) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(i) {
                    return t.call(e, i)
                };
            case 2:
                return function(i, n) {
                    return t.call(e, i, n)
                };
            case 3:
                return function(i, n, o) {
                    return t.call(e, i, n, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, i) {
    "use strict";
    var n, o = i(7),
        r = i(0),
        a = i(4),
        s = i(3),
        l = i(94),
        c = i(6),
        u = i(15),
        d = i(9).f,
        h = i(88),
        f = i(74),
        p = i(2),
        v = i(27),
        g = r.DataView,
        m = g && g.prototype,
        y = r.Int8Array,
        b = y && y.prototype,
        x = r.Uint8ClampedArray,
        w = x && x.prototype,
        k = y && h(y),
        S = b && h(b),
        C = Object.prototype,
        T = C.isPrototypeOf,
        M = p("toStringTag"),
        A = v("TYPED_ARRAY_TAG"),
        O = !(!r.ArrayBuffer || !g),
        I = O && !!f && "Opera" !== l(r.opera),
        P = !1,
        _ = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        E = function(t) {
            return a(t) && s(_, l(t))
        };
    for (n in _) r[n] || (I = !1);
    if ((!I || "function" != typeof k || k === Function.prototype) && (k = function() {
            throw TypeError("Incorrect invocation")
        }, I))
        for (n in _) r[n] && f(r[n], k);
    if ((!I || !S || S === C) && (S = k.prototype, I))
        for (n in _) r[n] && f(r[n].prototype, S);
    if (I && h(w) !== S && f(w, S), o && !s(S, M))
        for (n in P = !0, d(S, M, {
                get: function() {
                    return a(this) ? this[A] : void 0
                }
            }), _) r[n] && c(r[n], A, n);
    O && f && h(m) !== C && f(m, C), t.exports = {
        NATIVE_ARRAY_BUFFER: O,
        NATIVE_ARRAY_BUFFER_VIEWS: I,
        TYPED_ARRAY_TAG: P && A,
        aTypedArray: function(t) {
            if (E(t)) return t;
            throw TypeError("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
            if (f) {
                if (T.call(k, t)) return t
            } else
                for (var e in _)
                    if (s(_, n)) {
                        var i = r[e];
                        if (i && (t === i || T.call(i, t))) return t
                    } throw TypeError("Target is not a typed array constructor")
        },
        exportProto: function(t, e, i) {
            if (o) {
                if (i)
                    for (var n in _) {
                        var a = r[n];
                        a && s(a.prototype, t) && delete a.prototype[t]
                    }
                S[t] && !i || u(S, t, i ? e : I && b[t] || e)
            }
        },
        exportStatic: function(t, e, i) {
            var n, a;
            if (o) {
                if (f) {
                    if (i)
                        for (n in _)(a = r[n]) && s(a, t) && delete a[t];
                    if (k[t] && !i) return;
                    try {
                        return u(k, t, i ? e : I && y[t] || e)
                    } catch (t) {}
                }
                for (n in _) !(a = r[n]) || a[t] && !i || u(a, t, e)
            }
        },
        isView: function(t) {
            var e = l(t);
            return "DataView" === e || s(_, e)
        },
        isTypedArray: E,
        TypedArray: k,
        TypedArrayPrototype: S
    }
}, function(t, e, i) {
    "use strict";
    var n, o, r = i(89),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = a,
        c = (n = /a/, o = /b*/g, a.call(n, "a"), a.call(o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
        u = void 0 !== /()??/.exec("")[1];
    (c || u) && (l = function(t) {
        var e, i, n, o, l = this;
        return u && (i = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))), c && (e = l.lastIndex), n = a.call(l, t), c && n && (l.lastIndex = l.global ? n.index + n[0].length : e), u && n && n.length > 1 && s.call(n[0], i, (function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
        })), n
    }), t.exports = l
}, function(t, e, i) {
    var n = i(7),
        o = i(9),
        r = i(8),
        a = i(41);
    t.exports = n ? Object.defineProperties : function(t, e) {
        r(t);
        for (var i, n = a(e), s = n.length, l = 0; s > l;) o.f(t, i = n[l++], e[i]);
        return t
    }
}, function(t, e, i) {
    var n = i(32);
    t.exports = n("document", "documentElement")
}, function(t, e, i) {
    var n = i(9).f,
        o = i(3),
        r = i(2)("toStringTag");
    t.exports = function(t, e, i) {
        t && !o(t = i ? t : t.prototype, r) && n(t, r, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    "use strict";
    var n = i(10),
        o = i(52),
        r = i(63),
        a = i(29),
        s = i(91),
        l = a.set,
        c = a.getterFor("Array Iterator");
    t.exports = s(Array, "Array", (function(t, e) {
        l(this, {
            type: "Array Iterator",
            target: n(t),
            index: 0,
            kind: e
        })
    }), (function() {
        var t = c(this),
            e = t.target,
            i = t.kind,
            n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == i ? {
            value: n,
            done: !1
        } : "values" == i ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }), "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
}, function(t, e, i) {
    "use strict";
    var n = i(20),
        o = i(9),
        r = i(18);
    t.exports = function(t, e, i) {
        var a = n(e);
        a in t ? o.f(t, a, r(0, i)) : t[a] = i
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(39).indexOf,
        r = i(51),
        a = [].indexOf,
        s = !!a && 1 / [1].indexOf(1, -0) < 0,
        l = r("indexOf");
    n({
        target: "Array",
        proto: !0,
        forced: s || l
    }, {
        indexOf: function(t) {
            return s ? a.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(59);
    n({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== o
    }, {
        exec: o
    })
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(0),
        r = i(30),
        a = i(7),
        s = i(46),
        l = i(1),
        c = i(3),
        u = i(31),
        d = i(4),
        h = i(8),
        f = i(16),
        p = i(10),
        v = i(20),
        g = i(18),
        m = i(37),
        y = i(41),
        b = i(28),
        x = i(105),
        w = i(44),
        k = i(22),
        S = i(9),
        C = i(42),
        T = i(6),
        M = i(15),
        A = i(12),
        O = i(25),
        I = i(19),
        P = i(27),
        _ = i(2),
        E = i(77),
        D = i(78),
        $ = i(62),
        L = i(29),
        R = i(24).forEach,
        F = O("hidden"),
        W = _("toPrimitive"),
        N = L.set,
        V = L.getterFor("Symbol"),
        j = Object.prototype,
        H = o.Symbol,
        z = o.JSON,
        B = z && z.stringify,
        Y = k.f,
        U = S.f,
        X = x.f,
        q = C.f,
        K = A("symbols"),
        Q = A("op-symbols"),
        G = A("string-to-symbol-registry"),
        Z = A("symbol-to-string-registry"),
        J = A("wks"),
        tt = o.QObject,
        et = !tt || !tt.prototype || !tt.prototype.findChild,
        it = a && l((function() {
            return 7 != m(U({}, "a", {
                get: function() {
                    return U(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, i) {
            var n = Y(j, e);
            n && delete j[e], U(t, e, i), n && t !== j && U(j, e, n)
        } : U,
        nt = function(t, e) {
            var i = K[t] = m(H.prototype);
            return N(i, {
                type: "Symbol",
                tag: t,
                description: e
            }), a || (i.description = e), i
        },
        ot = s && "symbol" == typeof H.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return Object(t) instanceof H
        },
        rt = function(t, e, i) {
            t === j && rt(Q, e, i), h(t);
            var n = v(e, !0);
            return h(i), c(K, n) ? (i.enumerable ? (c(t, F) && t[F][n] && (t[F][n] = !1), i = m(i, {
                enumerable: g(0, !1)
            })) : (c(t, F) || U(t, F, g(1, {})), t[F][n] = !0), it(t, n, i)) : U(t, n, i)
        },
        at = function(t, e) {
            h(t);
            var i = p(e),
                n = y(i).concat(ut(i));
            return R(n, (function(e) {
                a && !st.call(i, e) || rt(t, e, i[e])
            })), t
        },
        st = function(t) {
            var e = v(t, !0),
                i = q.call(this, e);
            return !(this === j && c(K, e) && !c(Q, e)) && (!(i || !c(this, e) || !c(K, e) || c(this, F) && this[F][e]) || i)
        },
        lt = function(t, e) {
            var i = p(t),
                n = v(e, !0);
            if (i !== j || !c(K, n) || c(Q, n)) {
                var o = Y(i, n);
                return !o || !c(K, n) || c(i, F) && i[F][n] || (o.enumerable = !0), o
            }
        },
        ct = function(t) {
            var e = X(p(t)),
                i = [];
            return R(e, (function(t) {
                c(K, t) || c(I, t) || i.push(t)
            })), i
        },
        ut = function(t) {
            var e = t === j,
                i = X(e ? Q : p(t)),
                n = [];
            return R(i, (function(t) {
                !c(K, t) || e && !c(j, t) || n.push(K[t])
            })), n
        };
    s || (M((H = function() {
        if (this instanceof H) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = P(t),
            i = function(t) {
                this === j && i.call(Q, t), c(this, F) && c(this[F], e) && (this[F][e] = !1), it(this, e, g(1, t))
            };
        return a && et && it(j, e, {
            configurable: !0,
            set: i
        }), nt(e, t)
    }).prototype, "toString", (function() {
        return V(this).tag
    })), C.f = st, S.f = rt, k.f = lt, b.f = x.f = ct, w.f = ut, a && (U(H.prototype, "description", {
        configurable: !0,
        get: function() {
            return V(this).description
        }
    }), r || M(j, "propertyIsEnumerable", st, {
        unsafe: !0
    })), E.f = function(t) {
        return nt(_(t), t)
    }), n({
        global: !0,
        wrap: !0,
        forced: !s,
        sham: !s
    }, {
        Symbol: H
    }), R(y(J), (function(t) {
        D(t)
    })), n({
        target: "Symbol",
        stat: !0,
        forced: !s
    }, {
        for: function(t) {
            var e = String(t);
            if (c(G, e)) return G[e];
            var i = H(e);
            return G[e] = i, Z[i] = e, i
        },
        keyFor: function(t) {
            if (!ot(t)) throw TypeError(t + " is not a symbol");
            if (c(Z, t)) return Z[t]
        },
        useSetter: function() {
            et = !0
        },
        useSimple: function() {
            et = !1
        }
    }), n({
        target: "Object",
        stat: !0,
        forced: !s,
        sham: !a
    }, {
        create: function(t, e) {
            return void 0 === e ? m(t) : at(m(t), e)
        },
        defineProperty: rt,
        defineProperties: at,
        getOwnPropertyDescriptor: lt
    }), n({
        target: "Object",
        stat: !0,
        forced: !s
    }, {
        getOwnPropertyNames: ct,
        getOwnPropertySymbols: ut
    }), n({
        target: "Object",
        stat: !0,
        forced: l((function() {
            w.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(t) {
            return w.f(f(t))
        }
    }), z && n({
        target: "JSON",
        stat: !0,
        forced: !s || l((function() {
            var t = H();
            return "[null]" != B([t]) || "{}" != B({
                a: t
            }) || "{}" != B(Object(t))
        }))
    }, {
        stringify: function(t) {
            for (var e, i, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
            if (i = e = n[1], (d(e) || void 0 !== t) && !ot(t)) return u(e) || (e = function(t, e) {
                if ("function" == typeof i && (e = i.call(this, t, e)), !ot(e)) return e
            }), n[1] = e, B.apply(z, n)
        }
    }), H.prototype[W] || T(H.prototype, W, H.prototype.valueOf), $(H, "Symbol"), I[F] = !0
}, function(t, e, i) {
    var n = i(15),
        o = i(107),
        r = Object.prototype;
    o !== r.toString && n(r, "toString", o, {
        unsafe: !0
    })
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(26),
        r = i(10),
        a = i(51),
        s = [].join,
        l = o != Object,
        c = a("join", ",");
    n({
        target: "Array",
        proto: !0,
        forced: l || c
    }, {
        join: function(t) {
            return s.call(r(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, i) {
    var n = i(13),
        o = "[" + i(67) + "]",
        r = RegExp("^" + o + o + "*"),
        a = RegExp(o + o + "*$"),
        s = function(t) {
            return function(e) {
                var i = String(n(e));
                return 1 & t && (i = i.replace(r, "")), 2 & t && (i = i.replace(a, "")), i
            }
        };
    t.exports = {
        start: s(1),
        end: s(2),
        trim: s(3)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(1),
        r = i(31),
        a = i(4),
        s = i(16),
        l = i(11),
        c = i(65),
        u = i(40),
        d = i(50),
        h = i(2)("isConcatSpreadable"),
        f = !o((function() {
            var t = [];
            return t[h] = !1, t.concat()[0] !== t
        })),
        p = d("concat"),
        v = function(t) {
            if (!a(t)) return !1;
            var e = t[h];
            return void 0 !== e ? !!e : r(t)
        };
    n({
        target: "Array",
        proto: !0,
        forced: !f || !p
    }, {
        concat: function(t) {
            var e, i, n, o, r, a = s(this),
                d = u(a, 0),
                h = 0;
            for (e = -1, n = arguments.length; e < n; e++)
                if (r = -1 === e ? a : arguments[e], v(r)) {
                    if (h + (o = l(r.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (i = 0; i < o; i++, h++) i in r && c(d, h, r[i])
                } else {
                    if (h >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    c(d, h++, r)
                } return d.length = h, d
        }
    })
}, function(t, e, i) {
    var n = i(8),
        o = i(97);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            i = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array
        } catch (t) {}
        return function(i, r) {
            return n(i), o(r), e ? t.call(i, r) : i.__proto__ = r, i
        }
    }() : void 0)
}, function(t, e, i) {
    var n = i(14),
        o = i(13),
        r = function(t) {
            return function(e, i) {
                var r, a, s = String(o(e)),
                    l = n(i),
                    c = s.length;
                return l < 0 || l >= c ? t ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : r : t ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: r(!1),
        charAt: r(!0)
    }
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(t, e, i) {
    e.f = i(2)
}, function(t, e, i) {
    var n = i(45),
        o = i(3),
        r = i(77),
        a = i(9).f;
    t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = {});
        o(e, t) || a(e, t, {
            value: r.f(t)
        })
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(7),
        r = i(0),
        a = i(3),
        s = i(4),
        l = i(9).f,
        c = i(47),
        u = r.Symbol;
    if (o && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
        var d = {},
            h = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof h ? new u(t) : void 0 === t ? u() : u(t);
                return "" === t && (d[e] = !0), e
            };
        c(h, u);
        var f = h.prototype = u.prototype;
        f.constructor = h;
        var p = f.toString,
            v = "Symbol(test)" == String(u("test")),
            g = /^Symbol\((.*)\)[^)]+$/;
        l(f, "description", {
            configurable: !0,
            get: function() {
                var t = s(this) ? this.valueOf() : this,
                    e = p.call(t);
                if (a(d, t)) return "";
                var i = v ? e.slice(7, -1) : e.replace(g, "$1");
                return "" === i ? void 0 : i
            }
        }), n({
            global: !0,
            forced: !0
        }, {
            Symbol: h
        })
    }
}, function(t, e, i) {
    i(78)("iterator")
}, function(t, e, i) {
    "use strict";
    var n = i(75).charAt,
        o = i(29),
        r = i(91),
        a = o.set,
        s = o.getterFor("String Iterator");
    r(String, "String", (function(t) {
        a(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = s(this),
            i = e.string,
            o = e.index;
        return o >= i.length ? {
            value: void 0,
            done: !0
        } : (t = n(i, o), e.index += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(6),
        o = i(15),
        r = i(1),
        a = i(2),
        s = i(59),
        l = a("species"),
        c = !r((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        u = !r((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var i = "ab".split(t);
            return 2 !== i.length || "a" !== i[0] || "b" !== i[1]
        }));
    t.exports = function(t, e, i, d) {
        var h = a(t),
            f = !r((function() {
                var e = {};
                return e[h] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            p = f && !r((function() {
                var e = !1,
                    i = /a/;
                return i.exec = function() {
                    return e = !0, null
                }, "split" === t && (i.constructor = {}, i.constructor[l] = function() {
                    return i
                }), i[h](""), !e
            }));
        if (!f || !p || "replace" === t && !c || "split" === t && !u) {
            var v = /./ [h],
                g = i(h, "" [t], (function(t, e, i, n, o) {
                    return e.exec === s ? f && !o ? {
                        done: !0,
                        value: v.call(e, i, n)
                    } : {
                        done: !0,
                        value: t.call(i, e, n)
                    } : {
                        done: !1
                    }
                })),
                m = g[0],
                y = g[1];
            o(String.prototype, t, m), o(RegExp.prototype, h, 2 == e ? function(t, e) {
                return y.call(t, this, e)
            } : function(t) {
                return y.call(t, this)
            }), d && n(RegExp.prototype[h], "sham", !0)
        }
    }
}, function(t, e, i) {
    var n = i(17),
        o = i(59);
    t.exports = function(t, e) {
        var i = t.exec;
        if ("function" == typeof i) {
            var r = i.call(t, e);
            if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== n(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(85),
        r = i(64),
        a = i(6),
        s = i(2),
        l = s("iterator"),
        c = s("toStringTag"),
        u = r.values;
    for (var d in o) {
        var h = n[d],
            f = h && h.prototype;
        if (f) {
            if (f[l] !== u) try {
                a(f, l, u)
            } catch (t) {
                f[l] = u
            }
            if (f[c] || a(f, c, d), o[d])
                for (var p in r)
                    if (f[p] !== r[p]) try {
                        a(f, p, r[p])
                    } catch (t) {
                        f[p] = r[p]
                    }
        }
    }
}, function(t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, e, i) {
    "use strict";
    var n = i(82),
        o = i(8),
        r = i(16),
        a = i(11),
        s = i(14),
        l = i(13),
        c = i(90),
        u = i(83),
        d = Math.max,
        h = Math.min,
        f = Math.floor,
        p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        v = /\$([$&'`]|\d\d?)/g;
    n("replace", 2, (function(t, e, i) {
        return [function(i, n) {
            var o = l(this),
                r = null == i ? void 0 : i[t];
            return void 0 !== r ? r.call(i, o, n) : e.call(String(o), i, n)
        }, function(t, r) {
            var l = i(e, t, this, r);
            if (l.done) return l.value;
            var f = o(t),
                p = String(this),
                v = "function" == typeof r;
            v || (r = String(r));
            var g = f.global;
            if (g) {
                var m = f.unicode;
                f.lastIndex = 0
            }
            for (var y = [];;) {
                var b = u(f, p);
                if (null === b) break;
                if (y.push(b), !g) break;
                "" === String(b[0]) && (f.lastIndex = c(p, a(f.lastIndex), m))
            }
            for (var x, w = "", k = 0, S = 0; S < y.length; S++) {
                b = y[S];
                for (var C = String(b[0]), T = d(h(s(b.index), p.length), 0), M = [], A = 1; A < b.length; A++) M.push(void 0 === (x = b[A]) ? x : String(x));
                var O = b.groups;
                if (v) {
                    var I = [C].concat(M, T, p);
                    void 0 !== O && I.push(O);
                    var P = String(r.apply(void 0, I))
                } else P = n(C, p, T, M, O, r);
                T >= k && (w += p.slice(k, T) + P, k = T + C.length)
            }
            return w + p.slice(k)
        }];

        function n(t, i, n, o, a, s) {
            var l = n + t.length,
                c = o.length,
                u = v;
            return void 0 !== a && (a = r(a), u = p), e.call(s, u, (function(e, r) {
                var s;
                switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return i.slice(0, n);
                    case "'":
                        return i.slice(l);
                    case "<":
                        s = a[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 === u) return e;
                        if (u > c) {
                            var d = f(u / 10);
                            return 0 === d ? e : d <= c ? void 0 === o[d - 1] ? r.charAt(1) : o[d - 1] + r.charAt(1) : e
                        }
                        s = o[u - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(24).filter;
    n({
        target: "Array",
        proto: !0,
        forced: !i(50)("filter")
    }, {
        filter: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    var n = i(3),
        o = i(16),
        r = i(25),
        a = i(109),
        s = r("IE_PROTO"),
        l = Object.prototype;
    t.exports = a ? Object.getPrototypeOf : function(t) {
        return t = o(t), n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null
    }
}, function(t, e, i) {
    "use strict";
    var n = i(8);
    t.exports = function() {
        var t = n(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, i) {
    "use strict";
    var n = i(75).charAt;
    t.exports = function(t, e, i) {
        return e + (i ? n(t, e).length : 1)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(108),
        r = i(88),
        a = i(74),
        s = i(62),
        l = i(6),
        c = i(15),
        u = i(2),
        d = i(30),
        h = i(63),
        f = i(92),
        p = f.IteratorPrototype,
        v = f.BUGGY_SAFARI_ITERATORS,
        g = u("iterator"),
        m = function() {
            return this
        };
    t.exports = function(t, e, i, u, f, y, b) {
        o(i, e, u);
        var x, w, k, S = function(t) {
                if (t === f && O) return O;
                if (!v && t in M) return M[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new i(this, t)
                        }
                }
                return function() {
                    return new i(this)
                }
            },
            C = e + " Iterator",
            T = !1,
            M = t.prototype,
            A = M[g] || M["@@iterator"] || f && M[f],
            O = !v && A || S(f),
            I = "Array" == e && M.entries || A;
        if (I && (x = r(I.call(new t)), p !== Object.prototype && x.next && (d || r(x) === p || (a ? a(x, p) : "function" != typeof x[g] && l(x, g, m)), s(x, C, !0, !0), d && (h[C] = m))), "values" == f && A && "values" !== A.name && (T = !0, O = function() {
                return A.call(this)
            }), d && !b || M[g] === O || l(M, g, O), h[e] = O, f)
            if (w = {
                    values: S("values"),
                    keys: y ? O : S("keys"),
                    entries: S("entries")
                }, b)
                for (k in w) !v && !T && k in M || c(M, k, w[k]);
            else n({
                target: e,
                proto: !0,
                forced: v || T
            }, w);
        return w
    }
}, function(t, e, i) {
    "use strict";
    var n, o, r, a = i(88),
        s = i(6),
        l = i(3),
        c = i(2),
        u = i(30),
        d = c("iterator"),
        h = !1;
    [].keys && ("next" in (r = [].keys()) ? (o = a(a(r))) !== Object.prototype && (n = o) : h = !0), null == n && (n = {}), u || l(n, d) || s(n, d, (function() {
        return this
    })), t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: h
    }
}, function(t, e, i) {
    var n = i(15),
        o = Date.prototype,
        r = o.toString,
        a = o.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(o, "toString", (function() {
        var t = a.call(this);
        return t == t ? r.call(this) : "Invalid Date"
    }))
}, function(t, e, i) {
    var n = i(17),
        o = i(2)("toStringTag"),
        r = "Arguments" == n(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, i, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), o)) ? i : r ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(101);
    n({
        target: "Array",
        proto: !0,
        forced: [].forEach != o
    }, {
        forEach: o
    })
}, function(t, e, i) {
    var n = i(0),
        o = i(85),
        r = i(101),
        a = i(6);
    for (var s in o) {
        var l = n[s],
            c = l && l.prototype;
        if (c && c.forEach !== r) try {
            a(c, "forEach", r)
        } catch (t) {
            c.forEach = r
        }
    }
}, function(t, e, i) {
    var n = i(4);
    t.exports = function(t) {
        if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function(t, e, i) {
    var n = i(4),
        o = i(17),
        r = i(2)("match");
    t.exports = function(t) {
        var e;
        return n(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == o(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, i) {
    "use strict";
    var n = i(82),
        o = i(98),
        r = i(8),
        a = i(13),
        s = i(103),
        l = i(90),
        c = i(11),
        u = i(83),
        d = i(59),
        h = i(1),
        f = [].push,
        p = Math.min,
        v = !h((function() {
            return !RegExp(4294967295, "y")
        }));
    n("split", 2, (function(t, e, i) {
        var n;
        return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, i) {
            var n = String(a(this)),
                r = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === r) return [];
            if (void 0 === t) return [n];
            if (!o(t)) return e.call(n, t, r);
            for (var s, l, c, u = [], h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, v = new RegExp(t.source, h + "g");
                (s = d.call(v, n)) && !((l = v.lastIndex) > p && (u.push(n.slice(p, s.index)), s.length > 1 && s.index < n.length && f.apply(u, s.slice(1)), c = s[0].length, p = l, u.length >= r));) v.lastIndex === s.index && v.lastIndex++;
            return p === n.length ? !c && v.test("") || u.push("") : u.push(n.slice(p)), u.length > r ? u.slice(0, r) : u
        } : "0".split(void 0, 0).length ? function(t, i) {
            return void 0 === t && 0 === i ? [] : e.call(this, t, i)
        } : e, [function(e, i) {
            var o = a(this),
                r = null == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, o, i) : n.call(String(o), e, i)
        }, function(t, o) {
            var a = i(n, t, this, o, n !== e);
            if (a.done) return a.value;
            var d = r(t),
                h = String(this),
                f = s(d, RegExp),
                g = d.unicode,
                m = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (v ? "y" : "g"),
                y = new f(v ? d : "^(?:" + d.source + ")", m),
                b = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === b) return [];
            if (0 === h.length) return null === u(y, h) ? [h] : [];
            for (var x = 0, w = 0, k = []; w < h.length;) {
                y.lastIndex = v ? w : 0;
                var S, C = u(y, v ? h : h.slice(w));
                if (null === C || (S = p(c(y.lastIndex + (v ? 0 : w)), h.length)) === x) w = l(h, w, g);
                else {
                    if (k.push(h.slice(x, w)), k.length === b) return k;
                    for (var T = 1; T <= C.length - 1; T++)
                        if (k.push(C[T]), k.length === b) return k;
                    w = x = S
                }
            }
            return k.push(h.slice(x)), k
        }]
    }), !v)
}, function(t, e, i) {
    "use strict";
    var n = i(24).forEach,
        o = i(51);
    t.exports = o("forEach") ? function(t) {
        return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
    } : [].forEach
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(4),
        r = i(31),
        a = i(38),
        s = i(11),
        l = i(10),
        c = i(65),
        u = i(50),
        d = i(2)("species"),
        h = [].slice,
        f = Math.max;
    n({
        target: "Array",
        proto: !0,
        forced: !u("slice")
    }, {
        slice: function(t, e) {
            var i, n, u, p = l(this),
                v = s(p.length),
                g = a(t, v),
                m = a(void 0 === e ? v : e, v);
            if (r(p) && ("function" != typeof(i = p.constructor) || i !== Array && !r(i.prototype) ? o(i) && null === (i = i[d]) && (i = void 0) : i = void 0, i === Array || void 0 === i)) return h.call(p, g, m);
            for (n = new(void 0 === i ? Array : i)(f(m - g, 0)), u = 0; g < m; g++, u++) g in p && c(n, u, p[g]);
            return n.length = u, n
        }
    })
}, function(t, e, i) {
    var n = i(8),
        o = i(49),
        r = i(2)("species");
    t.exports = function(t, e) {
        var i, a = n(t).constructor;
        return void 0 === a || null == (i = n(a)[r]) ? e : o(i)
    }
}, function(t, e, i) {
    var n = i(5),
        o = i(16),
        r = i(41);
    n({
        target: "Object",
        stat: !0,
        forced: i(1)((function() {
            r(1)
        }))
    }, {
        keys: function(t) {
            return r(o(t))
        }
    })
}, function(t, e, i) {
    var n = i(10),
        o = i(28).f,
        r = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == r.call(t) ? function(t) {
            try {
                return o(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : o(n(t))
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(24).map;
    n({
        target: "Array",
        proto: !0,
        forced: !i(50)("map")
    }, {
        map: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    "use strict";
    var n = i(94),
        o = {};
    o[i(2)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function() {
        return "[object " + n(this) + "]"
    } : o.toString
}, function(t, e, i) {
    "use strict";
    var n = i(92).IteratorPrototype,
        o = i(37),
        r = i(18),
        a = i(62),
        s = i(63),
        l = function() {
            return this
        };
    t.exports = function(t, e, i) {
        var c = e + " Iterator";
        return t.prototype = o(n, {
            next: r(1, i)
        }), a(t, c, !1, !0), s[c] = l, t
    }
}, function(t, e, i) {
    var n = i(1);
    t.exports = !n((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(38),
        r = i(14),
        a = i(11),
        s = i(16),
        l = i(40),
        c = i(65),
        u = i(50),
        d = Math.max,
        h = Math.min;
    n({
        target: "Array",
        proto: !0,
        forced: !u("splice")
    }, {
        splice: function(t, e) {
            var i, n, u, f, p, v, g = s(this),
                m = a(g.length),
                y = o(t, m),
                b = arguments.length;
            if (0 === b ? i = n = 0 : 1 === b ? (i = 0, n = m - y) : (i = b - 2, n = h(d(r(e), 0), m - y)), m + i - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (u = l(g, n), f = 0; f < n; f++)(p = y + f) in g && c(u, f, g[p]);
            if (u.length = n, i < n) {
                for (f = y; f < m - n; f++) v = f + i, (p = f + n) in g ? g[v] = g[p] : delete g[v];
                for (f = m; f > m - n + i; f--) delete g[f - 1]
            } else if (i > n)
                for (f = m - n; f > y; f--) v = f + i - 1, (p = f + n - 1) in g ? g[v] = g[p] : delete g[v];
            for (f = 0; f < i; f++) g[f + y] = arguments[f + 2];
            return g.length = m - n + i, u
        }
    })
}, function(t, e, i) {
    "use strict";
    var n = i(7),
        o = i(0),
        r = i(48),
        a = i(15),
        s = i(3),
        l = i(17),
        c = i(115),
        u = i(20),
        d = i(1),
        h = i(37),
        f = i(28).f,
        p = i(22).f,
        v = i(9).f,
        g = i(72).trim,
        m = o.Number,
        y = m.prototype,
        b = "Number" == l(h(y)),
        x = function(t) {
            var e, i, n, o, r, a, s, l, c = u(t, !1);
            if ("string" == typeof c && c.length > 2)
                if (43 === (e = (c = g(c)).charCodeAt(0)) || 45 === e) {
                    if (88 === (i = c.charCodeAt(2)) || 120 === i) return NaN
                } else if (48 === e) {
                switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        n = 2, o = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8, o = 55;
                        break;
                    default:
                        return +c
                }
                for (a = (r = c.slice(2)).length, s = 0; s < a; s++)
                    if ((l = r.charCodeAt(s)) < 48 || l > o) return NaN;
                return parseInt(r, n)
            }
            return +c
        };
    if (r("Number", !m(" 0o1") || !m("0b1") || m("+0x1"))) {
        for (var w, k = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    i = this;
                return i instanceof k && (b ? d((function() {
                    y.valueOf.call(i)
                })) : "Number" != l(i)) ? c(new m(x(e)), i, k) : x(e)
            }, S = n ? f(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), C = 0; S.length > C; C++) s(m, w = S[C]) && !s(k, w) && v(k, w, p(m, w));
        k.prototype = y, y.constructor = k, a(o, "Number", k)
    }
}, function(t, e, i) {
    var n = i(5),
        o = i(121);
    n({
        global: !0,
        forced: parseFloat != o
    }, {
        parseFloat: o
    })
}, function(t, e, i) {
    "use strict";
    var n = i(15),
        o = i(8),
        r = i(1),
        a = i(89),
        s = RegExp.prototype,
        l = s.toString,
        c = r((function() {
            return "/a/b" != l.call({
                source: "a",
                flags: "b"
            })
        })),
        u = "toString" != l.name;
    (c || u) && n(RegExp.prototype, "toString", (function() {
        var t = o(this),
            e = String(t.source),
            i = t.flags;
        return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in s) ? a.call(t) : i)
    }), {
        unsafe: !0
    })
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(72).trim;
    n({
        target: "String",
        proto: !0,
        forced: i(122)("trim")
    }, {
        trim: function() {
            return o(this)
        }
    })
}, function(t, e, i) {
    var n = i(4),
        o = i(74);
    t.exports = function(t, e, i) {
        var r, a;
        return o && "function" == typeof(r = e.constructor) && r !== i && n(a = r.prototype) && a !== i.prototype && o(t, a), t
    }
}, function(t, e, i) {
    "use strict";
    var n = i(82),
        o = i(8),
        r = i(11),
        a = i(13),
        s = i(90),
        l = i(83);
    n("match", 1, (function(t, e, i) {
        return [function(e) {
            var i = a(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, i) : new RegExp(e)[t](String(i))
        }, function(t) {
            var n = i(e, t, this);
            if (n.done) return n.value;
            var a = o(t),
                c = String(this);
            if (!a.global) return l(a, c);
            var u = a.unicode;
            a.lastIndex = 0;
            for (var d, h = [], f = 0; null !== (d = l(a, c));) {
                var p = String(d[0]);
                h[f] = p, "" === p && (a.lastIndex = s(c, r(a.lastIndex), u)), f++
            }
            return 0 === f ? null : h
        }]
    }))
}, function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, "default", (function() {
        return o
    }));
    i(73), i(87), i(43), i(66), i(71), i(68), i(86), i(100), i(114);

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var o = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.view = e
        }
        var e, i, o;
        return e = t, (i = [{
            key: "destroy",
            value: function() {
                var t = this.view.$nativeSelect.data("select-id");
                this.view.$nativeSelect.data("select-id", null).removeClass("initialized"), this.view.$nativeSelect.parent().find("span.caret").remove(), this.view.$nativeSelect.parent().find("input").remove(), this.view.$nativeSelect.unwrap(), $("ul#select-options-".concat(t)).remove()
            }
        }, {
            key: "render",
            value: function() {
                this.setWrapperClasses(), this.setMaterialSelectInitialValue(), this.view.$nativeSelect.data("select-id", this.view.properties.id), this.view.$nativeSelect.before(this.view.$selectWrapper), this.view.options.showResetButton && this.appendResetButton(), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSelectLabel(), this.appendCustomTemplateParts(), this.shouldValidate && this.appendValidationFeedbackElements(), this.isRequired && this.enableValidation(), this.isDisabled || (this.setMaterialOptionsListMaxHeight(), this.view.dropdown = this.view.$materialSelect.dropdown({
                    hover: !1,
                    closeOnClick: !1,
                    resetScroll: !1
                })), this.shouldInheritTabindex && this.view.$materialSelect.attr("tabindex", this.view.$nativeSelect.attr("tabindex")), this.isDefaultMaterialInput && this.view.$mainLabel.css("top", "-7px"), this.isCustomSelect && this.view.$materialSelect.css({
                    display: "inline-block",
                    width: "100%",
                    height: "calc(1.5em + .75rem + 2px)",
                    padding: ".375rem 1.75rem .375rem .75rem",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    backgroundColor: "#fff",
                    border: "1px solid #ced4da"
                }), this.addAccessibilityAttributes(), this.markInitialized()
            }
        }, {
            key: "setWrapperClasses",
            value: function() {
                this.isDefaultMaterialInput ? this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class").split(" ").filter((function(t) {
                    return "md-form" !== t
                })).join(" ")).css({
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem"
                }) : this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class"))
            }
        }, {
            key: "setMaterialSelectInitialValue",
            value: function() {
                if (this.view.options.placeholder) this.view.$materialSelect.attr("placeholder", this.view.options.placeholder), this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length || this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');
                else {
                    var t = this.view.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
                    this.view.$materialSelect.val(t)
                }
            }
        }, {
            key: "appendDropdownIcon",
            value: function() {
                this.isDisabled && this.view.$dropdownIcon.addClass("disabled"), this.view.$selectWrapper.append(this.view.$dropdownIcon)
            }
        }, {
            key: "appendResetButton",
            value: function() {
                this.isDisabled && this.view.$btnReset.addClass("disabled"), -1 === this.view.$nativeSelect.get(0).selectedIndex && this.view.$btnReset.hide(), this.view.$selectWrapper.append(this.view.$btnReset)
            }
        }, {
            key: "appendMaterialSelect",
            value: function() {
                this.view.$selectWrapper.append(this.view.$materialSelect)
            }
        }, {
            key: "appendMaterialOptionsList",
            value: function() {
                this.isSearchable && this.appendSearchInputOption(), this.isEditable && this.isSearchable && this.appendAddOptionBtn(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.view.$selectWrapper.append(this.view.$materialOptionsList)
            }
        }, {
            key: "appendNativeSelect",
            value: function() {
                this.view.$nativeSelect.appendTo(this.view.$selectWrapper)
            }
        }, {
            key: "appendSelectLabel",
            value: function() {
                (this.view.$materialSelect.val() || this.view.options.placeholder) && this.view.$mainLabel.addClass("active"), this.view.$mainLabel[this.isDisabled ? "addClass" : "removeClass"]("disabled"), this.view.$mainLabel.appendTo(this.view.$selectWrapper)
            }
        }, {
            key: "appendCustomTemplateParts",
            value: function() {
                var t = this;
                this.view.$customTemplateParts.each((function(e, i) {
                    $(i).appendTo(t.view.$materialOptionsList).wrap("<li></li>")
                })), this.view.$btnSave.appendTo(this.view.$materialOptionsList)
            }
        }, {
            key: "appendValidationFeedbackElements",
            value: function() {
                this.view.$validFeedback.insertAfter(this.view.$selectWrapper), this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper)
            }
        }, {
            key: "enableValidation",
            value: function() {
                this.view.$nativeSelect.css({
                    position: "absolute",
                    top: "1rem",
                    left: "0",
                    height: "0",
                    width: "0",
                    opacity: "0",
                    padding: "0",
                    "pointer-events": "none"
                }), -1 === this.view.$nativeSelect.attr("style").indexOf("inline!important") && this.view.$nativeSelect.attr("style", "".concat(this.view.$nativeSelect.attr("style"), " display: inline!important;")), this.view.$nativeSelect.attr("tabindex", -1), this.view.$nativeSelect.data("inherit-tabindex", !1)
            }
        }, {
            key: "setMaterialOptionsListMaxHeight",
            value: function() {
                var t = $("<div />").appendTo($("body"));
                t.css({
                    position: "absolute !important",
                    visibility: "hidden !important",
                    display: "block !important"
                }), this.view.$materialOptionsList.show();
                var e = this.view.$materialOptionsList.clone().appendTo(t),
                    i = this.view.options.visibleOptions,
                    n = 0,
                    o = e.find("li").not(".disabled"),
                    r = o.first().height(),
                    a = o.length;
                if (this.isSearchable && (n += this.view.$searchInput.height()), this.isMultiple && (n += this.view.$toggleAll.height()), this.view.$materialOptionsList.hide(), t.remove(), i >= 0 && i < a) {
                    var s = r * i + n;
                    this.view.$materialOptionsList.css("max-height", s), this.view.$materialSelect.data("maxheight", s)
                }
            }
        }, {
            key: "addAccessibilityAttributes",
            value: function() {
                this.view.$materialSelect.attr({
                    role: this.isSearchable ? "combobox" : "listbox",
                    "aria-multiselectable": this.isMultiple,
                    "aria-disabled": this.isDisabled,
                    "aria-required": this.isRequired,
                    "aria-labelledby": this.view.$mainLabel.attr("id"),
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this.view.$searchInput && this.view.$searchInput.attr("role", "searchbox"), this.view.$materialOptionsList.find("li").each((function() {
                    var t = $(this);
                    t.attr({
                        role: "option",
                        "aria-selected": t.hasClass("active"),
                        "aria-disabled": t.hasClass("disabled")
                    })
                }))
            }
        }, {
            key: "markInitialized",
            value: function() {
                this.view.$nativeSelect.addClass("initialized")
            }
        }, {
            key: "appendSearchInputOption",
            value: function() {
                var t = this.view.$nativeSelect.attr("searchable"),
                    e = this.isDefaultMaterialInput ? "" : "md-form",
                    i = this.isDefaultMaterialInput ? "select-default mb-2" : "";
                this.view.$searchInput = $('<span class="search-wrap ml-2"><div class="'.concat(e, ' mt-0"><input type="text" class="search w-100 d-block ').concat(i, '" tabindex="-1" placeholder="').concat(t, '"></div></span>')), this.view.$materialOptionsList.append(this.view.$searchInput), this.view.$searchInput.on("click", (function(t) {
                    return t.stopPropagation()
                }))
            }
        }, {
            key: "appendAddOptionBtn",
            value: function() {
                this.view.$searchInput.append(this.view.$addOptionBtn)
            }
        }, {
            key: "buildMaterialOptions",
            value: function() {
                var t = this;
                this.view.$nativeSelectChildren.each((function(e, i) {
                    var n = $(i);
                    if (n.is("option")) t.buildSingleOption(n, t.isMultiple ? "multiple" : "");
                    else if (n.is("optgroup")) {
                        var o = $('<li class="optgroup"><span>'.concat(n.attr("label"), "</span></li>"));
                        t.view.$materialOptionsList.append(o), n.children("option").each((function(e, i) {
                            t.buildSingleOption($(i), "optgroup-option")
                        }))
                    }
                }))
            }
        }, {
            key: "appendToggleAllCheckbox",
            value: function() {
                var t = this.view.$materialOptionsList.find("li").first();
                t.hasClass("disabled") && t.find("input").prop("disabled") ? t.after(this.view.$toggleAll) : this.view.$materialOptionsList.find("li").first().before(this.view.$toggleAll)
            }
        }, {
            key: "addNewOption",
            value: function() {
                var t = this.view.$searchInput.find("input").val(),
                    e = $('<option value="'.concat(t.toLowerCase(), '" selected>').concat(t, "</option>")).prop("selected", !0);
                this.isMultiple || this.view.$nativeSelectChildren.each((function(t, e) {
                    $(e).attr("selected", !1)
                })), this.view.$nativeSelect.append(e)
            }
        }, {
            key: "buildSingleOption",
            value: function(t, e) {
                var i = t.is(":disabled") ? "disabled" : "",
                    n = t.is(":selected") ? "active" : "",
                    o = "optgroup-option" === e ? "optgroup-option" : "",
                    r = t.data("icon"),
                    a = t.data("fas") ? '<i class="fa-pull-right m-2 fas fa-'.concat(t.data("fas"), " ").concat(this.view.options.fasClasses, '"></i> ') : "",
                    s = t.data("far") ? '<i class="fa-pull-right m-2 far fa-'.concat(t.data("far"), " ").concat(this.view.options.farClasses, '"></i> ') : "",
                    l = t.data("fab") ? '<i class="fa-pull-right m-2 fab fa-'.concat(t.data("fab"), " ").concat(this.view.options.fabClasses, '"></i> ') : "",
                    c = t.attr("class"),
                    u = r ? '<img alt="" src="'.concat(r, '" class="').concat(c, '">') : "",
                    d = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(i, "/><label></label>") : "";
                this.view.$materialOptionsList.append($('<li class="'.concat(i, " ").concat(n, " ").concat(o, " ").concat(this.view.options.copyClassesOption ? c : "", ' ">').concat(u, '<span class="filtrable">').concat(d, " ").concat(t.html(), " ").concat(a, " ").concat(s, " ").concat(l, "</span></li>")))
            }
        }, {
            key: "shouldValidate",
            get: function() {
                return this.view.options.validate
            }
        }, {
            key: "shouldInheritTabindex",
            get: function() {
                return !1 !== this.view.$nativeSelect.data("inherit-tabindex")
            }
        }, {
            key: "isMultiple",
            get: function() {
                return this.view.isMultiple
            }
        }, {
            key: "isSearchable",
            get: function() {
                return this.view.isSearchable
            }
        }, {
            key: "isRequired",
            get: function() {
                return this.view.isRequired
            }
        }, {
            key: "isEditable",
            get: function() {
                return this.view.isEditable
            }
        }, {
            key: "isDisabled",
            get: function() {
                return this.view.isDisabled
            }
        }, {
            key: "isDefaultMaterialInput",
            get: function() {
                return this.view.options.defaultMaterialInput
            }
        }, {
            key: "isCustomSelect",
            get: function() {
                return this.view.$materialSelect.hasClass("custom-select") && this.view.$materialSelect.hasClass("select-dropdown")
            }
        }]) && n(e.prototype, i), o && n(e, o), t
    }()
}, function(t, e) {
    t.exports = jQuery
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(39).includes,
        r = i(52);
    n({
        target: "Array",
        proto: !0
    }, {
        includes: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r("includes")
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(125),
        r = i(13);
    n({
        target: "String",
        proto: !0,
        forced: !i(126)("includes")
    }, {
        includes: function(t) {
            return !!~String(r(this)).indexOf(o(t), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    var n = i(0),
        o = i(72).trim,
        r = i(67),
        a = n.parseFloat,
        s = 1 / a(r + "-0") != -1 / 0;
    t.exports = s ? function(t) {
        var e = o(String(t)),
            i = a(e);
        return 0 === i && "-" == e.charAt(0) ? -0 : i
    } : a
}, function(t, e, i) {
    var n = i(1),
        o = i(67);
    t.exports = function(t) {
        return n((function() {
            return !!o[t]() || "​᠎" != "​᠎" [t]() || o[t].name !== t
        }))
    }
}, function(t, e, i) {
    var n = i(7),
        o = i(9).f,
        r = Function.prototype,
        a = r.toString,
        s = /^\s*function ([^ (]*)/;
    !n || "name" in r || o(r, "name", {
        configurable: !0,
        get: function() {
            try {
                return a.call(this).match(s)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, "default", (function() {
        return r
    }));
    i(73), i(87), i(43), i(119), i(66), i(106), i(104), i(68), i(120), i(86), i(114);
    var n = i(117);

    function o(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var r = function() {
        function t(e, i) {
            var o = i.options,
                r = i.properties.id;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.properties = {
                id: r,
                isMultiple: Boolean(e.attr("multiple")),
                isSearchable: Boolean(e.attr("searchable")),
                isRequired: Boolean(e.attr("required")),
                isEditable: Boolean(e.attr("editable"))
            }, this.options = this._copyOptions(o), this.$nativeSelect = e, this.$selectWrapper = $('<div class="select-wrapper"></div>'), this.$materialOptionsList = $('<ul id="select-options-'.concat(this.properties.id, '" class="dropdown-content select-dropdown w-100 ').concat(this.properties.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = e.find("option:selected").text() || e.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = $('<input type="text" class="'.concat(this.options.defaultMaterialInput ? "browser-default custom-select multi-bs-select select-dropdown form-control" : "select-dropdown form-control", '" ').concat(!this.options.validate && 'readonly="true"', ' required="').concat(this.options.validate ? "true" : "false", '" ').concat(this.$nativeSelect.is(" :disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.properties.id, '" value=""/>')), this.$dropdownIcon = this.options.defaultMaterialInput ? "" : $('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$noSearchResultsInfo = $("<li><span><i>".concat(this.options.labels.noSearchResults, "</i></span></li>")), this.$toggleAll = $('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.options.labels.selectAll, "</label></span></li>")), this.$addOptionBtn = $('<i class="select-add-option fas fa-plus"></i>'), this.$mainLabel = this._jQueryFallback(this.$nativeSelect.next("label.mdb-main-label"), $("label[for='".concat(this.properties.id, "']"))), this.$customTemplateParts = this._jQueryFallback(this.$nativeSelect.nextUntil("select", ".mdb-select-template-part"), $("[data-mdb-select-template-part-for='".concat(this.properties.id, "']"))), this.$btnSave = this.$nativeSelect.nextUntil("select", ".btn-save"), this.$btnReset = $('<span class="reset-select-btn">&times;</span>'), this.$validFeedback = $('<div class="valid-feedback">'.concat(this.options.labels.validFeedback, "</div>")), this.$invalidFeedback = $('<div class="invalid-feedback">'.concat(this.options.labels.invalidFeedback, "</div>")), this.keyCodes = {
                tab: 9,
                enter: 13,
                shift: 16,
                alt: 18,
                esc: 27,
                space: 32,
                end: 35,
                home: 36,
                arrowUp: 38,
                arrowDown: 40
            }, this.renderer = new n.default(this), this.dropdown = null
        }
        var e, i, r;
        return e = t, r = [{
            key: "isMobileDevice",
            get: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }
        }], (i = [{
            key: "destroy",
            value: function() {
                this.renderer.destroy()
            }
        }, {
            key: "render",
            value: function() {
                this.renderer.render()
            }
        }, {
            key: "selectPreselectedOptions",
            value: function(t) {
                var e = this;
                if (this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each((function(i, n) {
                    var o = n.index;
                    e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(o).addClass("selected active").find(":checkbox").prop("checked", !0), t(o)
                }));
                else {
                    var i = this.$nativeSelect.find("option:selected").first(),
                        n = this.$nativeSelect.find("option").index(i.get(0));
                    i.get(0) && "disabled" !== i.attr("disabled") && t(n)
                }
            }
        }, {
            key: "bindResetButtonClick",
            value: function(t) {
                var e = this;
                this.$btnReset.on("click", (function(i) {
                    i.preventDefault(), e.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-novalue]').length || (e._toggleResetButton(!0), e.$materialSelect.val(e.isMultiple ? [] : ""), e.$materialSelect.trigger("close"), e.$mainLabel.removeClass("active"), e.$materialOptionsList.find("li.active, li.selected").removeClass("active").removeClass("selected"), e.$materialOptionsList.find('li[aria-selected="true"]').attr("aria-selected", "false"), e.$materialOptionsList.find('input[type="checkbox"]').prop("checked", !1), t())
                }))
            }
        }, {
            key: "bindAddNewOptionClick",
            value: function() {
                this.$addOptionBtn.on("click", this.renderer.addNewOption.bind(this.renderer))
            }
        }, {
            key: "bindMaterialSelectFocus",
            value: function() {
                var t = this;
                this.$materialSelect.on("focus", (function(e) {
                    var i = $(e.target);
                    if ($("ul.select-dropdown").not(t.$materialOptionsList.get(0)).is(":visible") && $("input.select-dropdown").trigger("close"), t.$mainLabel.addClass("active"), !t.$materialOptionsList.is(":visible")) {
                        var n = i.val(),
                            o = t.$materialOptionsList.find("li").filter((function() {
                                return $(this).text().toLowerCase() === n.toLowerCase()
                            })).get(0);
                        t._selectSingleOption(o)
                    }
                    t.isMultiple || t.$mainLabel.addClass("active")
                }))
            }
        }, {
            key: "bindMaterialSelectClick",
            value: function() {
                var t = this;
                this.$materialSelect.on("mousedown", (function(t) {
                    3 === t.which && t.preventDefault()
                })), this.$materialSelect.on("click", (function(e) {
                    e.stopPropagation(), t.$mainLabel.addClass("active"), t._updateDropdownScrollTop()
                }))
            }
        }, {
            key: "bindMaterialSelectBlur",
            value: function() {
                var t = this;
                this.$materialSelect.on("blur", (function(e) {
                    var i = $(e);
                    t.isMultiple || t.isSearchable || i.trigger("close"), t.$materialOptionsList.find("li.selected").removeClass("selected")
                }))
            }
        }, {
            key: "bindMaterialOptionsListTouchstart",
            value: function() {
                this.$materialOptionsList.on("touchstart", (function(t) {
                    return t.stopPropagation()
                }))
            }
        }, {
            key: "bindMaterialSelectKeydown",
            value: function() {
                var t = this;
                this.$materialSelect.on("keydown", (function(e) {
                    var i = $(e.target),
                        n = e.which === t.keyCodes.tab,
                        o = e.which === t.keyCodes.arrowUp,
                        r = e.which === t.keyCodes.arrowDown,
                        a = e.which === t.keyCodes.enter,
                        s = e.which === t.keyCodes.esc,
                        l = r && e.altKey,
                        c = o && e.altKey,
                        u = e.which === t.keyCodes.home,
                        d = e.which === t.keyCodes.end,
                        h = e.which === t.keyCodes.space,
                        f = t.$materialOptionsList.is(":visible");
                    switch (!0) {
                        case n:
                            return t._handleTabKey(i);
                        case !f && (a || l):
                        case t.isMultiple && !f && (r || o):
                            return i.trigger("open"), t._updateDropdownScrollTop();
                        case f && (s || c):
                            return i.trigger("close");
                        case !f && (r || o):
                            return t._handleClosedArrowUpDownKey(e.which);
                        case f && (r || o):
                            return t._handleArrowUpDownKey(e.which);
                        case f && u:
                            return t._handleHomeKey();
                        case f && d:
                            return t._handleEndKey();
                        case f && (a || h):
                            return t._handleEnterKey(i);
                        default:
                            return t._handleLetterKey(e)
                    }
                }))
            }
        }, {
            key: "bindMaterialSelectDropdownToggle",
            value: function() {
                var t = this;
                this.$materialSelect.on("open", (function() {
                    return t.$materialSelect.attr("aria-expanded", "true")
                })), this.$materialSelect.on("close", (function() {
                    return t.$materialSelect.attr("aria-expanded", "false")
                }))
            }
        }, {
            key: "bindToggleAllClick",
            value: function(t) {
                var e = this;
                this.$toggleAll.on("click", (function(i) {
                    var n = $(e.$toggleAll).find('input[type="checkbox"]').first(),
                        o = Boolean($(n).prop("checked")),
                        r = !o;
                    $(n).prop("checked", !o), e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each((function(i, n) {
                        var o = $(n),
                            a = o.find('input[type="checkbox"]');
                        o.attr("aria-selected", r), r && a.is(":checked") || !r && !a.is(":checked") || $(n).is(":hidden") || $(n).is(".disabled") || (a.prop("checked", r), e.$nativeSelect.find("option").eq(i).prop("selected", r), o.toggleClass("active"), e._selectOption(n), t(i))
                    })), e.$nativeSelect.data("stop-refresh", !0), e._triggerChangeOnNativeSelect(), e.$nativeSelect.removeData("stop-refresh"), i.stopPropagation()
                }))
            }
        }, {
            key: "bindMaterialOptionMousedown",
            value: function() {
                var t = this;
                this.$materialOptionsList.on("mousedown", (function(e) {
                    var i = e.target;
                    $(".modal-content").find(t.$materialOptionsList).length && i.scrollHeight > i.offsetHeight && e.preventDefault()
                }))
            }
        }, {
            key: "bindMaterialOptionClick",
            value: function(t) {
                var e = this;
                this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each((function(i, n) {
                    $(n).on("click", (function(o) {
                        o.stopPropagation(), e._toggleResetButton(!1);
                        var r = $(n);
                        if (!r.hasClass("disabled") && !r.hasClass("optgroup")) {
                            var a = !0;
                            if (e.isMultiple) {
                                r.find('input[type="checkbox"]').prop("checked", (function(t, e) {
                                    return !e
                                }));
                                var s = Boolean(e.$nativeSelect.find("optgroup").length),
                                    l = e._isToggleAllPresent() ? r.index() - 1 : r.index();
                                switch (!0) {
                                    case e.isSearchable && s:
                                        a = t(l - r.prevAll(".optgroup").length - 1);
                                        break;
                                    case e.isSearchable:
                                        a = t(l - 1);
                                        break;
                                    case s:
                                        a = t(l - r.prevAll(".optgroup").length);
                                        break;
                                    default:
                                        a = t(l)
                                }
                                e._isToggleAllPresent() && e._updateToggleAllOption(), e.$materialSelect.trigger("focus")
                            } else e.$materialOptionsList.find("li").removeClass("active").attr("aria-selected", "false"), e.$materialSelect.val(r.text().replace(/  +/g, " ").trim()), e.$materialSelect.trigger("close");
                            r.toggleClass("active");
                            var c = r.attr("aria-selected");
                            r.attr("aria-selected", "true" === c ? "false" : "true"), e._selectSingleOption(r), e.$nativeSelect.data("stop-refresh", !0), e.$nativeSelect.find("option").eq(i).prop("selected", a), e.$nativeSelect.removeData("stop-refresh"), e._triggerChangeOnNativeSelect(), e.$materialSelect.val() && e.$mainLabel.addClass("active"), r.hasClass("li-added") && e.renderer.buildSingleOption(r, "")
                        }
                    }))
                }))
            }
        }, {
            key: "bindSingleMaterialOptionClick",
            value: function() {
                var t = this;
                this.$materialOptionsList.find("li").on("click", (function() {
                    t.$materialSelect.trigger("close")
                }))
            }
        }, {
            key: "bindSearchInputKeyup",
            value: function() {
                var t = this;
                this.$searchInput.find(".search").on("keyup", (function(e) {
                    var i = $(e.target),
                        n = e.which === t.keyCodes.tab,
                        o = e.which === t.keyCodes.esc,
                        r = e.which === t.keyCodes.enter,
                        a = r && e.shiftKey,
                        s = e.which === t.keyCodes.arrowUp;
                    if (e.which === t.keyCodes.arrowDown || n || o || s) return t.$materialSelect.focus(), void t._handleArrowUpDownKey(e.which);
                    var l = i.closest("ul"),
                        c = i.val(),
                        u = l.find("li span.filtrable"),
                        d = !1;
                    if (u.each((function() {
                            var t = $(this);
                            if ("string" == typeof this.outerHTML) {
                                var e = this.textContent.toLowerCase();
                                e.includes(c.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide(), e.trim() === c.toLowerCase() && (d = !0)
                            }
                        })), r) return t.isEditable && !d ? void t.renderer.addNewOption() : (a && t._handleEnterWithShiftKey(i), void t.$materialSelect.trigger("open"));
                    t.$addOptionBtn[c && t.isEditable && !d ? "show" : "hide"](), 0 !== u.filter((function(t, e) {
                        return $(e).is(":visible") && !$(e).parent().hasClass("disabled")
                    })).length ? (t.$toggleAll.show(), t.$materialOptionsList.find(t.$noSearchResultsInfo).remove(), t._updateToggleAllOption()) : (t.$toggleAll.hide(), t.$materialOptionsList.append(t.$noSearchResultsInfo)), t.dropdown.updatePosition(t.$materialSelect, t.$materialOptionsList)
                }))
            }
        }, {
            key: "bindHtmlClick",
            value: function() {
                var t = this;
                $("html").on("click", (function(e) {
                    $(e.target).closest("#select-options-".concat(t.properties.id)).length || $(e.target).hasClass("mdb-select") || !$("#select-options-".concat(t.properties.id)).hasClass("active") || (t.$materialSelect.trigger("close"), t.$materialSelect.val() || t.options.placeholder || t.$mainLabel.removeClass("active")), t.isSearchable && null !== t.$searchInput && t.$materialOptionsList.hasClass("active") && t.$materialOptionsList.find(".search-wrap input.search").focus()
                }))
            }
        }, {
            key: "bindMobileDevicesMousedown",
            value: function() {
                $("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", (function(e) {
                    t.isMobileDevice && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
                }))
            }
        }, {
            key: "bindSaveBtnClick",
            value: function() {
                var t = this;
                this.$btnSave.on("click", (function() {
                    t.$materialSelect.trigger("close")
                }))
            }
        }, {
            key: "_toggleResetButton",
            value: function(t) {
                var e = this.$nativeSelect.data("stop-refresh");
                this.$nativeSelect.attr("data-stop-refresh", "true"), t ? this.$nativeSelect.prepend('<option value="" selected disabled data-mdb-novalue></option>') : this.$nativeSelect.find("option[data-mdb-novalue]").remove(), this.$nativeSelect.attr("data-stop-refresh", e), this.$btnReset[t ? "hide" : "show"]()
            }
        }, {
            key: "_isToggleAllPresent",
            value: function() {
                return this.$materialOptionsList.find(this.$toggleAll).length
            }
        }, {
            key: "_updateToggleAllOption",
            value: function() {
                var t = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),
                    e = t.filter(":checked"),
                    i = this.$toggleAll.find("[type=checkbox]").is(":checked");
                e.length !== t.length || i ? e.length < t.length && i && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
            }
        }, {
            key: "_handleTabKey",
            value: function(t) {
                this._handleEscKey(t)
            }
        }, {
            key: "_handleEnterWithShiftKey",
            value: function(t) {
                this.isMultiple ? this.$toggleAll.trigger("click") : this._handleEnterKey(t)
            }
        }, {
            key: "_handleEnterKey",
            value: function(t) {
                this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this._removeKeyboardActiveClass(), this.isMultiple || t.trigger("close")
            }
        }, {
            key: "_handleArrowUpDownKey",
            value: function(t) {
                var e = this._getArrowMatchedActiveOptions(t, !1),
                    i = e.$matchedMaterialOption,
                    n = e.$activeOption;
                this._selectSingleOption(i), this._removeKeyboardActiveClass(), i.find("input").is(":checked") || i.removeClass(this.options.keyboardActiveClass), n.hasClass("selected") || n.find("input").is(":checked") || !this.isMultiple || n.removeClass("active", this.options.keyboardActiveClass), i.addClass(this.options.keyboardActiveClass), i.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + i.position().top)
            }
        }, {
            key: "_handleClosedArrowUpDownKey",
            value: function(t) {
                var e = this._getArrowMatchedActiveOptions(t, !0).$matchedMaterialOption;
                e.trigger("click").addClass("active"), this._updateDropdownScrollTop(), this._selectSingleOption(e)
            }
        }, {
            key: "_getArrowMatchedActiveOptions",
            value: function(t, e) {
                var i = this,
                    n = e ? "" : ":visible",
                    o = this.$materialOptionsList.find("li".concat(n)).not(".disabled, .select-toggle-all"),
                    r = o.first(),
                    a = o.last(),
                    s = this.$materialOptionsList.find("li.selected").length > 0,
                    l = null,
                    c = null;
                if (t === this.keyCodes.arrowUp) {
                    var u = s ? this.$materialOptionsList.find("li.selected").first() : a,
                        d = u.prev("li".concat(n, ":not(.disabled, .select-toggle-all)"));
                    c = d, o.each((function(t, e) {
                        $(e).hasClass(i.options.keyboardActiveClass) && (d = o.eq(t - 1), c = o.eq(t))
                    })), l = u.is(r) || !s ? u : d
                } else {
                    var h = s ? this.$materialOptionsList.find("li.selected").first() : r,
                        f = h.next("li".concat(n, ":not(.disabled, .select-toggle-all)"));
                    c = f, o.each((function(t, e) {
                        $(e).hasClass(i.options.keyboardActiveClass) && (f = o.eq(t + 1), c = o.eq(t))
                    })), l = h.is(a) || !s ? h : f
                }
                return {
                    $matchedMaterialOption: l,
                    $activeOption: c
                }
            }
        }, {
            key: "_handleHomeKey",
            value: function() {
                this._selectBoundaryOption("first")
            }
        }, {
            key: "_handleEndKey",
            value: function() {
                this._selectBoundaryOption("last")
            }
        }, {
            key: "_selectBoundaryOption",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all")[t]();
                this._selectSingleOption(e), this._removeKeyboardActiveClass(), e.find("input").is(":checked") || e.removeClass(this.options.keyboardActiveClass), e.addClass(this.options.keyboardActiveClass), e.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + e.position().top)
            }
        }, {
            key: "_handleEscKey",
            value: function(t) {
                this._removeKeyboardActiveClass(), t.trigger("close")
            }
        }, {
            key: "_handleLetterKey",
            value: function(t) {
                var e = this;
                if (this._removeKeyboardActiveClass(), this.isSearchable) {
                    var i = t.which > 46 && t.which < 91,
                        n = t.which > 93 && t.which < 106,
                        o = 8 === t.which;
                    (i || n) && this.$searchInput.find("input").val(t.key).focus(), o && this.$searchInput.find("input").val("").focus()
                } else {
                    var r = "",
                        a = String.fromCharCode(t.which).toLowerCase(),
                        s = Object.keys(this.keyCodes).map((function(t) {
                            return e.keyCodes[t]
                        }));
                    if (a && -1 === s.indexOf(t.which)) {
                        r += a;
                        var l = this.$materialOptionsList.find("li").filter((function(t, e) {
                            return $(e).text().toLowerCase().includes(r)
                        })).first();
                        this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), l.addClass("active"), this._selectSingleOption(l), this._updateDropdownScrollTop()
                    }
                }
            }
        }, {
            key: "_removeKeyboardActiveClass",
            value: function() {
                this.$materialOptionsList.find("li").removeClass(this.options.keyboardActiveClass)
            }
        }, {
            key: "_triggerChangeOnNativeSelect",
            value: function() {
                var t = new KeyboardEvent("change", {
                    bubbles: !0,
                    cancelable: !0
                });
                this.$nativeSelect.get(0).dispatchEvent(t)
            }
        }, {
            key: "_selectSingleOption",
            value: function(t) {
                this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(t)
            }
        }, {
            key: "_updateDropdownScrollTop",
            value: function() {
                var t = this.$materialOptionsList.find("li.active").first();
                t.length ? this.$materialOptionsList.scrollTo(t) : this.$materialOptionsList.scrollTop(0)
            }
        }, {
            key: "_selectOption",
            value: function(t) {
                $(t).addClass("selected")
            }
        }, {
            key: "_copyOptions",
            value: function(t) {
                return $.extend({}, t)
            }
        }, {
            key: "_jQueryFallback",
            value: function() {
                for (var t = null, e = 0; e < arguments.length; e++)
                    if ((t = e < 0 || arguments.length <= e ? void 0 : arguments[e]).length) return t;
                return t
            }
        }, {
            key: "isMultiple",
            get: function() {
                return this.properties.isMultiple
            }
        }, {
            key: "isSearchable",
            get: function() {
                return this.properties.isSearchable
            }
        }, {
            key: "isRequired",
            get: function() {
                return this.properties.isRequired
            }
        }, {
            key: "isEditable",
            get: function() {
                return this.properties.isEditable
            }
        }, {
            key: "isDisabled",
            get: function() {
                return this.$nativeSelect.is(":disabled")
            }
        }]) && o(e.prototype, i), r && o(e, r), t
    }()
}, function(t, e, i) {
    var n = i(98);
    t.exports = function(t) {
        if (n(t)) throw TypeError("The method doesn't accept regular expressions");
        return t
    }
}, function(t, e, i) {
    var n = i(2)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (i) {
            try {
                return e[n] = !1, "/./" [t](e)
            } catch (t) {}
        }
        return !1
    }
}, function(t, e, i) {
    var n = i(5),
        o = i(138);
    n({
        global: !0,
        forced: parseInt != o
    }, {
        parseInt: o
    })
}, function(t, e, i) {
    var n = i(49),
        o = i(16),
        r = i(26),
        a = i(11),
        s = function(t) {
            return function(e, i, s, l) {
                n(i);
                var c = o(e),
                    u = r(c),
                    d = a(c.length),
                    h = t ? d - 1 : 0,
                    f = t ? -1 : 1;
                if (s < 2)
                    for (;;) {
                        if (h in u) {
                            l = u[h], h += f;
                            break
                        }
                        if (h += f, t ? h < 0 : d <= h) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? h >= 0 : d > h; h += f) h in u && (l = i(l, u[h], h, c));
                return l
            }
        };
    t.exports = {
        left: s(!1),
        right: s(!0)
    }
}, function(t, e, i) {
    var n = i(7),
        o = i(0),
        r = i(48),
        a = i(115),
        s = i(9).f,
        l = i(28).f,
        c = i(98),
        u = i(89),
        d = i(15),
        h = i(1),
        f = i(130),
        p = i(2)("match"),
        v = o.RegExp,
        g = v.prototype,
        m = /a/g,
        y = /a/g,
        b = new v(m) !== m;
    if (n && r("RegExp", !b || h((function() {
            return y[p] = !1, v(m) != m || v(y) == y || "/a/i" != v(m, "i")
        })))) {
        for (var x = function(t, e) {
                var i = this instanceof x,
                    n = c(t),
                    o = void 0 === e;
                return !i && n && t.constructor === x && o ? t : a(b ? new v(n && !o ? t.source : t, e) : v((n = t instanceof x) ? t.source : t, n && o ? u.call(t) : e), i ? this : g, x)
            }, w = function(t) {
                t in x || s(x, t, {
                    configurable: !0,
                    get: function() {
                        return v[t]
                    },
                    set: function(e) {
                        v[t] = e
                    }
                })
            }, k = l(v), S = 0; k.length > S;) w(k[S++]);
        g.constructor = x, x.prototype = g, d(o, "RegExp", x)
    }
    f("RegExp")
}, function(t, e, i) {
    "use strict";
    var n = i(32),
        o = i(9),
        r = i(2),
        a = i(7),
        s = r("species");
    t.exports = function(t) {
        var e = n(t),
            i = o.f;
        a && e && !e[s] && i(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, i) {
    "use strict";
    var n = i(10),
        o = i(14),
        r = i(11),
        a = i(51),
        s = Math.min,
        l = [].lastIndexOf,
        c = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
        u = a("lastIndexOf");
    t.exports = c || u ? function(t) {
        if (c) return l.apply(this, arguments) || 0;
        var e = n(this),
            i = r(e.length),
            a = i - 1;
        for (arguments.length > 1 && (a = s(a, o(arguments[1]))), a < 0 && (a = i + a); a >= 0; a--)
            if (a in e && e[a] === t) return a || 0;
        return -1
    } : l
}, function(t, e, i) {
    "use strict";
    var n = i(16),
        o = i(38),
        r = i(11);
    t.exports = function(t) {
        for (var e = n(this), i = r(e.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, i), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? i : o(l, i); c > s;) e[s++] = t;
        return e
    }
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(31),
        r = [].reverse,
        a = [1, 2];
    n({
        target: "Array",
        proto: !0,
        forced: String(a) === String(a.reverse())
    }, {
        reverse: function() {
            return o(this) && (this.length = this.length), r.call(this)
        }
    })
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(49),
        r = i(16),
        a = i(1),
        s = i(51),
        l = [].sort,
        c = [1, 2, 3],
        u = a((function() {
            c.sort(void 0)
        })),
        d = a((function() {
            c.sort(null)
        })),
        h = s("sort");
    n({
        target: "Array",
        proto: !0,
        forced: u || !d || h
    }, {
        sort: function(t) {
            return void 0 === t ? l.call(r(this)) : l.call(r(this), o(t))
        }
    })
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(14),
        r = i(136),
        a = i(137),
        s = i(1),
        l = 1..toFixed,
        c = Math.floor,
        u = function(t, e, i) {
            return 0 === e ? i : e % 2 == 1 ? u(t, e - 1, i * t) : u(t * t, e / 2, i)
        };
    n({
        target: "Number",
        proto: !0,
        forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !s((function() {
            l.call({})
        }))
    }, {
        toFixed: function(t) {
            var e, i, n, s, l = r(this),
                d = o(t),
                h = [0, 0, 0, 0, 0, 0],
                f = "",
                p = "0",
                v = function(t, e) {
                    for (var i = -1, n = e; ++i < 6;) n += t * h[i], h[i] = n % 1e7, n = c(n / 1e7)
                },
                g = function(t) {
                    for (var e = 6, i = 0; --e >= 0;) i += h[e], h[e] = c(i / t), i = i % t * 1e7
                },
                m = function() {
                    for (var t = 6, e = ""; --t >= 0;)
                        if ("" !== e || 0 === t || 0 !== h[t]) {
                            var i = String(h[t]);
                            e = "" === e ? i : e + a.call("0", 7 - i.length) + i
                        } return e
                };
            if (d < 0 || d > 20) throw RangeError("Incorrect fraction digits");
            if (l != l) return "NaN";
            if (l <= -1e21 || l >= 1e21) return String(l);
            if (l < 0 && (f = "-", l = -l), l > 1e-21)
                if (i = (e = function(t) {
                        for (var e = 0, i = t; i >= 4096;) e += 12, i /= 4096;
                        for (; i >= 2;) e += 1, i /= 2;
                        return e
                    }(l * u(2, 69, 1)) - 69) < 0 ? l * u(2, -e, 1) : l / u(2, e, 1), i *= 4503599627370496, (e = 52 - e) > 0) {
                    for (v(0, i), n = d; n >= 7;) v(1e7, 0), n -= 7;
                    for (v(u(10, n, 1), 0), n = e - 1; n >= 23;) g(1 << 23), n -= 23;
                    g(1 << n), v(1, 1), g(2), p = m()
                } else v(0, i), v(1 << -e, 0), p = m() + a.call("0", d);
            return p = d > 0 ? f + ((s = p.length) <= d ? "0." + a.call("0", d - s) + p : p.slice(0, s - d) + "." + p.slice(s - d)) : f + p
        }
    })
}, function(t, e, i) {
    var n = i(17);
    t.exports = function(t) {
        if ("number" != typeof t && "Number" != n(t)) throw TypeError("Incorrect invocation");
        return +t
    }
}, function(t, e, i) {
    "use strict";
    var n = i(14),
        o = i(13);
    t.exports = "".repeat || function(t) {
        var e = String(o(this)),
            i = "",
            r = n(t);
        if (r < 0 || r == 1 / 0) throw RangeError("Wrong number of repetitions");
        for (; r > 0;
            (r >>>= 1) && (e += e)) 1 & r && (i += e);
        return i
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(72).trim,
        r = i(67),
        a = n.parseInt,
        s = /^[+-]?0[Xx]/,
        l = 8 !== a(r + "08") || 22 !== a(r + "0x16");
    t.exports = l ? function(t, e) {
        var i = o(String(t));
        return a(i, e >>> 0 || (s.test(i) ? 16 : 10))
    } : a
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        o = i(7),
        r = i(58).NATIVE_ARRAY_BUFFER,
        a = i(6),
        s = i(171),
        l = i(1),
        c = i(140),
        u = i(14),
        d = i(11),
        h = i(141),
        f = i(28).f,
        p = i(9).f,
        v = i(132),
        g = i(62),
        m = i(29),
        y = m.get,
        b = m.set,
        x = n.ArrayBuffer,
        w = x,
        k = n.DataView,
        S = n.Math,
        C = n.RangeError,
        T = S.abs,
        M = S.pow,
        A = S.floor,
        O = S.log,
        I = S.LN2,
        P = function(t, e, i) {
            var n, o, r, a = new Array(i),
                s = 8 * i - e - 1,
                l = (1 << s) - 1,
                c = l >> 1,
                u = 23 === e ? M(2, -24) - M(2, -77) : 0,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                h = 0;
            for ((t = T(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, n = l) : (n = A(O(t) / I), t * (r = M(2, -n)) < 1 && (n--, r *= 2), (t += n + c >= 1 ? u / r : u * M(2, 1 - c)) * r >= 2 && (n++, r /= 2), n + c >= l ? (o = 0, n = l) : n + c >= 1 ? (o = (t * r - 1) * M(2, e), n += c) : (o = t * M(2, c - 1) * M(2, e), n = 0)); e >= 8; a[h++] = 255 & o, o /= 256, e -= 8);
            for (n = n << e | o, s += e; s > 0; a[h++] = 255 & n, n /= 256, s -= 8);
            return a[--h] |= 128 * d, a
        },
        _ = function(t, e) {
            var i, n = t.length,
                o = 8 * n - e - 1,
                r = (1 << o) - 1,
                a = r >> 1,
                s = o - 7,
                l = n - 1,
                c = t[l--],
                u = 127 & c;
            for (c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);
            for (i = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; i = 256 * i + t[l], l--, s -= 8);
            if (0 === u) u = 1 - a;
            else {
                if (u === r) return i ? NaN : c ? -1 / 0 : 1 / 0;
                i += M(2, e), u -= a
            }
            return (c ? -1 : 1) * i * M(2, u - e)
        },
        E = function(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        },
        D = function(t) {
            return [255 & t]
        },
        $ = function(t) {
            return [255 & t, t >> 8 & 255]
        },
        L = function(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        },
        R = function(t) {
            return P(t, 23, 4)
        },
        F = function(t) {
            return P(t, 52, 8)
        },
        W = function(t, e) {
            p(t.prototype, e, {
                get: function() {
                    return y(this)[e]
                }
            })
        },
        N = function(t, e, i, n) {
            var o = h(+i),
                r = y(t);
            if (o + e > r.byteLength) throw C("Wrong index");
            var a = y(r.buffer).bytes,
                s = o + r.byteOffset,
                l = a.slice(s, s + e);
            return n ? l : l.reverse()
        },
        V = function(t, e, i, n, o, r) {
            var a = h(+i),
                s = y(t);
            if (a + e > s.byteLength) throw C("Wrong index");
            for (var l = y(s.buffer).bytes, c = a + s.byteOffset, u = n(+o), d = 0; d < e; d++) l[c + d] = u[r ? d : e - d - 1]
        };
    if (r) {
        if (!l((function() {
                x(1)
            })) || !l((function() {
                new x(-1)
            })) || l((function() {
                return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name
            }))) {
            for (var j, H = (w = function(t) {
                    return c(this, w), new x(h(t))
                }).prototype = x.prototype, z = f(x), B = 0; z.length > B;)(j = z[B++]) in w || a(w, j, x[j]);
            H.constructor = w
        }
        var Y = new k(new w(2)),
            U = k.prototype.setInt8;
        Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || s(k.prototype, {
            setInt8: function(t, e) {
                U.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                U.call(this, t, e << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else w = function(t) {
        c(this, w, "ArrayBuffer");
        var e = h(t);
        b(this, {
            bytes: v.call(new Array(e), 0),
            byteLength: e
        }), o || (this.byteLength = e)
    }, k = function(t, e, i) {
        c(this, k, "DataView"), c(t, w, "DataView");
        var n = y(t).byteLength,
            r = u(e);
        if (r < 0 || r > n) throw C("Wrong offset");
        if (r + (i = void 0 === i ? n - r : d(i)) > n) throw C("Wrong length");
        b(this, {
            buffer: t,
            byteLength: i,
            byteOffset: r
        }), o || (this.buffer = t, this.byteLength = i, this.byteOffset = r)
    }, o && (W(w, "byteLength"), W(k, "buffer"), W(k, "byteLength"), W(k, "byteOffset")), s(k.prototype, {
        getInt8: function(t) {
            return N(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return N(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = N(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = N(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return E(N(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function(t) {
            return E(N(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function(t) {
            return _(N(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function(t) {
            return _(N(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function(t, e) {
            V(this, 1, t, D, e)
        },
        setUint8: function(t, e) {
            V(this, 1, t, D, e)
        },
        setInt16: function(t, e) {
            V(this, 2, t, $, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function(t, e) {
            V(this, 2, t, $, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function(t, e) {
            V(this, 4, t, L, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function(t, e) {
            V(this, 4, t, L, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function(t, e) {
            V(this, 4, t, R, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function(t, e) {
            V(this, 8, t, F, e, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    g(w, "ArrayBuffer"), g(k, "DataView"), t.exports = {
        ArrayBuffer: w,
        DataView: k
    }
}, function(t, e) {
    t.exports = function(t, e, i) {
        if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
        return t
    }
}, function(t, e, i) {
    var n = i(14),
        o = i(11);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = n(t),
            i = o(e);
        if (e !== i) throw RangeError("Wrong length or index");
        return i
    }
}, function(t, e, i) {
    var n = i(2)("iterator"),
        o = !1;
    try {
        var r = 0,
            a = {
                next: function() {
                    return {
                        done: !!r++
                    }
                },
                return: function() {
                    o = !0
                }
            };
        a[n] = function() {
            return this
        }, Array.from(a, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var i = !1;
        try {
            var r = {};
            r[n] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }, t(r)
        } catch (t) {}
        return i
    }
}, function(t, e, i) {
    var n = i(175);
    t.exports = function(t, e) {
        var i = n(t);
        if (i % e) throw RangeError("Wrong offset");
        return i
    }
}, function(t, e, i) {
    var n = i(94),
        o = i(63),
        r = i(2)("iterator");
    t.exports = function(t) {
        if (null != t) return t[r] || t["@@iterator"] || o[n(t)]
    }
}, function(t, e, i) {
    var n = i(2),
        o = i(63),
        r = n("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (o.Array === t || a[r] === t)
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43), i(71), i(106), i(111), i(68), i(86);
    ! function(t) {
        var e, i, n = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map((function(t) {
                return "input[type=".concat(t, "]")
            })).join(", "), ", textarea"),
            o = function(t) {
                var e = t.siblings("label, i"),
                    i = t.val().length,
                    n = t.attr("placeholder");
                e["".concat(i || n ? "add" : "remove", "Class")]("active")
            },
            r = function(t) {
                if (t.hasClass("validate")) {
                    var e = t.val(),
                        i = !e.length,
                        n = !t[0].validity.badInput;
                    if (i && n) t.removeClass("valid").removeClass("invalid");
                    else {
                        var o = t.is(":valid"),
                            r = Number(t.attr("length")) || 0;
                        o && (!r || r > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid")
                    }
                }
            },
            a = function() {
                var e = t(void 0);
                if (e.val().length) {
                    var i = t(".hiddendiv"),
                        n = e.css("font-family"),
                        o = e.css("font-size");
                    o && i.css("font-size", o), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text("".concat(e.val(), "\n"));
                    var r = i.html().replace(/\n/g, "<br>");
                    i.html(r), i.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", i.height())
                }
            };
        t(n).each((function(e, i) {
            var n = t(i),
                r = n.siblings("label, i");
            o(n), i.validity.badInput && r.addClass("active")
        })), t(document).on("focus", n, (function(e) {
            t(e.target).siblings("label, i").addClass("active")
        })), t(document).on("blur", n, (function(e) {
            var i = t(e.target),
                n = !i.val(),
                o = !e.target.validity.badInput,
                a = void 0 === i.attr("placeholder");
            n && o && a && i.siblings("label, i").removeClass("active"), r(i)
        })), t(document).on("change", n, (function(e) {
            var i = t(e.target);
            o(i), r(i)
        })), t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("reset", (function(e) {
            var i = t(e.target);
            i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid").each((function(e, i) {
                var n = t(i),
                    o = !n.val(),
                    r = !n.attr("placeholder");
                o && r && n.siblings("label, i").removeClass("active")
            })), i.find("select.initialized").each((function(e, i) {
                var n = t(i),
                    o = n.siblings("input.select-dropdown"),
                    r = n.children("[selected]").val();
                n.val(r), o.val(r)
            })))
        })), (i = t(".md-textarea-auto")).length && (e = window.attachEvent ? function(t, e, i) {
            t.attachEvent("on".concat(e), i)
        } : function(t, e, i) {
            t.addEventListener(e, i, !1)
        }, i.each((function() {
            var t = this;

            function i() {
                t.style.height = "auto", t.style.height = "".concat(t.scrollHeight, "px")
            }

            function n() {
                window.setTimeout(i, 0)
            }
            e(t, "change", i), e(t, "cut", n), e(t, "paste", n), e(t, "drop", n), e(t, "keydown", n), i()
        })));
        var s = t("body");
        if (!t(".hiddendiv").first().length) {
            var l = t('<div class="hiddendiv common"></div>');
            s.append(l)
        }
        t(".materialize-textarea").each(a), s.on("keyup keydown", ".materialize-textarea", a)
    }(jQuery)
}, function(t, e) {
    ! function(t) {
        t(window).on("scroll", (function() {
            var e = t(".navbar");
            e.length && (e.offset().top > 50 ? t(".scrolling-navbar").addClass("top-nav-collapse") : t(".scrolling-navbar").removeClass("top-nav-collapse"))
        }))
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43);
    ! function(t) {
        t.fn.mdbTreeview = function() {
            var e = t(this);
            if (e.hasClass("treeview")) {
                var i = e.find(".rotate");
                t.each(i, (function(e) {
                    t(i[e]).off("click"), t(i[e]).on("click", (function() {
                        var e = t(this);
                        e.siblings(".nested").toggleClass("active"), e.toggleClass("down")
                    }))
                }))
            }
            if (e.hasClass("treeview-animated")) {
                var n = e.find(".treeview-animated-element"),
                    o = e.find(".closed");
                e.find(".nested").hide(), o.off("click"), o.on("click", (function() {
                    var e = t(this),
                        i = e.siblings(".nested"),
                        n = e.children(".fa-angle-right");
                    return e.toggleClass("open"), n.toggleClass("down"), i.hasClass("active") ? i.removeClass("active").slideUp() : i.addClass("active").slideDown(), !1
                })), n.off("click"), n.on("click", (function() {
                    var e = t(this);
                    e.hasClass("opened") ? e.removeClass("opened") : (n.removeClass("opened"), e.addClass("opened"))
                }))
            }
            if (e.hasClass("treeview-colorful")) {
                var r = e.find(".treeview-colorful-element"),
                    a = e.find(".treeview-colorful-items-header");
                e.find(".nested").hide(), a.off("click"), a.on("click", (function() {
                    var e = t(this),
                        i = e.siblings(".nested"),
                        n = e.children(".fa-plus-circle"),
                        o = e.children(".fa-minus-circle");
                    e.toggleClass("open"), n.removeClass("fa-plus-circle"), n.addClass("fa-minus-circle"), o.removeClass("fa-minus-circle"), o.addClass("fa-plus-circle"), i.hasClass("active") ? i.removeClass("active").slideUp() : i.addClass("active").slideDown()
                })), r.off("click"), r.on("click", (function() {
                    var e = t(this);
                    e.hasClass("opened") ? r.removeClass("opened") : (r.removeClass("opened"), e.addClass("opened"))
                }))
            }
        }
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n;
    i(102), i(112);
    ! function(t) {
        n = function() {
            return {
                init: function() {
                    var e = [],
                        i = 1;

                    function n() {
                        var i = window.innerHeight,
                            n = window.scrollY;
                        t(".wow").each((function() {
                            if ("visible" != t(this).css("visibility") && (i + n - 100 > o(this) && n < o(this) || i + n - 100 > o(this) + t(this).height() && n < o(this) + t(this).height() || i + n == t(document).height() && o(this) + 100 > t(document).height())) {
                                var r = t(this).index(".wow"),
                                    a = t(this).attr("data-wow-delay");
                                if (a) {
                                    a = t(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(a);
                                    t(s).addClass("animated"), t(s).css({
                                        visibility: "visible"
                                    }), t(s).css({
                                        "animation-delay": a
                                    }), t(s).css({
                                        "animation-name": e[r]
                                    });
                                    var l = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                    t(this).attr("data-wow-delay") && (l += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout((function() {
                                        t(s).removeClass("animated")
                                    }), l)
                                } else {
                                    t(this).addClass("animated"), t(this).css({
                                        visibility: "visible"
                                    }), t(this).css({
                                        "animation-name": e[r]
                                    });
                                    l = 1e3 * t(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout((function() {
                                        t(s).removeClass("animated")
                                    }), l)
                                }
                            }
                        }))
                    }

                    function o(t) {
                        var e = t.getBoundingClientRect(),
                            i = document.body,
                            n = document.documentElement,
                            o = window.pageYOffset || n.scrollTop || i.scrollTop,
                            r = n.clientTop || i.clientTop || 0,
                            a = e.top + o - r;
                        return Math.round(a)
                    }
                    t(".wow").each((function() {
                        t(this).css({
                            visibility: "hidden"
                        }), e[t(this).index(".wow")] = t(this).css("animation-name"), t(this).css({
                            "animation-name": "none"
                        })
                    })), t(window).scroll((function() {
                        var e, r;
                        i ? (e = window.innerHeight, r = window.scrollY, t(".wow.animated").each((function() {
                            if (e + r - 100 > o(this) && r > o(this) + 100 || e + r - 100 < o(this) && r < o(this) + 100 || o(this) + t(this).height > t(document).height() - 100) t(this).removeClass("animated"), t(this).css({
                                "animation-name": "none"
                            }), t(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var i = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                t(this).attr("data-wow-delay") && (i += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                var n = this;
                                setTimeout((function() {
                                    t(n).removeClass("animated")
                                }), i)
                            }
                        })), n(), i--) : n()
                    })), t(".wow").each((function() {
                        var i = t(this).index(".wow"),
                            n = t(this).attr("data-wow-delay");
                        n ? (n = t(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-delay": n + "s"
                        }), t(this).css({
                            "animation-name": e[i]
                        })) : (t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-name": e[i]
                        }))
                    }))
                }
            }
        }
    }(jQuery), window.WOW = n
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(95), i(96);
    ! function(t) {
        var e = this;
        t(document).ready((function() {
            t(document).on("mouseenter", ".fixed-action-btn", (function() {
                var e = t(this);
                i(e)
            })), t(document).on("mouseleave", ".fixed-action-btn", (function() {
                var e = t(this);
                n(e)
            })), t(document).on("click", ".fixed-action-btn > a", (function() {
                var e = t(this).parent();
                e.hasClass("active") ? i(e) : n(e), e.hasClass("active") ? n(e) : i(e)
            }))
        })), t.fn.extend({
            openFAB: function() {
                i(t(this))
            },
            closeFAB: function() {
                n(t(this))
            }
        });
        var i = function(t) {
                var e = t;
                e.hasClass("active") || (e.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach((function(t) {
                    t.classList.add("shown")
                })))
            },
            n = function(t) {
                t.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach((function(t) {
                    t.classList.remove("shown")
                }))
            };
        t(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", (function(o) {
            if (!t(e).hasClass("smooth-scroll")) return o.preventDefault(), r = t(".fixed-action-btn"), (a = r).hasClass("active") ? n(a) : i(a), !1;
            var r, a
        }))
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43);
    ! function(t) {
        t(document).on("click.card", ".card", (function(e) {
            if (t(this).find(".card-reveal").length) {
                var i = t(e.target),
                    n = i.is(".card-reveal .card-title"),
                    o = i.is(".card-reveal .card-title i"),
                    r = i.is(".card .activator"),
                    a = i.is(".card .activator i");
                n || o ? t(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        t(this).css({
                            display: "none"
                        })
                    }
                }) : (r || a) && t(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                })
            }
        })), t(".rotate-btn").on("click", (function() {
            var e = t(this).attr("data-card");
            t("#".concat(e)).toggleClass("flipped")
        })), t(window).on("load", (function() {
            var e = t(".front").outerHeight(),
                i = t(".back").outerHeight();
            e > i ? t(".card-wrapper, .back").height(e) : e > i ? t(".card-wrapper, .front").height(i) : t(".card-wrapper").height(i)
        })), t(".card-share > a").on("click", (function(e) {
            e.preventDefault(), t(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
        }))
    }(jQuery), $(".map-card").click((function() {
        $(".card-body").toggleClass("closed")
    }))
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(73), i(43), i(111);
    ! function(t) {
        function e() {
            var e = Number(t(this).attr("length")),
                i = Number(t(this).val().length),
                n = i <= e;
            t(this).parent().find('span[class="character-counter"]').html("".concat(i, "/").concat(e)),
                function(t, e) {
                    var i = e.hasClass("invalid");
                    t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
                }(n, t(this))
        }

        function i() {
            t(this).parent().find('span[class="character-counter"]').html("")
        }
        t.fn.characterCounter = function() {
            return this.each((function() {
                var n, o;
                void 0 !== t(this).attr("length") && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", i), n = t(this), o = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), n.parent().append(o))
            }))
        }, t(document).ready((function() {
            t("input, textarea").characterCounter()
        }))
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(87), i(43);
    ! function(t) {
        t.fn.collapsible = function(e) {
            var i = {
                accordion: void 0
            };

            function n(e, i) {
                var n = e.find("> li > .collapsible-header");
                i.hasClass("active") ? i.parent().addClass("active") : i.parent().removeClass("active"), i.parent().hasClass("active") ? i.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        t(this).css("height", "")
                    }
                }) : i.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        t(this).css("height", "")
                    }
                }), n.not(i).removeClass("active").parent().removeClass("active"), n.not(i).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        t(this).css("height", "")
                    }
                })
            }

            function o(e) {
                e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        t(this).css("height", "")
                    }
                })
            }

            function r(t) {
                return a(t).length > 0
            }

            function a(t) {
                return t.closest("li > .collapsible-header")
            }
            return e = t.extend(i, e), this.each((function() {
                var i = t(this),
                    s = t(this).find("> li > .collapsible-header"),
                    l = i.data("collapsible");
                i.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), e.accordion || "accordion" === l || void 0 === l ? ((s = i.find("> li > .collapsible-header")).on("click.collapse", (function(e) {
                    var o = t(e.target);
                    r(o) && (o = a(o)), o.toggleClass("active"), n(i, o)
                })), n(i, s.filter(".active").first())) : s.each((function() {
                    t(this).on("click.collapse", (function(e) {
                        var i = t(e.target);
                        r(i) && (i = a(i)), i.toggleClass("active"), o(i)
                    })), t(this).hasClass("active") && o(t(this))
                }))
            }))
        }, t(".collapsible").collapsible()
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43), i(95), i(71), i(123), i(104), i(96);
    ! function(t) {
        t(document).on("change", '.file-field input[type="file"]', (function(e) {
            var i = t(e.target),
                n = i.closest(".file-field").find("input.file-path"),
                o = i[0].files,
                r = [];
            Array.isArray(o) ? o.forEach((function(t) {
                return r.push(t.name)
            })) : Object.keys(o).forEach((function(t) {
                r.push(o[t].name)
            })), n.val(r.join(", ")), n.trigger("change")
        }))
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43), i(119), i(66), i(104), i(120);

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }! function(t) {
        var e = {},
            i = "",
            o = "",
            r = "#ced4da",
            a = "1px solid #4285f4",
            s = "1px solid #ced4da",
            l = "0 1px 0 0 #4285f4",
            c = "",
            u = -1,
            d = -45,
            h = function() {
                function h(n, u) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, h), this.defaults = {
                        data: e,
                        dataColor: i,
                        closeColor: o,
                        closeBlurColor: r,
                        inputFocus: a,
                        inputBlur: s,
                        inputFocusShadow: l,
                        inputBlurShadow: c
                    }, this.$input = n, this.options = this.assignOptions(u), this.$clearButton = t(".mdb-autocomplete-clear"), this.$autocompleteWrap = t('<ul class="mdb-autocomplete-wrap"></ul>'), this.init()
                }
                var f, p, v;
                return f = h, (p = [{
                    key: "init",
                    value: function() {
                        this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete()
                    }
                }, {
                    key: "assignOptions",
                    value: function(e) {
                        return t.extend({}, this.defaults, e)
                    }
                }, {
                    key: "setData",
                    value: function() {
                        Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                    }
                }, {
                    key: "inputFocus",
                    value: function() {
                        var t = this;
                        this.$input.on("focus", (function() {
                            t.$input.css("border-bottom", t.options.inputFocus), t.$input.css("box-shadow", t.options.inputFocusShadow)
                        }))
                    }
                }, {
                    key: "inputBlur",
                    value: function() {
                        var t = this;
                        this.$input.on("blur", (function() {
                            t.$input.css("border-bottom", t.options.inputBlur), t.$input.css("box-shadow", t.options.inputBlurShadow)
                        }))
                    }
                }, {
                    key: "inputKeyupData",
                    value: function() {
                        var e = this;
                        this.$input.on("keyup", (function(i) {
                            if (13 === i.which) return e.options.data.includes(e.$input.val()) || e.options.data.push(e.$input.val()), e.$autocompleteWrap.find(".selected").trigger("click"), e.$autocompleteWrap.empty(), e.inputBlur(), d = -45, u = -1;
                            var n = e.$input.val();
                            if (e.$autocompleteWrap.empty(), n.length) {
                                for (var o in e.options.data)
                                    if (-1 !== e.options.data[o].toLowerCase().indexOf(n.toLowerCase())) {
                                        var r = t("<li>".concat(e.options.data[o], "</li>"));
                                        e.$autocompleteWrap.append(r)
                                    } var a = e.$autocompleteWrap,
                                    s = e.$autocompleteWrap.find("li"),
                                    l = s.eq(u).outerHeight(),
                                    c = s.eq(u - 1).outerHeight();
                                if (40 === i.which) {
                                    if (u > s.length - 2) return u = -1, s.scrollTop(0), void(d = -45);
                                    u++, d += l, a.scrollTop(d), s.eq(u).addClass("selected")
                                } else 38 === i.which && (u < 1 ? (u = s.length, a.scrollTop(a.prop("scrollHeight")), d = a.prop("scrollHeight") - l) : u--, d -= c, a.scrollTop(d), s.eq(u).addClass("selected"));
                                0 === n.length ? e.$clearButton.css("visibility", "hidden") : e.$clearButton.css("visibility", "visible"), e.$autocompleteWrap.children().css("color", e.options.dataColor)
                            } else e.$clearButton.css("visibility", "hidden")
                        }))
                    }
                }, {
                    key: "inputLiClick",
                    value: function() {
                        var e = this;
                        this.$autocompleteWrap.on("click", "li", (function(i) {
                            i.preventDefault(), e.$input.val(t(i.target).text()), e.$autocompleteWrap.empty()
                        }))
                    }
                }, {
                    key: "clearAutocomplete",
                    value: function() {
                        var e = this;
                        this.$clearButton.on("click", (function(i) {
                            u = -1, d = -45, i.preventDefault();
                            var n = t(i.currentTarget);
                            n.parent().find(".mdb-autocomplete").val(""), n.css("visibility", "hidden"), e.$autocompleteWrap.empty(), n.parent().find("label").removeClass("active")
                        }))
                    }
                }, {
                    key: "changeSVGcolors",
                    value: function() {
                        var e = this;
                        this.$input.hasClass("mdb-autocomplete") && (this.$input.on("click keyup", (function(i) {
                            i.preventDefault(), t(i.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", e.options.closeColor)
                        })), this.$input.on("blur", (function(i) {
                            i.preventDefault(), t(i.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", e.options.closeBlurColor)
                        })))
                    }
                }]) && n(f.prototype, p), v && n(f, v), h
            }();
        t.fn.mdbAutocomplete = function(e) {
            return this.each((function() {
                new h(t(this), e)
            }))
        }
    }(jQuery)
}, function(t, e) {
    var i = !1;
    $(window).on("load", (function() {
        i = !0
    })), $(document).ready((function() {
        $("body").attr("aria-busy", !0), $("#preloader-markup").load("../dev/dist/mdb-addons/preloader.html", (function() {
            i ? ($("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")) : $(window).on("load", (function() {
                $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
            }))
        }))
    }))
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43);
    ! function(t) {
        var e, i = "input[type=range]:not(.custom-range):not(.multi-range)",
            n = '<span class="thumb"><span class="value"></span></span>',
            o = !1;
        t(document).on("change", i, (function() {
            var e = t(this);
            e.siblings(".thumb").find(".value").html(e.val())
        })), t(document).on("input mousedown touchstart", i, (function(r) {
            var a = t(this),
                s = a.siblings(".thumb"),
                l = a.outerWidth();
            if (!s.length && function() {
                    var e = t(n);
                    t(i).after(e)
                }(), s.find(".value").html(a.val()), o = !0, a.addClass("active"), s.hasClass("active") || s.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== r.type) {
                var c = void 0 === r.pageX || null === r.pageX;
                (e = c ? r.originalEvent.touches[0].pageX - t(this).offset().left : r.pageX - t(this).offset().left) < 0 ? e = 0 : e > l && (e = l), s.addClass("active").css("left", e)
            }
            s.find(".value").html(a.val())
        })), t(document).on("mouseup touchend", ".range-field", (function() {
            o = !1, t(this).removeClass("active")
        })), t(document).on("mousemove touchmove", ".range-field", (function(e) {
            var n, r = t(this).children(".thumb");
            if (o) {
                r.hasClass("active") || r.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), n = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                var a = t(this).outerWidth();
                n < 0 ? n = 0 : n > a && (n = a), r.addClass("active").css("left", n), r.find(".value").html(r.siblings(i).val())
            }
        })), t(document).on("mouseout touchleave", ".range-field", (function() {
            if (!o) {
                var e = t(this).children(".thumb");
                e.hasClass("active") && e.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), e.removeClass("active")
            }
        }))
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43), i(93), i(111);

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }! function(t) {
        var e = 240,
            i = 1440,
            o = 300,
            r = 200,
            a = 50,
            s = 200,
            l = "easeOutQuad",
            c = "easeOutCubic",
            u = !0,
            d = !1,
            h = function() {
                function h(n, f) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, h), this.defaults = {
                        MENU_WIDTH: e,
                        edge: "left",
                        closeOnClick: !1,
                        breakpoint: i,
                        timeDurationOpen: o,
                        timeDurationClose: r,
                        timeDurationOverlayOpen: a,
                        timeDurationOverlayClose: s,
                        easingOpen: l,
                        easingClose: c,
                        showOverlay: u,
                        showCloseButton: d
                    }, this.$element = n, this.$elementCloned = n.clone().css({
                        display: "inline-block",
                        lineHeight: "24px"
                    }), this.options = this.assignOptions(f), this.menuOut = !1, this.lastTouchVelocity = {
                        x: {
                            startPosition: 0,
                            startTime: 0,
                            endPosition: 0,
                            endTime: 0
                        }
                    }, this.$body = t("body"), this.$menu = t("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = t("#sidenav-overlay"), this.$dragTarget = t('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
                }
                var f, p, v;
                return f = h, (p = [{
                    key: "init",
                    value: function() {
                        this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick()
                    }
                }, {
                    key: "bindTouchEvents",
                    value: function() {
                        var t = this;
                        this.$dragTarget.on("click", (function() {
                            return t.removeMenu()
                        })), this.$elementCloned.on("click", (function() {
                            return t.removeMenu()
                        })), this.$dragTarget.on("touchstart", (function(e) {
                            t.lastTouchVelocity.x.startPosition = e.touches[0].clientX, t.lastTouchVelocity.x.startTime = Date.now()
                        })), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                    }
                }, {
                    key: "touchmoveEventHandler",
                    value: function(t) {
                        if ("touchmove" === t.type) {
                            var e = t.touches[0],
                                i = e.clientX;
                            Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = e.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (i > this.options.MENU_WIDTH ? i = this.options.MENU_WIDTH : i < 0 && (i = 0)), this.translateSidenavX(i), this.updateOverlayOpacity(i)
                        }
                    }
                }, {
                    key: "panEventHandler",
                    value: function(t) {
                        if ("touch" === t.gesture.pointerType) {
                            var e = t.gesture.center.x;
                            this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (e > this.options.MENU_WIDTH ? e = this.options.MENU_WIDTH : e < 0 && (e = 0)), this.translateSidenavX(e), this.updateOverlayOpacity(e)
                        }
                    }
                }, {
                    key: "translateSidenavX",
                    value: function(t) {
                        if ("left" === this.options.edge) {
                            var e = t >= this.options.MENU_WIDTH / 2;
                            this.menuOut = e, this.$menu.css("transform", "translateX(".concat(t - this.options.MENU_WIDTH, "px)"))
                        } else {
                            var i = t < window.innerWidth - this.options.MENU_WIDTH / 2;
                            this.menuOut = i;
                            var n = t - this.options.MENU_WIDTH / 2;
                            n < 0 && (n = 0), this.$menu.css("transform", "translateX(".concat(n, "px)"))
                        }
                    }
                }, {
                    key: "updateOverlayOpacity",
                    value: function(t) {
                        var e;
                        e = "left" === this.options.edge ? t / this.options.MENU_WIDTH : Math.abs((t - window.innerWidth) / this.options.MENU_WIDTH), this.$sidenavOverlay.velocity({
                            opacity: e
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "buildSidenavOverlay",
                    value: function() {
                        var e = this;
                        !0 === this.options.showOverlay && (this.$sidenavOverlay = t('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", (function() {
                            return e.removeMenu()
                        })), this.$body.append(this.$sidenavOverlay))
                    }
                }, {
                    key: "disableScrolling",
                    value: function() {
                        var t = this.$body.innerWidth();
                        this.$body.css("overflow", "hidden"), this.$body.width(t)
                    }
                }, {
                    key: "touchendEventHandler",
                    value: function(t) {
                        if ("touchend" === t.type) {
                            var e = t.changedTouches[0];
                            this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = e.clientX;
                            var i = this.calculateTouchVelocityX(),
                                n = e.clientX,
                                o = n - this.options.MENU_WIDTH,
                                r = n - this.options.MENU_WIDTH / 2;
                            o > 0 && (o = 0), r < 0 && (r = 0), "left" === this.options.edge ? (this.menuOut && i <= .3 || i < -.5 ? (0 !== o && this.translateMenuX([0, o], "300"), this.showSidenavOverlay()) : (!this.menuOut || i > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, o], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && i >= -.3 || i > .5 ? (this.translateMenuX([0, r], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || i < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, r], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "calculateTouchVelocityX",
                    value: function() {
                        return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                    }
                }, {
                    key: "panendEventHandler",
                    value: function(t) {
                        if ("touch" === t.gesture.pointerType) {
                            var e = t.gesture.velocityX,
                                i = t.gesture.center.x,
                                n = i - this.options.MENU_WIDTH,
                                o = i - this.options.MENU_WIDTH / 2;
                            n > 0 && (n = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && e <= .3 || e < -.5 ? (0 !== n && this.translateMenuX([0, n], "300"), this.showSidenavOverlay()) : (!this.menuOut || e > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, n], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && e >= -.3 || e > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || e < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "translateMenuX",
                    value: function(t, e) {
                        this.$menu.velocity({
                            translateX: t
                        }, {
                            duration: "string" == typeof e ? Number(e) : e,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "hideSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 0
                        }, {
                            duration: this.options.timeDurationOverlayClose,
                            queue: !1,
                            easing: this.options.easingOpen,
                            complete: function() {
                                t(this).remove()
                            }
                        })
                    }
                }, {
                    key: "showSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 1
                        }, {
                            duration: this.options.timeDurationOverlayOpen,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "enableScrolling",
                    value: function() {
                        this.$body.css({
                            overflow: "",
                            width: ""
                        })
                    }
                }, {
                    key: "openOnClick",
                    value: function() {
                        var e = this;
                        this.$element.on("click", (function(i) {
                            if (i.preventDefault(), !0 === e.menuOut) e.removeMenu();
                            else {
                                e.menuOut = !0, !0 === e.options.showOverlay ? t("#sidenav-overlay").length || (e.$sidenavOverlay = t('<div id="sidenav-overlay"></div>'), e.$body.append(e.$sidenavOverlay)) : e.showCloseButton();
                                var n = [];
                                n = "left" === e.options.edge ? [0, -1 * e.options.MENU_WIDTH] : [0, e.options.MENU_WIDTH], "matrix(1, 0, 0, 1, 0, 0)" !== e.$menu.css("transform") && e.$menu.velocity({
                                    translateX: n
                                }, {
                                    duration: e.options.timeDurationOpen,
                                    queue: !1,
                                    easing: e.options.easingOpen
                                }), e.$sidenavOverlay.on("click", (function() {
                                    return e.removeMenu()
                                })), e.$sidenavOverlay.on("touchmove", e.touchmoveEventHandler.bind(e)), e.$menu.on("touchmove", (function(t) {
                                    t.preventDefault(), e.$menu.find(".custom-scrollbar").css("padding-bottom", "30px")
                                })), e.menuOut = !0
                            }
                        }))
                    }
                }, {
                    key: "closeOnClick",
                    value: function() {
                        var t = this;
                        !0 === this.options.closeOnClick && (this.$menu.on("click", "a:not(.collapsible-header)", (function() {
                            return t.removeMenu()
                        })), "translateX(0)" === this.$menu.css("transform") && this.click((function() {
                            return t.removeMenu()
                        })))
                    }
                }, {
                    key: "showCloseButton",
                    value: function() {
                        !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
                            borderTop: "1px solid rgba(153,153,153,.3)"
                        }))
                    }
                }, {
                    key: "setMenuTranslation",
                    value: function() {
                        var e = this;
                        "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                            left: 0
                        })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                            right: 0
                        })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), this.$menu.find("input[type=text]").on("touchstart", (function() {
                            e.$menu.addClass("transform-fix-input")
                        })), t(window).resize((function() {
                            if (window.innerWidth > e.options.breakpoint) e.$sidenavOverlay.length ? e.removeMenu(!0) : e.$menu.css("transform", "translateX(0%)");
                            else if (!1 === e.menuOut) {
                                var t = "left" === e.options.edge ? "-100" : "100";
                                e.$menu.css("transform", "translateX(".concat(t, "%)"))
                            }
                        })))
                    }
                }, {
                    key: "setMenuWidth",
                    value: function() {
                        var i = t("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                        this.options.MENU_WIDTH !== e && (this.$menu.css("width", this.options.MENU_WIDTH), i.css("width", this.options.MENU_WIDTH))
                    }
                }, {
                    key: "inputOnClick",
                    value: function() {
                        var t = this;
                        this.$menu.find("input[type=text]").on("touchstart", (function() {
                            return t.$menu.css("transform", "translateX(0)")
                        }))
                    }
                }, {
                    key: "assignOptions",
                    value: function(e) {
                        return t.extend({}, this.defaults, e)
                    }
                }, {
                    key: "removeMenu",
                    value: function(t) {
                        var e = this;
                        this.$body.css({
                            overflow: "",
                            width: ""
                        }), this.$menu.velocity({
                            translateX: "left" === this.options.edge ? "-100%" : "100%"
                        }, {
                            duration: this.options.timeDurationClose,
                            queue: !1,
                            easing: this.options.easingClose,
                            complete: function() {
                                !0 === t && (e.$menu.removeAttr("style"), e.$menu.css("width", e.options.MENU_WIDTH))
                            }
                        }), this.$menu.hasClass("transform-fix-input") && this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay(), this.menuOut = !1
                    }
                }]) && n(f.prototype, p), v && n(f, v), h
            }();
        t.fn.sideNav = function(e) {
            return this.each((function() {
                new h(t(this), e)
            }))
        }
    }(jQuery), $((function(t) {
        t("#toggle").click((function() {
            t("#slide-out").hasClass("slim") ? (t("#slide-out").removeClass("slim"), t(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), t(".fixed-sn .double-nav").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15.9rem"
            }), t(".fixed-sn main").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15rem"
            }), t(".fixed-sn footer").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15rem"
            })) : (t("#slide-out").addClass("slim"), t(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), t(".fixed-sn .double-nav").css("padding-left", "4.6rem"), t(".fixed-sn main").css("padding-left", "3.7rem"), t(".fixed-sn footer").css("padding-left", "3.7rem"))
        }))
    }))
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(69), i(79), i(80), i(66), i(64), i(70), i(81), i(84);

    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    $(".smooth-scroll").on("click", "a", (function() {
        var t = $(this).attr("href");
        if ("undefined" !== n(t) && 0 === t.indexOf("#")) {
            var e = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
                i = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
            return $("body,html").animate({
                scrollTop: $(t).offset().top - e
            }, 700), "undefined" !== n(i) && !1 !== i && history.replaceState(null, null, t), !1
        }
    }))
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(69), i(73), i(87), i(43), i(95), i(71), i(161), i(162), i(104), i(96);

    function n(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function o(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function r(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    jQuery((function(t) {
        var e = function() {
            function e(i) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.$activator = i, this.$activates = t("#".concat(i.attr("data-activates"))), this.options = {
                    inDuration: this.fallback().or(i.data("induration")).or(i.attr("data-in-duration")).or(n.inDuration).or(300).value(),
                    outDuration: this.fallback().or(i.data("outduration")).or(i.attr("data-out-duration")).or(n.outDuration).or(225).value(),
                    easingEffectIn: this.fallback().or(i.data("easingeffectin")).or(i.attr("data-easing-effect-in")).or(n.easingEffectIn).or("easeOutCubic").value(),
                    easingEffectOut: this.fallback().or(i.data("easingeffectout")).or(i.attr("data-easing-effect-out")).or(n.easingEffectOut).or("swing").value(),
                    constrainWidth: this.fallback().or(i.data("constrainwidth")).or(i.attr("data-constrain-width")).or(n.constrainWidth).or(!0).value(),
                    hover: this.fallback().or(i.data("hover")).or(i.attr("data-hover")).or(n.hover).or(!1).value(),
                    gutter: this.fallback().or(i.data("gutter")).or(i.attr("data-gutter")).or(n.gutter).or(0).value(),
                    belowOrigin: this.fallback().or(i.data("beloworigin")).or(i.attr("data-below-origin")).or(n.belowOrigin).or(!1).value(),
                    alignment: this.fallback().or(i.data("alignment")).or(i.attr("data-alignment")).or(n.alignment).or("left").value(),
                    maxHeight: this.fallback().or(i.data("maxheight")).or(i.attr("data-max-height")).or(n.maxHeight).or("").value(),
                    resetScroll: this.fallback().or(i.data("resetscroll")).or(i.attr("data-reset-scroll")).or(n.resetScroll).or(!0).value()
                }, this.isFocused = !1
            }
            var i, a, s;
            return i = e, s = [{
                key: "mdbDropdownAutoInit",
                value: function() {
                    t(".dropdown-button").dropdown(), this.bindMultiLevelDropdownEvents(), this.bindBootstrapEvents()
                }
            }, {
                key: "bindMultiLevelDropdownEvents",
                value: function() {
                    var e = t(".multi-level-dropdown");
                    e.find(".dropdown-submenu > a").on("mouseenter", (function(i) {
                        var n = t(this);
                        e.find(".dropdown-submenu .dropdown-menu").removeClass("show"), n.next(".dropdown-menu").addClass("show"), i.stopPropagation()
                    })), e.find(".dropdown").on("hidden.bs.dropdown", (function() {
                        e.find(".dropdown-menu.show").removeClass("show")
                    }))
                }
            }, {
                key: "bindBootstrapEvents",
                value: function() {
                    var e = this;
                    t(".dropdown, .dropup").on({
                        "show.bs.dropdown": function(i) {
                            var n = t(i.target),
                                o = e._getDropdownEffects(n);
                            e._dropdownEffectStart(n, o.effectIn)
                        },
                        "shown.bs.dropdown": function(i) {
                            var n = t(i.target),
                                o = e._getDropdownEffects(n);
                            o.effectIn && o.effectOut && e._dropdownEffectEnd(n, o)
                        },
                        "hide.bs.dropdown": function(i) {
                            var n = t(i.target),
                                o = e._getDropdownEffects(n);
                            o.effectOut && (i.preventDefault(), e._dropdownEffectStart(n, o.effectOut), e._dropdownEffectEnd(n, o, (function() {
                                n.removeClass("show"), n.find(".dropdown-menu").removeClass("show")
                            })))
                        }
                    })
                }
            }, {
                key: "_getDropdownEffects",
                value: function(t) {
                    var e = "fadeIn",
                        i = "fadeOut",
                        n = t.find(".dropdown-menu"),
                        o = t.parents("ul.nav");
                    return o.height > 0 && (e = o.data("dropdown-in") || null, i = o.data("dropdown-out") || null), {
                        effectIn: n.data("dropdown-in") || e,
                        effectOut: n.data("dropdown-out") || i
                    }
                }
            }, {
                key: "_dropdownEffectStart",
                value: function(t, e) {
                    e && (t.addClass("dropdown-animating"), t.find(".dropdown-menu").addClass(["animated", e].join(" ")))
                }
            }, {
                key: "_dropdownEffectEnd",
                value: function(t, e, i) {
                    t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                        t.removeClass("dropdown-animating"), t.find(".dropdown-menu").removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof i && i()
                    }))
                }
            }], (a = [{
                key: "returnPublicInterface",
                value: function() {
                    return {
                        $activator: this.$activator,
                        $activates: this.$activates,
                        updatePosition: this.updatePosition.bind(this)
                    }
                }
            }, {
                key: "init",
                value: function() {
                    this.appendDropdownToActivator(), this.options.hover ? this.handleHoverableDropdown() : this.handleClickableDropdown(), this.bindEvents()
                }
            }, {
                key: "appendDropdownToActivator",
                value: function() {
                    this.$activator.after(this.$activates)
                }
            }, {
                key: "handleHoverableDropdown",
                value: function() {
                    var e = this,
                        i = !1;
                    this.$activator.unbind("click.".concat(this.$activator.attr("id"))), this.$activator.on("mouseenter", (function() {
                        !1 === i && (e.placeDropdown(), i = !0)
                    })), this.$activator.on("mouseleave", (function(n) {
                        var o = n.toElement || n.relatedTarget;
                        t(o).closest(".dropdown-content").is(e.$activates) || (e.$activates.stop(!0, !0), e.hideDropdown(), i = !1)
                    })), this.$activates.on("mouseleave", (function(n) {
                        var o = n.toElement || n.relatedTarget;
                        t(o).closest(".dropdown-button").is(e.$activator) || (e.$activates.stop(!0, !0), e.hideDropdown(), i = !1)
                    }))
                }
            }, {
                key: "handleClickableDropdown",
                value: function() {
                    var e = this;
                    this.$activator.unbind("click.".concat(this.$activator.attr("id"))), this.$activator.bind("click.".concat(this.$activator.attr("id")), (function(i) {
                        if (!e.isFocused) {
                            var n = e.$activator.get(0) === i.currentTarget,
                                o = e.$activator.hasClass("active"),
                                r = 0 !== t(i.target).closest(".dropdown-content").length;
                            !n || o || r ? o && (e.hideDropdown(), t(document).unbind("click.".concat(e.$activates.attr("id"), " touchstart.").concat(e.$activates.attr("id")))) : (i.preventDefault(), e.placeDropdown("click")), e.$activates.hasClass("active") && t(document).bind("click.".concat(e.$activates.attr("id"), " touchstart.").concat(e.$activates.attr("id")), (function(i) {
                                !e.$activates.is(i.target) && !e.$activator.is(i.target) && !e.$activator.find(i.target).length && (e.hideDropdown(), t(document).unbind("click.".concat(e.$activates.attr("id"), " touchstart.").concat(e.$activates.attr("id"))))
                            }))
                        }
                    }))
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    this.$activator.on("open", (function(e, i) {
                        t.placeDropdown(i)
                    })), this.$activator.on("close", this.hideDropdown.bind(this))
                }
            }, {
                key: "placeDropdown",
                value: function(t) {
                    "focus" === t && (this.isFocused = !0), this.$activates.addClass("active"), this.$activator.addClass("active"), !0 === this.options.constrainWidth ? this.$activates.css("width", this.$activator.outerWidth()) : this.$activates.css("white-space", "nowrap"), this.updatePosition(), this.showDropdown()
                }
            }, {
                key: "showDropdown",
                value: function() {
                    this.$activates.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: this.options.inDuration,
                        easing: this.options.easingEffectIn,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }).animate(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? n(i, !0).forEach((function(e) {
                                o(t, e, i[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(i).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }))
                        }
                        return t
                    }({
                        opacity: 1
                    }, this.options.resetScroll && {
                        scrollTop: 0
                    }), {
                        queue: !1,
                        duration: this.options.inDuration,
                        easing: "easeOutSine"
                    })
                }
            }, {
                key: "hideDropdown",
                value: function() {
                    var t = this;
                    this.isFocused = !1, this.$activates.fadeOut({
                        durations: this.options.outDuration,
                        easing: this.options.easingEffectOut
                    }), this.$activates.removeClass("active"), this.$activator.removeClass("active"), setTimeout((function() {
                        t.$activates.css("max-height", t.options.maxHeight)
                    }), this.options.outDuration)
                }
            }, {
                key: "updatePosition",
                value: function() {
                    var e = window.innerHeight,
                        i = this.$activator.innerHeight(),
                        n = this.$activator.offset().top - t(window).scrollTop(),
                        o = this._getHorizontalAlignment(),
                        r = 0,
                        a = 0,
                        s = this.$activator.parent(),
                        l = this.options.belowOrigin ? i : 0,
                        c = !s.is("body") && s.get(0).scrollHeight > s.get(0).clientHeight ? s.get(0).scrollTop : 0,
                        u = n + this.$activates.innerHeight() > e,
                        d = n + i - this.$activates.innerHeight() < 0;
                    if (u && d) {
                        var h = e - n - l;
                        this.$activates.css("max-height", h)
                    } else u && (l || (l += i), l -= this.$activates.innerHeight());
                    "left" === o ? (r = this.options.gutter, a = this.$activator.position().left + r) : "right" === o && (a = this.$activator.position().left + this.$activator.outerWidth() - this.$activates.outerWidth() + (r = -this.options.gutter)), this.$activates.css({
                        position: "absolute",
                        top: this.$activator.position().top + l + c,
                        left: a
                    })
                }
            }, {
                key: "_getHorizontalAlignment",
                value: function() {
                    var e = this.$activator.offset().left;
                    return e + this.$activates.innerWidth() > t(window).width() ? "right" : e - this.$activates.innerWidth() + this.$activator.innerWidth() < 0 ? "left" : this.options.alignment
                }
            }, {
                key: "fallback",
                value: function() {
                    return {
                        _value: void 0,
                        or: function(t) {
                            return void 0 !== t && void 0 === this._value && (this._value = t), this
                        },
                        value: function() {
                            return this._value
                        }
                    }
                }
            }]) && r(i.prototype, a), s && r(i, s), e
        }();
        t.fn.scrollTo = function(e) {
            return this.scrollTop(this.scrollTop() - this.offset().top + t(e).offset().top), this
        }, t.fn.dropdown = function(t) {
            if (this.length > 1) {
                var i = [];
                return this.each((function() {
                    var n = new e(this, t);
                    n.init(), i.push(n.returnPublicInterface())
                })), i
            }
            var n = new e(this, t);
            return n.init(), n.returnPublicInterface()
        }, e.mdbDropdownAutoInit()
    }))
}, function(t, e, i) {
    var n = i(5),
        o = i(1),
        r = i(10),
        a = i(22).f,
        s = i(7),
        l = o((function() {
            a(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: !s || l,
        sham: !s
    }, {
        getOwnPropertyDescriptor: function(t, e) {
            return a(r(t), e)
        }
    })
}, function(t, e, i) {
    var n = i(5),
        o = i(7),
        r = i(53),
        a = i(10),
        s = i(22),
        l = i(65);
    n({
        target: "Object",
        stat: !0,
        sham: !o
    }, {
        getOwnPropertyDescriptors: function(t) {
            for (var e, i, n = a(t), o = s.f, c = r(n), u = {}, d = 0; c.length > d;) void 0 !== (i = o(n, e = c[d++])) && l(u, e, i);
            return u
        }
    })
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43), i(66);

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    jQuery((function(t) {
        var e = function() {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.$searchWrappers = t, this.options = {
                    color: this.fallback().or(i.color).or("#000").value(),
                    backgroundColor: this.fallback().or(i.backgroundColor).or("").value(),
                    fontSize: this.fallback().or(i.fontSize).or(".9rem").value(),
                    fontWeight: this.fallback().or(i.fontWeight).or("400").value(),
                    borderRadius: this.fallback().or(i.borderRadius).or("").value(),
                    borderColor: this.fallback().or(i.borderColor).or("").value(),
                    margin: this.fallback().or(i.margin).or("").value()
                }
            }
            var i, o, r;
            return i = e, (o = [{
                key: "init",
                value: function() {
                    return this.bindSearchEvents(), this.$searchWrappers.css({
                        color: this.options.color,
                        backgroundColor: this.options.backgroundColor,
                        fontSize: this.options.fontSize,
                        fontWeight: this.options.fontWeight,
                        borderRadius: this.options.borderRadius,
                        borderColor: this.options.borderColor,
                        margin: this.options.margin
                    })
                }
            }, {
                key: "bindSearchEvents",
                value: function() {
                    this.$searchWrappers.each((function() {
                        var e = t(this).find("input").first();
                        e.on("keyup", (function() {
                            e.closest("div[id]").find("a, li").each((function() {
                                var i = t(this);
                                i.html().toLowerCase().indexOf(e.val().toLowerCase()) > -1 ? i.css({
                                    display: ""
                                }) : i.css({
                                    display: "none"
                                })
                            }))
                        }))
                    }))
                }
            }, {
                key: "fallback",
                value: function() {
                    return {
                        _value: void 0,
                        or: function(t) {
                            return void 0 !== t && void 0 === this._value && (this._value = t), this
                        },
                        value: function() {
                            return this._value
                        }
                    }
                }
            }]) && n(i.prototype, o), r && n(i, r), e
        }();
        t.fn.mdbDropSearch = function(t) {
            return new e(this, t).init()
        }
    }))
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(73), i(43), i(95), i(66), i(110), i(93), i(70), i(68), i(113), i(86), i(114), i(96);
    var n = i(124);

    function o(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    jQuery((function(t) {
        var e, i = function() {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.options = {
                    destroy: this.fallback().or(i.destroy).or(!1).value(),
                    validate: this.fallback().or(t.attr("data-validate")).or(i.validate).or(!1).value(),
                    selectId: this.fallback().or(t.attr("data-select-id")).or(i.selectId).or(null).value(),
                    defaultMaterialInput: this.fallback().or(t.attr("data-default-material-input")).or(i.defaultMaterialInput).or(!1).value(),
                    fasClasses: this.fallback().or(t.attr("data-fas-classes")).or(i.fasClasses).or("").value(),
                    farClasses: this.fallback().or(t.attr("data-far-classes")).or(i.farClasses).or("").value(),
                    fabClasses: this.fallback().or(t.attr("data-fab-classes")).or(i.fabClasses).or("").value(),
                    copyClassesOption: this.fallback().or(t.attr("data-copy-classes-option")).or(i.copyClassesOption).or(!1).value(),
                    labels: {
                        selectAll: this.fallback().or(t.attr("data-label-select-all")).or((i.labels || {}).selectAll).or("Select all").value(),
                        optionsSelected: this.fallback().or(t.attr("data-label-options-selected")).or((i.labels || {}).optionsSelected).or("options selected").value(),
                        validFeedback: this.fallback().or(t.attr("data-label-valid-feedback")).or((i.labels || {}).validFeedback).or("Ok").value(),
                        invalidFeedback: this.fallback().or(t.attr("data-label-invalid-feedback")).or((i.labels || {}).invalidFeedback).or("Incorrect value").value(),
                        noSearchResults: this.fallback().or(t.attr("data-label-no-search-results")).or((i.labels || {}).noSearchResults).or("No results").value()
                    },
                    keyboardActiveClass: this.fallback().or(t.attr("data-keyboard-active-class")).or(i.keyboardActiveClass).or("heavy-rain-gradient").value(),
                    placeholder: this.fallback().or(t.attr("data-placeholder")).or(i.placeholder).or(null).value(),
                    visibleOptions: this.fallback().or(t.attr("data-visible-options")).or(i.visibleOptions).or(5).value(),
                    maxSelectedOptions: this.fallback().or(t.attr("data-max-selected-options")).or(i.maxSelectedOptions).or(5).value(),
                    showResetButton: this.fallback().or(t.attr("data-show-reset-button")).or(i.showResetButton).or(!1).value()
                }, this.uuid = t.attr("id") || this.options.selectId || this._randomUUID(), this.view = new n.default(t, {
                    options: this.options,
                    properties: {
                        id: this.uuid
                    }
                }), this.selectedOptionsIndexes = [], e.mutationObservers = []
            }
            var i, r, a;
            return i = e, a = [{
                key: "clearMutationObservers",
                value: function() {
                    e.mutationObservers.forEach((function(t) {
                        t.disconnect(), t.customStatus = "stopped"
                    }))
                }
            }, {
                key: "mdbSelectAutoInit",
                value: function() {
                    t(".mdb-select.mdb-select-autoinit").materialSelect()
                }
            }], (r = [{
                key: "init",
                value: function() {
                    var t = this;
                    this.options.destroy ? this.view.destroy() : (this.isInitialized && this.view.destroy(), this.view.render(), this.view.selectPreselectedOptions((function(e) {
                        return t._toggleSelectedValue(e)
                    })), this.bindEvents())
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    this.bindMutationObserverChange(), this.view.isEditable && this.view.isSearchable && this.view.bindResetButtonClick((function() {
                        return t._resetSelection()
                    })), this.view.bindAddNewOptionClick(), this.view.bindMaterialSelectFocus(), this.view.bindMaterialSelectClick(), this.view.bindMaterialSelectBlur(), this.view.bindMaterialOptionsListTouchstart(), this.view.bindMaterialSelectKeydown(), this.view.bindMaterialSelectDropdownToggle(), this.view.bindToggleAllClick((function(e) {
                        return t._toggleSelectedValue(e)
                    })), this.view.bindMaterialOptionMousedown(), this.view.bindMaterialOptionClick((function(e) {
                        return t._toggleSelectedValue(e)
                    })), !this.view.isMultiple && this.view.isSearchable && this.view.bindSingleMaterialOptionClick(), this.view.isSearchable && this.view.bindSearchInputKeyup(), this.view.bindHtmlClick(), this.view.bindMobileDevicesMousedown(), this.view.bindSaveBtnClick()
                }
            }, {
                key: "bindMutationObserverChange",
                value: function() {
                    var t = new MutationObserver(this._onMutationObserverChange.bind(this));
                    t.observe(this.view.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), t.customId = this.uuid, t.customStatus = "observing", e.clearMutationObservers(), e.mutationObservers.push(t)
                }
            }, {
                key: "_onMutationObserverChange",
                value: function(i) {
                    i.forEach((function(i) {
                        var n = t(i.target).closest("select");
                        !0 !== n.data("stop-refresh") && ("childList" === i.type || "attributes" === i.type && t(i.target).is("option")) && (e.clearMutationObservers(), n.materialSelect({
                            destroy: !0
                        }), n.materialSelect())
                    }))
                }
            }, {
                key: "_resetSelection",
                value: function() {
                    this.selectedOptionsIndexes = [], this.view.$nativeSelect.find("option").prop("selected", !1)
                }
            }, {
                key: "_toggleSelectedValue",
                value: function(t) {
                    var e = this.selectedOptionsIndexes.indexOf(t),
                        i = -1 !== e;
                    return i ? this.selectedOptionsIndexes.splice(e, 1) : this.selectedOptionsIndexes.push(t), this.view.$nativeSelect.find("option").eq(t).prop("selected", !i), this._setValueToMaterialSelect(), !i
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function() {
                    var t = this,
                        e = "",
                        i = this.selectedOptionsIndexes.length;
                    this.selectedOptionsIndexes.forEach((function(i) {
                        return e += ", ".concat(t.view.$nativeSelect.find("option").eq(i).text().replace(/  +/g, " ").trim())
                    })), 0 === (e = this.options.maxSelectedOptions >= 0 && i > this.options.maxSelectedOptions ? "".concat(i, " ").concat(this.options.labels.optionsSelected) : e.substring(2)).length && (e = this.view.$nativeSelect.find("option:disabled").eq(0).text()), this.view.$nativeSelect.siblings("".concat(this.options.defaultMaterialInput ? "input.multi-bs-select" : "input.select-dropdown")).val(e)
                }
            }, {
                key: "_randomUUID",
                value: function() {
                    var t = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var i = (t + 16 * Math.random()) % 16 | 0;
                        return t = Math.floor(t / 16), ("x" === e ? i : 3 & i | 8).toString(16)
                    }))
                }
            }, {
                key: "fallback",
                value: function() {
                    return {
                        _value: void 0,
                        or: function(t) {
                            return void 0 !== t && void 0 === this._value && (this._value = t), this
                        },
                        value: function() {
                            return this._value
                        }
                    }
                }
            }, {
                key: "isInitialized",
                get: function() {
                    return Boolean(this.view.$nativeSelect.data("select-id")) && this.view.$nativeSelect.hasClass("initialized")
                }
            }]) && o(i.prototype, r), a && o(i, a), e
        }();
        t.fn.materialSelect = function(e) {
            t(this).not(".browser-default").not(".custom-select").each((function() {
                new i(t(this), e).init()
            }))
        }, e = t.fn.val, t.fn.val = function(t) {
            if (!arguments.length) return e.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
                i.clearMutationObservers(), this.materialSelect({
                    destroy: !0
                });
                var n = e.call(this, t);
                return this.materialSelect(), n
            }
            return e.call(this, t)
        }, i.mdbSelectAutoInit()
    }))
}, , function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(128).left;
    n({
        target: "Array",
        proto: !0,
        forced: i(51)("reduce")
    }, {
        reduce: function(t) {
            return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e) {
    ! function(t) {
        t("body").on("shown.bs.modal", ".modal", (function() {
            t(".modal-backdrop").length || ($modal_dialog = t(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (t(this).addClass("modal-scrolling"), t("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (t(this).addClass("modal-content-clickable"), t("body").addClass("scrollable")))
        })), t("body").on("hidden.bs.modal", ".modal", (function() {
            t("body").removeClass("scrollable")
        }))
    }(jQuery)
}, function(t, e) {
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
        },
        easeInQuad: function(t, e, i, n, o) {
            return n * (e /= o) * e + i
        },
        easeOutQuad: function(t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, o) {
            return n * (e /= o) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeInExpo: function(t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, o) {
            return e == o ? i + n : n * (1 - Math.pow(2, -10 * e / o)) + i
        },
        easeInOutExpo: function(t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
        },
        easeInCirc: function(t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, o) {
            var r = 1.70158,
                a = 0,
                s = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (a || (a = .3 * o), s < Math.abs(n)) {
                s = n;
                r = a / 4
            } else r = a / (2 * Math.PI) * Math.asin(n / s);
            return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) + i
        },
        easeOutElastic: function(t, e, i, n, o) {
            var r = 1.70158,
                a = 0,
                s = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (a || (a = .3 * o), s < Math.abs(n)) {
                s = n;
                r = a / 4
            } else r = a / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / a) + n + i
        },
        easeInOutElastic: function(t, e, i, n, o) {
            var r = 1.70158,
                a = 0,
                s = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if (a || (a = o * (.3 * 1.5)), s < Math.abs(n)) {
                s = n;
                r = a / 4
            } else r = a / (2 * Math.PI) * Math.asin(n / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) * -.5 + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, o, r) {
            return null == r && (r = 1.70158), n * (e /= o) * e * ((r + 1) * e - r) + i
        },
        easeOutBack: function(t, e, i, n, o, r) {
            return null == r && (r = 1.70158), n * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, o, r) {
            return null == r && (r = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i
        },
        easeInBounce: function(t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
        },
        easeOutBounce: function(t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, o) {
            return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
        }
    })
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var e;
        i(69), i(79), i(80), i(73), i(64), i(71), i(133), i(102), i(170), i(93), i(70), i(112), i(127), i(129), i(68), i(113), i(81), i(116), i(86), i(100), i(172), i(177), i(179), i(180), i(181), i(182), i(183), i(184), i(185), i(186), i(187), i(188), i(189), i(190), i(191), i(192), i(193), i(194), i(195), i(196), i(197), i(198), i(199), i(200), i(84);

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
        /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
        /*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
        jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(t) {
            function e(t) {
                var e = t.length,
                    n = i.type(t);
                return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
            }
            if (!t.jQuery) {
                var i = function t(e, i) {
                    return new t.fn.init(e, i)
                };
                i.isWindow = function(t) {
                    return null != t && t == t.window
                }, i.type = function(t) {
                    return null == t ? t + "" : "object" == n(t) || "function" == typeof t ? r[s.call(t)] || "object" : n(t)
                }, i.isArray = Array.isArray || function(t) {
                    return "array" === i.type(t)
                }, i.isPlainObject = function(t) {
                    var e;
                    if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    for (e in t);
                    return void 0 === e || a.call(t, e)
                }, i.each = function(t, i, n) {
                    var o = 0,
                        r = t.length,
                        a = e(t);
                    if (n) {
                        if (a)
                            for (; r > o && !1 !== i.apply(t[o], n); o++);
                        else
                            for (o in t)
                                if (!1 === i.apply(t[o], n)) break
                    } else if (a)
                        for (; r > o && !1 !== i.call(t[o], o, t[o]); o++);
                    else
                        for (o in t)
                            if (!1 === i.call(t[o], o, t[o])) break;
                    return t
                }, i.data = function(t, e, n) {
                    if (void 0 === n) {
                        var r = (a = t[i.expando]) && o[a];
                        if (void 0 === e) return r;
                        if (r && e in r) return r[e]
                    } else if (void 0 !== e) {
                        var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                        return o[a] = o[a] || {}, o[a][e] = n, n
                    }
                }, i.removeData = function(t, e) {
                    var n = t[i.expando],
                        r = n && o[n];
                    r && i.each(e, (function(t, e) {
                        delete r[e]
                    }))
                }, i.extend = function() {
                    var t, e, o, r, a, s, l = arguments[0] || {},
                        c = 1,
                        u = arguments.length,
                        d = !1;
                    for ("boolean" == typeof l && (d = l, l = arguments[c] || {}, c++), "object" != n(l) && "function" !== i.type(l) && (l = {}), c === u && (l = this, c--); u > c; c++)
                        if (null != (a = arguments[c]))
                            for (r in a) t = l[r], l !== (o = a[r]) && (d && o && (i.isPlainObject(o) || (e = i.isArray(o))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, l[r] = i.extend(d, s, o)) : void 0 !== o && (l[r] = o));
                    return l
                }, i.queue = function(t, n, o) {
                    if (t) {
                        n = (n || "fx") + "queue";
                        var r = i.data(t, n);
                        return o ? (!r || i.isArray(o) ? r = i.data(t, n, function(t, i) {
                            var n = i || [];
                            return null != t && (e(Object(t)) ? function(t, e) {
                                for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
                                if (i != i)
                                    for (; void 0 !== e[n];) t[o++] = e[n++];
                                t.length = o
                            }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                        }(o)) : r.push(o), r) : r || []
                    }
                }, i.dequeue = function(t, e) {
                    i.each(t.nodeType ? [t] : t, (function(t, n) {
                        e = e || "fx";
                        var o = i.queue(n, e),
                            r = o.shift();
                        "inprogress" === r && (r = o.shift()), r && ("fx" === e && o.unshift("inprogress"), r.call(n, (function() {
                            i.dequeue(n, e)
                        })))
                    }))
                }, i.fn = i.prototype = {
                    init: function(t) {
                        if (t.nodeType) return this[0] = t, this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function() {
                        var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function() {
                        function t() {
                            for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                            return t || document
                        }
                        var e = this[0],
                            t = t.apply(e),
                            n = this.offset(),
                            o = /^(?:body|html)$/i.test(t.nodeName) ? {
                                top: 0,
                                left: 0
                            } : i(t).offset();
                        return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {
                            top: n.top - o.top,
                            left: n.left - o.left
                        }
                    }
                };
                var o = {};
                i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
                for (var r = {}, a = r.hasOwnProperty, s = r.toString, l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), c = 0; c < l.length; c++) r["[object " + l[c] + "]"] = l[c].toLowerCase();
                i.fn.init.prototype = i.fn, t.Velocity = {
                    Utilities: i
                }
            }
        }(window), e = function() {
            return function(t, e, i, o) {
                function r(t) {
                    return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t
                }

                function a(t) {
                    var e = h.data(t, "velocity");
                    return null === e ? o : e
                }

                function s(t) {
                    return function(e) {
                        return Math.round(e * t) * (1 / t)
                    }
                }

                function l(t, i, n, o) {
                    function r(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function a(t, e) {
                        return 3 * e - 6 * t
                    }

                    function s(t) {
                        return 3 * t
                    }

                    function l(t, e, i) {
                        return ((r(e, i) * t + a(e, i)) * t + s(e)) * t
                    }

                    function c(t, e, i) {
                        return 3 * r(e, i) * t * t + 2 * a(e, i) * t + s(e)
                    }

                    function u(e, i) {
                        for (var o = 0; f > o; ++o) {
                            var r = c(i, t, n);
                            if (0 === r) return i;
                            i -= (l(i, t, n) - e) / r
                        }
                        return i
                    }

                    function d(e, i, o) {
                        var r, a, s = 0;
                        do {
                            (r = l(a = i + (o - i) / 2, t, n) - e) > 0 ? o = a : i = a
                        } while (Math.abs(r) > v && ++s < g);
                        return a
                    }

                    function h() {
                        k = !0, (t != i || n != o) && function() {
                            for (var e = 0; m > e; ++e) w[e] = l(e * y, t, n)
                        }()
                    }
                    var f = 4,
                        p = .001,
                        v = 1e-7,
                        g = 10,
                        m = 11,
                        y = 1 / (m - 1),
                        b = "Float32Array" in e;
                    if (4 !== arguments.length) return !1;
                    for (var x = 0; 4 > x; ++x)
                        if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
                    t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                    var w = b ? new Float32Array(m) : new Array(m),
                        k = !1,
                        S = function(e) {
                            return k || h(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(function(e) {
                                for (var i = 0, o = 1, r = m - 1; o != r && w[o] <= e; ++o) i += y;
                                var a = i + (e - w[--o]) / (w[o + 1] - w[o]) * y,
                                    s = c(a, t, n);
                                return s >= p ? u(e, a) : 0 == s ? a : d(e, i, i + y)
                            }(e), i, o)
                        };
                    S.getControlPoints = function() {
                        return [{
                            x: t,
                            y: i
                        }, {
                            x: n,
                            y: o
                        }]
                    };
                    var C = "generateBezier(" + [t, i, n, o] + ")";
                    return S.toString = function() {
                        return C
                    }, S
                }

                function c(t, e) {
                    var i = t;
                    return v.isString(t) ? b.Easings[t] || (i = !1) : i = v.isArray(t) && 1 === t.length ? s.apply(null, t) : v.isArray(t) && 2 === t.length ? x.apply(null, t.concat([e])) : !(!v.isArray(t) || 4 !== t.length) && l.apply(null, t), !1 === i && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
                }

                function u(t) {
                    if (t) {
                        var e = (new Date).getTime(),
                            i = b.State.calls.length;
                        i > 1e4 && (b.State.calls = function(t) {
                            for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                                var o = t[e];
                                o && n.push(o)
                            }
                            return n
                        }(b.State.calls));
                        for (var n = 0; i > n; n++)
                            if (b.State.calls[n]) {
                                var r = b.State.calls[n],
                                    s = r[0],
                                    l = r[2],
                                    c = r[3],
                                    f = !!c,
                                    p = null;
                                c || (c = b.State.calls[n][3] = e - 16);
                                for (var g = Math.min((e - c) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                                    var x = s[m],
                                        k = x.element;
                                    if (a(k)) {
                                        var C = !1;
                                        for (var T in l.display !== o && null !== l.display && "none" !== l.display && ("flex" === l.display && h.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], (function(t, e) {
                                                w.setPropertyValue(k, "display", e)
                                            })), w.setPropertyValue(k, "display", l.display)), l.visibility !== o && "hidden" !== l.visibility && w.setPropertyValue(k, "visibility", l.visibility), x)
                                            if ("element" !== T) {
                                                var M, A = x[T],
                                                    O = v.isString(A.easing) ? b.Easings[A.easing] : A.easing;
                                                if (1 === g) M = A.endValue;
                                                else {
                                                    var I = A.endValue - A.startValue;
                                                    if (M = A.startValue + I * O(g, l, I), !f && M === A.currentValue) continue
                                                }
                                                if (A.currentValue = M, "tween" === T) p = M;
                                                else {
                                                    if (w.Hooks.registered[T]) {
                                                        var P = w.Hooks.getRoot(T),
                                                            _ = a(k).rootPropertyValueCache[P];
                                                        _ && (A.rootPropertyValue = _)
                                                    }
                                                    var E = w.setPropertyValue(k, T, A.currentValue + (0 === parseFloat(M) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                    w.Hooks.registered[T] && (a(k).rootPropertyValueCache[P] = w.Normalizations.registered[P] ? w.Normalizations.registered[P]("extract", null, E[1]) : E[1]), "transform" === E[0] && (C = !0)
                                                }
                                            } l.mobileHA && a(k).transformCache.translate3d === o && (a(k).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && w.flushTransformCache(k)
                                    }
                                }
                                l.display !== o && "none" !== l.display && (b.State.calls[n][2].display = !1), l.visibility !== o && "hidden" !== l.visibility && (b.State.calls[n][2].visibility = !1), l.progress && l.progress.call(r[1], r[1], g, Math.max(0, c + l.duration - e), c, p), 1 === g && d(n)
                            }
                    }
                    b.State.isTicking && S(u)
                }

                function d(t, e) {
                    if (!b.State.calls[t]) return !1;
                    for (var i = b.State.calls[t][0], n = b.State.calls[t][1], r = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                        var d = i[c].element;
                        if (e || r.loop || ("none" === r.display && w.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && w.setPropertyValue(d, "visibility", r.visibility)), !0 !== r.loop && (h.queue(d)[1] === o || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && a(d)) {
                            a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                            var f = !1;
                            h.each(w.Lists.transforms3D, (function(t, e) {
                                var i = /^scale/.test(e) ? 1 : 0,
                                    n = a(d).transformCache[e];
                                a(d).transformCache[e] !== o && new RegExp("^\\(" + i + "[^.]").test(n) && (f = !0, delete a(d).transformCache[e])
                            })), r.mobileHA && (f = !0, delete a(d).transformCache.translate3d), f && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
                        }
                        if (!e && r.complete && !r.loop && c === u - 1) try {
                            r.complete.call(n, n)
                        } catch (t) {
                            setTimeout((function() {
                                throw t
                            }), 1)
                        }
                        s && !0 !== r.loop && s(n), a(d) && !0 === r.loop && !e && (h.each(a(d).tweensContainer, (function(t, e) {
                            /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                        })), b(d, "reverse", {
                            loop: !0,
                            delay: r.delay
                        })), !1 !== r.queue && h.dequeue(d, r.queue)
                    }
                    b.State.calls[t] = !1;
                    for (var p = 0, v = b.State.calls.length; v > p; p++)
                        if (!1 !== b.State.calls[p]) {
                            l = !0;
                            break
                        }! 1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
                }
                var h, f = function() {
                        if (i.documentMode) return i.documentMode;
                        for (var t = 7; t > 4; t--) {
                            var e = i.createElement("div");
                            if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
                        }
                        return o
                    }(),
                    p = function() {
                        var t = 0;
                        return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                            var i, n = (new Date).getTime();
                            return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout((function() {
                                e(n + i)
                            }), i)
                        }
                    }(),
                    v = {
                        isString: function(t) {
                            return "string" == typeof t
                        },
                        isArray: Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        isFunction: function(t) {
                            return "[object Function]" === Object.prototype.toString.call(t)
                        },
                        isNode: function(t) {
                            return t && t.nodeType
                        },
                        isNodeList: function(t) {
                            return "object" == n(t) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== o && (0 === t.length || "object" == n(t[0]) && t[0].nodeType > 0)
                        },
                        isWrapped: function(t) {
                            return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                        },
                        isSVG: function(t) {
                            return e.SVGElement && t instanceof e.SVGElement
                        },
                        isEmptyObject: function(t) {
                            for (var e in t) return !1;
                            return !0
                        }
                    },
                    g = !1;
                if (t.fn && t.fn.jquery ? (h = t, g = !0) : h = e.Velocity.Utilities, 8 >= f && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                if (!(7 >= f)) {
                    var m = 400,
                        y = "swing",
                        b = {
                            State: {
                                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                isAndroid: /Android/i.test(navigator.userAgent),
                                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                isChrome: e.chrome,
                                isFirefox: /Firefox/i.test(navigator.userAgent),
                                prefixElement: i.createElement("div"),
                                prefixMatches: {},
                                scrollAnchor: null,
                                scrollPropertyLeft: null,
                                scrollPropertyTop: null,
                                isTicking: !1,
                                calls: []
                            },
                            CSS: {},
                            Utilities: h,
                            Redirects: {},
                            Easings: {},
                            Promise: e.Promise,
                            defaults: {
                                queue: "",
                                duration: m,
                                easing: y,
                                begin: o,
                                complete: o,
                                progress: o,
                                display: o,
                                visibility: o,
                                loop: !1,
                                delay: !1,
                                mobileHA: !0,
                                _cacheValues: !0
                            },
                            init: function(t) {
                                h.data(t, "velocity", {
                                    isSVG: v.isSVG(t),
                                    isAnimating: !1,
                                    computedStyle: null,
                                    tweensContainer: null,
                                    rootPropertyValueCache: {},
                                    transformCache: {}
                                })
                            },
                            hook: null,
                            mock: !1,
                            version: {
                                major: 1,
                                minor: 2,
                                patch: 2
                            },
                            debug: !1
                        };
                    e.pageYOffset !== o ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
                    var x = function() {
                        function t(t) {
                            return -t.tension * t.x - t.friction * t.v
                        }

                        function e(e, i, n) {
                            var o = {
                                x: e.x + n.dx * i,
                                v: e.v + n.dv * i,
                                tension: e.tension,
                                friction: e.friction
                            };
                            return {
                                dx: o.v,
                                dv: t(o)
                            }
                        }

                        function i(i, n) {
                            var o = {
                                    dx: i.v,
                                    dv: t(i)
                                },
                                r = e(i, .5 * n, o),
                                a = e(i, .5 * n, r),
                                s = e(i, n, a),
                                l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx),
                                c = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                            return i.x = i.x + l * n, i.v = i.v + c * n, i
                        }
                        return function t(e, n, o) {
                            var r, a, s, l = {
                                    x: -1,
                                    v: 0,
                                    tension: null,
                                    friction: null
                                },
                                c = [0],
                                u = 0;
                            for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, a = (r = null !== o) ? (u = t(e, n)) / o * .016 : .016; s = i(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                            return r ? function(t) {
                                return c[t * (c.length - 1) | 0]
                            } : u
                        }
                    }();
                    b.Easings = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        spring: function(t) {
                            return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                        }
                    }, h.each([
                        ["ease", [.25, .1, .25, 1]],
                        ["ease-in", [.42, 0, 1, 1]],
                        ["ease-out", [0, 0, .58, 1]],
                        ["ease-in-out", [.42, 0, .58, 1]],
                        ["easeInSine", [.47, 0, .745, .715]],
                        ["easeOutSine", [.39, .575, .565, 1]],
                        ["easeInOutSine", [.445, .05, .55, .95]],
                        ["easeInQuad", [.55, .085, .68, .53]],
                        ["easeOutQuad", [.25, .46, .45, .94]],
                        ["easeInOutQuad", [.455, .03, .515, .955]],
                        ["easeInCubic", [.55, .055, .675, .19]],
                        ["easeOutCubic", [.215, .61, .355, 1]],
                        ["easeInOutCubic", [.645, .045, .355, 1]],
                        ["easeInQuart", [.895, .03, .685, .22]],
                        ["easeOutQuart", [.165, .84, .44, 1]],
                        ["easeInOutQuart", [.77, 0, .175, 1]],
                        ["easeInQuint", [.755, .05, .855, .06]],
                        ["easeOutQuint", [.23, 1, .32, 1]],
                        ["easeInOutQuint", [.86, 0, .07, 1]],
                        ["easeInExpo", [.95, .05, .795, .035]],
                        ["easeOutExpo", [.19, 1, .22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [.6, .04, .98, .335]],
                        ["easeOutCirc", [.075, .82, .165, 1]],
                        ["easeInOutCirc", [.785, .135, .15, .86]]
                    ], (function(t, e) {
                        b.Easings[e[0]] = l.apply(null, e[1])
                    }));
                    var w = b.CSS = {
                        RegEx: {
                            isHex: /^#([A-f\d]{3}){1,2}$/i,
                            valueUnwrap: /^[A-z]+\((.*)\)$/i,
                            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                        },
                        Lists: {
                            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                        },
                        Hooks: {
                            templates: {
                                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                backgroundPosition: ["X Y", "0% 0%"],
                                transformOrigin: ["X Y Z", "50% 50% 0px"],
                                perspectiveOrigin: ["X Y", "50% 50%"]
                            },
                            registered: {},
                            register: function() {
                                for (var t = 0; t < w.Lists.colors.length; t++) {
                                    var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                    w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                                }
                                var i, n, o;
                                if (f)
                                    for (i in w.Hooks.templates) {
                                        o = (n = w.Hooks.templates[i])[0].split(" ");
                                        var r = n[1].match(w.RegEx.valueSplit);
                                        "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), w.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                    }
                                for (i in w.Hooks.templates)
                                    for (var t in o = (n = w.Hooks.templates[i])[0].split(" ")) {
                                        var a = i + o[t],
                                            s = t;
                                        w.Hooks.registered[a] = [i, s]
                                    }
                            },
                            getRoot: function(t) {
                                var e = w.Hooks.registered[t];
                                return e ? e[0] : t
                            },
                            cleanRootPropertyValue: function(t, e) {
                                return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                            },
                            extractValue: function(t, e) {
                                var i = w.Hooks.registered[t];
                                if (i) {
                                    var n = i[0],
                                        o = i[1];
                                    return (e = w.Hooks.cleanRootPropertyValue(n, e)).toString().match(w.RegEx.valueSplit)[o]
                                }
                                return e
                            },
                            injectValue: function(t, e, i) {
                                var n = w.Hooks.registered[t];
                                if (n) {
                                    var o, r = n[0],
                                        a = n[1];
                                    return (o = (i = w.Hooks.cleanRootPropertyValue(r, i)).toString().match(w.RegEx.valueSplit))[a] = e, o.join(" ")
                                }
                                return i
                            }
                        },
                        Normalizations: {
                            registered: {
                                clip: function(t, e, i) {
                                    switch (t) {
                                        case "name":
                                            return "clip";
                                        case "extract":
                                            var n;
                                            return n = w.RegEx.wrappedValueAlreadyExtracted.test(i) ? i : (n = i.toString().match(w.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i;
                                        case "inject":
                                            return "rect(" + i + ")"
                                    }
                                },
                                blur: function(t, e, i) {
                                    switch (t) {
                                        case "name":
                                            return b.State.isFirefox ? "filter" : "-webkit-filter";
                                        case "extract":
                                            var n = parseFloat(i);
                                            if (!n && 0 !== n) {
                                                var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                n = o ? o[1] : 0
                                            }
                                            return n;
                                        case "inject":
                                            return parseFloat(i) ? "blur(" + i + ")" : "none"
                                    }
                                },
                                opacity: function(t, e, i) {
                                    if (8 >= f) switch (t) {
                                        case "name":
                                            return "filter";
                                        case "extract":
                                            var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                            return n ? n[1] / 100 : 1;
                                        case "inject":
                                            return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                    } else switch (t) {
                                        case "name":
                                            return "opacity";
                                        case "extract":
                                        case "inject":
                                            return i
                                    }
                                }
                            },
                            register: function() {
                                9 >= f || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                                for (var t = 0; t < w.Lists.transformsBase.length; t++) ! function() {
                                    var e = w.Lists.transformsBase[t];
                                    w.Normalizations.registered[e] = function(t, i, n) {
                                        switch (t) {
                                            case "name":
                                                return "transform";
                                            case "extract":
                                                return a(i) === o || a(i).transformCache[e] === o ? /^scale/i.test(e) ? 1 : 0 : a(i).transformCache[e].replace(/[()]/g, "");
                                            case "inject":
                                                var r = !1;
                                                switch (e.substr(0, e.length - 1)) {
                                                    case "translate":
                                                        r = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                                        break;
                                                    case "scal":
                                                    case "scale":
                                                        b.State.isAndroid && a(i).transformCache[e] === o && 1 > n && (n = 1), r = !/(\d)$/i.test(n);
                                                        break;
                                                    case "skew":
                                                        r = !/(deg|\d)$/i.test(n);
                                                        break;
                                                    case "rotate":
                                                        r = !/(deg|\d)$/i.test(n)
                                                }
                                                return r || (a(i).transformCache[e] = "(" + n + ")"), a(i).transformCache[e]
                                        }
                                    }
                                }();
                                for (t = 0; t < w.Lists.colors.length; t++) ! function() {
                                    var e = w.Lists.colors[t];
                                    w.Normalizations.registered[e] = function(t, i, n) {
                                        switch (t) {
                                            case "name":
                                                return e;
                                            case "extract":
                                                var r;
                                                if (w.RegEx.wrappedValueAlreadyExtracted.test(n)) r = n;
                                                else {
                                                    var a, s = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                    /^[A-z]+$/i.test(n) ? a = s[n] !== o ? s[n] : s.black : w.RegEx.isHex.test(n) ? a = "rgb(" + w.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (a = s.black), r = (a || n).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                                }
                                                return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
                                            case "inject":
                                                return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                        }
                                    }
                                }()
                            }
                        },
                        Names: {
                            camelCase: function(t) {
                                return t.replace(/-(\w)/g, (function(t, e) {
                                    return e.toUpperCase()
                                }))
                            },
                            SVGAttribute: function(t) {
                                var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                return (f || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                            },
                            prefixCheck: function(t) {
                                if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                                for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                                    var o;
                                    if (o = 0 === i ? t : e[i] + t.replace(/^\w/, (function(t) {
                                            return t.toUpperCase()
                                        })), v.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[t] = o, [o, !0]
                                }
                                return [t, !1]
                            }
                        },
                        Values: {
                            hexToRgb: function(t) {
                                var e;
                                return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, n) {
                                    return e + e + i + i + n + n
                                })), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                            },
                            isCSSNullValue: function(t) {
                                return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                            },
                            getUnitType: function(t) {
                                return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                            },
                            getDisplayType: function(t) {
                                var e = t && t.tagName.toString().toLowerCase();
                                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                            },
                            addClass: function(t, e) {
                                t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                            },
                            removeClass: function(t, e) {
                                t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                            }
                        },
                        getPropertyValue: function(t, i, n, r) {
                            function s(t, i) {
                                function n() {
                                    u && w.setPropertyValue(t, "display", "none")
                                }
                                var l = 0;
                                if (8 >= f) l = h.css(t, i);
                                else {
                                    var c, u = !1;
                                    if (/^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && (u = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !r) {
                                        if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var d = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                            return n(), d
                                        }
                                        if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var p = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                            return n(), p
                                        }
                                    }
                                    c = a(t) === o ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === f && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = t.style[i]), n()
                                }
                                if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                    var v = s(t, "position");
                                    ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = h(t).position()[i] + "px")
                                }
                                return l
                            }
                            var l;
                            if (w.Hooks.registered[i]) {
                                var c = i,
                                    u = w.Hooks.getRoot(c);
                                n === o && (n = w.getPropertyValue(t, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (n = w.Normalizations.registered[u]("extract", t, n)), l = w.Hooks.extractValue(c, n)
                            } else if (w.Normalizations.registered[i]) {
                                var d, p;
                                "transform" !== (d = w.Normalizations.registered[i]("name", t)) && (p = s(t, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(p) && w.Hooks.templates[i] && (p = w.Hooks.templates[i][1])), l = w.Normalizations.registered[i]("extract", t, p)
                            }
                            if (!/^[\d-]/.test(l))
                                if (a(t) && a(t).isSVG && w.Names.SVGAttribute(i))
                                    if (/^(height|width)$/i.test(i)) try {
                                        l = t.getBBox()[i]
                                    } catch (t) {
                                        l = 0
                                    } else l = t.getAttribute(i);
                                    else l = s(t, w.Names.prefixCheck(i)[0]);
                            return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                        },
                        setPropertyValue: function(t, i, n, o, r) {
                            var s = i;
                            if ("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? e.scrollTo(n, r.alternateValue) : e.scrollTo(r.alternateValue, n);
                            else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n), s = "transform", n = a(t).transformCache[i];
                            else {
                                if (w.Hooks.registered[i]) {
                                    var l = i,
                                        c = w.Hooks.getRoot(i);
                                    o = o || w.getPropertyValue(t, c), n = w.Hooks.injectValue(l, n, o), i = c
                                }
                                if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", t, n), i = w.Normalizations.registered[i]("name", t)), s = w.Names.prefixCheck(i)[0], 8 >= f) try {
                                    t.style[s] = n
                                } catch (t) {
                                    b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                                } else a(t) && a(t).isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;
                                b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                            }
                            return [s, n]
                        },
                        flushTransformCache: function(t) {
                            function e(e) {
                                return parseFloat(w.getPropertyValue(t, e))
                            }
                            var i = "";
                            if ((f || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                                var n = {
                                    translate: [e("translateX"), e("translateY")],
                                    skewX: [e("skewX")],
                                    skewY: [e("skewY")],
                                    scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                    rotate: [e("rotateZ"), 0, 0]
                                };
                                h.each(a(t).transformCache, (function(t) {
                                    /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                                }))
                            } else {
                                var o, r;
                                h.each(a(t).transformCache, (function(e) {
                                    return o = a(t).transformCache[e], "transformPerspective" === e ? (r = o, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(i += e + o + " "))
                                })), r && (i = "perspective" + r + " " + i)
                            }
                            w.setPropertyValue(t, "transform", i)
                        }
                    };
                    w.Hooks.register(), w.Normalizations.register(), b.hook = function(t, e, i) {
                        var n = o;
                        return t = r(t), h.each(t, (function(t, r) {
                            if (a(r) === o && b.init(r), i === o) n === o && (n = b.CSS.getPropertyValue(r, e));
                            else {
                                var s = b.CSS.setPropertyValue(r, e, i);
                                "transform" === s[0] && b.CSS.flushTransformCache(r), n = s
                            }
                        })), n
                    };
                    var k = function t() {
                        function n() {
                            return l ? O.promise || null : f
                        }

                        function s() {
                            function t(t) {
                                function d(t, e) {
                                    var i = o,
                                        n = o,
                                        a = o;
                                    return v.isArray(t) ? (i = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? a = t[1] : (v.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (n = e ? t[1] : c(t[1], s.duration), t[2] !== o && (a = t[2]))) : i = t, e || (n = n || s.easing), v.isFunction(i) && (i = i.call(r, C, S)), v.isFunction(a) && (a = a.call(r, C, S)), [i || 0, n, a]
                                }

                                function f(t, e) {
                                    var i, n;
                                    return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, (function(t) {
                                        return i = t, ""
                                    })), i || (i = w.Values.getUnitType(t)), [n, i]
                                }

                                function p() {
                                    var t = {
                                            myParent: r.parentNode || i.body,
                                            position: w.getPropertyValue(r, "position"),
                                            fontSize: w.getPropertyValue(r, "fontSize")
                                        },
                                        n = t.position === L.lastPosition && t.myParent === L.lastParent,
                                        o = t.fontSize === L.lastFontSize;
                                    L.lastParent = t.myParent, L.lastPosition = t.position, L.lastFontSize = t.fontSize;
                                    var s = 100,
                                        l = {};
                                    if (o && n) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                                    else {
                                        var c = a(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                        b.init(c), t.myParent.appendChild(c), h.each(["overflow", "overflowX", "overflowY"], (function(t, e) {
                                            b.CSS.setPropertyValue(c, e, "hidden")
                                        })), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], (function(t, e) {
                                            b.CSS.setPropertyValue(c, e, s + "%")
                                        })), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
                                    }
                                    return null === L.remToPx && (L.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100, L.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                                }
                                if (s.begin && 0 === C) try {
                                    s.begin.call(g, g)
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                                if ("scroll" === A) {
                                    var m, k, T, M = /^x$/i.test(s.axis) ? "Left" : "Top",
                                        I = parseFloat(s.offset) || 0;
                                    s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, T = (m = s.container["scroll" + M]) + h(r).position()[M.toLowerCase()] + I) : s.container = null : (m = b.State.scrollAnchor[b.State["scrollProperty" + M]], k = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === M ? "Top" : "Left")]], T = h(r).offset()[M.toLowerCase()] + I), l = {
                                        scroll: {
                                            rootPropertyValue: !1,
                                            startValue: m,
                                            currentValue: m,
                                            endValue: T,
                                            unitType: "",
                                            easing: s.easing,
                                            scrollData: {
                                                container: s.container,
                                                direction: M,
                                                alternateValue: k
                                            }
                                        },
                                        element: r
                                    }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                                } else if ("reverse" === A) {
                                    if (!a(r).tweensContainer) return void h.dequeue(r, s.queue);
                                    "none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, x.easing || delete s.easing, x.duration || delete s.duration, s = h.extend({}, a(r).opts, s);
                                    var P = h.extend(!0, {}, a(r).tweensContainer);
                                    for (var _ in P)
                                        if ("element" !== _) {
                                            var E = P[_].startValue;
                                            P[_].startValue = P[_].currentValue = P[_].endValue, P[_].endValue = E, v.isEmptyObject(x) || (P[_].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + _ + "): " + JSON.stringify(P[_]), r)
                                        } l = P
                                } else if ("start" === A) {
                                    for (var D in a(r).tweensContainer && !0 === a(r).isAnimating && (P = a(r).tweensContainer), h.each(y, (function(t, e) {
                                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                                var i = d(e, !0),
                                                    n = i[0],
                                                    r = i[1],
                                                    a = i[2];
                                                if (w.RegEx.isHex.test(n)) {
                                                    for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(n), c = a ? w.Values.hexToRgb(a) : o, u = 0; u < s.length; u++) {
                                                        var h = [l[u]];
                                                        r && h.push(r), c !== o && h.push(c[u]), y[t + s[u]] = h
                                                    }
                                                    delete y[t]
                                                }
                                            }
                                        })), y) {
                                        var $ = d(y[D]),
                                            F = $[0],
                                            W = $[1],
                                            N = $[2];
                                        D = w.Names.camelCase(D);
                                        var V = w.Hooks.getRoot(D),
                                            j = !1;
                                        if (a(r).isSVG || "tween" === V || !1 !== w.Names.prefixCheck(V)[1] || w.Normalizations.registered[V] !== o) {
                                            (s.display !== o && null !== s.display && "none" !== s.display || s.visibility !== o && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !N && 0 !== F && (N = 0), s._cacheValues && P && P[D] ? (N === o && (N = P[D].endValue + P[D].unitType), j = a(r).rootPropertyValueCache[V]) : w.Hooks.registered[D] ? N === o ? (j = w.getPropertyValue(r, V), N = w.getPropertyValue(r, D, j)) : j = w.Hooks.templates[V][1] : N === o && (N = w.getPropertyValue(r, D));
                                            var H, z, B, Y = !1;
                                            if (N = (H = f(D, N))[0], B = H[1], F = (H = f(D, F))[0].replace(/^([+-\/*])=/, (function(t, e) {
                                                    return Y = e, ""
                                                })), z = H[1], N = parseFloat(N) || 0, F = parseFloat(F) || 0, "%" === z && (/^(fontSize|lineHeight)$/.test(D) ? (F /= 100, z = "em") : /^scale/.test(D) ? (F /= 100, z = "") : /(Red|Green|Blue)$/i.test(D) && (F = F / 100 * 255, z = "")), /[\/*]/.test(Y)) z = B;
                                            else if (B !== z && 0 !== N)
                                                if (0 === F) z = B;
                                                else {
                                                    n = n || p();
                                                    var U = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                                    switch (B) {
                                                        case "%":
                                                            N *= "x" === U ? n.percentToPxWidth : n.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            N *= n[B + "ToPx"]
                                                    }
                                                    switch (z) {
                                                        case "%":
                                                            N *= 1 / ("x" === U ? n.percentToPxWidth : n.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            N *= 1 / n[z + "ToPx"]
                                                    }
                                                } switch (Y) {
                                                case "+":
                                                    F = N + F;
                                                    break;
                                                case "-":
                                                    F = N - F;
                                                    break;
                                                case "*":
                                                    F *= N;
                                                    break;
                                                case "/":
                                                    F = N / F
                                            }
                                            l[D] = {
                                                rootPropertyValue: j,
                                                startValue: N,
                                                currentValue: N,
                                                endValue: F,
                                                unitType: z,
                                                easing: W
                                            }, b.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), r)
                                        } else b.debug && console.log("Skipping [" + V + "] due to a lack of browser support.")
                                    }
                                    l.element = r
                                }
                                l.element && (w.Values.addClass(r, "velocity-animating"), R.push(l), "" === s.queue && (a(r).tweensContainer = l, a(r).opts = s), a(r).isAnimating = !0, C === S - 1 ? (b.State.calls.push([R, g, s, null, O.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : C++)
                            }
                            var n, r = this,
                                s = h.extend({}, b.defaults, x),
                                l = {};
                            switch (a(r) === o && b.init(r), parseFloat(s.delay) && !1 !== s.queue && h.queue(r, s.queue, (function(t) {
                                b.velocityQueueEntryFlag = !0, a(r).delayTimer = {
                                    setTimeout: setTimeout(t, parseFloat(s.delay)),
                                    next: t
                                }
                            })), s.duration.toString().toLowerCase()) {
                                case "fast":
                                    s.duration = 200;
                                    break;
                                case "normal":
                                    s.duration = m;
                                    break;
                                case "slow":
                                    s.duration = 600;
                                    break;
                                default:
                                    s.duration = parseFloat(s.duration) || 1
                            }!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== o && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(r))), s.visibility !== o && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(t, s.delay) : t() : h.queue(r, s.queue, (function(e, i) {
                                return !0 === i ? (O.promise && O.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void t())
                            })), "" !== s.queue && "fx" !== s.queue || "inprogress" === h.queue(r)[0] || h.dequeue(r)
                        }
                        var l, f, p, g, y, x, k = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
                        if (v.isWrapped(this) ? (l = !1, p = 0, g = this, f = this) : (l = !0, p = 1, g = k ? arguments[0].elements || arguments[0].e : arguments[0]), g = r(g)) {
                            k ? (y = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (y = arguments[p], x = arguments[p + 1]);
                            var S = g.length,
                                C = 0;
                            if (!/^(stop|finish)$/i.test(y) && !h.isPlainObject(x)) {
                                var T = p + 1;
                                x = {};
                                for (var M = T; M < arguments.length; M++) v.isArray(arguments[M]) || !/^(fast|normal|slow)$/i.test(arguments[M]) && !/^\d/.test(arguments[M]) ? v.isString(arguments[M]) || v.isArray(arguments[M]) ? x.easing = arguments[M] : v.isFunction(arguments[M]) && (x.complete = arguments[M]) : x.duration = arguments[M]
                            }
                            var A, O = {
                                promise: null,
                                resolver: null,
                                rejecter: null
                            };
                            switch (l && b.Promise && (O.promise = new b.Promise((function(t, e) {
                                O.resolver = t, O.rejecter = e
                            }))), y) {
                                case "scroll":
                                    A = "scroll";
                                    break;
                                case "reverse":
                                    A = "reverse";
                                    break;
                                case "finish":
                                case "stop":
                                    h.each(g, (function(t, e) {
                                        a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
                                    }));
                                    var I = [];
                                    return h.each(b.State.calls, (function(t, e) {
                                        e && h.each(e[1], (function(i, n) {
                                            var r = x === o ? "" : x;
                                            return !0 !== r && e[2].queue !== r && (x !== o || !1 !== e[2].queue) || void h.each(g, (function(i, o) {
                                                o === n && ((!0 === x || v.isString(x)) && (h.each(h.queue(o, v.isString(x) ? x : ""), (function(t, e) {
                                                    v.isFunction(e) && e(null, !0)
                                                })), h.queue(o, v.isString(x) ? x : "", [])), "stop" === y ? (a(o) && a(o).tweensContainer && !1 !== r && h.each(a(o).tweensContainer, (function(t, e) {
                                                    e.endValue = e.currentValue
                                                })), I.push(t)) : "finish" === y && (e[2].duration = 1))
                                            }))
                                        }))
                                    })), "stop" === y && (h.each(I, (function(t, e) {
                                        d(e, !0)
                                    })), O.promise && O.resolver(g)), n();
                                default:
                                    if (!h.isPlainObject(y) || v.isEmptyObject(y)) {
                                        if (v.isString(y) && b.Redirects[y]) {
                                            var P = ($ = h.extend({}, x)).duration,
                                                _ = $.delay || 0;
                                            return !0 === $.backwards && (g = h.extend(!0, [], g).reverse()), h.each(g, (function(t, e) {
                                                parseFloat($.stagger) ? $.delay = _ + parseFloat($.stagger) * t : v.isFunction($.stagger) && ($.delay = _ + $.stagger.call(e, t, S)), $.drag && ($.duration = parseFloat(P) || (/^(callout|transition)/.test(y) ? 1e3 : m), $.duration = Math.max($.duration * ($.backwards ? 1 - t / S : (t + 1) / S), .75 * $.duration, 200)), b.Redirects[y].call(e, e, $ || {}, t, S, g, O.promise ? O : o)
                                            })), n()
                                        }
                                        var E = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                        return O.promise ? O.rejecter(new Error(E)) : console.log(E), n()
                                    }
                                    A = "start"
                            }
                            var D, $, L = {
                                    lastParent: null,
                                    lastPosition: null,
                                    lastFontSize: null,
                                    lastPercentToPxWidth: null,
                                    lastPercentToPxHeight: null,
                                    lastEmToPx: null,
                                    remToPx: null,
                                    vwToPx: null,
                                    vhToPx: null
                                },
                                R = [];
                            if (h.each(g, (function(t, e) {
                                    v.isNode(e) && s.call(e)
                                })), ($ = h.extend({}, b.defaults, x)).loop = parseInt($.loop), D = 2 * $.loop - 1, $.loop)
                                for (var F = 0; D > F; F++) {
                                    var W = {
                                        delay: $.delay,
                                        progress: $.progress
                                    };
                                    F === D - 1 && (W.display = $.display, W.visibility = $.visibility, W.complete = $.complete), t(g, "reverse", W)
                                }
                            return n()
                        }
                    };
                    (b = h.extend(k, b)).animate = k;
                    var S = e.requestAnimationFrame || p;
                    return b.State.isMobile || i.hidden === o || i.addEventListener("visibilitychange", (function() {
                        i.hidden ? (S = function(t) {
                            return setTimeout((function() {
                                t(!0)
                            }), 16)
                        }, u()) : S = e.requestAnimationFrame || p
                    })), t.Velocity = b, t !== e && (t.fn.velocity = k, t.fn.velocity.defaults = b.defaults), h.each(["Down", "Up"], (function(t, e) {
                        b.Redirects["slide" + e] = function(t, i, n, r, a, s) {
                            var l = h.extend({}, i),
                                c = l.begin,
                                u = l.complete,
                                d = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                },
                                f = {};
                            l.display === o && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                                for (var i in c && c.call(a, a), d) {
                                    f[i] = t.style[i];
                                    var n = b.CSS.getPropertyValue(t, i);
                                    d[i] = "Down" === e ? [n, 0] : [0, n]
                                }
                                f.overflow = t.style.overflow, t.style.overflow = "hidden"
                            }, l.complete = function() {
                                for (var e in f) t.style[e] = f[e];
                                u && u.call(a, a), s && s.resolver(a)
                            }, b(t, d, l)
                        }
                    })), h.each(["In", "Out"], (function(t, e) {
                        b.Redirects["fade" + e] = function(t, i, n, r, a, s) {
                            var l = h.extend({}, i),
                                c = {
                                    opacity: "In" === e ? 1 : 0
                                },
                                u = l.complete;
                            l.complete = n !== r - 1 ? l.begin = null : function() {
                                u && u.call(a, a), s && s.resolver(a)
                            }, l.display === o && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
                        }
                    })), b
                }
                jQuery.fn.velocity = jQuery.fn.animate
            }(window.jQuery || window.Zepto || window, window, document)
        }, "object" == n(t) && "object" == n(t.exports) ? t.exports = e() : "function" == typeof define && i(76) ? define(e) : e())
    }).call(this, i(99)(t))
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(1),
        r = i(139),
        a = i(8),
        s = i(38),
        l = i(11),
        c = i(103),
        u = r.ArrayBuffer,
        d = r.DataView,
        h = u.prototype.slice;
    n({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: o((function() {
            return !new u(2).slice(1, void 0).byteLength
        }))
    }, {
        slice: function(t, e) {
            if (void 0 !== h && void 0 === e) return h.call(a(this), t);
            for (var i = a(this).byteLength, n = s(t, i), o = s(void 0 === e ? i : e, i), r = new(c(this, u))(l(o - n)), f = new d(this), p = new d(r), v = 0; n < o;) p.setUint8(v++, f.getUint8(n++));
            return r
        }
    })
}, function(t, e, i) {
    var n = i(15);
    t.exports = function(t, e, i) {
        for (var o in e) n(t, o, e[o], i);
        return t
    }
}, function(t, e, i) {
    i(173)("Float32", 4, (function(t) {
        return function(e, i, n) {
            return t(this, e, i, n)
        }
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(0),
        r = i(7),
        a = i(174),
        s = i(58),
        l = i(139),
        c = i(140),
        u = i(18),
        d = i(6),
        h = i(11),
        f = i(141),
        p = i(143),
        v = i(20),
        g = i(3),
        m = i(94),
        y = i(4),
        b = i(37),
        x = i(74),
        w = i(28).f,
        k = i(176),
        S = i(24).forEach,
        C = i(130),
        T = i(9),
        M = i(22),
        A = i(29),
        O = A.get,
        I = A.set,
        P = T.f,
        _ = M.f,
        E = Math.round,
        D = o.RangeError,
        $ = l.ArrayBuffer,
        L = l.DataView,
        R = s.NATIVE_ARRAY_BUFFER_VIEWS,
        F = s.TYPED_ARRAY_TAG,
        W = s.TypedArray,
        N = s.TypedArrayPrototype,
        V = s.aTypedArrayConstructor,
        j = s.isTypedArray,
        H = function(t, e) {
            for (var i = 0, n = e.length, o = new(V(t))(n); n > i;) o[i] = e[i++];
            return o
        },
        z = function(t, e) {
            P(t, e, {
                get: function() {
                    return O(this)[e]
                }
            })
        },
        B = function(t) {
            var e;
            return t instanceof $ || "ArrayBuffer" == (e = m(t)) || "SharedArrayBuffer" == e
        },
        Y = function(t, e) {
            return j(t) && "symbol" != typeof e && e in t && String(+e) == String(e)
        },
        U = function(t, e) {
            return Y(t, e = v(e, !0)) ? u(2, t[e]) : _(t, e)
        },
        X = function(t, e, i) {
            return !(Y(t, e = v(e, !0)) && y(i) && g(i, "value")) || g(i, "get") || g(i, "set") || i.configurable || g(i, "writable") && !i.writable || g(i, "enumerable") && !i.enumerable ? P(t, e, i) : (t[e] = i.value, t)
        };
    r ? (R || (M.f = U, T.f = X, z(N, "buffer"), z(N, "byteOffset"), z(N, "byteLength"), z(N, "length")), n({
        target: "Object",
        stat: !0,
        forced: !R
    }, {
        getOwnPropertyDescriptor: U,
        defineProperty: X
    }), t.exports = function(t, e, i, r) {
        var s = t + (r ? "Clamped" : "") + "Array",
            l = "get" + t,
            u = "set" + t,
            v = o[s],
            g = v,
            m = g && g.prototype,
            T = {},
            M = function(t, i) {
                P(t, i, {
                    get: function() {
                        return function(t, i) {
                            var n = O(t);
                            return n.view[l](i * e + n.byteOffset, !0)
                        }(this, i)
                    },
                    set: function(t) {
                        return function(t, i, n) {
                            var o = O(t);
                            r && (n = (n = E(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), o.view[u](i * e + o.byteOffset, n, !0)
                        }(this, i, t)
                    },
                    enumerable: !0
                })
            };
        R ? a && (g = i((function(t, i, n, o) {
            return c(t, g, s), y(i) ? B(i) ? void 0 !== o ? new v(i, p(n, e), o) : void 0 !== n ? new v(i, p(n, e)) : new v(i) : j(i) ? H(g, i) : k.call(g, i) : new v(f(i))
        })), x && x(g, W), S(w(v), (function(t) {
            t in g || d(g, t, v[t])
        })), g.prototype = m) : (g = i((function(t, i, n, o) {
            c(t, g, s);
            var r, a, l, u = 0,
                d = 0;
            if (y(i)) {
                if (!B(i)) return j(i) ? H(g, i) : k.call(g, i);
                r = i, d = p(n, e);
                var v = i.byteLength;
                if (void 0 === o) {
                    if (v % e) throw D("Wrong length");
                    if ((a = v - d) < 0) throw D("Wrong length")
                } else if ((a = h(o) * e) + d > v) throw D("Wrong length");
                l = a / e
            } else l = f(i), r = new $(a = l * e);
            for (I(t, {
                    buffer: r,
                    byteOffset: d,
                    byteLength: a,
                    length: l,
                    view: new L(r)
                }); u < l;) M(t, u++)
        })), x && x(g, W), m = g.prototype = b(N)), m.constructor !== g && d(m, "constructor", g), F && d(m, F, s), T[s] = g, n({
            global: !0,
            forced: g != v,
            sham: !R
        }, T), "BYTES_PER_ELEMENT" in g || d(g, "BYTES_PER_ELEMENT", e), "BYTES_PER_ELEMENT" in m || d(m, "BYTES_PER_ELEMENT", e), C(s)
    }) : t.exports = function() {}
}, function(t, e, i) {
    var n = i(0),
        o = i(1),
        r = i(142),
        a = i(58).NATIVE_ARRAY_BUFFER_VIEWS,
        s = n.ArrayBuffer,
        l = n.Int8Array;
    t.exports = !a || !o((function() {
        l(1)
    })) || !o((function() {
        new l(-1)
    })) || !r((function(t) {
        new l, new l(null), new l(1.5), new l(t)
    }), !0) || o((function() {
        return 1 !== new l(new s(2), 1, void 0).length
    }))
}, function(t, e, i) {
    var n = i(14);
    t.exports = function(t) {
        var e = n(t);
        if (e < 0) throw RangeError("The argument can't be less than 0");
        return e
    }
}, function(t, e, i) {
    var n = i(16),
        o = i(11),
        r = i(144),
        a = i(145),
        s = i(57),
        l = i(58).aTypedArrayConstructor;
    t.exports = function(t) {
        var e, i, c, u, d, h, f = n(t),
            p = arguments.length,
            v = p > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            m = r(f);
        if (null != m && !a(m))
            for (h = (d = m.call(f)).next, f = []; !(u = h.call(d)).done;) f.push(u.value);
        for (g && p > 2 && (v = s(v, arguments[2], 2)), i = o(f.length), c = new(l(this))(i), e = 0; i > e; e++) c[e] = g ? v(f[e], e) : f[e];
        return c
    }
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(178),
        r = n.aTypedArray;
    n.exportProto("copyWithin", (function(t, e) {
        return o.call(r(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(16),
        o = i(38),
        r = i(11),
        a = Math.min;
    t.exports = [].copyWithin || function(t, e) {
        var i = n(this),
            s = r(i.length),
            l = o(t, s),
            c = o(e, s),
            u = arguments.length > 2 ? arguments[2] : void 0,
            d = a((void 0 === u ? s : o(u, s)) - c, s - l),
            h = 1;
        for (c < l && l < c + d && (h = -1, c += d - 1, l += d - 1); d-- > 0;) c in i ? i[l] = i[c] : delete i[l], l += h, c += h;
        return i
    }
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).every,
        r = n.aTypedArray;
    n.exportProto("every", (function(t) {
        return o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(132),
        r = n.aTypedArray;
    n.exportProto("fill", (function(t) {
        return o.apply(r(this), arguments)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).filter,
        r = i(103),
        a = n.aTypedArray,
        s = n.aTypedArrayConstructor;
    n.exportProto("filter", (function(t) {
        for (var e = o(a(this), t, arguments.length > 1 ? arguments[1] : void 0), i = r(this, this.constructor), n = 0, l = e.length, c = new(s(i))(l); l > n;) c[n] = e[n++];
        return c
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).find,
        r = n.aTypedArray;
    n.exportProto("find", (function(t) {
        return o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).findIndex,
        r = n.aTypedArray;
    n.exportProto("findIndex", (function(t) {
        return o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).forEach,
        r = n.aTypedArray;
    n.exportProto("forEach", (function(t) {
        o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(39).includes,
        r = n.aTypedArray;
    n.exportProto("includes", (function(t) {
        return o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(39).indexOf,
        r = n.aTypedArray;
    n.exportProto("indexOf", (function(t) {
        return o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        o = i(58),
        r = i(64),
        a = i(2)("iterator"),
        s = n.Uint8Array,
        l = r.values,
        c = r.keys,
        u = r.entries,
        d = o.aTypedArray,
        h = o.exportProto,
        f = s && s.prototype[a],
        p = !!f && ("values" == f.name || null == f.name),
        v = function() {
            return l.call(d(this))
        };
    h("entries", (function() {
        return u.call(d(this))
    })), h("keys", (function() {
        return c.call(d(this))
    })), h("values", v, !p), h(a, v, !p)
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = n.aTypedArray,
        r = [].join;
    n.exportProto("join", (function(t) {
        return r.apply(o(this), arguments)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(131),
        r = n.aTypedArray;
    n.exportProto("lastIndexOf", (function(t) {
        return o.apply(r(this), arguments)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).map,
        r = i(103),
        a = n.aTypedArray,
        s = n.aTypedArrayConstructor;
    n.exportProto("map", (function(t) {
        return o(a(this), t, arguments.length > 1 ? arguments[1] : void 0, (function(t, e) {
            return new(s(r(t, t.constructor)))(e)
        }))
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(128).left,
        r = n.aTypedArray;
    n.exportProto("reduce", (function(t) {
        return o(r(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(128).right,
        r = n.aTypedArray;
    n.exportProto("reduceRight", (function(t) {
        return o(r(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = n.aTypedArray,
        r = Math.floor;
    n.exportProto("reverse", (function() {
        for (var t, e = o(this).length, i = r(e / 2), n = 0; n < i;) t = this[n], this[n++] = this[--e], this[e] = t;
        return this
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(11),
        r = i(143),
        a = i(16),
        s = i(1),
        l = n.aTypedArray,
        c = s((function() {
            new Int8Array(1).set({})
        }));
    n.exportProto("set", (function(t) {
        l(this);
        var e = r(arguments.length > 1 ? arguments[1] : void 0, 1),
            i = this.length,
            n = a(t),
            s = o(n.length),
            c = 0;
        if (s + e > i) throw RangeError("Wrong length");
        for (; c < s;) this[e + c] = n[c++]
    }), c)
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(103),
        r = i(1),
        a = n.aTypedArray,
        s = n.aTypedArrayConstructor,
        l = [].slice,
        c = r((function() {
            new Int8Array(1).slice()
        }));
    n.exportProto("slice", (function(t, e) {
        for (var i = l.call(a(this), t, e), n = o(this, this.constructor), r = 0, c = i.length, u = new(s(n))(c); c > r;) u[r] = i[r++];
        return u
    }), c)
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(24).some,
        r = n.aTypedArray;
    n.exportProto("some", (function(t) {
        return o(r(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = n.aTypedArray,
        r = [].sort;
    n.exportProto("sort", (function(t) {
        return r.call(o(this), t)
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(58),
        o = i(11),
        r = i(38),
        a = i(103),
        s = n.aTypedArray;
    n.exportProto("subarray", (function(t, e) {
        var i = s(this),
            n = i.length,
            l = r(t, n);
        return new(a(i, i.constructor))(i.buffer, i.byteOffset + l * i.BYTES_PER_ELEMENT, o((void 0 === e ? n : r(e, n)) - l))
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        o = i(58),
        r = i(1),
        a = n.Int8Array,
        s = o.aTypedArray,
        l = [].toLocaleString,
        c = [].slice,
        u = !!a && r((function() {
            l.call(new a(1))
        })),
        d = r((function() {
            return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString()
        })) || !r((function() {
            a.prototype.toLocaleString.call([1, 2])
        }));
    o.exportProto("toLocaleString", (function() {
        return l.apply(u ? c.call(s(this)) : s(this), arguments)
    }), d)
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        o = i(58),
        r = i(1),
        a = n.Uint8Array,
        s = a && a.prototype,
        l = [].toString,
        c = [].join;
    r((function() {
        l.call({})
    })) && (l = function() {
        return c.call(this)
    }), o.exportProto("toString", l, (s || {}).toString != l)
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i(69), i(79), i(80), i(66), i(64), i(71), i(93), i(111), i(70), i(113), i(81), i(84);

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * Waves v0.7.6
         * http://fian.my.id/Waves
         *
         * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
         * Released under the MIT license
         * https://github.com/fians/Waves/blob/master/LICENSE
         */
        ! function(n, o) {
            "function" == typeof define && i(76) ? define([], (function() {
                return n.Waves = o.call(n), n.Waves
            })) : "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? t.exports = o.call(n) : n.Waves = o.call(n)
        }("object" === ("undefined" == typeof window ? "undefined" : e(window)) ? window : void 0, (function() {
            var t = t || {},
                i = document.querySelectorAll.bind(document),
                n = Object.prototype.toString,
                o = "ontouchstart" in window;

            function r(t) {
                var i = e(t);
                return "function" === i || "object" === i && !!t
            }

            function a(t) {
                var e, o = n.call(t);
                return "[object String]" === o ? i(t) : r(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(o) && t.hasOwnProperty("length") ? t : r(e = t) && e.nodeType > 0 ? [t] : []
            }

            function s(t) {
                var i, n, o = {
                        top: 0,
                        left: 0
                    },
                    r = t && t.ownerDocument;
                return i = r.documentElement, "undefined" !== e(t.getBoundingClientRect) && (o = t.getBoundingClientRect()), n = function(t) {
                    return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
                    var e
                }(r), {
                    top: o.top + n.pageYOffset - i.clientTop,
                    left: o.left + n.pageXOffset - i.clientLeft
                }
            }

            function l(t) {
                var e = "";
                for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
                return e
            }
            var c = {
                    duration: 750,
                    delay: 200,
                    show: function(t, e, i) {
                        if (2 === t.button) return !1;
                        e = e || this;
                        var n = document.createElement("div");
                        n.className = "waves-ripple waves-rippling", e.appendChild(n);
                        var o = s(e),
                            r = 0,
                            a = 0;
                        "touches" in t && t.touches.length ? (r = t.touches[0].pageY - o.top, a = t.touches[0].pageX - o.left) : (r = t.pageY - o.top, a = t.pageX - o.left), a = a >= 0 ? a : 0, r = r >= 0 ? r : 0;
                        var u = "scale(" + e.clientWidth / 100 * 3 + ")",
                            d = "translate(0,0)";
                        i && (d = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", a), n.setAttribute("data-y", r), n.setAttribute("data-scale", u), n.setAttribute("data-translate", d);
                        var h = {
                            top: r + "px",
                            left: a + "px"
                        };
                        n.classList.add("waves-notransition"), n.setAttribute("style", l(h)), n.classList.remove("waves-notransition"), h["-webkit-transform"] = u + " " + d, h["-moz-transform"] = u + " " + d, h["-ms-transform"] = u + " " + d, h["-o-transform"] = u + " " + d, h.transform = u + " " + d, h.opacity = "1";
                        var f = "mousemove" === t.type ? 2500 : c.duration;
                        h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", n.setAttribute("style", l(h))
                    },
                    hide: function(t, e) {
                        for (var i = (e = e || this).getElementsByClassName("waves-rippling"), n = 0, r = i.length; n < r; n++) d(t, e, i[n]);
                        o && (e.removeEventListener("touchend", c.hide), e.removeEventListener("touchcancel", c.hide)), e.removeEventListener("mouseup", c.hide), e.removeEventListener("mouseleave", c.hide)
                    }
                },
                u = {
                    input: function(t) {
                        var e = t.parentNode;
                        if ("span" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                            var i = document.createElement("span");
                            i.className = "waves-input-wrapper", e.replaceChild(i, t), i.appendChild(t)
                        }
                    },
                    img: function(t) {
                        var e = t.parentNode;
                        if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                            var i = document.createElement("i");
                            e.replaceChild(i, t), i.appendChild(t)
                        }
                    }
                };

            function d(t, e, i) {
                if (i) {
                    i.classList.remove("waves-rippling");
                    var n = i.getAttribute("data-x"),
                        o = i.getAttribute("data-y"),
                        r = i.getAttribute("data-scale"),
                        a = i.getAttribute("data-translate"),
                        s = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                    s < 0 && (s = 0), "mousemove" === t.type && (s = 150);
                    var u = "mousemove" === t.type ? 2500 : c.duration;
                    setTimeout((function() {
                        var t = {
                            top: o + "px",
                            left: n + "px",
                            opacity: "0",
                            "-webkit-transition-duration": u + "ms",
                            "-moz-transition-duration": u + "ms",
                            "-o-transition-duration": u + "ms",
                            "transition-duration": u + "ms",
                            "-webkit-transform": r + " " + a,
                            "-moz-transform": r + " " + a,
                            "-ms-transform": r + " " + a,
                            "-o-transform": r + " " + a,
                            transform: r + " " + a
                        };
                        i.setAttribute("style", l(t)), setTimeout((function() {
                            try {
                                e.removeChild(i)
                            } catch (t) {
                                return !1
                            }
                        }), u)
                    }), s)
                }
            }
            var h = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
                },
                registerEvent: function(t) {
                    var e = t.type;
                    "touchstart" === e ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout((function() {
                        h.touches && (h.touches -= 1)
                    }), 500)
                }
            };

            function f(t) {
                var e = function(t) {
                    if (!1 === h.allowEvent(t)) return null;
                    for (var e = null, i = t.target || t.srcElement; i.parentElement;) {
                        if (!(i instanceof SVGElement) && i.classList.contains("waves-effect")) {
                            e = i;
                            break
                        }
                        i = i.parentElement
                    }
                    return e
                }(t);
                if (null !== e) {
                    if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                    if (h.registerEvent(t), "touchstart" === t.type && c.delay) {
                        var i = !1,
                            n = setTimeout((function() {
                                n = null, c.show(t, e)
                            }), c.delay),
                            r = function(o) {
                                n && (clearTimeout(n), n = null, c.show(t, e)), i || (i = !0, c.hide(o, e)), s()
                            },
                            a = function(t) {
                                n && (clearTimeout(n), n = null), r(t), s()
                            };
                        e.addEventListener("touchmove", a, !1), e.addEventListener("touchend", r, !1), e.addEventListener("touchcancel", r, !1);
                        var s = function() {
                            e.removeEventListener("touchmove", a), e.removeEventListener("touchend", r), e.removeEventListener("touchcancel", r)
                        }
                    } else c.show(t, e), o && (e.addEventListener("touchend", c.hide, !1), e.addEventListener("touchcancel", c.hide, !1)), e.addEventListener("mouseup", c.hide, !1), e.addEventListener("mouseleave", c.hide, !1)
                }
            }
            return t.init = function(t) {
                var e = document.body;
                "duration" in (t = t || {}) && (c.duration = t.duration), "delay" in t && (c.delay = t.delay), o && (e.addEventListener("touchstart", f, !1), e.addEventListener("touchcancel", h.registerEvent, !1), e.addEventListener("touchend", h.registerEvent, !1)), e.addEventListener("mousedown", f, !1)
            }, t.attach = function(t, e) {
                var i, o;
                t = a(t), "[object Array]" === n.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
                for (var r = 0, s = t.length; r < s; r++) o = (i = t[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (u[o](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + e)
            }, t.ripple = function(t, e) {
                var i = (t = a(t)).length;
                if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, i)
                    for (var n, o, r, l = {}, u = 0, d = {
                            type: "mousedown",
                            button: 1
                        }, h = function(t, e) {
                            return function() {
                                c.hide(t, e)
                            }
                        }; u < i; u++)
                        if (n = t[u], o = e.position || {
                                x: n.clientWidth / 2,
                                y: n.clientHeight / 2
                            }, r = s(n), l.x = r.left + o.x, l.y = r.top + o.y, d.pageX = l.x, d.pageY = l.y, c.show(d, n), e.wait >= 0 && null !== e.wait) {
                            setTimeout(h({
                                type: "mouseup",
                                button: 1
                            }, n), e.wait)
                        }
            }, t.calm = function(t) {
                for (var e = {
                        type: "mouseup",
                        button: 1
                    }, i = 0, n = (t = a(t)).length; i < n; i++) c.hide(e, t[i])
            }, t.displayEffect = function(e) {
                console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
            }, t
        })), $(document).ready((function() {
            Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
        }))
    }).call(this, i(99)(t))
}, function(t, e) {
    ! function(t) {
        t.fn.sticky = function(e) {
            var i = t.extend({}, {
                topSpacing: 0,
                zIndex: "",
                stopper: ".sticky-stopper",
                stickyClass: !1
            }, e);
            var n = "number" == typeof i.zIndex;
            var o = 0 < t(i.stopper).length || "number" == typeof i.stopper;
            return this.each((function() {
                var e = t(this),
                    r = e.outerHeight(),
                    a = e.outerWidth(),
                    s = i.topSpacing,
                    l = i.zIndex,
                    c = e.offset().top - s,
                    u = t("<div></div>").width(a).height(r).addClass("sticky-placeholder"),
                    d = i.stopper,
                    h = t(window);

                function f() {
                    var a = h.scrollTop(),
                        f = d,
                        p = e.parent().width();
                    (u.width(p), o && "string" == typeof d) && (f = t(d).offset().top - r - s);
                    if (c < a) {
                        if (i.stickyClass && e.addClass(i.stickyClass), e.after(u).css({
                                position: "fixed",
                                top: s,
                                width: p
                            }), n && e.css({
                                zIndex: l
                            }), o && f < a) {
                            var v = f - a + s;
                            e.css({
                                top: v
                            })
                        }
                    } else i.stickyClass && e.removeClass(i.stickyClass), e.css({
                        position: "static",
                        top: null,
                        left: null,
                        width: "auto"
                    }), u.remove()
                }
                h.innerHeight() > r && (h.bind("scroll", f), h.bind("load", f), h.bind("resize", f))
            }))
        }
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    var n = i(82),
        o = i(8),
        r = i(13),
        a = i(204),
        s = i(83);
    n("search", 1, (function(t, e, i) {
        return [function(e) {
            var i = r(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, i) : new RegExp(e)[t](String(i))
        }, function(t) {
            var n = i(e, t, this);
            if (n.done) return n.value;
            var r = o(t),
                l = String(this),
                c = r.lastIndex;
            a(c, 0) || (r.lastIndex = 0);
            var u = s(r, l);
            return a(r.lastIndex, c) || (r.lastIndex = c), null === u ? -1 : u.index
        }]
    }))
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var e;
        i(69), i(79), i(80), i(206), i(87), i(95), i(66), i(64), i(71), i(110), i(93), i(104), i(70), i(127), i(68), i(81), i(116), i(100), i(96), i(84);

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * perfect-scrollbar v1.4.0
         * (c) 2018 Hyunje Jun
         * @license MIT
         */
        e = function() {
            function t(t) {
                return getComputedStyle(t)
            }

            function e(t, e) {
                for (var i in e) {
                    var n = e[i];
                    "number" == typeof n && (n += "px"), t.style[i] = n
                }
                return t
            }

            function i(t) {
                var e = document.createElement("div");
                return e.className = t, e
            }
            var n = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

            function o(t, e) {
                if (!n) throw new Error("No element matching method supported");
                return n.call(t, e)
            }

            function r(t) {
                t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
            }

            function a(t, e) {
                return Array.prototype.filter.call(t.children, (function(t) {
                    return o(t, e)
                }))
            }
            var s = {
                    main: "ps",
                    element: {
                        thumb: function(t) {
                            return "ps__thumb-" + t
                        },
                        rail: function(t) {
                            return "ps__rail-" + t
                        },
                        consuming: "ps__child--consume"
                    },
                    state: {
                        focus: "ps--focus",
                        clicking: "ps--clicking",
                        active: function(t) {
                            return "ps--active-" + t
                        },
                        scrolling: function(t) {
                            return "ps--scrolling-" + t
                        }
                    }
                },
                l = {
                    x: null,
                    y: null
                };

            function c(t, e) {
                var i = t.element.classList,
                    n = s.state.scrolling(e);
                i.contains(n) ? clearTimeout(l[e]) : i.add(n)
            }

            function u(t, e) {
                l[e] = setTimeout((function() {
                    return t.isAlive && t.element.classList.remove(s.state.scrolling(e))
                }), t.settings.scrollingThreshold)
            }
            var d = function(t) {
                    this.element = t, this.handlers = {}
                },
                h = {
                    isEmpty: {
                        configurable: !0
                    }
                };
            d.prototype.bind = function(t, e) {
                void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
            }, d.prototype.unbind = function(t, e) {
                var i = this;
                this.handlers[t] = this.handlers[t].filter((function(n) {
                    return !(!e || n === e) || (i.element.removeEventListener(t, n, !1), !1)
                }))
            }, d.prototype.unbindAll = function() {
                for (var t in this.handlers) this.unbind(t)
            }, h.isEmpty.get = function() {
                var t = this;
                return Object.keys(this.handlers).every((function(e) {
                    return 0 === t.handlers[e].length
                }))
            }, Object.defineProperties(d.prototype, h);
            var f = function() {
                this.eventElements = []
            };

            function p(t) {
                if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
                var e = document.createEvent("CustomEvent");
                return e.initCustomEvent(t, !1, !1, void 0), e
            }
            f.prototype.eventElement = function(t) {
                var e = this.eventElements.filter((function(e) {
                    return e.element === t
                }))[0];
                return e || (e = new d(t), this.eventElements.push(e)), e
            }, f.prototype.bind = function(t, e, i) {
                this.eventElement(t).bind(e, i)
            }, f.prototype.unbind = function(t, e, i) {
                var n = this.eventElement(t);
                n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1)
            }, f.prototype.unbindAll = function() {
                this.eventElements.forEach((function(t) {
                    return t.unbindAll()
                })), this.eventElements = []
            }, f.prototype.once = function(t, e, i) {
                var n = this.eventElement(t);
                n.bind(e, (function t(o) {
                    n.unbind(e, t), i(o)
                }))
            };
            var v = function(t, e, i, n, o) {
                var r;
                if (void 0 === n && (n = !0), void 0 === o && (o = !1), "top" === e) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== e) throw new Error("A proper axis should be provided");
                    r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                }! function(t, e, i, n, o) {
                    var r = i[0],
                        a = i[1],
                        s = i[2],
                        l = i[3],
                        d = i[4],
                        h = i[5];
                    void 0 === n && (n = !0), void 0 === o && (o = !1);
                    var f = t.element;
                    t.reach[l] = null, f[s] < 1 && (t.reach[l] = "start"), f[s] > t[r] - t[a] - 1 && (t.reach[l] = "end"), e && (f.dispatchEvent(p("ps-scroll-" + l)), e < 0 ? f.dispatchEvent(p("ps-scroll-" + d)) : e > 0 && f.dispatchEvent(p("ps-scroll-" + h)), n && function(t, e) {
                        c(t, e), u(t, e)
                    }(t, l)), t.reach[l] && (e || o) && f.dispatchEvent(p("ps-" + l + "-reach-" + t.reach[l]))
                }(t, i, r, n, o)
            };

            function g(t) {
                return parseInt(t, 10) || 0
            }
            var m = {
                    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
                },
                y = function(t) {
                    var i = t.element,
                        n = Math.floor(i.scrollTop),
                        o = i.getBoundingClientRect();
                    t.containerWidth = Math.ceil(o.width), t.containerHeight = Math.ceil(o.height), t.contentWidth = i.scrollWidth, t.contentHeight = i.scrollHeight, i.contains(t.scrollbarXRail) || (a(i, s.element.rail("x")).forEach((function(t) {
                            return r(t)
                        })), i.appendChild(t.scrollbarXRail)), i.contains(t.scrollbarYRail) || (a(i, s.element.rail("y")).forEach((function(t) {
                            return r(t)
                        })), i.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = b(t, g(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = g((t.negativeScrollAdjustment + i.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = b(t, g(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = g(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                        function(t, i) {
                            var n = {
                                    width: i.railXWidth
                                },
                                o = Math.floor(t.scrollTop);
                            i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : n.left = t.scrollLeft, i.isScrollbarXUsingBottom ? n.bottom = i.scrollbarXBottom - o : n.top = i.scrollbarXTop + o, e(i.scrollbarXRail, n);
                            var r = {
                                top: o,
                                height: i.railYHeight
                            };
                            i.isScrollbarYUsingRight ? i.isRtl ? r.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : r.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : r.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, r), e(i.scrollbarX, {
                                left: i.scrollbarXLeft,
                                width: i.scrollbarXWidth - i.railBorderXWidth
                            }), e(i.scrollbarY, {
                                top: i.scrollbarYTop,
                                height: i.scrollbarYHeight - i.railBorderYWidth
                            })
                        }(i, t), t.scrollbarXActive ? i.classList.add(s.state.active("x")) : (i.classList.remove(s.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, i.scrollLeft = 0), t.scrollbarYActive ? i.classList.add(s.state.active("y")) : (i.classList.remove(s.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, i.scrollTop = 0)
                };

            function b(t, e) {
                return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
            }

            function x(t, e) {
                var i = e[0],
                    n = e[1],
                    o = e[2],
                    r = e[3],
                    a = e[4],
                    l = e[5],
                    d = e[6],
                    h = e[7],
                    f = e[8],
                    p = t.element,
                    v = null,
                    g = null,
                    m = null;

                function b(e) {
                    p[d] = v + m * (e[o] - g), c(t, h), y(t), e.stopPropagation(), e.preventDefault()
                }

                function x() {
                    u(t, h), t[f].classList.remove(s.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", b)
                }
                t.event.bind(t[a], "mousedown", (function(e) {
                    v = p[d], g = e[o], m = (t[n] - t[i]) / (t[r] - t[l]), t.event.bind(t.ownerDocument, "mousemove", b), t.event.once(t.ownerDocument, "mouseup", x), t[f].classList.add(s.state.clicking), e.stopPropagation(), e.preventDefault()
                }))
            }
            var w = {
                    "click-rail": function(t) {
                        t.event.bind(t.scrollbarY, "mousedown", (function(t) {
                            return t.stopPropagation()
                        })), t.event.bind(t.scrollbarYRail, "mousedown", (function(e) {
                            var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                            t.element.scrollTop += i * t.containerHeight, y(t), e.stopPropagation()
                        })), t.event.bind(t.scrollbarX, "mousedown", (function(t) {
                            return t.stopPropagation()
                        })), t.event.bind(t.scrollbarXRail, "mousedown", (function(e) {
                            var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                            t.element.scrollLeft += i * t.containerWidth, y(t), e.stopPropagation()
                        }))
                    },
                    "drag-thumb": function(t) {
                        x(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), x(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                    },
                    keyboard: function(t) {
                        var e = t.element;
                        t.event.bind(t.ownerDocument, "keydown", (function(i) {
                            if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (o(e, ":hover") || o(t.scrollbarX, ":focus") || o(t.scrollbarY, ":focus"))) {
                                var n, r = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                                if (r) {
                                    if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                                    else
                                        for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
                                    if (o(n = r, "input,[contenteditable]") || o(n, "select,[contenteditable]") || o(n, "textarea,[contenteditable]") || o(n, "button,[contenteditable]")) return
                                }
                                var a = 0,
                                    s = 0;
                                switch (i.which) {
                                    case 37:
                                        a = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
                                        break;
                                    case 38:
                                        s = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
                                        break;
                                    case 39:
                                        a = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
                                        break;
                                    case 40:
                                        s = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
                                        break;
                                    case 32:
                                        s = i.shiftKey ? t.containerHeight : -t.containerHeight;
                                        break;
                                    case 33:
                                        s = t.containerHeight;
                                        break;
                                    case 34:
                                        s = -t.containerHeight;
                                        break;
                                    case 36:
                                        s = t.contentHeight;
                                        break;
                                    case 35:
                                        s = -t.contentHeight;
                                        break;
                                    default:
                                        return
                                }
                                t.settings.suppressScrollX && 0 !== a || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += a, y(t), function(i, n) {
                                    var o = Math.floor(e.scrollTop);
                                    if (0 === i) {
                                        if (!t.scrollbarYActive) return !1;
                                        if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                                    }
                                    var r = e.scrollLeft;
                                    if (0 === n) {
                                        if (!t.scrollbarXActive) return !1;
                                        if (0 === r && i < 0 || r >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                                    }
                                    return !0
                                }(a, s) && i.preventDefault())
                            }
                        }))
                    },
                    wheel: function(e) {
                        var i = e.element;

                        function n(n) {
                            var o = function(t) {
                                    var e = t.deltaX,
                                        i = -1 * t.deltaY;
                                    return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
                                }(n),
                                r = o[0],
                                a = o[1];
                            if (! function(e, n, o) {
                                    if (!m.isWebKit && i.querySelector("select:focus")) return !0;
                                    if (!i.contains(e)) return !1;
                                    for (var r = e; r && r !== i;) {
                                        if (r.classList.contains(s.element.consuming)) return !0;
                                        var a = t(r);
                                        if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                            var l = r.scrollHeight - r.clientHeight;
                                            if (l > 0 && !(0 === r.scrollTop && o > 0 || r.scrollTop === l && o < 0)) return !0;
                                            var c = r.scrollWidth - r.clientWidth;
                                            if (c > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === c && n > 0)) return !0
                                        }
                                        r = r.parentNode
                                    }
                                    return !1
                                }(n.target, r, a)) {
                                var l = !1;
                                e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? i.scrollTop -= a * e.settings.wheelSpeed : i.scrollTop += r * e.settings.wheelSpeed, l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (r ? i.scrollLeft += r * e.settings.wheelSpeed : i.scrollLeft -= a * e.settings.wheelSpeed, l = !0) : (i.scrollTop -= a * e.settings.wheelSpeed, i.scrollLeft += r * e.settings.wheelSpeed), y(e), (l = l || function(t, n) {
                                    var o = Math.floor(i.scrollTop),
                                        r = 0 === i.scrollTop,
                                        a = o + i.offsetHeight === i.scrollHeight,
                                        s = 0 === i.scrollLeft,
                                        l = i.scrollLeft + i.offsetWidth === i.scrollWidth;
                                    return !(Math.abs(n) > Math.abs(t) ? r || a : s || l) || !e.settings.wheelPropagation
                                }(r, a)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault())
                            }
                        }
                        void 0 !== window.onwheel ? e.event.bind(i, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(i, "mousewheel", n)
                    },
                    touch: function(e) {
                        if (m.supportsTouch || m.supportsIePointer) {
                            var i = e.element,
                                n = {},
                                o = 0,
                                r = {},
                                a = null;
                            m.supportsTouch ? (e.event.bind(i, "touchstart", d), e.event.bind(i, "touchmove", h), e.event.bind(i, "touchend", f)) : m.supportsIePointer && (window.PointerEvent ? (e.event.bind(i, "pointerdown", d), e.event.bind(i, "pointermove", h), e.event.bind(i, "pointerup", f)) : window.MSPointerEvent && (e.event.bind(i, "MSPointerDown", d), e.event.bind(i, "MSPointerMove", h), e.event.bind(i, "MSPointerUp", f)))
                        }

                        function l(t, n) {
                            i.scrollTop -= n, i.scrollLeft -= t, y(e)
                        }

                        function c(t) {
                            return t.targetTouches ? t.targetTouches[0] : t
                        }

                        function u(t) {
                            return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                        }

                        function d(t) {
                            if (u(t)) {
                                var e = c(t);
                                n.pageX = e.pageX, n.pageY = e.pageY, o = (new Date).getTime(), null !== a && clearInterval(a)
                            }
                        }

                        function h(a) {
                            if (u(a)) {
                                var d = c(a),
                                    h = {
                                        pageX: d.pageX,
                                        pageY: d.pageY
                                    },
                                    f = h.pageX - n.pageX,
                                    p = h.pageY - n.pageY;
                                if (function(e, n, o) {
                                        if (!i.contains(e)) return !1;
                                        for (var r = e; r && r !== i;) {
                                            if (r.classList.contains(s.element.consuming)) return !0;
                                            var a = t(r);
                                            if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                                var l = r.scrollHeight - r.clientHeight;
                                                if (l > 0 && !(0 === r.scrollTop && o > 0 || r.scrollTop === l && o < 0)) return !0;
                                                var c = r.scrollLeft - r.clientWidth;
                                                if (c > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === c && n > 0)) return !0
                                            }
                                            r = r.parentNode
                                        }
                                        return !1
                                    }(a.target, f, p)) return;
                                l(f, p), n = h;
                                var v = (new Date).getTime(),
                                    g = v - o;
                                g > 0 && (r.x = f / g, r.y = p / g, o = v),
                                    function(t, n) {
                                        var o = Math.floor(i.scrollTop),
                                            r = i.scrollLeft,
                                            a = Math.abs(t),
                                            s = Math.abs(n);
                                        if (s > a) {
                                            if (n < 0 && o === e.contentHeight - e.containerHeight || n > 0 && 0 === o) return 0 === window.scrollY && n > 0 && m.isChrome
                                        } else if (a > s && (t < 0 && r === e.contentWidth - e.containerWidth || t > 0 && 0 === r)) return !0;
                                        return !0
                                    }(f, p) && a.preventDefault()
                            }
                        }

                        function f() {
                            e.settings.swipeEasing && (clearInterval(a), a = setInterval((function() {
                                e.isInitialized ? clearInterval(a) : r.x || r.y ? Math.abs(r.x) < .01 && Math.abs(r.y) < .01 ? clearInterval(a) : (l(30 * r.x, 30 * r.y), r.x *= .8, r.y *= .8) : clearInterval(a)
                            }), 10))
                        }
                    }
                },
                k = function(n, o) {
                    var r = this;
                    if (void 0 === o && (o = {}), "string" == typeof n && (n = document.querySelector(n)), !n || !n.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                    for (var a in this.element = n, n.classList.add(s.main), this.settings = {
                            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1e3,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 1
                        }, o) r.settings[a] = o[a];
                    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                    var l, c, u = function() {
                            return n.classList.add(s.state.focus)
                        },
                        d = function() {
                            return n.classList.remove(s.state.focus)
                        };
                    this.isRtl = "rtl" === t(n).direction, this.isNegativeScroll = (c = n.scrollLeft, n.scrollLeft = -1, l = n.scrollLeft < 0, n.scrollLeft = c, l), this.negativeScrollAdjustment = this.isNegativeScroll ? n.scrollWidth - n.clientWidth : 0, this.event = new f, this.ownerDocument = n.ownerDocument || document, this.scrollbarXRail = i(s.element.rail("x")), n.appendChild(this.scrollbarXRail), this.scrollbarX = i(s.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", u), this.event.bind(this.scrollbarX, "blur", d), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                    var h = t(this.scrollbarXRail);
                    this.scrollbarXBottom = parseInt(h.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = g(h.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = g(h.borderLeftWidth) + g(h.borderRightWidth), e(this.scrollbarXRail, {
                        display: "block"
                    }), this.railXMarginWidth = g(h.marginLeft) + g(h.marginRight), e(this.scrollbarXRail, {
                        display: ""
                    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(s.element.rail("y")), n.appendChild(this.scrollbarYRail), this.scrollbarY = i(s.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", u), this.event.bind(this.scrollbarY, "blur", d), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                    var p = t(this.scrollbarYRail);
                    this.scrollbarYRight = parseInt(p.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = g(p.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(e) {
                        var i = t(e);
                        return g(i.width) + g(i.paddingLeft) + g(i.paddingRight) + g(i.borderLeftWidth) + g(i.borderRightWidth)
                    }(this.scrollbarY) : null, this.railBorderYWidth = g(p.borderTopWidth) + g(p.borderBottomWidth), e(this.scrollbarYRail, {
                        display: "block"
                    }), this.railYMarginHeight = g(p.marginTop) + g(p.marginBottom), e(this.scrollbarYRail, {
                        display: ""
                    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                        x: n.scrollLeft <= 0 ? "start" : n.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                        y: n.scrollTop <= 0 ? "start" : n.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                    }, this.isAlive = !0, this.settings.handlers.forEach((function(t) {
                        return w[t](r)
                    })), this.lastScrollTop = Math.floor(n.scrollTop), this.lastScrollLeft = n.scrollLeft, this.event.bind(this.element, "scroll", (function(t) {
                        return r.onScroll(t)
                    })), y(this)
                };
            return k.prototype.update = function() {
                this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
                    display: "block"
                }), e(this.scrollbarYRail, {
                    display: "block"
                }), this.railXMarginWidth = g(t(this.scrollbarXRail).marginLeft) + g(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = g(t(this.scrollbarYRail).marginTop) + g(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
                    display: "none"
                }), e(this.scrollbarYRail, {
                    display: "none"
                }), y(this), v(this, "top", 0, !1, !0), v(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
                    display: ""
                }), e(this.scrollbarYRail, {
                    display: ""
                }))
            }, k.prototype.onScroll = function(t) {
                this.isAlive && (y(this), v(this, "top", this.element.scrollTop - this.lastScrollTop), v(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
            }, k.prototype.destroy = function() {
                this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
            }, k.prototype.removePsClasses = function() {
                this.element.className = this.element.className.split(" ").filter((function(t) {
                    return !t.match(/^ps([-_].+|)$/)
                })).join(" ")
            }, k
        }, "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) && void 0 !== t ? t.exports = e() : "function" == typeof define && i(76) ? define(e) : window.PerfectScrollbar = e()
    }).call(this, i(99)(t))
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(24).every;
    n({
        target: "Array",
        proto: !0,
        forced: i(51)("every")
    }, {
        every: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i(93), i(112);
        ! function(t) {
            t(["jquery"], (function(t) {
                return function() {
                    var e, i, n, o = 0,
                        r = {
                            error: "error",
                            info: "info",
                            success: "success",
                            warning: "warning"
                        },
                        a = {
                            clear: function(i, n) {
                                var o = d();
                                e || s(o);
                                l(i, o, n) || function(i) {
                                    for (var n = e.children(), o = n.length - 1; o >= 0; o--) l(t(n[o]), i)
                                }(o)
                            },
                            remove: function(i) {
                                var n = d();
                                e || s(n);
                                if (i && 0 === t(":focus", i).length) return void h(i);
                                e.children().length && e.remove()
                            },
                            error: function(t, e, i) {
                                return u({
                                    type: r.error,
                                    iconClass: d().iconClasses.error,
                                    message: t,
                                    optionsOverride: i,
                                    title: e
                                })
                            },
                            getContainer: s,
                            info: function(t, e, i) {
                                return u({
                                    type: r.info,
                                    iconClass: d().iconClasses.info,
                                    message: t,
                                    optionsOverride: i,
                                    title: e
                                })
                            },
                            options: {},
                            subscribe: function(t) {
                                i = t
                            },
                            success: function(t, e, i) {
                                return u({
                                    type: r.success,
                                    iconClass: d().iconClasses.success,
                                    message: t,
                                    optionsOverride: i,
                                    title: e
                                })
                            },
                            version: "2.1.1",
                            warning: function(t, e, i) {
                                return u({
                                    type: r.warning,
                                    iconClass: d().iconClasses.warning,
                                    message: t,
                                    optionsOverride: i,
                                    title: e
                                })
                            }
                        };
                    return a;

                    function s(i, n) {
                        return i || (i = d()), (e = t("#" + i.containerId)).length ? e : (n && (e = function(i) {
                            return (e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(t(i.target)), e
                        }(i)), e)
                    }

                    function l(e, i, n) {
                        var o = !(!n || !n.force) && n.force;
                        return !(!e || !o && 0 !== t(":focus", e).length) && (e[i.hideMethod]({
                            duration: i.hideDuration,
                            easing: i.hideEasing,
                            complete: function() {
                                h(e)
                            }
                        }), !0)
                    }

                    function c(t) {
                        i && i(t)
                    }

                    function u(i) {
                        var r = d(),
                            a = i.iconClass || r.iconClass;
                        if (void 0 !== i.optionsOverride && (r = t.extend(r, i.optionsOverride), a = i.optionsOverride.iconClass || a), ! function(t, e) {
                                if (t.preventDuplicates) {
                                    if (e.message === n) return !0;
                                    n = e.message
                                }
                                return !1
                            }(r, i)) {
                            o++, e = s(r, !0);
                            var l = null,
                                u = t("<div/>"),
                                f = t("<div/>"),
                                p = t("<div/>"),
                                v = t("<div/>"),
                                g = t(r.closeHtml),
                                m = {
                                    intervalId: null,
                                    hideEta: null,
                                    maxHideTime: null
                                },
                                y = {
                                    toastId: o,
                                    state: "visible",
                                    startTime: new Date,
                                    options: r,
                                    map: i
                                };
                            return i.iconClass && u.addClass(r.toastClass).addClass(a), i.title && (f.append(i.title).addClass(r.titleClass), u.append(f)), i.message && (p.append(i.message).addClass(r.messageClass), u.append(p)), r.closeButton && (g.addClass("md-toast-close-button").attr("role", "button"), u.prepend(g)), r.progressBar && (v.addClass("md-toast-progress"), u.prepend(v)), r.newestOnTop ? e.prepend(u) : e.append(u), u.hide(), u[r.showMethod]({
                                    duration: r.showDuration,
                                    easing: r.showEasing,
                                    complete: r.onShown
                                }), r.timeOut > 0 && (l = setTimeout(b, r.timeOut), m.maxHideTime = parseFloat(r.timeOut), m.hideEta = (new Date).getTime() + m.maxHideTime, r.progressBar && (m.intervalId = setInterval(k, 10))),
                                function() {
                                    u.hover(w, x), !r.onclick && r.tapToDismiss && u.click(b);
                                    r.closeButton && g && g.click((function(t) {
                                        t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0), b(!0)
                                    }));
                                    r.onclick && u.click((function() {
                                        r.onclick(), b()
                                    }))
                                }(), c(y), r.debug && console && console.log(y), u
                        }

                        function b(e) {
                            if (!t(":focus", u).length || e) return clearTimeout(m.intervalId), u[r.hideMethod]({
                                duration: r.hideDuration,
                                easing: r.hideEasing,
                                complete: function() {
                                    h(u), r.onHidden && "hidden" !== y.state && r.onHidden(), y.state = "hidden", y.endTime = new Date, c(y)
                                }
                            })
                        }

                        function x() {
                            (r.timeOut > 0 || r.extendedTimeOut > 0) && (l = setTimeout(b, r.extendedTimeOut), m.maxHideTime = parseFloat(r.extendedTimeOut), m.hideEta = (new Date).getTime() + m.maxHideTime)
                        }

                        function w() {
                            clearTimeout(l), m.hideEta = 0, u.stop(!0, !0)[r.showMethod]({
                                duration: r.showDuration,
                                easing: r.showEasing
                            })
                        }

                        function k() {
                            var t = (m.hideEta - (new Date).getTime()) / m.maxHideTime * 100;
                            v.width(t + "%")
                        }
                    }

                    function d() {
                        return t.extend({}, {
                            tapToDismiss: !0,
                            toastClass: "md-toast",
                            containerId: "toast-container",
                            debug: !1,
                            showMethod: "fadeIn",
                            showDuration: 300,
                            showEasing: "swing",
                            onShown: void 0,
                            hideMethod: "fadeOut",
                            hideDuration: 1e3,
                            hideEasing: "swing",
                            onHidden: void 0,
                            extendedTimeOut: 1e3,
                            iconClasses: {
                                error: "md-toast-error",
                                info: "md-toast-info",
                                success: "md-toast-success",
                                warning: "md-toast-warning"
                            },
                            iconClass: "md-toast-info",
                            positionClass: "md-toast-top-right",
                            timeOut: 5e3,
                            titleClass: "md-toast-title",
                            messageClass: "md-toast-message",
                            target: "body",
                            closeHtml: '<button type="button">&times;</button>',
                            newestOnTop: !0,
                            preventDuplicates: !1,
                            progressBar: !1
                        }, a.options)
                    }

                    function h(t) {
                        e || (e = s()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && (e.remove(), n = void 0))
                    }
                }()
            }))
        }("function" == typeof define && i(76) ? define : function(e, n) {
            t.exports ? t.exports = n(i(118)) : window.toastr = n(window.jQuery)
        })
    }).call(this, i(99)(t))
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(43), i(95), i(119), i(102), i(209), i(134), i(110), i(210), i(120), i(96);

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    jQuery((function(t) {
        t(document).on("click", ".chip .close", (function() {
            var e = t(this);
            e.closest(".chips").data("initialized") || e.closest(".chip").remove()
        }));
        var e = function() {
            function e(i) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.$chipsWrapper = i, this.options = "string" == typeof n ? n : {
                    data: this.fallback().or(n.data).or([]).value(),
                    dataChip: this.fallback().or(n.dataChip).or([]).value(),
                    placeholder: this.fallback().or(i.attr("data-placeholder")).or(n.placeholder).or("").value(),
                    secondaryPlaceholder: this.fallback().or(i.attr("data-secondary-placeholder")).or(n.secondaryPlaceholder).or("").value(),
                    sortAutocompleteData: this.fallback().or(i.attr("data-sort-autocomplete-data")).or(n.sortAutocompleteData).or(!0).value(),
                    autocompleteDataCompareFn: this.fallback().or(n.autocompleteDataCompareFn).or(void 0).value()
                }, this.$autocompleteList = t('<ul class="chip-ul z-depth-1" tabindex="0"></ul>'), this.keyCodes = {
                    backspace: 8,
                    enter: 13,
                    arrowLeft: 37,
                    arrowRight: 39,
                    delete: 46,
                    comma: 188
                }
            }
            var i, o, r;
            return i = e, (o = [{
                key: "getSelectedChip",
                value: function() {
                    return this.$chipsWrapper.find(".chip.selected")
                }
            }, {
                key: "returnPublicInterface",
                value: function() {
                    return "data" === this.options ? this.$chipsWrapper.data("chips") : "options" === this.options ? this.$chipsWrapper.data("options") : null
                }
            }, {
                key: "init",
                value: function() {
                    this.isPublicInterfaceCall || (this.assignOptions(), this.isInitialized || (this.$chipsWrapper.data({
                        chips: this.options.data.slice(),
                        index: this.$chipsWrapper.index(),
                        initialized: !0
                    }), this.$chipsWrapper.attr("tabindex", 0), this.$chipsWrapper.hasClass(".chips") || this.$chipsWrapper.addClass("chips"), this.renderChips(), this.bindEvents()))
                }
            }, {
                key: "assignOptions",
                value: function() {
                    Array.isArray(this.options.data) || (this.options.data = []), this.$chipsWrapper.data("options", Object.assign({}, this.options))
                }
            }, {
                key: "bindEvents",
                value: function() {
                    this.bindChipsWrapperClick(), this.bindChipsWrapperBlur(), this.bindSingleChipClick(), this.bindChipsWrapperKeydown(), this.bindChipsInputClick(), this.bindChipsInputFocusout(), this.bindChipsInputKeydown(), this.bindDeleteButtonClick(), this.bindAutocompleteInputKeyup(), this.bindAutocompleteOptionClick()
                }
            }, {
                key: "bindChipsWrapperClick",
                value: function() {
                    this.$chipsWrapper.on("click", (function(e) {
                        return t(e.target).find("input").focus().addClass("active")
                    }))
                }
            }, {
                key: "bindChipsWrapperBlur",
                value: function() {
                    var e = this;
                    this.$chipsWrapper.on("blur", (function(i) {
                        setTimeout((function() {
                            return e.$autocompleteList.removeClass("active").hide()
                        }), 100), t(i.target).removeClass("active"), e.getSelectedChip().removeClass("selected")
                    }))
                }
            }, {
                key: "bindSingleChipClick",
                value: function() {
                    var e = this;
                    this.$chipsWrapper.on("click", ".chip", (function(i) {
                        var n = t(i.target);
                        e.$chipsWrapper.find(".chip.selected").not(n).removeClass("selected"), n.toggleClass("selected")
                    }))
                }
            }, {
                key: "bindChipsWrapperKeydown",
                value: function() {
                    var t = this;
                    this.$chipsWrapper.on("keydown", (function(e) {
                        var i = e.which === t.keyCodes.backspace,
                            n = e.which === t.keyCodes.delete,
                            o = e.which === t.keyCodes.arrowLeft,
                            r = e.which === t.keyCodes.arrowRight;
                        if ((i || n) && t.getSelectedChip().length) {
                            e.preventDefault();
                            var a = t.deleteSelectedChip();
                            t.selectChip(a)
                        } else o ? t.selectLeftChip() : r && t.selectRightChip()
                    }))
                }
            }, {
                key: "bindChipsInputClick",
                value: function() {
                    var e = this;
                    this.$chipsWrapper.find("input").on("click", (function(i) {
                        t(i.target).addClass("active"), e.$chipsWrapper.addClass("focus"), e.$chipsWrapper.find(".chip").removeClass("selected")
                    }))
                }
            }, {
                key: "bindChipsInputFocusout",
                value: function() {
                    var t = this;
                    this.$chipsWrapper.on("focusout", "input", (function() {
                        return t.$chipsWrapper.removeClass("focus")
                    }))
                }
            }, {
                key: "bindChipsInputKeydown",
                value: function() {
                    var e = this;
                    this.$chipsWrapper.on("keydown", "input", (function(i) {
                        var n = t(i.target),
                            o = i.which === e.keyCodes.enter,
                            r = i.which === e.keyCodes.comma,
                            a = i.which === e.keyCodes.backspace;
                        if ((o || r) && !e.$autocompleteList.find("li").hasClass("selected")) return i.preventDefault(), e.addChip({
                            tag: n.val()
                        }), void n.val("");
                        if ("" === n.val() && a && !e.$chipsWrapper.find(".chip").hasClass("selected")) {
                            var s = e.$chipsWrapper.find(".chip-position-wrapper .chip").last().index();
                            e.deleteChip(s)
                        }
                    }))
                }
            }, {
                key: "bindDeleteButtonClick",
                value: function() {
                    var e = this;
                    this.$chipsWrapper.on("click", ".chip i.close", (function(i) {
                        var n = t(i.target).closest(".chip").index();
                        e.deleteChip(n), e.$chipsWrapper.find("input").focus()
                    }))
                }
            }, {
                key: "bindAutocompleteInputKeyup",
                value: function() {
                    var e = this,
                        i = this.$chipsWrapper.find(".chip-position-wrapper").find("input");
                    i.on("keyup", (function(n) {
                        var o = i.val();
                        e.$autocompleteList.empty(), o.length ? (e.options.dataChip.forEach((function(i) {
                            i.toLowerCase().includes(o.toLowerCase()) && e.$chipsWrapper.find(".chip-position-wrapper").append(e.$autocompleteList.append(t("<li>".concat(i, "</li>"))))
                        })), e.$autocompleteList.addClass("active").show()) : e.$autocompleteList.removeClass("active").hide();
                        var r = n.which === e.keyCodes.enter,
                            a = n.which === e.keyCodes.comma,
                            s = e.$chipsWrapper.find(".chip-position-wrapper .chip").last().text();
                        !r && !a || e.options.dataChip.includes(s) ? (r || a) && e.$autocompleteList.remove() : (e.options.dataChip.push(s), e.options.sortAutocompleteData && e.options.dataChip.sort(e.options.autocompleteDataCompareFn))
                    }))
                }
            }, {
                key: "bindAutocompleteOptionClick",
                value: function() {
                    var e = this;
                    this.$chipsWrapper.on("click", "li", (function(i) {
                        i.preventDefault();
                        var n = t(i.target);
                        e.addChip({
                            tag: n.text()
                        }), e.$chipsWrapper.find(".chip-position-wrapper").find("input").val(""), e.$autocompleteList.remove()
                    }))
                }
            }, {
                key: "deleteSelectedChip",
                value: function() {
                    var t = this.getSelectedChip(),
                        e = t.siblings(".chip").length,
                        i = t.index();
                    this.deleteChip(i);
                    var n = -1;
                    return i < e - 1 ? n = i : i !== e && i !== e - 1 || (n = e - 1), e || this.$chipsWrapper.find("input").focus(), n
                }
            }, {
                key: "selectLeftChip",
                value: function() {
                    this.selectLeftRightChip(!0)
                }
            }, {
                key: "selectRightChip",
                value: function() {
                    this.selectLeftRightChip(!1)
                }
            }, {
                key: "selectLeftRightChip",
                value: function(t) {
                    var e = this.getSelectedChip(),
                        i = e.index(),
                        n = e.siblings(".chip").length,
                        o = t ? i - 1 : i + 1;
                    if (t && o < 0) o = this.$chipsWrapper.find(".chip").length - 1;
                    else if (!t && o > n) return void this.$chipsWrapper.find("input").focus();
                    this.$chipsWrapper.find(".chip").removeClass("selected"), this.selectChip(o)
                }
            }, {
                key: "renderChips",
                value: function() {
                    var t = this,
                        e = "";
                    this.$chipsWrapper.data("chips").forEach((function(i) {
                        e += t.getSingleChipTemplate(i)
                    })), this.$chipsWrapper.hasClass("chips-autocomplete") ? e += '<span class="chip-position-wrapper position-relative"><input class="input" placeholder=""></span>' : e += '<input class="input" placeholder="">', this.$chipsWrapper.html(e), this.setPlaceholder()
                }
            }, {
                key: "getSingleChipTemplate",
                value: function(t) {
                    if (!t.tag) return "";
                    var e = '<div class="chip">'.concat(t.tag);
                    return t.image && (e += ' <img src="'.concat(t.image, '" /> ')), e += '<i class="close fas fa-times"></i>', e += "</div>"
                }
            }, {
                key: "setPlaceholder",
                value: function() {
                    this.$chipsWrapper.find("input").prop("placeholder", this.options.data.length ? this.options.placeholder : this.options.secondaryPlaceholder)
                }
            }, {
                key: "addChip",
                value: function(e) {
                    if (this.isValid(e)) {
                        var i = t(this.getSingleChipTemplate(e));
                        this.$chipsWrapper.data("chips").push(e), this.options.data.push(e), this.$chipsWrapper.hasClass("chips-autocomplete") && this.$chipsWrapper.find(".chip").length > 0 ? i.insertAfter(this.$chipsWrapper.find(".chip").last()) : i.insertBefore(this.$chipsWrapper.find("input")), this.$chipsWrapper.trigger("chip.add", e), this.setPlaceholder()
                    }
                }
            }, {
                key: "isValid",
                value: function(t) {
                    return "" !== t.tag && !this.options.data.some((function(e) {
                        return e.tag === t.tag
                    }))
                }
            }, {
                key: "deleteChip",
                value: function(t) {
                    var e = this.$chipsWrapper.data("chips")[t];
                    this.$chipsWrapper.find(".chip").eq(t).remove(), this.$chipsWrapper.data("chips").splice(t, 1), this.options.data.splice(t, 1), this.$chipsWrapper.trigger("chip.delete", e), this.setPlaceholder()
                }
            }, {
                key: "selectChip",
                value: function(t) {
                    var e = this.$chipsWrapper.find(".chip").eq(t);
                    e && !e.hasClass("selected") && (e.addClass("selected"), this.$chipsWrapper.trigger("chip.select", this.$chipsWrapper.data("chips")[t]))
                }
            }, {
                key: "fallback",
                value: function() {
                    return {
                        _value: void 0,
                        or: function(t) {
                            return void 0 !== t && void 0 === this._value && (this._value = t), this
                        },
                        value: function() {
                            return this._value
                        }
                    }
                }
            }, {
                key: "isPublicInterfaceCall",
                get: function() {
                    return "string" == typeof this.options
                }
            }, {
                key: "isInitialized",
                get: function() {
                    return this.$chipsWrapper.data("initialized")
                }
            }]) && n(i.prototype, o), r && n(i, r), e
        }();
        t.fn.materialChip = function(i) {
            if (this.length > 1) {
                var n = [];
                return this.each((function() {
                    var o = new e(t(this), i);
                    o.init(), n.push(o.returnPublicInterface())
                })), n
            }
            var o = new e(t(this), i);
            return o.init(), o.returnPublicInterface()
        }
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(24).some;
    n({
        target: "Array",
        proto: !0,
        forced: i(51)("some")
    }, {
        some: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    var n = i(5),
        o = i(211);
    n({
        target: "Object",
        stat: !0,
        forced: Object.assign !== o
    }, {
        assign: o
    })
}, function(t, e, i) {
    "use strict";
    var n = i(7),
        o = i(1),
        r = i(41),
        a = i(44),
        s = i(42),
        l = i(16),
        c = i(26),
        u = Object.assign;
    t.exports = !u || o((function() {
        var t = {},
            e = {},
            i = Symbol();
        return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
            e[t] = t
        })), 7 != u({}, t)[i] || "abcdefghijklmnopqrst" != r(u({}, e)).join("")
    })) ? function(t, e) {
        for (var i = l(t), o = arguments.length, u = 1, d = a.f, h = s.f; o > u;)
            for (var f, p = c(arguments[u++]), v = d ? r(p).concat(d(p)) : r(p), g = v.length, m = 0; g > m;) f = v[m++], n && !h.call(p, f) || (i[f] = p[f]);
        return i
    } : u
}, function(t, e) {
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }! function(t) {
        var e = 0,
            n = function() {
                function n(i, o) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.defaults = {
                        topSpacing: e,
                        zIndex: !1,
                        stopper: "#footer",
                        stickyClass: !1,
                        startScrolling: "top",
                        minWidth: !1
                    }, this.$element = i, this.options = this.assignOptions(o), this.$window = t(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.$placeholder = t('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
                }
                var o, r, a;
                return o = n, (r = [{
                    key: "assignOptions",
                    value: function(e) {
                        return t.extend({}, this.defaults, e)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
                    }
                }, {
                    key: "hasZIndex",
                    value: function() {
                        return "number" == typeof this.options.zIndex
                    }
                }, {
                    key: "hasStopper",
                    value: function() {
                        return t(this.options.stopper).length || "number" == typeof this.options.stopper
                    }
                }, {
                    key: "isScreenHeightEnough",
                    value: function() {
                        return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
                    }
                }, {
                    key: "setStopperPosition",
                    value: function() {
                        "string" == typeof this.options.stopper ? this.stopPoint = t(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
                    }
                }, {
                    key: "setPushPoint",
                    value: function() {
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.$element.offset().top - this.options.topSpacing : this.$pushPoint = this.$element.offset().top + this.$element.outerHeight(!0) - this.$window.height()
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
                    }
                }, {
                    key: "appendPlaceholder",
                    value: function() {
                        this.$element.after(this.$placeholder), this.$placeholder.css({
                            width: this.elementWidth,
                            height: this.elementHeight
                        })
                    }
                }, {
                    key: "stickyStart",
                    value: function() {
                        this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
                        var t = this.$element.get(0).scrollHeight;
                        this.$element.get(0).style.overflow = "", this.$element.css({
                            position: "fixed",
                            width: this.elementWidth,
                            height: t
                        }), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({
                            top: this.options.topSpacing
                        }) : this.$element.css({
                            bottom: 0,
                            top: ""
                        }), this.hasZIndex() && this.$element.css({
                            zIndex: this.options.zIndex
                        })
                    }
                }, {
                    key: "stickyEnd",
                    value: function() {
                        this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
                            position: "static",
                            top: e
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.stopPoint < t(this.$element).offset().top + this.$element.outerHeight(!0) && this.$element.css({
                            position: "absolute",
                            bottom: 0,
                            top: ""
                        })
                    }
                }]) && i(o.prototype, r), a && i(o, a), n
            }();
        t.fn.sticky = function(e) {
            return this.each((function() {
                var i = t(this);
                t(window).on("load", (function() {
                    new n(i, e).init()
                }))
            }))
        }
    }(jQuery)
}, , , , function(t, e, i) {
    i(78)("toStringTag")
}, function(t, e, i) {
    var n = i(0);
    i(62)(n.JSON, "JSON", !0)
}, function(t, e, i) {
    i(62)(Math, "Math", !0)
}, function(t, e, i) {
    "use strict";
    i.r(e),
        function(t) {
            var e;
            i(69), i(79), i(80), i(43), i(66), i(64), i(71), i(106), i(93), i(123), i(70), i(113), i(81), i(84);

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            /*!
             * pickadate.js v3.6.3, 2019/04/03
             * By Amsul, http://amsul.ca
             * Hosted on http://amsul.github.io/pickadate.js
             * Licensed under MIT
             */
            e = function(t) {
                var e = t(window),
                    i = t(document),
                    n = t(document.documentElement),
                    o = null != document.documentElement.style.transition;

                function r(e, n, c, d) {
                    if (!e) return r;
                    var h = !1,
                        f = {
                            id: e.id || "P" + Math.abs(~~(Math.random() * new Date)),
                            handlingOpen: !1
                        },
                        p = c ? t.extend(!0, {}, c.defaults, d) : d || {},
                        v = t.extend({}, r.klasses(), p.klass),
                        g = t(e),
                        m = 2,
                        y = function() {
                            return this.start()
                        },
                        b = y.prototype = {
                            constructor: y,
                            $node: g,
                            start: function() {
                                return f && f.start ? b : (f.methods = {}, f.start = !0, f.open = !1, f.type = e.type, e.autofocus = e == u(), e.readOnly = !p.editable, e.id = e.id || f.id, "text" != e.type && (e.type = "text"), b.component = new c(b, p), b.$root = t('<div class="' + v.picker + '" id="' + e.id + '_root" />'), l(b.$root[0], "hidden", !0), b.$holder = t(x()).appendTo(b.$root), w(), p.formatSubmit && (!0 === p.hiddenName ? (m = e.name, e.name = "") : m = (m = ["string" == typeof p.hiddenPrefix ? p.hiddenPrefix : "", "string" == typeof p.hiddenSuffix ? p.hiddenSuffix : "_submit"])[0] + e.name + m[1], b._hidden = t('<input type=hidden name="' + m + '"' + (g.data("value") || e.value ? ' value="' + b.get("select", p.formatSubmit) + '"' : "") + ">")[0], g.on("change." + f.id, (function() {
                                    b._hidden.value = e.value ? b.get("select", p.formatSubmit) : ""
                                }))), g.data(n, b).addClass(v.input).val(g.data("value") ? b.get("select", p.format) : e.value).on("focus." + f.id + " click." + f.id, (r = function(t) {
                                    t.preventDefault(), b.open()
                                }, a = 100, function() {
                                    var t = this,
                                        e = arguments,
                                        i = function() {
                                            d = null, s || r.apply(t, e)
                                        },
                                        n = s && !d;
                                    clearTimeout(d), d = setTimeout(i, a), n && r.apply(t, e)
                                })).on("mousedown", (function() {
                                    f.handlingOpen = !0, t(document).on("mouseup", (function e() {
                                        setTimeout((function() {
                                            t(document).off("mouseup", e), f.handlingOpen = !1
                                        }), 0)
                                    }))
                                })), p.editable || g.on("keydown." + f.id, S), l(e, {
                                    haspopup: !0,
                                    expanded: !1,
                                    readonly: !1,
                                    owns: e.id + "_root"
                                }), p.containerHidden ? t(p.containerHidden).append(b._hidden) : g.after(b._hidden), p.container ? t(p.container).append(b.$root) : g.after(b.$root), b.on({
                                    start: b.component.onStart,
                                    render: b.component.onRender,
                                    stop: b.component.onStop,
                                    open: b.component.onOpen,
                                    close: b.component.onClose,
                                    set: b.component.onSet
                                }).on({
                                    start: p.onStart,
                                    render: p.onRender,
                                    stop: p.onStop,
                                    open: p.onOpen,
                                    close: p.onClose,
                                    set: p.onSet
                                }), (i = b.$holder[0]).currentStyle ? o = i.currentStyle.position : window.getComputedStyle && (o = getComputedStyle(i).position), h = "fixed" == o, e.autofocus && b.open(), b.trigger("start").trigger("render"));
                                var i, o, r, a, s, d, m
                            },
                            render: function(e) {
                                return e ? (b.$holder = t(x()), w(), b.$root.html(b.$holder)) : b.$root.find("." + v.box).html(b.component.nodes(f.open)), b.trigger("render")
                            },
                            stop: function() {
                                return f.start ? (b.close(), b._hidden && b._hidden.parentNode.removeChild(b._hidden), b.$root.remove(), g.removeClass(v.input).removeData(n), setTimeout((function() {
                                    g.off("." + f.id)
                                }), 0), e.type = f.type, e.readOnly = !1, b.trigger("stop"), f.methods = {}, f.start = !1, b) : b
                            },
                            open: function(n) {
                                return m++, f.open ? b : m < 4 && p.editable ? b : (setTimeout((function() {
                                    b.$root.addClass(v.opened), l(b.$root[0], "hidden", !1)
                                }), 0), !1 !== n && (f.open = !0, h && t("body").css("overflow", "hidden").css("padding-right", "+=" + a()), h && o ? b.$holder.find("." + v.frame).one("transitionend", (function() {
                                    b.$holder.eq(0).focus()
                                })) : setTimeout((function() {
                                    b.$holder.eq(0).focus()
                                }), 0), i.on("click." + f.id + " focusin." + f.id, (function(t) {
                                    if (!f.handlingOpen) {
                                        var i = s(t, e);
                                        t.isSimulated || i == e || i == document || 3 == t.which || b.close(i === b.$holder[0])
                                    }
                                })).on("keydown." + f.id, (function(i) {
                                    var n = i.keyCode,
                                        o = b.component.key[n],
                                        a = s(i, e);
                                    27 == n ? b.close(!0) : a != b.$holder[0] || !o && 13 != n ? t.contains(b.$root[0], a) && 13 == n && (i.preventDefault(), a.click()) : (i.preventDefault(), o ? r._.trigger(b.component.key.go, b, [r._.trigger(o)]) : b.$root.find("." + v.highlighted).hasClass(v.disabled) || (b.set("select", b.component.item.highlight), p.closeOnSelect && b.close(!0)))
                                }))), b.trigger("open"))
                            },
                            close: function(n) {
                                return m = 0, f.open ? (n && (p.editable ? e.click() : (b.$holder.off("focus.toOpen").focus(), setTimeout((function() {
                                    b.$holder.on("focus.toOpen", k)
                                }), 0))), g.removeClass(v.active), l(e, "expanded", !1), setTimeout((function() {
                                    b.$root.removeClass(v.opened + " " + v.focused), l(b.$root[0], "hidden", !0)
                                }), 0), h && t("body").css("overflow", "").css("padding-right", "-=" + a()), document.activeElement.blur(), i.off("." + f.id), f.open = !1, b.trigger("close")) : b
                            },
                            clear: function(t) {
                                return document.activeElement.blur(), b.set("clear", null, t)
                            },
                            set: function(e, i, n) {
                                var o, r, a = t.isPlainObject(e),
                                    s = a ? e : {};
                                if (n = a && t.isPlainObject(i) ? i : n || {}, e) {
                                    for (o in a || (s[e] = i), s) r = s[o], o in b.component.item && (void 0 === r && (r = null), b.component.set(o, r, n)), "select" != o && "clear" != o || !p.updateInput || g.val("clear" == o ? "" : b.get(o, p.format)).trigger("change");
                                    b.render()
                                }
                                return n.muted ? b : b.trigger("set", s)
                            },
                            get: function(t, i) {
                                if (null != f[t = t || "value"]) return f[t];
                                if ("valueSubmit" == t) {
                                    if (b._hidden) return b._hidden.value;
                                    t = "value"
                                }
                                if ("value" == t) return e.value;
                                if (t in b.component.item) {
                                    if ("string" == typeof i) {
                                        var n = b.component.get(t);
                                        return n ? r._.trigger(b.component.formats.toString, b.component, [i, n]) : ""
                                    }
                                    return b.component.get(t)
                                }
                            },
                            on: function(e, i, n) {
                                var o, r, a = t.isPlainObject(e),
                                    s = a ? e : {};
                                if (e)
                                    for (o in a || (s[e] = i), s) r = s[o], n && (o = "_" + o), f.methods[o] = f.methods[o] || [], f.methods[o].push(r);
                                return b
                            },
                            off: function() {
                                var t, e, i = arguments;
                                for (t = 0, namesCount = i.length; t < namesCount; t += 1)(e = i[t]) in f.methods && delete f.methods[e];
                                return b
                            },
                            trigger: function(t, e) {
                                var i = function(t) {
                                    var i = f.methods[t];
                                    i && i.map((function(t) {
                                        r._.trigger(t, b, [e])
                                    }))
                                };
                                return i("_" + t), i(t), b
                            }
                        };

                    function x() {
                        return r._.node("div", r._.node("div", r._.node("div", r._.node("div", b.component.nodes(f.open), v.box), v.wrap), v.frame), v.holder, 'tabindex="-1"')
                    }

                    function w() {
                        b.$holder.on({
                            keydown: S,
                            "focus.toOpen": k,
                            blur: function() {
                                g.removeClass(v.target)
                            },
                            focusin: function(t) {
                                b.$root.removeClass(v.focused), t.stopPropagation()
                            },
                            "mousedown click": function(i) {
                                var n = s(i, e);
                                n != b.$holder[0] && (i.stopPropagation(), "mousedown" != i.type || t(n).is("input, select, textarea, button, option") || (i.preventDefault(), b.$holder.eq(0).focus()))
                            }
                        }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", (function() {
                            var e = t(this),
                                i = e.data(),
                                n = e.hasClass(v.navDisabled) || e.hasClass(v.disabled),
                                o = u();
                            o = o && (o.type || o.href ? o : null), (n || o && !t.contains(b.$root[0], o)) && b.$holder.eq(0).focus(), !n && i.nav ? b.set("highlight", b.component.item.highlight, {
                                nav: i.nav
                            }) : !n && "pick" in i ? (b.set("select", i.pick), p.closeOnSelect && b.close(!0)) : i.clear ? (b.clear(), p.closeOnClear && b.close(!0)) : i.close && b.close(!0)
                        }))
                    }

                    function k(t) {
                        t.stopPropagation(), g.addClass(v.target), b.$root.addClass(v.focused), b.open()
                    }

                    function S(t) {
                        var e = t.keyCode,
                            i = /^(8|46)$/.test(e);
                        if (27 == e) return b.close(!0), !1;
                        (32 == e || i || !f.open && b.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? b.clear().close() : b.open())
                    }
                    return new y
                }

                function a() {
                    if (n.height() <= e.height()) return 0;
                    var i = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                        o = i[0].offsetWidth;
                    i.css("overflow", "scroll");
                    var r = t('<div style="width:100%" />').appendTo(i)[0].offsetWidth;
                    return i.remove(), o - r
                }

                function s(t, e) {
                    var i = [];
                    return t.path && (i = t.path), t.originalEvent && t.originalEvent.path && (i = t.originalEvent.path), i && i.length > 0 ? e && i.indexOf(e) >= 0 ? e : i[0] : t.target
                }

                function l(e, i, n) {
                    if (t.isPlainObject(i))
                        for (var o in i) c(e, o, i[o]);
                    else c(e, i, n)
                }

                function c(t, e, i) {
                    t.setAttribute(("role" == e ? "" : "aria-") + e, i)
                }

                function u() {
                    try {
                        return document.activeElement
                    } catch (t) {}
                }
                return r.klasses = function(t) {
                    return {
                        picker: t = t || "picker",
                        opened: t + "--opened",
                        focused: t + "--focused",
                        input: t + "__input",
                        active: t + "__input--active",
                        target: t + "__input--target",
                        holder: t + "__holder",
                        frame: t + "__frame",
                        wrap: t + "__wrap",
                        box: t + "__box"
                    }
                }, r._ = {
                    group: function(t) {
                        for (var e, i = "", n = r._.trigger(t.min, t); n <= r._.trigger(t.max, t, [n]); n += t.i) e = r._.trigger(t.item, t, [n]), i += r._.node(t.node, e[0], e[1], e[2]);
                        return i
                    },
                    node: function(e, i, n, o) {
                        return i ? "<" + e + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + (i = t.isArray(i) ? i.join("") : i) + "</" + e + ">" : ""
                    },
                    lead: function(t) {
                        return (t < 10 ? "0" : "") + t
                    },
                    trigger: function(t, e, i) {
                        return "function" == typeof t ? t.apply(e, i || []) : t
                    },
                    digits: function(t) {
                        return /\d/.test(t[1]) ? 2 : 1
                    },
                    isDate: function(t) {
                        return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
                    },
                    isInteger: function(t) {
                        return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0
                    },
                    ariaAttr: function(e, i) {
                        for (var n in t.isPlainObject(e) || (e = {
                                attribute: i
                            }), i = "", e) {
                            var o = ("role" == n ? "" : "aria-") + n,
                                r = e[n];
                            i += null == r ? "" : o + '="' + e[n] + '"'
                        }
                        return i
                    }
                }, r.extend = function(e, i) {
                    t.fn[e] = function(n, o) {
                        var a = this.data(e);
                        return "picker" == n ? a : a && "string" == typeof n ? r._.trigger(a[n], a, [o]) : this.each((function() {
                            t(this).data(e) || new r(this, e, i, n)
                        }))
                    }, t.fn[e].defaults = i.defaults
                }, r
            }, "function" == typeof define && i(76) ? define("picker", ["jquery"], e) : "object" == ("undefined" == typeof exports ? "undefined" : n(exports)) ? t.exports = e(i(118)) : window.Picker = e(jQuery)
        }.call(this, i(99)(t))
}, function(t, e, i) {
    i(221), t.exports = i(284)
}, function(t, e, i) {}, function(t, e, i) {
    "use strict";
    (function(t) {
        var e, n;
        i(69), i(79), i(80), i(87), i(66), i(64), i(71), i(106), i(102), i(123), i(70), i(68), i(81), i(100), i(84);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
         * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
         * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
         */
        e = void 0, n = function() {
            var t = {
                    CUSTOMFILE: '.custom-file input[type="file"]',
                    CUSTOMFILELABEL: ".custom-file-label",
                    FORM: "form",
                    INPUT: "input"
                },
                e = function(e) {
                    var i = "",
                        n = e.parentNode.querySelector(t.CUSTOMFILELABEL);
                    return n && (i = n.innerHTML), i
                },
                i = function(t) {
                    if (t.childNodes.length > 0)
                        for (var e = [].slice.call(t.childNodes), i = 0; i < e.length; i++) {
                            var n = e[i];
                            if (3 !== n.nodeType) return n
                        }
                    return t
                },
                n = function(e) {
                    var n = e.bsCustomFileInput.defaultText,
                        o = e.parentNode.querySelector(t.CUSTOMFILELABEL);
                    o && (i(o).innerHTML = n)
                },
                o = !!window.File,
                r = function(t) {
                    if (t.hasAttribute("multiple") && o) return [].slice.call(t.files).map((function(t) {
                        return t.name
                    })).join(", ");
                    if (-1 !== t.value.indexOf("fakepath")) {
                        var e = t.value.split("\\");
                        return e[e.length - 1]
                    }
                    return t.value
                };

            function a() {
                var e = this.parentNode.querySelector(t.CUSTOMFILELABEL);
                if (e) {
                    var o = i(e),
                        a = r(this);
                    a.length ? o.innerHTML = a : n(this)
                }
            }

            function s() {
                for (var e = [].slice.call(this.querySelectorAll(t.INPUT)).filter((function(t) {
                        return !!t.bsCustomFileInput
                    })), i = 0, o = e.length; i < o; i++) n(e[i])
            }
            var l = "reset",
                c = "change";
            return {
                init: function(i, n) {
                    void 0 === i && (i = t.CUSTOMFILE), void 0 === n && (n = t.FORM);
                    for (var o = [].slice.call(document.querySelectorAll(i)), r = [].slice.call(document.querySelectorAll(n)), u = 0, d = o.length; u < d; u++) {
                        var h = o[u];
                        Object.defineProperty(h, "bsCustomFileInput", {
                            value: {
                                defaultText: e(h)
                            },
                            writable: !0
                        }), a.call(h), h.addEventListener(c, a)
                    }
                    for (var f = 0, p = r.length; f < p; f++) r[f].addEventListener(l, s), Object.defineProperty(r[f], "bsCustomFileInput", {
                        value: !0,
                        writable: !0
                    })
                },
                destroy: function() {
                    for (var e = [].slice.call(document.querySelectorAll(t.FORM)).filter((function(t) {
                            return !!t.bsCustomFileInput
                        })), i = [].slice.call(document.querySelectorAll(t.INPUT)).filter((function(t) {
                            return !!t.bsCustomFileInput
                        })), o = 0, r = i.length; o < r; o++) {
                        var u = i[o];
                        n(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, a)
                    }
                    for (var d = 0, h = e.length; d < h; d++) e[d].removeEventListener(l, s), e[d].bsCustomFileInput = void 0
                }
            }
        }, "object" === ("undefined" == typeof exports ? "undefined" : o(exports)) && void 0 !== t ? t.exports = n() : "function" == typeof define && i(76) ? define(n) : (e = e || self).bsCustomFileInput = n(), document.addEventListener("DOMContentLoaded", (function() {
            bsCustomFileInput.init()
        }))
    }).call(this, i(99)(t))
}, function(t, e, i) {
    "use strict";
    (function(t, e) {
        var n;
        i(69), i(79), i(80), i(73), i(224), i(87), i(225), i(95), i(66), i(64), i(71), i(106), i(166), i(133), i(102), i(134), i(110), i(93), i(226), i(227), i(111), i(229), i(230), i(231), i(135), i(104), i(70), i(112), i(127), i(68), i(113), i(81), i(116), i(100), i(96), i(84);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * Chart.js
         * http://chartjs.org/
         * Version: 2.7.3
         *
         * Copyright 2018 Chart.js Contributors
         * Released under the MIT license
         * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
         */
        ! function(n) {
            if ("object" === ("undefined" == typeof exports ? "undefined" : o(exports)) && void 0 !== t) t.exports = n();
            else if ("function" == typeof define && i(76)) define([], n);
            else {
                ("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : this).Chart = n()
            }
        }((function() {
            return function t(e, i, o) {
                function r(s, l) {
                    if (!i[s]) {
                        if (!e[s]) {
                            if (!l && "function" == typeof n && n) return n(s, !0);
                            if (a) return a(s, !0);
                            var c = new Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var u = i[s] = {
                            exports: {}
                        };
                        e[s][0].call(u.exports, (function(t) {
                            return r(e[s][1][t] || t)
                        }), u, u.exports, t, e, i, o)
                    }
                    return i[s].exports
                }
                for (var a = "function" == typeof n && n, s = 0; s < o.length; s++) r(o[s]);
                return r
            }({
                1: [function(t, e, i) {}, {}],
                2: [function(t, e, i) {
                    var n = t(6);

                    function o(t) {
                        if (t) {
                            var e = [0, 0, 0],
                                i = 1,
                                o = t.match(/^#([a-fA-F0-9]{3})$/i);
                            if (o) {
                                o = o[1];
                                for (var r = 0; r < e.length; r++) e[r] = parseInt(o[r] + o[r], 16)
                            } else if (o = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                                o = o[1];
                                for (r = 0; r < e.length; r++) e[r] = parseInt(o.slice(2 * r, 2 * r + 2), 16)
                            } else if (o = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                                for (r = 0; r < e.length; r++) e[r] = parseInt(o[r + 1]);
                                i = parseFloat(o[4])
                            } else if (o = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                                for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(o[r + 1]));
                                i = parseFloat(o[4])
                            } else if (o = t.match(/(\w+)/)) {
                                if ("transparent" == o[1]) return [0, 0, 0, 0];
                                if (!(e = n[o[1]])) return
                            }
                            for (r = 0; r < e.length; r++) e[r] = u(e[r], 0, 255);
                            return i = i || 0 == i ? u(i, 0, 1) : 1, e[3] = i, e
                        }
                    }

                    function r(t) {
                        if (t) {
                            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                            if (e) {
                                var i = parseFloat(e[4]);
                                return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(i) ? 1 : i, 0, 1)]
                            }
                        }
                    }

                    function a(t) {
                        if (t) {
                            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                            if (e) {
                                var i = parseFloat(e[4]);
                                return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(i) ? 1 : i, 0, 1)]
                            }
                        }
                    }

                    function s(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                    }

                    function l(t, e) {
                        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                    }

                    function c(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                    }

                    function u(t, e, i) {
                        return Math.min(Math.max(e, t), i)
                    }

                    function d(t) {
                        var e = t.toString(16).toUpperCase();
                        return e.length < 2 ? "0" + e : e
                    }
                    e.exports = {
                        getRgba: o,
                        getHsla: r,
                        getRgb: function(t) {
                            var e = o(t);
                            return e && e.slice(0, 3)
                        },
                        getHsl: function(t) {
                            var e = r(t);
                            return e && e.slice(0, 3)
                        },
                        getHwb: a,
                        getAlpha: function(t) {
                            var e = o(t);
                            if (e) return e[3];
                            if (e = r(t)) return e[3];
                            if (e = a(t)) return e[3]
                        },
                        hexString: function(t) {
                            return "#" + d(t[0]) + d(t[1]) + d(t[2])
                        },
                        rgbString: function(t, e) {
                            if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                            return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                        },
                        rgbaString: s,
                        percentString: function(t, e) {
                            if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                            var i = Math.round(t[0] / 255 * 100),
                                n = Math.round(t[1] / 255 * 100),
                                o = Math.round(t[2] / 255 * 100);
                            return "rgb(" + i + "%, " + n + "%, " + o + "%)"
                        },
                        percentaString: l,
                        hslString: function(t, e) {
                            if (e < 1 || t[3] && t[3] < 1) return c(t, e);
                            return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                        },
                        hslaString: c,
                        hwbString: function(t, e) {
                            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                            return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                        },
                        keyword: function(t) {
                            return h[t.slice(0, 3)]
                        }
                    };
                    var h = {};
                    for (var f in n) h[n[f]] = f
                }, {
                    6: 6
                }],
                3: [function(t, e, i) {
                    var n = t(5),
                        r = t(2),
                        a = function t(e) {
                            return e instanceof t ? e : this instanceof t ? (this.valid = !1, this.values = {
                                rgb: [0, 0, 0],
                                hsl: [0, 0, 0],
                                hsv: [0, 0, 0],
                                hwb: [0, 0, 0],
                                cmyk: [0, 0, 0, 0],
                                alpha: 1
                            }, void("string" == typeof e ? (i = r.getRgba(e)) ? this.setValues("rgb", i) : (i = r.getHsla(e)) ? this.setValues("hsl", i) : (i = r.getHwb(e)) && this.setValues("hwb", i) : "object" === o(e) && (void 0 !== (i = e).r || void 0 !== i.red ? this.setValues("rgb", i) : void 0 !== i.l || void 0 !== i.lightness ? this.setValues("hsl", i) : void 0 !== i.v || void 0 !== i.value ? this.setValues("hsv", i) : void 0 !== i.w || void 0 !== i.whiteness ? this.setValues("hwb", i) : void 0 === i.c && void 0 === i.cyan || this.setValues("cmyk", i)))) : new t(e);
                            var i
                        };
                    (a.prototype = {
                        isValid: function() {
                            return this.valid
                        },
                        rgb: function() {
                            return this.setSpace("rgb", arguments)
                        },
                        hsl: function() {
                            return this.setSpace("hsl", arguments)
                        },
                        hsv: function() {
                            return this.setSpace("hsv", arguments)
                        },
                        hwb: function() {
                            return this.setSpace("hwb", arguments)
                        },
                        cmyk: function() {
                            return this.setSpace("cmyk", arguments)
                        },
                        rgbArray: function() {
                            return this.values.rgb
                        },
                        hslArray: function() {
                            return this.values.hsl
                        },
                        hsvArray: function() {
                            return this.values.hsv
                        },
                        hwbArray: function() {
                            var t = this.values;
                            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                        },
                        cmykArray: function() {
                            return this.values.cmyk
                        },
                        rgbaArray: function() {
                            var t = this.values;
                            return t.rgb.concat([t.alpha])
                        },
                        hslaArray: function() {
                            var t = this.values;
                            return t.hsl.concat([t.alpha])
                        },
                        alpha: function(t) {
                            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                        },
                        red: function(t) {
                            return this.setChannel("rgb", 0, t)
                        },
                        green: function(t) {
                            return this.setChannel("rgb", 1, t)
                        },
                        blue: function(t) {
                            return this.setChannel("rgb", 2, t)
                        },
                        hue: function(t) {
                            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                        },
                        saturation: function(t) {
                            return this.setChannel("hsl", 1, t)
                        },
                        lightness: function(t) {
                            return this.setChannel("hsl", 2, t)
                        },
                        saturationv: function(t) {
                            return this.setChannel("hsv", 1, t)
                        },
                        whiteness: function(t) {
                            return this.setChannel("hwb", 1, t)
                        },
                        blackness: function(t) {
                            return this.setChannel("hwb", 2, t)
                        },
                        value: function(t) {
                            return this.setChannel("hsv", 2, t)
                        },
                        cyan: function(t) {
                            return this.setChannel("cmyk", 0, t)
                        },
                        magenta: function(t) {
                            return this.setChannel("cmyk", 1, t)
                        },
                        yellow: function(t) {
                            return this.setChannel("cmyk", 2, t)
                        },
                        black: function(t) {
                            return this.setChannel("cmyk", 3, t)
                        },
                        hexString: function() {
                            return r.hexString(this.values.rgb)
                        },
                        rgbString: function() {
                            return r.rgbString(this.values.rgb, this.values.alpha)
                        },
                        rgbaString: function() {
                            return r.rgbaString(this.values.rgb, this.values.alpha)
                        },
                        percentString: function() {
                            return r.percentString(this.values.rgb, this.values.alpha)
                        },
                        hslString: function() {
                            return r.hslString(this.values.hsl, this.values.alpha)
                        },
                        hslaString: function() {
                            return r.hslaString(this.values.hsl, this.values.alpha)
                        },
                        hwbString: function() {
                            return r.hwbString(this.values.hwb, this.values.alpha)
                        },
                        keyword: function() {
                            return r.keyword(this.values.rgb, this.values.alpha)
                        },
                        rgbNumber: function() {
                            var t = this.values.rgb;
                            return t[0] << 16 | t[1] << 8 | t[2]
                        },
                        luminosity: function() {
                            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                                var n = t[i] / 255;
                                e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                            }
                            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                        },
                        contrast: function(t) {
                            var e = this.luminosity(),
                                i = t.luminosity();
                            return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                        },
                        level: function(t) {
                            var e = this.contrast(t);
                            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                        },
                        dark: function() {
                            var t = this.values.rgb;
                            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                        },
                        light: function() {
                            return !this.dark()
                        },
                        negate: function() {
                            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                            return this.setValues("rgb", t), this
                        },
                        lighten: function(t) {
                            var e = this.values.hsl;
                            return e[2] += e[2] * t, this.setValues("hsl", e), this
                        },
                        darken: function(t) {
                            var e = this.values.hsl;
                            return e[2] -= e[2] * t, this.setValues("hsl", e), this
                        },
                        saturate: function(t) {
                            var e = this.values.hsl;
                            return e[1] += e[1] * t, this.setValues("hsl", e), this
                        },
                        desaturate: function(t) {
                            var e = this.values.hsl;
                            return e[1] -= e[1] * t, this.setValues("hsl", e), this
                        },
                        whiten: function(t) {
                            var e = this.values.hwb;
                            return e[1] += e[1] * t, this.setValues("hwb", e), this
                        },
                        blacken: function(t) {
                            var e = this.values.hwb;
                            return e[2] += e[2] * t, this.setValues("hwb", e), this
                        },
                        greyscale: function() {
                            var t = this.values.rgb,
                                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                            return this.setValues("rgb", [e, e, e]), this
                        },
                        clearer: function(t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e - e * t), this
                        },
                        opaquer: function(t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e + e * t), this
                        },
                        rotate: function(t) {
                            var e = this.values.hsl,
                                i = (e[0] + t) % 360;
                            return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                        },
                        mix: function(t, e) {
                            var i = t,
                                n = void 0 === e ? .5 : e,
                                o = 2 * n - 1,
                                r = this.alpha() - i.alpha(),
                                a = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                                s = 1 - a;
                            return this.rgb(a * this.red() + s * i.red(), a * this.green() + s * i.green(), a * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
                        },
                        toJSON: function() {
                            return this.rgb()
                        },
                        clone: function() {
                            var t, e, i = new a,
                                n = this.values,
                                o = i.values;
                            for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? o[r] = t.slice(0) : "[object Number]" === e ? o[r] = t : console.error("unexpected color value:", t));
                            return i
                        }
                    }).spaces = {
                        rgb: ["red", "green", "blue"],
                        hsl: ["hue", "saturation", "lightness"],
                        hsv: ["hue", "saturation", "value"],
                        hwb: ["hue", "whiteness", "blackness"],
                        cmyk: ["cyan", "magenta", "yellow", "black"]
                    }, a.prototype.maxes = {
                        rgb: [255, 255, 255],
                        hsl: [360, 100, 100],
                        hsv: [360, 100, 100],
                        hwb: [360, 100, 100],
                        cmyk: [100, 100, 100, 100]
                    }, a.prototype.getValues = function(t) {
                        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                        return 1 !== e.alpha && (i.a = e.alpha), i
                    }, a.prototype.setValues = function(t, e) {
                        var i, o, r = this.values,
                            a = this.spaces,
                            s = this.maxes,
                            l = 1;
                        if (this.valid = !0, "alpha" === t) l = e;
                        else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];
                        else if (void 0 !== e[t.charAt(0)]) {
                            for (i = 0; i < t.length; i++) r[t][i] = e[t.charAt(i)];
                            l = e.a
                        } else if (void 0 !== e[a[t][0]]) {
                            var c = a[t];
                            for (i = 0; i < t.length; i++) r[t][i] = e[c[i]];
                            l = e.alpha
                        }
                        if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;
                        for (i = 0; i < t.length; i++) o = Math.max(0, Math.min(s[t][i], r[t][i])), r[t][i] = Math.round(o);
                        for (var u in a) u !== t && (r[u] = n[t][u](r[t]));
                        return !0
                    }, a.prototype.setSpace = function(t, e) {
                        var i = e[0];
                        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
                    }, a.prototype.setChannel = function(t, e, i) {
                        var n = this.values[t];
                        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
                    }, "undefined" != typeof window && (window.Color = a), e.exports = a
                }, {
                    2: 2,
                    5: 5
                }],
                4: [function(t, e, i) {
                    function n(t) {
                        var e, i, n = t[0] / 255,
                            o = t[1] / 255,
                            r = t[2] / 255,
                            a = Math.min(n, o, r),
                            s = Math.max(n, o, r),
                            l = s - a;
                        return s == a ? e = 0 : n == s ? e = (o - r) / l : o == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (a + s) / 2, [e, 100 * (s == a ? 0 : i <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * i]
                    }

                    function o(t) {
                        var e, i, n = t[0],
                            o = t[1],
                            r = t[2],
                            a = Math.min(n, o, r),
                            s = Math.max(n, o, r),
                            l = s - a;
                        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : n == s ? e = (o - r) / l : o == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
                    }

                    function a(t) {
                        var e = t[0],
                            i = t[1],
                            o = t[2];
                        return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, o))), 100 * (o = 1 - 1 / 255 * Math.max(e, Math.max(i, o)))]
                    }

                    function s(t) {
                        var e, i = t[0] / 255,
                            n = t[1] / 255,
                            o = t[2] / 255;
                        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - o))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
                    }

                    function l(t) {
                        return T[JSON.stringify(t)]
                    }

                    function c(t) {
                        var e = t[0] / 255,
                            i = t[1] / 255,
                            n = t[2] / 255;
                        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
                    }

                    function u(t) {
                        var e = c(t),
                            i = e[0],
                            n = e[1],
                            o = e[2];
                        return n /= 100, o /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
                    }

                    function d(t) {
                        var e, i, n, o, r, a = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100;
                        if (0 == s) return [r = 255 * l, r, r];
                        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
                        for (var c = 0; c < 3; c++)(n = a + 1 / 3 * -(c - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, o[c] = 255 * r;
                        return o
                    }

                    function h(t) {
                        var e = t[0] / 60,
                            i = t[1] / 100,
                            n = t[2] / 100,
                            o = Math.floor(e) % 6,
                            r = e - Math.floor(e),
                            a = 255 * n * (1 - i),
                            s = 255 * n * (1 - i * r),
                            l = 255 * n * (1 - i * (1 - r));
                        n *= 255;
                        switch (o) {
                            case 0:
                                return [n, l, a];
                            case 1:
                                return [s, n, a];
                            case 2:
                                return [a, n, l];
                            case 3:
                                return [a, s, n];
                            case 4:
                                return [l, a, n];
                            case 5:
                                return [n, a, s]
                        }
                    }

                    function f(t) {
                        var e, i, n, o, a = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100,
                            c = s + l;
                        switch (c > 1 && (s /= c, l /= c), n = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (n = 1 - n), o = s + n * ((i = 1 - l) - s), e) {
                            default:
                            case 6:
                            case 0:
                                r = i, g = o, b = s;
                                break;
                            case 1:
                                r = o, g = i, b = s;
                                break;
                            case 2:
                                r = s, g = i, b = o;
                                break;
                            case 3:
                                r = s, g = o, b = i;
                                break;
                            case 4:
                                r = o, g = s, b = i;
                                break;
                            case 5:
                                r = i, g = s, b = o
                        }
                        return [255 * r, 255 * g, 255 * b]
                    }

                    function p(t) {
                        var e = t[0] / 100,
                            i = t[1] / 100,
                            n = t[2] / 100,
                            o = t[3] / 100;
                        return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))]
                    }

                    function v(t) {
                        var e, i, n, o = t[0] / 100,
                            r = t[1] / 100,
                            a = t[2] / 100;
                        return i = -.9689 * o + 1.8758 * r + .0415 * a, n = .0557 * o + -.204 * r + 1.057 * a, e = (e = 3.2406 * o + -1.5372 * r + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
                    }

                    function m(t) {
                        var e = t[0],
                            i = t[1],
                            n = t[2];
                        return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
                    }

                    function y(t) {
                        var e, i, n, o, r = t[0],
                            a = t[1],
                            s = t[2];
                        return r <= 8 ? o = (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), o = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)]
                    }

                    function x(t) {
                        var e, i = t[0],
                            n = t[1],
                            o = t[2];
                        return (e = 360 * Math.atan2(o, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + o * o), e]
                    }

                    function w(t) {
                        return v(y(t))
                    }

                    function k(t) {
                        var e, i = t[0],
                            n = t[1];
                        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
                    }

                    function S(t) {
                        return C[t]
                    }
                    e.exports = {
                        rgb2hsl: n,
                        rgb2hsv: o,
                        rgb2hwb: a,
                        rgb2cmyk: s,
                        rgb2keyword: l,
                        rgb2xyz: c,
                        rgb2lab: u,
                        rgb2lch: function(t) {
                            return x(u(t))
                        },
                        hsl2rgb: d,
                        hsl2hsv: function(t) {
                            var e = t[0],
                                i = t[1] / 100,
                                n = t[2] / 100;
                            if (0 === n) return [0, 0, 0];
                            return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
                        },
                        hsl2hwb: function(t) {
                            return a(d(t))
                        },
                        hsl2cmyk: function(t) {
                            return s(d(t))
                        },
                        hsl2keyword: function(t) {
                            return l(d(t))
                        },
                        hsv2rgb: h,
                        hsv2hsl: function(t) {
                            var e, i, n = t[0],
                                o = t[1] / 100,
                                r = t[2] / 100;
                            return e = o * r, [n, 100 * (e = (e /= (i = (2 - o) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                        },
                        hsv2hwb: function(t) {
                            return a(h(t))
                        },
                        hsv2cmyk: function(t) {
                            return s(h(t))
                        },
                        hsv2keyword: function(t) {
                            return l(h(t))
                        },
                        hwb2rgb: f,
                        hwb2hsl: function(t) {
                            return n(f(t))
                        },
                        hwb2hsv: function(t) {
                            return o(f(t))
                        },
                        hwb2cmyk: function(t) {
                            return s(f(t))
                        },
                        hwb2keyword: function(t) {
                            return l(f(t))
                        },
                        cmyk2rgb: p,
                        cmyk2hsl: function(t) {
                            return n(p(t))
                        },
                        cmyk2hsv: function(t) {
                            return o(p(t))
                        },
                        cmyk2hwb: function(t) {
                            return a(p(t))
                        },
                        cmyk2keyword: function(t) {
                            return l(p(t))
                        },
                        keyword2rgb: S,
                        keyword2hsl: function(t) {
                            return n(S(t))
                        },
                        keyword2hsv: function(t) {
                            return o(S(t))
                        },
                        keyword2hwb: function(t) {
                            return a(S(t))
                        },
                        keyword2cmyk: function(t) {
                            return s(S(t))
                        },
                        keyword2lab: function(t) {
                            return u(S(t))
                        },
                        keyword2xyz: function(t) {
                            return c(S(t))
                        },
                        xyz2rgb: v,
                        xyz2lab: m,
                        xyz2lch: function(t) {
                            return x(m(t))
                        },
                        lab2xyz: y,
                        lab2rgb: w,
                        lab2lch: x,
                        lch2lab: k,
                        lch2xyz: function(t) {
                            return y(k(t))
                        },
                        lch2rgb: function(t) {
                            return w(k(t))
                        }
                    };
                    var C = {
                            aliceblue: [240, 248, 255],
                            antiquewhite: [250, 235, 215],
                            aqua: [0, 255, 255],
                            aquamarine: [127, 255, 212],
                            azure: [240, 255, 255],
                            beige: [245, 245, 220],
                            bisque: [255, 228, 196],
                            black: [0, 0, 0],
                            blanchedalmond: [255, 235, 205],
                            blue: [0, 0, 255],
                            blueviolet: [138, 43, 226],
                            brown: [165, 42, 42],
                            burlywood: [222, 184, 135],
                            cadetblue: [95, 158, 160],
                            chartreuse: [127, 255, 0],
                            chocolate: [210, 105, 30],
                            coral: [255, 127, 80],
                            cornflowerblue: [100, 149, 237],
                            cornsilk: [255, 248, 220],
                            crimson: [220, 20, 60],
                            cyan: [0, 255, 255],
                            darkblue: [0, 0, 139],
                            darkcyan: [0, 139, 139],
                            darkgoldenrod: [184, 134, 11],
                            darkgray: [169, 169, 169],
                            darkgreen: [0, 100, 0],
                            darkgrey: [169, 169, 169],
                            darkkhaki: [189, 183, 107],
                            darkmagenta: [139, 0, 139],
                            darkolivegreen: [85, 107, 47],
                            darkorange: [255, 140, 0],
                            darkorchid: [153, 50, 204],
                            darkred: [139, 0, 0],
                            darksalmon: [233, 150, 122],
                            darkseagreen: [143, 188, 143],
                            darkslateblue: [72, 61, 139],
                            darkslategray: [47, 79, 79],
                            darkslategrey: [47, 79, 79],
                            darkturquoise: [0, 206, 209],
                            darkviolet: [148, 0, 211],
                            deeppink: [255, 20, 147],
                            deepskyblue: [0, 191, 255],
                            dimgray: [105, 105, 105],
                            dimgrey: [105, 105, 105],
                            dodgerblue: [30, 144, 255],
                            firebrick: [178, 34, 34],
                            floralwhite: [255, 250, 240],
                            forestgreen: [34, 139, 34],
                            fuchsia: [255, 0, 255],
                            gainsboro: [220, 220, 220],
                            ghostwhite: [248, 248, 255],
                            gold: [255, 215, 0],
                            goldenrod: [218, 165, 32],
                            gray: [128, 128, 128],
                            green: [0, 128, 0],
                            greenyellow: [173, 255, 47],
                            grey: [128, 128, 128],
                            honeydew: [240, 255, 240],
                            hotpink: [255, 105, 180],
                            indianred: [205, 92, 92],
                            indigo: [75, 0, 130],
                            ivory: [255, 255, 240],
                            khaki: [240, 230, 140],
                            lavender: [230, 230, 250],
                            lavenderblush: [255, 240, 245],
                            lawngreen: [124, 252, 0],
                            lemonchiffon: [255, 250, 205],
                            lightblue: [173, 216, 230],
                            lightcoral: [240, 128, 128],
                            lightcyan: [224, 255, 255],
                            lightgoldenrodyellow: [250, 250, 210],
                            lightgray: [211, 211, 211],
                            lightgreen: [144, 238, 144],
                            lightgrey: [211, 211, 211],
                            lightpink: [255, 182, 193],
                            lightsalmon: [255, 160, 122],
                            lightseagreen: [32, 178, 170],
                            lightskyblue: [135, 206, 250],
                            lightslategray: [119, 136, 153],
                            lightslategrey: [119, 136, 153],
                            lightsteelblue: [176, 196, 222],
                            lightyellow: [255, 255, 224],
                            lime: [0, 255, 0],
                            limegreen: [50, 205, 50],
                            linen: [250, 240, 230],
                            magenta: [255, 0, 255],
                            maroon: [128, 0, 0],
                            mediumaquamarine: [102, 205, 170],
                            mediumblue: [0, 0, 205],
                            mediumorchid: [186, 85, 211],
                            mediumpurple: [147, 112, 219],
                            mediumseagreen: [60, 179, 113],
                            mediumslateblue: [123, 104, 238],
                            mediumspringgreen: [0, 250, 154],
                            mediumturquoise: [72, 209, 204],
                            mediumvioletred: [199, 21, 133],
                            midnightblue: [25, 25, 112],
                            mintcream: [245, 255, 250],
                            mistyrose: [255, 228, 225],
                            moccasin: [255, 228, 181],
                            navajowhite: [255, 222, 173],
                            navy: [0, 0, 128],
                            oldlace: [253, 245, 230],
                            olive: [128, 128, 0],
                            olivedrab: [107, 142, 35],
                            orange: [255, 165, 0],
                            orangered: [255, 69, 0],
                            orchid: [218, 112, 214],
                            palegoldenrod: [238, 232, 170],
                            palegreen: [152, 251, 152],
                            paleturquoise: [175, 238, 238],
                            palevioletred: [219, 112, 147],
                            papayawhip: [255, 239, 213],
                            peachpuff: [255, 218, 185],
                            peru: [205, 133, 63],
                            pink: [255, 192, 203],
                            plum: [221, 160, 221],
                            powderblue: [176, 224, 230],
                            purple: [128, 0, 128],
                            rebeccapurple: [102, 51, 153],
                            red: [255, 0, 0],
                            rosybrown: [188, 143, 143],
                            royalblue: [65, 105, 225],
                            saddlebrown: [139, 69, 19],
                            salmon: [250, 128, 114],
                            sandybrown: [244, 164, 96],
                            seagreen: [46, 139, 87],
                            seashell: [255, 245, 238],
                            sienna: [160, 82, 45],
                            silver: [192, 192, 192],
                            skyblue: [135, 206, 235],
                            slateblue: [106, 90, 205],
                            slategray: [112, 128, 144],
                            slategrey: [112, 128, 144],
                            snow: [255, 250, 250],
                            springgreen: [0, 255, 127],
                            steelblue: [70, 130, 180],
                            tan: [210, 180, 140],
                            teal: [0, 128, 128],
                            thistle: [216, 191, 216],
                            tomato: [255, 99, 71],
                            turquoise: [64, 224, 208],
                            violet: [238, 130, 238],
                            wheat: [245, 222, 179],
                            white: [255, 255, 255],
                            whitesmoke: [245, 245, 245],
                            yellow: [255, 255, 0],
                            yellowgreen: [154, 205, 50]
                        },
                        T = {};
                    for (var M in C) T[JSON.stringify(C[M])] = M
                }, {}],
                5: [function(t, e, i) {
                    var n = t(4),
                        o = function() {
                            return new c
                        };
                    for (var r in n) {
                        o[r + "Raw"] = function(t) {
                            return function(e) {
                                return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                            }
                        }(r);
                        var a = /(\w+)2(\w+)/.exec(r),
                            s = a[1],
                            l = a[2];
                        (o[s] = o[s] || {})[l] = o[r] = function(t) {
                            return function(e) {
                                "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                                var i = n[t](e);
                                if ("string" == typeof i || void 0 === i) return i;
                                for (var o = 0; o < i.length; o++) i[o] = Math.round(i[o]);
                                return i
                            }
                        }(r)
                    }
                    var c = function() {
                        this.convs = {}
                    };
                    c.prototype.routeSpace = function(t, e) {
                        var i = e[0];
                        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
                    }, c.prototype.setValues = function(t, e) {
                        return this.space = t, this.convs = {}, this.convs[t] = e, this
                    }, c.prototype.getValues = function(t) {
                        var e = this.convs[t];
                        if (!e) {
                            var i = this.space,
                                n = this.convs[i];
                            e = o[i][t](n), this.convs[t] = e
                        }
                        return e
                    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach((function(t) {
                        c.prototype[t] = function(e) {
                            return this.routeSpace(t, arguments)
                        }
                    })), e.exports = o
                }, {
                    4: 4
                }],
                6: [function(t, e, i) {
                    e.exports = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    }
                }, {}],
                7: [function(t, e, i) {
                    var n = t(30)();
                    n.helpers = t(46), t(28)(n), n.Animation = t(22), n.animationService = t(23), n.defaults = t(26), n.Element = t(27), n.elements = t(41), n.Interaction = t(29), n.layouts = t(31), n.platform = t(49), n.plugins = t(32), n.Scale = t(33), n.scaleService = t(34), n.Ticks = t(35), n.Tooltip = t(36), t(24)(n), t(25)(n), t(56)(n), t(54)(n), t(55)(n), t(57)(n), t(58)(n), t(59)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
                    var o = t(50);
                    for (var r in o) o.hasOwnProperty(r) && n.plugins.register(o[r]);
                    n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = o.legend._element, n.Title = o.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
                }, {
                    10: 10,
                    11: 11,
                    12: 12,
                    13: 13,
                    14: 14,
                    15: 15,
                    16: 16,
                    17: 17,
                    18: 18,
                    19: 19,
                    20: 20,
                    21: 21,
                    22: 22,
                    23: 23,
                    24: 24,
                    25: 25,
                    26: 26,
                    27: 27,
                    28: 28,
                    29: 29,
                    30: 30,
                    31: 31,
                    32: 32,
                    33: 33,
                    34: 34,
                    35: 35,
                    36: 36,
                    41: 41,
                    46: 46,
                    49: 49,
                    50: 50,
                    54: 54,
                    55: 55,
                    56: 56,
                    57: 57,
                    58: 58,
                    59: 59,
                    8: 8,
                    9: 9
                }],
                8: [function(t, e, i) {
                    e.exports = function(t) {
                        t.Bar = function(e, i) {
                            return i.type = "bar", new t(e, i)
                        }
                    }
                }, {}],
                9: [function(t, e, i) {
                    e.exports = function(t) {
                        t.Bubble = function(e, i) {
                            return i.type = "bubble", new t(e, i)
                        }
                    }
                }, {}],
                10: [function(t, e, i) {
                    e.exports = function(t) {
                        t.Doughnut = function(e, i) {
                            return i.type = "doughnut", new t(e, i)
                        }
                    }
                }, {}],
                11: [function(t, e, i) {
                    e.exports = function(t) {
                        t.Line = function(e, i) {
                            return i.type = "line", new t(e, i)
                        }
                    }
                }, {}],
                12: [function(t, e, i) {
                    e.exports = function(t) {
                        t.PolarArea = function(e, i) {
                            return i.type = "polarArea", new t(e, i)
                        }
                    }
                }, {}],
                13: [function(t, e, i) {
                    e.exports = function(t) {
                        t.Radar = function(e, i) {
                            return i.type = "radar", new t(e, i)
                        }
                    }
                }, {}],
                14: [function(t, e, i) {
                    e.exports = function(t) {
                        t.Scatter = function(e, i) {
                            return i.type = "scatter", new t(e, i)
                        }
                    }
                }, {}],
                15: [function(t, e, i) {
                    var n = t(26),
                        o = t(41),
                        r = t(46);
                    n._set("bar", {
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                offset: !0,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }],
                            yAxes: [{
                                type: "linear"
                            }]
                        }
                    }), n._set("horizontalBar", {
                        hover: {
                            mode: "index",
                            axis: "y"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom"
                            }],
                            yAxes: [{
                                position: "left",
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                offset: !0,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }]
                        },
                        elements: {
                            rectangle: {
                                borderSkipped: "left"
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function(t, e) {
                                    var i = "";
                                    return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                                },
                                label: function(t, e) {
                                    return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                                }
                            },
                            mode: "index",
                            axis: "y"
                        }
                    }), e.exports = function(t) {
                        t.controllers.bar = t.DatasetController.extend({
                            dataElementType: o.Rectangle,
                            initialize: function() {
                                var e, i = this;
                                t.DatasetController.prototype.initialize.apply(i, arguments), (e = i.getMeta()).stack = i.getDataset().stack, e.bar = !0
                            },
                            update: function(t) {
                                var e, i, n = this.getMeta().data;
                                for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                            },
                            updateElement: function(t, e, i) {
                                var n = this,
                                    o = n.chart,
                                    a = n.getMeta(),
                                    s = n.getDataset(),
                                    l = t.custom || {},
                                    c = o.options.elements.rectangle;
                                t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                                    datasetLabel: s.label,
                                    label: o.data.labels[e],
                                    borderSkipped: l.borderSkipped ? l.borderSkipped : c.borderSkipped,
                                    backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, e, c.backgroundColor),
                                    borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, e, c.borderColor),
                                    borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, e, c.borderWidth)
                                }, n.updateElementGeometry(t, e, i), t.pivot()
                            },
                            updateElementGeometry: function(t, e, i) {
                                var n = this,
                                    o = t._model,
                                    r = n.getValueScale(),
                                    a = r.getBasePixel(),
                                    s = r.isHorizontal(),
                                    l = n._ruler || n.getRuler(),
                                    c = n.calculateBarValuePixels(n.index, e),
                                    u = n.calculateBarIndexPixels(n.index, e, l);
                                o.horizontal = s, o.base = i ? a : c.base, o.x = s ? i ? a : c.head : u.center, o.y = s ? u.center : i ? a : c.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
                            },
                            getValueScaleId: function() {
                                return this.getMeta().yAxisID
                            },
                            getIndexScaleId: function() {
                                return this.getMeta().xAxisID
                            },
                            getValueScale: function() {
                                return this.getScaleForId(this.getValueScaleId())
                            },
                            getIndexScale: function() {
                                return this.getScaleForId(this.getIndexScaleId())
                            },
                            _getStacks: function(t) {
                                var e, i, n = this.chart,
                                    o = this.getIndexScale().options.stacked,
                                    r = void 0 === t ? n.data.datasets.length : t + 1,
                                    a = [];
                                for (e = 0; e < r; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === a.indexOf(i.stack) || void 0 === o && (void 0 === i.stack || -1 === a.indexOf(i.stack))) && a.push(i.stack);
                                return a
                            },
                            getStackCount: function() {
                                return this._getStacks().length
                            },
                            getStackIndex: function(t, e) {
                                var i = this._getStacks(t),
                                    n = void 0 !== e ? i.indexOf(e) : -1;
                                return -1 === n ? i.length - 1 : n
                            },
                            getRuler: function() {
                                var t, e, i = this.getIndexScale(),
                                    n = this.getStackCount(),
                                    o = this.index,
                                    a = i.isHorizontal(),
                                    s = a ? i.left : i.top,
                                    l = s + (a ? i.width : i.height),
                                    c = [];
                                for (t = 0, e = this.getMeta().data.length; t < e; ++t) c.push(i.getPixelForValue(null, t, o));
                                return {
                                    min: r.isNullOrUndef(i.options.barThickness) ? function(t, e) {
                                        var i, n, o, r, a = t.isHorizontal() ? t.width : t.height,
                                            s = t.getTicks();
                                        for (o = 1, r = e.length; o < r; ++o) a = Math.min(a, e[o] - e[o - 1]);
                                        for (o = 0, r = s.length; o < r; ++o) n = t.getPixelForTick(o), a = o > 0 ? Math.min(a, n - i) : a, i = n;
                                        return a
                                    }(i, c) : -1,
                                    pixels: c,
                                    start: s,
                                    end: l,
                                    stackCount: n,
                                    scale: i
                                }
                            },
                            calculateBarValuePixels: function(t, e) {
                                var i, n, o, r, a, s, l = this.chart,
                                    c = this.getMeta(),
                                    u = this.getValueScale(),
                                    d = l.data.datasets,
                                    h = u.getRightValue(d[t].data[e]),
                                    f = u.options.stacked,
                                    p = c.stack,
                                    v = 0;
                                if (f || void 0 === f && void 0 !== p)
                                    for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller.getValueScaleId() === u.id && l.isDatasetVisible(i) && (o = u.getRightValue(d[i].data[e]), (h < 0 && o < 0 || h >= 0 && o > 0) && (v += o));
                                return r = u.getPixelForValue(v), {
                                    size: s = ((a = u.getPixelForValue(v + h)) - r) / 2,
                                    base: r,
                                    head: a,
                                    center: a + s / 2
                                }
                            },
                            calculateBarIndexPixels: function(t, e, i) {
                                var n = i.scale.options,
                                    o = "flex" === n.barThickness ? function(t, e, i) {
                                        var n, o = e.pixels,
                                            r = o[t],
                                            a = t > 0 ? o[t - 1] : null,
                                            s = t < o.length - 1 ? o[t + 1] : null,
                                            l = i.categoryPercentage;
                                        return null === a && (a = r - (null === s ? e.end - r : s - r)), null === s && (s = r + r - a), n = r - (r - a) / 2 * l, {
                                            chunk: (s - a) / 2 * l / e.stackCount,
                                            ratio: i.barPercentage,
                                            start: n
                                        }
                                    }(e, i, n) : function(t, e, i) {
                                        var n, o, a = i.barThickness,
                                            s = e.stackCount,
                                            l = e.pixels[t];
                                        return r.isNullOrUndef(a) ? (n = e.min * i.categoryPercentage, o = i.barPercentage) : (n = a * s, o = 1), {
                                            chunk: n / s,
                                            ratio: o,
                                            start: l - n / 2
                                        }
                                    }(e, i, n),
                                    a = this.getStackIndex(t, this.getMeta().stack),
                                    s = o.start + o.chunk * a + o.chunk / 2,
                                    l = Math.min(r.valueOrDefault(n.maxBarThickness, 1 / 0), o.chunk * o.ratio);
                                return {
                                    base: s - l / 2,
                                    head: s + l / 2,
                                    center: s,
                                    size: l
                                }
                            },
                            draw: function() {
                                var t = this.chart,
                                    e = this.getValueScale(),
                                    i = this.getMeta().data,
                                    n = this.getDataset(),
                                    o = i.length,
                                    a = 0;
                                for (r.canvas.clipArea(t.ctx, t.chartArea); a < o; ++a) isNaN(e.getRightValue(n.data[a])) || i[a].draw();
                                r.canvas.unclipArea(t.ctx)
                            }
                        }), t.controllers.horizontalBar = t.controllers.bar.extend({
                            getValueScaleId: function() {
                                return this.getMeta().xAxisID
                            },
                            getIndexScaleId: function() {
                                return this.getMeta().yAxisID
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                16: [function(t, e, i) {
                    var n = t(26),
                        r = t(41),
                        a = t(46);
                    n._set("bubble", {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-0"
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    var i = e.datasets[t.datasetIndex].label || "",
                                        n = e.datasets[t.datasetIndex].data[t.index];
                                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                                }
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.bubble = t.DatasetController.extend({
                            dataElementType: r.Point,
                            update: function(t) {
                                var e = this,
                                    i = e.getMeta().data;
                                a.each(i, (function(i, n) {
                                    e.updateElement(i, n, t)
                                }))
                            },
                            updateElement: function(t, e, i) {
                                var n = this,
                                    r = n.getMeta(),
                                    a = t.custom || {},
                                    s = n.getScaleForId(r.xAxisID),
                                    l = n.getScaleForId(r.yAxisID),
                                    c = n._resolveElementOptions(t, e),
                                    u = n.getDataset().data[e],
                                    d = n.index,
                                    h = i ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" === o(u) ? u : NaN, e, d),
                                    f = i ? l.getBasePixel() : l.getPixelForValue(u, e, d);
                                t._xScale = s, t._yScale = l, t._options = c, t._datasetIndex = d, t._index = e, t._model = {
                                    backgroundColor: c.backgroundColor,
                                    borderColor: c.borderColor,
                                    borderWidth: c.borderWidth,
                                    hitRadius: c.hitRadius,
                                    pointStyle: c.pointStyle,
                                    rotation: c.rotation,
                                    radius: i ? 0 : c.radius,
                                    skip: a.skip || isNaN(h) || isNaN(f),
                                    x: h,
                                    y: f
                                }, t.pivot()
                            },
                            setHoverStyle: function(t) {
                                var e = t._model,
                                    i = t._options;
                                t.$previousStyle = {
                                    backgroundColor: e.backgroundColor,
                                    borderColor: e.borderColor,
                                    borderWidth: e.borderWidth,
                                    radius: e.radius
                                }, e.backgroundColor = a.valueOrDefault(i.hoverBackgroundColor, a.getHoverColor(i.backgroundColor)), e.borderColor = a.valueOrDefault(i.hoverBorderColor, a.getHoverColor(i.borderColor)), e.borderWidth = a.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                            },
                            _resolveElementOptions: function(t, e) {
                                var i, n, o, r = this.chart,
                                    s = r.data.datasets[this.index],
                                    l = t.custom || {},
                                    c = r.options.elements.point,
                                    u = a.options.resolve,
                                    d = s.data[e],
                                    h = {},
                                    f = {
                                        chart: r,
                                        dataIndex: e,
                                        dataset: s,
                                        datasetIndex: this.index
                                    },
                                    p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                                for (i = 0, n = p.length; i < n; ++i) h[o = p[i]] = u([l[o], s[o], c[o]], f, e);
                                return h.radius = u([l.radius, d ? d.r : void 0, s.radius, c.radius], f, e), h
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                17: [function(t, e, i) {
                    var n = t(26),
                        o = t(41),
                        r = t(46);
                    n._set("doughnut", {
                        animation: {
                            animateRotate: !0,
                            animateScale: !1
                        },
                        hover: {
                            mode: "single"
                        },
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var i = t.data,
                                n = i.datasets,
                                o = i.labels;
                            if (n.length)
                                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function(t) {
                                    var e = t.data;
                                    return e.labels.length && e.datasets.length ? e.labels.map((function(i, n) {
                                        var o = t.getDatasetMeta(0),
                                            a = e.datasets[0],
                                            s = o.data[n],
                                            l = s && s.custom || {},
                                            c = r.valueAtIndexOrDefault,
                                            u = t.options.elements.arc;
                                        return {
                                            text: i,
                                            fillStyle: l.backgroundColor ? l.backgroundColor : c(a.backgroundColor, n, u.backgroundColor),
                                            strokeStyle: l.borderColor ? l.borderColor : c(a.borderColor, n, u.borderColor),
                                            lineWidth: l.borderWidth ? l.borderWidth : c(a.borderWidth, n, u.borderWidth),
                                            hidden: isNaN(a.data[n]) || o.data[n].hidden,
                                            index: n
                                        }
                                    })) : []
                                }
                            },
                            onClick: function(t, e) {
                                var i, n, o, r = e.index,
                                    a = this.chart;
                                for (i = 0, n = (a.data.datasets || []).length; i < n; ++i)(o = a.getDatasetMeta(i)).data[r] && (o.data[r].hidden = !o.data[r].hidden);
                                a.update()
                            }
                        },
                        cutoutPercentage: 50,
                        rotation: -.5 * Math.PI,
                        circumference: 2 * Math.PI,
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    var i = e.labels[t.index],
                                        n = ": " + e.datasets[t.datasetIndex].data[t.index];
                                    return r.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                                }
                            }
                        }
                    }), n._set("pie", r.clone(n.doughnut)), n._set("pie", {
                        cutoutPercentage: 0
                    }), e.exports = function(t) {
                        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                            dataElementType: o.Arc,
                            linkScales: r.noop,
                            getRingIndex: function(t) {
                                for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                                return e
                            },
                            update: function(t) {
                                var e = this,
                                    i = e.chart,
                                    n = i.chartArea,
                                    o = i.options,
                                    a = o.elements.arc,
                                    s = n.right - n.left - a.borderWidth,
                                    l = n.bottom - n.top - a.borderWidth,
                                    c = Math.min(s, l),
                                    u = {
                                        x: 0,
                                        y: 0
                                    },
                                    d = e.getMeta(),
                                    h = o.cutoutPercentage,
                                    f = o.circumference;
                                if (f < 2 * Math.PI) {
                                    var p = o.rotation % (2 * Math.PI),
                                        v = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                        g = {
                                            x: Math.cos(p),
                                            y: Math.sin(p)
                                        },
                                        m = {
                                            x: Math.cos(v),
                                            y: Math.sin(v)
                                        },
                                        y = p <= 0 && v >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= v,
                                        b = p <= .5 * Math.PI && .5 * Math.PI <= v || p <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                                        x = p <= -Math.PI && -Math.PI <= v || p <= Math.PI && Math.PI <= v,
                                        w = p <= .5 * -Math.PI && .5 * -Math.PI <= v || p <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                                        k = h / 100,
                                        S = {
                                            x: x ? -1 : Math.min(g.x * (g.x < 0 ? 1 : k), m.x * (m.x < 0 ? 1 : k)),
                                            y: w ? -1 : Math.min(g.y * (g.y < 0 ? 1 : k), m.y * (m.y < 0 ? 1 : k))
                                        },
                                        C = {
                                            x: y ? 1 : Math.max(g.x * (g.x > 0 ? 1 : k), m.x * (m.x > 0 ? 1 : k)),
                                            y: b ? 1 : Math.max(g.y * (g.y > 0 ? 1 : k), m.y * (m.y > 0 ? 1 : k))
                                        },
                                        T = {
                                            width: .5 * (C.x - S.x),
                                            height: .5 * (C.y - S.y)
                                        };
                                    c = Math.min(s / T.width, l / T.height), u = {
                                        x: -.5 * (C.x + S.x),
                                        y: -.5 * (C.y + S.y)
                                    }
                                }
                                i.borderWidth = e.getMaxBorderWidth(d.data), i.outerRadius = Math.max((c - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, d.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), r.each(d.data, (function(i, n) {
                                    e.updateElement(i, n, t)
                                }))
                            },
                            updateElement: function(t, e, i) {
                                var n = this,
                                    o = n.chart,
                                    a = o.chartArea,
                                    s = o.options,
                                    l = s.animation,
                                    c = (a.left + a.right) / 2,
                                    u = (a.top + a.bottom) / 2,
                                    d = s.rotation,
                                    h = s.rotation,
                                    f = n.getDataset(),
                                    p = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                                    v = i && l.animateScale ? 0 : n.innerRadius,
                                    g = i && l.animateScale ? 0 : n.outerRadius,
                                    m = r.valueAtIndexOrDefault;
                                r.extend(t, {
                                    _datasetIndex: n.index,
                                    _index: e,
                                    _model: {
                                        x: c + o.offsetX,
                                        y: u + o.offsetY,
                                        startAngle: d,
                                        endAngle: h,
                                        circumference: p,
                                        outerRadius: g,
                                        innerRadius: v,
                                        label: m(f.label, e, o.data.labels[e])
                                    }
                                });
                                var y = t._model,
                                    b = t.custom || {},
                                    x = r.valueAtIndexOrDefault,
                                    w = this.chart.options.elements.arc;
                                y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(f.backgroundColor, e, w.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(f.borderColor, e, w.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(f.borderWidth, e, w.borderWidth), i && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                            },
                            calculateTotal: function() {
                                var t, e = this.getDataset(),
                                    i = this.getMeta(),
                                    n = 0;
                                return r.each(i.data, (function(i, o) {
                                    t = e.data[o], isNaN(t) || i.hidden || (n += Math.abs(t))
                                })), n
                            },
                            calculateCircumference: function(t) {
                                var e = this.getMeta().total;
                                return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                            },
                            getMaxBorderWidth: function(t) {
                                for (var e, i, n = 0, o = this.index, r = t.length, a = 0; a < r; a++) e = t[a]._model ? t[a]._model.borderWidth : 0, n = (i = t[a]._chart ? t[a]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
                                return n
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                18: [function(t, e, i) {
                    var n = t(26),
                        r = t(41),
                        a = t(46);
                    n._set("line", {
                        showLines: !0,
                        spanGaps: !1,
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                id: "y-axis-0"
                            }]
                        }
                    }), e.exports = function(t) {
                        function e(t, e) {
                            return a.valueOrDefault(t.showLine, e.showLines)
                        }
                        t.controllers.line = t.DatasetController.extend({
                            datasetElementType: r.Line,
                            dataElementType: r.Point,
                            update: function(t) {
                                var i, n, o, r = this,
                                    s = r.getMeta(),
                                    l = s.dataset,
                                    c = s.data || [],
                                    u = r.chart.options,
                                    d = u.elements.line,
                                    h = r.getScaleForId(s.yAxisID),
                                    f = r.getDataset(),
                                    p = e(f, u);
                                for (p && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = c, l._model = {
                                        spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                                        tension: o.tension ? o.tension : a.valueOrDefault(f.lineTension, d.tension),
                                        backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || d.backgroundColor,
                                        borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || d.borderWidth,
                                        borderColor: o.borderColor ? o.borderColor : f.borderColor || d.borderColor,
                                        borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                                        borderDash: o.borderDash ? o.borderDash : f.borderDash || d.borderDash,
                                        borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
                                        borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
                                        fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : d.fill,
                                        steppedLine: o.steppedLine ? o.steppedLine : a.valueOrDefault(f.steppedLine, d.stepped),
                                        cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
                                    }, l.pivot()), i = 0, n = c.length; i < n; ++i) r.updateElement(c[i], i, t);
                                for (p && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = c.length; i < n; ++i) c[i].pivot()
                            },
                            getPointBackgroundColor: function(t, e) {
                                var i = this.chart.options.elements.point.backgroundColor,
                                    n = this.getDataset(),
                                    o = t.custom || {};
                                return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                            },
                            getPointBorderColor: function(t, e) {
                                var i = this.chart.options.elements.point.borderColor,
                                    n = this.getDataset(),
                                    o = t.custom || {};
                                return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                            },
                            getPointBorderWidth: function(t, e) {
                                var i = this.chart.options.elements.point.borderWidth,
                                    n = this.getDataset(),
                                    o = t.custom || {};
                                return isNaN(o.borderWidth) ? !isNaN(n.pointBorderWidth) || a.isArray(n.pointBorderWidth) ? i = a.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = o.borderWidth, i
                            },
                            getPointRotation: function(t, e) {
                                var i = this.chart.options.elements.point.rotation,
                                    n = this.getDataset(),
                                    o = t.custom || {};
                                return isNaN(o.rotation) ? isNaN(n.pointRotation) && !a.isArray(n.pointRotation) || (i = a.valueAtIndexOrDefault(n.pointRotation, e, i)) : i = o.rotation, i
                            },
                            updateElement: function(t, e, i) {
                                var n, r, s = this,
                                    l = s.getMeta(),
                                    c = t.custom || {},
                                    u = s.getDataset(),
                                    d = s.index,
                                    h = u.data[e],
                                    f = s.getScaleForId(l.yAxisID),
                                    p = s.getScaleForId(l.xAxisID),
                                    v = s.chart.options.elements.point;
                                void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = p.getPixelForValue("object" === o(h) ? h : NaN, e, d), r = i ? f.getBasePixel() : s.calculatePointY(h, e, d), t._xScale = p, t._yScale = f, t._datasetIndex = d, t._index = e, t._model = {
                                    x: n,
                                    y: r,
                                    skip: c.skip || isNaN(n) || isNaN(r),
                                    radius: c.radius || a.valueAtIndexOrDefault(u.pointRadius, e, v.radius),
                                    pointStyle: c.pointStyle || a.valueAtIndexOrDefault(u.pointStyle, e, v.pointStyle),
                                    rotation: s.getPointRotation(t, e),
                                    backgroundColor: s.getPointBackgroundColor(t, e),
                                    borderColor: s.getPointBorderColor(t, e),
                                    borderWidth: s.getPointBorderWidth(t, e),
                                    tension: l.dataset._model ? l.dataset._model.tension : 0,
                                    steppedLine: !!l.dataset._model && l.dataset._model.steppedLine,
                                    hitRadius: c.hitRadius || a.valueAtIndexOrDefault(u.pointHitRadius, e, v.hitRadius)
                                }
                            },
                            calculatePointY: function(t, e, i) {
                                var n, o, r, a = this.chart,
                                    s = this.getMeta(),
                                    l = this.getScaleForId(s.yAxisID),
                                    c = 0,
                                    u = 0;
                                if (l.options.stacked) {
                                    for (n = 0; n < i; n++)
                                        if (o = a.data.datasets[n], "line" === (r = a.getDatasetMeta(n)).type && r.yAxisID === l.id && a.isDatasetVisible(n)) {
                                            var d = Number(l.getRightValue(o.data[e]));
                                            d < 0 ? u += d || 0 : c += d || 0
                                        } var h = Number(l.getRightValue(t));
                                    return h < 0 ? l.getPixelForValue(u + h) : l.getPixelForValue(c + h)
                                }
                                return l.getPixelForValue(t)
                            },
                            updateBezierControlPoints: function() {
                                var t, e, i, n, o = this.getMeta(),
                                    r = this.chart.chartArea,
                                    s = o.data || [];

                                function l(t, e, i) {
                                    return Math.max(Math.min(t, i), e)
                                }
                                if (o.dataset._model.spanGaps && (s = s.filter((function(t) {
                                        return !t._model.skip
                                    }))), "monotone" === o.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(s);
                                else
                                    for (t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = a.splineCurve(a.previousItem(s, t)._model, i, a.nextItem(s, t)._model, o.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                                if (this.chart.options.elements.line.capBezierPoints)
                                    for (t = 0, e = s.length; t < e; ++t)(i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom)
                            },
                            draw: function() {
                                var t, i = this.chart,
                                    n = this.getMeta(),
                                    o = n.data || [],
                                    r = i.chartArea,
                                    s = o.length,
                                    l = 0;
                                for (e(this.getDataset(), i.options) && (t = (n.dataset._model.borderWidth || 0) / 2, a.canvas.clipArea(i.ctx, {
                                        left: r.left,
                                        right: r.right,
                                        top: r.top - t,
                                        bottom: r.bottom + t
                                    }), n.dataset.draw(), a.canvas.unclipArea(i.ctx)); l < s; ++l) o[l].draw(r)
                            },
                            setHoverStyle: function(t) {
                                var e = this.chart.data.datasets[t._datasetIndex],
                                    i = t._index,
                                    n = t.custom || {},
                                    o = t._model;
                                t.$previousStyle = {
                                    backgroundColor: o.backgroundColor,
                                    borderColor: o.borderColor,
                                    borderWidth: o.borderWidth,
                                    radius: o.radius
                                }, o.backgroundColor = n.hoverBackgroundColor || a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.valueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth), o.radius = n.hoverRadius || a.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius)
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                19: [function(t, e, i) {
                    var n = t(26),
                        o = t(41),
                        r = t(46);
                    n._set("polarArea", {
                        scale: {
                            type: "radialLinear",
                            angleLines: {
                                display: !1
                            },
                            gridLines: {
                                circular: !0
                            },
                            pointLabels: {
                                display: !1
                            },
                            ticks: {
                                beginAtZero: !0
                            }
                        },
                        animation: {
                            animateRotate: !0,
                            animateScale: !0
                        },
                        startAngle: -.5 * Math.PI,
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var i = t.data,
                                n = i.datasets,
                                o = i.labels;
                            if (n.length)
                                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function(t) {
                                    var e = t.data;
                                    return e.labels.length && e.datasets.length ? e.labels.map((function(i, n) {
                                        var o = t.getDatasetMeta(0),
                                            a = e.datasets[0],
                                            s = o.data[n].custom || {},
                                            l = r.valueAtIndexOrDefault,
                                            c = t.options.elements.arc;
                                        return {
                                            text: i,
                                            fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, n, c.backgroundColor),
                                            strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, n, c.borderColor),
                                            lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, n, c.borderWidth),
                                            hidden: isNaN(a.data[n]) || o.data[n].hidden,
                                            index: n
                                        }
                                    })) : []
                                }
                            },
                            onClick: function(t, e) {
                                var i, n, o, r = e.index,
                                    a = this.chart;
                                for (i = 0, n = (a.data.datasets || []).length; i < n; ++i)(o = a.getDatasetMeta(i)).data[r].hidden = !o.data[r].hidden;
                                a.update()
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    return e.labels[t.index] + ": " + t.yLabel
                                }
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.polarArea = t.DatasetController.extend({
                            dataElementType: o.Arc,
                            linkScales: r.noop,
                            update: function(t) {
                                var e, i, n, o = this,
                                    a = o.getDataset(),
                                    s = o.getMeta(),
                                    l = o.chart.options.startAngle || 0,
                                    c = o._starts = [],
                                    u = o._angles = [];
                                for (o._updateRadius(), s.count = o.countVisibleElements(), e = 0, i = a.data.length; e < i; e++) c[e] = l, n = o._computeAngle(e), u[e] = n, l += n;
                                r.each(s.data, (function(e, i) {
                                    o.updateElement(e, i, t)
                                }))
                            },
                            _updateRadius: function() {
                                var t = this,
                                    e = t.chart,
                                    i = e.chartArea,
                                    n = e.options,
                                    o = n.elements.arc,
                                    r = Math.min(i.right - i.left, i.bottom - i.top);
                                e.outerRadius = Math.max((r - o.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                            },
                            updateElement: function(t, e, i) {
                                var n = this,
                                    o = n.chart,
                                    a = n.getDataset(),
                                    s = o.options,
                                    l = s.animation,
                                    c = o.scale,
                                    u = o.data.labels,
                                    d = c.xCenter,
                                    h = c.yCenter,
                                    f = s.startAngle,
                                    p = t.hidden ? 0 : c.getDistanceFromCenterForValue(a.data[e]),
                                    v = n._starts[e],
                                    g = v + (t.hidden ? 0 : n._angles[e]),
                                    m = l.animateScale ? 0 : c.getDistanceFromCenterForValue(a.data[e]);
                                r.extend(t, {
                                    _datasetIndex: n.index,
                                    _index: e,
                                    _scale: c,
                                    _model: {
                                        x: d,
                                        y: h,
                                        innerRadius: 0,
                                        outerRadius: i ? m : p,
                                        startAngle: i && l.animateRotate ? f : v,
                                        endAngle: i && l.animateRotate ? f : g,
                                        label: r.valueAtIndexOrDefault(u, e, u[e])
                                    }
                                });
                                var y = this.chart.options.elements.arc,
                                    b = t.custom || {},
                                    x = r.valueAtIndexOrDefault,
                                    w = t._model;
                                w.backgroundColor = b.backgroundColor ? b.backgroundColor : x(a.backgroundColor, e, y.backgroundColor), w.borderColor = b.borderColor ? b.borderColor : x(a.borderColor, e, y.borderColor), w.borderWidth = b.borderWidth ? b.borderWidth : x(a.borderWidth, e, y.borderWidth), t.pivot()
                            },
                            countVisibleElements: function() {
                                var t = this.getDataset(),
                                    e = this.getMeta(),
                                    i = 0;
                                return r.each(e.data, (function(e, n) {
                                    isNaN(t.data[n]) || e.hidden || i++
                                })), i
                            },
                            _computeAngle: function(t) {
                                var e = this,
                                    i = this.getMeta().count,
                                    n = e.getDataset(),
                                    o = e.getMeta();
                                if (isNaN(n.data[t]) || o.data[t].hidden) return 0;
                                var a = {
                                    chart: e.chart,
                                    dataIndex: t,
                                    dataset: n,
                                    datasetIndex: e.index
                                };
                                return r.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / i], a, t)
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                20: [function(t, e, i) {
                    var n = t(26),
                        o = t(41),
                        r = t(46);
                    n._set("radar", {
                        scale: {
                            type: "radialLinear"
                        },
                        elements: {
                            line: {
                                tension: 0
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.radar = t.DatasetController.extend({
                            datasetElementType: o.Line,
                            dataElementType: o.Point,
                            linkScales: r.noop,
                            update: function(t) {
                                var e = this,
                                    i = e.getMeta(),
                                    n = i.dataset,
                                    o = i.data,
                                    a = n.custom || {},
                                    s = e.getDataset(),
                                    l = e.chart.options.elements.line,
                                    c = e.chart.scale;
                                void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(i.dataset, {
                                    _datasetIndex: e.index,
                                    _scale: c,
                                    _children: o,
                                    _loop: !0,
                                    _model: {
                                        tension: a.tension ? a.tension : r.valueOrDefault(s.lineTension, l.tension),
                                        backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                                        borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                                        borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                                        fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                                        borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                        borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                                        borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                        borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                                    }
                                }), i.dataset.pivot(), r.each(o, (function(i, n) {
                                    e.updateElement(i, n, t)
                                }), e), e.updateBezierControlPoints()
                            },
                            updateElement: function(t, e, i) {
                                var n = this,
                                    o = t.custom || {},
                                    a = n.getDataset(),
                                    s = n.chart.scale,
                                    l = n.chart.options.elements.point,
                                    c = s.getPointPositionForValue(e, a.data[e]);
                                void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), r.extend(t, {
                                    _datasetIndex: n.index,
                                    _index: e,
                                    _scale: s,
                                    _model: {
                                        x: i ? s.xCenter : c.x,
                                        y: i ? s.yCenter : c.y,
                                        tension: o.tension ? o.tension : r.valueOrDefault(a.lineTension, n.chart.options.elements.line.tension),
                                        radius: o.radius ? o.radius : r.valueAtIndexOrDefault(a.pointRadius, e, l.radius),
                                        backgroundColor: o.backgroundColor ? o.backgroundColor : r.valueAtIndexOrDefault(a.pointBackgroundColor, e, l.backgroundColor),
                                        borderColor: o.borderColor ? o.borderColor : r.valueAtIndexOrDefault(a.pointBorderColor, e, l.borderColor),
                                        borderWidth: o.borderWidth ? o.borderWidth : r.valueAtIndexOrDefault(a.pointBorderWidth, e, l.borderWidth),
                                        pointStyle: o.pointStyle ? o.pointStyle : r.valueAtIndexOrDefault(a.pointStyle, e, l.pointStyle),
                                        rotation: o.rotation ? o.rotation : r.valueAtIndexOrDefault(a.pointRotation, e, l.rotation),
                                        hitRadius: o.hitRadius ? o.hitRadius : r.valueAtIndexOrDefault(a.pointHitRadius, e, l.hitRadius)
                                    }
                                }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
                            },
                            updateBezierControlPoints: function() {
                                var t = this.chart.chartArea,
                                    e = this.getMeta();
                                r.each(e.data, (function(i, n) {
                                    var o = i._model,
                                        a = r.splineCurve(r.previousItem(e.data, n, !0)._model, o, r.nextItem(e.data, n, !0)._model, o.tension);
                                    o.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), i.pivot()
                                }))
                            },
                            setHoverStyle: function(t) {
                                var e = this.chart.data.datasets[t._datasetIndex],
                                    i = t.custom || {},
                                    n = t._index,
                                    o = t._model;
                                t.$previousStyle = {
                                    backgroundColor: o.backgroundColor,
                                    borderColor: o.borderColor,
                                    borderWidth: o.borderWidth,
                                    radius: o.radius
                                }, o.radius = i.hoverRadius ? i.hoverRadius : r.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, r.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r.valueAtIndexOrDefault(e.pointHoverBorderColor, n, r.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, o.borderWidth)
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                21: [function(t, e, i) {
                    t(26)._set("scatter", {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                id: "x-axis-1",
                                type: "linear",
                                position: "bottom"
                            }],
                            yAxes: [{
                                id: "y-axis-1",
                                type: "linear",
                                position: "left"
                            }]
                        },
                        showLines: !1,
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t) {
                                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                                }
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.scatter = t.controllers.line
                    }
                }, {
                    26: 26
                }],
                22: [function(t, e, i) {
                    var n = t(27);
                    i = e.exports = n.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    });
                    Object.defineProperty(i.prototype, "animationObject", {
                        get: function() {
                            return this
                        }
                    }), Object.defineProperty(i.prototype, "chartInstance", {
                        get: function() {
                            return this.chart
                        },
                        set: function(t) {
                            this.chart = t
                        }
                    })
                }, {
                    27: 27
                }],
                23: [function(t, e, i) {
                    var n = t(26),
                        o = t(46);
                    n._set("global", {
                        animation: {
                            duration: 1e3,
                            easing: "easeOutQuart",
                            onProgress: o.noop,
                            onComplete: o.noop
                        }
                    }), e.exports = {
                        frameDuration: 17,
                        animations: [],
                        dropFrames: 0,
                        request: null,
                        addAnimation: function(t, e, i, n) {
                            var o, r, a = this.animations;
                            for (e.chart = t, n || (t.animating = !0), o = 0, r = a.length; o < r; ++o)
                                if (a[o].chart === t) return void(a[o] = e);
                            a.push(e), 1 === a.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(t) {
                            var e = o.findIndex(this.animations, (function(e) {
                                return e.chart === t
                            })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                        },
                        requestAnimationFrame: function() {
                            var t = this;
                            null === t.request && (t.request = o.requestAnimFrame.call(window, (function() {
                                t.request = null, t.startDigest()
                            })))
                        },
                        startDigest: function() {
                            var t = this,
                                e = Date.now(),
                                i = 0;
                            t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                            var n = Date.now();
                            t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                        },
                        advance: function(t) {
                            for (var e, i, n = this.animations, r = 0; r < n.length;) i = (e = n[r]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(r, 1)) : ++r
                        }
                    }
                }, {
                    26: 26,
                    46: 46
                }],
                24: [function(t, e, i) {
                    var n = t(22),
                        r = t(23),
                        a = t(26),
                        s = t(46),
                        l = t(29),
                        c = t(31),
                        u = t(49),
                        d = t(32),
                        h = t(34),
                        f = t(36);
                    e.exports = function(t) {
                        function e(e) {
                            var i = e.options;
                            s.each(e.scales, (function(t) {
                                c.removeBox(e, t)
                            })), i = s.configMerge(t.defaults.global, t.defaults[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize()
                        }

                        function i(t) {
                            return "top" === t || "bottom" === t
                        }
                        t.types = {}, t.instances = {}, t.controllers = {}, s.extend(t.prototype, {
                            construct: function(e, i) {
                                var n = this;
                                i = function(t) {
                                    var e = (t = t || {}).data = t.data || {};
                                    return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = s.configMerge(a.global, a[t.type], t.options || {}), t
                                }(i);
                                var o = u.acquireContext(e, i),
                                    r = o && o.canvas,
                                    l = r && r.height,
                                    c = r && r.width;
                                n.id = s.uid(), n.ctx = o, n.canvas = r, n.config = i, n.width = c, n.height = l, n.aspectRatio = l ? c / l : null, n.options = i.options, n._bufferedRender = !1, n.chart = n, n.controller = n, t.instances[n.id] = n, Object.defineProperty(n, "data", {
                                    get: function() {
                                        return n.config.data
                                    },
                                    set: function(t) {
                                        n.config.data = t
                                    }
                                }), o && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                            },
                            initialize: function() {
                                var t = this;
                                return d.notify(t, "beforeInit"), s.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), d.notify(t, "afterInit"), t
                            },
                            clear: function() {
                                return s.canvas.clear(this), this
                            },
                            stop: function() {
                                return r.cancelAnimation(this), this
                            },
                            resize: function(t) {
                                var e = this,
                                    i = e.options,
                                    n = e.canvas,
                                    o = i.maintainAspectRatio && e.aspectRatio || null,
                                    r = Math.max(0, Math.floor(s.getMaximumWidth(n))),
                                    a = Math.max(0, Math.floor(o ? r / o : s.getMaximumHeight(n)));
                                if ((e.width !== r || e.height !== a) && (n.width = e.width = r, n.height = e.height = a, n.style.width = r + "px", n.style.height = a + "px", s.retinaScale(e, i.devicePixelRatio), !t)) {
                                    var l = {
                                        width: r,
                                        height: a
                                    };
                                    d.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
                                        duration: e.options.responsiveAnimationDuration
                                    })
                                }
                            },
                            ensureScalesHaveIDs: function() {
                                var t = this.options,
                                    e = t.scales || {},
                                    i = t.scale;
                                s.each(e.xAxes, (function(t, e) {
                                    t.id = t.id || "x-axis-" + e
                                })), s.each(e.yAxes, (function(t, e) {
                                    t.id = t.id || "y-axis-" + e
                                })), i && (i.id = i.id || "scale")
                            },
                            buildOrUpdateScales: function() {
                                var t = this,
                                    e = t.options,
                                    n = t.scales || {},
                                    o = [],
                                    r = Object.keys(n).reduce((function(t, e) {
                                        return t[e] = !1, t
                                    }), {});
                                e.scales && (o = o.concat((e.scales.xAxes || []).map((function(t) {
                                    return {
                                        options: t,
                                        dtype: "category",
                                        dposition: "bottom"
                                    }
                                })), (e.scales.yAxes || []).map((function(t) {
                                    return {
                                        options: t,
                                        dtype: "linear",
                                        dposition: "left"
                                    }
                                })))), e.scale && o.push({
                                    options: e.scale,
                                    dtype: "radialLinear",
                                    isDefault: !0,
                                    dposition: "chartArea"
                                }), s.each(o, (function(e) {
                                    var o = e.options,
                                        a = o.id,
                                        l = s.valueOrDefault(o.type, e.dtype);
                                    i(o.position) !== i(e.dposition) && (o.position = e.dposition), r[a] = !0;
                                    var c = null;
                                    if (a in n && n[a].type === l)(c = n[a]).options = o, c.ctx = t.ctx, c.chart = t;
                                    else {
                                        var u = h.getScaleConstructor(l);
                                        if (!u) return;
                                        c = new u({
                                            id: a,
                                            type: l,
                                            options: o,
                                            ctx: t.ctx,
                                            chart: t
                                        }), n[c.id] = c
                                    }
                                    c.mergeTicksOptions(), e.isDefault && (t.scale = c)
                                })), s.each(r, (function(t, e) {
                                    t || delete n[e]
                                })), t.scales = n, h.addScalesToLayout(this)
                            },
                            buildOrUpdateControllers: function() {
                                var e = this,
                                    i = [],
                                    n = [];
                                return s.each(e.data.datasets, (function(o, r) {
                                    var a = e.getDatasetMeta(r),
                                        s = o.type || e.config.type;
                                    if (a.type && a.type !== s && (e.destroyDatasetMeta(r), a = e.getDatasetMeta(r)), a.type = s, i.push(a.type), a.controller) a.controller.updateIndex(r), a.controller.linkScales();
                                    else {
                                        var l = t.controllers[a.type];
                                        if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                                        a.controller = new l(e, r), n.push(a.controller)
                                    }
                                }), e), n
                            },
                            resetElements: function() {
                                var t = this;
                                s.each(t.data.datasets, (function(e, i) {
                                    t.getDatasetMeta(i).controller.reset()
                                }), t)
                            },
                            reset: function() {
                                this.resetElements(), this.tooltip.initialize()
                            },
                            update: function(t) {
                                var i = this;
                                if (t && "object" === o(t) || (t = {
                                        duration: t,
                                        lazy: arguments[1]
                                    }), e(i), d._invalidate(i), !1 !== d.notify(i, "beforeUpdate")) {
                                    i.tooltip._data = i.data;
                                    var n = i.buildOrUpdateControllers();
                                    s.each(i.data.datasets, (function(t, e) {
                                        i.getDatasetMeta(e).controller.buildOrUpdateElements()
                                    }), i), i.updateLayout(), i.options.animation && i.options.animation.duration && s.each(n, (function(t) {
                                        t.reset()
                                    })), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], d.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
                                        duration: t.duration,
                                        easing: t.easing,
                                        lazy: t.lazy
                                    } : i.render(t)
                                }
                            },
                            updateLayout: function() {
                                !1 !== d.notify(this, "beforeLayout") && (c.update(this, this.width, this.height), d.notify(this, "afterScaleUpdate"), d.notify(this, "afterLayout"))
                            },
                            updateDatasets: function() {
                                if (!1 !== d.notify(this, "beforeDatasetsUpdate")) {
                                    for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                                    d.notify(this, "afterDatasetsUpdate")
                                }
                            },
                            updateDataset: function(t) {
                                var e = this.getDatasetMeta(t),
                                    i = {
                                        meta: e,
                                        index: t
                                    };
                                !1 !== d.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), d.notify(this, "afterDatasetUpdate", [i]))
                            },
                            render: function(t) {
                                var e = this;
                                t && "object" === o(t) || (t = {
                                    duration: t,
                                    lazy: arguments[1]
                                });
                                var i = t.duration,
                                    a = t.lazy;
                                if (!1 !== d.notify(e, "beforeRender")) {
                                    var l = e.options.animation,
                                        c = function(t) {
                                            d.notify(e, "afterRender"), s.callback(l && l.onComplete, [t], e)
                                        };
                                    if (l && (void 0 !== i && 0 !== i || void 0 === i && 0 !== l.duration)) {
                                        var u = new n({
                                            numSteps: (i || l.duration) / 16.66,
                                            easing: t.easing || l.easing,
                                            render: function(t, e) {
                                                var i = s.easing.effects[e.easing],
                                                    n = e.currentStep,
                                                    o = n / e.numSteps;
                                                t.draw(i(o), o, n)
                                            },
                                            onAnimationProgress: l.onProgress,
                                            onAnimationComplete: c
                                        });
                                        r.addAnimation(e, u, i, a)
                                    } else e.draw(), c(new n({
                                        numSteps: 0,
                                        chart: e
                                    }));
                                    return e
                                }
                            },
                            draw: function(t) {
                                var e = this;
                                e.clear(), s.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== d.notify(e, "beforeDraw", [t]) && (s.each(e.boxes, (function(t) {
                                    t.draw(e.chartArea)
                                }), e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), d.notify(e, "afterDraw", [t]))
                            },
                            transition: function(t) {
                                for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                                this.tooltip.transition(t)
                            },
                            drawDatasets: function(t) {
                                var e = this;
                                if (!1 !== d.notify(e, "beforeDatasetsDraw", [t])) {
                                    for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                                    d.notify(e, "afterDatasetsDraw", [t])
                                }
                            },
                            drawDataset: function(t, e) {
                                var i = this.getDatasetMeta(t),
                                    n = {
                                        meta: i,
                                        index: t,
                                        easingValue: e
                                    };
                                !1 !== d.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), d.notify(this, "afterDatasetDraw", [n]))
                            },
                            _drawTooltip: function(t) {
                                var e = this.tooltip,
                                    i = {
                                        tooltip: e,
                                        easingValue: t
                                    };
                                !1 !== d.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), d.notify(this, "afterTooltipDraw", [i]))
                            },
                            getElementAtEvent: function(t) {
                                return l.modes.single(this, t)
                            },
                            getElementsAtEvent: function(t) {
                                return l.modes.label(this, t, {
                                    intersect: !0
                                })
                            },
                            getElementsAtXAxis: function(t) {
                                return l.modes["x-axis"](this, t, {
                                    intersect: !0
                                })
                            },
                            getElementsAtEventForMode: function(t, e, i) {
                                var n = l.modes[e];
                                return "function" == typeof n ? n(this, t, i) : []
                            },
                            getDatasetAtEvent: function(t) {
                                return l.modes.dataset(this, t, {
                                    intersect: !0
                                })
                            },
                            getDatasetMeta: function(t) {
                                var e = this.data.datasets[t];
                                e._meta || (e._meta = {});
                                var i = e._meta[this.id];
                                return i || (i = e._meta[this.id] = {
                                    type: null,
                                    data: [],
                                    dataset: null,
                                    controller: null,
                                    hidden: null,
                                    xAxisID: null,
                                    yAxisID: null
                                }), i
                            },
                            getVisibleDatasetCount: function() {
                                for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                                return t
                            },
                            isDatasetVisible: function(t) {
                                var e = this.getDatasetMeta(t);
                                return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                            },
                            generateLegend: function() {
                                return this.options.legendCallback(this)
                            },
                            destroyDatasetMeta: function(t) {
                                var e = this.id,
                                    i = this.data.datasets[t],
                                    n = i._meta && i._meta[e];
                                n && (n.controller.destroy(), delete i._meta[e])
                            },
                            destroy: function() {
                                var e, i, n = this,
                                    o = n.canvas;
                                for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
                                o && (n.unbindEvents(), s.canvas.clear(n), u.releaseContext(n.ctx), n.canvas = null, n.ctx = null), d.notify(n, "destroy"), delete t.instances[n.id]
                            },
                            toBase64Image: function() {
                                return this.canvas.toDataURL.apply(this.canvas, arguments)
                            },
                            initToolTip: function() {
                                var t = this;
                                t.tooltip = new f({
                                    _chart: t,
                                    _chartInstance: t,
                                    _data: t.data,
                                    _options: t.options.tooltips
                                }, t)
                            },
                            bindEvents: function() {
                                var t = this,
                                    e = t._listeners = {},
                                    i = function() {
                                        t.eventHandler.apply(t, arguments)
                                    };
                                s.each(t.options.events, (function(n) {
                                    u.addEventListener(t, n, i), e[n] = i
                                })), t.options.responsive && (i = function() {
                                    t.resize()
                                }, u.addEventListener(t, "resize", i), e.resize = i)
                            },
                            unbindEvents: function() {
                                var t = this,
                                    e = t._listeners;
                                e && (delete t._listeners, s.each(e, (function(e, i) {
                                    u.removeEventListener(t, i, e)
                                })))
                            },
                            updateHoverStyle: function(t, e, i) {
                                var n, o, r, a = i ? "setHoverStyle" : "removeHoverStyle";
                                for (o = 0, r = t.length; o < r; ++o)(n = t[o]) && this.getDatasetMeta(n._datasetIndex).controller[a](n)
                            },
                            eventHandler: function(t) {
                                var e = this,
                                    i = e.tooltip;
                                if (!1 !== d.notify(e, "beforeEvent", [t])) {
                                    e._bufferedRender = !0, e._bufferedRequest = null;
                                    var n = e.handleEvent(t);
                                    i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), d.notify(e, "afterEvent", [t]);
                                    var o = e._bufferedRequest;
                                    return o ? e.render(o) : n && !e.animating && (e.stop(), e.render({
                                        duration: e.options.hover.animationDuration,
                                        lazy: !0
                                    })), e._bufferedRender = !1, e._bufferedRequest = null, e
                                }
                            },
                            handleEvent: function(t) {
                                var e, i = this,
                                    n = i.options || {},
                                    o = n.hover;
                                return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), s.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !s.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                            }
                        }), t.Controller = t
                    }
                }, {
                    22: 22,
                    23: 23,
                    26: 26,
                    29: 29,
                    31: 31,
                    32: 32,
                    34: 34,
                    36: 36,
                    46: 46,
                    49: 49
                }],
                25: [function(t, e, i) {
                    var n = t(46);
                    e.exports = function(t) {
                        var e = ["push", "pop", "shift", "splice", "unshift"];

                        function i(t, i) {
                            var n = t._chartjs;
                            if (n) {
                                var o = n.listeners,
                                    r = o.indexOf(i); - 1 !== r && o.splice(r, 1), o.length > 0 || (e.forEach((function(e) {
                                    delete t[e]
                                })), delete t._chartjs)
                            }
                        }
                        t.DatasetController = function(t, e) {
                            this.initialize(t, e)
                        }, n.extend(t.DatasetController.prototype, {
                            datasetElementType: null,
                            dataElementType: null,
                            initialize: function(t, e) {
                                this.chart = t, this.index = e, this.linkScales(), this.addElements()
                            },
                            updateIndex: function(t) {
                                this.index = t
                            },
                            linkScales: function() {
                                var t = this,
                                    e = t.getMeta(),
                                    i = t.getDataset();
                                null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
                            },
                            getDataset: function() {
                                return this.chart.data.datasets[this.index]
                            },
                            getMeta: function() {
                                return this.chart.getDatasetMeta(this.index)
                            },
                            getScaleForId: function(t) {
                                return this.chart.scales[t]
                            },
                            reset: function() {
                                this.update(!0)
                            },
                            destroy: function() {
                                this._data && i(this._data, this)
                            },
                            createMetaDataset: function() {
                                var t = this.datasetElementType;
                                return t && new t({
                                    _chart: this.chart,
                                    _datasetIndex: this.index
                                })
                            },
                            createMetaData: function(t) {
                                var e = this.dataElementType;
                                return e && new e({
                                    _chart: this.chart,
                                    _datasetIndex: this.index,
                                    _index: t
                                })
                            },
                            addElements: function() {
                                var t, e, i = this.getMeta(),
                                    n = this.getDataset().data || [],
                                    o = i.data;
                                for (t = 0, e = n.length; t < e; ++t) o[t] = o[t] || this.createMetaData(t);
                                i.dataset = i.dataset || this.createMetaDataset()
                            },
                            addElementAndReset: function(t) {
                                var e = this.createMetaData(t);
                                this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                            },
                            buildOrUpdateElements: function() {
                                var t, o, r = this,
                                    a = r.getDataset(),
                                    s = a.data || (a.data = []);
                                r._data !== s && (r._data && i(r._data, r), o = r, (t = s)._chartjs ? t._chartjs.listeners.push(o) : (Object.defineProperty(t, "_chartjs", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: {
                                        listeners: [o]
                                    }
                                }), e.forEach((function(e) {
                                    var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                        o = t[e];
                                    Object.defineProperty(t, e, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: function() {
                                            var e = Array.prototype.slice.call(arguments),
                                                r = o.apply(this, e);
                                            return n.each(t._chartjs.listeners, (function(t) {
                                                "function" == typeof t[i] && t[i].apply(t, e)
                                            })), r
                                        }
                                    })
                                }))), r._data = s), r.resyncElements()
                            },
                            update: n.noop,
                            transition: function(t) {
                                for (var e = this.getMeta(), i = e.data || [], n = i.length, o = 0; o < n; ++o) i[o].transition(t);
                                e.dataset && e.dataset.transition(t)
                            },
                            draw: function() {
                                var t = this.getMeta(),
                                    e = t.data || [],
                                    i = e.length,
                                    n = 0;
                                for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                            },
                            removeHoverStyle: function(t) {
                                n.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                            },
                            setHoverStyle: function(t) {
                                var e = this.chart.data.datasets[t._datasetIndex],
                                    i = t._index,
                                    o = t.custom || {},
                                    r = n.valueAtIndexOrDefault,
                                    a = n.getHoverColor,
                                    s = t._model;
                                t.$previousStyle = {
                                    backgroundColor: s.backgroundColor,
                                    borderColor: s.borderColor,
                                    borderWidth: s.borderWidth
                                }, s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : r(e.hoverBackgroundColor, i, a(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : r(e.hoverBorderColor, i, a(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : r(e.hoverBorderWidth, i, s.borderWidth)
                            },
                            resyncElements: function() {
                                var t = this.getMeta(),
                                    e = this.getDataset().data,
                                    i = t.data.length,
                                    n = e.length;
                                n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
                            },
                            insertElements: function(t, e) {
                                for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                            },
                            onDataPush: function() {
                                this.insertElements(this.getDataset().data.length - 1, arguments.length)
                            },
                            onDataPop: function() {
                                this.getMeta().data.pop()
                            },
                            onDataShift: function() {
                                this.getMeta().data.shift()
                            },
                            onDataSplice: function(t, e) {
                                this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                            },
                            onDataUnshift: function() {
                                this.insertElements(0, arguments.length)
                            }
                        }), t.DatasetController.extend = n.inherits
                    }
                }, {
                    46: 46
                }],
                26: [function(t, e, i) {
                    var n = t(46);
                    e.exports = {
                        _set: function(t, e) {
                            return n.merge(this[t] || (this[t] = {}), e)
                        }
                    }
                }, {
                    46: 46
                }],
                27: [function(t, e, i) {
                    var n = t(3),
                        r = t(46);
                    var a = function(t) {
                        r.extend(this, t), this.initialize.apply(this, arguments)
                    };
                    r.extend(a.prototype, {
                        initialize: function() {
                            this.hidden = !1
                        },
                        pivot: function() {
                            var t = this;
                            return t._view || (t._view = r.clone(t._model)), t._start = {}, t
                        },
                        transition: function(t) {
                            var e = this,
                                i = e._model,
                                r = e._start,
                                a = e._view;
                            return i && 1 !== t ? (a || (a = e._view = {}), r || (r = e._start = {}), function(t, e, i, r) {
                                var a, s, l, c, u, d, h, f, p, v = Object.keys(i);
                                for (a = 0, s = v.length; a < s; ++a)
                                    if (d = i[l = v[a]], e.hasOwnProperty(l) || (e[l] = d), (c = e[l]) !== d && "_" !== l[0]) {
                                        if (t.hasOwnProperty(l) || (t[l] = c), u = t[l], (h = o(d)) === o(u))
                                            if ("string" === h) {
                                                if ((f = n(u)).valid && (p = n(d)).valid) {
                                                    e[l] = p.mix(f, r).rgbString();
                                                    continue
                                                }
                                            } else if ("number" === h && isFinite(u) && isFinite(d)) {
                                            e[l] = u + (d - u) * r;
                                            continue
                                        }
                                        e[l] = d
                                    }
                            }(r, a, i, t), e) : (e._view = i, e._start = null, e)
                        },
                        tooltipPosition: function() {
                            return {
                                x: this._model.x,
                                y: this._model.y
                            }
                        },
                        hasValue: function() {
                            return r.isNumber(this._model.x) && r.isNumber(this._model.y)
                        }
                    }), a.extend = r.inherits, e.exports = a
                }, {
                    3: 3,
                    46: 46
                }],
                28: [function(t, e, i) {
                    var n = t(3),
                        o = t(26),
                        r = t(46),
                        a = t(34);
                    e.exports = function() {
                        function t(t, e, i) {
                            var n;
                            return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                        }

                        function e(t) {
                            return null != t && "none" !== t
                        }

                        function i(i, n, o) {
                            var a = document.defaultView,
                                s = r._getParentNode(i),
                                l = a.getComputedStyle(i)[n],
                                c = a.getComputedStyle(s)[n],
                                u = e(l),
                                d = e(c),
                                h = Number.POSITIVE_INFINITY;
                            return u || d ? Math.min(u ? t(l, i, o) : h, d ? t(c, s, o) : h) : "none"
                        }
                        r.configMerge = function() {
                            return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                                merger: function(t, e, i, n) {
                                    var o = e[t] || {},
                                        s = i[t];
                                    "scales" === t ? e[t] = r.scaleMerge(o, s) : "scale" === t ? e[t] = r.merge(o, [a.getScaleDefaults(s.type), s]) : r._merger(t, e, i, n)
                                }
                            })
                        }, r.scaleMerge = function() {
                            return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                                merger: function(t, e, i, n) {
                                    if ("xAxes" === t || "yAxes" === t) {
                                        var o, s, l, c = i[t].length;
                                        for (e[t] || (e[t] = []), o = 0; o < c; ++o) l = i[t][o], s = r.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || l.type && l.type !== e[t][o].type ? r.merge(e[t][o], [a.getScaleDefaults(s), l]) : r.merge(e[t][o], l)
                                    } else r._merger(t, e, i, n)
                                }
                            })
                        }, r.where = function(t, e) {
                            if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
                            var i = [];
                            return r.each(t, (function(t) {
                                e(t) && i.push(t)
                            })), i
                        }, r.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                            return t.findIndex(e, i)
                        } : function(t, e, i) {
                            i = void 0 === i ? t : i;
                            for (var n = 0, o = t.length; n < o; ++n)
                                if (e.call(i, t[n], n, t)) return n;
                            return -1
                        }, r.findNextWhere = function(t, e, i) {
                            r.isNullOrUndef(i) && (i = -1);
                            for (var n = i + 1; n < t.length; n++) {
                                var o = t[n];
                                if (e(o)) return o
                            }
                        }, r.findPreviousWhere = function(t, e, i) {
                            r.isNullOrUndef(i) && (i = t.length);
                            for (var n = i - 1; n >= 0; n--) {
                                var o = t[n];
                                if (e(o)) return o
                            }
                        }, r.isNumber = function(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        }, r.almostEquals = function(t, e, i) {
                            return Math.abs(t - e) < i
                        }, r.almostWhole = function(t, e) {
                            var i = Math.round(t);
                            return i - e < t && i + e > t
                        }, r.max = function(t) {
                            return t.reduce((function(t, e) {
                                return isNaN(e) ? t : Math.max(t, e)
                            }), Number.NEGATIVE_INFINITY)
                        }, r.min = function(t) {
                            return t.reduce((function(t, e) {
                                return isNaN(e) ? t : Math.min(t, e)
                            }), Number.POSITIVE_INFINITY)
                        }, r.sign = Math.sign ? function(t) {
                            return Math.sign(t)
                        } : function(t) {
                            return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                        }, r.log10 = Math.log10 ? function(t) {
                            return Math.log10(t)
                        } : function(t) {
                            var e = Math.log(t) * Math.LOG10E,
                                i = Math.round(e);
                            return t === Math.pow(10, i) ? i : e
                        }, r.toRadians = function(t) {
                            return t * (Math.PI / 180)
                        }, r.toDegrees = function(t) {
                            return t * (180 / Math.PI)
                        }, r.getAngleFromPoint = function(t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y,
                                o = Math.sqrt(i * i + n * n),
                                r = Math.atan2(n, i);
                            return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                                angle: r,
                                distance: o
                            }
                        }, r.distanceBetweenPoints = function(t, e) {
                            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                        }, r.aliasPixel = function(t) {
                            return t % 2 == 0 ? 0 : .5
                        }, r.splineCurve = function(t, e, i, n) {
                            var o = t.skip ? e : t,
                                r = e,
                                a = i.skip ? e : i,
                                s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                                l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                                c = s / (s + l),
                                u = l / (s + l),
                                d = n * (c = isNaN(c) ? 0 : c),
                                h = n * (u = isNaN(u) ? 0 : u);
                            return {
                                previous: {
                                    x: r.x - d * (a.x - o.x),
                                    y: r.y - d * (a.y - o.y)
                                },
                                next: {
                                    x: r.x + h * (a.x - o.x),
                                    y: r.y + h * (a.y - o.y)
                                }
                            }
                        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(t) {
                            var e, i, n, o, a, s, l, c, u, d = (t || []).map((function(t) {
                                    return {
                                        model: t._model,
                                        deltaK: 0,
                                        mK: 0
                                    }
                                })),
                                h = d.length;
                            for (e = 0; e < h; ++e)
                                if (!(n = d[e]).model.skip) {
                                    if (i = e > 0 ? d[e - 1] : null, (o = e < h - 1 ? d[e + 1] : null) && !o.model.skip) {
                                        var f = o.model.x - n.model.x;
                                        n.deltaK = 0 !== f ? (o.model.y - n.model.y) / f : 0
                                    }!i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                                } for (e = 0; e < h - 1; ++e) n = d[e], o = d[e + 1], n.model.skip || o.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (a = n.mK / n.deltaK, s = o.mK / n.deltaK, (c = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(c), n.mK = a * l * n.deltaK, o.mK = s * l * n.deltaK)));
                            for (e = 0; e < h; ++e)(n = d[e]).model.skip || (i = e > 0 ? d[e - 1] : null, o = e < h - 1 ? d[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), o && !o.model.skip && (u = (o.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
                        }, r.nextItem = function(t, e, i) {
                            return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                        }, r.previousItem = function(t, e, i) {
                            return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                        }, r.niceNum = function(t, e) {
                            var i = Math.floor(r.log10(t)),
                                n = t / Math.pow(10, i);
                            return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                        }, r.requestAnimFrame = "undefined" == typeof window ? function(t) {
                            t()
                        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                            return window.setTimeout(t, 1e3 / 60)
                        }, r.getRelativePosition = function(t, e) {
                            var i, n, o = t.originalEvent || t,
                                a = t.target || t.srcElement,
                                s = a.getBoundingClientRect(),
                                l = o.touches;
                            l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = o.clientX, n = o.clientY);
                            var c = parseFloat(r.getStyle(a, "padding-left")),
                                u = parseFloat(r.getStyle(a, "padding-top")),
                                d = parseFloat(r.getStyle(a, "padding-right")),
                                h = parseFloat(r.getStyle(a, "padding-bottom")),
                                f = s.right - s.left - c - d,
                                p = s.bottom - s.top - u - h;
                            return {
                                x: i = Math.round((i - s.left - c) / f * a.width / e.currentDevicePixelRatio),
                                y: n = Math.round((n - s.top - u) / p * a.height / e.currentDevicePixelRatio)
                            }
                        }, r.getConstraintWidth = function(t) {
                            return i(t, "max-width", "clientWidth")
                        }, r.getConstraintHeight = function(t) {
                            return i(t, "max-height", "clientHeight")
                        }, r._calculatePadding = function(t, e, i) {
                            return (e = r.getStyle(t, e)).indexOf("%") > -1 ? i / parseInt(e, 10) : parseInt(e, 10)
                        }, r._getParentNode = function(t) {
                            var e = t.parentNode;
                            return e && e.host && (e = e.host), e
                        }, r.getMaximumWidth = function(t) {
                            var e = r._getParentNode(t);
                            if (!e) return t.clientWidth;
                            var i = e.clientWidth,
                                n = i - r._calculatePadding(e, "padding-left", i) - r._calculatePadding(e, "padding-right", i),
                                o = r.getConstraintWidth(t);
                            return isNaN(o) ? n : Math.min(n, o)
                        }, r.getMaximumHeight = function(t) {
                            var e = r._getParentNode(t);
                            if (!e) return t.clientHeight;
                            var i = e.clientHeight,
                                n = i - r._calculatePadding(e, "padding-top", i) - r._calculatePadding(e, "padding-bottom", i),
                                o = r.getConstraintHeight(t);
                            return isNaN(o) ? n : Math.min(n, o)
                        }, r.getStyle = function(t, e) {
                            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                        }, r.retinaScale = function(t, e) {
                            var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                            if (1 !== i) {
                                var n = t.canvas,
                                    o = t.height,
                                    r = t.width;
                                n.height = o * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = o + "px", n.style.width = r + "px")
                            }
                        }, r.fontString = function(t, e, i) {
                            return e + " " + t + "px " + i
                        }, r.longestText = function(t, e, i, n) {
                            var o = (n = n || {}).data = n.data || {},
                                a = n.garbageCollect = n.garbageCollect || [];
                            n.font !== e && (o = n.data = {}, a = n.garbageCollect = [], n.font = e), t.font = e;
                            var s = 0;
                            r.each(i, (function(e) {
                                null != e && !0 !== r.isArray(e) ? s = r.measureText(t, o, a, s, e) : r.isArray(e) && r.each(e, (function(e) {
                                    null == e || r.isArray(e) || (s = r.measureText(t, o, a, s, e))
                                }))
                            }));
                            var l = a.length / 2;
                            if (l > i.length) {
                                for (var c = 0; c < l; c++) delete o[a[c]];
                                a.splice(0, l)
                            }
                            return s
                        }, r.measureText = function(t, e, i, n, o) {
                            var r = e[o];
                            return r || (r = e[o] = t.measureText(o).width, i.push(o)), r > n && (n = r), n
                        }, r.numberOfLabelLines = function(t) {
                            var e = 1;
                            return r.each(t, (function(t) {
                                r.isArray(t) && t.length > e && (e = t.length)
                            })), e
                        }, r.color = n ? function(t) {
                            return t instanceof CanvasGradient && (t = o.global.defaultColor), n(t)
                        } : function(t) {
                            return console.error("Color.js not found!"), t
                        }, r.getHoverColor = function(t) {
                            return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString()
                        }
                    }
                }, {
                    26: 26,
                    3: 3,
                    34: 34,
                    46: 46
                }],
                29: [function(t, e, i) {
                    var n = t(46);

                    function o(t, e) {
                        return t.native ? {
                            x: t.x,
                            y: t.y
                        } : n.getRelativePosition(t, e)
                    }

                    function r(t, e) {
                        var i, n, o, r, a;
                        for (n = 0, r = t.data.datasets.length; n < r; ++n)
                            if (t.isDatasetVisible(n))
                                for (o = 0, a = (i = t.getDatasetMeta(n)).data.length; o < a; ++o) {
                                    var s = i.data[o];
                                    s._view.skip || e(s)
                                }
                    }

                    function a(t, e) {
                        var i = [];
                        return r(t, (function(t) {
                            t.inRange(e.x, e.y) && i.push(t)
                        })), i
                    }

                    function s(t, e, i, n) {
                        var o = Number.POSITIVE_INFINITY,
                            a = [];
                        return r(t, (function(t) {
                            if (!i || t.inRange(e.x, e.y)) {
                                var r = t.getCenterPoint(),
                                    s = n(e, r);
                                s < o ? (a = [t], o = s) : s === o && a.push(t)
                            }
                        })), a
                    }

                    function l(t) {
                        var e = -1 !== t.indexOf("x"),
                            i = -1 !== t.indexOf("y");
                        return function(t, n) {
                            var o = e ? Math.abs(t.x - n.x) : 0,
                                r = i ? Math.abs(t.y - n.y) : 0;
                            return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
                        }
                    }

                    function c(t, e, i) {
                        var n = o(e, t);
                        i.axis = i.axis || "x";
                        var r = l(i.axis),
                            c = i.intersect ? a(t, n) : s(t, n, !1, r),
                            u = [];
                        return c.length ? (t.data.datasets.forEach((function(e, i) {
                            if (t.isDatasetVisible(i)) {
                                var n = t.getDatasetMeta(i).data[c[0]._index];
                                n && !n._view.skip && u.push(n)
                            }
                        })), u) : []
                    }
                    e.exports = {
                        modes: {
                            single: function(t, e) {
                                var i = o(e, t),
                                    n = [];
                                return r(t, (function(t) {
                                    if (t.inRange(i.x, i.y)) return n.push(t), n
                                })), n.slice(0, 1)
                            },
                            label: c,
                            index: c,
                            dataset: function(t, e, i) {
                                var n = o(e, t);
                                i.axis = i.axis || "xy";
                                var r = l(i.axis),
                                    c = i.intersect ? a(t, n) : s(t, n, !1, r);
                                return c.length > 0 && (c = t.getDatasetMeta(c[0]._datasetIndex).data), c
                            },
                            "x-axis": function(t, e) {
                                return c(t, e, {
                                    intersect: !1
                                })
                            },
                            point: function(t, e) {
                                return a(t, o(e, t))
                            },
                            nearest: function(t, e, i) {
                                var n = o(e, t);
                                i.axis = i.axis || "xy";
                                var r = l(i.axis),
                                    a = s(t, n, i.intersect, r);
                                return a.length > 1 && a.sort((function(t, e) {
                                    var i = t.getArea() - e.getArea();
                                    return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                                })), a.slice(0, 1)
                            },
                            x: function(t, e, i) {
                                var n = o(e, t),
                                    a = [],
                                    s = !1;
                                return r(t, (function(t) {
                                    t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (s = !0)
                                })), i.intersect && !s && (a = []), a
                            },
                            y: function(t, e, i) {
                                var n = o(e, t),
                                    a = [],
                                    s = !1;
                                return r(t, (function(t) {
                                    t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (s = !0)
                                })), i.intersect && !s && (a = []), a
                            }
                        }
                    }
                }, {
                    46: 46
                }],
                30: [function(t, e, i) {
                    t(26)._set("global", {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {
                            onHover: null,
                            mode: "nearest",
                            intersect: !0,
                            animationDuration: 400
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        layout: {
                            padding: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }
                        }
                    }), e.exports = function() {
                        var t = function(t, e) {
                            return this.construct(t, e), this
                        };
                        return t.Chart = t, t
                    }
                }, {
                    26: 26
                }],
                31: [function(t, e, i) {
                    var n = t(46);

                    function o(t, e) {
                        return n.where(t, (function(t) {
                            return t.position === e
                        }))
                    }

                    function r(t, e) {
                        t.forEach((function(t, e) {
                            return t._tmpIndex_ = e, t
                        })), t.sort((function(t, i) {
                            var n = e ? i : t,
                                o = e ? t : i;
                            return n.weight === o.weight ? n._tmpIndex_ - o._tmpIndex_ : n.weight - o.weight
                        })), t.forEach((function(t) {
                            delete t._tmpIndex_
                        }))
                    }
                    e.exports = {
                        defaults: {},
                        addBox: function(t, e) {
                            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                        },
                        removeBox: function(t, e) {
                            var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                        },
                        configure: function(t, e, i) {
                            for (var n, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a) n = o[a], i.hasOwnProperty(n) && (e[n] = i[n])
                        },
                        update: function(t, e, i) {
                            if (t) {
                                var a = t.options.layout || {},
                                    s = n.options.toPadding(a.padding),
                                    l = s.left,
                                    c = s.right,
                                    u = s.top,
                                    d = s.bottom,
                                    h = o(t.boxes, "left"),
                                    f = o(t.boxes, "right"),
                                    p = o(t.boxes, "top"),
                                    v = o(t.boxes, "bottom"),
                                    g = o(t.boxes, "chartArea");
                                r(h, !0), r(f, !1), r(p, !0), r(v, !1);
                                var m = e - l - c,
                                    y = i - u - d,
                                    b = y / 2,
                                    x = (e - m / 2) / (h.length + f.length),
                                    w = (i - b) / (p.length + v.length),
                                    k = m,
                                    S = y,
                                    C = [];
                                n.each(h.concat(f, p, v), (function(t) {
                                    var e, i = t.isHorizontal();
                                    i ? (e = t.update(t.fullWidth ? m : k, w), S -= e.height) : (e = t.update(x, S), k -= e.width), C.push({
                                        horizontal: i,
                                        minSize: e,
                                        box: t
                                    })
                                }));
                                var T = 0,
                                    M = 0,
                                    A = 0,
                                    O = 0;
                                n.each(p.concat(v), (function(t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        T = Math.max(T, e.left), M = Math.max(M, e.right)
                                    }
                                })), n.each(h.concat(f), (function(t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        A = Math.max(A, e.top), O = Math.max(O, e.bottom)
                                    }
                                }));
                                var I = l,
                                    P = c,
                                    _ = u,
                                    E = d;
                                n.each(h.concat(f), N), n.each(h, (function(t) {
                                    I += t.width
                                })), n.each(f, (function(t) {
                                    P += t.width
                                })), n.each(p.concat(v), N), n.each(p, (function(t) {
                                    _ += t.height
                                })), n.each(v, (function(t) {
                                    E += t.height
                                })), n.each(h.concat(f), (function(t) {
                                    var e = n.findNextWhere(C, (function(e) {
                                            return e.box === t
                                        })),
                                        i = {
                                            left: 0,
                                            right: 0,
                                            top: _,
                                            bottom: E
                                        };
                                    e && t.update(e.minSize.width, S, i)
                                })), I = l, P = c, _ = u, E = d, n.each(h, (function(t) {
                                    I += t.width
                                })), n.each(f, (function(t) {
                                    P += t.width
                                })), n.each(p, (function(t) {
                                    _ += t.height
                                })), n.each(v, (function(t) {
                                    E += t.height
                                }));
                                var D = Math.max(T - I, 0);
                                I += D, P += Math.max(M - P, 0);
                                var $ = Math.max(A - _, 0);
                                _ += $, E += Math.max(O - E, 0);
                                var L = i - _ - E,
                                    R = e - I - P;
                                R === k && L === S || (n.each(h, (function(t) {
                                    t.height = L
                                })), n.each(f, (function(t) {
                                    t.height = L
                                })), n.each(p, (function(t) {
                                    t.fullWidth || (t.width = R)
                                })), n.each(v, (function(t) {
                                    t.fullWidth || (t.width = R)
                                })), S = L, k = R);
                                var F = l + D,
                                    W = u + $;
                                n.each(h.concat(p), V), F += k, W += S, n.each(f, V), n.each(v, V), t.chartArea = {
                                    left: I,
                                    top: _,
                                    right: I + k,
                                    bottom: _ + S
                                }, n.each(g, (function(e) {
                                    e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S)
                                }))
                            }

                            function N(t) {
                                var e = n.findNextWhere(C, (function(e) {
                                    return e.box === t
                                }));
                                if (e)
                                    if (t.isHorizontal()) {
                                        var i = {
                                            left: Math.max(I, T),
                                            right: Math.max(P, M),
                                            top: 0,
                                            bottom: 0
                                        };
                                        t.update(t.fullWidth ? m : k, y / 2, i)
                                    } else t.update(e.minSize.width, S)
                            }

                            function V(t) {
                                t.isHorizontal() ? (t.left = t.fullWidth ? l : I, t.right = t.fullWidth ? e - c : I + k, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = F, t.right = F + t.width, t.top = _, t.bottom = _ + S, F = t.right)
                            }
                        }
                    }
                }, {
                    46: 46
                }],
                32: [function(t, e, i) {
                    var n = t(26),
                        o = t(46);
                    n._set("global", {
                        plugins: {}
                    }), e.exports = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                -1 === e.indexOf(t) && e.push(t)
                            })), this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                            })), this._cacheId++
                        },
                        clear: function() {
                            this._plugins = [], this._cacheId++
                        },
                        count: function() {
                            return this._plugins.length
                        },
                        getAll: function() {
                            return this._plugins
                        },
                        notify: function(t, e, i) {
                            var n, o, r, a, s, l = this.descriptors(t),
                                c = l.length;
                            for (n = 0; n < c; ++n)
                                if ("function" == typeof(s = (r = (o = l[n]).plugin)[e]) && ((a = [t].concat(i || [])).push(o.options), !1 === s.apply(r, a))) return !1;
                            return !0
                        },
                        descriptors: function(t) {
                            var e = t.$plugins || (t.$plugins = {});
                            if (e.id === this._cacheId) return e.descriptors;
                            var i = [],
                                r = [],
                                a = t && t.config || {},
                                s = a.options && a.options.plugins || {};
                            return this._plugins.concat(a.plugins || []).forEach((function(t) {
                                if (-1 === i.indexOf(t)) {
                                    var e = t.id,
                                        a = s[e];
                                    !1 !== a && (!0 === a && (a = o.clone(n.global.plugins[e])), i.push(t), r.push({
                                        plugin: t,
                                        options: a || {}
                                    }))
                                }
                            })), e.descriptors = r, e.id = this._cacheId, r
                        },
                        _invalidate: function(t) {
                            delete t.$plugins
                        }
                    }
                }, {
                    26: 26,
                    46: 46
                }],
                33: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46),
                        a = t(35);

                    function s(t) {
                        var e, i, n = [];
                        for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                        return n
                    }

                    function l(t, e, i) {
                        var n = t.getPixelForTick(e);
                        return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
                    }

                    function c(t, e, i) {
                        return r.isArray(e) ? r.longestText(t, i, e) : t.measureText(e).width
                    }

                    function u(t) {
                        var e = r.valueOrDefault,
                            i = n.global,
                            o = e(t.fontSize, i.defaultFontSize),
                            a = e(t.fontStyle, i.defaultFontStyle),
                            s = e(t.fontFamily, i.defaultFontFamily);
                        return {
                            size: o,
                            style: a,
                            family: s,
                            font: r.fontString(o, a, s)
                        }
                    }

                    function d(t) {
                        return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, n.global.defaultFontSize))
                    }
                    n._set("scale", {
                        display: !0,
                        position: "left",
                        offset: !1,
                        gridLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1,
                            drawBorder: !0,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickMarkLength: 10,
                            zeroLineWidth: 1,
                            zeroLineColor: "rgba(0,0,0,0.25)",
                            zeroLineBorderDash: [],
                            zeroLineBorderDashOffset: 0,
                            offsetGridLines: !1,
                            borderDash: [],
                            borderDashOffset: 0
                        },
                        scaleLabel: {
                            display: !1,
                            labelString: "",
                            lineHeight: 1.2,
                            padding: {
                                top: 4,
                                bottom: 4
                            }
                        },
                        ticks: {
                            beginAtZero: !1,
                            minRotation: 0,
                            maxRotation: 50,
                            mirror: !1,
                            padding: 0,
                            reverse: !1,
                            display: !0,
                            autoSkip: !0,
                            autoSkipPadding: 0,
                            labelOffset: 0,
                            callback: a.formatters.values,
                            minor: {},
                            major: {}
                        }
                    }), e.exports = o.extend({
                        getPadding: function() {
                            return {
                                left: this.paddingLeft || 0,
                                top: this.paddingTop || 0,
                                right: this.paddingRight || 0,
                                bottom: this.paddingBottom || 0
                            }
                        },
                        getTicks: function() {
                            return this._ticks
                        },
                        mergeTicksOptions: function() {
                            var t = this.options.ticks;
                            for (var e in !1 === t.minor && (t.minor = {
                                    display: !1
                                }), !1 === t.major && (t.major = {
                                    display: !1
                                }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                        },
                        beforeUpdate: function() {
                            r.callback(this.options.beforeUpdate, [this])
                        },
                        update: function(t, e, i) {
                            var n, o, a, s, l, c, u = this;
                            for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = r.extend({
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0
                                }, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), l = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), a = u.convertTicksToLabels(l) || u.ticks, u.afterTickToLabelConversion(), u.ticks = a, n = 0, o = a.length; n < o; ++n) s = a[n], (c = l[n]) ? c.label = s : l.push(c = {
                                label: s,
                                major: !1
                            });
                            return u._ticks = l, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                        },
                        afterUpdate: function() {
                            r.callback(this.options.afterUpdate, [this])
                        },
                        beforeSetDimensions: function() {
                            r.callback(this.options.beforeSetDimensions, [this])
                        },
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                        },
                        afterSetDimensions: function() {
                            r.callback(this.options.afterSetDimensions, [this])
                        },
                        beforeDataLimits: function() {
                            r.callback(this.options.beforeDataLimits, [this])
                        },
                        determineDataLimits: r.noop,
                        afterDataLimits: function() {
                            r.callback(this.options.afterDataLimits, [this])
                        },
                        beforeBuildTicks: function() {
                            r.callback(this.options.beforeBuildTicks, [this])
                        },
                        buildTicks: r.noop,
                        afterBuildTicks: function() {
                            r.callback(this.options.afterBuildTicks, [this])
                        },
                        beforeTickToLabelConversion: function() {
                            r.callback(this.options.beforeTickToLabelConversion, [this])
                        },
                        convertTicksToLabels: function() {
                            var t = this.options.ticks;
                            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                        },
                        afterTickToLabelConversion: function() {
                            r.callback(this.options.afterTickToLabelConversion, [this])
                        },
                        beforeCalculateTickRotation: function() {
                            r.callback(this.options.beforeCalculateTickRotation, [this])
                        },
                        calculateTickRotation: function() {
                            var t = this,
                                e = t.ctx,
                                i = t.options.ticks,
                                n = s(t._ticks),
                                o = u(i);
                            e.font = o.font;
                            var a = i.minRotation || 0;
                            if (n.length && t.options.display && t.isHorizontal())
                                for (var l, c = r.longestText(e, o.font, n, t.longestTextCache), d = c, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > h && a < i.maxRotation;) {
                                    var f = r.toRadians(a);
                                    if (l = Math.cos(f), Math.sin(f) * c > t.maxHeight) {
                                        a--;
                                        break
                                    }
                                    a++, d = l * c
                                }
                            t.labelRotation = a
                        },
                        afterCalculateTickRotation: function() {
                            r.callback(this.options.afterCalculateTickRotation, [this])
                        },
                        beforeFit: function() {
                            r.callback(this.options.beforeFit, [this])
                        },
                        fit: function() {
                            var t = this,
                                e = t.minSize = {
                                    width: 0,
                                    height: 0
                                },
                                i = s(t._ticks),
                                n = t.options,
                                o = n.ticks,
                                a = n.scaleLabel,
                                l = n.gridLines,
                                h = n.display,
                                f = t.isHorizontal(),
                                p = u(o),
                                v = n.gridLines.tickMarkLength;
                            if (e.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && l.drawTicks ? v : 0, e.height = f ? h && l.drawTicks ? v : 0 : t.maxHeight, a.display && h) {
                                var g = d(a) + r.options.toPadding(a.padding).height;
                                f ? e.height += g : e.width += g
                            }
                            if (o.display && h) {
                                var m = r.longestText(t.ctx, p.font, i, t.longestTextCache),
                                    y = r.numberOfLabelLines(i),
                                    b = .5 * p.size,
                                    x = t.options.ticks.padding;
                                if (f) {
                                    t.longestLabelWidth = m;
                                    var w = r.toRadians(t.labelRotation),
                                        k = Math.cos(w),
                                        S = Math.sin(w) * m + p.size * y + b * (y - 1) + b;
                                    e.height = Math.min(t.maxHeight, e.height + S + x), t.ctx.font = p.font;
                                    var C = c(t.ctx, i[0], p.font),
                                        T = c(t.ctx, i[i.length - 1], p.font);
                                    0 !== t.labelRotation ? (t.paddingLeft = "bottom" === n.position ? k * C + 3 : k * b + 3, t.paddingRight = "bottom" === n.position ? k * b + 3 : k * T + 3) : (t.paddingLeft = C / 2 + 3, t.paddingRight = T / 2 + 3)
                                } else o.mirror ? m = 0 : m += x + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                            }
                            t.handleMargins(), t.width = e.width, t.height = e.height
                        },
                        handleMargins: function() {
                            var t = this;
                            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                        },
                        afterFit: function() {
                            r.callback(this.options.afterFit, [this])
                        },
                        isHorizontal: function() {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        isFullWidth: function() {
                            return this.options.fullWidth
                        },
                        getRightValue: function(t) {
                            if (r.isNullOrUndef(t)) return NaN;
                            if ("number" == typeof t && !isFinite(t)) return NaN;
                            if (t)
                                if (this.isHorizontal()) {
                                    if (void 0 !== t.x) return this.getRightValue(t.x)
                                } else if (void 0 !== t.y) return this.getRightValue(t.y);
                            return t
                        },
                        getLabelForIndex: r.noop,
                        getPixelForValue: r.noop,
                        getValueForPixel: r.noop,
                        getPixelForTick: function(t) {
                            var e = this,
                                i = e.options.offset;
                            if (e.isHorizontal()) {
                                var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                    o = n * t + e.paddingLeft;
                                i && (o += n / 2);
                                var r = e.left + Math.round(o);
                                return r += e.isFullWidth() ? e.margins.left : 0
                            }
                            var a = e.height - (e.paddingTop + e.paddingBottom);
                            return e.top + t * (a / (e._ticks.length - 1))
                        },
                        getPixelForDecimal: function(t) {
                            var e = this;
                            if (e.isHorizontal()) {
                                var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                    n = e.left + Math.round(i);
                                return n += e.isFullWidth() ? e.margins.left : 0
                            }
                            return e.top + t * e.height
                        },
                        getBasePixel: function() {
                            return this.getPixelForValue(this.getBaseValue())
                        },
                        getBaseValue: function() {
                            var t = this.min,
                                e = this.max;
                            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                        },
                        _autoSkip: function(t) {
                            var e, i, n, o, a = this,
                                s = a.isHorizontal(),
                                l = a.options.ticks.minor,
                                c = t.length,
                                u = r.toRadians(a.labelRotation),
                                d = Math.cos(u),
                                h = a.longestLabelWidth * d,
                                f = [];
                            for (l.maxTicksLimit && (o = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * c > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * c / (a.width - (a.paddingLeft + a.paddingRight)))), o && c > o && (e = Math.max(e, Math.floor(c / o)))), i = 0; i < c; i++) n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= c) && i !== c - 1 && delete n.label, f.push(n);
                            return f
                        },
                        draw: function(t) {
                            var e = this,
                                i = e.options;
                            if (i.display) {
                                var o = e.ctx,
                                    a = n.global,
                                    s = i.ticks.minor,
                                    c = i.ticks.major || s,
                                    h = i.gridLines,
                                    f = i.scaleLabel,
                                    p = 0 !== e.labelRotation,
                                    v = e.isHorizontal(),
                                    g = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                    m = r.valueOrDefault(s.fontColor, a.defaultFontColor),
                                    y = u(s),
                                    b = r.valueOrDefault(c.fontColor, a.defaultFontColor),
                                    x = u(c),
                                    w = h.drawTicks ? h.tickMarkLength : 0,
                                    k = r.valueOrDefault(f.fontColor, a.defaultFontColor),
                                    S = u(f),
                                    C = r.options.toPadding(f.padding),
                                    T = r.toRadians(e.labelRotation),
                                    M = [],
                                    A = e.options.gridLines.lineWidth,
                                    O = "right" === i.position ? e.left : e.right - A - w,
                                    I = "right" === i.position ? e.left + w : e.right,
                                    P = "bottom" === i.position ? e.top + A : e.bottom - w - A,
                                    _ = "bottom" === i.position ? e.top + A + w : e.bottom + A;
                                if (r.each(g, (function(n, o) {
                                        if (!r.isNullOrUndef(n.label)) {
                                            var c, u, d, f, m, y, b, x, k, S, C, E, D, $, L = n.label;
                                            o === e.zeroLineIndex && i.offset === h.offsetGridLines ? (c = h.zeroLineWidth, u = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (c = r.valueAtIndexOrDefault(h.lineWidth, o), u = r.valueAtIndexOrDefault(h.color, o), d = r.valueOrDefault(h.borderDash, a.borderDash), f = r.valueOrDefault(h.borderDashOffset, a.borderDashOffset));
                                            var R = "middle",
                                                F = "middle",
                                                W = s.padding;
                                            if (v) {
                                                var N = w + W;
                                                "bottom" === i.position ? (F = p ? "middle" : "top", R = p ? "right" : "center", $ = e.top + N) : (F = p ? "middle" : "bottom", R = p ? "left" : "center", $ = e.bottom - N);
                                                var V = l(e, o, h.offsetGridLines && g.length > 1);
                                                V < e.left && (u = "rgba(0,0,0,0)"), V += r.aliasPixel(c), D = e.getPixelForTick(o) + s.labelOffset, m = b = k = C = V, y = P, x = _, S = t.top, E = t.bottom + A
                                            } else {
                                                var j, H = "left" === i.position;
                                                s.mirror ? (R = H ? "left" : "right", j = W) : (R = H ? "right" : "left", j = w + W), D = H ? e.right - j : e.left + j;
                                                var z = l(e, o, h.offsetGridLines && g.length > 1);
                                                z < e.top && (u = "rgba(0,0,0,0)"), z += r.aliasPixel(c), $ = e.getPixelForTick(o) + s.labelOffset, m = O, b = I, k = t.left, C = t.right + A, y = x = S = E = z
                                            }
                                            M.push({
                                                tx1: m,
                                                ty1: y,
                                                tx2: b,
                                                ty2: x,
                                                x1: k,
                                                y1: S,
                                                x2: C,
                                                y2: E,
                                                labelX: D,
                                                labelY: $,
                                                glWidth: c,
                                                glColor: u,
                                                glBorderDash: d,
                                                glBorderDashOffset: f,
                                                rotation: -1 * T,
                                                label: L,
                                                major: n.major,
                                                textBaseline: F,
                                                textAlign: R
                                            })
                                        }
                                    })), r.each(M, (function(t) {
                                        if (h.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), h.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), s.display) {
                                            o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? x.font : y.font, o.fillStyle = t.major ? b : m, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
                                            var i = t.label;
                                            if (r.isArray(i))
                                                for (var n = i.length, a = 1.5 * y.size, l = e.isHorizontal() ? 0 : -a * (n - 1) / 2, c = 0; c < n; ++c) o.fillText("" + i[c], 0, l), l += a;
                                            else o.fillText(i, 0, 0);
                                            o.restore()
                                        }
                                    })), f.display) {
                                    var E, D, $ = 0,
                                        L = d(f) / 2;
                                    if (v) E = e.left + (e.right - e.left) / 2, D = "bottom" === i.position ? e.bottom - L - C.bottom : e.top + L + C.top;
                                    else {
                                        var R = "left" === i.position;
                                        E = R ? e.left + L + C.top : e.right - L - C.top, D = e.top + (e.bottom - e.top) / 2, $ = R ? -.5 * Math.PI : .5 * Math.PI
                                    }
                                    o.save(), o.translate(E, D), o.rotate($), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = k, o.font = S.font, o.fillText(f.labelString, 0, 0), o.restore()
                                }
                                if (h.drawBorder) {
                                    o.lineWidth = r.valueAtIndexOrDefault(h.lineWidth, 0), o.strokeStyle = r.valueAtIndexOrDefault(h.color, 0);
                                    var F = e.left,
                                        W = e.right + A,
                                        N = e.top,
                                        V = e.bottom + A,
                                        j = r.aliasPixel(o.lineWidth);
                                    v ? (N = V = "top" === i.position ? e.bottom : e.top, N += j, V += j) : (F = W = "left" === i.position ? e.right : e.left, F += j, W += j), o.beginPath(), o.moveTo(F, N), o.lineTo(W, V), o.stroke()
                                }
                            }
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    35: 35,
                    46: 46
                }],
                34: [function(t, e, i) {
                    var n = t(26),
                        o = t(46),
                        r = t(31);
                    e.exports = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function(t, e, i) {
                            this.constructors[t] = e, this.defaults[t] = o.clone(i)
                        },
                        getScaleConstructor: function(t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        },
                        getScaleDefaults: function(t) {
                            return this.defaults.hasOwnProperty(t) ? o.merge({}, [n.scale, this.defaults[t]]) : {}
                        },
                        updateScaleDefaults: function(t, e) {
                            this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e))
                        },
                        addScalesToLayout: function(t) {
                            o.each(t.scales, (function(e) {
                                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, r.addBox(t, e)
                            }))
                        }
                    }
                }, {
                    26: 26,
                    31: 31,
                    46: 46
                }],
                35: [function(t, e, i) {
                    var n = t(46);
                    e.exports = {
                        formatters: {
                            values: function(t) {
                                return n.isArray(t) ? t : "" + t
                            },
                            linear: function(t, e, i) {
                                var o = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                                Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
                                var r = n.log10(Math.abs(o)),
                                    a = "";
                                if (0 !== t)
                                    if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                                        var s = n.log10(Math.abs(t));
                                        a = t.toExponential(Math.floor(s) - Math.floor(r))
                                    } else {
                                        var l = -1 * Math.floor(r);
                                        l = Math.max(Math.min(l, 20), 0), a = t.toFixed(l)
                                    }
                                else a = "0";
                                return a
                            },
                            logarithmic: function(t, e, i) {
                                var o = t / Math.pow(10, Math.floor(n.log10(t)));
                                return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                            }
                        }
                    }
                }, {
                    46: 46
                }],
                36: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46);
                    n._set("global", {
                        tooltips: {
                            enabled: !0,
                            custom: null,
                            mode: "nearest",
                            position: "average",
                            intersect: !0,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            titleFontStyle: "bold",
                            titleSpacing: 2,
                            titleMarginBottom: 6,
                            titleFontColor: "#fff",
                            titleAlign: "left",
                            bodySpacing: 2,
                            bodyFontColor: "#fff",
                            bodyAlign: "left",
                            footerFontStyle: "bold",
                            footerSpacing: 2,
                            footerMarginTop: 6,
                            footerFontColor: "#fff",
                            footerAlign: "left",
                            yPadding: 6,
                            xPadding: 6,
                            caretPadding: 2,
                            caretSize: 5,
                            cornerRadius: 6,
                            multiKeyBackground: "#fff",
                            displayColors: !0,
                            borderColor: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            callbacks: {
                                beforeTitle: r.noop,
                                title: function(t, e) {
                                    var i = "",
                                        n = e.labels,
                                        o = n ? n.length : 0;
                                    if (t.length > 0) {
                                        var r = t[0];
                                        r.xLabel ? i = r.xLabel : o > 0 && r.index < o && (i = n[r.index])
                                    }
                                    return i
                                },
                                afterTitle: r.noop,
                                beforeBody: r.noop,
                                beforeLabel: r.noop,
                                label: function(t, e) {
                                    var i = e.datasets[t.datasetIndex].label || "";
                                    return i && (i += ": "), i += t.yLabel, i
                                },
                                labelColor: function(t, e) {
                                    var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                    return {
                                        borderColor: i.borderColor,
                                        backgroundColor: i.backgroundColor
                                    }
                                },
                                labelTextColor: function() {
                                    return this._options.bodyFontColor
                                },
                                afterLabel: r.noop,
                                afterBody: r.noop,
                                beforeFooter: r.noop,
                                footer: r.noop,
                                afterFooter: r.noop
                            }
                        }
                    });
                    var a = {
                        average: function(t) {
                            if (!t.length) return !1;
                            var e, i, n = 0,
                                o = 0,
                                r = 0;
                            for (e = 0, i = t.length; e < i; ++e) {
                                var a = t[e];
                                if (a && a.hasValue()) {
                                    var s = a.tooltipPosition();
                                    n += s.x, o += s.y, ++r
                                }
                            }
                            return {
                                x: Math.round(n / r),
                                y: Math.round(o / r)
                            }
                        },
                        nearest: function(t, e) {
                            var i, n, o, a = e.x,
                                s = e.y,
                                l = Number.POSITIVE_INFINITY;
                            for (i = 0, n = t.length; i < n; ++i) {
                                var c = t[i];
                                if (c && c.hasValue()) {
                                    var u = c.getCenterPoint(),
                                        d = r.distanceBetweenPoints(e, u);
                                    d < l && (l = d, o = c)
                                }
                            }
                            if (o) {
                                var h = o.tooltipPosition();
                                a = h.x, s = h.y
                            }
                            return {
                                x: a,
                                y: s
                            }
                        }
                    };

                    function s(t, e) {
                        var i = r.color(t);
                        return i.alpha(e * i.alpha()).rgbaString()
                    }

                    function l(t, e) {
                        return e && (r.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                    }

                    function c(t) {
                        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
                    }

                    function u(t) {
                        var e = n.global,
                            i = r.valueOrDefault;
                        return {
                            xPadding: t.xPadding,
                            yPadding: t.yPadding,
                            xAlign: t.xAlign,
                            yAlign: t.yAlign,
                            bodyFontColor: t.bodyFontColor,
                            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                            _bodyAlign: t.bodyAlign,
                            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                            bodySpacing: t.bodySpacing,
                            titleFontColor: t.titleFontColor,
                            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                            _titleAlign: t.titleAlign,
                            titleSpacing: t.titleSpacing,
                            titleMarginBottom: t.titleMarginBottom,
                            footerFontColor: t.footerFontColor,
                            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                            _footerAlign: t.footerAlign,
                            footerSpacing: t.footerSpacing,
                            footerMarginTop: t.footerMarginTop,
                            caretSize: t.caretSize,
                            cornerRadius: t.cornerRadius,
                            backgroundColor: t.backgroundColor,
                            opacity: 0,
                            legendColorBackground: t.multiKeyBackground,
                            displayColors: t.displayColors,
                            borderColor: t.borderColor,
                            borderWidth: t.borderWidth
                        }
                    }

                    function d(t) {
                        return l([], c(t))
                    }(e.exports = o.extend({
                        initialize: function() {
                            this._model = u(this._options), this._lastActive = []
                        },
                        getTitle: function() {
                            var t = this,
                                e = t._options,
                                i = e.callbacks,
                                n = i.beforeTitle.apply(t, arguments),
                                o = i.title.apply(t, arguments),
                                r = i.afterTitle.apply(t, arguments),
                                a = [];
                            return a = l(a, c(n)), a = l(a, c(o)), a = l(a, c(r))
                        },
                        getBeforeBody: function() {
                            return d(this._options.callbacks.beforeBody.apply(this, arguments))
                        },
                        getBody: function(t, e) {
                            var i = this,
                                n = i._options.callbacks,
                                o = [];
                            return r.each(t, (function(t) {
                                var r = {
                                    before: [],
                                    lines: [],
                                    after: []
                                };
                                l(r.before, c(n.beforeLabel.call(i, t, e))), l(r.lines, n.label.call(i, t, e)), l(r.after, c(n.afterLabel.call(i, t, e))), o.push(r)
                            })), o
                        },
                        getAfterBody: function() {
                            return d(this._options.callbacks.afterBody.apply(this, arguments))
                        },
                        getFooter: function() {
                            var t = this,
                                e = t._options.callbacks,
                                i = e.beforeFooter.apply(t, arguments),
                                n = e.footer.apply(t, arguments),
                                o = e.afterFooter.apply(t, arguments),
                                r = [];
                            return r = l(r, c(i)), r = l(r, c(n)), r = l(r, c(o))
                        },
                        update: function(t) {
                            var e, i, n, o, s, l, c, d = this,
                                h = d._options,
                                f = d._model,
                                p = d._model = u(h),
                                v = d._active,
                                g = d._data,
                                m = {
                                    xAlign: f.xAlign,
                                    yAlign: f.yAlign
                                },
                                y = {
                                    x: f.x,
                                    y: f.y
                                },
                                b = {
                                    width: f.width,
                                    height: f.height
                                },
                                x = {
                                    x: f.caretX,
                                    y: f.caretY
                                };
                            if (v.length) {
                                p.opacity = 1;
                                var w = [],
                                    k = [];
                                x = a[h.position].call(d, v, d._eventPosition);
                                var S = [];
                                for (e = 0, i = v.length; e < i; ++e) S.push((n = v[e], o = void 0, s = void 0, l = void 0, c = void 0, o = n._xScale, s = n._yScale || n._scale, l = n._index, c = n._datasetIndex, {
                                    xLabel: o ? o.getLabelForIndex(l, c) : "",
                                    yLabel: s ? s.getLabelForIndex(l, c) : "",
                                    index: l,
                                    datasetIndex: c,
                                    x: n._model.x,
                                    y: n._model.y
                                }));
                                h.filter && (S = S.filter((function(t) {
                                    return h.filter(t, g)
                                }))), h.itemSort && (S = S.sort((function(t, e) {
                                    return h.itemSort(t, e, g)
                                }))), r.each(S, (function(t) {
                                    w.push(h.callbacks.labelColor.call(d, t, d._chart)), k.push(h.callbacks.labelTextColor.call(d, t, d._chart))
                                })), p.title = d.getTitle(S, g), p.beforeBody = d.getBeforeBody(S, g), p.body = d.getBody(S, g), p.afterBody = d.getAfterBody(S, g), p.footer = d.getFooter(S, g), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = S, b = function(t, e) {
                                    var i = t._chart.ctx,
                                        n = 2 * e.yPadding,
                                        o = 0,
                                        a = e.body,
                                        s = a.reduce((function(t, e) {
                                            return t + e.before.length + e.lines.length + e.after.length
                                        }), 0);
                                    s += e.beforeBody.length + e.afterBody.length;
                                    var l = e.title.length,
                                        c = e.footer.length,
                                        u = e.titleFontSize,
                                        d = e.bodyFontSize,
                                        h = e.footerFontSize;
                                    n += l * u, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * d, n += s ? (s - 1) * e.bodySpacing : 0, n += c ? e.footerMarginTop : 0, n += c * h, n += c ? (c - 1) * e.footerSpacing : 0;
                                    var f = 0,
                                        p = function(t) {
                                            o = Math.max(o, i.measureText(t).width + f)
                                        };
                                    return i.font = r.fontString(u, e._titleFontStyle, e._titleFontFamily), r.each(e.title, p), i.font = r.fontString(d, e._bodyFontStyle, e._bodyFontFamily), r.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? d + 2 : 0, r.each(a, (function(t) {
                                        r.each(t.before, p), r.each(t.lines, p), r.each(t.after, p)
                                    })), f = 0, i.font = r.fontString(h, e._footerFontStyle, e._footerFontFamily), r.each(e.footer, p), {
                                        width: o += 2 * e.xPadding,
                                        height: n
                                    }
                                }(this, p), y = function(t, e, i, n) {
                                    var o = t.x,
                                        r = t.y,
                                        a = t.caretSize,
                                        s = t.caretPadding,
                                        l = t.cornerRadius,
                                        c = i.xAlign,
                                        u = i.yAlign,
                                        d = a + s,
                                        h = l + s;
                                    return "right" === c ? o -= e.width : "center" === c && ((o -= e.width / 2) + e.width > n.width && (o = n.width - e.width), o < 0 && (o = 0)), "top" === u ? r += d : r -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === c ? o += d : "right" === c && (o -= d) : "left" === c ? o -= h : "right" === c && (o += h), {
                                        x: o,
                                        y: r
                                    }
                                }(p, b, m = function(t, e) {
                                    var i, n, o, r, a, s = t._model,
                                        l = t._chart,
                                        c = t._chart.chartArea,
                                        u = "center",
                                        d = "center";
                                    s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                                    var h = (c.left + c.right) / 2,
                                        f = (c.top + c.bottom) / 2;
                                    "center" === d ? (i = function(t) {
                                        return t <= h
                                    }, n = function(t) {
                                        return t > h
                                    }) : (i = function(t) {
                                        return t <= e.width / 2
                                    }, n = function(t) {
                                        return t >= l.width - e.width / 2
                                    }), o = function(t) {
                                        return t + e.width + s.caretSize + s.caretPadding > l.width
                                    }, r = function(t) {
                                        return t - e.width - s.caretSize - s.caretPadding < 0
                                    }, a = function(t) {
                                        return t <= f ? "top" : "bottom"
                                    }, i(s.x) ? (u = "left", o(s.x) && (u = "center", d = a(s.y))) : n(s.x) && (u = "right", r(s.x) && (u = "center", d = a(s.y)));
                                    var p = t._options;
                                    return {
                                        xAlign: p.xAlign ? p.xAlign : u,
                                        yAlign: p.yAlign ? p.yAlign : d
                                    }
                                }(this, b), d._chart)
                            } else p.opacity = 0;
                            return p.xAlign = m.xAlign, p.yAlign = m.yAlign, p.x = y.x, p.y = y.y, p.width = b.width, p.height = b.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && h.custom && h.custom.call(d, p), d
                        },
                        drawCaret: function(t, e) {
                            var i = this._chart.ctx,
                                n = this._view,
                                o = this.getCaretPosition(t, e, n);
                            i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3)
                        },
                        getCaretPosition: function(t, e, i) {
                            var n, o, r, a, s, l, c = i.caretSize,
                                u = i.cornerRadius,
                                d = i.xAlign,
                                h = i.yAlign,
                                f = t.x,
                                p = t.y,
                                v = e.width,
                                g = e.height;
                            if ("center" === h) s = p + g / 2, "left" === d ? (o = (n = f) - c, r = n, a = s + c, l = s - c) : (o = (n = f + v) + c, r = n, a = s - c, l = s + c);
                            else if ("left" === d ? (n = (o = f + u + c) - c, r = o + c) : "right" === d ? (n = (o = f + v - u - c) - c, r = o + c) : (n = (o = i.caretX) - c, r = o + c), "top" === h) s = (a = p) - c, l = a;
                            else {
                                s = (a = p + g) + c, l = a;
                                var m = r;
                                r = n, n = m
                            }
                            return {
                                x1: n,
                                x2: o,
                                x3: r,
                                y1: a,
                                y2: s,
                                y3: l
                            }
                        },
                        drawTitle: function(t, e, i, n) {
                            var o = e.title;
                            if (o.length) {
                                i.textAlign = e._titleAlign, i.textBaseline = "top";
                                var a, l, c = e.titleFontSize,
                                    u = e.titleSpacing;
                                for (i.fillStyle = s(e.titleFontColor, n), i.font = r.fontString(c, e._titleFontStyle, e._titleFontFamily), a = 0, l = o.length; a < l; ++a) i.fillText(o[a], t.x, t.y), t.y += c + u, a + 1 === o.length && (t.y += e.titleMarginBottom - u)
                            }
                        },
                        drawBody: function(t, e, i, n) {
                            var o = e.bodyFontSize,
                                a = e.bodySpacing,
                                l = e.body;
                            i.textAlign = e._bodyAlign, i.textBaseline = "top", i.font = r.fontString(o, e._bodyFontStyle, e._bodyFontFamily);
                            var c = 0,
                                u = function(e) {
                                    i.fillText(e, t.x + c, t.y), t.y += o + a
                                };
                            i.fillStyle = s(e.bodyFontColor, n), r.each(e.beforeBody, u);
                            var d = e.displayColors;
                            c = d ? o + 2 : 0, r.each(l, (function(a, l) {
                                var c = s(e.labelTextColors[l], n);
                                i.fillStyle = c, r.each(a.before, u), r.each(a.lines, (function(r) {
                                    d && (i.fillStyle = s(e.legendColorBackground, n), i.fillRect(t.x, t.y, o, o), i.lineWidth = 1, i.strokeStyle = s(e.labelColors[l].borderColor, n), i.strokeRect(t.x, t.y, o, o), i.fillStyle = s(e.labelColors[l].backgroundColor, n), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = c), u(r)
                                })), r.each(a.after, u)
                            })), c = 0, r.each(e.afterBody, u), t.y -= a
                        },
                        drawFooter: function(t, e, i, n) {
                            var o = e.footer;
                            o.length && (t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = s(e.footerFontColor, n), i.font = r.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), r.each(o, (function(n) {
                                i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                            })))
                        },
                        drawBackground: function(t, e, i, n, o) {
                            i.fillStyle = s(e.backgroundColor, o), i.strokeStyle = s(e.borderColor, o), i.lineWidth = e.borderWidth;
                            var r = e.xAlign,
                                a = e.yAlign,
                                l = t.x,
                                c = t.y,
                                u = n.width,
                                d = n.height,
                                h = e.cornerRadius;
                            i.beginPath(), i.moveTo(l + h, c), "top" === a && this.drawCaret(t, n), i.lineTo(l + u - h, c), i.quadraticCurveTo(l + u, c, l + u, c + h), "center" === a && "right" === r && this.drawCaret(t, n), i.lineTo(l + u, c + d - h), i.quadraticCurveTo(l + u, c + d, l + u - h, c + d), "bottom" === a && this.drawCaret(t, n), i.lineTo(l + h, c + d), i.quadraticCurveTo(l, c + d, l, c + d - h), "center" === a && "left" === r && this.drawCaret(t, n), i.lineTo(l, c + h), i.quadraticCurveTo(l, c, l + h, c), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke()
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view;
                            if (0 !== e.opacity) {
                                var i = {
                                        width: e.width,
                                        height: e.height
                                    },
                                    n = {
                                        x: e.x,
                                        y: e.y
                                    },
                                    o = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                    r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                                this._options.enabled && r && (this.drawBackground(n, e, t, i, o), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, o), this.drawBody(n, e, t, o), this.drawFooter(n, e, t, o))
                            }
                        },
                        handleEvent: function(t) {
                            var e, i = this,
                                n = i._options;
                            return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !r.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                                x: t.x,
                                y: t.y
                            }, i.update(!0), i.pivot())), e
                        }
                    })).positioners = a
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                37: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46);
                    n._set("global", {
                        elements: {
                            arc: {
                                backgroundColor: n.global.defaultColor,
                                borderColor: "#fff",
                                borderWidth: 2
                            }
                        }
                    }), e.exports = o.extend({
                        inLabelRange: function(t) {
                            var e = this._view;
                            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                        },
                        inRange: function(t, e) {
                            var i = this._view;
                            if (i) {
                                for (var n = r.getAngleFromPoint(i, {
                                        x: t,
                                        y: e
                                    }), o = n.angle, a = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
                                for (; o > l;) o -= 2 * Math.PI;
                                for (; o < s;) o += 2 * Math.PI;
                                var c = o >= s && o <= l,
                                    u = a >= i.innerRadius && a <= i.outerRadius;
                                return c && u
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var t = this._view,
                                e = (t.startAngle + t.endAngle) / 2,
                                i = (t.innerRadius + t.outerRadius) / 2;
                            return {
                                x: t.x + Math.cos(e) * i,
                                y: t.y + Math.sin(e) * i
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                        },
                        tooltipPosition: function() {
                            var t = this._view,
                                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                            return {
                                x: t.x + Math.cos(e) * i,
                                y: t.y + Math.sin(e) * i
                            }
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view,
                                i = e.startAngle,
                                n = e.endAngle;
                            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                38: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46),
                        a = n.global;
                    n._set("global", {
                        elements: {
                            line: {
                                tension: .4,
                                backgroundColor: a.defaultColor,
                                borderWidth: 3,
                                borderColor: a.defaultColor,
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0,
                                borderJoinStyle: "miter",
                                capBezierPoints: !0,
                                fill: !0
                            }
                        }
                    }), e.exports = o.extend({
                        draw: function() {
                            var t, e, i, n, o = this._view,
                                s = this._chart.ctx,
                                l = o.spanGaps,
                                c = this._children.slice(),
                                u = a.elements.line,
                                d = -1;
                            for (this._loop && c.length && c.push(c[0]), s.save(), s.lineCap = o.borderCapStyle || u.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || u.borderDash), s.lineDashOffset = o.borderDashOffset || u.borderDashOffset, s.lineJoin = o.borderJoinStyle || u.borderJoinStyle, s.lineWidth = o.borderWidth || u.borderWidth, s.strokeStyle = o.borderColor || a.defaultColor, s.beginPath(), d = -1, t = 0; t < c.length; ++t) e = c[t], i = r.previousItem(c, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), d = t) : (i = -1 === d ? i : c[d], n.skip || (d !== t - 1 && !l || -1 === d ? s.moveTo(n.x, n.y) : r.canvas.lineTo(s, i._view, e._view), d = t));
                            s.stroke(), s.restore()
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                39: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46),
                        a = n.global.defaultColor;

                    function s(t) {
                        var e = this._view;
                        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
                    }
                    n._set("global", {
                        elements: {
                            point: {
                                radius: 3,
                                pointStyle: "circle",
                                backgroundColor: a,
                                borderColor: a,
                                borderWidth: 1,
                                hitRadius: 1,
                                hoverRadius: 4,
                                hoverBorderWidth: 1
                            }
                        }
                    }), e.exports = o.extend({
                        inRange: function(t, e) {
                            var i = this._view;
                            return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                        },
                        inLabelRange: s,
                        inXRange: s,
                        inYRange: function(t) {
                            var e = this._view;
                            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                        },
                        getCenterPoint: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        },
                        getArea: function() {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y,
                                padding: t.radius + t.borderWidth
                            }
                        },
                        draw: function(t) {
                            var e = this._view,
                                i = this._model,
                                o = this._chart.ctx,
                                s = e.pointStyle,
                                l = e.rotation,
                                c = e.radius,
                                u = e.x,
                                d = e.y;
                            e.skip || (void 0 === t || i.x >= t.left && 1.01 * t.right >= i.x && i.y >= t.top && 1.01 * t.bottom >= i.y) && (o.strokeStyle = e.borderColor || a, o.lineWidth = r.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), o.fillStyle = e.backgroundColor || a, r.canvas.drawPoint(o, s, c, u, d, l))
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                40: [function(t, e, i) {
                    var n = t(26),
                        o = t(27);

                    function r(t) {
                        return void 0 !== t._view.width
                    }

                    function a(t) {
                        var e, i, n, o, a = t._view;
                        if (r(t)) {
                            var s = a.width / 2;
                            e = a.x - s, i = a.x + s, n = Math.min(a.y, a.base), o = Math.max(a.y, a.base)
                        } else {
                            var l = a.height / 2;
                            e = Math.min(a.x, a.base), i = Math.max(a.x, a.base), n = a.y - l, o = a.y + l
                        }
                        return {
                            left: e,
                            top: n,
                            right: i,
                            bottom: o
                        }
                    }
                    n._set("global", {
                        elements: {
                            rectangle: {
                                backgroundColor: n.global.defaultColor,
                                borderColor: n.global.defaultColor,
                                borderSkipped: "bottom",
                                borderWidth: 0
                            }
                        }
                    }), e.exports = o.extend({
                        draw: function() {
                            var t, e, i, n, o, r, a, s = this._chart.ctx,
                                l = this._view,
                                c = l.borderWidth;
                            if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, o = e > t ? 1 : -1, r = 1, a = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, o = 1, r = (n = l.base) > i ? 1 : -1, a = l.borderSkipped || "bottom"), c) {
                                var u = Math.min(Math.abs(t - e), Math.abs(i - n)),
                                    d = (c = c > u ? u : c) / 2,
                                    h = t + ("left" !== a ? d * o : 0),
                                    f = e + ("right" !== a ? -d * o : 0),
                                    p = i + ("top" !== a ? d * r : 0),
                                    v = n + ("bottom" !== a ? -d * r : 0);
                                h !== f && (i = p, n = v), p !== v && (t = h, e = f)
                            }
                            s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = c;
                            var g = [
                                    [t, n],
                                    [t, i],
                                    [e, i],
                                    [e, n]
                                ],
                                m = ["bottom", "left", "top", "right"].indexOf(a, 0);

                            function y(t) {
                                return g[(m + t) % 4]
                            } - 1 === m && (m = 0);
                            var b = y(0);
                            s.moveTo(b[0], b[1]);
                            for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                            s.fill(), c && s.stroke()
                        },
                        height: function() {
                            var t = this._view;
                            return t.base - t.y
                        },
                        inRange: function(t, e) {
                            var i = !1;
                            if (this._view) {
                                var n = a(this);
                                i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                            }
                            return i
                        },
                        inLabelRange: function(t, e) {
                            if (!this._view) return !1;
                            var i = a(this);
                            return r(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                        },
                        inXRange: function(t) {
                            var e = a(this);
                            return t >= e.left && t <= e.right
                        },
                        inYRange: function(t) {
                            var e = a(this);
                            return t >= e.top && t <= e.bottom
                        },
                        getCenterPoint: function() {
                            var t, e, i = this._view;
                            return r(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
                                x: t,
                                y: e
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return t.width * Math.abs(t.y - t.base)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        }
                    })
                }, {
                    26: 26,
                    27: 27
                }],
                41: [function(t, e, i) {
                    e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
                }, {
                    37: 37,
                    38: 38,
                    39: 39,
                    40: 40
                }],
                42: [function(t, e, i) {
                    var n = t(43);
                    i = e.exports = {
                        clear: function(t) {
                            t.ctx.clearRect(0, 0, t.width, t.height)
                        },
                        roundedRect: function(t, e, i, n, o, r) {
                            if (r) {
                                var a = Math.min(r, o / 2 - 1e-7, n / 2 - 1e-7);
                                t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.arcTo(e + n, i, e + n, i + a, a), t.lineTo(e + n, i + o - a), t.arcTo(e + n, i + o, e + n - a, i + o, a), t.lineTo(e + a, i + o), t.arcTo(e, i + o, e, i + o - a, a), t.lineTo(e, i + a), t.arcTo(e, i, e + a, i, a), t.closePath(), t.moveTo(e, i)
                            } else t.rect(e, i, n, o)
                        },
                        drawPoint: function(t, e, i, n, r, a) {
                            var s, l, c, u, d, h;
                            if (a = a || 0, !e || "object" !== o(e) || "[object HTMLImageElement]" !== (s = e.toString()) && "[object HTMLCanvasElement]" !== s) {
                                if (!(isNaN(i) || i <= 0)) {
                                    switch (t.save(), t.translate(n, r), t.rotate(a * Math.PI / 180), t.beginPath(), e) {
                                        default:
                                            t.arc(0, 0, i, 0, 2 * Math.PI), t.closePath();
                                            break;
                                        case "triangle":
                                            d = (l = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(-l / 2, d / 3), t.lineTo(l / 2, d / 3), t.lineTo(0, -2 * d / 3), t.closePath();
                                            break;
                                        case "rect":
                                            h = 1 / Math.SQRT2 * i, t.rect(-h, -h, 2 * h, 2 * h);
                                            break;
                                        case "rectRounded":
                                            var f = i / Math.SQRT2,
                                                p = -f,
                                                v = -f,
                                                g = Math.SQRT2 * i;
                                            this.roundedRect(t, p, v, g, g, .425 * i);
                                            break;
                                        case "rectRot":
                                            h = 1 / Math.SQRT2 * i, t.moveTo(-h, 0), t.lineTo(0, h), t.lineTo(h, 0), t.lineTo(0, -h), t.closePath();
                                            break;
                                        case "cross":
                                            t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0);
                                            break;
                                        case "crossRot":
                                            c = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, t.moveTo(-c, -u), t.lineTo(c, u), t.moveTo(-c, u), t.lineTo(c, -u);
                                            break;
                                        case "star":
                                            t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0), c = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, t.moveTo(-c, -u), t.lineTo(c, u), t.moveTo(-c, u), t.lineTo(c, -u);
                                            break;
                                        case "line":
                                            t.moveTo(-i, 0), t.lineTo(i, 0);
                                            break;
                                        case "dash":
                                            t.moveTo(0, 0), t.lineTo(i, 0)
                                    }
                                    t.fill(), t.stroke(), t.restore()
                                }
                            } else t.drawImage(e, n - e.width / 2, r - e.height / 2, e.width, e.height)
                        },
                        clipArea: function(t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                        },
                        unclipArea: function(t) {
                            t.restore()
                        },
                        lineTo: function(t, e, i, n) {
                            if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                            i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                        }
                    };
                    n.clear = i.clear, n.drawRoundedRectangle = function(t) {
                        t.beginPath(), i.roundedRect.apply(i, arguments)
                    }
                }, {
                    43: 43
                }],
                43: [function(t, e, i) {
                    var n, o = {
                        noop: function() {},
                        uid: (n = 0, function() {
                            return n++
                        }),
                        isNullOrUndef: function(t) {
                            return null == t
                        },
                        isArray: Array.isArray ? Array.isArray : function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        isObject: function(t) {
                            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                        },
                        valueOrDefault: function(t, e) {
                            return void 0 === t ? e : t
                        },
                        valueAtIndexOrDefault: function(t, e, i) {
                            return o.valueOrDefault(o.isArray(t) ? t[e] : t, i)
                        },
                        callback: function(t, e, i) {
                            if (t && "function" == typeof t.call) return t.apply(i, e)
                        },
                        each: function(t, e, i, n) {
                            var r, a, s;
                            if (o.isArray(t))
                                if (a = t.length, n)
                                    for (r = a - 1; r >= 0; r--) e.call(i, t[r], r);
                                else
                                    for (r = 0; r < a; r++) e.call(i, t[r], r);
                            else if (o.isObject(t))
                                for (a = (s = Object.keys(t)).length, r = 0; r < a; r++) e.call(i, t[s[r]], s[r])
                        },
                        arrayEquals: function(t, e) {
                            var i, n, r, a;
                            if (!t || !e || t.length !== e.length) return !1;
                            for (i = 0, n = t.length; i < n; ++i)
                                if (r = t[i], a = e[i], r instanceof Array && a instanceof Array) {
                                    if (!o.arrayEquals(r, a)) return !1
                                } else if (r !== a) return !1;
                            return !0
                        },
                        clone: function(t) {
                            if (o.isArray(t)) return t.map(o.clone);
                            if (o.isObject(t)) {
                                for (var e = {}, i = Object.keys(t), n = i.length, r = 0; r < n; ++r) e[i[r]] = o.clone(t[i[r]]);
                                return e
                            }
                            return t
                        },
                        _merger: function(t, e, i, n) {
                            var r = e[t],
                                a = i[t];
                            o.isObject(r) && o.isObject(a) ? o.merge(r, a, n) : e[t] = o.clone(a)
                        },
                        _mergerIf: function(t, e, i) {
                            var n = e[t],
                                r = i[t];
                            o.isObject(n) && o.isObject(r) ? o.mergeIf(n, r) : e.hasOwnProperty(t) || (e[t] = o.clone(r))
                        },
                        merge: function(t, e, i) {
                            var n, r, a, s, l, c = o.isArray(e) ? e : [e],
                                u = c.length;
                            if (!o.isObject(t)) return t;
                            for (n = (i = i || {}).merger || o._merger, r = 0; r < u; ++r)
                                if (e = c[r], o.isObject(e))
                                    for (l = 0, s = (a = Object.keys(e)).length; l < s; ++l) n(a[l], t, e, i);
                            return t
                        },
                        mergeIf: function(t, e) {
                            return o.merge(t, e, {
                                merger: o._mergerIf
                            })
                        },
                        extend: function(t) {
                            for (var e = function(e, i) {
                                    t[i] = e
                                }, i = 1, n = arguments.length; i < n; ++i) o.each(arguments[i], e);
                            return t
                        },
                        inherits: function(t) {
                            var e = this,
                                i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                                    return e.apply(this, arguments)
                                },
                                n = function() {
                                    this.constructor = i
                                };
                            return n.prototype = e.prototype, i.prototype = new n, i.extend = o.inherits, t && o.extend(i.prototype, t), i.__super__ = e.prototype, i
                        }
                    };
                    e.exports = o, o.callCallback = o.callback, o.indexOf = function(t, e, i) {
                        return Array.prototype.indexOf.call(t, e, i)
                    }, o.getValueOrDefault = o.valueOrDefault, o.getValueAtIndexOrDefault = o.valueAtIndexOrDefault
                }, {}],
                44: [function(t, e, i) {
                    var n = t(43),
                        o = {
                            linear: function(t) {
                                return t
                            },
                            easeInQuad: function(t) {
                                return t * t
                            },
                            easeOutQuad: function(t) {
                                return -t * (t - 2)
                            },
                            easeInOutQuad: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                            },
                            easeInCubic: function(t) {
                                return t * t * t
                            },
                            easeOutCubic: function(t) {
                                return (t -= 1) * t * t + 1
                            },
                            easeInOutCubic: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                            },
                            easeInQuart: function(t) {
                                return t * t * t * t
                            },
                            easeOutQuart: function(t) {
                                return -((t -= 1) * t * t * t - 1)
                            },
                            easeInOutQuart: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                            },
                            easeInQuint: function(t) {
                                return t * t * t * t * t
                            },
                            easeOutQuint: function(t) {
                                return (t -= 1) * t * t * t * t + 1
                            },
                            easeInOutQuint: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                            },
                            easeInSine: function(t) {
                                return 1 - Math.cos(t * (Math.PI / 2))
                            },
                            easeOutSine: function(t) {
                                return Math.sin(t * (Math.PI / 2))
                            },
                            easeInOutSine: function(t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            },
                            easeInExpo: function(t) {
                                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                            },
                            easeOutExpo: function(t) {
                                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                            },
                            easeInOutExpo: function(t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                            },
                            easeInCirc: function(t) {
                                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                            },
                            easeOutCirc: function(t) {
                                return Math.sqrt(1 - (t -= 1) * t)
                            },
                            easeInOutCirc: function(t) {
                                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            },
                            easeInElastic: function(t) {
                                var e = 1.70158,
                                    i = 0,
                                    n = 1;
                                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                            },
                            easeOutElastic: function(t) {
                                var e = 1.70158,
                                    i = 0,
                                    n = 1;
                                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                            },
                            easeInOutElastic: function(t) {
                                var e = 1.70158,
                                    i = 0,
                                    n = 1;
                                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                            },
                            easeInBack: function(t) {
                                var e = 1.70158;
                                return t * t * ((e + 1) * t - e)
                            },
                            easeOutBack: function(t) {
                                var e = 1.70158;
                                return (t -= 1) * t * ((e + 1) * t + e) + 1
                            },
                            easeInOutBack: function(t) {
                                var e = 1.70158;
                                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                            },
                            easeInBounce: function(t) {
                                return 1 - o.easeOutBounce(1 - t)
                            },
                            easeOutBounce: function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            easeInOutBounce: function(t) {
                                return t < .5 ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
                            }
                        };
                    e.exports = {
                        effects: o
                    }, n.easingEffects = o
                }, {
                    43: 43
                }],
                45: [function(t, e, i) {
                    var n = t(43);
                    e.exports = {
                        toLineHeight: function(t, e) {
                            var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                            if (!i || "normal" === i[1]) return 1.2 * e;
                            switch (t = +i[2], i[3]) {
                                case "px":
                                    return t;
                                case "%":
                                    t /= 100
                            }
                            return e * t
                        },
                        toPadding: function(t) {
                            var e, i, o, r;
                            return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, o = +t.bottom || 0, r = +t.left || 0) : e = i = o = r = +t || 0, {
                                top: e,
                                right: i,
                                bottom: o,
                                left: r,
                                height: e + o,
                                width: r + i
                            }
                        },
                        resolve: function(t, e, i) {
                            var o, r, a;
                            for (o = 0, r = t.length; o < r; ++o)
                                if (void 0 !== (a = t[o]) && (void 0 !== e && "function" == typeof a && (a = a(e)), void 0 !== i && n.isArray(a) && (a = a[i]), void 0 !== a)) return a
                        }
                    }
                }, {
                    43: 43
                }],
                46: [function(t, e, i) {
                    e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
                }, {
                    42: 42,
                    43: 43,
                    44: 44,
                    45: 45
                }],
                47: [function(t, e, i) {
                    e.exports = {
                        acquireContext: function(t) {
                            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                        }
                    }
                }, {}],
                48: [function(t, e, i) {
                    var n = t(46),
                        o = "$chartjs",
                        r = "chartjs-",
                        a = r + "render-monitor",
                        s = r + "render-animation",
                        l = ["animationstart", "webkitAnimationStart"],
                        c = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            pointerenter: "mouseenter",
                            pointerdown: "mousedown",
                            pointermove: "mousemove",
                            pointerup: "mouseup",
                            pointerleave: "mouseout",
                            pointerout: "mouseout"
                        };

                    function u(t, e) {
                        var i = n.getStyle(t, e),
                            o = i && i.match(/^(\d+)(\.\d+)?px$/);
                        return o ? Number(o[1]) : void 0
                    }
                    var d = !! function() {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                            window.addEventListener("e", null, e)
                        } catch (t) {}
                        return t
                    }() && {
                        passive: !0
                    };

                    function h(t, e, i) {
                        t.addEventListener(e, i, d)
                    }

                    function f(t, e, i) {
                        t.removeEventListener(e, i, d)
                    }

                    function p(t, e, i, n, o) {
                        return {
                            type: t,
                            chart: e,
                            native: o || null,
                            x: void 0 !== i ? i : null,
                            y: void 0 !== n ? n : null
                        }
                    }

                    function v(t, e, i) {
                        var c, u, d, f, v = t[o] || (t[o] = {}),
                            g = v.resizer = function(t) {
                                var e = document.createElement("div"),
                                    i = r + "size-monitor",
                                    n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                                e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                                var o = e.childNodes[0],
                                    a = e.childNodes[1];
                                e._reset = function() {
                                    o.scrollLeft = 1e6, o.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                                };
                                var s = function() {
                                    e._reset(), t()
                                };
                                return h(o, "scroll", s.bind(o, "expand")), h(a, "scroll", s.bind(a, "shrink")), e
                            }((c = function() {
                                if (v.resizer) return e(p("resize", i))
                            }, d = !1, f = [], function() {
                                f = Array.prototype.slice.call(arguments), u = u || this, d || (d = !0, n.requestAnimFrame.call(window, (function() {
                                    d = !1, c.apply(u, f)
                                })))
                            }));
                        ! function(t, e) {
                            var i = t[o] || (t[o] = {}),
                                r = i.renderProxy = function(t) {
                                    t.animationName === s && e()
                                };
                            n.each(l, (function(e) {
                                h(t, e, r)
                            })), i.reflow = !!t.offsetParent, t.classList.add(a)
                        }(t, (function() {
                            if (v.resizer) {
                                var e = t.parentNode;
                                e && e !== g.parentNode && e.insertBefore(g, e.firstChild), g._reset()
                            }
                        }))
                    }

                    function g(t) {
                        var e = t[o] || {},
                            i = e.resizer;
                        delete e.resizer,
                            function(t) {
                                var e = t[o] || {},
                                    i = e.renderProxy;
                                i && (n.each(l, (function(e) {
                                    f(t, e, i)
                                })), delete e.renderProxy), t.classList.remove(a)
                            }(t), i && i.parentNode && i.parentNode.removeChild(i)
                    }
                    e.exports = {
                        _enabled: "undefined" != typeof window && "undefined" != typeof document,
                        initialize: function() {
                            var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
                            e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + a + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                        },
                        acquireContext: function(t, e) {
                            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                            var i = t && t.getContext && t.getContext("2d");
                            return i && i.canvas === t ? (function(t, e) {
                                var i = t.style,
                                    n = t.getAttribute("height"),
                                    r = t.getAttribute("width");
                                if (t[o] = {
                                        initial: {
                                            height: n,
                                            width: r,
                                            style: {
                                                display: i.display,
                                                height: i.height,
                                                width: i.width
                                            }
                                        }
                                    }, i.display = i.display || "block", null === r || "" === r) {
                                    var a = u(t, "width");
                                    void 0 !== a && (t.width = a)
                                }
                                if (null === n || "" === n)
                                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                                    else {
                                        var s = u(t, "height");
                                        void 0 !== a && (t.height = s)
                                    }
                            }(t, e), i) : null
                        },
                        releaseContext: function(t) {
                            var e = t.canvas;
                            if (e[o]) {
                                var i = e[o].initial;
                                ["height", "width"].forEach((function(t) {
                                    var o = i[t];
                                    n.isNullOrUndef(o) ? e.removeAttribute(t) : e.setAttribute(t, o)
                                })), n.each(i.style || {}, (function(t, i) {
                                    e.style[i] = t
                                })), e.width = e.width, delete e[o]
                            }
                        },
                        addEventListener: function(t, e, i) {
                            var r = t.canvas;
                            if ("resize" !== e) {
                                var a = i[o] || (i[o] = {});
                                h(r, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                                    i(function(t, e) {
                                        var i = c[t.type] || t.type,
                                            o = n.getRelativePosition(t, e);
                                        return p(i, e, o.x, o.y, t)
                                    }(e, t))
                                })
                            } else v(r, i, t)
                        },
                        removeEventListener: function(t, e, i) {
                            var n = t.canvas;
                            if ("resize" !== e) {
                                var r = ((i[o] || {}).proxies || {})[t.id + "_" + e];
                                r && f(n, e, r)
                            } else g(n)
                        }
                    }, n.addEvent = h, n.removeEvent = f
                }, {
                    46: 46
                }],
                49: [function(t, e, i) {
                    var n = t(46),
                        o = t(47),
                        r = t(48),
                        a = r._enabled ? r : o;
                    e.exports = n.extend({
                        initialize: function() {},
                        acquireContext: function() {},
                        releaseContext: function() {},
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }, a)
                }, {
                    46: 46,
                    47: 47,
                    48: 48
                }],
                50: [function(t, e, i) {
                    e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
                }, {
                    51: 51,
                    52: 52,
                    53: 53
                }],
                51: [function(t, e, i) {
                    var n = t(26),
                        o = t(41),
                        r = t(46);
                    n._set("global", {
                        plugins: {
                            filler: {
                                propagate: !0
                            }
                        }
                    });
                    var a = {
                        dataset: function(t) {
                            var e = t.fill,
                                i = t.chart,
                                n = i.getDatasetMeta(e),
                                o = n && i.isDatasetVisible(e) && n.dataset._children || [],
                                r = o.length || 0;
                            return r ? function(t, e) {
                                return e < r && o[e]._view || null
                            } : null
                        },
                        boundary: function(t) {
                            var e = t.boundary,
                                i = e ? e.x : null,
                                n = e ? e.y : null;
                            return function(t) {
                                return {
                                    x: null === i ? t.x : i,
                                    y: null === n ? t.y : n
                                }
                            }
                        }
                    };

                    function s(t, e, i) {
                        var n, o = t._model || {},
                            r = o.fill;
                        if (void 0 === r && (r = !!o.backgroundColor), !1 === r || null === r) return !1;
                        if (!0 === r) return "origin";
                        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                        switch (r) {
                            case "bottom":
                                return "start";
                            case "top":
                                return "end";
                            case "zero":
                                return "origin";
                            case "origin":
                            case "start":
                            case "end":
                                return r;
                            default:
                                return !1
                        }
                    }

                    function l(t) {
                        var e, i = t.el._model || {},
                            n = t.el._scale || {},
                            o = t.fill,
                            r = null;
                        if (isFinite(o)) return null;
                        if ("start" === o ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === o ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
                            if (void 0 !== r.x && void 0 !== r.y) return r;
                            if ("number" == typeof r && isFinite(r)) return {
                                x: (e = n.isHorizontal()) ? r : null,
                                y: e ? null : r
                            }
                        }
                        return null
                    }

                    function c(t, e, i) {
                        var n, o = t[e].fill,
                            r = [e];
                        if (!i) return o;
                        for (; !1 !== o && -1 === r.indexOf(o);) {
                            if (!isFinite(o)) return o;
                            if (!(n = t[o])) return !1;
                            if (n.visible) return o;
                            r.push(o), o = n.fill
                        }
                        return !1
                    }

                    function u(t) {
                        var e = t.fill,
                            i = "dataset";
                        return !1 === e ? null : (isFinite(e) || (i = "boundary"), a[i](t))
                    }

                    function d(t) {
                        return t && !t.skip
                    }

                    function h(t, e, i, n, o) {
                        var a;
                        if (n && o) {
                            for (t.moveTo(e[0].x, e[0].y), a = 1; a < n; ++a) r.canvas.lineTo(t, e[a - 1], e[a]);
                            for (t.lineTo(i[o - 1].x, i[o - 1].y), a = o - 1; a > 0; --a) r.canvas.lineTo(t, i[a], i[a - 1], !0)
                        }
                    }
                    e.exports = {
                        id: "filler",
                        afterDatasetsUpdate: function(t, e) {
                            var i, n, r, a, d = (t.data.datasets || []).length,
                                h = e.propagate,
                                f = [];
                            for (n = 0; n < d; ++n) a = null, (r = (i = t.getDatasetMeta(n)).dataset) && r._model && r instanceof o.Line && (a = {
                                visible: t.isDatasetVisible(n),
                                fill: s(r, n, d),
                                chart: t,
                                el: r
                            }), i.$filler = a, f.push(a);
                            for (n = 0; n < d; ++n)(a = f[n]) && (a.fill = c(f, n, h), a.boundary = l(a), a.mapper = u(a))
                        },
                        beforeDatasetDraw: function(t, e) {
                            var i = e.meta.$filler;
                            if (i) {
                                var o = t.ctx,
                                    a = i.el,
                                    s = a._view,
                                    l = a._children || [],
                                    c = i.mapper,
                                    u = s.backgroundColor || n.global.defaultColor;
                                c && u && l.length && (r.canvas.clipArea(o, t.chartArea), function(t, e, i, n, o, r) {
                                    var a, s, l, c, u, f, p, v = e.length,
                                        g = n.spanGaps,
                                        m = [],
                                        y = [],
                                        b = 0,
                                        x = 0;
                                    for (t.beginPath(), a = 0, s = v + !!r; a < s; ++a) u = i(c = e[l = a % v]._view, l, n), f = d(c), p = d(u), f && p ? (b = m.push(c), x = y.push(u)) : b && x && (g ? (f && m.push(c), p && y.push(u)) : (h(t, m, y, b, x), b = x = 0, m = [], y = []));
                                    h(t, m, y, b, x), t.closePath(), t.fillStyle = o, t.fill()
                                }(o, l, c, s, u, a._loop), r.canvas.unclipArea(o))
                            }
                        }
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                52: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46),
                        a = t(31),
                        s = r.noop;

                    function l(t, e) {
                        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                    }
                    n._set("global", {
                        legend: {
                            display: !0,
                            position: "top",
                            fullWidth: !0,
                            reverse: !1,
                            weight: 1e3,
                            onClick: function(t, e) {
                                var i = e.datasetIndex,
                                    n = this.chart,
                                    o = n.getDatasetMeta(i);
                                o.hidden = null === o.hidden ? !n.data.datasets[i].hidden : null, n.update()
                            },
                            onHover: null,
                            labels: {
                                boxWidth: 40,
                                padding: 10,
                                generateLabels: function(t) {
                                    var e = t.data;
                                    return r.isArray(e.datasets) ? e.datasets.map((function(e, i) {
                                        return {
                                            text: e.label,
                                            fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                            hidden: !t.isDatasetVisible(i),
                                            lineCap: e.borderCapStyle,
                                            lineDash: e.borderDash,
                                            lineDashOffset: e.borderDashOffset,
                                            lineJoin: e.borderJoinStyle,
                                            lineWidth: e.borderWidth,
                                            strokeStyle: e.borderColor,
                                            pointStyle: e.pointStyle,
                                            datasetIndex: i
                                        }
                                    }), this) : []
                                }
                            }
                        },
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        }
                    });
                    var c = o.extend({
                        initialize: function(t) {
                            r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                        },
                        beforeUpdate: s,
                        update: function(t, e, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: s,
                        beforeSetDimensions: s,
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: s,
                        beforeBuildLabels: s,
                        buildLabels: function() {
                            var t = this,
                                e = t.options.labels || {},
                                i = r.callback(e.generateLabels, [t.chart], t) || [];
                            e.filter && (i = i.filter((function(i) {
                                return e.filter(i, t.chart.data)
                            }))), t.options.reverse && i.reverse(), t.legendItems = i
                        },
                        afterBuildLabels: s,
                        beforeFit: s,
                        fit: function() {
                            var t = this,
                                e = t.options,
                                i = e.labels,
                                o = e.display,
                                a = t.ctx,
                                s = n.global,
                                c = r.valueOrDefault,
                                u = c(i.fontSize, s.defaultFontSize),
                                d = c(i.fontStyle, s.defaultFontStyle),
                                h = c(i.fontFamily, s.defaultFontFamily),
                                f = r.fontString(u, d, h),
                                p = t.legendHitBoxes = [],
                                v = t.minSize,
                                g = t.isHorizontal();
                            if (g ? (v.width = t.maxWidth, v.height = o ? 10 : 0) : (v.width = o ? 10 : 0, v.height = t.maxHeight), o)
                                if (a.font = f, g) {
                                    var m = t.lineWidths = [0],
                                        y = t.legendItems.length ? u + i.padding : 0;
                                    a.textAlign = "left", a.textBaseline = "top", r.each(t.legendItems, (function(e, n) {
                                        var o = l(i, u) + u / 2 + a.measureText(e.text).width;
                                        m[m.length - 1] + o + i.padding >= t.width && (y += u + i.padding, m[m.length] = t.left), p[n] = {
                                            left: 0,
                                            top: 0,
                                            width: o,
                                            height: u
                                        }, m[m.length - 1] += o + i.padding
                                    })), v.height += y
                                } else {
                                    var b = i.padding,
                                        x = t.columnWidths = [],
                                        w = i.padding,
                                        k = 0,
                                        S = 0,
                                        C = u + b;
                                    r.each(t.legendItems, (function(t, e) {
                                        var n = l(i, u) + u / 2 + a.measureText(t.text).width;
                                        S + C > v.height && (w += k + i.padding, x.push(k), k = 0, S = 0), k = Math.max(k, n), S += C, p[e] = {
                                            left: 0,
                                            top: 0,
                                            width: n,
                                            height: u
                                        }
                                    })), w += k, x.push(k), v.width += w
                                } t.width = v.width, t.height = v.height
                        },
                        afterFit: s,
                        isHorizontal: function() {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        draw: function() {
                            var t = this,
                                e = t.options,
                                i = e.labels,
                                o = n.global,
                                a = o.elements.line,
                                s = t.width,
                                c = t.lineWidths;
                            if (e.display) {
                                var u, d = t.ctx,
                                    h = r.valueOrDefault,
                                    f = h(i.fontColor, o.defaultFontColor),
                                    p = h(i.fontSize, o.defaultFontSize),
                                    v = h(i.fontStyle, o.defaultFontStyle),
                                    g = h(i.fontFamily, o.defaultFontFamily),
                                    m = r.fontString(p, v, g);
                                d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = m;
                                var y = l(i, p),
                                    b = t.legendHitBoxes,
                                    x = t.isHorizontal();
                                u = x ? {
                                    x: t.left + (s - c[0]) / 2,
                                    y: t.top + i.padding,
                                    line: 0
                                } : {
                                    x: t.left + i.padding,
                                    y: t.top + i.padding,
                                    line: 0
                                };
                                var w = p + i.padding;
                                r.each(t.legendItems, (function(n, l) {
                                    var f = d.measureText(n.text).width,
                                        v = y + p / 2 + f,
                                        g = u.x,
                                        m = u.y;
                                    x ? g + v >= s && (m = u.y += w, u.line++, g = u.x = t.left + (s - c[u.line]) / 2) : m + w > t.bottom && (g = u.x = g + t.columnWidths[u.line] + i.padding, m = u.y = t.top + i.padding, u.line++),
                                        function(t, i, n) {
                                            if (!(isNaN(y) || y <= 0)) {
                                                d.save(), d.fillStyle = h(n.fillStyle, o.defaultColor), d.lineCap = h(n.lineCap, a.borderCapStyle), d.lineDashOffset = h(n.lineDashOffset, a.borderDashOffset), d.lineJoin = h(n.lineJoin, a.borderJoinStyle), d.lineWidth = h(n.lineWidth, a.borderWidth), d.strokeStyle = h(n.strokeStyle, o.defaultColor);
                                                var s = 0 === h(n.lineWidth, a.borderWidth);
                                                if (d.setLineDash && d.setLineDash(h(n.lineDash, a.borderDash)), e.labels && e.labels.usePointStyle) {
                                                    var l = p * Math.SQRT2 / 2,
                                                        c = l / Math.SQRT2,
                                                        u = t + c,
                                                        f = i + c;
                                                    r.canvas.drawPoint(d, n.pointStyle, l, u, f)
                                                } else s || d.strokeRect(t, i, y, p), d.fillRect(t, i, y, p);
                                                d.restore()
                                            }
                                        }(g, m, n), b[l].left = g, b[l].top = m,
                                        function(t, e, i, n) {
                                            var o = p / 2,
                                                r = y + o + t,
                                                a = e + o;
                                            d.fillText(i.text, r, a), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(r, a), d.lineTo(r + n, a), d.stroke())
                                        }(g, m, n, f), x ? u.x += v + i.padding : u.y += w
                                }))
                            }
                        },
                        handleEvent: function(t) {
                            var e = this,
                                i = e.options,
                                n = "mouseup" === t.type ? "click" : t.type,
                                o = !1;
                            if ("mousemove" === n) {
                                if (!i.onHover) return
                            } else {
                                if ("click" !== n) return;
                                if (!i.onClick) return
                            }
                            var r = t.x,
                                a = t.y;
                            if (r >= e.left && r <= e.right && a >= e.top && a <= e.bottom)
                                for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                    var c = s[l];
                                    if (r >= c.left && r <= c.left + c.width && a >= c.top && a <= c.top + c.height) {
                                        if ("click" === n) {
                                            i.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                                            break
                                        }
                                        if ("mousemove" === n) {
                                            i.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                                            break
                                        }
                                    }
                                }
                            return o
                        }
                    });

                    function u(t, e) {
                        var i = new c({
                            ctx: t.ctx,
                            options: e,
                            chart: t
                        });
                        a.configure(t, i, e), a.addBox(t, i), t.legend = i
                    }
                    e.exports = {
                        id: "legend",
                        _element: c,
                        beforeInit: function(t) {
                            var e = t.options.legend;
                            e && u(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.legend,
                                i = t.legend;
                            e ? (r.mergeIf(e, n.global.legend), i ? (a.configure(t, i, e), i.options = e) : u(t, e)) : i && (a.removeBox(t, i), delete t.legend)
                        },
                        afterEvent: function(t, e) {
                            var i = t.legend;
                            i && i.handleEvent(e)
                        }
                    }
                }, {
                    26: 26,
                    27: 27,
                    31: 31,
                    46: 46
                }],
                53: [function(t, e, i) {
                    var n = t(26),
                        o = t(27),
                        r = t(46),
                        a = t(31),
                        s = r.noop;
                    n._set("global", {
                        title: {
                            display: !1,
                            fontStyle: "bold",
                            fullWidth: !0,
                            lineHeight: 1.2,
                            padding: 10,
                            position: "top",
                            text: "",
                            weight: 2e3
                        }
                    });
                    var l = o.extend({
                        initialize: function(t) {
                            r.extend(this, t), this.legendHitBoxes = []
                        },
                        beforeUpdate: s,
                        update: function(t, e, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: s,
                        beforeSetDimensions: s,
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: s,
                        beforeBuildLabels: s,
                        buildLabels: s,
                        afterBuildLabels: s,
                        beforeFit: s,
                        fit: function() {
                            var t = this,
                                e = r.valueOrDefault,
                                i = t.options,
                                o = i.display,
                                a = e(i.fontSize, n.global.defaultFontSize),
                                s = t.minSize,
                                l = r.isArray(i.text) ? i.text.length : 1,
                                c = r.options.toLineHeight(i.lineHeight, a),
                                u = o ? l * c + 2 * i.padding : 0;
                            t.isHorizontal() ? (s.width = t.maxWidth, s.height = u) : (s.width = u, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                        },
                        afterFit: s,
                        isHorizontal: function() {
                            var t = this.options.position;
                            return "top" === t || "bottom" === t
                        },
                        draw: function() {
                            var t = this,
                                e = t.ctx,
                                i = r.valueOrDefault,
                                o = t.options,
                                a = n.global;
                            if (o.display) {
                                var s, l, c, u = i(o.fontSize, a.defaultFontSize),
                                    d = i(o.fontStyle, a.defaultFontStyle),
                                    h = i(o.fontFamily, a.defaultFontFamily),
                                    f = r.fontString(u, d, h),
                                    p = r.options.toLineHeight(o.lineHeight, u),
                                    v = p / 2 + o.padding,
                                    g = 0,
                                    m = t.top,
                                    y = t.left,
                                    b = t.bottom,
                                    x = t.right;
                                e.fillStyle = i(o.fontColor, a.defaultFontColor), e.font = f, t.isHorizontal() ? (l = y + (x - y) / 2, c = m + v, s = x - y) : (l = "left" === o.position ? y + v : x - v, c = m + (b - m) / 2, s = b - m, g = Math.PI * ("left" === o.position ? -.5 : .5)), e.save(), e.translate(l, c), e.rotate(g), e.textAlign = "center", e.textBaseline = "middle";
                                var w = o.text;
                                if (r.isArray(w))
                                    for (var k = 0, S = 0; S < w.length; ++S) e.fillText(w[S], 0, k, s), k += p;
                                else e.fillText(w, 0, 0, s);
                                e.restore()
                            }
                        }
                    });

                    function c(t, e) {
                        var i = new l({
                            ctx: t.ctx,
                            options: e,
                            chart: t
                        });
                        a.configure(t, i, e), a.addBox(t, i), t.titleBlock = i
                    }
                    e.exports = {
                        id: "title",
                        _element: l,
                        beforeInit: function(t) {
                            var e = t.options.title;
                            e && c(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.title,
                                i = t.titleBlock;
                            e ? (r.mergeIf(e, n.global.title), i ? (a.configure(t, i, e), i.options = e) : c(t, e)) : i && (a.removeBox(t, i), delete t.titleBlock)
                        }
                    }
                }, {
                    26: 26,
                    27: 27,
                    31: 31,
                    46: 46
                }],
                54: [function(t, e, i) {
                    var n = t(33),
                        o = t(34);
                    e.exports = function() {
                        var t = n.extend({
                            getLabels: function() {
                                var t = this.chart.data;
                                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                            },
                            determineDataLimits: function() {
                                var t, e = this,
                                    i = e.getLabels();
                                e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                            },
                            buildTicks: function() {
                                var t = this,
                                    e = t.getLabels();
                                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                            },
                            getLabelForIndex: function(t, e) {
                                var i = this,
                                    n = i.chart.data,
                                    o = i.isHorizontal();
                                return n.yLabels && !o ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                            },
                            getPixelForValue: function(t, e) {
                                var i, n = this,
                                    o = n.options.offset,
                                    r = Math.max(n.maxIndex + 1 - n.minIndex - (o ? 0 : 1), 1);
                                if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                                    t = i || t;
                                    var a = n.getLabels().indexOf(t);
                                    e = -1 !== a ? a : e
                                }
                                if (n.isHorizontal()) {
                                    var s = n.width / r,
                                        l = s * (e - n.minIndex);
                                    return o && (l += s / 2), n.left + Math.round(l)
                                }
                                var c = n.height / r,
                                    u = c * (e - n.minIndex);
                                return o && (u += c / 2), n.top + Math.round(u)
                            },
                            getPixelForTick: function(t) {
                                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                            },
                            getValueForPixel: function(t) {
                                var e = this,
                                    i = e.options.offset,
                                    n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                    o = e.isHorizontal(),
                                    r = (o ? e.width : e.height) / n;
                                return t -= o ? e.left : e.top, i && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex
                            },
                            getBasePixel: function() {
                                return this.bottom
                            }
                        });
                        o.registerScaleType("category", t, {
                            position: "bottom"
                        })
                    }
                }, {
                    33: 33,
                    34: 34
                }],
                55: [function(t, e, i) {
                    var n = t(26),
                        o = t(46),
                        r = t(34),
                        a = t(35);
                    e.exports = function(t) {
                        var e = {
                                position: "left",
                                ticks: {
                                    callback: a.formatters.linear
                                }
                            },
                            i = t.LinearScaleBase.extend({
                                determineDataLimits: function() {
                                    var t = this,
                                        e = t.options,
                                        i = t.chart,
                                        n = i.data.datasets,
                                        r = t.isHorizontal();

                                    function a(e) {
                                        return r ? e.xAxisID === t.id : e.yAxisID === t.id
                                    }
                                    t.min = null, t.max = null;
                                    var s = e.stacked;
                                    if (void 0 === s && o.each(n, (function(t, e) {
                                            if (!s) {
                                                var n = i.getDatasetMeta(e);
                                                i.isDatasetVisible(e) && a(n) && void 0 !== n.stack && (s = !0)
                                            }
                                        })), e.stacked || s) {
                                        var l = {};
                                        o.each(n, (function(n, r) {
                                            var s = i.getDatasetMeta(r),
                                                c = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                            void 0 === l[c] && (l[c] = {
                                                positiveValues: [],
                                                negativeValues: []
                                            });
                                            var u = l[c].positiveValues,
                                                d = l[c].negativeValues;
                                            i.isDatasetVisible(r) && a(s) && o.each(n.data, (function(i, n) {
                                                var o = +t.getRightValue(i);
                                                isNaN(o) || s.data[n].hidden || (u[n] = u[n] || 0, d[n] = d[n] || 0, e.relativePoints ? u[n] = 100 : o < 0 ? d[n] += o : u[n] += o)
                                            }))
                                        })), o.each(l, (function(e) {
                                            var i = e.positiveValues.concat(e.negativeValues),
                                                n = o.min(i),
                                                r = o.max(i);
                                            t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r)
                                        }))
                                    } else o.each(n, (function(e, n) {
                                        var r = i.getDatasetMeta(n);
                                        i.isDatasetVisible(n) && a(r) && o.each(e.data, (function(e, i) {
                                            var n = +t.getRightValue(e);
                                            isNaN(n) || r.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                                        }))
                                    }));
                                    t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                                },
                                getTickLimit: function() {
                                    var t, e = this.options.ticks;
                                    if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                                    else {
                                        var i = o.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                        t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
                                    }
                                    return t
                                },
                                handleDirectionalChanges: function() {
                                    this.isHorizontal() || this.ticks.reverse()
                                },
                                getLabelForIndex: function(t, e) {
                                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                                },
                                getPixelForValue: function(t) {
                                    var e = this,
                                        i = e.start,
                                        n = +e.getRightValue(t),
                                        o = e.end - i;
                                    return e.isHorizontal() ? e.left + e.width / o * (n - i) : e.bottom - e.height / o * (n - i)
                                },
                                getValueForPixel: function(t) {
                                    var e = this,
                                        i = e.isHorizontal(),
                                        n = i ? e.width : e.height,
                                        o = (i ? t - e.left : e.bottom - t) / n;
                                    return e.start + (e.end - e.start) * o
                                },
                                getPixelForTick: function(t) {
                                    return this.getPixelForValue(this.ticksAsNumbers[t])
                                }
                            });
                        r.registerScaleType("linear", i, e)
                    }
                }, {
                    26: 26,
                    34: 34,
                    35: 35,
                    46: 46
                }],
                56: [function(t, e, i) {
                    var n = t(46),
                        o = t(33);
                    e.exports = function(t) {
                        var e = n.noop;
                        t.LinearScaleBase = o.extend({
                            getRightValue: function(t) {
                                return "string" == typeof t ? +t : o.prototype.getRightValue.call(this, t)
                            },
                            handleTickRangeOptions: function() {
                                var t = this,
                                    e = t.options.ticks;
                                if (e.beginAtZero) {
                                    var i = n.sign(t.min),
                                        o = n.sign(t.max);
                                    i < 0 && o < 0 ? t.max = 0 : i > 0 && o > 0 && (t.min = 0)
                                }
                                var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                                    a = void 0 !== e.max || void 0 !== e.suggestedMax;
                                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== a && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                            },
                            getTickLimit: e,
                            handleDirectionalChanges: e,
                            buildTicks: function() {
                                var t = this,
                                    e = t.options.ticks,
                                    i = t.getTickLimit(),
                                    o = {
                                        maxTicks: i = Math.max(2, i),
                                        min: e.min,
                                        max: e.max,
                                        precision: e.precision,
                                        stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
                                    },
                                    r = t.ticks = function(t, e) {
                                        var i, o, r, a = [];
                                        if (t.stepSize && t.stepSize > 0) r = t.stepSize;
                                        else {
                                            var s = n.niceNum(e.max - e.min, !1);
                                            r = n.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (o = t.precision) && (i = Math.pow(10, o), r = Math.ceil(r * i) / i)
                                        }
                                        var l = Math.floor(e.min / r) * r,
                                            c = Math.ceil(e.max / r) * r;
                                        n.isNullOrUndef(t.min) || n.isNullOrUndef(t.max) || !t.stepSize || n.almostWhole((t.max - t.min) / t.stepSize, r / 1e3) && (l = t.min, c = t.max);
                                        var u = (c - l) / r;
                                        u = n.almostEquals(u, Math.round(u), r / 1e3) ? Math.round(u) : Math.ceil(u), o = 1, r < 1 && (o = Math.pow(10, 1 - Math.floor(n.log10(r))), l = Math.round(l * o) / o, c = Math.round(c * o) / o), a.push(void 0 !== t.min ? t.min : l);
                                        for (var d = 1; d < u; ++d) a.push(Math.round((l + d * r) * o) / o);
                                        return a.push(void 0 !== t.max ? t.max : c), a
                                    }(o, t);
                                t.handleDirectionalChanges(), t.max = n.max(r), t.min = n.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                            },
                            convertTicksToLabels: function() {
                                var t = this;
                                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), o.prototype.convertTicksToLabels.call(t)
                            }
                        })
                    }
                }, {
                    33: 33,
                    46: 46
                }],
                57: [function(t, e, i) {
                    var n = t(46),
                        o = t(33),
                        r = t(34),
                        a = t(35);
                    e.exports = function(t) {
                        var e = {
                                position: "left",
                                ticks: {
                                    callback: a.formatters.logarithmic
                                }
                            },
                            i = o.extend({
                                determineDataLimits: function() {
                                    var t = this,
                                        e = t.options,
                                        i = t.chart,
                                        o = i.data.datasets,
                                        r = t.isHorizontal();

                                    function a(e) {
                                        return r ? e.xAxisID === t.id : e.yAxisID === t.id
                                    }
                                    t.min = null, t.max = null, t.minNotZero = null;
                                    var s = e.stacked;
                                    if (void 0 === s && n.each(o, (function(t, e) {
                                            if (!s) {
                                                var n = i.getDatasetMeta(e);
                                                i.isDatasetVisible(e) && a(n) && void 0 !== n.stack && (s = !0)
                                            }
                                        })), e.stacked || s) {
                                        var l = {};
                                        n.each(o, (function(o, r) {
                                            var s = i.getDatasetMeta(r),
                                                c = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                            i.isDatasetVisible(r) && a(s) && (void 0 === l[c] && (l[c] = []), n.each(o.data, (function(e, i) {
                                                var n = l[c],
                                                    o = +t.getRightValue(e);
                                                isNaN(o) || s.data[i].hidden || o < 0 || (n[i] = n[i] || 0, n[i] += o)
                                            })))
                                        })), n.each(l, (function(e) {
                                            if (e.length > 0) {
                                                var i = n.min(e),
                                                    o = n.max(e);
                                                t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? o : Math.max(t.max, o)
                                            }
                                        }))
                                    } else n.each(o, (function(e, o) {
                                        var r = i.getDatasetMeta(o);
                                        i.isDatasetVisible(o) && a(r) && n.each(e.data, (function(e, i) {
                                            var n = +t.getRightValue(e);
                                            isNaN(n) || r.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                                        }))
                                    }));
                                    this.handleTickRangeOptions()
                                },
                                handleTickRangeOptions: function() {
                                    var t = this,
                                        e = t.options.ticks,
                                        i = n.valueOrDefault;
                                    t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1)
                                },
                                buildTicks: function() {
                                    var t = this,
                                        e = t.options.ticks,
                                        i = !t.isHorizontal(),
                                        o = {
                                            min: e.min,
                                            max: e.max
                                        },
                                        r = t.ticks = function(t, e) {
                                            var i, o, r = [],
                                                a = n.valueOrDefault,
                                                s = a(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                                                l = Math.floor(n.log10(e.max)),
                                                c = Math.ceil(e.max / Math.pow(10, l));
                                            0 === s ? (i = Math.floor(n.log10(e.minNotZero)), o = Math.floor(e.minNotZero / Math.pow(10, i)), r.push(s), s = o * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), o = Math.floor(s / Math.pow(10, i)));
                                            var u = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                                            do {
                                                r.push(s), 10 === ++o && (o = 1, u = ++i >= 0 ? 1 : u), s = Math.round(o * Math.pow(10, i) * u) / u
                                            } while (i < l || i === l && o < c);
                                            var d = a(t.max, s);
                                            return r.push(d), r
                                        }(o, t);
                                    t.max = n.max(r), t.min = n.min(r), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && r.reverse()
                                },
                                convertTicksToLabels: function() {
                                    this.tickValues = this.ticks.slice(), o.prototype.convertTicksToLabels.call(this)
                                },
                                getLabelForIndex: function(t, e) {
                                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                                },
                                getPixelForTick: function(t) {
                                    return this.getPixelForValue(this.tickValues[t])
                                },
                                _getFirstTickValue: function(t) {
                                    var e = Math.floor(n.log10(t));
                                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                                },
                                getPixelForValue: function(e) {
                                    var i, o, r, a, s, l = this,
                                        c = l.options.ticks.reverse,
                                        u = n.log10,
                                        d = l._getFirstTickValue(l.minNotZero),
                                        h = 0;
                                    return e = +l.getRightValue(e), c ? (r = l.end, a = l.start, s = -1) : (r = l.start, a = l.end, s = 1), l.isHorizontal() ? (i = l.width, o = c ? l.right : l.left) : (i = l.height, s *= -1, o = c ? l.top : l.bottom), e !== r && (0 === r && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), r = d), 0 !== e && (h += i / (u(a) - u(r)) * (u(e) - u(r))), o += s * h), o
                                },
                                getValueForPixel: function(e) {
                                    var i, o, r, a, s = this,
                                        l = s.options.ticks.reverse,
                                        c = n.log10,
                                        u = s._getFirstTickValue(s.minNotZero);
                                    if (l ? (o = s.end, r = s.start) : (o = s.start, r = s.end), s.isHorizontal() ? (i = s.width, a = l ? s.right - e : e - s.left) : (i = s.height, a = l ? e - s.top : s.bottom - e), a !== o) {
                                        if (0 === o) {
                                            var d = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                            a -= d, i -= d, o = u
                                        }
                                        a *= c(r) - c(o), a /= i, a = Math.pow(10, c(o) + a)
                                    }
                                    return a
                                }
                            });
                        r.registerScaleType("logarithmic", i, e)
                    }
                }, {
                    33: 33,
                    34: 34,
                    35: 35,
                    46: 46
                }],
                58: [function(t, e, i) {
                    var n = t(26),
                        o = t(46),
                        r = t(34),
                        a = t(35);
                    e.exports = function(t) {
                        var e = n.global,
                            i = {
                                display: !0,
                                animate: !0,
                                position: "chartArea",
                                angleLines: {
                                    display: !0,
                                    color: "rgba(0, 0, 0, 0.1)",
                                    lineWidth: 1
                                },
                                gridLines: {
                                    circular: !1
                                },
                                ticks: {
                                    showLabelBackdrop: !0,
                                    backdropColor: "rgba(255,255,255,0.75)",
                                    backdropPaddingY: 2,
                                    backdropPaddingX: 2,
                                    callback: a.formatters.linear
                                },
                                pointLabels: {
                                    display: !0,
                                    fontSize: 10,
                                    callback: function(t) {
                                        return t
                                    }
                                }
                            };

                        function s(t) {
                            var e = t.options;
                            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                        }

                        function l(t) {
                            var i = t.options.pointLabels,
                                n = o.valueOrDefault(i.fontSize, e.defaultFontSize),
                                r = o.valueOrDefault(i.fontStyle, e.defaultFontStyle),
                                a = o.valueOrDefault(i.fontFamily, e.defaultFontFamily);
                            return {
                                size: n,
                                style: r,
                                family: a,
                                font: o.fontString(n, r, a)
                            }
                        }

                        function c(t, e, i, n, o) {
                            return t === n || t === o ? {
                                start: e - i / 2,
                                end: e + i / 2
                            } : t < n || t > o ? {
                                start: e - i - 5,
                                end: e
                            } : {
                                start: e,
                                end: e + i + 5
                            }
                        }

                        function u(t) {
                            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                        }

                        function d(t, e, i, n) {
                            if (o.isArray(e))
                                for (var r = i.y, a = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, r), r += a;
                            else t.fillText(e, i.x, i.y)
                        }

                        function h(t, e, i) {
                            90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
                        }

                        function f(t) {
                            return o.isNumber(t) ? t : 0
                        }
                        var p = t.LinearScaleBase.extend({
                            setDimensions: function() {
                                var t = this,
                                    i = t.options,
                                    n = i.ticks;
                                t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                                var r = o.min([t.height, t.width]),
                                    a = o.valueOrDefault(n.fontSize, e.defaultFontSize);
                                t.drawingArea = i.display ? r / 2 - (a / 2 + n.backdropPaddingY) : r / 2
                            },
                            determineDataLimits: function() {
                                var t = this,
                                    e = t.chart,
                                    i = Number.POSITIVE_INFINITY,
                                    n = Number.NEGATIVE_INFINITY;
                                o.each(e.data.datasets, (function(r, a) {
                                    if (e.isDatasetVisible(a)) {
                                        var s = e.getDatasetMeta(a);
                                        o.each(r.data, (function(e, o) {
                                            var r = +t.getRightValue(e);
                                            isNaN(r) || s.data[o].hidden || (i = Math.min(r, i), n = Math.max(r, n))
                                        }))
                                    }
                                })), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
                            },
                            getTickLimit: function() {
                                var t = this.options.ticks,
                                    i = o.valueOrDefault(t.fontSize, e.defaultFontSize);
                                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
                            },
                            convertTicksToLabels: function() {
                                var e = this;
                                t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                            },
                            getLabelForIndex: function(t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t])
                            },
                            fit: function() {
                                var t, e;
                                this.options.pointLabels.display ? function(t) {
                                    var e, i, n, r = l(t),
                                        a = Math.min(t.height / 2, t.width / 2),
                                        u = {
                                            r: t.width,
                                            l: 0,
                                            t: t.height,
                                            b: 0
                                        },
                                        d = {};
                                    t.ctx.font = r.font, t._pointLabelSizes = [];
                                    var h, f, p, v = s(t);
                                    for (e = 0; e < v; e++) {
                                        n = t.getPointPosition(e, a), h = t.ctx, f = r.size, p = t.pointLabels[e] || "", i = o.isArray(p) ? {
                                            w: o.longestText(h, h.font, p),
                                            h: p.length * f + 1.5 * (p.length - 1) * f
                                        } : {
                                            w: h.measureText(p).width,
                                            h: f
                                        }, t._pointLabelSizes[e] = i;
                                        var g = t.getIndexAngle(e),
                                            m = o.toDegrees(g) % 360,
                                            y = c(m, n.x, i.w, 0, 180),
                                            b = c(m, n.y, i.h, 90, 270);
                                        y.start < u.l && (u.l = y.start, d.l = g), y.end > u.r && (u.r = y.end, d.r = g), b.start < u.t && (u.t = b.start, d.t = g), b.end > u.b && (u.b = b.end, d.b = g)
                                    }
                                    t.setReductions(a, u, d)
                                }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                            },
                            setReductions: function(t, e, i) {
                                var n = e.l / Math.sin(i.l),
                                    o = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                                    r = -e.t / Math.cos(i.t),
                                    a = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                                n = f(n), o = f(o), r = f(r), a = f(a), this.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (r + a) / 2)), this.setCenterPoint(n, o, r, a)
                            },
                            setCenterPoint: function(t, e, i, n) {
                                var o = this,
                                    r = o.width - e - o.drawingArea,
                                    a = t + o.drawingArea,
                                    s = i + o.drawingArea,
                                    l = o.height - n - o.drawingArea;
                                o.xCenter = Math.round((a + r) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
                            },
                            getIndexAngle: function(t) {
                                return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                            },
                            getDistanceFromCenterForValue: function(t) {
                                var e = this;
                                if (null === t) return 0;
                                var i = e.drawingArea / (e.max - e.min);
                                return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                            },
                            getPointPosition: function(t, e) {
                                var i = this.getIndexAngle(t) - Math.PI / 2;
                                return {
                                    x: Math.round(Math.cos(i) * e) + this.xCenter,
                                    y: Math.round(Math.sin(i) * e) + this.yCenter
                                }
                            },
                            getPointPositionForValue: function(t, e) {
                                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                            },
                            getBasePosition: function() {
                                var t = this.min,
                                    e = this.max;
                                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                            },
                            draw: function() {
                                var t = this,
                                    i = t.options,
                                    n = i.gridLines,
                                    r = i.ticks,
                                    a = o.valueOrDefault;
                                if (i.display) {
                                    var c = t.ctx,
                                        f = this.getIndexAngle(0),
                                        p = a(r.fontSize, e.defaultFontSize),
                                        v = a(r.fontStyle, e.defaultFontStyle),
                                        g = a(r.fontFamily, e.defaultFontFamily),
                                        m = o.fontString(p, v, g);
                                    o.each(t.ticks, (function(i, l) {
                                        if (l > 0 || r.reverse) {
                                            var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);
                                            if (n.display && 0 !== l && function(t, e, i, n) {
                                                    var r = t.ctx;
                                                    if (r.strokeStyle = o.valueAtIndexOrDefault(e.color, n - 1), r.lineWidth = o.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();
                                                    else {
                                                        var a = s(t);
                                                        if (0 === a) return;
                                                        r.beginPath();
                                                        var l = t.getPointPosition(0, i);
                                                        r.moveTo(l.x, l.y);
                                                        for (var c = 1; c < a; c++) l = t.getPointPosition(c, i), r.lineTo(l.x, l.y);
                                                        r.closePath(), r.stroke()
                                                    }
                                                }(t, n, u, l), r.display) {
                                                var d = a(r.fontColor, e.defaultFontColor);
                                                if (c.font = m, c.save(), c.translate(t.xCenter, t.yCenter), c.rotate(f), r.showLabelBackdrop) {
                                                    var h = c.measureText(i).width;
                                                    c.fillStyle = r.backdropColor, c.fillRect(-h / 2 - r.backdropPaddingX, -u - p / 2 - r.backdropPaddingY, h + 2 * r.backdropPaddingX, p + 2 * r.backdropPaddingY)
                                                }
                                                c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = d, c.fillText(i, 0, -u), c.restore()
                                            }
                                        }
                                    })), (i.angleLines.display || i.pointLabels.display) && function(t) {
                                        var i = t.ctx,
                                            n = t.options,
                                            r = n.angleLines,
                                            a = n.pointLabels;
                                        i.lineWidth = r.lineWidth, i.strokeStyle = r.color;
                                        var c = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                            f = l(t);
                                        i.textBaseline = "top";
                                        for (var p = s(t) - 1; p >= 0; p--) {
                                            if (r.display) {
                                                var v = t.getPointPosition(p, c);
                                                i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath()
                                            }
                                            if (a.display) {
                                                var g = t.getPointPosition(p, c + 5),
                                                    m = o.valueAtIndexOrDefault(a.fontColor, p, e.defaultFontColor);
                                                i.font = f.font, i.fillStyle = m;
                                                var y = t.getIndexAngle(p),
                                                    b = o.toDegrees(y);
                                                i.textAlign = u(b), h(b, t._pointLabelSizes[p], g), d(i, t.pointLabels[p] || "", g, f.size)
                                            }
                                        }
                                    }(t)
                                }
                            }
                        });
                        r.registerScaleType("radialLinear", p, i)
                    }
                }, {
                    26: 26,
                    34: 34,
                    35: 35,
                    46: 46
                }],
                59: [function(t, e, i) {
                    var n = t(1);
                    n = "function" == typeof n ? n : window.moment;
                    var o = t(26),
                        r = t(46),
                        a = t(33),
                        s = t(34),
                        l = Number.MIN_SAFE_INTEGER || -9007199254740991,
                        c = Number.MAX_SAFE_INTEGER || 9007199254740991,
                        u = {
                            millisecond: {
                                common: !0,
                                size: 1,
                                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                            },
                            second: {
                                common: !0,
                                size: 1e3,
                                steps: [1, 2, 5, 10, 15, 30]
                            },
                            minute: {
                                common: !0,
                                size: 6e4,
                                steps: [1, 2, 5, 10, 15, 30]
                            },
                            hour: {
                                common: !0,
                                size: 36e5,
                                steps: [1, 2, 3, 6, 12]
                            },
                            day: {
                                common: !0,
                                size: 864e5,
                                steps: [1, 2, 5]
                            },
                            week: {
                                common: !1,
                                size: 6048e5,
                                steps: [1, 2, 3, 4]
                            },
                            month: {
                                common: !0,
                                size: 2628e6,
                                steps: [1, 2, 3]
                            },
                            quarter: {
                                common: !1,
                                size: 7884e6,
                                steps: [1, 2, 3, 4]
                            },
                            year: {
                                common: !0,
                                size: 3154e7
                            }
                        },
                        d = Object.keys(u);

                    function h(t, e) {
                        return t - e
                    }

                    function f(t) {
                        var e, i, n, o = {},
                            r = [];
                        for (e = 0, i = t.length; e < i; ++e) o[n = t[e]] || (o[n] = !0, r.push(n));
                        return r
                    }

                    function p(t, e, i, n) {
                        var o = function(t, e, i) {
                                for (var n, o, r, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                                    if (o = t[(n = a + s >> 1) - 1] || null, r = t[n], !o) return {
                                        lo: null,
                                        hi: r
                                    };
                                    if (r[e] < i) a = n + 1;
                                    else {
                                        if (!(o[e] > i)) return {
                                            lo: o,
                                            hi: r
                                        };
                                        s = n - 1
                                    }
                                }
                                return {
                                    lo: r,
                                    hi: null
                                }
                            }(t, e, i),
                            r = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                            a = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
                            s = a[e] - r[e],
                            l = s ? (i - r[e]) / s : 0,
                            c = (a[n] - r[n]) * l;
                        return r[n] + c
                    }

                    function v(t, e) {
                        var i = e.parser,
                            o = e.parser || e.format;
                        return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof o ? n(t, o) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof o ? o(t) : t)
                    }

                    function g(t, e) {
                        if (r.isNullOrUndef(t)) return null;
                        var i = e.options.time,
                            n = v(e.getRightValue(t), i);
                        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
                    }

                    function m(t) {
                        for (var e = d.indexOf(t) + 1, i = d.length; e < i; ++e)
                            if (u[d[e]].common) return d[e]
                    }

                    function y(t, e, i, o) {
                        var a, s = o.time,
                            l = s.unit || function(t, e, i, n) {
                                var o, r, a, s = d.length;
                                for (o = d.indexOf(t); o < s - 1; ++o)
                                    if (a = (r = u[d[o]]).steps ? r.steps[r.steps.length - 1] : c, r.common && Math.ceil((i - e) / (a * r.size)) <= n) return d[o];
                                return d[s - 1]
                            }(s.minUnit, t, e, i),
                            h = m(l),
                            f = r.valueOrDefault(s.stepSize, s.unitStepSize),
                            p = "week" === l && s.isoWeekday,
                            v = o.ticks.major.enabled,
                            g = u[l],
                            y = n(t),
                            b = n(e),
                            x = [];
                        for (f || (f = function(t, e, i, n) {
                                var o, r, a, s = e - t,
                                    l = u[i],
                                    c = l.size,
                                    d = l.steps;
                                if (!d) return Math.ceil(s / (n * c));
                                for (o = 0, r = d.length; o < r && (a = d[o], !(Math.ceil(s / (c * a)) <= n)); ++o);
                                return a
                            }(t, e, l, i)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : l), (b = b.startOf(p ? "day" : l)) < e && b.add(1, l), a = n(y), v && h && !p && !s.round && (a.startOf(h), a.add(~~((y - a) / (g.size * f)) * f, l)); a < b; a.add(f, l)) x.push(+a);
                        return x.push(+a), x
                    }
                    e.exports = function() {
                        var t = a.extend({
                            initialize: function() {
                                if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                                this.mergeTicksOptions(), a.prototype.initialize.call(this)
                            },
                            update: function() {
                                var t = this,
                                    e = t.options;
                                return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), a.prototype.update.apply(t, arguments)
                            },
                            getRightValue: function(t) {
                                return t && void 0 !== t.t && (t = t.t), a.prototype.getRightValue.call(this, t)
                            },
                            determineDataLimits: function() {
                                var t, e, i, o, a, s, u = this,
                                    d = u.chart,
                                    p = u.options.time,
                                    v = p.unit || "day",
                                    m = c,
                                    y = l,
                                    b = [],
                                    x = [],
                                    w = [];
                                for (t = 0, i = d.data.labels.length; t < i; ++t) w.push(g(d.data.labels[t], u));
                                for (t = 0, i = (d.data.datasets || []).length; t < i; ++t)
                                    if (d.isDatasetVisible(t))
                                        if (a = d.data.datasets[t].data, r.isObject(a[0]))
                                            for (x[t] = [], e = 0, o = a.length; e < o; ++e) s = g(a[e], u), b.push(s), x[t][e] = s;
                                        else b.push.apply(b, w), x[t] = w.slice(0);
                                else x[t] = [];
                                w.length && (w = f(w).sort(h), m = Math.min(m, w[0]), y = Math.max(y, w[w.length - 1])), b.length && (b = f(b).sort(h), m = Math.min(m, b[0]), y = Math.max(y, b[b.length - 1])), m = g(p.min, u) || m, y = g(p.max, u) || y, m = m === c ? +n().startOf(v) : m, y = y === l ? +n().endOf(v) + 1 : y, u.min = Math.min(m, y), u.max = Math.max(m + 1, y), u._horizontal = u.isHorizontal(), u._table = [], u._timestamps = {
                                    data: b,
                                    datasets: x,
                                    labels: w
                                }
                            },
                            buildTicks: function() {
                                var t, e, i, o = this,
                                    r = o.min,
                                    a = o.max,
                                    s = o.options,
                                    l = s.time,
                                    c = [],
                                    h = [];
                                switch (s.ticks.source) {
                                    case "data":
                                        c = o._timestamps.data;
                                        break;
                                    case "labels":
                                        c = o._timestamps.labels;
                                        break;
                                    case "auto":
                                    default:
                                        c = y(r, a, o.getLabelCapacity(r), s)
                                }
                                for ("ticks" === s.bounds && c.length && (r = c[0], a = c[c.length - 1]), r = g(l.min, o) || r, a = g(l.max, o) || a, t = 0, e = c.length; t < e; ++t)(i = c[t]) >= r && i <= a && h.push(i);
                                return o.min = r, o.max = a, o._unit = l.unit || function(t, e, i, o) {
                                        var r, a, s = n.duration(n(o).diff(n(i)));
                                        for (r = d.length - 1; r >= d.indexOf(e); r--)
                                            if (a = d[r], u[a].common && s.as(a) >= t.length) return a;
                                        return d[e ? d.indexOf(e) : 0]
                                    }(h, l.minUnit, o.min, o.max), o._majorUnit = m(o._unit), o._table = function(t, e, i, n) {
                                        if ("linear" === n || !t.length) return [{
                                            time: e,
                                            pos: 0
                                        }, {
                                            time: i,
                                            pos: 1
                                        }];
                                        var o, r, a, s, l, c = [],
                                            u = [e];
                                        for (o = 0, r = t.length; o < r; ++o)(s = t[o]) > e && s < i && u.push(s);
                                        for (u.push(i), o = 0, r = u.length; o < r; ++o) l = u[o + 1], a = u[o - 1], s = u[o], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || c.push({
                                            time: s,
                                            pos: o / (r - 1)
                                        });
                                        return c
                                    }(o._timestamps.data, r, a, s.distribution), o._offsets = function(t, e, i, n, o) {
                                        var r, a, s = 0,
                                            l = 0;
                                        return o.offset && e.length && (o.time.min || (r = e.length > 1 ? e[1] : n, a = e[0], s = (p(t, "time", r, "pos") - p(t, "time", a, "pos")) / 2), o.time.max || (r = e[e.length - 1], a = e.length > 1 ? e[e.length - 2] : i, l = (p(t, "time", r, "pos") - p(t, "time", a, "pos")) / 2)), {
                                            left: s,
                                            right: l
                                        }
                                    }(o._table, h, r, a, s), o._labelFormat = function(t, e) {
                                        var i, n, o, r = t.length;
                                        for (i = 0; i < r; i++) {
                                            if (0 !== (n = v(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                            0 === n.second() && 0 === n.minute() && 0 === n.hour() || (o = !0)
                                        }
                                        return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                                    }(o._timestamps.data, l),
                                    function(t, e) {
                                        var i, o, r, a, s = [];
                                        for (i = 0, o = t.length; i < o; ++i) r = t[i], a = !!e && r === +n(r).startOf(e), s.push({
                                            value: r,
                                            major: a
                                        });
                                        return s
                                    }(h, o._majorUnit)
                            },
                            getLabelForIndex: function(t, e) {
                                var i = this.chart.data,
                                    n = this.options.time,
                                    o = i.labels && t < i.labels.length ? i.labels[t] : "",
                                    a = i.datasets[e].data[t];
                                return r.isObject(a) && (o = this.getRightValue(a)), n.tooltipFormat ? v(o, n).format(n.tooltipFormat) : "string" == typeof o ? o : v(o, n).format(this._labelFormat)
                            },
                            tickFormatFunction: function(t, e, i, n) {
                                var o = this.options,
                                    a = t.valueOf(),
                                    s = o.time.displayFormats,
                                    l = s[this._unit],
                                    c = this._majorUnit,
                                    u = s[c],
                                    d = t.clone().startOf(c).valueOf(),
                                    h = o.ticks.major,
                                    f = h.enabled && c && u && a === d,
                                    p = t.format(n || (f ? u : l)),
                                    v = f ? h : o.ticks.minor,
                                    g = r.valueOrDefault(v.callback, v.userCallback);
                                return g ? g(p, e, i) : p
                            },
                            convertTicksToLabels: function(t) {
                                var e, i, o = [];
                                for (e = 0, i = t.length; e < i; ++e) o.push(this.tickFormatFunction(n(t[e].value), e, t));
                                return o
                            },
                            getPixelForOffset: function(t) {
                                var e = this,
                                    i = e._horizontal ? e.width : e.height,
                                    n = e._horizontal ? e.left : e.top,
                                    o = p(e._table, "time", t, "pos");
                                return n + i * (e._offsets.left + o) / (e._offsets.left + 1 + e._offsets.right)
                            },
                            getPixelForValue: function(t, e, i) {
                                var n = null;
                                if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n)
                            },
                            getPixelForTick: function(t) {
                                var e = this.getTicks();
                                return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                            },
                            getValueForPixel: function(t) {
                                var e = this,
                                    i = e._horizontal ? e.width : e.height,
                                    o = e._horizontal ? e.left : e.top,
                                    r = (i ? (t - o) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                    a = p(e._table, "pos", r, "time");
                                return n(a)
                            },
                            getLabelWidth: function(t) {
                                var e = this.options.ticks,
                                    i = this.ctx.measureText(t).width,
                                    n = r.toRadians(e.maxRotation),
                                    a = Math.cos(n),
                                    s = Math.sin(n);
                                return i * a + r.valueOrDefault(e.fontSize, o.global.defaultFontSize) * s
                            },
                            getLabelCapacity: function(t) {
                                var e = this,
                                    i = e.options.time.displayFormats.millisecond,
                                    o = e.tickFormatFunction(n(t), 0, [], i),
                                    r = e.getLabelWidth(o),
                                    a = e.isHorizontal() ? e.width : e.height,
                                    s = Math.floor(a / r);
                                return s > 0 ? s : 1
                            }
                        });
                        s.registerScaleType("time", t, {
                            position: "bottom",
                            distribution: "linear",
                            bounds: "data",
                            time: {
                                parser: !1,
                                format: !1,
                                unit: !1,
                                round: !1,
                                displayFormat: !1,
                                isoWeekday: !1,
                                minUnit: "millisecond",
                                displayFormats: {
                                    millisecond: "h:mm:ss.SSS a",
                                    second: "h:mm:ss a",
                                    minute: "h:mm a",
                                    hour: "hA",
                                    day: "MMM D",
                                    week: "ll",
                                    month: "MMM YYYY",
                                    quarter: "[Q]Q - YYYY",
                                    year: "YYYY"
                                }
                            },
                            ticks: {
                                autoSkip: !1,
                                source: "auto",
                                major: {
                                    enabled: !1
                                }
                            }
                        })
                    }
                }, {
                    1: 1,
                    26: 26,
                    33: 33,
                    34: 34,
                    46: 46
                }]
            }, {}, [7])(7)
        }))
    }).call(this, i(99)(t), i(54))
}, function(t, e, i) {
    var n = i(5),
        o = i(132),
        r = i(52);
    n({
        target: "Array",
        proto: !0
    }, {
        fill: o
    }), r("fill")
}, function(t, e, i) {
    "use strict";
    var n = i(5),
        o = i(24).findIndex,
        r = i(52),
        a = !0;
    "findIndex" in [] && Array(1).findIndex((function() {
        a = !1
    })), n({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        findIndex: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r("findIndex")
}, function(t, e, i) {
    var n = i(5),
        o = Math.log,
        r = Math.LOG10E;
    n({
        target: "Math",
        stat: !0
    }, {
        log10: function(t) {
            return o(t) * r
        }
    })
}, function(t, e, i) {
    i(5)({
        target: "Math",
        stat: !0
    }, {
        sign: i(228)
    })
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e, i) {
    i(5)({
        target: "Number",
        stat: !0
    }, {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, i) {
    i(5)({
        target: "Number",
        stat: !0
    }, {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, i) {
    i(5)({
        target: "Number",
        stat: !0
    }, {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i(69), i(79), i(80), i(95), i(66), i(64), i(102), i(110), i(93), i(123), i(70), i(112), i(127), i(129), i(68), i(113), i(81), i(116), i(86), i(203), i(100), i(84);

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*! PhotoSwipe - v4.1.1 - 2015-12-24
         * http://photoswipe.com
         * Copyright (c) 2015 Dmitry Semenov; */
        ! function(n, o) {
            "function" == typeof define && i(76) ? define(o) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? t.exports = o() : window.PhotoSwipe = o()
        }(0, (function() {
            return function(t, i, n, o) {
                var r = {
                    features: null,
                    bind: function(t, e, i, n) {
                        var o = (n ? "remove" : "add") + "EventListener";
                        e = e.split(" ");
                        for (var r = 0; r < e.length; r++) e[r] && t[o](e[r], i, !1)
                    },
                    isArray: function(t) {
                        return t instanceof Array
                    },
                    createEl: function(t, e) {
                        var i = document.createElement(e || "div");
                        return t && (i.className = t), i
                    },
                    getScrollY: function() {
                        var t = window.pageYOffset;
                        return void 0 !== t ? t : document.documentElement.scrollTop
                    },
                    unbind: function(t, e, i) {
                        r.bind(t, e, i, !0)
                    },
                    removeClass: function(t, e) {
                        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    },
                    addClass: function(t, e) {
                        r.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                    },
                    hasClass: function(t, e) {
                        return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                    },
                    getChildByClass: function(t, e) {
                        for (var i = t.firstChild; i;) {
                            if (r.hasClass(i, e)) return i;
                            i = i.nextSibling
                        }
                    },
                    arraySearch: function(t, e, i) {
                        for (var n = t.length; n--;)
                            if (t[n][i] === e) return n;
                        return -1
                    },
                    extend: function(t, e, i) {
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                if (i && t.hasOwnProperty(n)) continue;
                                t[n] = e[n]
                            }
                    },
                    easing: {
                        sine: {
                            out: function(t) {
                                return Math.sin(t * (Math.PI / 2))
                            },
                            inOut: function(t) {
                                return -(Math.cos(Math.PI * t) - 1) / 2
                            }
                        },
                        cubic: {
                            out: function(t) {
                                return --t * t * t + 1
                            }
                        }
                    },
                    detectFeatures: function() {
                        if (r.features) return r.features;
                        var t = r.createEl().style,
                            e = "",
                            i = {};
                        if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                            var n = navigator.userAgent;
                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                o && o.length > 0 && ((o = parseInt(o[1], 10)) >= 1 && 8 > o && (i.isOldIOSPhone = !0))
                            }
                            var a = n.match(/Android\s([0-9\.]*)/),
                                s = a ? a[1] : 0;
                            (s = parseFloat(s)) >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                        }
                        for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
                            e = d[h];
                            for (var f = 0; 3 > f; f++) l = u[f], c = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in t && (i[l] = c);
                            e && !i.raf && (e = e.toLowerCase(), i.raf = window[e + "RequestAnimationFrame"], i.raf && (i.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
                        }
                        if (!i.raf) {
                            var p = 0;
                            i.raf = function(t) {
                                var e = (new Date).getTime(),
                                    i = Math.max(0, 16 - (e - p)),
                                    n = window.setTimeout((function() {
                                        t(e + i)
                                    }), i);
                                return p = e + i, n
                            }, i.caf = function(t) {
                                clearTimeout(t)
                            }
                        }
                        return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, r.features = i, i
                    }
                };
                r.detectFeatures(), r.features.oldIE && (r.bind = function(t, i, n, o) {
                    i = i.split(" ");
                    for (var r, a = (o ? "detach" : "attach") + "Event", s = function() {
                            n.handleEvent.call(n)
                        }, l = 0; l < i.length; l++)
                        if (r = i[l])
                            if ("object" == e(n) && n.handleEvent) {
                                if (o) {
                                    if (!n["oldIE" + r]) return !1
                                } else n["oldIE" + r] = s;
                                t[a]("on" + r, n["oldIE" + r])
                            } else t[a]("on" + r, n)
                });
                var a = this,
                    s = {
                        allowPanToNext: !0,
                        spacing: .12,
                        bgOpacity: 1,
                        mouseUsed: !1,
                        loop: !0,
                        pinchToClose: !0,
                        closeOnScroll: !0,
                        closeOnVerticalDrag: !0,
                        verticalDragRange: .75,
                        hideAnimationDuration: 333,
                        showAnimationDuration: 333,
                        showHideOpacity: !1,
                        focus: !0,
                        escKey: !0,
                        arrowKeys: !0,
                        mainScrollEndFriction: .35,
                        panEndFriction: .35,
                        isClickableElement: function(t) {
                            return "A" === t.tagName
                        },
                        getDoubleTapZoom: function(t, e) {
                            return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
                        },
                        maxSpreadZoom: 1.33,
                        modal: !0,
                        scaleMode: "fit"
                    };
                r.extend(s, o);
                var l, c, u, d, h, f, p, v, g, m, y, b, x, w, k, S, C, T, M, A, O, I, P, _, E, D, $, L, R, F, W, N, V, j, H, z, B, Y, U, X, q, K, Q, G, Z, J, tt, et, it, nt, ot, rt, at, st, lt, ct = {
                        x: 0,
                        y: 0
                    },
                    ut = {
                        x: 0,
                        y: 0
                    },
                    dt = {
                        x: 0,
                        y: 0
                    },
                    ht = {},
                    ft = 0,
                    pt = {},
                    vt = {
                        x: 0,
                        y: 0
                    },
                    gt = 0,
                    mt = !0,
                    yt = [],
                    bt = {},
                    xt = !1,
                    wt = function(t, e) {
                        r.extend(a, e.publicMethods), yt.push(t)
                    },
                    kt = function(t) {
                        var e = Ne();
                        return t > e - 1 ? t - e : 0 > t ? e + t : t
                    },
                    St = {},
                    Ct = function(t, e) {
                        return St[t] || (St[t] = []), St[t].push(e)
                    },
                    Tt = function(t) {
                        var e = St[t];
                        if (e) {
                            var i = Array.prototype.slice.call(arguments);
                            i.shift();
                            for (var n = 0; n < e.length; n++) e[n].apply(a, i)
                        }
                    },
                    Mt = function() {
                        return (new Date).getTime()
                    },
                    At = function(t) {
                        at = t, a.bg.style.opacity = t * s.bgOpacity
                    },
                    Ot = function(t, e, i, n, o) {
                        (!xt || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), t[I] = b + e + "px, " + i + "px" + x + " scale(" + n + ")"
                    },
                    It = function(t) {
                        et && (t && (m > a.currItem.fitRatio ? xt || (qe(a.currItem, !1, !0), xt = !0) : xt && (qe(a.currItem), xt = !1)), Ot(et, dt.x, dt.y, m))
                    },
                    Pt = function(t) {
                        t.container && Ot(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
                    },
                    _t = function(t, e) {
                        e[I] = b + t + "px, 0px" + x
                    },
                    Et = function(t, e) {
                        if (!s.loop && e) {
                            var i = d + (vt.x * ft - t) / vt.x,
                                n = Math.round(t - ue.x);
                            (0 > i && n > 0 || i >= Ne() - 1 && 0 > n) && (t = ue.x + n * s.mainScrollEndFriction)
                        }
                        ue.x = t, _t(t, h)
                    },
                    Dt = function(t, e) {
                        var i = de[t] - pt[t];
                        return ut[t] + ct[t] + i - i * (e / y)
                    },
                    $t = function(t, e) {
                        t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
                    },
                    Lt = function(t) {
                        t.x = Math.round(t.x), t.y = Math.round(t.y)
                    },
                    Rt = null,
                    Ft = function e() {
                        Rt && (r.unbind(document, "mousemove", e), r.addClass(t, "pswp--has_mouse"), s.mouseUsed = !0, Tt("mouseUsed")), Rt = setTimeout((function() {
                            Rt = null
                        }), 100)
                    },
                    Wt = function(t, e) {
                        var i = Be(a.currItem, ht, t);
                        return e && (tt = i), i
                    },
                    Nt = function(t) {
                        return t || (t = a.currItem), t.initialZoomLevel
                    },
                    Vt = function(t) {
                        return t || (t = a.currItem), t.w > 0 ? s.maxSpreadZoom : 1
                    },
                    jt = function(t, e, i, n) {
                        return n === a.currItem.initialZoomLevel ? (i[t] = a.currItem.initialPosition[t], !0) : (i[t] = Dt(t, n), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] && (i[t] = e.max[t], !0))
                    },
                    Ht = function(t) {
                        var e = "";
                        s.escKey && 27 === t.keyCode ? e = "close" : s.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, a[e]()))
                    },
                    zt = function(t) {
                        t && (q || X || it || z) && (t.preventDefault(), t.stopPropagation())
                    },
                    Bt = function() {
                        a.setScrollOffset(0, r.getScrollY())
                    },
                    Yt = {},
                    Ut = 0,
                    Xt = function(t) {
                        Yt[t] && (Yt[t].raf && D(Yt[t].raf), Ut--, delete Yt[t])
                    },
                    qt = function(t) {
                        Yt[t] && Xt(t), Yt[t] || (Ut++, Yt[t] = {})
                    },
                    Kt = function() {
                        for (var t in Yt) Yt.hasOwnProperty(t) && Xt(t)
                    },
                    Qt = function(t, e, i, n, o, r, a) {
                        var s, l = Mt();
                        qt(t);
                        ! function c() {
                            if (Yt[t]) {
                                if ((s = Mt() - l) >= n) return Xt(t), r(i), void(a && a());
                                r((i - e) * o(s / n) + e), Yt[t].raf = E(c)
                            }
                        }()
                    },
                    Gt = {
                        shout: Tt,
                        listen: Ct,
                        viewportSize: ht,
                        options: s,
                        isMainScrollAnimating: function() {
                            return it
                        },
                        getZoomLevel: function() {
                            return m
                        },
                        getCurrentIndex: function() {
                            return d
                        },
                        isDragging: function() {
                            return Y
                        },
                        isZooming: function() {
                            return Z
                        },
                        setScrollOffset: function(t, e) {
                            pt.x = t, F = pt.y = e, Tt("updateScrollOffset", pt)
                        },
                        applyZoomPan: function(t, e, i, n) {
                            dt.x = e, dt.y = i, m = t, It(n)
                        },
                        init: function() {
                            if (!l && !c) {
                                var e;
                                a.framework = r, a.template = t, a.bg = r.getChildByClass(t, "pswp__bg"), $ = t.className, l = !0, W = r.detectFeatures(), E = W.raf, D = W.caf, I = W.transform, R = W.oldIE, a.scrollWrap = r.getChildByClass(t, "pswp__scroll-wrap"), a.container = r.getChildByClass(a.scrollWrap, "pswp__container"), h = a.container.style, a.itemHolders = S = [{
                                        el: a.container.children[0],
                                        wrap: 0,
                                        index: -1
                                    }, {
                                        el: a.container.children[1],
                                        wrap: 0,
                                        index: -1
                                    }, {
                                        el: a.container.children[2],
                                        wrap: 0,
                                        index: -1
                                    }], S[0].el.style.display = S[2].el.style.display = "none",
                                    function() {
                                        if (I) {
                                            var e = W.perspective && !_;
                                            return b = "translate" + (e ? "3d(" : "("), void(x = W.perspective ? ", 0px)" : ")")
                                        }
                                        I = "left", r.addClass(t, "pswp--ie"), _t = function(t, e) {
                                            e.left = t + "px"
                                        }, Pt = function(t) {
                                            var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                i = t.container.style,
                                                n = e * t.w,
                                                o = e * t.h;
                                            i.width = n + "px", i.height = o + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
                                        }, It = function() {
                                            if (et) {
                                                var t = et,
                                                    e = a.currItem,
                                                    i = e.fitRatio > 1 ? 1 : e.fitRatio,
                                                    n = i * e.w,
                                                    o = i * e.h;
                                                t.width = n + "px", t.height = o + "px", t.left = dt.x + "px", t.top = dt.y + "px"
                                            }
                                        }
                                    }(), g = {
                                        resize: a.updateSize,
                                        scroll: Bt,
                                        keydown: Ht,
                                        click: zt
                                    };
                                var n = W.isOldIOSPhone || W.isOldAndroid || W.isMobileOpera;
                                for (W.animationName && W.transform && !n || (s.showAnimationDuration = s.hideAnimationDuration = 0), e = 0; e < yt.length; e++) a["init" + yt[e]]();
                                if (i)(a.ui = new i(a, r)).init();
                                Tt("firstUpdate"), d = d || s.index || 0, (isNaN(d) || 0 > d || d >= Ne()) && (d = 0), a.currItem = We(d), (W.isOldIOSPhone || W.isOldAndroid) && (mt = !1), t.setAttribute("aria-hidden", "false"), s.modal && (mt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = r.getScrollY() + "px")), void 0 === F && (Tt("initialLayout"), F = L = r.getScrollY());
                                var o = "pswp--open ";
                                for (s.mainClass && (o += s.mainClass + " "), s.showHideOpacity && (o += "pswp--animate_opacity "), o += _ ? "pswp--touch" : "pswp--notouch", o += W.animationName ? " pswp--css_animation" : "", o += W.svg ? " pswp--svg" : "", r.addClass(t, o), a.updateSize(), f = -1, gt = null, e = 0; 3 > e; e++) _t((e + f) * vt.x, S[e].el.style);
                                R || r.bind(a.scrollWrap, v, a), Ct("initialZoomInEnd", (function() {
                                    a.setContent(S[0], d - 1), a.setContent(S[2], d + 1), S[0].el.style.display = S[2].el.style.display = "block", s.focus && t.focus(), r.bind(document, "keydown", a), W.transform && r.bind(a.scrollWrap, "click", a), s.mouseUsed || r.bind(document, "mousemove", Ft), r.bind(window, "resize scroll", a), Tt("bindEvents")
                                })), a.setContent(S[1], d), a.updateCurrItem(), Tt("afterInit"), mt || (w = setInterval((function() {
                                    Ut || Y || Z || m !== a.currItem.initialZoomLevel || a.updateSize()
                                }), 1e3)), r.addClass(t, "pswp--visible")
                            }
                        },
                        close: function() {
                            l && (l = !1, c = !0, Tt("close"), r.unbind(window, "resize", a), r.unbind(window, "scroll", g.scroll), r.unbind(document, "keydown", a), r.unbind(document, "mousemove", Ft), W.transform && r.unbind(a.scrollWrap, "click", a), Y && r.unbind(window, p, a), Tt("unbindEvents"), Ve(a.currItem, null, !0, a.destroy))
                        },
                        destroy: function() {
                            Tt("destroy"), $e && clearTimeout($e), t.setAttribute("aria-hidden", "true"), t.className = $, w && clearInterval(w), r.unbind(a.scrollWrap, v, a), r.unbind(window, "scroll", a), pe(), Kt(), St = null
                        },
                        panTo: function(t, e, i) {
                            i || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), dt.x = t, dt.y = e, It()
                        },
                        handleEvent: function(t) {
                            t = t || window.event, g[t.type] && g[t.type](t)
                        },
                        goTo: function(t) {
                            var e = (t = kt(t)) - d;
                            gt = e, d = t, a.currItem = We(d), ft -= e, Et(vt.x * ft), Kt(), it = !1, a.updateCurrItem()
                        },
                        next: function() {
                            a.goTo(d + 1)
                        },
                        prev: function() {
                            a.goTo(d - 1)
                        },
                        updateCurrZoomItem: function(t) {
                            if (t && Tt("beforeChange", 0), S[1].el.children.length) {
                                var e = S[1].el.children[0];
                                et = r.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                            } else et = null;
                            tt = a.currItem.bounds, y = m = a.currItem.initialZoomLevel, dt.x = tt.center.x, dt.y = tt.center.y, t && Tt("afterChange")
                        },
                        invalidateCurrItems: function() {
                            k = !0;
                            for (var t = 0; 3 > t; t++) S[t].item && (S[t].item.needsUpdate = !0)
                        },
                        updateCurrItem: function(t) {
                            if (0 !== gt) {
                                var e, i = Math.abs(gt);
                                if (!(t && 2 > i)) {
                                    a.currItem = We(d), xt = !1, Tt("beforeChange", gt), i >= 3 && (f += gt + (gt > 0 ? -3 : 3), i = 3);
                                    for (var n = 0; i > n; n++) gt > 0 ? (e = S.shift(), S[2] = e, _t((++f + 2) * vt.x, e.el.style), a.setContent(e, d - i + n + 1 + 1)) : (e = S.pop(), S.unshift(e), _t(--f * vt.x, e.el.style), a.setContent(e, d + i - n - 1 - 1));
                                    if (et && 1 === Math.abs(gt)) {
                                        var o = We(C);
                                        o.initialZoomLevel !== m && (Be(o, ht), qe(o), Pt(o))
                                    }
                                    gt = 0, a.updateCurrZoomItem(), C = d, Tt("afterChange")
                                }
                            }
                        },
                        updateSize: function(e) {
                            if (!mt && s.modal) {
                                var i = r.getScrollY();
                                if (F !== i && (t.style.top = i + "px", F = i), !e && bt.x === window.innerWidth && bt.y === window.innerHeight) return;
                                bt.x = window.innerWidth, bt.y = window.innerHeight, t.style.height = bt.y + "px"
                            }
                            if (ht.x = a.scrollWrap.clientWidth, ht.y = a.scrollWrap.clientHeight, Bt(), vt.x = ht.x + Math.round(ht.x * s.spacing), vt.y = ht.y, Et(vt.x * ft), Tt("beforeResize"), void 0 !== f) {
                                for (var n, o, l, c = 0; 3 > c; c++) n = S[c], _t((c + f) * vt.x, n.el.style), l = d + c - 1, s.loop && Ne() > 2 && (l = kt(l)), (o = We(l)) && (k || o.needsUpdate || !o.bounds) ? (a.cleanSlide(o), a.setContent(n, l), 1 === c && (a.currItem = o, a.updateCurrZoomItem(!0)), o.needsUpdate = !1) : -1 === n.index && l >= 0 && a.setContent(n, l), o && o.container && (Be(o, ht), qe(o), Pt(o));
                                k = !1
                            }
                            y = m = a.currItem.initialZoomLevel, (tt = a.currItem.bounds) && (dt.x = tt.center.x, dt.y = tt.center.y, It(!0)), Tt("resize")
                        },
                        zoomTo: function(t, e, i, n, o) {
                            e && (y = m, de.x = Math.abs(e.x) - dt.x, de.y = Math.abs(e.y) - dt.y, $t(ut, dt));
                            var a = Wt(t, !1),
                                s = {};
                            jt("x", a, s, t), jt("y", a, s, t);
                            var l = m,
                                c = dt.x,
                                u = dt.y;
                            Lt(s);
                            var d = function(e) {
                                1 === e ? (m = t, dt.x = s.x, dt.y = s.y) : (m = (t - l) * e + l, dt.x = (s.x - c) * e + c, dt.y = (s.y - u) * e + u), o && o(e), It(1 === e)
                            };
                            i ? Qt("customZoomTo", 0, 1, i, n || r.easing.sine.inOut, d) : d(1)
                        }
                    },
                    Zt = {},
                    Jt = {},
                    te = {},
                    ee = {},
                    ie = {},
                    ne = [],
                    oe = {},
                    re = [],
                    ae = {},
                    se = 0,
                    le = {
                        x: 0,
                        y: 0
                    },
                    ce = 0,
                    ue = {
                        x: 0,
                        y: 0
                    },
                    de = {
                        x: 0,
                        y: 0
                    },
                    he = {
                        x: 0,
                        y: 0
                    },
                    fe = function(t, e) {
                        return ae.x = Math.abs(t.x - e.x), ae.y = Math.abs(t.y - e.y), Math.sqrt(ae.x * ae.x + ae.y * ae.y)
                    },
                    pe = function() {
                        K && (D(K), K = null)
                    },
                    ve = {},
                    ge = function(t, e) {
                        return ve.prevent = ! function t(e, i) {
                            return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (i(e) ? e : t(e.parentNode, i)))
                        }(t.target, s.isClickableElement), Tt("preventDragEvent", t, e, ve), ve.prevent
                    },
                    me = function(t, e) {
                        return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
                    },
                    ye = function(t, e, i) {
                        i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y)
                    },
                    be = function() {
                        var t = dt.y - a.currItem.initialPosition.y;
                        return 1 - Math.abs(t / (ht.y / 2))
                    },
                    xe = {},
                    we = {},
                    ke = [],
                    Se = function(t) {
                        for (; ke.length > 0;) ke.pop();
                        return P ? (lt = 0, ne.forEach((function(t) {
                            0 === lt ? ke[0] = t : 1 === lt && (ke[1] = t), lt++
                        }))) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (ke[0] = me(t.touches[0], xe), t.touches.length > 1 && (ke[1] = me(t.touches[1], we))) : (xe.x = t.pageX, xe.y = t.pageY, xe.id = "", ke[0] = xe), ke
                    },
                    Ce = function(t, e) {
                        var i, n, o, r, l = dt[t] + e[t],
                            c = e[t] > 0,
                            u = ue.x + e.x,
                            d = ue.x - oe.x;
                        return i = l > tt.min[t] || l < tt.max[t] ? s.panEndFriction : 1, l = dt[t] + e[t] * i, !s.allowPanToNext && m !== a.currItem.initialZoomLevel || (et ? "h" !== nt || "x" !== t || X || (c ? (l > tt.min[t] && (i = s.panEndFriction, tt.min[t] - l, n = tt.min[t] - ut[t]), (0 >= n || 0 > d) && Ne() > 1 ? (r = u, 0 > d && u > oe.x && (r = oe.x)) : tt.min.x !== tt.max.x && (o = l)) : (l < tt.max[t] && (i = s.panEndFriction, l - tt.max[t], n = ut[t] - tt.max[t]), (0 >= n || d > 0) && Ne() > 1 ? (r = u, d > 0 && u < oe.x && (r = oe.x)) : tt.min.x !== tt.max.x && (o = l))) : r = u, "x" !== t) ? void(it || Q || m > a.currItem.fitRatio && (dt[t] += e[t] * i)) : (void 0 !== r && (Et(r, !0), Q = r !== oe.x), tt.min.x !== tt.max.x && (void 0 !== o ? dt.x = o : Q || (dt.x += e.x * i)), void 0 !== r)
                    },
                    Te = function(t) {
                        if (!("mousedown" === t.type && t.button > 0)) {
                            if (Fe) return void t.preventDefault();
                            if (!B || "mousedown" !== t.type) {
                                if (ge(t, !0) && t.preventDefault(), Tt("pointerDown"), P) {
                                    var e = r.arraySearch(ne, t.pointerId, "id");
                                    0 > e && (e = ne.length), ne[e] = {
                                        x: t.pageX,
                                        y: t.pageY,
                                        id: t.pointerId
                                    }
                                }
                                var i = Se(t),
                                    n = i.length;
                                G = null, Kt(), Y && 1 !== n || (Y = ot = !0, r.bind(window, p, a), H = st = rt = z = Q = q = U = X = !1, nt = null, Tt("firstTouchStart", i), $t(ut, dt), ct.x = ct.y = 0, $t(ee, i[0]), $t(ie, ee), oe.x = vt.x * ft, re = [{
                                    x: ee.x,
                                    y: ee.y
                                }], V = N = Mt(), Wt(m, !0), pe(), function t() {
                                    Y && (K = E(t), Ae())
                                }()), !Z && n > 1 && !it && !Q && (y = m, X = !1, Z = U = !0, ct.y = ct.x = 0, $t(ut, dt), $t(Zt, i[0]), $t(Jt, i[1]), ye(Zt, Jt, he), de.x = Math.abs(he.x) - dt.x, de.y = Math.abs(he.y) - dt.y, J = fe(Zt, Jt))
                            }
                        }
                    },
                    Me = function(t) {
                        if (t.preventDefault(), P) {
                            var e = r.arraySearch(ne, t.pointerId, "id");
                            if (e > -1) {
                                var i = ne[e];
                                i.x = t.pageX, i.y = t.pageY
                            }
                        }
                        if (Y) {
                            var n = Se(t);
                            if (nt || q || Z) G = n;
                            else if (ue.x !== vt.x * ft) nt = "h";
                            else {
                                var o = Math.abs(n[0].x - ee.x) - Math.abs(n[0].y - ee.y);
                                Math.abs(o) >= 10 && (nt = o > 0 ? "h" : "v", G = n)
                            }
                        }
                    },
                    Ae = function() {
                        if (G) {
                            var t = G.length;
                            if (0 !== t)
                                if ($t(Zt, G[0]), te.x = Zt.x - ee.x, te.y = Zt.y - ee.y, Z && t > 1) {
                                    if (ee.x = Zt.x, ee.y = Zt.y, !te.x && !te.y && function(t, e) {
                                            return t.x === e.x && t.y === e.y
                                        }(G[1], Jt)) return;
                                    $t(Jt, G[1]), X || (X = !0, Tt("zoomGestureStarted"));
                                    var e = fe(Zt, Jt),
                                        i = Ee(e);
                                    i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (st = !0);
                                    var n = 1,
                                        o = Nt(),
                                        r = Vt();
                                    if (o > i)
                                        if (s.pinchToClose && !st && y <= a.currItem.initialZoomLevel) {
                                            var l = 1 - (o - i) / (o / 1.2);
                                            At(l), Tt("onPinchClose", l), rt = !0
                                        } else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
                                    else i > r && ((n = (i - r) / (6 * o)) > 1 && (n = 1), i = r + n * o);
                                    0 > n && (n = 0), e, ye(Zt, Jt, le), ct.x += le.x - he.x, ct.y += le.y - he.y, $t(he, le), dt.x = Dt("x", i), dt.y = Dt("y", i), H = i > m, m = i, It()
                                } else {
                                    if (!nt) return;
                                    if (ot && (ot = !1, Math.abs(te.x) >= 10 && (te.x -= G[0].x - ie.x), Math.abs(te.y) >= 10 && (te.y -= G[0].y - ie.y)), ee.x = Zt.x, ee.y = Zt.y, 0 === te.x && 0 === te.y) return;
                                    if ("v" === nt && s.closeOnVerticalDrag && "fit" === s.scaleMode && m === a.currItem.initialZoomLevel) {
                                        ct.y += te.y, dt.y += te.y;
                                        var c = be();
                                        return z = !0, Tt("onVerticalDrag", c), At(c), void It()
                                    }(function(t, e, i) {
                                        if (t - V > 50) {
                                            var n = re.length > 2 ? re.shift() : {};
                                            n.x = e, n.y = i, re.push(n), V = t
                                        }
                                    })(Mt(), Zt.x, Zt.y), q = !0, tt = a.currItem.bounds, Ce("x", te) || (Ce("y", te), Lt(dt), It())
                                }
                        }
                    },
                    Oe = function(t) {
                        if (W.isOldAndroid) {
                            if (B && "mouseup" === t.type) return;
                            t.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout((function() {
                                B = 0
                            }), 600))
                        }
                        var e;
                        if (Tt("pointerUp"), ge(t, !1) && t.preventDefault(), P) {
                            var i = r.arraySearch(ne, t.pointerId, "id");
                            if (i > -1)
                                if (e = ne.splice(i, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";
                                else {
                                    e.type = {
                                        4: "mouse",
                                        2: "touch",
                                        3: "pen"
                                    } [t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                                }
                        }
                        var n, o = Se(t),
                            l = o.length;
                        if ("mouseup" === t.type && (l = 0), 2 === l) return G = null, !0;
                        1 === l && $t(ie, o[0]), 0 !== l || nt || it || (e || ("mouseup" === t.type ? e = {
                            x: t.pageX,
                            y: t.pageY,
                            type: "mouse"
                        } : t.changedTouches && t.changedTouches[0] && (e = {
                            x: t.changedTouches[0].pageX,
                            y: t.changedTouches[0].pageY,
                            type: "touch"
                        })), Tt("touchRelease", t, e));
                        var c = -1;
                        if (0 === l && (Y = !1, r.unbind(window, p, a), pe(), Z ? c = 0 : -1 !== ce && (c = Mt() - ce)), ce = 1 === l ? Mt() : -1, n = -1 !== c && 150 > c ? "zoom" : "swipe", Z && 2 > l && (Z = !1, 1 === l && (n = "zoomPointerUp"), Tt("zoomGestureEnded")), G = null, q || X || it || z)
                            if (Kt(), j || (j = Ie()), j.calculateSwipeSpeed("x"), z) {
                                if (be() < s.verticalDragRange) a.close();
                                else {
                                    var u = dt.y,
                                        d = at;
                                    Qt("verticalDrag", 0, 1, 300, r.easing.cubic.out, (function(t) {
                                        dt.y = (a.currItem.initialPosition.y - u) * t + u, At((1 - d) * t + d), It()
                                    })), Tt("onVerticalDrag", 1)
                                }
                            } else {
                                if ((Q || it) && 0 === l) {
                                    if (_e(n, j)) return;
                                    n = "zoomPointerUp"
                                }
                                if (!it) return "swipe" !== n ? void De() : void(!Q && m > a.currItem.fitRatio && Pe(j))
                            }
                    },
                    Ie = function() {
                        var t, e, i = {
                            lastFlickOffset: {},
                            lastFlickDist: {},
                            lastFlickSpeed: {},
                            slowDownRatio: {},
                            slowDownRatioReverse: {},
                            speedDecelerationRatio: {},
                            speedDecelerationRatioAbs: {},
                            distanceOffset: {},
                            backAnimDestination: {},
                            backAnimStarted: {},
                            calculateSwipeSpeed: function(n) {
                                re.length > 1 ? (t = Mt() - V + 50, e = re[re.length - 2][n]) : (t = Mt() - N, e = ie[n]), i.lastFlickOffset[n] = ee[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                            },
                            calculateOverBoundsAnimOffset: function(t, e) {
                                i.backAnimStarted[t] || (dt[t] > tt.min[t] ? i.backAnimDestination[t] = tt.min[t] : dt[t] < tt.max[t] && (i.backAnimDestination[t] = tt.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, Qt("bounceZoomPan" + t, dt[t], i.backAnimDestination[t], e || 300, r.easing.sine.out, (function(e) {
                                    dt[t] = e, It()
                                })))))
                            },
                            calculateAnimOffset: function(t) {
                                i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, dt[t] += i.distanceOffset[t])
                            },
                            panAnimLoop: function() {
                                return Yt.zoomPan && (Yt.zoomPan.raf = E(i.panAnimLoop), i.now = Mt(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), It(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (dt.x = Math.round(dt.x), dt.y = Math.round(dt.y), It(), void Xt("zoomPan")) : void 0
                            }
                        };
                        return i
                    },
                    Pe = function(t) {
                        return t.calculateSwipeSpeed("y"), tt = a.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (qt("zoomPan"), t.lastNow = Mt(), void t.panAnimLoop())
                    },
                    _e = function(t, e) {
                        var i, n, o;
                        if (it || (se = d), "swipe" === t) {
                            var l = ee.x - ie.x,
                                c = e.lastFlickDist.x < 10;
                            l > 30 && (c || e.lastFlickOffset.x > 20) ? n = -1 : -30 > l && (c || e.lastFlickOffset.x < -20) && (n = 1)
                        }
                        n && (0 > (d += n) ? (d = s.loop ? Ne() - 1 : 0, o = !0) : d >= Ne() && (d = s.loop ? 0 : Ne() - 1, o = !0), (!o || s.loop) && (gt += n, ft -= n, i = !0));
                        var u, h = vt.x * ft,
                            f = Math.abs(h - ue.x);
                        return i || h > ue.x == e.lastFlickSpeed.x > 0 ? (u = Math.abs(e.lastFlickSpeed.x) > 0 ? f / Math.abs(e.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, se === d && (i = !1), it = !0, Tt("mainScrollAnimStart"), Qt("mainScroll", ue.x, h, u, r.easing.cubic.out, Et, (function() {
                            Kt(), it = !1, se = -1, (i || se !== d) && a.updateCurrItem(), Tt("mainScrollAnimComplete")
                        })), i && a.updateCurrItem(!0), i
                    },
                    Ee = function(t) {
                        return 1 / J * t * y
                    },
                    De = function() {
                        var t = m,
                            e = Nt(),
                            i = Vt();
                        e > m ? t = e : m > i && (t = i);
                        var n, o = at;
                        return rt && !H && !st && e > m ? (a.close(), !0) : (rt && (n = function(t) {
                            At((1 - o) * t + o)
                        }), a.zoomTo(t, 0, 200, r.easing.cubic.out, n), !0)
                    };
                wt("Gestures", {
                    publicMethods: {
                        initGestures: function() {
                            var t = function(t, e, i, n, o) {
                                T = t + e, M = t + i, A = t + n, O = o ? t + o : ""
                            };
                            (P = W.pointerEvent) && W.touch && (W.touch = !1), P ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : W.touch ? (t("touch", "start", "move", "end", "cancel"), _ = !0) : t("mouse", "down", "move", "up"), p = M + " " + A + " " + O, v = T, P && !_ && (_ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = _, g[T] = Te, g[M] = Me, g[A] = Oe, O && (g[O] = g[A]), W.touch && (v += " mousedown", p += " mousemove mouseup", g.mousedown = g[T], g.mousemove = g[M], g.mouseup = g[A]), _ || (s.allowPanToNext = !1)
                        }
                    }
                });
                var $e, Le, Re, Fe, We, Ne, Ve = function(e, i, n, o) {
                        var l;
                        $e && clearTimeout($e), Fe = !0, Re = !0, e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = s.getThumbBoundsFn && s.getThumbBoundsFn(d);
                        var c = n ? s.hideAnimationDuration : s.showAnimationDuration,
                            h = function() {
                                Xt("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (At(1), i && (i.style.display = "block"), r.addClass(t, "pswp--animated-in"), Tt("initialZoom" + (n ? "OutEnd" : "InEnd"))), o && o(), Fe = !1
                            };
                        if (!c || !l || void 0 === l.x) return Tt("initialZoom" + (n ? "Out" : "In")), m = e.initialZoomLevel, $t(dt, e.initialPosition), It(), t.style.opacity = n ? 0 : 1, At(1), void(c ? setTimeout((function() {
                            h()
                        }), c) : h());
                        ! function() {
                            var i = u,
                                o = !a.currItem.src || a.currItem.loadError || s.showHideOpacity;
                            e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (m = l.w / e.w, dt.x = l.x, dt.y = l.y - L, a[o ? "template" : "bg"].style.opacity = .001, It()), qt("initialZoom"), n && !i && r.removeClass(t, "pswp--animated-in"), o && (n ? r[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout((function() {
                                r.addClass(t, "pswp--animate_opacity")
                            }), 30)), $e = setTimeout((function() {
                                if (Tt("initialZoom" + (n ? "Out" : "In")), n) {
                                    var a = l.w / e.w,
                                        s = {
                                            x: dt.x,
                                            y: dt.y
                                        },
                                        u = m,
                                        d = at,
                                        f = function(e) {
                                            1 === e ? (m = a, dt.x = l.x, dt.y = l.y - F) : (m = (a - u) * e + u, dt.x = (l.x - s.x) * e + s.x, dt.y = (l.y - F - s.y) * e + s.y), It(), o ? t.style.opacity = 1 - e : At(d - e * d)
                                        };
                                    i ? Qt("initialZoom", 0, 1, c, r.easing.cubic.out, f, h) : (f(1), $e = setTimeout(h, c + 20))
                                } else m = e.initialZoomLevel, $t(dt, e.initialPosition), It(), At(1), o ? t.style.opacity = 1 : At(1), $e = setTimeout(h, c + 20)
                            }), n ? 25 : 90)
                        }()
                    },
                    je = {},
                    He = [],
                    ze = {
                        index: 0,
                        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                        forceProgressiveLoading: !1,
                        preload: [1, 1],
                        getNumItemsFn: function() {
                            return Le.length
                        }
                    },
                    Be = function(t, e, i) {
                        if (t.src && !t.loadError) {
                            var n = !i;
                            if (n && (t.vGap || (t.vGap = {
                                    top: 0,
                                    bottom: 0
                                }), Tt("parseVerticalMargin", t)), je.x = e.x, je.y = e.y - t.vGap.top - t.vGap.bottom, n) {
                                var o = je.x / t.w,
                                    r = je.y / t.h;
                                t.fitRatio = r > o ? o : r;
                                var a = s.scaleMode;
                                "orig" === a ? i = 1 : "fit" === a && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = {
                                    center: {
                                        x: 0,
                                        y: 0
                                    },
                                    max: {
                                        x: 0,
                                        y: 0
                                    },
                                    min: {
                                        x: 0,
                                        y: 0
                                    }
                                })
                            }
                            if (!i) return;
                            return function(t, e, i) {
                                var n = t.bounds;
                                n.center.x = Math.round((je.x - e) / 2), n.center.y = Math.round((je.y - i) / 2) + t.vGap.top, n.max.x = e > je.x ? Math.round(je.x - e) : n.center.x, n.max.y = i > je.y ? Math.round(je.y - i) + t.vGap.top : n.center.y, n.min.x = e > je.x ? 0 : n.center.x, n.min.y = i > je.y ? t.vGap.top : n.center.y
                            }(t, t.w * i, t.h * i), n && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
                        }
                        return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = {
                            center: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            },
                            min: {
                                x: 0,
                                y: 0
                            }
                        }, t.initialPosition = t.bounds.center, t.bounds
                    },
                    Ye = function(t, e, i, n, o, r) {
                        e.loadError || n && (e.imageAppended = !0, qe(e, n, e === a.currItem && xt), i.appendChild(n), r && setTimeout((function() {
                            e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                        }), 500))
                    },
                    Ue = function(t) {
                        t.loading = !0, t.loaded = !1;
                        var e = t.img = r.createEl("pswp__img", "img"),
                            i = function() {
                                t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                            };
                        return e.onload = i, e.onerror = function() {
                            t.loadError = !0, i()
                        }, e.src = t.src, e
                    },
                    Xe = function(t, e) {
                        return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = s.errorMsg.replace("%url%", t.src), !0) : void 0
                    },
                    qe = function(t, e, i) {
                        if (t.src) {
                            e || (e = t.container.lastChild);
                            var n = i ? t.w : Math.round(t.w * t.fitRatio),
                                o = i ? t.h : Math.round(t.h * t.fitRatio);
                            t.placeholder && !t.loaded && (t.placeholder.style.width = n + "px", t.placeholder.style.height = o + "px"), e.style.width = n + "px", e.style.height = o + "px"
                        }
                    },
                    Ke = function() {
                        if (He.length) {
                            for (var t, e = 0; e < He.length; e++)(t = He[e]).holder.index === t.index && Ye(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                            He = []
                        }
                    };
                wt("Controller", {
                    publicMethods: {
                        lazyLoadItem: function(t) {
                            t = kt(t);
                            var e = We(t);
                            e && (!e.loaded && !e.loading || k) && (Tt("gettingData", t, e), e.src && Ue(e))
                        },
                        initController: function() {
                            r.extend(s, ze, !0), a.items = Le = n, We = a.getItemAt, Ne = s.getNumItemsFn, s.loop, Ne() < 3 && (s.loop = !1), Ct("beforeChange", (function(t) {
                                var e, i = s.preload,
                                    n = null === t || t >= 0,
                                    o = Math.min(i[0], Ne()),
                                    r = Math.min(i[1], Ne());
                                for (e = 1;
                                    (n ? r : o) >= e; e++) a.lazyLoadItem(d + e);
                                for (e = 1;
                                    (n ? o : r) >= e; e++) a.lazyLoadItem(d - e)
                            })), Ct("initialLayout", (function() {
                                a.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(d)
                            })), Ct("mainScrollAnimComplete", Ke), Ct("initialZoomInEnd", Ke), Ct("destroy", (function() {
                                for (var t, e = 0; e < Le.length; e++)(t = Le[e]).container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                                He = null
                            }))
                        },
                        getItemAt: function(t) {
                            return t >= 0 && void 0 !== Le[t] && Le[t]
                        },
                        allowProgressiveImg: function() {
                            return s.forceProgressiveLoading || !_ || s.mouseUsed || screen.width > 1200
                        },
                        setContent: function(t, e) {
                            s.loop && (e = kt(e));
                            var i = a.getItemAt(t.index);
                            i && (i.container = null);
                            var n, o = a.getItemAt(e);
                            if (o) {
                                Tt("gettingData", e, o), t.index = e, t.item = o;
                                var c = o.container = r.createEl("pswp__zoom-wrap");
                                if (!o.src && o.html && (o.html.tagName ? c.appendChild(o.html) : c.innerHTML = o.html), Xe(o), Be(o, ht), !o.src || o.loadError || o.loaded) o.src && !o.loadError && ((n = r.createEl("pswp__img", "img")).style.opacity = 1, n.src = o.src, qe(o, n), Ye(0, o, c, n));
                                else {
                                    if (o.loadComplete = function(i) {
                                            if (l) {
                                                if (t && t.index === e) {
                                                    if (Xe(i, !0)) return i.loadComplete = i.img = null, Be(i, ht), Pt(i), void(t.index === d && a.updateCurrZoomItem());
                                                    i.imageAppended ? !Fe && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : W.transform && (it || Fe) ? He.push({
                                                        item: i,
                                                        baseDiv: c,
                                                        img: i.img,
                                                        index: e,
                                                        holder: t,
                                                        clearPlaceholder: !0
                                                    }) : Ye(0, i, c, i.img, 0, !0)
                                                }
                                                i.loadComplete = null, i.img = null, Tt("imageLoadComplete", e, i)
                                            }
                                        }, r.features.transform) {
                                        var u = "pswp__img pswp__img--placeholder";
                                        u += o.msrc ? "" : " pswp__img--placeholder--blank";
                                        var h = r.createEl(u, o.msrc ? "img" : "");
                                        o.msrc && (h.src = o.msrc), qe(o, h), c.appendChild(h), o.placeholder = h
                                    }
                                    o.loading || Ue(o), a.allowProgressiveImg() && (!Re && W.transform ? He.push({
                                        item: o,
                                        baseDiv: c,
                                        img: o.img,
                                        index: e,
                                        holder: t
                                    }) : Ye(0, o, c, o.img, 0, !0))
                                }
                                Re || e !== d ? Pt(o) : (et = c.style, Ve(o, n || o.img)), t.el.innerHTML = "", t.el.appendChild(c)
                            } else t.el.innerHTML = ""
                        },
                        cleanSlide: function(t) {
                            t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                        }
                    }
                });
                var Qe, Ge, Ze = {},
                    Je = function(t, e, i) {
                        var n = document.createEvent("CustomEvent"),
                            o = {
                                origEvent: t,
                                target: t.target,
                                releasePoint: e,
                                pointerType: i || "touch"
                            };
                        n.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(n)
                    };
                wt("Tap", {
                    publicMethods: {
                        initTap: function() {
                            Ct("firstTouchStart", a.onTapStart), Ct("touchRelease", a.onTapRelease), Ct("destroy", (function() {
                                Ze = {}, Qe = null
                            }))
                        },
                        onTapStart: function(t) {
                            t.length > 1 && (clearTimeout(Qe), Qe = null)
                        },
                        onTapRelease: function(t, e) {
                            if (e && !q && !U && !Ut) {
                                var i = e;
                                if (Qe && (clearTimeout(Qe), Qe = null, function(t, e) {
                                        return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
                                    }(i, Ze))) return void Tt("doubleTap", i);
                                if ("mouse" === e.type) return void Je(t, e, "mouse");
                                if ("BUTTON" === t.target.tagName.toUpperCase() || r.hasClass(t.target, "pswp__single-tap")) return void Je(t, e);
                                $t(Ze, i), Qe = setTimeout((function() {
                                    Je(t, e), Qe = null
                                }), 300)
                            }
                        }
                    }
                }), wt("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function() {
                            R || (_ ? Ct("mouseUsed", (function() {
                                a.setupDesktopZoom()
                            })) : a.setupDesktopZoom(!0))
                        },
                        setupDesktopZoom: function(e) {
                            Ge = {};
                            var i = "wheel mousewheel DOMMouseScroll";
                            Ct("bindEvents", (function() {
                                r.bind(t, i, a.handleMouseWheel)
                            })), Ct("unbindEvents", (function() {
                                Ge && r.unbind(t, i, a.handleMouseWheel)
                            })), a.mouseZoomedIn = !1;
                            var n, o = function() {
                                    a.mouseZoomedIn && (r.removeClass(t, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > m ? r.addClass(t, "pswp--zoom-allowed") : r.removeClass(t, "pswp--zoom-allowed"), s()
                                },
                                s = function() {
                                    n && (r.removeClass(t, "pswp--dragging"), n = !1)
                                };
                            Ct("resize", o), Ct("afterChange", o), Ct("pointerDown", (function() {
                                a.mouseZoomedIn && (n = !0, r.addClass(t, "pswp--dragging"))
                            })), Ct("pointerUp", s), e || o()
                        },
                        handleMouseWheel: function(t) {
                            if (m <= a.currItem.fitRatio) return s.modal && (!s.closeOnScroll || Ut || Y ? t.preventDefault() : I && Math.abs(t.deltaY) > 2 && (u = !0, a.close())), !0;
                            if (t.stopPropagation(), Ge.x = 0, "deltaX" in t) 1 === t.deltaMode ? (Ge.x = 18 * t.deltaX, Ge.y = 18 * t.deltaY) : (Ge.x = t.deltaX, Ge.y = t.deltaY);
                            else if ("wheelDelta" in t) t.wheelDeltaX && (Ge.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? Ge.y = -.16 * t.wheelDeltaY : Ge.y = -.16 * t.wheelDelta;
                            else {
                                if (!("detail" in t)) return;
                                Ge.y = t.detail
                            }
                            Wt(m, !0);
                            var e = dt.x - Ge.x,
                                i = dt.y - Ge.y;
                            (s.modal || e <= tt.min.x && e >= tt.max.x && i <= tt.min.y && i >= tt.max.y) && t.preventDefault(), a.panTo(e, i)
                        },
                        toggleDesktopZoom: function(e) {
                            e = e || {
                                x: ht.x / 2 + pt.x,
                                y: ht.y / 2 + pt.y
                            };
                            var i = s.getDoubleTapZoom(!0, a.currItem),
                                n = m === i;
                            a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, e, 333), r[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                        }
                    }
                });
                var ti, ei, ii, ni, oi, ri, ai, si, li, ci, ui, di, hi = {
                        history: !0,
                        galleryUID: 1
                    },
                    fi = function() {
                        return ui.hash.substring(1)
                    },
                    pi = function() {
                        ti && clearTimeout(ti), ii && clearTimeout(ii)
                    },
                    vi = function() {
                        var t = fi(),
                            e = {};
                        if (t.length < 5) return e;
                        var i, n = t.split("&");
                        for (i = 0; i < n.length; i++)
                            if (n[i]) {
                                var o = n[i].split("=");
                                o.length < 2 || (e[o[0]] = o[1])
                            } if (s.galleryPIDs) {
                            var r = e.pid;
                            for (e.pid = 0, i = 0; i < Le.length; i++)
                                if (Le[i].pid === r) {
                                    e.pid = i;
                                    break
                                }
                        } else e.pid = parseInt(e.pid, 10) - 1;
                        return e.pid < 0 && (e.pid = 0), e
                    },
                    gi = function t() {
                        if (ii && clearTimeout(ii), Ut || Y) ii = setTimeout(t, 500);
                        else {
                            ni ? clearTimeout(ei) : ni = !0;
                            var e = d + 1,
                                i = We(d);
                            i.hasOwnProperty("pid") && (e = i.pid);
                            var n = ai + "&gid=" + s.galleryUID + "&pid=" + e;
                            si || -1 === ui.hash.indexOf(n) && (ci = !0);
                            var o = ui.href.split("#")[0] + "#" + n;
                            di ? "#" + n !== window.location.hash && history[si ? "replaceState" : "pushState"]("", document.title, o) : si ? ui.replace(o) : ui.hash = n, si = !0, ei = setTimeout((function() {
                                ni = !1
                            }), 60)
                        }
                    };
                wt("History", {
                    publicMethods: {
                        initHistory: function() {
                            if (r.extend(s, hi, !0), s.history) {
                                ui = window.location, ci = !1, li = !1, si = !1, ai = fi(), di = "pushState" in history, ai.indexOf("gid=") > -1 && (ai = (ai = ai.split("&gid=")[0]).split("?gid=")[0]), Ct("afterChange", a.updateURL), Ct("unbindEvents", (function() {
                                    r.unbind(window, "hashchange", a.onHashChange)
                                }));
                                var t = function() {
                                    ri = !0, li || (ci ? history.back() : ai ? ui.hash = ai : di ? history.pushState("", document.title, ui.pathname + ui.search) : ui.hash = ""), pi()
                                };
                                Ct("unbindEvents", (function() {
                                    u && t()
                                })), Ct("destroy", (function() {
                                    ri || t()
                                })), Ct("firstUpdate", (function() {
                                    d = vi().pid
                                }));
                                var e = ai.indexOf("pid=");
                                e > -1 && ("&" === (ai = ai.substring(0, e)).slice(-1) && (ai = ai.slice(0, -1))), setTimeout((function() {
                                    l && r.bind(window, "hashchange", a.onHashChange)
                                }), 40)
                            }
                        },
                        onHashChange: function() {
                            return fi() === ai ? (li = !0, void a.close()) : void(ni || (oi = !0, a.goTo(vi().pid), oi = !1))
                        },
                        updateURL: function() {
                            pi(), oi || (si ? ti = setTimeout(gi, 800) : gi())
                        }
                    }
                }), r.extend(a, Gt)
            }
        })),
        function(n, o) {
            "function" == typeof define && i(76) ? define(o) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? t.exports = o() : window.PhotoSwipeUI_Default = o()
        }(0, (function() {
            return function(t, e) {
                var i, n, o, r, a, s, l, c, u, d, h, f, p, v, g, m, y, b, x = this,
                    w = !1,
                    k = !0,
                    S = !0,
                    C = {
                        barsSize: {
                            top: 44,
                            bottom: "auto"
                        },
                        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                        timeToIdle: 4e3,
                        timeToIdleOutside: 1e3,
                        loadingIndicatorDelay: 1e3,
                        addCaptionHTMLFn: function(t, e) {
                            return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
                        },
                        closeEl: !0,
                        captionEl: !0,
                        fullscreenEl: !0,
                        zoomEl: !0,
                        shareEl: !0,
                        counterEl: !0,
                        arrowEl: !0,
                        preloaderEl: !0,
                        tapToClose: !1,
                        tapToToggleControls: !0,
                        clickToCloseNonZoomable: !0,
                        shareButtons: [{
                            id: "facebook",
                            label: "Share on Facebook",
                            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                        }, {
                            id: "twitter",
                            label: "Tweet",
                            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                        }, {
                            id: "pinterest",
                            label: "Pin it",
                            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                        }, {
                            id: "download",
                            label: "Download image",
                            url: "{{raw_image_url}}",
                            download: !0
                        }],
                        getImageURLForShare: function() {
                            return t.currItem.src || ""
                        },
                        getPageURLForShare: function() {
                            return window.location.href
                        },
                        getTextForShare: function() {
                            return t.currItem.title || ""
                        },
                        indexIndicatorSep: " / ",
                        fitControlsWidth: 1200
                    },
                    T = function(t) {
                        if (m) return !0;
                        t = t || window.event, g.timeToIdle && g.mouseUsed && !u && $();
                        for (var i, n, o = (t.target || t.srcElement).getAttribute("class") || "", r = 0; r < W.length; r++)(i = W[r]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                        if (n) {
                            t.stopPropagation && t.stopPropagation(), m = !0;
                            var a = e.features.isOldAndroid ? 600 : 30;
                            setTimeout((function() {
                                m = !1
                            }), a)
                        }
                    },
                    M = function(t, i, n) {
                        e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i)
                    },
                    A = function() {
                        var t = 1 === g.getNumItemsFn();
                        t !== v && (M(n, "ui--one-slide", t), v = t)
                    },
                    O = function() {
                        M(l, "share-modal--hidden", S)
                    },
                    I = function() {
                        return (S = !S) ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout((function() {
                            S && O()
                        }), 300)) : (O(), setTimeout((function() {
                            S || e.addClass(l, "pswp__share-modal--fade-in")
                        }), 30)), S || _(), !1
                    },
                    P = function(e) {
                        var i = (e = e || window.event).target || e.srcElement;
                        return t.shout("shareLinkClick", e, i), !!i.href && (!!i.hasAttribute("download") || (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || I(), !1))
                    },
                    _ = function() {
                        for (var t, e, i, n, o = "", r = 0; r < g.shareButtons.length; r++) t = g.shareButtons[r], e = g.getImageURLForShare(t), i = g.getPageURLForShare(t), n = g.getTextForShare(t), o += '<a href="' + t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(e)).replace("{{raw_image_url}}", e).replace("{{text}}", encodeURIComponent(n)) + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", g.parseShareButtonOut && (o = g.parseShareButtonOut(t, o));
                        l.children[0].innerHTML = o, l.children[0].onclick = P
                    },
                    E = function(t) {
                        for (var i = 0; i < g.closeElClasses.length; i++)
                            if (e.hasClass(t, "pswp__" + g.closeElClasses[i])) return !0
                    },
                    D = 0,
                    $ = function() {
                        clearTimeout(b), D = 0, u && x.setIdle(!1)
                    },
                    L = function(t) {
                        var e = (t = t || window.event).relatedTarget || t.toElement;
                        e && "HTML" !== e.nodeName || (clearTimeout(b), b = setTimeout((function() {
                            x.setIdle(!0)
                        }), g.timeToIdleOutside))
                    },
                    R = function(t) {
                        f !== t && (M(h, "preloader--active", !t), f = t)
                    },
                    F = function(i) {
                        var a = i.vGap;
                        if (!t.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth) {
                            var s = g.barsSize;
                            if (g.captionEl && "auto" === s.bottom)
                                if (r || ((r = e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")), n.insertBefore(r, o), e.addClass(n, "pswp__ui--fit")), g.addCaptionHTMLFn(i, r, !0)) {
                                    var l = r.clientHeight;
                                    a.bottom = parseInt(l, 10) || 44
                                } else a.bottom = s.top;
                            else a.bottom = "auto" === s.bottom ? 0 : s.bottom;
                            a.top = s.top
                        } else a.top = a.bottom = 0
                    },
                    W = [{
                        name: "caption",
                        option: "captionEl",
                        onInit: function(t) {
                            o = t
                        }
                    }, {
                        name: "share-modal",
                        option: "shareEl",
                        onInit: function(t) {
                            l = t
                        },
                        onTap: function() {
                            I()
                        }
                    }, {
                        name: "button--share",
                        option: "shareEl",
                        onInit: function(t) {
                            s = t
                        },
                        onTap: function() {
                            I()
                        }
                    }, {
                        name: "button--zoom",
                        option: "zoomEl",
                        onTap: t.toggleDesktopZoom
                    }, {
                        name: "counter",
                        option: "counterEl",
                        onInit: function(t) {
                            a = t
                        }
                    }, {
                        name: "button--close",
                        option: "closeEl",
                        onTap: t.close
                    }, {
                        name: "button--arrow--left",
                        option: "arrowEl",
                        onTap: t.prev
                    }, {
                        name: "button--arrow--right",
                        option: "arrowEl",
                        onTap: t.next
                    }, {
                        name: "button--fs",
                        option: "fullscreenEl",
                        onTap: function() {
                            i.isFullscreen() ? i.exit() : i.enter()
                        }
                    }, {
                        name: "preloader",
                        option: "preloaderEl",
                        onInit: function(t) {
                            h = t
                        }
                    }];
                x.init = function() {
                    e.extend(t.options, C, !0), g = t.options, n = e.getChildByClass(t.scrollWrap, "pswp__ui"), d = t.listen,
                        function() {
                            var t;
                            d("onVerticalDrag", (function(t) {
                                k && .95 > t ? x.hideControls() : !k && t >= .95 && x.showControls()
                            })), d("onPinchClose", (function(e) {
                                k && .9 > e ? (x.hideControls(), t = !0) : t && !k && e > .9 && x.showControls()
                            })), d("zoomGestureEnded", (function() {
                                (t = !1) && !k && x.showControls()
                            }))
                        }(), d("beforeChange", x.update), d("doubleTap", (function(e) {
                            var i = t.currItem.initialZoomLevel;
                            t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
                        })), d("preventDragEvent", (function(t, e, i) {
                            var n = t.target || t.srcElement;
                            n && n.getAttribute("class") && t.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                        })), d("bindEvents", (function() {
                            e.bind(n, "pswpTap click", T), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver)
                        })), d("unbindEvents", (function() {
                            S || I(), y && clearInterval(y), e.unbind(document, "mouseout", L), e.unbind(document, "mousemove", $), e.unbind(n, "pswpTap click", T), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), i && (e.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (g.hideAnimationDuration = 0, i.exit()), i = null)
                        })), d("destroy", (function() {
                            g.captionEl && (r && n.removeChild(r), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(n, "pswp__ui--over-close"), e.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
                        })), g.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", (function() {
                            g.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden")
                        })), d("initialZoomOut", (function() {
                            e.addClass(n, "pswp__ui--hidden")
                        })), d("parseVerticalMargin", F),
                        function() {
                            var t, i, o, r = function(n) {
                                if (n)
                                    for (var r = n.length, a = 0; r > a; a++) {
                                        t = n[a], i = t.className;
                                        for (var s = 0; s < W.length; s++) o = W[s], i.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                                    }
                            };
                            r(n.children);
                            var a = e.getChildByClass(n, "pswp__top-bar");
                            a && r(a.children)
                        }(), g.shareEl && s && l && (S = !0), A(), g.timeToIdle && d("mouseUsed", (function() {
                            e.bind(document, "mousemove", $), e.bind(document, "mouseout", L), y = setInterval((function() {
                                2 == ++D && x.setIdle(!0)
                            }), g.timeToIdle / 2)
                        })), g.fullscreenEl && !e.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (e.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs")), g.preloaderEl && (R(!0), d("beforeChange", (function() {
                            clearTimeout(p), p = setTimeout((function() {
                                t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && R(!1) : R(!0)
                            }), g.loadingIndicatorDelay)
                        })), d("imageLoadComplete", (function(e, i) {
                            t.currItem === i && R(!0)
                        })))
                }, x.setIdle = function(t) {
                    u = t, M(n, "ui--idle", t)
                }, x.update = function() {
                    k && t.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(t.currItem, o), M(o, "caption--empty", !t.currItem.title)), w = !0) : w = !1, S || I(), A()
                }, x.updateFullscreen = function(n) {
                    n && setTimeout((function() {
                        t.setScrollOffset(0, e.getScrollY())
                    }), 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
                }, x.updateIndexIndicator = function() {
                    g.counterEl && (a.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
                }, x.onGlobalTap = function(i) {
                    var n = (i = i || window.event).target || i.srcElement;
                    if (!m)
                        if (i.detail && "mouse" === i.detail.pointerType) {
                            if (E(n)) return void t.close();
                            e.hasClass(n, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint))
                        } else if (g.tapToToggleControls && (k ? x.hideControls() : x.showControls()), g.tapToClose && (e.hasClass(n, "pswp__img") || E(n))) return void t.close()
                }, x.onMouseOver = function(t) {
                    var e = (t = t || window.event).target || t.srcElement;
                    M(n, "ui--over-close", E(e))
                }, x.hideControls = function() {
                    e.addClass(n, "pswp__ui--hidden"), k = !1
                }, x.showControls = function() {
                    k = !0, w || x.update(), e.removeClass(n, "pswp__ui--hidden")
                }, x.supportsFullscreen = function() {
                    var t = document;
                    return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
                }, x.getFullscreenAPI = function() {
                    var e, i = document.documentElement,
                        n = "fullscreenchange";
                    return i.requestFullscreen ? e = {
                        enterK: "requestFullscreen",
                        exitK: "exitFullscreen",
                        elementK: "fullscreenElement",
                        eventK: n
                    } : i.mozRequestFullScreen ? e = {
                        enterK: "mozRequestFullScreen",
                        exitK: "mozCancelFullScreen",
                        elementK: "mozFullScreenElement",
                        eventK: "moz" + n
                    } : i.webkitRequestFullscreen ? e = {
                        enterK: "webkitRequestFullscreen",
                        exitK: "webkitExitFullscreen",
                        elementK: "webkitFullscreenElement",
                        eventK: "webkit" + n
                    } : i.msRequestFullscreen && (e = {
                        enterK: "msRequestFullscreen",
                        exitK: "msExitFullscreen",
                        elementK: "msFullscreenElement",
                        eventK: "MSFullscreenChange"
                    }), e && (e.enter = function() {
                        return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                    }, e.exit = function() {
                        return g.closeOnScroll = c, document[this.exitK]()
                    }, e.isFullscreen = function() {
                        return document[this.elementK]
                    }), e
                }
            }
        }));
        ! function(t) {
            for (var e = function(t) {
                    (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1;
                    var e = function t(e, i) {
                        return e && (i(e) ? e : t(e.parentNode, i))
                    }(t.target || t.srcElement, (function(t) {
                        return t.tagName && "FIGURE" === t.tagName.toUpperCase()
                    }));
                    if (e) {
                        for (var n, o = e.parentNode, r = e.parentNode.childNodes, a = r.length, s = 0, l = 0; l < a; l++)
                            if (1 === r[l].nodeType) {
                                if (r[l] === e) {
                                    n = s;
                                    break
                                }
                                s++
                            } return n >= 0 && i(n, o), !1
                    }
                }, i = function(t, e, i, n) {
                    var o, r, a = document.querySelectorAll(".pswp")[0];
                    if (r = function(t) {
                            for (var e, i, n, o, r = t.childNodes, a = r.length, s = [], l = 0; l < a; l++) 1 === (e = r[l]).nodeType && (n = (i = e.children[0]).getAttribute("data-size").split("x"), o = {
                                src: i.getAttribute("href"),
                                w: parseInt(n[0], 10),
                                h: parseInt(n[1], 10)
                            }, e.children.length > 1 && (o.title = e.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = e, s.push(o));
                            return s
                        }(e), o = {
                            galleryUID: e.getAttribute("data-pswp-uid"),
                            getThumbBoundsFn: function(t) {
                                var e = r[t].el.getElementsByTagName("img")[0],
                                    i = window.pageYOffset || document.documentElement.scrollTop,
                                    n = e.getBoundingClientRect();
                                return {
                                    x: n.left,
                                    y: n.top + i,
                                    w: n.width
                                }
                            }
                        }, n)
                        if (o.galleryPIDs) {
                            for (var s = 0; s < r.length; s++)
                                if (r[s].pid == t) {
                                    o.index = s;
                                    break
                                }
                        } else o.index = parseInt(t, 10) - 1;
                    else o.index = parseInt(t, 10);
                    isNaN(o.index) || (i && (o.showAnimationDuration = 0), new PhotoSwipe(a, PhotoSwipeUI_Default, r, o).init())
                }, n = document.querySelectorAll(t), o = 0, r = n.length; o < r; o++) n[o].setAttribute("data-pswp-uid", o + 1), n[o].onclick = e;
            var a = function() {
                var t = window.location.hash.substring(1),
                    e = {};
                if (t.length < 5) return e;
                for (var i = t.split("&"), n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (e[o[0]] = o[1])
                    } return e.gid && (e.gid = parseInt(e.gid, 10)), e
            }();
            a.pid && a.gid && i(a.pid, n[a.gid - 1], !0, !0)
        }(".mdb-lightbox")
    }).call(this, i(99)(t))
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var e;
        i(69), i(79), i(80), i(87), i(43), i(66), i(64), i(71), i(106), i(102), i(93), i(70), i(68), i(113), i(81), i(116), i(86), i(100), i(84);

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * Date picker for pickadate.js v3.6.3
         * http://amsul.github.io/pickadate.js/date.htm
         */
        e = function(t, e) {
            var i, n = t._;

            function o(t, e) {
                var i, n = this,
                    o = t.$node[0],
                    r = o.value,
                    a = t.$node.data("value"),
                    s = a || r,
                    l = a ? e.formatSubmit : e.format,
                    c = function() {
                        return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
                    };
                n.settings = e, n.$node = t.$node, n.queue = {
                    min: "measure create",
                    max: "measure create",
                    now: "now create",
                    select: "parse create validate",
                    highlight: "parse navigate create validate",
                    view: "parse create validate viewset",
                    disable: "deactivate",
                    enable: "activate"
                }, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", e.min).set("max", e.max).set("now"), s ? n.set("select", s, {
                    format: l,
                    defaultValue: !0
                }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                    40: 7,
                    38: -7,
                    39: function() {
                        return c() ? -1 : 1
                    },
                    37: function() {
                        return c() ? 1 : -1
                    },
                    go: function(t) {
                        var e = n.item.highlight,
                            i = new Date(e.year, e.month, e.date + t);
                        n.set("highlight", i, {
                            interval: t
                        }), this.render()
                    }
                }, t.on("render", (function() {
                    t.$root.find("." + e.klass.selectMonth).on("change", (function() {
                        var i = this.value;
                        i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
                    })), t.$root.find("." + e.klass.selectYear).on("change", (function() {
                        var i = this.value;
                        i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
                    }))
                }), 1).on("open", (function() {
                    var i = "";
                    n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
                }), 1).on("close", (function() {
                    t.$root.find("button, select").attr("disabled", !0)
                }), 1)
            }
            o.prototype.set = function(t, e, i) {
                var n = this,
                    o = n.item;
                return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map((function(o) {
                    return e = n[o](t, e, i)
                })).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
            }, o.prototype.get = function(t) {
                return this.item[t]
            }, o.prototype.create = function(t, i, o) {
                var r;
                return (i = void 0 === i ? t : i) == -1 / 0 || i == 1 / 0 ? r = i : e.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : this.create().obj) : i = n.isInteger(i) || n.isDate(i) ? this.normalize(new Date(i), o) : this.now(t, i, o), {
                    year: r || i.getFullYear(),
                    month: r || i.getMonth(),
                    date: r || i.getDate(),
                    day: r || i.getDay(),
                    obj: r || i,
                    pick: r || i.getTime()
                }
            }, o.prototype.createRange = function(t, i) {
                var o = this,
                    r = function(t) {
                        return !0 === t || e.isArray(t) || n.isDate(t) ? o.create(t) : t
                    };
                return n.isInteger(t) || (t = r(t)), n.isInteger(i) || (i = r(i)), n.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : n.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
                    from: r(t),
                    to: r(i)
                }
            }, o.prototype.withinRange = function(t, e) {
                return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
            }, o.prototype.overlapRanges = function(t, e) {
                return t = this.createRange(t.from, t.to), e = this.createRange(e.from, e.to), this.withinRange(t, e.from) || this.withinRange(t, e.to) || this.withinRange(e, t.from) || this.withinRange(e, t.to)
            }, o.prototype.now = function(t, e, i) {
                return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
            }, o.prototype.navigate = function(t, i, n) {
                var o, r, a, s, l = e.isArray(i),
                    c = e.isPlainObject(i),
                    u = this.item.view;
                if (l || c) {
                    for (c ? (r = i.year, a = i.month, s = i.date) : (r = +i[0], a = +i[1], s = +i[2]), n && n.nav && u && u.month !== a && (r = u.year, a = u.month), r = (o = new Date(r, a + (n && n.nav ? n.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
                    i = [r, a, s]
                }
                return i
            }, o.prototype.normalize = function(t) {
                return t.setHours(0, 0, 0, 0), t
            }, o.prototype.measure = function(t, e) {
                return n.isInteger(e) ? e = this.now(t, e, {
                    rel: e
                }) : e ? "string" == typeof e && (e = this.parse(t, e)) : e = "min" == t ? -1 / 0 : 1 / 0, e
            }, o.prototype.viewset = function(t, e) {
                return this.create([e.year, e.month, 1])
            }, o.prototype.validate = function(t, i, o) {
                var r, a, s, l, c = this,
                    u = i,
                    d = o && o.interval ? o.interval : 1,
                    h = -1 === c.item.enable,
                    f = c.item.min,
                    p = c.item.max,
                    v = h && c.item.disable.filter((function(t) {
                        if (e.isArray(t)) {
                            var o = c.create(t).pick;
                            o < i.pick ? r = !0 : o > i.pick && (a = !0)
                        }
                        return n.isInteger(t)
                    })).length;
                if ((!o || !o.nav && !o.defaultValue) && (!h && c.disabled(i) || h && c.disabled(i) && (v || r || a) || !h && (i.pick <= f.pick || i.pick >= p.pick)))
                    for (h && !v && (!a && d > 0 || !r && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= f.pick ? (s = !0, d = 1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= p.pick && (l = !0, d = -1, i = c.create([p.year, p.month, p.date + (i.pick === p.pick ? 0 : 1)])), !s || !l);) i = c.create([i.year, i.month, i.date + d]);
                return i
            }, o.prototype.disabled = function(t) {
                var i = this,
                    o = i.item.disable.filter((function(o) {
                        return n.isInteger(o) ? t.day === (i.settings.firstDay ? o : o - 1) % 7 : e.isArray(o) || n.isDate(o) ? t.pick === i.create(o).pick : e.isPlainObject(o) ? i.withinRange(o, t) : void 0
                    }));
                return o = o.length && !o.filter((function(t) {
                    return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
                })).length, -1 === i.item.enable ? !o : o || t.pick < i.item.min.pick || t.pick > i.item.max.pick
            }, o.prototype.parse = function(t, e, i) {
                var o = this,
                    r = {};
                return e && "string" == typeof e ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map((function(t) {
                    var i = o.formats[t],
                        a = i ? n.trigger(i, o, [e, r]) : t.replace(/^!/, "").length;
                    i && (r[t] = e.substr(0, a)), e = e.substr(a)
                })), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : e
            }, o.prototype.formats = function() {
                function t(t, e, i) {
                    var n = t.match(/[^\x00-\x7F]+|\w+/)[0];
                    return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
                }

                function e(t) {
                    return t.match(/\w+/)[0].length
                }
                return {
                    d: function(t, e) {
                        return t ? n.digits(t) : e.date
                    },
                    dd: function(t, e) {
                        return t ? 2 : n.lead(e.date)
                    },
                    ddd: function(t, i) {
                        return t ? e(t) : this.settings.weekdaysShort[i.day]
                    },
                    dddd: function(t, i) {
                        return t ? e(t) : this.settings.weekdaysFull[i.day]
                    },
                    m: function(t, e) {
                        return t ? n.digits(t) : e.month + 1
                    },
                    mm: function(t, e) {
                        return t ? 2 : n.lead(e.month + 1)
                    },
                    mmm: function(e, i) {
                        var n = this.settings.monthsShort;
                        return e ? t(e, n, i) : n[i.month]
                    },
                    mmmm: function(e, i) {
                        var n = this.settings.monthsFull;
                        return e ? t(e, n, i) : n[i.month]
                    },
                    yy: function(t, e) {
                        return t ? 2 : ("" + e.year).slice(2)
                    },
                    yyyy: function(t, e) {
                        return t ? 4 : e.year
                    },
                    toArray: function(t) {
                        return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                    },
                    toString: function(t, e) {
                        var i = this;
                        return i.formats.toArray(t).map((function(t) {
                            return n.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                        })).join("")
                    }
                }
            }(), o.prototype.isDateExact = function(t, i) {
                return n.isInteger(t) && n.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (n.isDate(t) || e.isArray(t)) && (n.isDate(i) || e.isArray(i)) ? this.create(t).pick === this.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && this.isDateExact(t.from, i.from) && this.isDateExact(t.to, i.to)
            }, o.prototype.isDateOverlap = function(t, i) {
                var o = this.settings.firstDay ? 1 : 0;
                return n.isInteger(t) && (n.isDate(i) || e.isArray(i)) ? (t = t % 7 + o) === this.create(i).day + 1 : n.isInteger(i) && (n.isDate(t) || e.isArray(t)) ? (i = i % 7 + o) === this.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && this.overlapRanges(t, i)
            }, o.prototype.flipEnable = function(t) {
                var e = this.item;
                e.enable = t || (-1 == e.enable ? 1 : -1)
            }, o.prototype.deactivate = function(t, i) {
                var o = this,
                    r = o.item.disable.slice(0);
                return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), r = []) : !0 === i ? (o.flipEnable(-1), r = []) : i.map((function(t) {
                    for (var i, a = 0; a < r.length; a += 1)
                        if (o.isDateExact(t, r[a])) {
                            i = !0;
                            break
                        } i || (n.isInteger(t) || n.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && r.push(t)
                })), r
            }, o.prototype.activate = function(t, i) {
                var o = this,
                    r = o.item.disable,
                    a = r.length;
                return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), r = []) : !1 === i ? (o.flipEnable(-1), r = []) : i.map((function(t) {
                    var i, s, l, c;
                    for (l = 0; l < a; l += 1) {
                        if (s = r[l], o.isDateExact(s, t)) {
                            i = r[l] = null, c = !0;
                            break
                        }
                        if (o.isDateOverlap(s, t)) {
                            e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t)[3] || i.push("inverted") : n.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                            break
                        }
                    }
                    if (i)
                        for (l = 0; l < a; l += 1)
                            if (o.isDateExact(r[l], t)) {
                                r[l] = null;
                                break
                            } if (c)
                        for (l = 0; l < a; l += 1)
                            if (o.isDateOverlap(r[l], t)) {
                                r[l] = null;
                                break
                            } i && r.push(i)
                })), r.filter((function(t) {
                    return null != t
                }))
            }, o.prototype.nodes = function(t) {
                var e, i, o = this,
                    r = o.settings,
                    a = o.item,
                    s = a.now,
                    l = a.select,
                    c = a.highlight,
                    u = a.view,
                    d = a.disable,
                    h = a.min,
                    f = a.max,
                    p = (e = (r.showWeekdaysFull ? r.weekdaysFull : r.weekdaysShort).slice(0), i = r.weekdaysFull.slice(0), r.firstDay && (e.push(e.shift()), i.push(i.shift())), n.node("thead", n.node("tr", n.group({
                        min: 0,
                        max: 6,
                        i: 1,
                        node: "th",
                        item: function(t) {
                            return [e[t], r.klass.weekdays, 'scope=col title="' + i[t] + '"']
                        }
                    })))),
                    v = function(t) {
                        return n.node("button", " ", r.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= f.year && u.month >= f.month || !t && u.year <= h.year && u.month <= h.month ? " " + r.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + n.ariaAttr({
                            role: "button",
                            controls: o.$node[0].id + "_table"
                        }) + ' title="' + (t ? r.labelMonthNext : r.labelMonthPrev) + '"')
                    },
                    g = function() {
                        var e = r.showMonthsShort ? r.monthsShort : r.monthsFull;
                        return r.selectMonths ? n.node("select", n.group({
                            min: 0,
                            max: 11,
                            i: 1,
                            node: "option",
                            item: function(t) {
                                return [e[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == h.year && t < h.month || u.year == f.year && t > f.month ? " disabled" : "")]
                            }
                        }), r.klass.selectMonth, (t ? "" : "disabled") + " " + n.ariaAttr({
                            controls: o.$node[0].id + "_table"
                        }) + ' title="' + r.labelMonthSelect + '"') : n.node("div", e[u.month], r.klass.month)
                    },
                    m = function() {
                        var e = u.year,
                            i = !0 === r.selectYears ? 5 : ~~(r.selectYears / 2);
                        if (i) {
                            var a = h.year,
                                s = f.year,
                                l = e - i,
                                c = e + i;
                            if (a > l && (c += a - l, l = a), s < c) {
                                var d = l - a,
                                    p = c - s;
                                l -= d > p ? p : d, c = s
                            }
                            return n.node("select", n.group({
                                min: l,
                                max: c,
                                i: 1,
                                node: "option",
                                item: function(t) {
                                    return [t, 0, "value=" + t + (e == t ? " selected" : "")]
                                }
                            }), r.klass.selectYear, (t ? "" : "disabled") + " " + n.ariaAttr({
                                controls: o.$node[0].id + "_table"
                            }) + ' title="' + r.labelYearSelect + '"')
                        }
                        return n.node("div", e, r.klass.year)
                    };
                return n.node("div", (r.selectYears ? m() + g() : g() + m()) + v() + v(1), r.klass.header) + n.node("table", p + n.node("tbody", n.group({
                    min: 0,
                    max: 5,
                    i: 1,
                    node: "tr",
                    item: function(t) {
                        var e = r.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
                        return [n.group({
                            min: 7 * t - u.day + e + 1,
                            max: function() {
                                return this.min + 7 - 1
                            },
                            i: 1,
                            node: "td",
                            item: function(t) {
                                t = o.create([u.year, u.month, t + (r.firstDay ? 1 : 0)]);
                                var e, i = l && l.pick == t.pick,
                                    a = c && c.pick == t.pick,
                                    p = d && o.disabled(t) || t.pick < h.pick || t.pick > f.pick,
                                    v = n.trigger(o.formats.toString, o, [r.format, t]);
                                return [n.node("div", t.date, (e = [r.klass.day], e.push(u.month == t.month ? r.klass.infocus : r.klass.outfocus), s.pick == t.pick && e.push(r.klass.now), i && e.push(r.klass.selected), a && e.push(r.klass.highlighted), p && e.push(r.klass.disabled), e.join(" ")), "data-pick=" + t.pick + " " + n.ariaAttr({
                                    role: "gridcell",
                                    label: v,
                                    selected: !(!i || o.$node.val() !== v) || null,
                                    activedescendant: !!a || null,
                                    disabled: !!p || null
                                })), "", n.ariaAttr({
                                    role: "presentation"
                                })]
                            }
                        })]
                    }
                })), r.klass.table, 'id="' + o.$node[0].id + '_table" ' + n.ariaAttr({
                    role: "grid",
                    controls: o.$node[0].id,
                    readonly: !0
                })) + n.node("div", n.node("button", r.today, r.klass.buttonToday, "type=button data-pick=" + s.pick + (t && !o.disabled(s) ? "" : " disabled") + " " + n.ariaAttr({
                    controls: o.$node[0].id
                })) + n.node("button", r.clear, r.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + n.ariaAttr({
                    controls: o.$node[0].id
                })) + n.node("button", r.close, r.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + n.ariaAttr({
                    controls: o.$node[0].id
                })), r.klass.footer)
            }, o.defaults = {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                closeOnSelect: !0,
                closeOnClear: !0,
                updateInput: !0,
                format: "d mmmm, yyyy",
                klass: {
                    table: (i = t.klasses().picker + "__") + "table",
                    header: i + "header",
                    navPrev: i + "nav--prev btn btn-flat",
                    navNext: i + "nav--next btn btn-flat",
                    navDisabled: i + "nav--disabled",
                    month: i + "month",
                    year: i + "year",
                    selectMonth: i + "select--month",
                    selectYear: i + "select--year",
                    weekdays: i + "weekday",
                    day: i + "day",
                    disabled: i + "day--disabled",
                    selected: i + "day--selected",
                    highlighted: i + "day--highlighted",
                    now: i + "day--today",
                    infocus: i + "day--infocus",
                    outfocus: i + "day--outfocus",
                    footer: i + "footer",
                    buttonClear: i + "button--clear",
                    buttonToday: i + "button--today",
                    buttonClose: i + "button--close"
                }
            }, t.extend("pickadate", o)
        }, "function" == typeof define && i(76) ? define(["picker", "jquery"], e) : "object" == ("undefined" == typeof exports ? "undefined" : n(exports)) ? t.exports = e(i(219), i(118)) : e(Picker, jQuery), $.extend($.fn.pickadate.defaults, {
            selectMonths: !0,
            selectYears: 15,
            onRender: function() {
                var t = this.$root,
                    e = this.get("highlight", "yyyy"),
                    i = this.get("highlight", "dd"),
                    n = this.get("highlight", "mmm"),
                    o = this.get("highlight", "dddd").slice(0, 3),
                    r = n.charAt(0).toUpperCase() + n.slice(1);
                t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + ', </div><div class="picker__month-display"><div>' + r + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + e + "</div></div></div>")
            }
        })
    }).call(this, i(99)(t))
}, function(t, e) {
    $(window).scroll((function() {
        $(".navbar").length && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    i.r(e);
    i(222), i(223), i(167), i(168), i(169), i(201), i(146), i(147), i(148), i(149), i(69), i(79), i(80), i(216), i(95), i(66), i(64), i(102), i(110), i(93), i(217), i(218), i(104), i(70), i(112), i(129), i(68), i(113), i(81), i(86), i(100), i(96), i(84);

    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * Name    : Just Another Parallax [Jarallax]
     * Version : 1.10.4
     * Author  : nK <https://nkdev.info>
     * GitHub  : https://github.com/nk-o/jarallax
     */
    ! function(t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        i.m = t, i.c = e, i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" === n(t) && t && t.__esModule) return t;
            var o = Object.create(null);
            if (i.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) i.d(o, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return o
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 11)
    }([, , function(t, e, i) {
        t.exports = function(t) {
            "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", (function() {
                "interactive" === document.readyState && t.call()
            })) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
        }
    }, , function(t, e, i) {
        (function(e) {
            var i;
            i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
        }).call(this, i(5))
    }, function(t, e, i) {
        var o, r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
            return n(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        };
        o = function() {
            return this
        }();
        try {
            o = o || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (o = window)
        }
        t.exports = o
    }, , , , , , function(t, e, i) {
        t.exports = i(12)
    }, function(t, e, i) {
        var o = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
                return n(t)
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
            },
            r = l(i(2)),
            a = i(4),
            s = l(i(13));

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = a.window.jarallax;
        if (a.window.jarallax = s.default, a.window.jarallax.noConflict = function() {
                return a.window.jarallax = c, this
            }, void 0 !== a.jQuery) {
            var u = function() {
                var t = arguments || [];
                Array.prototype.unshift.call(t, this);
                var e = s.default.apply(a.window, t);
                return "object" !== (void 0 === e ? "undefined" : o(e)) ? e : this
            };
            u.constructor = s.default.constructor;
            var d = a.jQuery.fn.jarallax;
            a.jQuery.fn.jarallax = u, a.jQuery.fn.jarallax.noConflict = function() {
                return a.jQuery.fn.jarallax = d, this
            }
        }(0, r.default)((function() {
            (0, s.default)(document.querySelectorAll("[data-jarallax]"))
        }))
    }, function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var i = [],
                            n = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
                        } catch (t) {
                            o = !0, r = t
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return i
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                a = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
                    return n(t)
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                },
                s = u(i(2)),
                l = u(i(14)),
                c = i(4);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var d = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge/") > -1,
                h = function() {
                    for (var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), i = 0; i < t.length; i++)
                        if (e && void 0 !== e.style[t[i]]) return t[i];
                    return !1
                }(),
                f = void 0,
                p = void 0,
                v = void 0,
                g = !1,
                m = !1;

            function y(t) {
                f = c.window.innerWidth || document.documentElement.clientWidth, p = c.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === t ? "undefined" : a(t)) || "load" !== t.type && "dom-loaded" !== t.type || (g = !0)
            }
            y(), c.window.addEventListener("resize", y), c.window.addEventListener("orientationchange", y), c.window.addEventListener("load", y), (0, s.default)((function() {
                y({
                    type: "dom-loaded"
                })
            }));
            var b = [],
                x = !1;

            function w() {
                if (b.length) {
                    v = void 0 !== c.window.pageYOffset ? c.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                    var t = g || !x || x.width !== f || x.height !== p,
                        e = m || t || !x || x.y !== v;
                    g = !1, m = !1, (t || e) && (b.forEach((function(i) {
                        t && i.onResize(), e && i.onScroll()
                    })), x = {
                        width: f,
                        height: p,
                        y: v
                    }), (0, l.default)(w)
                }
            }
            var k = !!t.ResizeObserver && new t.ResizeObserver((function(t) {
                    t && t.length && (0, l.default)((function() {
                        t.forEach((function(t) {
                            t.target && t.target.jarallax && (g || t.target.jarallax.onResize(), m = !0)
                        }))
                    }))
                })),
                S = 0,
                C = function() {
                    function t(e, i) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = this;
                        n.instanceID = S++, n.$item = e, n.defaults = {
                            type: "scroll",
                            speed: .5,
                            imgSrc: null,
                            imgElement: ".jarallax-img",
                            imgSize: "cover",
                            imgPosition: "50% 50%",
                            imgRepeat: "no-repeat",
                            keepImg: !1,
                            elementInViewport: null,
                            zIndex: -100,
                            disableParallax: !1,
                            disableVideo: !1,
                            automaticResize: !0,
                            videoSrc: null,
                            videoStartTime: 0,
                            videoEndTime: 0,
                            videoVolume: 0,
                            videoPlayOnlyVisible: !0,
                            onScroll: null,
                            onInit: null,
                            onDestroy: null,
                            onCoverImage: null
                        };
                        var r = n.$item.getAttribute("data-jarallax"),
                            s = JSON.parse(r || "{}");
                        r && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                        var l = n.$item.dataset || {},
                            c = {};
                        if (Object.keys(l).forEach((function(t) {
                                var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                                e && void 0 !== n.defaults[e] && (c[e] = l[t])
                            })), n.options = n.extend({}, n.defaults, s, c, i), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach((function(t) {
                                "true" === n.options[t] ? n.options[t] = !0 : "false" === n.options[t] && (n.options[t] = !1)
                            })), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), (n.options.noAndroid || n.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), n.options.disableParallax || (n.options.noIos && n.options.noAndroid ? n.options.disableParallax = /iPad|iPhone|iPod|Android/ : n.options.noIos ? n.options.disableParallax = /iPad|iPhone|iPod/ : n.options.noAndroid && (n.options.disableParallax = /Android/))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
                            var u = n.options.disableParallax;
                            n.options.disableParallax = function() {
                                return u.test(navigator.userAgent)
                            }
                        }
                        if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                                return !1
                            }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
                            var d = n.options.disableVideo;
                            n.options.disableVideo = function() {
                                return d.test(navigator.userAgent)
                            }
                        }
                        "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                            return !1
                        });
                        var h = n.options.elementInViewport;
                        h && "object" === (void 0 === h ? "undefined" : a(h)) && void 0 !== h.length && (h = o(h, 1)[0]);
                        h instanceof Element || (h = null), n.options.elementInViewport = h, n.image = {
                            src: n.options.imgSrc || null,
                            $container: null,
                            useImgTag: !1,
                            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                        }, n.initImg() && n.canInitParallax() && n.init()
                    }
                    return r(t, [{
                        key: "css",
                        value: function(t, e) {
                            return "string" == typeof e ? c.window.getComputedStyle(t).getPropertyValue(e) : (e.transform && h && (e[h] = e.transform), Object.keys(e).forEach((function(i) {
                                t.style[i] = e[i]
                            })), t)
                        }
                    }, {
                        key: "extend",
                        value: function(t) {
                            var e = arguments;
                            return t = t || {}, Object.keys(arguments).forEach((function(i) {
                                e[i] && Object.keys(e[i]).forEach((function(n) {
                                    t[n] = e[i][n]
                                }))
                            })), t
                        }
                    }, {
                        key: "getWindowData",
                        value: function() {
                            return {
                                width: f,
                                height: p,
                                y: v
                            }
                        }
                    }, {
                        key: "initImg",
                        value: function() {
                            var t = this.options.imgElement;
                            return t && "string" == typeof t && (t = this.$item.querySelector(t)), t instanceof Element || (t = null), t && (this.options.keepImg ? this.image.$item = t.cloneNode(!0) : (this.image.$item = t, this.image.$itemParent = t.parentNode), this.image.useImgTag = !0), !!this.image.$item || (null === this.image.src && (this.image.src = this.css(this.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!this.image.src || "none" === this.image.src))
                        }
                    }, {
                        key: "canInitParallax",
                        value: function() {
                            return h && !this.options.disableParallax()
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    pointerEvents: "none"
                                },
                                e = {};
                            if (!this.options.keepImg) {
                                var i = this.$item.getAttribute("style");
                                if (i && this.$item.setAttribute("data-jarallax-original-styles", i), this.image.useImgTag) {
                                    var n = this.image.$item.getAttribute("style");
                                    n && this.image.$item.setAttribute("data-jarallax-original-styles", n)
                                }
                            }
                            if ("static" === this.css(this.$item, "position") && this.css(this.$item, {
                                    position: "relative"
                                }), "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {
                                    zIndex: 0
                                }), this.image.$container = document.createElement("div"), this.css(this.image.$container, t), this.css(this.image.$container, {
                                    "z-index": this.options.zIndex
                                }), d && this.css(this.image.$container, {
                                    opacity: .9999
                                }), this.image.$container.setAttribute("id", "jarallax-container-" + this.instanceID), this.$item.appendChild(this.image.$container), this.image.useImgTag ? e = this.extend({
                                    "object-fit": this.options.imgSize,
                                    "object-position": this.options.imgPosition,
                                    "font-family": "object-fit: " + this.options.imgSize + "; object-position: " + this.options.imgPosition + ";",
                                    "max-width": "none"
                                }, t, e) : (this.image.$item = document.createElement("div"), this.image.src && (e = this.extend({
                                    "background-position": this.options.imgPosition,
                                    "background-size": this.options.imgSize,
                                    "background-repeat": this.options.imgRepeat,
                                    "background-image": 'url("' + this.image.src + '")'
                                }, t, e))), "opacity" !== this.options.type && "scale" !== this.options.type && "scale-opacity" !== this.options.type && 1 !== this.options.speed || (this.image.position = "absolute"), "fixed" === this.image.position)
                                for (var o = 0, r = this.$item; null !== r && r !== document && 0 === o;) {
                                    var a = this.css(r, "-webkit-transform") || this.css(r, "-moz-transform") || this.css(r, "transform");
                                    a && "none" !== a && (o = 1, this.image.position = "absolute"), r = r.parentNode
                                }
                            e.position = this.image.position, this.css(this.image.$item, e), this.image.$container.appendChild(this.image.$item), this.onResize(), this.onScroll(!0), this.options.automaticResize && k && k.observe(this.$item), this.options.onInit && this.options.onInit.call(this), "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {
                                "background-image": "none"
                            }), this.addToParallaxList()
                        }
                    }, {
                        key: "addToParallaxList",
                        value: function() {
                            b.push(this), 1 === b.length && w()
                        }
                    }, {
                        key: "removeFromParallaxList",
                        value: function() {
                            var t = this;
                            b.forEach((function(e, i) {
                                e.instanceID === t.instanceID && b.splice(i, 1)
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFromParallaxList();
                            var t = this.$item.getAttribute("data-jarallax-original-styles");
                            if (this.$item.removeAttribute("data-jarallax-original-styles"), t ? this.$item.setAttribute("style", t) : this.$item.removeAttribute("style"), this.image.useImgTag) {
                                var e = this.image.$item.getAttribute("data-jarallax-original-styles");
                                this.image.$item.removeAttribute("data-jarallax-original-styles"), e ? this.image.$item.setAttribute("style", t) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                            }
                            this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles), this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
                        }
                    }, {
                        key: "clipContainer",
                        value: function() {
                            if ("fixed" === this.image.position) {
                                var t = this.image.$container.getBoundingClientRect(),
                                    e = t.width,
                                    i = t.height;
                                if (!this.$clipStyles) this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);
                                var n = "#jarallax-container-" + this.instanceID + " {\n           clip: rect(0 " + e + "px " + i + "px 0);\n           clip: rect(0, " + e + "px, " + i + "px, 0);\n        }";
                                this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = n : this.$clipStyles.innerHTML = n
                            }
                        }
                    }, {
                        key: "coverImage",
                        value: function() {
                            var t = this.image.$container.getBoundingClientRect(),
                                e = t.height,
                                i = this.options.speed,
                                n = "scroll" === this.options.type || "scroll-opacity" === this.options.type,
                                o = 0,
                                r = e,
                                a = 0;
                            return n && (o = i < 0 ? i * Math.max(e, p) : i * (e + p), i > 1 ? r = Math.abs(o - p) : i < 0 ? r = o / i + Math.abs(o) : r += Math.abs(p - e) * (1 - i), o /= 2), this.parallaxScrollDistance = o, a = n ? (p - r) / 2 : (e - r) / 2, this.css(this.image.$item, {
                                height: r + "px",
                                marginTop: a + "px",
                                left: "fixed" === this.image.position ? t.left + "px" : "0",
                                width: t.width + "px"
                            }), this.options.onCoverImage && this.options.onCoverImage.call(this), {
                                image: {
                                    height: r,
                                    marginTop: a
                                },
                                container: t
                            }
                        }
                    }, {
                        key: "isVisible",
                        value: function() {
                            return this.isElementInViewport || !1
                        }
                    }, {
                        key: "onScroll",
                        value: function(t) {
                            var e = this.$item.getBoundingClientRect(),
                                i = e.top,
                                n = e.height,
                                o = {},
                                r = e;
                            if (this.options.elementInViewport && (r = this.options.elementInViewport.getBoundingClientRect()), this.isElementInViewport = r.bottom >= 0 && r.right >= 0 && r.top <= p && r.left <= f, t || this.isElementInViewport) {
                                var a = Math.max(0, i),
                                    s = Math.max(0, n + i),
                                    l = Math.max(0, -i),
                                    c = Math.max(0, i + n - p),
                                    u = Math.max(0, n - (i + n - p)),
                                    d = Math.max(0, -i + p - n),
                                    h = 1 - 2 * (p - i) / (p + n),
                                    v = 1;
                                if (n < p ? v = 1 - (l || c) / n : s <= p ? v = s / p : u <= p && (v = u / p), "opacity" !== this.options.type && "scale-opacity" !== this.options.type && "scroll-opacity" !== this.options.type || (o.transform = "translate3d(0,0,0)", o.opacity = v), "scale" === this.options.type || "scale-opacity" === this.options.type) {
                                    var g = 1;
                                    this.options.speed < 0 ? g -= this.options.speed * v : g += this.options.speed * (1 - v), o.transform = "scale(" + g + ") translate3d(0,0,0)"
                                }
                                if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                                    var m = this.parallaxScrollDistance * h;
                                    "absolute" === this.image.position && (m -= i), o.transform = "translate3d(0," + m + "px,0)"
                                }
                                this.css(this.image.$item, o), this.options.onScroll && this.options.onScroll.call(this, {
                                    section: e,
                                    beforeTop: a,
                                    beforeTopEnd: s,
                                    afterTop: l,
                                    beforeBottom: c,
                                    beforeBottomEnd: u,
                                    afterBottom: d,
                                    visiblePercent: v,
                                    fromViewportCenter: h
                                })
                            }
                        }
                    }, {
                        key: "onResize",
                        value: function() {
                            this.coverImage(), this.clipContainer()
                        }
                    }]), t
                }(),
                T = function(t) {
                    ("object" === ("undefined" == typeof HTMLElement ? "undefined" : a(HTMLElement)) ? t instanceof HTMLElement : t && "object" === (void 0 === t ? "undefined" : a(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
                    for (var e = arguments[1], i = Array.prototype.slice.call(arguments, 2), n = t.length, o = 0, r = void 0; o < n; o++)
                        if ("object" === (void 0 === e ? "undefined" : a(e)) || void 0 === e ? t[o].jarallax || (t[o].jarallax = new C(t[o], e)) : t[o].jarallax && (r = t[o].jarallax[e].apply(t[o].jarallax, i)), void 0 !== r) return r;
                    return t
                };
            T.constructor = C, e.default = T
        }).call(this, i(5))
    }, function(t, e, i) {
        var n = i(4),
            o = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function(t) {
                var e = +new Date,
                    i = Math.max(0, 16 - (e - r)),
                    n = setTimeout(t, i);
                return r = e, n
            },
            r = +new Date;
        var a = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
        Function.prototype.bind && (o = o.bind(n), a = a.bind(n)), (t.exports = o).cancel = a
    }]);
    i(127), i(116);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * Name    : Video Background Extension for Jarallax
     * Version : 1.0.1
     * Author  : nK <https://nkdev.info>
     * GitHub  : https://github.com/nk-o/jarallax
     */
    ! function(t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        i.m = t, i.c = e, i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" === o(t) && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) i.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 6)
    }([, , function(t, e, i) {
        t.exports = function(t) {
            "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", (function() {
                "interactive" === document.readyState && t.call()
            })) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
        }
    }, , function(t, e, i) {
        (function(e) {
            var i;
            i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
        }).call(this, i(5))
    }, function(t, e, i) {
        var n, r = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
            return o(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
        };
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window)
        }
        t.exports = n
    }, function(t, e, i) {
        t.exports = i(7)
    }, function(t, e, i) {
        var n = s(i(8)),
            o = s(i(4)),
            r = s(i(2)),
            a = s(i(10));

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        o.default.VideoWorker = o.default.VideoWorker || n.default, (0, a.default)(), (0, r.default)((function() {
            "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
        }))
    }, function(t, e, i) {
        t.exports = i(9)
    }, function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
                return o(t)
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
            },
            r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();

        function a() {
            this._done = [], this._fail = []
        }
        a.prototype = {
            execute: function(t, e) {
                var i = t.length;
                for (e = Array.prototype.slice.call(e); i--;) t[i].apply(null, e)
            },
            resolve: function() {
                this.execute(this._done, arguments)
            },
            reject: function() {
                this.execute(this._fail, arguments)
            },
            done: function(t) {
                this._done.push(t)
            },
            fail: function(t) {
                this._fail.push(t)
            }
        };
        var s = 0,
            l = 0,
            c = 0,
            u = 0,
            d = 0,
            h = new a,
            f = new a,
            p = function() {
                function t(e, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.url = e, this.options_default = {
                        autoplay: !1,
                        loop: !1,
                        mute: !1,
                        volume: 100,
                        showContols: !0,
                        startTime: 0,
                        endTime: 0
                    }, this.options = this.extend({}, this.options_default, i), this.videoID = this.parseURL(e), this.videoID && (this.ID = s++, this.loadAPI(), this.init())
                }
                return r(t, [{
                    key: "extend",
                    value: function(t) {
                        var e = arguments;
                        return t = t || {}, Object.keys(arguments).forEach((function(i) {
                            e[i] && Object.keys(e[i]).forEach((function(n) {
                                t[n] = e[i][n]
                            }))
                        })), t
                    }
                }, {
                    key: "parseURL",
                    value: function(t) {
                        var e, i, n, o, r = !(!(e = t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== e[1].length) && e[1],
                            a = function(t) {
                                var e = t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                                return !(!e || !e[3]) && e[3]
                            }(t),
                            s = (i = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, o = 0, i.forEach((function(t) {
                                var e = t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                                e && e[1] && e[2] && (n["ogv" === e[1] ? "ogg" : e[1]] = e[2], o = 1)
                            })), !!o && n);
                        return r ? (this.type = "youtube", r) : a ? (this.type = "vimeo", a) : !!s && (this.type = "local", s)
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        return !!this.videoID
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        var i = this;
                        this.userEventsList && this.userEventsList[t] && (e ? this.userEventsList[t].forEach((function(n, o) {
                            n === e && (i.userEventsList[t][o] = !1)
                        })) : delete this.userEventsList[t])
                    }
                }, {
                    key: "fire",
                    value: function(t) {
                        var e = this,
                            i = [].slice.call(arguments, 1);
                        this.userEventsList && void 0 !== this.userEventsList[t] && this.userEventsList[t].forEach((function(t) {
                            t && t.apply(e, i)
                        }))
                    }
                }, {
                    key: "play",
                    value: function(t) {
                        var e = this;
                        e.player && ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), YT.PlayerState.PLAYING !== e.player.getPlayerState() && e.player.playVideo()), "vimeo" === e.type && (void 0 !== t && e.player.setCurrentTime(t), e.player.getPaused().then((function(t) {
                            t && e.player.play()
                        }))), "local" === e.type && (void 0 !== t && (e.player.currentTime = t), e.player.paused && e.player.play()))
                    }
                }, {
                    key: "pause",
                    value: function() {
                        var t = this;
                        t.player && ("youtube" === t.type && t.player.pauseVideo && YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then((function(e) {
                            e || t.player.pause()
                        })), "local" === t.type && (t.player.paused || t.player.pause()))
                    }
                }, {
                    key: "mute",
                    value: function() {
                        this.player && ("youtube" === this.type && this.player.mute && this.player.mute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(0), "local" === this.type && (this.$video.muted = !0))
                    }
                }, {
                    key: "unmute",
                    value: function() {
                        this.player && ("youtube" === this.type && this.player.mute && this.player.unMute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(this.options.volume), "local" === this.type && (this.$video.muted = !1))
                    }
                }, {
                    key: "setVolume",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = this;
                        e.player && t && ("youtube" === e.type && e.player.setVolume && e.player.setVolume(t), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(t), "local" === e.type && (e.$video.volume = t / 100))
                    }
                }, {
                    key: "getVolume",
                    value: function(t) {
                        this.player ? ("youtube" === this.type && this.player.getVolume && t(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then((function(e) {
                            t(e)
                        })), "local" === this.type && t(100 * this.$video.volume)) : t(!1)
                    }
                }, {
                    key: "getMuted",
                    value: function(t) {
                        this.player ? ("youtube" === this.type && this.player.isMuted && t(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then((function(e) {
                            t(!!e)
                        })), "local" === this.type && t(this.$video.muted)) : t(null)
                    }
                }, {
                    key: "getImageURL",
                    value: function(t) {
                        var e = this;
                        if (e.videoImage) t(e.videoImage);
                        else {
                            if ("youtube" === e.type) {
                                var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                                    n = 0,
                                    o = new Image;
                                o.onload = function() {
                                    120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg", t(e.videoImage)) : (n++, this.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg")
                                }, o.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg"
                            }
                            if ("vimeo" === e.type) {
                                var r = new XMLHttpRequest;
                                r.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0), r.onreadystatechange = function() {
                                    if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                        var i = JSON.parse(this.responseText);
                                        e.videoImage = i[0].thumbnail_large, t(e.videoImage)
                                    }
                                }, r.send(), r = null
                            }
                        }
                    }
                }, {
                    key: "getIframe",
                    value: function(t) {
                        this.getVideo(t)
                    }
                }, {
                    key: "getVideo",
                    value: function(t) {
                        var e = this;
                        e.$video ? t(e.$video) : e.onAPIready((function() {
                            var i = void 0;
                            if (e.$video || ((i = document.createElement("div")).style.display = "none"), "youtube" === e.type) {
                                e.playerOptions = {}, e.playerOptions.videoId = e.videoID, e.playerOptions.playerVars = {
                                    autohide: 1,
                                    rel: 0,
                                    autoplay: 0,
                                    playsinline: 1
                                }, e.options.showContols || (e.playerOptions.playerVars.iv_load_policy = 3, e.playerOptions.playerVars.modestbranding = 1, e.playerOptions.playerVars.controls = 0, e.playerOptions.playerVars.showinfo = 0, e.playerOptions.playerVars.disablekb = 1);
                                var n = void 0,
                                    o = void 0;
                                e.playerOptions.events = {
                                    onReady: function(t) {
                                        e.options.mute ? t.target.mute() : e.options.volume && t.target.setVolume(e.options.volume), e.options.autoplay && e.play(e.options.startTime), e.fire("ready", t), setInterval((function() {
                                            e.getVolume((function(i) {
                                                e.options.volume !== i && (e.options.volume = i, e.fire("volumechange", t))
                                            }))
                                        }), 150)
                                    },
                                    onStateChange: function(t) {
                                        e.options.loop && t.data === YT.PlayerState.ENDED && e.play(e.options.startTime), n || t.data !== YT.PlayerState.PLAYING || (n = 1, e.fire("started", t)), t.data === YT.PlayerState.PLAYING && e.fire("play", t), t.data === YT.PlayerState.PAUSED && e.fire("pause", t), t.data === YT.PlayerState.ENDED && e.fire("ended", t), t.data === YT.PlayerState.PLAYING ? o = setInterval((function() {
                                            e.fire("timeupdate", t), e.options.endTime && e.player.getCurrentTime() >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                                        }), 150) : clearInterval(o)
                                    }
                                };
                                var r = !e.$video;
                                if (r) {
                                    var a = document.createElement("div");
                                    a.setAttribute("id", e.playerID), i.appendChild(a), document.body.appendChild(i)
                                }
                                e.player = e.player || new window.YT.Player(e.playerID, e.playerOptions), r && (e.$video = document.getElementById(e.playerID), e.videoWidth = parseInt(e.$video.getAttribute("width"), 10) || 1280, e.videoHeight = parseInt(e.$video.getAttribute("height"), 10) || 720)
                            }
                            if ("vimeo" === e.type) {
                                e.playerOptions = "", e.playerOptions += "player_id=" + e.playerID, e.playerOptions += "&autopause=0", e.playerOptions += "&transparent=0", e.options.showContols || (e.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), e.playerOptions += "&autoplay=" + (e.options.autoplay ? "1" : "0"), e.playerOptions += "&loop=" + (e.options.loop ? 1 : 0), e.$video || (e.$video = document.createElement("iframe"), e.$video.setAttribute("id", e.playerID), e.$video.setAttribute("src", "https://player.vimeo.com/video/" + e.videoID + "?" + e.playerOptions), e.$video.setAttribute("frameborder", "0"), i.appendChild(e.$video), document.body.appendChild(i)), e.player = e.player || new Vimeo.Player(e.$video), e.player.getVideoWidth().then((function(t) {
                                    e.videoWidth = t || 1280
                                })), e.player.getVideoHeight().then((function(t) {
                                    e.videoHeight = t || 720
                                })), e.options.startTime && e.options.autoplay && e.player.setCurrentTime(e.options.startTime), e.options.mute ? e.player.setVolume(0) : e.options.volume && e.player.setVolume(e.options.volume);
                                var s = void 0;
                                e.player.on("timeupdate", (function(t) {
                                    s || (e.fire("started", t), s = 1), e.fire("timeupdate", t), e.options.endTime && e.options.endTime && t.seconds >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                                })), e.player.on("play", (function(t) {
                                    e.fire("play", t), e.options.startTime && 0 === t.seconds && e.play(e.options.startTime)
                                })), e.player.on("pause", (function(t) {
                                    e.fire("pause", t)
                                })), e.player.on("ended", (function(t) {
                                    e.fire("ended", t)
                                })), e.player.on("loaded", (function(t) {
                                    e.fire("ready", t)
                                })), e.player.on("volumechange", (function(t) {
                                    e.fire("volumechange", t)
                                }))
                            }
                            if ("local" === e.type) {
                                e.$video || (e.$video = document.createElement("video"), e.options.showContols && (e.$video.controls = !0), e.options.mute ? e.$video.muted = !0 : e.$video.volume && (e.$video.volume = e.options.volume / 100), e.options.loop && (e.$video.loop = !0), e.$video.setAttribute("playsinline", ""), e.$video.setAttribute("webkit-playsinline", ""), e.$video.setAttribute("id", e.playerID), i.appendChild(e.$video), document.body.appendChild(i), Object.keys(e.videoID).forEach((function(t) {
                                    var i, n, o, r;
                                    i = e.$video, n = e.videoID[t], o = "video/" + t, (r = document.createElement("source")).src = n, r.type = o, i.appendChild(r)
                                }))), e.player = e.player || e.$video;
                                var l = void 0;
                                e.player.addEventListener("playing", (function(t) {
                                    l || e.fire("started", t), l = 1
                                })), e.player.addEventListener("timeupdate", (function(t) {
                                    e.fire("timeupdate", t), e.options.endTime && e.options.endTime && this.currentTime >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                                })), e.player.addEventListener("play", (function(t) {
                                    e.fire("play", t)
                                })), e.player.addEventListener("pause", (function(t) {
                                    e.fire("pause", t)
                                })), e.player.addEventListener("ended", (function(t) {
                                    e.fire("ended", t)
                                })), e.player.addEventListener("loadedmetadata", (function() {
                                    e.videoWidth = this.videoWidth || 1280, e.videoHeight = this.videoHeight || 720, e.fire("ready"), e.options.autoplay && e.play(e.options.startTime)
                                })), e.player.addEventListener("volumechange", (function(t) {
                                    e.getVolume((function(t) {
                                        e.options.volume = t
                                    })), e.fire("volumechange", t)
                                }))
                            }
                            t(e.$video)
                        }))
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.playerID = "VideoWorker-" + this.ID
                    }
                }, {
                    key: "loadAPI",
                    value: function() {
                        if (!l || !c) {
                            var t = "";
                            if ("youtube" !== this.type || l || (l = 1, t = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || c || (c = 1, t = "https://player.vimeo.com/api/player.js"), t) {
                                var e = document.createElement("script"),
                                    i = document.getElementsByTagName("head")[0];
                                e.src = t, i.appendChild(e), i = null, e = null
                            }
                        }
                    }
                }, {
                    key: "onAPIready",
                    value: function(t) {
                        if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || u ? "object" === ("undefined" == typeof YT ? "undefined" : n(YT)) && 1 === YT.loaded ? t() : h.done((function() {
                                t()
                            })) : (u = 1, window.onYouTubeIframeAPIReady = function() {
                                window.onYouTubeIframeAPIReady = null, h.resolve("done"), t()
                            })), "vimeo" === this.type)
                            if ("undefined" != typeof Vimeo || d) "undefined" != typeof Vimeo ? t() : f.done((function() {
                                t()
                            }));
                            else {
                                d = 1;
                                var e = setInterval((function() {
                                    "undefined" != typeof Vimeo && (clearInterval(e), f.resolve("done"), t())
                                }), 20)
                            }
                        "local" === this.type && t()
                    }
                }]), t
            }();
        e.default = p
    }, function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.jarallax;
            if (void 0 === t) return;
            var e = t.constructor,
                i = e.prototype.init;
            e.prototype.init = function() {
                var t = this;
                i.apply(t), t.video && !t.options.disableVideo() && t.video.getVideo((function(e) {
                    var i = e.parentNode;
                    t.css(e, {
                        position: t.image.position,
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        maxHeight: "none",
                        margin: 0,
                        zIndex: -1
                    }), t.$video = e, t.image.$container.appendChild(e), i.parentNode.removeChild(i)
                }))
            };
            var r = e.prototype.coverImage;
            e.prototype.coverImage = function() {
                var t = r.apply(this),
                    e = !!this.image.$item && this.image.$item.nodeName;
                if (t && this.video && e && ("IFRAME" === e || "VIDEO" === e)) {
                    var i = t.image.height,
                        n = i * this.image.width / this.image.height,
                        o = (t.container.width - n) / 2,
                        a = t.image.marginTop;
                    t.container.width > n && (i = (n = t.container.width) * this.image.height / this.image.width, o = 0, a += (t.image.height - i) / 2), "IFRAME" === e && (i += 400, a -= 200), this.css(this.$video, {
                        width: n + "px",
                        marginLeft: o + "px",
                        height: i + "px",
                        marginTop: a + "px"
                    })
                }
                return t
            };
            var a = e.prototype.initImg;
            e.prototype.initImg = function() {
                var t = a.apply(this);
                return this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null), this.options.videoSrc ? (this.defaultInitImgResult = t, !0) : t
            };
            var s = e.prototype.canInitParallax;
            e.prototype.canInitParallax = function() {
                var t = this,
                    e = s.apply(t);
                if (!t.options.videoSrc) return e;
                var i = new n.default(t.options.videoSrc, {
                    autoplay: !0,
                    loop: !0,
                    showContols: !1,
                    startTime: t.options.videoStartTime || 0,
                    endTime: t.options.videoEndTime || 0,
                    mute: t.options.videoVolume ? 0 : 1,
                    volume: t.options.videoVolume || 0
                });
                if (i.isValid())
                    if (e) {
                        if (i.on("ready", (function() {
                                if (t.options.videoPlayOnlyVisible) {
                                    var e = t.onScroll;
                                    t.onScroll = function() {
                                        e.apply(t), t.isVisible() ? i.play() : i.pause()
                                    }
                                } else i.play()
                            })), i.on("started", (function() {
                                t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.video.videoWidth || 1280, t.image.height = t.video.videoHeight || 720, t.options.imgWidth = t.image.width, t.options.imgHeight = t.image.height, t.coverImage(), t.clipContainer(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none")
                            })), t.video = i, !t.defaultInitImgResult) return "local" !== i.type ? (i.getImageURL((function(e) {
                            t.image.src = e, t.init()
                        })), !1) : (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
                    } else t.defaultInitImgResult || i.getImageURL((function(e) {
                        var i = t.$item.getAttribute("style");
                        i && t.$item.setAttribute("data-jarallax-original-styles", i), t.css(t.$item, {
                            "background-image": 'url("' + e + '")',
                            "background-position": "center",
                            "background-size": "cover"
                        })
                    }));
                return e
            };
            var l = e.prototype.destroy;
            e.prototype.destroy = function() {
                this.image.$default_item && (this.image.$item = this.image.$default_item, delete this.image.$default_item), l.apply(this)
            }
        };
        var n = r(i(8)),
            o = r(i(4));

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    }]);
    i(202), i(232),
        function() {
            var t = "bfred-it:object-fit-images",
                e = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
                i = "undefined" == typeof Image ? {
                    style: {
                        "object-position": 1
                    }
                } : new Image,
                n = "object-fit" in i.style,
                o = "object-position" in i.style,
                r = "background-size" in i.style,
                a = "string" == typeof i.currentSrc,
                s = i.getAttribute,
                l = i.setAttribute,
                c = !1;

            function u(t, e, i) {
                var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
                s.call(t, "src") !== n && l.call(t, "src", n)
            }

            function d(t, e) {
                t.naturalWidth ? e(t) : setTimeout(d, 100, t, e)
            }

            function h(i) {
                var o = function(t) {
                        for (var i, n = getComputedStyle(t).fontFamily, o = {}; null !== (i = e.exec(n));) o[i[1]] = i[2];
                        return o
                    }(i),
                    r = i[t];
                if (o["object-fit"] = o["object-fit"] || "fill", !r.img) {
                    if ("fill" === o["object-fit"]) return;
                    if (!r.skipTest && n && !o["object-position"]) return
                }
                if (!r.img) {
                    r.img = new Image(i.width, i.height), r.img.srcset = s.call(i, "data-ofi-srcset") || i.srcset, r.img.src = s.call(i, "data-ofi-src") || i.src, l.call(i, "data-ofi-src", i.src), i.srcset && l.call(i, "data-ofi-srcset", i.srcset), u(i, i.naturalWidth || i.width, i.naturalHeight || i.height), i.srcset && (i.srcset = "");
                    try {
                        ! function(e) {
                            var i = {
                                get: function(i) {
                                    return e[t].img[i || "src"]
                                },
                                set: function(i, n) {
                                    return e[t].img[n || "src"] = i, l.call(e, "data-ofi-" + n, i), h(e), i
                                }
                            };
                            Object.defineProperty(e, "src", i), Object.defineProperty(e, "currentSrc", {
                                get: function() {
                                    return i.get("currentSrc")
                                }
                            }), Object.defineProperty(e, "srcset", {
                                get: function() {
                                    return i.get("srcset")
                                },
                                set: function(t) {
                                    return i.set(t, "srcset")
                                }
                            })
                        }(i)
                    } catch (t) {
                        window.console && console.warn("https://bit.ly/ofi-old-browser")
                    }
                }! function(t) {
                    if (t.srcset && !a && window.picturefill) {
                        var e = window.picturefill._;
                        t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                            reselect: !0
                        }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                            reselect: !0
                        })), t.currentSrc = t[e.ns].curSrc || t.src
                    }
                }(r.img), i.style.backgroundImage = 'url("' + (r.img.currentSrc || r.img.src).replace(/"/g, '\\"') + '")', i.style.backgroundPosition = o["object-position"] || "center", i.style.backgroundRepeat = "no-repeat", i.style.backgroundOrigin = "content-box", /scale-down/.test(o["object-fit"]) ? d(r.img, (function() {
                    r.img.naturalWidth > i.width || r.img.naturalHeight > i.height ? i.style.backgroundSize = "contain" : i.style.backgroundSize = "auto"
                })) : i.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), d(r.img, (function(t) {
                    u(i, t.naturalWidth, t.naturalHeight)
                }))
            }

            function f(e, i) {
                var n = !c && !e;
                if (i = i || {}, e = e || "img", o && !i.skipTest || !r) return !1;
                "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
                for (var a = 0; a < e.length; a++) e[a][t] = e[a][t] || {
                    skipTest: i.skipTest
                }, h(e[a]);
                n && (document.body.addEventListener("load", (function(t) {
                    "IMG" === t.target.tagName && f(t.target, {
                        skipTest: i.skipTest
                    })
                }), !0), c = !0, e = "img"), i.watchMQ && window.addEventListener("resize", f.bind(null, e, {
                    skipTest: i.skipTest
                }))
            }
            f.supportsObjectFit = n, f.supportsObjectPosition = o,
                function() {
                    function e(e, i) {
                        return e[t] && e[t].img && ("src" === i || "srcset" === i) ? e[t].img : e
                    }
                    o || (HTMLImageElement.prototype.getAttribute = function(t) {
                        return s.call(e(this, t), t)
                    }, HTMLImageElement.prototype.setAttribute = function(t, i) {
                        return l.call(e(this, t), t, String(i))
                    })
                }()
        }(), i(219), i(233), i(43), i(71);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
     * Copyright 2014 Wang Shenwei.
     * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
     *
     * Further modified
     * Copyright 2015 Ching Yaw Hao.
     */
    ! function() {
        var t, e, i, n = window.jQuery,
            o = n(window),
            a = n(document),
            s = "http://www.w3.org/2000/svg",
            l = "SVGAngle" in window && ((e = document.createElement("div")).innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == s, e.innerHTML = "", t),
            c = "transition" in (i = document.createElement("div").style) || "WebkitTransition" in i || "MozTransition" in i || "msTransition" in i || "OTransition" in i,
            u = "ontouchstart" in window,
            d = "mousedown" + (u ? " touchstart" : ""),
            h = "mousemove.clockpicker" + (u ? " touchmove.clockpicker" : ""),
            f = "mouseup.clockpicker" + (u ? " touchend.clockpicker" : ""),
            p = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

        function v(t) {
            return document.createElementNS(s, t)
        }

        function g(t, e, i) {
            var n;
            return function() {
                var o = this,
                    r = arguments,
                    a = function() {
                        n = null, i || t.apply(o, r)
                    },
                    s = i && !n;
                clearTimeout(n), n = setTimeout(a, e), s && t.apply(o, r)
            }
        }

        function m(t) {
            return (t < 10 ? "0" : "") + t
        }
        var y = 0;
        var b = 135,
            x = 110,
            w = 80,
            k = 20,
            S = 2 * b,
            C = c ? 350 : 1,
            T = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

        function M(t, e) {
            var i, o, r = n(T),
                s = r.find(".clockpicker-plate"),
                c = r.find(".picker__holder"),
                u = r.find(".clockpicker-hours"),
                p = r.find(".clockpicker-minutes"),
                M = r.find(".clockpicker-am-pm-block"),
                O = "INPUT" === t.prop("tagName"),
                I = O ? t : t.find("input"),
                P = (I.prop("type"), n("label[for=" + I.attr("id") + "]")),
                _ = this;
            if (this.id = (o = ++y + "", (i = "cp") ? i + o : o), this.element = t, this.holder = c, this.options = e, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = O, this.input = I, this.label = P, this.popover = r, this.plate = s, this.hoursView = u, this.minutesView = p, this.amPmBlock = M, this.spanHours = r.find(".clockpicker-span-hours"), this.spanMinutes = r.find(".clockpicker-span-minutes"), this.spanAmPm = r.find(".clockpicker-span-am-pm"), this.footer = r.find(".picker__footer"), this.amOrPm = "", e.twelvehour) {
                var E = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                n(E);
                e.ampmclickable ? (this.spanAmPm.empty(), n('<div id="click-am">AM</div>').on("click", (function() {
                    _.spanAmPm.children("#click-am").addClass("text-primary"), _.spanAmPm.children("#click-pm").removeClass("text-primary"), _.amOrPm = "AM"
                })).appendTo(this.spanAmPm), n('<div id="click-pm">PM</div>').on("click", (function() {
                    _.spanAmPm.children("#click-pm").addClass("text-primary"), _.spanAmPm.children("#click-am").removeClass("text-primary"), _.amOrPm = "PM"
                })).appendTo(this.spanAmPm)) : (n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", (function() {
                    _.amOrPm = "AM", _.amPmBlock.children(".pm-button").removeClass("active"), _.amPmBlock.children(".am-button").addClass("active"), _.spanAmPm.empty().append("AM")
                })).appendTo(this.amPmBlock), n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", (function() {
                    _.amOrPm = "PM", _.amPmBlock.children(".am-button").removeClass("active"), _.amPmBlock.children(".pm-button").addClass("active"), _.spanAmPm.empty().append("PM")
                })).appendTo(this.amPmBlock))
            }
            e.darktheme && r.addClass("darktheme"), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (e.twelvehour ? "3" : "1") + '">' + e.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(this.footer), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (e.twelvehour ? "4" : "2") + '">' + e.cleartext + "</button>").click(n.proxy(this.clearInput, this)).appendTo(this.footer), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), I.on("click.clockpicker", g(n.proxy(this.show, this), 100));
            var D, $, L, R, F = n('<div class="clockpicker-tick"></div>');
            if (e.twelvehour)
                for (D = 0; D < 12; D += e.hourstep) $ = F.clone(), L = D / 6 * Math.PI, R = x, $.css("font-size", "140%"), $.css({
                    left: b + Math.sin(L) * R - k,
                    top: b - Math.cos(L) * R - k
                }), $.html(0 === D ? 12 : D), u.append($), $.on(d, V);
            else
                for (D = 0; D < 24; D += e.hourstep) {
                    $ = F.clone(), L = D / 6 * Math.PI;
                    var W = D > 0 && D < 13;
                    R = W ? w : x, $.css({
                        left: b + Math.sin(L) * R - k,
                        top: b - Math.cos(L) * R - k
                    }), W && $.css("font-size", "120%"), $.html(0 === D ? "00" : D), u.append($), $.on(d, V)
                }
            var N = Math.max(e.minutestep, 5);
            for (D = 0; D < 60; D += N)
                for (D = 0; D < 60; D += 5) $ = F.clone(), L = D / 30 * Math.PI, $.css({
                    left: b + Math.sin(L) * x - k,
                    top: b - Math.cos(L) * x - k
                }), $.css("font-size", "140%"), $.html(m(D)), p.append($), $.on(d, V);

            function V(t, i) {
                var n = s.offset(),
                    o = /^touch/.test(t.type),
                    r = n.left + b,
                    c = n.top + b,
                    u = (o ? t.originalEvent.touches[0] : t).pageX - r,
                    d = (o ? t.originalEvent.touches[0] : t).pageY - c,
                    p = Math.sqrt(u * u + d * d),
                    v = !1;
                if (!i || !(p < x - k || p > x + k)) {
                    t.preventDefault();
                    var g = setTimeout((function() {
                        _.popover.addClass("clockpicker-moving")
                    }), 200);
                    l && s.append(_.canvas), _.setHand(u, d, !i, !0), a.off(h).on(h, (function(t) {
                        t.preventDefault();
                        var e = /^touch/.test(t.type),
                            i = (e ? t.originalEvent.touches[0] : t).pageX - r,
                            n = (e ? t.originalEvent.touches[0] : t).pageY - c;
                        (v || i !== u || n !== d) && (v = !0, _.setHand(i, n, !1, !0))
                    })), a.off(f).on(f, (function(t) {
                        a.off(f), t.preventDefault();
                        var n = /^touch/.test(t.type),
                            o = (n ? t.originalEvent.changedTouches[0] : t).pageX - r,
                            l = (n ? t.originalEvent.changedTouches[0] : t).pageY - c;
                        (i || v) && o === u && l === d && _.setHand(o, l), "hours" === _.currentView ? _.toggleView("minutes", C / 2) : e.autoclose && (_.minutesView.addClass("clockpicker-dial-out"), setTimeout((function() {
                            _.done()
                        }), C / 2)), s.prepend(j), clearTimeout(g), _.popover.removeClass("clockpicker-moving"), a.off(h)
                    }))
                }
            }
            if (s.on(d, (function(t) {
                    0 === n(t.target).closest(".clockpicker-tick").length && V(t, !0)
                })), l) {
                var j = r.find(".clockpicker-canvas"),
                    H = v("svg");
                H.setAttribute("class", "clockpicker-svg"), H.setAttribute("width", S), H.setAttribute("height", S);
                var z = v("g");
                z.setAttribute("transform", "translate(" + b + "," + b + ")");
                var B = v("circle");
                B.setAttribute("class", "clockpicker-canvas-bearing"), B.setAttribute("cx", 0), B.setAttribute("cy", 0), B.setAttribute("r", 2);
                var Y = v("line");
                Y.setAttribute("x1", 0), Y.setAttribute("y1", 0);
                var U = v("circle");
                U.setAttribute("class", "clockpicker-canvas-bg"), U.setAttribute("r", k);
                var X = v("circle");
                X.setAttribute("class", "clockpicker-canvas-fg"), X.setAttribute("r", 5), z.appendChild(Y), z.appendChild(U), z.appendChild(X), z.appendChild(B), H.appendChild(z), j.append(H), this.hand = Y, this.bg = U, this.fg = X, this.bearing = B, this.g = z, this.canvas = j
            }
            A(this.options.init)
        }

        function A(t) {
            t && "function" == typeof t && t()
        }
        M.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Done",
            cleartext: "Clear",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !1,
            vibrate: !0,
            hourstep: 1,
            minutestep: 1,
            ampmSubmit: !1,
            container: "body"
        }, M.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, M.prototype.locate = function() {
            var t = this.element;
            n(this.options.container).append(this.popover), t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
            this.popover.show()
        }, M.prototype.parseInputValue = function() {
            var t = this.input.prop("value") || this.options.default || "";
            if ("now" === t && (t = new Date(+new Date + this.options.fromnow)), t instanceof Date && (t = t.getHours() + ":" + t.getMinutes()), t = t.split(":"), this.hours = +t[0] || 0, this.minutes = +(t[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
                var e = (t[1] + "").replace(/\d+/g, "").toLowerCase();
                this.amOrPm = this.hours > 12 || "pm" === e ? "PM" : "AM"
            }
        }, M.prototype.show = function(t) {
            if (!this.isShown) {
                A(this.options.beforeShow), n(":input").each((function() {
                    n(this).attr("tabindex", -1)
                }));
                var e = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), n(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, (function() {
                    e.isShown && e.locate()
                })), this.isAppended = !0), this.parseInputValue(), this.spanHours.html(m(this.hours)), this.spanMinutes.html(m(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.toggleView("hours"), this.locate(), this.isShown = !0, a.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, g((function(t) {
                    var i = n(t.target);
                    0 === i.closest(e.popover.find(".picker__wrap")).length && 0 === i.closest(e.input).length && e.hide()
                }), 100)), a.on("keyup.clockpicker." + this.id, g((function(t) {
                    27 === t.keyCode && e.hide()
                }), 100)), A(this.options.afterShow)
            }
        }, M.prototype.hide = function() {
            A(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), n(document.body).css("overflow", "visible"), this.isShown = !1, n(":input").each((function(t) {
                n(this).attr("tabindex", t + 1)
            })), a.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), a.off("keyup.clockpicker." + this.id), this.popover.hide(), A(this.options.afterHide)
        }, M.prototype.toggleView = function(t, e) {
            var i = !1;
            "minutes" === t && "visible" === n(this.hoursView).css("visibility") && (A(this.options.beforeHourSelect), i = !0);
            var o = "hours" === t,
                r = o ? this.hoursView : this.minutesView,
                a = o ? this.minutesView : this.hoursView;
            this.currentView = t, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), a.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout((function() {
                a.css("visibility", "hidden")
            }), C), i && A(this.options.afterHourSelect)
        }, M.prototype.resetClock = function(t) {
            var e = this.currentView,
                i = this[e],
                n = "hours" === e,
                o = i * (Math.PI / (n ? 6 : 30)),
                r = n && i > 0 && i < 13 ? w : x,
                a = Math.sin(o) * r,
                s = -Math.cos(o) * r,
                c = this;
            l && t ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout((function() {
                c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(a, s)
            }), t)) : this.setHand(a, s)
        }, M.prototype.setHand = function(t, e, i, o) {
            var r, a, s = Math.atan2(t, -e),
                c = "hours" === this.currentView,
                u = Math.sqrt(t * t + e * e),
                d = this.options,
                h = c && u < (x + w) / 2,
                f = h ? w : x;
            if (r = c ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (f = x), s < 0 && (s = 2 * Math.PI + s), s = (a = Math.round(s / r)) * r, c ? (a *= d.hourstep, d.twelvehour || !h != a > 0 || (a += 12), d.twelvehour && 0 === a && (a = 12), 24 === a && (a = 0)) : 60 === (a *= d.minutestep) && (a = 0), c ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && p && this.options.vibrate && (this.vibrateTimer || (navigator[p](10), this.vibrateTimer = setTimeout(n.proxy((function() {
                    this.vibrateTimer = null
                }), this), 100))), this[this.currentView] = a, this[c ? "spanHours" : "spanMinutes"].html(m(a)), l) {
                o || !c && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                var v = Math.sin(s) * f,
                    g = -Math.cos(s) * f;
                this.hand.setAttribute("x2", v), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", v), this.bg.setAttribute("cy", g), this.fg.setAttribute("cx", v), this.fg.setAttribute("cy", g)
            } else this[c ? "hoursView" : "minutesView"].find(".clockpicker-tick").each((function() {
                var t = n(this);
                t.toggleClass("active", a === +t.html())
            }))
        }, M.prototype.clearInput = function() {
            this.input.val(""), this.hide(), this.options.afterDone && "function" == typeof this.options.afterDone && this.options.afterDone(this.input, null)
        }, M.prototype.getTime = function(t) {
            this.parseInputValue();
            var e = this.hours;
            this.options.twelvehour && e < 12 && "PM" === this.amOrPm && (e += 12);
            var i = new Date;
            return i.setMinutes(this.minutes), i.setHours(e), i.setSeconds(0), t && t.apply(this.element, i) || i
        }, M.prototype.done = function() {
            A(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var t = this.input.prop("value"),
                e = this.hours,
                i = ":" + m(this.minutes);
            this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (e += 12), 12 === this.hours && "AM" === this.amOrPm && (e = 0)), i = m(e) + i, !this.isHTML5 && this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== t && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), A(this.options.afterDone)
        }, M.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
        }, n.fn.pickatime = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);

            function i() {
                var i = n(this),
                    o = i.data("clockpicker");
                if (o) "function" == typeof o[t] && o[t].apply(o, e);
                else {
                    var a = n.extend({}, M.DEFAULTS, i.data(), "object" == r(t) && t);
                    i.data("clockpicker", new M(i, a))
                }
            }
            if (1 == this.length) {
                var o = i.apply(this[0]);
                return void 0 !== o ? o : this
            }
            return this.each(i)
        }
    }();
    i(205), i(234), i(207), i(150), i(151), i(152), i(208), i(153), i(154), i(155), i(156), i(157), i(158), i(159), i(212), i(160), i(163), i(117), i(124), i(164)
}]);