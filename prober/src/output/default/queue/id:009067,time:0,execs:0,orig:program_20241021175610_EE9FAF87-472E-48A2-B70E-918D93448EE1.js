function f1() {
    return Symbol;
}
const v2 = Symbol.constructor;
function f3(a4, a5) {
    return a5;
}
Object.defineProperty(v2, 0, { enumerable: true, get: f1, set: f3 });
function f6(a7, a8) {
    ([1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0]).values().next();
    for (let [i15, i16] = (() => {
            0 | 0;
            return [0, 10];
        })();
        i15 < i16;
        i16--) {
        i15 ^ i15;
    }
    return f3;
}
for (let i = 0; i < 100; i++) {
    f6(f3, f6);
}
gc();
