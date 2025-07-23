const v2 = [8,Int16Array];
const v3 = [59395,6,21325];
v3[1] = v2;
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
const v7 = v3 + v6;
try { eval(v7); } catch (e) {}
gc();
