function f1() {
    return 4;
}
const v4 = new Float32Array(11);
v4.toSorted(f1);
gc();
