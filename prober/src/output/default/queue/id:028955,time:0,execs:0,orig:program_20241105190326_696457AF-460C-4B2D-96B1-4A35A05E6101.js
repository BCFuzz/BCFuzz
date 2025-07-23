function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        (() => {
            const v10 = i9--;
            class C11 {
                #toString(a13) {
                }
                constructor(a15) {
                    try {
                        a15.#toString();
                    } catch(e17) {
                        const v18 = `
                            async function* f19(a20, a21) {
                                for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
                                }
                                const v33 = JSON.stringify(v18);
                                for (let [i38, i39] = (() => {
                                        eval(v33);
                                        return [0, 10];
                                    })();
                                    i39--, i38 < i39;
                                    ) {
                                }
                                /(9a\D((\xed\xa0\x80))\x02)/dgsu;
                                return e17;
                            }
                            f19();
                        `;
                        for (let i50 = 0, i51 = 10; i50 < i51; i51--) {
                            for (let i60 = 0, i61 = 10; i60 < i61; i61--) {
                            }
                        }
                        eval(v18).next();
                    }
                }
            }
            new C11(v10);
            return i8 < i9;
        })();
        ) {
    }
}
new F0();
gc();
