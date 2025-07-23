const v0 = `
    async function* f1(a2, a3) {
        for (let [i29, i30] = (() => {
                function F6(a8, a9, a10) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v11 = new F6();
                for (let i14 = 0, i15 = 10;
                    (() => {
                        const v16 = i14 < i15;
                        const o21 = {
                            o(a18, a19, a20) {
                                return v11;
                            },
                        };
                        for (const v22 in o21) {
                            v11[v22];
                        }
                        return v16;
                    })();
                    i15--) {
                }
                return [0, 10];
            })();
            i29 < i30;
            i30--) {
            for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
                for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
                }
            }
        }
        return a2;
    }
    f1(f1, f1);
`;
for (let i60 = 0, i61 = 10; i60 < i61; i61--) {
    for (let i70 = 0, i71 = 10; i70 < i71; i71--) {
    }
}
eval(v0).next();
gc();
