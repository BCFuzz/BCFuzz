const o27 = {
    [undefined](a3, a4, a5) {
        const v7 = createGlobalObject();
        const o10 = {
            "maxByteLength": 426554815,
        };
        const v12 = new ArrayBuffer(1604, o10);
        const v14 = new Uint16Array(v12, this, 28);
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        v7.Atomics.compareExchange(v14);
    },
};
o27.undefined();
gc();
