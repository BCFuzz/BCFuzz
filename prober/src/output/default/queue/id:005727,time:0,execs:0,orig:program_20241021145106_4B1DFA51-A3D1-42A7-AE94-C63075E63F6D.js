function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new BigUint64Array();
    try { Int32Array.from(v3); } catch (e) {}
}
new F0();
gc();
