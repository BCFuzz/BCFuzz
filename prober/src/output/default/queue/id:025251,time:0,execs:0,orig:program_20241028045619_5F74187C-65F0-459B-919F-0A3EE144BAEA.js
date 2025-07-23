function f1(a2, a3, a4) {
    const o16 = {
        [undefined](a6, a7, a8) {
            const o11 = {
                "maxByteLength": 2147483647,
            };
            const v13 = new ArrayBuffer(1851, o11);
            const v15 = new BigInt64Array(v13);
            v15.constructor = a7;
            return v15;
        },
    };
    return o16;
}
f1().undefined().subarray();
gc();
