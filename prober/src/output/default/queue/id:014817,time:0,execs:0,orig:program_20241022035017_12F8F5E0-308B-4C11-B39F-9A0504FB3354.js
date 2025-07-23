function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Float64Array();
    try { v8.set(v8, 1883); } catch (e) {}
}
new F1(1883, 1883, 1883, F1);
gc();
