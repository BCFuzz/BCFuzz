const v1 = Symbol.toPrimitive;
const v3 = `
    async function* f4(a5, a6) {
        switch (a6) {
            case "log10":
                break;
            case f4:
                break;
            case v1:
                break;
        }
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        return a5;
    }
    f4(f4, f4);
`;
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    }
}
eval(v3).next(v3, v3);
gc();
