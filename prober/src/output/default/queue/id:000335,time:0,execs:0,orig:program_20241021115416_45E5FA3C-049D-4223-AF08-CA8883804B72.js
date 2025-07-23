function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(); } catch (e) {}
}
new F6();
gc();
