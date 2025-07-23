const v2 = Float32Array.from(-15);
function f3() {
    f3();
    return v2;
}
Object.defineProperty(v2, "constructor", { get: f3 });
try { v2.subarray(); } catch (e) {}
gc();
