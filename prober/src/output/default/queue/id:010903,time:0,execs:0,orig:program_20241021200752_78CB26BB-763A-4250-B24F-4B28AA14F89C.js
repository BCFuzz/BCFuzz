function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float32Array();
    const v9 = new Uint8ClampedArray();
    const v12 = new FinalizationRegistry(Int8Array);
    v12.register(FinalizationRegistry, v9, v7);
}
new F1(F1, Float32Array, F1, F1);
gc();
