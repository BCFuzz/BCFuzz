const v2 = new Int32Array(Int32Array, Int32Array);
v2.buffer.transfer();
function f5(a6, a7, a8, a9) {
    a8.copyWithin();
    return a7;
}
try { f5(Uint8Array, Uint8Array, v2); } catch (e) {}
gc();
