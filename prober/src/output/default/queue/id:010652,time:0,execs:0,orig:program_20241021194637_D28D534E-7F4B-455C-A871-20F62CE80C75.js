const v1 = `
    let v3;
    try { v3 = ("-13").padEnd(); } catch (e) {}
    4 <= v3;
`;
eval(v1);
gc();
