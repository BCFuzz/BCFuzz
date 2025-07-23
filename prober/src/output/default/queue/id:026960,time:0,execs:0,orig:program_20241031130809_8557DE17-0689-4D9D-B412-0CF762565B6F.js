const v0 = `
    async function* f1(a2, a3) {
        for (let [i19, i20] = (() => {
                for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
                }
                gc();
                /s\u{12345}\u{23456}e8ZgRe(?:a+)?Ja+?/mdiu;
                return [0, 10];
            })();
            i19 < i20;
            i20--) {
            class C27 {
                static o(a29) {
                    for (let [i32, i33] = (() => {
                            super[0] = 0;
                            return [0, 10];
                        })();
                        i32 < i33;
                        i33--) {
                    }
                }
            }
            C27.o(f1);
        }
        return v0;
    }
    f1();
`;
const v43 = eval(v0);
for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
}
v43.next();
gc();
