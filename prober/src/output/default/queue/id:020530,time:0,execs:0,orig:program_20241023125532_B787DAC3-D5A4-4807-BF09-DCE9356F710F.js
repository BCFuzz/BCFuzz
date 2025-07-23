const v3 = new Int8Array(255);
for (const v4 in v3) {
    const v6 = new WeakMap();
    const v7 = v6.set(Float64Array);
    for (let v8 = 0; v8 < 10; v8++) {
    }
    v7.set(v6, v6);
    v7.get(v7).get();
}
gc();
