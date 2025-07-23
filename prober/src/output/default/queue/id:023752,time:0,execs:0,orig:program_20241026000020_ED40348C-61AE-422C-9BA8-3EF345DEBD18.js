const v0 = `
    /\u{12345}/myvis;
    /[(?:a?)+wM24(ab|cde)\p{Script=Greek}?]/myg;
    class C3 {
        #c;
    }
    class C4 {
    }
    const v5 = new C4();
    function f6() {
        return v0;
    }
    const v7 = v5.constructor;
    v7[Symbol.toPrimitive] = f6;
    const v11 = createGlobalObject();
    try { v11.load(v7); } catch (e) {}
`;
eval(v0);
for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
}
for (let i27 = -3, i28 = 512; i27 !== i28; i28--) {
}
gc();
