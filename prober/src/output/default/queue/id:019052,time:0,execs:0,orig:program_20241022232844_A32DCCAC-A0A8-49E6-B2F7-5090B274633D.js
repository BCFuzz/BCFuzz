const v0 = `
    async function* f1(a2, a3) {
        yield;
        return f1;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
