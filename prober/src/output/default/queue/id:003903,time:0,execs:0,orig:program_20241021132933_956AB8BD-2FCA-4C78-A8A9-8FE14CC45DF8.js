function f1() {
    return f1;
}
const v3 = new Uint8ClampedArray();
try { v3.subarray(f1, 255n); } catch (e) {}
gc();
