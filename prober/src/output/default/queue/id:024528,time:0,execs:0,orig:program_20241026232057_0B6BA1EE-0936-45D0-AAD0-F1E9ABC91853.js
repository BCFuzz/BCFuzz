const v0 = `
    async function* f1(a2, a3) {
        const o9 = {
            toString(a6, a7) {
                super["10817"];
                return f1;
            },
        };
        o9.toString(a3, f1, v0, f1, o9);
        for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
        }
        for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
        }
        return f1;
    }
    f1(v0, v0);
`;
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
    }
}
eval(v0).next();
gc();
