function f0() {
    const v2 = ("").bold();
    v2.toWellFormed();
    return v2.replace(v2, "");
}
const v7 = new BigInt64Array(129);
v7.filter(f0);
gc();
