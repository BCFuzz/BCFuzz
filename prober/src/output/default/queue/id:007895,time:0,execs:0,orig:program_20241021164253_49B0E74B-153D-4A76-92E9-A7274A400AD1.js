function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Int32Array();
    const v6 = v5.sort;
    try { v6(); } catch (e) {}
    const v10 = new Uint32Array(1003);
    for (const v11 in v10) {
        for (let v12 = 0; v12 < 5; v12++) {
            v5[v11] = v12;
        }
    }
}
new F0();
gc();
