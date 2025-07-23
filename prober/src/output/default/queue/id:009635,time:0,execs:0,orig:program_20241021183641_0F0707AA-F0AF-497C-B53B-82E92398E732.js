const v0 = `
    const v2 = ([v0,v0,v0,v0])[1];
    try { v2.apply(v0, v0); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v0);
gc();
