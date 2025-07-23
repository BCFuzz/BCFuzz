const v0 = `
    let v3 = -1e-15;
    const v4 = v3++;
    Math.round(v4);
    4294967297 >> v4;
`;
eval(v0);
gc();
