const v0 = `
    async function* f1(a2, a3) {
        function F4(a6) {
            if (!new.target) { throw 'must be called with new'; }
            const v7 = this.constructor;
            try { new v7(); } catch (e) {}
        }
        class C9 extends F4 {
            #p(a11, a12) {
            }
        }
        new C9();
        return a2;
    }
    f1(f1, v0);
`;
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
const v26 = eval(v0);
v26.next(eval, v26, v26);
gc();
