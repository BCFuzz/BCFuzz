for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
}
function f11(a12) {
    const o17 = {
        "maxByteLength": 2186,
    };
    const v18 = new SharedArrayBuffer(a12, o17);
    const v20 = new BigInt64Array(v18);
    Object.defineProperty(v20, 10, { enumerable: true, value: -47236 instanceof ArrayBuffer });
    return BigInt64Array;
}
C10[Symbol.toPrimitive] = f11;
try { ("c").search(C10); } catch (e) {}
gc();
