const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
        }
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        for (let v24 = 0; v24 < 5; v24++) {
            for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
            }
            (0 < (v24 >>> 129)) || a2;
        }
        return a2;
    }
    f1.apply();
`;
eval(v0).next();
gc();
