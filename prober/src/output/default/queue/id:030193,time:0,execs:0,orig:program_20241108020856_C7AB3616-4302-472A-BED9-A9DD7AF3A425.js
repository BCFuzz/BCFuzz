const v2 = new SharedArrayBuffer(56);
const v4 = new BigInt64Array(v2);
for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
    const v17 = createGlobalObject().Atomics;
    try { v17.wait(v4, v2, v2); } catch (e) {}
}
gc();
