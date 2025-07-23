const v1 = new Int32Array();
function f2() {
    return Infinity;
}
v1.toString = f2;
const v5 = new Uint8Array();
try { v5.with(v1); } catch (e) {}
gc();
