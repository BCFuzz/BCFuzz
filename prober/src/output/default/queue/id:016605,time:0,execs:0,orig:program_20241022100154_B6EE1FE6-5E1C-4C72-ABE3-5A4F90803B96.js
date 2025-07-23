const v2 = new Int8Array(255);
for (const v3 in v2) {
    const v5 = new WeakMap();
    v5.get(WeakMap);
    const v7 = v5.set(WeakMap, v5);
    v7.get(v7);
}
gc();
