const v0 = `
    const t1 = createGlobalObject().Float16Array;
    new t1(8);
`;
eval(v0).sort(eval);
gc();
