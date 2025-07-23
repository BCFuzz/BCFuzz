const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new BigInt64Array(v1);
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    const v16 = createGlobalObject().Atomics;
    try { v16.waitAsync(v3); } catch (e) {}
}
gc();
