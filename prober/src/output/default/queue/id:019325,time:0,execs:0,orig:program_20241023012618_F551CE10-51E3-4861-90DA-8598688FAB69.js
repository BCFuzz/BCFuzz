function f0(a1) {
    return a1;
}
const v4 = createGlobalObject().Float16Array;
const v5 = new v4(v4);
v5.sort().toSorted(f0);
gc();
