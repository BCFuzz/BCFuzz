const v0 = `
    async function* f1(a2, a3) {
        return [,,...[-0.4398870551325462]];
    }
    f1();
`;
eval(v0).next();
gc();
