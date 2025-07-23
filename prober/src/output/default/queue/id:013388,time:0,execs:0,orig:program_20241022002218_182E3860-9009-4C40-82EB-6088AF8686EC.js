function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { a3(F0); } catch (e) {}
    const v9 = new Uint8Array(209);
    for (const v10 in v9) {
        v10 in this;
    }
}
new F0(F0, F0, F0, F0);
gc();
