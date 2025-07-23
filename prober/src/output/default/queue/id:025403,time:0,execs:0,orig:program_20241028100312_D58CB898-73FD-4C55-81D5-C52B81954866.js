function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C5 {
    constructor(a7) {
        let v6 = this;
        class C8 {
            [a7];
            4 = v6;
        }
        v6 *= v2;
        new C8();
        new C8();
        new C8();
    }
}
new C5();
const v13 = new C5(v2);
const t19 = v13.constructor;
new t19(-460142.2319972981);
new C5(63116);
gc();
