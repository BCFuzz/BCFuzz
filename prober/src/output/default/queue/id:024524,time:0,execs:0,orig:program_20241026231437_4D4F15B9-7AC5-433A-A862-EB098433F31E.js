for (let i2 = 0, i3 = 10;
    (() => {
        for (let v4 = 0; v4 < 25; v4++) {
            const o21 = {
                set d(a6) {
                    for (let i = 0; i < 5; i++) {
                        function f7() {
                            return f7;
                        }
                        function f8() {
                        }
                        Object.defineProperty(f7, "get", { enumerable: true, get: f8 });
                        function f9() {
                            const v12 = new Proxy(this, this);
                            v12.name;
                            return i2;
                        }
                        f7[Symbol.toPrimitive] = f9;
                        const o16 = {
                        };
                        const v18 = new Proxy(f7, o16);
                        Math.expm1(v18);
                    }
                },
            };
            o21.d = o21;
        }
        return i2 < i3;
    })();
    (() => {
        for (let i27 = -3, i28 = 10; i27 < i28; i28--) {
        }
        i3--;
    })()) {
}
gc();
