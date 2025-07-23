const v0 = `
    let v1 = 0;
    do {
        v1++;
    } while (v1 < 10)
    /\u{12345}/myvis;
`;
eval(v0);
gc();
