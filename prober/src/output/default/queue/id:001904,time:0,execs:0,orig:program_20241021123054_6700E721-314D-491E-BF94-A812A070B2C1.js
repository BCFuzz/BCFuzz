function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = a3 + a3;
    v5 * v5;
}
new F1(-4294967296n);
gc();
