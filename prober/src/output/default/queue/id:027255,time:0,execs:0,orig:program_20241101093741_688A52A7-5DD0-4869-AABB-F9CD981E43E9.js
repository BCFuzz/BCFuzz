const v0 = `
    const o7 = {
        ["eC"](a4, a5) {
            this in 0;
        },
    };
    try { o7.eC(v0, o7, v0, v0, v0); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v0);
gc();
