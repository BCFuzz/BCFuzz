const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        /(Jv()foo[z]*)/myvgi;
        return v0;
    }
    v3.constructor = f4;
    const v6 = v3.constructor;
    const v8 = createGlobalObject();
    const t12 = v8.EvalError;
    const v10 = t12(v6);
    try { v8.load(v10); } catch (e) {}
`;
eval(v0);
gc();
