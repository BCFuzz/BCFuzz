function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
const v9 = new Int8Array(255);
for (const v10 in v9) {
    class C11 {
        constructor(a13) {
            const v15 = `
                function f16() {
                    v6 * 255;
                    return Int8Array;
                }
            `;
            const v18 = v15.split(a13);
            v18.shift();
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C11(v10);
}
gc();
