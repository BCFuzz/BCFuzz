const v0 = `
    ((1 / Infinity) ** Infinity) / Infinity;
    /\u{12345}/myvis;
`;
eval(v0);
gc();
