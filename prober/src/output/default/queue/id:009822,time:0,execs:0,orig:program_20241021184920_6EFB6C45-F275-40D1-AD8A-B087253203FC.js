function f1(a2, a3, a4) {
    const o15 = {
        [undefined](a6, a7, a8) {
            const o11 = {
                "maxByteLength": 2147483647,
            };
            const v12 = new ArrayBuffer(this, o11);
            const v14 = new Uint8ClampedArray(v12);
            return v14;
        },
    };
    return o15;
}
const v16 = f1(undefined, undefined, undefined);
for (const v18 in v16.undefined(v16, undefined, undefined, f1, undefined)) {
}
gc();
