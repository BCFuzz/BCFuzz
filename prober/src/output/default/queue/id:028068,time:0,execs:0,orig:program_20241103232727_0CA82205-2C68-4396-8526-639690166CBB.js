function f1(a2) {
    const v3 = new a2();
    const v6 = new Float64Array(v3.buffer);
    v6.subarray().set(v3);
    return Float64Array;
}
Object.defineProperty(Uint8ClampedArray, "f", { enumerable: true, set: f1 });
Uint8ClampedArray.f = Uint8ClampedArray;
for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
}
gc();
