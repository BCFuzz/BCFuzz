const v3 = new Uint8Array(2652);
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    const v16 = createGlobalObject().Atomics;
    v16.store(v3, v16, 4294967296);
}
gc();
