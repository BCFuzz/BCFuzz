const v1 = new Uint8ClampedArray();
const v3 = v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.subarray(a7, a6);
    return v3;
}
try { f4(v1); } catch (e) {}
gc();
