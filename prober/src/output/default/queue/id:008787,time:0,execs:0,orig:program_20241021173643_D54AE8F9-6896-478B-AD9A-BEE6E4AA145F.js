const v1 = new Float32Array();
const v2 = v1.reverse();
const v3 = v2.copyWithin(v2, v2, v2);
const v5 = `
    const v7 = -v3;
    (11 | 28279) * v7;
`;
eval(v5);
gc();
