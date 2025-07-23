function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Int16Array(a3);
    v7.toSorted(a5);
}
new F1();
gc();
