function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = ("DVVte").big();
    const v7 = new Uint32Array(1003);
    for (const v8 in v7) {
        for (let v9 = 0; v9 < 5; v9++) {
            const v10 = v8 + v9;
            v10.strike(F0, v10);
            v4[v8] = v9;
        }
    }
}
new F0();
gc();
