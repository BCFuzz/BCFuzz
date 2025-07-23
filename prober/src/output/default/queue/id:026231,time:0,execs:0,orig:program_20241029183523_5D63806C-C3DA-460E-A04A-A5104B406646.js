const v0 = `
    async function* f1(a2, a3) {
        switch ([f1]) {
            case 9:
                break;
            case 2:
                break;
            case 2:
                break;
        }
        return v0;
    }
    f1();
`;
for (let i10 = 0, i11 = 10; i10 != i11; i11--) {
    for (let i19 = i11, i20 = 10; i19 < i20; i20--) {
    }
}
eval(v0).next();
gc();
