function F0() {
    if (!new.target) { throw 'must be called with new'; }
    noInline(F0);
}
new F0();
gc();
