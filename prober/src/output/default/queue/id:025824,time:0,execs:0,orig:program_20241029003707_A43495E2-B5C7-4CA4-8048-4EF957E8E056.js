const v2 = ReferenceError(ReferenceError).BYTES_PER_ELEMENT;
const v4 = new Uint16Array();
function f5() {
    for (const v6 of v2) {
    }
    return f5;
}
function f7(a8) {
    return f7;
}
Object.defineProperty(v4, "constructor", { configurable: true, get: f5, set: f7 });
try { v4.subarray(v2, v2); } catch (e) {}
gc();
