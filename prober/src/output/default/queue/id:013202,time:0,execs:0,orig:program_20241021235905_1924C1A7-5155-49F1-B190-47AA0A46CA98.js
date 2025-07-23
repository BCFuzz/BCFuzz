const o13 = {
    [undefined](a2, a3, a4) {
        const o7 = {
            "maxByteLength": 2147483647,
        };
        const v8 = new ArrayBuffer(this, o7);
        const v10 = new Uint8ClampedArray(v8);
        const v11 = v10.sort();
        v11.set(v11);
    },
};
o13.undefined(undefined, o13, o13, o13, undefined);
gc();
