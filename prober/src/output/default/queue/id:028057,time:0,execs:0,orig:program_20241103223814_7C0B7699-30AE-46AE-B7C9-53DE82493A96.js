for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const o12 = {
            ["eC"](a9, a10) {
                "object" in a10;
            },
        };
        o12.eC(o12, F1);
        try { o12.eC(); } catch (e) {}
    }
    const v15 = new F1();
    const v16 = new F1();
    const v17 = v16.constructor;
    v17.object = v15;
    new v17();
}
gc();
