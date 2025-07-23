function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
class C3 {
    constructor(a5, a6, a7, a8) {
        new a5(C2);
        let v10 = 1e-15;
        function f11(a12, a13) {
            a13.length;
            ({"length":v10,} = arguments);
            return C3;
        }
        for (let i = 0; i < 5; i++) {
            f11(a6, a5);
        }
    }
}
new C3(C3);
gc();
