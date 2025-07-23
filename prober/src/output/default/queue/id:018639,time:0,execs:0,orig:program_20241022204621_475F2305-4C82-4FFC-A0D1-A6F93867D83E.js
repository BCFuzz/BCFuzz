const v0 = `
    const o3 = {
        "maxByteLength": 268435440,
    };
    const v5 = new SharedArrayBuffer(127, o3);
    new Uint8ClampedArray(v5, SharedArrayBuffer, v0);
`;
eval(v0).sort();
gc();
