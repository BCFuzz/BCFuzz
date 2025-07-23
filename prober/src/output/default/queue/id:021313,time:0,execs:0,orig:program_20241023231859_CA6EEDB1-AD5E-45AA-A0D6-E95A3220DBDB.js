const v0 = `
    const v3 = new SharedArrayBuffer(8);
    new Float64Array(v3);
`;
eval(v0).sort();
gc();
