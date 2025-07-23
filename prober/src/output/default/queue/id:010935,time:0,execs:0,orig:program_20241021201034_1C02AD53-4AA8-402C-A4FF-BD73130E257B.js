function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
class C5 extends C4 {
    constructor(a7, a8) {
        for (let v9 = 0; v9 < 10; v9++) {
            const v10 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
            try { v10.find(); } catch (e) {}
        }
        super();
        for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
            for (let v22 = 0; v22 < 250; v22++) {
            }
        }
    }
}
new C5();
gc();
