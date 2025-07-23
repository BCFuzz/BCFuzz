const v2 = BigUint64Array.from(-15);
function f3() {
    return f3();
}
Object.defineProperty(v2, "constructor", { get: f3 });
try { v2.subarray(); } catch (e) {}
gc();
