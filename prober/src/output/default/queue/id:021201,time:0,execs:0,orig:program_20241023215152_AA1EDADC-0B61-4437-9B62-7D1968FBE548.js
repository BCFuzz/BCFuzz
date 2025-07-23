const v0 = [0.42638999553299683];
const v2 = new Int32Array(v0, Int32Array, v0);
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
const v18 = new t13(v2);
const t15 = v18.constructor;
new t15(v0);
gc();
