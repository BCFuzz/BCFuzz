const v1 = `
    try { v1(-15n); } catch (e) {}
`;
eval(v1);
gc();
