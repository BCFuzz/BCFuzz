const o5 = {
    "maxByteLength": 158,
};
const v7 = new SharedArrayBuffer(158, o5);
const v9 = new Uint16Array(v7);
class C10 {
    constructor(a12, a13, a14, a15) {
        const v17 = new BigUint64Array(this, 2, a14);
        v17.set(a14);
    }
}
const v19 = new C10(2, 178, 8);
const v20 = v19.constructor;
try { new v20(C10, C10, v9); } catch (e) {}
gc();
