for (let v0 = 0; v0 < 25; v0++) {
    const o17 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return this;
                }
                function f4() {
                }
                Object.defineProperty(f3, "get", { enumerable: true, get: f4 });
                function f5() {
                    const v8 = new Proxy(this, this);
                    return v8.name;
                }
                f3[Symbol.toPrimitive] = f5;
                const o12 = {
                };
                const v14 = new Proxy(f3, o12);
                Math.expm1(v14);
            }
        },
    };
    o17.d = o17;
}
gc();
