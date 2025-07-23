for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const o12 = {
            ["eC"](a9, a10) {
                function f11() {
                    return F2;
                }
                a9.valueOf = f11;
            },
        };
        o12.eC(11);
    }
    new F2();
    for (let v15 = 0; v15 < 5; v15++) {
        const v17 = (v15 >>> v15).__proto__;
        function f18(a19) {
            return a19;
        }
        Object.defineProperty(v17, "e", { configurable: true, enumerable: true, set: f18 });
    }
    for (let i22 = -3, i23 = 10; i22 < i23; i23--) {
    }
}
gc();
