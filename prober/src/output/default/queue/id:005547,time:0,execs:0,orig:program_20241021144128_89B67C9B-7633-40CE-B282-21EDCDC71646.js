Object.defineProperty(Array, Symbol.iterator, { configurable: true, value: Date });
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a9(Array, a11, 6, WeakSet); } catch (e) {}
}
new F6(F6, F6, F6, F6);
gc();
