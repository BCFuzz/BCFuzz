const v0 = `
    async function* f1(a2, a3) {
        for (let [i12, i13] = (() => {
                const v8 = new Uint16Array(4096);
                for (const v9 in v8) {
                    v8[v9][v9];
                }
                return [0, 10];
            })();
            i12 < i13;
            i13--) {
        }
        return v0;
    }
    f1(v0, f1);
`;
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
    for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
    }
}
eval(v0).next();
gc();
