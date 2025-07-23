const v0 = `
    const o3 = {
        "maxByteLength": 256,
    };
    const v5 = new SharedArrayBuffer(256, o3);
    new Uint8Array(v5);
`;
eval(v0).sort(eval);
gc();
