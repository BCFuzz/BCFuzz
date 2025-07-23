const v0 = `
    /[^a\u{12345}\u{23456}fwxyz{1,}?]/dyu;
`;
eval(v0);
gc();
