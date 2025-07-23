const v0 = `
    const o2 = {
        get b() {
            return this;
        },
    };
    o2.b;
    /\u{12345}/myvis;
`;
eval(v0);
gc();
