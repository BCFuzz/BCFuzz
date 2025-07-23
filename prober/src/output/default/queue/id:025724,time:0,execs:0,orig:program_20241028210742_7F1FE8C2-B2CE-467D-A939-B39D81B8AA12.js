const v0 = `
    /((\xed\xa0\x80))\x02(1)/myvis;
    class C2 {
    }
    const v3 = new C2();
    function f4() {
        return v0;
    }
    const v5 = v3.constructor;
    v5[Symbol.toPrimitive] = f4;
    const v9 = createGlobalObject();
    try { v9.load(v5); } catch (e) {}
`;
eval(v0);
for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
}
for (let i25 = -3, i26 = 512; i25 !== i26; i26--) {
}
gc();
