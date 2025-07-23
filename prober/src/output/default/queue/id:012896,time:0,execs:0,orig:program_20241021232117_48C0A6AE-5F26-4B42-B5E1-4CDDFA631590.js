const v2 = new Int16Array();
function f3() {
    return Int8Array;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(v2, "constructor", { configurable: true, get: f3, set: f4 });
const v6 = v2.subarray();
try { v6.set(); } catch (e) {}
gc();
