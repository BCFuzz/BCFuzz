function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    delete RegExp.name;
}
new F1(F1, F1, RegExp);
gc();
