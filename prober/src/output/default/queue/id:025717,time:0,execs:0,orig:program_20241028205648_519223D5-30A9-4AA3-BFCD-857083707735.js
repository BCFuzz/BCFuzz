const v0 = `
    async function f1(a2, a3, a4) {
        return v0;
    }
    f1();
`;
eval(v0).then(eval);
gc();
