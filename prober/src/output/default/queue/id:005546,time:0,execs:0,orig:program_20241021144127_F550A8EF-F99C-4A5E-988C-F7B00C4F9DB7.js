function f3(a4, a5) {
    return -9n + a5;
}
Array[Symbol.iterator] = f3;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a13(Array, a15, 6, WeakSet); } catch (e) {}
}
new F10(F10, F10, F10, F10);
gc();
