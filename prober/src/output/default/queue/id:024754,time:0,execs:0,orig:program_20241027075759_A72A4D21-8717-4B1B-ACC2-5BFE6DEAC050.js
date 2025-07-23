const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
v1.subarray();
class C4 {
    constructor(a6, a7) {
        const o10 = {
            "maxByteLength": 1000,
        };
        const v12 = new SharedArrayBuffer(7, o10);
        const v14 = new Int16Array(v12);
        v14.set(a6);
    }
}
const v16 = new C4(0);
const t13 = v16.constructor;
new t13(v1);
gc();
