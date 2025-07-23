function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    (16n)["p" + "p"];
}
new F1(F1, 16n);
gc();
