function f1(a2) {
    const v3 = new a2();
    const v4 = v3.buffer;
    const v6 = new Float64Array(v3, v4, v4);
    v6.subarray().set(v3);
    return v6;
}
Object.defineProperty(Uint8ClampedArray, "f", { enumerable: true, set: f1 });
Uint8ClampedArray.f = Uint8ClampedArray;
for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
