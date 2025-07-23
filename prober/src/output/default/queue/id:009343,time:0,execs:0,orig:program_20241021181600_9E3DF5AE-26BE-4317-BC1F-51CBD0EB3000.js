function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a5(6n, 6n); } catch (e) {}
    this.isPrototypeOf() - a5;
}
new F2(268435440, F2);
gc();
