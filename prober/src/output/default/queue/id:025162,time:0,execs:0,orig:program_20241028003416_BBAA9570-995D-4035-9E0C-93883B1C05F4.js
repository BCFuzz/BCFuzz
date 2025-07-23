const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
            class C15 {
                static o(a17) {
                    for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
                        try {
                            a = "boolean";
                        } catch(e28) {
                        }
                    }
                }
            }
            C15.o();
        }
        return f2;
    }
    f2();
`;
eval(v1).next();
gc();
