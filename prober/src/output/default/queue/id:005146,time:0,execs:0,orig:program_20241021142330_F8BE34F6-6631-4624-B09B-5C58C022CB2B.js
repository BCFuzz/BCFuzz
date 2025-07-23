function f0() {
    return f0;
}
const v2 = new Float32Array();
v2.valueOf = f0;
v2.subarray(Float32Array, v2);
gc();
