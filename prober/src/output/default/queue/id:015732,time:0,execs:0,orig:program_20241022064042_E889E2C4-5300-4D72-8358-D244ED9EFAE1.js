const v0 = `
    async function* f1(a2, a3) {
        const v5 = [f1,f1,f1,f1,f1];
        for (let i = 0; i < 5; i++) {
            const v6 = new BigInt64Array();
            for (const v7 of v6) {
            }
            const v9 = v5.pop()?.__defineSetter__;
            try { v9(a3, v5, v6, a3, f1); } catch (e) {}
        }
        try { a2.substring(a3, a3, BigInt64Array, f1); } catch (e) {}
        try { a3.at(f1, a3, BigInt64Array, v0); } catch (e) {}
    }
    f1();
`;
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
    }
}
eval(v0).next();
gc();
