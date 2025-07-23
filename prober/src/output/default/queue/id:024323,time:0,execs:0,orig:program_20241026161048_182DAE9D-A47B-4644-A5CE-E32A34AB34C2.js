const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            class C14 {
                static o(a16) {
                    for (let [i19, i20] = (() => {
                            super[0] = 0;
                            return [0, 10];
                        })();
                        i19 < i20;
                        i20--) {
                    }
                }
            }
            C14.o();
        }
        return a2;
    }
    f1();
`;
eval(v0).next();
gc();
