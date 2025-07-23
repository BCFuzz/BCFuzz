const v0 = `
    let v2 = 9;
    const v3 = (v2 /= 3129) + v0;
    v3 >>> v3;
    /\u{12345}/myvis;
`;
eval(v0);
gc();
