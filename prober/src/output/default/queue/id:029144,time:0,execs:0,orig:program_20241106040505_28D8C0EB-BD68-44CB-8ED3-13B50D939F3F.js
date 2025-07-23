const v0 = `
    async function* f1(a2, a3) {
        const v5 = f1 instanceof Uint8Array;
        (Uint8Array >>> Uint8Array) > 268435439;
        if (v5) {
        }
        return v0;
    }
    f1();
`;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
eval(v0).next();
gc();
