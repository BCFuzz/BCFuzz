class C0 {
    constructor(a2) {
        const v3 = this.constructor;
        try { new v3(); } catch (e) {}
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
}
new C0(C0);
gc();
