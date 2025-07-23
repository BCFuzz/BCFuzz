const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
                try {
                    Date["5"]();
                } catch(e27) {
                }
            }
        }
        return a2;
    }
    f1(f1, v0);
`;
eval(v0).next();
gc();
