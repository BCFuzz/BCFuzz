function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3) {
        super();
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                for (let v10 = 0; v10 < 10; v10++) {
                    const v13 = new Map();
                    new WeakMap(v13);
                }
                return C1;
            }
            f9();
            f9();
        }
        new F4();
        new F4();
        new F4(this, C1, f0);
    }
}
new C1();
new C1();
new C1();
gc();
