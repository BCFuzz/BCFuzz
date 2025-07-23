function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = ("TucB").constructor;
    const v9 = v6().toLocaleLowerCase(v6, this);
    const v11 = new Int32Array();
    const v14 = new Uint32Array(1003);
    for (const v15 in v14) {
        for (let v16 = 0; v16 < 5; v16++) {
            v11[v9 + 3943] = v16;
        }
    }
}
new F0();
gc();
