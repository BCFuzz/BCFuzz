function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = createGlobalObject();
    const v6 = v5.Float16Array;
    const v7 = new v6();
    const v8 = v7.subarray();
    v8.toReversed(v8, F0, v5, v7, v6);
}
new F0(F0, F0);
gc();
