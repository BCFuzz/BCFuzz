function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new SharedArrayBuffer();
    const v6 = v5.grow;
    try { v6(SharedArrayBuffer, v6); } catch (e) {}
}
new F0(F0, F0);
gc();
