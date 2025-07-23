function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a6(16n, 16n, a4, a3); } catch (e) {}
    const v10 = new Uint32Array(68);
    v10.includes(a4, a5);
}
new F1(F1, F1, F1, F1);
gc();
