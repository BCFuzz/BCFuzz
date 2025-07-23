function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = -a3;
    const v6 = new Uint32Array();
    const v7 = v6.lastIndexOf;
    try { v7.call(v4); } catch (e) {}
}
new F1(5n);
gc();
