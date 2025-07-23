function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(a4); } catch (e) {}
    a4 + a4;
}
new F2(-30573);
new F2(-39180);
gc();
