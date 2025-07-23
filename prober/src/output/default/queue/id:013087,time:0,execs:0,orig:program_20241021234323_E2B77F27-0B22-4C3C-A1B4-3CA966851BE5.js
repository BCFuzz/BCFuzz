function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = createGlobalObject().Float16Array;
    const v9 = new t2();
    const v10 = v9.subarray();
    try { v10.set(a5); } catch (e) {}
}
new F0();
gc();
