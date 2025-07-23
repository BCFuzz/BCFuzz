function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    ~a3;
}
new F1(-1024n);
new F1();
gc();
