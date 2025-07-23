function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    (-2n) ** 127n;
}
new F2();
gc();
