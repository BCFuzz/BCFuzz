for (let v0 = 0; v0 < 5; v0++) {
    const o15 = {
        set d(a2) {
            for (let i = 0; i < 25; i++) {
                function f3() {
                    return a2;
                }
                function f4() {
                    const o6 = {
                    };
                    const v8 = new Proxy(this, o6);
                    try { v8.toString(); } catch (e) {}
                }
                f3[Symbol.toPrimitive] = f4;
                const o12 = {
                    __proto__: f3,
                };
                Math.f16round(o12);
            }
        },
    };
    o15.d = o15;
}
gc();
