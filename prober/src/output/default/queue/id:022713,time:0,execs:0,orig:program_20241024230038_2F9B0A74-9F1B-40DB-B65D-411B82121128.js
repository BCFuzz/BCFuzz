const v0 = `
    async function* f1(a2, a3) {
        yield* a2;
        return a3;
    }
    f1(v0);
`;
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
}
eval(v0).next(v0);
gc();
