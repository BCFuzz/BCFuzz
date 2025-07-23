const o12 = {
    [undefined](a2, a3, a4) {
        const o7 = {
            "maxByteLength": 2147483647,
        };
        const v8 = new ArrayBuffer(this, o7);
        const v10 = new Uint8ClampedArray(v8);
        v10.sort(a3);
    },
};
o12.undefined();
gc();
