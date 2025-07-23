function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
const v7 = v6.toLocaleString;
try { v7(); } catch (e) {}
gc();
