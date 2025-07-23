const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                const v8 = i6 < i7;
                for (let i11 = 10, i12 = 10; -13369 == i12;) {
                }
                return v8;
            })();
            i7--) {
        }
        return a3;
    }
    f1();
`;
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
    for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
    }
}
eval(v0).next(eval, v0);
gc();
