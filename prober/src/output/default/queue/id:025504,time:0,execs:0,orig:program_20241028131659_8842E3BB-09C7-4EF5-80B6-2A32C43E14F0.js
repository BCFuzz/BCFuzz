const v1 = `
    class C2 {
        constructor(a4, a5, a6) {
            super();
        }
    }
`;
const v7 = v1.split();
try { v7.flatMap(eval); } catch (e) {}
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
