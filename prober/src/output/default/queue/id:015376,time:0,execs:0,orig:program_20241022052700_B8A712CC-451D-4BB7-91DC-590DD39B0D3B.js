function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
    const v7 = new Uint8Array(v2, a5);
    v7.toString = f3;
    parseInt(v7);
    return a5;
}
v2.toString = f3;
try { v2.toLocaleString(v2, v2, F0, F0); } catch (e) {}
gc();
