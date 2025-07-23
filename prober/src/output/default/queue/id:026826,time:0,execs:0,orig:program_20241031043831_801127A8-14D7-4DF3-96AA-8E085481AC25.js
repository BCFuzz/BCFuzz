function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10000;
}
class C3 extends F0 {
}
const v4 = new C3();
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                class C11 {
                    static #b;
                }
            `;
            const v12 = v10.split(a8);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
