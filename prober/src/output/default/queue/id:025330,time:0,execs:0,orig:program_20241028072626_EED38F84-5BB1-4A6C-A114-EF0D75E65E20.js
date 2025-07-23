const v0 = `
    const v2 = /\u0060/v.source;
    try { eval(v2); } catch (e) {}
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
`;
eval(v0);
gc();
