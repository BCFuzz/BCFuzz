function f1() {
    return true;
}
const v4 = new BigUint64Array(257);
v4.sort(f1);
gc();
