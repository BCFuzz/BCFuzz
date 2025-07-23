function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = `
    async function* f5(a6, a7) {
        switch (a7) {
            case f5:
                break;
            default:
                break;
            case "log10":
                break;
            case v2:
                break;
        }
        for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
        }
        return v4;
    }
    f5();
`;
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    for (let i30 = i22, i31 = 10; i30 < i31; i31--) {
    }
}
const v39 = eval(v4);
v39.next(eval, v39, "log10");
gc();
