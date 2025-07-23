const v0 = `
    const v2 = ("c")[0];
    v2 > "c" ? v2 : v2;
`;
eval(v0);
gc();
