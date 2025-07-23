const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array();
        null == v6;
        if (v6) {
            for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
            }
        }
        return v6;
    }
    f1();
`;
eval(v0).next();
gc();
