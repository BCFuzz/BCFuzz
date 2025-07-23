function f0() {
    return f0;
}
const v1 = f0--;
const v3 = new Float64Array(f0, v1, v1);
v3.constructor = f0;
try { v3.subarray(v1); } catch (e) {}
gc();
