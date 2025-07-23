const v1 = `
    let v3;
    try { v3 = ("-13").padEnd(9223372036854775807, v1); } catch (e) {}
    if (!(9223372036854775807 <= v3)) {
    }
`;
eval(v1);
gc();
