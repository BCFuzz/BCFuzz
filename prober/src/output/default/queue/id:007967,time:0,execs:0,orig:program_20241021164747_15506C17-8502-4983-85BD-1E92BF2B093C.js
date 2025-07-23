function f0() {
    return f0;
}
function f2(a3, a4, a5) {
    const o17 = {
        [undefined](a7, a8, a9) {
            const o12 = {
                "maxByteLength": 2147483647,
            };
            const v14 = new ArrayBuffer(1851, o12);
            const v16 = new Uint8ClampedArray(v14);
            v16.constructor = f0;
            return v16;
        },
    };
    return o17;
}
f2().undefined().subarray();
gc();
