function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = ("0").toUpperCase();
const v5 = `
    async function* f6(a7, a8) {
        for (let i10 = 0, i11 = 0; i10 > i11;) {
            const v17 = i11;
            v4(f6, v17, i10, a7, f6);
            v2.toString(a7, undefined);
        }
        return "0";
    }
    f6.apply();
`;
for (let i24 = 0, i25 = 10;
    (() => {
        const v26 = i24 < i25;
        for (let i29 = 0, i30 = 10; i29 !== i30; i30--) {
        }
        return v26;
    })();
    i25--) {
}
eval(v5).next();
gc();
