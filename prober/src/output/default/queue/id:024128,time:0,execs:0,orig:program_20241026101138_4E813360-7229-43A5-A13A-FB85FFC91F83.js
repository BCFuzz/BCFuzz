function f1() {
    return f1;
}
const v2 = new Int8Array();
const v4 = v2.buffer.transfer();
function f5(a6, a7, a8, a9) {
    Object.defineProperty(a6, 10, { configurable: true, set: f1 });
    return v4;
}
try { f5(v2); } catch (e) {}
gc();
