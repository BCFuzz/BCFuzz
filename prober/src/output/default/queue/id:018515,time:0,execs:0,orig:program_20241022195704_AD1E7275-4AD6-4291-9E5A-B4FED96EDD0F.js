class C2 {
}
const v3 = new C2();
const v4 = new C2();
function f5(a6, a7) {
    const o11 = {
        "a": v3,
        "d": f5,
        [a6]: 31819,
        "e": a6,
        "c": v3,
        "h": C2,
        "f": v4,
        "b": -16,
        n(a9, a10) {
            return a9;
        },
    };
    return o11;
}
const v12 = /9(?!(a))\1(?:ab){4,7}?/su;
v12.toString = f5;
const v13 = v12.toString();
const o14 = {
};
const v15 = o14.constructor;
try { v15.defineProperties(v12, v13); } catch (e) {}
gc();
