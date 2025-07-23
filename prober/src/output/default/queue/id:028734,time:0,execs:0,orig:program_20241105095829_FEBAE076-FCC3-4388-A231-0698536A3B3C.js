for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const o13 = {
            ["eC"](a10, a11) {
                Object.defineProperty(a11, "object", { configurable: true, value: -1934672876n });
                "object" in a11;
            },
        };
        try { o13.eC(); } catch (e) {}
        try { o13.eC(); } catch (e) {}
        o13.eC(o13, F2);
    }
    const v17 = new F2(v1, F2, F2);
    const t14 = v17.constructor;
    new t14();
    new F2();
}
gc();
