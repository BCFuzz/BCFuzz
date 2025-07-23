function f0() {
    return f0;
}
const v3 = new Float64Array(268435456);
try { v3.sort(f0); } catch (e) {}
gc();
