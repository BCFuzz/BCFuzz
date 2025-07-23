function f0() {
    return -9;
}
const v4 = new Float32Array(1015);
v4.valueOf = f0;
v4[0] = v4;
v4.sort();
gc();
