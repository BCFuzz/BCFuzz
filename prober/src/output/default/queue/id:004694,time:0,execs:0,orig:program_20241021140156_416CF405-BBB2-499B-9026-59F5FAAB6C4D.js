function F0() {
    if (!new.target) { throw 'must be called with new'; }
    ("number").bold().slice();
}
new F0();
gc();
