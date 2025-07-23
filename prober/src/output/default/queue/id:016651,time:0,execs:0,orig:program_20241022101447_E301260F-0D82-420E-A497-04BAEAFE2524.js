const o14 = {
    set d(a1) {
        for (let i = 0; i < 25; i++) {
            function f2() {
                return f2;
            }
            function f3() {
                const o5 = {
                };
                const v7 = new Proxy(this, o5);
                v7.length;
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
