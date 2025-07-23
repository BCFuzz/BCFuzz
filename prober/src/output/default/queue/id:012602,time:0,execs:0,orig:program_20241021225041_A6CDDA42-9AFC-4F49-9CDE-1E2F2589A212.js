const v0 = `
    const o3 = {
        "maxByteLength": 268435440,
    };
    const v5 = new SharedArrayBuffer(8, o3);
    new Uint8ClampedArray(v5);
`;
eval(v0).sort().fill();
gc();
