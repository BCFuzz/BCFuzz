const v2 = new Uint32Array(129);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
    const v14 = createGlobalObject();
    for (let v15 = 0; v15 < 25; v15++) {
    }
    v14.Atomics.store(v2, i5, i6);
}
gc();
