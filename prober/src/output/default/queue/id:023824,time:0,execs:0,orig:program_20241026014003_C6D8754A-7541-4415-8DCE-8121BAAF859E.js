for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
    const v12 = new Int32Array(10);
    const v13 = v12.subarray();
    createGlobalObject().Atomics.sub(v13);
}
gc();
