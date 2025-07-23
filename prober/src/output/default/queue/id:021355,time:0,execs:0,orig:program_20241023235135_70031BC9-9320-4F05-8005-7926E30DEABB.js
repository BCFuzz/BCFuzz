const v0 = `
    async function* f1(a2, a3) {
        for (let i5 = 0, i6 = 0; i5 > i6;) {
        }
        return v0;
    }
    f1.apply();
`;
for (let i15 = 0, i16 = 10;
    (() => {
        const v17 = i15 < i16;
        for (let i20 = 0, i21 = 10; i20 !== i21; i21--) {
        }
        return v17;
    })();
    i16--) {
}
const v34 = eval(v0);
v34.next(v0, v34);
gc();
