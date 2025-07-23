const v0 = `
    /\u{12345}/myvis;
`;
SyntaxError(v0).toString();
gc();
