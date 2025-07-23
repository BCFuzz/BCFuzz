function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new SharedArrayBuffer();
    const v5 = new DataView(v3);
    try { v5.setUint16(v5, F0); } catch (e) {}
}
function f7(a8) {
    a8.toString();
    return a8;
}
F0.toString = f7;
new F0();
gc();
