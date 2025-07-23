function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 25; v4++) {
        const v6 = "p" + v4;
        const v7 = v6.substring;
        try { v7(); } catch (e) {}
        this[v6];
        this[v6] = v4;
    }
    const v12 = new Uint32Array(1003);
    for (const v13 in v12) {
    }
}
new F0();
gc();
