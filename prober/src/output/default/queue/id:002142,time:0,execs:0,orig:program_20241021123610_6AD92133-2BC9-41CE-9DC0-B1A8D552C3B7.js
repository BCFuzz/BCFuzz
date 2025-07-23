function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(-1.0, a5); } catch (e) {}
    a6.c = 4.0;
}
new F3(4.0, 4.0);
new F3(4.0, -1.0);
new F3(4.0, 4.0);
gc();
