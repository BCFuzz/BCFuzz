const v0 = `
    let [v2,,...v3] = "bigint";
    /\u{12345}/myvis;
`;
eval(v0);
gc();
