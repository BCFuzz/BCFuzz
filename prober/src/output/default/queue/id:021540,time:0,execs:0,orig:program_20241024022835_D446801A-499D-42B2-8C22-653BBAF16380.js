function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
v5.valueOf = Date;
const v7 = "-13" + v5;
try { eval(v7); } catch (e) {}
gc();
