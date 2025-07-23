const v0 = `
    class C1 {
    }
    const v2 = new C1();
    v2?.constructor;
    function f4() {
        return v0;
    }
    const v5 = v2.constructor;
    const v7 = Symbol.toPrimitive;
    const o11 = {
        toString(a9) {
            /7\xed\xa0\x80/vs;
            return this;
        },
    };
    v5[v7] = f4;
    const v13 = createGlobalObject();
    try { v13.load(v5); } catch (e) {}
`;
eval(v0);
gc();
