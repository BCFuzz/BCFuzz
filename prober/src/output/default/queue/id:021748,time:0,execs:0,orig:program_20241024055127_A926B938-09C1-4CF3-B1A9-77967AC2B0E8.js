const v0 = `
    async function* f1(a2, a3) {
        yield;
        return f1;
    }
    f1(f1, f1);
`;
eval(v0).next();
gc();
