function F1() {
    if (!new.target) { throw 'must be called with new'; }
    ([-1,2]).indexOf(Infinity);
}
new F1();
gc();
