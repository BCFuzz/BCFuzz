function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toStringTag] = this;
    this.c = a3;
}
new F1();
const v9 = new F1();
new F1(v9, v9);
class C11 extends F1 {
    set c(a13) {
        const v17 = this[Symbol.toStringTag].constructor;
        try { new v17(); } catch (e) {}
    }
}
new C11();
gc();
