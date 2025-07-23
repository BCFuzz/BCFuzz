const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array(a3, a2, a2);
        (null != v6) || f1;
        return f1;
    }
    f1();
`;
const v11 = eval(v0);
v11.next(eval, v0, v11);
gc();
