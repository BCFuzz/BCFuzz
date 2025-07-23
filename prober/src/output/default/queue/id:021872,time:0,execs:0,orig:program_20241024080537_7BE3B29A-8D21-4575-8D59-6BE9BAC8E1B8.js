const v0 = `
    async function* f1(a2, a3) {
        4n * (9007199254740990n ^ 9007199254740990n);
        return f1;
    }
    f1(f1, f1);
`;
for (let i11 = 0, i12 = 10; i11 != i12; i12--) {
    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    }
}
eval(v0).next();
gc();
