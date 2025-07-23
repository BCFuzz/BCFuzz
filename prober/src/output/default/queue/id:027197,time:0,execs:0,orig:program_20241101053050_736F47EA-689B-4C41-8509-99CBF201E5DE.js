const v0 = `
    /\u{12345}/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    const v5 = v3.constructor;
    const v7 = \`
        const v8 = \\\`
        \\\`;
    \`;
    v5[Symbol.toPrimitive] = f4;
    const v11 = createGlobalObject();
    try { v11.load(v5); } catch (e) {}
`;
eval(v0);
gc();
