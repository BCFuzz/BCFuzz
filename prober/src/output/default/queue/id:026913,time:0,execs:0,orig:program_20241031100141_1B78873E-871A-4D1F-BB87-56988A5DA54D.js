const v2 = `
    async function* f3(a4, a5) {
        const v6 = a5.substring;
        let v7;
        try { v7 = v6(); } catch (e) {}
        class C9 {
        }
        const v10 = C9.name;
        try { C9.call(v10, v2, Int32Array, v7, v2, f3, true, -292129.74437291606); } catch (e) {}
        for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
        }
        return v7;
    }
    f3(v2, v2);
`;
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
    for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
    }
}
eval(v2).next();
gc();
