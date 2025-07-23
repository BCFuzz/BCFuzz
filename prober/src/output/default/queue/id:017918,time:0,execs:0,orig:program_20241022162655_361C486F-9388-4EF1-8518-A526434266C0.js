const v2 = new Int16Array();
function f3() {
    return -12;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(v2, "constructor", { configurable: true, get: f3, set: f4 });
try { v2.subarray(); } catch (e) {}
gc();
