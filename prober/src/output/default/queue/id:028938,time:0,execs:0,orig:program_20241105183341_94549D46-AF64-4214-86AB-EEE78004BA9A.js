const v0 = `
    async function* f1(a2, a3) {
        const o8 = {
            finally(a5, a6, a7) {
                return a5;
            },
        };
        return v0;
    }
    f1();
`;
eval(v0).next();
gc();
