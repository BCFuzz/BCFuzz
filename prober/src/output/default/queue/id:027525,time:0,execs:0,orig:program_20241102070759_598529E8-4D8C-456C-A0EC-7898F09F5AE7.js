const v0 = `
    async function* f1(a2, a3) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
            f1(i8, a2) !== null;
        }
        return a3;
    }
    f1();
`;
eval(v0).next();
gc();
