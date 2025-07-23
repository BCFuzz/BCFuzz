const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array();
        if (null !== v6) {
        }
        return Uint16Array;
    }
    f1();
`;
eval(v0).next();
gc();
