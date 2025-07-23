const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    function f5() {
        return f4;
    }
    Object.defineProperty(f4, Symbol.toPrimitive, { enumerable: true, get: f5 });
    v3.constructor = f4;
    const v8 = v3.constructor;
    /([\xe2\x81\xa3])/vis;
    const v11 = createGlobalObject();
    const t16 = v11.EvalError;
    const v13 = t16(v8);
    try { v11.load(v13); } catch (e) {}
`;
eval(v0);
gc();
