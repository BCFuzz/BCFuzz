const v0 = `
    async function* f1(a2, a3) {
        for (let i5 = 0, i6 = 0; i5 != i6;) {
            function f12(a13) {
                return f12;
            }
            for (let v14 = 0; v14 < 5; v14++) {
            }
            for (let v15 = 0; v15 < 5; v15++) {
            }
            for (let v16 = 0; v16 < 5; v16++) {
                for (let v17 = 0; v17 < 5; v17++) {
                }
                for (let v18 = 0; v18 < 5; v18++) {
                }
            }
            for (let v19 = 0; v19 < 5; v19++) {
            }
        }
        return a2;
    }
    f1.apply(f1, f1, f1);
`;
for (let i23 = 0, i24 = 10;
    (() => {
        const v25 = i23 < i24;
        for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
        }
        return v25;
    })();
    i24--) {
}
eval(v0).next();
gc();
