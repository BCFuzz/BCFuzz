function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a6(Array, a8, 6, WeakSet); } catch (e) {}
}
new F3(F3, F3, F3, F3);
gc();
