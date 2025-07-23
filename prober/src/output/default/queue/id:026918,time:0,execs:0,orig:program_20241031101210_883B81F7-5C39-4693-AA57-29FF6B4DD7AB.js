const v1 = `
    async function* f2(a3, a4) {
        const v6 = new Uint16Array(a4, a4, a3);
        (Int32Array > v6) || f2;
        return Int32Array;
    }
    f2();
`;
eval(v1).next(v1, eval, Int32Array, v1, v1);
gc();
