function f0() {
    return f0;
}
function f1() {
    return f0;
}
f0 *= f1;
const v3 = new Uint8Array();
try { v3.sort(f0); } catch (e) {}
gc();
