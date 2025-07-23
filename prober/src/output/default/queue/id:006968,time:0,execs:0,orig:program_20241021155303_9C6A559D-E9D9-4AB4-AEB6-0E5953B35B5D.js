function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(F0); } catch (e) {}
    a2.arguments = a2;
}
const v6 = new F0(F0);
const v7 = v6.constructor;
try { new v7(); } catch (e) {}
gc();
