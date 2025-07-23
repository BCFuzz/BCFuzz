function f0() {
    return f0;
}
const v3 = new Uint32Array(3);
v3.sort(f0);
gc();
