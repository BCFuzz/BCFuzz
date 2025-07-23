const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        function f5() {
            return v0;
        }
        class C6 extends f5 {
            static #b;
        }
        return f5;
    }
    v3.constructor = f4;
    const v7 = v3.constructor;
    const v9 = createGlobalObject();
    const t17 = v9.EvalError;
    const v11 = t17(v7);
    try { v9.load(v11); } catch (e) {}
`;
eval(v0);
gc();
