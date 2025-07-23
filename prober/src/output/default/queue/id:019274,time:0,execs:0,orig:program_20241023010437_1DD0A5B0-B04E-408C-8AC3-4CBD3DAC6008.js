const v2 = `
    async function* f3(a4, a5) {
        return 206704.8295369146 ** 4096;
    }
    f3(4096, f3);
`;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    }
}
eval(v2).next();
gc();
