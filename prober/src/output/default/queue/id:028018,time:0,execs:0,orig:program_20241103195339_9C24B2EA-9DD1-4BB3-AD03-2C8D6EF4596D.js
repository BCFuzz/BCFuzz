const v0 = `
    class C1 {
    }
    const v2 = new C1();
    function f3() {
        return v0;
    }
    function f4() {
        return f3;
    }
    Object.defineProperty(f3, Symbol.toPrimitive, { enumerable: true, get: f4 });
    v2.constructor = f3;
    const v7 = v2.constructor;
    /([\xe2\x81\xa3])/vis;
    const v10 = createGlobalObject();
    const t15 = v10.EvalError;
    const v12 = t15(v7);
    try { v10.load(v12); } catch (e) {}
`;
eval(v0);
gc();
