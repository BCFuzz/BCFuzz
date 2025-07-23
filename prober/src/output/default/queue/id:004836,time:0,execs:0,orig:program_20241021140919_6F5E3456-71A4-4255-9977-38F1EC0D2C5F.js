function f1(a2, a3) {
    return f1;
}
f1[0] = 256;
try { Float32Array.apply(Float32Array, f1); } catch (e) {}
gc();
