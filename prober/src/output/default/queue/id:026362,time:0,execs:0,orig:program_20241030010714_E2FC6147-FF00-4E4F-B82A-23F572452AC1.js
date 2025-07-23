const v0 = `
    async function* f1(a2, a3) {
        const v6 = [2,2,2,2,2];
        switch (v6) {
            case 256:
                break;
            case 2:
                break;
            case 2:
                break;
        }
        return v6;
    }
    f1();
`;
for (let i10 = 0, i11 = 10; i10 != i11; i11--) {
    for (let i19 = i11, i20 = 10; i19 < i20; i20--) {
    }
}
const v28 = eval(v0);
v28.next(eval, v28, eval, v0);
gc();
