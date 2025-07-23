const v0 = [59395,6,21325];
v0.shift();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
function f5(a6, a7) {
    return a7;
}
v4.valueOf = f5;
const v8 = v0 + v4;
try { eval(v8); } catch (e) {}
gc();
