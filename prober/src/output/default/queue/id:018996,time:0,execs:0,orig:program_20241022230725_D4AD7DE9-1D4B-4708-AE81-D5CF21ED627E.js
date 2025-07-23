const v1 = new BigInt64Array();
for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
    const v14 = createGlobalObject().Atomics;
    try { v14.store(v1); } catch (e) {}
}
gc();
