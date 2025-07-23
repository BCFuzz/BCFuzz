const v0 = `
    const v2 = /\u{12345}/myvis?.compile;
    try { v2(); } catch (e) {}
`;
eval(v0);
gc();
