const v0 = `
    async function* f1(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            function f5(a6, a7, a8, a9) {
                for (let v10 = 0; v10 < 5; v10++) {
                    const v11 = a6.__proto__;
                    function f12(a13) {
                        return f5;
                    }
                    Object.defineProperty(v11, "e", { configurable: true, enumerable: true, set: f12 });
                }
                return a3;
            }
            for (let v14 = 0; v14 < 10; v14++) {
                f5(f5);
            }
            for (let i18 = -3, i19 = 10; i18 < i19; i19--) {
            }
        }
        for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
        }
        class C36 {
            static #h;
        }
        return a3;
    }
    f1();
`;
for (let i40 = 0, i41 = 10; i40 != i41; i41--) {
    for (let i50 = 0, i51 = 10; i50 < i51; i51--) {
    }
}
const v59 = eval(v0);
v59.next(v59, v59, v0, eval, v59);
gc();
