const v0 = `
    async function* f1(a2, a3) {
        1 ** -9223372036854775808;
        return v0;
    }
    f1(v0, f1);
`;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    }
}
eval(v0).next(eval);
gc();
