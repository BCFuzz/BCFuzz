for (let i2 = 0, i3 = 10; i2 <= i3; i3--) {
}
const o46 = {
    [undefined](a12, a13, a14) {
        const v16 = createGlobalObject();
        const o19 = {
            "maxByteLength": 426554815,
        };
        const v21 = new ArrayBuffer(1604, o19);
        const v23 = new Uint8Array(v21);
        for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
        }
        const v34 = v16.Atomics;
        for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
        }
        v34.and(v23);
    },
};
o46.undefined();
gc();
