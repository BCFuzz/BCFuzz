function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 32; v4++) {
        const v6 = "p" + v4;
        this[v6];
        this[v6] = v4;
    }
    const v10 = new Uint32Array(1003);
    for (const v11 in v10) {
    }
}
new F0();
gc();
