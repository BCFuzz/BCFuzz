for (let v0 = 0; v0 < 25; v0++) {
    const o15 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return f3;
                }
                function f4() {
                    new Promise(this);
                }
                f3[Symbol.toPrimitive] = f4;
                const o10 = {
                };
                const v12 = new Proxy(f3, o10);
                Math.expm1(v12);
            }
        },
    };
    o15.d = o15;
}
gc();
