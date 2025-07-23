const v0 = [-2104753440];
const v3 = new Int32Array(681);
function f4(a5, a6) {
    const v8 = [];
    Reflect.apply(v0.every, a6, v8);
    return Int32Array;
}
v3.constructor = f4;
function f11(a12, a13, a14, a15) {
    try { a14.constructor(v3, a15); } catch (e) {}
    return a15;
}
v3.map(f11);
gc();
