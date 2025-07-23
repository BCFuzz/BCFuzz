function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a3;
}
const v5 = new F0();
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            const v11 = `
                switch (a9) {
                    default:
                        break;
                }
            `;
            const v12 = v11.split(a9);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
