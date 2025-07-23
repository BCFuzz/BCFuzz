const v0 = `
    async function* f1(a2, a3) {
        class C5 {
            static valueOf(a7, a8, a9, a10) {
                const v11 = new Map();
                C5 += v11;
            }
        }
        let v12;
        try { v12 = C5.valueOf(); } catch (e) {}
        return v12;
    }
    f1();
`;
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
    }
}
const v35 = eval(v0);
v35.next(eval, eval, v35);
gc();
