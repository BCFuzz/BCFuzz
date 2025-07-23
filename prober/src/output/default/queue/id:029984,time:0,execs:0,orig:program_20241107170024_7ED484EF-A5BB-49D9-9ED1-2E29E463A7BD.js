for (let v2 = 0; v2 < 5; v2++) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const o14 = {
            ["eC"](a11, a12) {
                "object" in a12;
            },
        };
        try { o14.eC(11, "concat"); } catch (e) {}
        o14.eC(o14, F3);
    }
    const v17 = new F3();
    const v18 = v17.constructor;
    new v18(v18, v17);
    function f20(a21, a22, a23, a24) {
        for (let v25 = 0; v25 < 5; v25++) {
            const v26 = a21.__proto__;
            function f27(a28) {
                return v26;
            }
            Object.defineProperty(v26, "e", { configurable: true, enumerable: true, set: f27 });
        }
        return a21;
    }
    for (let v29 = 0; v29 < 10; v29++) {
        f20(f20);
    }
    for (let i33 = -3, i34 = 10; i33 < i34; i34--) {
    }
}
gc();
