const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
                delete arguments.length;
                for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
                }
            }
        }
        return v0;
    }
    f1();
`;
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
    }
}
const v58 = eval(v0);
v58.next(v58, v58, v0, eval);
gc();
