const v0 = `
    /\u{12345}/myvis;
    for (let v2 = 0; v2 < 5; v2++) {
        v2 >>> v2;
    }
`;
eval(v0);
gc();
