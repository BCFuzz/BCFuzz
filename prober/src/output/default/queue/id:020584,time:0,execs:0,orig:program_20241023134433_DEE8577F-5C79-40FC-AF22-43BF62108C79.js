const v0 = `
    async function* f1(a2, a3) {
        for (let i5 = 2147483649, i6 = 2147483649; i5 != i6;) {
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
        return v0;
    }
    f1.apply(v0);
`;
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
eval(v0).next(eval, eval, eval, eval);
gc();
