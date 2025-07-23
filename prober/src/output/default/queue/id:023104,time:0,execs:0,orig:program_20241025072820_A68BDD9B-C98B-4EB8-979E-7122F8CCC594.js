const v0 = `
    async function* f1(a2, a3) {
        \`-256\`;
    }
    f1();
`;
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    }
}
const v27 = eval(v0);
v27.next(v27, v0, eval);
gc();
