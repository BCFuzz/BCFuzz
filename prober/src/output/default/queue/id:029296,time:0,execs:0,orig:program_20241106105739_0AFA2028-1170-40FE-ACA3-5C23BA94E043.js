const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; !(i6 != i7);) {
        }
        return a3;
    }
    f1(f1, v0);
`;
eval(v0).next();
gc();
