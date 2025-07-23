class C1 extends Float32Array {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(Float32Array, Float32Array);
const v7 = v6.constructor;
const v8 = new C1();
v8.set(v8, v7);
gc();
