function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = new SharedArrayBuffer();
function f5(a6) {
    const v7 = v2[5];
    v7();
    return v7;
}
v4.valueOf = f5;
const v10 = new DataView(v4);
try { v10.getFloat16(v4); } catch (e) {}
gc();
