const v0 = `
    async function* f1(a2, a3) {
        for (let [i8, i9] = (() => {
                arguments.length;
                return [0, 10];
            })();
            i8 < i9;
            i9--) {
        }
        return a3;
    }
    f1();
`;
for (let i19 = 0, i20 = 10;
    i19 < i20;
    (() => {
        i20--;
        for (let i27 = 10, i28 = 10; -13369 < i28; i28--) {
        }
    })()) {
    for (let i39 = 0, i40 = 10; i19 < i40; i40--) {
    }
}
eval(v0).next();
gc();
