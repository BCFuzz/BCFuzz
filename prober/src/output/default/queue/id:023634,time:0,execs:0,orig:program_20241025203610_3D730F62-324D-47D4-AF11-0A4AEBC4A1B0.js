const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 <= i7; i7--, JSON.parse(JSON.stringify(v0))) {
        }
        return f1;
    }
    f1(f1, f1);
`;
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    }
}
eval(v0).next();
gc();
