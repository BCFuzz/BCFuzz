const v2 = `
    const v3 = new Uint8ClampedArray();
    delete v3["p"];
`;
eval(v2);
gc();
