function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o7 = {
    valueOf(a5) {
        undefined < this;
        return F0;
    },
};
o7[Symbol.toPrimitive] = Symbol;
class C9 extends F0 {
    constructor(a11, a12, a13) {
        super();
        try { o7.valueOf(); } catch (e) {}
    }
}
new C9();
gc();
