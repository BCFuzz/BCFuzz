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
    const v15 = new F1(v0, v0, F1);
    const t12 = v15.constructor;
    new t12();
    const v18 = new F1(v0, v15, v15);
    const t15 = v18.constructor;
    new t15();
    const v21 = v18.constructor;
    v21.object = v15;
    new v21();
}
gc();
