function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    const v8 = Math.max();
    v8 - v8;
}
const v10 = new F0(F0, F0, F0);
const t8 = v10.constructor;
new t8();
gc();
