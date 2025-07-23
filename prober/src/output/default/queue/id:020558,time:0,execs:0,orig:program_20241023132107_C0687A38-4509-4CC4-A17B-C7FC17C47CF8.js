for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i16 !== i17; i17--) {
            for (let [i28, i29] = (() => {
                    new SharedArrayBuffer();
                    return [0, 10];
                })();
                i28 < i29;
                i29--) {
            }
        }
        return v10;
    }
    f11();
`;
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
    }
}
eval(v10).next();
gc();
