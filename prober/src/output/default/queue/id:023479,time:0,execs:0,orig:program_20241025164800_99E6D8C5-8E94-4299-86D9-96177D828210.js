const v0 = `
    /\u{12345}/myvis;
    /[(?:a?)+wM24(ab|cde)\p{Script=Greek}?]/myg;
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C8 {
    }
    const v9 = new C8();
    function f10() {
        return v0;
    }
    const v11 = v9.constructor;
    v11[Symbol.toPrimitive] = f10;
    const v15 = createGlobalObject();
    try { v15.load(v11); } catch (e) {}
`;
eval(v0);
for (let i21 = 0, i22 = 10; i22--, i21 < i22;) {
}
for (let i31 = -3, i32 = 512; i31 !== i32; i32--) {
}
gc();
