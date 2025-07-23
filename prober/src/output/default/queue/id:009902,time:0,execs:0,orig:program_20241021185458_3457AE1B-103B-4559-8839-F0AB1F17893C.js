const v0 = `
    const o2 = {
        get b() {
            return this;
        },
    };
    /\u{12345}/myvis;
`;
eval(v0);
gc();
