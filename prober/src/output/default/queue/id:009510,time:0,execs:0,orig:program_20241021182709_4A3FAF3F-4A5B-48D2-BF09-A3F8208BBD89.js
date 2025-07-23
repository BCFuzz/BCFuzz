const v0 = `
    let v1 = 0;
    while (~5, 5 >> 5, v1 < 5) {
        v1++;
    }
    const o10 = {
        toString(a8, a9) {
        },
    };
    o10.toString(v0, v1);
    /\u{12345}/myvis;
`;
eval(v0);
gc();
