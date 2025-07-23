function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new String(7);
    new Uint8Array(v6);
}
new F0(F0, F0);
gc();
