const v1 = new Int32Array(Int32Array);
const v3 = v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.reverse(a7, a7, a7, v3);
    return v3;
}
try { f4(v1); } catch (e) {}
gc();
