const v2 = new Int8Array(255);
for (const v3 in v2) {
    const v5 = new WeakMap();
    const v6 = v5.set(WeakMap, v5);
    const v7 = v6.set(v5, v5);
    v6.get(v6).get(v7);
}
gc();
