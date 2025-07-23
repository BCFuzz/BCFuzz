function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(false); } catch (e) {}
    this.d = a3;
}
new F1();
new F1();
gc();
