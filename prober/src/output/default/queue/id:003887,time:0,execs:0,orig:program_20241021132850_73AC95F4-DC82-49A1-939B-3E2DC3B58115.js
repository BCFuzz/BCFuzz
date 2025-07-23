const v1 = `
    Symbol[1452] ||= 5;
    try { Symbol(...2); } catch (e) {}
    const v7 = 9007199254740991 || 9007199254740991;
    -Math;
    9007199254740991 << v7;
`;
eval(v1);
gc();
