const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    const v5 = v3.constructor;
    v5[Symbol.toPrimitive] = f4;
    const v9 = createGlobalObject();
    try { v9.load(v5); } catch (e) {}
`;
eval(v0);
gc();
