const v2 = Int8Array.from(32127);
function f3() {
    return f3();
}
Object.defineProperty(v2, "constructor", { get: f3 });
try { v2.subarray(v2, 32127, Int8Array, 32127); } catch (e) {}
gc();
