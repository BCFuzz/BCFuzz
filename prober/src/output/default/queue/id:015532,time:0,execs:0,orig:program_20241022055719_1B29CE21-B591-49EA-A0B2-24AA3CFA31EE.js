const o14 = {
    set d(a1) {
        for (let i = 0; i < 100; i++) {
            function f2() {
                return this;
            }
            function f3() {
                const o5 = {
                };
                const v7 = new Proxy(this, o5);
                try { v7.toString(a1, o5, this, o5, Proxy); } catch (e) {}
            }
            f2[Symbol.toPrimitive] = f3;
            const o11 = {
                __proto__: f2,
            };
            Math.f16round(o11);
        }
    },
};
o14.d = o14;
gc();
