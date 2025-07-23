const v0 = [-2104753440];
const v3 = new Int32Array(681);
function f4(a5, a6) {
    const v8 = [Reflect,a6];
    const v9 = v0.every;
    Reflect.apply(v9, a6, v8);
    return v9;
}
v3.constructor = f4;
function f11(a12, a13, a14, a15) {
    try { a14.constructor(); } catch (e) {}
}
v3.forEach(f11);
gc();
