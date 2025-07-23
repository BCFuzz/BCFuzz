function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 14;
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    async function* f5(a6, a7, a8) {
    }
}
new F0();
gc();
