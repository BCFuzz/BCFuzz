const v0 = `
    let v1 = 2;
    (1 / Infinity) ** Infinity;
    ++v1;
    1 ** (Infinity - Infinity);
`;
eval(v0);
gc();
