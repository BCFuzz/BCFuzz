function f0() {
    return f0;
}
const v2 = new BigUint64Array();
v2.buffer.transfer();
function f5(a6, a7, a8, a9) {
    Object.defineProperty(a6, 10, { configurable: true, set: f0 });
    return a9;
}
try { f5(v2); } catch (e) {}
gc();
