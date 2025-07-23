for (let v0 = 0; v0 < 25; v0++) {
    const o15 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return v0;
                }
                function f4() {
                    const o6 = {
                    };
                    const v8 = new Proxy(this, o6);
                    v8.length;
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
