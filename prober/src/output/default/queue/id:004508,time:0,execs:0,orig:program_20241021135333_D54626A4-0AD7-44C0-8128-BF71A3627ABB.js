function f0() {
    return f0;
}
const v2 = new Uint32Array();
v2.sort(f0);
gc();
