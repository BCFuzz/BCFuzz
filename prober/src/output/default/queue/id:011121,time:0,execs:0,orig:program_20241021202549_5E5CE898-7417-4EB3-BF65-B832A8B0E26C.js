const v0 = `
    let v1 = -37678;
    ({"g":v1,} = this);
    /\u{12345}/myvis;
`;
eval(v0);
gc();
