const v0 = `
    let v2 = Infinity;
    v2++;
    1 / v2;
`;
eval(v0);
gc();
