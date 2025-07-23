for (let i = 0; i < 5; i++) {
    function f1(a2) {
        class C3 {
            static set b(a5) {
                Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
            }
        }
        const v7 = new C3();
        const o8 = {
            __proto__: C3,
        };
        C3.b = v7;
        for (let v9 = 0; v9 < 5; v9++) {
            211722520 instanceof o8.__proto__;
            for (let i = 0; i < 5; i++) {
            }
        }
        return f1;
    }
    f1();
}
gc();
