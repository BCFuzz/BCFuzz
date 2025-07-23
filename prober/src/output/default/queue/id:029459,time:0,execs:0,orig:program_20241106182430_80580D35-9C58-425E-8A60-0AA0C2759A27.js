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
    new F1();
    function f16(a17, a18, a19, a20) {
        for (let v21 = 0; v21 < 5; v21++) {
            const v22 = a17.__proto__;
            function f23(a24) {
                return a17;
            }
            Object.defineProperty(v22, "e", { configurable: true, enumerable: true, set: f23 });
        }
        return a20;
    }
    for (let v25 = 0; v25 < 25; v25++) {
        f16(f16);
    }
    for (let i29 = -3, i30 = 10; i29 < i30; i30--) {
    }
}
gc();
