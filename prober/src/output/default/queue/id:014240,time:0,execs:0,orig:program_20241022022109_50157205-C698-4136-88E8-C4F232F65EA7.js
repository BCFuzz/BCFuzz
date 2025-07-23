const v2 = new BigInt64Array(9);
const v3 = `
    1 - 1;
    try { v2.toLocaleString(v3); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v3);
gc();
