const v2 = new Int16Array(4096);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = Int32Array.from(this);
    try { v10.set(v2); } catch (e) {}
}
new F3(F3, Int16Array, F3, v2);
gc();
