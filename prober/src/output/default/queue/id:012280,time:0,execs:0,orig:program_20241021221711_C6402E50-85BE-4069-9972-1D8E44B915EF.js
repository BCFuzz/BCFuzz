for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = new Uint32Array(a4, v0, a3);
        for (const v10 of v7["values"]()) {
        }
    }
    new F1(F1, F1, v0);
}
gc();
