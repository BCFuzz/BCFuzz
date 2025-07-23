const v0 = `
    async function* f1(a2, a3) {
        -65062 / 1.0;
        for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
        }
        for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
        }
        return 1.0;
    }
    f1.apply();
`;
for (let i30 = 0, i31 = 10;
    (() => {
        const v32 = i30 < i31;
        for (let i35 = 0, i36 = 10; i35 !== i36; i36--) {
        }
        return v32;
    })();
    i31--) {
}
eval(v0).next();
gc();
