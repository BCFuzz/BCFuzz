for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v11 = new Uint8Array(i3);
    v11.subarray();
    createGlobalObject().Atomics.sub(v11);
}
gc();
