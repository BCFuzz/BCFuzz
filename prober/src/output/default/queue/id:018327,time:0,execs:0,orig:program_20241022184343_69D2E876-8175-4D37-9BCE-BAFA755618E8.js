class C0 {
    constructor(a2, a3, a4) {
        function F5(a7, a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function F11(a13) {
                if (!new.target) { throw 'must be called with new'; }
                this instanceof F11;
            }
            new F11();
            new F11();
        }
        new F5();
        new F5();
    }
}
const v19 = new C0();
new C0(C0, C0, v19);
new C0();
gc();
