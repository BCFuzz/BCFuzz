class C3 {
    constructor(a5, a6) {
        for (let v7 = 0; v7 < 32; v7++) {
            function f12(a13) {
                const o17 = {
                    ...6n,
                    set d(a15) {
                        a15 ** a13;
                    },
                    [a13]: 6n,
                    642: a13,
                };
                return o17;
            }
            f12();
            [6n,6n,f12()];
        }
    }
    [-1.6498589343440846e+308];
}
new C3(C3, -2.2250738585072014e-308);
new C3();
const v31 = `
    const v34 = [16,16];
    class C35 {
        #e;
        constructor() {
            this.#e = this;
        }
        #g = v34;
        static #c;
    }
    new C35();
`;
eval(v31);
gc();
