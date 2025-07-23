function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new BigUint64Array(118);
try { v8.sort(F1); } catch (e) {}
gc();
