const v0 = `
    const t1 = "-13";
    t1[1] = "-13";
    /\u{12345}/myvis;
`;
eval(v0);
gc();
