function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v6 = Uint16Array.from(v4);
try { v6.set(Uint16Array); } catch (e) {}
gc();
