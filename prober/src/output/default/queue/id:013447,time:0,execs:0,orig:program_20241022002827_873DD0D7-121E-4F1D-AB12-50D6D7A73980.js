function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = "p" + v2;
try { eval(v4); } catch (e) {}
gc();
