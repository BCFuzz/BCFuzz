class C0 {
    constructor(a2, a3) {
        gc();
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F6(this, C0);
    }
}
const v11 = new C0();
new C0(v11, C0);
gc();
