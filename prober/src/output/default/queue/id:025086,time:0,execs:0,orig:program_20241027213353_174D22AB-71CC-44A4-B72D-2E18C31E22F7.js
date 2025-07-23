const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    const v4 = v3?.constructor;
    function f5() {
        return v0;
    }
    const v6 = v3.constructor;
    const v8 = Symbol.toPrimitive;
    const o12 = {
        toString(a10) {
            /7\xed\xa0\x80/vs;
            return v4;
        },
    };
    v6[v8] = f5;
    const v14 = createGlobalObject();
    try { v14.load(v6); } catch (e) {}
`;
eval(v0);
gc();
