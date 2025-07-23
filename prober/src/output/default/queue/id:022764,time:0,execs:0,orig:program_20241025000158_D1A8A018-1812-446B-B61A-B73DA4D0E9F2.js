const v1 = new Float32Array();
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
for (let [i30, i31] = (() => {
        for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
        }
        return [-3, 10];
    })();
    i30 < i31;
    i31--) {
}
gc();
