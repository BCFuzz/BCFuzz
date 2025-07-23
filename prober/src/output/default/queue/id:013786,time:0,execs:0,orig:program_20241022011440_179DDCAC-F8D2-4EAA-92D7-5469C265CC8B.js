for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
    const v14 = createGlobalObject().Atomics;
    try { v14.isLockFree(3); } catch (e) {}
    try { v14.store(536870912n); } catch (e) {}
}
const v19 = new Uint8Array(3129);
for (const v20 in v19) {
}
gc();
