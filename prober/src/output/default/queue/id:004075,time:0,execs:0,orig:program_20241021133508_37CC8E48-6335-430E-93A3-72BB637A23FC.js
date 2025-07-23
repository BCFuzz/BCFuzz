function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v6 = `
    class C7 {
        #o(a9) {
        }
    }
    try { new C7(); } catch (e) {}
    class C11 {
    }
    const t12 = C11.constructor;
    t12();
`;
eval(v6);
gc();
