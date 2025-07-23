class C0 {
    constructor(a2) {
        Math.cbrt(a2);
    }
    static valueOf(a6) {
        function f7() {
            return C0;
        }
        class C8 {
        }
        const v9 = new C8();
        v9.toString = f7;
        for (let i13 = 4, i14 = 10; i13 < i14; i14--) {
        }
        const v21 = `
            for (const v22 in v9) {
                const t16 = -551703437;
                t16[v22] = v22;
            }
        `;
        eval(v21);
    }
}
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a29(a28); } catch (e) {}
}
const v31 = new F25();
new F25(v31, C0, C0);
gc();
