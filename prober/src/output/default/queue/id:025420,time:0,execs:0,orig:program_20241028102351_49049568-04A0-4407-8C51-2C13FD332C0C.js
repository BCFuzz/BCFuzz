const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return C2;
    }
    class C5 {
    }
    class C6 extends f4 {
        static #h = C5;
    }
    function f7() {
        return v0;
    }
    const v8 = v3.constructor;
    const v10 = Symbol.toPrimitive;
    const o14 = {
        toString(a12) {
            /7\xed\xa0\x80/vs;
            return v0;
        },
    };
    v8[v10] = f7;
    const v16 = createGlobalObject();
    try { v16.load(v8); } catch (e) {}
`;
eval(v0);
gc();
