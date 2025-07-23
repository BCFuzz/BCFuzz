const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4(Float64Array, Float64Array, Float32Array);
function f10(a11, a12) {
    a12[a12] = Int8Array;
    return v1 == a12;
}
v9.toString = f10;
try { v9.toLocaleString(); } catch (e) {}
for (let v15 = 0; v15 < 100; v15++) {
    f10(f10, Float64Array);
}
gc();
