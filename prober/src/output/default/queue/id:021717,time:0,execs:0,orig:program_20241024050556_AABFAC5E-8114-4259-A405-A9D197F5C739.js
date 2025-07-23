const v0 = [];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = a4.constructor;
    try { v7(a6, a3, v7); } catch (e) {}
}
new F1(v0, F1);
gc();
