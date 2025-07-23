const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v2 = v1.buffer;
v2.transfer();
function f4(a5, a6, a7, a8) {
    return a7.toHex(a5, a7, v2);
}
try { f4(Uint8Array, Uint8Array, v1); } catch (e) {}
gc();
