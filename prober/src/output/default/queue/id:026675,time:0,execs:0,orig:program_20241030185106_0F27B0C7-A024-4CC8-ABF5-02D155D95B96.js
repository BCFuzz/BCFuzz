const v3 = ReferenceError().BYTES_PER_ELEMENT;
const v4 = new Int32Array();
function f5() {
    for (const v6 of v3) {
    }
    return f5;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v4, "constructor", { configurable: true, get: f5, set: f7 });
try { v4.subarray(v3); } catch (e) {}
gc();
