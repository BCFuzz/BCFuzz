function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v6 = "-13" + v4;
try { eval(v6); } catch (e) {}
gc();
