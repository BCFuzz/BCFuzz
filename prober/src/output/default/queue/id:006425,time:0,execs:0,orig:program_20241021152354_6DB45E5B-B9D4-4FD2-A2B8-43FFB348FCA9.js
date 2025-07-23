function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { transferArrayBuffer(); } catch (e) {}
}
new F0();
gc();
