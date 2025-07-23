const o26 = {
    [undefined](a2, a3, a4) {
        const v6 = createGlobalObject();
        const o9 = {
            "maxByteLength": 426554815,
        };
        const v11 = new ArrayBuffer(1604, o9);
        const v13 = new Uint32Array(v11);
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        v6.Atomics.and(v13);
    },
};
o26.undefined(undefined, undefined, undefined, undefined);
gc();
