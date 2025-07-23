function f1(a2, a3) {
    const o4 = {
        "d": f1,
        [a2]: 31819,
    };
    Object.defineProperty(o4, "configurable", { writable: true, configurable: true, value: o4 });
    o4.d = o4;
    return o4;
}
const v5 = /9(?!(a))\1(?:ab){4,7}?/su;
v5.toString = f1;
const v6 = v5.toString();
const o7 = {
};
const v8 = o7.constructor;
try { v8.defineProperties(v5, v6); } catch (e) {}
gc();
