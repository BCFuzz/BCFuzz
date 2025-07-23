const v1 = `
    let v3;
    try { v3 = ("boolean").padEnd(); } catch (e) {}
    if (!("P" >= v3)) {
    }
    for (let i = 0; i < 5; i++) {
    }
`;
eval(v1);
gc();
