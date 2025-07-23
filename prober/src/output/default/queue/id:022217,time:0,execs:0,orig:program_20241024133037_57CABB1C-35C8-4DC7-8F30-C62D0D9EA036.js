const v2 = new Uint16Array(Uint8Array, Uint16Array, Uint8Array);
const v4 = v2.buffer.transfer();
function f5(a6, a7, a8, a9) {
    a9.subarray();
    return v4;
}
try { f5(Uint8Array, Uint8Array, v2, v2); } catch (e) {}
gc();
