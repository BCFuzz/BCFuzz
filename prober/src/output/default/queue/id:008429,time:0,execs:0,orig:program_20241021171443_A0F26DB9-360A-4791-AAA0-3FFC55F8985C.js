for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
for (let v10 = 0; v10 < 10; v10++) {
    const v11 = `
        const o14 = {
            "maxByteLength": 268435440,
        };
        const v16 = new SharedArrayBuffer(8, o14);
        new Uint8ClampedArray(v16);
    `;
    const v20 = eval(v11);
    v20[1] = v20;
}
gc();
