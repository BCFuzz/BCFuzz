function f0() {
    return f0;
}
const v3 = new Uint32Array(4046);
v3.reduce(f0);
gc();
