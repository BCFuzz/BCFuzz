function f3(a4) {
    return a4;
}
Array[Symbol.iterator] = f3;
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a11(Array, a13, 6, WeakSet); } catch (e) {}
}
new F8(268435441, F8, F8, F8);
gc();
