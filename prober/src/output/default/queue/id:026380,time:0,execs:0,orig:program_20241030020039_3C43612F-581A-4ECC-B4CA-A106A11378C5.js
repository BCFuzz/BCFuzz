function f1() {
    return Uint32Array;
}
const v2 = new Uint32Array();
v2.buffer.transfer();
function f5(a6, a7, a8, a9) {
    Object.defineProperty(a6, 10, { configurable: true, set: f1 });
    return a7;
}
try { f5(v2); } catch (e) {}
gc();
