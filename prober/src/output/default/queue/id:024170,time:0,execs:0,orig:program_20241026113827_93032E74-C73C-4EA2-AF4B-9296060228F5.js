const v0 = `
    const v1 = /\u{12345}/myvis;
    const v3 = createGlobalObject();
    try { v3.load(v1); } catch (e) {}
`;
eval(v0);
gc();
