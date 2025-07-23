function f1(a2) {
    const v3 = new a2();
    v3.subarray(f1, a2, v3);
    const v6 = new Int32Array();
    return v6.subarray().set(v3);
}
Object.defineProperty(Float32Array, "f", { enumerable: true, set: f1 });
Float32Array.f = Float32Array;
gc();
