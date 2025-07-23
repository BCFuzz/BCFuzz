class C0 {
    static set b(a2) {
        fullGC();
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v5 = new C0();
const v6 = v5.constructor;
const v7 = new v6(v6, v6);
function f8(a9) {
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F10(f8, F10);
    return f8;
}
v7.constructor = f8;
const t17 = v7.constructor;
t17();
const o17 = {
    __proto__: C0,
};
C0.b = v5;
gc();
