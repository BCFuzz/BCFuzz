const v0 = `
    async function* f1(a2, a3) {
        class C4 {
        }
        with (C4) {
            eval(v0);
        }
        return f1;
    }
    f1(v0, v0);
`;
for (let i10 = 0, i11 = 10; i10 != i11; i11--) {
    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    }
}
eval(v0).next(v0);
gc();
