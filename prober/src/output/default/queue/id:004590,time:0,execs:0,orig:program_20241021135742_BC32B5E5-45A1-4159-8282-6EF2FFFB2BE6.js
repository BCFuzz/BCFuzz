function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o10 = {
    valueOf(a5) {
        if (!(undefined < this)) {
            v2[13];
            Array(a5);
        }
        return a5;
    },
};
class C11 extends F0 {
    constructor(a13, a14, a15) {
        super();
        try { o10.valueOf(); } catch (e) {}
    }
}
new C11(undefined, v2, v2);
gc();
