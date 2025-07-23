const v1 = `
    let v3;
    try { v3 = ("-13").padEnd(); } catch (e) {}
    if (1000000000.0 <= v3) {
    }
`;
eval(v1);
gc();
