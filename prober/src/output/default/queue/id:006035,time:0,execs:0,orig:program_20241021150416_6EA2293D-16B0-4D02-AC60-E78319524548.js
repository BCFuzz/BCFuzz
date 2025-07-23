function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    const t4 = 0n;
    t4[1] = a5;
}
new F1();
gc();
