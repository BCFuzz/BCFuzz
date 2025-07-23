const v0 = `
    async function* f1(a2, a3) {
        for (let [i36, i37] = (() => {
                for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
                }
                const v17 = createGlobalObject().AggregateError.prototype;
                for (let i20 = 0, i21 = 10;
                    (() => {
                        const v22 = i20 < i21;
                        class C23 {
                            static #c;
                            constructor(a25, a26) {
                                try {
                                    a25.#c += a25;
                                } catch(e27) {
                                }
                            }
                        }
                        new C23(v17);
                        return v22;
                    })();
                    i21--) {
                }
                return [0, 10];
            })();
            i36 < i37;
            i37--) {
        }
        return a2;
    }
    f1(f1, v0);
`;
for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
    for (let i57 = 0, i58 = 10; i57 < i58; i58--) {
    }
}
eval(v0).next();
gc();
