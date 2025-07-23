const v1 = `
    let v3;
    try { v3 = ("boolean").padEnd(); } catch (e) {}
    !("P" <= v3);
`;
eval(v1);
gc();
