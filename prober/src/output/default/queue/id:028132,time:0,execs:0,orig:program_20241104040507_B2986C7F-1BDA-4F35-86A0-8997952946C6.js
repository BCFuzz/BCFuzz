const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array();
        return (null != v6) && v0;
    }
    f1();
`;
eval(v0).next(eval, v0);
gc();
