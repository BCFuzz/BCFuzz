function f2(a3) {
    const o6 = {
        valueOf(a5) {
            return a5;
        },
    };
    return o6;
}
const v7 = f2();
const v8 = f2();
const v9 = f2();
function f10() {
    return Map;
}
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a15.valueOf();
}
new F11(WeakMap, WeakMap, WeakMap);
const v18 = new F11(v8, f10, v9);
const t20 = v18.constructor;
new t20(f2, v7, F11);
new F11(v18, Map, v8);
gc();
