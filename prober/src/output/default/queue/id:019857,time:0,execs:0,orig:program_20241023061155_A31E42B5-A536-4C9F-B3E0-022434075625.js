function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new SharedArrayBuffer();
    const v5 = new DataView(v3);
    const v6 = v5.getInt16;
    try { v6(); } catch (e) {}
}
new F0();
gc();
