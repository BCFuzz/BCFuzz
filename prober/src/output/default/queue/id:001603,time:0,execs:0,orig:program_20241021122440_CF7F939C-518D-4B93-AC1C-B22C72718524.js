class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = C0.constructor;
    try { v5(this, a3); } catch (e) {}
}
new F1();
gc();
