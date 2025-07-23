for (let v0 = 0; v0 < 25; v0++) {
    const o18 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return this;
                }
                function f4() {
                    const v7 = new Proxy(this, this);
                    v7.name;
                    return v0;
                }
                f3[Symbol.toPrimitive] = f4;
                const o11 = {
                };
                const v13 = new Proxy(f3, o11);
                const o14 = {
                    __proto__: f3,
                };
                Math.expm1(v13);
                Math.f16round(o14);
            }
        },
    };
    o18.d = o18;
}
gc();
