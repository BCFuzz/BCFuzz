for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
    try { createGlobalObject(); } catch (e) {}
    const v15 = createGlobalObject().Atomics;
    try { v15.store(536870912n, "-1620964611", i4); } catch (e) {}
}
const v19 = new Uint8Array(3129);
for (const v20 in v19) {
}
gc();
