function f0() {
    return f0;
}
function f1(a2, a3) {
    return -256;
}
f0.valueOf = f1;
const v7 = new Int8Array(191);
v7.sort(f0);
gc();
