function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(a4); } catch (e) {}
    a4 & a4;
}
new F2(536870888n);
new F2(9007199254740990n);
gc();
