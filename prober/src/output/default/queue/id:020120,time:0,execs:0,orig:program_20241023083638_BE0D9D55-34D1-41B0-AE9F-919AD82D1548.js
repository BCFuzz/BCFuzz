const v1 = new Uint8ClampedArray();
const v3 = new Int32Array(v1, Int32Array, Int32Array);
class C5 {
    constructor(a7, a8) {
        const o11 = {
            "maxByteLength": 1000,
        };
        const v13 = new SharedArrayBuffer(7, o11);
        const v15 = new Int16Array(v13);
        v15.set(a7);
    }
}
const v17 = new C5(0);
const t13 = v17.constructor;
const v19 = new t13(v3);
const t15 = v19.constructor;
new t15(v1);
gc();
