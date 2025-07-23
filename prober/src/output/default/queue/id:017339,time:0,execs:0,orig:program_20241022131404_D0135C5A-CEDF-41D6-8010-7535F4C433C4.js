const v0 = [59395,6,21325];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
function f4(a5, a6) {
}
v3.valueOf = f4;
const v7 = v0 + v3;
try { eval(v7); } catch (e) {}
gc();
