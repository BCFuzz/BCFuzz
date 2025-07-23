function f1() {
    return 4;
}
const v4 = new Int8Array(9);
v4.sort(f1);
gc();
