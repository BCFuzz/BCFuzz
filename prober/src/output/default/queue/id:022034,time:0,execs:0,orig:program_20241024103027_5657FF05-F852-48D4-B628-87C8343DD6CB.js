const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        class C15 {
            #g = 1000.0;
            constructor(a17) {
                try {
                    const t8 = 1000.0;
                    t8.#g = this;
                } catch(e18) {
                }
            }
        }
        const v19 = new C15(1000.0);
        return v19;
    }
    f1.apply();
`;
for (let i23 = 0, i24 = 10;
    (() => {
        const v25 = i23 < i24;
        for (let i28 = 0, i29 = 10; i28 !== i29; i29--) {
        }
        return v25;
    })();
    i24--) {
}
eval(v0).next();
gc();
