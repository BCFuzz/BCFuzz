function f0() {
    return f0;
}
const v3 = new Uint32Array(5);
v3["toSorted"](f0);
gc();
