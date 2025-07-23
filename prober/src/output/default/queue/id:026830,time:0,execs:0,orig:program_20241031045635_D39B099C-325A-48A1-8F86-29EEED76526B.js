const v0 = `
    async function* f1(a2, a3) {
        var arguments = Symbol;
        return v0;
    }
    f1(f1, v0);
`;
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
eval(v0).next();
gc();
