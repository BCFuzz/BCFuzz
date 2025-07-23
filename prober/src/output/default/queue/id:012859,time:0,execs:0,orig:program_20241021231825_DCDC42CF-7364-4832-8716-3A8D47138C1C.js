for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
    const v14 = createGlobalObject().Atomics;
    try { v14.store(536870912n, "-1620964611", i4); } catch (e) {}
}
const v18 = new Uint8Array(3129);
for (const v19 in v18) {
}
gc();
