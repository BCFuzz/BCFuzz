const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v2 = new Uint8Array(v1, Uint8Array);
v1.buffer.transfer();
function f5(a6, a7, a8, a9) {
    return a8.set(v1);
}
try { f5(Uint8Array, Uint8Array, v2); } catch (e) {}
gc();
