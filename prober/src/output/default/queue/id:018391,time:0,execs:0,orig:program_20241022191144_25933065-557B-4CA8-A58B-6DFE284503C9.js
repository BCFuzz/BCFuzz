function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = F1.prototype;
v5.valueOf = eval;
new F1(F1, v5);
gc();
