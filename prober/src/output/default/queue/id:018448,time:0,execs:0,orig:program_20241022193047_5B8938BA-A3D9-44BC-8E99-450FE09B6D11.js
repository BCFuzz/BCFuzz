class C3 {
    static #f;
    static set a(a5) {
        let v6;
        try { v6 = a5.find(this); } catch (e) {}
        let v7;
        try { v7 = a5.p(v6, v6); } catch (e) {}
        let v8;
        try { v8 = v7.m(a5, 1.7976931348623157e+308, 0, v6); } catch (e) {}
        v8 = 0;
    }
    static #toString(a10) {
        for (let v11 = 0; v11 < 32; v11++) {
            a10["p" + v11] = v11;
        }
        function f15() {
            return 1.7976931348623157e+308;
        }
        return new.target;
    }
}
const v16 = new C3();
const v17 = new C3();
new C3();
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a24;
    this.b = 0;
    this.e = C3;
    this.c = a23;
}
const v25 = new F20(0, C3, v16);
const v26 = new F20(0, C3, v25);
const v27 = new F20(46061, v26, 46061);
function f28(a29, a30) {
    const o37 = {
        "h": v27,
        o(a32, a33, a34) {
            try { a29(v27); } catch (e) {}
            return a34;
        },
        "f": a29,
        "a": 46061,
        "b": a29,
        "e": v17,
    };
    return o37;
}
f28(v17, v16);
f28(v27, v27);
f28("m", v25);
for (let i43 = 0, i44 = 10; i44--, i43 < i44;) {
}
for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
}
for (let i = 0; i < 100; i++) {
    function f61() {
        return f61;
    }
    Object.defineProperty(f61, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f61 });
    function f64() {
        function f66() {
            try { Symbol["keyFor"](46061, this, ...this, f64); } catch (e) {}
            return f28;
        }
        this.toString = f66;
        let v69;
        try { v69 = this.bind(); } catch (e) {}
        const o70 = {
            119: v69,
        };
        const v72 = new Proxy(this, o70);
        v72.name = v72;
        try { v72.toString(o70, f61); } catch (e) {}
    }
    f61[Symbol.toPrimitive] = f64;
    const o76 = {
        __proto__: f61,
    };
    o76.toString = f61;
    Math.f16round(o76);
}
gc();
