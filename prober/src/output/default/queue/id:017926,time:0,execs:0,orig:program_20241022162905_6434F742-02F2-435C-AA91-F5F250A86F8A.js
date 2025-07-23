function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = [a4,a4,a4];
    const v9 = new ArrayBuffer(a4, this);
    const v11 = new DataView(v9);
    v11.getFloat32(v7, a3);
}
try { new F1(-1e-15); } catch (e) {}
gc();
