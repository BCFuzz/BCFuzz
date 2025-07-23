function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.__proto__.constructor;
    try { new v3(); } catch (e) {}
}
new F0();
gc();
