const v1 = `
    null?.defineProperty;
    /\u{12345}/myvis;
`;
eval(v1);
gc();
