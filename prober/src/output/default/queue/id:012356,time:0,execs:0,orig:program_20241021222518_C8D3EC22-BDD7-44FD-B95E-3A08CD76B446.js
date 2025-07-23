function f0(a1, a2, a3) {
    const o15 = {
        [a2](a5, a6, a7) {
            const o10 = {
                "maxByteLength": 2147483647,
            };
            const v12 = new ArrayBuffer(1851, o10);
            const v14 = new Uint8ClampedArray(v12);
            v14.g = v14;
            return v14;
        },
    };
    return o15;
}
f0().undefined().subarray();
gc();
