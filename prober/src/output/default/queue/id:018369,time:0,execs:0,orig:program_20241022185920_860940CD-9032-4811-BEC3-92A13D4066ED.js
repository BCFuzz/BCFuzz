const v0 = `
    const v1 = /(?<=)\u{12345}/vs;
    v1.test(v1);
`;
eval(v0);
gc();
