const v2 = new WeakMap();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = a9.constructor;
    try { new v10(a6); } catch (e) {}
}
new F4("nZq", -5.0, -5.0, v2);
gc();
