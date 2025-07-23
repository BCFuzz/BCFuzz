function f0() {
}
const v1 = f0();
const v2 = f0();
const v3 = f0();
function f4(a5, a6) {
    const v9 = new Uint32Array(257);
    const v12 = new Float32Array(129);
    v9.copyWithin(Float32Array, Uint32Array, ...v9, ...v12);
}
f4(v1, v2);
f4(v3, v2);
f4(v3, v3);
function f17(a18) {
}
const v21 = new Uint32Array(3428);
const v24 = new Int16Array(1000);
f17(...v24, Float32Array, ...v21);
gc();
