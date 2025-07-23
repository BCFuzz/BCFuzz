const v2 = Float64Array.from(BigInt64Array);
const v3 = new BigInt64Array();
const v4 = v3.BYTES_PER_ELEMENT;
function f5() {
    for (const v6 of v4) {
    }
    return f5;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v2, "constructor", { configurable: true, get: f5, set: f7 });
try { v2.subarray(v3, f5, v2, v4, v3); } catch (e) {}
gc();
