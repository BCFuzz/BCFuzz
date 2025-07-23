function f0() {
    f0 >>>= f0;
    return f0;
}
const v1 = f0(f0, f0);
const v3 = new Uint32Array(f0, v1, f0);
v3.constructor = v1;
try { v3.subarray(f0, v1); } catch (e) {}
gc();
