const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array();
        if (!(null != v6)) {
            const t4 = Set(a2);
            t4[16] ||= "undefined";
        }
        return v0;
    }
    f1(f1, v0);
`;
eval(v0).next();
gc();
