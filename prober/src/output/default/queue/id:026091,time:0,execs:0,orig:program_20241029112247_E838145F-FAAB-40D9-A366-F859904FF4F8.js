const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            try {
                class C14 {
                }
                const v15 = C14();
                function f16() {
                    return f16;
                }
                if (v15) {
                    break;
                }
            } catch(e17) {
            }
            for (let i20 = 0, i21 = 10; i21; i21--) {
            }
        }
        return a2;
    }
    f1(f1, f1);
`;
eval(v0).next(v0);
gc();
