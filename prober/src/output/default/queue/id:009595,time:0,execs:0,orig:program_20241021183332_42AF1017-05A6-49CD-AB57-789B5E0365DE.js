const v0 = `
    const v2 = Symbol.iterator;
    const o4 = {
        [v2]() {
        },
    };
    /\u{12345}/myvis;
`;
eval(v0);
gc();
