class C0 {
}
const v1 = new C0();
const v3 = new Uint8Array();
v3.buffer.transfer();
function f6(a7, a8, a9, a10) {
    a9.set(v1);
    return a10;
}
try { f6(Uint8Array, Uint8Array, v3); } catch (e) {}
gc();
