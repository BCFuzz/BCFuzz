const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    const v5 = v3.constructor;
    const v7 = Symbol.toPrimitive;
    const o11 = {
        toString(a9) {
            /.fy?/mdygiu;
            return a9;
        },
    };
    v5[v7] = f4;
    const v13 = createGlobalObject();
    try { v13.load(v5); } catch (e) {}
`;
eval(v0);
gc();
