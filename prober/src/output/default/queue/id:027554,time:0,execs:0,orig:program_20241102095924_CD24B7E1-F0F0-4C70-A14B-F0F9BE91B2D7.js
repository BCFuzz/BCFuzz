const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    const v5 = v3.constructor;
    const v7 = Symbol.toPrimitive;
    const o11 = {
        toString(a9) {
            /7\xed\xa0\x80/vs;
            return this;
        },
    };
    v5[v7] = f4;
    createGlobalObject().encodeURI(v5);
`;
eval(v0);
gc();
