function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
}
class C7 extends F1 {
    #g = -256;
    static {
        new this();
    }
}
gc();
