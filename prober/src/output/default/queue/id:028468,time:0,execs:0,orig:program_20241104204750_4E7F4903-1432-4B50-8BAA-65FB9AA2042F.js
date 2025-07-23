function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1;
}
const v4 = new F1(F1);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                class C12 extends Date {
                    static {
                        delete this[536870887];
                    }
                }
            `;
            const v15 = v10.split(a8);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
