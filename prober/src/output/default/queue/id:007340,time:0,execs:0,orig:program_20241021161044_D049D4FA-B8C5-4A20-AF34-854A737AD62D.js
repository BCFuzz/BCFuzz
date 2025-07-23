function f0() {
    return f0;
}
f0();
const v2 = f0();
const v3 = f0();
function f5(a6, a7, a8, a9) {
    const v12 = new BigInt64Array(512);
    for (const v13 in v12) {
        Array(3190);
    }
}
f5(v2, v2, f0, f5);
f5(v3, v3, v2);
gc();
