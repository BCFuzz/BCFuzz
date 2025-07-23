function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = this.constructor;
    try { new v2(); } catch (e) {}
    delete this.f;
}
new F0();
gc();
