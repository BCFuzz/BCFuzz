for (let i2 = 0, i3 = 10; i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = new Uint8Array(Uint8Array);
function f22(a23, a24) {
    const o36 = {
        ...a24,
        "b": a24,
        get a() {
            const v26 = [247044494];
            const o30 = {
                "maxByteLength": 2147483647,
            };
            const v31 = new ArrayBuffer(o30, o30);
            const v32 = new Float32Array(v31, Float32Array, v31);
            function f33(a34) {
                Object.defineProperty(v32, 0, { writable: true, enumerable: true, value: v26 });
                return v32;
            }
            f33.call();
            return ArrayBuffer;
        },
    };
    let v37;
    try { v37 = o36.b(v20, o36); } catch (e) {}
    return v37;
}
f22(WeakSet, f22);
gc();
