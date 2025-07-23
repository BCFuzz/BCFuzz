const v2 = `
    /\u{12345}/myvis;
    class C4 {
    }
    const v5 = new C4();
    function f6() {
        4096 >= 536870912 ? 4096 : 536870912;
        return 4096;
    }
    v5.constructor = f6;
    const v9 = v5.constructor;
    const v11 = createGlobalObject();
    try { v11.load(v9); } catch (e) {}
`;
eval(v2);
gc();
