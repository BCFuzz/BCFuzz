const v0 = `
    /[(?:a?)+wM24(ab|cde)\p{Script=Greek}?]/myg;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    const v5 = v3.constructor;
    const v7 = Symbol.toPrimitive;
    /\u{12345}/myvis;
    v5[v7] = f4;
    const v10 = createGlobalObject();
    try { v10.load(v5); } catch (e) {}
`;
eval(v0);
for (let i16 = 0, i17 = 10; i17--, i16 < i17;) {
}
for (let i26 = -3, i27 = 512; i26 !== i27; i27--) {
}
gc();
