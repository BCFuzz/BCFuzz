function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new ArrayBuffer();
    const v5 = new DataView(v3);
    const v6 = v5.__proto__;
    try { v6.getFloat64(v5, v6, F0); } catch (e) {}
}
new F0();
function f9(a10) {
    return F0;
}
class C11 {
    static set b(a13) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v15 = new C11();
const o16 = {
    __proto__: C11,
};
C11.b = v15;
Reflect.setPrototypeOf(C11, f9);
gc();
