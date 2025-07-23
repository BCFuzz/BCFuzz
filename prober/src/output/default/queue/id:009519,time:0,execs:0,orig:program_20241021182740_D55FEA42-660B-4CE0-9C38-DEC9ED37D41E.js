function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new ArrayBuffer();
    const v5 = new DataView(v3);
    try { v5.setFloat32(); } catch (e) {}
}
new F0();
gc();
