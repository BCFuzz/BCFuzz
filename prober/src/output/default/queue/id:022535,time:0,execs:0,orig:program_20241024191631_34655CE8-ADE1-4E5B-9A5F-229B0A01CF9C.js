const v1 = new Uint8Array();
const v2 = v1.buffer;
v2.transfer();
function f4(a5, a6, a7, a8) {
    a8.reverse(a8, a5, v2, a8);
    return v2;
}
try { f4(Uint8Array, Uint8Array, v1, v1); } catch (e) {}
gc();
