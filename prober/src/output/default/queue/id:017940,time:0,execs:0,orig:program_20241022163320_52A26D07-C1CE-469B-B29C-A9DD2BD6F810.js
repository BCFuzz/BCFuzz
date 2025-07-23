function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = createGlobalObject();
    const t3 = v3.Float16Array;
    const v6 = new t3(v3, -1000000.0, createGlobalObject);
    try { v6.set(v6, -1000000.0); } catch (e) {}
    for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    }
}
new F0();
gc();
