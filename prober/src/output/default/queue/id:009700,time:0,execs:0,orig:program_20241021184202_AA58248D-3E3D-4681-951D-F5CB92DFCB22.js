for (let v0 = 0; v0 < 5; v0++) {
    async function* f1(a2, a3) {
        return v0;
    }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F4();
    const v7 = new F4();
    const v9 = new Set();
    const v12 = new Int8Array(255);
    for (const v13 in v12) {
    }
    v6[v7] = v9;
    f1(v12, v12).next();
}
gc();
