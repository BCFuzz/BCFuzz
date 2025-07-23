const v1 = `
    async function* f2(a3, a4) {
        a4.length;
    }
    f2("v", "v");
`;
eval(v1).next();
gc();
