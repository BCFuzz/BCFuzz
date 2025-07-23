for (let v0 = 0; v0 < 25; v0++) {
    const o23 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                }
                function f4() {
                    function f6(a7, a8) {
                        try { this["o"](); } catch (e) {}
                        return v0;
                    }
                    this.get = f6;
                    const v12 = new Proxy(this, this);
                    v12.name;
                }
                f3[Symbol.toPrimitive] = f4;
                const o16 = {
                };
                const v18 = new Proxy(f3, o16);
                const o19 = {
                    __proto__: f3,
                };
                Math.expm1(v18);
                Math.f16round(o19);
            }
        },
    };
    o23.d = o23;
}
gc();
