const v0 = `
    async function* f1(a2, a3) {
        for (let [i29, i30] = (() => {
                class C6 {
                    #o(a8, a9, a10) {
                    }
                    constructor(a12, a13, a14, a15) {
                        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                            gc();
                        }
                    }
                }
                new C6();
                return [0, 10];
            })();
            i29 < i30;
            i30--) {
        }
    }
    f1.apply(v0, f1, v0, v0);
`;
for (let i40 = 0, i41 = 10;
    (() => {
        const v42 = i40 < i41;
        for (let i45 = 0, i46 = 10; i45 !== i46; i46--) {
        }
        return v42;
    })();
    i41--) {
}
eval(v0).next();
gc();
