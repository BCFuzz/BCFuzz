function F1() {
    if (!new.target) { throw 'must be called with new'; }
    ("prototype").constructor.fromCodePoint(3129);
}
new F1();
gc();
