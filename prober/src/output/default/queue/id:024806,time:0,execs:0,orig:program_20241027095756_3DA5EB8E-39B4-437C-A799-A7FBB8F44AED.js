function f1(a2) {
    const v3 = new a2();
    const v5 = new Int32Array(a2, a2, a2);
    v5.subarray(a2).set(v3);
    return f1;
}
Object.defineProperty(Float32Array, "f", { enumerable: true, set: f1 });
Float32Array.f = Float32Array;
gc();
