function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    new Boolean(a2);
}
new F0();
gc();
