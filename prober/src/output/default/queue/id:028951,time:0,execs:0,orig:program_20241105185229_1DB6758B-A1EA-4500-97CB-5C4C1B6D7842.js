class C0 {
    static n(a2, a3) {
        const v4 = `
            function f5(a6, a7) {
                var arguments = Symbol;
                return a3;
            }
        `;
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        eval(v4);
    }
}
try { C0.n(); } catch (e) {}
gc();
