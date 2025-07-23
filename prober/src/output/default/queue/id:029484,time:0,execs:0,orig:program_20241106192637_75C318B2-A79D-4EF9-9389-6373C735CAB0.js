const v2 = /\u{12345}OhEC/dys;
function f3(a4, a5) {
    function f6() {
        return "caller";
    }
    function f8() {
        return a5;
    }
    const v9 = Symbol.toPrimitive;
    for (let v10 = 0; v10 < 5; v10++) {
        v10 < v10;
    }
    f6[v9] = f3;
    const v12 = [v9];
    v12.getOwnPropertyDescriptor = Symbol;
    const v15 = new Proxy([f6,f6,f6,f6,f6], v12);
    const o16 = {
        __proto__: v15,
        1: "caller",
    };
    for (const v17 in o16) {
    }
    Uint16Array(Uint16Array);
    return a4;
}
v2.toString = f3;
const v19 = v2.toString;
try { v19.call(); } catch (e) {}
gc();
