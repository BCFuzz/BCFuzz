const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array(a2, a3, a3);
        if (!(!(null == v6))) {
        }
        return v0;
    }
    f1(f1, f1);
`;
const v11 = eval(v0);
v11.next(eval, v11, v0);
gc();
