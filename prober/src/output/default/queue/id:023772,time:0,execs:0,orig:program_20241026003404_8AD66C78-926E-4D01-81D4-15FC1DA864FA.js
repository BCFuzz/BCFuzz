function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v7 = new Uint8ClampedArray(v4, v4);
v7.buffer.transfer();
function f10(a11, a12, a13, a14) {
    a14.fill();
    return "-4096";
}
try { f10(v4, "-4096", "-4096", v7); } catch (e) {}
gc();
