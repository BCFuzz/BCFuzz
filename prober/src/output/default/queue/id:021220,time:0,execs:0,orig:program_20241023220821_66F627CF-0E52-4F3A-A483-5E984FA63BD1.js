const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array(a3);
        const v7 = null == v6;
        for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
            +v7;
        }
        return f1;
    }
    f1();
`;
eval(v0).next();
gc();
