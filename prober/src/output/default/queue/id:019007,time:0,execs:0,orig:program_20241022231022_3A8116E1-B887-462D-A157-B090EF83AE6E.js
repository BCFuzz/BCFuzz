const v0 = `
    const o5 = {
        valueOf(a2, a3) {
            a2 instanceof a3;
            return v0;
        },
    };
    try { o5.valueOf(65536n, o5); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v0);
gc();
