for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
    for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
    }
}
const v22 = [59395,6,21325];
function f23() {
    return v22 instanceof Array;
}
v22.toString = f23;
const v26 = v22 + Date();
try { eval(v26); } catch (e) {}
gc();
