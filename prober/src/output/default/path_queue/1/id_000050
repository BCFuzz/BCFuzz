function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        const v5 = `
            async function f6(a7, a8, a9) {
                function f10(a11) {
                    return this;
                }
                return a7;
            }
            f6(a4, f0, C1);
        `;
        eval(v5);
    }
}
new C1();
for (let i18 = -3, i19 = 10; i18 < i19; i19--) {
}
gc();
