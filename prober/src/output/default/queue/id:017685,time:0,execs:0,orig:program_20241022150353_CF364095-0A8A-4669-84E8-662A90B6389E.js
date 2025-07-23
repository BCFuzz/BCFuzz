const v0 = [127,6541,-63944,1777023338,-4734,10000];
const v1 = `
    async function* f2(a3, a4) {
        for (const v5 in v0) {
            const o6 = {
                "apply": f2,
                "construct": f2,
                "defineProperty": f2,
                "deleteProperty": f2,
                "get": f2,
            };
        }
        return a3;
    }
    f2();
`;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    }
}
for (let i30 = 0, i31 = 10; i31--, i30 < i31;) {
}
eval(v1).next();
gc();
