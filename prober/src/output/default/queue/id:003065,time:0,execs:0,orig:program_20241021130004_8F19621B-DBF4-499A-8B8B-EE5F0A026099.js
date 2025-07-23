function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    a3 / a3;
}
new F1(14n);
new F1();
gc();
