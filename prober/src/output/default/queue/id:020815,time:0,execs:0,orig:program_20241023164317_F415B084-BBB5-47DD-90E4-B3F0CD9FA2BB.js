const v2 = new Float32Array(1);
const v4 = new Uint32Array();
function f5(a6) {
    return v4;
}
v4.toString = f5;
try { v2.indexOf(Float32Array, v4); } catch (e) {}
gc();
