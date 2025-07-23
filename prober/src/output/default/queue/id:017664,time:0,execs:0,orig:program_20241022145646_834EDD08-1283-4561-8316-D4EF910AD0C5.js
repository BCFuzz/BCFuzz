const v2 = new Int16Array(Array);
function f3() {
    return Array;
}
function f4(a5) {
    return f4;
}
Object.defineProperty(v2, "constructor", { configurable: true, get: f3, set: f4 });
try { v2.subarray(v2, Int16Array); } catch (e) {}
gc();
