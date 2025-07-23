const v0 = `
    const v2 = new BigUint64Array();
    const v3 = v2.fill;
    try { v3(); } catch (e) {}
`;
eval(v0);
gc();
