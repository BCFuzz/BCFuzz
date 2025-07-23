const v1 = new BigInt64Array();
const v2 = v1.BYTES_PER_ELEMENT;
const v4 = new Int16Array();
function f5() {
    for (const v6 of v2) {
    }
    return BigInt64Array;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v4, "constructor", { configurable: true, get: f5, set: f7 });
try { v4.subarray(); } catch (e) {}
gc();
