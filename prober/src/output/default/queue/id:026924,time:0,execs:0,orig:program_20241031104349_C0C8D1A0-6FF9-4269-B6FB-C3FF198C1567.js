const v1 = new Uint32Array();
function f3(a4) {
    const v5 = new a4();
    v5.buffer;
    v1.subarray(a4, a4).set(v5);
    return a4;
}
Object.defineProperty(Uint8ClampedArray, "f", { enumerable: true, set: f3 });
Uint8ClampedArray.f = Uint8ClampedArray;
for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
}
gc();
