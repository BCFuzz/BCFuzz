const v1 = `
    async function* f2(a3, a4) {
        switch (-4294967297) {
            case -8:
                for (const v8 of Uint32Array(-4294967297)) {
                }
                break;
            case -4294967297:
                break;
        }
        return v1;
    }
    f2();
`;
for (let i12 = 0, i13 = 10; i12 != i13; i13--) {
    for (let i21 = i13, i22 = 10; i21 < i22; i22--) {
    }
}
eval(v1).next(-4294967297, -4294967297);
gc();
