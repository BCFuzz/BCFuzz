const v0 = `
    /a?a\bc+/mv;
    class C2 {
    }
    const v3 = new C2();
    function f5() {
        return v0;
    }
    const v6 = v3.constructor;
    v6[Symbol.toPrimitive] = f5;
    const v9 = createGlobalObject();
    try { v9.load(v6); } catch (e) {}
`;
eval(v0);
for (let i15 = -3, i16 = 512; i15 !== i16; i16--) {
}
gc();
