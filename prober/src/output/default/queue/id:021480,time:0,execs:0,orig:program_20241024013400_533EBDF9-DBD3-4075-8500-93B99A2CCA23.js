const v0 = `
    async function* f1(a2, a3) {
        return "undefined" !== "undefined";
    }
    f1();
`;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
    }
}
eval(v0).next();
gc();
