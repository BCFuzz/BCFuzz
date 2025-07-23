const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 >= i7;) {
            for (let [i17, i18] = (() => {
                    268435440 === 268435440;
                    return [0, -577550634];
                })();
                i17 < i18;
                ) {
            }
        }
        return v0;
    }
    f1();
`;
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
const v36 = eval(v0);
v36.next(eval, v36, eval, v36);
gc();
