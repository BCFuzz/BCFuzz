function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a3;
}
const v7 = new F1(F1, -1848192623, F1, F1);
for (const v8 in v7) {
    class C9 {
        constructor(a11) {
            const v13 = `
                /\u{12345}/myvis;
                do {
                } while (v13 < -1848192623)
            `;
            const v16 = v13.split(a11);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C9(v8);
}
gc();
