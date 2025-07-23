const v0 = `
    class C1 {
        static #a;
    }
    const v2 = new C1();
    function f3() {
        return v0;
    }
    const v4 = v2.constructor;
    const v6 = Symbol.toPrimitive;
    /\u{12345}/myvis;
    v4[v6] = f3;
    const v9 = createGlobalObject();
    try { v9.load(v4); } catch (e) {}
`;
eval(v0);
for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
}
for (let i25 = -3, i26 = 512; i25 !== i26; i26--) {
}
for (let i35 = 10, i36 = 10; -13369 < i36; i36--) {
}
gc();
