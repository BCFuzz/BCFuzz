const v0 = `
    const v1 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
    for (const v2 in v1) {
        v1[v2] = v2;
    }
`;
eval(v0);
gc();
