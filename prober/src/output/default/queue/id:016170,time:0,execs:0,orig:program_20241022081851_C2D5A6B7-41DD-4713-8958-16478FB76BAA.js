const v0 = `
    async function* f1(a2, a3) {
        const t2 = "NEGATIVE_INFINITY";
        delete t2.length;
        return v0;
    }
    f1(f1, v0);
`;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    for (let i19 = -2, i20 = 10; i19 < i20; i20--) {
    }
}
eval(v0).next();
gc();
