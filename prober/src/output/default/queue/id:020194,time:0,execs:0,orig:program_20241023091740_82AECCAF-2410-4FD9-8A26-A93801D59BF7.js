const o0 = {
};
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Proxy(a3, a3);
    class C9 {
        constructor(a11, a12, a13) {
            const v14 = this.constructor;
            try { new v14(a6, o0); } catch (e) {}
            a13 in v8;
        }
    }
    new C9();
}
new F1(o0);
gc();
