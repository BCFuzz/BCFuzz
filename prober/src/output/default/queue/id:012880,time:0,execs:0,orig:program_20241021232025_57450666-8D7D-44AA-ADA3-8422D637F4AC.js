function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    Symbol.toStringTag;
}
class C7 extends F0 {
}
const v8 = new C7();
const v9 = v8.constructor;
new v9(v9, C7);
gc();
