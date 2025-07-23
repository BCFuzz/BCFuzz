function f0() {
    return f0;
}
const t3 = createGlobalObject().Float16Array;
const v5 = new t3(8);
v5.toSorted(f0);
gc();
