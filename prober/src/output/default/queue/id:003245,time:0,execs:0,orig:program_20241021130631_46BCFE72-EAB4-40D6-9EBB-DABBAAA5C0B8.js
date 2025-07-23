function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = F1.constructor;
    try { v6(a3, this, a3); } catch (e) {}
}
new F1("1073741825");
gc();
