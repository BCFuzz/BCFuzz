function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(a2, this); } catch (e) {}
    Date.parse(a3);
}
new F0(F0, F0, F0);
gc();
