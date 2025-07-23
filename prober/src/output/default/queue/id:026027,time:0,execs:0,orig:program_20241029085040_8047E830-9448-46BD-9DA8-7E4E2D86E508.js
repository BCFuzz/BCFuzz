function f1() {
    return Float32Array;
}
const v2 = new Float32Array(Float32Array, Float32Array, Float32Array);
v2.buffer.transfer();
function f5(a6, a7, a8, a9) {
    Object.defineProperty(a6, 10, { configurable: true, set: f1 });
    return f1;
}
try { f5(v2); } catch (e) {}
gc();
