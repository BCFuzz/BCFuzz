function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Date.parse("4TB");
}
new F1(F1, F1, F1, "4TB");
gc();
