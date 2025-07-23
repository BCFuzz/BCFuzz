function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Uint32Array(this);
    const t3 = createGlobalObject().Float16Array;
    const v7 = new t3();
    v7.subarray(F0, F0).set(v3);
}
new F0();
gc();
