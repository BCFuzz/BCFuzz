function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
Number.isNaN(F0);
gc();
