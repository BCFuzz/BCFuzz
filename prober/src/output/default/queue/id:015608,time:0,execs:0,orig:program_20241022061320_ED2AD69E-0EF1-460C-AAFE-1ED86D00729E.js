class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new SharedArrayBuffer();
    const v6 = new DataView(v4);
    try { v6.setUint16(v6, F1, C0); } catch (e) {}
}
new F1();
gc();
