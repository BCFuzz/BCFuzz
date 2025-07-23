function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    return 4096n;
}
F1.toString = f3;
F1 < 10;
gc();
