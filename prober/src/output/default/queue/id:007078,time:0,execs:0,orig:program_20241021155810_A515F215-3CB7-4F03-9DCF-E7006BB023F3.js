function f1() {
    return f1;
}
const v2 = Symbol.constructor;
function f3(a4, a5) {
    return a4;
}
Object.defineProperty(v2, 0, { enumerable: true, get: f1, set: f3 });
([[Symbol,Symbol,Symbol,Symbol,Symbol]]).indexOf(f3, v2);
function f9(a10, a11) {
    const v12 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
    v12.values();
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    }
    return v12;
}
for (let i = 0; i < 100; i++) {
    f9();
}
gc();
