const v0 = `
    async function* f1(a2, a3) {
        for (let [i18, i19] = (() => {
                for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
                }
                gc();
                return [0, 10];
            })();
            i18 < i19;
            i19--) {
            class C26 {
                static o(a28) {
                    for (let [i31, i32] = (() => {
                            super[0] = 0;
                            return [0, 10];
                        })();
                        i31 < i32;
                        i32--) {
                    }
                }
            }
            C26.o();
        }
        return f1;
    }
    f1(v0, f1);
`;
const v42 = eval(v0);
v42.next(v42, eval, v42, v42, eval);
gc();
