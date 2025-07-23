const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            class C14 {
                static o(a16) {
                    this[Symbol.toPrimitive] = f1;
                    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                        try {
                            const t8 = Date();
                            t8[this] = "parse";
                        } catch(e32) {
                        }
                        for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
                        }
                    }
                }
            }
            C14.o(f1, a2, v0, f1);
        }
        return v0;
    }
    f1(f1, v0);
`;
for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
    for (let i57 = 0, i58 = 10; i57 < i58; i58--) {
    }
}
eval(v0).next();
gc();
