const v3 = Uint8ClampedArray.from(-15);
function f4() {
    return BigInt64Array;
}
Object.defineProperty(v3, "constructor", { get: f4 });
try { v3.subarray(); } catch (e) {}
gc();
