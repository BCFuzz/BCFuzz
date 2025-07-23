function f1() {
    return -9223372036854775808;
}
const v4 = new Int8Array(191);
v4.sort(f1);
gc();
