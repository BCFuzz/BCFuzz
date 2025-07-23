const v1 = new Uint8Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    return a7.copyWithin();
}
try { f4(Uint8Array, Uint8Array, v1); } catch (e) {}
gc();
