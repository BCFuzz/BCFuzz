function f1(a2) {
    const v3 = new a2();
    const v5 = new Float64Array();
    v5.subarray(a2, a2).set(v3);
    return Float64Array;
}
Object.defineProperty(Float32Array, "f", { enumerable: true, set: f1 });
Float32Array.f = Float32Array;
gc();
