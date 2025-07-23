const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array();
        null == v6;
        if (!v6) {
        }
        return v0;
    }
    f1(v0, f1);
`;
const v10 = eval(v0);
v10.next(v10);
gc();
