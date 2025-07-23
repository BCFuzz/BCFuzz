for (let i2 = 0, i3 = 10; i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = new Uint8Array(Uint8Array, Uint8Array);
function f22(a23, a24) {
    const o33 = {
        ...a24,
        "b": a24,
        get a() {
            const v26 = [58233,-1717496220,-1073741824,129,9,32227];
            const o30 = {
                "maxByteLength": 2147483647,
            };
            const v31 = new ArrayBuffer(o30, o30);
            const v32 = new Int8Array(v31, Int8Array, v31);
            Object.defineProperty(v32, 0, { writable: true, enumerable: true, value: v26 });
            return a24;
        },
    };
    try { o33.b(v20, o33); } catch (e) {}
    return v20;
}
f22(WeakSet, f22);
gc();
