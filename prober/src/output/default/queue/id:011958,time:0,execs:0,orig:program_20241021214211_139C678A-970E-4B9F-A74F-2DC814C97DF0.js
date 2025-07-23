const v0 = `
    const v2 = new WeakSet();
    true === v2;
`;
eval(v0);
gc();
