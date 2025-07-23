const v3 = new Int16Array(Float32Array);
function f4() {
    return BigInt64Array;
}
function f5(a6) {
    return Int16Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, get: f4, set: f5 });
try { v3.subarray(); } catch (e) {}
gc();
