function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new ArrayBuffer(this, ArrayBuffer);
    const v5 = new DataView(v3);
    const v7 = v5.__proto__.getFloat32;
    try { v7(); } catch (e) {}
}
new F0();
gc();
