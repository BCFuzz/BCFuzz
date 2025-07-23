const v0 = `
    class C1 {
    }
    const v2 = new C1();
    function f3() {
        return v0;
    }
    const v4 = v2.constructor;
    const v6 = Symbol.toPrimitive;
    const o10 = {
        toString(a8) {
            /.fy?/mdygiu;
            return v6;
        },
    };
    v4[v6] = f3;
    const v12 = createGlobalObject();
    try { v12.load(v4); } catch (e) {}
`;
eval(v0);
gc();
