const v0 = `
    var a = Symbol;
    const t2 = "replace";
    t2[12] *= 0.0;
`;
eval(v0);
gc();
