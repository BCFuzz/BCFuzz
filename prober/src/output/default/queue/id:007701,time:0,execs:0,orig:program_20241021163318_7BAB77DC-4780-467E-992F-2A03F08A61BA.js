const v2 = `
    const v3 = Float32Array === 129;
    !v3;
    v3 ? Float32Array : 129;
    /\x01/mdgiu;
`;
eval(v2);
gc();
