function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Int32Array();
    const v8 = new Uint32Array(1003);
    for (const v9 in v8) {
        for (let v10 = 0; v10 < 5; v10++) {
            v5[v9] = v10;
        }
    }
}
new F0();
gc();
