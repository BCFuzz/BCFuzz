const v0 = `
    /\u{12345}/myvis;
    const v2 = (a3, a4) => {
        return a4;
    };
    v2.apply();
`;
eval(v0);
gc();
