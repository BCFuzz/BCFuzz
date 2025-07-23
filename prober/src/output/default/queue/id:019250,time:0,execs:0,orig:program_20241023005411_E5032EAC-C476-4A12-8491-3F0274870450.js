for (let v0 = 0; v0 < 25; v0++) {
    const o15 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return f3;
                }
                function f4() {
                    const v7 = new Proxy(this, this);
                    v7.name;
                    v7.length;
                    return v0;
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
