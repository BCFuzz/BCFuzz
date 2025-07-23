function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float64Array();
    const v8 = v7.toString;
    try { v8(F0, a3); } catch (e) {}
}
new F0();
gc();
