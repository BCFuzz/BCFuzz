const o13 = {
    toString(a1, a2) {
        const o6 = {
            "maxByteLength": 12,
        };
        const v8 = new ArrayBuffer(5, o6);
        const v9 = new Int8Array(v8);
        v9.subarray(5, 5).reverse().sort();
        return v9;
    },
};
o13.toString();
gc();
