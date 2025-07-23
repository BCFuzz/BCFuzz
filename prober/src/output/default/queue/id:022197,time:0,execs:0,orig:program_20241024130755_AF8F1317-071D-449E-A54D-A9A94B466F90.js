const v0 = `
    async function* f1(a2, a3) {
        for (let [i9, i10] = (() => {
                try {
                } finally {
                    for (let v6 = 0; v6 < 5; v6++) {
                        a3["p" + v6] = v6;
                    }
                }
                return [0, 10];
            })();
            i9 < i10;
            i10--) {
        }
        return a2;
    }
    f1(v0, v0);
`;
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    }
}
const v39 = eval(v0);
v39.next(eval, v0, eval, v39, v0);
gc();
