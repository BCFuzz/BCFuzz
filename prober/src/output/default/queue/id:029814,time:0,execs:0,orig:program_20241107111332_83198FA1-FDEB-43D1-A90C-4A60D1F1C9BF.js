const v2 = new SharedArrayBuffer(56);
const v4 = new BigInt64Array(v2);
function f5() {
    return -2n;
}
v4.toString = f5;
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    createGlobalObject().Atomics.waitAsync(v4, i9, v4);
}
gc();
