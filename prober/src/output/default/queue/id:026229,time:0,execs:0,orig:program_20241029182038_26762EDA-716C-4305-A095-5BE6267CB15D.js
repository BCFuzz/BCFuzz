const v0 = `
    class C1 {
        static #o(a3, a4) {
        }
    }
    const v5 = new C1();
    function f6() {
        return v0;
    }
    const v7 = v5.constructor;
    const v9 = Symbol.toPrimitive;
    const o13 = {
        toString(a11) {
            /7\xed\xa0\x80/vs;
            return v7;
        },
    };
    v7[v9] = f6;
    const v15 = createGlobalObject();
    try { v15.load(v7); } catch (e) {}
`;
eval(v0);
gc();
