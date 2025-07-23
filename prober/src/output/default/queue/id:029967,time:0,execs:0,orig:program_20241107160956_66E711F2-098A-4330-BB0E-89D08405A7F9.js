function f1() {
    return 1000000.0;
}
SharedArrayBuffer.valueOf = f1;
const v3 = new SharedArrayBuffer(SharedArrayBuffer);
const v5 = new BigInt64Array(v3);
for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
    const v18 = createGlobalObject().Atomics;
    try { v18.waitAsync(v5); } catch (e) {}
}
gc();
