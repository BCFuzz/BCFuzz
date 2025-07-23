function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Int32Array.from(this);
    try { v8.set(Float32Array); } catch (e) {}
    const v10 = new Int32Array();
    const v12 = v10.sort().sort;
    try { v12(); } catch (e) {}
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    }
}
new F1(F1, F1, F1, Float32Array);
gc();
