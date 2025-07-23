const v0 = `
    /\u{12345}/myvis;
    class C2 {
        #c;
    }
    class C3 {
    }
    const v4 = new C3();
    function f5() {
        return v0;
    }
    const v6 = v4.constructor;
    v6[Symbol.toPrimitive] = f5;
    const v9 = \`
    \`;
    const v11 = createGlobalObject();
    try { v11.load(v6); } catch (e) {}
`;
eval(v0);
for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
}
for (let i27 = -3, i28 = 512; i27 !== i28; i28--) {
}
gc();
