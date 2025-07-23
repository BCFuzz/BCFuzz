for (let v0 = 0; v0 < 25; v0++) {
    const o17 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                }
                function f4() {
                    this.constructor;
                    const o7 = {
                    };
                    const v9 = new Proxy(this, o7);
                    v9.name;
                    v9.length;
                    return v0;
                }
                f3[Symbol.toPrimitive] = f4;
                const o14 = {
                    __proto__: f3,
                };
                Math.f16round(o14);
            }
        },
    };
    o17.d = o17;
}
gc();
