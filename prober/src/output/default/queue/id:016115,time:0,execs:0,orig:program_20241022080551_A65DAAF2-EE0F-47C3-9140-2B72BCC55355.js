const o13 = {
    [undefined](a3, a4, a5) {
        const o8 = {
            "maxByteLength": 2147483647,
        };
        const v9 = new ArrayBuffer(this, o8);
        const v11 = new Uint8ClampedArray(v9, a3, Map);
        v11.sort(a5);
    },
};
o13.undefined();
gc();
