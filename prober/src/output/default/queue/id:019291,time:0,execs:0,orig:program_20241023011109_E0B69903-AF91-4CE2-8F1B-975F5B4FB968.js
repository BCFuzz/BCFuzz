const v1 = new Int32Array(Int32Array, Int32Array);
class C3 {
    constructor(a5, a6) {
        const o9 = {
            "maxByteLength": 1000,
        };
        const v11 = new SharedArrayBuffer(7, o9);
        const v13 = new Int16Array(v11);
        v13.set(a5);
    }
}
const v15 = new C3(0);
const t12 = v15.constructor;
new t12(v1);
gc();
