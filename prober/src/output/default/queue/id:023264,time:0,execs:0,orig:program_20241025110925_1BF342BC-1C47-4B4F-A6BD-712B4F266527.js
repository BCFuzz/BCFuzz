const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return /(Jv()foo[z]*)/myvgi;
    }
    v3.constructor = f4;
    const v6 = v3.constructor;
    const v8 = createGlobalObject();
    try { v8.load(v6); } catch (e) {}
`;
eval(v0);
gc();
