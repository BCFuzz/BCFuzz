for (let i2 = 10, i3 = 10; -13369 !== i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
const v14 = `
    const o17 = {
        "maxByteLength": 268435440,
    };
    const v19 = new SharedArrayBuffer(8, o17);
    new Uint8ClampedArray(v19);
`;
new v12(eval(v14).sort());
gc();
