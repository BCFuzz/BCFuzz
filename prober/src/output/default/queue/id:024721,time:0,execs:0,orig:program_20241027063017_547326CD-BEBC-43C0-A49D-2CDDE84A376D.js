const v0 = `
    async function* f1(a2, a3) {
        for (const v5 of [14,-3,-2,3,1024,4294967295,9223372036854775807]) {
            yield a2;
        }
        return f1;
    }
    f1();
`;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
eval(v0).next();
gc();
