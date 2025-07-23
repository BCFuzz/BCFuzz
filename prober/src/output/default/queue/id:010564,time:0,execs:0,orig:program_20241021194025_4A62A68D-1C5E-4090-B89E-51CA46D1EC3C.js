const v0 = `
    const v2 = new Map();
    let v3;
    try { v3 = v2(v2, Map); } catch (e) {}
    for (let i6 = 0, i7 = 10; i6 < i7, v3;) {
    }
`;
eval(v0);
gc();
