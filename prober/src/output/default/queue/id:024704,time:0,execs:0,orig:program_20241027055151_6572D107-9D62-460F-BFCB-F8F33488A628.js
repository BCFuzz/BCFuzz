const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v3 = v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    return a5.fill(f4, a5, a7, a7, v3);
}
try { f4(v1); } catch (e) {}
gc();
