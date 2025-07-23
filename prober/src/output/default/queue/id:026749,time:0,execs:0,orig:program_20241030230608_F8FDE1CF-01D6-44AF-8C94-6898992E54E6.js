function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor = -281338161;
}
const v3 = new F0();
const o4 = {
    __proto__: v3,
};
class C5 extends F0 {
    a = o4;
    constructor(a7, a8) {
        super();
        const v9 = this.a;
        try { v9(); } catch (e) {}
    }
}
new C5();
gc();
