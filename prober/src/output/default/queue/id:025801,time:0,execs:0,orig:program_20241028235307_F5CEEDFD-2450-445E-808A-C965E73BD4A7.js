const v1 = new Uint16Array();
for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
}
const v12 = `
    async function* f13(a14, a15) {
        for (let i18 = 0, i19 = 10; i18 !== i19; i19--) {
            v1["at"] &&= a14;
        }
        return v12;
    }
    f13(f13, v1);
`;
eval(v12).next();
gc();
