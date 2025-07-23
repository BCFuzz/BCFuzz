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
    const v10 = createGlobalObject();
    const t15 = v10.EvalError;
    const v12 = t15(v8);
    try { v10.load(v12); } catch (e) {}
`;
eval(v0);
gc();
