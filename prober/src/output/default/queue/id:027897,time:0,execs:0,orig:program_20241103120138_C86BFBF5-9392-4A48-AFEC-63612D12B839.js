const v1 = `
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v1;
    }
    const v5 = v3.constructor;
    const v6 = Symbol.toPrimitive;
    const o10 = {
        toString(a8) {
            return /7\xed\xa0\x80/vs;
        },
    };
    v5[v6] = f4;
    createGlobalObject().encodeURI(v5);
`;
eval(v1);
gc();
