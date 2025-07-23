class C0 {
}
function f1(a2) {
    const o7 = {
        "maxByteLength": 2186,
    };
    const v8 = new SharedArrayBuffer(a2, o7);
    const v10 = new Uint32Array(v8);
    Object.defineProperty(v10, 10, { enumerable: true, value: 4 instanceof ArrayBuffer });
    return 2186;
}
C0[Symbol.toPrimitive] = f1;
try { ("c").search(C0); } catch (e) {}
gc();
