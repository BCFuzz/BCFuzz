const v0 = `
    for (let i3 = 0, i4 = 10; i3 < i4; i3 % i3, i4--) {
    }
    class C12 {
    }
    const v13 = new C12();
    function f14() {
        return v0;
    }
    const v15 = v13.constructor;
    v15[Symbol.toPrimitive] = f14;
    const v19 = createGlobalObject();
    try { v19.load(v15); } catch (e) {}
`;
eval(v0);
for (let i25 = -3, i26 = 512; i25 !== i26; i26--) {
}
gc();
