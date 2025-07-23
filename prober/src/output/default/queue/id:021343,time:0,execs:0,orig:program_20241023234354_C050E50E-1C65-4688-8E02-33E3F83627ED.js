const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 127; i6 === i7;) {
            for (let i15 = 0, i16 = 65536; i15 < i16;) {
            }
            for (let v22 = 0; v22 < 5; v22++) {
                class C24 extends FinalizationRegistry {
                }
            }
        }
    }
    f1();
`;
eval(v0).next();
gc();
