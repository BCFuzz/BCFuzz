const v1 = `
    async function* f2(a3, a4) {
        for (let [i38, i39] = (() => {
                const v8 = new Uint32Array();
                class C9 {
                    #o(a11, a12, a13) {
                    }
                    constructor(a15, a16, a17, a18) {
                        0 < 8;
                        for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
                            gc();
                            new Float64Array();
                        }
                    }
                }
                new C9(v8, a3);
                return [0, 10];
            })();
            i38 < i39;
            i39--) {
        }
    }
    f2.apply();
`;
for (let i49 = 0, i50 = 10;
    (() => {
        const v51 = i49 < i50;
        for (let i54 = 0, i55 = 10; i54 !== i55; i55--) {
        }
        return v51;
    })();
    i50--) {
}
eval(v1).next();
gc();
