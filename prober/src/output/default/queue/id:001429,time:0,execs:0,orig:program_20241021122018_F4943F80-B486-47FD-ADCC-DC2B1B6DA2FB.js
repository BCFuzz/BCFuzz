function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v7 = new Float32Array(200);
const v8 = new Float32Array();
new Float32Array(200, ...v8, v4, Float32Array, 127n, ...v7);
gc();
