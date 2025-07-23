function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = createGlobalObject();
    const t3 = v5.Float16Array;
    const v7 = new t3();
    v7.fill(v5);
}
new F0(F0, F0);
gc();
