function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = this.constructor;
    try { new v2(); } catch (e) {}
}
class C4 extends F0 {
}
new C4();
gc();
