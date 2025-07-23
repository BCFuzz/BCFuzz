function f1(a2) {
    const v3 = new a2();
    const v4 = v3.buffer;
    const v6 = new Float64Array(v4);
    v6.subarray(v4, a2).set(v3);
    return Int32Array;
}
Object.defineProperty(Int32Array, "f", { enumerable: true, set: f1 });
Int32Array.f = Int32Array;
for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
}
gc();
