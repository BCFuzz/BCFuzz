function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = 256 ** 1073741823;
    const v5 = v4 * v4;
    const v7 = new Float32Array();
    try { v7.with(v5); } catch (e) {}
}
new F2();
gc();
