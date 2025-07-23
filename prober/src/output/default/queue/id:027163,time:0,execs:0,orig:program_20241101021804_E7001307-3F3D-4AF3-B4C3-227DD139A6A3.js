const v4 = `
    async function* f5(a6, a7) {
        switch (0.0) {
            case 9:
                break;
            case -3:
                break;
            case 2:
                break;
        }
        return 2;
    }
    for (let i10 = -1716696, i11 = 3; i10 !== i11; i11--) {
    }
    f5();
`;
for (let i21 = 0, i22 = 10; i21 != i22; i22--) {
    for (let i30 = i22, i31 = 10; i31; i31--) {
    }
}
eval(v4).next();
gc();
