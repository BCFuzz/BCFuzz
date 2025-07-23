function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
try { v3(v3); } catch (e) {}
gc();
