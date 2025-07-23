const v0 = `
    async function* f1(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            (v4 === v4) && v4;
        }
        return f1;
    }
    f1();
`;
const v9 = eval(v0);
v9.next(eval, v9);
gc();
