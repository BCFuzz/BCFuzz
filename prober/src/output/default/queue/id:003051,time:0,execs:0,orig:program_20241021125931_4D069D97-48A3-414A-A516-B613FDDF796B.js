function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(a2, a2); } catch (e) {}
    -a3;
}
new F0();
new F0();
const v11 = new WeakMap();
new F0(v11);
gc();
