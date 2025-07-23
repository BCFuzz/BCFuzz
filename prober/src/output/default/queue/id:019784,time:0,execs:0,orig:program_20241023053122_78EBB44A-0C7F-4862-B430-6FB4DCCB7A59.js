function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = F1.constructor;
try { v5("0o7Il"); } catch (e) {}
gc();
