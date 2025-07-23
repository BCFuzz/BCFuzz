for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
}
const v12 = `
    const o15 = {
        "maxByteLength": 268435440,
    };
    const v17 = new SharedArrayBuffer(8, o15);
    new Uint8ClampedArray(v17);
`;
new Uint32Array(eval(v12).sort());
gc();
