const v0 = [59395,6,21325];
v0[0] = v0;
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v4 = v0 + v3;
try { eval(v4); } catch (e) {}
gc();
