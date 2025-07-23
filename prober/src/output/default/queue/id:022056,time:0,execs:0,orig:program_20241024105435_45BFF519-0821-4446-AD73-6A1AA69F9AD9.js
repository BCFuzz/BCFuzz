const v0 = `
    async function* f1(a2, a3) {
        createGlobalObject().hasOwnProperty(a2);
        return f1;
    }
    f1(f1, v0);
`;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    for (let i20 = 0, i21 = 10; i21--, i20 < i21;) {
    }
}
const v29 = eval(v0);
v29.next(v0, v0, v0, v29);
gc();
