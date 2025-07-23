const v0 = `
    /\u{12345}/myvis;
    class C2 {
        static #p(a4) {
        }
    }
    const v5 = new C2();
    const v6 = v5.constructor;
    const v8 = createGlobalObject();
    try { v8.load(v6); } catch (e) {}
`;
eval(v0);
gc();
