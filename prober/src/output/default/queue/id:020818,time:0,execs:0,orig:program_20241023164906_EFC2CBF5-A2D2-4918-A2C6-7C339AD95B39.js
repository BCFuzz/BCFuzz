const v0 = `
    async function* f1(a2, a3) {
        for (let [i15, i16] = (() => {
                for (let i7 = -3, i8 = 10; i7 < i8; i8--) {
                }
                return [0, 0];
            })();
            i15 != i16;
            ) {
            for (let v22 = 0; v22 < 5; v22++) {
            }
            for (let v23 = 0; v23 < 5; v23++) {
            }
            for (let v24 = 0; v24 < 5; v24++) {
                for (let v25 = 0; v25 < 5; v25++) {
                }
                for (let v26 = 0; v26 < 5; v26++) {
                }
            }
            for (let v27 = 0; v27 < 5; v27++) {
                const v28 = [f1];
                try { v28.join(a2); } catch (e) {}
            }
        }
        return v0;
    }
    f1.apply();
`;
for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
}
eval(v0).next();
gc();
