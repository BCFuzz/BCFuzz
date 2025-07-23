function f1(a2, a3, a4) {
    const o11 = {
        [undefined](a6, a7, a8) {
            const v10 = new Uint8ClampedArray(a8, a6, a7);
            v10.constructor = a7;
            return v10;
        },
    };
    return o11;
}
const v12 = f1(undefined, undefined, f1);
const v13 = v12.undefined();
v13.subarray(f1, v13, v12);
gc();
