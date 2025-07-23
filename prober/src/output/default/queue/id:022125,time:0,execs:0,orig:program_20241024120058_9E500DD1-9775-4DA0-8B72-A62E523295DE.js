const v0 = `
    async function* f1(a2, a3) {
        if (null === TypeError()) {
        }
        return f1;
    }
    f1(v0, f1);
`;
eval(v0).next();
gc();
