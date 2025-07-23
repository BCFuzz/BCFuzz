const v1 = `
    [/\u{12345}/myvis,..."getPrototypeOf"];
`;
eval(v1);
gc();
