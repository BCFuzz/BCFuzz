function f1() {
    return f1;
}
Object.defineProperty(Uint16Array, 1, { configurable: true, get: f1 });
const v2 = /\u{12345}OhEC/dys;
function f3(a4, a5) {
    function f6() {
        return f6;
    }
    f6[Symbol.toPrimitive] = f3;
    const v9 = new Uint16Array(Uint16Array);
    v9["sort"](f6);
    return Uint16Array;
}
v2.toString = f3;
const v12 = v2.toString;
try { v12.call(); } catch (e) {}
gc();
