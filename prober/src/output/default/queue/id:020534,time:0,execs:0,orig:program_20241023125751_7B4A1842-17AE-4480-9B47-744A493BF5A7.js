function f0(a1) {
    return f0;
}
const v2 = [0.301619064041482,-270.9128330076935,-2.2250738585072014e-308,1000000000000.0];
v2.push(f0);
const t4 = createGlobalObject().Float16Array;
const v7 = new t4(v2);
v7.reverse(v7, createGlobalObject, v2);
v7.toSorted();
gc();
