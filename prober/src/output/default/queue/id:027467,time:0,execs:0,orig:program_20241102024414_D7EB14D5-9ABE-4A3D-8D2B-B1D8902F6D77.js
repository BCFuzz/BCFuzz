const v2 = /\u{12345}OhEC/dys;
function f3(a4, a5) {
    function f6() {
        return f6;
    }
    const v8 = Symbol.toPrimitive;
    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
    }
    f6[v8] = f3;
    const v19 = [v8];
    const v22 = new Proxy([f6,f6,f6,f6,f6], v19);
    const o23 = {
        __proto__: v22,
        1: "caller",
    };
    for (const v24 in o23) {
    }
    const v25 = new Uint16Array(Uint16Array);
    v25["sort"](f6);
    return "caller";
}
v2.toString = f3;
const v28 = v2.toString;
try { v28.call(v2, v2, f3, v28); } catch (e) {}
gc();
