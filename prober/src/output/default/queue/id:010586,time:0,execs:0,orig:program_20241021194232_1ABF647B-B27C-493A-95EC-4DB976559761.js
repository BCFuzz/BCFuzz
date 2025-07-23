const v1 = `
    /\u{12345}/myvis;
    var b = undefined;
`;
eval(v1);
gc();
