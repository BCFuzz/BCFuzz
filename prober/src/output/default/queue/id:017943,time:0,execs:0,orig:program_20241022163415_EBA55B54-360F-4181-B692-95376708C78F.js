const v0 = `
    for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
    }
    try { undefined[v0](); } catch (e) {}
`;
eval(v0);
gc();
