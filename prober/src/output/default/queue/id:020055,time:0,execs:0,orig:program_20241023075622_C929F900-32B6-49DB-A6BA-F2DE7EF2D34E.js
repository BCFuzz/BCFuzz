for (let i2 = 0, i3 = 10;
    (() => {
        function f4() {
        }
        class C5 extends f4 {
            toString(a7) {
                for (let i = 0; i < 5; i++) {
                    for (let v8 = 0; v8 < 25; v8++) {
                        this["p" + v8] = v8;
                    }
                }
            }
        }
        const v11 = new C5();
        const v12 = new C5();
        function f13() {
            return v11;
        }
        function f14(a15) {
            return f14;
        }
        Object.defineProperty(v12, "p10", { configurable: true, get: f13, set: f14 });
        "a" << v12;
        const o19 = {
            [v11]: -2147483647,
        };
        return i2 < i3;
    })();
    i3--) {
}
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();
