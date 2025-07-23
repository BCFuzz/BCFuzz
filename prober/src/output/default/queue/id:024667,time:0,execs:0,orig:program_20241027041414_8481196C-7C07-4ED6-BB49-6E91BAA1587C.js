const o2 = {
    "maxByteLength": 11,
};
const v4 = new ArrayBuffer(10, o2);
const v6 = new Uint16Array(v4);
class C9 {
    constructor(a11, a12, a13, a14) {
        new Uint8Array(a14);
    }
}
const v16 = new C9();
const t11 = v16.constructor;
new t11(v6, BigInt64Array, BigInt64Array, v6);
gc();
