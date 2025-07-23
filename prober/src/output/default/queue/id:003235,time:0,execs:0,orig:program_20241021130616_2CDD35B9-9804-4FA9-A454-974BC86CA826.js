function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3) {
        super();
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            class C10 {
                1 = -9007199254740991;
            }
            new C10();
        }
        new F4();
        const v13 = new F4();
        new F4(a3, v13, f0);
    }
}
const v15 = new C1(C1);
new C1(v15);
new C1(f0);
gc();
